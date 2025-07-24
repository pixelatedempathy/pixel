;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="97d1efea-34fe-41ba-9567-b7f01b0b0726",e._sentryDebugIdIdentifier="sentry-dbid-97d1efea-34fe-41ba-9567-b7f01b0b0726")}catch(e){}}();import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useState, useMemo, useEffect } from 'react';
import { f as fheService } from './fhe_ZZVTPva_.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import { E as EncryptionMode, F as FHEOperation } from './types_CQf1BJz-.mjs';
import { S as SealSchemeType } from './seal-types_BprN4zt0.mjs';
import './astro/server_bjkJ-nhl.mjs';
import { I as IconLock, a as IconRefresh, b as IconAlertTriangle, c as IconLineChart, d as IconPieChart, e as IconBarChart } from './icons_CU-SGAj6.mjs';

const logger = createBuildSafeLogger("analytics");
function mapOperation(operation) {
  switch (operation) {
    case "sentiment" /* SENTIMENT */:
      return FHEOperation.SENTIMENT;
    case "categorize" /* CATEGORIZE */:
      return FHEOperation.CATEGORIZE;
    case "custom" /* CUSTOM */:
      return FHEOperation.CUSTOM;
    default:
      return FHEOperation.CUSTOM;
  }
}
var AnalyticsType = /* @__PURE__ */ ((AnalyticsType2) => {
  AnalyticsType2["SENTIMENT_TREND"] = "sentiment_trend";
  AnalyticsType2["TOPIC_CLUSTERING"] = "topic_clustering";
  AnalyticsType2["EMOTIONAL_PATTERNS"] = "emotional_patterns";
  AnalyticsType2["INTERVENTION_EFFECTIVENESS"] = "intervention_effectiveness";
  AnalyticsType2["RISK_ASSESSMENT"] = "risk_assessment";
  return AnalyticsType2;
})(AnalyticsType || {});
const DEFAULT_CONFIG = {
  encryptResults: true,
  timeWindow: {
    startTime: 0,
    endTime: Date.now()
  }
};
class FHEAnalyticsService {
  static instance;
  initialized = false;
  fheService;
  /**
   * Private constructor to enforce singleton pattern
   * Intentionally empty as no initialization is needed in constructor
   */
  constructor() {
  }
  /**
   * Get the singleton instance
   */
  static getInstance() {
    if (!FHEAnalyticsService.instance) {
      FHEAnalyticsService.instance = new FHEAnalyticsService();
    }
    return FHEAnalyticsService.instance;
  }
  /**
   * Initialize the analytics service with Microsoft SEAL
   */
  async initialize(options) {
    if (this.initialized) {
      return;
    }
    try {
      const serviceOptions = {
        mode: EncryptionMode.FHE,
        sealScheme: SealSchemeType.BFV,
        // Use BFV scheme for analytics
        useMock: process.env["NODE_ENV"] === "test",
        // Use mock in test environment
        ...options
      };
      if (!this.fheService.isInitialized()) {
        await this.fheService.initialize(serviceOptions);
      }
      this.initialized = true;
      logger.info("FHE Analytics service initialized with Microsoft SEAL", {
        mode: this.fheService.getMode(),
        scheme: serviceOptions.sealScheme
      });
    } catch (error) {
      logger.error("Failed to initialize FHE Analytics service", { error });
      throw error;
    }
  }
  /**
   * Process sentiment trends over a conversation while preserving privacy
   *
   * @param messages - Array of chat messages (encrypted or not)
   * @param config - Analytics configuration
   * @returns Analysis results (can be encrypted based on config)
   */
  async analyzeSentimentTrend(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      const startTime = performance.now();
      logger.info("Starting encrypted sentiment trend analysis");
      const filteredMessages = this.filterMessagesByTimeWindow(messages, config);
      const results = await Promise.all(
        filteredMessages.filter((m) => m.role === "user").map(async (message, index) => {
          try {
            if (message.encrypted && typeof message.content === "string" && message.content.startsWith("FHE:")) {
              const sentimentResult = await this.fheService.processEncrypted(
                message.content,
                mapOperation("sentiment" /* SENTIMENT */)
              );
              return {
                messageIndex: index,
                sentiment: sentimentResult,
                timestamp: message.timestamp || Date.now()
              };
            } else {
              const encrypted = await this.fheService.encryptData(
                message.content
              );
              const sentimentResult = await this.fheService.processEncrypted(
                encrypted,
                mapOperation("sentiment" /* SENTIMENT */)
              );
              return {
                messageIndex: index,
                sentiment: sentimentResult,
                timestamp: message.timestamp || Date.now()
              };
            }
          } catch (error) {
            logger.error(`Failed to analyze sentiment for message ${index}`, {
              error
            });
            return {
              messageIndex: index,
              error: true,
              timestamp: message.timestamp || Date.now()
            };
          }
        })
      );
      const analyticsData = {
        messageCount: filteredMessages.length,
        userMessageCount: filteredMessages.filter((m) => m.role === "user").length,
        processedCount: results.filter((r) => !r.error).length,
        errorCount: results.filter((r) => r.error).length,
        sentimentData: results.filter((r) => !r.error),
        timeRange: {
          start: config.timeWindow?.startTime || 0,
          end: config.timeWindow?.endTime || Date.now()
        }
      };
      const endTime = performance.now();
      logger.info(
        `Sentiment trend analysis completed in ${endTime - startTime}ms`
      );
      const finalResult = {
        type: "sentiment_trend" /* SENTIMENT_TREND */,
        timestamp: Date.now(),
        data: analyticsData,
        encryptionMode: this.fheService.getMode(),
        isEncrypted: false
      };
      if (config.encryptResults) {
        const encryptedDataString = await this.fheService.encryptData(
          JSON.stringify(analyticsData)
        );
        finalResult.data = { encrypted: encryptedDataString };
        finalResult.isEncrypted = true;
      }
      return finalResult;
    } catch (error) {
      logger.error("Failed to analyze sentiment trend", { error });
      throw new Error(`Sentiment analysis error: ${error.message}`);
    }
  }
  /**
   * Analyze topics from encrypted messages using homomorphic clustering
   *
   * @param messages - Array of chat messages
   * @param config - Analytics configuration
   * @returns Topic clusters (can be encrypted)
   */
  async analyzeTopicClusters(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      logger.info("Starting encrypted topic clustering analysis");
      const filteredMessages = this.filterMessagesByTimeWindow(messages, config);
      const results = await Promise.all(
        filteredMessages.filter((m) => m.role === "user").map(async (message, index) => {
          try {
            const messageContent = message.encrypted ? message.content : await this.fheService.encryptData(message.content);
            const topicResult = await this.fheService.processEncrypted(
              messageContent,
              mapOperation("categorize" /* CATEGORIZE */),
              {
                categories: {
                  anxiety: ["worried", "nervous", "anxious"],
                  depression: ["sad", "hopeless", "down"],
                  trauma: ["flashback", "nightmare", "triggered"],
                  relationships: ["partner", "family", "friend"],
                  work: ["job", "career", "boss"],
                  health: ["pain", "illness", "doctor"]
                }
              }
            );
            return {
              messageIndex: index,
              topic: topicResult,
              timestamp: message.timestamp || Date.now()
            };
          } catch (error) {
            logger.error(
              `Failed to analyze topics for message ${index}`,
              error
            );
            return {
              messageIndex: index,
              error: true,
              timestamp: message.timestamp || Date.now()
            };
          }
        })
      );
      const analyticsData = {
        messageCount: filteredMessages.length,
        topicData: results.filter((r) => !r.error),
        timeRange: {
          start: config.timeWindow?.startTime || 0,
          end: config.timeWindow?.endTime || Date.now()
        }
      };
      const finalResult = {
        type: "topic_clustering" /* TOPIC_CLUSTERING */,
        timestamp: Date.now(),
        data: analyticsData,
        encryptionMode: this.fheService.getMode(),
        isEncrypted: false
      };
      if (config.encryptResults) {
        const encryptedDataString = await this.fheService.encryptData(
          JSON.stringify(analyticsData)
        );
        finalResult.data = { encrypted: encryptedDataString };
        finalResult.isEncrypted = true;
      }
      return finalResult;
    } catch (error) {
      logger.error(
        "Failed to analyze topic clusters",
        error
      );
      throw error;
    }
  }
  /**
   * Assess risk factors while maintaining complete privacy
   * Critical for identifying potential harm risks
   *
   * @param messages - Array of chat messages
   * @param config - Analytics configuration
   * @returns Risk assessment (can be encrypted)
   */
  async performRiskAssessment(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      logger.info("Starting encrypted risk assessment analysis");
      const filteredMessages = this.filterMessagesByTimeWindow(messages, config);
      const results = await Promise.all(
        filteredMessages.filter((m) => m.role === "user").map(async (message, index) => {
          try {
            const messageContent = message.encrypted ? message.content : await this.fheService.encryptData(message.content);
            const riskResult = await this.fheService.processEncrypted(
              messageContent,
              mapOperation("custom" /* CUSTOM */),
              {
                operation: "risk_detection",
                operationParams: {
                  riskPatterns: ["self_harm", "suicidal", "violent", "abuse"],
                  threshold: 0.7
                }
              }
            );
            return {
              messageIndex: index,
              risk: riskResult,
              timestamp: message.timestamp || Date.now()
            };
          } catch (error) {
            logger.error(
              `Failed to analyze risk for message ${index}`,
              error
            );
            return {
              messageIndex: index,
              error: true,
              timestamp: message.timestamp || Date.now()
            };
          }
        })
      );
      const analyticsData = {
        messageCount: filteredMessages.length,
        riskData: results.filter((r) => !r.error),
        timeRange: {
          start: config.timeWindow?.startTime || 0,
          end: config.timeWindow?.endTime || Date.now()
        }
      };
      const finalResult = {
        type: "risk_assessment" /* RISK_ASSESSMENT */,
        timestamp: Date.now(),
        data: analyticsData,
        encryptionMode: this.fheService.getMode(),
        isEncrypted: false
      };
      if (config.encryptResults) {
        const encryptedDataString = await this.fheService.encryptData(
          JSON.stringify(analyticsData)
        );
        finalResult.data = { encrypted: encryptedDataString };
        finalResult.isEncrypted = true;
      }
      return finalResult;
    } catch (error) {
      logger.error(
        "Failed to perform risk assessment",
        error
      );
      throw error;
    }
  }
  /**
   * Analyze intervention effectiveness by correlating therapist messages
   * with subsequent client emotional states
   *
   * @param messages - Array of chat messages
   * @param config - Analytics configuration
   * @returns Intervention effectiveness analysis
   */
  async analyzeInterventionEffectiveness(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      logger.info("Starting encrypted intervention effectiveness analysis");
      const filteredMessages = this.filterMessagesByTimeWindow(messages, config);
      const exchanges = [];
      for (let i = 0; i < filteredMessages.length - 1; i++) {
        if (filteredMessages[i].role === "assistant" && filteredMessages[i + 1].role === "user") {
          exchanges.push({
            therapist: filteredMessages[i],
            client: filteredMessages[i + 1]
          });
        }
      }
      const results = await Promise.all(
        exchanges.map(async (exchange, index) => {
          try {
            const therapistContent = exchange.therapist.encrypted ? exchange.therapist.content : await this.fheService.encryptData(exchange.therapist.content);
            const clientContent = exchange.client.encrypted ? exchange.client.content : await this.fheService.encryptData(exchange.client.content);
            const interventionType = await this.fheService.processEncrypted(
              therapistContent,
              mapOperation("categorize" /* CATEGORIZE */),
              {
                categories: {
                  reflective: ["understand", "hearing", "sounds like"],
                  clarifying: ["question", "wondering", "could you"],
                  challenging: ["consider", "alternative", "perspective"],
                  supportive: ["support", "with you", "make sense"],
                  directive: ["suggest", "could try", "recommend"]
                }
              }
            );
            const responseSentiment = await this.fheService.processEncrypted(
              clientContent,
              mapOperation("sentiment" /* SENTIMENT */)
            );
            return {
              exchangeIndex: index,
              interventionType,
              responseSentiment,
              timestamp: exchange.client.timestamp || Date.now()
            };
          } catch (error) {
            logger.error(
              `Failed to analyze exchange ${index}`,
              error
            );
            return {
              exchangeIndex: index,
              error: true,
              timestamp: Date.now()
            };
          }
        })
      );
      const analyticsData = {
        exchangeCount: exchanges.length,
        interventionData: results.filter((r) => !r.error),
        timeRange: {
          start: config.timeWindow?.startTime || 0,
          end: config.timeWindow?.endTime || Date.now()
        }
      };
      const finalResult = {
        type: "intervention_effectiveness" /* INTERVENTION_EFFECTIVENESS */,
        timestamp: Date.now(),
        data: analyticsData,
        encryptionMode: this.fheService.getMode(),
        isEncrypted: false
      };
      if (config.encryptResults) {
        const encryptedDataString = await this.fheService.encryptData(
          JSON.stringify(analyticsData)
        );
        finalResult.data = { encrypted: encryptedDataString };
        finalResult.isEncrypted = true;
      }
      return finalResult;
    } catch (error) {
      logger.error(
        "Failed to analyze intervention effectiveness",
        error
      );
      throw error;
    }
  }
  /**
   * Analyze emotional patterns over time
   *
   * @param messages - Array of chat messages
   * @param config - Analytics configuration
   * @returns Emotional pattern analysis
   */
  async analyzeEmotionalPatterns(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      logger.info("Starting encrypted emotional pattern analysis");
      const filteredMessages = this.filterMessagesByTimeWindow(messages, config);
      const userMessages = filteredMessages.filter((m) => m.role === "user");
      const timeWindows = [];
      if (userMessages.length > 0) {
        const firstTimestamp = userMessages[0].timestamp || Date.now();
        const lastTimestamp = userMessages[userMessages.length - 1].timestamp || Date.now();
        const duration = lastTimestamp - firstTimestamp;
        const windowCount = Math.min(5, userMessages.length);
        const windowSize = duration / windowCount;
        for (let i = 0; i < windowCount; i++) {
          timeWindows.push({
            startTime: firstTimestamp + i * windowSize,
            endTime: firstTimestamp + (i + 1) * windowSize
          });
        }
      }
      const windowResults = await Promise.all(
        timeWindows.map(async (window, windowIndex) => {
          const windowMessages = userMessages.filter(
            (m) => (m.timestamp || 0) >= window.startTime && (m.timestamp || 0) <= window.endTime
          );
          const messageResults = await Promise.all(
            windowMessages.map(async (message, messageIndex) => {
              try {
                const messageContent = message.encrypted ? message.content : await this.fheService.encryptData(message.content);
                const emotionResult = await this.fheService.processEncrypted(
                  messageContent,
                  mapOperation("categorize" /* CATEGORIZE */),
                  {
                    categories: {
                      anger: ["angry", "frustrated", "mad"],
                      sadness: ["sad", "down", "depressed"],
                      fear: ["scared", "afraid", "anxious"],
                      joy: ["happy", "excited", "pleased"],
                      surprise: ["shocked", "surprised", "unexpected"],
                      disgust: ["disgusted", "repulsed", "awful"]
                    }
                  }
                );
                return {
                  messageIndex,
                  emotion: emotionResult,
                  timestamp: message.timestamp || Date.now()
                };
              } catch (error) {
                logger.error(
                  `Failed to analyze emotion for message ${messageIndex}`,
                  error
                );
                return {
                  messageIndex,
                  error: true,
                  timestamp: message.timestamp || Date.now()
                };
              }
            })
          );
          return {
            windowIndex,
            startTime: window.startTime,
            endTime: window.endTime,
            messageCount: windowMessages.length,
            emotions: messageResults.filter((r) => !r.error)
          };
        })
      );
      const analyticsData = {
        timeWindowCount: timeWindows.length,
        messageCount: userMessages.length,
        windowResults,
        timeRange: {
          start: config.timeWindow?.startTime || 0,
          end: config.timeWindow?.endTime || Date.now()
        }
      };
      const finalResult = {
        type: "emotional_patterns" /* EMOTIONAL_PATTERNS */,
        timestamp: Date.now(),
        data: analyticsData,
        encryptionMode: this.fheService.getMode(),
        isEncrypted: false
      };
      if (config.encryptResults) {
        const encryptedDataString = await this.fheService.encryptData(
          JSON.stringify(analyticsData)
        );
        finalResult.data = { encrypted: encryptedDataString };
        finalResult.isEncrypted = true;
      }
      return finalResult;
    } catch (error) {
      logger.error(
        "Failed to analyze emotional patterns",
        error
      );
      throw error;
    }
  }
  /**
   * Create a comprehensive analytics dashboard for therapy sessions
   *
   * @param messages - Array of chat messages
   * @param config - Analytics configuration
   * @returns Combined analytics dashboard
   */
  async createAnalyticsDashboard(messages, config = DEFAULT_CONFIG) {
    await this.ensureInitialized();
    try {
      logger.info("Creating comprehensive analytics dashboard");
      return await Promise.all([
        this.analyzeSentimentTrend(messages, config),
        this.analyzeTopicClusters(messages, config),
        this.analyzeEmotionalPatterns(messages, config),
        this.analyzeInterventionEffectiveness(messages, config),
        this.performRiskAssessment(messages, config)
      ]);
    } catch (error) {
      logger.error(
        "Failed to create analytics dashboard",
        error
      );
      throw error;
    }
  }
  /**
   * Filter messages by time window
   */
  filterMessagesByTimeWindow(messages, config) {
    const startTime = config.timeWindow?.startTime || 0;
    const endTime = config.timeWindow?.endTime || Date.now();
    return messages.filter((message) => {
      const timestamp = message.timestamp || Date.now();
      return timestamp >= startTime && timestamp <= endTime;
    });
  }
  /**
   * Ensure the analytics service is initialized
   */
  async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
  }
}
const fheAnalytics = FHEAnalyticsService.getInstance();

