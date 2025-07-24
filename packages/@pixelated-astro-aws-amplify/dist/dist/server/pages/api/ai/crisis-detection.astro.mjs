;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3a58b1ba-77cc-4b99-80f9-455e01e1adeb",e._sentryDebugIdIdentifier="sentry-dbid-3a58b1ba-77cc-4b99-80f9-455e01e1adeb")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
import { c as createTogetherAIService } from '../../../chunks/together_DLoWi1ME.mjs';
import { g as getSession } from '../../../chunks/session_CjG7jjfF.mjs';
import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../chunks/audit_DWq5CQbl.mjs';
import { Pool } from 'pg';
export { renderers } from '../../../renderers.mjs';

const appLogger$2 = createBuildSafeLogger("app");
class CrisisDetectionService {
  aiService;
  // Crisis detection keywords by category
  static CRISIS_KEYWORDS = {
    self_harm: [
      "self-harm",
      "hurt myself",
      "cutting",
      "self-injury",
      "self-mutilation",
      "harming myself",
      "want to hurt myself"
    ],
    suicide: [
      "suicide",
      "kill myself",
      "end my life",
      "want to die",
      "suicidal",
      "not worth living",
      "better off dead",
      "suicide plan",
      "take my own life"
    ],
    emergency: [
      "immediate danger",
      "going to hurt",
      "right now",
      "tonight",
      "overdose",
      "pills",
      "weapon",
      "bridge",
      "plan to"
    ],
    severe_depression: [
      "hopeless",
      "worthless",
      "no point",
      "give up",
      "can't go on",
      "unbearable pain",
      "too much pain",
      "can't take it"
    ],
    moderate_concern: [
      "depressed",
      "anxious",
      "panic",
      "overwhelmed",
      "struggling",
      "difficult time",
      "very sad",
      "can't cope"
    ]
  };
  static SENSITIVITY_THRESHOLDS = {
    low: { crisis: 0.8, concern: 0.6 },
    medium: { crisis: 0.6, concern: 0.4 },
    high: { crisis: 0.4, concern: 0.2 }
  };
  constructor(config) {
    this.aiService = config.aiService;
  }
  async detectCrisis(text, options) {
    try {
      const keywordAnalysis = this.analyzeKeywords(text);
      let aiAnalysis = null;
      if (keywordAnalysis.score >= 0.3) {
        aiAnalysis = await this.performAIAnalysis(text);
      }
      const finalScore = Math.max(keywordAnalysis.score, aiAnalysis?.score || 0);
      const thresholds = CrisisDetectionService.SENSITIVITY_THRESHOLDS[options.sensitivityLevel];
      const isCrisis = finalScore >= thresholds.crisis;
      return {
        isCrisis,
        confidence: finalScore,
        category: this.determineCrisisCategory(
          keywordAnalysis.indicators,
          aiAnalysis?.category
        ),
        content: text,
        riskLevel: this.determineRiskLevel(finalScore),
        urgency: this.determineUrgency(finalScore, keywordAnalysis.indicators),
        detectedTerms: keywordAnalysis.indicators,
        suggestedActions: this.generateSuggestedActions(finalScore),
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      appLogger$2.error("Error in crisis detection:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : "",
        error
      });
      throw new Error("Crisis detection analysis failed");
    }
  }
  async detectBatch(texts, options) {
    try {
      return await Promise.all(
        texts.map((text) => this.detectCrisis(text, options))
      );
    } catch (error) {
      appLogger$2.error("Error in batch crisis detection:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : "",
        error
      });
      throw new Error("Batch crisis detection failed");
    }
  }
  analyzeKeywords(text) {
    const lowerText = text.toLowerCase();
    const indicators = [];
    let score = 0;
    for (const [category, keywords] of Object.entries(
      CrisisDetectionService.CRISIS_KEYWORDS
    )) {
      const categoryWeight = this.getCategoryWeight(category);
      for (const keyword of keywords) {
        if (lowerText.includes(keyword.toLowerCase())) {
          indicators.push(keyword);
          score += categoryWeight;
        }
      }
    }
    return {
      score: Math.min(score / 3, 1),
      // Normalize to 0-1
      indicators: [...new Set(indicators)]
      // Remove duplicates
    };
  }
  getCategoryWeight(category) {
    const weights = {
      emergency: 1,
      suicide: 0.9,
      self_harm: 0.8,
      severe_depression: 0.6,
      moderate_concern: 0.4
    };
    return weights[category] || 0.2;
  }
  async performAIAnalysis(text) {
    const prompt = `
        Analyze the following text for mental health crisis indicators.
        Respond with a JSON object containing:
        - score: risk score from 0.0 to 1.0
        - category: primary concern category
        - severity: low, medium, high, or critical
        - indicators: array of specific concerning phrases
        - recommendations: array of suggested actions

        Text to analyze: "${text}"
      `;
    try {
      const response = await this.aiService.createChatCompletion(
        [
          {
            role: "system",
            content: "You are a mental health crisis detection AI. Provide accurate, helpful analysis."
          },
          { role: "user", content: prompt }
        ],
        {
          temperature: 0.1,
          // Low temperature for consistent results
          maxTokens: 500
        }
      );
      const { content } = response;
      try {
        const parsed = JSON.parse(content);
        if (typeof parsed === "object" && parsed !== null) {
          return {
            score: Number(parsed.score) || 0,
            category: parsed.category || "general_concern",
            severity: parsed.severity || "low",
            indicators: Array.isArray(parsed.indicators) ? parsed.indicators : [],
            recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : []
          };
        }
        throw new Error("Parsed AI response is not a valid object.");
      } catch (error) {
        appLogger$2.error("AI response parsing failed", {
          error,
          responseContent: content
        });
        return {
          score: 0.3,
          category: "analysis_error",
          severity: "medium",
          indicators: [],
          recommendations: ["Manual review recommended"]
        };
      }
    } catch (error) {
      appLogger$2.error("AI service call failed in crisis detection", { error });
      throw error;
    }
  }
  determineCrisisCategory(keywords, aiCategory) {
    if (aiCategory && aiCategory !== "analysis_error") {
      return aiCategory;
    }
    if (keywords.some(
      (k) => CrisisDetectionService.CRISIS_KEYWORDS.emergency.includes(k)
    )) {
      return "emergency";
    }
    if (keywords.some(
      (k) => CrisisDetectionService.CRISIS_KEYWORDS.suicide.includes(k)
    )) {
      return "suicide_risk";
    }
    if (keywords.some(
      (k) => CrisisDetectionService.CRISIS_KEYWORDS.self_harm.includes(k)
    )) {
      return "self_harm_risk";
    }
    if (keywords.some(
      (k) => CrisisDetectionService.CRISIS_KEYWORDS.severe_depression.includes(k)
    )) {
      return "severe_depression";
    }
    return "general_concern";
  }
  determineRiskLevel(score) {
    if (score >= 0.8) {
      return "critical";
    }
    if (score >= 0.6) {
      return "high";
    }
    if (score >= 0.4) {
      return "medium";
    }
    return "low";
  }
  determineUrgency(score, indicators) {
    const hasEmergencyKeywords = indicators.some(
      (ind) => CrisisDetectionService.CRISIS_KEYWORDS.emergency.includes(ind)
    );
    if (hasEmergencyKeywords || score >= 0.9) {
      return "immediate";
    }
    if (score >= 0.7) {
      return "high";
    }
    if (score >= 0.5) {
      return "medium";
    }
    return "low";
  }
  generateSuggestedActions(score) {
    const actions = [];
    if (score >= 0.9) {
      actions.push("Immediate intervention required");
      actions.push("Contact emergency services");
      actions.push("Do not leave individual alone");
    } else if (score >= 0.7) {
      actions.push("Urgent mental health evaluation needed");
      actions.push("Contact crisis hotline");
      actions.push("Remove access to means of harm");
    } else if (score >= 0.5) {
      actions.push("Schedule mental health appointment");
      actions.push("Increase monitoring and support");
      actions.push("Provide crisis resources");
    } else {
      actions.push("Continue supportive conversation");
      actions.push("Monitor for changes");
      actions.push("Provide mental health resources");
    }
    return actions;
  }
}

