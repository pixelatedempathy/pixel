;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="645e3af7-9036-4637-bfdf-0998ae11c7a1",e._sentryDebugIdIdentifier="sentry-dbid-645e3af7-9036-4637-bfdf-0998ae11c7a1")}catch(e){}}();import { getEnv } from '../../../../chunks/env.config_F4Rnl2vD.mjs';
import { a as getHipaaCompliantLogger } from '../../../../chunks/standardized-logger_Bh9TOg2L.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = getHipaaCompliantLogger("general");
async function verifyMentalLLaMAModelConfiguration() {
  try {
    const env = getEnv;
    const apiKey = env.env?.MENTALLAMA_API_KEY;
    const endpoint7B = env.env?.MENTALLAMA_ENDPOINT_URL_7B;
    const requiredVars = {
      MENTALLAMA_API_KEY: !!apiKey,
      MENTALLAMA_ENDPOINT_URL_7B: !!endpoint7B
      // MENTALLAMA_ENDPOINT_URL_13B: !!endpoint13B, // Add if 13B is also required for "configured" status
    };
    const missingVars = Object.entries(requiredVars).filter(([, value]) => !value).map(([key]) => key);
    if (missingVars.length > 0) {
      const message = `Missing required MentalLLaMA environment variables: ${missingVars.join(", ")}`;
      logger.warn(message);
      return {
        isConfigured: false,
        connectionStatus: "missing-configuration",
        details: { ...requiredVars, errorMessage: message }
      };
    }
    logger.info(
      "MentalLLaMA configuration appears valid based on environment variables."
    );
    return {
      isConfigured: true,
      connectionStatus: "available",
      details: { ...requiredVars }
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error("Error during MentalLLaMA model configuration verification:", {
      error: errorMessage
    });
    return {
      isConfigured: false,
      connectionStatus: "error",
      details: { errorMessage }
    };
  }
}

const GET = async () => {
  try {
    const configResult = await verifyMentalLLaMAModelConfiguration();
    return new Response(
      JSON.stringify({
        isConfigured: configResult.isConfigured,
        connectionStatus: configResult.connectionStatus || null
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error checking MentalLLaMA model status:", error);
    return new Response(
      JSON.stringify({
        isConfigured: false,
        error: error instanceof Error ? error.message : String(error)
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
