;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3658c531-154d-408f-970a-7360bbe9be7f",e._sentryDebugIdIdentifier="sentry-dbid-3658c531-154d-408f-970a-7360bbe9be7f")}catch(e){}}();import { WebSocketServer, WebSocket } from 'ws';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger$1 = createBuildSafeLogger("BiasWebSocketServer");
class BiasWebSocketServer {
  constructor(config) {
    this.config = config;
  }
  wss = null;
  clients = /* @__PURE__ */ new Map();
  isRunning = false;
  heartbeatInterval;
  metricsInterval;
  bannedIPs = /* @__PURE__ */ new Map();
  messageRateLimits = /* @__PURE__ */ new Map();
  async start() {
    if (this.isRunning) {
      logger$1.warn("WebSocket server is already running");
      return;
    }
    try {
      this.wss = new WebSocketServer({
        port: this.config.port,
        verifyClient: (info) => this.verifyClient(info)
      });
      this.wss.on("connection", (ws, request) => {
        this.handleConnection(ws, request);
      });
      this.wss.on("error", (error) => {
        logger$1.error("WebSocket server error", { error });
      });
      this.startHeartbeat();
      this.startMetricsCollection();
      this.isRunning = true;
      logger$1.info("Bias WebSocket server started", {
        port: this.config.port,
        maxConnections: this.config.maxConnections
      });
    } catch (error) {
      logger$1.error("Failed to start WebSocket server", { error });
      throw error;
    }
  }
  async stop() {
    if (!this.isRunning) {
      return;
    }
    try {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
      }
      if (this.metricsInterval) {
        clearInterval(this.metricsInterval);
      }
      delete this.heartbeatInterval;
      delete this.metricsInterval;
      for (const [clientId, client] of this.clients) {
        try {
          client.ws.close(1001, "Server shutting down");
        } catch (error) {
          logger$1.warn("Error closing client connection", { clientId, error });
        }
      }
      this.clients.clear();
      if (this.wss) {
        await new Promise((resolve, reject) => {
          this.wss.close((error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
        this.wss = null;
      }
      this.isRunning = false;
      logger$1.info("Bias WebSocket server stopped successfully");
    } catch (error) {
      logger$1.error("Error stopping WebSocket server", { error });
      throw error;
    }
  }
  /**
   * Verify client connection
   */
  verifyClient(info) {
    const { origin, req } = info;
    const remoteAddress = req.socket?.remoteAddress;
    if (this.bannedIPs.has(remoteAddress || "unknown")) {
      const banExpiry = this.bannedIPs.get(remoteAddress || "unknown");
      if (banExpiry > /* @__PURE__ */ new Date()) {
        logger$1.warn("Rejected connection from banned IP", {
          ipAddress: remoteAddress
        });
        return false;
      } else {
        this.bannedIPs.delete(remoteAddress || "unknown");
      }
    }
    if (this.clients.size >= this.config.maxConnections) {
      logger$1.warn("Rejected connection due to max connections limit", {
        currentConnections: this.clients.size,
        maxConnections: this.config.maxConnections,
        ipAddress: remoteAddress
      });
      return false;
    }
    if (this.config.corsOrigins.length > 0 && (!origin || !this.config.corsOrigins.includes(origin))) {
      logger$1.warn("Rejected connection due to CORS policy", {
        origin,
        ipAddress: remoteAddress
      });
      return false;
    }
    return true;
  }
  /**
   * Handle new WebSocket connection
   */
  handleConnection(ws, request) {
    const clientId = this.generateClientId();
    const { socket, headers } = request;
    const remoteAddress = socket?.remoteAddress;
    const userAgent = headers["user-agent"] || "unknown";
    const client = {
      id: clientId,
      ws,
      subscriptions: /* @__PURE__ */ new Set(),
      filters: {},
      lastPing: /* @__PURE__ */ new Date(),
      isAuthenticated: !this.config.authRequired,
      ipAddress: remoteAddress || "unknown",
      userAgent
    };
    this.clients.set(clientId, client);
    logger$1.info("New WebSocket connection", {
      clientId,
      ipAddress: remoteAddress,
      userAgent,
      totalConnections: this.clients.size
    });
    ws.on("message", (data) => this.handleMessage(clientId, data));
    ws.on(
      "close",
      (code, reason) => this.handleDisconnection(clientId, code, reason)
    );
    ws.on("error", (error) => {
      logger$1.error("WebSocket client error", { clientId, error });
      this.handleDisconnection(clientId, 1011, Buffer.from("Internal error"));
    });
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: {
          status: "healthy",
          timestamp: /* @__PURE__ */ new Date(),
          services: {
            pythonService: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            database: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            cache: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            alertSystem: { status: "up", lastCheck: /* @__PURE__ */ new Date() }
          },
          version: "1.0.0",
          uptime: 0
        },
        changedServices: []
      }
    });
  }
  /**
   * Handle incoming WebSocket message
   */
  handleMessage(clientId, data) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    if (!this.checkRateLimit(clientId)) {
      this.banClient(clientId, "Rate limit exceeded");
      return;
    }
    try {
      const message = JSON.parse(data.toString());
      switch (message.type) {
        case "subscribe":
          this.handleSubscription(clientId, message);
          break;
        case "unsubscribe":
          this.handleUnsubscription(clientId, message);
          break;
        case "update_subscription":
          this.handleSubscriptionUpdate(clientId, message);
          break;
        case "heartbeat":
          this.handleHeartbeat(clientId);
          break;
        case "heartbeat_response":
          client.lastPing = /* @__PURE__ */ new Date();
          break;
        case "authenticate":
          this.handleAuthentication(clientId, message);
          break;
        case "get_dashboard_data":
          this.handleDashboardDataRequest(clientId, message);
          break;
        default:
          logger$1.warn("Unknown message type", { clientId, type: message.type });
      }
    } catch (error) {
      logger$1.error("Error parsing WebSocket message", { clientId, error });
      this.sendErrorToClient(clientId, "Invalid message format");
    }
  }
  /**
   * Handle client subscription
   */
  handleSubscription(clientId, message) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    if (!client.isAuthenticated && this.config.authRequired) {
      this.sendErrorToClient(clientId, "Authentication required");
      return;
    }
    const channels = message.channels || [];
    const filters = message.filters || {};
    for (const channel of channels) {
      client.subscriptions.add(channel);
    }
    client.filters = { ...client.filters, ...filters };
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: {
          status: "healthy",
          timestamp: /* @__PURE__ */ new Date(),
          services: {
            pythonService: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            database: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            cache: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            alertSystem: { status: "up", lastCheck: /* @__PURE__ */ new Date() }
          },
          version: "1.0.0",
          uptime: 0
        },
        changedServices: []
      }
    });
  }
  /**
   * Handle client unsubscription
   */
  handleUnsubscription(clientId, message) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    const channels = message.channels || [];
    for (const channel of channels) {
      client.subscriptions.delete(channel);
    }
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: {
          status: "healthy",
          timestamp: /* @__PURE__ */ new Date(),
          services: {
            pythonService: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            database: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            cache: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            alertSystem: { status: "up", lastCheck: /* @__PURE__ */ new Date() }
          },
          version: "1.0.0",
          uptime: 0
        },
        changedServices: []
      }
    });
  }
  /**
   * Handle subscription update
   */
  handleSubscriptionUpdate(clientId, message) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    const filters = message.filters || {};
    client.filters = { ...client.filters, ...filters };
    logger$1.debug("Client updated subscription filters", {
      clientId,
      filters: client.filters
    });
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: {
          status: "healthy",
          timestamp: /* @__PURE__ */ new Date(),
          services: {
            pythonService: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            database: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            cache: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            alertSystem: { status: "up", lastCheck: /* @__PURE__ */ new Date() }
          },
          version: "1.0.0",
          uptime: 0
        },
        changedServices: []
      }
    });
  }
  handleHeartbeat(clientId) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    client.lastPing = /* @__PURE__ */ new Date();
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {}
    });
  }
  /**
   * Handle authentication
   */
  handleAuthentication(clientId, message) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    const { token, userId } = message;
    if (token && userId && this.validateAuthToken(token, userId)) {
      client.isAuthenticated = true;
      client.userId = userId;
      this.sendToClient(clientId, {
        type: "system-status",
        timestamp: /* @__PURE__ */ new Date(),
        data: {
          status: "authenticated",
          userId,
          permissions: this.getUserPermissions(userId)
        }
      });
    } else {
      logger$1.warn("Client authentication failed", { clientId, userId });
      this.sendToClient(clientId, {
        type: "system-status",
        timestamp: /* @__PURE__ */ new Date(),
        data: {
          status: "authentication_failed",
          error: "Invalid credentials"
        }
      });
    }
  }
  /**
   * Handle dashboard data request
   */
  async handleDashboardDataRequest(clientId, _message) {
    const client = this.clients.get(clientId);
    if (!client || !client.isAuthenticated) {
      this.sendErrorToClient(clientId, "Authentication required");
      return;
    }
    try {
      const dashboardData = {
        summary: {
          totalSessions: 0,
          averageBiasScore: 0,
          alertsLast24h: 0,
          totalAlerts: 0,
          criticalIssues: 0,
          improvementRate: 0,
          complianceScore: 0
        },
        recentAnalyses: [],
        alerts: [],
        trends: [],
        demographics: {
          age: {},
          gender: {},
          ethnicity: {},
          language: {},
          intersectional: []
        },
        recommendations: []
      };
      this.sendToClient(clientId, {
        type: "dashboard-update",
        timestamp: /* @__PURE__ */ new Date(),
        data: {
          summary: dashboardData.summary,
          newAlerts: dashboardData.alerts,
          updatedTrends: dashboardData.trends
        }
      });
    } catch (error) {
      logger$1.error("Error fetching dashboard data", { clientId, error });
      this.sendErrorToClient(clientId, "Failed to fetch dashboard data");
    }
  }
  /**
   * Handle client disconnection
   */
  handleDisconnection(clientId, code, reason) {
    const client = this.clients.get(clientId);
    if (client) {
      logger$1.info("WebSocket client disconnected", {
        clientId,
        code,
        reason: reason.toString(),
        totalConnections: this.clients.size - 1
      });
      this.clients.delete(clientId);
    }
  }
  /**
   * Broadcast bias alert to subscribed clients
   */
  async broadcastBiasAlert(alert, analysisResult) {
    const alertEvent = {
      type: "bias-alert",
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: analysisResult.sessionId,
      data: {
        alert,
        analysisResult,
        requiresImmediateAction: alert.level === "critical" || alert.level === "high"
      }
    };
    await this.broadcastToSubscribers("bias_alerts", alertEvent, (client) => {
      return this.shouldReceiveAlert(client, alert);
    });
    logger$1.info("Broadcast bias alert to clients", {
      alertId: alert.alertId,
      level: alert.level,
      recipientCount: this.getSubscriberCount("bias_alerts")
    });
  }
  /**
   * Broadcast dashboard update to subscribed clients
   */
  async broadcastDashboardUpdate(dashboardData) {
    const updateEvent = {
      type: "dashboard-update",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        summary: dashboardData.summary,
        newAlerts: dashboardData.alerts?.slice(0, 5) || [],
        updatedTrends: dashboardData.trends?.slice(-10) || []
      }
    };
    await this.broadcastToSubscribers("dashboard_updates", updateEvent);
    logger$1.debug("Broadcast dashboard update to clients", {
      recipientCount: this.getSubscriberCount("dashboard_updates")
    });
  }
  /**
   * Broadcast system status to subscribed clients
   */
  async broadcastSystemStatus(status) {
    const statusEvent = {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: {
          status: status.status,
          timestamp: /* @__PURE__ */ new Date(),
          services: {
            pythonService: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            database: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            cache: { status: "up", lastCheck: /* @__PURE__ */ new Date() },
            alertSystem: { status: "up", lastCheck: /* @__PURE__ */ new Date() }
          },
          version: "1.0.0",
          uptime: 0
        },
        changedServices: []
      }
    };
    await this.broadcastToSubscribers("system_status", statusEvent);
    logger$1.debug("Broadcast system status to clients", {
      status: status.status,
      recipientCount: this.getSubscriberCount("system_status")
    });
  }
  /**
   * Broadcast analysis completion to subscribed clients
   */
  async broadcastAnalysisComplete(analysisResult, processingTime) {
    const completeEvent = {
      type: "analysis-complete",
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: analysisResult.sessionId,
      data: {
        sessionId: analysisResult.sessionId,
        result: analysisResult,
        processingTime
      }
    };
    await this.broadcastToSubscribers("analysis_complete", completeEvent);
    logger$1.debug("Broadcast analysis completion to clients", {
      sessionId: analysisResult.sessionId,
      processingTime,
      recipientCount: this.getSubscriberCount("analysis_complete")
    });
  }
  /**
   * Broadcast message to subscribers of a specific channel
   */
  async broadcastToSubscribers(channel, message, filter) {
    const recipients = [];
    for (const [clientId, client] of this.clients) {
      if (client.subscriptions.has(channel) && client.isAuthenticated && (!filter || filter(client))) {
        try {
          this.sendToClient(clientId, message);
          recipients.push(clientId);
        } catch (error) {
          logger$1.error("Failed to send message to client", {
            clientId,
            error
          });
        }
      }
    }
    logger$1.debug("Broadcast completed", {
      channel,
      messageType: message.type,
      recipientCount: recipients.length,
      totalClients: this.clients.size
    });
  }
  /**
   * Send message to specific client
   */
  sendToClient(clientId, message) {
    const client = this.clients.get(clientId);
    if (!client || client.ws.readyState !== WebSocket.OPEN) {
      return;
    }
    try {
      client.ws.send(JSON.stringify(message));
    } catch (error) {
      logger$1.error("Error sending message to client", { clientId, error });
      this.clients.delete(clientId);
    }
  }
  sendErrorToClient(clientId, error) {
    this.sendToClient(clientId, {
      type: "system-status",
      timestamp: /* @__PURE__ */ new Date(),
      data: {
        status: "error",
        error
      }
    });
  }
  checkRateLimit(clientId) {
    const now = /* @__PURE__ */ new Date();
    const client = this.clients.get(clientId);
    if (!client) {
      return false;
    }
    const messages = this.messageRateLimits.get(clientId) || [];
    const recentMessages = messages.filter(
      (time) => now.getTime() - time.getTime() < 6e4
    );
    if (recentMessages.length >= this.config.rateLimitConfig.maxMessagesPerMinute) {
      return false;
    }
    recentMessages.push(now);
    this.messageRateLimits.set(clientId, recentMessages);
    return true;
  }
  banClient(clientId, reason) {
    const client = this.clients.get(clientId);
    if (!client) {
      return;
    }
    const banExpiry = new Date(
      Date.now() + this.config.rateLimitConfig.banDurationMs
    );
    this.bannedIPs.set(client.ipAddress, banExpiry);
    logger$1.warn("Client banned", { clientId, reason, banExpiry });
    client.ws.close(1008, reason);
    this.clients.delete(clientId);
  }
  shouldReceiveAlert(client, alert) {
    if (client.filters.alertLevelFilter && client.filters.alertLevelFilter !== "all" && alert.level !== client.filters.alertLevelFilter) {
      return false;
    }
    return true;
  }
  getSubscriberCount(channel) {
    let count = 0;
    for (const client of this.clients.values()) {
      if (client.subscriptions.has(channel) && client.isAuthenticated) {
        count++;
      }
    }
    return count;
  }
  validateAuthToken(token, userId) {
    return !!(token && userId);
  }
  getUserPermissions(userId) {
    if (!userId) {
      return [];
    }
    return ["bias_analysis_read", "dashboard_read", "alerts_read"];
  }
  startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      const now = /* @__PURE__ */ new Date();
      const timeout = this.config.heartbeatInterval * 2;
      for (const [clientId, client] of this.clients) {
        if (now.getTime() - client.lastPing.getTime() > timeout) {
          logger$1.warn("Client heartbeat timeout", { clientId });
          client.ws.close(1001, "Heartbeat timeout");
          this.clients.delete(clientId);
        } else {
          this.sendToClient(clientId, {
            type: "system-status",
            timestamp: now,
            data: {
              status: "heartbeat"
            }
          });
        }
      }
    }, this.config.heartbeatInterval);
  }
  startMetricsCollection() {
    this.metricsInterval = setInterval(() => {
      logger$1.info("WebSocket server metrics", {
        activeConnections: this.clients.size,
        bannedIPs: this.bannedIPs.size,
        uptime: process.uptime()
      });
    }, 6e4);
  }
  generateClientId() {
    return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  getStats() {
    return {
      isRunning: this.isRunning,
      activeConnections: this.clients.size,
      bannedIPs: this.bannedIPs.size
    };
  }
  /**
   * Get connected clients information
   */
  getClients() {
    return Array.from(this.clients.values()).map((client) => ({
      id: client.id,
      isAuthenticated: client.isAuthenticated,
      userId: client.userId,
      subscriptions: Array.from(client.subscriptions),
      ipAddress: client.ipAddress,
      connectedSince: client.lastPing
    }));
  }
}