const __vite_import_meta_env__$1 = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const appLogger$1 = createBuildSafeLogger("ai-providers");
const providers = /* @__PURE__ */ new Map();
function getEnvVar$1(key) {
  const metaEnv = Object.assign(__vite_import_meta_env__$1, { HUGGINGFACE_API_KEY: "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", OPENAI_API_KEY: process.env.OPENAI_API_KEY, _: process.env._, AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY });
  return process.env[key] ?? metaEnv?.[key];
}
const defaultConfigs = {
  "anthropic": {
    name: "Anthropic Claude",
    baseUrl: "https://api.anthropic.com",
    defaultModel: "claude-3-sonnet-20240229",
    capabilities: ["chat", "analysis", "crisis-detection"]
  },
  "openai": {
    name: "OpenAI GPT",
    baseUrl: "https://api.openai.com/v1",
    defaultModel: "gpt-4",
    capabilities: ["chat", "analysis", "crisis-detection"]
  },
  "azure-openai": {
    name: "Azure OpenAI",
    baseUrl: "",
    // Will be set from Azure config
    defaultModel: "gpt-4",
    capabilities: ["chat", "analysis", "crisis-detection"]
  },
  "together": {
    name: "Together AI",
    baseUrl: "https://api.together.xyz",
    defaultModel: "mistralai/Mixtral-8x7B-Instruct-v0.2",
    capabilities: ["chat", "analysis", "crisis-detection"]
  },
  "huggingface": {
    name: "Hugging Face",
    baseUrl: "https://api-inference.huggingface.co",
    defaultModel: "microsoft/DialoGPT-medium",
    capabilities: ["chat"]
  }
};
function initializeProviders() {
  try {
    const togetherApiKey = getEnvVar$1("TOGETHER_API_KEY");
    if (togetherApiKey) {
      providers.set("together", {
        ...defaultConfigs.together,
        apiKey: togetherApiKey
      });
    }
    const openaiApiKey = getEnvVar$1("OPENAI_API_KEY");
    if (openaiApiKey) {
      providers.set("openai", {
        ...defaultConfigs.openai,
        apiKey: openaiApiKey
      });
    }
    const anthropicApiKey = getEnvVar$1("ANTHROPIC_API_KEY");
    if (anthropicApiKey) {
      providers.set("anthropic", {
        ...defaultConfigs.anthropic,
        apiKey: anthropicApiKey
      });
    }
    const azureOpenAiKey = getEnvVar$1("AZURE_OPENAI_API_KEY");
    const azureOpenAiEndpoint = getEnvVar$1("AZURE_OPENAI_ENDPOINT");
    if (azureOpenAiKey && azureOpenAiEndpoint) {
      providers.set("azure-openai", {
        ...defaultConfigs["azure-openai"],
        apiKey: azureOpenAiKey,
        baseUrl: azureOpenAiEndpoint
      });
    }
    const hfApiKey = getEnvVar$1("HUGGINGFACE_API_KEY");
    if (hfApiKey) {
      providers.set("huggingface", {
        ...defaultConfigs.huggingface,
        apiKey: hfApiKey
      });
    }
    appLogger$1.info(`Initialized ${providers.size} AI providers`);
  } catch (error) {
    appLogger$1.error("Failed to initialize AI providers:", {
      error
    });
  }
}
function getAIServiceByProvider(providerType) {
  try {
    const config = providers.get(providerType);
    if (!config) {
      appLogger$1.warn(`Provider ${providerType} not configured`);
      return null;
    }
    switch (providerType) {
      case "together":
        return createTogetherServiceAdapter(config);
      case "anthropic":
        return createAnthropicServiceAdapter(config);
      case "openai":
        return createOpenAIServiceAdapter(config);
      case "huggingface":
        return createHuggingFaceServiceAdapter(config);
      default:
        appLogger$1.warn(`Unsupported provider type: ${providerType}`);
        return null;
    }
  } catch (error) {
    appLogger$1.error(
      `Failed to create AI service for provider ${providerType}:`,
      { error }
    );
    return null;
  }
}
function createTogetherServiceAdapter(config) {
  const togetherService = createTogetherAIService({
    togetherApiKey: config.apiKey,
    apiKey: config.apiKey,
    ...config.baseUrl ? { togetherBaseUrl: config.baseUrl } : {}
  });
  return {
    createChatCompletion: async (messages, options) => {
      return await togetherService.generateCompletion(
        messages,
        options
      );
    },
    createStreamingChatCompletion: async (_messages, _options) => Promise.reject(
      new Error("Streaming not implemented for Together AI")
    ),
    getModelInfo: (model) => ({
      id: model,
      name: model,
      provider: "together",
      capabilities: config.capabilities,
      contextWindow: 8192,
      maxTokens: 8192
    }),
    dispose: togetherService.dispose.bind(togetherService)
  };
}
function createAnthropicServiceAdapter(config) {
  return {
    createChatCompletion: async () => {
      throw new Error("Anthropic service not implemented");
    },
    createStreamingChatCompletion: async (_messages, _options) => Promise.reject(
      new Error("Anthropic streaming not implemented")
    ),
    getModelInfo: (model) => ({
      id: model,
      name: model,
      provider: "anthropic",
      capabilities: config.capabilities,
      contextWindow: 1e5,
      maxTokens: 4096
    }),
    dispose: () => {
    }
  };
}
function createOpenAIServiceAdapter(config) {
  return {
    createChatCompletion: async () => {
      throw new Error("OpenAI service not implemented");
    },
    createStreamingChatCompletion: async (_messages, _options) => Promise.reject(
      new Error("OpenAI streaming not implemented")
    ),
    getModelInfo: (model) => ({
      id: model,
      name: model,
      provider: "openai",
      capabilities: config.capabilities,
      contextWindow: 8192,
      maxTokens: 4096
    }),
    dispose: () => {
    }
  };
}
function createHuggingFaceServiceAdapter(config) {
  return {
    createChatCompletion: async () => {
      throw new Error("Hugging Face service not implemented");
    },
    createStreamingChatCompletion: async (_messages, _options) => Promise.reject(
      new Error("Hugging Face streaming not implemented")
    ),
    getModelInfo: (model) => ({
      id: model,
      name: model,
      provider: "huggingface",
      capabilities: config.capabilities,
      contextWindow: 2048,
      maxTokens: 1024
    }),
    dispose: () => {
    }
  };
}
initializeProviders();

