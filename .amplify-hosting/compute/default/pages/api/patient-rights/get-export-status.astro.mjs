;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a67ad3e6-4e43-4221-92e2-788cc4a2007b",e._sentryDebugIdIdentifier="sentry-dbid-a67ad3e6-4e43-4221-92e2-788cc4a2007b")}catch(e){}}();import { g as getDataExportDetails } from '../../../chunks/dataPortabilityService_5gfErCYg.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { p as protectApi } from '../../../chunks/apiAuth_ByKVv2GF.mjs';
import { z } from 'zod';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api-export-status");
const exportStatusSchema = z.object({
  exportId: z.string().min(1, "Export ID is required")
});
const GET = async ({ request, url }) => {
  try {
    const exportId = url.searchParams.get("exportId");
    if (!exportId) {
      logger.warn("Missing export ID in status request");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Export ID is required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const validation = exportStatusSchema.safeParse({ exportId });
    if (!validation.success) {
      const errors = validation.error.flatten();
      logger.warn("Invalid export ID format", { errors });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid export ID format",
          errors: errors.fieldErrors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const authResult = await protectApi(request);
    if (!authResult.success) {
      logger.warn("Unauthorized attempt to check export status", {
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
    const result = await getDataExportDetails(
      exportId,
      authResult.userId || "unknown"
    );
    if (!result.success) {
      if (result.error === "not_found") {
        logger.warn("Export request not found", { exportId });
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
      if (result.error === "unauthorized") {
        logger.warn("User not authorized to view this export", {
          userId: authResult.userId,
          exportId
        });
        return new Response(
          JSON.stringify({
            success: false,
            message: "You are not authorized to view this export request"
          }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      logger.error("Error retrieving export status", {
        exportId,
        error: result.message
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: result.message || "An error occurred retrieving export status"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    logger.info("Export status retrieved successfully", {
      exportId,
      status: result.status,
      userId: authResult.userId
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          exportId: result.exportId,
          status: result.status,
          progress: result.progress,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          estimatedCompletionTime: result.estimatedCompletionTime,
          completedAt: result.completedAt,
          downloadUrl: result.downloadUrl,
          expiresAt: result.expiresAt,
          formats: result.formats,
          dataTypes: result.dataTypes,
          patientId: result.patientId,
          requestedBy: result.requestedBy,
          priority: result.priority
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error checking export status", {
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
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
