;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e5ef6d93-3d07-4753-a2ce-2d4d6aa9c047",e._sentryDebugIdIdentifier="sentry-dbid-e5ef6d93-3d07-4753-a2ce-2d4d6aa9c047")}catch(e){}}();import { B as BiasDetectionEngine } from './BiasDetectionEngine_LWnMxt9o.mjs';
import './cache_Dq5YBkVs.mjs';
import './astro/server_t-wqd6mp.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';

const logger = createBuildSafeLogger("BiasDashboardAPI");
let biasEngineInstance = null;
async function getBiasEngine() {
  if (!biasEngineInstance) {
    biasEngineInstance = new BiasDetectionEngine({
      thresholds: {
        warningLevel: 0.3,
        highLevel: 0.6,
        criticalLevel: 0.8
      },
      hipaaCompliant: true,
      auditLogging: true
    });
    await biasEngineInstance.initialize();
  }
  return biasEngineInstance;
}
const GET = async (context) => {
  const startTime = Date.now();
  try {
    const { request } = context;
    const url = new URL(request.url);
    const timeRange = url.searchParams.get("timeRange") || "24h";
    const demographicFilter = url.searchParams.get("demographic") || "all";
    const includeDetails = url.searchParams.get("includeDetails") === "true";
    logger.info("Fetching bias detection dashboard data", {
      timeRange,
      demographicFilter,
      includeDetails
    });
    const biasEngine = await getBiasEngine();
    const dashboardData = await biasEngine.getDashboardData({
      timeRange,
      includeDetails
    });
    const processingTime = Date.now() - startTime;
    logger.info("Dashboard data retrieved successfully", {
      timeRange,
      processingTimeMs: processingTime,
      totalSessions: dashboardData.summary.totalSessions,
      alertCount: dashboardData.alerts.length
    });
    return new Response(JSON.stringify(dashboardData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=30",
        // Cache for 30 seconds
        "X-Processing-Time": processingTime.toString()
      }
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error("Failed to fetch bias detection dashboard data", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      processingTimeMs: processingTime
    });
    const statusCode = error instanceof Error && error.message.includes("not initialized") ? 503 : 500;
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({
        error: "Failed to fetch dashboard data",
        message: errorMessage,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        processingTime
      }),
      {
        status: statusCode,
        headers: {
          "Content-Type": "application/json",
          "X-Processing-Time": processingTime.toString()
        }
      }
    );
  }
};
process.on("SIGTERM", async () => {
  if (biasEngineInstance) {
    logger.info("Shutting down bias detection engine...");
    await biasEngineInstance.dispose();
    biasEngineInstance = null;
  }
});
process.on("SIGINT", async () => {
  if (biasEngineInstance) {
    logger.info("Shutting down bias detection engine...");
    await biasEngineInstance.dispose();
    biasEngineInstance = null;
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