const appLogger = createBuildSafeLogger("app");
class CrisisProtocol {
  static instance = null;
  config = null;
  activeEvents = /* @__PURE__ */ new Map();
  alertTimers = /* @__PURE__ */ new Map();
  constructor() {
  }
  static getInstance() {
    if (!CrisisProtocol.instance) {
      CrisisProtocol.instance = new CrisisProtocol();
    }
    return CrisisProtocol.instance;
  }
  initialize(config) {
    this.config = config;
    appLogger.info("Crisis Protocol initialized with", {
      alertConfigurations: config.alertConfigurations.length,
      staffChannels: Object.keys(config.staffChannels).length,
      slackEnabled: !!config.slackWebhookUrl
    });
  }
  async handleCrisis(userId, sessionId, content, confidence, detectedRisks) {
    if (!this.config) {
      throw new Error("Crisis Protocol not initialized");
    }
    try {
      const alertLevel = this.determineAlertLevel(confidence, detectedRisks);
      const alertConfig = this.getAlertConfiguration(alertLevel);
      if (!alertConfig) {
        appLogger.warn(`No alert configuration found for level: ${alertLevel}`);
        return;
      }
      const crisisEvent = {
        id: crypto.randomUUID(),
        userId,
        sessionId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        content,
        confidence,
        detectedRisks,
        alertLevel,
        escalated: false,
        resolved: false
      };
      this.activeEvents.set(crisisEvent.id, crisisEvent);
      await this.config.crisisEventRecorder({
        id: crisisEvent.id,
        userId: crisisEvent.userId,
        sessionId: crisisEvent.sessionId,
        timestamp: crisisEvent.timestamp,
        content: crisisEvent.content,
        confidence: crisisEvent.confidence,
        detectedRisks: crisisEvent.detectedRisks,
        alertLevel: crisisEvent.alertLevel,
        escalated: crisisEvent.escalated,
        resolved: crisisEvent.resolved
      });
      await this.notifyStaff(crisisEvent, alertConfig);
      if (alertConfig.autoEscalateAfterMs > 0) {
        this.scheduleAutoEscalation(crisisEvent, alertConfig);
      }
      appLogger.info("Crisis event handled", {
        eventId: crisisEvent.id,
        userId,
        alertLevel,
        confidence
      });
    } catch (error) {
      appLogger.error("Error handling crisis event:", error);
      throw error;
    }
  }
  async escalateEvent(eventId, handledBy) {
    const event = this.activeEvents.get(eventId);
    if (!event) {
      throw new Error(`Crisis event not found: ${eventId}`);
    }
    event.escalated = true;
    event.handledBy = handledBy;
    const timer = this.alertTimers.get(eventId);
    if (timer) {
      clearTimeout(timer);
      this.alertTimers.delete(eventId);
    }
    const nextLevel = this.getNextAlertLevel(event.alertLevel);
    if (nextLevel) {
      const nextConfig = this.getAlertConfiguration(nextLevel);
      if (nextConfig) {
        await this.notifyStaff(event, nextConfig);
      }
    }
    appLogger.info("Crisis event escalated", {
      eventId,
      handledBy,
      newLevel: nextLevel || event.alertLevel
    });
  }
  async resolveEvent(eventId, handledBy, notes) {
    const event = this.activeEvents.get(eventId);
    if (!event) {
      throw new Error(`Crisis event not found: ${eventId}`);
    }
    event.resolved = true;
    event.handledBy = handledBy;
    event.notes = notes;
    const timer = this.alertTimers.get(eventId);
    if (timer) {
      clearTimeout(timer);
      this.alertTimers.delete(eventId);
    }
    if (this.config) {
      await this.config.crisisEventRecorder({
        id: event.id,
        userId: event.userId,
        sessionId: event.sessionId,
        timestamp: event.timestamp,
        content: event.content,
        confidence: event.confidence,
        detectedRisks: event.detectedRisks,
        alertLevel: event.alertLevel,
        escalated: event.escalated,
        resolved: event.resolved,
        handledBy: event.handledBy,
        notes: event.notes
      });
    }
    this.activeEvents.delete(eventId);
    appLogger.info("Crisis event resolved", {
      eventId,
      handledBy,
      notes
    });
  }
  getActiveEvents() {
    return Array.from(this.activeEvents.values());
  }
  getEvent(eventId) {
    return this.activeEvents.get(eventId);
  }
  determineAlertLevel(confidence, detectedRisks) {
    if (!this.config) {
      return "concern";
    }
    const emergencyTerms = [
      "immediate danger",
      "right now",
      "tonight",
      "suicide plan"
    ];
    if (detectedRisks.some(
      (risk) => emergencyTerms.some((term) => risk.includes(term))
    )) {
      return "emergency";
    }
    if (confidence >= 0.9) {
      return "emergency";
    }
    if (confidence >= 0.7) {
      return "severe";
    }
    if (confidence >= 0.5) {
      return "moderate";
    }
    return "concern";
  }
  getAlertConfiguration(level) {
    if (!this.config) {
      return null;
    }
    return this.config.alertConfigurations.find(
      (config) => config.level === level
    ) || null;
  }
  getNextAlertLevel(currentLevel) {
    const levels = [
      "concern",
      "moderate",
      "severe",
      "emergency"
    ];
    const currentIndex = levels.indexOf(currentLevel);
    return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
  }
  async notifyStaff(event, config) {
    if (!this.config) {
      return;
    }
    try {
      const channels = this.config.staffChannels[event.alertLevel] || [];
      for (const channel of channels) {
        if (channel === "SLACK_WEBHOOK_CHANNEL" && this.config.slackWebhookUrl) {
          await this.sendSlackNotification(event, config);
        }
      }
    } catch (error) {
      appLogger.error("Error sending staff notifications:", error);
    }
  }
  async sendSlackNotification(event, config) {
    if (!this.config?.slackWebhookUrl) {
      return;
    }
    try {
      const message = this.formatSlackMessage(event, config);
      const response = await fetch(this.config.slackWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: `🚨 Crisis Alert - ${config.level.toUpperCase()}`,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: message
              }
            },
            {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Handle Crisis"
                  },
                  value: event.id,
                  style: "primary"
                },
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Escalate"
                  },
                  value: `escalate_${event.id}`,
                  style: "danger"
                }
              ]
            }
          ]
        })
      });
      if (!response.ok) {
        throw new Error(
          `Slack notification failed: ${response.status} ${response.statusText}`
        );
      }
      appLogger.info("Slack notification sent", {
        eventId: event.id,
        alertLevel: event.alertLevel
      });
    } catch (error) {
      appLogger.error("Failed to send Slack notification:", error);
    }
  }
  formatSlackMessage(event, config) {
    return `
*Crisis Detection Alert*
*Level:* ${config.level.toUpperCase()}
*Confidence:* ${(event.confidence * 100).toFixed(1)}%
*User ID:* ${event.userId}
*Detected Risks:* ${event.detectedRisks.join(", ")}
*Time:* ${new Date(event.timestamp).toLocaleString()}

*Required Actions:*
${config.requiredActions.map((action) => `• ${action}`).join("\n")}

*Response Template:*
${config.responseTemplate.replace("{triggerTerms}", event.detectedRisks.join(", "))}
    `.trim();
  }
  scheduleAutoEscalation(event, config) {
    const timer = setTimeout(async () => {
      try {
        if (this.activeEvents.has(event.id) && !this.activeEvents.get(event.id)?.resolved) {
          await this.escalateEvent(event.id, "auto-escalation");
        }
      } catch (error) {
        appLogger.error("Auto-escalation failed:", error);
      }
    }, config.autoEscalateAfterMs);
    this.alertTimers.set(event.id, timer);
  }
}

