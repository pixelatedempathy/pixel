;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b0e2df93-84dd-4d64-970e-b9ad568f9ab3",e._sentryDebugIdIdentifier="sentry-dbid-b0e2df93-84dd-4d64-970e-b9ad568f9ab3")}catch(e){}}();import { a as adminGuard, A as AdminPermission, b as AdminService } from '../../../chunks/middleware_hzx7n_Bg.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("default");
const GET = async (context) => {
  const middlewareResponse = await adminGuard(AdminPermission.MANAGE_SESSIONS)(
    context
  );
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const { userId } = context.locals.admin;
    const url = new URL(context.request.url);
    const limit = Number.parseInt(url.searchParams.get("limit") || "10", 10);
    const offset = Number.parseInt(url.searchParams.get("offset") || "0", 10);
    const therapistId = url.searchParams.get("therapistId") || void 0;
    const clientId = url.searchParams.get("clientId") || void 0;
    const startDate = url.searchParams.get("startDate") || void 0;
    const endDate = url.searchParams.get("endDate") || void 0;
    const adminService = AdminService.getInstance();
    const sessionsResult = await adminService.getSessions({
      limit,
      offset,
      therapistId,
      clientId,
      startDate: startDate ? new Date(startDate) : void 0,
      endDate: endDate ? new Date(endDate) : void 0
    });
    logger.info(`Admin user ${userId} accessed sessions list`);
    return new Response(
      JSON.stringify({
        success: true,
        sessions: sessionsResult.sessions,
        pagination: {
          total: sessionsResult?.total ?? 0,
          limit,
          offset,
          hasMore: offset + limit < sessionsResult.total
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch {
    logger.error("Error fetching sessions");
    return new Response(JSON.stringify({ error: "Failed to fetch sessions" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async (context) => {
  const middlewareResponse = await adminGuard(AdminPermission.MANAGE_SESSIONS)(
    context
  );
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const { userId: adminId } = context.locals.admin;
    const requestData = await context.request.json();
    const { sessionId, action } = requestData;
    if (!sessionId || !action) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const adminService = AdminService.getInstance();
    let result;
    switch (action) {
      case "lock":
        result = await adminService.lockSession(sessionId);
        break;
      case "unlock":
        result = await adminService.unlockSession(sessionId);
        break;
      case "archive":
        result = await adminService.archiveSession(sessionId);
        break;
      default:
        return new Response(JSON.stringify({ error: "Invalid action" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
    }
    logger.info(
      `Admin user ${adminId} performed action "${action}" on session ${sessionId}`
    );
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch {
    logger.error("Error managing session");
    return new Response(JSON.stringify({ error: "Failed to manage session" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
