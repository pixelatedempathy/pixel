;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2824a640-1dcb-420c-8b45-42c0df197f23",e._sentryDebugIdIdentifier="sentry-dbid-2824a640-1dcb-420c-8b45-42c0df197f23")}catch(e){}}();import { B as BiasDetectionEngine } from './BiasDetectionEngine_C8zwley6.mjs';
import './cache_kByHIQ4w.mjs';
import './astro/server_DzSu7Vuv.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_By1itFZO.mjs';

const logger = createBuildSafeLogger("BiasExportAPI");
const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const format = url.searchParams.get("format") || "json";
    const timeRange = url.searchParams.get("timeRange") || "24h";
    const includeDetails = url.searchParams.get("includeDetails") === "true";
    logger.info("Exporting bias detection data", {
      format,
      timeRange,
      includeDetails
    });
    const biasEngine = new BiasDetectionEngine({
      pythonServiceUrl: process.env.BIAS_DETECTION_SERVICE_URL || "http://localhost:8000",
      pythonServiceTimeout: 3e4,
      thresholds: {
        warningLevel: 0.3,
        highLevel: 0.6,
        criticalLevel: 0.8
      },
      layerWeights: {
        preprocessing: 0.2,
        modelLevel: 0.3,
        interactive: 0.2,
        evaluation: 0.3
      },
      evaluationMetrics: ["bias", "fairness", "toxicity"],
      metricsConfig: {
        enableRealTimeMonitoring: true,
        metricsRetentionDays: 90,
        aggregationIntervals: ["1h", "1d", "1w"],
        dashboardRefreshRate: 30,
        exportFormats: ["json", "csv", "pdf"]
      },
      alertConfig: {
        enableSlackNotifications: false,
        enableEmailNotifications: false,
        emailRecipients: [],
        alertCooldownMinutes: 15,
        escalationThresholds: {
          criticalResponseTimeMinutes: 5,
          highResponseTimeMinutes: 15
        }
      },
      reportConfig: {
        includeConfidentialityAnalysis: true,
        includeDemographicBreakdown: true,
        includeTemporalTrends: true,
        includeRecommendations: true,
        reportTemplate: "standard",
        exportFormats: ["json", "csv", "pdf"]
      },
      explanationConfig: {
        explanationMethod: "shap",
        maxFeatures: 10,
        includeCounterfactuals: true,
        generateVisualization: false
      },
      hipaaCompliant: true,
      dataMaskingEnabled: true,
      auditLogging: true
    });
    const dashboardData = await biasEngine.getDashboardData({
      timeRange,
      includeDetails
    });
    switch (format.toLowerCase()) {
      case "json":
        return exportAsJSON(dashboardData);
      case "csv":
        return exportAsCSV(dashboardData);
      case "pdf":
        return exportAsPDF(dashboardData);
      default:
        return new Response(
          JSON.stringify({
            error: "Unsupported format",
            message: "Supported formats: json, csv, pdf"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
    }
  } catch (error) {
    logger.error("Export failed", { error });
    return new Response(
      JSON.stringify({
        error: "Export failed",
        message: error instanceof Error ? error.message : "Unknown error"
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
function exportAsJSON(data) {
  const exportData = {
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    format: "json",
    data
  };
  return new Response(JSON.stringify(exportData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="bias-detection-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json"`
    }
  });
}
function exportAsCSV(data) {
  const csvRows = [];
  csvRows.push(
    [
      "Session ID",
      "Timestamp",
      "Bias Score",
      "Alert Level",
      "Gender",
      "Age",
      "Ethnicity",
      "Scenario",
      "Recommendations"
    ].join(",")
  );
  if (data && typeof data === "object" && "recentSessions" in data && Array.isArray(data.recentSessions)) {
    data.recentSessions.forEach((session) => {
      csvRows.push(
        [
          session.sessionId,
          session.timestamp,
          session.biasScore,
          session.alertLevel,
          session.participantDemographics?.gender || "",
          session.participantDemographics?.age || "",
          session.participantDemographics?.ethnicity || "",
          session.scenario || "",
          ""
          // Recommendations would need to be flattened
        ].join(",")
      );
    });
  }
  csvRows.push(["", "", "", "", "", "", "", "", ""]);
  csvRows.push(["ALERTS", "", "", "", "", "", "", "", ""]);
  csvRows.push(
    [
      "Alert ID",
      "Session ID",
      "Level",
      "Message",
      "Timestamp",
      "Bias Type",
      "Confidence",
      "Affected Demographics",
      "Recommendations"
    ].join(",")
  );
  if (data && typeof data === "object" && "alerts" in data && Array.isArray(data.alerts)) {
    data.alerts.forEach((alert) => {
      csvRows.push(
        [
          alert.id,
          alert.sessionId,
          alert.level,
          `"${alert.message}"`,
          alert.timestamp,
          alert.biasType,
          alert.confidence,
          alert.affectedDemographics?.join(";") || "",
          alert.recommendations?.join(";") || ""
        ].join(",")
      );
    });
  }
  const csvContent = csvRows.join("\n");
  return new Response(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="bias-detection-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv"`
    }
  });
}
function exportAsPDF(data) {
  const summary = data && typeof data === "object" && "summary" in data ? data.summary : {};
  const alerts = data && typeof data === "object" && "alerts" in data ? data.alerts : [];
  const demographics = data && typeof data === "object" && "demographics" in data ? data.demographics : { breakdown: [] };
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Bias Detection Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .summary { background: #f5f5f5; padding: 15px; margin-bottom: 20px; }
        .section { margin-bottom: 25px; }
        .alert { padding: 10px; margin: 10px 0; border-left: 4px solid #ff6b6b; }
        .alert.high { border-color: #ff6b6b; }
        .alert.medium { border-color: #ffa726; }
        .alert.low { border-color: #42a5f5; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Bias Detection Report</h1>
        <p>Generated on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
      </div>
      
      <div class="summary">
        <h2>Summary</h2>
        <p><strong>Total Sessions:</strong> ${summary?.totalSessions || "N/A"}</p>
        <p><strong>Average Bias Score:</strong> ${summary?.averageBiasScore || "N/A"}</p>
        <p><strong>Active Alerts:</strong> ${summary?.alertsCount || "N/A"}</p>
        <p><strong>Trend:</strong> ${summary?.trendsDirection || "N/A"}</p>
      </div>
      
      <div class="section">
        <h2>Recent Alerts</h2>
        ${alerts?.map(
    (alert) => `
          <div class="alert ${alert.level}">
            <h4>${alert.message}</h4>
            <p><strong>Session:</strong> ${alert.sessionId}</p>
            <p><strong>Type:</strong> ${alert.biasType}</p>
            <p><strong>Confidence:</strong> ${(alert.confidence * 100).toFixed(1)}%</p>
            <p><strong>Affected Demographics:</strong> ${alert.affectedDemographics?.join(", ") || "N/A"}</p>
          </div>
        `
  ).join("") || "<p>No alerts found.</p>"}
      </div>
      
      <div class="section">
        <h2>Demographic Breakdown</h2>
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Count</th>
              <th>Percentage</th>
              <th>Avg Bias Score</th>
            </tr>
          </thead>
          <tbody>
            ${demographics?.breakdown?.map(
    (group) => `
              <tr>
                <td>${group.group}</td>
                <td>${group.count}</td>
                <td>${group.percentage}%</td>
                <td>${group.averageBiasScore}</td>
              </tr>
            `
  ).join("") || '<tr><td colspan="4">No data available</td></tr>'}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;
  return new Response(htmlContent, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Content-Disposition": `attachment; filename="bias-detection-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.html"`
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
//# sourceMappingURL=export_Dye0pMzA.mjs.map
