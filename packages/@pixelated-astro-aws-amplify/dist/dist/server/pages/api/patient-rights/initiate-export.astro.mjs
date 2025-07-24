;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7986cc13-a6a3-4b8d-9406-187e1331afbb",e._sentryDebugIdIdentifier="sentry-dbid-7986cc13-a6a3-4b8d-9406-187e1331afbb")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { g as getCurrentUser } from '../../../chunks/auth_DrPSEcKU.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("initiate-export");
const initiateExportSchema = z.object({
  patientId: z.string().min(1, "Patient ID is required"),
  dataFormats: z.array(z.enum(["json", "csv", "pdf", "xml"])).min(1, "At least one data format is required"),
  dataSections: z.array(z.string()).min(1, "At least one data section is required"),
  recipientType: z.enum(["patient", "provider", "third-party"]),
  recipientDetails: z.object({
    name: z.string().min(1, "Recipient name is required"),
    email: z.string().email("Valid email is required"),
    organization: z.string().optional(),
    phone: z.string().optional()
  }),
  notes: z.string().optional(),
  encryptionRequested: z.boolean().default(false),
  urgencyLevel: z.enum(["standard", "urgent"]).default("standard")
});
const POST = async ({ request, cookies }) => {
  try {
    const user = await getCurrentUser(cookies);
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "Authentication required" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const hasPermission = user.permissions?.includes("data:export:create") || user.permissions?.includes("admin:patient-rights");
    if (!hasPermission) {
      logger.warn("Permission denied for initiating export", {
        userId: user.id,
        permissions: user.permissions
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "You do not have permission to initiate data exports"
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    const requestData = await request.json().catch(() => ({}));
    const validationResult = initiateExportSchema.safeParse(requestData);
    if (!validationResult.success) {
      logger.warn("Invalid export request data", {
        errors: validationResult.error.errors
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
    const exportId = `export-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
    logger.info("Data export request initiated", {
      exportId,
      patientId: validatedData.patientId,
      requestedBy: user.id,
      recipientType: validatedData.recipientType,
      dataFormats: validatedData.dataFormats,
      urgencyLevel: validatedData.urgencyLevel
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Data export request initiated successfully",
        data: {
          exportId,
          status: "pending",
          estimatedCompletionTime: new Date(
            Date.now() + 30 * 60 * 1e3
          ).toISOString()
          // 30 minutes from now
        }
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error initiating export request", { error });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your export request"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
