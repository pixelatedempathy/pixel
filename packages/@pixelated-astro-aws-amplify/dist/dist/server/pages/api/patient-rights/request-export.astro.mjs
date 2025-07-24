;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="254639aa-2d2e-44c8-9b84-ba5addba8719",e._sentryDebugIdIdentifier="sentry-dbid-254639aa-2d2e-44c8-9b84-ba5addba8719")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { g as getSession } from '../../../chunks/session_DeimXgPx.mjs';
import { a as createDataExportRequest } from '../../../chunks/dataPortabilityService_bwY7oHOP.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api:patient-rights:request-export");
const exportRequestSchema = z.object({
  patientId: z.string().uuid("Patient ID must be a valid UUID"),
  formats: z.array(z.enum(["json", "csv", "pdf"])).min(1, "At least one export format is required"),
  dataTypes: z.array(z.string()).min(1, "At least one data type is required"),
  reason: z.string().min(1, "Reason for export is required").max(500, "Reason cannot exceed 500 characters"),
  priority: z.enum(["normal", "high"]).optional().default("normal")
});
const POST = async ({ request }) => {
  try {
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (error) {
      logger.warn("Invalid JSON in request body", {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: "bad_request",
          message: "Invalid JSON in request body"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const parseResult = exportRequestSchema.safeParse(requestBody);
    if (!parseResult.success) {
      const { errors } = parseResult.error;
      logger.warn("Invalid export request format", { errors });
      return new Response(
        JSON.stringify({
          success: false,
          error: "validation_error",
          message: "Invalid export request format",
          details: errors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const validatedData = parseResult.data;
    const sessionData = await getSession(request);
    if (!sessionData || !sessionData.user) {
      logger.warn("Unauthorized access attempt to request export API");
      return new Response(
        JSON.stringify({
          success: false,
          error: "unauthorized",
          message: "Authentication required"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const userId = sessionData.user.id;
    const result = await createDataExportRequest({
      patientId: validatedData.patientId,
      formats: validatedData.formats,
      dataTypes: validatedData.dataTypes,
      reason: validatedData.reason,
      priority: validatedData.priority,
      requestedBy: userId
    });
    if (!result.success) {
      let statusCode = 500;
      if (result.error === "not_found") {
        statusCode = 404;
      }
      if (result.error === "unauthorized") {
        statusCode = 403;
      }
      if (result.error === "invalid_request") {
        statusCode = 400;
      }
      return new Response(JSON.stringify(result), {
        status: statusCode,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error processing export request", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "internal_error",
        message: "An unexpected error occurred while processing export request"
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
