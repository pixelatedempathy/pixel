;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d31ef00-8846-4278-981f-4dccf2050935",e._sentryDebugIdIdentifier="sentry-dbid-8d31ef00-8846-4278-981f-4dccf2050935")}catch(e){}}();import { e as emotionValidationPipeline } from '../../../../chunks/EmotionValidationPipeline_DXtTzUKO.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { i as isAuthenticated } from '../../../../chunks/auth_Ddp7K708.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_DWq5CQbl.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
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
        "validation-pipeline-run-unauthorized",
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
          message: "You do not have permission to run the validation pipeline"
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
    logger.info("Starting validation run");
    const results = await emotionValidationPipeline.runValidation();
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-run",
      authResult.user?.id || "system",
      "validation-api",
      {
        userId: authResult.user?.id,
        resultsCount: results.length,
        passedCount: results.filter((r) => r.passed).length
      },
      AuditEventStatus.SUCCESS
    );
    return new Response(
      JSON.stringify({
        success: true,
        message: "Validation run completed successfully",
        resultsCount: results.length
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
    logger.error(`Error running validation: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-run",
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
        message: `Failed to run validation: ${errorMessage}`
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
