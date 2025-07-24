;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b70c53b9-3404-4e73-aee4-fe566e4755e2",e._sentryDebugIdIdentifier="sentry-dbid-b70c53b9-3404-4e73-aee4-fe566e4755e2")}catch(e){}}();import { z } from 'zod';
import { r as recommend } from '../../../chunks/OutcomeRecommendationEngine_B_luCoyw.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("default");
function collectContext(input) {
  logger.info("Collecting contextual data for recommendations");
  const context = {
    session: {
      id: input.session.sessionId,
      clientId: input.session.clientId,
      therapistId: input.session.therapistId,
      status: input.session.status,
      securityLevel: input.session.securityLevel,
      emotionAnalysisEnabled: input.session.emotionAnalysisEnabled
    },
    chatSession: input.chatSession,
    recentEmotionState: input.recentEmotionState,
    recentInterventions: input.recentInterventions,
    userPreferences: input.userPreferences || {},
    mentalHealthAnalysis: input.mentalHealthAnalysis || {}
  };
  return context;
}

const ForecastRequestSchema = z.object({
  session: z.object({
    sessionId: z.string(),
    clientId: z.string(),
    therapistId: z.string(),
    startTime: z.string(),
    endTime: z.string().optional(),
    status: z.string(),
    securityLevel: z.string(),
    emotionAnalysisEnabled: z.boolean()
  }),
  chatSession: z.object({}).passthrough(),
  // Accept any chat session structure
  recentEmotionState: z.object({}).passthrough().nullable(),
  recentInterventions: z.array(z.string()),
  userPreferences: z.record(z.unknown()).optional(),
  mentalHealthAnalysis: z.object({}).passthrough().optional(),
  desiredOutcomes: z.array(z.string()).min(1),
  maxResults: z.number().min(1).max(10).optional()
});
const post = async ({ request }) => {
  try {
    const body = await request.json();
    const parsed = ForecastRequestSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid input",
          details: parsed.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const {
      session,
      chatSession,
      recentEmotionState,
      recentInterventions,
      userPreferences,
      mentalHealthAnalysis,
      desiredOutcomes,
      maxResults
    } = parsed.data;
    const context = collectContext({
      session,
      chatSession,
      recentEmotionState,
      recentInterventions,
      ...userPreferences !== void 0 ? { userPreferences } : {},
      mentalHealthAnalysis
    });
    const forecasts = recommend({
      context,
      desiredOutcomes,
      maxResults: maxResults || 5
    });
    return new Response(
      JSON.stringify({ success: true, data: { forecasts } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Treatment forecast API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
