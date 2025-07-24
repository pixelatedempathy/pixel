;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4697ee03-d13c-4be2-9650-0856c19aec8d",e._sentryDebugIdIdentifier="sentry-dbid-4697ee03-d13c-4be2-9650-0856c19aec8d")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_AsZljXJu.mjs';
import { s as supabase } from './supabase_pbWOGD7E.mjs';
import { createHash } from 'node:crypto';
import './astro/server_DBAAVvAL.mjs';
import { g as generateId } from './ids_CZXPD3v_.mjs';

class SecurityError extends Error {
  constructor(message) {
    super(message);
    this.name = "SecurityError";
  }
}

class AuditLoggingService {
  config;
  logger;
  context;
  constructor(config = {
    logLevel: "info",
    includeTimestamp: true,
    includePII: false,
    redactFields: ["password", "token", "secret", "ssn", "dob"]
  }, logger = console) {
    this.context = "audit";
    this.config = config;
    this.logger = logger;
  }
  log(entry) {
    return this.logEvent({
      eventType: this.context,
      action: entry.action,
      resourceType: entry.resource,
      resourceId: entry.resourceId,
      userId: entry.userId,
      details: entry.details,
      status: "success",
      metadata: {}
    });
  }
  async logEvent(entry) {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const sanitizedEntry = this.sanitizeEntry({ ...entry, timestamp });
      switch (this.config.logLevel) {
        case "debug":
          this.logger.debug(JSON.stringify(sanitizedEntry));
          break;
        case "info":
          this.logger.info(JSON.stringify(sanitizedEntry));
          break;
        case "warn":
          this.logger.warn(JSON.stringify(sanitizedEntry));
          break;
        case "error":
          this.logger.error(JSON.stringify(sanitizedEntry));
          break;
      }
      await this.storeLogEntry(sanitizedEntry);
    } catch (error) {
      this.logger.error("Failed to log audit event:", error);
      throw new SecurityError("Failed to log audit event");
    }
  }
  sanitizeEntry(entry) {
    const sanitized = { ...entry };
    if (!this.config.includePII) {
      if (sanitized.userId) {
        sanitized.userId = this.hashValue(sanitized.userId);
      }
      if (sanitized.metadata?.sessionId) {
        sanitized.metadata.sessionId = this.hashValue(
          sanitized.metadata.sessionId
        );
      }
    }
    if (sanitized.details) {
      for (const field of this.config.redactFields) {
        if (field in sanitized.details) {
          sanitized.details[field] = "[REDACTED]";
        }
      }
    }
    return sanitized;
  }
  hashValue(value) {
    return createHash("sha256").update(value).digest("hex");
  }
  async storeLogEntry(entry) {
    if (process.env["NODE_ENV"] === "development") {
      this.logger.debug("Storing audit log entry:", entry);
    }
  }
  async queryLogs(__filters) {
    throw new Error("Log querying not implemented");
  }
  async exportLogs(__format, __filters) {
    throw new Error("Log export not implemented");
  }
  async cleanup() {
    this.logger.info("Audit logging service cleaned up");
  }
}
function getAuditLogger() {
  return new AuditLoggingService();
}

