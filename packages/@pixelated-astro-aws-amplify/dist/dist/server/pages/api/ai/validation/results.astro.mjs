;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9fe0df34-e909-4ba3-a772-fcf13f94c5fa",e._sentryDebugIdIdentifier="sentry-dbid-9fe0df34-e909-4ba3-a772-fcf13f94c5fa")}catch(e){}}();import { e as emotionValidationPipeline } from '../../../../chunks/EmotionValidationPipeline_BSv6jzUq.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { i as isAuthenticated } from '../../../../chunks/auth_DrPSEcKU.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_CMoAMAaW.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const rateLimitMap = /* @__PURE__ */ new Map();
const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1e3;
const GET = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-api");
  try {
    const authResult = await isAuthenticated(request);
    const userKey = authResult.authenticated && authResult.user?.id ? `user:${authResult.user.id}` : `ip:${request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown"}`;
    const now = Date.now();
    let entry = rateLimitMap.get(userKey);
    if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
      entry = { count: 0, start: now };
    }
    entry.count++;
    rateLimitMap.set(userKey, entry);
    if (entry.count > RATE_LIMIT) {
      return new Response(
        JSON.stringify({
          error: "Too Many Requests",
          message: "Rate limit exceeded. Try again later."
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!authResult.user?.isAdmin) {
      await createAuditLog(
        AuditEventType.SECURITY_EVENT,
        "validation-pipeline-results-unauthorized",
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
          message: "You do not have permission to view validation results"
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!emotionValidationPipeline.isInitialized) {
      await emotionValidationPipeline.initialize();
    }
    const validationResults = emotionValidationPipeline.getValidationResults();
    const validationStats = emotionValidationPipeline.getValidationStats();
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-results",
      authResult.user?.id || "system",
      "validation-api",
      {
        userId: authResult.user?.id,
        resultsCount: validationResults.length
      },
      AuditEventStatus.SUCCESS
    );
    const responseData = {
      ...validationStats,
      results: validationResults,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, private",
        "ETag": `"validation-${validationResults.length}-${validationStats.runCount}"`
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error(`Error retrieving validation results: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-results",
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
        message: `Failed to retrieve validation results: ${errorMessage}`
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
