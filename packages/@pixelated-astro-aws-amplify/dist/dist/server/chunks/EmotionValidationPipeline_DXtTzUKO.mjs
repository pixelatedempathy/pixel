;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04b452d8-e451-43c0-945a-adcc95082f51",e._sentryDebugIdIdentifier="sentry-dbid-04b452d8-e451-43c0-945a-adcc95082f51")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';
import { B as BiasDetectionEngine } from './BiasDetectionEngine_LWnMxt9o.mjs';
import './cache_Dq5YBkVs.mjs';
import './astro/server_t-wqd6mp.mjs';

class EmotionValidationPipeline {
  logger = createBuildSafeLogger("EmotionValidationPipeline");
  isRunning = false;
  _isInitialized = false;
  biasDetectionEngine;
  validationInterval;
  recentValidations = [];
  monitoringCallbacks = [];
  metrics = {
    processed: 0,
    validated: 0,
    errors: 0,
    lastRun: null,
    biasDetections: 0,
    falsePositives: 0,
    accuracy: 0.85,
    // Start with baseline
    averageConfidence: 0.75
  };
  // Emotion consistency thresholds
  CONSISTENCY_THRESHOLDS = {
    HIGH: 0.8,
    MEDIUM: 0.6,
    LOW: 0.4
  };
  // Known bias patterns in emotional responses
  BIAS_PATTERNS = [
    {
      pattern: /aggressive|angry|hostile/i,
      demographic: "male",
      bias: "gender_aggression"
    },
    {
      pattern: /emotional|sensitive|caring/i,
      demographic: "female",
      bias: "gender_emotion"
    },
    {
      pattern: /rational|logical|analytical/i,
      demographic: "male",
      bias: "gender_logic"
    },
    {
      pattern: /irrational|emotional|unstable/i,
      demographic: "female",
      bias: "gender_stability"
    }
  ];
  /**
   * Check if pipeline is initialized
   */
  get isInitialized() {
    return this._isInitialized;
  }
  /**
   * Initialize the emotion validation pipeline
   */
  async initialize() {
    if (this._isInitialized) {
      this.logger.warn("Pipeline already initialized");
      return;
    }
    try {
      this.logger.info("Initializing Emotion Validation Pipeline");
      this.biasDetectionEngine = new BiasDetectionEngine({
        thresholds: {
          warningLevel: 0.3,
          highLevel: 0.6,
          criticalLevel: 0.8
        },
        auditLogging: true,
        hipaaCompliant: true
      });
      await this.biasDetectionEngine.initialize();
      this._isInitialized = true;
      this.logger.info("Emotion Validation Pipeline initialized successfully");
    } catch (error) {
      this.logger.error("Failed to initialize pipeline", { error });
      throw new Error(
        `Pipeline initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Start continuous validation with real implementation
   */
  async startContinuousValidation() {
    if (this.isRunning) {
      this.logger.warn("Emotion validation pipeline is already running");
      return;
    }
    if (!this._isInitialized) {
      await this.initialize();
    }
    try {
      this.isRunning = true;
      this.metrics.lastRun = /* @__PURE__ */ new Date();
      this.logger.info("Starting continuous emotion validation");
      if (this.biasDetectionEngine) {
        await this.biasDetectionEngine.startMonitoring((data) => {
          this.handleBiasDetectionAlert(data);
        });
      }
      this.validationInterval = setInterval(async () => {
        await this.performPeriodicValidation();
      }, 3e4);
      this.logger.info("Continuous emotion validation started successfully");
    } catch (error) {
      this.isRunning = false;
      this.logger.error("Failed to start continuous validation", { error });
      throw error;
    }
  }
  /**
   * Stop continuous validation
   */
  stopContinuousValidation() {
    if (!this.isRunning) {
      this.logger.warn("Emotion validation pipeline is not currently running");
      return;
    }
    try {
      this.isRunning = false;
      if (this.validationInterval) {
        clearInterval(this.validationInterval);
        this.validationInterval = void 0;
      }
      if (this.biasDetectionEngine) {
        this.biasDetectionEngine.stopMonitoring();
      }
      this.logger.info("Emotion validation pipeline stopped successfully");
    } catch (error) {
      this.logger.error("Error stopping validation pipeline", { error });
    }
  }
  /**
   * Get current validation status with comprehensive metrics
   */
  getStatus() {
    return {
      isRunning: this.isRunning,
      metrics: { ...this.metrics }
    };
  }
  /**
   * Get validation statistics for API endpoints
   */
  getValidationStats() {
    const systemHealth = this.assessSystemHealth();
    return {
      isRunning: this.isRunning,
      metrics: { ...this.metrics },
      recentValidations: [...this.recentValidations.slice(-10)],
      // Last 10 validations
      systemHealth,
      lastHealthCheck: /* @__PURE__ */ new Date()
    };
  }
  /**
   * Get validation results for dashboard
   */
  getValidationResults() {
    return [...this.recentValidations];
  }
  /**
   * Validate single emotion detection result with bias detection
   */
  async validateEmotionResult(emotionData) {
    try {
      this.metrics.processed++;
      const basicValidation = this.performBasicValidation(emotionData);
      let biasAnalysis;
      let biasScore = 0;
      if (this.biasDetectionEngine && emotionData.participantDemographics) {
        try {
          const therapeuticSession = this.convertToTherapeuticSession(emotionData);
          biasAnalysis = await this.biasDetectionEngine.analyzeSession(therapeuticSession);
          biasScore = biasAnalysis.overallBiasScore;
        } catch (error) {
          this.logger.warn("Bias detection failed for emotion validation", {
            sessionId: emotionData.sessionId,
            error
          });
        }
      }
      const patternBias = this.detectBiasPatterns(emotionData);
      const emotionConsistency = this.calculateEmotionConsistency(emotionData);
      const contextualAppropriate = this.assessContextualAppropriateness(emotionData);
      const confidence = this.calculateOverallConfidence(
        basicValidation.confidence,
        emotionConsistency,
        biasScore
      );
      const issues = this.generateIssues(
        basicValidation,
        patternBias,
        emotionConsistency,
        contextualAppropriate
      );
      const recommendations = this.generateRecommendations(
        issues,
        biasScore,
        emotionData
      );
      const isValid = issues.length === 0 && biasScore < 0.6 && confidence > 0.5;
      const result = {
        isValid,
        confidence,
        issues,
        biasScore,
        emotionConsistency,
        contextualAppropriate,
        recommendations
      };
      if (biasAnalysis) {
        result.biasAnalysis = biasAnalysis;
      }
      if (isValid) {
        this.metrics.validated++;
      }
      if (biasScore > 0.3) {
        this.metrics.biasDetections++;
      }
      this.recentValidations.push(result);
      if (this.recentValidations.length > 100) {
        this.recentValidations = this.recentValidations.slice(-50);
      }
      this.updateRunningMetrics(result);
      return result;
    } catch (error) {
      this.metrics.errors++;
      this.logger.error("Emotion validation failed", {
        sessionId: emotionData.sessionId,
        error
      });
      return {
        isValid: false,
        confidence: 0,
        issues: ["Validation system error"],
        emotionConsistency: 0,
        contextualAppropriate: false,
        recommendations: ["System requires attention - validation failed"]
      };
    }
  }
  /**
   * Handle bias detection alerts from monitoring
   */
  handleBiasDetectionAlert(data) {
    try {
      this.logger.info("Received bias detection alert", { data });
      this.monitoringCallbacks.forEach((callback) => {
        try {
          callback({
            type: "bias_alert",
            timestamp: /* @__PURE__ */ new Date(),
            data
          });
        } catch (error) {
          this.logger.error("Error in monitoring callback", { error });
        }
      });
    } catch (error) {
      this.logger.error("Error handling bias detection alert", { error });
    }
  }
  /**
   * Perform periodic validation checks
   */
  async performPeriodicValidation() {
    try {
      const systemHealth = this.assessSystemHealth();
      this.logger.debug("Periodic validation check", {
        metrics: this.metrics,
        systemHealth,
        recentValidationsCount: this.recentValidations.length
      });
      if (systemHealth === "critical") {
        this.logger.warn("Emotion validation system health critical", {
          metrics: this.metrics
        });
      }
    } catch (error) {
      this.logger.error("Periodic validation check failed", { error });
    }
  }
  /**
   * Perform basic emotion validation
   */
  performBasicValidation(emotionData) {
    const issues = [];
    let confidence = 1;
    if (!emotionData.detectedEmotion || emotionData.detectedEmotion.trim() === "") {
      issues.push("Missing or empty detected emotion");
      confidence *= 0.5;
    }
    if (!emotionData.context || emotionData.context.trim() === "") {
      issues.push("Missing emotional context");
      confidence *= 0.7;
    }
    if (emotionData.confidence < 0.3) {
      issues.push("Low emotion detection confidence");
      confidence *= 0.8;
    }
    const validEmotions = [
      "happy",
      "sad",
      "angry",
      "fearful",
      "surprised",
      "disgusted",
      "neutral",
      "anxious",
      "confused"
    ];
    if (!validEmotions.some(
      (emotion) => emotionData.detectedEmotion.toLowerCase().includes(emotion)
    )) {
      issues.push("Unrecognized emotion category");
      confidence *= 0.6;
    }
    return {
      isValid: issues.length === 0,
      confidence: Math.max(0.1, confidence),
      issues
    };
  }
  /**
   * Detect bias patterns in emotional responses
   */
  detectBiasPatterns(emotionData) {
    const detectedPatterns = [];
    let severity = 0;
    if (!emotionData.responseText || !emotionData.participantDemographics) {
      return { detected: false, patterns: [], severity: 0 };
    }
    const responseText = emotionData.responseText.toLowerCase();
    const demographics = emotionData.participantDemographics;
    for (const biasPattern of this.BIAS_PATTERNS) {
      if (biasPattern.pattern.test(responseText) && demographics.gender?.toLowerCase() === biasPattern.demographic.toLowerCase()) {
        detectedPatterns.push(biasPattern.bias);
        severity += 0.3;
      }
    }
    return {
      detected: detectedPatterns.length > 0,
      patterns: detectedPatterns,
      severity: Math.min(1, severity)
    };
  }
  /**
   * Calculate emotion consistency with context
   */
  calculateEmotionConsistency(emotionData) {
    const context = emotionData.context.toLowerCase();
    const emotion = emotionData.detectedEmotion.toLowerCase();
    const consistencyRules = [
      {
        context: /crisis|emergency|urgent|help/,
        emotions: ["fearful", "anxious", "sad"],
        weight: 0.9
      },
      {
        context: /positive|good|success|achievement/,
        emotions: ["happy", "surprised"],
        weight: 0.8
      },
      {
        context: /conflict|argument|fight/,
        emotions: ["angry", "frustrated"],
        weight: 0.8
      },
      {
        context: /loss|death|grief/,
        emotions: ["sad", "depressed"],
        weight: 0.9
      },
      {
        context: /confused|uncertain|unclear/,
        emotions: ["confused", "anxious"],
        weight: 0.7
      }
    ];
    let maxConsistency = 0.5;
    for (const rule of consistencyRules) {
      if (rule.context.test(context)) {
        for (const expectedEmotion of rule.emotions) {
          if (emotion.includes(expectedEmotion)) {
            maxConsistency = Math.max(maxConsistency, rule.weight);
          }
        }
      }
    }
    return maxConsistency;
  }
  /**
   * Assess contextual appropriateness
   */
  assessContextualAppropriateness(emotionData) {
    const context = emotionData.context.toLowerCase();
    const emotion = emotionData.detectedEmotion.toLowerCase();
    const inappropriateCombo = [
      {
        context: /therapy|counseling|support/,
        emotion: /happy|excited/,
        threshold: 0.8
      },
      { context: /crisis|emergency/, emotion: /happy|amused/, threshold: 0.7 },
      { context: /grief|loss/, emotion: /happy|excited/, threshold: 0.9 }
    ];
    for (const combo of inappropriateCombo) {
      if (combo.context.test(context) && combo.emotion.test(emotion) && emotionData.confidence > combo.threshold) {
        return false;
      }
    }
    return true;
  }
  /**
   * Calculate overall confidence score
   */
  calculateOverallConfidence(basicConfidence, emotionConsistency, biasScore) {
    const weightedScore = basicConfidence * 0.4 + emotionConsistency * 0.3 + (1 - biasScore) * 0.3;
    return Math.max(0.1, Math.min(1, weightedScore));
  }
  /**
   * Generate issues list
   */
  generateIssues(basicValidation, patternBias, emotionConsistency, contextualAppropriate) {
    const issues = [...basicValidation.issues];
    if (patternBias.detected) {
      issues.push(`Bias patterns detected: ${patternBias.patterns.join(", ")}`);
    }
    if (emotionConsistency < this.CONSISTENCY_THRESHOLDS.LOW) {
      issues.push("Low emotion-context consistency");
    }
    if (!contextualAppropriate) {
      issues.push("Contextually inappropriate emotional response");
    }
    return issues;
  }
  /**
   * Generate recommendations
   */
  generateRecommendations(issues, biasScore, emotionData) {
    const recommendations = [];
    if (issues.includes("Low emotion detection confidence")) {
      recommendations.push(
        "Consider retraining emotion detection model with more diverse data"
      );
    }
    if (biasScore > 0.6) {
      recommendations.push(
        "Review training data for demographic bias in emotional responses"
      );
    }
    if (issues.some((issue) => issue.includes("Bias patterns"))) {
      recommendations.push(
        "Implement bias mitigation strategies in emotional AI responses"
      );
    }
    if (issues.includes("Low emotion-context consistency")) {
      recommendations.push(
        "Enhance context understanding in emotion detection algorithms"
      );
    }
    if (issues.includes("Contextually inappropriate")) {
      recommendations.push(
        "Review appropriateness filters for therapeutic contexts"
      );
    }
    if (emotionData.detectedEmotion.toLowerCase().includes("angry") && emotionData.confidence > 0.8) {
      recommendations.push(
        "Consider de-escalation protocols for high-confidence anger detection"
      );
    }
    return recommendations;
  }
  /**
   * Convert emotion data to therapeutic session for bias analysis
   */
  convertToTherapeuticSession(emotionData) {
    return {
      sessionId: emotionData.sessionId,
      timestamp: emotionData.timestamp || /* @__PURE__ */ new Date(),
      participantDemographics: emotionData.participantDemographics || {
        age: "",
        gender: "",
        ethnicity: "",
        primaryLanguage: ""
      },
      scenario: {
        // Provide a default TrainingScenario structure
        scenarioId: "emotion-validation",
        description: emotionData.context,
        type: "other",
        complexity: "beginner",
        tags: [],
        learningObjectives: []
      },
      content: {
        patientPresentation: emotionData.context,
        therapeuticInterventions: [],
        patientResponses: emotionData.responseText ? [emotionData.responseText] : [],
        sessionNotes: emotionData.responseText || emotionData.context || ""
      },
      aiResponses: [],
      expectedOutcomes: [],
      transcripts: [],
      metadata: {
        trainingInstitution: "emotion-validation-system",
        traineeId: "system",
        sessionDuration: 0,
        completionStatus: "completed"
      }
    };
  }
  /**
   * Update running metrics
   */
  updateRunningMetrics(_result) {
    const recentResults = this.recentValidations.slice(-20);
    const validCount = recentResults.filter((r) => r.isValid).length;
    this.metrics.accuracy = recentResults.length > 0 ? validCount / recentResults.length : 0.85;
    const confidenceSum = recentResults.reduce(
      (sum, r) => sum + r.confidence,
      0
    );
    this.metrics.averageConfidence = recentResults.length > 0 ? confidenceSum / recentResults.length : 0.75;
  }
  /**
   * Assess system health
   */
  assessSystemHealth() {
    const errorRate = this.metrics.processed > 0 ? this.metrics.errors / this.metrics.processed : 0;
    const { accuracy } = this.metrics;
    const biasRate = this.metrics.processed > 0 ? this.metrics.biasDetections / this.metrics.processed : 0;
    if (errorRate > 0.2 || accuracy < 0.6 || biasRate > 0.4) {
      return "critical";
    } else if (errorRate > 0.1 || accuracy < 0.75 || biasRate > 0.2) {
      return "warning";
    } else {
      return "healthy";
    }
  }
  /**
   * Add monitoring callback
   */
  addMonitoringCallback(callback) {
    this.monitoringCallbacks.push(callback);
  }
  /**
   * Remove monitoring callback
   */
  removeMonitoringCallback(callback) {
    const index = this.monitoringCallbacks.indexOf(callback);
    if (index > -1) {
      this.monitoringCallbacks.splice(index, 1);
    }
  }
  /**
   * Dispose of resources
   */
  async dispose() {
    try {
      this.stopContinuousValidation();
      if (this.biasDetectionEngine) {
        await this.biasDetectionEngine.dispose();
      }
      this.recentValidations = [];
      this.monitoringCallbacks = [];
      this._isInitialized = false;
      this.logger.info("Emotion validation pipeline disposed successfully");
    } catch (error) {
      this.logger.error("Error disposing pipeline", { error });
    }
  }
}
const emotionValidationPipeline = new EmotionValidationPipeline();

export { emotionValidationPipeline as e };
