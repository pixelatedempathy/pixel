;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="094b05d9-c436-4de8-9129-3d233facd8d3",e._sentryDebugIdIdentifier="sentry-dbid-094b05d9-c436-4de8-9129-3d233facd8d3")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { g as getSession } from '../../../chunks/session_CShSauy5.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api:patient-rights:update-export");
const updateExportSchema = z.object({
  exportId: z.string().min(1, "Export ID is required"),
  status: z.enum([
    "pending",
    "processing",
    "completed",
    "failed",
    "cancelled",
    "delivered"
  ]),
  notes: z.string().optional(),
  completionDetails: z.object({
    downloadUrl: z.string().url().optional(),
    expiresAt: z.string().optional(),
    encryptionKeyUrl: z.string().url().optional(),
    fileSize: z.number().optional(),
    fileChecksum: z.string().optional()
  }).optional()
});
const put = async ({ request }) => {
  try {
    const sessionData = await getSession(request);
    if (!sessionData || !sessionData.user) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const { user } = sessionData;
    if (!user.app_metadata?.permissions?.includes("update:data_exports")) {
      return new Response(
        JSON.stringify({ success: false, message: "Insufficient permissions" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    const requestData = await request.json();
    const validationResult = updateExportSchema.safeParse(requestData);
    if (!validationResult.success) {
      logger.warn("Invalid export update data", {
        errors: validationResult.error.errors,
        userId: user.id
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request data",
          errors: validationResult.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validatedData = validationResult.data;
    if (validatedData.status === "completed" && !validatedData.completionDetails) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Completion details are required when status is completed"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    logger.info("Export request updated", {
      exportId: validatedData.exportId,
      userId: user.id,
      newStatus: validatedData.status,
      hasCompletionDetails: !!validatedData.completionDetails
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Export request updated successfully"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error updating export request", { error });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your request"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  put
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
