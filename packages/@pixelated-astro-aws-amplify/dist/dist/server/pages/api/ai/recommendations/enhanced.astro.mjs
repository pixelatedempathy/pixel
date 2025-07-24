;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="915bc172-5691-4706-8feb-52cf602ecebc",e._sentryDebugIdIdentifier="sentry-dbid-915bc172-5691-4706-8feb-52cf602ecebc")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
import { v as validateRequestBody } from '../../../../chunks/index_BiPiIrsZ.mjs';
import { g as getSession } from '../../../../chunks/session_CjG7jjfF.mjs';
export { renderers } from '../../../../renderers.mjs';

const appLogger = createBuildSafeLogger("app");
class EnhancedRecommendationService {
  async generateEnhancedRecommendations(clientId, options) {
    appLogger.debug("Stub generateEnhancedRecommendations", {
      clientId,
      options
    });
    return [
      {
        id: "breathing-001",
        technique: "Deep Breathing",
        description: "Practice slow diaphragmatic breathing for five minutes to reduce anxiety levels."
      }
    ];
  }
}
async function createProductionEnhancedRecommendationService() {
  return new EnhancedRecommendationService();
}

const logger = createBuildSafeLogger("enhanced-recommendation-api");
function createErrorResponse({
  status,
  message,
  errors,
  error
}) {
  return new Response(
    JSON.stringify({
      success: false,
      error: message,
      details: errors || error || void 0
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
const enhancedRecommendationRequestSchema = z.object({
  clientId: z.string().uuid({ message: "Valid client ID is required" }),
  indications: z.array(z.string()).min(1, { message: "At least one indication is required" }),
  includePersonalization: z.boolean().default(true),
  includeEfficacyStats: z.boolean().default(true),
  includeAlternativeApproaches: z.boolean().default(true),
  maxMediaRecommendations: z.number().int().min(0).max(5).default(3),
  previousTechniques: z.array(z.string()).optional()
});
const POST = async ({ request }) => {
  try {
    const sessionData = await getSession(request);
    if (!sessionData) {
      return createErrorResponse({
        status: 401,
        message: "Authentication required"
      });
    }
    const userRole = sessionData.user?.role || "user";
    if (userRole !== "therapist" && userRole !== "admin") {
      return createErrorResponse({
        status: 403,
        message: "Insufficient permissions"
      });
    }
    const [validatedData, validationError] = await validateRequestBody(request, enhancedRecommendationRequestSchema);
    if (validationError || !validatedData) {
      return createErrorResponse({
        status: 400,
        message: "Invalid request",
        ...validationError && { errors: validationError.details }
      });
    }
    const {
      clientId,
      indications,
      includePersonalization,
      includeEfficacyStats,
      includeAlternativeApproaches,
      maxMediaRecommendations,
      previousTechniques
      // Not used in current implementation - future enhancement
    } = validatedData;
    logger.info("Generating enhanced recommendations", {
      userId: sessionData.user.id,
      clientId,
      indicationsCount: indications.length,
      hasPreviousTechniques: previousTechniques ? previousTechniques.length > 0 : false
    });
    const recommendationService = await createProductionEnhancedRecommendationService();
    const recommendations = await recommendationService.generateEnhancedRecommendations(clientId, {
      ...includePersonalization ? { personalizationOptions: {} } : {},
      includeEfficacyStats,
      includeAlternatives: includeAlternativeApproaches,
      maxMediaRecommendations
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          recommendations,
          generated: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: {
            indicationsCount: indications.length,
            recommendationsCount: recommendations.length
          }
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    logger.error("Error generating enhanced recommendations", { error });
    return createErrorResponse({
      status: 500,
      message: "Failed to generate enhanced recommendations",
      error: error instanceof Error ? error.message : String(error)
    });
  }
};
function GET() {
  return createErrorResponse({
    status: 405,
    message: "Method not allowed. Use POST to generate enhanced recommendations."
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
