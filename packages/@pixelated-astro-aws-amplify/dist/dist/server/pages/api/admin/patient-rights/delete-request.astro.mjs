;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e369850c-b732-4aa2-9cb8-48c588c082b2",e._sentryDebugIdIdentifier="sentry-dbid-e369850c-b732-4aa2-9cb8-48c588c082b2")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { p as protectRoute } from '../../../../chunks/serverAuth_4gmt5n21.mjs';
import { c as createDataDeletionRequest } from '../../../../chunks/dataDeleteService_DxIH-OCS.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = createBuildSafeLogger("patient-rights-api");
const POST = protectRoute({
  requiredRole: "admin"
})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const formData = await request.formData();
    const patientId = formData.get("patient-id");
    const patientName = formData.get("patient-name");
    const deletionScope = formData.get("deletion-scope");
    const deletionReason = formData.get("deletion-reason");
    const additionalDetails = formData.get("additional-details") || "";
    const hipaaConfirmation = formData.get("hipaa-confirmation") === "on";
    let dataCategories = [];
    if (deletionScope === "specific") {
      dataCategories = formData.getAll("data-categories");
    }
    if (!patientId || !patientName || !deletionScope || !deletionReason) {
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
    if (deletionScope === "specific" && (!dataCategories || dataCategories.length === 0)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please select at least one data category to delete"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!hipaaConfirmation) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "HIPAA compliance confirmation is required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const deletionRequest = {
      "patient-id": patientId,
      "patient-name": patientName,
      "deletion-scope": deletionScope,
      "deletion-reason": deletionReason,
      "additional-details": additionalDetails,
      "hipaa-confirmation": hipaaConfirmation
    };
    if (deletionScope === "specific") {
      deletionRequest["data-categories"] = dataCategories;
    }
    const result = await createDataDeletionRequest({
      patientId,
      patientName,
      dataScope: deletionScope,
      dataCategories: deletionScope === "specific" ? dataCategories : [],
      reason: deletionReason,
      additionalDetails,
      requestedBy: user.id
    });
    logger.info("Data deletion request created", {
      requestId: result.id,
      patientId,
      scope: deletionScope,
      adminUser: user.id
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Deletion request submitted successfully",
        requestId: result.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error processing data deletion request", {
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
