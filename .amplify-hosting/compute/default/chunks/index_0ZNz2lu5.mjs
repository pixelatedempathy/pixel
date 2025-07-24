;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0d0ca48f-802c-47b0-a44a-1e3f43402476",e._sentryDebugIdIdentifier="sentry-dbid-0d0ca48f-802c-47b0-a44a-1e3f43402476")}catch(e){}}();import { a as getHipaaCompliantLogger, c as getClinicalAnalysisLogger, d as getAiServiceLogger } from './standardized-logger_CP35Y1OB.mjs';
import { config, getEnv } from './env.config_7Q-apMSg.mjs';
import './astro/server_jchCCyc7.mjs';
import { z } from 'zod';
import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';

const logger$9 = getHipaaCompliantLogger("general");
class MentalLLaMAModelProvider {
  /**
   * Returns the model tier (e.g., '7B', '13B') this provider was initialized with.
   */
  getModelTier() {
    return this.modelTier;
  }
  /**
   * Returns the current model configuration (for diagnostics/testing).
   */
  getModelConfig() {
    return this.modelConfig;
  }
  /**
   * For test compatibility: invokes the model and returns the content string (like OpenAI chat API).
   * Throws if not properly configured.
   */
  async chat(messages, options) {
    const result = await this.invoke(messages, options);
    if (!result || typeof result.content !== "string") {
      throw new Error("Invalid response structure from MentalLLaMA API.");
    }
    return result.content;
  }
  modelConfig;
  modelTier;
  /**
   * Creates an instance of MentalLLaMAModelProvider.
   * Initializes configuration based on the specified model tier and environment variables.
   * @param {('7B' | '13B' | string)} [modelTier='7B'] - The model tier to use (e.g., '7B', '13B').
   * @throws Error if essential configuration (API key, endpoint URL for the tier) is missing.
   */
  constructor(modelTier = "7B") {
    this.modelTier = modelTier;
    {
      logger$9.warn(
        `API key or endpoint URL is not configured for MentalLLaMA model tier ${modelTier}. Using mock provider.`
      );
      this.modelConfig = {
        modelId: `mock-mentalllama-${modelTier}`,
        providerType: "custom_api"
      };
    }
    logger$9.info(
      `MentalLLaMAModelProvider initialized for tier ${this.modelTier}`,
      { config: this.modelConfig.modelId }
    );
  }
  /**
   * Checks if the MentalLLaMA model API is available and properly configured.
   * Returns true if the endpoint and API key are set and the API responds to a health check.
   */
  async isAvailable() {
    if (!this.modelConfig.endpointUrl || !this.modelConfig.apiKey || this.modelConfig.modelId.startsWith("mock-")) {
      logger$9.warn(
        `MentalLLaMA model ${this.modelConfig.modelId} is not properly configured or is a mock.`
      );
      return false;
    }
    try {
      const response = await fetch(this.modelConfig.endpointUrl, {
        method: "OPTIONS",
        headers: {
          Authorization: `Bearer ${this.modelConfig.apiKey}`
        }
      });
      if (response.ok) {
        return true;
      }
      logger$9.warn(
        `MentalLLaMA API health check failed with status ${response.status}`
      );
      return false;
    } catch (error) {
      logger$9.error("Error during MentalLLaMA API health check", {
        modelId: this.modelConfig.modelId,
        errorMessage: error instanceof Error ? error.message : String(error)
      });
      return false;
    }
  }
  /**
   * Invokes the configured MentalLLaMA model and returns a structured LLMResponse.
   * @param messages Array of chat messages.
   * @param options Optional invocation options.
   */
  async invoke(messages, options) {
    if (!this.modelConfig.endpointUrl || !this.modelConfig.apiKey || this.modelConfig.modelId.startsWith("mock-")) {
      const errorMsg = `MentalLLaMA model ${this.modelConfig.modelId} is not properly configured for actual API calls.`;
      logger$9.error(errorMsg);
      throw new Error(errorMsg);
    }
    logger$9.info(`Invoking MentalLLaMA model ${this.modelConfig.modelId}`, {
      messageCount: messages.length,
      options
    });
    try {
      const response = await fetch(this.modelConfig.endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.modelConfig.apiKey}`
        },
        body: JSON.stringify({
          model: this.modelConfig.modelId,
          messages,
          ...options
        })
      });
      if (!response.ok) {
        const errorBody = await response.text().catch(() => "Could not retrieve error body");
        logger$9.error("MentalLLaMA API request failed", {
          status: response.status,
          body: errorBody,
          endpoint: this.modelConfig.endpointUrl,
          modelId: this.modelConfig.modelId
        });
        throw new Error(
          `API request to ${this.modelConfig.modelId} failed with status ${response.status}: ${errorBody}`
        );
      }
      const data = await response.json();
      let content;
      let finishReason;
      let tokenUsage;
      if (data.choices && Array.isArray(data.choices) && data.choices.length > 0) {
        if (data.choices[0].message && typeof data.choices[0].message.content === "string") {
          content = data.choices[0].message.content;
        } else if (typeof data.choices[0].text === "string") {
          content = data.choices[0].text;
        }
        finishReason = data.choices[0].finish_reason;
      } else if (typeof data.content === "string") {
        content = data.content;
      } else if (typeof data.result === "string") {
        content = data.result;
      }
      if (data.usage) {
        tokenUsage = {
          promptTokens: data.usage.prompt_tokens ?? 0,
          completionTokens: data.usage.completion_tokens ?? 0,
          totalTokens: data.usage.total_tokens ?? 0
        };
      }
      if (typeof content === "string" && content.length > 0) {
        const response2 = {
          content,
          model: this.modelConfig.modelId,
          metadata: data,
          ...tokenUsage !== void 0 ? { tokenUsage } : {},
          ...finishReason !== void 0 ? {
            finishReason
          } : {}
        };
        return response2;
      } else {
        logger$9.error(
          "Unrecognized or invalid response structure from MentalLLaMA API",
          { responseData: data }
        );
        throw new Error(
          "Unrecognized or invalid response structure from MentalLLaMA API."
        );
      }
    } catch (error) {
      logger$9.error(
        "Error calling MentalLLaMA model or processing its response:",
        {
          modelId: this.modelConfig.modelId,
          errorMessage: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : void 0
        }
      );
      throw error;
    }
  }
  /**
   * Returns model info for UI or diagnostics.
   */
  getModelInfo() {
    return {
      name: this.modelConfig.modelId,
      version: this.modelTier,
      capabilities: ["chat", "completion"]
    };
  }
}

const CRISIS_KEYWORDS = [
  "suicide",
  "kill myself",
  "end it all",
  "want to die",
  "hurt myself",
  "self harm",
  "cutting",
  "overdose",
  "jump off",
  "hanging"
];
const DEPRESSION_KEYWORDS = [
  "depressed",
  "hopeless",
  "worthless",
  "empty",
  "sad all the time",
  "no energy",
  "sleep all day",
  "nothing matters"
];
const ANXIETY_KEYWORDS = [
  "panic",
  "anxious",
  "worried",
  "scared",
  "racing heart",
  "can't breathe",
  "overwhelming",
  "nervous"
];
class MentalHealthTaskRouter {
  constructor(llmInvoker) {
    this.llmInvoker = llmInvoker;
  }
  async route(input) {
    const text = input.text.toLowerCase();
    if (input.context?.explicitTaskHint) {
      return this.routeByHint(input.context.explicitTaskHint);
    }
    if (this.containsKeywords(text, CRISIS_KEYWORDS)) {
      return {
        targetAnalyzer: "crisis",
        confidence: 0.9,
        isCritical: true,
        method: "keyword",
        insights: {
          matchedKeywords: this.getMatchedKeywords(text, CRISIS_KEYWORDS),
          reason: "Crisis keywords detected"
        }
      };
    }
    if (this.containsKeywords(text, DEPRESSION_KEYWORDS)) {
      return {
        targetAnalyzer: "depression",
        confidence: 0.7,
        isCritical: false,
        method: "keyword",
        insights: {
          matchedKeywords: this.getMatchedKeywords(text, DEPRESSION_KEYWORDS),
          reason: "Depression keywords detected"
        }
      };
    }
    if (this.containsKeywords(text, ANXIETY_KEYWORDS)) {
      return {
        targetAnalyzer: "anxiety",
        confidence: 0.7,
        isCritical: false,
        method: "keyword",
        insights: {
          matchedKeywords: this.getMatchedKeywords(text, ANXIETY_KEYWORDS),
          reason: "Anxiety keywords detected"
        }
      };
    }
    try {
      const llmResult = await this.llmInvoker([
        {
          role: "system",
          content: "Classify this mental health text into: crisis, depression, anxiety, or general. Respond with just the category."
        },
        { role: "user", content: input.text }
      ]);
      const category = llmResult.content.toLowerCase().trim();
      if (["crisis", "depression", "anxiety"].includes(category)) {
        return {
          targetAnalyzer: category,
          confidence: 0.6,
          isCritical: category === "crisis",
          method: "llm",
          insights: { llmReasoning: llmResult.content }
        };
      }
    } catch {
    }
    return {
      targetAnalyzer: "general_mental_health",
      confidence: 0.3,
      isCritical: false,
      method: "default",
      insights: { reason: "No keywords matched, LLM unavailable" }
    };
  }
  routeByHint(hint) {
    const hintLower = hint.toLowerCase();
    if (hintLower.includes("crisis") || hintLower.includes("suicide")) {
      return {
        targetAnalyzer: "crisis",
        confidence: 0.95,
        isCritical: true,
        method: "explicit_hint",
        insights: { hintUsed: hint }
      };
    }
    if (hintLower.includes("depression")) {
      return {
        targetAnalyzer: "depression",
        confidence: 0.8,
        isCritical: false,
        method: "explicit_hint",
        insights: { hintUsed: hint }
      };
    }
    if (hintLower.includes("anxiety")) {
      return {
        targetAnalyzer: "anxiety",
        confidence: 0.8,
        isCritical: false,
        method: "explicit_hint",
        insights: { hintUsed: hint }
      };
    }
    return {
      targetAnalyzer: "general_mental_health",
      confidence: 0.5,
      isCritical: false,
      method: "explicit_hint",
      insights: { hintUsed: hint }
    };
  }
  containsKeywords(text, keywords) {
    return keywords.some((keyword) => text.includes(keyword));
  }
  getMatchedKeywords(text, keywords) {
    return keywords.filter((keyword) => text.includes(keyword));
  }
  getAvailableAnalyzers() {
    return [
      "crisis",
      "depression",
      "anxiety",
      "general_mental_health",
      "unknown"
    ];
  }
  updateRoutingRules(_rules) {
  }
}

const logger$8 = getClinicalAnalysisLogger("general");
const SemanticEvidenceResponseSchema = z.object({
  evidence: z.array(z.unknown()).min(0)
  // Accept array of any types, validate items individually
});
function parseSemanticEvidenceResponse(response) {
  try {
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(response);
    } catch (parseError) {
      logger$8.error("Invalid JSON in semantic evidence response", {
        error: parseError,
        responseLength: response.length,
        responsePreview: response.substring(0, 200)
      });
      return [];
    }
    const validationResult = SemanticEvidenceResponseSchema.safeParse(parsedResponse);
    if (!validationResult.success) {
      logger$8.error("Schema validation failed for semantic evidence response", {
        validationErrors: validationResult.error.errors,
        receivedData: parsedResponse,
        responsePreview: response.substring(0, 200)
      });
      return [];
    }
    const validatedData = validationResult.data;
    if (validatedData.evidence.length === 0) {
      logger$8.warn("Semantic evidence response contains empty evidence array");
      return [];
    }
    const evidenceItems = [];
    for (const item of validatedData.evidence) {
      if (!item || typeof item !== "object") {
        logger$8.warn("Skipping non-object evidence item", { item });
        continue;
      }
      const evidenceObj = item;
      const rawText = evidenceObj["text"];
      if (typeof rawText !== "string") {
        logger$8.warn("Skipping evidence item with non-string text", { item });
        continue;
      }
      const trimmedText = rawText.trim();
      if (!trimmedText) {
        logger$8.warn("Skipping evidence item with empty text", { item });
        continue;
      }
      let confidence = 0.5;
      if (typeof evidenceObj["confidence"] === "number") {
        confidence = Math.min(Math.max(evidenceObj["confidence"], 0), 1);
      }
      const rawClinicalRelevance = evidenceObj["clinicalRelevance"];
      const validClinicalRelevanceValues = [
        "critical",
        "significant",
        "supportive",
        "contextual"
      ];
      const clinicalRelevance = typeof rawClinicalRelevance === "string" && validClinicalRelevanceValues.includes(rawClinicalRelevance) ? rawClinicalRelevance : "supportive";
      const category = typeof evidenceObj["category"] === "string" ? evidenceObj["category"] : "semantic_analysis";
      const rationale = typeof evidenceObj["rationale"] === "string" ? evidenceObj["rationale"] : "Generated via semantic analysis";
      const evidenceItem = {
        text: trimmedText,
        type: "direct_quote",
        confidence,
        relevance: confidence > 0.7 ? "high" : confidence > 0.4 ? "medium" : "low",
        category,
        clinicalRelevance,
        metadata: {
          semanticRationale: rationale
        }
      };
      evidenceItems.push(evidenceItem);
    }
    logger$8.info("Successfully parsed semantic evidence response", {
      originalCount: validatedData.evidence.length,
      validCount: evidenceItems.length,
      highConfidenceCount: evidenceItems.filter((item) => item.confidence > 0.7).length
    });
    return evidenceItems;
  } catch (error) {
    logger$8.error("Unexpected error during semantic evidence parsing", {
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : error,
      responseLength: response.length,
      responsePreview: response.substring(0, 200)
    });
    return [];
  }
}

const logger$7 = getClinicalAnalysisLogger("general");
const CLINICAL_EVIDENCE_PATTERNS = {
  depression: {
    direct: [
      {
        pattern: /\b(depressed|depression|sad|down|blue|empty)\b/gi,
        weight: 0.8
      },
      { pattern: /\b(hopeless|helpless|worthless|useless)\b/gi, weight: 0.9 },
      { pattern: /\b(can't (sleep|eat|concentrate|focus))\b/gi, weight: 0.7 },
      { pattern: /\b(no (energy|motivation|interest))\b/gi, weight: 0.8 },
      {
        pattern: /\b(everything (feels|seems) (pointless|meaningless))\b/gi,
        weight: 0.9
      }
    ],
    behavioral: [
      {
        pattern: /\b(staying in bed|isolating|avoiding (people|friends|family))\b/gi,
        weight: 0.7
      },
      { pattern: /\b(stopped (doing|enjoying|caring about))\b/gi, weight: 0.8 },
      { pattern: /\b(can't (get up|function|work))\b/gi, weight: 0.8 }
    ],
    cognitive: [
      {
        pattern: /\b(can't (think|concentrate|remember|decide))\b/gi,
        weight: 0.7
      },
      {
        pattern: /\b(my mind (is|feels) (blank|foggy|scattered))\b/gi,
        weight: 0.6
      },
      { pattern: /\b(negative thoughts|racing thoughts)\b/gi, weight: 0.7 }
    ]
  },
  anxiety: {
    direct: [
      {
        pattern: /\b(anxious|anxiety|worried|nervous|panicked?)\b/gi,
        weight: 0.8
      },
      { pattern: /\b(can't (calm down|relax|stop worrying))\b/gi, weight: 0.8 },
      { pattern: /\b(what if|catastrophizing|worst case)\b/gi, weight: 0.7 }
    ],
    physical: [
      { pattern: /\b(heart (racing|pounding)|palpitations)\b/gi, weight: 0.8 },
      {
        pattern: /\b(shortness of breath|can't breathe|hyperventilating)\b/gi,
        weight: 0.9
      },
      { pattern: /\b(sweating|trembling|shaking|nausea)\b/gi, weight: 0.6 },
      { pattern: /\b(tight chest|chest pain|dizziness)\b/gi, weight: 0.7 }
    ],
    avoidance: [
      {
        pattern: /\b(avoiding|scared to|afraid of|can't face)\b/gi,
        weight: 0.7
      },
      { pattern: /\b(making excuses|cancelled|didn't go)\b/gi, weight: 0.6 }
    ]
  },
  crisis: {
    direct: [
      {
        pattern: /\b(suicide|kill myself|end (my life|it all)|not worth living)\b/gi,
        weight: 1
      },
      {
        pattern: /\b(want to die|better off dead|can't go on)\b/gi,
        weight: 1
      },
      {
        pattern: /\b(no point (in )?living|life (isn't|is not) worth)\b/gi,
        weight: 0.9
      }
    ],
    planning: [
      {
        pattern: /\b(plan to|thinking about|considering|going to)\s+(kill|hurt|harm)/gi,
        weight: 1
      },
      { pattern: /\b(pills|gun|bridge|rope|method)\b/gi, weight: 0.8 },
      { pattern: /\b(when I('m| am) gone|after I die)\b/gi, weight: 0.9 }
    ],
    means: [
      {
        pattern: /\b(have (pills|gun|weapon)|bought|collected)\b/gi,
        weight: 0.9
      },
      {
        pattern: /\b(researched (methods|ways to)|looked up how)\b/gi,
        weight: 0.8
      }
    ]
  },
  stress: {
    direct: [
      {
        pattern: /\b(stressed|overwhelmed|under pressure|too much)\b/gi,
        weight: 0.7
      },
      { pattern: /\b(can't (cope|handle|manage))\b/gi, weight: 0.8 },
      { pattern: /\b(breaking point|at my limit|can't take)\b/gi, weight: 0.8 }
    ],
    sources: [
      {
        pattern: /\b(work|job|boss|deadline|bills|money|relationship)\b/gi,
        weight: 0.6
      },
      {
        pattern: /\b(school|exams|grades|family|health|finances)\b/gi,
        weight: 0.6
      }
    ]
  }
};
const EMOTIONAL_MARKERS = {
  negative: {
    high: [
      "devastating",
      "terrible",
      "awful",
      "horrible",
      "unbearable",
      "excruciating"
    ],
    medium: ["bad", "difficult", "hard", "tough", "challenging", "struggling"],
    low: ["okay", "fine", "alright", "manageable"]
  },
  positive: {
    high: [
      "amazing",
      "wonderful",
      "fantastic",
      "great",
      "excellent",
      "perfect"
    ],
    medium: ["good", "nice", "pleasant", "positive", "hopeful"],
    low: ["okay", "fine", "alright", "decent"]
  }
};
class EvidenceExtractor {
  config;
  modelProvider;
  constructor(config = {}, modelProvider) {
    this.config = {
      maxEvidenceItems: 15,
      minConfidenceThreshold: 0.3,
      includeContextualEvidence: true,
      includeLinguisticPatterns: true,
      includeEmotionalMarkers: true,
      enableSemanticAnalysis: true,
      prioritizeRiskIndicators: true,
      ...config
    };
    this.modelProvider = modelProvider;
  }
  /**
   * Extract comprehensive evidence from text for mental health analysis
   */
  async extractEvidence(text, category, baseAnalysis) {
    const startTime = Date.now();
    const evidenceItems = [];
    const errors = [];
    try {
      logger$7.info("Starting evidence extraction", {
        category,
        textLength: text.length,
        hasBaseAnalysis: !!baseAnalysis
      });
      const patternEvidence = this.extractPatternBasedEvidence(text, category);
      evidenceItems.push(...patternEvidence);
      if (this.config.includeLinguisticPatterns) {
        const linguisticEvidence = this.extractLinguisticEvidence(text);
        evidenceItems.push(...linguisticEvidence);
      }
      if (this.config.includeEmotionalMarkers) {
        const emotionalEvidence = this.extractEmotionalMarkers(text);
        evidenceItems.push(...emotionalEvidence);
      }
      if (this.config.includeContextualEvidence) {
        const contextualEvidence = this.extractContextualEvidence(
          text,
          baseAnalysis
        );
        evidenceItems.push(...contextualEvidence);
      }
      if (this.config.enableSemanticAnalysis && this.modelProvider) {
        try {
          const semanticEvidence = await this.extractSemanticEvidence(
            text,
            category,
            baseAnalysis
          );
          evidenceItems.push(...semanticEvidence);
        } catch (error) {
          logger$7.error("LLM-enhanced evidence extraction failed", { error });
          errors.push("Semantic analysis unavailable");
        }
      }
      const filteredEvidence = this.filterAndRankEvidence(evidenceItems);
      const categorizedEvidence = this.categorizeEvidence(filteredEvidence);
      const qualityMetrics = this.calculateQualityMetrics(
        filteredEvidence,
        text
      );
      const summary = this.generateEvidenceSummary(filteredEvidence);
      const processingTime = Date.now() - startTime;
      const result = {
        evidenceItems: filteredEvidence,
        summary,
        categorizedEvidence,
        qualityMetrics,
        extractionMetadata: {
          method: this.modelProvider ? "llm_enhanced" : "pattern_based",
          processingTime,
          ...errors.length > 0 && { errors }
        }
      };
      logger$7.info("Evidence extraction completed", {
        evidenceCount: filteredEvidence.length,
        processingTime,
        overallStrength: summary.overallStrength
      });
      return result;
    } catch (error) {
      logger$7.error("Evidence extraction failed", { error, category });
      return {
        evidenceItems: [],
        summary: {
          totalEvidence: 0,
          highConfidenceCount: 0,
          riskIndicatorCount: 0,
          supportiveFactorCount: 0,
          overallStrength: "weak"
        },
        categorizedEvidence: {},
        qualityMetrics: {
          completeness: 0,
          specificity: 0,
          clinicalRelevance: 0
        },
        extractionMetadata: {
          method: "pattern_based",
          processingTime: Date.now() - startTime,
          errors: [
            `Evidence extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`
          ]
        }
      };
    }
  }
  /**
   * Extract pattern-based evidence using clinical patterns
   */
  extractPatternBasedEvidence(text, category) {
    const evidence = [];
    const patterns = CLINICAL_EVIDENCE_PATTERNS[category];
    if (!patterns) {
      return evidence;
    }
    Object.entries(patterns).forEach(([subCategory, patternList]) => {
      patternList.forEach(({ pattern, weight }) => {
        const matches = text.match(pattern);
        if (matches) {
          matches.forEach((match) => {
            const startIndex = text.indexOf(match);
            evidence.push({
              text: match,
              type: "direct_quote",
              confidence: weight,
              relevance: weight > 0.8 ? "high" : weight > 0.6 ? "medium" : "low",
              category: `${category}_${subCategory}`,
              position: {
                start: startIndex,
                end: startIndex + match.length
              },
              clinicalRelevance: weight > 0.8 ? "significant" : "supportive",
              metadata: {
                pattern: pattern.source,
                keyword: match.toLowerCase()
              }
            });
          });
        }
      });
    });
    return evidence;
  }
  /**
   * Extract linguistic patterns and speech markers
   */
  extractLinguisticEvidence(text) {
    const evidence = [];
    const negationPatterns = [
      {
        pattern: /\b(never|nothing|no one|nobody|nowhere)\b/gi,
        category: "absolutist_thinking"
      },
      {
        pattern: /\b(can't|won't|don't|isn't|aren't|wasn't|weren't)\b/gi,
        category: "negative_capability"
      },
      {
        pattern: /\b(always|everything|everyone|everywhere)\s+(is|are|feels?|seems?)\s+\w*(bad|wrong|awful|terrible)\b/gi,
        category: "overgeneralization"
      }
    ];
    const modalPatterns = [
      {
        pattern: /\b(should|shouldn't|must|mustn't|have to|need to)\b/gi,
        category: "pressure_language"
      },
      {
        pattern: /\b(might|maybe|perhaps|possibly|probably)\s+\w*(die|hurt|fail|wrong)\b/gi,
        category: "uncertainty_with_risk"
      }
    ];
    const temporalPatterns = [
      {
        pattern: /\b(for (weeks|months|years)|since|constantly|always|never)\b/gi,
        category: "symptom_duration"
      },
      {
        pattern: /\b(getting worse|deteriorating|declining|spiral(l)?ing)\b/gi,
        category: "symptom_progression"
      }
    ];
    [negationPatterns, modalPatterns, temporalPatterns].forEach(
      (patternGroup) => {
        patternGroup.forEach(({ pattern, category }) => {
          const matches = text.match(pattern);
          if (matches) {
            matches.forEach((match) => {
              evidence.push({
                text: match,
                type: "linguistic_pattern",
                confidence: 0.6,
                relevance: "medium",
                category,
                metadata: {
                  pattern: pattern.source
                }
              });
            });
          }
        });
      }
    );
    return evidence;
  }
  /**
   * Extract emotional markers and intensity indicators
   */
  extractEmotionalMarkers(text) {
    const evidence = [];
    Object.entries(EMOTIONAL_MARKERS).forEach(([valence, intensityLevels]) => {
      Object.entries(intensityLevels).forEach(([intensity, words]) => {
        words.forEach((word) => {
          const regex = new RegExp(`\\b${word}\\b`, "gi");
          const matches = text.match(regex);
          if (matches) {
            matches.forEach((match) => {
              evidence.push({
                text: match,
                type: "emotional_marker",
                confidence: intensity === "high" ? 0.8 : intensity === "medium" ? 0.6 : 0.4,
                relevance: intensity === "high" ? "high" : "medium",
                category: "emotional_expression",
                metadata: {
                  emotionalValence: valence,
                  intensity,
                  keyword: word
                }
              });
            });
          }
        });
      });
    });
    return evidence;
  }
  /**
   * Extract contextual evidence based on base analysis
   */
  extractContextualEvidence(text, baseAnalysis) {
    const evidence = [];
    if (!baseAnalysis) {
      return evidence;
    }
    if (baseAnalysis.isCrisis) {
      const crisisContextPatterns = [
        /\b(plan|method|when|where|how)\b/gi,
        /\b(final|last|goodbye|sorry)\b/gi,
        /\b(insurance|will|belongings|pets)\b/gi
      ];
      crisisContextPatterns.forEach((pattern) => {
        const matches = text.match(pattern);
        if (matches) {
          matches.forEach((match) => {
            evidence.push({
              text: match,
              type: "contextual_indicator",
              confidence: 0.9,
              relevance: "high",
              category: "crisis_context",
              clinicalRelevance: "critical",
              metadata: {
                contextualContext: "crisis_amplification"
              }
            });
          });
        }
      });
    }
    const protectivePatterns = [
      /\b(support|help|therapy|treatment|doctor|counselor|family|friends)\b/gi,
      /\b(hope|future|goals|plans|better|improve|recover)\b/gi,
      /\b(grateful|thankful|blessed|lucky|fortunate)\b/gi
    ];
    protectivePatterns.forEach((pattern) => {
      const matches = text.match(pattern);
      if (matches) {
        matches.forEach((match) => {
          evidence.push({
            text: match,
            type: "contextual_indicator",
            confidence: 0.7,
            relevance: "medium",
            category: "protective_factors",
            clinicalRelevance: "supportive",
            metadata: {
              contextualContext: "protective_factor"
            }
          });
        });
      }
    });
    return evidence;
  }
  /**
   * Extract semantic evidence using LLM analysis
   */
  async extractSemanticEvidence(text, category, baseAnalysis) {
    if (!this.modelProvider) {
      return [];
    }
    const prompt = this.buildSemanticExtractionPrompt(
      text,
      category,
      baseAnalysis
    );
    try {
      const response = await this.modelProvider.invoke(prompt, {
        temperature: 0.2,
        max_tokens: 600
      });
      return parseSemanticEvidenceResponse(response.content);
    } catch (error) {
      logger$7.error("Semantic evidence extraction failed", { error });
      return [];
    }
  }
  /**
   * Build prompt for semantic evidence extraction
   */
  buildSemanticExtractionPrompt(text, category, baseAnalysis) {
    const systemPrompt = `You are a clinical psychology expert analyzing text for mental health evidence. 
Extract specific, clinically relevant evidence from the text that supports or contradicts mental health concerns.

Focus on:
1. Specific phrases or sentences that indicate mental health symptoms
2. Behavioral indicators mentioned in the text
3. Emotional expressions and their context
4. Temporal markers (duration, frequency, onset)
5. Functional impairment indicators
6. Risk or protective factors

For each piece of evidence, provide:
- The exact text excerpt (keep original wording)
- Clinical relevance (critical/significant/supportive/contextual)
- Confidence level (0.0-1.0)
- Brief clinical rationale

Respond in JSON format:
{
  "evidence": [
    {
      "text": "exact quote from text",
      "clinicalRelevance": "significant",
      "confidence": 0.8,
      "rationale": "brief clinical explanation",
      "category": "symptom_type"
    }
  ]
}`;
    const userPrompt = `Analyze this text for mental health evidence in the context of ${category}:

"${text}"

${baseAnalysis ? `Previous analysis detected: ${baseAnalysis.mentalHealthCategory} (confidence: ${baseAnalysis.confidence.toFixed(2)})` : ""}

Extract evidence that is clinically meaningful and specific to mental health assessment.`;
    return [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ];
  }
  /**
   * Filter and rank evidence by relevance and confidence
   */
  filterAndRankEvidence(evidenceItems) {
    const filtered = evidenceItems.filter((item) => item.confidence >= this.config.minConfidenceThreshold).filter(
      (item, index, array) => array.findIndex(
        (other) => other.text.toLowerCase() === item.text.toLowerCase()
      ) === index
    );
    const sorted = filtered.sort((a, b) => {
      const aCrisis = a.category.includes("crisis") ? 1 : 0;
      const bCrisis = b.category.includes("crisis") ? 1 : 0;
      if (aCrisis !== bCrisis) {
        return bCrisis - aCrisis;
      }
      const relevanceOrder = {
        critical: 4,
        significant: 3,
        supportive: 2,
        contextual: 1
      };
      const aRelevance = relevanceOrder[a.clinicalRelevance || "supportive"];
      const bRelevance = relevanceOrder[b.clinicalRelevance || "supportive"];
      if (aRelevance !== bRelevance) {
        return bRelevance - aRelevance;
      }
      return b.confidence - a.confidence;
    });
    return sorted.slice(0, this.config.maxEvidenceItems);
  }
  /**
   * Categorize evidence by type and clinical relevance
   */
  categorizeEvidence(evidenceItems) {
    const categorized = {};
    evidenceItems.forEach((item) => {
      if (!categorized[item.category]) {
        categorized[item.category] = [];
      }
      categorized[item.category].push(item);
    });
    return categorized;
  }
  /**
   * Calculate quality metrics for evidence
   */
  calculateQualityMetrics(evidenceItems, originalText) {
    if (evidenceItems.length === 0) {
      return { completeness: 0, specificity: 0, clinicalRelevance: 0 };
    }
    const evidenceTextLength = evidenceItems.reduce(
      (sum, item) => sum + item.text.length,
      0
    );
    const completeness = Math.min(
      evidenceTextLength / (originalText.length * 0.3),
      1
    );
    const specificEvidence = evidenceItems.filter(
      (item) => item.confidence > 0.7 && item.type === "direct_quote"
    );
    const specificity = specificEvidence.length / evidenceItems.length;
    const relevanceWeights = {
      critical: 1,
      significant: 0.8,
      supportive: 0.6,
      contextual: 0.4
    };
    const totalRelevance = evidenceItems.reduce(
      (sum, item) => sum + (relevanceWeights[item.clinicalRelevance || "supportive"] || 0.4),
      0
    );
    const clinicalRelevance = totalRelevance / evidenceItems.length;
    return {
      completeness: Math.round(completeness * 100) / 100,
      specificity: Math.round(specificity * 100) / 100,
      clinicalRelevance: Math.round(clinicalRelevance * 100) / 100
    };
  }
  /**
   * Generate evidence summary
   */
  generateEvidenceSummary(evidenceItems) {
    const totalEvidence = evidenceItems.length;
    const highConfidenceCount = evidenceItems.filter(
      (item) => item.confidence > 0.7
    ).length;
    const riskIndicatorCount = evidenceItems.filter(
      (item) => item.category.includes("crisis") || item.category.includes("risk") || item.clinicalRelevance === "critical"
    ).length;
    const supportiveFactorCount = evidenceItems.filter(
      (item) => item.category.includes("protective") || item.metadata?.emotionalValence === "positive"
    ).length;
    let overallStrength = "weak";
    if (highConfidenceCount >= 3 && totalEvidence >= 5) {
      overallStrength = "strong";
    } else if (highConfidenceCount >= 1 && totalEvidence >= 2) {
      overallStrength = "moderate";
    }
    return {
      totalEvidence,
      highConfidenceCount,
      riskIndicatorCount,
      supportiveFactorCount,
      overallStrength
    };
  }
  /**
   * Convert evidence items to simple string array for backward compatibility
   */
  static convertToStringArray(evidenceItems) {
    return evidenceItems.filter((item) => item.confidence > 0.5).sort((a, b) => b.confidence - a.confidence).map((item) => item.text).slice(0, 10);
  }
  /**
   * Get evidence for specific clinical category
   */
  getCategoryEvidence(evidenceResult, category) {
    return evidenceResult.categorizedEvidence[category] || [];
  }
  /**
   * Get high-priority evidence (crisis, high confidence, etc.)
   */
  getHighPriorityEvidence(evidenceResult) {
    return evidenceResult.evidenceItems.filter(
      (item) => item.clinicalRelevance === "critical" || item.confidence > 0.8 || item.category.includes("crisis")
    );
  }
}

const logger$6 = getClinicalAnalysisLogger("general");
class EvidenceService {
  extractor;
  config;
  cache = /* @__PURE__ */ new Map();
  metrics = {
    totalExtractions: 0,
    cacheHits: 0,
    cacheMisses: 0,
    averageProcessingTime: 0,
    errorCount: 0
  };
  constructor(modelProvider, config = {}) {
    this.config = {
      enableLLMEnhancement: true,
      enableCaching: true,
      cacheExpirationMs: 3e5,
      // 5 minutes
      maxCacheSize: 1e3,
      enableMetrics: true,
      ...config
    };
    this.extractor = new EvidenceExtractor(
      {
        enableSemanticAnalysis: this.config.enableLLMEnhancement && !!modelProvider,
        maxEvidenceItems: 12,
        minConfidenceThreshold: 0.4,
        prioritizeRiskIndicators: true
      },
      modelProvider
    );
    logger$6.info("EvidenceService initialized", {
      llmEnhanced: this.config.enableLLMEnhancement && !!modelProvider,
      cachingEnabled: this.config.enableCaching
    });
  }
  /**
   * Extract supporting evidence for mental health analysis
   */
  async extractSupportingEvidence(text, category, baseAnalysis, routingContext) {
    const startTime = Date.now();
    let cacheUsed = false;
    try {
      this.metrics.totalExtractions++;
      const cacheKey = this.generateCacheKey(text, category);
      let detailedEvidence;
      if (this.config.enableCaching) {
        const cached = this.getCachedEvidence(cacheKey);
        if (cached) {
          detailedEvidence = cached;
          cacheUsed = true;
          this.metrics.cacheHits++;
          logger$6.debug("Using cached evidence", { category, cacheKey });
        } else {
          this.metrics.cacheMisses++;
        }
      }
      if (!detailedEvidence) {
        detailedEvidence = await this.extractor.extractEvidence(
          text,
          category,
          baseAnalysis
        );
        if (this.config.enableCaching) {
          this.setCachedEvidence(cacheKey, detailedEvidence, text, category);
        }
      }
      const evidenceItems = this.convertToStringArray(
        detailedEvidence.evidenceItems
      );
      if (routingContext && baseAnalysis?._routingDecision) {
        const contextualEvidence = this.extractContextualInsights(
          detailedEvidence,
          baseAnalysis._routingDecision,
          routingContext
        );
        evidenceItems.unshift(...contextualEvidence);
      }
      const processingTime = Date.now() - startTime;
      this.updateMetrics(processingTime);
      const result = {
        evidenceItems: evidenceItems.slice(0, 8),
        // Limit for readability
        detailedEvidence,
        processingMetadata: {
          cacheUsed,
          processingTime,
          evidenceStrength: detailedEvidence.summary.overallStrength
        }
      };
      logger$6.info("Evidence extraction completed", {
        category,
        evidenceCount: evidenceItems.length,
        overallStrength: detailedEvidence.summary.overallStrength,
        processingTime,
        cacheUsed
      });
      return result;
    } catch (error) {
      this.metrics.errorCount++;
      this.metrics.lastError = error instanceof Error ? error.message : "Unknown error";
      logger$6.error("Evidence extraction failed", {
        error,
        category,
        textLength: text.length
      });
      return {
        evidenceItems: this.extractFallbackEvidence(text, category),
        detailedEvidence: {
          evidenceItems: [],
          summary: {
            totalEvidence: 0,
            highConfidenceCount: 0,
            riskIndicatorCount: 0,
            supportiveFactorCount: 0,
            overallStrength: "weak"
          },
          categorizedEvidence: {},
          qualityMetrics: {
            completeness: 0,
            specificity: 0,
            clinicalRelevance: 0
          },
          extractionMetadata: {
            method: "pattern_based",
            processingTime: Date.now() - startTime,
            errors: ["Evidence extraction failed"]
          }
        },
        processingMetadata: {
          cacheUsed: false,
          processingTime: Date.now() - startTime,
          evidenceStrength: "weak"
        }
      };
    }
  }
  /**
   * Extract crisis-specific evidence with high priority
   */
  async extractCrisisEvidence(text, baseAnalysis) {
    try {
      const evidenceResult = await this.extractor.extractEvidence(
        text,
        "crisis",
        baseAnalysis
      );
      const immediateRiskIndicators = [];
      const planningIndicators = [];
      const contextualFactors = [];
      const protectiveFactors = [];
      evidenceResult.evidenceItems.forEach((item) => {
        if (item.clinicalRelevance === "critical") {
          if (item.category.includes("direct") || item.category.includes("planning")) {
            immediateRiskIndicators.push(item.text);
          } else if (item.category.includes("means") || item.category.includes("method")) {
            planningIndicators.push(item.text);
          }
        } else if (item.category.includes("protective")) {
          protectiveFactors.push(item.text);
        } else {
          contextualFactors.push(item.text);
        }
      });
      return {
        immediateRiskIndicators: immediateRiskIndicators.slice(0, 5),
        planningIndicators: planningIndicators.slice(0, 3),
        contextualFactors: contextualFactors.slice(0, 4),
        protectiveFactors: protectiveFactors.slice(0, 3)
      };
    } catch (error) {
      logger$6.error("Crisis evidence extraction failed", { error });
      return {
        immediateRiskIndicators: [],
        planningIndicators: [],
        contextualFactors: [],
        protectiveFactors: []
      };
    }
  }
  /**
   * Get evidence quality assessment
   */
  assessEvidenceQuality(evidenceResult) {
    const { qualityMetrics, summary } = evidenceResult;
    const overallScore = qualityMetrics.completeness * 0.3 + qualityMetrics.specificity * 0.4 + qualityMetrics.clinicalRelevance * 0.3;
    let overallQuality;
    if (overallScore >= 0.8) {
      overallQuality = "excellent";
    } else if (overallScore >= 0.6) {
      overallQuality = "good";
    } else if (overallScore >= 0.4) {
      overallQuality = "fair";
    } else {
      overallQuality = "poor";
    }
    const recommendations = [];
    if (qualityMetrics.completeness < 0.5) {
      recommendations.push(
        "Consider requesting more detailed information from the user"
      );
    }
    if (qualityMetrics.specificity < 0.5) {
      recommendations.push(
        "Look for more specific behavioral or symptom indicators"
      );
    }
    if (summary.riskIndicatorCount > 0) {
      recommendations.push(
        "Prioritize immediate risk assessment and safety planning"
      );
    }
    if (summary.supportiveFactorCount > 0) {
      recommendations.push(
        "Leverage identified protective factors in treatment planning"
      );
    }
    return {
      overallQuality,
      completeness: qualityMetrics.completeness,
      specificity: qualityMetrics.specificity,
      clinicalRelevance: qualityMetrics.clinicalRelevance,
      recommendations
    };
  }
  /**
   * Get service metrics
   */
  getMetrics() {
    return { ...this.metrics };
  }
  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
    logger$6.info("Evidence cache cleared");
  }
  // Private helper methods
  generateCacheKey(text, category) {
    const textHash = this.simpleHash(text.toLowerCase().trim());
    return `${category}:${textHash}`;
  }
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash;
    }
    return Math.abs(hash).toString(36);
  }
  getCachedEvidence(cacheKey) {
    const entry = this.cache.get(cacheKey);
    if (!entry) {
      return null;
    }
    if (Date.now() - entry.timestamp > this.config.cacheExpirationMs) {
      this.cache.delete(cacheKey);
      return null;
    }
    return entry.result;
  }
  setCachedEvidence(cacheKey, result, text, category) {
    if (this.cache.size >= this.config.maxCacheSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }
    this.cache.set(cacheKey, {
      result,
      timestamp: Date.now(),
      textHash: this.simpleHash(text),
      category
    });
  }
  convertToStringArray(evidenceItems) {
    return evidenceItems.filter((item) => item.confidence > 0.5).sort((a, b) => {
      if (a.category.includes("crisis") && !b.category.includes("crisis")) {
        return -1;
      }
      if (!a.category.includes("crisis") && b.category.includes("crisis")) {
        return 1;
      }
      return b.confidence - a.confidence;
    }).map((item) => item.text).slice(0, 10);
  }
  extractContextualInsights(_evidenceResult, routingDecision, routingContext) {
    const insights = [];
    const decision = routingDecision;
    const decisionInsights = decision?.["insights"];
    if (decisionInsights?.["matchedKeywords"] && Array.isArray(decisionInsights["matchedKeywords"])) {
      insights.push(
        `Routing keywords: ${decisionInsights["matchedKeywords"].join(", ")}`
      );
    }
    if (routingContext.sessionType) {
      insights.push(`Session context: ${routingContext.sessionType}`);
    }
    return insights.slice(0, 2);
  }
  extractFallbackEvidence(text, category) {
    const fallbackKeywords = {
      depression: ["sad", "depressed", "hopeless", "down", "empty"],
      anxiety: ["anxious", "worried", "nervous", "panic", "fear"],
      crisis: ["suicide", "kill", "die", "end it"],
      stress: ["stressed", "overwhelmed", "pressure", "too much"]
    };
    const keywords = fallbackKeywords[category] || [];
    const found = [];
    keywords.forEach((keyword) => {
      if (text.toLowerCase().includes(keyword)) {
        const index = text.toLowerCase().indexOf(keyword);
        const start = Math.max(0, index - 20);
        const end = Math.min(text.length, index + keyword.length + 20);
        found.push(text.substring(start, end).trim());
      }
    });
    return found.slice(0, 3);
  }
  updateMetrics(processingTime) {
    if (!this.config.enableMetrics) {
      return;
    }
    this.metrics.averageProcessingTime = (this.metrics.averageProcessingTime * (this.metrics.totalExtractions - 1) + processingTime) / this.metrics.totalExtractions;
  }
}

const logger$5 = getClinicalAnalysisLogger("knowledge-base");
class ClinicalKnowledgeBase {
  /**
   * Gets clinical guidelines for a specific mental health category.
   */
  getClinicalGuidelines(category) {
    const guidelinesMap = {
      crisis: [
        {
          category: "crisis",
          rule: "Immediate safety assessment and intervention required",
          priority: "high",
          source: "crisis_intervention_protocols"
        },
        {
          category: "crisis",
          rule: "Contact emergency services if imminent danger present",
          priority: "high",
          source: "emergency_protocols"
        }
      ],
      depression: [
        {
          category: "depression",
          rule: "Assess for suicidal ideation using standardized screening tools",
          priority: "high",
          source: "DSM-5"
        },
        {
          category: "depression",
          rule: "Consider severity level for treatment planning",
          priority: "medium",
          source: "clinical_guidelines"
        }
      ],
      anxiety: [
        {
          category: "anxiety",
          rule: "Differentiate between anxiety disorders and normal stress responses",
          priority: "medium",
          source: "DSM-5"
        },
        {
          category: "anxiety",
          rule: "Assess functional impairment and duration of symptoms",
          priority: "medium",
          source: "clinical_guidelines"
        }
      ],
      general_mental_health: [
        {
          category: "general",
          rule: "Conduct comprehensive mental status examination",
          priority: "medium",
          source: "clinical_guidelines"
        }
      ]
    };
    return guidelinesMap[category] || guidelinesMap["general_mental_health"];
  }
  /**
   * Assesses risk factors based on text content, category, and base analysis.
   */
  assessRiskFactors(text, category, baseAnalysis) {
    const riskFactors = [];
    if (baseAnalysis.isCrisis) {
      riskFactors.push({
        factor: "Crisis indicators present",
        severity: "critical",
        description: "Text contains indicators suggesting immediate risk"
      });
    }
    const categoryRiskKeywords = {
      depression: {
        critical: [
          "suicide",
          "kill myself",
          "end it all",
          "no point living",
          "better off dead"
        ],
        high: ["hopeless", "worthless", "burden", "trapped", "empty", "numb"],
        moderate: ["sad", "down", "depressed", "lonely", "tired"],
        low: ["blue", "upset", "disappointed"]
      },
      anxiety: {
        critical: [
          "panic attack",
          "can't breathe",
          "heart racing",
          "going to die"
        ],
        high: ["terrified", "paralyzed", "overwhelming fear", "constant worry"],
        moderate: ["anxious", "worried", "nervous", "stressed", "uneasy"],
        low: ["concerned", "apprehensive", "tense"]
      },
      crisis: {
        critical: [
          "suicide",
          "kill myself",
          "end it all",
          "hurt myself",
          "weapon"
        ],
        high: ["hopeless", "trapped", "no way out", "burden"],
        moderate: ["desperate", "overwhelmed", "can't cope"],
        low: ["struggling", "difficult"]
      },
      general_mental_health: {
        critical: ["suicide", "kill myself", "end it all", "no point living"],
        high: ["hopeless", "worthless", "burden", "trapped"],
        moderate: ["sad", "anxious", "worried", "stressed"],
        low: ["upset", "concerned"]
      }
    };
    const defaultKeywords = {
      critical: ["suicide", "kill myself", "end it all", "no point living"],
      high: ["hopeless", "worthless", "burden", "trapped"],
      moderate: ["sad", "anxious", "worried", "stressed"],
      low: ["upset", "concerned"]
    };
    const riskKeywords = categoryRiskKeywords[category] ?? defaultKeywords;
    Object.entries(riskKeywords).forEach(([severity, keywords]) => {
      const matchedKeywords = keywords.filter(
        (keyword) => text.toLowerCase().includes(keyword.toLowerCase())
      );
      if (matchedKeywords.length > 0) {
        riskFactors.push({
          factor: `${category} indicators: ${matchedKeywords.join(", ")}`,
          severity,
          description: `Text contains ${severity} risk language patterns specific to ${category}`
        });
      }
    });
    this.addCategorySpecificRiskFactors(text, category, riskFactors);
    return riskFactors;
  }
  /**
   * Adds category-specific risk factors based on contextual analysis.
   */
  addCategorySpecificRiskFactors(text, category, riskFactors) {
    const lowerText = text.toLowerCase();
    switch (category) {
      case "depression":
        if (lowerText.includes("sleep") && (lowerText.includes("can't") || lowerText.includes("trouble"))) {
          riskFactors.push({
            factor: "Sleep disturbance indicators",
            severity: "moderate",
            description: "Sleep disruption is a common symptom of depression"
          });
        }
        if (lowerText.includes("appetite") || lowerText.includes("eating")) {
          riskFactors.push({
            factor: "Appetite/eating changes",
            severity: "moderate",
            description: "Changes in eating patterns may indicate depression severity"
          });
        }
        break;
      case "anxiety":
        if (lowerText.includes("physical") && (lowerText.includes("symptom") || lowerText.includes("racing"))) {
          riskFactors.push({
            factor: "Physical anxiety symptoms",
            severity: "high",
            description: "Physical manifestations suggest significant anxiety levels"
          });
        }
        if (lowerText.includes("avoid") || lowerText.includes("avoidance")) {
          riskFactors.push({
            factor: "Avoidance behaviors",
            severity: "moderate",
            description: "Avoidance patterns indicate functional impairment"
          });
        }
        break;
      case "crisis":
        if (lowerText.includes("plan") && (lowerText.includes("hurt") || lowerText.includes("end"))) {
          riskFactors.push({
            factor: "Potential planning indicators",
            severity: "critical",
            description: "References to planning self-harm require immediate attention"
          });
        }
        if (lowerText.includes("alone") || lowerText.includes("isolated")) {
          riskFactors.push({
            factor: "Social isolation",
            severity: "high",
            description: "Isolation increases crisis risk and reduces protective factors"
          });
        }
        break;
    }
  }
  /**
   * Gets intervention suggestions based on category and base analysis.
   */
  getInterventionSuggestions(category, baseAnalysis) {
    const interventions = [];
    if (baseAnalysis.isCrisis) {
      interventions.push({
        intervention: "Crisis intervention and safety planning",
        urgency: "immediate",
        rationale: "Crisis indicators require immediate professional intervention"
      });
    }
    const categoryInterventions = {
      depression: [
        {
          intervention: "Comprehensive depression screening and assessment",
          urgency: "urgent",
          rationale: "Early identification and treatment improve outcomes"
        },
        {
          intervention: "Consider evidence-based psychotherapy (CBT, IPT)",
          urgency: "routine",
          rationale: "Psychotherapy is first-line treatment for mild to moderate depression"
        }
      ],
      anxiety: [
        {
          intervention: "Anxiety disorder screening and differential diagnosis",
          urgency: "urgent",
          rationale: "Proper diagnosis guides appropriate treatment selection"
        },
        {
          intervention: "Relaxation techniques and coping strategies",
          urgency: "routine",
          rationale: "Self-management techniques can provide immediate relief"
        }
      ]
    };
    return interventions.concat(categoryInterventions[category] || []);
  }
  /**
   * Gets clinical context for a specific category.
   */
  getClinicalContext(category, baseAnalysis) {
    const contextMap = {
      crisis: {
        relevantDiagnoses: [
          "Major Depressive Disorder",
          "Bipolar Disorder",
          "Substance Use Disorder"
        ],
        contraindications: [
          "Immediate safety concerns override standard protocols"
        ],
        specialConsiderations: [
          "Legal and ethical obligations for duty to warn/protect"
        ]
      },
      depression: {
        relevantDiagnoses: [
          "Major Depressive Disorder",
          "Persistent Depressive Disorder",
          "Bipolar Disorder"
        ],
        contraindications: ["Active psychosis", "Severe cognitive impairment"],
        specialConsiderations: [
          "Assess for bipolar disorder before treatment",
          "Monitor for suicidal ideation"
        ]
      },
      anxiety: {
        relevantDiagnoses: [
          "Generalized Anxiety Disorder",
          "Panic Disorder",
          "Social Anxiety Disorder"
        ],
        contraindications: [
          "Substance-induced anxiety",
          "Medical conditions causing anxiety"
        ],
        specialConsiderations: [
          "Rule out medical causes",
          "Assess functional impairment"
        ]
      }
    };
    const baseContext = contextMap[category] || {};
    return this.enhanceContextWithAnalysis(baseContext, baseAnalysis, category);
  }
  /**
   * Enhances clinical context based on analysis results and confidence.
   */
  enhanceContextWithAnalysis(baseContext, baseAnalysis, category) {
    const enhancedContext = {
      relevantDiagnoses: [...baseContext.relevantDiagnoses || []],
      contraindications: [...baseContext.contraindications || []],
      specialConsiderations: [...baseContext.specialConsiderations || []]
    };
    if (baseAnalysis.isCrisis) {
      enhancedContext.specialConsiderations.push(
        "Immediate crisis intervention protocols in effect",
        "Document all safety planning interventions",
        "Consider involuntary commitment criteria if applicable"
      );
      if (category === "depression") {
        enhancedContext.relevantDiagnoses.push(
          "Major Depressive Disorder with Suicidal Ideation"
        );
        enhancedContext.contraindications.push(
          "Delay in crisis intervention contraindicated"
        );
      }
    }
    if (baseAnalysis.confidence < 0.7) {
      enhancedContext.specialConsiderations.push(
        "Low analysis confidence - consider additional assessment tools",
        "Recommend clinical interview for comprehensive evaluation"
      );
    } else if (baseAnalysis.confidence > 0.9) {
      enhancedContext.specialConsiderations.push(
        "High confidence in analysis - prioritize evidence-based interventions",
        "Consider immediate implementation of recommended protocols"
      );
    }
    if (baseAnalysis.hasMentalHealthIssue) {
      enhancedContext.specialConsiderations.push(
        "Mental health concerns identified - comprehensive assessment recommended",
        "Monitor for symptom progression and functional impact"
      );
    }
    this.addCategorySpecificContextEnhancements(
      enhancedContext,
      baseAnalysis,
      category
    );
    return enhancedContext;
  }
  /**
   * Adds category-specific context enhancements based on analysis results.
   */
  addCategorySpecificContextEnhancements(context, baseAnalysis, category) {
    switch (category) {
      case "depression":
        if (baseAnalysis.confidence > 0.8) {
          context.specialConsiderations.push(
            "High confidence in depression indicators - prioritize evidence-based treatments",
            "Consider standardized depression rating scales for monitoring"
          );
        }
        if (baseAnalysis.hasMentalHealthIssue) {
          context.relevantDiagnoses.push(
            "Depressive Disorder - Further Assessment Needed"
          );
          context.specialConsiderations.push(
            "Screen for psychotic features",
            "Assess medication adherence if applicable"
          );
        }
        break;
      case "anxiety":
        if (baseAnalysis.confidence > 0.8 && baseAnalysis.hasMentalHealthIssue) {
          context.relevantDiagnoses.push(
            "Anxiety Disorder with Significant Distress"
          );
          context.specialConsiderations.push(
            "Assess for panic disorder and agoraphobia",
            "Consider comorbid depression screening"
          );
        }
        context.contraindications.push(
          "Avoid benzodiazepines for long-term treatment"
        );
        break;
      case "crisis":
        context.specialConsiderations.push(
          "Activate crisis response protocols immediately",
          "Ensure continuous monitoring until safety established",
          "Document all intervention attempts and outcomes"
        );
        if (baseAnalysis.confidence > 0.9) {
          context.specialConsiderations.push(
            "High confidence crisis detection - immediate professional intervention required"
          );
        }
        break;
      default:
        if (baseAnalysis.hasMentalHealthIssue && baseAnalysis.confidence > 0.7) {
          context.specialConsiderations.push(
            "Mental health concerns detected - refer for comprehensive assessment",
            "Consider category-specific screening tools"
          );
        }
        break;
    }
  }
  /**
   * Gets evidence base for recommendations based on category.
   */
  getEvidenceBase(category) {
    const evidenceMap = {
      crisis: [
        {
          source: "Crisis Intervention Guidelines (APA)",
          reliability: "high",
          summary: "Immediate intervention protocols for crisis situations"
        }
      ],
      depression: [
        {
          source: "APA Practice Guidelines for Depression",
          reliability: "high",
          summary: "Evidence-based treatment recommendations for depression"
        },
        {
          source: "Cochrane Reviews on Depression Treatment",
          reliability: "high",
          summary: "Systematic reviews of depression treatment efficacy"
        }
      ],
      anxiety: [
        {
          source: "APA Practice Guidelines for Anxiety Disorders",
          reliability: "high",
          summary: "Evidence-based treatment recommendations for anxiety disorders"
        }
      ]
    };
    return evidenceMap[category] || [];
  }
  /**
   * Fetches comprehensive expert guidance for a given category and analysis.
   */
  async fetchExpertGuidance(category, text, baseAnalysis) {
    logger$5.info("Fetching expert guidance", { category });
    try {
      const clinicalGuidelines = this.getClinicalGuidelines(category);
      const riskFactors = this.assessRiskFactors(text, category, baseAnalysis);
      const interventionSuggestions = this.getInterventionSuggestions(
        category,
        baseAnalysis
      );
      const clinicalContext = this.getClinicalContext(category, baseAnalysis);
      const evidenceBase = this.getEvidenceBase(category);
      return {
        guidelines: clinicalGuidelines || [],
        riskFactors,
        interventionSuggestions,
        clinicalContext,
        evidenceBase
      };
    } catch (error) {
      logger$5.error("Error fetching expert guidance", { error, category });
      return {
        guidelines: [
          {
            category: "general",
            rule: "Follow standard clinical assessment protocols",
            priority: "medium",
            source: "fallback_guidance"
          }
        ],
        riskFactors: [],
        interventionSuggestions: [],
        clinicalContext: {},
        evidenceBase: []
      };
    }
  }
}

const logger$4 = getClinicalAnalysisLogger("helpers");
class ClinicalAnalysisHelpers {
  constructor(modelProvider) {
    this.modelProvider = modelProvider;
  }
  /**
   * Builds clinical prompt for LLM analysis.
   */
  buildClinicalPrompt(text, baseAnalysis, expertGuidance) {
    const guidelinesText = expertGuidance?.guidelines.map((g) => `- ${g.rule} (${g.source})`).join("\n") || "No specific guidelines available";
    const riskFactorsText = expertGuidance?.riskFactors.map(
      (rf) => `- ${rf.factor}: ${rf.description} (${rf.severity} severity)`
    ).join("\n") || "No specific risk factors identified";
    return [
      {
        role: "system",
        content: `You are a clinical mental health expert providing analysis based on established guidelines and evidence-based practices.

Clinical Guidelines:
${guidelinesText}

Risk Factors to Consider:
${riskFactorsText}

Base Analysis: ${baseAnalysis.mentalHealthCategory} (confidence: ${baseAnalysis.confidence})

Provide a comprehensive clinical analysis in JSON format:
{
  "explanation": "Detailed clinical explanation incorporating guidelines and evidence",
  "confidence": 0.0-1.0,
  "supportingEvidence": ["key phrases or indicators from the text"],
  "clinicalReasoning": "Step-by-step clinical reasoning process"
}`
      },
      {
        role: "user",
        content: `Please analyze this text: "${text}"`
      }
    ];
  }
  /**
   * Parses clinical response from LLM.
   */
  parseClinicalResponse(content) {
    try {
      return JSON.parse(content);
    } catch (error) {
      logger$4.error("Failed to parse clinical response", { error, content });
      return {
        explanation: content,
        confidence: 0.5,
        supportingEvidence: []
      };
    }
  }
  /**
   * Identifies risk indicators from text and base analysis.
   */
  identifyRiskIndicators(text, baseAnalysis) {
    const indicators = [];
    const normalizedText = text.toLowerCase();
    const riskPatterns = {
      suicide: {
        keywords: [
          "suicide",
          "kill myself",
          "end my life",
          "take my life",
          "not worth living",
          "better off dead",
          "suicide plan"
        ],
        severity: "critical"
      },
      self_harm: {
        keywords: [
          "self harm",
          "cut myself",
          "hurt myself",
          "self-harm",
          "cutting",
          "burning myself",
          "self-injury"
        ],
        severity: "critical"
      },
      crisis_language: {
        keywords: [
          "can't take it anymore",
          "nothing matters",
          "no point",
          "give up",
          "hopeless",
          "desperate",
          "emergency"
        ],
        severity: "critical"
      },
      depression_severe: {
        keywords: [
          "severely depressed",
          "major depression",
          "can't function",
          "completely hopeless",
          "total despair"
        ],
        severity: "high"
      },
      anxiety_severe: {
        keywords: [
          "panic attack",
          "severe anxiety",
          "can't breathe",
          "heart racing",
          "overwhelming fear",
          "terror"
        ],
        severity: "high"
      },
      substance_abuse: {
        keywords: [
          "drinking too much",
          "drug problem",
          "addiction",
          "substance abuse",
          "overdose",
          "getting high"
        ],
        severity: "high"
      },
      depression_moderate: {
        keywords: [
          "depressed",
          "sad all the time",
          "no energy",
          "can't sleep",
          "worthless",
          "guilty",
          "empty"
        ],
        severity: "moderate"
      },
      anxiety_moderate: {
        keywords: [
          "anxious",
          "worried",
          "nervous",
          "stressed",
          "tense",
          "restless",
          "on edge"
        ],
        severity: "moderate"
      },
      social_isolation: {
        keywords: [
          "alone",
          "isolated",
          "no friends",
          "withdrawn",
          "avoiding people",
          "lonely"
        ],
        severity: "moderate"
      },
      sleep_issues: {
        keywords: [
          "insomnia",
          "can't sleep",
          "nightmares",
          "sleep problems",
          "tired all the time"
        ],
        severity: "low"
      },
      mood_changes: {
        keywords: [
          "mood swings",
          "irritable",
          "angry",
          "frustrated",
          "emotional",
          "unstable"
        ],
        severity: "low"
      }
    };
    for (const [riskType, pattern] of Object.entries(riskPatterns)) {
      const foundKeywords = pattern.keywords.filter(
        (keyword) => normalizedText.includes(keyword)
      );
      if (foundKeywords.length > 0) {
        indicators.push({
          type: riskType,
          severity: pattern.severity,
          indicators: foundKeywords
        });
      }
    }
    const intensityWords = [
      "extremely",
      "severely",
      "completely",
      "totally",
      "absolutely",
      "unbearable",
      "overwhelming"
    ];
    const intensityFound = intensityWords.filter(
      (word) => normalizedText.includes(word)
    );
    if (intensityFound.length > 0) {
      indicators.push({
        type: "emotional_intensity",
        severity: intensityFound.length >= 3 ? "high" : "moderate",
        indicators: intensityFound
      });
    }
    const urgencyWords = [
      "right now",
      "immediately",
      "can't wait",
      "urgent",
      "emergency",
      "help me now"
    ];
    const urgencyFound = urgencyWords.filter(
      (word) => normalizedText.includes(word)
    );
    if (urgencyFound.length > 0) {
      indicators.push({
        type: "temporal_urgency",
        severity: urgencyFound.length >= 2 ? "critical" : "high",
        indicators: urgencyFound
      });
    }
    const supportWords = [
      "support",
      "help",
      "family",
      "friends",
      "therapist",
      "counselor"
    ];
    const supportFound = supportWords.filter(
      (word) => normalizedText.includes(word)
    );
    if (supportFound.length === 0 && normalizedText.length > 50) {
      indicators.push({
        type: "lack_of_support_mention",
        severity: "moderate",
        indicators: ["No support system mentioned in extended text"]
      });
    }
    if (baseAnalysis.isCrisis) {
      indicators.push({
        type: "crisis_risk",
        severity: "critical",
        indicators: ["Crisis detected by base analysis"]
      });
    }
    const criticalCount = indicators.filter(
      (i) => i.severity === "critical"
    ).length;
    const highCount = indicators.filter((i) => i.severity === "high").length;
    if (criticalCount >= 2 || criticalCount >= 1 && highCount >= 2) {
      indicators.push({
        type: "multiple_risk_factors",
        severity: "critical",
        indicators: [
          `${criticalCount} critical and ${highCount} high-risk indicators detected`
        ]
      });
    }
    return indicators;
  }
  /**
   * Identifies protective factors in the text.
   */
  identifyProtectiveFactors(text) {
    const protectiveKeywords = [
      "support",
      "family",
      "friends",
      "hope",
      "future",
      "goals",
      "therapy",
      "treatment",
      "help",
      "better",
      "improve"
    ];
    return protectiveKeywords.filter(
      (keyword) => text.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  /**
   * Gets category-specific recommendations with risk level adjustments.
   * Risk levels: 'critical', 'high', 'moderate', 'low'
   */
  getCategorySpecificRecommendations(category, riskLevel) {
    const categoryMap = {
      "depression": [
        {
          recommendation: "Professional mental health evaluation and depression screening",
          priority: "high",
          timeframe: "Within 1-2 weeks",
          rationale: "Depression requires comprehensive assessment and evidence-based treatment planning"
        },
        {
          recommendation: "Cognitive Behavioral Therapy (CBT) or interpersonal therapy consultation",
          priority: "medium",
          timeframe: "Within 2-4 weeks",
          rationale: "Psychotherapy is first-line treatment for depression with strong evidence base"
        }
      ],
      "anxiety": [
        {
          recommendation: "Anxiety disorder screening and symptom assessment",
          priority: "medium",
          timeframe: "Within 2-4 weeks",
          rationale: "Early identification and intervention can prevent symptom progression and functional impairment"
        },
        {
          recommendation: "Anxiety management techniques and relaxation training",
          priority: "medium",
          timeframe: "Within 1-3 weeks",
          rationale: "Immediate coping strategies can provide symptom relief while formal treatment is arranged"
        }
      ],
      "ptsd": [
        {
          recommendation: "Trauma-focused therapy evaluation (EMDR, CPT, or PE)",
          priority: "high",
          timeframe: "Within 1-2 weeks",
          rationale: "Evidence-based trauma therapies are essential for PTSD recovery and preventing chronicity"
        },
        {
          recommendation: "Safety planning and trauma-informed care coordination",
          priority: "high",
          timeframe: "Within 1 week",
          rationale: "Safety concerns and re-traumatization prevention are critical in PTSD treatment"
        }
      ],
      "bipolar disorder": [
        {
          recommendation: "Comprehensive psychiatric evaluation and mood stabilizer assessment",
          priority: "high",
          timeframe: "Within 1-2 weeks",
          rationale: "Bipolar disorder requires specialized psychiatric care and medication management"
        },
        {
          recommendation: "Psychoeducation about mood monitoring and trigger identification",
          priority: "medium",
          timeframe: "Within 2-3 weeks",
          rationale: "Self-monitoring skills are crucial for bipolar disorder management and relapse prevention"
        }
      ],
      "substance abuse": [
        {
          recommendation: "Substance use disorder assessment and detoxification evaluation",
          priority: "high",
          timeframe: "Within 1 week",
          rationale: "Medical supervision may be required for safe withdrawal and addiction treatment planning"
        },
        {
          recommendation: "Addiction counseling and support group referral",
          priority: "medium",
          timeframe: "Within 1-2 weeks",
          rationale: "Peer support and behavioral interventions are core components of addiction recovery"
        }
      ],
      "eating disorder": [
        {
          recommendation: "Comprehensive eating disorder assessment including medical evaluation",
          priority: "high",
          timeframe: "Within 1-2 weeks",
          rationale: "Eating disorders can have serious medical complications requiring immediate attention"
        },
        {
          recommendation: "Nutritional counseling and family therapy consultation",
          priority: "medium",
          timeframe: "Within 2-3 weeks",
          rationale: "Multi-disciplinary approach including nutrition and family involvement improves outcomes"
        }
      ]
    };
    const baseRecommendations = categoryMap[category] || [];
    if (riskLevel && baseRecommendations.length > 0) {
      return baseRecommendations.map((rec) => {
        let adjustedPriority = rec.priority;
        let adjustedTimeframe = rec.timeframe;
        let adjustedRationale = rec.rationale;
        switch (riskLevel) {
          case "critical":
            adjustedPriority = "critical";
            adjustedTimeframe = adjustedTimeframe.includes("week") ? "Within 24-48 hours" : "Immediate";
            adjustedRationale += " Critical risk level requires immediate intervention to prevent escalation.";
            break;
          case "high":
            if (adjustedPriority === "medium") {
              adjustedPriority = "high";
            }
            if (adjustedPriority === "low") {
              adjustedPriority = "medium";
            }
            adjustedTimeframe = adjustedTimeframe.replace(
              /(\d+)-(\d+) weeks?/,
              (_, start) => start === "1" ? "Within 3-5 days" : `Within ${Math.max(1, Number.parseInt(start) - 1)} week`
            );
            adjustedRationale += " Elevated risk requires expedited care coordination.";
            break;
          case "moderate":
            adjustedRationale += " Moderate risk warrants timely professional assessment.";
            break;
          case "low":
            adjustedTimeframe = adjustedTimeframe.replace(
              /(\d+)-(\d+) weeks?/,
              (_, start, end) => `Within ${start}-${Math.min(8, Number.parseInt(end) + 1)} weeks`
            );
            adjustedRationale += " Low risk allows for routine scheduling while maintaining care quality.";
            break;
        }
        return {
          ...rec,
          priority: adjustedPriority,
          timeframe: adjustedTimeframe,
          rationale: adjustedRationale
        };
      });
    }
    return baseRecommendations;
  }
  /**
   * Maps urgency levels to timeframes.
   */
  mapUrgencyToTimeframe(urgency) {
    const timeframeMap = {
      immediate: "Within 1 hour",
      urgent: "Within 24 hours",
      routine: "Within 1-2 weeks"
    };
    return timeframeMap[urgency];
  }
  /**
   * Generates expert-guided analysis using LLM with clinical prompts.
   */
  async generateExpertGuidedAnalysis(text, baseAnalysis, expertGuidance) {
    if (!this.modelProvider) {
      logger$4.warn("ModelProvider not available for expert-guided analysis");
      return {
        explanation: baseAnalysis.explanation,
        confidence: baseAnalysis.confidence,
        supportingEvidence: baseAnalysis.supportingEvidence || []
      };
    }
    const clinicalPrompt = this.buildClinicalPrompt(
      text,
      baseAnalysis,
      expertGuidance
    );
    try {
      const llmResponse = await this.modelProvider.invoke(clinicalPrompt, {
        temperature: 0.3,
        // Lower temperature for more consistent clinical analysis
        max_tokens: 800
      });
      const parsedResponse = this.parseClinicalResponse(llmResponse.content);
      return {
        explanation: parsedResponse.explanation || baseAnalysis.explanation,
        confidence: Math.min(
          parsedResponse.confidence || baseAnalysis.confidence,
          1
        ),
        supportingEvidence: parsedResponse.supportingEvidence || baseAnalysis.supportingEvidence || []
      };
    } catch (error) {
      logger$4.error("Error in expert-guided LLM analysis", { error });
      return {
        explanation: `${baseAnalysis.explanation} [Clinical analysis enhanced with expert guidelines]`,
        confidence: baseAnalysis.confidence * 0.9,
        // Slightly reduce confidence due to error
        supportingEvidence: baseAnalysis.supportingEvidence || []
      };
    }
  }
  /**
   * Performs comprehensive risk assessment.
   */
  async performRiskAssessment(text, baseAnalysis, expertGuidance) {
    const riskIndicators = this.identifyRiskIndicators(text, baseAnalysis);
    const protectiveFactors = this.identifyProtectiveFactors(text);
    let overallRisk = "low";
    if (baseAnalysis.isCrisis) {
      overallRisk = "critical";
    } else if (expertGuidance?.riskFactors.some((rf) => rf.severity === "critical")) {
      overallRisk = "critical";
    } else if (expertGuidance?.riskFactors.some((rf) => rf.severity === "high") || baseAnalysis.confidence > 0.8 && baseAnalysis.hasMentalHealthIssue) {
      overallRisk = "high";
    } else if (baseAnalysis.hasMentalHealthIssue && baseAnalysis.confidence > 0.5) {
      overallRisk = "moderate";
    }
    const specificRisks = riskIndicators.map((indicator) => ({
      type: indicator.type,
      level: indicator.severity,
      indicators: indicator.indicators
    }));
    return {
      overallRisk,
      specificRisks,
      protectiveFactors
    };
  }
  /**
   * Generates clinical recommendations based on analysis and expert guidance.
   */
  async generateClinicalRecommendations(baseAnalysis, expertGuidance, riskAssessment) {
    const recommendations = [];
    if (baseAnalysis.isCrisis) {
      recommendations.push({
        recommendation: "Immediate crisis intervention and safety assessment required",
        priority: "critical",
        timeframe: "Immediate (within 1 hour)",
        rationale: "Crisis indicators detected in analysis requiring immediate professional intervention"
      });
    }
    const categoryRecommendations = this.getCategorySpecificRecommendations(
      baseAnalysis.mentalHealthCategory,
      riskAssessment?.overallRisk
    );
    recommendations.push(...categoryRecommendations);
    if (expertGuidance?.interventionSuggestions) {
      for (const intervention of expertGuidance.interventionSuggestions) {
        recommendations.push({
          recommendation: intervention.intervention,
          priority: intervention.urgency === "immediate" ? "critical" : intervention.urgency === "urgent" ? "high" : "medium",
          timeframe: this.mapUrgencyToTimeframe(intervention.urgency),
          rationale: intervention.rationale
        });
      }
    }
    return recommendations.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }
  /**
   * Calculates quality metrics for the expert-guided analysis.
   */
  calculateQualityMetrics(expertGuidedAnalysis, expertGuidance, baseAnalysis) {
    const guidanceRelevance = expertGuidance ? Math.min(
      1,
      expertGuidance.guidelines.length * 0.2 + expertGuidance.riskFactors.length * 0.15 + expertGuidance.interventionSuggestions.length * 0.1
    ) : 0;
    const evidenceStrength = expertGuidance?.evidenceBase ? expertGuidance.evidenceBase.reduce((acc, evidence) => {
      const reliabilityScore = evidence.reliability === "high" ? 0.9 : evidence.reliability === "medium" ? 0.6 : 0.3;
      return acc + reliabilityScore;
    }, 0) / expertGuidance.evidenceBase.length : 0.5;
    const clinicalCoherence = baseAnalysis ? Math.min(
      1,
      baseAnalysis.confidence + (expertGuidedAnalysis.supportingEvidence?.length || 0) * 0.1
    ) : 0.5;
    return {
      guidanceRelevance: Math.min(1, guidanceRelevance),
      evidenceStrength: Math.min(1, evidenceStrength),
      clinicalCoherence: Math.min(1, clinicalCoherence)
    };
  }
}

const logger$3 = getClinicalAnalysisLogger("general");
class ExpertGuidanceOrchestrator {
  constructor(evidenceService, modelProvider, crisisNotifier) {
    this.evidenceService = evidenceService;
    this.modelProvider = modelProvider;
    this.crisisNotifier = crisisNotifier;
    this.clinicalKnowledgeBase = new ClinicalKnowledgeBase();
    this.clinicalAnalysisHelpers = new ClinicalAnalysisHelpers(
      this.modelProvider
    );
  }
  clinicalKnowledgeBase;
  clinicalAnalysisHelpers;
  /**
   * Orchestrates the complete expert-guided analysis process.
   */
  async analyzeWithExpertGuidance(text, baseAnalysis, fetchExpertGuidance = true, routingContextParams) {
    const analysisTimestamp = (/* @__PURE__ */ new Date()).toISOString();
    try {
      let expertGuidance;
      if (fetchExpertGuidance) {
        expertGuidance = await this.clinicalKnowledgeBase.fetchExpertGuidance(
          baseAnalysis.mentalHealthCategory,
          text,
          baseAnalysis
        );
      }
      const expertGuidedAnalysis = await this.clinicalAnalysisHelpers.generateExpertGuidedAnalysis(
        text,
        baseAnalysis,
        expertGuidance
      );
      const riskAssessment = await this.clinicalAnalysisHelpers.performRiskAssessment(
        text,
        baseAnalysis,
        expertGuidance
      );
      const clinicalRecommendations = await this.clinicalAnalysisHelpers.generateClinicalRecommendations(
        baseAnalysis,
        expertGuidance,
        riskAssessment
      );
      const qualityMetrics = this.clinicalAnalysisHelpers.calculateQualityMetrics(
        expertGuidedAnalysis,
        expertGuidance,
        baseAnalysis
      );
      const updatedRoutingDecision = baseAnalysis._routingDecision ? {
        ...baseAnalysis._routingDecision,
        insights: {
          ...baseAnalysis._routingDecision.insights,
          expertGuidanceApplied: true,
          expertGuidanceSource: fetchExpertGuidance ? "clinical_knowledge_base" : "llm_only",
          clinicalEnhancement: true
        }
      } : void 0;
      let enhancedEvidence = baseAnalysis.supportingEvidence || [];
      try {
        const enhancedContext = {
          ...routingContextParams,
          explicitTaskHint: routingContextParams?.explicitTaskHint || "expert_guided_analysis"
        };
        const evidenceResult = await this.evidenceService.extractSupportingEvidence(
          text,
          baseAnalysis.mentalHealthCategory,
          baseAnalysis,
          enhancedContext
        );
        const prioritizedEvidence = evidenceResult.evidenceItems.slice(0, 10);
        enhancedEvidence = prioritizedEvidence;
        logger$3.info("Expert-guided evidence extraction completed", {
          originalCount: baseAnalysis.supportingEvidence?.length || 0,
          enhancedCount: enhancedEvidence.length,
          evidenceStrength: evidenceResult.processingMetadata.evidenceStrength,
          category: baseAnalysis.mentalHealthCategory
        });
      } catch (evidenceError) {
        logger$3.error("Expert-guided evidence extraction failed", {
          error: evidenceError,
          category: baseAnalysis.mentalHealthCategory
        });
      }
      const result = {
        ...baseAnalysis,
        expertGuided: true,
        explanation: expertGuidedAnalysis.explanation,
        confidence: expertGuidedAnalysis.confidence,
        supportingEvidence: enhancedEvidence,
        ...expertGuidance && { expertGuidance },
        clinicalRecommendations,
        riskAssessment,
        qualityMetrics,
        ...updatedRoutingDecision && {
          _routingDecision: updatedRoutingDecision
        },
        timestamp: analysisTimestamp
      };
      if (result.isCrisis && expertGuidance) {
        await this.handleCrisisWithExpertGuidance(result, routingContextParams);
        try {
          const crisisEvidence = await this.evidenceService.extractCrisisEvidence(text, result);
          if (crisisEvidence.immediateRiskIndicators.length > 0) {
            logger$3.warn("Immediate risk indicators identified", {
              count: crisisEvidence.immediateRiskIndicators.length,
              indicators: crisisEvidence.immediateRiskIndicators,
              userId: routingContextParams?.userId
            });
          }
        } catch (crisisEvidenceError) {
          logger$3.error("Crisis evidence extraction failed", {
            error: crisisEvidenceError,
            userId: routingContextParams?.userId
          });
        }
      }
      logger$3.info("Expert-guided analysis completed successfully", {
        userId: routingContextParams?.userId,
        category: result.mentalHealthCategory,
        expertGuided: result.expertGuided,
        overallRisk: result.riskAssessment?.overallRisk,
        recommendationCount: result.clinicalRecommendations?.length || 0
      });
      return result;
    } catch (error) {
      logger$3.error("Error in expert-guided analysis orchestration", {
        error,
        userId: routingContextParams?.userId
      });
      throw error;
    }
  }
  /**
   * Handles crisis scenarios with expert guidance.
   */
  async handleCrisisWithExpertGuidance(result, routingContextParams) {
    logger$3.warn("Handling crisis with expert guidance", {
      userId: routingContextParams?.userId,
      overallRisk: result.riskAssessment?.overallRisk
    });
    if (this.crisisNotifier) {
      const enhancedCrisisContext = {
        ...routingContextParams?.userId && {
          userId: routingContextParams.userId
        },
        ...routingContextParams?.sessionId && {
          sessionId: routingContextParams.sessionId
        },
        ...routingContextParams?.sessionType && {
          sessionType: routingContextParams.sessionType
        },
        ...routingContextParams?.explicitTaskHint && {
          explicitTaskHint: routingContextParams.explicitTaskHint
        },
        textSample: result.supportingEvidence?.join(" | ") || "No evidence available",
        timestamp: result.timestamp,
        decisionDetails: result._routingDecision || {},
        analysisResult: {
          ...result,
          explanation: `[EXPERT-GUIDED] ${result.explanation}`
        }
      };
      try {
        await this.crisisNotifier.sendCrisisAlert(enhancedCrisisContext);
        logger$3.info("Enhanced crisis alert sent successfully");
      } catch (error) {
        logger$3.error("Failed to send enhanced crisis alert", { error });
      }
    }
  }
}

const SYSTEM_ROLE_DOMAIN_EXPERTISE = `You are an advanced AI assistant specialized in mental health text analysis. Your goal is to identify potential mental health issues and provide clear, empathetic, and evidence-based explanations. You are not a clinician and should not provide medical advice, diagnosis, or treatment.`;
const TASK_SPEC_CHAIN_OF_THOUGHT = `
Analyze the provided text carefully.
1. Identify key phrases, sentiment, and recurring themes.
2. Determine if any specific mental health categories are indicated.
3. If so, select the most prominent category and estimate your confidence.
4. Provide a concise explanation for your reasoning, citing specific examples from the text.
5. If a crisis is detected (e.g., suicidal ideation, self-harm), flag it immediately with the 'crisis' category.
Output your analysis in a structured JSON format.
`;
function buildGeneralAnalysisPrompt(params) {
  const contextEnhancement = `The user has provided the following text for analysis. Be sensitive and focus on identifying potential indicators.`;
  const reminders = `Remember to output valid JSON. If no specific category is clear, use 'general_mental_health' or 'none'. Prioritize crisis detection.`;
  return [
    {
      role: "system",
      content: `${SYSTEM_ROLE_DOMAIN_EXPERTISE}
${TASK_SPEC_CHAIN_OF_THOUGHT}
${reminders}`
    },
    {
      role: "user",
      content: `${contextEnhancement}

Text to analyze:
"""
${params.text}
"""

${params.categoryHint ? `Focus specifically on indicators related to: ${params.categoryHint}.` : ""}

Please provide your analysis as a JSON object with fields: "mentalHealthCategory" (string), "confidence" (float 0.0-1.0), "explanation" (string), and "supportingEvidence" (array of strings). If a crisis is detected, "mentalHealthCategory" must be "crisis".`
    }
  ];
}
function buildDepressionAnalysisPrompt(text) {
  return buildGeneralAnalysisPrompt({ text, categoryHint: "depression" });
}
function buildAnxietyAnalysisPrompt(text) {
  return buildGeneralAnalysisPrompt({ text, categoryHint: "anxiety" });
}
function buildCrisisAnalysisPrompt(text) {
  return buildGeneralAnalysisPrompt({ text, categoryHint: "crisis" });
}
const specializedPrompts = {
  depression: buildDepressionAnalysisPrompt,
  anxiety: buildAnxietyAnalysisPrompt,
  stress: (text) => buildGeneralAnalysisPrompt({ text, categoryHint: "stress" }),
  wellness: (text) => buildGeneralAnalysisPrompt({ text, categoryHint: "wellness" }),
  interpersonal_risk: (text) => buildGeneralAnalysisPrompt({ text, categoryHint: "interpersonal_risk" }),
  crisis: buildCrisisAnalysisPrompt
  // ... other categories
};

const ROUTER_LOW_CONFIDENCE_THRESHOLD = 0.65;

const logger$2 = getAiServiceLogger("mental-llama");
class MentalLLaMAAdapter {
  modelProvider;
  crisisNotifier;
  taskRouter;
  evidenceService;
  expertGuidanceOrchestrator;
  // Preload CrisisSessionFlaggingService module (optional, handle missing module gracefully)
  // @ts-expect-error: Module may not exist in all environments
  crisisSessionFlaggingServiceImport;
  constructor(options) {
    this.modelProvider = options.modelProvider;
    this.crisisNotifier = options.crisisNotifier;
    this.taskRouter = options.taskRouter;
    this.evidenceService = new EvidenceService(
      this.modelProvider,
      {
        enableLLMEnhancement: !!this.modelProvider,
        enableCaching: true,
        enableMetrics: true
      }
    );
    this.expertGuidanceOrchestrator = new ExpertGuidanceOrchestrator(
      this.evidenceService,
      this.modelProvider,
      this.crisisNotifier
    );
    try {
      this.crisisSessionFlaggingServiceImport = import('./CrisisSessionFlaggingService_Cjctf8AS.mjs');
    } catch (_e) {
      logger$2.warn(
        "CrisisSessionFlaggingService module not found, continuing without it."
      );
    }
    logger$2.info("MentalLLaMAAdapter initialized.", {
      hasCrisisNotifier: !!this.crisisNotifier,
      hasTaskRouter: !!this.taskRouter,
      hasEvidenceService: true
    });
    if (!this.taskRouter) {
      logger$2.warn(
        "MentalLLaMAAdapter initialized without a TaskRouter. Analysis will be limited."
      );
    }
    if (!this.modelProvider) {
      logger$2.warn(
        "MentalLLaMAAdapter initialized without a ModelProvider. Analysis capabilities will be significantly limited."
      );
    }
  }
  async handleCrisis(text, analysisResult, routingContext) {
    if (!this.crisisNotifier) {
      return;
    }
    const alertContext = {
      ...routingContext?.userId ? { userId: routingContext.userId } : {},
      ...routingContext?.sessionId ? { sessionId: routingContext.sessionId } : {},
      textSample: text.slice(0, 200),
      timestamp: analysisResult.timestamp,
      decisionDetails: analysisResult._routingDecision || {},
      analysisResult,
      ...routingContext?.sessionType ? { sessionType: routingContext.sessionType } : {},
      ...routingContext?.explicitTaskHint ? { explicitTaskHint: routingContext.explicitTaskHint } : {}
    };
    try {
      await this.crisisNotifier.sendCrisisAlert(alertContext);
    } catch (err) {
      logger$2.error("Failed to send crisis alert", { error: err });
    }
  }
  async analyzeMentalHealth(params) {
    const { text, categories = "auto_route", routingContext = {} } = params;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const failures = [];
    const {
      effectiveCategories,
      analysisCategory,
      analysisConfidence,
      routingDecisionStore,
      crisisResult
    } = await this.performRouting(
      text,
      categories,
      // Ensure RoutingContext properties are always strings (never null)
      {
        ...routingContext,
        userId: routingContext.userId ?? "",
        sessionId: routingContext.sessionId ?? ""
      },
      timestamp
    );
    if (crisisResult) {
      return crisisResult;
    }
    const {
      explanation,
      supportingEvidence: llmSupportingEvidence,
      category: llmCategory,
      confidence: llmConfidence,
      hasMentalHealthIssue,
      rawOutput,
      llmFailures
    } = await this.performLLMAnalysis({
      text,
      effectiveCategories,
      analysisCategory,
      analysisConfidence,
      categories,
      routingDecisionStore,
      timestamp
    });
    if (llmFailures?.length > 0) {
      failures.push(...llmFailures);
    }
    const { combinedEvidence, evidenceFailures } = await this.enhanceWithEvidence({
      text,
      category: llmCategory || analysisCategory,
      existingEvidence: llmSupportingEvidence,
      timestamp
    });
    if (evidenceFailures?.length > 0) {
      failures.push(...evidenceFailures);
    }
    const finalResult = {
      hasMentalHealthIssue: hasMentalHealthIssue ?? (llmCategory !== "none" && llmCategory !== "wellness" && llmCategory !== "unknown"),
      mentalHealthCategory: llmCategory || analysisCategory,
      confidence: llmConfidence ?? analysisConfidence,
      explanation: explanation || "Analysis incomplete.",
      supportingEvidence: combinedEvidence || [],
      isCrisis: (llmCategory || analysisCategory) === "crisis",
      timestamp,
      ...routingDecisionStore ? { _routingDecision: routingDecisionStore } : {},
      _rawModelOutput: rawOutput
    };
    if (failures.length > 0) {
      finalResult._failures = failures;
    }
    if (finalResult.isCrisis && finalResult.confidence > 0.7) {
      logger$2.warn(
        `Crisis detected: ${finalResult.mentalHealthCategory} (confidence: ${finalResult.confidence})`
      );
      const normalizedRoutingContext = {
        ...routingContext,
        userId: routingContext?.userId ?? "",
        sessionId: routingContext?.sessionId ?? ""
      };
      await this.handleCrisis(text, finalResult, normalizedRoutingContext);
    }
    logger$2.info("Mental health analysis complete.", {
      category: finalResult.mentalHealthCategory,
      confidence: finalResult.confidence
    });
    return finalResult;
  }
  // --- Extracted Methods ---
  async performRouting(text, categories, routingContext, timestamp) {
    let effectiveCategories = [];
    let analysisCategory = "none";
    let analysisConfidence = 0;
    let routingDecisionStore = null;
    let crisisResult = void 0;
    if (categories === "auto_route") {
      if (!this.taskRouter) {
        crisisResult = {
          hasMentalHealthIssue: false,
          mentalHealthCategory: "unknown",
          confidence: 0,
          explanation: "TaskRouter unavailable for auto_route",
          isCrisis: false,
          timestamp,
          _failures: [
            {
              type: "general",
              message: "TaskRouter unavailable for auto_route",
              timestamp
            }
          ]
        };
        return {
          effectiveCategories,
          analysisCategory,
          analysisConfidence,
          isCrisisFromRouting: false,
          routingDecisionStore,
          crisisResult
        };
      }
      const sanitizedContext = {
        ...routingContext,
        userId: routingContext.userId ?? "",
        sessionId: routingContext.sessionId ?? ""
      };
      const routingInput = { text, context: sanitizedContext };
      const route = await this.taskRouter.route(routingInput);
      routingDecisionStore = route;
      analysisCategory = route.targetAnalyzer;
      analysisConfidence = route.confidence;
      if (route.isCritical || analysisCategory === "crisis") {
        crisisResult = {
          hasMentalHealthIssue: true,
          mentalHealthCategory: "crisis",
          confidence: route.confidence,
          explanation: route.insights?.llmReasoning || "Crisis detected by routing rules or preliminary analysis.",
          supportingEvidence: route.insights?.matchedKeyword ? [route.insights.matchedKeyword] : [],
          isCrisis: true,
          timestamp,
          _routingDecision: route
        };
        const normalizedRoutingContext = {
          ...routingContext,
          userId: routingContext?.userId ?? "",
          sessionId: routingContext?.sessionId ?? ""
        };
        await this.handleCrisis(text, crisisResult, normalizedRoutingContext);
        return {
          effectiveCategories,
          analysisCategory,
          analysisConfidence,
          isCrisisFromRouting: true,
          routingDecisionStore: route,
          crisisResult
        };
      }
      if (!route.isCritical && route.confidence < ROUTER_LOW_CONFIDENCE_THRESHOLD) {
        logger$2.warn(
          `Router confidence is low (${route.confidence} for ${route.targetAnalyzer}). Defaulting to general_mental_health for LLM analysis.`
        );
        effectiveCategories = ["general_mental_health"];
      } else {
        effectiveCategories = [route.targetAnalyzer];
      }
    } else {
      effectiveCategories = Array.isArray(categories) ? categories : [categories];
      analysisCategory = effectiveCategories.join(", ");
      analysisConfidence = 0.9;
      logger$2.info(`Explicit categories provided: ${analysisCategory}`);
    }
    return {
      effectiveCategories,
      analysisCategory,
      analysisConfidence,
      isCrisisFromRouting: false,
      routingDecisionStore
    };
  }
  async performLLMAnalysis({
    text,
    effectiveCategories,
    analysisCategory,
    analysisConfidence,
    categories,
    routingDecisionStore,
    timestamp
  }) {
    let categoryForPrompt = effectiveCategories[0] || "general_mental_health";
    if (categoryForPrompt === "unknown" || categoryForPrompt === "none") {
      categoryForPrompt = "general_mental_health";
    }
    let promptBuilder = specializedPrompts[categoryForPrompt] || buildGeneralAnalysisPrompt;
    let llmMessages = promptBuilder({
      text,
      categoryHint: categoryForPrompt
    });
    let llmAnalysisResult = {
      explanation: "LLM analysis could not be completed.",
      confidence: 0.1,
      mentalHealthCategory: "unknown",
      supportingEvidence: []
    };
    const llmFailures = [];
    if (!this.modelProvider) {
      llmFailures.push({
        type: "general",
        message: "ModelProvider unavailable for detailed analysis",
        timestamp
      });
      return {
        explanation: "ModelProvider unavailable for detailed analysis",
        supportingEvidence: [],
        category: analysisCategory,
        confidence: analysisConfidence,
        hasMentalHealthIssue: false,
        rawOutput: llmAnalysisResult,
        llmFailures
      };
    }
    try {
      const llmResponseRaw = await this.modelProvider.invoke(llmMessages, {
        temperature: 0.3,
        max_tokens: 500
      });
      try {
        const parsedLlmResponse = JSON.parse(llmResponseRaw.content);
        llmAnalysisResult.mentalHealthCategory = parsedLlmResponse.mentalHealthCategory || categoryForPrompt;
        llmAnalysisResult.confidence = parseFloat(parsedLlmResponse.confidence) || analysisConfidence;
        llmAnalysisResult.explanation = parsedLlmResponse.explanation || "No explanation provided by LLM.";
        llmAnalysisResult.supportingEvidence = parsedLlmResponse.supportingEvidence || [];
        llmAnalysisResult.hasMentalHealthIssue = llmAnalysisResult.mentalHealthCategory !== "none" && llmAnalysisResult.mentalHealthCategory !== "wellness" && llmAnalysisResult.mentalHealthCategory !== "unknown";
        if (categories === "auto_route" && routingDecisionStore) {
          if (parsedLlmResponse.mentalHealthCategory && parsedLlmResponse.mentalHealthCategory !== routingDecisionStore.targetAnalyzer && parsedLlmResponse.confidence > routingDecisionStore.confidence) {
            logger$2.info(
              `LLM analysis refined category from ${routingDecisionStore.targetAnalyzer} to ${parsedLlmResponse.mentalHealthCategory}`
            );
            llmAnalysisResult.mentalHealthCategory = parsedLlmResponse.mentalHealthCategory;
          }
          llmAnalysisResult.confidence = Math.max(
            analysisConfidence,
            parsedLlmResponse.confidence
          );
        } else if (parsedLlmResponse.mentalHealthCategory) {
          llmAnalysisResult.mentalHealthCategory = parsedLlmResponse.mentalHealthCategory;
          llmAnalysisResult.confidence = parsedLlmResponse.confidence;
        }
      } catch (parseError) {
        logger$2.error("Failed to parse LLM JSON response for analysis", {
          rawResponse: llmResponseRaw,
          error: parseError
        });
        llmAnalysisResult.explanation = `LLM provided a non-JSON response: ${llmResponseRaw.content}`;
        llmAnalysisResult.mentalHealthCategory = analysisCategory;
        llmAnalysisResult.confidence = analysisConfidence * 0.5;
        llmAnalysisResult.hasMentalHealthIssue = analysisCategory !== "none" && analysisCategory !== "wellness" && analysisCategory !== "unknown";
        llmFailures.push({
          type: "model_analysis",
          message: "Failed to parse LLM JSON response",
          timestamp,
          error: parseError
        });
      }
    } catch (llmError) {
      logger$2.error("Error during LLM call for analysis", { error: llmError });
      llmAnalysisResult.explanation = `Error during LLM analysis: ${llmError instanceof Error ? llmError.message : String(llmError)}`;
      llmAnalysisResult.mentalHealthCategory = analysisCategory;
      llmAnalysisResult.confidence = analysisConfidence * 0.3;
      llmAnalysisResult.hasMentalHealthIssue = analysisCategory !== "none" && analysisCategory !== "wellness" && analysisCategory !== "unknown";
      llmFailures.push({
        type: "model_analysis",
        message: "Error during LLM analysis",
        timestamp,
        error: llmError
      });
    }
    return {
      explanation: llmAnalysisResult.explanation || "",
      supportingEvidence: llmAnalysisResult.supportingEvidence || [],
      category: llmAnalysisResult.mentalHealthCategory || analysisCategory,
      confidence: llmAnalysisResult.confidence ?? analysisConfidence,
      hasMentalHealthIssue: llmAnalysisResult.hasMentalHealthIssue ?? (analysisCategory !== "none" && analysisCategory !== "wellness" && analysisCategory !== "unknown"),
      rawOutput: llmAnalysisResult,
      llmFailures
    };
  }
  async enhanceWithEvidence({
    text,
    category,
    existingEvidence,
    timestamp
  }) {
    const evidenceFailures = [];
    let combinedEvidence = existingEvidence || [];
    try {
      const evidence = await this.evidenceService.extractSupportingEvidence(
        text,
        category
      );
      if (evidence && evidence.evidenceItems) {
        combinedEvidence = [...combinedEvidence, ...evidence.evidenceItems];
      }
    } catch (evidenceError) {
      logger$2.error("Evidence extraction failed", { error: evidenceError });
      evidenceFailures.push({
        type: "general",
        message: "Evidence extraction failed",
        timestamp,
        error: evidenceError
      });
    }
    return { combinedEvidence, evidenceFailures };
  }
  async analyzeMentalHealthWithExpertGuidance(text, fetchExpertGuidance = true, routingContextParams) {
    const baseAnalysis = await this.analyzeMentalHealth({
      text,
      routingContext: routingContextParams
    });
    try {
      return await this.expertGuidanceOrchestrator.analyzeWithExpertGuidance(
        text,
        baseAnalysis,
        fetchExpertGuidance,
        routingContextParams
      );
    } catch (err) {
      logger$2.error("Expert guidance orchestration failed", { error: err });
      return {
        ...baseAnalysis,
        expertGuided: false,
        explanation: `Expert guidance unavailable due to system error: ${err.message}. Base fallback explanation: ${baseAnalysis.explanation}`,
        _failures: [
          ...baseAnalysis._failures || [],
          {
            type: "general",
            // expert guidance orchestration errors are categorized as 'general'
            message: "Expert guidance orchestration failed",
            error: err,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        ]
      };
    }
  }
  async evaluateExplanationQuality(explanation, textContext) {
    if (!this.modelProvider) {
      return {
        fluency: 0.1,
        completeness: 0.1,
        reliability: 0.1,
        overall: 0.1,
        assessment: "ModelProvider not configured"
      };
    }
    const messages = [
      {
        role: "system",
        content: "You are an expert system that evaluates the quality of explanations for mental health analyses. Rate the following explanation for fluency, completeness, reliability, and overall quality (0.0-1.0)."
      },
      {
        role: "user",
        content: `Explanation: ${explanation}
${textContext ? `Context: ${textContext}` : ""}
Please provide a JSON object with fields: fluency, completeness, reliability, overall, assessment (string).`
      }
    ];
    try {
      const response = await this.modelProvider.invoke(messages, {
        temperature: 0.2,
        max_tokens: 200
      });
      const parsed = JSON.parse(response.content);
      return {
        fluency: parsed.fluency,
        completeness: parsed.completeness,
        reliability: parsed.reliability,
        overall: parsed.overall,
        assessment: parsed.assessment
      };
    } catch (err) {
      logger$2.error("Failed to evaluate explanation quality", { error: err });
      return {
        fluency: 0.1,
        completeness: 0.1,
        reliability: 0.1,
        overall: 0.1,
        assessment: "Failed to evaluate explanation quality"
      };
    }
  }
  // EvidenceService wrapper methods for advanced use/testing
  async extractDetailedEvidence(text, category) {
    return this.evidenceService.extractSupportingEvidence(text, category);
  }
  getEvidenceMetrics() {
    return this.evidenceService.getMetrics();
  }
  clearEvidenceCache() {
    return this.evidenceService.clearCache();
  }
}

async function createMentalLLaMAPythonBridge(scriptPath) {
  if (typeof process !== "undefined" && process.versions?.node && typeof window === "undefined") {
    try {
      const modulePath = [
        "..",
        "..",
        "..",
        "server-only",
        "MentalLLaMAPythonBridge"
      ].join("/");
      const module = await import(
        /* @vite-ignore */
        modulePath
      );
      return new module.MentalLLaMAPythonBridge(scriptPath);
    } catch (error) {
      console.warn(
        "Failed to load server-side Python bridge, using stub:",
        error
      );
      const { MentalLLaMAPythonBridge } = await import('./browser-stub_CYazcx2j.mjs');
      return new MentalLLaMAPythonBridge();
    }
  } else {
    const { MentalLLaMAPythonBridge } = await import('./browser-stub_CYazcx2j.mjs');
    return new MentalLLaMAPythonBridge();
  }
}

const logger$1 = createBuildSafeLogger("SlackNotificationService");
class SlackNotificationService {
  webhookUrl;
  constructor(webhookUrl) {
    const url = webhookUrl || config.notifications.slackWebhookUrl();
    if (!url) {
      const errorMsg = "Slack webhook URL is not configured. SlackNotificationService cannot operate.";
      logger$1.error(errorMsg);
      throw new Error(errorMsg);
    }
    this.webhookUrl = url;
    logger$1.info("SlackNotificationService initialized.");
  }
  formatCrisisAlertToSlack(alertContext) {
    const {
      userId,
      sessionId,
      sessionType,
      explicitTaskHint,
      timestamp,
      textSample,
      decisionDetails
    } = alertContext;
    const blocks = [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🚨 CRITICAL CRISIS ALERT 🚨",
          emoji: true
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `A potential user crisis was detected by the MentalLLaMA system. *Urgent review required.*`
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Timestamp:*
${new Date(timestamp).toLocaleString()}`
          },
          { type: "mrkdwn", text: `*User ID:*
${userId || "N/A"}` },
          { type: "mrkdwn", text: `*Session ID:*
${sessionId || "N/A"}` },
          { type: "mrkdwn", text: `*Session Type:*
${sessionType || "N/A"}` },
          {
            type: "mrkdwn",
            text: `*Explicit Task Hint:*
${typeof explicitTaskHint === "string" ? explicitTaskHint : "N/A"}`
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Text Sample (first 500 chars):*
\`\`\`${textSample}\`\`\``
        }
      }
    ];
    if (decisionDetails) {
      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Routing Decision Details:*
\`\`\`${JSON.stringify(decisionDetails, null, 2)}\`\`\``
        }
      });
    }
    blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `This alert was generated at ${(/* @__PURE__ */ new Date()).toISOString()}. Please investigate immediately.`
        }
      ]
    });
    return {
      text: `CRITICAL CRISIS ALERT: User ID ${userId || "N/A"}, Session ID ${sessionId || "N/A"}. Urgent review required.`,
      blocks,
      username: "MentalLLaMA Crisis Monitor",
      icon_emoji: ":rotating_light:"
      // channel: '#crisis-alerts', // Can be set here or in webhook config
    };
  }
  async sendCrisisAlert(alertContext) {
    logger$1.warn("Dispatching crisis alert via SlackNotificationService:", {
      userId: alertContext.userId,
      sessionId: alertContext.sessionId,
      timestamp: alertContext.timestamp
    });
    const slackPayload = this.formatCrisisAlertToSlack(alertContext);
    try {
      const response = await fetch(this.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(slackPayload)
      });
      if (!response.ok) {
        const responseBody = await response.text();
        logger$1.error("Failed to send Slack crisis alert. Non-OK response.", {
          statusCode: response.status,
          statusText: response.statusText,
          responseBody,
          webhookUrl: this.webhookUrl.substring(
            0,
            this.webhookUrl.indexOf("/services/") + "/services/".length
          ) + "..."
          // Log only part of URL
        });
        throw new Error(
          `Slack API error: ${response.status} ${response.statusText} - ${responseBody}`
        );
      }
      logger$1.info("Crisis alert successfully sent to Slack.", {
        userId: alertContext.userId,
        sessionId: alertContext.sessionId
      });
    } catch (error) {
      logger$1.error("Exception while sending Slack crisis alert:", {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0,
        webhookUrl: this.webhookUrl.substring(
          0,
          this.webhookUrl.indexOf("/services/") + "/services/".length
        ) + "..."
      });
      throw new Error(
        `Failed to dispatch crisis alert via SlackNotificationService: ${error instanceof Error ? error.message : String(error)}`,
        { cause: error }
      );
    }
  }
}

