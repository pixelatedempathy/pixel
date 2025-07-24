;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8709981e-64e6-48c5-8a2c-63989d86e509",e._sentryDebugIdIdentifier="sentry-dbid-8709981e-64e6-48c5-8a2c-63989d86e509")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { p as protectRoute } from '../../../../chunks/serverAuth_DpRotyBD.mjs';
import { A as AIRepository } from '../../../../chunks/repository_CSS1hREj.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger$1 = createBuildSafeLogger("default");
class EmotionTemporalAnalyzer {
  constructor(repository) {
    this.repository = repository;
  }
  async analyzeSessionEmotions(sessionIds, options) {
    logger$1.info("Analyzing session emotions", { sessionIds, options });
    return {
      trendlines: [],
      volatility: 0.5,
      emotions: [],
      patterns: options?.config?.detectPatterns ? [] : void 0
    };
  }
  async getCriticalEmotionalMoments(clientId, options) {
    logger$1.info("Getting critical emotional moments", { clientId, options });
    return [];
  }
  async calculateEmotionProgression(clientId, startDate, endDate) {
    logger$1.info("Calculating emotion progression", {
      clientId,
      startDate,
      endDate
    });
    return { progression: "stable", score: 0.7 };
  }
  async findEmotionCorrelations(clientId) {
    logger$1.info("Finding emotion correlations", { clientId });
    return [];
  }
}

const prerender = false;
const logger = createBuildSafeLogger("temporal-emotions-api");
const GET = protectRoute()(async ({
  params,
  request,
  locals
}) => {
  try {
    const { user } = locals;
    const { sessionId } = params;
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Missing session ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const url = new URL(request.url);
    const includePatterns = url.searchParams.get("includePatterns") === "true";
    const timeWindow = parseInt(url.searchParams.get("timeWindow") || "90", 10);
    const emotionTypes = url.searchParams.get("emotionTypes")?.split(",") || [];
    const analysisType = url.searchParams.get("analysisType") || "full";
    const validTimeWindow = Math.min(Math.max(timeWindow, 1), 365);
    const endDate = /* @__PURE__ */ new Date();
    const startDate = /* @__PURE__ */ new Date();
    startDate.setDate(startDate.getDate() - validTimeWindow);
    const repository = new AIRepository();
    const analyzer = new EmotionTemporalAnalyzer(repository);
    const clientId = user.id;
    let result = null;
    switch (analysisType) {
      case "trends": {
        const sessions = await analyzer.analyzeSessionEmotions([sessionId], {
          timeRange: { startDate, endDate },
          filter: {
            emotionTypes: emotionTypes.length > 0 ? emotionTypes : void 0
          },
          config: { detectPatterns: false, includeDimensionalAnalysis: false }
        });
        result = {
          trendlines: sessions.trendlines,
          volatility: sessions.volatility
        };
        break;
      }
      case "emotions": {
        const sessions = await analyzer.analyzeSessionEmotions([sessionId], {
          timeRange: { startDate, endDate },
          config: {
            includeDimensionalAnalysis: true,
            detectPatterns: true
          }
        });
        result = sessions;
        break;
      }
      case "critical": {
        const criticalPoints = await analyzer.getCriticalEmotionalMoments(
          clientId,
          {
            emotionTypes: emotionTypes.length > 0 ? emotionTypes : void 0
          }
        );
        result = criticalPoints;
        break;
      }
      case "progression": {
        const progression = await analyzer.calculateEmotionProgression(
          clientId,
          startDate,
          endDate
        );
        result = progression;
        break;
      }
      case "transitions": {
        const transitions = await analyzer.analyzeSessionEmotions([sessionId], {
          timeRange: { startDate, endDate },
          config: {
            includeDimensionalAnalysis: true
          }
        });
        result = transitions;
        break;
      }
      case "relationships": {
        const relationships = await analyzer.findEmotionCorrelations(clientId);
        result = relationships;
        break;
      }
      case "full":
      default: {
        result = await analyzer.analyzeSessionEmotions([sessionId], {
          timeRange: { startDate, endDate },
          filter: {
            emotionTypes: emotionTypes.length > 0 ? emotionTypes : void 0
          },
          config: {
            detectPatterns: includePatterns,
            includeDimensionalAnalysis: true
          }
        });
      }
    }
    logger.info("Temporal emotion analysis accessed", {
      userId: user.id,
      sessionId,
      analysisType,
      timeWindow: validTimeWindow
    });
    return new Response(
      JSON.stringify({
        success: true,
        analysisType,
        timeWindow: validTimeWindow,
        data: result
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error retrieving temporal emotion analysis", { error });
    return new Response(
      JSON.stringify({ error: "Failed to retrieve temporal emotion analysis" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
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