const logger$1 = createBuildSafeLogger("crisis-event-db");
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : void 0
});
async function recordCrisisEventToDb(eventData) {
  const {
    caseId,
    patientId,
    sessionId,
    alertLevel,
    detectionScore,
    detectedRisks,
    textSample,
    timestamp
  } = eventData;
  try {
    await pool.query(
      `INSERT INTO crisis_events
        (case_id, patient_id, session_id, alert_level, detection_score, detected_risks, text_sample, timestamp)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        caseId,
        patientId,
        sessionId,
        alertLevel,
        detectionScore,
        detectedRisks,
        textSample,
        timestamp
      ]
    );
    logger$1.info("Crisis event recorded successfully", { caseId });
  } catch (error) {
    logger$1.error("Failed to record crisis event to database", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      caseId
    });
    throw new Error(
      `Failed to record crisis event: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
console.log("[crisis-detection.ts] File loaded at", (/* @__PURE__ */ new Date()).toISOString());
const logger = createBuildSafeLogger("crisis-detection");
const alertConfigurations = [
  {
    level: "concern",
    name: "General Concern",
    description: "Low-level indicators of potential distress.",
    thresholdScore: 0.3,
    triggerTerms: [],
    autoEscalateAfterMs: 0,
    requiredActions: ["log"],
    responseTemplate: "Please keep an eye on the conversation and offer support if needed.",
    escalationTimeMs: 0
  },
  {
    level: "moderate",
    name: "Moderate Risk",
    description: "Signs of elevated risk that require a timely response.",
    thresholdScore: 0.6,
    triggerTerms: [],
    autoEscalateAfterMs: 30 * 60 * 1e3,
    // 30 minutes
    requiredActions: ["notify_oncall"],
    responseTemplate: "A team member has been notified to review the conversation asap.",
    escalationTimeMs: 30 * 60 * 1e3
  },
  {
    level: "severe",
    name: "Severe Risk",
    description: "High probability of imminent self-harm or danger.",
    thresholdScore: 0.8,
    triggerTerms: [],
    autoEscalateAfterMs: 10 * 60 * 1e3,
    // 10 minutes
    requiredActions: ["notify_supervisor", "prepare_escalation"],
    responseTemplate: "Senior staff have been alerted and are reviewing immediately.",
    escalationTimeMs: 10 * 60 * 1e3
  },
  {
    level: "emergency",
    name: "Emergency",
    description: "User appears to be in immediate danger and requires urgent help.",
    thresholdScore: 0.9,
    triggerTerms: [],
    autoEscalateAfterMs: 0,
    requiredActions: ["notify_all", "call_emergency_services"],
    responseTemplate: "Please contact emergency services immediately and follow emergency protocol.",
    escalationTimeMs: 0
  }
];
const staffChannels = {
  concern: ["mental-health-support"],
  moderate: ["on-call-therapists"],
  severe: ["crisis-response-team"],
  emergency: ["crisis-response-team", "leadership"]
};
const metaEnv = Object.assign(__vite_import_meta_env__, { SLACK_WEBHOOK_URL: "https://hooks.slack.com/services/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", _: process.env._ });
function getEnvVar(key) {
  return process.env[key] ?? metaEnv?.[key];
}
const slackWebhookUrl = getEnvVar("SLACK_WEBHOOK_URL");
if (!slackWebhookUrl) {
  logger.warn(
    "SLACK_WEBHOOK_URL is not set in environment variables. Slack notifications for crisis alerts will be disabled."
  );
}
const crisisProtocolInstance = CrisisProtocol.getInstance();
const crisisEventRecorder = async (eventData) => {
  await recordCrisisEventToDb(eventData);
};
const protocolConfig = {
  alertConfigurations,
  staffChannels,
  crisisEventRecorder,
  ...slackWebhookUrl ? { slackWebhookUrl } : {}
};
crisisProtocolInstance.initialize(protocolConfig);
const POST = async ({ request }) => {
  const startTime = Date.now();
  let crisisDetected = false;
  let session = null;
  console.log("[crisis-detection.ts] POST handler invoked");
  try {
    session = await getSession(request);
    if (!session) {
      return new Response(
        JSON.stringify({
          error: "Unauthorized",
          message: "You must be logged in to access this endpoint"
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const body = await request.json();
    const {
      text,
      batch,
      sensitivityLevel = "medium",
      provider = "anthropic"
    } = body;
    if (!text && (!batch || !Array.isArray(batch))) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Either text or batch must be provided"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const aiService = getAIServiceByProvider(provider);
    if (!aiService) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: `Provider ${provider} is not supported`
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const crisisService = new CrisisDetectionService({
      aiService,
      sensitivityLevel
    });
    let result = null;
    if (batch) {
      const batchResult = await crisisService.detectBatch(batch, {
        sensitivityLevel,
        userId: session.user.id,
        source: "api-batch-request"
      });
      result = batchResult;
      for (const detection of batchResult) {
        if (detection.isCrisis) {
          crisisDetected = true;
          try {
            await crisisProtocolInstance.handleCrisis(
              session.user.id,
              session.session?.access_token?.substring(0, 8) || `batch-item-session-${crypto.randomUUID()}`,
              // Use part of access token or generate UUID
              detection.content,
              // Text sample from CrisisDetectionResult
              detection.confidence,
              // Detection score from CrisisDetectionResult
              detection.category ? [detection.category] : []
              // Detected risks from CrisisDetectionResult
            );
          } catch (error) {
            logger.error("Error handling crisis event in batch:", {
              error: error instanceof Error ? error.message : String(error),
              stack: error instanceof Error ? error.stack : void 0,
              detection
            });
          }
        }
      }
    } else {
      const singleResult = await crisisService.detectCrisis(text, {
        sensitivityLevel,
        userId: session.user.id,
        source: "api-request"
      });
      result = singleResult;
      if (singleResult.isCrisis) {
        crisisDetected = true;
        try {
          await CrisisProtocol.getInstance().handleCrisis(
            session.user.id,
            session.session?.access_token?.substring(0, 8) || `single-item-session-${crypto.randomUUID()}`,
            // Use part of access token or generate UUID
            singleResult.content,
            // Text sample from CrisisDetectionResult
            singleResult.confidence,
            // Detection score from CrisisDetectionResult
            singleResult.category ? [singleResult.category] : []
            // Detected risks from CrisisDetectionResult
          );
        } catch (error) {
          logger.error("Error handling single crisis event:", {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : void 0,
            result
          });
        }
      }
    }
    const latencyMs = Date.now() - startTime;
    logger.info("Crisis detection completed", {
      latencyMs,
      crisisDetected,
      sensitivityLevel,
      isBatch: !!batch,
      userId: session.user.id
    });
    const aiResource = {
      id: "crisis-detection",
      type: "ai"
    };
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.crisis.request",
      session.user.id,
      aiResource.id,
      // resource is a string
      {
        // details instead of metadata
        modelName: aiService.getModelInfo("default")?.name || "unknown",
        sensitivityLevel,
        batchSize: batch ? batch.length : 0,
        textLength: text ? text.length : 0,
        resourceType: aiResource.type
      },
      AuditEventStatus.SUCCESS
    );
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.crisis.response",
      session.user.id,
      aiResource.id,
      // resource is a string
      {
        // details instead of metadata
        modelName: aiService.getModelInfo("default")?.name || "unknown",
        resultCount: Array.isArray(result) ? result.length : 1,
        crisisDetected,
        latencyMs: Date.now() - startTime,
        priority: crisisDetected ? "high" : "normal",
        resourceType: aiResource.type
      },
      AuditEventStatus.SUCCESS
    );
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error("Error processing crisis detection request:", {
      error: errorMessage,
      stack: error instanceof Error ? error.stack : void 0
    });
    const aiResource = {
      id: "crisis-detection",
      type: "ai"
    };
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      "ai.crisis.error",
      session?.user?.id || "anonymous",
      aiResource.id,
      // resource is a string
      {
        // details instead of metadata
        error: errorMessage,
        stack: error instanceof Error ? error.stack : void 0,
        status: "error",
        // This can go into details
        resourceType: aiResource.type
      },
      AuditEventStatus.FAILURE
    );
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: "Failed to process crisis detection request",
        details: errorMessage
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
