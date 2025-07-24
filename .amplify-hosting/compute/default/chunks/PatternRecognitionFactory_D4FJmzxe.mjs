;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1643a0b5-52fc-44fd-9c5a-044d91a4190b",e._sentryDebugIdIdentifier="sentry-dbid-1643a0b5-52fc-44fd-9c5a-044d91a4190b")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import { nanoid } from 'nanoid';
import { E as EncryptionMode, F as FHEOperation } from './types_CQf1BJz-.mjs';
import './astro/server_bjkJ-nhl.mjs';
import { z } from 'zod';

const logger$2 = createBuildSafeLogger("mock-fhe");
class MockFHEScheme {
  name = "MockFHE";
  version = "1.0.0";
  getOperations() {
    return [
      FHEOperation.Addition,
      FHEOperation.Subtraction,
      FHEOperation.Multiplication,
      FHEOperation.Negation,
      FHEOperation.SENTIMENT,
      FHEOperation.CATEGORIZE
    ];
  }
  supportsOperation(operation) {
    return this.getOperations().includes(operation);
  }
}
class MockFHEService {
  initialized = false;
  keysGenerated = false;
  scheme;
  keyPair = null;
  constructor() {
    this.scheme = new MockFHEScheme();
    logger$2.info("Mock FHE service created");
  }
  /**
   * Initialize the mock FHE service
   */
  async initialize(_options) {
    logger$2.info("Initializing mock FHE service");
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.initialized = true;
  }
  /**
   * Check if the service is initialized
   */
  isInitialized() {
    return this.initialized;
  }
  /**
   * Check if an operation is supported
   */
  supportsOperation(operation) {
    return this.scheme.supportsOperation(operation);
  }
  /**
   * Generate mock encryption keys
   * Implements the generateKeys method from FHEService interface
   */
  async generateKeys(_config) {
    logger$2.info("Generating mock encryption keys");
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.keysGenerated = true;
    const created = /* @__PURE__ */ new Date();
    const keyId = nanoid();
    this.keyPair = {
      keyId,
      createdAt: created,
      scheme: this.scheme.name,
      status: "active",
      mockKeyId: keyId,
      mockCreated: Date.now()
    };
    return this.keyPair;
  }
  /**
   * Mock encrypt data
   * Implements the encrypt method from FHEService interface
   */
  async encrypt(value, _options) {
    this.checkInitialized();
    logger$2.info("Mock encrypting data", { dataType: typeof value });
    const type = typeof value;
    let dataType;
    if (type === "number" || type === "string" || type === "boolean") {
      dataType = type;
    } else if (Array.isArray(value)) {
      dataType = "array";
    } else {
      dataType = "object";
    }
    const encrypted = {
      id: nanoid(),
      mockId: nanoid(6),
      data: value,
      dataType,
      originalType: type,
      originalValue: JSON.stringify(value),
      mockEncrypted: true,
      timestamp: Date.now(),
      metadata: {
        encryptedAt: Date.now(),
        mode: EncryptionMode.FHE
      }
    };
    return encrypted;
  }
  /**
   * Mock decrypt data
   * Implements the decrypt method from FHEService interface
   */
  async decrypt(encryptedData, _options) {
    this.checkInitialized();
    const mockData = encryptedData;
    if (!mockData || !mockData.originalValue) {
      if (encryptedData && encryptedData.data) {
        try {
          return encryptedData.data;
        } catch {
          throw new Error("Invalid encrypted data format");
        }
      }
      throw new Error("Invalid mock encrypted data");
    }
    logger$2.info("Mock decrypting data");
    try {
      return JSON.parse(mockData.originalValue);
    } catch {
      throw new Error("Failed to decrypt data");
    }
  }
  /**
   * Process encrypted data with a homomorphic operation
   * Implements the processEncrypted method from FHEService interface
   */
  async processEncrypted(encryptedData, operation, params) {
    this.checkInitialized();
    logger$2.info(`Processing encrypted data with operation ${operation}`);
    let data;
    try {
      data = JSON.parse(encryptedData);
    } catch {
      throw new Error("Invalid encrypted data format");
    }
    switch (operation) {
      case FHEOperation.SENTIMENT:
        return this.mockSentimentAnalysis(data);
      case FHEOperation.CATEGORIZE:
        return this.mockCategorization(data, params);
      default:
        throw new Error(
          `Operation ${operation} not implemented in mock service`
        );
    }
  }
  /**
   * Mock sentiment analysis
   */
  async mockSentimentAnalysis(data) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    try {
      const originalText = JSON.parse(data.originalValue);
      if (typeof originalText === "string") {
        const positiveWords = ["good", "great", "excellent", "happy", "joy"];
        const negativeWords = ["bad", "poor", "sad", "unhappy", "terrible"];
        const text = originalText.toLowerCase();
        let sentiment = "neutral";
        const positiveCount = positiveWords.filter(
          (word) => text.includes(word)
        ).length;
        const negativeCount = negativeWords.filter(
          (word) => text.includes(word)
        ).length;
        if (positiveCount > negativeCount) {
          sentiment = "positive";
        } else if (negativeCount > positiveCount) {
          sentiment = "negative";
        }
        return {
          success: true,
          result: JSON.stringify({
            id: nanoid(),
            result: sentiment,
            confidence: 0.85,
            processed: true
          }),
          operation: FHEOperation.SENTIMENT,
          metadata: {
            timestamp: Date.now()
          }
        };
      }
    } catch {
    }
    return {
      success: true,
      result: JSON.stringify({
        id: nanoid(),
        result: "neutral",
        confidence: 0.5,
        processed: true
      }),
      operation: FHEOperation.SENTIMENT,
      metadata: {
        timestamp: Date.now()
      }
    };
  }
  /**
   * Mock categorization
   */
  async mockCategorization(data, params) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const categories = {
      health: ["health", "medical", "doctor", "hospital", "wellness"],
      finance: ["money", "finance", "bank", "investment", "budget"],
      tech: ["computer", "technology", "software", "hardware", "digital"],
      personal: ["family", "friend", "relationship", "personal", "home"]
    };
    const categoryMap = params?.categories || categories;
    try {
      const originalText = JSON.parse(data.originalValue);
      if (typeof originalText === "string") {
        const text = originalText.toLowerCase();
        const matches = {};
        for (const [category, keywords] of Object.entries(categoryMap)) {
          let count = 0;
          for (const keyword of keywords) {
            if (text.includes(keyword.toLowerCase())) {
              count++;
            }
          }
          if (count > 0) {
            matches[category] = count;
          }
        }
        const sortedCategories = Object.entries(matches).sort((a, b) => b[1] - a[1]).map(([category]) => category);
        return {
          success: true,
          result: JSON.stringify({
            id: nanoid(),
            categories: sortedCategories.length > 0 ? sortedCategories : ["uncategorized"],
            confidence: sortedCategories.length > 0 ? 0.7 : 0.3,
            processed: true
          }),
          operation: FHEOperation.CATEGORIZE,
          metadata: {
            timestamp: Date.now()
          }
        };
      }
    } catch {
    }
    return {
      success: true,
      result: JSON.stringify({
        id: nanoid(),
        categories: ["uncategorized"],
        confidence: 0.3,
        processed: true
      }),
      operation: FHEOperation.CATEGORIZE,
      metadata: {
        timestamp: Date.now()
      }
    };
  }
  /**
   * Check if the service is initialized
   */
  checkInitialized() {
    if (!this.initialized) {
      throw new Error(
        "Mock FHE service not initialized. Call initialize() first."
      );
    }
  }
}
const mockFHEService = new MockFHEService();

