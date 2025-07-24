;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64de62bd-7947-49bf-94b2-f697809c63ea",e._sentryDebugIdIdentifier="sentry-dbid-64de62bd-7947-49bf-94b2-f697809c63ea")}catch(e){}}();import { v as validationRunner } from '../../../../chunks/ContinuousValidationRunner_B8SCxJVq.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../../chunks/audit_DWq5CQbl.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  const logger = createBuildSafeLogger("validation-webhook");
  try {
    await validationRunner.initialize();
    const payload = await request.json();
    const event = request.headers.get("x-github-event") || "unknown";
    const signature = request.headers.get("x-hub-signature-256") || "";
    const result = await validationRunner.handleWebhook(
      payload,
      signature,
      event
    );
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-webhook",
      "system",
      "validation-api",
      {
        event,
        success: result.success,
        message: result.message
      },
      result.success ? AuditEventStatus.SUCCESS : AuditEventStatus.FAILURE
    );
    if (result.success) {
      return new Response(
        JSON.stringify({
          success: true,
          message: result.message
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
          success: false,
          message: result.message
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
    logger.error(`Webhook processing error: ${errorMessage}`);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "validation-webhook",
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
        message: `Failed to process webhook: ${errorMessage}`
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
