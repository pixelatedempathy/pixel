;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7e3b9b66-c217-4cfd-82d3-e718f6f63b36",e._sentryDebugIdIdentifier="sentry-dbid-7e3b9b66-c217-4cfd-82d3-e718f6f63b36")}catch(e){}}();import { c as cancelDataExportRequest } from '../../../chunks/dataPortabilityService_DGVTgF91.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { p as protectApi } from '../../../chunks/apiAuth_N-291x6N.mjs';
import { z } from 'zod';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api-cancel-export");
const cancelExportSchema = z.object({
  exportId: z.string().min(1, "Export ID is required"),
  reason: z.string().optional()
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const validation = cancelExportSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.flatten();
      logger.warn("Invalid cancel export request", { errors });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request data",
          errors: errors.fieldErrors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { exportId, reason } = validation.data;
    const authResult = await protectApi(request);
    if (!authResult.success) {
      logger.warn("Unauthorized attempt to cancel export request", {
        ip: request.headers.get("x-forwarded-for") || "unknown"
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Authentication required"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const result = await cancelDataExportRequest({
      exportId,
      cancelledBy: authResult.userId || "unknown",
      reason: reason || "User-initiated cancellation"
    });
    if (!result.success) {
      if (result.message.includes("not found")) {
        logger.warn("Export request not found for cancellation", { exportId });
        return new Response(
          JSON.stringify({
            success: false,
            message: "Export request not found"
          }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      if (result.message.includes("already completed") || result.message.includes("already cancelled")) {
        logger.warn("Cannot cancel export due to its status", {
          exportId,
          status: result.status
        });
        return new Response(
          JSON.stringify({
            success: false,
            message: result.message,
            status: result.status
          }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      logger.error("Failed to cancel export request", { error: result.message });
      return new Response(
        JSON.stringify({
          success: false,
          message: result.message
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    logger.info("Export request cancelled successfully", {
      exportId,
      cancelledBy: authResult.userId,
      reason
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Export request cancelled successfully",
        data: {
          exportId,
          status: "cancelled"
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error cancelling export request", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An internal server error occurred"
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
