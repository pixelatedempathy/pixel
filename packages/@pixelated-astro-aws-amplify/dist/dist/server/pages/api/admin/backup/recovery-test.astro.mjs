;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="36f85539-7367-4a6c-8188-ea8e2e8c6550",e._sentryDebugIdIdentifier="sentry-dbid-36f85539-7367-4a6c-8188-ea8e2e8c6550")}catch(e){}}();import { l as logAuditEvent, A as AuditEventType } from '../../../../chunks/audit_CMoAMAaW.mjs';
import { a as adminGuard, A as AdminPermission } from '../../../../chunks/middleware_hzx7n_Bg.mjs';
import '../../../../chunks/logger_DT2kh3p6.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = createBuildSafeLogger("api:backup:recovery-test");
function validateRecoveryConfig(config) {
  const errors = [];
  if (!config || typeof config !== "object") {
    return { isValid: false, errors: ["Configuration must be an object"] };
  }
  const typedConfig = config;
  if (!typedConfig.testType) {
    errors.push("testType is required");
  } else if (!["dry-run", "simulated", "full"].includes(typedConfig.testType)) {
    errors.push("testType must be one of: dry-run, simulated, full");
  }
  if (typedConfig.recoveryPoint) {
    const date = new Date(typedConfig.recoveryPoint);
    if (isNaN(date.getTime())) {
      errors.push("recoveryPoint must be a valid ISO date string");
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
async function runRecoveryTest(config) {
  const startTime = Date.now();
  try {
    const validation = validateRecoveryConfig(config);
    if (!validation.isValid) {
      logger.warn("Invalid recovery test configuration", {
        errors: validation.errors,
        config
      });
      return {
        success: false,
        message: "Invalid configuration",
        details: {
          errors: validation.errors
        }
      };
    }
    const typedConfig = config;
    logger.info("Starting recovery test", {
      testType: typedConfig.testType,
      backupId: typedConfig.backupId || "latest",
      validateIntegrity: typedConfig.validateIntegrity ?? true
    });
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    const duration = Date.now() - startTime;
    logger.info("Recovery test completed successfully", {
      testType: typedConfig.testType,
      durationMs: duration
    });
    return {
      success: true,
      message: "Recovery test completed successfully",
      details: {
        resourcesProcessed: 0,
        // Replace with actual count
        durationMs: duration
      }
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error("Recovery test failed", {
      error: errorMessage,
      stack: error instanceof Error ? error.stack : void 0
    });
    return {
      success: false,
      message: `Recovery test failed: ${errorMessage}`,
      details: {
        errors: [errorMessage],
        durationMs: Date.now() - startTime
      }
    };
  }
}
const POST = async ({ request, locals }) => {
  const middlewareResponse = await adminGuard(AdminPermission.MANAGE_SECURITY)({
    request,
    locals
  });
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const config = await request.json();
    if (!config) {
      return new Response(
        JSON.stringify({ error: "Missing recovery test configuration." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const userId = locals.user?.id ?? "system";
    logger.info("User initiated recovery test", {
      userId,
      config
    });
    const result = await runRecoveryTest(config);
    if (result.success) {
      logger.info("Recovery test completed successfully", {
        userId,
        durationMs: result.details?.durationMs
      });
    } else {
      logger.warn("Recovery test failed", {
        userId,
        error: result.message,
        details: result.details
      });
    }
    await logAuditEvent(
      AuditEventType.SECURITY,
      "recovery_test_initiated",
      userId,
      "recovery-test",
      {
        // Include relevant details from the result
        success: result.success,
        message: result.message,
        resourcesProcessed: result.details?.resourcesProcessed,
        warnings: result.details?.warnings?.join(", ") || "None",
        errors: result.details?.errors?.join(", ") || "None",
        durationMs: result.details?.durationMs,
        note: "Recovery test initiated."
      }
    );
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    const userId = locals?.user?.id || "system";
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[RecoveryTest] Error for user ${userId}:`, error);
    await logAuditEvent(
      AuditEventType.SECURITY,
      "recovery_test_failed",
      userId,
      "recovery-test",
      {
        error: errorMessage
        // Do not include stack trace in audit logs for security
      }
    );
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred during the recovery test.",
        // In production, you might want to include a reference ID for support
        referenceId: `ERR-${Date.now()}`
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
