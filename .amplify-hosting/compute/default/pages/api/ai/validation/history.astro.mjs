;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a2265e07-1088-4f32-9db7-1e0b28a7da21",e._sentryDebugIdIdentifier="sentry-dbid-a2265e07-1088-4f32-9db7-1e0b28a7da21")}catch(e){}}();import { v as validationRunner } from '../../../../chunks/ContinuousValidationRunner_DXOpFTyY.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { g as getSession } from '../../../../chunks/session_CShSauy5.mjs';
import { v as verifySecureToken } from '../../../../chunks/security_gHrsSQMQ.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_BtMut9h8.mjs';
import '../../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../../renderers.mjs';

const GET = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-history");
  try {
    let userId = "system";
    let authenticatedViaToken = false;
    const authHeader = request.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      try {
        const tokenPayload = verifySecureToken(token);
        if (tokenPayload && tokenPayload.purpose === "ai-validation" && tokenPayload.scope === "validation:read") {
          userId = "github-actions";
          authenticatedViaToken = true;
          logger.info("Authenticated via API token for validation history");
        } else {
          logger.warn("Invalid API token provided for validation history");
        }
      } catch (error) {
        logger.warn("Failed to verify API token:", error);
      }
    }
    if (!authenticatedViaToken) {
      const sessionData = await getSession(request);
      if (!sessionData) {
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
      userId = sessionData.user?.id || "system";
    }
    const url = new URL(request.url);
    const limitParam = url.searchParams.get("limit");
    const limit = limitParam !== null && /^\d+$/.test(limitParam) ? parseInt(limitParam, 10) : 20;
    if (limit <= 0 || isNaN(limit)) {
      return new Response(
        JSON.stringify({ error: "Invalid limit parameter" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    await validationRunner.initialize();
    const history = await validationRunner.getRunHistory(limit);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-history-get",
      userId,
      "validation-api",
      {
        userId,
        entriesCount: history.length,
        authMethod: authenticatedViaToken ? "api-token" : "session"
      },
      AuditEventStatus.SUCCESS
    );
    return new Response(
      JSON.stringify({
        success: true,
        history,
        count: history.length
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate"
        }
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error(`Failed to get validation history: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-history-get",
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
        message: `Failed to get validation history: ${errorMessage}`
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
