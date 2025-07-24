;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fe138a7c-64c4-4b0d-9071-30ed409e27ff",e._sentryDebugIdIdentifier="sentry-dbid-fe138a7c-64c4-4b0d-9071-30ed409e27ff")}catch(e){}}();import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import { g as getOrCreateUserSettings, a as updateUserSettings } from '../../../chunks/user-settings_D54DDfyB.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("preferences-api");
const DEFAULT_AI_PREFERENCES = {
  defaultModel: "gemini-2-flash",
  preferredModels: ["gemini-2-flash", "claude-3-sonnet"],
  responseLength: "medium",
  responseStyle: "balanced",
  enableSentimentAnalysis: true,
  enableCrisisDetection: true,
  crisisDetectionSensitivity: "medium",
  saveAnalysisResults: true,
  aiSuggestions: true
};
function validateAIPreferences(input) {
  if (typeof input !== "object" || input == null) {
    throw new Error("Invalid preferences object");
  }
  if (![
    "gemini-2-flash",
    "gemini-2-flash-lite",
    "claude-3-opus",
    "claude-3-sonnet",
    "claude-3-haiku"
  ].includes(input.defaultModel)) {
    throw new Error("Invalid defaultModel");
  }
  if (!Array.isArray(input.preferredModels)) {
    throw new Error("preferredModels must be an array");
  }
  if (!["concise", "medium", "detailed"].includes(input.responseLength)) {
    throw new Error("Invalid responseLength");
  }
  if (!["supportive", "balanced", "direct"].includes(input.responseStyle)) {
    throw new Error("Invalid responseStyle");
  }
  if (typeof input.enableSentimentAnalysis !== "boolean") {
    throw new Error("Invalid enableSentimentAnalysis");
  }
  if (typeof input.enableCrisisDetection !== "boolean") {
    throw new Error("Invalid enableCrisisDetection");
  }
  if (!["low", "medium", "high"].includes(input.crisisDetectionSensitivity)) {
    throw new Error("Invalid crisisDetectionSensitivity");
  }
  if (typeof input.saveAnalysisResults !== "boolean") {
    throw new Error("Invalid saveAnalysisResults");
  }
  if (typeof input.aiSuggestions !== "boolean") {
    throw new Error("Invalid aiSuggestions");
  }
}
const GET = protectRoute()(async ({ locals }) => {
  try {
    const { user } = locals;
    const settings = await getOrCreateUserSettings(user.id);
    const preferences = settings.preferences || {};
    const aiPrefs = preferences.ai ?? DEFAULT_AI_PREFERENCES;
    return new Response(JSON.stringify({ preferences: aiPrefs }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error fetching AI preferences", { error });
    return new Response(
      JSON.stringify({ error: "Failed to fetch preferences" }),
      { status: 500 }
    );
  }
});
const PUT = protectRoute()(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const body = await request.json();
    if (!body || typeof body.preferences !== "object") {
      throw new Error("Missing preferences");
    }
    validateAIPreferences(body.preferences);
    const settings = await getOrCreateUserSettings(user.id, request);
    const currentPreferences = settings.preferences || {};
    const newPrefs = {
      ...currentPreferences,
      ai: body.preferences
    };
    await updateUserSettings(
      user.id,
      { preferences: newPrefs },
      request
    );
    logger.info("AI preferences updated", { userId: user.id });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    logger.error("Error updating AI preferences", { error });
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to update preferences"
      }),
      { status: 400 }
    );
  }
});
const DELETE = protectRoute()(async ({ locals, request }) => {
  try {
    const { user } = locals;
    const settings = await getOrCreateUserSettings(user.id, request);
    const currentPreferences = settings.preferences || {};
    const newPrefs = {
      ...currentPreferences,
      ai: DEFAULT_AI_PREFERENCES
    };
    await updateUserSettings(
      user.id,
      { preferences: newPrefs },
      request
    );
    logger.info("AI preferences reset to defaults", { userId: user.id });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    logger.error("Error resetting AI preferences", { error });
    return new Response(
      JSON.stringify({ error: "Failed to reset preferences" }),
      { status: 500 }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