const logger = createBuildSafeLogger("BiasAlertsWebSocketAPI");
let wsServer = null;
const wsConfig = {
  port: parseInt(process.env["WS_PORT"] || "8080"),
  heartbeatInterval: 3e4,
  // 30 seconds
  maxConnections: parseInt(process.env["WS_MAX_CONNECTIONS"] || "1000"),
  authRequired: process.env["WS_AUTH_REQUIRED"] === "true",
  corsOrigins: process.env["WS_CORS_ORIGINS"]?.split(",") || [
    "http://localhost:3000",
    "http://localhost:4321"
  ],
  rateLimitConfig: {
    maxMessagesPerMinute: parseInt(process.env["WS_RATE_LIMIT"] || "60"),
    banDurationMs: parseInt(process.env["WS_BAN_DURATION"] || "300000")
    // 5 minutes
  }
};
async function initializeWebSocketServer() {
  if (!wsServer) {
    wsServer = new BiasWebSocketServer(wsConfig);
    try {
      await wsServer.start();
      logger.info("WebSocket server initialized successfully", {
        port: wsConfig.port,
        maxConnections: wsConfig.maxConnections
      });
    } catch (error) {
      logger.error("Failed to initialize WebSocket server", { error });
      throw error;
    }
  }
  return wsServer;
}
const GET = async () => {
  try {
    const server = await initializeWebSocketServer();
    const status = server.getStats();
    const clients = server.getClients();
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          status,
          clients: clients.map((client) => ({
            id: client.id,
            isAuthenticated: client.isAuthenticated,
            subscriptions: client.subscriptions,
            connectedSince: client.connectedSince
          })),
          config: {
            port: wsConfig.port,
            heartbeatInterval: wsConfig.heartbeatInterval,
            maxConnections: wsConfig.maxConnections,
            authRequired: wsConfig.authRequired
          }
        },
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      }
    );
  } catch (error) {
    logger.error("Failed to get WebSocket server status", { error });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to get WebSocket server status",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { type = "test", level = "medium", message, sessionId } = body;
    const server = await initializeWebSocketServer();
    const testAlert = {
      alertId: `test_${Date.now()}`,
      type,
      level,
      message: message || `Test bias alert - ${level} level`,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: sessionId || `test_session_${Date.now()}`,
      acknowledged: false,
      details: {
        test: true,
        generatedBy: "API",
        requestId: crypto.randomUUID()
      }
    };
    const testAnalysisResult = {
      sessionId: testAlert.sessionId,
      timestamp: /* @__PURE__ */ new Date(),
      overallBiasScore: Math.random() * 0.5 + (level === "critical" ? 0.8 : level === "high" ? 0.6 : 0.3),
      alertLevel: level,
      confidence: Math.random() * 0.3 + 0.7,
      layerResults: {
        preprocessing: {
          biasScore: Math.random() * 0.4 + 0.2,
          linguisticBias: {
            genderBiasScore: Math.random() * 0.3,
            racialBiasScore: Math.random() * 0.3,
            ageBiasScore: Math.random() * 0.3,
            culturalBiasScore: Math.random() * 0.3,
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
          recommendations: [`Test preprocessing recommendation for ${level}`]
        },
        modelLevel: {
          biasScore: Math.random() * 0.4 + 0.2,
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
          recommendations: [`Test model-level recommendation for ${level}`]
        },
        interactive: {
          biasScore: Math.random() * 0.4 + 0.2,
          counterfactualAnalysis: {
            scenariosAnalyzed: 3,
            biasDetected: Math.random() > 0.5,
            consistencyScore: Math.random() * 0.3 + 0.7,
            problematicScenarios: []
          },
          featureImportance: [],
          whatIfScenarios: [],
          recommendations: [`Test interactive recommendation for ${level}`]
        },
        evaluation: {
          biasScore: Math.random() * 0.4 + 0.2,
          huggingFaceMetrics: {
            toxicity: 0.05,
            bias: Math.random() * 0.4 + 0.2,
            regard: {},
            stereotype: Math.random() * 0.3 + 0.1,
            fairness: Math.random() * 0.3 + 0.7
          },
          customMetrics: {
            therapeuticBias: Math.random() * 0.3 + 0.1,
            culturalSensitivity: Math.random() * 0.3 + 0.7,
            professionalEthics: Math.random() * 0.2 + 0.8,
            patientSafety: Math.random() * 0.2 + 0.8
          },
          temporalAnalysis: {
            trendDirection: "stable",
            changeRate: 0,
            seasonalPatterns: [],
            interventionEffectiveness: []
          },
          recommendations: [`Test evaluation recommendation for ${level}`]
        }
      },
      recommendations: [`Test recommendation for ${level} bias alert`],
      demographics: {
        age: "25",
        gender: "other",
        ethnicity: "test",
        primaryLanguage: "en",
        totalSamples: 100,
        categories: {
          test: 100
        }
      }
    };
    await server.broadcastBiasAlert(testAlert, testAnalysisResult);
    logger.info("Test bias alert sent", {
      alertId: testAlert.alertId,
      level: testAlert.level,
      sessionId: testAlert.sessionId
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          alert: testAlert,
          analysisResult: testAnalysisResult,
          broadcastStatus: "sent"
        },
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    logger.error("Failed to send test bias alert", { error });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send test bias alert",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    const { action } = body;
    const server = await initializeWebSocketServer();
    switch (action) {
      case "restart":
        await server.stop();
        await server.start();
        logger.info("WebSocket server restarted");
        break;
      case "status":
        break;
      default:
        throw new Error(`Unknown action: ${action}`);
    }
    const status = server.getStats();
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          action,
          status,
          message: `Action '${action}' completed successfully`
        },
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    logger.error("Failed to update WebSocket server", { error });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to update WebSocket server",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
const DELETE = async () => {
  try {
    if (wsServer) {
      await wsServer.stop();
      wsServer = null;
      logger.info("WebSocket server stopped");
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          message: "WebSocket server stopped successfully"
        },
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    logger.error("Failed to stop WebSocket server", { error });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to stop WebSocket server",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
function getWebSocketServer() {
  return wsServer;
}
if (process.env["NODE_ENV"] === "production" && process.env["WS_AUTO_START"] === "true") {
  initializeWebSocketServer().catch((error) => {
    logger.error("Failed to auto-start WebSocket server", { error });
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PATCH,
  POST,
  getWebSocketServer
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
