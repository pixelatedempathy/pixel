;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="01a13254-978f-447c-af4f-3c6b415f3c51",e._sentryDebugIdIdentifier="sentry-dbid-01a13254-978f-447c-af4f-3c6b415f3c51")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { p as protectRoute } from '../../../../chunks/serverAuth_DpRotyBD.mjs';
import { u as updateDataDeletionRequest } from '../../../../chunks/dataDeleteService_BSM2SCO2.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = createBuildSafeLogger("patient-rights-api");
const POST = protectRoute({
  requiredRole: "admin"
})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const body = await request.json();
    if (!body.id || !body.status) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const validStatuses = ["pending", "completed", "denied", "in-progress"];
    if (!validStatuses.includes(body.status)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid status value"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const result = await updateDataDeletionRequest({
      id: body.id,
      status: body.status,
      processedBy: user.id,
      processingNotes: body.processingNotes || void 0
    });
    logger.info("Data deletion request updated", {
      requestId: body.id,
      newStatus: body.status,
      adminUser: user.id
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: `Deletion request ${body.status === "completed" ? "approved" : body.status === "denied" ? "denied" : "updated"} successfully`,
        request: result
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error updating data deletion request", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your request"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
