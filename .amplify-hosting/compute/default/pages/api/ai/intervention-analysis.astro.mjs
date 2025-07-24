;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="faf5ff58-f33f-477d-ac17-872bef81ac16",e._sentryDebugIdIdentifier="sentry-dbid-faf5ff58-f33f-477d-ac17-872bef81ac16")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
import { c as createTogetherAIService } from '../../../chunks/together_yW7bo_lu.mjs';
import { c as createAuditLog, A as AuditEventType } from '../../../chunks/audit_BtMut9h8.mjs';
import { g as getSession } from '../../../chunks/session_CShSauy5.mjs';
import { a as aiRepository } from '../../../chunks/index_Bp8AvSEO.mjs';
export { renderers } from '../../../renderers.mjs';

const appLogger = createBuildSafeLogger("app");
class InterventionAnalysisService {
  aiService;
  model;
  systemPrompt;
  constructor(config) {
    const {
      aiService,
      model = "mistralai/Mixtral-8x7B-Instruct-v0.2",
      systemPrompt = "You are an expert mental-health assistant. Return ONLY valid JSON with the requested keys, no markdown or additional commentary."
    } = config;
    this.aiService = aiService;
    this.model = model;
    this.systemPrompt = systemPrompt;
  }
  /**
   * Analyse a single intervention.
   */
  async analyzeIntervention(conversation, interventionMessage, userResponse, options = {}) {
    const startTime = Date.now();
    const basePrompt = "Please analyse the effectiveness of the following therapeutic intervention within the context of the conversation provided.  Return **ONLY** valid JSON with these exact keys: effectiveness_score (1-10), user_receptiveness (low/medium/high), emotional_impact (positive/neutral/negative), key_insights (array of strings), improvement_suggestions (array of strings).";
    const mergedPrompt = options.customPrompt ? `${basePrompt}

${options.customPrompt}` : basePrompt;
    const userContent = `${mergedPrompt}

Conversation:
${JSON.stringify(conversation, null, 2)}

Intervention message:
"${interventionMessage}"

User response:
"${userResponse}"`;
    const messages = [
      { role: "system", content: this.systemPrompt, name: "system" },
      { role: "user", content: userContent, name: "user" }
    ];
    try {
      const completionProvider = this.aiService.createChatCompletion?.bind(this.aiService) || this.aiService.generateCompletion?.bind(this.aiService);
      if (!completionProvider) {
        throw new Error(
          "Provided AI service does not support createChatCompletion or generateCompletion."
        );
      }
      const completion = await completionProvider(messages, {
        model: this.model,
        ...options.aiOptions
      });
      const completionRecord = completion;
      const rawContent = completionRecord.content || completionRecord.choices?.[0]?.message?.content || "";
      let parsed;
      try {
        parsed = JSON.parse(rawContent);
      } catch (err) {
        appLogger.error("Failed to parse AI response as JSON", {
          content: rawContent,
          error: err
        });
        throw err;
      }
      const processingTime = Date.now() - startTime;
      const result = {
        ...parsed,
        model: this.model,
        processingTime
      };
      return result;
    } catch (error) {
      appLogger.error("Intervention analysis failed", { error });
      throw error;
    }
  }
  /**
   * Analyse multiple interventions concurrently.
   */
  async analyzeBatch(batch) {
    return Promise.all(
      batch.map(
        (item) => this.analyzeIntervention(
          item.conversation,
          item.interventionMessage,
          item.userResponse,
          item.options
        )
      )
    );
  }
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const POST = async ({ request }) => {
  let session = null;
  try {
    session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const body = await request.json();
    const { conversation, interventionMessage, userResponse, batch, model } = body;
    if (!(conversation && interventionMessage && userResponse) && !batch) {
      return new Response(
        JSON.stringify({
          error: "Either conversation, interventionMessage, and userResponse or batch is required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const envVars = Object.assign(__vite_import_meta_env__, { _: process.env._ });
    const {
      TOGETHER_API_KEY: togetherApiKey = "",
      TOGETHER_BASE_URL: togetherBaseUrl
    } = envVars;
    const aiService = createTogetherAIService(
      togetherBaseUrl ? { togetherApiKey, togetherBaseUrl, apiKey: "" } : { togetherApiKey, apiKey: "" }
    );
    const modelId = model || "mistralai/Mixtral-8x7B-Instruct-v0.2";
    const interventionService = new InterventionAnalysisService({
      aiService,
      // Force the type to match what InterventionAnalysisService expects
      model: modelId
    });
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.intervention.request",
      session?.user?.id || "anonymous",
      "intervention-analysis",
      {
        model: modelId,
        batchSize: batch ? batch.length : 0
      }
    );
    const startTime = Date.now();
    let result;
    if (batch) {
      result = await interventionService.analyzeBatch(batch);
      for (const [i, analysis] of result.entries()) {
        const latencyMs = Date.now() - startTime;
        const batchItem = batch[i];
        await aiRepository.storeInterventionAnalysis({
          userId: session?.user?.id,
          modelId,
          modelProvider: "together",
          requestTokens: 0,
          // No usage information available
          responseTokens: 0,
          // No usage information available
          totalTokens: 0,
          // No usage information available
          latencyMs,
          success: true,
          error: null,
          conversation: JSON.stringify(batchItem.conversation),
          intervention: batchItem.interventionMessage,
          userResponse: batchItem.userResponse,
          effectiveness: analysis.effectiveness_score,
          insights: JSON.stringify({
            key_insights: analysis.key_insights ?? []
          }),
          recommendedFollowUp: analysis.improvement_suggestions ? analysis.improvement_suggestions.join("\n") : "",
          metadata: {
            batchIndex: i,
            batchSize: batch.length
          }
        });
      }
    } else {
      const conversationMessages = Array.isArray(conversation) ? conversation : [{ role: "user", content: conversation, name: "" }];
      result = await interventionService.analyzeIntervention(
        conversationMessages,
        interventionMessage,
        userResponse
      );
      const latencyMs = Date.now() - startTime;
      await aiRepository.storeInterventionAnalysis({
        userId: session?.user?.id || "anonymous",
        modelId,
        modelProvider: "together",
        requestTokens: 0,
        // No usage information available
        responseTokens: 0,
        // No usage information available
        totalTokens: 0,
        // No usage information available
        latencyMs,
        success: true,
        error: null,
        conversation: JSON.stringify(conversationMessages),
        intervention: interventionMessage,
        userResponse,
        effectiveness: result.effectiveness_score,
        insights: JSON.stringify({
          key_insights: result.key_insights ?? []
        }),
        recommendedFollowUp: result.improvement_suggestions ? result.improvement_suggestions.join("\n") : "",
        metadata: {}
      });
    }
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.intervention.response",
      session?.user?.id || "anonymous",
      "intervention-analysis",
      {
        model: modelId,
        resultCount: Array.isArray(result) ? result.length : 1,
        latencyMs: Date.now() - startTime
      }
    );
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in intervention analysis API:", error);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.intervention.error",
      session?.user?.id || "anonymous",
      "intervention-analysis",
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0,
        status: "error"
      }
    );
    return new Response(
      JSON.stringify({
        error: "An error occurred during intervention analysis"
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
