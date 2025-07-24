;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5351c4b2-6483-4f01-b20e-3fbdbf961199",e._sentryDebugIdIdentifier="sentry-dbid-5351c4b2-6483-4f01-b20e-3fbdbf961199")}catch(e){}}();import { c as createBuildSafeLogger } from '../../chunks/build-safe-logger_tzJzO24i.mjs';
import { p as protectRoute } from '../../chunks/serverAuth_DpRotyBD.mjs';
import { A as AIRepository } from '../../chunks/repository_CSS1hREj.mjs';
import '../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("sessions-api");
const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500
};
const ERROR_MESSAGES = {
  AUTHENTICATION_REQUIRED: "Authentication required",
  INVALID_START_DATE: "Invalid startDate format",
  INVALID_END_DATE: "Invalid endDate format",
  INVALID_LIMIT: "Invalid limit parameter",
  CLIENT_ACCESS_DENIED: "Access denied for this client",
  INTERNAL_ERROR: "Internal server error"
};
const GET = protectRoute()(async ({ request, locals }) => {
  try {
    const { user } = locals;
    if (!user) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.AUTHENTICATION_REQUIRED }),
        {
          status: HTTP_STATUS.UNAUTHORIZED,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const url = new URL(request.url);
    const clientId = url.searchParams.get("clientId");
    const status = url.searchParams.get("status");
    const startDateParam = url.searchParams.get("startDate");
    const endDateParam = url.searchParams.get("endDate");
    const limitParam = url.searchParams.get("limit");
    let startDate;
    let endDate;
    if (startDateParam) {
      startDate = new Date(startDateParam);
      if (isNaN(startDate.getTime())) {
        return new Response(
          JSON.stringify({ error: ERROR_MESSAGES.INVALID_START_DATE }),
          {
            status: HTTP_STATUS.BAD_REQUEST,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    if (endDateParam) {
      endDate = new Date(endDateParam);
      if (isNaN(endDate.getTime())) {
        return new Response(
          JSON.stringify({ error: ERROR_MESSAGES.INVALID_END_DATE }),
          {
            status: HTTP_STATUS.BAD_REQUEST,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    const limit = limitParam ? parseInt(limitParam, 10) : 50;
    if (isNaN(limit) || limit <= 0) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.INVALID_LIMIT }),
        {
          status: HTTP_STATUS.BAD_REQUEST,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const repository = new AIRepository();
    const filter = {};
    if (clientId) {
      filter.clientId = clientId;
      if (user.role !== "admin" && user.id !== clientId) {
        const isTherapist = await repository.isTherapistForClient(
          user.id,
          clientId
        );
        if (!isTherapist) {
          return new Response(
            JSON.stringify({ error: ERROR_MESSAGES.CLIENT_ACCESS_DENIED }),
            {
              status: HTTP_STATUS.FORBIDDEN,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
      }
    } else if (user.role !== "admin") {
      filter.therapistId = user.id;
    }
    if (status) {
      filter.status = status;
    }
    if (startDate) {
      filter.startDate = startDate;
    }
    if (endDate) {
      filter.endDate = endDate;
    }
    const sessions = await repository.getSessions(filter);
    const limitedSessions = sessions.slice(0, limit);
    logger.info("Returning sessions", {
      userId: user.id,
      filter,
      count: limitedSessions.length
    });
    return new Response(JSON.stringify(limitedSessions), {
      status: HTTP_STATUS.OK,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error processing sessions request", {
      error: error instanceof Error ? error.message : "Unknown error"
    });
    return new Response(
      JSON.stringify({
        error: ERROR_MESSAGES.INTERNAL_ERROR,
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
