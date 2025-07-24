;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="869906c3-d1ab-4839-b780-0fa706b2cb62",e._sentryDebugIdIdentifier="sentry-dbid-869906c3-d1ab-4839-b780-0fa706b2cb62")}catch(e){}}();import { g as getSession } from '../../../../chunks/session_CjG7jjfF.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("default");
const exportStore = /* @__PURE__ */ new Map();
const GET = async ({ params, request }) => {
  try {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Export ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const exportData = await getExportById(id);
    if (!exportData) {
      return new Response(JSON.stringify({ error: "Export not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const hasAccess = await checkExportAccess(session.user.id, id);
    if (!hasAccess) {
      return new Response(
        JSON.stringify({ error: "Access denied to this export" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const responseData = typeof exportData.data === "string" ? exportData.data : new Uint8Array(exportData.data);
    await recordDownloadAction(session.user.id, id);
    return new Response(responseData, {
      status: 200,
      headers: {
        "Content-Type": exportData.mimeType,
        "Content-Disposition": `attachment; filename="${exportData.filename}"`,
        "X-Verification-Token": exportData.verificationToken || ""
      }
    });
  } catch (error) {
    logger.error("Export download API error:", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(JSON.stringify({ error: "Download failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function getExportById(id) {
  return exportStore.get(id);
}
async function checkExportAccess(_userId, _exportId) {
  return true;
}
async function recordDownloadAction(userId, exportId) {
  logger.info(`User ${userId} downloaded export ${exportId}`);
}
async function storeExportData(exportData) {
  exportStore.set(exportData.id, exportData);
  setTimeout(
    () => {
      exportStore.delete(exportData.id);
    },
    60 * 60 * 1e3
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender,
  storeExportData
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
