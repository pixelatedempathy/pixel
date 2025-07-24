;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e9a7ae01-0651-480b-9e90-78393c32ab43",e._sentryDebugIdIdentifier="sentry-dbid-e9a7ae01-0651-480b-9e90-78393c32ab43")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("real-time-analysis-api");
const METRICS_API_KEY = process.env["METRICS_API_KEY"] || "";
class PlaceholderAIService {
  async analyzeEmotionsRealTime(_text, _options) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return {
      emotions: {
        primary: "neutral",
        secondary: ["calm"],
        intensity: 0.5,
        confidence: 0.8
      },
      sentiment: {
        polarity: 0,
        subjectivity: 0.5
      },
      riskFactors: [],
      recommendations: ["Continue monitoring emotional state"]
    };
  }
  getEmotionEngine() {
    return {
      getCacheMetrics: () => ({
        hitRate: 0.85,
        size: 1e3,
        maxSize: 1e4
      }),
      getDynamicProcessingStatus: () => ({
        isProcessing: false,
        queueLength: 0,
        averageProcessingTime: 150
      })
    };
  }
}
function getAIService() {
  return new PlaceholderAIService();
}
const handler = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const aiService = getAIService();
    const body = await request.json();
    const { text, userId, context } = body;
    if (!text || typeof text !== "string") {
      logger.warn("Invalid input: missing or non-string text", {
        userId,
        context
      });
      return new Response(
        JSON.stringify({
          error: "Text is required",
          code: "ERR_TEXT_REQUIRED"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (text.length > 5e3) {
      logger.warn("Input text too long", { userId, length: text.length });
      return new Response(
        JSON.stringify({
          error: "Text exceeds maximum length of 5000 characters",
          code: "ERR_TEXT_TOO_LONG"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    logger.info("Processing real-time emotion analysis request", {
      textLength: text.length,
      userId: userId || "anonymous",
      hasContext: !!context
    });
    const result = await aiService.analyzeEmotionsRealTime(text, {
      userId: userId || "anonymous",
      context: context || {}
    });
    return new Response(
      JSON.stringify({
        success: true,
        analysis: result,
        processingTimeMs: Date.now() - (parseInt(request.headers.get("x-request-start") || "0", 10) || Date.now())
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error processing real-time emotion analysis", {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : void 0,
      userId: (await request.json().catch(() => ({}))).userId || "anonymous"
    });
    let code = "ERR_UNKNOWN";
    let message = "Failed to process emotion analysis";
    if (error instanceof Error) {
      if (error.message.includes("prompt injection")) {
        code = "ERR_PROMPT_INJECTION";
        message = "Unsafe input detected: possible prompt injection";
      } else if (error.message.includes("maximum allowed length")) {
        code = "ERR_TEXT_TOO_LONG";
        message = error.message;
      } else if (error.message.includes("required API credentials")) {
        code = "ERR_API_CREDENTIALS";
        message = "Server misconfiguration: missing API credentials";
      }
    }
    return new Response(
      JSON.stringify({
        error: message,
        code,
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const POST = protectRoute({ requiredRole: "user" })(handler);
const GET = async ({ request }) => {
  if (request.headers.get("x-api-key") !== METRICS_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Forbidden", code: "ERR_FORBIDDEN" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  try {
    const aiService = getAIService();
    const engine = aiService.getEmotionEngine();
    const cacheMetrics = engine.getCacheMetrics();
    const processingStatus = engine.getDynamicProcessingStatus();
    return new Response(
      JSON.stringify({
        cache: cacheMetrics,
        processing: processingStatus
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error fetching metrics", { error });
    return new Response(
      JSON.stringify({
        error: "Failed to fetch metrics",
        code: "ERR_METRICS",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
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
