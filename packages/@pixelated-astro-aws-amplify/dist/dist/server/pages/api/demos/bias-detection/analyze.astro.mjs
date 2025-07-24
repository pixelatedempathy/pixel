;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="15b295f6-8a44-4f40-b17f-986c30ce9ee2",e._sentryDebugIdIdentifier="sentry-dbid-15b295f6-8a44-4f40-b17f-986c30ce9ee2")}catch(e){}}();import { g as generateSessionId, c as calculateBiasFactors, d as determineAlertLevel, a as generateCounterfactualScenarios, b as generateHistoricalComparison, e as generateRecommendations } from '../../../../chunks/demo-helpers_0yf26Xve.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.content || !body.demographics) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: content and demographics are required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const sessionData = {
      sessionId: body.sessionId || generateSessionId(),
      scenario: body.scenario,
      demographics: {
        age: body.demographics.age || "26-35",
        gender: body.demographics.gender || "female",
        ethnicity: body.demographics.ethnicity || "white",
        primaryLanguage: body.demographics.primaryLanguage || "en"
      },
      content: body.content,
      timestamp: /* @__PURE__ */ new Date()
    };
    if (sessionData.content.length < 10) {
      return new Response(
        JSON.stringify({
          error: "Content must be at least 10 characters long"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (sessionData.content.length > 1e4) {
      return new Response(
        JSON.stringify({
          error: "Content must be less than 10,000 characters"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const biasFactors = calculateBiasFactors(sessionData);
    const alertLevel = determineAlertLevel(biasFactors.overall);
    const counterfactualScenarios = generateCounterfactualScenarios(
      sessionData,
      biasFactors
    );
    const historicalComparison = generateHistoricalComparison(
      biasFactors.overall
    );
    const recommendations = generateRecommendations(
      biasFactors,
      sessionData.demographics
    );
    const analysisResults = {
      sessionId: sessionData.sessionId,
      timestamp: sessionData.timestamp,
      overallBiasScore: biasFactors.overall,
      alertLevel,
      confidence: 0.85 + Math.random() * 0.1,
      // Simulated confidence with some variance
      layerResults: {
        preprocessing: {
          biasScore: biasFactors.linguistic,
          linguisticBias: {
            genderBiasScore: biasFactors.gender,
            racialBiasScore: biasFactors.racial,
            ageBiasScore: biasFactors.age,
            culturalBiasScore: biasFactors.cultural
          },
          representationAnalysis: {
            diversityIndex: Math.max(0, 1 - biasFactors.overall),
            underrepresentedGroups: [
              ...biasFactors.age > 0.5 ? ["elderly"] : [],
              ...biasFactors.racial > 0.6 ? ["racial minorities"] : [],
              ...biasFactors.linguistic > 0.5 ? ["non-native speakers"] : []
            ]
          }
        },
        modelLevel: {
          biasScore: biasFactors.model,
          fairnessMetrics: {
            demographicParity: Math.max(0, 1 - biasFactors.model),
            equalizedOdds: Math.max(0, 1 - biasFactors.model * 0.8),
            calibration: Math.max(0, 1 - biasFactors.model * 0.6)
          }
        },
        interactive: {
          biasScore: biasFactors.interactive,
          counterfactualAnalysis: {
            scenariosAnalyzed: counterfactualScenarios.length,
            biasDetected: biasFactors.interactive > 0.3,
            consistencyScore: Math.max(0, 1 - biasFactors.interactive)
          }
        },
        evaluation: {
          biasScore: biasFactors.evaluation,
          huggingFaceMetrics: {
            bias: biasFactors.evaluation,
            stereotype: biasFactors.cultural,
            regard: {
              positive: Math.max(0, 1 - biasFactors.overall),
              negative: biasFactors.overall
            }
          }
        }
      },
      recommendations,
      demographics: sessionData.demographics
    };
    const responseData = {
      success: true,
      analysis: analysisResults,
      counterfactualScenarios,
      historicalComparison,
      processingTime: Math.round(50 + Math.random() * 200),
      // Simulated processing time
      metadata: {
        version: "2.0.0",
        analysisType: "enhanced-bias-detection",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    console.log(
      `Bias analysis completed for session ${sessionData.sessionId}:`,
      {
        overallScore: biasFactors.overall,
        alertLevel,
        contentLength: sessionData.content.length,
        demographics: sessionData.demographics
      }
    );
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  } catch (error) {
    console.error("Bias analysis API error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error during bias analysis",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const GET = async () => {
  return new Response(
    JSON.stringify({
      service: "Bias Detection Analysis API",
      version: "2.0.0",
      status: "operational",
      endpoints: {
        analyze: "POST /api/demos/bias-detection/analyze",
        presets: "GET /api/demos/bias-detection/presets",
        export: "POST /api/demos/bias-detection/export"
      },
      capabilities: [
        "Multi-dimensional bias analysis",
        "Counterfactual scenario generation",
        "Historical progress tracking",
        "Real-time confidence scoring",
        "Comprehensive recommendations"
      ],
      limits: {
        maxContentLength: 1e4,
        minContentLength: 10,
        rateLimit: "100 requests per minute"
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
