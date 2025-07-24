;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b259d745-ebad-4753-84ee-db119e9f5417",e._sentryDebugIdIdentifier="sentry-dbid-b259d745-ebad-4753-84ee-db119e9f5417")}catch(e){}}();import { b as getAuditLogs } from '../../../chunks/log_DiTJ6qtK.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const FREQUENCY_THRESHOLDS = {
  LOW: 20,
  MEDIUM: 35,
  HIGH: 50
};
const SENSITIVE_RESOURCES = [
  "financial",
  "pii",
  "health_records",
  "credentials"
];
function detectHighFrequency(logs, timeWindowMinutes = 60) {
  const patterns = [];
  const now = /* @__PURE__ */ new Date();
  const windowStart = new Date(now.getTime() - timeWindowMinutes * 60 * 1e3);
  const recentLogs = logs.filter(
    (log) => new Date(log.timestamp) >= windowStart
  );
  const userFrequency = recentLogs.reduce(
    (acc, log) => {
      if (!acc[log.userId]) {
        acc[log.userId] = { userId: log.userId, count: 0, logs: [] };
      }
      acc[log.userId].count++;
      acc[log.userId].logs.push(log);
      return acc;
    },
    {}
  );
  Object.values(userFrequency).forEach(({ userId, count, logs: logs2 }) => {
    let severity = null;
    if (count >= FREQUENCY_THRESHOLDS.HIGH) {
      severity = "high";
    } else if (count >= FREQUENCY_THRESHOLDS.MEDIUM) {
      severity = "medium";
    } else if (count >= FREQUENCY_THRESHOLDS.LOW) {
      severity = "low";
    }
    if (severity) {
      patterns.push({
        type: "high_frequency",
        severity,
        description: `User ${userId} accessed system ${count} times in the last ${timeWindowMinutes} minutes`,
        relatedLogs: logs2
      });
    }
  });
  return patterns;
}
function detectOddHours(logs) {
  const patterns = [];
  const oddHourLogs = logs.filter((log) => {
    const hour = new Date(log.timestamp).getHours();
    return hour >= 23 || hour <= 5;
  });
  if (oddHourLogs.length === 0) {
    return patterns;
  }
  const userOddHours = oddHourLogs.reduce(
    (acc, log) => {
      if (!acc[log.userId]) {
        acc[log.userId] = [];
      }
      acc[log.userId].push(log);
      return acc;
    },
    {}
  );
  Object.entries(userOddHours).forEach(([userId, logs2]) => {
    if (logs2.length >= 3) {
      const severity = logs2.length >= 10 ? "high" : logs2.length >= 5 ? "medium" : "low";
      patterns.push({
        type: "odd_hours",
        severity,
        description: `User ${userId} accessed system ${logs2.length} times during unusual hours (11 PM - 5 AM)`,
        relatedLogs: logs2
      });
    }
  });
  return patterns;
}
function detectSensitiveAccess(logs) {
  const patterns = [];
  const sensitiveLogs = logs.filter(
    (log) => SENSITIVE_RESOURCES.includes(log.resourceType.toLowerCase())
  );
  if (sensitiveLogs.length === 0) {
    return patterns;
  }
  const userSensitiveAccess = sensitiveLogs.reduce(
    (acc, log) => {
      if (!acc[log.userId]) {
        acc[log.userId] = [];
      }
      acc[log.userId].push(log);
      return acc;
    },
    {}
  );
  Object.entries(userSensitiveAccess).forEach(([userId, logs2]) => {
    if (logs2.length >= 10) {
      const severity = logs2.length >= 20 ? "high" : logs2.length >= 15 ? "medium" : "low";
      patterns.push({
        type: "sensitive_access",
        severity,
        description: `User ${userId} accessed sensitive resources ${logs2.length} times`,
        relatedLogs: logs2
      });
    }
  });
  return patterns;
}
function detectUnusualPatterns(logs) {
  return [
    ...detectHighFrequency(logs),
    ...detectOddHours(logs),
    ...detectSensitiveAccess(logs)
  ];
}

const GET = async () => {
  try {
    const now = /* @__PURE__ */ new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1e3);
    const allLogs = await getAuditLogs();
    const logs = allLogs.filter(
      (log) => log.timestamp >= yesterday && log.timestamp <= now
    );
    const hourlyAccess = new Array(24).fill(0);
    const accessTypes = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      const hour = new Date(log.timestamp).getHours();
      hourlyAccess[hour]++;
      const type = log.action;
      accessTypes.set(type, (accessTypes.get(type) || 0) + 1);
    });
    const timeLabels = Array.from({ length: 24 }, (_, i) => {
      const hour = (now.getHours() - (23 - i) + 24) % 24;
      return `${hour}:00`;
    });
    const accessTypeEntries = Array.from(accessTypes.entries());
    const accessTypeLabels = accessTypeEntries.map(([type]) => type);
    const accessTypeData = accessTypeEntries.map(([, count]) => count);
    const transformedLogs = logs.map((log) => ({
      id: log.id,
      timestamp: log.timestamp.toISOString(),
      userId: log.userId,
      resourceId: log.resource.id,
      resourceType: log.resource.type,
      action: log.action,
      metadata: log.metadata
    }));
    const unusualPatterns = await detectUnusualPatterns(transformedLogs);
    return new Response(
      JSON.stringify({
        accessByTime: {
          labels: timeLabels,
          data: hourlyAccess
        },
        accessByType: {
          labels: accessTypeLabels,
          data: accessTypeData
        },
        unusualAccess: {
          count: unusualPatterns.length,
          details: unusualPatterns.map((p) => p.description)
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error processing audit metrics:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process audit metrics"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