const logger = getHipaaCompliantLogger("general");
async function createMentalLLaMAFactory(config = {}) {
  logger.info("Creating MentalLLaMA components via factory...", { config });
  const env = getEnv();
  const modelTier = config.defaultModelTier || env.MENTALLAMA_DEFAULT_MODEL_TIER || "7B";
  const modelProvider = new MentalLLaMAModelProvider(modelTier);
  const llmInvokerForRouter = async (messages, options) => {
    const chatOptions = options ? {
      ...options.temperature !== void 0 ? { temperature: options.temperature } : {},
      ...options.max_tokens !== void 0 ? { max_tokens: options.max_tokens } : {},
      ...options.top_p !== void 0 ? { top_p: options.top_p } : {},
      ...options.frequency_penalty !== void 0 ? { frequency_penalty: options.frequency_penalty } : {},
      ...options.presence_penalty !== void 0 ? { presence_penalty: options.presence_penalty } : {},
      ...options.stop !== void 0 ? { stop: options.stop } : {},
      ...options.stream !== void 0 ? { stream: options.stream } : {},
      ...options.logprobs !== void 0 ? { logprobs: options.logprobs } : {},
      ...options.model !== void 0 ? { model: options.model } : {},
      ...options.timeout !== void 0 ? { timeout: options.timeout } : {},
      ...options.retries !== void 0 ? { retries: options.retries } : {},
      ...options.providerSpecificParams || {}
    } : void 0;
    return await modelProvider.invoke(messages, chatOptions);
  };
  const taskRouter = new MentalHealthTaskRouter(llmInvokerForRouter);
  let crisisNotifier = void 0;
  let pythonBridge = void 0;
  const slackWebhookUrl = env.SLACK_WEBHOOK_URL;
  if (slackWebhookUrl) {
    try {
      crisisNotifier = new SlackNotificationService(slackWebhookUrl);
      logger.info(
        "SlackNotificationService initialized for MentalLLaMAAdapter."
      );
    } catch (error) {
      logger.error(
        "Failed to initialize SlackNotificationService for MentalLLaMAAdapter:",
        error
      );
    }
  } else {
    logger.warn(
      "Slack webhook URL not configured. MentalLLaMAAdapter will operate without Slack crisis notifications."
    );
  }
  if (config.enablePythonBridge || env.MENTALLAMA_ENABLE_PYTHON_BRIDGE) {
    try {
      pythonBridge = await createMentalLLaMAPythonBridge(
        config.pythonBridgeScriptPath
      );
      await pythonBridge.initialize();
      if (pythonBridge.isReady()) {
        logger.info("MentalLLaMAPythonBridge initialized and ready.");
      } else {
        logger.warn(
          "MentalLLaMAPythonBridge initialization failed or did not complete. Features requiring it may not work."
        );
      }
    } catch (error) {
      logger.error("Failed to initialize MentalLLaMAPythonBridge:", error);
    }
  }
  const adapter = new MentalLLaMAAdapter(
    crisisNotifier ? { modelProvider, taskRouter, crisisNotifier } : { modelProvider, taskRouter }
  );
  logger.info("MentalLLaMA components created successfully.");
  const result = {
    adapter,
    modelProvider,
    taskRouter
  };
  if (pythonBridge) {
    result.pythonBridge = pythonBridge;
  }
  if (crisisNotifier) {
    result.crisisNotifier = crisisNotifier;
  }
  return result;
}
async function createMentalLLaMAFactoryFromEnv() {
  const env = getEnv();
  const config = {
    defaultModelTier: env.MENTALLAMA_DEFAULT_MODEL_TIER || "7B",
    enablePythonBridge: env.MENTALLAMA_ENABLE_PYTHON_BRIDGE || false
  };
  if (env.MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH) {
    config.pythonBridgeScriptPath = env.MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH;
  }
  return createMentalLLaMAFactory(config);
}
async function createMentalLLaMAFromEnv() {
  logger.info(
    "Creating MentalLLaMA components from environment configuration..."
  );
  try {
    const result = await createMentalLLaMAFactoryFromEnv();
    logger.info("MentalLLaMA components created successfully", {
      hasModelProvider: !!result.modelProvider,
      hasTaskRouter: !!result.taskRouter,
      hasCrisisNotifier: !!result.crisisNotifier,
      hasPythonBridge: !!result.pythonBridge
    });
    return {
      adapter: result.adapter,
      modelProvider: result.modelProvider
    };
  } catch (error) {
    logger.error("Failed to create MentalLLaMA components", { error });
    throw error;
  }
}

export { ClinicalKnowledgeBase as C, createMentalLLaMAFromEnv as c };
