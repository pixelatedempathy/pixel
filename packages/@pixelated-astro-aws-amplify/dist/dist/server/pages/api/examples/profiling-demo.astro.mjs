;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c860f76a-8802-4197-9863-f8ce89a4056d",e._sentryDebugIdIdentifier="sentry-dbid-c860f76a-8802-4197-9863-f8ce89a4056d")}catch(e){}}();import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

async function performHeavyComputation() {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sin(i * 0.01) * Math.cos(i * 0.01);
  }
  return result;
}
async function simulateDatabaseQuery() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { id: 1, name: "Example Record", value: Math.random() * 100 };
}
const GET = async (_) => {
  try {
    const computationResult = await performHeavyComputation();
    const dbResult = await simulateDatabaseQuery();
    return new Response(
      JSON.stringify({
        success: true,
        computationResult,
        dbResult,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error in profiling demo API:", error);
    const isProd = process.env.NODE_ENV === "production";
    return new Response(
      JSON.stringify({
        success: false,
        error: isProd ? "Internal server error" : error instanceof Error ? error.message : "Unknown error"
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
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
