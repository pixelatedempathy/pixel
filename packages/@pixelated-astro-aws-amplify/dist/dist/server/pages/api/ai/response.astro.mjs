;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b9a90257-28bf-42af-b67b-61fffcded8c4",e._sentryDebugIdIdentifier="sentry-dbid-b9a90257-28bf-42af-b67b-61fffcded8c4")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
import { c as createTogetherAIService } from '../../../chunks/together_FKBRIfOz.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../chunks/audit_CMoAMAaW.mjs';
import { g as getSession } from '../../../chunks/session_DeimXgPx.mjs';
import { a as aiRepository } from '../../../chunks/index_Bs-_Aolf.mjs';
export { renderers } from '../../../renderers.mjs';

const appLogger = createBuildSafeLogger("app");
class ResponseGenerationService {
  aiService;
  model;
  temperature;
  maxResponseTokens;
  constructor(config) {
    this.aiService = config.aiService;
    this.model = config.model;
    this.temperature = config.temperature ?? 0.7;
    this.maxResponseTokens = config.maxResponseTokens ?? 1024;
  }
  async generateResponse(messages) {
    try {
      const options = {
        model: this.model,
        temperature: this.temperature,
        maxTokens: this.maxResponseTokens
      };
      const completion = await this.aiService.createChatCompletion(
        messages,
        options
      );
      return {
        content: completion.content,
        confidence: 0.8,
        // Default confidence - could be enhanced with actual scoring
        usage: completion.usage
      };
    } catch (error) {
      appLogger.error("Error in response generation:", error);
      throw new Error("Failed to generate therapeutic response");
    }
  }
  async generateResponseWithInstructions(messages, instructions) {
    try {
      const enhancedMessages = [...messages];
      if (instructions) {
        enhancedMessages.unshift({
          role: "system",
          content: `You are a therapeutic AI assistant. Follow these instructions: ${instructions}`
        });
      } else {
        enhancedMessages.unshift({
          role: "system",
          content: "You are a therapeutic AI assistant. Provide empathetic, supportive responses that help users process their emotions and thoughts."
        });
      }
      return await this.generateResponse(enhancedMessages);
    } catch (error) {
      appLogger.error("Error in response generation with instructions:", error);
      throw new Error(
        "Failed to generate therapeutic response with instructions"
      );
    }
  }
  dispose() {
    this.aiService.dispose();
  }
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const GET = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(
      JSON.stringify({
        name: "AI Therapeutic Response API",
        description: "Endpoint for generating therapeutic AI responses",
        methods: ["POST"],
        version: "1.0.0",
        status: "active",
        authentication: "required",
        supportedModels: [
          "mistralai/Mixtral-8x7B-Instruct-v0.2",
          "gpt-4",
          "claude-3"
        ],
        parameters: {
          required: ["messages or currentMessage"],
          optional: [
            "model",
            "temperature",
            "maxResponseTokens",
            "instructions"
          ]
        },
        features: [
          "therapeutic response generation",
          "conversation context awareness",
          "audit logging",
          "token usage tracking"
        ],
        defaultModel: "mistralai/Mixtral-8x7B-Instruct-v0.2",
        maxTokens: 1024
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to get endpoint information",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
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
    const {
      messages,
      currentMessage,
      model,
      temperature = 0.7,
      maxResponseTokens = 1024,
      instructions
    } = body;
    if (!messages && !currentMessage) {
      return new Response(
        JSON.stringify({
          error: "Either messages or currentMessage is required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const togetherService = createTogetherAIService({
      togetherApiKey: Object.assign(__vite_import_meta_env__, { _: process.env._ })["TOGETHER_API_KEY"] || "",
      togetherBaseUrl: Object.assign(__vite_import_meta_env__, { _: process.env._ })["TOGETHER_BASE_URL"] || "https://api.together.xyz",
      apiKey: ""
    });
    const modelId = model || "mistralai/Mixtral-8x7B-Instruct-v0.2";
    const serviceAdapter = {
      createChatCompletion: async (messages2, options) => {
        const response = await togetherService.generateCompletion(
          messages2,
          options
        );
        return {
          id: `together${Date.now()}`,
          created: Date.now(),
          model: options?.model || modelId,
          choices: [
            {
              message: {
                role: "assistant",
                content: typeof response === "object" && response !== null && "content" in response ? response.content : "",
                name: "assistant"
              },
              finishReason: "stop"
            }
          ],
          usage: typeof response === "object" && response !== null && "usage" in response ? {
            promptTokens: Number(
              response.usage?.promptTokens || 0
            ),
            completionTokens: Number(
              response.usage?.completionTokens || 0
            ),
            totalTokens: Number(
              response.usage?.totalTokens || 0
            )
          } : {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          },
          provider: "together",
          content: typeof response === "object" && response !== null && "content" in response ? response.content : ""
        };
      },
      createStreamingChatCompletion: async (_messages, options) => {
        const generator = async function* () {
          yield {
            id: `together_${Date.now()}`,
            model: options?.model || modelId,
            created: Date.now(),
            content: "",
            done: true
          };
          throw new Error("Streaming not supported in this implementation");
        };
        return generator();
      },
      getModelInfo: (model2) => ({
        id: model2,
        name: model2,
        provider: "together",
        capabilities: ["chat"],
        contextWindow: 8192,
        maxTokens: 8192
      }),
      createChatCompletionWithTracking: async (messages2, options) => {
        const response = await togetherService.generateCompletion(
          messages2,
          options
        );
        return {
          id: `together${Date.now()}`,
          created: Date.now(),
          model: options?.model || modelId,
          choices: [
            {
              message: {
                role: "assistant",
                content: typeof response === "object" && response !== null && "content" in response ? response.content : "",
                name: "assistant"
              },
              finishReason: "stop"
            }
          ],
          usage: typeof response === "object" && response !== null && "usage" in response ? {
            promptTokens: Number(
              response.usage?.promptTokens || 0
            ),
            completionTokens: Number(
              response.usage?.completionTokens || 0
            ),
            totalTokens: Number(
              response.usage?.totalTokens || 0
            )
          } : {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          },
          provider: "together",
          content: typeof response === "object" && response !== null && "content" in response ? response.content : ""
        };
      },
      // generateCompletion is not required for this adapter in current usage. Omitting to simplify typing.
      dispose: () => {
        togetherService.dispose();
      }
    };
    const responseService = new ResponseGenerationService({
      aiService: serviceAdapter,
      model: modelId,
      temperature,
      maxResponseTokens
    });
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.response.request",
      session?.user?.id || "anonymous",
      "response-generation",
      {
        model: modelId || "mistralai/Mixtral-8x7B-Instruct-v0.2",
        temperature,
        maxResponseTokens,
        messageCount: messages ? messages.length : 1
      }
    );
    const startTime = Date.now();
    let result;
    if (messages) {
      result = await responseService.generateResponseWithInstructions(
        messages,
        instructions
      );
    } else {
      result = await responseService.generateResponseWithInstructions(
        [currentMessage],
        instructions
      );
    }
    const latencyMs = Date.now() - startTime;
    await aiRepository.storeResponseGeneration({
      userId: session?.user?.id || "anonymous",
      modelId: modelId || "mistralai/Mixtral-8x7B-Instruct-v0.2",
      modelProvider: "together",
      latencyMs,
      success: true,
      error: null,
      prompt: currentMessage || (messages ? JSON.stringify(messages) : ""),
      response: result?.content,
      context: "",
      instructions,
      temperature,
      maxTokens: maxResponseTokens,
      requestTokens: result?.usage?.promptTokens || 0,
      responseTokens: result?.usage?.completionTokens || 0,
      totalTokens: result?.usage?.totalTokens || 0,
      metadata: {
        messageCount: messages ? messages.length : 1
      }
    });
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.response.response",
      session?.user?.id || "anonymous",
      "response-generation",
      {
        model: modelId || "mistralai/Mixtral-8x7B-Instruct-v0.2",
        responseLength: result?.content.length,
        latencyMs
      }
    );
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in response generation API:", error);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.response.error",
      session?.user?.id || "anonymous",
      "response-generation",
      {
        error: error instanceof Error ? error?.message : String(error),
        stack: error instanceof Error ? error?.stack : void 0,
        status: "error"
      },
      AuditEventStatus.FAILURE
    );
    return new Response(
      JSON.stringify({
        error: "An error occurred during response generation"
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
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
