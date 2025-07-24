;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a14f5955-c8f2-429a-845d-a2fb96e7b1fa",e._sentryDebugIdIdentifier="sentry-dbid-a14f5955-c8f2-429a-845d-a2fb96e7b1fa")}catch(e){}}();import { i as isAuthenticated } from '../../chunks/auth_B2tmxZMv.mjs';
import { c as createBuildSafeLogger } from '../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("default");
const GET = async ({ cookies }) => {
  try {
    const authenticated = await isAuthenticated(cookies);
    if (!authenticated) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const mockData = {
      stats: {
        sessionsThisWeek: 3,
        totalPracticeHours: 12.5,
        progressScore: 85
      },
      recentSessions: [
        {
          id: "session-1",
          type: "chat",
          timestamp: /* @__PURE__ */ new Date(),
          title: "Mental Health Chat"
        },
        {
          id: "session-2",
          type: "simulator",
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1e3),
          title: "Practice Session: Anxiety Management"
        }
      ],
      securityLevel: "hipaa"
    };
    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Dashboard API error:", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
