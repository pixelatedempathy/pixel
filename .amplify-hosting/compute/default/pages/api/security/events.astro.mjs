;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d2749060-c3d8-4548-9eb0-cacb129ffca3",e._sentryDebugIdIdentifier="sentry-dbid-d2749060-c3d8-4548-9eb0-cacb129ffca3")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("default");
const mockEvents = [
  {
    id: "1",
    timestamp: Date.now() - 36e5,
    type: "login",
    severity: "medium",
    metadata: { details: "Failed login attempt" }
  },
  {
    id: "2",
    timestamp: Date.now() - 72e5,
    type: "access",
    severity: "high",
    metadata: { details: "Unauthorized access attempt" }
  },
  {
    id: "3",
    timestamp: Date.now() - 108e5,
    type: "system",
    severity: "low",
    metadata: { details: "System maintenance completed" }
  }
];
const mockStats = {
  total: 42,
  last24h: 8,
  last7d: 23,
  bySeverity: {
    critical: 2,
    high: 5,
    medium: 12,
    low: 23
  }
};
const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const severity = url.searchParams.get("severity");
    const limit = url.searchParams.get("limit");
    let filteredEvents = [...mockEvents];
    if (type) {
      filteredEvents = filteredEvents.filter((event) => event.type === type);
    }
    if (severity) {
      filteredEvents = filteredEvents.filter(
        (event) => event.severity === severity
      );
    }
    if (limit) {
      const limitNum = parseInt(limit);
      filteredEvents = filteredEvents.slice(0, limitNum);
    }
    return new Response(
      JSON.stringify({ events: filteredEvents, stats: mockStats }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    logger.error(
      "Error fetching security events:",
      error
    );
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
