;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e8a2551f-bc3a-4c2b-a565-00d896fb397b",e._sentryDebugIdIdentifier="sentry-dbid-e8a2551f-bc3a-4c2b-a565-00d896fb397b")}catch(e){}}();import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const mockMetrics = {
      activeUsers: 142,
      activeSessions: 89,
      avgResponseTime: 245,
      systemLoad: 0.65,
      storageUsed: "2.3 GB",
      messagesSent: 1247,
      activeSecurityLevel: "HIPAA Compliant",
      totalTherapists: 23,
      totalClients: 156,
      sessionsToday: 34
    };
    return new Response(JSON.stringify(mockMetrics), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching metrics:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
