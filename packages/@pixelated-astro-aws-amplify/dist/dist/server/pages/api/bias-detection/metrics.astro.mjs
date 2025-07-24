;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e08a5330-465b-4391-8971-7348a29b12a7",e._sentryDebugIdIdentifier="sentry-dbid-e08a5330-465b-4391-8971-7348a29b12a7")}catch(e){}}();import { z } from 'zod';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const metricsQuerySchema = z.object({
  timeRange: z.coerce.number().min(6e4).max(864e5).optional(),
  format: z.enum(["json", "prometheus"]).optional().default("json"),
  metrics: z.string().optional(),
  aggregation: z.enum(["raw", "summary"]).optional().default("summary")
});
async function GET({ url }) {
  const startTime = Date.now();
  try {
    const queryParams = Object.fromEntries(url.searchParams.entries());
    const queryResult = metricsQuerySchema.safeParse(queryParams);
    if (!queryResult.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid query parameters",
          details: queryResult.error.errors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const query = queryResult.data;
    const mockMetrics = {
      timestamp: Date.now(),
      timeRange: query.timeRange || 3e5,
      summary: {
        totalRequests: 1250,
        averageResponseTime: 120,
        biasDetectionRuns: 45,
        alertsTriggered: 3
      },
      meta: {
        totalMetrics: 4,
        metricsTypes: ["requests", "response_time", "bias_runs", "alerts"],
        requestDuration: Date.now() - startTime
      }
    };
    if (query.format === "prometheus") {
      const prometheusData = `# HELP bias_detection_requests_total Total number of bias detection requests
# TYPE bias_detection_requests_total counter
bias_detection_requests_total ${mockMetrics.summary.totalRequests}

# HELP bias_detection_response_time_avg Average response time in milliseconds  
# TYPE bias_detection_response_time_avg gauge
bias_detection_response_time_avg ${mockMetrics.summary.averageResponseTime}

# HELP bias_detection_runs_total Total bias detection algorithm runs
# TYPE bias_detection_runs_total counter  
bias_detection_runs_total ${mockMetrics.summary.biasDetectionRuns}

# HELP bias_detection_alerts_total Total alerts triggered
# TYPE bias_detection_alerts_total counter
bias_detection_alerts_total ${mockMetrics.summary.alertsTriggered}
`;
      return new Response(prometheusData, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
    return new Response(JSON.stringify(mockMetrics, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("Metrics endpoint error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
