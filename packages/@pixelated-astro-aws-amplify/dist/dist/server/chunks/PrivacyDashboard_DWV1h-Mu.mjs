;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33165a3f-f72d-483e-9041-0f23633652e9",e._sentryDebugIdIdentifier="sentry-dbid-33165a3f-f72d-483e-9041-0f23633652e9")}catch(e){}}();import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';
import './astro/server_t-wqd6mp.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from './card_BfnhUXNW.mjs';
import { S as Switch } from './switch_DGEtwNxv.mjs';
import { S as Slider } from './slider_BABURRdt.mjs';
import { B as Button } from './button_QWh7Abi4.mjs';
import { Lock, Trash, RefreshCw } from 'lucide-react';

const logger = createBuildSafeLogger("analytics");
const DEFAULT_CONFIG = {
  enabled: true,
  differentialPrivacyEnabled: true,
  privacyBudget: 1,
  // Epsilon value for differential privacy
  endpointUrl: undefined                                         ,
  bufferSize: 20,
  flushIntervalMs: 3e4,
  // 30 seconds
  anonymize: true,
  debugMode: false
};
class AnalyticsService {
  static instance;
  config;
  eventBuffer = [];
  flushTimer = null;
  sessionId;
  anonymousId;
  /**
   * Private constructor (singleton pattern)
   */
  constructor(config = DEFAULT_CONFIG) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.sessionId = this.generateSessionId();
    this.anonymousId = this.generateAnonymousId();
    if (this.config.enabled) {
      this.startFlushTimer();
      logger.info("Analytics service initialized");
    }
  }
  /**
   * Get the singleton instance
   */
  static getInstance(config) {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService(config);
    }
    return AnalyticsService.instance;
  }
  /**
   * Generate a anonymous session ID
   */
  generateSessionId() {
    if (typeof window === "undefined") {
      return `server-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    }
    const storedId = sessionStorage.getItem("analytics_session_id");
    if (storedId) {
      return storedId;
    }
    const newId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem("analytics_session_id", newId);
    return newId;
  }
  /**
   * Generate an anonymous user ID
   */
  generateAnonymousId() {
    if (typeof window === "undefined") {
      return `anon-${Math.random().toString(36).substring(2, 9)}`;
    }
    const storedId = localStorage.getItem("analytics_anonymous_id");
    if (storedId) {
      return storedId;
    }
    const newId = `anon-${Math.random().toString(36).substring(2, 16)}`;
    localStorage.setItem("analytics_anonymous_id", newId);
    return newId;
  }
  /**
   * Start the flush timer
   */
  startFlushTimer() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushIntervalMs);
  }
  /**
   * Flush the event buffer
   */
  async flush() {
    if (!this.config.enabled || this.eventBuffer.length === 0) {
      return;
    }
    const events = [...this.eventBuffer];
    this.eventBuffer = [];
    try {
      const processedEvents = this.config.differentialPrivacyEnabled ? this.applyDifferentialPrivacy(events) : events;
      if (this.config.endpointUrl) {
        await this.sendToEndpoint(processedEvents);
      }
      this.saveToLocalStorage(processedEvents);
      if (this.config.debugMode) {
        logger.debug(`Flushed ${events.length} analytics events`);
      }
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error("Failed to flush analytics events", errorObj);
      this.eventBuffer = [...events, ...this.eventBuffer];
      if (this.eventBuffer.length > this.config.bufferSize * 2) {
        this.eventBuffer = this.eventBuffer.slice(-this.config.bufferSize);
      }
    }
  }
  /**
   * Apply differential privacy to events
   * This adds noise to numeric values to preserve privacy
   */
  applyDifferentialPrivacy(events) {
    return events.map((event) => {
      const newEvent = { ...event, data: { ...event.data } };
      Object.keys(newEvent.data).forEach((key) => {
        const value = newEvent.data[key];
        if (typeof value === "number") {
          const sensitivity = 1;
          const epsilon = this.config.privacyBudget;
          const noise = this.laplacianNoise(sensitivity / epsilon);
          newEvent.data[key] = Math.round((value + noise) * 100) / 100;
        }
      });
      return newEvent;
    });
  }
  /**
   * Generate Laplacian noise for differential privacy
   */
  laplacianNoise(scale) {
    const u = Math.random() - 0.5;
    return -scale * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
  }
  /**
   * Send events to the analytics endpoint
   */
  async sendToEndpoint(events) {
    if (!this.config.endpointUrl) {
      return;
    }
    try {
      const response = await fetch(this.config.endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": undefined                                         || ""
        },
        body: JSON.stringify({
          events,
          source: "therapy-chat-app",
          timestamp: Date.now(),
          batchId: `batch-${Date.now()}`
        })
      });
      if (!response.ok) {
        throw new Error(
          `Analytics API response: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error("Failed to send analytics to endpoint", errorObj);
      throw error;
    }
  }
  /**
   * Save events to local storage as backup
   */
  saveToLocalStorage(events) {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const existingEventsJson = localStorage.getItem("analytics_events");
      const existingEvents = existingEventsJson ? JSON.parse(existingEventsJson) : [];
      const allEvents = [...existingEvents, ...events];
      const trimmedEvents = allEvents.slice(-1e3);
      localStorage.setItem("analytics_events", JSON.stringify(trimmedEvents));
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error("Failed to save analytics to local storage", errorObj);
    }
  }
  /**
   * Anonymize data to remove PHI
   */
  anonymizeData(data) {
    if (!this.config.anonymize) {
      return data;
    }
    const result = {};
    const sensitiveFields = [
      "name",
      "email",
      "phone",
      "address",
      "socialSecurity",
      "dob",
      "birthDate",
      "diagnosis",
      "condition",
      "medication",
      "treatment",
      "therapistNotes",
      "patientId",
      "medicalRecordNumber",
      "insuranceId"
    ];
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value === null || value === void 0) {
        result[key] = value;
        return;
      }
      if (typeof value === "string") {
        if (sensitiveFields.some(
          (field) => key.toLowerCase().includes(field.toLowerCase())
        )) {
          result[key] = "[REDACTED]";
        } else if (value.length > 100) {
          result[key] = this.sanitizeTextContent(value);
        } else {
          result[key] = value;
        }
      } else if (typeof value === "object" && value !== null) {
        result[key] = Array.isArray(value) ? value.map(
          (item) => typeof item === "object" && item !== null ? this.anonymizeData(item) : item
        ) : this.anonymizeData(value);
      } else {
        result[key] = value;
      }
    });
    return result;
  }
  /**
   * Sanitize text content to remove potential PHI
   */
  sanitizeTextContent(text) {
    return text.replace(/[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi, "[EMAIL]").replace(
      /(\+\d{1,3}[\s-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g,
      "[PHONE]"
    ).replace(/\d{3}-\d{2}-\d{4}/g, "[SSN]").replace(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/g, "[CREDIT_CARD]").replace(/\d{1,2}\/\d{1,2}\/\d{2,4}/g, "[DATE]");
  }
  /**
   * Record an analytics event
   */
  recordEvent(eventName, data = {}, eventType = "feature_usage") {
    if (!this.config.enabled) {
      return;
    }
    try {
      const safeData = this.anonymizeData(data);
      const event = {
        eventType,
        eventName,
        data: safeData,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.anonymousId,
        metadata: {
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "server",
          language: typeof navigator !== "undefined" ? navigator.language : "unknown",
          platform: typeof navigator !== "undefined" ? navigator.platform : "server",
          screenSize: typeof window !== "undefined" ? `${window.innerWidth}x${window.innerHeight}` : "unknown"
        }
      };
      this.eventBuffer.push(event);
      if (this.eventBuffer.length >= this.config.bufferSize) {
        this.flush();
      }
      if (this.config.debugMode) {
        logger.debug(`Recorded analytics event: ${eventName}`, safeData);
      }
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error(`Failed to record analytics event: ${eventName}`, errorObj);
    }
  }
  /**
   * Record a page view
   */
  recordPageView(page, referrer) {
    this.recordEvent(
      "page_view",
      {
        page,
        referrer: referrer || (typeof document !== "undefined" ? document.referrer : "unknown"),
        title: typeof document !== "undefined" ? document.title : "unknown"
      },
      "page_view"
      /* PAGE_VIEW */
    );
  }
  /**
   * Record a feature usage
   */
  recordFeatureUsage(feature, action, extraData = {}) {
    this.recordEvent(
      "feature_usage",
      {
        feature,
        action,
        ...extraData
      },
      "feature_usage"
      /* FEATURE_USAGE */
    );
  }
  /**
   * Record an error
   */
  recordError(errorType, message, stack, extraData = {}) {
    this.recordEvent(
      "error",
      {
        errorType,
        message,
        stack,
        ...extraData
      },
      "error"
      /* ERROR */
    );
  }
  /**
   * Record performance metrics
   */
  recordPerformance(metric, value, extraData = {}) {
    this.recordEvent(
      "performance",
      {
        metric,
        value,
        ...extraData
      },
      "performance"
      /* PERFORMANCE */
    );
  }
  /**
   * Record a conversion event
   *
   * @param conversionId Unique identifier for the conversion type (e.g., 'signup', 'purchase')
   * @param value Optional monetary or numeric value associated with the conversion
   * @param extraData Additional data to record with the conversion
   */
  recordConversion(conversionId, value, extraData = {}) {
    this.recordEvent(
      "conversion",
      {
        conversionId,
        value,
        timestamp: Date.now(),
        ...extraData
      },
      "conversion_event"
      /* CONVERSION_EVENT */
    );
  }
  /**
   * Record a funnel stage completion
   *
   * @param funnelId Identifier for the funnel (e.g., 'signup_flow', 'checkout_process')
   * @param stageId Identifier for the specific stage in the funnel
   * @param stageIndex Numerical index of the stage in the sequence
   * @param isComplete Whether the stage was completed successfully
   * @param extraData Additional data to record with the funnel stage
   */
  recordFunnelStage(funnelId, stageId, stageIndex, isComplete = true, extraData = {}) {
    this.recordEvent(
      "funnel_stage",
      {
        funnelId,
        stageId,
        stageIndex,
        isComplete,
        timestamp: Date.now(),
        ...extraData
      },
      "funnel_stage"
      /* FUNNEL_STAGE */
    );
  }
  /**
   * Update configuration
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    if (newConfig.flushIntervalMs && this.flushTimer) {
      this.startFlushTimer();
    }
    if (newConfig.enabled === false && this.eventBuffer.length > 0) {
      this.flush();
    }
  }
  /**
   * Get recorded events (for debugging)
   */
  getEvents() {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const eventsJson = localStorage.getItem("analytics_events");
      return eventsJson ? JSON.parse(eventsJson) : [];
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error("Failed to get analytics events", errorObj);
      return [];
    }
  }
  /**
   * Clear recorded events (for debugging or privacy requests)
   */
  clearEvents() {
    if (typeof window === "undefined") {
      return;
    }
    try {
      localStorage.removeItem("analytics_events");
      this.eventBuffer = [];
      logger.info("Analytics events cleared");
    } catch (error) {
      const errorObj = error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) };
      logger.error("Failed to clear analytics events", errorObj);
    }
  }
  /**
   * Force flush the event buffer
   */
  forceFlush() {
    return this.flush();
  }
}
AnalyticsService.getInstance();

