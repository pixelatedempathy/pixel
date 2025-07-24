;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6a34aaf5-bea9-483d-932d-beb766dad944",e._sentryDebugIdIdentifier="sentry-dbid-6a34aaf5-bea9-483d-932d-beb766dad944")}catch(e){}}();import { f as createExportData } from '../../../../chunks/demo-helpers_DvaNeIqq.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.analysisResults) {
      return new Response(
        JSON.stringify({
          error: "Missing required field: analysisResults"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const {
      analysisResults,
      counterfactualScenarios = [],
      historicalComparison = null,
      format = "json",
      includeComponents = {
        analysis: true,
        counterfactual: true,
        historical: true,
        recommendations: true,
        demographics: true
      }
    } = body;
    const supportedFormats = ["json", "csv", "txt"];
    if (!supportedFormats.includes(format)) {
      return new Response(
        JSON.stringify({
          error: "Unsupported export format",
          supportedFormats
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const exportData = createExportData(
      analysisResults,
      counterfactualScenarios,
      historicalComparison
    );
    const filteredExportData = {
      ...exportData,
      analysis: includeComponents.analysis ? exportData.analysis : void 0,
      counterfactualScenarios: includeComponents.counterfactual ? exportData.counterfactualScenarios : void 0,
      historicalComparison: includeComponents.historical ? exportData.historicalComparison : void 0,
      metadata: {
        ...exportData.metadata,
        includedComponents: Object.keys(includeComponents).filter(
          (key) => includeComponents[key]
        )
      }
    };
    switch (format) {
      case "json":
        return new Response(JSON.stringify(filteredExportData, null, 2), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Content-Disposition": `attachment; filename="bias-analysis-${analysisResults.sessionId}.json"`
          }
        });
      case "csv": {
        const csvData = convertToCSV(filteredExportData);
        return new Response(csvData, {
          status: 200,
          headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename="bias-analysis-${analysisResults.sessionId}.csv"`
          }
        });
      }
      case "txt": {
        const txtData = convertToText(filteredExportData);
        return new Response(txtData, {
          status: 200,
          headers: {
            "Content-Type": "text/plain",
            "Content-Disposition": `attachment; filename="bias-analysis-report-${analysisResults.sessionId}.txt"`
          }
        });
      }
      default:
        return new Response(
          JSON.stringify({
            error: "Invalid format specified"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
    }
  } catch (error) {
    console.error("Export API error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error during export",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
function convertToCSV(exportData) {
  const csvRows = [];
  csvRows.push("Category,Metric,Value,Details");
  if (exportData.analysis) {
    const { analysis } = exportData;
    csvRows.push(
      `Analysis,Overall Bias Score,${analysis.overallBiasScore},${analysis.alertLevel}`
    );
    csvRows.push(`Analysis,Confidence,${analysis.confidence},`);
    csvRows.push(`Analysis,Session ID,${analysis.sessionId},`);
    const layers = analysis.layerResults;
    csvRows.push(
      `Preprocessing,Gender Bias,${layers.preprocessing.linguisticBias.genderBiasScore},`
    );
    csvRows.push(
      `Preprocessing,Racial Bias,${layers.preprocessing.linguisticBias.racialBiasScore},`
    );
    csvRows.push(
      `Preprocessing,Age Bias,${layers.preprocessing.linguisticBias.ageBiasScore},`
    );
    csvRows.push(
      `Preprocessing,Cultural Bias,${layers.preprocessing.linguisticBias.culturalBiasScore},`
    );
    csvRows.push(
      `Model,Demographic Parity,${layers.modelLevel.fairnessMetrics.demographicParity},`
    );
    csvRows.push(
      `Model,Equalized Odds,${layers.modelLevel.fairnessMetrics.equalizedOdds},`
    );
    csvRows.push(
      `Model,Calibration,${layers.modelLevel.fairnessMetrics.calibration},`
    );
    csvRows.push(
      `Interactive,Scenarios Analyzed,${layers.interactive.counterfactualAnalysis.scenariosAnalyzed},`
    );
    csvRows.push(
      `Interactive,Bias Detected,${layers.interactive.counterfactualAnalysis.biasDetected},`
    );
    csvRows.push(
      `Interactive,Consistency Score,${layers.interactive.counterfactualAnalysis.consistencyScore},`
    );
  }
  if (exportData.counterfactualScenarios) {
    const scenarios = exportData.counterfactualScenarios;
    scenarios.forEach((scenario, index) => {
      csvRows.push(
        `Counterfactual,Scenario ${index + 1},${scenario.expectedBiasReduction},${scenario.change}`
      );
      csvRows.push(
        `Counterfactual,Likelihood ${index + 1},${scenario.likelihood},${scenario.description}`
      );
    });
  }
  if (exportData.historicalComparison) {
    const historical = exportData.historicalComparison;
    csvRows.push(`Historical,30-Day Average,${historical.thirtyDayAverage},`);
    csvRows.push(`Historical,Percentile Rank,${historical.percentileRank},`);
    csvRows.push(`Historical,7-Day Trend,${historical.sevenDayTrend},`);
  }
  return csvRows.join("\n");
}
function convertToText(exportData) {
  let content = `BIAS DETECTION ANALYSIS REPORT
`;
  content += `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
  content += `${"=".repeat(50)}

`;
  if (exportData.analysis) {
    const { analysis } = exportData;
    content += `ANALYSIS RESULTS
`;
    content += `Session ID: ${analysis.sessionId}
`;
    content += `Overall Bias Score: ${(analysis.overallBiasScore * 100).toFixed(1)}%
`;
    content += `Alert Level: ${analysis.alertLevel.toUpperCase()}
`;
    content += `Confidence: ${(analysis.confidence * 100).toFixed(1)}%

`;
    content += `LAYER ANALYSIS
`;
    const layers = analysis.layerResults;
    content += `Gender Bias: ${(layers.preprocessing.linguisticBias.genderBiasScore * 100).toFixed(1)}%
`;
    content += `Racial Bias: ${(layers.preprocessing.linguisticBias.racialBiasScore * 100).toFixed(1)}%
`;
    content += `Age Bias: ${(layers.preprocessing.linguisticBias.ageBiasScore * 100).toFixed(1)}%
`;
    content += `Cultural Bias: ${(layers.preprocessing.linguisticBias.culturalBiasScore * 100).toFixed(1)}%

`;
    if (analysis.recommendations && analysis.recommendations.length > 0) {
      content += `RECOMMENDATIONS
`;
      analysis.recommendations.forEach((rec, index) => {
        content += `${index + 1}. ${rec}
`;
      });
      content += `
`;
    }
  }
  if (exportData.counterfactualScenarios && Array.isArray(exportData.counterfactualScenarios)) {
    content += `COUNTERFACTUAL SCENARIOS
`;
    const scenarios = exportData.counterfactualScenarios;
    scenarios.forEach((scenario, index) => {
      content += `${index + 1}. ${scenario.change}
`;
      content += `   Expected Reduction: ${(scenario.expectedBiasReduction * 100).toFixed(1)}%
`;
      content += `   Likelihood: ${scenario.likelihood}
`;
      content += `   Description: ${scenario.description}

`;
    });
  }
  if (exportData.historicalComparison) {
    const historical = exportData.historicalComparison;
    content += `HISTORICAL COMPARISON
`;
    content += `30-Day Average: ${(historical.thirtyDayAverage * 100).toFixed(1)}%
`;
    content += `Percentile Rank: ${historical.percentileRank}th
`;
    content += `7-Day Trend: ${historical.sevenDayTrend}

`;
  }
  content += `Report generated by Pixelated Empathy Bias Detection System v${exportData.metadata.version}
`;
  return content;
}
const GET = async () => {
  return new Response(
    JSON.stringify({
      service: "Bias Detection Export API",
      version: "2.0.0",
      supportedFormats: ["json", "csv", "txt"],
      usage: {
        endpoint: "POST /api/demos/bias-detection/export",
        requiredFields: ["analysisResults"],
        optionalFields: [
          "counterfactualScenarios",
          "historicalComparison",
          "format",
          "includeComponents"
        ],
        examples: {
          json: { format: "json" },
          csv: { format: "csv" },
          text: { format: "txt" }
        }
      },
      includeComponents: {
        analysis: "Core bias analysis results",
        counterfactual: "Counterfactual scenario analysis",
        historical: "Historical progress comparison",
        recommendations: "AI-generated recommendations",
        demographics: "Client demographic context"
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
