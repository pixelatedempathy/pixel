;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53288d75-0897-41fb-af83-f0c2007ec947",e._sentryDebugIdIdentifier="sentry-dbid-53288d75-0897-41fb-af83-f0c2007ec947")}catch(e){}}();import { e as emotionValidationPipeline } from '../../../../chunks/EmotionValidationPipeline_BSv6jzUq.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { g as getCurrentUser } from '../../../../chunks/auth_DrPSEcKU.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_CMoAMAaW.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

function getCookiesFromRequest(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  return {
    get: (name) => {
      const match = cookieHeader.match(new RegExp(`${name}=([^;]+)`));
      return match ? { value: match[1] } : void 0;
    },
    // Add required methods for AstroCookies interface
    has: (name) => {
      return cookieHeader.includes(`${name}=`);
    },
    set: () => {
    },
    delete: () => {
    }
  };
}
const POST = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-api");
  try {
    const cookies = getCookiesFromRequest(request);
    const user = await getCurrentUser(cookies);
    if (!user) {
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
    if (user.role !== "admin") {
      await createAuditLog(
        AuditEventType.SECURITY,
        "validation-pipeline-stop-unauthorized",
        user.id,
        "validation-api",
        {
          userId: user.id,
          email: user.email,
          role: user.role
        },
        AuditEventStatus.FAILURE
      );
      return new Response(
        JSON.stringify({
          error: "Forbidden",
          message: "You do not have permission to stop the validation pipeline"
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    logger.info("Stopping continuous validation");
    emotionValidationPipeline.stopContinuousValidation();
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-stop",
      user.id,
      "validation-api",
      {
        userId: user.id,
        username: user.fullName || user.email
      },
      AuditEventStatus.SUCCESS
    );
    return new Response(
      JSON.stringify({
        success: true,
        message: "Continuous validation stopped successfully"
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
    logger.error(`Error stopping continuous validation: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-pipeline-stop",
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
        message: `Failed to stop continuous validation: ${errorMessage}`
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
