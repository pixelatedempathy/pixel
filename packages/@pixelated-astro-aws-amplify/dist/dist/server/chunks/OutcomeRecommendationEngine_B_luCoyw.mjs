;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9186b1d6-721f-425d-b8ee-c7ae3d9ba66d",e._sentryDebugIdIdentifier="sentry-dbid-9186b1d6-721f-425d-b8ee-c7ae3d9ba66d")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_0J2m2aGD.mjs';
import { z } from 'zod';
import './astro/server_Ck5BzePu.mjs';

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.date()
});
const TherapySessionSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  therapistId: z.string(),
  status: z.enum(["active", "completed", "scheduled", "cancelled"]),
  securityLevel: z.enum(["standard", "enhanced", "maximum"]),
  emotionAnalysisEnabled: z.boolean(),
  metadata: z.record(z.unknown()).optional()
});
const ChatSessionSchema = z.object({
  messages: z.array(MessageSchema),
  metadata: z.record(z.unknown()).optional()
});
const EmotionStateSchema = z.object({
  currentEmotion: z.string(),
  intensity: z.number().min(0).max(1),
  timestamp: z.date(),
  confidence: z.number().min(0).max(1),
  relatedFactors: z.array(z.string()).optional(),
  metadata: z.record(z.unknown()).optional()
});
const MentalHealthAnalysisSchema = z.object({
  primaryConcerns: z.array(z.string()),
  riskLevel: z.enum(["low", "moderate", "high"]),
  recommendedApproaches: z.array(z.string()).optional(),
  notes: z.string().optional(),
  lastUpdated: z.date().optional(),
  confidence: z.number().min(0).max(1).optional()
});
const RecommendationContextSchema = z.object({
  session: TherapySessionSchema,
  chatSession: ChatSessionSchema,
  recentEmotionState: EmotionStateSchema,
  recentInterventions: z.array(z.string()),
  userPreferences: z.record(z.unknown()).optional(),
  mentalHealthAnalysis: MentalHealthAnalysisSchema.optional()
});
const RecommendationRequestSchema = z.object({
  context: RecommendationContextSchema,
  desiredOutcomes: z.array(z.string()).min(1),
  maxResults: z.number().int().positive(),
  minConfidence: z.number().min(0).max(1).optional(),
  includeExperimental: z.boolean().optional()
});
const TreatmentForecastSchema = z.object({
  outcomeId: z.string(),
  description: z.string(),
  confidence: z.number().min(0).max(1),
  timeEstimate: z.string(),
  interventions: z.array(z.string()),
  risk: z.enum(["low", "medium", "high"]),
  details: z.object({
    expectedDuration: z.number().int().positive(),
    successRate: z.number().min(0).max(100),
    contraindications: z.array(z.string()),
    sideEffects: z.array(z.string())
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});
class RecommendationError extends Error {
  constructor(message, code, details) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = "RecommendationError";
  }
}
class ValidationError extends RecommendationError {
  constructor(message, details) {
    super(message, "VALIDATION_ERROR", details);
    this.name = "ValidationError";
  }
}
class ProcessingError extends RecommendationError {
  constructor(message, details) {
    super(message, "PROCESSING_ERROR", details);
    this.name = "ProcessingError";
  }
}

const logger = createBuildSafeLogger("outcome-recommendation");
function recommend(request) {
  try {
    try {
      RecommendationRequestSchema.parse(request);
    } catch (error) {
      throw new ValidationError("Invalid recommendation request", error);
    }
    logger.info("Generating treatment recommendations", {
      desiredOutcomes: request.desiredOutcomes,
      maxResults: request.maxResults,
      clientId: request.context.session.clientId,
      therapistId: request.context.session.therapistId
    });
    const forecasts = generateForecasts(request);
    const validatedForecasts = forecasts.filter((forecast) => {
      try {
        TreatmentForecastSchema.parse(forecast);
        return true;
      } catch (error) {
        logger.warn("Invalid forecast generated:", {
          outcomeId: forecast.outcomeId,
          error: error instanceof Error ? error.message : "Unknown error"
        });
        return false;
      }
    });
    const filteredForecasts = request.minConfidence ? validatedForecasts.filter(
      (f) => f.confidence >= (request.minConfidence || 0)
    ) : validatedForecasts;
    return filteredForecasts.sort((a, b) => b.confidence - a.confidence).slice(0, request.maxResults);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    logger.error("Error generating recommendations:", {
      error: error instanceof Error ? error.message : "Unknown error",
      desiredOutcomes: request.desiredOutcomes,
      maxResults: request.maxResults
    });
    throw new ProcessingError("Failed to generate recommendations", error);
  }
}
function generateForecasts(request) {
  const { context, desiredOutcomes } = request;
  const baseInterventions = context.mentalHealthAnalysis?.recommendedApproaches || ["CBT", "Mindfulness", "Behavioral activation"];
  const emotionIntensity = context.recentEmotionState.intensity;
  const baseRisk = emotionIntensity > 0.7 ? "high" : emotionIntensity > 0.4 ? "medium" : "low";
  return desiredOutcomes.map((outcome, index) => {
    const confidenceFactors = [
      0.75,
      // Base confidence
      context.mentalHealthAnalysis ? 0.1 : 0,
      // Bonus for having analysis
      context.recentEmotionState.confidence * 0.1,
      // Factor in emotion confidence
      Math.random() * 0.2
      // Random variation
    ];
    const confidence = Math.min(
      1,
      confidenceFactors.reduce((sum, factor) => sum + factor, 0)
    );
    const riskFactors = [
      baseRisk,
      context.mentalHealthAnalysis?.riskLevel || "low",
      index > desiredOutcomes.length / 2 ? "high" : "low"
      // Later outcomes are riskier
    ];
    const risk = calculateRisk(riskFactors);
    return {
      outcomeId: `forecast-${index + 1}`,
      description: `Treatment plan for ${outcome}`,
      confidence,
      timeEstimate: `${4 + index * 2}-${8 + index * 2} weeks`,
      interventions: [
        ...baseInterventions,
        ...context.recentInterventions.slice(-2)
        // Include recent successful interventions
      ],
      risk,
      details: {
        expectedDuration: (4 + index * 2) * 7,
        // Duration in days
        successRate: Math.round(confidence * 100),
        contraindications: generateContraindications(risk),
        sideEffects: generateSideEffects(risk)
      },
      metadata: {
        generatedAt: /* @__PURE__ */ new Date(),
        basedOn: {
          emotionState: context.recentEmotionState.currentEmotion,
          riskLevel: context.mentalHealthAnalysis?.riskLevel
        }
      }
    };
  });
}
function calculateRisk(factors) {
  const riskScores = {
    low: 0,
    moderate: 1,
    medium: 1,
    high: 2
  };
  const avgScore = factors.reduce((sum, factor) => {
    return sum + riskScores[factor];
  }, 0) / factors.length;
  if (avgScore > 1.5) return "high";
  if (avgScore > 0.5) return "medium";
  return "low";
}
function generateContraindications(risk) {
  const base = ["Acute suicidal ideation", "Active psychosis"];
  if (risk === "high") {
    return [...base, "Severe depression", "Unstable environment"];
  }
  if (risk === "medium") {
    return [...base, "Moderate depression"];
  }
  return base;
}
function generateSideEffects(risk) {
  const base = ["Temporary mood fluctuations", "Initial anxiety increase"];
  if (risk === "high") {
    return [...base, "Significant emotional distress", "Sleep pattern changes"];
  }
  if (risk === "medium") {
    return [...base, "Moderate emotional distress"];
  }
  return base;
}

export { recommend as r };
