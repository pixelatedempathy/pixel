;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3ac497ee-d525-49c1-8ed7-d982e9a4b91a",e._sentryDebugIdIdentifier="sentry-dbid-3ac497ee-d525-49c1-8ed7-d982e9a4b91a")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { p as protectApi } from '../../../chunks/apiAuth_Da2e5bsA.mjs';
import { a as createDataExportRequest } from '../../../chunks/dataPortabilityService_bwY7oHOP.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api-export-request");
const exportRequestSchema = z.object({
  patientId: z.string().uuid({ message: "Patient ID must be a valid UUID" }),
  format: z.enum(["json", "csv", "xml", "pdf"], {
    errorMap: () => ({ message: "Format must be one of: json, csv, xml, pdf" })
  }),
  includeCategories: z.array(z.string()).optional(),
  dateRange: z.object({
    start: z.string().optional(),
    end: z.string().optional()
  }).optional()
});
const POST = async ({ request }) => {
  try {
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (error) {
      logger.error("Invalid JSON in request body", {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0,
        url: request.url,
        method: request.method
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: "invalid_request",
          message: "Invalid JSON in request body"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const validationResult = exportRequestSchema.safeParse(requestBody);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors.map((e) => e.message).join(", ");
      return new Response(
        JSON.stringify({
          success: false,
          error: "invalid_parameters",
          message: errorMessage
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const authResult = await protectApi(request);
    if (!authResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "unauthorized",
          message: "Authentication required"
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const { userId } = authResult;
    const { patientId, format, includeCategories } = validationResult.data;
    const exportResult = await createDataExportRequest({
      patientId,
      formats: [format],
      dataTypes: includeCategories || ["all"],
      reason: "User-initiated export",
      priority: "normal",
      requestedBy: userId || "unknown"
    });
    if (!exportResult.success) {
      const status = exportResult.error === "unauthorized" ? 403 : exportResult.error === "not_found" ? 404 : exportResult.error === "validation_error" ? 400 : 500;
      return new Response(
        JSON.stringify({
          success: false,
          error: exportResult.error,
          message: exportResult.message
        }),
        {
          status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    logger.info("Export request created", {
      exportId: exportResult.exportId,
      patientId,
      format,
      userId
    });
    return new Response(JSON.stringify(exportResult), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    logger.error("Error creating export request", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "internal_error",
        message: "An unexpected error occurred while creating the export request"
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
