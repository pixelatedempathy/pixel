;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="213fc45a-61d0-4e77-b659-40755c4422d6",e._sentryDebugIdIdentifier="sentry-dbid-213fc45a-61d0-4e77-b659-40755c4422d6")}catch(e){}}();import { v as validationRunner } from '../../../../chunks/ContinuousValidationRunner_b71K-pS-.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { i as isAuthenticated } from '../../../../chunks/auth_DrPSEcKU.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_CMoAMAaW.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-schedule");
  try {
    const authResult = await isAuthenticated(request);
    if (!authResult.authenticated) {
      return new Response(
        JSON.stringify({
          error: "Unauthorized",
          message: "You must be authenticated to access this endpoint"
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!authResult.user?.isAdmin) {
      await createAuditLog(
        AuditEventType.SECURITY_EVENT,
        "validation-schedule-unauthorized",
        authResult.user?.id || "unknown",
        "validation-api",
        {
          userId: authResult.user?.id,
          email: authResult.user?.email
        },
        AuditEventStatus.FAILURE
      );
      return new Response(
        JSON.stringify({
          error: "Forbidden",
          message: "You do not have permission to schedule validation runs"
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const body = await request.json();
    const { action, schedule } = body;
    await validationRunner.initialize();
    if (action === "schedule" && schedule) {
      await validationRunner.scheduleValidationRuns(schedule);
      await createAuditLog(
        AuditEventType.AI_OPERATION,
        "validation-schedule-create",
        authResult.user?.id || "system",
        "validation-api",
        {
          userId: authResult.user?.id,
          schedule
        },
        AuditEventStatus.SUCCESS
      );
      return new Response(
        JSON.stringify({
          success: true,
          message: `Validation schedule set to: ${schedule}`,
          state: validationRunner.getState()
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } else if (action === "stop") {
      validationRunner.stopScheduledRuns();
      await createAuditLog(
        AuditEventType.AI_OPERATION,
        "validation-schedule-stop",
        authResult.user?.id || "system",
        "validation-api",
        {
          userId: authResult.user?.id
        },
        AuditEventStatus.SUCCESS
      );
      return new Response(
        JSON.stringify({
          success: true,
          message: "Validation schedule stopped",
          state: validationRunner.getState()
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } else if (action === "get") {
      return new Response(
        JSON.stringify({
          success: true,
          state: validationRunner.getState()
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Invalid action. Supported actions: schedule, stop, get"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error(`Validation schedule error: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-schedule",
      "system",
      "validation-api",
      {
        error: errorMessage
      },
      AuditEventStatus.FAILURE
    );
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: `Failed to manage validation schedule: ${errorMessage}`
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
