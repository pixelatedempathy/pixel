;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6d68b81f-8b21-4846-943f-102e9ee578ca",e._sentryDebugIdIdentifier="sentry-dbid-6d68b81f-8b21-4846-943f-102e9ee578ca")}catch(e){}}();import './astro/server_jchCCyc7.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';
import { g as getBiasDetectionLogger } from './standardized-logger_CP35Y1OB.mjs';

const DEFAULT_CONFIG = {
  // Python service configuration
  pythonServiceUrl: process.env.BIAS_DETECTION_SERVICE_URL || "http://localhost:5000",
  pythonServiceTimeout: 3e4,
  // 30 seconds
  // Bias score thresholds (0.0 - 1.0 scale)
  thresholds: {
    warningLevel: 0.3,
    highLevel: 0.6,
    criticalLevel: 0.8
  },
  // Layer weight configuration for aggregated bias scoring
  layerWeights: {
    preprocessing: 0.25,
    modelLevel: 0.25,
    interactive: 0.25,
    evaluation: 0.25
  },
  // Evaluation metrics to compute
  evaluationMetrics: [
    "demographic_parity",
    "equalized_odds",
    "calibration",
    "individual_fairness"
  ],
  // Metrics collection configuration
  metricsConfig: {
    enableRealTimeMonitoring: true,
    metricsRetentionDays: 30,
    aggregationIntervals: ["1h", "1d", "1w", "1m"],
    dashboardRefreshRate: 60,
    // seconds
    exportFormats: ["json", "csv", "pdf"]
  },
  // Alert system configuration
  alertConfig: {
    enableSlackNotifications: false,
    enableEmailNotifications: false,
    slackWebhookUrl: process.env.BIAS_ALERT_SLACK_WEBHOOK,
    emailRecipients: [],
    alertCooldownMinutes: 1,
    escalationThresholds: {
      criticalResponseTimeMinutes: 15,
      highResponseTimeMinutes: 60
    }
  },
  // Report configuration
  reportConfig: {
    includeConfidentialityAnalysis: true,
    includeDemographicBreakdown: true,
    includeTemporalTrends: true,
    includeRecommendations: true,
    reportTemplate: "standard",
    exportFormats: ["json", "pdf"]
  },
  // Explanation configuration
  explanationConfig: {
    explanationMethod: "shap",
    maxFeatures: 10,
    includeCounterfactuals: true,
    generateVisualization: true
  },
  // Python service configuration
  pythonServiceConfig: {
    retries: 3,
    healthCheckInterval: 6e4
  },
  // Cache configuration
  cacheConfig: {
    enabled: true,
    ttl: 3e5,
    // 5 minutes
    maxSize: 1e3,
    compressionEnabled: true
  },
  // Security configuration
  securityConfig: {
    sessionTimeoutMs: 36e5,
    // 1 hour
    maxSessionSizeMB: 50,
    rateLimitPerMinute: 60
  },
  // Performance configuration
  performanceConfig: {
    maxConcurrentAnalyses: 10,
    analysisTimeoutMs: 12e4,
    // 2 minutes
    batchSize: 100
  },
  // HIPAA compliance settings
  hipaaCompliant: true,
  dataMaskingEnabled: true,
  auditLogging: true
};
function validateConfig(config) {
  const errors = [];
  if (config.thresholds) {
    const { thresholds } = config;
    if (thresholds.warningLevel !== void 0 && (thresholds.warningLevel < 0 || thresholds.warningLevel > 1)) {
      errors.push("thresholds.warningLevel must be between 0.0 and 1.0");
    }
    if (thresholds.highLevel !== void 0 && (thresholds.highLevel < 0 || thresholds.highLevel > 1)) {
      errors.push("thresholds.highLevel must be between 0.0 and 1.0");
    }
    if (thresholds.criticalLevel !== void 0 && (thresholds.criticalLevel < 0 || thresholds.criticalLevel > 1)) {
      errors.push("thresholds.criticalLevel must be between 0.0 and 1.0");
    }
    const warning = thresholds.warningLevel ?? DEFAULT_CONFIG.thresholds.warningLevel;
    const high = thresholds.highLevel ?? DEFAULT_CONFIG.thresholds.highLevel;
    const critical = thresholds.criticalLevel ?? DEFAULT_CONFIG.thresholds.criticalLevel;
    if (warning >= high || high >= critical) {
      errors.push(
        "Thresholds must be in ascending order: warningLevel < highLevel < criticalLevel"
      );
    }
  }
  if (config.layerWeights) {
    const weights = config.layerWeights;
    Object.entries(weights).forEach(([layer, weight]) => {
      if (weight !== void 0 && (weight < 0 || weight > 1)) {
        errors.push(
          `layerWeights.${layer} must be between 0.0 and 1.0, got ${weight}`
        );
      }
    });
    const total = (weights.preprocessing ?? 0) + (weights.modelLevel ?? 0) + (weights.interactive ?? 0) + (weights.evaluation ?? 0);
    if (Math.abs(total - 1) > 1e-3) {
      errors.push(
        `Layer weights must sum to 1.0, current sum is ${total.toFixed(3)}`
      );
    }
  }
  if (config.pythonServiceUrl) {
    try {
      const url = new URL(config.pythonServiceUrl);
      if (!["http:", "https:"].includes(url.protocol)) {
        errors.push("pythonServiceUrl must use http:// or https:// protocol");
      }
    } catch {
      errors.push(
        `pythonServiceUrl must be a valid URL, got: ${config.pythonServiceUrl}`
      );
    }
  }
  if (config.pythonServiceTimeout !== void 0 && (config.pythonServiceTimeout < 1e3 || config.pythonServiceTimeout > 3e5)) {
    errors.push(
      `pythonServiceTimeout must be between 1000ms and 300000ms, got ${config.pythonServiceTimeout}ms`
    );
  }
  if (config.evaluationMetrics) {
    const validMetrics = [
      "demographic_parity",
      "equalized_odds",
      "calibration",
      "individual_fairness"
    ];
    const invalidMetrics = config.evaluationMetrics.filter(
      (metric) => !validMetrics.includes(metric)
    );
    if (invalidMetrics.length > 0) {
      errors.push(
        `Invalid evaluation metrics: ${invalidMetrics.join(", ")}. Valid options: ${validMetrics.join(", ")}`
      );
    }
  }
  if (config.hipaaCompliant !== void 0 && typeof config.hipaaCompliant !== "boolean") {
    errors.push("hipaaCompliant must be a boolean value");
  }
  if (config.auditLogging !== void 0 && typeof config.auditLogging !== "boolean") {
    errors.push("auditLogging must be a boolean value");
  }
  if (errors.length > 0) {
    throw new Error(`Configuration validation failed: ${errors.join("; ")}`);
  }
}
function loadConfigFromEnv() {
  const envConfig = {};
  const thresholds = {};
  if (process.env.BIAS_WARNING_THRESHOLD) {
    thresholds.warningLevel = parseFloat(process.env.BIAS_WARNING_THRESHOLD);
  }
  if (process.env.BIAS_HIGH_THRESHOLD) {
    thresholds.highLevel = parseFloat(process.env.BIAS_HIGH_THRESHOLD);
  }
  if (process.env.BIAS_CRITICAL_THRESHOLD) {
    thresholds.criticalLevel = parseFloat(process.env.BIAS_CRITICAL_THRESHOLD);
  }
  if (Object.keys(thresholds).length > 0) {
    envConfig.thresholds = thresholds;
  }
  if (process.env.BIAS_DETECTION_SERVICE_URL) {
    envConfig.pythonServiceUrl = process.env.BIAS_DETECTION_SERVICE_URL;
  }
  if (process.env.BIAS_SERVICE_TIMEOUT) {
    envConfig.pythonServiceTimeout = parseInt(process.env.BIAS_SERVICE_TIMEOUT);
  }
  const layerWeights = {};
  if (process.env.BIAS_WEIGHT_PREPROCESSING) {
    layerWeights.preprocessing = parseFloat(
      process.env.BIAS_WEIGHT_PREPROCESSING
    );
  }
  if (process.env.BIAS_WEIGHT_MODEL_LEVEL) {
    layerWeights.modelLevel = parseFloat(process.env.BIAS_WEIGHT_MODEL_LEVEL);
  }
  if (process.env.BIAS_WEIGHT_INTERACTIVE) {
    layerWeights.interactive = parseFloat(process.env.BIAS_WEIGHT_INTERACTIVE);
  }
  if (process.env.BIAS_WEIGHT_EVALUATION) {
    layerWeights.evaluation = parseFloat(process.env.BIAS_WEIGHT_EVALUATION);
  }
  if (Object.keys(layerWeights).length > 0) {
    envConfig.layerWeights = layerWeights;
  }
  if (process.env.BIAS_EVALUATION_METRICS) {
    envConfig.evaluationMetrics = process.env.BIAS_EVALUATION_METRICS.split(
      ","
    ).map((m) => m.trim());
  }
  if (process.env.ENABLE_HIPAA_COMPLIANCE) {
    envConfig.hipaaCompliant = process.env.ENABLE_HIPAA_COMPLIANCE === "true";
  }
  if (process.env.ENABLE_AUDIT_LOGGING) {
    envConfig.auditLogging = process.env.ENABLE_AUDIT_LOGGING === "true";
  }
  if (process.env.ENABLE_DATA_MASKING) {
    envConfig.dataMaskingEnabled = process.env.ENABLE_DATA_MASKING === "true";
  }
  const alertConfig = {};
  if (process.env.BIAS_ALERT_SLACK_WEBHOOK) {
    alertConfig.slackWebhookUrl = process.env.BIAS_ALERT_SLACK_WEBHOOK;
    alertConfig.enableSlackNotifications = true;
  }
  if (process.env.BIAS_ALERT_EMAIL_RECIPIENTS) {
    alertConfig.emailRecipients = process.env.BIAS_ALERT_EMAIL_RECIPIENTS.split(
      ","
    ).map((e) => e.trim());
    alertConfig.enableEmailNotifications = true;
  }
  if (process.env.BIAS_ALERT_COOLDOWN_MINUTES) {
    alertConfig.alertCooldownMinutes = parseInt(
      process.env.BIAS_ALERT_COOLDOWN_MINUTES
    );
  }
  if (Object.keys(alertConfig).length > 0) {
    envConfig.alertConfig = alertConfig;
  }
  const metricsConfig = {};
  if (process.env.BIAS_METRICS_RETENTION_DAYS) {
    metricsConfig.metricsRetentionDays = parseInt(
      process.env.BIAS_METRICS_RETENTION_DAYS
    );
  }
  if (process.env.BIAS_DASHBOARD_REFRESH_RATE) {
    metricsConfig.dashboardRefreshRate = parseInt(
      process.env.BIAS_DASHBOARD_REFRESH_RATE
    );
  }
  if (process.env.BIAS_ENABLE_REAL_TIME_MONITORING) {
    metricsConfig.enableRealTimeMonitoring = process.env.BIAS_ENABLE_REAL_TIME_MONITORING === "true";
  }
  if (Object.keys(metricsConfig).length > 0) {
    envConfig.metricsConfig = metricsConfig;
  }
  return envConfig;
}
function deepMergeConfigs(baseConfig, ...overrideConfigs) {
  const merged = { ...baseConfig };
  for (const override of overrideConfigs) {
    Object.assign(merged, override);
    if (override.thresholds) {
      merged.thresholds = {
        ...merged.thresholds,
        ...override.thresholds
      };
    }
    if (override.layerWeights) {
      merged.layerWeights = {
        ...merged.layerWeights,
        ...override.layerWeights
      };
    }
    if (override.metricsConfig) {
      merged.metricsConfig = {
        ...merged.metricsConfig,
        ...override.metricsConfig
      };
    }
    if (override.alertConfig) {
      merged.alertConfig = {
        ...merged.alertConfig,
        ...override.alertConfig
      };
      if (override.alertConfig.escalationThresholds) {
        merged.alertConfig.escalationThresholds = {
          ...merged.alertConfig?.escalationThresholds,
          ...override.alertConfig.escalationThresholds
        };
      }
    }
    if (override.reportConfig) {
      merged.reportConfig = {
        ...merged.reportConfig,
        ...override.reportConfig
      };
    }
    if (override.explanationConfig) {
      merged.explanationConfig = {
        ...merged.explanationConfig,
        ...override.explanationConfig
      };
    }
  }
  return merged;
}
function createConfigWithEnvOverrides(userConfig) {
  const envConfig = loadConfigFromEnv();
  const combinedConfig = deepMergeConfigs(
    DEFAULT_CONFIG,
    envConfig,
    userConfig || {}
  );
  return combinedConfig;
}
function updateConfiguration(currentConfig, updates) {
  validateConfig(updates);
  return deepMergeConfigs(currentConfig, updates);
}
class BiasDetectionConfigManager {
  static instance;
  config;
  constructor() {
    this.config = createConfigWithEnvOverrides();
  }
  static getInstance() {
    if (!BiasDetectionConfigManager.instance) {
      BiasDetectionConfigManager.instance = new BiasDetectionConfigManager();
    }
    return BiasDetectionConfigManager.instance;
  }
  getConfig() {
    return this.config;
  }
  getThresholds() {
    return this.config.thresholds;
  }
  getLayerWeights() {
    return this.config.layerWeights;
  }
  getPythonServiceConfig() {
    const url = new URL(this.config.pythonServiceUrl);
    return {
      host: url.hostname,
      port: parseInt(url.port) || 5e3,
      timeout: this.config.pythonServiceTimeout,
      retries: this.config.pythonServiceConfig?.retries ?? 3,
      healthCheckInterval: this.config.pythonServiceConfig?.healthCheckInterval ?? 6e4
    };
  }
  getCacheConfig() {
    return {
      enabled: this.config.cacheConfig?.enabled ?? true,
      ttl: this.config.cacheConfig?.ttl ?? 3e5,
      maxSize: this.config.cacheConfig?.maxSize ?? 1e3,
      compressionEnabled: this.config.cacheConfig?.compressionEnabled ?? true
    };
  }
  getSecurityConfig() {
    return {
      encryptionEnabled: this.config.dataMaskingEnabled,
      auditLoggingEnabled: this.config.auditLogging,
      sessionTimeoutMs: this.config.securityConfig?.sessionTimeoutMs ?? 36e5,
      maxSessionSizeMB: this.config.securityConfig?.maxSessionSizeMB ?? 50,
      rateLimitPerMinute: this.config.securityConfig?.rateLimitPerMinute ?? 60
      // Note: Secrets are handled separately via secure environment variables
      // These should never be exposed to client-side code or logs
    };
  }
  getPerformanceConfig() {
    return {
      maxConcurrentAnalyses: this.config.performanceConfig?.maxConcurrentAnalyses ?? 10,
      analysisTimeoutMs: this.config.performanceConfig?.analysisTimeoutMs ?? 12e4,
      batchSize: this.config.performanceConfig?.batchSize ?? 100,
      enableMetrics: this.config.performanceConfig?.enableMetrics ?? this.config.metricsConfig.enableRealTimeMonitoring
    };
  }
  updateConfig(updates) {
    this.config = updateConfiguration(this.config, updates);
  }
  reloadFromEnvironment() {
    this.config = createConfigWithEnvOverrides();
  }
}
BiasDetectionConfigManager.getInstance();

