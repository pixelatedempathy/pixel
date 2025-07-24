;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0b3f32f0-8ada-455d-82de-70d596b10d7d",e._sentryDebugIdIdentifier="sentry-dbid-0b3f32f0-8ada-455d-82de-70d596b10d7d")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { a as auth } from '../../../chunks/auth_B2tmxZMv.mjs';
import { randomUUID } from 'crypto';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("patient-rights-export");
const createExportSchema = z.object({
  patientId: z.string().min(1, "Patient ID is required"),
  dataFormat: z.enum(["json", "csv", "fhir", "ccd", "hl7"]),
  dataSections: z.array(z.string()).min(1, "At least one data section must be selected"),
  recipientType: z.enum(["patient", "provider", "research"]),
  recipientName: z.string().min(1, "Recipient name is required"),
  recipientEmail: z.string().email("Valid email address is required"),
  notes: z.string().optional(),
  includeEncryptionKey: z.boolean().optional().default(true)
});
const POST = async ({ request }) => {
  try {
    const session = await auth.verifySession(request);
    if (!session) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!session.permissions?.includes(
      "create:data_exports"
    )) {
      return new Response(
        JSON.stringify({ success: false, message: "Insufficient permissions" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    const requestData = await request.json();
    const validationResult = createExportSchema.safeParse(requestData);
    if (!validationResult.success) {
      logger.warn("Invalid export request data", {
        errors: validationResult.error.errors,
        userId: session.userId
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
    const exportRequest = {
      id: randomUUID(),
      patientId: validatedData.patientId,
      initiatedBy: session.userId,
      initiatedDate: (/* @__PURE__ */ new Date()).toISOString(),
      recipientType: validatedData.recipientType,
      recipientName: validatedData.recipientName,
      recipientEmail: validatedData.recipientEmail,
      dataFormat: validatedData.dataFormat,
      dataSections: validatedData.dataSections,
      status: "pending",
      notes: validatedData.notes,
      includeEncryptionKey: validatedData.includeEncryptionKey
    };
    logger.info("Export request created", {
      exportId: exportRequest.id,
      patientId: exportRequest.patientId,
      userId: session.userId,
      recipientType: exportRequest.recipientType,
      recipientEmail: exportRequest.recipientEmail,
      dataFormat: exportRequest.dataFormat,
      dataSections: exportRequest.dataSections.join(",")
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Export request created successfully",
        data: {
          exportId: exportRequest.id
        }
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error creating export request", { error });
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
