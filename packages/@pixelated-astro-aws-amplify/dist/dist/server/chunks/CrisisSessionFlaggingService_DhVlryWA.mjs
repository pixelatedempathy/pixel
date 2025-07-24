;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ca049acb-e1cb-43e4-9d59-c75e57963df0",e._sentryDebugIdIdentifier="sentry-dbid-ca049acb-e1cb-43e4-9d59-c75e57963df0")}catch(e){}}();import { s as supabase } from './supabase_DVgIUFEh.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';
import { c as createAuditLog, A as AuditEventType } from './audit_DWq5CQbl.mjs';
import './astro/server_t-wqd6mp.mjs';

const logger = createBuildSafeLogger("crisis-session-flagging");
class CrisisSessionFlaggingService {
  /**
   * Flag a user session for immediate review due to crisis detection
   */
  async flagSessionForReview(request) {
    try {
      logger.info("Flagging session for review", {
        userId: request.userId,
        sessionId: request.sessionId,
        crisisId: request.crisisId,
        severity: request.severity
      });
      if (!request.userId || !request.sessionId || !request.crisisId) {
        throw new Error(
          "Missing required fields: userId, sessionId, or crisisId"
        );
      }
      if (request.confidence < 0 || request.confidence > 1) {
        throw new Error("Confidence must be between 0 and 1");
      }
      const { data: flagData, error: flagError } = await supabase.from("crisis_session_flags").insert({
        user_id: request.userId,
        session_id: request.sessionId,
        crisis_id: request.crisisId,
        reason: request.reason,
        severity: request.severity,
        confidence: request.confidence,
        detected_risks: request.detectedRisks,
        text_sample: request.textSample,
        routing_decision: request.routingDecision,
        metadata: request.metadata || {},
        status: "pending"
      }).select().single();
      if (flagError) {
        logger.error("Failed to insert crisis session flag", {
          error: flagError,
          userId: request.userId,
          sessionId: request.sessionId
        });
        throw new Error(`Failed to flag session: ${flagError.message}`);
      }
      await createAuditLog(
        AuditEventType.SECURITY_ALERT,
        "crisis_session_flagged",
        request.userId,
        request.sessionId,
        {
          crisisId: request.crisisId,
          severity: request.severity,
          reason: request.reason,
          confidence: request.confidence,
          detectedRisks: request.detectedRisks
        }
      );
      logger.info("Session flagged successfully", {
        flagId: flagData.id,
        userId: request.userId,
        sessionId: request.sessionId,
        crisisId: request.crisisId
      });
      return this.mapFlagFromDb(flagData);
    } catch (error) {
      logger.error("Error flagging session for review", {
        error: error instanceof Error ? error.message : String(error),
        userId: request.userId,
        sessionId: request.sessionId
      });
      throw error;
    }
  }
  /**
   * Update the status of a crisis session flag
   */
  async updateFlagStatus(request) {
    try {
      logger.info("Updating crisis flag status", {
        flagId: request.flagId,
        status: request.status
      });
      const updateData = {
        status: request.status,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (request.status === "under_review" && request.assignedTo) {
        updateData.assigned_to = request.assignedTo;
      }
      if (request.status === "reviewed" || request.status === "resolved") {
        updateData.reviewed_at = (/* @__PURE__ */ new Date()).toISOString();
      }
      if (request.status === "resolved") {
        updateData.resolved_at = (/* @__PURE__ */ new Date()).toISOString();
      }
      if (request.reviewerNotes) {
        updateData.reviewer_notes = request.reviewerNotes;
      }
      if (request.resolutionNotes) {
        updateData.resolution_notes = request.resolutionNotes;
      }
      if (request.metadata) {
        updateData.metadata = request.metadata;
      }
      const { data, error } = await supabase.from("crisis_session_flags").update(updateData).eq("id", request.flagId).select().single();
      if (error) {
        logger.error("Failed to update crisis flag status", {
          error,
          flagId: request.flagId
        });
        throw new Error(`Failed to update flag status: ${error.message}`);
      }
      logger.info("Crisis flag status updated successfully", {
        flagId: request.flagId,
        status: request.status
      });
      return this.mapFlagFromDb(data);
    } catch (error) {
      logger.error("Error updating flag status", {
        error: error instanceof Error ? error.message : String(error),
        flagId: request.flagId
      });
      throw error;
    }
  }
  /**
   * Get crisis flags for a specific user
   */
  async getUserCrisisFlags(userId, includeResolved = false) {
    try {
      let query = supabase.from("crisis_session_flags").select("*").eq("user_id", userId).order("flagged_at", { ascending: false });
      if (!includeResolved) {
        query = query.not("status", "in", "(resolved,dismissed)");
      }
      const { data, error } = await query;
      if (error) {
        logger.error("Failed to get user crisis flags", {
          error,
          userId
        });
        throw new Error(`Failed to get crisis flags: ${error.message}`);
      }
      return data.map((flag) => this.mapFlagFromDb(flag));
    } catch (error) {
      logger.error("Error getting user crisis flags", {
        error: error instanceof Error ? error.message : String(error),
        userId
      });
      throw error;
    }
  }
  /**
   * Get user session status
   */
  async getUserSessionStatus(userId) {
    try {
      const { data, error } = await supabase.from("user_session_status").select("*").eq("user_id", userId).single();
      if (error) {
        if (error.code === "PGRST116") {
          return null;
        }
        logger.error("Failed to get user session status", {
          error,
          userId
        });
        throw new Error(`Failed to get session status: ${error.message}`);
      }
      return this.mapStatusFromDb(data);
    } catch (error) {
      logger.error("Error getting user session status", {
        error: error instanceof Error ? error.message : String(error),
        userId
      });
      throw error;
    }
  }
  /**
   * Get all pending crisis flags for review
   */
  async getPendingCrisisFlags(limit = 50) {
    try {
      const { data, error } = await supabase.from("crisis_session_flags").select("*").in("status", ["pending", "under_review"]).order("flagged_at", { ascending: true }).limit(limit);
      if (error) {
        logger.error("Failed to get pending crisis flags", { error });
        throw new Error(`Failed to get pending flags: ${error.message}`);
      }
      return data.map((flag) => this.mapFlagFromDb(flag));
    } catch (error) {
      logger.error("Error getting pending crisis flags", {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
  /**
   * Map database record to CrisisSessionFlag interface
   */
  mapFlagFromDb(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid database record for crisis session flag");
    }
    const record = data;
    const result = {
      id: String(record["id"]),
      userId: String(record["user_id"]),
      sessionId: String(record["session_id"]),
      crisisId: String(record["crisis_id"]),
      reason: String(record["reason"]),
      severity: String(record["severity"]),
      confidence: Number(record["confidence"]),
      detectedRisks: Array.isArray(record["detected_risks"]) ? record["detected_risks"] : [],
      status: String(record["status"]),
      flaggedAt: String(record["flagged_at"]),
      routingDecision: record["routing_decision"],
      metadata: record["metadata"] && typeof record["metadata"] === "object" ? record["metadata"] : {},
      createdAt: String(record["created_at"]),
      updatedAt: String(record["updated_at"])
    };
    if (record["text_sample"]) {
      result.textSample = String(record["text_sample"]);
    }
    if (record["reviewed_at"]) {
      result.reviewedAt = String(record["reviewed_at"]);
    }
    if (record["resolved_at"]) {
      result.resolvedAt = String(record["resolved_at"]);
    }
    if (record["assigned_to"]) {
      result.assignedTo = String(record["assigned_to"]);
    }
    if (record["reviewer_notes"]) {
      result.reviewerNotes = String(record["reviewer_notes"]);
    }
    if (record["resolution_notes"]) {
      result.resolutionNotes = String(record["resolution_notes"]);
    }
    return result;
  }
  /**
   * Map database record to UserSessionStatus interface
   */
  mapStatusFromDb(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid database record for user session status");
    }
    const record = data;
    const result = {
      id: String(record["id"]),
      userId: String(record["user_id"]),
      isFlaggedForReview: Boolean(record["is_flagged_for_review"]),
      currentRiskLevel: String(record["current_risk_level"]),
      totalCrisisFlags: Number(record["total_crisis_flags"]),
      activeCrisisFlags: Number(record["active_crisis_flags"]),
      resolvedCrisisFlags: Number(record["resolved_crisis_flags"]),
      metadata: record["metadata"] && typeof record["metadata"] === "object" ? record["metadata"] : {},
      createdAt: String(record["created_at"]),
      updatedAt: String(record["updated_at"])
    };
    if (record["last_crisis_event_at"]) {
      result.lastCrisisEventAt = String(record["last_crisis_event_at"]);
    }
    return result;
  }
}

export { CrisisSessionFlaggingService };
