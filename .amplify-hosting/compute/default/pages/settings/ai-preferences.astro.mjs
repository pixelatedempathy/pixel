;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1b49d46e-03aa-443f-8ec7-7dd7f9741789",e._sentryDebugIdIdentifier="sentry-dbid-1b49d46e-03aa-443f-8ec7-7dd7f9741789")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { r as requireAuth } from '../../chunks/auth_B2tmxZMv.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$AiPreferences = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AiPreferences;
  const authResponse = await requireAuth({
    cookies: Astro2.cookies,
    redirect: Astro2.redirect,
    request: Astro2.request
  });
  if (authResponse) {
    return authResponse;
  }
  const defaultPreferences = {
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Preferences", "data-astro-cid-5glwsk2o": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="settings-container" data-astro-cid-5glwsk2o> <div class="settings-header" data-astro-cid-5glwsk2o> <h1 data-astro-cid-5glwsk2o>AI Preferences</h1> <p data-astro-cid-5glwsk2o>Customize your AI experience and preferences.</p> </div> <form id="ai-preferences-form" class="settings-form" data-astro-cid-5glwsk2o> <div class="settings-section" data-astro-cid-5glwsk2o> <h2 data-astro-cid-5glwsk2o>Model Preferences</h2> <div class="form-group" data-astro-cid-5glwsk2o> <label for="defaultModel" data-astro-cid-5glwsk2o>Default AI Model</label> <select id="defaultModel" name="defaultModel" class="form-select" data-astro-cid-5glwsk2o> <option value="gemini-2-flash"${addAttribute(defaultPreferences.defaultModel === "gemini-2-flash", "selected")} data-astro-cid-5glwsk2o>Gemini 2 Flash (Balanced)</option> <option value="gemini-2-flash-lite"${addAttribute(defaultPreferences.defaultModel === "gemini-2-flash-lite", "selected")} data-astro-cid-5glwsk2o>Gemini 2 Flash Lite (Faster)</option> <option value="claude-3-opus"${addAttribute(defaultPreferences.defaultModel === "claude-3-opus", "selected")} data-astro-cid-5glwsk2o>Claude 3 Opus (Detailed)</option> <option value="claude-3-sonnet"${addAttribute(defaultPreferences.defaultModel === "claude-3-sonnet", "selected")} data-astro-cid-5glwsk2o>Claude 3 Sonnet (Balanced)</option> <option value="claude-3-haiku"${addAttribute(defaultPreferences.defaultModel === "claude-3-haiku", "selected")} data-astro-cid-5glwsk2o>Claude 3 Haiku (Fast)</option> </select> <div class="form-hint" data-astro-cid-5glwsk2o>
This model will be used by default for all AI interactions.
</div> </div> <div class="form-group" data-astro-cid-5glwsk2o> <label data-astro-cid-5glwsk2o>Preferred Models</label> <div class="checkbox-group" data-astro-cid-5glwsk2o> <label class="checkbox-label" data-astro-cid-5glwsk2o> <input type="checkbox" name="preferredModels" value="gemini-2-flash"${addAttribute(defaultPreferences.preferredModels.includes(
    "gemini-2-flash"
  ), "checked")} data-astro-cid-5glwsk2o>
Gemini 2 Flash
</label> <label class="checkbox-label" data-astro-cid-5glwsk2o> <input type="checkbox" name="preferredModels" value="gemini-2-flash-lite"${addAttribute(defaultPreferences.preferredModels.includes(
    "gemini-2-flash-lite"
  ), "checked")} data-astro-cid-5glwsk2o>
Gemini 2 Flash Lite
</label> <label class="checkbox-label" data-astro-cid-5glwsk2o> <input type="checkbox" name="preferredModels" value="claude-3-opus"${addAttribute(defaultPreferences.preferredModels.includes(
    "claude-3-opus"
  ), "checked")} data-astro-cid-5glwsk2o>
Claude 3 Opus
</label> <label class="checkbox-label" data-astro-cid-5glwsk2o> <input type="checkbox" name="preferredModels" value="claude-3-sonnet"${addAttribute(defaultPreferences.preferredModels.includes(
    "claude-3-sonnet"
  ), "checked")} data-astro-cid-5glwsk2o>
Claude 3 Sonnet
</label> <label class="checkbox-label" data-astro-cid-5glwsk2o> <input type="checkbox" name="preferredModels" value="claude-3-haiku"${addAttribute(defaultPreferences.preferredModels.includes(
    "claude-3-haiku"
  ), "checked")} data-astro-cid-5glwsk2o>
Claude 3 Haiku
</label> </div> <div class="form-hint" data-astro-cid-5glwsk2o>
These models will be available for selection in the AI interface.
</div> </div> </div> <div class="settings-section" data-astro-cid-5glwsk2o> <h2 data-astro-cid-5glwsk2o>Response Preferences</h2> <div class="form-group" data-astro-cid-5glwsk2o> <label for="responseLength" data-astro-cid-5glwsk2o>Response Length</label> <div class="radio-group" data-astro-cid-5glwsk2o> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseLength" value="concise"${addAttribute(defaultPreferences.responseLength === "concise", "checked")} data-astro-cid-5glwsk2o>
Concise
</label> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseLength" value="medium"${addAttribute(defaultPreferences.responseLength === "medium", "checked")} data-astro-cid-5glwsk2o>
Medium
</label> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseLength" value="detailed"${addAttribute(defaultPreferences.responseLength === "detailed", "checked")} data-astro-cid-5glwsk2o>
Detailed
</label> </div> <div class="form-hint" data-astro-cid-5glwsk2o>
Controls how detailed AI responses will be.
</div> </div> <div class="form-group" data-astro-cid-5glwsk2o> <label for="responseStyle" data-astro-cid-5glwsk2o>Response Style</label> <div class="radio-group" data-astro-cid-5glwsk2o> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseStyle" value="supportive"${addAttribute(defaultPreferences.responseStyle === "supportive", "checked")} data-astro-cid-5glwsk2o>
Supportive
</label> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseStyle" value="balanced"${addAttribute(defaultPreferences.responseStyle === "balanced", "checked")} data-astro-cid-5glwsk2o>
Balanced
</label> <label class="radio-label" data-astro-cid-5glwsk2o> <input type="radio" name="responseStyle" value="direct"${addAttribute(defaultPreferences.responseStyle === "direct", "checked")} data-astro-cid-5glwsk2o>
Direct
</label> </div> <div class="form-hint" data-astro-cid-5glwsk2o>
Determines the tone and approach of AI responses.
</div> </div> </div> <div class="settings-section" data-astro-cid-5glwsk2o> <h2 data-astro-cid-5glwsk2o>Analysis Features</h2> <div class="form-group" data-astro-cid-5glwsk2o> <div class="switch-container" data-astro-cid-5glwsk2o> <label class="switch-label" for="enableSentimentAnalysis" data-astro-cid-5glwsk2o>
Enable Sentiment Analysis
<div class="form-hint" data-astro-cid-5glwsk2o>
Analyzes emotional tone of messages to provide better support.
</div> </label> <label class="switch" data-astro-cid-5glwsk2o> <input type="checkbox" id="enableSentimentAnalysis" name="enableSentimentAnalysis"${addAttribute(defaultPreferences.enableSentimentAnalysis, "checked")} data-astro-cid-5glwsk2o> <span class="slider" data-astro-cid-5glwsk2o></span> </label> </div> </div> <div class="form-group" data-astro-cid-5glwsk2o> <div class="switch-container" data-astro-cid-5glwsk2o> <label class="switch-label" for="enableCrisisDetection" data-astro-cid-5glwsk2o>
Enable Crisis Detection
<div class="form-hint" data-astro-cid-5glwsk2o>
Identifies potential crisis situations in messages.
</div> </label> <label class="switch" data-astro-cid-5glwsk2o> <input type="checkbox" id="enableCrisisDetection" name="enableCrisisDetection"${addAttribute(defaultPreferences.enableCrisisDetection, "checked")} data-astro-cid-5glwsk2o> <span class="slider" data-astro-cid-5glwsk2o></span> </label> </div> </div> <div class="form-group" id="crisisDetectionSensitivityGroup" data-astro-cid-5glwsk2o> <label for="crisisDetectionSensitivity" data-astro-cid-5glwsk2o>Crisis Detection Sensitivity</label> <select id="crisisDetectionSensitivity" name="crisisDetectionSensitivity" class="form-select" data-astro-cid-5glwsk2o> <option value="low"${addAttribute(defaultPreferences.crisisDetectionSensitivity === "low", "selected")} data-astro-cid-5glwsk2o>Low</option> <option value="medium"${addAttribute(defaultPreferences.crisisDetectionSensitivity === "medium", "selected")} data-astro-cid-5glwsk2o>Medium</option> <option value="high"${addAttribute(defaultPreferences.crisisDetectionSensitivity === "high", "selected")} data-astro-cid-5glwsk2o>High</option> </select> <div class="form-hint" data-astro-cid-5glwsk2o>
Higher sensitivity may result in more false positives.
</div> </div> </div> <div class="settings-section" data-astro-cid-5glwsk2o> <h2 data-astro-cid-5glwsk2o>Privacy & Data</h2> <div class="form-group" data-astro-cid-5glwsk2o> <div class="switch-container" data-astro-cid-5glwsk2o> <label class="switch-label" for="saveAnalysisResults" data-astro-cid-5glwsk2o>
Save Analysis Results
<div class="form-hint" data-astro-cid-5glwsk2o>
Store AI analysis results for improved personalization.
</div> </label> <label class="switch" data-astro-cid-5glwsk2o> <input type="checkbox" id="saveAnalysisResults" name="saveAnalysisResults"${addAttribute(defaultPreferences.saveAnalysisResults, "checked")} data-astro-cid-5glwsk2o> <span class="slider" data-astro-cid-5glwsk2o></span> </label> </div> </div> <div class="form-group" data-astro-cid-5glwsk2o> <div class="switch-container" data-astro-cid-5glwsk2o> <label class="switch-label" for="aiSuggestions" data-astro-cid-5glwsk2o>
AI Suggestions
<div class="form-hint" data-astro-cid-5glwsk2o>
Allow AI to suggest relevant resources based on conversation.
</div> </label> <label class="switch" data-astro-cid-5glwsk2o> <input type="checkbox" id="aiSuggestions" name="aiSuggestions"${addAttribute(defaultPreferences.aiSuggestions, "checked")} data-astro-cid-5glwsk2o> <span class="slider" data-astro-cid-5glwsk2o></span> </label> </div> </div> </div> <div class="form-actions" data-astro-cid-5glwsk2o> <button type="submit" class="btn btn-primary" data-astro-cid-5glwsk2o>Save Preferences</button> <button type="button" id="reset-defaults" class="btn btn-secondary" data-astro-cid-5glwsk2o>Reset to Defaults</button> </div> </form> <div id="ai-preferences-loading" class="hidden" data-astro-cid-5glwsk2o>Loading preferences...</div> </main> ` })} ${renderScript($$result, "/root/pixel/src/pages/settings/ai-preferences.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/settings/ai-preferences.astro", void 0);

const $$file = "/root/pixel/src/pages/settings/ai-preferences.astro";
const $$url = "/settings/ai-preferences";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiPreferences,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
