;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e759338-874f-42e1-a9a2-c1e5ff04a824",e._sentryDebugIdIdentifier="sentry-dbid-2e759338-874f-42e1-a9a2-c1e5ff04a824")}catch(e){}}();import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const startTime = performance.now();
  try {
    const healthStatus = {
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      service: "pixelated-astro-app",
      version: "1.0.0",
      uptime: process.uptime(),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
      },
      responseTimeMs: Math.round(performance.now() - startTime)
    };
    return new Response(JSON.stringify(healthStatus, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "unhealthy",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        error: error instanceof Error ? error.message : String(error),
        responseTimeMs: Math.round(performance.now() - startTime)
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0"
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
