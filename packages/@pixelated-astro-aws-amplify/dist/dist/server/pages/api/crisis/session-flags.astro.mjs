;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04287d6c-519b-4ba3-80f6-1f058255f11e",e._sentryDebugIdIdentifier="sentry-dbid-04287d6c-519b-4ba3-80f6-1f058255f11e")}catch(e){}}();import { CrisisSessionFlaggingService } from '../../../chunks/CrisisSessionFlaggingService_DhVlryWA.mjs';
import { g as getSession } from '../../../chunks/session_CjG7jjfF.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../chunks/audit_DWq5CQbl.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("crisis-session-flags-api");
const GET = async ({ request }) => {
  try {
    const sessionData = await getSession(request);
    if (!sessionData) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const includeResolved = searchParams.get("includeResolved") === "true";
    const pending = searchParams.get("pending") === "true";
    const flaggingService = new CrisisSessionFlaggingService();
    if (pending) {
      const userRole = sessionData.user.user_metadata?.["role"];
      if (!userRole || !["admin", "therapist"].includes(userRole)) {
        return new Response(
          JSON.stringify({ error: "Insufficient permissions" }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      const flags2 = await flaggingService.getPendingCrisisFlags();
      return new Response(JSON.stringify({ flags: flags2 }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (userId) {
      const userRole = sessionData.user.user_metadata?.["role"];
      if (userId !== sessionData.user.id && !["admin", "therapist"].includes(userRole)) {
        return new Response(
          JSON.stringify({ error: "Insufficient permissions" }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      const flags2 = await flaggingService.getUserCrisisFlags(
        userId,
        includeResolved
      );
      const status2 = await flaggingService.getUserSessionStatus(userId);
      return new Response(JSON.stringify({ flags: flags2, status: status2 }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const flags = await flaggingService.getUserCrisisFlags(
      sessionData.user.id,
      includeResolved
    );
    const status = await flaggingService.getUserSessionStatus(
      sessionData.user.id
    );
    return new Response(JSON.stringify({ flags, status }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error in GET /api/crisis/session-flags", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const POST = async ({ request }) => {
  try {
    const sessionData = await getSession(request);
    if (!sessionData) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const userRole = sessionData.user.user_metadata?.["role"];
    if (!userRole || !["admin", "therapist"].includes(userRole)) {
      return new Response(
        JSON.stringify({ error: "Insufficient permissions" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const body = await request.json();
    const {
      userId,
      sessionId,
      reason,
      severity = "medium",
      detectedRisks = [],
      confidence = 1,
      textSample,
      metadata
    } = body;
    if (!userId || !sessionId || !reason) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: userId, sessionId, reason"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const flaggingService = new CrisisSessionFlaggingService();
    const crisisId = crypto.randomUUID();
    const flag = await flaggingService.flagSessionForReview({
      userId,
      sessionId,
      crisisId,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      reason,
      severity,
      detectedRisks,
      confidence,
      textSample,
      metadata
    });
    await createAuditLog(
      AuditEventType.SECURITY,
      "crisis_session_flagged_manual",
      sessionData.user.id,
      sessionId,
      {
        targetUserId: userId,
        crisisId,
        severity,
        reason
      },
      AuditEventStatus.SUCCESS
    );
    logger.info("Crisis session flag created manually", {
      flagId: flag.id,
      userId,
      sessionId,
      createdBy: sessionData.user.id
    });
    return new Response(JSON.stringify({ flag }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error in POST /api/crisis/session-flags", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const PUT = async ({ request }) => {
  try {
    const sessionData = await getSession(request);
    if (!sessionData) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const userRole = sessionData.user.user_metadata?.["role"];
    if (!userRole || !["admin", "therapist"].includes(userRole)) {
      return new Response(
        JSON.stringify({ error: "Insufficient permissions" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const body = await request.json();
    const {
      flagId,
      status,
      assignedTo,
      reviewerNotes,
      resolutionNotes,
      metadata
    } = body;
    if (!flagId || !status) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: flagId, status"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const flaggingService = new CrisisSessionFlaggingService();
    const updatedFlag = await flaggingService.updateFlagStatus({
      flagId,
      status,
      assignedTo,
      reviewerNotes,
      resolutionNotes,
      metadata
    });
    await createAuditLog(
      AuditEventType.SECURITY,
      "crisis_session_flag_updated",
      sessionData.user.id,
      flagId,
      {
        newStatus: status,
        assignedTo,
        hasReviewerNotes: !!reviewerNotes,
        hasResolutionNotes: !!resolutionNotes
      },
      AuditEventStatus.SUCCESS
    );
    logger.info("Crisis session flag updated", {
      flagId,
      status,
      updatedBy: sessionData.user.id
    });
    return new Response(JSON.stringify({ flag: updatedFlag }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error in PUT /api/crisis/session-flags", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
