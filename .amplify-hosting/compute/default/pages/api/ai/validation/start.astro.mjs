;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0faac39e-7ccd-4953-bd8a-28dc492601d1",e._sentryDebugIdIdentifier="sentry-dbid-0faac39e-7ccd-4953-bd8a-28dc492601d1")}catch(e){}}();import { e as emotionValidationPipeline } from '../../../../chunks/EmotionValidationPipeline_By-IjV6H.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { i as isAuthenticated } from '../../../../chunks/auth_B2tmxZMv.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_BtMut9h8.mjs';
import '../../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-api");
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
        "validation-pipeline-start-unauthorized",
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
          message: "You do not have permission to start the validation pipeline"
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
    logger.info("Starting continuous validation");
    emotionValidationPipeline.startContinuousValidation();
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-start",
      authResult.user?.id || "system",
      "validation-api",
      {
        userId: authResult.user?.id,
        username: authResult.user?.username || authResult.user?.email
      },
      AuditEventStatus.SUCCESS
    );
    return new Response(
      JSON.stringify({
        success: true,
        message: "Continuous validation started successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error(`Error starting continuous validation: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-start",
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
        message: `Failed to start continuous validation: ${errorMessage}`
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