function PrivacyDashboard() {
  const [settings, setSettings] = useState({
    enabled: true,
    differentialPrivacy: true,
    privacyBudget: 1,
    anonymize: true
  });
  const [eventCount, setEventCount] = useState(0);
  const [lastSync, setLastSync] = useState(null);
  const analytics = AnalyticsService.getInstance();
  useEffect(() => {
    const events = analytics.getEvents();
    setEventCount(events.length);
    setLastSync(/* @__PURE__ */ new Date());
  }, [analytics]);
  const handleSettingChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    analytics.updateConfig({
      enabled: newSettings.enabled,
      differentialPrivacyEnabled: newSettings.differentialPrivacy,
      privacyBudget: newSettings.privacyBudget,
      anonymize: newSettings.anonymize
    });
  };
  const handleClearData = async () => {
    analytics.clearEvents();
    setEventCount(0);
    setLastSync(/* @__PURE__ */ new Date());
  };
  const handleRefresh = async () => {
    const events = analytics.getEvents();
    setEventCount(events.length);
    setLastSync(/* @__PURE__ */ new Date());
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" }),
          "Privacy Controls"
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Manage how your analytics data is collected and processed" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Enable Analytics" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Allow collection of anonymous usage data" })
          ] }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: settings.enabled,
              onCheckedChange: (checked) => handleSettingChange("enabled", checked)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Differential Privacy" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Add noise to data to enhance privacy" })
          ] }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: settings.differentialPrivacy,
              onCheckedChange: (checked) => handleSettingChange("differentialPrivacy", checked)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Privacy Budget" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Control the balance between privacy and accuracy" })
          ] }),
          /* @__PURE__ */ jsx(
            Slider,
            {
              value: [settings.privacyBudget],
              min: 0.1,
              max: 2,
              step: 0.1,
              onValueChange: (values) => handleSettingChange("privacyBudget", values[0])
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx("span", { children: "More Private" }),
            /* @__PURE__ */ jsx("span", { children: "More Accurate" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Anonymize Data" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Remove personally identifiable information" })
          ] }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: settings.anonymize,
              onCheckedChange: (checked) => handleSettingChange("anonymize", checked)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Data Collection Status" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Overview of collected analytics data" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Events Collected" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: eventCount })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Last Updated" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: lastSync?.toLocaleTimeString() ?? "Never" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleClearData,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Trash, { className: "h-4 w-4" }),
                "Clear Data"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleRefresh,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
                "Refresh"
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}

export { AnalyticsService as A, PrivacyDashboard as P };
