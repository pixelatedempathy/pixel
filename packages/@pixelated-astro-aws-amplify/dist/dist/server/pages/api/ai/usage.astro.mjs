;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ead84147-efe9-4292-9882-20f8cd02bcc0",e._sentryDebugIdIdentifier="sentry-dbid-ead84147-efe9-4292-9882-20f8cd02bcc0")}catch(e){}}();import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../chunks/audit_CMoAMAaW.mjs';
import { g as getAIUsageStats } from '../../../chunks/analytics_CO3hhYdg.mjs';
import { h as handleApiError } from '../../../chunks/error-handling_CA0NkQkO.mjs';
import { g as getSession } from '../../../chunks/session_DeimXgPx.mjs';
import { a as validateQueryParams } from '../../../chunks/index_CGhbXHdj.mjs';
import { U as UsageStatsRequestSchema } from '../../../chunks/schemas_gxA2FnHu.mjs';
import { R as RateLimiter } from '../../../chunks/rate-limit_Cr0i26O6.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("default");
const rateLimiter = new RateLimiter(30, 60 * 1e3);
const GET = async ({ request }) => {
  let session;
  try {
    session = await getSession(request);
    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const role = session.user.role || "user";
    const { allowed, limit, remaining, reset } = rateLimiter.check(
      `${session.user.id}:/api/ai/usage`,
      role,
      {
        admin: 60,
        // 60 requests per minute for admins
        therapist: 40,
        // 40 requests per minute for therapists
        user: 20,
        // 20 requests per minute for regular users
        anonymous: 5
        // 5 requests per minute for unauthenticated users
      },
      60 * 1e3
      // 1 minute window
    );
    if (!allowed) {
      logger.warn("Rate limit exceeded for AI usage stats", {
        userId: session.user.id,
        role
      });
      return new Response(
        JSON.stringify({
          error: "Too Many Requests",
          message: "Rate limit exceeded. Please try again later."
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": reset.toString(),
            "Retry-After": Math.ceil((reset - Date.now()) / 1e3).toString()
          }
        }
      );
    }
    const isAdmin = session?.user?.role === "admin";
    const [params, validationError] = validateQueryParams(
      new URL(request.url),
      UsageStatsRequestSchema
    );
    if (validationError) {
      await createAuditLog(
        AuditEventType.AI_OPERATION,
        "ai.usage.validation_error",
        session?.user?.id || "anonymous",
        "ai_usage",
        {
          error: validationError.error,
          details: JSON.stringify(validationError.details),
          status: "error"
        },
        AuditEventStatus.FAILURE
      );
      return new Response(JSON.stringify(validationError), {
        status: validationError.status,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    if (params.allUsers && !isAdmin) {
      return new Response(
        JSON.stringify({
          error: "Forbidden",
          message: "You do not have permission to view all users data"
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.usage.request",
      session?.user?.id || "anonymous",
      "ai_usage",
      {
        period: params.period,
        allUsers: params.allUsers,
        startDate: params.startDate,
        endDate: params.endDate,
        status: "success"
      },
      AuditEventStatus.SUCCESS
    );
    const statsOptions = {
      period: params.period
    };
    if (params.startDate) {
      statsOptions.startDate = new Date(params.startDate);
    }
    if (params.endDate) {
      statsOptions.endDate = new Date(params.endDate);
    }
    if (!params.allUsers && session?.user?.id) {
      statsOptions.userId = session.user.id;
    }
    const stats = await getAIUsageStats(statsOptions);
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=60",
        // Cache for 1 minute
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString()
      }
    });
  } catch (error) {
    console.error("Error in AI usage API:", error);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.usage.error",
      session?.user?.id || "anonymous",
      "ai_usage",
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0,
        status: "error"
      },
      AuditEventStatus.FAILURE
    );
    return handleApiError(error);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