const logger = createBuildSafeLogger("data-delete-service");
const auditLogger = getAuditLogger();
async function createDataDeletionRequest(params) {
  try {
    const requestId = `DEL-${(/* @__PURE__ */ new Date()).getFullYear()}-${generateId(4)}`;
    const deletionRequest = {
      id: requestId,
      patientId: params.patientId,
      patientName: params.patientName,
      dataScope: params.dataScope,
      dataCategories: params.dataCategories,
      reason: params.reason,
      additionalDetails: params.additionalDetails,
      status: "pending",
      dateRequested: (/* @__PURE__ */ new Date()).toISOString(),
      requestedBy: params.requestedBy
    };
    const { data, error } = await supabase.from("data_deletion_requests").insert(deletionRequest).select().single();
    if (error) {
      logger.error("Failed to create data deletion request", { error, params });
      throw new Error(
        `Failed to create data deletion request: ${error.message}`
      );
    }
    auditLogger.log({
      action: "create_deletion_request",
      resource: "patient_data",
      resourceId: params.patientId,
      userId: params.requestedBy,
      details: {
        requestId,
        dataScope: params.dataScope,
        reason: params.reason,
        categories: params.dataCategories
      }
    });
    return data;
  } catch (error) {
    logger.error("Error in createDataDeletionRequest", {
      error: error instanceof Error ? error.message : String(error),
      params
    });
    throw error;
  }
}
async function updateDataDeletionRequest(params) {
  try {
    const updateData = {
      status: params.status,
      processedBy: params.processedBy,
      processingNotes: params.processingNotes
    };
    if (params.status === "completed" || params.status === "denied") {
      updateData.dateProcessed = (/* @__PURE__ */ new Date()).toISOString();
    }
    const { data, error } = await supabase.from("data_deletion_requests").update(updateData).eq("id", params.id).select().single();
    if (error) {
      logger.error("Failed to update data deletion request", { error, params });
      throw new Error(
        `Failed to update data deletion request: ${error.message}`
      );
    }
    const updatedRequest = data;
    auditLogger.log({
      action: "update_deletion_request",
      resource: "patient_data",
      resourceId: updatedRequest.patientId,
      userId: params.processedBy,
      details: {
        requestId: params.id,
        newStatus: params.status,
        notes: params.processingNotes || "No notes provided"
      }
    });
    if (params.status === "completed") {
      await executeDataDeletion(updatedRequest, params.processedBy);
    }
    return updatedRequest;
  } catch (error) {
    logger.error("Error in updateDataDeletionRequest", {
      error: error instanceof Error ? error.message : String(error),
      params
    });
    throw error;
  }
}
async function executeDataDeletion(request, processedBy) {
  try {
    logger.info("Executing data deletion", {
      requestId: request.id,
      patientId: request.patientId,
      scope: request.dataScope
    });
    if (request.dataScope === "all") {
      await deleteAllPatientData(request.patientId);
      logger.info("Completed full patient data deletion", {
        requestId: request.id,
        patientId: request.patientId
      });
    } else if (request.dataScope === "specific" && request.dataCategories.length > 0) {
      await deleteSpecificPatientData(request.patientId, request.dataCategories);
      logger.info("Completed specific patient data deletion", {
        requestId: request.id,
        patientId: request.patientId,
        categories: request.dataCategories
      });
    }
    auditLogger.log({
      action: "execute_data_deletion",
      resource: "patient_data",
      resourceId: request.patientId,
      userId: processedBy,
      details: {
        requestId: request.id,
        dataScope: request.dataScope,
        categories: request.dataCategories,
        reason: request.reason
      }
    });
  } catch (error) {
    logger.error("Error executing data deletion", {
      error: error instanceof Error ? error.message : String(error),
      requestId: request.id,
      patientId: request.patientId
    });
    auditLogger.log({
      action: "data_deletion_error",
      resource: "patient_data",
      resourceId: request.patientId,
      userId: processedBy,
      details: {
        requestId: request.id,
        error: error instanceof Error ? error.message : String(error)
      }
    });
  }
}
async function deleteAllPatientData(patientId) {
  const { error } = await supabase.rpc("delete_all_patient_data", {
    p_patient_id: patientId
  });
  if (error) {
    logger.error("Error in deleteAllPatientData transaction", {
      error,
      patientId
    });
    throw new Error(`Failed to delete all patient data: ${error.message}`);
  }
}
async function deleteSpecificPatientData(patientId, categories) {
  const categoryTableMap = {
    demographics: ["patient_profiles", "patient_demographics"],
    sessions: ["therapy_sessions", "session_notes"],
    assessments: ["patient_assessments", "assessment_results"],
    emotions: ["emotion_records", "emotion_tracking_data"],
    notes: ["clinical_notes", "therapist_observations"],
    messages: ["patient_messages", "communication_logs"],
    media: ["patient_uploads", "media_files"]
  };
  for (const category of categories) {
    const tables = categoryTableMap[category];
    if (!tables) {
      logger.warn(`Unknown data category in deletion request: ${category}`);
      continue;
    }
    for (const table of tables) {
      const { error } = await supabase.from(table).delete().eq("patient_id", patientId);
      if (error) {
        logger.error(`Error deleting from ${table}`, {
          error,
          patientId,
          category
        });
      }
    }
  }
}

export { createDataDeletionRequest as c, updateDataDeletionRequest as u };