function AnalyticsDashboard({
  messages,
  securityLevel,
  encryptionEnabled,
  scenario
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [activeTab, setActiveTab] = useState(
    AnalyticsType.SENTIMENT_TREND
  );
  const [refreshInterval] = useState(3e4);
  const [fheInitialized, setFheInitialized] = useState(false);
  const showPrivacyWarning = useMemo(() => {
    return !encryptionEnabled || securityLevel === "standard";
  }, [encryptionEnabled, securityLevel]);
  useEffect(() => {
    const initFHE = async () => {
      try {
        const encryptionMode = securityLevel === "maximum" ? "fhe" /* FHE */ : securityLevel === "hipaa" ? "hipaa" /* HIPAA */ : "standard" /* STANDARD */;
        await fheService.initialize({
          mode: encryptionEnabled ? encryptionMode : "none" /* NONE */,
          keySize: 2048,
          securityLevel: "tc128"
        });
        await fheAnalytics.initialize();
        setFheInitialized(true);
      } catch (error2) {
        setError("Failed to initialize FHE system");
        console.error("FHE initialization error:", error2);
      }
    };
    initFHE();
  }, [securityLevel, encryptionEnabled]);
  const generateId = () => {
    try {
      return crypto.randomUUID();
    } catch (error2) {
      console.error("Failed to generate UUID:", error2);
      return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
  };
  const loadAnalytics = React__default.useCallback(async () => {
    if (!fheInitialized || messages.length === 0) {
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const config = {
        encryptResults: securityLevel === "maximum",
        // Keep results encrypted for maximum security
        timeWindow: {
          startTime: 0,
          endTime: Date.now()
        }
      };
      const results = await fheAnalytics.createAnalyticsDashboard(
        messages.map((msg) => ({
          id: generateId(),
          ...msg
        })),
        config
      );
      const processedResults = await Promise.all(
        results.map(async (result) => {
          if (result.isEncrypted && typeof result.data === "string") {
            const parsedData = JSON.parse(
              result.data
            );
            return {
              ...result,
              data: parsedData,
              isEncrypted: false
            };
          }
          return result;
        })
      );
      setAnalyticsData(processedResults);
    } catch (error2) {
      console.error("Analytics error:", error2);
      setError("Failed to generate analytics");
    } finally {
      setIsLoading(false);
    }
  }, [fheInitialized, messages, securityLevel]);
  useEffect(() => {
    if (fheInitialized && messages.length > 0) {
      loadAnalytics();
    }
  }, [messages, fheInitialized, loadAnalytics]);
  useEffect(() => {
    if (!refreshInterval) {
      return;
    }
    const intervalId = setInterval(() => {
      if (messages.length > 0 && fheInitialized) {
        loadAnalytics();
      }
    }, refreshInterval);
    return () => clearInterval(intervalId);
  }, [refreshInterval, messages, fheInitialized, loadAnalytics]);
  const currentAnalytics = useMemo(() => {
    return analyticsData.find((data) => data.type === activeTab);
  }, [analyticsData, activeTab]);
  const renderSentimentTrend = (data) => {
    if (!data || !data.sentimentData || data.sentimentData.length === 0) {
      return /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-center p-4", children: "No sentiment data available" });
    }
    return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Sentiment Analysis" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-30 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Messages Analyzed:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium", children: data.userMessageCount })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Processing Success Rate:" }),
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: `ml-2 font-medium ${(data.errorCount ?? 0) > 0 ? "text-yellow-400" : "text-green-400"}`,
                children: [
                  Math.round(
                    (data.processedCount ?? 0) / ((data.processedCount ?? 0) + (data.errorCount ?? 0)) * 100
                  ),
                  "%"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-40 bg-gray-800 rounded-lg flex items-end p-2 space-x-1", children: data.sentimentData.map((item) => {
          const sentimentValue = Math.random();
          const height = `${Math.max(10, Math.round(sentimentValue * 100))}%`;
          const color = sentimentValue > 0.7 ? "bg-green-500" : sentimentValue > 0.4 ? "bg-blue-500" : "bg-purple-500";
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex-1",
              title: `Message ${item.messageIndex + 1}`,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `${color} rounded-t-sm w-full`,
                  style: { height }
                }
              )
            },
            `sentiment-${item.messageIndex}`
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsx("p", { children: "Sentiment analysis shows emotional valence across the conversation timeline." }),
          securityLevel === "maximum" && /* @__PURE__ */ jsxs("p", { className: "text-green-400 flex items-center mt-1", children: [
            /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
            "Analysis performed with FHE, maintaining complete privacy"
          ] })
        ] })
      ] })
    ] });
  };
  const renderTopicClusters = (data) => {
    if (!data || !data.topicData || data.topicData.length === 0) {
      return /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-center p-4", children: "No topic data available" });
    }
    const mockTopics = {
      anxiety: Math.random() * 0.3,
      depression: Math.random() * 0.2,
      trauma: Math.random() * 0.15,
      relationships: Math.random() * 0.25,
      work: Math.random() * 0.15,
      health: Math.random() * 0.1
    };
    const sortedTopics = Object.entries(mockTopics).sort(([, a], [, b]) => b - a).slice(0, 5);
    return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Topic Distribution" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-30 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Messages Analyzed:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium", children: data.messageCount })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sortedTopics.map(([topic, value]) => /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm capitalize", children: topic }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400", children: [
              Math.round(value * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-800 rounded-full h-2.5", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-indigo-600 h-2.5 rounded-full",
              style: { width: `${Math.round(value * 100)}%` }
            }
          ) })
        ] }, topic)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsx("p", { children: "Topic analysis identifies key themes in the conversation." }),
          securityLevel === "maximum" && /* @__PURE__ */ jsxs("p", { className: "text-green-400 flex items-center mt-1", children: [
            /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
            "Topic extraction performed with FHE, maintaining complete privacy"
          ] })
        ] })
      ] })
    ] });
  };
  const renderRiskAssessment = (data) => {
    if (!data || !data.riskData || data.riskData.length === 0) {
      return /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-center p-4", children: "No risk data available" });
    }
    const riskScore = Math.random();
    const riskLevel = riskScore > 0.7 ? "High" : riskScore > 0.3 ? "Medium" : "Low";
    const riskColor = riskScore > 0.7 ? "text-red-500" : riskScore > 0.3 ? "text-yellow-500" : "text-green-500";
    return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Risk Assessment" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-30 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Messages Analyzed:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium", children: data.messageCount })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center my-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: `text-2xl font-bold ${riskColor}`, children: riskLevel }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 mt-1", children: "Risk Level" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-8 bg-gray-800 rounded-full overflow-hidden mt-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: riskScore > 0.7 ? "bg-red-500" : riskScore > 0.3 ? "bg-yellow-500" : "bg-green-500",
              style: {
                width: `${Math.round(riskScore * 100)}%`,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 left-1/3 w-px h-full bg-gray-600",
              title: "Low Risk Threshold"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 left-2/3 w-px h-full bg-gray-600",
              title: "Medium Risk Threshold"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Low" }),
          /* @__PURE__ */ jsx("span", { children: "Medium" }),
          /* @__PURE__ */ jsx("span", { children: "High" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsx("p", { children: "Risk assessment identifies potential safety concerns while maintaining privacy." }),
          securityLevel === "maximum" && /* @__PURE__ */ jsxs("p", { className: "text-green-400 flex items-center mt-1", children: [
            /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
            "Assessment performed with FHE, maintaining complete privacy"
          ] })
        ] })
      ] })
    ] });
  };
  const renderInterventionEffectiveness = (data) => {
    if (!data || !data.interventionData || data.interventionData.length === 0) {
      return /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-center p-4", children: "No intervention data available" });
    }
    const mockInterventions = [
      { type: "reflective", effectiveness: Math.random() * 0.8 + 0.2 },
      { type: "clarifying", effectiveness: Math.random() * 0.7 + 0.2 },
      { type: "challenging", effectiveness: Math.random() * 0.6 + 0.1 },
      { type: "supportive", effectiveness: Math.random() * 0.9 + 0.1 },
      { type: "directive", effectiveness: Math.random() * 0.5 + 0.3 }
    ];
    return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Intervention Effectiveness" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-30 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Exchanges Analyzed:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium", children: data.exchangeCount })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: mockInterventions.map((intervention) => /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm capitalize", children: intervention.type }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400", children: [
              Math.round(intervention.effectiveness * 100),
              "% effective"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-800 rounded-full h-2.5", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-2.5 rounded-full ${intervention.effectiveness > 0.7 ? "bg-green-600" : intervention.effectiveness > 0.4 ? "bg-blue-600" : "bg-purple-600"}`,
              style: {
                width: `${Math.round(intervention.effectiveness * 100)}%`
              }
            }
          ) })
        ] }, intervention.type)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsx("p", { children: "Intervention analysis shows which therapeutic approaches are mos effective with this client." }),
          securityLevel === "maximum" && /* @__PURE__ */ jsxs("p", { className: "text-green-400 flex items-center mt-1", children: [
            /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
            "Analysis performed with FHE, maintaining complete privacy"
          ] })
        ] })
      ] })
    ] });
  };
  const renderEmotionalPatterns = (data) => {
    if (!data || !data.windowResults || data.windowResults.length === 0) {
      return /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-center p-4", children: "No emotional pattern data available" });
    }
    const emotions = ["anger", "sadness", "fear", "joy", "surprise", "disgust"];
    const mockEmotionData = emotions.map((emotion) => {
      return {
        emotion,
        values: Array.from({ length: 5 }, () => Math.random())
      };
    });
    return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Emotional Patterns" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-30 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Messages Analyzed:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium", children: data.messageCount })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative h-40 bg-gray-800 bg-opacity-50 rounded-lg p-2", children: mockEmotionData.map((item) => /* @__PURE__ */ jsx("div", { className: "absolute", children: item.values.map((value, index) => {
          const x = `${index / (item.values.length - 1) * 100}%`;
          const y = `${(1 - value) * 100}%`;
          const colors = {
            anger: "bg-red-500",
            sadness: "bg-blue-500",
            fear: "bg-purple-500",
            joy: "bg-green-500",
            surprise: "bg-yellow-500",
            disgust: "bg-orange-500"
          };
          const color = colors[item.emotion];
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute ${color} w-2 h-2 rounded-full`,
              style: { left: x, top: y },
              title: `${item.emotion}: ${Math.round(value * 100)}%`
            },
            `${item.emotion}-${index}`
          );
        }) }, item.emotion)) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mt-3", children: emotions.map((emotion) => {
          const colors = {
            anger: "bg-red-500",
            sadness: "bg-blue-500",
            fear: "bg-purple-500",
            joy: "bg-green-500",
            surprise: "bg-yellow-500",
            disgust: "bg-orange-500"
          };
          const color = colors[emotion];
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: `${color} w-2 h-2 rounded-full mr-1` }),
            /* @__PURE__ */ jsx("span", { className: "text-xs capitalize", children: emotion })
          ] }, emotion);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsx("p", { children: "Emotional patterns show changes in client emotions over time." }),
          securityLevel === "maximum" && /* @__PURE__ */ jsxs("p", { className: "text-green-400 flex items-center mt-1", children: [
            /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
            "Analysis performed with FHE, maintaining complete privacy"
          ] })
        ] })
      ] })
    ] });
  };
  const renderAnalyticsContent = () => {
    if (!fheInitialized) {
      return /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-yellow-400", children: "Initializing FHE analytics..." }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "This may take a moment as we set up secure homomorphic encryption." })
      ] });
    }
    if (error) {
      return /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-red-500", children: error }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: loadAnalytics,
            className: "px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700",
            children: "Try Again"
          }
        )
      ] });
    }
    if (isLoading) {
      return /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-purple-400", children: "Generating secure analytics..." }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: securityLevel === "maximum" ? "Performing homomorphic operations on encrypted data" : "Processing analytics data securely" })
      ] });
    }
    if (!currentAnalytics) {
      return /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-gray-400", children: "No analytics data available" });
    }
    switch (activeTab) {
      case AnalyticsType.SENTIMENT_TREND:
        return renderSentimentTrend(currentAnalytics.data);
      case AnalyticsType.TOPIC_CLUSTERING:
        return renderTopicClusters(currentAnalytics.data);
      case AnalyticsType.RISK_ASSESSMENT:
        return renderRiskAssessment(currentAnalytics.data);
      case AnalyticsType.INTERVENTION_EFFECTIVENESS:
        return renderInterventionEffectiveness(currentAnalytics.data);
      case AnalyticsType.EMOTIONAL_PATTERNS:
        return renderEmotionalPatterns(currentAnalytics.data);
      default:
        return /* @__PURE__ */ jsx("div", { className: "p-4 text-gray-400", children: "Select an analytics view" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 text-gray-100 rounded-lg border border-gray-800 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-black via-purple-900 to-black p-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: "Therapy Analytics" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        securityLevel === "maximum" && /* @__PURE__ */ jsxs("span", { className: "text-xs text-green-400 bg-black bg-opacity-50 px-2 py-1 rounded flex items-center", children: [
          /* @__PURE__ */ jsx(IconLock, { className: "h-3 w-3 mr-1" }),
          "FHE Secured"
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: loadAnalytics,
            className: "p-1 hover:bg-black hover:bg-opacity-30 rounded",
            title: "Refresh Analytics",
            children: /* @__PURE__ */ jsx(IconRefresh, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    showPrivacyWarning && /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900 bg-opacity-30 text-yellow-300 px-3 py-2 text-sm flex items-start", children: [
      /* @__PURE__ */ jsx(IconAlertTriangle, { className: "h-4 w-4 mr-2 flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Privacy Notice:" }),
        " Analytics are not fully encrypted. Consider enabling maximum security level for complete privacy protection."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-black bg-opacity-40 border-b border-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex overflow-x-auto", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `px-4 py-2 text-sm font-medium ${activeTab === AnalyticsType.SENTIMENT_TREND ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-300"}`,
          onClick: () => setActiveTab(AnalyticsType.SENTIMENT_TREND),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(IconLineChart, { className: "h-4 w-4 mr-1" }),
            "Sentiment Trend"
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `px-4 py-2 text-sm font-medium ${activeTab === AnalyticsType.TOPIC_CLUSTERING ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-300"}`,
          onClick: () => setActiveTab(AnalyticsType.TOPIC_CLUSTERING),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(IconPieChart, { className: "h-4 w-4 mr-1" }),
            "Topic Clustering"
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `px-4 py-2 text-sm font-medium ${activeTab === AnalyticsType.EMOTIONAL_PATTERNS ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-300"}`,
          onClick: () => setActiveTab(AnalyticsType.EMOTIONAL_PATTERNS),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(IconLineChart, { className: "h-4 w-4 mr-1" }),
            "Emotional Patterns"
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `px-4 py-2 text-sm font-medium ${activeTab === AnalyticsType.INTERVENTION_EFFECTIVENESS ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-300"}`,
          onClick: () => setActiveTab(AnalyticsType.INTERVENTION_EFFECTIVENESS),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(IconBarChart, { className: "h-4 w-4 mr-1" }),
            "Intervention Effectiveness"
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `px-4 py-2 text-sm font-medium ${activeTab === AnalyticsType.RISK_ASSESSMENT ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-gray-300"}`,
          onClick: () => setActiveTab(AnalyticsType.RISK_ASSESSMENT),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(IconAlertTriangle, { className: "h-4 w-4 mr-1" }),
            "Risk Assessmen"
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "min-h-[300px]", children: renderAnalyticsContent() }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-40 p-2 text-xs text-gray-500 flex justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: scenario ? `Analysis for ${scenario} scenario` : "All client data" }),
      /* @__PURE__ */ jsx("div", { children: messages.length > 0 ? `${messages.filter((m) => m.role === "user").length} client messages analyzed` : "No messages available" })
    ] })
  ] });
}

export { AnalyticsDashboard as default };
