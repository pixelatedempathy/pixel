;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33b7c6d9-812f-4d64-9bea-1e97945f18b3",e._sentryDebugIdIdentifier="sentry-dbid-33b7c6d9-812f-4d64-9bea-1e97945f18b3")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { g as getUser } from '../../../chunks/sessionUtils_DRjKSnQs.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("patient-rights-export");
const downloadRequestSchema = z.object({
  exportId: z.string().min(1, "Export ID is required"),
  token: z.string().min(1, "Security token is required")
});
const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const exportId = url.searchParams.get("exportId");
    const token = url.searchParams.get("token");
    const validationResult = downloadRequestSchema.safeParse({
      exportId,
      token
    });
    if (!validationResult.success) {
      logger.warn("Invalid export download request", {
        errors: validationResult.error.errors
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request parameters",
          errors: validationResult.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validatedData = validationResult.data;
    const user = await getUser(request);
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "Authentication required" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const hasPermission = user.permissions?.includes("data:export:download") || user.permissions?.includes("admin:patient-rights");
    if (!hasPermission) {
      logger.warn("Permission denied for downloading export", {
        userId: user.id,
        exportId: validatedData.exportId,
        permissions: user.permissions
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "You do not have permission to download exports"
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    if (token !== "mock-secure-token") {
      logger.warn("Invalid security token for export download", {
        exportId: validatedData.exportId,
        userId: user.id
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid or expired security token"
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const safeExportId = validatedData.exportId;
    if (!safeExportId.includes("complete")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Export is not ready for download yet"
        }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }
    logger.info("Export download initiated", {
      exportId: safeExportId,
      userId: user.id
    });
    const mockExportData = {
      metadata: {
        exportId: safeExportId,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        patientId: process.env.PATIENT_ID || "example-patient-id",
        requestedBy: user.id,
        formatVersion: "1.0"
      },
      patientData: {
        demographics: {
          name: "Jane Doe",
          dateOfBirth: "1980-01-01",
          gender: "Female",
          address: "123 Main St, Anytown, USA"
        },
        medicalRecords: [
          {
            date: "2023-01-15",
            provider: "Dr. Smith",
            notes: "Annual physical examination",
            diagnoses: [
              "Z00.00 - Encounter for general adult medical examination without abnormal findings"
            ]
          },
          {
            date: "2023-03-22",
            provider: "Dr. Johnson",
            notes: "Follow-up visit",
            diagnoses: [
              "J06.9 - Acute upper respiratory infection, unspecified"
            ]
          }
        ],
        medications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Daily",
            startDate: "2022-11-01"
          }
        ]
      }
    };
    const fileContent = JSON.stringify(mockExportData, null, 2);
    const filename = `patient-data-export-${safeExportId}.json`;
    return new Response(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Security-Policy": "default-src 'none'",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    logger.error("Error processing export download", { error });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your download request"
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
