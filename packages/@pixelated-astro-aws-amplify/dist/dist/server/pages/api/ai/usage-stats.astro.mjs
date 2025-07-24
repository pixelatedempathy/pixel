;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3c8c3432-b396-4a83-9e81-7647aaed1a19",e._sentryDebugIdIdentifier="sentry-dbid-3c8c3432-b396-4a83-9e81-7647aaed1a19")}catch(e){}}();import { r as requirePermission } from '../../../chunks/access-control_D-d2-rFY.mjs';
import { g as getAIUsageStats } from '../../../chunks/analytics_CO3hhYdg.mjs';
import { h as handleApiError } from '../../../chunks/error-handling_CA0NkQkO.mjs';
import { c as createAuditLog } from '../../../chunks/audit_CMoAMAaW.mjs';
import { g as getSession } from '../../../chunks/session_DeimXgPx.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies, url }) => {
  let session;
  try {
    session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const checkPermission = requirePermission("read:admin");
    const permissionResponse = await checkPermission({
      cookies,
      redirect: () => new Response(null, { status: 401 })
    });
    if (permissionResponse) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const period = url.searchParams.get("period") || "daily";
    const allUsers = url.searchParams.get("allUsers") === "true";
    const userId = allUsers ? void 0 : session?.user?.id;
    await createAuditLog({
      userId: session?.user?.id || "anonymous",
      action: "ai.stats.request",
      resource: "ai",
      resourceId: void 0,
      metadata: {
        period,
        allUsers,
        status: "success"
      }
    });
    const stats = await getAIUsageStats({
      period,
      userId
    });
    await createAuditLog({
      userId: session?.user?.id || "anonymous",
      action: "ai.stats.response",
      resource: "ai",
      resourceId: void 0,
      metadata: {
        period,
        allUsers,
        statsCount: stats.length,
        status: "success"
      }
    });
    return new Response(JSON.stringify({ stats }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=60"
        // Cache for 1 minute
      }
    });
  } catch (error) {
    console.error("Error in AI usage stats API:", error);
    await createAuditLog({
      userId: session?.user?.id || "anonymous",
      action: "ai.stats.error",
      resource: "ai",
      resourceId: void 0,
      metadata: {
        error: error instanceof Error ? error?.message : String(error),
        stack: error instanceof Error ? error?.stack : void 0,
        status: "error"
      }
    });
    return handleApiError(error);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
