;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c8047a65-521c-4996-890f-f7b0d080c92e",e._sentryDebugIdIdentifier="sentry-dbid-c8047a65-521c-4996-890f-f7b0d080c92e")}catch(e){}}();import { c as createMentalLLaMAFromEnv } from '../../../../chunks/index_OwgUltKM.mjs';
import { b as getApiEndpointLogger } from '../../../../chunks/standardized-logger_CFC_ud1c.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = getApiEndpointLogger("mental-health-analyze");
let mentalLLaMAInstanceCache = null;
async function getInitializedMentalLLaMA() {
  if (!mentalLLaMAInstanceCache) {
    logger.info("MentalLLaMA instance not cached, creating and caching...");
    try {
      mentalLLaMAInstanceCache = await createMentalLLaMAFromEnv();
      logger.info("MentalLLaMA instance created and cached successfully.");
    } catch (error) {
      logger.error("Failed to create MentalLLaMA instance for cache", { error });
      throw error;
    }
  } else {
    logger.info("Using cached MentalLLaMA instance.");
  }
  return mentalLLaMAInstanceCache;
}
const POST = async ({ request }) => {
  const overallStartTime = Date.now();
  let timing = {
    requestParsingMs: -1,
    factoryCreationMs: -1,
    analysisMs: -1,
    totalMs: -1
  };
  let requestBody = null;
  let text = "";
  try {
    let startTime = Date.now();
    requestBody = await request.json();
    timing.requestParsingMs = Date.now() - startTime;
    if (!requestBody || typeof requestBody !== "object" || !("text" in requestBody) || typeof requestBody.text !== "string") {
      return new Response(
        JSON.stringify({
          error: 'Invalid request. "text" field (string) is required.'
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validatedBody = requestBody;
    text = validatedBody.text.trim().substring(0, 2e3);
    const useExpertGuidance = validatedBody.useExpertGuidance !== false;
    const rawRoutingContext = validatedBody.routingContext || {};
    const routingContext = {};
    if (typeof rawRoutingContext.userId === "string") {
      routingContext.userId = rawRoutingContext.userId;
    }
    if (typeof rawRoutingContext.sessionId === "string") {
      routingContext.sessionId = rawRoutingContext.sessionId;
    }
    if (typeof rawRoutingContext.sessionType === "string") {
      routingContext.sessionType = rawRoutingContext.sessionType;
    }
    if (typeof rawRoutingContext.explicitTaskHint === "string") {
      routingContext.explicitTaskHint = rawRoutingContext.explicitTaskHint;
    }
    const logContext = {
      textLength: text.length,
      useExpertGuidance,
      userId: routingContext?.userId,
      sessionId: routingContext?.sessionId
    };
    logger.info("Analyzing text for mental health indicators", logContext);
    startTime = Date.now();
    const { adapter, modelProvider } = await getInitializedMentalLLaMA();
    timing.factoryCreationMs = Date.now() - startTime;
    const modelInfo = modelProvider?.getModelInfo?.();
    const directModelAvailable = !!modelInfo && !modelInfo.name?.startsWith("mock-");
    const modelTier = modelInfo?.version || "unknown";
    logger.info("MentalLLaMA configuration", {
      directModelAvailable,
      modelTier,
      userId: routingContext?.userId,
      sessionId: routingContext?.sessionId
    });
    startTime = Date.now();
    const analysisParams = { text, routingContext };
    const analysis = useExpertGuidance ? await adapter.analyzeMentalHealthWithExpertGuidance(
      text,
      true,
      routingContext
    ) : await adapter.analyzeMentalHealth(analysisParams);
    timing.analysisMs = Date.now() - startTime;
    const responsePayload = {
      ...analysis,
      modelInfo: {
        directModelAvailable,
        modelTier
        // Use actual model tier
      }
    };
    timing.totalMs = Date.now() - overallStartTime;
    logger.info("Mental health analysis complete", {
      ...logContext,
      timing,
      modelTierUsed: responsePayload.modelInfo.modelTier,
      category: responsePayload.mentalHealthCategory,
      isCrisis: responsePayload.isCrisis
    });
    return new Response(JSON.stringify(responsePayload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  } catch (error) {
    timing.totalMs = Date.now() - overallStartTime;
    const userId = requestBody?.routingContext?.userId;
    const sessionId = requestBody?.routingContext?.sessionId;
    logger.error("Error analyzing mental health", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      timing,
      textLength: text.length,
      // text might not be initialized if parsing failed early
      userId,
      sessionId
    });
    return new Response(
      JSON.stringify({
        error: "An error occurred while analyzing the text.",
        detail: error instanceof Error ? error.message : "Unknown error"
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
const options = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  options
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