const logger$1 = createBuildSafeLogger("pattern-recognition-fhe-factory");
class MockPatternRecognitionAdapter {
  async processPatterns(_dataPoints, _options) {
    logger$1.info("Processing patterns with mock adapter");
    return [
      {
        id: nanoid(),
        encryptedData: JSON.stringify({ data: "mock-pattern-data" }),
        metadata: { timestamp: Date.now(), patternType: "trend" }
      }
    ];
  }
  async decryptPatterns(_encryptedPatterns) {
    logger$1.info("Decrypting patterns with mock adapter");
    return [
      {
        id: nanoid(),
        type: "mood-trend",
        confidence: 0.85,
        startDate: /* @__PURE__ */ new Date(),
        endDate: /* @__PURE__ */ new Date(),
        description: "Mock trend pattern",
        indicators: ["mood", "anxiety"]
      }
    ];
  }
  async analyzeCrossSessions(_sessions, _confidenceThreshold) {
    logger$1.info("Analyzing cross sessions with mock adapter");
    return {
      id: nanoid(),
      encryptedData: JSON.stringify({ data: "mock-analysis-data" }),
      metadata: { timestamp: Date.now(), analysisType: "cross-session" }
    };
  }
  async decryptCrossSessionAnalysis(_encryptedAnalysis) {
    logger$1.info("Decrypting cross session analysis with mock adapter");
    return [
      {
        id: nanoid(),
        type: "recurring-theme",
        confidence: 0.8,
        sessions: ["session1", "session2"],
        description: "Mock cross-session pattern",
        significance: "Medium significance"
      }
    ];
  }
  async processRiskCorrelations(_analyses, _riskFactorWeights) {
    logger$1.info("Processing risk correlations with mock adapter");
    return [
      {
        id: nanoid(),
        encryptedData: JSON.stringify({ data: "mock-correlation-data" }),
        metadata: { timestamp: Date.now(), correlationType: "risk-factor" }
      }
    ];
  }
  async decryptRiskCorrelations(_encryptedCorrelations) {
    logger$1.info("Decrypting risk correlations with mock adapter");
    return [
      {
        id: nanoid(),
        riskFactor: "anxiety",
        correlatedFactors: [{ factor: "isolation", strength: 0.7 }],
        confidence: 0.75,
        significance: "Strong correlation detected"
      }
    ];
  }
}
async function createPatternRecognitionFHEService(config) {
  try {
    logger$1.info("Creating pattern recognition FHE service", { config });
    const useMock = config?.useMock === true || config?.mode === "development";
    if (useMock) {
      logger$1.info("Using mock FHE service for pattern recognition");
      await mockFHEService.initialize();
      if (!mockFHEService.isInitialized()) {
        await mockFHEService.generateKeys();
      }
      logger$1.info("Mock pattern recognition FHE service initialized");
      return new MockPatternRecognitionAdapter();
    } else {
      logger$1.info("Using SEAL FHE service for pattern recognition");
      const { SealPatternRecognitionService } = await import('./seal-pattern-recognition_BB-0muFj.mjs');
      const sealService = new SealPatternRecognitionService();
      await sealService.initialize(config);
      logger$1.info("SEAL pattern recognition FHE service initialized");
      return sealService;
    }
  } catch (error) {
    logger$1.error("Failed to create pattern recognition FHE service", { error });
    throw new Error(
      `Pattern recognition FHE service creation failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

const StatisticalMetricsSchema = z.object({
  meanConfidence: z.number().min(0).max(1),
  standardDeviation: z.number().min(0),
  outlierCount: z.number().int().min(0),
  correlationStrength: z.number().min(-1).max(1)
});
const TimelineAnalysisSchema = z.object({
  firstOccurrence: z.date(),
  lastOccurrence: z.date(),
  frequency: z.number().min(0),
  trend: z.enum(["increasing", "decreasing", "stable"]),
  trendStrength: z.number().min(0).max(1),
  seasonality: z.object({
    period: z.number().min(0),
    amplitude: z.number().min(0),
    confidence: z.number().min(0).max(1)
  }).optional()
});
const ClinicalRelevanceSchema = z.object({
  significance: z.enum(["low", "medium", "high"]),
  recommendation: z.string(),
  interventionSuggested: z.boolean(),
  urgency: z.enum(["none", "low", "medium", "high", "critical"]),
  evidenceScore: z.number().min(0).max(1)
});
z.object({
  patternId: z.string(),
  type: z.enum(["behavioral", "emotional", "cognitive", "communication"]),
  description: z.string(),
  frequency: z.number().min(0),
  confidence: z.number().min(0).max(1),
  sessionIds: z.array(z.string()),
  timelineAnalysis: TimelineAnalysisSchema,
  clinicalRelevance: ClinicalRelevanceSchema,
  statisticalMetrics: StatisticalMetricsSchema
});
z.object({
  primaryFactor: z.string(),
  correlatedFactors: z.array(
    z.object({
      factor: z.string(),
      correlation: z.number().min(-1).max(1),
      confidence: z.number().min(0).max(1),
      pValue: z.number().min(0).max(1),
      effectSize: z.enum(["small", "medium", "large"])
    })
  ),
  timeFrame: z.object({
    start: z.date(),
    end: z.date(),
    duration: z.number().min(0)
  }),
  severity: z.enum(["low", "medium", "high", "critical"]),
  actionRequired: z.boolean(),
  recommendations: z.array(z.string()),
  statisticalMetrics: z.object({
    sampleSize: z.number().int().min(0),
    pearsonCorrelation: z.number().min(-1).max(1),
    spearmanCorrelation: z.number().min(-1).max(1),
    kendallTau: z.number().min(-1).max(1),
    confidence95Interval: z.tuple([z.number(), z.number()])
  }),
  fheAnalysis: z.object({
    encryptedCorrelationMatrix: z.string(),
    homomorphicConfidence: z.number().min(0).max(1),
    privacyPreserved: z.boolean()
  }).optional()
});
z.object({
  id: z.string(),
  type: z.string(),
  confidence: z.number().min(0).max(1),
  startDate: z.date(),
  endDate: z.date(),
  indicators: z.array(z.string()),
  description: z.string(),
  algorithmicAnalysis: z.object({
    trendDirection: z.enum([
      "increasing",
      "decreasing",
      "stable",
      "oscillating"
    ]),
    trendStrength: z.number().min(0).max(1),
    linearRegression: z.object({
      slope: z.number(),
      intercept: z.number(),
      rSquared: z.number().min(0).max(1),
      pValue: z.number().min(0).max(1)
    }),
    seasonalDecomposition: z.object({
      trendComponent: z.array(z.number()),
      seasonalComponent: z.array(z.number()),
      residualComponent: z.array(z.number()),
      seasonalityStrength: z.number().min(0).max(1)
    }).optional(),
    changePoints: z.array(
      z.object({
        timestamp: z.date(),
        confidenceLevel: z.number().min(0).max(1),
        changeType: z.enum(["increase", "decrease", "plateau"])
      })
    )
  }),
  clinicalImplications: z.object({
    severity: z.enum(["low", "medium", "high", "critical"]),
    interventionWindow: z.number().min(0),
    followUpRecommended: z.boolean(),
    escalationRequired: z.boolean()
  })
});
z.object({
  id: z.string(),
  type: z.string(),
  sessions: z.array(z.string()),
  pattern: z.string(),
  frequency: z.number().min(0).max(1),
  confidence: z.number().min(0).max(1),
  impact: z.string(),
  recommendations: z.array(z.string()),
  advancedMetrics: z.object({
    cohesionCoefficient: z.number().min(0).max(1),
    persistenceScore: z.number().min(0).max(1),
    evolutionRate: z.number().min(0).max(1),
    clinicalMagnitude: z.number().min(0).max(1),
    networkAnalysis: z.object({
      centralitySessions: z.array(z.string()),
      connectionStrength: z.number().min(0).max(1),
      communityDetection: z.boolean()
    })
  }),
  temporalCharacteristics: z.object({
    cyclicNature: z.boolean(),
    periodLength: z.number().min(0).optional(),
    phaseShift: z.number(),
    amplitudeVariation: z.number().min(0)
  })
});
class PatternRecognitionError extends Error {
  constructor(message, code, details) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = "PatternRecognitionError";
  }
}
class ProcessingError extends PatternRecognitionError {
  constructor(message, details) {
    super(message, "PROCESSING_ERROR", details);
    this.name = "ProcessingError";
  }
}

const logger = createBuildSafeLogger("pattern-recognition");
class ConcretePatternRecognitionService {
  constructor(fheService) {
    this.fheService = fheService;
  }
  async detectCrossSessionPatterns(clientId, sessions) {
    try {
      logger.info("Detecting cross-session patterns", {
        clientId,
        sessionCount: sessions.length
      });
      const encryptedAnalysis = await this.fheService.analyzeCrossSessions(
        sessions,
        0.7
        // confidence threshold
      );
      const crossSessionPatterns = await this.fheService.decryptCrossSessionAnalysis(
        encryptedAnalysis
      );
      const results = crossSessionPatterns.map(
        (pattern) => ({
          id: pattern.id,
          patternType: "cross_session",
          confidence: pattern.confidence,
          description: pattern.description,
          sessions: pattern.sessions,
          metadata: {
            significance: pattern.significance,
            strength: pattern.strength || 0.8,
            categories: pattern.categories || ["behavioral"]
          },
          recommendations: [],
          riskLevel: "medium",
          timestamp: /* @__PURE__ */ new Date()
        })
      );
      logger.info("Cross-session pattern detection completed", {
        clientId,
        patternCount: results.length
      });
      return results;
    } catch (error) {
      logger.error("Error detecting cross-session patterns", { error, clientId });
      throw new ProcessingError(
        "Failed to detect cross-session patterns",
        error
      );
    }
  }
  async analyzeSessionPatterns(session) {
    try {
      logger.info("Analyzing session patterns", {
        sessionId: session.sessionId
      });
      const patterns = await this.fheService.processPatterns(
        [session],
        {
          windowSize: 1,
          minPoints: 1,
          threshold: 0.6
        }
      );
      const trendPatterns = await this.fheService.decryptPatterns(patterns);
      const results = trendPatterns.map(
        (pattern) => ({
          id: pattern.id,
          patternType: "session_analysis",
          confidence: pattern.confidence,
          description: pattern.description,
          sessions: [session.sessionId],
          metadata: {
            indicators: pattern.indicators,
            startDate: pattern.startDate,
            endDate: pattern.endDate
          },
          recommendations: [],
          riskLevel: "low",
          timestamp: /* @__PURE__ */ new Date()
        })
      );
      logger.info("Session pattern analysis completed", {
        sessionId: session.sessionId,
        patternCount: results.length
      });
      return results;
    } catch (error) {
      logger.error("Error analyzing session patterns", {
        error,
        sessionId: session.sessionId
      });
      throw new ProcessingError("Failed to analyze session patterns", error);
    }
  }
  async comparePatterns(patterns1, patterns2) {
    try {
      logger.info("Comparing patterns", {
        patterns1Count: patterns1.length,
        patterns2Count: patterns2.length
      });
      const common = [];
      const unique1 = [];
      const unique2 = [...patterns2];
      for (const pattern1 of patterns1) {
        const matchIndex = unique2.findIndex(
          (pattern2) => pattern1.patternType === pattern2.patternType && this.calculateSimilarity(pattern1.description, pattern2.description) > 0.7
        );
        if (matchIndex >= 0) {
          common.push(pattern1);
          unique2.splice(matchIndex, 1);
        } else {
          unique1.push(pattern1);
        }
      }
      logger.info("Pattern comparison completed", {
        commonCount: common.length,
        unique1Count: unique1.length,
        unique2Count: unique2.length
      });
      return { common, unique1, unique2 };
    } catch (error) {
      logger.error("Error comparing patterns", { error });
      throw new ProcessingError("Failed to compare patterns", error);
    }
  }
  async analyzeRiskFactorCorrelations(clientId, analyses) {
    try {
      logger.info("Analyzing risk factor correlations", {
        clientId,
        analysesCount: analyses.length
      });
      const encryptedCorrelations = await this.fheService.processRiskCorrelations(
        analyses,
        {
          anxiety: 1,
          depression: 0.9,
          sleep: 0.8,
          isolation: 0.7,
          substance: 0.95
        }
      );
      const correlations = await this.fheService.decryptRiskCorrelations(
        encryptedCorrelations
      );
      logger.info("Risk factor correlation analysis completed", {
        clientId,
        correlationCount: correlations.length
      });
      return correlations;
    } catch (error) {
      logger.error("Error analyzing risk factor correlations", {
        error,
        clientId
      });
      throw new ProcessingError(
        "Failed to analyze risk factor correlations",
        error
      );
    }
  }
  async analyzeLongTermTrends(clientId, startDate, endDate) {
    try {
      logger.info("Analyzing long-term trends", {
        clientId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });
      const dataPoints = this.generateSyntheticDataPoints(startDate, endDate);
      const encryptedPatterns = await this.fheService.processPatterns(
        dataPoints,
        {
          windowSize: Math.min(10, dataPoints.length),
          minPoints: 3,
          threshold: 0.6
        }
      );
      const trendPatterns = await this.fheService.decryptPatterns(encryptedPatterns);
      logger.info("Long-term trend analysis completed", {
        clientId,
        trendCount: trendPatterns.length
      });
      return trendPatterns;
    } catch (error) {
      logger.error("Error analyzing long-term trends", {
        error,
        clientId
      });
      throw new ProcessingError("Failed to analyze long-term trends", error);
    }
  }
  async detectCrossSessionPatternsAdvanced(clientId, sessions) {
    try {
      logger.info("Detecting advanced cross-session patterns", {
        clientId,
        sessionCount: sessions.length
      });
      const encryptedAnalysis = await this.fheService.analyzeCrossSessions(
        sessions,
        0.8
        // higher confidence threshold for advanced analysis
      );
      const patterns = await this.fheService.decryptCrossSessionAnalysis(
        encryptedAnalysis
      );
      logger.info("Advanced cross-session pattern detection completed", {
        clientId,
        patternCount: patterns.length
      });
      return patterns;
    } catch (error) {
      logger.error("Error detecting advanced cross-session patterns", {
        error,
        clientId
      });
      throw new ProcessingError(
        "Failed to detect advanced cross-session patterns",
        error
      );
    }
  }
  // Helper methods
  calculateSimilarity(text1, text2) {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    const commonWords = words1.filter((word) => words2.includes(word));
    const totalWords = (/* @__PURE__ */ new Set([...words1, ...words2])).size;
    return commonWords.length / totalWords;
  }
  generateSyntheticDataPoints(startDate, endDate) {
    const dataPoints = [];
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = timeDiff / (1e3 * 60 * 60 * 24);
    const pointCount = Math.min(30, Math.max(5, Math.floor(daysDiff)));
    for (let i = 0; i < pointCount; i++) {
      const timestamp = new Date(
        startDate.getTime() + timeDiff * i / pointCount
      );
      dataPoints.push({
        timestamp,
        value: Math.random(),
        metadata: { synthetic: true }
      });
    }
    return dataPoints;
  }
}
async function createPatternRecognitionService() {
  try {
    logger.info("Creating pattern recognition service");
    const fheService = await createPatternRecognitionFHEService({
      useMock: true,
      // Use mock for development
      mode: "development"
    });
    const service = new ConcretePatternRecognitionService(fheService);
    logger.info("Pattern recognition service created successfully");
    return service;
  } catch (error) {
    logger.error("Failed to create pattern recognition service", { error });
    throw new ProcessingError(
      "Failed to create pattern recognition service",
      error
    );
  }
}

export { MockFHEService as M, createPatternRecognitionService as c };
