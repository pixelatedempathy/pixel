;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c9611429-1162-4704-a6e3-2cb6a1be6ca7",e._sentryDebugIdIdentifier="sentry-dbid-c9611429-1162-4704-a6e3-2cb6a1be6ca7")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { g as getCurrentUser } from '../../../chunks/auth_B2tmxZMv.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("export-status");
const exportStatusSchema = z.object({
  exportId: z.string().min(1, "Export ID is required")
});
const GET = async ({ request, cookies }) => {
  try {
    const url = new URL(request.url);
    const exportId = url.searchParams.get("exportId");
    const validationResult = exportStatusSchema.safeParse({ exportId });
    if (!validationResult.success) {
      logger.warn("Invalid export status request", {
        errors: validationResult.error.errors
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid export ID",
          errors: validationResult.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const user = await getCurrentUser(cookies);
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "Authentication required" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const hasPermission = user.permissions?.includes("data:export:read") || user.permissions?.includes("admin:patient-rights");
    if (!hasPermission) {
      logger.warn("Permission denied for checking export status", {
        userId: user.id,
        exportId: validationResult.data.exportId,
        permissions: user.permissions
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "You do not have permission to check export status"
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    let status, progress, estimatedCompletionTime, downloadUrl;
    const validatedExportId = validationResult.data.exportId;
    if (validatedExportId.includes("complete")) {
      status = "completed";
      progress = 100;
      downloadUrl = `/api/patient-rights/download-export?exportId=${validatedExportId}&token=mock-secure-token`;
    } else if (validatedExportId.includes("fail")) {
      status = "failed";
      progress = 50;
    } else if (validatedExportId.includes("process")) {
      status = "processing";
      progress = 60;
      estimatedCompletionTime = new Date(
        Date.now() + 10 * 60 * 1e3
      ).toISOString();
    } else {
      status = "pending";
      progress = 10;
      estimatedCompletionTime = new Date(
        Date.now() + 25 * 60 * 1e3
      ).toISOString();
    }
    logger.info("Export status checked", {
      exportId: validatedExportId,
      requestedBy: user.id,
      status
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          exportId: validatedExportId,
          status,
          progress,
          estimatedCompletionTime,
          downloadUrl,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error checking export status", { error });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while checking the export status"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
