;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4c850a94-06ee-4cd0-98cb-f977db925008",e._sentryDebugIdIdentifier="sentry-dbid-4c850a94-06ee-4cd0-98cb-f977db925008")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { r as redis } from '../../../chunks/redis_CkM-_UY_.mjs';
import { z } from 'zod';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2["PAGE_VIEW"] = "page_view";
  EventType2["USER_ACTION"] = "user_action";
  EventType2["THERAPY_SESSION"] = "therapy_session";
  EventType2["NOTIFICATION"] = "notification";
  EventType2["ERROR"] = "error";
  EventType2["SECURITY"] = "security";
  EventType2["PERFORMANCE"] = "performance";
  EventType2["CUSTOM"] = "custom";
  return EventType2;
})(EventType || {});
var EventPriority = /* @__PURE__ */ ((EventPriority2) => {
  EventPriority2["LOW"] = "low";
  EventPriority2["NORMAL"] = "normal";
  EventPriority2["HIGH"] = "high";
  EventPriority2["CRITICAL"] = "critical";
  return EventPriority2;
})(EventPriority || {});
const EventDataSchema = z.object({
  type: z.nativeEnum(EventType),
  priority: z.nativeEnum(EventPriority).default("normal" /* NORMAL */),
  userId: z.string().optional(),
  sessionId: z.string().optional(),
  timestamp: z.number().default(() => Date.now()),
  properties: z.record(z.unknown()).default({}),
  metadata: z.record(z.unknown()).default({})
});
const EventSchema = EventDataSchema.extend({
  id: z.string(),
  processedAt: z.number().optional(),
  error: z.string().optional()
});
const MetricSchema = z.object({
  name: z.string(),
  value: z.number(),
  timestamp: z.number().default(() => Date.now()),
  tags: z.record(z.string()).default({})
});
function isEvent(value) {
  try {
    EventSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}
function isMetric(value) {
  try {
    MetricSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}
function isValidEventJson(json) {
  try {
    const parsed = JSON.parse(json);
    return isEvent(parsed);
  } catch {
    return false;
  }
}
function isValidMetricJson(json) {
  try {
    const parsed = JSON.parse(json);
    return isMetric(parsed);
  } catch {
    return false;
  }
}
class AnalyticsError extends Error {
  constructor(message, code, details) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = "AnalyticsError";
  }
}
class ValidationError extends AnalyticsError {
  constructor(message, details) {
    super(message, "VALIDATION_ERROR", details);
    this.name = "ValidationError";
  }
}
class ProcessingError extends AnalyticsError {
  constructor(message, details) {
    super(message, "PROCESSING_ERROR", details);
    this.name = "ProcessingError";
  }
}

const logger$1 = createBuildSafeLogger("analytics");
class AnalyticsService {
  wsClients;
  retentionDays;
  batchSize;
  redisClient;
  constructor(options = {}) {
    this.wsClients = /* @__PURE__ */ new Map();
    this.retentionDays = options.retentionDays || 90;
    this.batchSize = options.batchSize || 100;
    this.redisClient = redis;
  }
  /**
   * Track an event
   */
  async trackEvent(data) {
    try {
      const validatedData = EventDataSchema.parse(data);
      const eventId = crypto.randomUUID();
      const event = EventSchema.parse({
        ...validatedData,
        id: eventId
      });
      await this.redisClient.lpush("analytics:events:queue", JSON.stringify(event));
      await this.storeEventInTimeSeries(event);
      this.notifySubscribers(event);
      return eventId;
    } catch (error) {
      logger$1.error("Error tracking event:", error);
      throw new ValidationError("Invalid event data", error);
    }
  }
  /**
   * Track a metric
   */
  async trackMetric(data) {
    try {
      const metric = MetricSchema.parse(data);
      await this.redisClient.zadd(
        `analytics:metrics:${metric.name}`,
        metric.timestamp,
        JSON.stringify(metric)
      );
      if (metric.tags && Object.keys(metric.tags).length > 0) {
        await this.redisClient.hset(
          `analytics:metrics:tags:${metric.name}`,
          metric.timestamp.toString(),
          JSON.stringify(metric.tags)
        );
      }
    } catch (error) {
      logger$1.error("Error tracking metric:", error);
      throw new ValidationError("Invalid metric data", error);
    }
  }
  /**
   * Process queued events
   */
  async processEvents() {
    try {
      const events = await this.redisClient.lrange(
        "analytics:events:queue",
        0,
        this.batchSize - 1
      );
      if (events.length === 0) {
        return;
      }
      for (const eventJson of events) {
        try {
          if (!isValidEventJson(eventJson)) {
            logger$1.error("Invalid event JSON:", eventJson);
            continue;
          }
          const event = JSON.parse(eventJson);
          const processedEvent = EventSchema.parse({
            ...event,
            processedAt: Date.now()
          });
          await this.redisClient.hset(
            `analytics:events:processed:${processedEvent.type}`,
            processedEvent.id,
            JSON.stringify(processedEvent)
          );
          await this.redisClient.lrem("analytics:events:queue", 1, eventJson);
        } catch (error) {
          logger$1.error("Error processing event:", error);
          throw new ProcessingError("Failed to process event", error);
        }
      }
    } catch (error) {
      logger$1.error("Error in event processing:", error);
      throw new ProcessingError("Event processing failed", error);
    }
  }
  /**
   * Get events by type and time range
   */
  async getEvents(options) {
    const {
      type,
      limit = 100,
      offset = 0
    } = options;
    try {
      const eventJsons = await this.redisClient.zrangebyscore(
        `analytics:events:time:${type}`,
        options.startTime ?? 0,
        options.endTime ?? "+inf",
        "WITHSCORES",
        "LIMIT",
        offset.toString(),
        limit.toString()
      );
      return eventJsons.map((json) => {
        try {
          if (!isValidEventJson(json)) {
            logger$1.warn("Invalid event JSON in storage:", json);
            return null;
          }
          return JSON.parse(json);
        } catch (error) {
          logger$1.error("Error parsing event JSON:", error);
          return null;
        }
      }).filter((event) => event !== null);
    } catch (error) {
      logger$1.error("Error getting events:", error);
      throw new ProcessingError("Failed to retrieve events", error);
    }
  }
  /**
   * Get metric values by name and time range
   */
  async getMetrics(options) {
    const {
      name,
      tags
    } = options;
    try {
      const metricJsons = await this.redisClient.zrangebyscore(
        `analytics:metrics:${name}`,
        options.startTime ?? 0,
        options.endTime ?? "+inf",
        "WITHSCORES"
      );
      const metrics = metricJsons.map((json) => {
        try {
          if (!isValidMetricJson(json)) {
            logger$1.warn("Invalid metric JSON in storage:", json);
            return null;
          }
          return JSON.parse(json);
        } catch (error) {
          logger$1.error("Error parsing metric JSON:", error);
          return null;
        }
      }).filter((metric) => metric !== null);
      if (tags) {
        return metrics.filter((metric) => {
          return Object.entries(tags).every(
            ([key, value]) => metric.tags[key] === value
          );
        });
      }
      return metrics;
    } catch (error) {
      logger$1.error("Error getting metrics:", error);
      throw new ProcessingError("Failed to retrieve metrics", error);
    }
  }
  /**
   * Register a WebSocket client for real-time updates
   */
  registerClient(userId, ws) {
    this.wsClients.set(userId, ws);
    ws.on("close", () => {
      this.wsClients.delete(userId);
    });
  }
  /**
   * Check if a client is registered
   */
  hasClient(userId) {
    return this.wsClients.has(userId);
  }
  /**
   * Clean up old events and metrics
   */
  async cleanup() {
    try {
      const cutoff = Date.now() - this.retentionDays * 24 * 60 * 60 * 1e3;
      for (const type of Object.values(EventType)) {
        await this.redisClient.zremrangebyscore(
          `analytics:events:time:${type}`,
          0,
          cutoff
        );
      }
      const metricKeys = await this.redisClient.keys("analytics:metrics:*");
      for (const key of metricKeys) {
        if (!key.includes(":tags:")) {
          await this.redisClient.zremrangebyscore(key, 0, cutoff);
        }
      }
      logger$1.info("Analytics cleanup completed");
    } catch (error) {
      logger$1.error("Error in analytics cleanup:", error);
      throw new ProcessingError("Cleanup operation failed", error);
    }
  }
  /**
   * Store event in time series for efficient querying
   */
  async storeEventInTimeSeries(event) {
    await this.redisClient.zadd(
      `analytics:events:time:${event.type}`,
      event.timestamp,
      JSON.stringify(event)
    );
  }
  /**
   * Notify WebSocket subscribers of new events
   */
  notifySubscribers(event) {
    if (event.userId) {
      const ws = this.wsClients.get(event.userId);
      if (ws) {
        const message = {
          type: "analytics_event",
          event
        };
        ws.send(JSON.stringify(message));
      }
    }
  }
}

const logger = createBuildSafeLogger("analytics-dashboard-api");
function validateFilters(filters) {
  if (!filters || typeof filters !== "object") {
    throw new Error("Invalid filters object");
  }
  const { timeRange, userSegment, skillCategory } = filters;
  if (!timeRange || !["7d", "30d", "90d", "1y"].includes(timeRange)) {
    throw new Error("Invalid timeRange. Must be one of: 7d, 30d, 90d, 1y");
  }
  if (userSegment && !["all", "new", "returning"].includes(userSegment)) {
    throw new Error("Invalid userSegment. Must be one of: all, new, returning");
  }
  if (skillCategory && !["all", "therapeutic", "technical", "interpersonal"].includes(skillCategory)) {
    throw new Error("Invalid skillCategory. Must be one of: all, therapeutic, technical, interpersonal");
  }
  return {
    timeRange,
    userSegment: userSegment || "all",
    skillCategory: skillCategory || "all"
  };
}
function getTimeRangeInMs(timeRange) {
  const timeRanges = {
    "7d": 7 * 24 * 60 * 60 * 1e3,
    "30d": 30 * 24 * 60 * 60 * 1e3,
    "90d": 90 * 24 * 60 * 60 * 1e3,
    "1y": 365 * 24 * 60 * 60 * 1e3
  };
  return timeRanges[timeRange] || timeRanges["7d"];
}
function aggregateSessionData(events, timeRange) {
  const daysMapping = { "7d": 7, "30d": 30, "90d": 90, "1y": 365 };
  const daysCount = daysMapping[timeRange] ?? 7;
  const groupedData = /* @__PURE__ */ new Map();
  for (let i = 0; i < daysCount; i++) {
    const date = new Date(Date.now() - i * 24 * 60 * 60 * 1e3);
    const dateKey = date.toISOString().split("T")[0];
    if (dateKey) {
      groupedData.set(dateKey, {
        date: dateKey,
        sessions: 0,
        newUsers: 0,
        returningUsers: 0,
        averageDuration: 0
      });
    }
  }
  events.forEach((event) => {
    const date = new Date(event.timestamp).toISOString().split("T")[0];
    if (date) {
      const existing = groupedData.get(date);
      if (existing) {
        existing.sessions += 1;
        if (event.properties?.["isNewUser"]) {
          existing.newUsers = (existing.newUsers || 0) + 1;
        } else {
          existing.returningUsers = (existing.returningUsers || 0) + 1;
        }
        if (typeof event.properties?.["duration"] === "number") {
          existing.averageDuration = ((existing.averageDuration || 0) + event.properties["duration"]) / 2;
        }
      }
    }
  });
  return Array.from(groupedData.values()).reverse();
}
function processSkillProgress(metrics) {
  const skillCategories = {
    active_listening: "interpersonal",
    empathy: "therapeutic",
    cbt_techniques: "therapeutic",
    crisis_management: "technical"
  };
  return Object.entries(metrics).map(([skillName, skillMetrics]) => {
    const currentScore = skillMetrics[skillMetrics.length - 1]?.value || 0;
    const previousScore = skillMetrics.length > 1 ? skillMetrics[skillMetrics.length - 2]?.value : currentScore;
    const trend = previousScore !== void 0 ? currentScore > previousScore ? "up" : currentScore < previousScore ? "down" : "stable" : "stable";
    return {
      skill: skillName.split("_").map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" "),
      score: Math.round(currentScore),
      previousScore: Math.round(previousScore ?? currentScore),
      trend,
      category: skillCategories[skillName] || "technical"
    };
  });
}
async function calculateTrend(analyticsService, metricName, timeRange) {
  try {
    const currentPeriod = getTimeRangeInMs(timeRange);
    const endTime = Date.now();
    const currentStart = endTime - currentPeriod;
    const previousStart = currentStart - currentPeriod;
    const [current, previous] = await Promise.all([
      analyticsService.getMetrics({
        name: metricName,
        startTime: currentStart,
        endTime
      }),
      analyticsService.getMetrics({
        name: metricName,
        startTime: previousStart,
        endTime: currentStart
      })
    ]);
    const currentValue = current.reduce((sum, m) => sum + m.value, 0);
    const previousValue = previous.reduce((sum, m) => sum + m.value, 0);
    if (previousValue === 0) {
      return void 0;
    }
    const changePercent = (currentValue - previousValue) / previousValue * 100;
    return {
      value: Math.abs(Math.round(changePercent)),
      direction: changePercent > 0 ? "up" : changePercent < 0 ? "down" : "stable",
      period: `vs previous ${timeRange}`
    };
  } catch (error) {
    logger.error(`Failed to calculate trend for ${metricName}`, { error });
    return void 0;
  }
}
const POST = async ({ request }) => {
  const startTime = Date.now();
  try {
    const body = await request.json();
    const filters = validateFilters(body);
    logger.info("Processing analytics dashboard request", { filters });
    const analyticsService = new AnalyticsService();
    const timeRangeMs = getTimeRangeInMs(filters.timeRange);
    const endTime = Date.now();
    const startTimeQuery = endTime - timeRangeMs;
    const [sessionEvents, skillMetrics, summaryMetrics] = await Promise.all([
      // Session events
      analyticsService.getEvents({
        type: EventType.THERAPY_SESSION,
        startTime: startTimeQuery,
        endTime
      }),
      // Skill metrics
      Promise.all([
        analyticsService.getMetrics({ name: "active_listening", startTime: startTimeQuery, endTime }),
        analyticsService.getMetrics({ name: "empathy", startTime: startTimeQuery, endTime }),
        analyticsService.getMetrics({ name: "cbt_techniques", startTime: startTimeQuery, endTime }),
        analyticsService.getMetrics({ name: "crisis_management", startTime: startTimeQuery, endTime })
      ]).then((results) => ({
        active_listening: results[0],
        empathy: results[1],
        cbt_techniques: results[2],
        crisis_management: results[3]
      })),
      // Summary metrics
      Promise.all([
        analyticsService.getMetrics({ name: "total_sessions", startTime: startTimeQuery, endTime }),
        analyticsService.getMetrics({ name: "completion_rate", startTime: startTimeQuery, endTime }),
        analyticsService.getMetrics({ name: "average_rating", startTime: startTimeQuery, endTime })
      ])
    ]);
    const sessionMetrics = aggregateSessionData(sessionEvents, filters.timeRange);
    const skillProgress = processSkillProgress(skillMetrics);
    const [sessionCount, completionRate, avgRating] = summaryMetrics;
    const summaryStats = [
      {
        value: sessionCount.reduce((sum, m) => sum + m.value, 0),
        label: "Total Sessions",
        color: "blue",
        trend: await calculateTrend(analyticsService, "total_sessions", filters.timeRange)
      },
      {
        value: Math.round(completionRate.reduce((sum, m) => sum + m.value, 0) / Math.max(completionRate.length, 1) * 100),
        label: "Completion Rate (%)",
        color: "green",
        trend: await calculateTrend(analyticsService, "completion_rate", filters.timeRange)
      },
      {
        value: Math.round(avgRating.reduce((sum, m) => sum + m.value, 0) / Math.max(avgRating.length, 1) * 10) / 10,
        label: "Avg. Rating",
        color: "purple",
        trend: await calculateTrend(analyticsService, "average_rating", filters.timeRange)
      }
    ];
    const responseData = {
      sessionMetrics,
      skillProgress,
      summaryStats
    };
    const processingTime = Date.now() - startTime;
    logger.info("Analytics dashboard request completed", {
      filters,
      processingTime,
      dataPoints: {
        sessions: sessionMetrics.length,
        skills: skillProgress.length,
        summaries: summaryStats.length
      }
    });
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=300"
        // Cache for 5 minutes
      }
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error("Analytics dashboard request failed", { error, processingTime });
    const apiError = {
      code: error instanceof Error && error.message.includes("Invalid") ? "VALIDATION_ERROR" : "PROCESSING_ERROR",
      message: error instanceof Error ? error.message : "An unexpected error occurred",
      details: {
        processingTime,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    return new Response(JSON.stringify(apiError), {
      status: error instanceof Error && error.message.includes("Invalid") ? 400 : 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const GET = async () => {
  return new Response(JSON.stringify({
    status: "healthy",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "1.0.0"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
