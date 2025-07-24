;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="603f1c89-ebea-4c57-b7cc-ccf0fdec20ff",e._sentryDebugIdIdentifier="sentry-dbid-603f1c89-ebea-4c57-b7cc-ccf0fdec20ff")}catch(e){}}();import { c as createPatternRecognitionService } from '../../../chunks/PatternRecognitionFactory_Ep32-SnK.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api-pattern-risk");
const POST = protectRoute({})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (error) {
      logger.warn("Failed to parse request body", { error });
      return new Response(
        JSON.stringify({ error: "Bad Request", message: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { clientId, analyses } = requestBody;
    if (!clientId) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Client ID is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!analyses || !Array.isArray(analyses) || analyses.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Valid emotion analyses are required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validAnalyses = [];
    for (const analysis of analyses) {
      if (!analysis.analysisId || !analysis.sessionId || !analysis.clientId || !analysis.timestamp) {
        logger.warn("Invalid analysis provided", { analysis });
        continue;
      }
      try {
        validAnalyses.push({
          ...analysis,
          timestamp: new Date(analysis.timestamp)
        });
      } catch (error) {
        logger.warn("Invalid date format in analysis", { analysis, error });
      }
    }
    if (validAnalyses.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "At least one valid emotion analysis is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const isTherapist = user.role === "therapist";
    const isAdmin = user.role === "admin";
    if (!isAdmin && isTherapist && user.id !== clientId) {
      return new Response(
        JSON.stringify({
          error: "Forbidden",
          message: "You do not have access to this client"
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    logger.info("Processing risk correlation request", {
      clientId,
      analysesCount: validAnalyses.length,
      user: user.id
    });
    const patternService = await createPatternRecognitionService();
    const correlations = await patternService.analyzeRiskFactorCorrelations(
      clientId,
      validAnalyses
    );
    logger.info("Successfully retrieved risk correlations", {
      clientId,
      correlationCount: correlations.length
    });
    return new Response(
      JSON.stringify({
        clientId,
        analyses: validAnalyses.map((a) => a.analysisId),
        correlations,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error processing risk correlation request", { error });
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
