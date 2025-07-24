;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="91c739bf-c240-43f8-8d2e-3151deaf074e",e._sentryDebugIdIdentifier="sentry-dbid-91c739bf-c240-43f8-8d2e-3151deaf074e")}catch(e){}}();import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const GET = async ({ request }) => {
  const upgrade = request.headers.get("upgrade");
  if (upgrade !== "websocket") {
    return new Response(
      JSON.stringify({
        error: "WebSocket upgrade required",
        message: "This endpoint requires a WebSocket connection",
        usage: {
          protocol: "ws:// or wss://",
          endpoint: "/api/demos/bias-detection/websocket",
          supportedMessages: [
            "analyze - Real-time bias analysis",
            "subscribe - Subscribe to analysis updates",
            "ping - Connection health check"
          ]
        }
      }),
      {
        status: 426,
        headers: {
          "Content-Type": "application/json",
          "Upgrade": "websocket"
        }
      }
    );
  }
  return new Response(
    JSON.stringify({
      service: "Real-time Bias Detection WebSocket",
      status: "available",
      features: [
        "Real-time analysis streaming",
        "Live confidence updates",
        "Progressive bias scoring",
        "Instant alert notifications",
        "Multi-client support"
      ],
      messageTypes: {
        client: {
          analyze: {
            type: "analyze",
            payload: {
              content: "string (required)",
              demographics: "object (required)",
              sessionId: "string (optional)",
              scenario: "string (optional)"
            }
          },
          subscribe: {
            type: "subscribe",
            payload: {
              sessionId: "string (required)",
              events: "array of event types"
            }
          },
          ping: {
            type: "ping",
            payload: {}
          }
        },
        server: {
          analysisProgress: {
            type: "analysis_progress",
            payload: {
              sessionId: "string",
              progress: "number (0-100)",
              currentLayer: "string",
              partialResults: "object"
            }
          },
          analysisComplete: {
            type: "analysis_complete",
            payload: {
              sessionId: "string",
              results: "BiasAnalysisResults object",
              counterfactualScenarios: "array",
              historicalComparison: "object"
            }
          },
          alert: {
            type: "alert",
            payload: {
              sessionId: "string",
              alertLevel: "string",
              message: "string",
              timestamp: "string"
            }
          },
          error: {
            type: "error",
            payload: {
              message: "string",
              code: "string",
              sessionId: "string (optional)"
            }
          },
          pong: {
            type: "pong",
            payload: {
              timestamp: "string"
            }
          }
        }
      },
      implementation: {
        note: "WebSocket implementation would be handled by the runtime environment",
        frameworks: [
          "Node.js with ws library",
          "Deno with WebSocket API",
          "Cloudflare Workers with WebSocket"
        ],
        considerations: [
          "Connection management and cleanup",
          "Rate limiting per connection",
          "Authentication and authorization",
          "Message queuing for offline clients",
          "Horizontal scaling with Redis pub/sub"
        ]
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (body.type === "test_connection") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "WebSocket connection test successful",
          simulatedResponse: {
            type: "connection_established",
            payload: {
              connectionId: `ws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              supportedFeatures: [
                "real-time-analysis",
                "progress-streaming",
                "alert-notifications",
                "multi-session-support"
              ],
              limits: {
                maxConcurrentAnalyses: 5,
                maxMessageSize: 1048576,
                // 1MB
                heartbeatInterval: 3e4
                // 30 seconds
              }
            }
          }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (body.type === "simulate_analysis") {
      const progressSteps = [
        {
          progress: 10,
          layer: "preprocessing",
          message: "Analyzing linguistic patterns..."
        },
        {
          progress: 30,
          layer: "preprocessing",
          message: "Detecting demographic bias indicators..."
        },
        {
          progress: 50,
          layer: "model",
          message: "Evaluating fairness metrics..."
        },
        {
          progress: 70,
          layer: "interactive",
          message: "Generating counterfactual scenarios..."
        },
        {
          progress: 90,
          layer: "evaluation",
          message: "Computing final bias scores..."
        },
        { progress: 100, layer: "complete", message: "Analysis complete" }
      ];
      return new Response(
        JSON.stringify({
          success: true,
          message: "Simulated real-time analysis flow",
          progressSteps,
          estimatedDuration: "2-5 seconds",
          finalResult: {
            type: "analysis_complete",
            payload: {
              sessionId: body.sessionId || "demo_session",
              overallBiasScore: 0.35,
              alertLevel: "medium",
              confidence: 0.87,
              processingTime: 3200
            }
          }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: "Unknown message type",
        supportedTypes: ["test_connection", "simulate_analysis"]
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch {
    return new Response(
      JSON.stringify({
        error: "Invalid request body",
        message: "Expected JSON with type field"
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
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
