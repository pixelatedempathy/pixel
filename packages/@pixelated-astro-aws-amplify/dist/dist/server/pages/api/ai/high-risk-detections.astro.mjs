;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a7e6bfa1-21e3-40ca-81b8-ca5eab665b89",e._sentryDebugIdIdentifier="sentry-dbid-a7e6bfa1-21e3-40ca-81b8-ca5eab665b89")}catch(e){}}();import { c as createAuditLog } from '../../../chunks/audit_CMoAMAaW.mjs';
import { g as getSession } from '../../../chunks/session_DeimXgPx.mjs';
import { a as aiRepository } from '../../../chunks/index_Bs-_Aolf.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, url }) => {
  let session;
  try {
    session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (session?.user?.role !== "admin") {
      return new Response(
        JSON.stringify({ error: "Forbidden: Admin access required" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const limit = Number.parseInt(url.searchParams.get("limit") || "20", 10);
    const offset = Number.parseInt(url.searchParams.get("offset") || "0", 10);
    await createAuditLog({
      userId: session?.user?.id || "anonymous",
      action: "ai.crisis.high-risk.request",
      resource: "ai",
      resourceId: void 0,
      metadata: {
        limit,
        offset
      }
    });
    const detections = await aiRepository.getHighRiskCrisisDetections(
      limit,
      offset
    );
    await createAuditLog({
      userId: session?.user?.id || "anonymous",
      action: "ai.crisis.high-risk.response",
      resource: "ai",
      resourceId: void 0,
      metadata: {
        limit,
        offset,
        detectionsCount: detections.length,
        status: "success"
      }
    });
    return new Response(JSON.stringify({ detections }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error retrieving high-risk crisis detections:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error?.message : "Internal server error"
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