const logger$3 = createBuildSafeLogger("PythonBiasDetectionBridge");
class PythonBiasDetectionBridge {
  // ms
  constructor(url = "http://localhost:5000", timeoutMs = 3e4) {
    this.url = url;
    this.timeoutMs = timeoutMs;
    this.baseUrl = url.replace(/\/$/, "");
    this.timeout = timeoutMs;
    this.authToken = process.env["BIAS_DETECTION_AUTH_TOKEN"];
  }
  baseUrl;
  timeout;
  authToken;
  retryAttempts = 3;
  retryDelay = 1e3;
  async initialize() {
    try {
      const response = await this.makeRequest(
        "/health",
        "GET"
      );
      if (response.status !== "healthy") {
        throw new Error(
          `Python service not healthy: ${response.message || "Unknown error"}`
        );
      }
      logger$3.info("PythonBiasDetectionBridge initialized successfully", {
        serviceUrl: this.baseUrl,
        serviceStatus: response.status
      });
    } catch (error) {
      logger$3.error("Failed to initialize PythonBiasDetectionBridge", { error });
      throw new Error(
        `Python service initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async makeRequest(endpoint, method = "POST", data) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "User-Agent": "Pixelated-Empathy-TypeScript-Client/1.0"
    };
    if (this.authToken) {
      headers["Authorization"] = `Bearer ${this.authToken}`;
    }
    const fetchOptions = {
      method,
      headers,
      signal: AbortSignal.timeout(this.timeout)
    };
    if (data && method === "POST") {
      fetchOptions.body = JSON.stringify(data);
    }
    let lastError = null;
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        logger$3.debug(
          `Making request to ${url} (attempt ${attempt}/${this.retryAttempts})`
        );
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        const result = await response.json();
        logger$3.debug(`Request successful: ${method} ${endpoint}`);
        return result;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        logger$3.warn(`Request attempt ${attempt} failed: ${lastError.message}`, {
          url,
          method,
          attempt,
          error: lastError.message
        });
        if (attempt < this.retryAttempts) {
          await new Promise(
            (resolve) => setTimeout(resolve, this.retryDelay * attempt)
          );
        }
      }
    }
    throw new Error(
      `Request failed after ${this.retryAttempts} attempts: ${lastError?.message || "Unknown error"}`
    );
  }
  async runPreprocessingAnalysis(sessionData) {
    try {
      const result = await this.analyze_session(
        sessionData
      );
      const layerResult = result.layer_results?.preprocessing;
      if (layerResult) {
        return {
          biasScore: layerResult.bias_score,
          linguisticBias: {
            genderBiasScore: layerResult.metrics?.linguistic_bias?.gender_bias_score || layerResult.bias_score * 0.5,
            racialBiasScore: layerResult.metrics?.linguistic_bias?.racial_bias_score || layerResult.bias_score * 0.4,
            ageBiasScore: layerResult.metrics?.linguistic_bias?.age_bias_score || layerResult.bias_score * 0.3,
            culturalBiasScore: layerResult.metrics?.linguistic_bias?.cultural_bias_score || layerResult.bias_score * 0.4,
            biasedTerms: [],
            sentimentAnalysis: {
              overallSentiment: 0.5,
              emotionalValence: 0.5,
              subjectivity: 0.5,
              demographicVariations: {}
            }
          },
          representationAnalysis: {
            demographicDistribution: {},
            underrepresentedGroups: [],
            overrepresentedGroups: [],
            diversityIndex: 0.5,
            intersectionalityAnalysis: []
          },
          dataQualityMetrics: {
            completeness: 0.8,
            consistency: 0.8,
            accuracy: 0.8,
            timeliness: 0.8,
            validity: 0.8,
            missingDataByDemographic: {}
          },
          recommendations: layerResult.recommendations || []
        };
      }
      return {
        biasScore: result.overall_bias_score * 0.8,
        linguisticBias: {
          genderBiasScore: result.overall_bias_score * 0.5,
          racialBiasScore: result.overall_bias_score * 0.4,
          ageBiasScore: result.overall_bias_score * 0.3,
          culturalBiasScore: result.overall_bias_score * 0.4,
          biasedTerms: [],
          sentimentAnalysis: {
            overallSentiment: 0.5,
            emotionalValence: 0.5,
            subjectivity: 0.5,
            demographicVariations: {}
          }
        },
        representationAnalysis: {
          demographicDistribution: {},
          underrepresentedGroups: [],
          overrepresentedGroups: [],
          diversityIndex: 0.5,
          intersectionalityAnalysis: []
        },
        dataQualityMetrics: {
          completeness: 0.8,
          consistency: 0.8,
          accuracy: 0.8,
          timeliness: 0.8,
          validity: 0.8,
          missingDataByDemographic: {}
        },
        recommendations: []
      };
    } catch (error) {
      logger$3.error("Preprocessing analysis failed", {
        error,
        sessionId: sessionData?.sessionId
      });
      throw error;
    }
  }
  async runModelLevelAnalysis(sessionData) {
    try {
      const result = await this.analyze_session(
        sessionData
      );
      const layerResult = result.layer_results?.model_level;
      if (layerResult) {
        return {
          biasScore: layerResult.bias_score,
          fairnessMetrics: {
            demographicParity: layerResult.metrics?.fairness?.demographic_parity || 0.75,
            equalizedOdds: layerResult.metrics?.fairness?.equalized_odds || 0.8,
            equalOpportunity: layerResult.metrics?.fairness?.equal_opportunity || 0.8,
            calibration: layerResult.metrics?.fairness?.calibration || 0.8,
            individualFairness: layerResult.metrics?.fairness?.individual_fairness || 0.8,
            counterfactualFairness: layerResult.metrics?.fairness?.counterfactual_fairness || 0.8
          },
          performanceMetrics: {
            accuracy: 0.8,
            precision: 0.8,
            recall: 0.8,
            f1Score: 0.8,
            auc: 0.8,
            calibrationError: 0.1,
            demographicBreakdown: {}
          },
          groupPerformanceComparison: [],
          recommendations: layerResult.recommendations || []
        };
      }
      return {
        biasScore: result.overall_bias_score * 1.1,
        fairnessMetrics: {
          demographicParity: 0.75,
          equalizedOdds: 0.8,
          equalOpportunity: 0.8,
          calibration: 0.8,
          individualFairness: 0.8,
          counterfactualFairness: 0.8
        },
        performanceMetrics: {
          accuracy: 0.8,
          precision: 0.8,
          recall: 0.8,
          f1Score: 0.8,
          auc: 0.8,
          calibrationError: 0.1,
          demographicBreakdown: {}
        },
        groupPerformanceComparison: [],
        recommendations: []
      };
    } catch (error) {
      logger$3.error("Model-level analysis failed", {
        error,
        sessionId: sessionData?.sessionId
      });
      throw error;
    }
  }
  async runInteractiveAnalysis(sessionData) {
    try {
      const result = await this.analyze_session(
        sessionData
      );
      const layerResult = result.layer_results?.interactive;
      if (layerResult) {
        return {
          biasScore: layerResult.bias_score,
          counterfactualAnalysis: {
            scenariosAnalyzed: layerResult.metrics?.interaction_patterns?.pattern_consistency || 3,
            biasDetected: layerResult.bias_score > 0.5,
            consistencyScore: Math.max(
              0.15,
              (1 - layerResult.bias_score) * 0.2
            ),
            problematicScenarios: []
          },
          featureImportance: [],
          whatIfScenarios: [],
          recommendations: layerResult.recommendations || []
        };
      }
      return {
        biasScore: result.overall_bias_score * 0.9,
        counterfactualAnalysis: {
          scenariosAnalyzed: 3,
          biasDetected: result.overall_bias_score > 0.5,
          consistencyScore: 0.15,
          problematicScenarios: []
        },
        featureImportance: [],
        whatIfScenarios: [],
        recommendations: []
      };
    } catch (error) {
      logger$3.error("Interactive analysis failed", {
        error,
        sessionId: sessionData?.sessionId
      });
      throw error;
    }
  }
  async runEvaluationAnalysis(sessionData) {
    try {
      const result = await this.analyze_session(
        sessionData
      );
      const layerResult = result.layer_results?.evaluation;
      if (layerResult) {
        return {
          biasScore: layerResult.bias_score,
          huggingFaceMetrics: {
            toxicity: layerResult.metrics?.performance_disparities?.bias_score || 0.05,
            bias: layerResult.bias_score,
            regard: {},
            stereotype: layerResult.bias_score * 0.8,
            fairness: 1 - layerResult.bias_score
          },
          customMetrics: {
            therapeuticBias: layerResult.bias_score * 0.9,
            culturalSensitivity: 1 - layerResult.bias_score * 0.7,
            professionalEthics: 1 - layerResult.bias_score * 0.8,
            patientSafety: 1 - layerResult.bias_score * 0.6
          },
          temporalAnalysis: {
            trendDirection: "stable",
            changeRate: 0,
            seasonalPatterns: [],
            interventionEffectiveness: []
          },
          recommendations: layerResult.recommendations || []
        };
      }
      return {
        biasScore: result.overall_bias_score * 1,
        huggingFaceMetrics: {
          toxicity: 0.05,
          bias: result.overall_bias_score,
          regard: {},
          stereotype: result.overall_bias_score * 0.8,
          fairness: 1 - result.overall_bias_score
        },
        customMetrics: {
          therapeuticBias: result.overall_bias_score * 0.9,
          culturalSensitivity: 1 - result.overall_bias_score * 0.7,
          professionalEthics: 1 - result.overall_bias_score * 0.8,
          patientSafety: 1 - result.overall_bias_score * 0.6
        },
        temporalAnalysis: {
          trendDirection: "stable",
          changeRate: 0,
          seasonalPatterns: [],
          interventionEffectiveness: []
        },
        recommendations: []
      };
    } catch (error) {
      logger$3.error("Evaluation analysis failed", {
        error,
        sessionId: sessionData?.sessionId
      });
      throw error;
    }
  }
  async generateComprehensiveReport(sessions, timeRange, options) {
    try {
      const requestData = {
        sessions: sessions.map((session) => ({
          session_id: session.sessionId,
          participant_demographics: session.participantDemographics,
          training_scenario: session.scenario,
          content: session.content,
          ai_responses: session.aiResponses || [],
          expected_outcomes: session.expectedOutcomes || [],
          transcripts: session.transcripts || [],
          metadata: session.metadata || {}
        })),
        time_range: timeRange,
        options: {
          format: options?.format || "json",
          include_raw_data: options?.includeRawData || false,
          include_trends: options?.includeTrends || true,
          include_recommendations: options?.includeRecommendations || true
        }
      };
      return await this.makeRequest(
        "/export",
        "POST",
        requestData
      );
    } catch (error) {
      logger$3.error("Report generation failed", {
        error,
        sessionCount: sessions.length
      });
      throw error;
    }
  }
  async updateConfiguration(config) {
    try {
      await this.makeRequest("/config", "POST", config);
      logger$3.info("Python service configuration updated successfully");
    } catch (error) {
      logger$3.error("Configuration update failed", { error });
      throw error;
    }
  }
  async explainBiasDetection(result, demographic, includeCounterfactuals = true) {
    try {
      const requestData = {
        analysis_result: result,
        demographic_group: demographic,
        include_counterfactuals: includeCounterfactuals
      };
      return await this.makeRequest("/explain", "POST", requestData);
    } catch (error) {
      logger$3.error("Bias explanation failed", { error });
      throw error;
    }
  }
  async analyze_session(sessionData) {
    try {
      if (!sessionData.participantDemographics) {
        throw new Error(
          `Missing participant demographics for session ${sessionData.sessionId}. Demographics are required for bias detection analysis.`
        );
      }
      const requestData = {
        session_id: sessionData.sessionId,
        participant_demographics: sessionData.participantDemographics,
        training_scenario: sessionData.scenario || {},
        content: sessionData.content || {
          patientPresentation: "Not provided",
          therapeuticInterventions: [],
          patientResponses: [],
          sessionNotes: ""
        },
        ai_responses: sessionData.aiResponses || [],
        expected_outcomes: sessionData.expectedOutcomes || [],
        transcripts: sessionData.transcripts || [],
        metadata: {
          ...sessionData.metadata,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          client: "typescript-engine",
          analysis_layers: [
            "preprocessing",
            "model_level",
            "interactive",
            "evaluation"
          ]
        }
      };
      const result = await this.makeRequest(
        "/analyze",
        "POST",
        requestData
      );
      const normalizedResult = {
        overall_bias_score: result.overall_bias_score || 0.5,
        confidence: result.confidence || 0.7,
        alert_level: result.alert_level || this.calculateAlertLevel(
          result.overall_bias_score || 0.5
        ),
        layer_results: result.layer_results || {
          preprocessing: {
            bias_score: 0.4,
            metrics: {},
            detected_biases: [],
            recommendations: [],
            layer: "preprocessing"
          },
          model_level: {
            bias_score: 0.5,
            metrics: {},
            detected_biases: [],
            recommendations: [],
            layer: "model_level"
          },
          interactive: {
            bias_score: 0.6,
            metrics: {},
            detected_biases: [],
            recommendations: [],
            layer: "interactive"
          },
          evaluation: {
            bias_score: 0.3,
            metrics: {},
            detected_biases: [],
            recommendations: [],
            layer: "evaluation"
          }
        },
        recommendations: result.recommendations || [],
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        session_id: sessionData.sessionId
      };
      logger$3.info("Session analysis completed", {
        sessionId: sessionData.sessionId,
        biasScore: normalizedResult.overall_bias_score,
        alertLevel: normalizedResult.alert_level
      });
      return normalizedResult;
    } catch (error) {
      logger$3.error("Session analysis failed", {
        error,
        sessionId: sessionData?.sessionId
      });
      return this.generateFallbackAnalysisResult(sessionData, error);
    }
  }
  calculateAlertLevel(biasScore) {
    if (biasScore >= 0.8) {
      return "critical";
    }
    if (biasScore >= 0.6) {
      return "high";
    }
    if (biasScore >= 0.4) {
      return "medium";
    }
    return "low";
  }
  generateFallbackAnalysisResult(sessionData, error) {
    logger$3.warn("Generating fallback analysis result due to service failure", {
      sessionId: sessionData?.sessionId,
      error: error instanceof Error ? error.message : String(error)
    });
    return {
      overall_bias_score: 0.5,
      // Neutral fallback score
      confidence: 0.3,
      // Low confidence for fallback
      alert_level: "medium",
      layer_results: {
        preprocessing: {
          bias_score: 0.4,
          metrics: { linguistic_bias: { overall_bias_score: 0.4 } },
          detected_biases: ["service_unavailable"],
          recommendations: [
            "Python service unavailable - using fallback analysis"
          ],
          layer: "preprocessing"
        },
        model_level: {
          bias_score: 0.5,
          metrics: {
            fairness: { equalized_odds: 0.7, demographic_parity: 0.6 }
          },
          detected_biases: ["service_unavailable"],
          recommendations: [
            "Python service unavailable - using fallback analysis"
          ],
          layer: "model_level"
        },
        interactive: {
          bias_score: 0.6,
          metrics: { interaction_patterns: { pattern_consistency: 3 } },
          detected_biases: ["service_unavailable"],
          recommendations: [
            "Python service unavailable - using fallback analysis"
          ],
          layer: "interactive"
        },
        evaluation: {
          bias_score: 0.3,
          metrics: {
            outcome_fairness: { bias_score: 0.3 },
            performance_disparities: { bias_score: 0.2 }
          },
          detected_biases: ["service_unavailable"],
          recommendations: [
            "Python service unavailable - using fallback analysis"
          ],
          layer: "evaluation"
        }
      },
      recommendations: [
        "Python bias detection service is currently unavailable",
        "Results are based on fallback analysis with limited accuracy",
        "Please retry analysis when service is restored"
      ],
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: sessionData?.sessionId || "unknown",
      fallback_mode: true,
      service_error: error instanceof Error ? error.message : String(error)
    };
  }
  // Metrics-specific public methods
  async sendMetricsBatch(metrics) {
    try {
      return await this.makeRequest("/metrics/batch", "POST", {
        metrics
      });
    } catch (error) {
      logger$3.warn("Failed to send metrics batch to Python service", {
        error,
        metricsCount: metrics.length
      });
      return {
        success: false,
        processed: 0,
        errors: [error instanceof Error ? error.message : String(error)]
      };
    }
  }
  async sendAnalysisMetric(metricData) {
    await this.makeRequest("/metrics/analysis", "POST", metricData);
  }
  async getDashboardMetrics(options) {
    if (options) {
      const queryParams = new URLSearchParams({
        time_range: options.time_range || "24h",
        include_details: options.include_details?.toString() || "false",
        aggregation_type: options.aggregation_type || "hourly"
      }).toString();
      return await this.makeRequest(
        `/dashboard?${queryParams}`,
        "GET"
      );
    }
    return await this.makeRequest("/dashboard", "GET");
  }
  async recordReportMetric(reportData) {
    await this.makeRequest("/metrics/report", "POST", reportData);
  }
  async getPerformanceMetrics() {
    return await this.makeRequest(
      "/metrics/performance",
      "GET"
    );
  }
  async getSessionData(sessionId) {
    return await this.makeRequest(
      `/sessions/${sessionId}`,
      "GET"
    );
  }
  async storeMetrics(storeData) {
    await this.makeRequest("/metrics/store", "POST", { metrics: storeData });
  }
  // Alert-specific public methods
  async registerAlertSystem(registrationData) {
    return await this.makeRequest(
      "/alerts/register",
      "POST",
      registrationData
    );
  }
  async checkAlerts(alertData) {
    return await this.makeRequest(
      "/alerts/check",
      "POST",
      alertData
    );
  }
  async storeAlerts(alertsData) {
    await this.makeRequest("/alerts/store", "POST", { alerts: alertsData });
  }
  async escalateAlert(escalationData) {
    return await this.makeRequest(
      "/alerts/escalate",
      "POST",
      escalationData
    );
  }
  async getActiveAlerts() {
    return await this.makeRequest("/alerts/active", "GET");
  }
  async acknowledgeAlert(acknowledgeData) {
    return await this.makeRequest(
      "/alerts/acknowledge",
      "POST",
      acknowledgeData
    );
  }
  async getRecentAlerts(timeRangeData) {
    return await this.makeRequest(
      "/alerts/recent",
      "POST",
      timeRangeData
    );
  }
  async getAlertStatistics(statisticsData) {
    return await this.makeRequest(
      "/alerts/statistics",
      "POST",
      statisticsData
    );
  }
  async unregisterAlertSystem(unregisterData) {
    return await this.makeRequest(
      "/alerts/unregister",
      "POST",
      unregisterData
    );
  }
  // Notification-specific public methods
  async sendNotification(notificationData) {
    await this.makeRequest("/notifications/send", "POST", notificationData);
  }
  async sendSystemNotification(systemNotificationData) {
    await this.makeRequest(
      "/notifications/system",
      "POST",
      systemNotificationData
    );
  }
  async dispose() {
    logger$3.info("PythonBiasDetectionBridge disposed");
  }
}

const logger$2 = getBiasDetectionLogger("metrics");
class BiasMetricsCollector {
  constructor(config, pythonBridge) {
    this.config = config;
    this.pythonBridge = pythonBridge || new PythonBiasDetectionBridge(
      config.pythonServiceUrl || "http://localhost:5000",
      config.pythonServiceTimeout || 3e4
    );
    this.localCache = /* @__PURE__ */ new Map();
  }
  pythonBridge;
  localCache = /* @__PURE__ */ new Map();
  aggregationInterval;
  async initialize() {
    try {
      await this.pythonBridge.initialize();
      logger$2.info(
        "BiasMetricsCollector initialized with Python service connection"
      );
      this.startAggregation();
    } catch (error) {
      logger$2.warn("BiasMetricsCollector falling back to local-only mode", {
        error
      });
      this.startAggregation();
    }
  }
  startAggregation() {
    this.aggregationInterval = setInterval(async () => {
      try {
        await this.flushLocalMetrics();
      } catch (error) {
        logger$2.error("Failed to flush metrics to Python service", { error });
      }
    }, 6e4);
  }
  async flushLocalMetrics() {
    if (this.localCache.size === 0) {
      return;
    }
    try {
      const metrics = Array.from(this.localCache.values());
      await this.pythonBridge.sendMetricsBatch(metrics);
      this.localCache.clear();
      logger$2.debug(`Flushed ${metrics.length} metrics to Python service`);
    } catch (error) {
      logger$2.warn("Failed to flush metrics, will retry next cycle", { error });
    }
  }
  async recordAnalysis(result, processingTimeMs) {
    const demographicGroups = result.demographics ? this.extractDemographicGroups(result.demographics) : [];
    const metricData = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: result.sessionId,
      overall_bias_score: result.overallBiasScore,
      alert_level: result.alertLevel,
      confidence: result.confidence,
      layer_scores: result.layerResults,
      demographic_groups: demographicGroups,
      processing_time_ms: processingTimeMs || 0
    };
    this.localCache.set(
      `analysis_${result.sessionId}_${Date.now()}`,
      metricData
    );
    try {
      await this.pythonBridge.sendAnalysisMetric(metricData);
    } catch (error) {
      logger$2.warn("Failed to send real-time metric, will retry in batch", {
        error
      });
    }
  }
  /**
   * Extract demographic groups from participant demographics
   */
  extractDemographicGroups(demographics) {
    const groups = [];
    if (demographics.age) {
      groups.push(`age:${demographics.age}`);
    }
    if (demographics.gender) {
      groups.push(`gender:${demographics.gender}`);
    }
    if (demographics.ethnicity) {
      groups.push(`ethnicity:${demographics.ethnicity}`);
    }
    if (demographics.primaryLanguage) {
      groups.push(`language:${demographics.primaryLanguage}`);
    }
    if (demographics.socioeconomicStatus) {
      groups.push(`socioeconomic:${demographics.socioeconomicStatus}`);
    }
    if (demographics.education) {
      groups.push(`education:${demographics.education}`);
    }
    if (demographics.region) {
      groups.push(`region:${demographics.region}`);
    }
    return groups;
  }
  async getMetrics(options) {
    try {
      return await this.pythonBridge.getDashboardMetrics({
        time_range: options?.time_range || "24h",
        include_details: options?.include_details || false,
        aggregation_type: options?.aggregation_type || "hourly"
      });
    } catch (error) {
      logger$2.warn("Failed to get metrics from Python service, using fallback", {
        error
      });
      return this.getFallbackMetrics(options);
    }
  }
  getFallbackMetrics(_options) {
    const localMetrics = Array.from(this.localCache.values()).slice();
    return {
      overall_stats: {
        total_sessions: localMetrics.length,
        average_bias_score: localMetrics.length > 0 ? localMetrics.reduce((sum, m) => sum + m.overall_bias_score, 0) / localMetrics.length : 0,
        alert_distribution: this.calculateLocalAlertDistribution(localMetrics)
      },
      trend_data: [],
      recent_alerts: [],
      summary: {
        total_sessions: localMetrics.length,
        average_bias_score: localMetrics.length > 0 ? localMetrics.reduce((sum, m) => sum + m.overall_bias_score, 0) / localMetrics.length : 0,
        alert_distribution: this.calculateLocalAlertDistribution(localMetrics)
      },
      demographics: {},
      performance_metrics: {
        average_response_time: 0,
        requests_per_second: 0,
        error_rate: 0.5,
        uptime_seconds: 0,
        health_status: "degraded"
      },
      recommendations: [
        "Python service unavailable - operating in fallback mode"
      ],
      cache_performance: {
        hit_rate: 0
      },
      system_metrics: {
        cpu_usage: 0
      }
    };
  }
  calculateLocalAlertDistribution(metrics) {
    const distribution = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0
    };
    metrics.forEach((metric) => {
      const level = metric.alert_level || "low";
      distribution[level] = (distribution[level] || 0) + 1;
    });
    return distribution;
  }
  async recordReportGeneration(report) {
    try {
      await this.pythonBridge.recordReportMetric({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        session_id: "report-generation",
        overall_bias_score: 0,
        alert_level: "low",
        confidence: 1,
        layer_scores: {},
        demographic_groups: [],
        processing_time_ms: report.metadata?.executionTimeMs || 0
      });
    } catch (error) {
      logger$2.warn("Failed to record report generation metric", { error });
    }
  }
  async getDashboardData(_options) {
    try {
      const response = await this.pythonBridge.getDashboardMetrics();
      return {
        summary: {
          totalSessions: response.summary?.total_sessions_analyzed || 0,
          averageBiasScore: response.summary?.average_bias_score || 0,
          highBiasSessions: response.summary?.high_risk_sessions || 0,
          totalAlerts: response.summary?.critical_alerts || 0,
          lastUpdated: /* @__PURE__ */ new Date()
        },
        alerts: [],
        // Dashboard endpoint doesn't return alerts, will need separate endpoint
        trends: {
          biasScoreOverTime: response.trends?.daily_bias_scores?.map(
            (score, index) => ({
              date: new Date(
                Date.now() - (6 - index) * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: score,
              sessionCount: 20 + Math.floor(Math.random() * 20),
              alertCount: response.trends?.alert_counts?.[index] || 0
            })
          ) || []
        },
        demographics: {
          totalParticipants: Object.values(
            response.demographics?.bias_by_age_group || {}
          ).reduce(
            (sum, count) => sum + (typeof count === "number" ? count * 100 : 0),
            0
          ),
          age: response.demographics?.bias_by_age_group || {},
          gender: response.demographics?.bias_by_gender || {},
          ethnicity: {}
          // Not provided by Python service currently
        },
        recentAnalyses: [],
        // Dashboard endpoint doesn't provide this, would need separate endpoint
        timestamp: /* @__PURE__ */ new Date(),
        systemMetrics: {
          memoryUsage: 0,
          cpuUsage: 0,
          cacheHitRate: 0,
          activeConnections: 0
        }
      };
    } catch (error) {
      logger$2.warn(
        "Failed to fetch dashboard data from Python service, returning fallback data",
        { error }
      );
      const localMetrics = Array.from(this.localCache.values());
      const currentTime = /* @__PURE__ */ new Date();
      return {
        summary: {
          totalSessions: localMetrics.length,
          averageBiasScore: localMetrics.length > 0 ? localMetrics.reduce((sum, m) => sum + m.overall_bias_score, 0) / localMetrics.length : 0,
          highBiasSessions: localMetrics.filter(
            (m) => m.overall_bias_score > 0.6
          ).length,
          totalAlerts: localMetrics.filter(
            (m) => m.alert_level === "high" || m.alert_level === "critical"
          ).length,
          lastUpdated: currentTime
        },
        alerts: [],
        trends: {
          biasScoreOverTime: [
            {
              date: new Date(
                currentTime.getTime() - 6 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.2,
              sessionCount: 25,
              alertCount: 2
            },
            {
              date: new Date(
                currentTime.getTime() - 5 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.25,
              sessionCount: 28,
              alertCount: 3
            },
            {
              date: new Date(
                currentTime.getTime() - 4 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.18,
              sessionCount: 22,
              alertCount: 1
            },
            {
              date: new Date(
                currentTime.getTime() - 3 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.3,
              sessionCount: 30,
              alertCount: 4
            },
            {
              date: new Date(
                currentTime.getTime() - 2 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.22,
              sessionCount: 26,
              alertCount: 2
            },
            {
              date: new Date(
                currentTime.getTime() - 1 * 24 * 60 * 60 * 1e3
              ).toISOString(),
              biasScore: 0.19,
              sessionCount: 24,
              alertCount: 1
            },
            {
              date: currentTime.toISOString(),
              biasScore: 0.24,
              sessionCount: 27,
              alertCount: 3
            }
          ]
        },
        demographics: {
          totalParticipants: localMetrics.length * 5,
          // Approximate scaling
          age: {
            "18-24": 20,
            "25-34": 35,
            "35-44": 25,
            "45-54": 15,
            "55+": 5
          },
          gender: {
            male: 45,
            female: 50,
            other: 5
          },
          ethnicity: {
            asian: 25,
            black: 20,
            hispanic: 30,
            white: 20,
            other: 5
          }
        },
        recentAnalyses: localMetrics.slice(-5).map((metric) => ({
          sessionId: metric.session_id,
          timestamp: metric.timestamp,
          overallBiasScore: metric.overall_bias_score,
          alertLevel: metric.alert_level,
          demographics: {
            age: "25-35",
            gender: "female",
            ethnicity: "hispanic",
            primaryLanguage: "en"
          }
        })),
        systemMetrics: {
          memoryUsage: 0,
          cpuUsage: 0,
          cacheHitRate: 0,
          activeConnections: 0
        }
      };
    }
  }
  async getSummaryMetrics(options) {
    try {
      const dashboardData = await this.getDashboardData(options);
      return {
        totalAnalyses: dashboardData?.summary?.totalAnalyses || 0,
        averageBiasScore: dashboardData?.summary?.averageBiasScore || 0,
        alertDistribution: dashboardData?.charts?.alertDistribution || {},
        trendsOverTime: dashboardData?.charts?.trendsOverTime || [],
        systemHealth: dashboardData?.summary?.systemHealth || "unknown"
      };
    } catch (error) {
      logger$2.error("Failed to get summary metrics", { error });
      return {
        totalAnalyses: 0,
        averageBiasScore: 0,
        alertDistribution: {},
        trendsOverTime: [],
        systemHealth: "error"
      };
    }
  }
  async getDemographicMetrics(options) {
    try {
      const dashboardData = await this.getDashboardData(options);
      return dashboardData?.charts?.demographicBreakdown || {};
    } catch (error) {
      logger$2.error("Failed to get demographic metrics", { error });
      return {};
    }
  }
  async getPerformanceMetrics() {
    try {
      const response = await this.pythonBridge.getPerformanceMetrics();
      return {
        responseTime: response.average_response_time || 0,
        throughput: response.requests_per_second || 0,
        errorRate: response.error_rate || 0,
        uptime: response.uptime_seconds || 0,
        systemHealth: response.health_status || "unknown"
      };
    } catch (error) {
      logger$2.error("Failed to fetch performance metrics", { error });
      return {
        responseTime: 0,
        throughput: 0,
        errorRate: 1,
        uptime: 0,
        systemHealth: "error"
      };
    }
  }
  async getCurrentPerformanceMetrics() {
    return this.getPerformanceMetrics();
  }
  async getSessionAnalysis(sessionId) {
    try {
      return await this.pythonBridge.getSessionData(sessionId);
    } catch (error) {
      logger$2.error("Failed to fetch session analysis", { error, sessionId });
      return null;
    }
  }
  async getStoredSessionAnalysis(sessionId) {
    return this.getSessionAnalysis(sessionId);
  }
  async getRecentSessionCount() {
    try {
      const metrics = await this.getMetrics({ time_range: "1h" });
      return metrics.overall_stats.total_sessions;
    } catch (error) {
      logger$2.error("Failed to get recent session count", { error });
      return 0;
    }
  }
  async getActiveAnalysesCount() {
    return this.localCache.size;
  }
  async storeAnalysisResult(result, processingTimeMs) {
    try {
      this.localCache.set(result.sessionId, {
        timestamp: result.timestamp.toISOString(),
        session_id: result.sessionId,
        overall_bias_score: result.overallBiasScore,
        alert_level: result.alertLevel,
        confidence: result.confidence,
        layer_scores: result.layerResults,
        demographic_groups: result.demographics ? this.extractDemographicGroups(result.demographics) : [],
        processing_time_ms: processingTimeMs || 0
      });
      await this.recordAnalysis(result, processingTimeMs);
      try {
        await this.pythonBridge.storeMetrics([
          {
            timestamp: result.timestamp.toISOString(),
            session_id: result.sessionId,
            overall_bias_score: result.overallBiasScore,
            alert_level: result.alertLevel,
            confidence: result.confidence,
            layer_scores: result.layerResults,
            demographic_groups: result.demographics ? this.extractDemographicGroups(result.demographics) : [],
            processing_time_ms: processingTimeMs || 0
          }
        ]);
      } catch (error) {
        logger$2.debug(
          "Python service storage not available, using local storage only",
          {
            error,
            sessionId: result.sessionId
          }
        );
      }
      logger$2.debug("Analysis result stored", {
        sessionId: result.sessionId,
        processingTimeMs: processingTimeMs || 0
      });
    } catch (error) {
      logger$2.error("Failed to store analysis result", {
        error,
        sessionId: result.sessionId
      });
      throw error;
    }
  }
  async dispose() {
    if (this.aggregationInterval) {
      clearInterval(this.aggregationInterval);
    }
    await this.flushLocalMetrics();
    await this.pythonBridge.dispose();
    logger$2.info("BiasMetricsCollector disposed");
  }
}

class PerformanceMonitor {
  startTime = Date.now();
  requestCount = 0;
  errorCount = 0;
  totalResponseTime = 0;
  /**
   * Get performance snapshot for the specified time range
   */
  getSnapshot(_timeRange) {
    const now = Date.now();
    const uptime = now - this.startTime;
    const memoryUsage = process.memoryUsage().heapUsed;
    return {
      timestamp: now,
      metrics: [
        { name: "uptime", value: uptime, unit: "ms" },
        { name: "requests_total", value: this.requestCount, unit: "count" },
        { name: "errors_total", value: this.errorCount, unit: "count" },
        { name: "memory_usage", value: memoryUsage, unit: "bytes" }
      ],
      summary: {
        averageResponseTime: this.requestCount > 0 ? this.totalResponseTime / this.requestCount : 0,
        requestCount: this.requestCount,
        errorRate: this.requestCount > 0 ? this.errorCount / this.requestCount : 0
      }
    };
  }
  /**
   * Record request timing
   */
  recordRequestTiming(_endpoint, _method, duration, statusCode) {
    this.requestCount++;
    this.totalResponseTime += duration;
    if (statusCode >= 400) {
      this.errorCount++;
    }
  }
  /**
   * Record bias analysis performance
   */
  recordAnalysis(duration, _biasScore) {
    this.requestCount++;
    this.totalResponseTime += duration;
  }
  /**
   * Export metrics in specified format
   */
  exportMetrics(format) {
    const snapshot = this.getSnapshot();
    if (format === "prometheus") {
      return [
        "# HELP bias_detection_requests_total Total number of requests",
        "# TYPE bias_detection_requests_total counter",
        `bias_detection_requests_total ${snapshot.summary.requestCount}`,
        "",
        "# HELP bias_detection_errors_total Total number of errors",
        "# TYPE bias_detection_errors_total counter",
        `bias_detection_errors_total ${this.errorCount}`,
        "",
        "# HELP bias_detection_response_time_avg Average response time",
        "# TYPE bias_detection_response_time_avg gauge",
        `bias_detection_response_time_avg ${snapshot.summary.averageResponseTime}`
      ].join("\n");
    }
    return JSON.stringify(snapshot, null, 2);
  }
}
const performanceMonitor = new PerformanceMonitor();

const logger$1 = getBiasDetectionLogger("alerts");
class BiasAlertSystem {
  constructor(config, pythonBridge) {
    this.config = config;
    this.pythonBridge = pythonBridge || new PythonBiasDetectionBridge(
      config.pythonServiceUrl || "http://localhost:5000",
      config.timeout || 3e4
    );
    this.alertQueue = [];
    this.monitoringCallbacks = [];
    this.notificationChannels = /* @__PURE__ */ new Map();
    this.alertRules = [];
    this.initializeDefaultAlertRules();
    this.initializeNotificationChannels();
  }
  monitoringCallbacks = [];
  pythonBridge;
  alertQueue = [];
  notificationChannels = /* @__PURE__ */ new Map();
  alertRules = [];
  initializeDefaultAlertRules() {
    this.alertRules = [
      {
        id: "high-bias-score",
        condition: (result) => result.overallBiasScore > 0.7,
        severity: "high",
        message: "High bias score detected in therapeutic session",
        escalationDelay: 3e5,
        // 5 minutes
        recipients: ["therapist-supervisor", "ethics-committee"]
      },
      {
        id: "critical-bias-score",
        condition: (result) => result.overallBiasScore > 0.9,
        severity: "critical",
        message: "Critical bias score detected - immediate intervention required",
        escalationDelay: 6e4,
        // 1 minute
        recipients: ["chief-supervisor", "ethics-committee", "system-admin"]
      },
      {
        id: "demographic-disparity",
        condition: (result) => this.detectDemographicDisparity(result),
        severity: "medium",
        message: "Significant demographic bias disparity detected",
        escalationDelay: 6e5,
        // 10 minutes
        recipients: ["diversity-officer", "therapist-supervisor"]
      },
      {
        id: "low-confidence",
        condition: (result) => result.confidence < 0.5 && result.overallBiasScore > 0.5,
        severity: "medium",
        message: "Low confidence bias detection with elevated score",
        escalationDelay: 9e5,
        // 15 minutes
        recipients: ["technical-team", "therapist-supervisor"]
      },
      {
        id: "high-error-rate",
        condition: () => performanceMonitor.getSnapshot().summary.errorRate > 0.1,
        severity: "high",
        message: "High error rate detected in bias analysis requests",
        escalationDelay: 3e5,
        // 5 minutes
        recipients: ["system-admin", "technical-team"]
      },
      {
        id: "critical-error-rate",
        condition: () => performanceMonitor.getSnapshot().summary.errorRate > 0.25,
        severity: "critical",
        message: "Critical error rate detected in bias analysis requests",
        escalationDelay: 6e4,
        // 1 minute
        recipients: ["system-admin", "technical-team"]
      },
      {
        id: "slow-response-time",
        condition: () => performanceMonitor.getSnapshot().summary.averageResponseTime > 2e3,
        severity: "high",
        message: "Slow response time detected for bias analysis requests",
        escalationDelay: 3e5,
        // 5 minutes
        recipients: ["system-admin", "technical-team"]
      },
      {
        id: "critical-response-time",
        condition: () => performanceMonitor.getSnapshot().summary.averageResponseTime > 5e3,
        severity: "critical",
        message: "Critical response time detected for bias analysis requests",
        escalationDelay: 6e4,
        // 1 minute
        recipients: ["system-admin", "technical-team"]
      }
    ];
  }
  initializeNotificationChannels() {
    this.notificationChannels.set("email", {
      enabled: this.config.notifications?.email?.enabled || false,
      config: this.config.notifications?.email || {}
    });
    this.notificationChannels.set("slack", {
      enabled: this.config.notifications?.slack?.enabled || false,
      config: this.config.notifications?.slack || {}
    });
    this.notificationChannels.set("webhook", {
      enabled: this.config.notifications?.webhook?.enabled || false,
      config: this.config.notifications?.webhook || {}
    });
  }
  /**
   * Detect demographic disparities by comparing bias metrics across demographic groups
   * Returns true if significant disparities are found, even when overall bias score is low
   */
  detectDemographicDisparity(result) {
    try {
      const MIN_OVERALL_BIAS_FOR_BASIC_CHECK = 0.6;
      const LAYER_DISPARITY_THRESHOLD = 0.25;
      const HIGH_INDIVIDUAL_BIAS_THRESHOLD = 0.7;
      if (!result.demographics || !result.layerResults) {
        return result.overallBiasScore > MIN_OVERALL_BIAS_FOR_BASIC_CHECK;
      }
      const hasElevatedOverallBias = result.overallBiasScore > MIN_OVERALL_BIAS_FOR_BASIC_CHECK;
      const layerBiasScores = [
        result.layerResults.preprocessing?.biasScore || 0,
        result.layerResults.modelLevel?.biasScore || 0,
        result.layerResults.interactive?.biasScore || 0,
        result.layerResults.evaluation?.biasScore || 0
      ];
      const hasHighLayerBias = layerBiasScores.some(
        (score) => score > HIGH_INDIVIDUAL_BIAS_THRESHOLD
      );
      const maxLayerBias = Math.max(...layerBiasScores);
      const minLayerBias = Math.min(...layerBiasScores);
      const layerDisparity = maxLayerBias - minLayerBias;
      const hasSignificantLayerDisparity = layerDisparity > LAYER_DISPARITY_THRESHOLD;
      const demographicDisparityIndicators = this.analyzeDemographicLayerDisparities(result);
      const fairnessDisparityIndicators = this.analyzeFairnessMetricDisparities(result);
      const counterfactualDisparityIndicators = this.analyzeCounterfactualDisparities(result);
      const disparityIndicators = [
        hasElevatedOverallBias,
        hasHighLayerBias,
        hasSignificantLayerDisparity,
        ...demographicDisparityIndicators,
        ...fairnessDisparityIndicators,
        ...counterfactualDisparityIndicators
      ];
      const positiveIndicators = disparityIndicators.filter(
        (indicator) => indicator
      ).length;
      const totalIndicators = disparityIndicators.length;
      const INDICATOR_THRESHOLD_PERCENTAGE = 0.3;
      const multipleIndicatorsDetected = positiveIndicators >= Math.ceil(totalIndicators * INDICATOR_THRESHOLD_PERCENTAGE);
      const shouldAlert = multipleIndicatorsDetected || hasElevatedOverallBias || hasHighLayerBias;
      if (shouldAlert) {
        logger$1.info("Demographic disparity detected", {
          sessionId: result.sessionId,
          overallBiasScore: result.overallBiasScore,
          layerDisparity,
          positiveIndicators,
          totalIndicators,
          demographicData: result.demographics ? {
            age: result.demographics.age,
            gender: result.demographics.gender,
            ethnicity: result.demographics.ethnicity
          } : null,
          layerScores: {
            preprocessing: layerBiasScores[0],
            modelLevel: layerBiasScores[1],
            interactive: layerBiasScores[2],
            evaluation: layerBiasScores[3]
          }
        });
      }
      return shouldAlert;
    } catch (error) {
      logger$1.error("Error in demographic disparity detection", {
        error: error instanceof Error ? error.message : String(error),
        sessionId: result.sessionId
      });
      return result.overallBiasScore > 0.6;
    }
  }
  /**
   * Analyze demographic-specific patterns in layer results
   */
  analyzeDemographicLayerDisparities(result) {
    const indicators = [];
    try {
      if (result.layerResults.preprocessing?.representationAnalysis) {
        const repr = result.layerResults.preprocessing.representationAnalysis;
        const hasUnderrepresentedGroups = repr.underrepresentedGroups?.length > 0;
        const hasLowDiversity = repr.diversityIndex < 0.3;
        indicators.push(hasUnderrepresentedGroups, hasLowDiversity);
      }
      if (result.layerResults.modelLevel?.fairnessMetrics) {
        const fairness = result.layerResults.modelLevel.fairnessMetrics;
        const hasDemographicParityIssue = fairness.demographicParity < 0.6;
        const hasEqualizedOddsIssue = fairness.equalizedOdds < 0.6;
        indicators.push(hasDemographicParityIssue, hasEqualizedOddsIssue);
      }
      if (result.layerResults.interactive?.counterfactualAnalysis?.problematicScenarios) {
        const scenarios = result.layerResults.interactive.counterfactualAnalysis.problematicScenarios;
        const hasAgeDisparity = scenarios.some(
          (scenario) => scenario.biasType === "age_bias" && scenario.severity === "medium"
        );
        const hasGenderDisparity = scenarios.some(
          (scenario) => scenario.biasType === "gender_bias" && scenario.severity === "medium"
        );
        indicators.push(hasAgeDisparity, hasGenderDisparity);
      }
    } catch (error) {
      logger$1.warn("Error analyzing demographic layer disparities", { error });
    }
    return indicators;
  }
  /**
   * Analyze fairness metric disparities across demographics
   */
  analyzeFairnessMetricDisparities(result) {
    const indicators = [];
    try {
      if (result.layerResults.evaluation?.huggingFaceMetrics) {
        const metrics = result.layerResults.evaluation.huggingFaceMetrics;
        const hasHighBias = metrics.bias > 0.3;
        const hasHighStereotype = metrics.stereotype > 0.2;
        const regardPositive = metrics.regard ? metrics.regard["positive"] || 0 : 0;
        const regardNegative = metrics.regard ? metrics.regard["negative"] || 0 : 0;
        const regardDisparity = Math.abs(regardPositive - regardNegative);
        const hasRegardDisparity = regardDisparity > 0.4;
        indicators.push(hasHighBias, hasHighStereotype, hasRegardDisparity);
      }
      if (result.layerResults.evaluation?.customMetrics) {
        const custom = result.layerResults.evaluation.customMetrics;
        const hasTherapeuticBias = custom.therapeuticBias > 0.2;
        const hasLowCulturalSensitivity = custom.culturalSensitivity < 0.7;
        indicators.push(hasTherapeuticBias, hasLowCulturalSensitivity);
      }
    } catch (error) {
      logger$1.warn("Error analyzing fairness metric disparities", { error });
    }
    return indicators;
  }
  /**
   * Analyze counterfactual analysis for demographic disparities
   */
  analyzeCounterfactualDisparities(result) {
    const indicators = [];
    try {
      if (result.layerResults.interactive?.featureImportance) {
        const features = result.layerResults.interactive.featureImportance;
        features.forEach((feature) => {
          if (feature.feature === "participant_age" && feature.biasContribution > 0.2) {
            indicators.push(true);
          }
          if (feature.demographicSensitivity) {
            const sensitivityValues = Object.values(
              feature.demographicSensitivity
            );
            const maxSensitivity = Math.max(...sensitivityValues);
            const minSensitivity = Math.min(...sensitivityValues);
            const sensitivityDisparity = maxSensitivity - minSensitivity;
            if (sensitivityDisparity > 0.3) {
              indicators.push(true);
            }
          }
        });
      }
      if (result.layerResults.evaluation?.temporalAnalysis?.interventionEffectiveness) {
        const interventions = result.layerResults.evaluation.temporalAnalysis.interventionEffectiveness;
        interventions.forEach((intervention) => {
          if (intervention.improvement < 0.1) {
            indicators.push(true);
          }
          if (intervention.sustainabilityScore < 0.7) {
            indicators.push(true);
          }
        });
      }
    } catch (error) {
      logger$1.warn("Error analyzing counterfactual disparities", { error });
    }
    return indicators;
  }
  async initialize() {
    try {
      await this.pythonBridge.initialize();
      try {
        await this.pythonBridge.registerAlertSystem({
          system_id: "typescript-alert-system",
          alert_levels: ["low", "medium", "high", "critical"],
          enabled: true
        });
        logger$1.info("BiasAlertSystem registered with Python service", {
          alertRules: this.alertRules.length,
          notificationChannels: this.notificationChannels.size
        });
      } catch (alertRegisterError) {
        logger$1.warn(
          "Python service does not support alert registration, operating in local-only mode",
          {
            error: alertRegisterError
          }
        );
      }
      logger$1.info(
        "BiasAlertSystem initialized successfully (local processing enabled)",
        {
          alertRules: this.alertRules.length,
          notificationChannels: this.notificationChannels.size
        }
      );
    } catch (error) {
      logger$1.warn("BiasAlertSystem falling back to local-only mode", { error });
      logger$1.info("BiasAlertSystem initialized in fallback mode");
    }
  }
  async checkAlerts(result) {
    try {
      logger$1.debug("Checking alerts for session", {
        sessionId: result.sessionId
      });
      let serverAlertsResponse = { alerts: [] };
      try {
        serverAlertsResponse = await this.pythonBridge.checkAlerts({
          sessionId: result.sessionId,
          alertLevel: result.alertLevel,
          message: `Alert for session ${result.sessionId}`,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (alertCheckError) {
        logger$1.debug(
          "Python service does not support alert checking, using local processing only",
          {
            error: alertCheckError,
            sessionId: result.sessionId
          }
        );
      }
      const serverAlerts = serverAlertsResponse?.alerts || [];
      const localAlerts = this.evaluateAnalysisAlerts(result);
      const allAlerts = [...serverAlerts, ...localAlerts];
      if (allAlerts.length > 0) {
        logger$1.info(
          `Generated ${allAlerts.length} alerts for session ${result.sessionId}`,
          {
            alertLevels: allAlerts.map((a) => a.level)
          }
        );
        for (const alert of allAlerts) {
          if (alert.level === "high" || alert.level === "critical") {
            await this.sendNotifications(alert);
          }
        }
        this.triggerMonitoringCallbacks(allAlerts, result);
      }
      if (allAlerts.length > 0) {
        try {
          await this.pythonBridge.storeAlerts(
            allAlerts.map((alert) => ({
              sessionId: alert.sessionId,
              alertLevel: alert.level,
              // Cast to satisfy AlertData interface
              message: alert.message,
              timestamp: alert.timestamp.toISOString()
            }))
          );
        } catch (alertStoreError) {
          logger$1.debug(
            "Python service does not support alert storage, alerts stored locally only",
            {
              error: alertStoreError,
              sessionId: result.sessionId,
              alertCount: allAlerts.length
            }
          );
        }
      }
    } catch (error) {
      logger$1.error("Alert checking failed", {
        error,
        sessionId: result.sessionId
      });
      throw error;
    }
  }
  async checkSystemAlerts() {
    try {
      logger$1.debug("Checking system-level alerts");
      const systemAlerts = this.evaluateSystemAlerts();
      if (systemAlerts.length > 0) {
        logger$1.info(`Generated ${systemAlerts.length} system-level alerts`, {
          alertLevels: systemAlerts.map((a) => a.level)
        });
        for (const alert of systemAlerts) {
          if (alert.level === "high" || alert.level === "critical") {
            await this.sendNotifications(alert);
          }
        }
      }
    } catch (error) {
      logger$1.error("System alert checking failed", { error });
      throw error;
    }
  }
  evaluateAnalysisAlerts(result) {
    const alerts = [];
    for (const rule of this.alertRules) {
      try {
        if (rule.condition.length > 0 && rule.condition(result)) {
          const alert = {
            id: `${rule.id}-${result.sessionId}-${Date.now()}`,
            timestamp: /* @__PURE__ */ new Date(),
            level: rule.severity,
            sessionId: result.sessionId,
            message: rule.message,
            acknowledged: false,
            escalated: false,
            ruleId: rule.id,
            biasScore: result.overallBiasScore,
            recipients: rule.recipients
          };
          alerts.push(alert);
          this.alertQueue.push(alert);
          this.scheduleEscalation(alert, rule.escalationDelay);
        }
      } catch (error) {
        logger$1.error(`Error evaluating alert rule ${rule.id}`, {
          error,
          sessionId: result.sessionId
        });
      }
    }
    return alerts;
  }
  evaluateSystemAlerts() {
    const alerts = [];
    for (const rule of this.alertRules) {
      try {
        if (rule.condition.length === 0 && rule.condition(null)) {
          const alert = {
            id: `${rule.id}-${Date.now()}`,
            timestamp: /* @__PURE__ */ new Date(),
            level: rule.severity,
            sessionId: "system",
            message: rule.message,
            acknowledged: false,
            escalated: false,
            ruleId: rule.id,
            recipients: rule.recipients
          };
          alerts.push(alert);
          this.alertQueue.push(alert);
          this.scheduleEscalation(alert, rule.escalationDelay);
        }
      } catch (error) {
        logger$1.error(`Error evaluating system alert rule ${rule.id}`, { error });
      }
    }
    return alerts;
  }
  scheduleEscalation(alert, delayMs) {
    setTimeout(async () => {
      try {
        if (!alert.acknowledged && !alert.escalated) {
          alert.escalated = true;
          await this.escalateAlert(alert);
        }
      } catch (error) {
        logger$1.error("Alert escalation failed", { error, alertId: alert.id });
      }
    }, delayMs);
  }
  async escalateAlert(alert) {
    logger$1.warn("Escalating unacknowledged alert", {
      alertId: alert.id,
      level: alert.level
    });
    await this.sendNotifications({
      ...alert,
      message: `[ESCALATED] ${alert.message}`,
      escalated: true
    });
    try {
      await this.pythonBridge.escalateAlert({
        alert_id: alert.id,
        escalation_level: 1,
        escalated_to: alert.recipients || [],
        reason: "Unacknowledged alert escalation"
      });
    } catch (error) {
      logger$1.debug(
        "Python service does not support alert escalation, escalation logged locally only",
        {
          error,
          alertId: alert.id
        }
      );
    }
  }
  triggerMonitoringCallbacks(alerts, result) {
    if (this.monitoringCallbacks.length === 0) {
      return;
    }
    const callbackData = {
      alerts,
      sessionId: result.sessionId,
      timestamp: result.timestamp,
      overallBiasScore: result.overallBiasScore,
      alertLevel: result.alertLevel,
      recommendations: result.recommendations,
      highestSeverity: this.getHighestSeverity(alerts)
    };
    this.monitoringCallbacks.forEach((callback) => {
      try {
        callback(callbackData);
      } catch (error) {
        logger$1.error("Error in monitoring callback", { error });
      }
    });
  }
  getHighestSeverity(alerts) {
    const severityOrder = {
      low: 1,
      medium: 2,
      high: 3,
      critical: 4
    };
    return alerts.reduce((highest, alert) => {
      return (severityOrder[alert.level] || 0) > (severityOrder[highest] || 0) ? alert.level : highest;
    }, "low");
  }
  async sendNotifications(alert) {
    const notifications = [];
    for (const [channel, config] of Array.from(
      this.notificationChannels.entries()
    )) {
      if (config.enabled) {
        notifications.push(
          this.sendNotificationToChannel(channel, alert, config.config)
        );
      }
    }
    try {
      await Promise.allSettled(notifications);
    } catch (error) {
      logger$1.error("Some notifications failed to send", {
        error,
        alertId: alert.id
      });
    }
  }
  async sendNotificationToChannel(channel, alert, config) {
    try {
      await this.pythonBridge.sendNotification({
        message: alert.message,
        recipients: alert.recipients || [],
        severity: alert.level,
        metadata: {
          channel,
          config,
          alert,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      });
      logger$1.debug(`Notification sent via ${channel}`, { alertId: alert.id });
    } catch (error) {
      logger$1.debug(
        `Python service does not support notifications for ${channel}, logging notification locally`,
        {
          error,
          alertId: alert.id,
          alertLevel: alert.level,
          message: alert.message
        }
      );
      logger$1.warn(
        `[${channel.toUpperCase()}] Alert notification: ${alert.message}`,
        {
          alertId: alert.id,
          level: alert.level,
          sessionId: alert.sessionId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      );
    }
  }
  addMonitoringCallback(callback) {
    this.monitoringCallbacks.push(callback);
    logger$1.debug("Monitoring callback added", {
      totalCallbacks: this.monitoringCallbacks.length
    });
  }
  removeMonitoringCallback(callback) {
    const index = this.monitoringCallbacks.indexOf(callback);
    if (index > -1) {
      this.monitoringCallbacks.splice(index, 1);
      logger$1.debug("Monitoring callback removed", {
        totalCallbacks: this.monitoringCallbacks.length
      });
    }
  }
  async getActiveAlerts() {
    try {
      const serverAlerts = await this.pythonBridge.getActiveAlerts();
      const localActive = this.alertQueue.filter((alert) => !alert.acknowledged);
      return [...serverAlerts || [], ...localActive];
    } catch (error) {
      logger$1.error("Failed to fetch active alerts", { error });
      return this.alertQueue.filter((alert) => !alert.acknowledged);
    }
  }
  async acknowledgeAlert(alertId, acknowledgedBy) {
    try {
      await this.pythonBridge.acknowledgeAlert({
        alert_id: alertId,
        acknowledged_by: acknowledgedBy,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const localAlert = this.alertQueue.find((alert) => alert.id === alertId);
      if (localAlert) {
        localAlert.acknowledged = true;
      }
      logger$1.info("Alert acknowledged", { alertId, acknowledgedBy });
    } catch (error) {
      logger$1.error("Failed to acknowledge alert", { error, alertId });
      throw error;
    }
  }
  async sendSystemNotification(message, recipients) {
    try {
      await this.pythonBridge.sendSystemNotification({
        message,
        recipients,
        severity: "medium",
        system_component: "bias-detection-engine"
      });
      logger$1.info("System notification sent", { message, recipients });
    } catch (error) {
      logger$1.error("Failed to send system notification", {
        error,
        message,
        recipients
      });
      throw error;
    }
  }
  async getRecentAlerts(timeRangeMs = 864e5) {
    try {
      const response = await this.pythonBridge.getRecentAlerts({
        start: new Date(Date.now() - timeRangeMs).toISOString(),
        end: (/* @__PURE__ */ new Date()).toISOString()
      });
      return response || [];
    } catch (error) {
      logger$1.error("Failed to fetch recent alerts", { error });
      const cutoffTime = new Date(Date.now() - timeRangeMs);
      return this.alertQueue.filter((alert) => alert.timestamp >= cutoffTime);
    }
  }
  async getAlertStatistics(timeRangeMs = 864e5) {
    try {
      const response = await this.pythonBridge.getAlertStatistics({
        start: new Date(Date.now() - timeRangeMs).toISOString(),
        end: (/* @__PURE__ */ new Date()).toISOString()
      });
      return {
        total: response.total_alerts,
        byLevel: response.alerts_by_level,
        acknowledged: 0,
        // Would need to be calculated
        escalated: 0,
        // Would need to be calculated
        averageResponseTime: response.average_response_time
      };
    } catch (error) {
      logger$1.error("Failed to fetch alert statistics", { error });
      const cutoffTime = new Date(Date.now() - timeRangeMs);
      const recentAlerts = this.alertQueue.filter(
        (alert) => alert.timestamp >= cutoffTime
      );
      const byLevel = {};
      recentAlerts.forEach((alert) => {
        byLevel[alert.level] = (byLevel[alert.level] || 0) + 1;
      });
      return {
        total: recentAlerts.length,
        byLevel,
        acknowledged: recentAlerts.filter((a) => a.acknowledged).length,
        escalated: recentAlerts.filter((a) => a.escalated).length,
        averageResponseTime: 0
        // Would need more data to calculate properly
      };
    }
  }
  async dispose() {
    try {
      await this.pythonBridge.unregisterAlertSystem({
        system_id: "typescript-alert-system"
      });
      this.alertQueue.length = 0;
      this.monitoringCallbacks.length = 0;
      await this.pythonBridge.dispose();
      logger$1.info("BiasAlertSystem disposed successfully");
    } catch (error) {
      logger$1.error("Error disposing BiasAlertSystem", { error });
    }
  }
  async processAlert(alertData) {
    try {
      const alert = {
        id: `${alertData.sessionId}-${Date.now()}`,
        timestamp: /* @__PURE__ */ new Date(),
        level: alertData.level,
        sessionId: alertData.sessionId,
        message: `Alert triggered for session ${alertData.sessionId} with bias score ${alertData.biasScore}`,
        acknowledged: false,
        escalated: false,
        biasScore: alertData.biasScore
      };
      this.alertQueue.push(alert);
      await this.sendNotifications(alert);
      this.triggerMonitoringCallbacks([alert], alertData.analysisResult);
      logger$1.info("Alert processed successfully", {
        alertId: alert.id,
        sessionId: alertData.sessionId,
        level: alertData.level
      });
    } catch (error) {
      logger$1.error("Failed to process alert", {
        error,
        sessionId: alertData.sessionId
      });
      throw error;
    }
  }
}

class BiasDetectionError extends Error {
  code;
  severity;
  category;
  timestamp;
  context;
  recoverable;
  userMessage;
  constructor(message, code, severity, category, options = {}) {
    super(message, { cause: options.cause });
    this.name = this.constructor.name;
    this.code = code;
    this.severity = severity;
    this.category = category;
    this.timestamp = /* @__PURE__ */ new Date();
    this.context = options.context || {};
    this.recoverable = options.recoverable ?? false;
    this.userMessage = options.userMessage;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  /**
   * Get a user-friendly error message
   */
  getUserMessage() {
    return this.userMessage || this.getDefaultUserMessage();
  }
  /**
   * Get default user message (to be overridden by subclasses)
   */
  getDefaultUserMessage() {
    return "An error occurred in the bias detection system. Please contact support.";
  }
  /**
   * Convert error to JSON for logging and transmission
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      severity: this.severity,
      category: this.category,
      timestamp: this.timestamp.toISOString(),
      context: this.context,
      recoverable: this.recoverable,
      userMessage: this.userMessage,
      stack: this.stack
    };
  }
  /**
   * Create a sanitized version for client transmission
   */
  toClientSafe() {
    return {
      code: this.code,
      severity: this.severity,
      category: this.category,
      userMessage: this.getUserMessage(),
      recoverable: this.recoverable
    };
  }
}
class BiasConfigurationError extends BiasDetectionError {
  constructor(message, options = {}) {
    super(message, "BIAS_CONFIG_ERROR", "high", "configuration", {
      ...options,
      context: {
        ...options.context,
        configProperty: options.configProperty,
        configValue: options.configValue
      }
    });
  }
  getDefaultUserMessage() {
    return "Configuration error occurred. Please check your bias detection settings.";
  }
}
class BiasThresholdError extends BiasConfigurationError {
  thresholdName;
  value;
  min;
  max;
  constructor(thresholdName, value, min, max, options = {}) {
    super(
      `Invalid threshold '${thresholdName}': value ${value} must be between ${min} and ${max}`,
      {
        ...options,
        configProperty: thresholdName,
        configValue: value,
        context: {
          ...options.context,
          min,
          max,
          actualValue: value
        }
      }
    );
    this.thresholdName = thresholdName;
    this.value = value;
    this.min = min;
    this.max = max;
  }
  getDefaultUserMessage() {
    return "Bias threshold configuration is invalid. Please use values between 0 and 1.";
  }
}
class BiasSessionValidationError extends BiasDetectionError {
  sessionId;
  validationField;
  constructor(sessionId, field, message, options = {}) {
    super(message, "BIAS_SESSION_VALIDATION_ERROR", "medium", "validation", {
      ...options,
      context: {
        ...options.context,
        sessionId,
        field
      }
    });
    this.sessionId = sessionId;
    this.validationField = field;
  }
  getDefaultUserMessage() {
    return "Session data validation failed. Please check the input data format.";
  }
}
class BiasPythonServiceError extends BiasDetectionError {
  serviceUrl;
  httpStatus;
  constructor(message, options = {}) {
    super(message, "BIAS_PYTHON_SERVICE_ERROR", "high", "service", options);
    this.serviceUrl = options.serviceUrl;
    this.httpStatus = options.httpStatus;
  }
  getDefaultUserMessage() {
    return "Bias detection service is temporarily unavailable. Please try again later.";
  }
}
class BiasSystemError extends BiasDetectionError {
  component;
  constructor(message, options = {}) {
    const { component, context, ...rest } = options;
    super(message, "BIAS_SYSTEM_ERROR", "critical", "system", {
      ...rest,
      context: {
        ...context ?? {},
        component
      }
    });
    this.component = component;
  }
  getDefaultUserMessage() {
    return "A critical system error occurred in the bias detection engine. Please contact support immediately.";
  }
}
class BiasInitializationError extends BiasSystemError {
  constructor(component, message, options = {}) {
    super(`Failed to initialize ${component}: ${message}`, {
      ...options,
      component,
      context: {
        ...options.context,
        component,
        initializationError: message
      }
    });
  }
}

function anonymizeSession(session) {
  const anonymizedSession = JSON.parse(JSON.stringify(session));
  anonymizedSession.participantDemographics = {
    age: "ANONYMIZED",
    gender: "ANONYMIZED",
    ethnicity: "ANONYMIZED",
    primaryLanguage: "ANONYMIZED",
    socioeconomicStatus: "ANONYMIZED",
    education: "ANONYMIZED",
    region: "ANONYMIZED",
    culturalBackground: ["ANONYMIZED"],
    disabilityStatus: "ANONYMIZED"
  };
  anonymizedSession.content = {
    patientPresentation: "ANONYMIZED",
    therapeuticInterventions: ["ANONYMIZED"],
    patientResponses: ["ANONYMIZED"],
    sessionNotes: "ANONYMIZED",
    assessmentResults: "ANONYMIZED"
  };
  anonymizedSession.metadata.traineeId = "ANONYMIZED";
  anonymizedSession.metadata.supervisorId = "ANONYMIZED";
  return anonymizedSession;
}

const logger = createBuildSafeLogger("BiasDetectionAudit");
class InMemoryAuditStorage {
  entries = [];
  async store(entry) {
    this.entries.push(entry);
    logger.info("Audit log entry stored", {
      entryId: entry.id,
      action: entry.action.type,
      userId: entry.userId
    });
  }
  async retrieve(filters) {
    let filtered = this.entries;
    if (filters.userId) {
      filtered = filtered.filter((e) => e.userId === filters.userId);
    }
    if (filters.userEmail) {
      filtered = filtered.filter((e) => e.userEmail === filters.userEmail);
    }
    if (filters.actionType) {
      filtered = filtered.filter((e) => e.action.type === filters.actionType);
    }
    if (filters.actionCategory) {
      filtered = filtered.filter(
        (e) => e.action.category === filters.actionCategory
      );
    }
    if (filters.resource) {
      filtered = filtered.filter((e) => e.resource === filters.resource);
    }
    if (filters.sensitivityLevel) {
      filtered = filtered.filter(
        (e) => e.action.sensitivityLevel === filters.sensitivityLevel
      );
    }
    if (filters.timeRange) {
      filtered = filtered.filter(
        (e) => e.timestamp >= filters.timeRange.start && e.timestamp <= filters.timeRange.end
      );
    }
    if (filters.success !== void 0) {
      filtered = filtered.filter((e) => e.success === filters.success);
    }
    if (filters.sessionId) {
      filtered = filtered.filter((e) => e.sessionId === filters.sessionId);
    }
    filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    const offset = filters.offset || 0;
    const limit = filters.limit || 100;
    return filtered.slice(offset, offset + limit);
  }
  async count(filters) {
    const { limit: _limit, offset: _offset, ...filterParams } = filters;
    const entries = await this.retrieve(filterParams);
    return entries.length;
  }
  async delete(entryIds) {
    this.entries = this.entries.filter((e) => !entryIds.includes(e.id));
    logger.warn("Audit log entries deleted", { count: entryIds.length });
  }
  async archive(beforeDate) {
    const toArchive = this.entries.filter((e) => e.timestamp < beforeDate);
    this.entries = this.entries.filter((e) => e.timestamp >= beforeDate);
    logger.info("Audit log entries archived", {
      count: toArchive.length,
      beforeDate
    });
    return toArchive.length;
  }
}
class BiasDetectionAuditLogger {
  storage;
  encryptionEnabled;
  retentionPolicies;
  constructor(storage, encryptionEnabled = true, retentionPolicies = []) {
    this.storage = storage || new InMemoryAuditStorage();
    this.encryptionEnabled = encryptionEnabled;
    this.retentionPolicies = retentionPolicies.length > 0 ? retentionPolicies : this.getDefaultRetentionPolicies();
  }
  /**
   * Log a user action for audit purposes
   */
  async logAction(user, action, resource, details, request, sessionId, success = true, errorMessage) {
    try {
      const resourceId = details["resourceId"];
      const entry = {
        id: this.generateAuditId(),
        timestamp: /* @__PURE__ */ new Date(),
        userId: user.userId,
        userEmail: user.email,
        action,
        resource,
        details: this.sanitizeDetails(details, action.sensitivityLevel),
        ipAddress: request.ipAddress,
        userAgent: request.userAgent,
        success,
        ...resourceId && { resourceId },
        ...sessionId && { sessionId },
        ...errorMessage && { errorMessage }
      };
      await this.storage.store(entry);
      if (action.sensitivityLevel === "high" || action.sensitivityLevel === "critical") {
        logger.warn("High-sensitivity action logged", {
          userId: user.userId,
          action: action.type,
          resource,
          success
        });
      }
    } catch (error) {
      logger.error("Failed to log audit entry", {
        userId: user.userId,
        action: action.type,
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
  /**
   * Log data access for HIPAA compliance
   */
  async logDataAccess(user, dataType, dataIds, accessReason, request, approvedBy, retentionPeriod = 30, anonymized = false) {
    const dataAccessLog = {
      id: this.generateAuditId(),
      timestamp: /* @__PURE__ */ new Date(),
      userId: user.userId,
      dataType,
      dataIds,
      accessReason,
      retentionPeriod,
      anonymized,
      ...approvedBy && { approvedBy }
    };
    const action = {
      type: "read",
      category: "user-data",
      description: `Accessed ${dataType}: ${accessReason}`,
      sensitivityLevel: this.determineSensitivityLevel(
        dataType,
        dataIds.length
      )
    };
    await this.logAction(
      user,
      action,
      `data-access-${dataType}`,
      {
        dataAccessLog,
        dataCount: dataIds.length,
        anonymized
      },
      request
    );
  }
  /**
   * Log bias analysis session
   */
  async logBiasAnalysis(user, sessionId, demographics, biasScore, alertLevel, request, success = true, errorMessage) {
    const action = {
      type: "create",
      category: "bias-analysis",
      description: `Performed bias analysis on session ${sessionId}`,
      sensitivityLevel: alertLevel === "critical" || alertLevel === "high" ? "high" : "medium"
    };
    await this.logAction(
      user,
      action,
      "bias-analysis",
      {
        sessionId,
        demographics: this.anonymizeDemographics(demographics),
        biasScore,
        alertLevel
      },
      request,
      sessionId,
      success,
      errorMessage
    );
  }
  /**
   * Log configuration changes
   */
  async logConfigurationChange(user, update, request) {
    const action = {
      type: "update",
      category: "configuration",
      description: `Updated ${update.section} configuration`,
      sensitivityLevel: update.changes.some(
        (c) => c.impact === "critical" || c.impact === "high"
      ) ? "high" : "medium"
    };
    await this.logAction(
      user,
      action,
      "configuration",
      {
        configUpdate: update,
        changesCount: update.changes.length,
        requiresRestart: update.changes.some((c) => c.requiresRestart)
      },
      request
    );
  }
  /**
   * Log authentication events
   */
  async logAuthentication(userId, userEmail, actionType, request, success = true, errorMessage) {
    const user = {
      userId,
      email: userEmail,
      role: {
        id: "unknown",
        name: "viewer",
        description: "Unknown role",
        level: 1
      },
      permissions: []
    };
    const action = {
      type: actionType,
      category: "authentication",
      description: `User ${actionType}`,
      sensitivityLevel: "medium"
    };
    await this.logAction(
      user,
      action,
      "authentication",
      {
        authenticationEvent: actionType,
        timestamp: /* @__PURE__ */ new Date()
      },
      request,
      void 0,
      success,
      errorMessage
    );
  }
  /**
   * Retrieve audit logs with filtering
   */
  async getAuditLogs(filters) {
    return await this.storage.retrieve(filters);
  }
  /**
   * Generate compliance report
   */
  async generateComplianceReport(period, includeViolations = true) {
    const auditTrail = await this.storage.retrieve({
      timeRange: period,
      limit: 1e4
      // Large limit for comprehensive report
    });
    const violations = includeViolations ? await this.detectViolations(auditTrail) : [];
    const recommendations = await this.generateRecommendations(
      auditTrail,
      violations
    );
    const dataRetentionStatus = await this.getDataRetentionStatus();
    const encryptionStatus = await this.getEncryptionStatus();
    const complianceScore = this.calculateComplianceScore(
      auditTrail,
      violations
    );
    return {
      id: this.generateAuditId(),
      generatedAt: /* @__PURE__ */ new Date(),
      period,
      complianceScore,
      violations,
      recommendations,
      auditTrail: auditTrail.slice(0, 100),
      // Include sample of audit trail
      dataRetentionStatus,
      encryptionStatus
    };
  }
  /**
   * Clean up old audit logs based on retention policies
   */
  async cleanupOldLogs() {
    let totalArchived = 0;
    const totalDeleted = 0;
    for (const policy of this.retentionPolicies) {
      const cutoffDate = /* @__PURE__ */ new Date();
      cutoffDate.setDate(cutoffDate.getDate() - policy.retentionPeriod);
      if (policy.archiveBeforeDelete) {
        const archived = await this.storage.archive(cutoffDate);
        totalArchived += archived;
      } else {
        logger.info("Retention policy requires immediate deletion", {
          dataType: policy.dataType,
          cutoffDate
        });
      }
    }
    return { archived: totalArchived, deleted: totalDeleted };
  }
  // =============================================================================
  // PRIVATE HELPER METHODS
  // =============================================================================
  generateAuditId() {
    return `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  sanitizeDetails(details, sensitivityLevel) {
    if (sensitivityLevel === "low") {
      return details;
    }
    const sanitized = { ...details };
    if (sensitivityLevel === "high" || sensitivityLevel === "critical") {
      if (sanitized["demographics"]) {
        sanitized["demographics"] = this.anonymizeDemographics(
          sanitized["demographics"]
        );
      }
      if (sanitized["sessionContent"]) {
        sanitized["sessionContent"] = "[REDACTED]";
      }
    }
    return sanitized;
  }
  anonymizeDemographics(demographics) {
    const result = {
      age: demographics.age,
      gender: demographics.gender,
      ethnicity: demographics.ethnicity,
      primaryLanguage: demographics.primaryLanguage,
      // Only include socioeconomicStatus if it exists
      ...demographics.socioeconomicStatus && {
        socioeconomicStatus: demographics.socioeconomicStatus
      }
      // Remove more specific identifiers, don't include region
    };
    return result;
  }
  determineSensitivityLevel(dataType, recordCount) {
    if (dataType === "demographics" || dataType === "session-data") {
      return recordCount > 100 ? "critical" : recordCount > 10 ? "high" : "medium";
    }
    return recordCount > 1e3 ? "high" : "medium";
  }
  async detectViolations(auditTrail) {
    const violations = [];
    const failedLogins = auditTrail.filter(
      (e) => e.action.type === "login" && !e.success
    );
    if (failedLogins.length > 10) {
      violations.push({
        id: this.generateAuditId(),
        type: "unauthorized-access",
        severity: "high",
        description: `${failedLogins.length} failed login attempts detected`,
        detectedAt: /* @__PURE__ */ new Date(),
        remediation: [
          "Review failed login attempts",
          "Implement account lockout policies",
          "Enable multi-factor authentication"
        ]
      });
    }
    const timeGaps = this.detectTimeGaps(auditTrail);
    if (timeGaps.length > 0) {
      violations.push({
        id: this.generateAuditId(),
        type: "missing-audit",
        severity: "medium",
        description: `${timeGaps.length} gaps detected in audit trail`,
        detectedAt: /* @__PURE__ */ new Date(),
        remediation: [
          "Investigate audit logging system",
          "Ensure continuous logging",
          "Implement audit log monitoring"
        ]
      });
    }
    return violations;
  }
  async generateRecommendations(auditTrail, violations) {
    const recommendations = [];
    const highSensitivityAccess = auditTrail.filter(
      (e) => e.action.sensitivityLevel === "high" || e.action.sensitivityLevel === "critical"
    );
    if (highSensitivityAccess.length > 0) {
      recommendations.push({
        id: this.generateAuditId(),
        category: "access-control",
        priority: "high",
        title: "Implement Additional Authorization for High-Sensitivity Data",
        description: "High-sensitivity data access detected. Consider implementing additional authorization controls.",
        implementationSteps: [
          "Implement multi-factor authentication for high-sensitivity data",
          "Add approval workflows for critical data access",
          "Implement time-limited access tokens"
        ],
        timeline: "2-4 weeks",
        complianceStandards: ["HIPAA", "SOC2"]
      });
    }
    for (const violation of violations) {
      if (violation.type === "unauthorized-access") {
        recommendations.push({
          id: this.generateAuditId(),
          category: "access-control",
          priority: "critical",
          title: "Strengthen Authentication Controls",
          description: "Multiple unauthorized access attempts detected.",
          implementationSteps: violation.remediation,
          timeline: "1-2 weeks",
          complianceStandards: ["HIPAA", "SOC2"]
        });
      }
    }
    return recommendations;
  }
  detectTimeGaps(auditTrail) {
    const gaps = [];
    const sortedEntries = auditTrail.sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
    );
    for (let i = 1; i < sortedEntries.length; i++) {
      const currentEntry = sortedEntries[i];
      const previousEntry = sortedEntries[i - 1];
      if (!currentEntry || !previousEntry) {
        continue;
      }
      const timeDiff = currentEntry.timestamp.getTime() - previousEntry.timestamp.getTime();
      const hoursDiff = timeDiff / (1e3 * 60 * 60);
      if (hoursDiff > 24) {
        gaps.push({
          start: previousEntry.timestamp,
          end: currentEntry.timestamp
        });
      }
    }
    return gaps;
  }
  calculateComplianceScore(auditTrail, violations) {
    let score = 100;
    for (const violation of violations) {
      switch (violation.severity) {
        case "critical":
          score -= 25;
          break;
        case "high":
          score -= 15;
          break;
        case "medium":
          score -= 10;
          break;
        case "low":
          score -= 5;
          break;
      }
    }
    const failedActions = auditTrail.filter((e) => !e.success);
    const failureRate = failedActions.length / auditTrail.length;
    score -= failureRate * 20;
    return Math.max(score, 0);
  }
  async getDataRetentionStatus() {
    const totalRecords = await this.storage.count({});
    const nearExpiryDate = /* @__PURE__ */ new Date();
    nearExpiryDate.setDate(nearExpiryDate.getDate() + 30);
    return {
      totalRecords,
      recordsNearExpiry: 0,
      // Would be calculated based on retention policies
      expiredRecords: 0,
      // Would be calculated based on retention policies
      retentionPolicies: this.retentionPolicies,
      lastCleanup: /* @__PURE__ */ new Date()
      // Would track actual cleanup dates
    };
  }
  async getEncryptionStatus() {
    return {
      dataAtRest: {
        encrypted: this.encryptionEnabled,
        algorithm: "AES-256-GCM",
        keyRotationDate: /* @__PURE__ */ new Date()
      },
      dataInTransit: {
        encrypted: true,
        protocol: "TLS 1.3",
        certificateExpiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3)
        // 1 year from now
      },
      backups: {
        encrypted: this.encryptionEnabled,
        location: "encrypted-storage",
        lastBackup: /* @__PURE__ */ new Date()
      }
    };
  }
  getDefaultRetentionPolicies() {
    return [
      {
        dataType: "audit-logs",
        retentionPeriod: 2555,
        // 7 years for HIPAA compliance
        autoDelete: false,
        archiveBeforeDelete: true,
        approvalRequired: true
      },
      {
        dataType: "session-data",
        retentionPeriod: 1825,
        // 5 years
        autoDelete: false,
        archiveBeforeDelete: true,
        approvalRequired: true
      },
      {
        dataType: "analysis-results",
        retentionPeriod: 1095,
        // 3 years
        autoDelete: false,
        archiveBeforeDelete: true,
        approvalRequired: false
      },
      {
        dataType: "system-logs",
        retentionPeriod: 365,
        // 1 year
        autoDelete: true,
        archiveBeforeDelete: false,
        approvalRequired: false
      }
    ];
  }
}
let auditLoggerInstance = null;
function getAuditLogger(storage, encryptionEnabled, retentionPolicies) {
  if (!auditLoggerInstance) {
    auditLoggerInstance = new BiasDetectionAuditLogger(
      storage,
      encryptionEnabled,
      retentionPolicies
    );
  }
  return auditLoggerInstance;
}

class BiasDetectionEngine {
  config;
  pythonBridge;
  metricsCollector;
  alertSystem;
  auditLogger;
  isInitialized = false;
  monitoringActive = false;
  monitoringInterval = void 0;
  monitoringCallbacks = [];
  logger;
  // Add missing properties for real-time monitoring
  sessionMetrics = /* @__PURE__ */ new Map();
  performanceMetrics = {
    startTime: /* @__PURE__ */ new Date(),
    requestCount: 0,
    totalResponseTime: 0,
    errorCount: 0
  };
  // Additional properties that tests expect
  auditLogs = [];
  // Aliases for backward compatibility with tests
  get isMonitoring() {
    return this.monitoringActive;
  }
  get pythonService() {
    return this.pythonBridge;
  }
  constructor(config) {
    if (config) {
      this.validateInputConfig(config);
    }
    this.config = createConfigWithEnvOverrides(config);
    if (this.config.hipaaCompliant) ;
    this.logger = getBiasDetectionLogger("engine");
    validateConfig(this.config);
    this.pythonBridge = new PythonBiasDetectionBridge(
      this.config.pythonServiceUrl,
      this.config.pythonServiceTimeout
    );
    this.metricsCollector = new BiasMetricsCollector(
      this.config,
      this.pythonBridge
    );
    this.alertSystem = new BiasAlertSystem(this.config, this.pythonBridge);
    this.auditLogger = getAuditLogger(void 0, this.config.hipaaCompliant);
    this.sessionMetrics = /* @__PURE__ */ new Map();
    this.auditLogs = [];
    this.monitoringCallbacks = [];
    this.performanceMetrics = {
      startTime: /* @__PURE__ */ new Date(),
      requestCount: 0,
      totalResponseTime: 0,
      errorCount: 0
    };
    this.logger.info("BiasDetectionEngine created with configuration", {
      thresholds: this.config.thresholds,
      pythonServiceUrl: this.config.pythonServiceUrl,
      hipaaCompliant: this.config.hipaaCompliant,
      auditLogging: this.config.auditLogging
    });
  }
  /**
   * Validate input configuration for common errors
   */
  validateInputConfig(config) {
    if (config.thresholds) {
      const { thresholds } = config;
      if (thresholds.warningLevel !== void 0 && thresholds.warningLevel < 0) {
        throw new BiasThresholdError(
          "warningLevel",
          thresholds.warningLevel,
          0,
          1
        );
      }
      if (thresholds.highLevel !== void 0 && thresholds.highLevel < 0) {
        throw new BiasThresholdError("highLevel", thresholds.highLevel, 0, 1);
      }
      if (thresholds.criticalLevel !== void 0 && thresholds.criticalLevel < 0) {
        throw new BiasThresholdError(
          "criticalLevel",
          thresholds.criticalLevel,
          0,
          1
        );
      }
      if (thresholds.warningLevel !== void 0 && thresholds.highLevel !== void 0 && thresholds.criticalLevel !== void 0) {
        if (thresholds.warningLevel >= thresholds.highLevel) {
          throw new BiasConfigurationError(
            `Invalid threshold configuration: warningLevel (${thresholds.warningLevel}) must be less than highLevel (${thresholds.highLevel}). Expected ascending order: warningLevel < highLevel < criticalLevel.`
          );
        }
        if (thresholds.highLevel >= thresholds.criticalLevel) {
          throw new BiasConfigurationError(
            `Invalid threshold configuration: highLevel (${thresholds.highLevel}) must be less than criticalLevel (${thresholds.criticalLevel}). Expected ascending order: warningLevel < highLevel < criticalLevel.`
          );
        }
      }
    }
    if (config.layerWeights) {
      const weights = Object.values(config.layerWeights);
      const sum = weights.reduce((acc, weight) => acc + weight, 0);
      if (Math.abs(sum - 1) > 1e-3) {
        throw new BiasConfigurationError("Layer weights must sum to 1.0", {
          context: { sum }
        });
      }
      weights.forEach((weight, index) => {
        if (weight < 0) {
          const layerNames = Object.keys(config.layerWeights);
          throw new BiasConfigurationError(
            `Invalid layer weight: ${layerNames[index]} weight cannot be negative`,
            {
              context: { layer: layerNames[index], weight }
            }
          );
        }
      });
    }
  }
  /**
   * Initialize the bias detection engine
   *
   * Sets up all components including Python service connection,
   * metrics collection, and alert system.
   *
   * @throws {Error} If initialization fails
   * @example
   * ```typescript
   * await engine.initialize();
   * ```
   */
  async initialize() {
    try {
      this.logger.info("Initializing Bias Detection Engine");
      await this.pythonBridge.initialize();
      await this.metricsCollector.initialize();
      await this.alertSystem.initialize();
      this.startPeriodicCleanup();
      this.isInitialized = true;
      this.logger.info("Bias Detection Engine initialized successfully");
    } catch (error) {
      this.logger.error("Failed to initialize Bias Detection Engine", { error });
      throw new BiasInitializationError(
        "BiasDetectionEngine",
        error instanceof Error ? error.message : String(error),
        {
          context: {
            originalError: error instanceof Error ? error.message : String(error)
          }
        }
      );
    }
  }
  /**
   * Analyze a therapeutic session for bias across all detection layers
   *
   * Performs comprehensive bias analysis using preprocessing, model-level,
   * interactive, and evaluation layers. Returns detailed results with
   * recommendations and alert levels.
   *
   * @param session - The therapeutic session data to analyze
   * @returns Promise resolving to comprehensive bias analysis results
   * @throws {Error} If analysis fails or system health is critical
   *
   * @example
   * ```typescript
   * const result = await engine.analyzeSession({
   *   sessionId: 'session-123',
   *   participantDemographics: { age: '25-35', gender: 'female' },
   *   content: { transcript: '...' }
   * });
   * console.log('Bias Score:', result.overallBiasScore);
   * ```
   */
  async analyzeSession(session, user = {
    userId: "unknown",
    email: "unknown"
  }, request) {
    const startTime = Date.now();
    try {
      this.validateSystemHealth();
      const sessionToProcess = this.config.hipaaCompliant ? anonymizeSession(session) : session;
      const { validatedSession } = await this.validateAndPrepareSession(sessionToProcess);
      const layerResults = await this.runLayerAnalyses(validatedSession);
      const { overallBiasScore, alertLevel, result } = this.calculateAnalysisResults(validatedSession, layerResults);
      const processingTimeMs = Date.now() - startTime;
      await this.processAlertsAndCallbacks(
        result,
        overallBiasScore,
        alertLevel,
        processingTimeMs
      );
      this.recordBiasAnalysis(result);
      if (this.config.auditLogging) {
        await this.auditLogger.logBiasAnalysis(
          {
            ...user,
            role: {
              id: "user",
              name: "viewer",
              description: "Standard user",
              level: 1
            },
            permissions: []
          },
          session.sessionId,
          session.participantDemographics,
          overallBiasScore,
          alertLevel,
          request
        );
      }
      return result;
    } catch (error) {
      const processingTimeMs = Date.now() - startTime;
      this.logger.error("Bias analysis failed", {
        sessionId: session?.sessionId || "unknown",
        error,
        processingTimeMs
      });
      if (this.config.auditLogging) {
        await this.auditLogger.logBiasAnalysis(
          {
            ...user,
            role: {
              id: "user",
              name: "viewer",
              description: "Standard user",
              level: 1
            },
            permissions: []
          },
          session.sessionId,
          session.participantDemographics,
          -1,
          "error",
          request,
          false,
          error instanceof Error ? error.message : String(error)
        );
      }
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "analyzeSession",
        additionalContext: {
          sessionId: session?.sessionId,
          processingTimeMs
        }
      });
    }
  }
  /**
   * Analyze multiple therapeutic sessions in a batch for bias
   *
   * Processes an array of session data in parallel, returning results for each.
   * Individual session failures are captured without stopping the entire batch.
   *
   * @param sessions - An array of therapeutic session data to analyze
   * @returns Promise resolving to an array of results, each indicating success/failure and analysis data or error
   *
   * @example
   * ```typescript
   * const results = await engine.analyzeSessionsBatch([
   *   sessionData1, sessionData2
   * ]);
   * results.forEach(r => {
   *   if (r.status === 'fulfilled') {
   *     console.log('Batch Analysis Success:', r.value.overallBiasScore);
   *   } else {
   *     console.error('Batch Analysis Failed:', r.reason);
   *   }
   * });
   * ```
   */
  async analyzeSessionsBatch(sessions, user = {
    userId: "unknown",
    email: "unknown"
  }, request) {
    this.ensureInitialized();
    this.logger.info("Starting batch bias analysis", {
      sessionCount: sessions.length
    });
    const results = await Promise.allSettled(
      sessions.map(
        (session) => this.analyzeSession(session, user, request).catch((error) => {
          this.logger.error("Individual session analysis failed in batch", {
            sessionId: session?.sessionId,
            error
          });
          throw error;
        })
      )
    );
    this.logger.info("Batch bias analysis completed", {
      sessionCount: sessions.length,
      fulfilledCount: results.filter((r) => r.status === "fulfilled").length,
      rejectedCount: results.filter((r) => r.status === "rejected").length
    });
    return results;
  }
  // Add semicolon here
  /**
   * Generate comprehensive bias report
   */
  async generateBiasReport(sessions, timeRange, options) {
    this.ensureInitialized();
    const startTime = Date.now();
    const {
      format = "json",
      includeRawData = false,
      includeTrends = true,
      includeRecommendations = true
    } = options || {};
    try {
      this.logger.info("Generating comprehensive bias report", {
        sessionCount: sessions.length,
        timeRange,
        format,
        includeRawData
      });
      const pythonAnalysis = await this.pythonBridge.generateComprehensiveReport(
        sessions,
        {
          start: timeRange.start.toISOString(),
          end: timeRange.end.toISOString()
        },
        {
          format,
          includeRawData,
          includeTrends,
          includeRecommendations
        }
      );
      await this.metricsCollector.recordReportGeneration({
        sessionCount: sessions.length,
        executionTimeMs: Date.now() - startTime,
        format,
        metadata: {
          generatedAt: /* @__PURE__ */ new Date(),
          format,
          sessionCount: sessions.length,
          timeRange,
          executionTimeMs: Date.now() - startTime
        }
      });
      this.logger.info("Bias report generated successfully", {
        sessionCount: sessions.length,
        executionTimeMs: Date.now() - startTime,
        format
      });
      return pythonAnalysis;
    } catch (error) {
      this.logger.error("Failed to generate bias report", {
        error,
        sessionCount: sessions.length,
        timeRange,
        format
      });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "generateBiasReport",
        additionalContext: {
          sessionCount: sessions.length,
          timeRange,
          format
        }
      });
    }
  }
  /**
   * Get real-time bias monitoring dashboard data
   */
  async getDashboardData(options) {
    this.ensureInitialized();
    return await this.metricsCollector.getDashboardData(
      options
    );
  }
  /**
   * Get comprehensive metrics for analytics dashboard
   */
  async getMetrics(options) {
    this.ensureInitialized();
    try {
      this.logger.info("Retrieving comprehensive metrics", { options });
      const [summaryData, demographicData, performanceData] = await Promise.all(
        [
          this.metricsCollector.getSummaryMetrics(options),
          this.metricsCollector.getDemographicMetrics(options),
          options?.includePerformance ? this.metricsCollector.getPerformanceMetrics() : null
        ]
      );
      return {
        summary: summaryData || {
          totalAnalyses: 0,
          averageBiasScore: 0,
          alertDistribution: {},
          trendsOverTime: []
        },
        demographics: demographicData || {},
        performance: performanceData || {
          averageResponseTime: 0,
          successRate: 1,
          errorRate: 0,
          systemHealth: "unknown"
        },
        recommendations: this.generateMetricsRecommendations(
          summaryData || {},
          demographicData || {}
        )
      };
    } catch (error) {
      this.logger.error("Failed to retrieve metrics", { error });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "getMetrics",
        additionalContext: { options }
      });
    }
  }
  /**
   * Get analysis results for a specific session
   */
  async getSessionAnalysis(sessionId) {
    try {
      this.ensureInitialized();
      return await this.metricsCollector.getSessionAnalysis(sessionId);
    } catch (error) {
      this.logger.error("Failed to retrieve session analysis", {
        error,
        sessionId
      });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "getSessionAnalysis",
        additionalContext: { sessionId }
      });
    }
  }
  /**
   * Update bias detection thresholds
   */
  async updateThresholds(newThresholds, options) {
    this.ensureInitialized();
    const { validateOnly = false, notifyStakeholders = true } = options || {};
    try {
      this.logger.info("Updating bias detection thresholds", {
        newThresholds,
        validateOnly
      });
      const previousThresholds = { ...this.config.thresholds };
      const mergedThresholds = { ...this.config.thresholds, ...newThresholds };
      const testConfig = { thresholds: mergedThresholds };
      try {
        validateConfig(testConfig);
      } catch (error) {
        if (error instanceof BiasDetectionError) {
          return {
            success: false,
            previousThresholds,
            validationErrors: [error.message],
            affectedSessions: 0
          };
        }
        const validationError = BiasErrorHandler.createFromUnknown(error, {
          operation: "validateThresholds"
        });
        return {
          success: false,
          previousThresholds,
          validationErrors: [validationError.message],
          affectedSessions: 0
        };
      }
      if (validateOnly) {
        return {
          success: true,
          previousThresholds,
          validationErrors: [],
          affectedSessions: 0
        };
      }
      this.config.thresholds = mergedThresholds;
      await this.pythonBridge.updateConfiguration({
        thresholds: this.config.thresholds
      });
      const affectedSessions = await this.calculateThresholdImpact(
        previousThresholds,
        mergedThresholds
      );
      if (notifyStakeholders) {
        await this.notifyThresholdUpdate(
          previousThresholds,
          mergedThresholds,
          affectedSessions
        );
      }
      return {
        success: true,
        previousThresholds,
        validationErrors: [],
        affectedSessions
      };
    } catch (error) {
      this.logger.error("Threshold update process failed", {
        error,
        newThresholds
      });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "updateThresholds",
        additionalContext: { newThresholds }
      });
    }
  }
  /**
   * Get bias explanation for a specific detection
   */
  async explainBiasDetection(analysisResult, demographicGroup, includeCounterfactuals = true) {
    this.ensureInitialized();
    try {
      const pythonExplanation = await this.pythonBridge.explainBiasDetection(
        analysisResult,
        demographicGroup,
        includeCounterfactuals
      );
      const contributingFactors = this.analyzeContributingFactors(analysisResult);
      const recommendations = this.generateTargetedRecommendations(
        analysisResult,
        demographicGroup
      );
      return {
        summary: this.generateExplanationSummary(
          analysisResult,
          demographicGroup
        ),
        detailedExplanation: pythonExplanation || this.generateDetailedExplanation(analysisResult),
        contributingFactors,
        recommendations
      };
    } catch (error) {
      this.logger.error("Failed to generate bias explanation", {
        sessionId: analysisResult.sessionId,
        error
      });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "explainBiasDetection",
        additionalContext: {
          sessionId: analysisResult.sessionId,
          demographicGroup,
          includeCounterfactuals
        }
      });
    }
  }
  /**
   * Start real-time monitoring
   */
  async startMonitoring(callback, intervalMs = 3e4) {
    this.ensureInitialized();
    if (this.monitoringActive) {
      this.logger.warn("Monitoring already active");
      return;
    }
    try {
      this.logger.info("Starting bias detection monitoring", { intervalMs });
      this.monitoringCallbacks.push(callback);
      this.alertSystem.addMonitoringCallback(callback);
      this.monitoringActive = true;
      this.monitoringInterval = setInterval(async () => {
        try {
          const monitoringData = await this.collectMonitoringData();
          this.monitoringCallbacks.forEach((cb) => {
            try {
              cb(monitoringData);
            } catch (error) {
              this.logger.error("Monitoring callback error", { error });
            }
          });
          await this.alertSystem.checkSystemAlerts();
        } catch (error) {
          this.logger.error("Monitoring data collection error", { error });
        }
      }, intervalMs);
      const initialData = await this.collectMonitoringData();
      callback(initialData);
      this.logger.info("Bias detection monitoring started successfully");
    } catch (error) {
      this.monitoringActive = false;
      this.logger.error("Failed to start monitoring", { error });
      if (error instanceof BiasDetectionError) {
        throw error;
      }
      throw BiasErrorHandler.createFromUnknown(error, {
        operation: "startMonitoring",
        additionalContext: { intervalMs }
      });
    }
  }
  /**
   * Stop real-time monitoring
   */
  stopMonitoring() {
    if (!this.monitoringActive) {
      this.logger.warn("Monitoring not currently active");
      return;
    }
    try {
      this.logger.info("Stopping bias detection monitoring");
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
        this.monitoringInterval = void 0;
      }
      this.monitoringActive = false;
      this.monitoringCallbacks.forEach((callback) => {
        this.alertSystem.removeMonitoringCallback(callback);
      });
      this.monitoringCallbacks = [];
      this.logger.info("Bias detection monitoring stopped successfully");
    } catch (error) {
      this.logger.error("Error stopping monitoring", { error });
    }
  }
  /**
   * Dispose of all resources
   */
  async dispose() {
    const startTime = Date.now();
    const componentsDisposed = [];
    const errors = [];
    try {
      if (this.monitoringActive) {
        this.stopMonitoring();
        componentsDisposed.push("monitoring");
      }
      await this.alertSystem.dispose();
      componentsDisposed.push("alert_system");
      await this.metricsCollector.dispose();
      componentsDisposed.push("metrics_collector");
      await this.pythonBridge.dispose();
      componentsDisposed.push("python_bridge");
      this.performFinalCleanup();
      componentsDisposed.push("final_cleanup");
      const disposalTimeMs = Date.now() - startTime;
      this.logger.info("Bias Detection Engine disposed successfully", {
        componentsDisposed: componentsDisposed.length,
        disposalTimeMs
      });
      return {
        success: true,
        componentsDisposed,
        errors,
        disposalTimeMs
      };
    } catch (error) {
      const disposalTimeMs = Date.now() - startTime;
      const systemError = BiasErrorHandler.createFromUnknown(error, {
        operation: "dispose"
      });
      errors.push({
        component: "disposal_process",
        error: systemError.message
      });
      return {
        success: false,
        componentsDisposed,
        errors,
        disposalTimeMs
      };
    }
  }
  // Helper methods
  ensureInitialized() {
    if (!this.isInitialized) {
      throw new BiasInitializationError(
        "BiasDetectionEngine",
        "Engine not initialized. Call initialize() first."
      );
    }
  }
  async validateAndPrepareSession(session) {
    this.validateSessionData(session);
    this.logger.info("Starting bias analysis", { sessionId: session.sessionId });
    const auditLogData = {
      demographics: session.participantDemographics,
      timestamp: /* @__PURE__ */ new Date()
    };
    this.createAuditLogEntry(
      session.sessionId,
      "analysis_started",
      auditLogData
    );
    return { validatedSession: session, auditLogData };
  }
  validateSessionData(session) {
    if (!session) {
      throw new BiasSessionValidationError(
        "unknown",
        "session",
        "Session data is required"
      );
    }
    const sessionObj = session;
    if (!sessionObj.sessionId && sessionObj.sessionId !== "") {
      throw new BiasSessionValidationError(
        "unknown",
        "sessionId",
        "Session ID is required"
      );
    }
    if (typeof sessionObj.sessionId === "string" && sessionObj.sessionId.trim() === "") {
      throw new BiasSessionValidationError(
        sessionObj.sessionId,
        "sessionId",
        "Session ID cannot be empty"
      );
    }
    if (!sessionObj.sessionId) {
      throw new BiasSessionValidationError(
        "unknown",
        "sessionId",
        "Session ID is required"
      );
    }
  }
  async runLayerAnalyses(session) {
    const layerResults = await Promise.allSettled([
      this.pythonBridge.runPreprocessingAnalysis(session),
      this.pythonBridge.runModelLevelAnalysis(session),
      this.pythonBridge.runInteractiveAnalysis(session),
      this.pythonBridge.runEvaluationAnalysis(session)
    ]);
    const preprocessing = this.processLayerResult(
      layerResults[0],
      "preprocessing"
    );
    const modelLevel = this.processLayerResult(layerResults[1], "modelLevel");
    const interactive = this.processLayerResult(layerResults[2], "interactive");
    const evaluation = this.processLayerResult(layerResults[3], "evaluation");
    return { preprocessing, modelLevel, interactive, evaluation };
  }
  processLayerResult(result, layerName) {
    if (result.status === "fulfilled") {
      return result.value;
    } else {
      this.logger.warn(`${layerName} analysis failed, using fallback`, {
        error: result.reason?.message
      });
      const error = result.reason;
      if (error instanceof BiasPythonServiceError) {
        throw error;
      }
      throw new BiasPythonServiceError(`Error in ${layerName} analysis`, {
        context: {
          layerName,
          originalError: error instanceof Error ? error.message : String(error)
        }
      });
    }
  }
  calculateAnalysisResults(session, layerResults) {
    const results = layerResults;
    const { preprocessing, modelLevel, interactive, evaluation } = results;
    const weights = this.config.layerWeights;
    const overallBiasScore = preprocessing.biasScore * weights.preprocessing + modelLevel.biasScore * weights.modelLevel + interactive.biasScore * weights.interactive + evaluation.biasScore * weights.evaluation;
    let alertLevel;
    if (overallBiasScore >= this.config.thresholds.criticalLevel) {
      alertLevel = "critical";
    } else if (overallBiasScore >= this.config.thresholds.highLevel) {
      alertLevel = "high";
    } else if (overallBiasScore >= this.config.thresholds.warningLevel) {
      alertLevel = "medium";
    } else {
      alertLevel = "low";
    }
    const confidence = Math.min(
      preprocessing.confidence || 0.5,
      modelLevel.confidence || 0.5,
      interactive.confidence || 0.5,
      evaluation.confidence || 0.5
    );
    const recommendations = this.generateRecommendations(
      [preprocessing, modelLevel, interactive, evaluation],
      overallBiasScore,
      alertLevel
    );
    const result = {
      sessionId: session.sessionId,
      timestamp: /* @__PURE__ */ new Date(),
      overallBiasScore,
      alertLevel,
      confidence,
      layerResults: {
        preprocessing,
        modelLevel,
        interactive,
        evaluation
      },
      demographics: session.participantDemographics,
      recommendations
    };
    return { overallBiasScore, alertLevel, confidence, recommendations, result };
  }
  async processAlertsAndCallbacks(result, overallBiasScore, alertLevel, processingTimeMs) {
    this.logger.info("Bias analysis completed", {
      sessionId: result.sessionId,
      overallBiasScore,
      alertLevel,
      confidence: result.confidence,
      processingTimeMs: processingTimeMs || 0
    });
    await this.metricsCollector.storeAnalysisResult(result, processingTimeMs);
    if (alertLevel === "high" || alertLevel === "critical") {
      await this.alertSystem.processAlert({
        sessionId: result.sessionId,
        level: alertLevel,
        biasScore: overallBiasScore,
        analysisResult: result
      });
      this.triggerMonitoringCallbacksForAlert(result);
    }
  }
  triggerMonitoringCallbacksForAlert(result) {
    if (this.monitoringCallbacks.length === 0) {
      return;
    }
    const alertData = {
      level: result.alertLevel,
      sessionId: result.sessionId,
      timestamp: result.timestamp,
      biasScore: result.overallBiasScore,
      confidence: result.confidence,
      recommendations: result.recommendations
    };
    this.monitoringCallbacks.forEach((callback) => {
      try {
        callback(alertData);
      } catch (error) {
        this.logger.error("Error in monitoring callback for alert", {
          error,
          sessionId: result.sessionId
        });
      }
    });
  }
  createAuditLogEntry(sessionId, action, details) {
    if (this.config.auditLogging) {
      this.auditLogs.push({
        timestamp: /* @__PURE__ */ new Date(),
        sessionId,
        action,
        details
      });
    }
  }
  recordBiasAnalysis(result) {
    try {
      const timestamp = /* @__PURE__ */ new Date();
      const analysisResult = result;
      if (analysisResult.sessionId) {
        this.sessionMetrics.set(analysisResult.sessionId, {
          timestamp,
          biasScore: analysisResult.overallBiasScore,
          alertLevel: analysisResult.alertLevel,
          confidence: analysisResult.confidence
        });
      }
      this.performanceMetrics.requestCount++;
      this.logger.debug("Recorded bias analysis for metrics", {
        sessionId: analysisResult.sessionId,
        biasScore: analysisResult.overallBiasScore,
        alertLevel: analysisResult.alertLevel
      });
    } catch (error) {
      const sessionId = result?.sessionId;
      this.logger.error("Failed to record bias analysis metrics", {
        error,
        sessionId
      });
    }
  }
  async collectMonitoringData() {
    const [activeAnalyses, recentAlerts, performanceMetrics] = await Promise.all([
      this.metricsCollector.getActiveAnalysesCount(),
      this.alertSystem.getRecentAlerts(),
      this.metricsCollector.getCurrentPerformanceMetrics()
    ]);
    const systemHealth = this.assessSystemHealth(performanceMetrics);
    return {
      timestamp: /* @__PURE__ */ new Date(),
      activeAnalyses,
      recentAlerts,
      systemHealth,
      performanceMetrics
    };
  }
  assessSystemHealth(metrics) {
    if (!metrics) {
      return "unknown";
    }
    const metricsData = metrics;
    const { errorRate, averageResponseTime, memoryUsage } = metricsData;
    if (errorRate && errorRate > 0.1 || averageResponseTime && averageResponseTime > 5e3 || memoryUsage && memoryUsage > 0.9) {
      return "critical";
    } else if (errorRate && errorRate > 0.05 || averageResponseTime && averageResponseTime > 2e3 || memoryUsage && memoryUsage > 0.8) {
      return "warning";
    }
    return "healthy";
  }
  generateRecommendations(layerResults, _overallBiasScore, _alertLevel) {
    const recommendations = [];
    const hasFallbackResults = layerResults.some(
      (result) => result.fallback
    );
    if (hasFallbackResults) {
      recommendations.push("Limited analysis - some toolkits unavailable");
    }
    layerResults.forEach((result) => {
      const layerResult = result;
      if (layerResult.biasScore && layerResult.biasScore > this.config.thresholds.warningLevel) {
        recommendations.push(...layerResult.recommendations || []);
      }
    });
    return Array.from(new Set(recommendations));
  }
  generateMetricsRecommendations(summaryData, _demographicData) {
    const recommendations = [];
    const summary = summaryData;
    if (summary.averageBiasScore && summary.averageBiasScore > this.config.thresholds.warningLevel) {
      recommendations.push(
        "Consider reviewing training scenarios to reduce bias patterns"
      );
    }
    if (summary.alertDistribution?.critical && summary.alertDistribution.critical > 0) {
      recommendations.push(
        "Critical bias alerts detected - immediate intervention recommended"
      );
    }
    return recommendations;
  }
  analyzeContributingFactors(analysisResult) {
    const factors = [];
    if (analysisResult.layerResults.preprocessing?.biasScore > this.config.thresholds.warningLevel) {
      factors.push({
        factor: "Data Preprocessing",
        impact: analysisResult.layerResults.preprocessing.biasScore > this.config.thresholds.highLevel ? "high" : "medium",
        description: "Bias detected in data preprocessing stage, indicating potential issues with data representation or feature extraction"
      });
    }
    return factors;
  }
  generateTargetedRecommendations(analysisResult, demographicGroup) {
    const recommendations = [...analysisResult.recommendations || []];
    if (analysisResult.overallBiasScore > this.config.thresholds.criticalLevel) {
      recommendations.push(
        "URGENT: Suspend AI system for immediate bias remediation"
      );
    }
    if (demographicGroup) {
      recommendations.push(
        `Review training data representation for ${demographicGroup.type}: ${demographicGroup.value}`
      );
    }
    return Array.from(new Set(recommendations));
  }
  generateExplanationSummary(analysisResult, demographicGroup) {
    const score = analysisResult.overallBiasScore;
    const level = analysisResult.alertLevel;
    const demographic = demographicGroup ? `for ${demographicGroup.type} group "${demographicGroup.value}"` : "";
    return `Bias analysis ${demographic} detected a ${level} level bias with score ${score.toFixed(3)}. The analysis indicates ${this.getBiasLevelDescription(score)} bias patterns in the therapeutic AI system.`;
  }
  generateDetailedExplanation(analysisResult) {
    const layerAnalysis = Object.entries(analysisResult.layerResults).map(
      ([layer, result]) => `${layer}: ${(result?.biasScore || 0).toFixed(3)}`
    ).join(", ");
    return `Detailed analysis across detection layers revealed: ${layerAnalysis}. The weighted aggregate score of ${analysisResult.overallBiasScore.toFixed(3)} was calculated using configured layer weights. Confidence level: ${(analysisResult.confidence * 100).toFixed(1)}%.`;
  }
  getBiasLevelDescription(score) {
    if (score >= this.config.thresholds.criticalLevel) {
      return "critical";
    }
    if (score >= this.config.thresholds.highLevel) {
      return "high";
    }
    if (score >= this.config.thresholds.warningLevel) {
      return "moderate";
    }
    return "minimal";
  }
  async calculateThresholdImpact(oldThresholds, newThresholds) {
    try {
      const recentSessions = await this.metricsCollector.getRecentSessionCount();
      const avgChange = (Math.abs(newThresholds.warningLevel - oldThresholds.warningLevel) + Math.abs(newThresholds.highLevel - oldThresholds.highLevel) + Math.abs(
        newThresholds.criticalLevel - oldThresholds.criticalLevel
      )) / 3;
      const impactRate = Math.min(1, avgChange * 10);
      return Math.round(recentSessions * impactRate);
    } catch (error) {
      this.logger.warn("Failed to calculate threshold impact", { error });
      return 0;
    }
  }
  async notifyThresholdUpdate(oldThresholds, newThresholds, affectedSessions) {
    try {
      const notification = {
        type: "threshold_update",
        timestamp: /* @__PURE__ */ new Date(),
        changes: {
          warning: {
            old: oldThresholds.warningLevel,
            new: newThresholds.warningLevel
          },
          high: { old: oldThresholds.highLevel, new: newThresholds.highLevel },
          critical: {
            old: oldThresholds.criticalLevel,
            new: newThresholds.criticalLevel
          }
        },
        impact: { affectedSessions }
      };
      await this.alertSystem.sendSystemNotification(
        `Bias detection thresholds updated: ${JSON.stringify(notification.changes)}`,
        ["system-admin", "bias-detection-team"]
      );
    } catch (error) {
      this.logger.warn("Failed to send threshold update notification", {
        error
      });
    }
  }
  validateSystemHealth() {
    const errorRate = this.performanceMetrics.errorCount / Math.max(1, this.performanceMetrics.requestCount);
    if (errorRate > 0.5) {
      this.logger.warn("High error rate detected", {
        errorRate,
        totalRequests: this.performanceMetrics.requestCount,
        totalErrors: this.performanceMetrics.errorCount
      });
    }
  }
  performFinalCleanup() {
    try {
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
        this.monitoringInterval = void 0;
      }
      this.isInitialized = false;
      this.monitoringActive = false;
      this.monitoringCallbacks = [];
      this.logger.debug("Final cleanup completed");
    } catch (error) {
      this.logger.warn("Error during final cleanup", {
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
  startPeriodicCleanup() {
    setInterval(
      () => {
        this.cleanupCompletedSessions();
      },
      60 * 60 * 1e3
    );
    this.logger.debug("Periodic cleanup started");
  }
  cleanupCompletedSessions() {
    try {
      const cutoffTime = new Date(Date.now() - 24 * 60 * 60 * 1e3);
      let cleanedCount = 0;
      for (const [sessionId, sessionData] of Array.from(
        this.sessionMetrics.entries()
      )) {
        const session = sessionData;
        if (session.timestamp && session.timestamp < cutoffTime) {
          this.sessionMetrics.delete(sessionId);
          cleanedCount++;
        }
      }
      if (cleanedCount > 0) {
        this.logger.debug("Cleaned up completed sessions", {
          cleanedCount,
          remainingSessions: this.sessionMetrics.size
        });
      }
    } catch (error) {
      this.logger.error("Failed to clean up completed sessions", { error });
    }
  }
}

export { BiasDetectionEngine as B, performanceMonitor as p };
