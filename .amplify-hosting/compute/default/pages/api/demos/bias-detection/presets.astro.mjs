;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b6a01f62-0ecf-4f35-a00a-d2bdd5a1e6b7",e._sentryDebugIdIdentifier="sentry-dbid-b6a01f62-0ecf-4f35-a00a-d2bdd5a1e6b7")}catch(e){}}();import { h as getPresetScenario, P as PRESET_SCENARIOS, i as getPresetScenariosByCategory, j as getPresetScenariosByRiskLevel } from '../../../../chunks/demo-helpers_BrysuyTL.mjs';
import '../../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const { searchParams } = new URL(url);
    const category = searchParams.get("category");
    const riskLevel = searchParams.get("risk");
    const id = searchParams.get("id");
    if (id) {
      const preset = getPresetScenario(id);
      if (!preset) {
        return new Response(
          JSON.stringify({
            error: "Preset scenario not found",
            availableIds: PRESET_SCENARIOS.map((s) => s.id)
          }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      return new Response(
        JSON.stringify({
          success: true,
          preset,
          metadata: {
            totalPresets: PRESET_SCENARIOS.length,
            categories: [...new Set(PRESET_SCENARIOS.map((s) => s.category))],
            riskLevels: [...new Set(PRESET_SCENARIOS.map((s) => s.riskLevel))]
          }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (category) {
      const scenarios = getPresetScenariosByCategory(category);
      if (scenarios.length === 0) {
        return new Response(
          JSON.stringify({
            error: "No scenarios found for category",
            availableCategories: [
              ...new Set(PRESET_SCENARIOS.map((s) => s.category))
            ]
          }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      return new Response(
        JSON.stringify({
          success: true,
          scenarios,
          filter: { category },
          count: scenarios.length
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (riskLevel) {
      const scenarios = getPresetScenariosByRiskLevel(
        riskLevel
      );
      if (scenarios.length === 0) {
        return new Response(
          JSON.stringify({
            error: "No scenarios found for risk level",
            availableRiskLevels: [
              ...new Set(PRESET_SCENARIOS.map((s) => s.riskLevel))
            ]
          }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      return new Response(
        JSON.stringify({
          success: true,
          scenarios,
          filter: { riskLevel },
          count: scenarios.length
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const categoryCounts = PRESET_SCENARIOS.reduce(
      (acc, scenario) => {
        acc[scenario.category] = (acc[scenario.category] || 0) + 1;
        return acc;
      },
      {}
    );
    const riskLevelCounts = PRESET_SCENARIOS.reduce(
      (acc, scenario) => {
        acc[scenario.riskLevel] = (acc[scenario.riskLevel] || 0) + 1;
        return acc;
      },
      {}
    );
    return new Response(
      JSON.stringify({
        success: true,
        scenarios: PRESET_SCENARIOS,
        metadata: {
          total: PRESET_SCENARIOS.length,
          categories: Object.keys(categoryCounts),
          riskLevels: Object.keys(riskLevelCounts),
          distribution: {
            byCategory: categoryCounts,
            byRiskLevel: riskLevelCounts
          }
        },
        usage: {
          examples: {
            getAll: "/api/demos/bias-detection/presets",
            getById: "/api/demos/bias-detection/presets?id=high-bias-cultural",
            getByCategory: "/api/demos/bias-detection/presets?category=cultural",
            getByRisk: "/api/demos/bias-detection/presets?risk=high"
          }
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600"
          // Cache for 1 hour since presets are static
        }
      }
    );
  } catch (error) {
    console.error("Presets API error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const POST = async () => {
  return new Response(
    JSON.stringify({
      error: "Custom preset creation not yet implemented",
      message: "This feature will be available in a future version",
      availableEndpoints: ["GET /api/demos/bias-detection/presets"]
    }),
    {
      status: 501,
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
