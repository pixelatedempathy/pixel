;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="629682ff-9b76-4df7-a0da-1a2a54a305c9",e._sentryDebugIdIdentifier="sentry-dbid-629682ff-9b76-4df7-a0da-1a2a54a305c9")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';
import './astro/server_jchCCyc7.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const logger = createBuildSafeLogger("default");
const isServer = typeof window === "undefined";
function getEnvVar(key) {
  if (isServer && typeof process !== "undefined") {
    return process.env[key];
  }
  return Object.assign(__vite_import_meta_env__, { USER: process.env.USER, _: process.env._, NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV })[key];
}
var AuditEventType = /* @__PURE__ */ ((AuditEventType2) => {
  AuditEventType2["ACCESS"] = "access";
  AuditEventType2["CREATE"] = "create";
  AuditEventType2["MODIFY"] = "modify";
  AuditEventType2["DELETE"] = "delete";
  AuditEventType2["EXPORT"] = "export";
  AuditEventType2["SHARE"] = "share";
  AuditEventType2["LOGIN"] = "login";
  AuditEventType2["LOGOUT"] = "logout";
  AuditEventType2["SYSTEM"] = "system";
  AuditEventType2["SECURITY"] = "security";
  AuditEventType2["ADMIN"] = "admin";
  AuditEventType2["CONSENT"] = "consent";
  AuditEventType2["AI_OPERATION"] = "ai";
  AuditEventType2["DLP_ALLOWED"] = "dlp_allowed";
  AuditEventType2["DLP_BLOCKED"] = "dlp_blocked";
  AuditEventType2["SECURITY_ALERT"] = "security_alert";
  AuditEventType2["SERVER_AUTH_DENIED"] = "server_auth_denied";
  AuditEventType2["SUSPICIOUS_IP_CHANGE"] = "suspicious_ip_change";
  AuditEventType2["SUSPICIOUS_USER_AGENT_CHANGE"] = "suspicious_user_agent_change";
  AuditEventType2["SERVER_AUTH_SUCCESS"] = "server_auth_success";
  AuditEventType2["RATE_LIMIT_TRIGGERED"] = "rate_limit_triggered";
  AuditEventType2["SUSPICIOUS_ACTIVITY"] = "suspicious_activity";
  return AuditEventType2;
})(AuditEventType || {});
var AuditEventStatus = /* @__PURE__ */ ((AuditEventStatus2) => {
  AuditEventStatus2["SUCCESS"] = "success";
  AuditEventStatus2["FAILURE"] = "failure";
  AuditEventStatus2["ATTEMPT"] = "attempt";
  AuditEventStatus2["BLOCKED"] = "blocked";
  return AuditEventStatus2;
})(AuditEventStatus || {});
const DEFAULT_CONFIG = {
  enabled: true,
  localStorageEnabled: true,
  remoteStorageEnabled: getEnvVar("NODE_ENV") === "production",
  remoteEndpoint: getEnvVar("AUDIT_LOG_ENDPOINT") ?? void 0,
  encryptLogs: getEnvVar("NODE_ENV") === "production",
  retentionDays: 90,
  // HIPAA requires 6 years, but for this app we'll use 90 days
  batchSize: 100,
  debugMode: getEnvVar("NODE_ENV") === "development"
};
let logQueue = [];
let batchTimer = null;
let config = { ...DEFAULT_CONFIG };
function initializeAuditService(customConfig) {
  config = { ...DEFAULT_CONFIG, ...customConfig };
  logger.info("HIPAA Audit logging service initialized");
  if (config.remoteStorageEnabled && config.remoteEndpoint) {
    startBatchTimer();
  }
}
function startBatchTimer() {
  if (batchTimer) {
    clearInterval(batchTimer);
  }
  batchTimer = setInterval(() => {
    if (logQueue.length > 0) {
      processBatch();
    }
  }, 6e4);
}
async function processBatch() {
  if (logQueue.length === 0) {
    return;
  }
  const batch = logQueue.splice(0, config.batchSize);
  if (config.remoteStorageEnabled && config.remoteEndpoint) {
    try {
      await sendLogsToRemoteEndpoint(batch);
    } catch (error) {
      logger.error(
        "Failed to send audit logs to remote endpoint",
        error
      );
      logQueue = [...batch, ...logQueue];
    }
  }
}
async function sendLogsToRemoteEndpoint(logs) {
  if (!config.remoteEndpoint) {
    return;
  }
  try {
    const response = await fetch(config.remoteEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": getEnvVar("AUDIT_API_KEY") || ""
      },
      body: JSON.stringify({
        logs,
        source: "therapy-chat-app",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    if (!response.ok) {
      throw new Error(
        `Remote logging failed: ${response.status} ${response.statusText}`
      );
    }
    if (config.debugMode) {
      logger.debug(`Sent ${logs.length} audit logs to remote endpoint`);
    }
  } catch (error) {
    logger.error(
      "Error sending logs to remote endpoint",
      error
    );
    throw error;
  }
}
function generateAuditId() {
  return `audit-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function getClientIp() {
  if (typeof window === "undefined") {
    return "server-side";
  }
  return "client-side";
}
function getUserAgent() {
  if (typeof window === "undefined") {
    return "server-side";
  }
  return navigator.userAgent;
}
function getSessionId() {
  if (typeof window === "undefined") {
    return "server-session";
  }
  let sessionId = localStorage.getItem("therapy-chat-session-id");
  if (!sessionId) {
    sessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem("therapy-chat-session-id", sessionId);
  }
  return sessionId;
}
function storeLocalAuditLog(entry) {
  if (!config.localStorageEnabled || typeof localStorage === "undefined") {
    return;
  }
  try {
    const existingLogsJson = localStorage.getItem("hipaa-audit-logs");
    const existingLogs = existingLogsJson ? JSON.parse(existingLogsJson) : [];
    const updatedLogs = [entry, ...existingLogs];
    const retentionDate = /* @__PURE__ */ new Date();
    retentionDate.setDate(retentionDate.getDate() - config.retentionDays);
    const filteredLogs = updatedLogs.filter((log) => {
      const logDate = new Date(log.timestamp);
      return logDate >= retentionDate;
    });
    localStorage.setItem("hipaa-audit-logs", JSON.stringify(filteredLogs));
  } catch (error) {
    logger.error(
      "Failed to store audit log locally",
      error
    );
  }
}
async function createAuditLog(type, action, userId, resource, details, status = "success") {
  return await createHIPAACompliantAuditLog({
    userId,
    action,
    resource,
    eventType: type,
    status,
    ...details !== void 0 ? { details } : {}
  });
}
function logAuditEvent(eventType, action, userId, resourceId, details) {
  createHIPAACompliantAuditLog({
    userId,
    action,
    resource: resourceId || "unknown",
    eventType,
    ...details !== void 0 ? { details } : {}
  }).catch((error) => {
    logger.error("Failed to log audit event", error);
  });
}
async function createHIPAACompliantAuditLog(params) {
  const eventType = params.eventType || "system";
  const status = params.status || "success";
  const baseEntry = {
    id: generateAuditId(),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    userId: params.userId,
    action: params.action,
    eventType,
    status,
    resource: params.resource,
    ipAddress: getClientIp(),
    userAgent: getUserAgent(),
    sessionId: getSessionId()
  };
  const logEntry = {
    ...baseEntry,
    ...params.userRole !== void 0 ? { userRole: params.userRole } : {},
    ...params.resourceId !== void 0 ? { resourceId: params.resourceId } : {},
    ...params.details !== void 0 ? { details: params.details } : {},
    ...params.patientId !== void 0 ? { patientId: params.patientId } : {},
    ...params.organizationId !== void 0 ? { organizationId: params.organizationId } : {},
    ...params.notes !== void 0 ? { notes: params.notes } : {}
  };
  if (config.localStorageEnabled) {
    storeLocalAuditLog(logEntry);
  }
  if (config.remoteStorageEnabled) {
    logQueue.push(logEntry);
    if (logQueue.length >= config.batchSize) {
      processBatch().catch((error) => {
        logger.error("Failed to process batch", error);
      });
    }
  }
  if (config.debugMode) {
    logger.debug("Audit log created", {
      id: logEntry.id,
      action: logEntry.action,
      eventType: logEntry.eventType,
      resource: logEntry.resource
    });
  }
  return logEntry;
}
async function createResourceAuditLog(eventType, userId, resource, details, status = "success") {
  logger.warn(
    "createResourceAuditLog is a placeholder and needs full implementation.",
    {
      eventType,
      userId,
      resource,
      details,
      status
    }
  );
  if (config.enabled) {
    return createHIPAACompliantAuditLog({
      userId,
      action: `resource_action_placeholder:${resource.type}:${resource.id}`,
      resource: resource.id,
      eventType,
      status,
      ...details !== void 0 ? { details } : {},
      notes: "Placeholder log from createResourceAuditLog stub"
    });
  }
  return Promise.resolve(void 0);
}
initializeAuditService();

export { AuditEventType as A, createResourceAuditLog as a, AuditEventStatus as b, createAuditLog as c, logAuditEvent as l };
