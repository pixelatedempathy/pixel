;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3cdd03b4-4ea8-4b9b-a444-96fd060f922a",e._sentryDebugIdIdentifier="sentry-dbid-3cdd03b4-4ea8-4b9b-a444-96fd060f922a")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { c as calculateBiasFactors, e as generateRecommendations, a as generateCounterfactualScenarios, b as generateHistoricalComparison, g as generateSessionId, f as createExportData, P as PRESET_SCENARIOS } from '../../chunks/demo-helpers_BrysuyTL.mjs';
/* empty css                                                      */
export { renderers } from '../../renderers.mjs';

const BiasAnalysisDisplay = ({
  results,
  sessionData
}) => {
  const getAlertLevelStyle = (level) => {
    switch (level) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const formatScore = (score) => `${(score * 100).toFixed(1)}%`;
  const getScoreColor = (score) => {
    if (score >= 0.8) {
      return "text-red-600";
    }
    if (score >= 0.6) {
      return "text-orange-600";
    }
    if (score >= 0.4) {
      return "text-yellow-600";
    }
    return "text-green-600";
  };
  return /* @__PURE__ */ jsxs("div", { className: "bias-analysis-display space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Overall Bias Score" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `text-4xl font-bold ${getScoreColor(results.overallBiasScore)}`,
              children: formatScore(results.overallBiasScore)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Confidence" }),
            /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-gray-900", children: formatScore(results.confidence) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `h-3 rounded-full transition-all duration-500 ${results.overallBiasScore >= 0.8 ? "bg-red-500" : results.overallBiasScore >= 0.6 ? "bg-orange-500" : results.overallBiasScore >= 0.4 ? "bg-yellow-500" : "bg-green-500"}`,
            style: { width: `${results.overallBiasScore * 100}%` }
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Alert Level" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `inline-flex items-center px-4 py-2 rounded-full border text-lg font-semibold ${getAlertLevelStyle(results.alertLevel)}`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-3 h-3 rounded-full mr-2 ${results.alertLevel === "critical" ? "bg-red-500" : results.alertLevel === "high" ? "bg-orange-500" : results.alertLevel === "medium" ? "bg-yellow-500" : "bg-green-500"}`
                }
              ),
              results.alertLevel.toUpperCase()
            ]
          }
        ),
        sessionData && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Session: ",
            results.sessionId
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Analyzed: ",
            results.timestamp.toLocaleString()
          ] }),
          sessionData.scenario && /* @__PURE__ */ jsxs("div", { children: [
            "Scenario: ",
            sessionData.scenario
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-6", children: "Multi-Layer Bias Analysis" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Preprocessing Layer" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-2xl font-bold ${getScoreColor(results.layerResults.preprocessing.linguisticBias.genderBiasScore)}`,
                  children: formatScore(
                    results.layerResults.preprocessing.linguisticBias.genderBiasScore
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Gender Bias" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-2xl font-bold ${getScoreColor(results.layerResults.preprocessing.linguisticBias.racialBiasScore)}`,
                  children: formatScore(
                    results.layerResults.preprocessing.linguisticBias.racialBiasScore
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Racial Bias" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-2xl font-bold ${getScoreColor(results.layerResults.preprocessing.linguisticBias.ageBiasScore)}`,
                  children: formatScore(
                    results.layerResults.preprocessing.linguisticBias.ageBiasScore
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Age Bias" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-2xl font-bold ${getScoreColor(results.layerResults.preprocessing.linguisticBias.culturalBiasScore)}`,
                  children: formatScore(
                    results.layerResults.preprocessing.linguisticBias.culturalBiasScore
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Cultural Bias" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-900", children: "Diversity Index" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-blue-700", children: formatScore(
                results.layerResults.preprocessing.representationAnalysis.diversityIndex
              ) })
            ] }),
            results.layerResults.preprocessing.representationAnalysis.underrepresentedGroups.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-blue-800", children: [
              "Underrepresented:",
              " ",
              results.layerResults.preprocessing.representationAnalysis.underrepresentedGroups.join(
                ", "
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Model Layer" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-purple-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(1 - results.layerResults.modelLevel.fairnessMetrics.demographicParity)}`,
                  children: formatScore(
                    results.layerResults.modelLevel.fairnessMetrics.demographicParity
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Demographic Parity" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-purple-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(1 - results.layerResults.modelLevel.fairnessMetrics.equalizedOdds)}`,
                  children: formatScore(
                    results.layerResults.modelLevel.fairnessMetrics.equalizedOdds
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Equalized Odds" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-purple-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(1 - results.layerResults.modelLevel.fairnessMetrics.calibration)}`,
                  children: formatScore(
                    results.layerResults.modelLevel.fairnessMetrics.calibration
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Calibration" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Interactive Layer" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-green-700", children: results.layerResults.interactive.counterfactualAnalysis.scenariosAnalyzed }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Scenarios Analyzed" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${results.layerResults.interactive.counterfactualAnalysis.biasDetected ? "text-red-600" : "text-green-600"}`,
                  children: results.layerResults.interactive.counterfactualAnalysis.biasDetected ? "YES" : "NO"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Bias Detected" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(1 - results.layerResults.interactive.counterfactualAnalysis.consistencyScore)}`,
                  children: formatScore(
                    results.layerResults.interactive.counterfactualAnalysis.consistencyScore
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Consistency" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Evaluation Layer" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-orange-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(results.layerResults.evaluation.huggingFaceMetrics.bias)}`,
                  children: formatScore(
                    results.layerResults.evaluation.huggingFaceMetrics.bias
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "HF Bias Score" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-orange-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-xl font-bold ${getScoreColor(results.layerResults.evaluation.huggingFaceMetrics.stereotype)}`,
                  children: formatScore(
                    results.layerResults.evaluation.huggingFaceMetrics.stereotype
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Stereotype Score" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-orange-50 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-green-600 font-semibold", children: [
                  "+",
                  formatScore(
                    results.layerResults.evaluation.huggingFaceMetrics.regard.positive
                  )
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-red-600 font-semibold", children: [
                  "-",
                  formatScore(
                    results.layerResults.evaluation.huggingFaceMetrics.regard.negative
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Regard Score" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    results.recommendations.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Recommendations" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: results.recommendations.map((recommendation) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-800", children: recommendation })
      ] }, recommendation)) })
    ] }),
    results.demographics && /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Demographic Context" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Age Group" }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: results.demographics.age })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Gender" }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: results.demographics.gender })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Ethnicity" }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: results.demographics.ethnicity })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Primary Language" }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: results.demographics.primaryLanguage })
        ] })
      ] })
    ] })
  ] });
};

const PresetScenarioSelector = ({
  scenarios,
  selectedScenario,
  onScenarioSelect,
  disabled = false
}) => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterRiskLevel, setFilterRiskLevel] = useState("all");
  const [previewScenario, setPreviewScenario] = useState(
    null
  );
  const categories = useMemo(() => {
    const cats = [...new Set(scenarios.map((s) => s.category))];
    return cats.sort();
  }, [scenarios]);
  const riskLevels = useMemo(() => {
    const levels = [...new Set(scenarios.map((s) => s.riskLevel))];
    return levels.sort((a, b) => {
      const order = { low: 1, medium: 2, high: 3, critical: 4 };
      return order[a] - order[b];
    });
  }, [scenarios]);
  const filteredScenarios = useMemo(() => {
    return scenarios.filter((scenario) => {
      const categoryMatch = filterCategory === "all" || scenario.category === filterCategory;
      const riskMatch = filterRiskLevel === "all" || scenario.riskLevel === filterRiskLevel;
      return categoryMatch && riskMatch;
    });
  }, [scenarios, filterCategory, filterRiskLevel]);
  const getRiskLevelStyle = (level) => {
    switch (level) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const getCategoryColor = (category) => {
    const colors = {
      cultural: "bg-purple-100 text-purple-800",
      gender: "bg-pink-100 text-pink-800",
      age: "bg-blue-100 text-blue-800",
      linguistic: "bg-indigo-100 text-indigo-800",
      intersectional: "bg-gray-100 text-gray-800",
      inclusive: "bg-green-100 text-green-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };
  return /* @__PURE__ */ jsxs("div", { className: "preset-scenario-selector", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "category-filter", className: "block text-sm font-medium text-gray-700 mb-1", children: "Category" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "category-filter",
              value: filterCategory,
              onChange: (e) => setFilterCategory(e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "All Categories" }),
                categories.map((category) => /* @__PURE__ */ jsx("option", { value: category, children: category.charAt(0).toUpperCase() + category.slice(1) }, category))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "risk-level-filter", className: "block text-sm font-medium text-gray-700 mb-1", children: "Risk Level" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "risk-level-filter",
              value: filterRiskLevel,
              onChange: (e) => setFilterRiskLevel(e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "All Risk Levels" }),
                riskLevels.map((level) => /* @__PURE__ */ jsx("option", { value: level, children: level.charAt(0).toUpperCase() + level.slice(1) }, level))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
        "Showing ",
        filteredScenarios.length,
        " of ",
        scenarios.length,
        " scenarios"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-96 overflow-y-auto", children: filteredScenarios.map((scenario) => /* @__PURE__ */ jsxs(
      "button",
      {
        className: `border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md w-full text-left ${selectedScenario?.id === scenario.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
        onClick: () => !disabled && onScenarioSelect(scenario),
        onKeyDown: (e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            onScenarioSelect(scenario);
          }
        },
        tabIndex: disabled ? -1 : 0,
        "aria-label": `Select scenario: ${scenario.title}`,
        "aria-disabled": disabled,
        onMouseEnter: () => setPreviewScenario(scenario),
        onMouseLeave: () => setPreviewScenario(null),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: scenario.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scenario.category)}`,
                  children: scenario.category
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `px-2 py-1 rounded-full text-xs font-medium border ${getRiskLevelStyle(scenario.riskLevel)}`,
                  children: scenario.riskLevel
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: scenario.description }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Age:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: scenario.demographics.age })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Gender:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: scenario.demographics.gender })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Ethnicity:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: scenario.demographics.ethnicity })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Language:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: scenario.demographics.primaryLanguage })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded p-3 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Sample Content:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-700 italic", children: [
              '"',
              scenario.content.length > 100 ? scenario.content.substring(0, 100) + "..." : scenario.content,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t pt-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-2", children: "Learning Objectives:" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1", children: [
              scenario.learningObjectives.slice(0, 2).map((objective, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-1", children: "•" }),
                objective
              ] }, index)),
              scenario.learningObjectives.length > 2 && /* @__PURE__ */ jsxs("li", { className: "text-gray-500 italic", children: [
                "+",
                scenario.learningObjectives.length - 2,
                " more objectives"
              ] })
            ] })
          ] }),
          selectedScenario?.id === scenario.id && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center text-blue-600", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-4 h-4 mr-1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    clipRule: "evenodd"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Selected" })
          ] })
        ]
      },
      scenario.id
    )) }),
    filteredScenarios.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-gray-500", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400 mb-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("p", { children: "No scenarios match the selected filters" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setFilterCategory("all");
            setFilterRiskLevel("all");
          },
          className: "mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium",
          children: "Clear filters"
        }
      )
    ] }),
    previewScenario && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: previewScenario.name }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setPreviewScenario(null),
            className: "text-gray-400 hover:text-gray-600",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Full Content:" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700 italic", children: [
            '"',
            previewScenario.content,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "All Learning Objectives:" }),
          /* @__PURE__ */ jsx("ul", { className: "text-sm text-gray-600 space-y-1", children: previewScenario.learningObjectives.map(
            (objective, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "•" }),
              objective
            ] }, index)
          ) })
        ] })
      ] })
    ] }) })
  ] });
};

const CounterfactualAnalysis = ({
  scenarios,
  originalSession
}) => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [sortBy, setSortBy] = useState(
    "likelihood"
  );
  const sortedScenarios = [...scenarios].sort((a, b) => {
    switch (sortBy) {
      case "likelihood": {
        const likelihoodOrder = { high: 3, medium: 2, low: 1 };
        return likelihoodOrder[b.likelihood] - likelihoodOrder[a.likelihood];
      }
      case "impact":
        return Math.abs(b.biasScoreChange) - Math.abs(a.biasScoreChange);
      case "change":
        return a.change.localeCompare(b.change);
      default:
        return 0;
    }
  });
  const getLikelihoodStyle = (likelihood) => {
    switch (likelihood) {
      case "high": {
        return "bg-green-100 text-green-800 border-green-200";
      }
      case "medium": {
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      }
      case "low": {
        return "bg-red-100 text-red-800 border-red-200";
      }
      default: {
        return "bg-gray-100 text-gray-800 border-gray-200";
      }
    }
  };
  const getImpactColor = (biasScoreChange) => {
    const absoluteChange = Math.abs(biasScoreChange);
    if (absoluteChange > 0.3) {
      return "text-green-600";
    }
    if (absoluteChange > 0.1) {
      return "text-yellow-600";
    }
    return "text-red-600";
  };
  const formatPercentage = (value) => `${(Math.abs(value) * 100).toFixed(1)}%`;
  const handleKeyDown = (event, scenario) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedScenario(selectedScenario === scenario ? null : scenario);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "counterfactual-analysis space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Counterfactual Analysis" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Explore how different scenarios might affect bias detection results" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "sort-select",
            className: "text-sm font-medium text-gray-700",
            children: "Sort by:"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "sort-select",
            value: sortBy,
            onChange: (e) => setSortBy(e.target.value),
            className: "px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            children: [
              /* @__PURE__ */ jsx("option", { value: "likelihood", children: "Likelihood" }),
              /* @__PURE__ */ jsx("option", { value: "impact", children: "Impact" }),
              /* @__PURE__ */ jsx("option", { value: "change", children: "Change Type" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: scenarios.length }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "Total Scenarios" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-green-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: scenarios.filter((s) => s.likelihood === "high").length }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-green-800", children: "High Likelihood" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-600", children: scenarios.length > 0 ? formatPercentage(
          Math.max(
            ...scenarios.map((s) => Math.abs(s.biasScoreChange))
          )
        ) : "0%" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-800", children: "Max Change" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-600", children: scenarios.length > 0 ? formatPercentage(
          scenarios.reduce(
            (sum, s) => sum + Math.abs(s.biasScoreChange),
            0
          ) / scenarios.length
        ) : "0%" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-orange-800", children: "Avg Change" })
      ] })
    ] }),
    originalSession && /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Original Session Context" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Age:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: originalSession.demographics.age })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Gender:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: originalSession.demographics.gender })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Ethnicity:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: originalSession.demographics.ethnicity })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Language:" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: originalSession.demographics.primaryLanguage })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: sortedScenarios.map((scenario) => /* @__PURE__ */ jsxs(
      "button",
      {
        className: `w-full text-left border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${selectedScenario === scenario ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
        onClick: () => setSelectedScenario(
          selectedScenario === scenario ? null : scenario
        ),
        onKeyDown: (e) => handleKeyDown(e, scenario),
        "aria-expanded": selectedScenario === scenario,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: scenario.change }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: scenario.impact })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `px-2 py-1 rounded-full text-xs font-medium border ${getLikelihoodStyle(scenario.likelihood)}`,
                  children: [
                    scenario.likelihood,
                    " likelihood"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `text-lg font-bold ${getImpactColor(scenario.biasScoreChange)}`,
                    children: [
                      scenario.biasScoreChange > 0 ? "+" : "",
                      formatPercentage(scenario.biasScoreChange)
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "bias change" })
              ] })
            ] })
          ] }),
          selectedScenario === scenario && /* @__PURE__ */ jsxs("div", { className: "border-t pt-4 mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "What Changes" }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white rounded border p-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-700", children: scenario.impact }),
                  scenario.change.includes("Demographics") && /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-blue-600", children: "This scenario explores how different demographic characteristics might affect bias detection." }),
                  scenario.change.includes("Language") && /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-purple-600", children: "This scenario examines the impact of therapeutic language choices on bias patterns." }),
                  scenario.change.includes("Cultural") && /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-green-600", children: "This scenario investigates cultural sensitivity in therapeutic approaches." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Expected Impact" }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white rounded border p-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Bias Score Change" }),
                    /* @__PURE__ */ jsxs(
                      "span",
                      {
                        className: `font-semibold ${getImpactColor(scenario.biasScoreChange)}`,
                        children: [
                          scenario.biasScoreChange > 0 ? "+" : "",
                          formatPercentage(scenario.biasScoreChange)
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2 mb-2", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `h-2 rounded-full ${Math.abs(scenario.biasScoreChange) > 0.3 ? "bg-green-500" : Math.abs(scenario.biasScoreChange) > 0.1 ? "bg-yellow-500" : "bg-red-500"}`,
                      style: {
                        width: `${Math.min(Math.abs(scenario.biasScoreChange) * 100, 100)}%`
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: Math.abs(scenario.biasScoreChange) > 0.3 ? "High impact expected" : Math.abs(scenario.biasScoreChange) > 0.1 ? "Moderate impact expected" : "Low impact expected" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Implementation Feasibility" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white rounded border p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Likelihood of Success" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `px-2 py-1 rounded text-xs font-medium ${getLikelihoodStyle(scenario.likelihood)}`,
                      children: scenario.likelihood.toUpperCase()
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-gray-700", children: [
                  scenario.likelihood === "high" && "This change is highly feasible and likely to produce the expected results.",
                  scenario.likelihood === "medium" && "This change is moderately feasible but may require additional considerations.",
                  scenario.likelihood === "low" && "This change may be challenging to implement or may not produce consistent results."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-gray-600", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Confidence:" }),
                  " ",
                  (scenario.confidence * 100).toFixed(1),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Recommended Actions" }),
              /* @__PURE__ */ jsx("div", { className: "bg-blue-50 rounded border border-blue-200 p-3", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                scenario.change.includes("Demographics") && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("li", { children: "• Review demographic assumptions in assessment tools" }),
                  /* @__PURE__ */ jsx("li", { children: "• Implement culturally responsive therapeutic approaches" })
                ] }),
                scenario.change.includes("Language") && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("li", { children: "• Use more inclusive and neutral language" }),
                  /* @__PURE__ */ jsx("li", { children: "• Avoid generalizations about cultural groups" })
                ] }),
                scenario.change.includes("Cultural") && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("li", { children: "• Increase cultural competency training" }),
                  /* @__PURE__ */ jsx("li", { children: "• Develop culturally adapted interventions" })
                ] }),
                /* @__PURE__ */ jsx("li", { children: "• Monitor bias patterns in similar scenarios" }),
                /* @__PURE__ */ jsx("li", { children: "• Collect feedback from diverse client populations" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-3", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-5 h-5 text-gray-400 transition-transform ${selectedScenario === scenario ? "rotate-180" : ""}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 9l-7 7-7-7"
                }
              )
            }
          ) })
        ]
      },
      scenario.id
    )) }),
    scenarios.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-gray-500", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400 mb-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("p", { children: "No counterfactual scenarios available" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-1", children: "Run a bias analysis first to generate scenarios" })
    ] })
  ] });
};

const HistoricalProgressTracker = ({ comparison, currentScore }) => {
  const getTrendStyle = (trend) => {
    switch (trend) {
      case "improving":
        return "text-green-600 bg-green-100";
      case "worsening":
        return "text-red-600 bg-red-100";
      case "stable":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
        return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
            clipRule: "evenodd"
          }
        ) });
      case "worsening":
        return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
          }
        ) });
      case "stable":
        return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
            clipRule: "evenodd"
          }
        ) });
      default:
        return null;
    }
  };
  const formatPercentage = (value) => `${(value * 100).toFixed(1)}%`;
  const getPercentileColor = (percentile) => {
    if (percentile >= 80) {
      return "text-green-600";
    }
    if (percentile >= 60) {
      return "text-yellow-600";
    }
    if (percentile >= 40) {
      return "text-orange-600";
    }
    return "text-red-600";
  };
  const scoreDifference = currentScore - comparison.thirtyDayAverage;
  const isImprovement = scoreDifference < 0;
  return /* @__PURE__ */ jsxs("div", { className: "historical-progress-tracker space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Historical Progress Tracking" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Compare current performance against historical bias detection patterns" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white border border-gray-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: formatPercentage(currentScore) }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-2", children: "Current Score" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `text-sm font-medium ${isImprovement ? "text-green-600" : "text-red-600"}`,
            children: [
              isImprovement ? "↓" : "↑",
              " ",
              formatPercentage(Math.abs(scoreDifference)),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 ml-1", children: "vs avg" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600 mb-1", children: formatPercentage(comparison.thirtyDayAverage) }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800 mb-2", children: "30-Day Average" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600", children: "Historical baseline" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `text-2xl font-bold mb-1 ${getPercentileColor(comparison.percentileRank)}`,
            children: [
              comparison.percentileRank,
              "th"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-800 mb-2", children: "Percentile" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600", children: comparison.percentileRank >= 80 ? "Excellent" : comparison.percentileRank >= 60 ? "Good" : comparison.percentileRank >= 40 ? "Fair" : "Needs Improvement" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `border rounded-lg p-4 ${getTrendStyle(comparison.sevenDayTrend)}`,
          children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mb-2", children: [
              getTrendIcon(comparison.sevenDayTrend),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-lg font-bold", children: comparison.sevenDayTrend.charAt(0).toUpperCase() + comparison.sevenDayTrend.slice(1) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm opacity-80 mb-1", children: "7-Day Trend" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs opacity-70", children: [
              comparison.sevenDayTrend === "improving" && "Bias scores decreasing",
              comparison.sevenDayTrend === "worsening" && "Bias scores increasing",
              comparison.sevenDayTrend === "stable" && "Consistent performance"
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Performance Comparison" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Current Session" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-900", children: formatPercentage(currentScore) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-3 rounded-full ${currentScore >= 0.8 ? "bg-red-500" : currentScore >= 0.6 ? "bg-orange-500" : currentScore >= 0.4 ? "bg-yellow-500" : "bg-green-500"}`,
              style: { width: `${currentScore * 100}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "30-Day Average" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-blue-600", children: formatPercentage(comparison.thirtyDayAverage) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-3 rounded-full bg-blue-500",
              style: { width: `${comparison.thirtyDayAverage * 100}%` }
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Performance Insights" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
          isImprovement ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
              "Current session shows",
              " ",
              formatPercentage(Math.abs(scoreDifference)),
              " improvement over historical average"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
              "Performance is trending in the right direction"
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-orange-500 mr-2", children: "⚠" }),
              "Current session shows",
              " ",
              formatPercentage(Math.abs(scoreDifference)),
              " higher bias than historical average"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "ℹ" }),
              "Consider reviewing recent changes in approach or client demographics"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "ℹ" }),
            "You're performing better than ",
            comparison.percentileRank,
            "% of similar sessions"
          ] }),
          comparison.sevenDayTrend === "improving" && /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2", children: "📈" }),
            "Recent 7-day trend shows consistent improvement"
          ] }),
          comparison.sevenDayTrend === "worsening" && /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2", children: "📉" }),
            "Recent 7-day trend indicates need for attention"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-900 mb-4", children: "Historical Recommendations" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        comparison.percentileRank < 50 && /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-blue-600 mr-2 mt-0.5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900", children: "Focus on Improvement" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "Your current performance is below the median. Consider additional bias awareness training." })
          ] })
        ] }),
        comparison.sevenDayTrend === "worsening" && /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-blue-600 mr-2 mt-0.5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900", children: "Address Recent Decline" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "Recent trend shows increasing bias. Review recent sessions and identify potential causes." })
          ] })
        ] }),
        comparison.percentileRank >= 80 && /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-blue-600 mr-2 mt-0.5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900", children: "Excellent Performance" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "You're performing in the top 20%. Consider mentoring others or sharing best practices." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-blue-600 mr-2 mt-0.5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900", children: "Continue Monitoring" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "Regular analysis helps maintain awareness and track long-term progress patterns." })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const SessionInputForm = ({
  onSubmit,
  disabled = false,
  initialData
}) => {
  const [formData, setFormData] = useState({
    scenario: initialData?.scenario || "",
    demographics: {
      age: initialData?.demographics.age || "26-35",
      gender: initialData?.demographics.gender || "female",
      ethnicity: initialData?.demographics.ethnicity || "white",
      primaryLanguage: initialData?.demographics.primaryLanguage || "en"
    },
    content: initialData?.content || ""
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (initialData) {
      setFormData({
        scenario: initialData.scenario || "",
        demographics: initialData.demographics,
        content: initialData.content
      });
    }
  }, [initialData]);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    } else if (formData.content.trim().length < 10) {
      newErrors.content = "Content must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onSubmit({
      scenario: formData.scenario || void 0,
      demographics: formData.demographics,
      content: formData.content.trim()
    });
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };
  const handleDemographicChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        [field]: value
      }
    }));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "session-input-form space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "scenario", className: "block text-sm font-medium text-gray-700 mb-1", children: "Scenario Name (Optional)" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "scenario",
          type: "text",
          value: formData.scenario,
          onChange: (e) => handleInputChange("scenario", e.target.value),
          disabled,
          placeholder: "e.g., anxiety-treatment, depression-session",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Client Demographics" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "age-group", className: "block text-sm font-medium text-gray-700 mb-1", children: "Age Group" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "age-group",
              value: formData.demographics.age,
              onChange: (e) => handleDemographicChange("age", e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "18-25", children: "18-25" }),
                /* @__PURE__ */ jsx("option", { value: "26-35", children: "26-35" }),
                /* @__PURE__ */ jsx("option", { value: "36-45", children: "36-45" }),
                /* @__PURE__ */ jsx("option", { value: "46-55", children: "46-55" }),
                /* @__PURE__ */ jsx("option", { value: "56-65", children: "56-65" }),
                /* @__PURE__ */ jsx("option", { value: "65+", children: "65+" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "gender", className: "block text-sm font-medium text-gray-700 mb-1", children: "Gender" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "gender",
              value: formData.demographics.gender,
              onChange: (e) => handleDemographicChange("gender", e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "female", children: "Female" }),
                /* @__PURE__ */ jsx("option", { value: "male", children: "Male" }),
                /* @__PURE__ */ jsx("option", { value: "non-binary", children: "Non-binary" }),
                /* @__PURE__ */ jsx("option", { value: "other", children: "Other" }),
                /* @__PURE__ */ jsx("option", { value: "prefer-not-to-say", children: "Prefer not to say" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ethnicity", className: "block text-sm font-medium text-gray-700 mb-1", children: "Ethnicity" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "ethnicity",
              value: formData.demographics.ethnicity,
              onChange: (e) => handleDemographicChange("ethnicity", e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "white", children: "White" }),
                /* @__PURE__ */ jsx("option", { value: "black", children: "Black/African American" }),
                /* @__PURE__ */ jsx("option", { value: "hispanic", children: "Hispanic/Latino" }),
                /* @__PURE__ */ jsx("option", { value: "asian", children: "Asian" }),
                /* @__PURE__ */ jsx("option", { value: "native-american", children: "Native American" }),
                /* @__PURE__ */ jsx("option", { value: "pacific-islander", children: "Pacific Islander" }),
                /* @__PURE__ */ jsx("option", { value: "mixed", children: "Mixed/Multiracial" }),
                /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "primary-language", className: "block text-sm font-medium text-gray-700 mb-1", children: "Primary Language" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "primary-language",
              value: formData.demographics.primaryLanguage,
              onChange: (e) => handleDemographicChange("primaryLanguage", e.target.value),
              disabled,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx("option", { value: "en", children: "English" }),
                /* @__PURE__ */ jsx("option", { value: "es", children: "Spanish" }),
                /* @__PURE__ */ jsx("option", { value: "fr", children: "French" }),
                /* @__PURE__ */ jsx("option", { value: "de", children: "German" }),
                /* @__PURE__ */ jsx("option", { value: "it", children: "Italian" }),
                /* @__PURE__ */ jsx("option", { value: "pt", children: "Portuguese" }),
                /* @__PURE__ */ jsx("option", { value: "zh", children: "Chinese" }),
                /* @__PURE__ */ jsx("option", { value: "ja", children: "Japanese" }),
                /* @__PURE__ */ jsx("option", { value: "ko", children: "Korean" }),
                /* @__PURE__ */ jsx("option", { value: "ar", children: "Arabic" }),
                /* @__PURE__ */ jsx("option", { value: "hi", children: "Hindi" }),
                /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "therapeutic-content", className: "block text-sm font-medium text-gray-700 mb-1", children: [
        "Therapeutic Content ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "therapeutic-content",
          value: formData.content,
          onChange: (e) => handleInputChange("content", e.target.value),
          disabled,
          rows: 6,
          placeholder: "Enter the therapeutic conversation content to analyze for bias patterns...",
          className: `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.content ? "border-red-300" : "border-gray-300"}`
        }
      ),
      errors.content && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.content }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-500", children: [
        formData.content.length,
        "/1000 characters"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-900 mb-2", children: "Example Content Types:" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "• Therapist-client dialogue with potential bias patterns" }),
        /* @__PURE__ */ jsx("li", { children: "• Treatment recommendations that may show demographic bias" }),
        /* @__PURE__ */ jsx("li", { children: "• Assessment questions that could contain cultural assumptions" }),
        /* @__PURE__ */ jsx("li", { children: "• Intervention strategies that may not be culturally appropriate" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: disabled || !formData.content.trim(),
        className: "px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
        children: disabled ? "Analyzing..." : "Analyze for Bias"
      }
    ) }),
    formData.content.length > 800 && /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-5 w-5 text-yellow-400 mr-2",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-yellow-800", children: "Long Content Notice" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Very long content may take longer to analyze and could affect accuracy." })
      ] })
    ] }) })
  ] });
};

const ExportControls = ({
  analysisResults,
  counterfactualScenarios,
  historicalComparison,
  onExport
}) => {
  const [exportFormat, setExportFormat] = useState(
    "json"
  );
  const [includeComponents, setIncludeComponents] = useState({
    analysis: true,
    counterfactual: true,
    historical: true,
    recommendations: true,
    demographics: true
  });
  const [isExporting, setIsExporting] = useState(false);
  const getExportSizeEstimate = () => {
    let size = 0;
    if (includeComponents.analysis) {
      size += 15;
    }
    if (includeComponents.counterfactual) {
      size += counterfactualScenarios.length * 2;
    }
    if (includeComponents.historical) {
      size += 5;
    }
    if (includeComponents.recommendations) {
      size += analysisResults.recommendations.length * 0.5;
    }
    if (includeComponents.demographics) {
      size += 2;
    }
    return Math.max(size, 1);
  };
  const handleExport = async () => {
    setIsExporting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      if (exportFormat === "json") {
        onExport();
      } else if (exportFormat === "csv") {
        exportAsCSV();
      } else if (exportFormat === "pdf") {
        exportAsPDF();
      }
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };
  const exportAsCSV = () => {
    const csvData = [];
    const headers = ["Metric", "Value", "Category"];
    csvData.push(headers.join(","));
    if (includeComponents.analysis) {
      csvData.push(
        `Overall Bias Score,${analysisResults.overallBiasScore},Analysis`
      );
      csvData.push(`Alert Level,${analysisResults.alertLevel},Analysis`);
      csvData.push(`Confidence,${analysisResults.confidence},Analysis`);
      csvData.push(
        `Gender Bias,${analysisResults.layerResults.preprocessing.linguisticBias.genderBiasScore},Preprocessing`
      );
      csvData.push(
        `Racial Bias,${analysisResults.layerResults.preprocessing.linguisticBias.racialBiasScore},Preprocessing`
      );
      csvData.push(
        `Age Bias,${analysisResults.layerResults.preprocessing.linguisticBias.ageBiasScore},Preprocessing`
      );
      csvData.push(
        `Cultural Bias,${analysisResults.layerResults.preprocessing.linguisticBias.culturalBiasScore},Preprocessing`
      );
    }
    if (includeComponents.counterfactual) {
      counterfactualScenarios.forEach((scenario, index) => {
        csvData.push(
          `Counterfactual ${index + 1},${scenario.expectedBiasReduction},Counterfactual`
        );
        csvData.push(
          `Likelihood ${index + 1},${scenario.likelihood},Counterfactual`
        );
      });
    }
    if (includeComponents.historical && historicalComparison) {
      csvData.push(
        `30-Day Average,${historicalComparison.thirtyDayAverage},Historical`
      );
      csvData.push(
        `Percentile Rank,${historicalComparison.percentileRank},Historical`
      );
      csvData.push(
        `7-Day Trend,${historicalComparison.sevenDayTrend},Historical`
      );
    }
    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bias-analysis-${analysisResults.sessionId}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const exportAsPDF = () => {
    const pdfContent = generatePDFContent();
    const blob = new Blob([pdfContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bias-analysis-report-${analysisResults.sessionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const generatePDFContent = () => {
    let content = `BIAS DETECTION ANALYSIS REPORT
`;
    content += `Session ID: ${analysisResults.sessionId}
`;
    content += `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
    content += `
${"=".repeat(50)}

`;
    if (includeComponents.analysis) {
      content += `ANALYSIS RESULTS
`;
      content += `Overall Bias Score: ${(analysisResults.overallBiasScore * 100).toFixed(1)}%
`;
      content += `Alert Level: ${analysisResults.alertLevel.toUpperCase()}
`;
      content += `Confidence: ${(analysisResults.confidence * 100).toFixed(1)}%

`;
      content += `LAYER ANALYSIS
`;
      content += `Gender Bias: ${(analysisResults.layerResults.preprocessing.linguisticBias.genderBiasScore * 100).toFixed(1)}%
`;
      content += `Racial Bias: ${(analysisResults.layerResults.preprocessing.linguisticBias.racialBiasScore * 100).toFixed(1)}%
`;
      content += `Age Bias: ${(analysisResults.layerResults.preprocessing.linguisticBias.ageBiasScore * 100).toFixed(1)}%
`;
      content += `Cultural Bias: ${(analysisResults.layerResults.preprocessing.linguisticBias.culturalBiasScore * 100).toFixed(1)}%

`;
    }
    if (includeComponents.recommendations) {
      content += `RECOMMENDATIONS
`;
      analysisResults.recommendations.forEach((rec, index) => {
        content += `${index + 1}. ${rec}
`;
      });
      content += `
`;
    }
    if (includeComponents.counterfactual) {
      content += `COUNTERFACTUAL SCENARIOS
`;
      counterfactualScenarios.forEach((scenario, index) => {
        content += `${index + 1}. ${scenario.change}
`;
        content += `   Expected Reduction: ${(scenario.expectedBiasReduction * 100).toFixed(1)}%
`;
        content += `   Likelihood: ${scenario.likelihood}

`;
      });
    }
    if (includeComponents.historical && historicalComparison) {
      content += `HISTORICAL COMPARISON
`;
      content += `30-Day Average: ${(historicalComparison.thirtyDayAverage * 100).toFixed(1)}%
`;
      content += `Percentile Rank: ${historicalComparison.percentileRank}th
`;
      content += `7-Day Trend: ${historicalComparison.sevenDayTrend}

`;
    }
    return content;
  };
  return /* @__PURE__ */ jsxs("div", { className: "export-controls space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Export Analysis Data" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Download comprehensive bias analysis results for reporting and compliance" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Export Format" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-lg p-4 cursor-pointer transition-all ${exportFormat === "json" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
            onClick: () => setExportFormat("json"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExportFormat("json");
              }
            },
            tabIndex: 0,
            role: "radio",
            "aria-checked": exportFormat === "json",
            "aria-label": "JSON export format",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "radio",
                    checked: exportFormat === "json",
                    onChange: () => setExportFormat("json"),
                    className: "mr-2"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "JSON" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Complete structured data with all analysis details" }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-gray-500", children: "Best for: Technical analysis, data processing" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-lg p-4 cursor-pointer transition-all ${exportFormat === "csv" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
            onClick: () => setExportFormat("csv"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExportFormat("csv");
              }
            },
            tabIndex: 0,
            role: "radio",
            "aria-checked": exportFormat === "csv",
            "aria-label": "CSV export format",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "radio",
                    checked: exportFormat === "csv",
                    onChange: () => setExportFormat("csv"),
                    className: "mr-2"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "CSV" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Tabular data format for spreadsheet analysis" }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-gray-500", children: "Best for: Excel analysis, statistical processing" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-lg p-4 cursor-pointer transition-all ${exportFormat === "pdf" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
            onClick: () => setExportFormat("pdf"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExportFormat("pdf");
              }
            },
            tabIndex: 0,
            role: "radio",
            "aria-checked": exportFormat === "pdf",
            "aria-label": "PDF export format",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "pdf-format",
                    type: "radio",
                    checked: exportFormat === "pdf",
                    onChange: () => setExportFormat("pdf"),
                    className: "mr-2"
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "pdf-format", className: "font-medium text-gray-900", children: "PDF Report" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Formatted report for documentation and sharing" }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-gray-500", children: "Best for: Reports, compliance documentation" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Include Components" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "include-analysis",
              type: "checkbox",
              checked: includeComponents.analysis,
              onChange: (e) => setIncludeComponents((prev) => ({
                ...prev,
                analysis: e.target.checked
              })),
              className: "mr-3",
              "aria-label": "Include analysis results"
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: "include-analysis", className: "flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Analysis Results" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Overall bias scores, layer analysis, and confidence metrics" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "include-counterfactual",
              type: "checkbox",
              checked: includeComponents.counterfactual,
              onChange: (e) => setIncludeComponents((prev) => ({
                ...prev,
                counterfactual: e.target.checked
              })),
              className: "mr-3",
              "aria-label": "Include counterfactual scenarios"
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: "include-counterfactual", className: "flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Counterfactual Scenarios" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Alternative scenarios and expected bias reduction estimates" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "include-historical",
              type: "checkbox",
              checked: includeComponents.historical,
              onChange: (e) => setIncludeComponents((prev) => ({
                ...prev,
                historical: e.target.checked
              })),
              disabled: !historicalComparison,
              className: "mr-3",
              "aria-label": "Include historical comparison"
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: "include-historical", className: "flex-1", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `font-medium ${historicalComparison ? "text-gray-900" : "text-gray-400"}`,
                children: "Historical Comparison"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `text-sm ${historicalComparison ? "text-gray-600" : "text-gray-400"}`,
                children: "Progress tracking and trend analysis data"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "include-recommendations",
              type: "checkbox",
              checked: includeComponents.recommendations,
              onChange: (e) => setIncludeComponents((prev) => ({
                ...prev,
                recommendations: e.target.checked
              })),
              className: "mr-3",
              "aria-label": "Include recommendations"
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: "include-recommendations", className: "flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Recommendations" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "AI-generated suggestions for bias reduction" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "include-demographics",
              type: "checkbox",
              checked: includeComponents.demographics,
              onChange: (e) => setIncludeComponents((prev) => ({
                ...prev,
                demographics: e.target.checked
              })),
              className: "mr-3",
              "aria-label": "Include demographics context"
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: "include-demographics", className: "flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Demographics Context" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Client demographic information for context" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900", children: "Export Summary" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
          "Format: ",
          exportFormat.toUpperCase(),
          " • Size: ~",
          getExportSizeEstimate().toFixed(1),
          " KB • Components:",
          " ",
          Object.values(includeComponents).filter(Boolean).length,
          "/5"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleExport,
          disabled: isExporting || Object.values(includeComponents).every((v) => !v),
          className: "px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center",
          children: isExporting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }),
            "Exporting..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  }
                )
              }
            ),
            "Export Data"
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-900 mb-2", children: "Export Guidelines" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "• Exported data contains sensitive analysis information" }),
        /* @__PURE__ */ jsx("li", { children: "• Ensure compliance with your organization's data handling policies" }),
        /* @__PURE__ */ jsx("li", { children: "• Consider removing demographic information for anonymized reports" }),
        /* @__PURE__ */ jsx("li", { children: "• JSON format preserves all data relationships and metadata" }),
        /* @__PURE__ */ jsx("li", { children: "• CSV format is optimized for statistical analysis tools" }),
        /* @__PURE__ */ jsx("li", { children: "• PDF reports are suitable for documentation and sharing" })
      ] })
    ] })
  ] });
};

const BiasDetectionDemo = ({
  className = "",
  onAnalysisComplete,
  enableExport = true,
  showHistoricalData = true
}) => {
  const [sessionData, setSessionData] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [counterfactualScenarios, setCounterfactualScenarios] = useState([]);
  const [historicalComparison, setHistoricalComparison] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(
    null
  );
  const [activeTab, setActiveTab] = useState("analysis");
  const [error, setError] = useState(null);
  const performBiasAnalysis = useCallback(
    async (data) => {
      setIsAnalyzing(true);
      setError(null);
      try {
        const biasFactors = calculateBiasFactors(data);
        const results = {
          sessionId: data.sessionId,
          timestamp: /* @__PURE__ */ new Date(),
          overallBiasScore: biasFactors.overall,
          alertLevel: biasFactors.overall >= 0.8 ? "critical" : biasFactors.overall >= 0.6 ? "high" : biasFactors.overall >= 0.4 ? "medium" : "low",
          confidence: 0.85 + Math.random() * 0.1,
          // Simulated confidence
          layerResults: {
            preprocessing: {
              biasScore: biasFactors.linguistic,
              linguisticBias: {
                genderBiasScore: biasFactors.gender,
                racialBiasScore: biasFactors.racial,
                ageBiasScore: biasFactors.age,
                culturalBiasScore: biasFactors.cultural
              },
              representationAnalysis: {
                diversityIndex: 1 - biasFactors.overall,
                underrepresentedGroups: biasFactors.age > 0.5 ? ["elderly"] : []
              }
            },
            modelLevel: {
              biasScore: biasFactors.model,
              fairnessMetrics: {
                demographicParity: 1 - biasFactors.model,
                equalizedOdds: 1 - biasFactors.model * 0.8,
                calibration: 1 - biasFactors.model * 0.6
              }
            },
            interactive: {
              biasScore: biasFactors.interactive,
              counterfactualAnalysis: {
                scenariosAnalyzed: 10,
                biasDetected: biasFactors.interactive > 0.3,
                consistencyScore: 1 - biasFactors.interactive
              }
            },
            evaluation: {
              biasScore: biasFactors.evaluation,
              huggingFaceMetrics: {
                bias: biasFactors.evaluation,
                stereotype: biasFactors.cultural,
                regard: {
                  positive: 1 - biasFactors.overall,
                  negative: biasFactors.overall
                }
              }
            }
          },
          recommendations: generateRecommendations(
            biasFactors,
            data.demographics
          ),
          demographics: data.demographics
        };
        const scenarios = generateCounterfactualScenarios(data, biasFactors);
        let historical = null;
        if (showHistoricalData) {
          historical = generateHistoricalComparison(biasFactors.overall);
        }
        setAnalysisResults(results);
        setCounterfactualScenarios(scenarios);
        setHistoricalComparison(historical);
        onAnalysisComplete?.(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Analysis failed");
      } finally {
        setIsAnalyzing(false);
      }
    },
    [onAnalysisComplete, showHistoricalData]
  );
  const handleSessionSubmit = useCallback(
    (data) => {
      const sessionData2 = {
        ...data,
        sessionId: generateSessionId(),
        timestamp: /* @__PURE__ */ new Date()
      };
      setSessionData(sessionData2);
      performBiasAnalysis(sessionData2);
    },
    [performBiasAnalysis]
  );
  const handlePresetSelect = useCallback(
    (preset) => {
      setSelectedPreset(preset);
      const sessionData2 = {
        sessionId: generateSessionId(),
        scenario: preset.id,
        demographics: preset.demographics,
        content: preset.content,
        timestamp: /* @__PURE__ */ new Date()
      };
      setSessionData(sessionData2);
      performBiasAnalysis(sessionData2);
    },
    [performBiasAnalysis]
  );
  const handleExport = useCallback(() => {
    if (!analysisResults || !counterfactualScenarios) {
      return;
    }
    const exportData = createExportData(
      analysisResults,
      counterfactualScenarios,
      historicalComparison
    );
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bias-analysis-${analysisResults.sessionId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [analysisResults, counterfactualScenarios, historicalComparison]);
  const tabs = [
    {
      id: "analysis",
      label: "Bias Analysis",
      disabled: !analysisResults
    },
    {
      id: "counterfactual",
      label: "Counterfactual Analysis",
      disabled: !counterfactualScenarios.length
    },
    {
      id: "historical",
      label: "Historical Progress",
      disabled: !historicalComparison
    },
    { id: "export", label: "Export Data", disabled: !analysisResults }
  ];
  return /* @__PURE__ */ jsxs("div", { className: `bias-detection-demo ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "demo-header mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Advanced Bias Detection Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Analyze therapeutic conversations for bias patterns across multiple dimensions" })
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-5 w-5 text-red-400",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Analysis Error" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: error })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Preset Scenarios" }),
        /* @__PURE__ */ jsx(
          PresetScenarioSelector,
          {
            scenarios: PRESET_SCENARIOS,
            selectedScenario: selectedPreset,
            onScenarioSelect: handlePresetSelect,
            disabled: isAnalyzing
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Custom Analysis" }),
        /* @__PURE__ */ jsx(
          SessionInputForm,
          {
            onSubmit: handleSessionSubmit,
            disabled: isAnalyzing,
            initialData: selectedPreset ? {
              scenario: selectedPreset.id,
              demographics: selectedPreset.demographics,
              content: selectedPreset.content
            } : void 0
          }
        )
      ] })
    ] }),
    isAnalyzing && /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3" }),
      /* @__PURE__ */ jsx("span", { className: "text-blue-800 font-medium", children: "Analyzing bias patterns..." })
    ] }) }),
    analysisResults && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200", children: [
      /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsx("nav", { className: "flex space-x-8 px-6", "aria-label": "Tabs", children: tabs.map((tab) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => !tab.disabled && setActiveTab(tab.id),
          disabled: tab.disabled,
          className: `py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id ? "border-blue-500 text-blue-600" : tab.disabled ? "border-transparent text-gray-400 cursor-not-allowed" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
          children: tab.label
        },
        tab.id
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        activeTab === "analysis" && /* @__PURE__ */ jsx(
          BiasAnalysisDisplay,
          {
            results: analysisResults,
            sessionData
          }
        ),
        activeTab === "counterfactual" && counterfactualScenarios.length > 0 && /* @__PURE__ */ jsx(
          CounterfactualAnalysis,
          {
            scenarios: counterfactualScenarios,
            originalSession: sessionData
          }
        ),
        activeTab === "historical" && historicalComparison && /* @__PURE__ */ jsx(
          HistoricalProgressTracker,
          {
            comparison: historicalComparison,
            currentScore: analysisResults.overallBiasScore
          }
        ),
        activeTab === "export" && enableExport && /* @__PURE__ */ jsx(
          ExportControls,
          {
            analysisResults,
            counterfactualScenarios,
            historicalComparison,
            onExport: handleExport
          }
        )
      ] })
    ] })
  ] });
};

const $$EnhancedBiasDetection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Enhanced Bias Detection Demo - Pixelated Empathy", "description": "Advanced AI-powered bias detection system for therapeutic conversations with real-time analysis, counterfactual scenarios, and comprehensive reporting.", "keywords": "bias detection, AI therapy, mental health, therapeutic training, bias analysis, cultural competency", "data-astro-cid-c37ygbpp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50" data-astro-cid-c37ygbpp> <!-- Hero Section --> <section class="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16" data-astro-cid-c37ygbpp> <div class="container mx-auto px-4" data-astro-cid-c37ygbpp> <div class="max-w-4xl mx-auto text-center" data-astro-cid-c37ygbpp> <h1 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-c37ygbpp>
Enhanced Bias Detection Demo
</h1> <p class="text-xl md:text-2xl mb-8 text-blue-100" data-astro-cid-c37ygbpp>
Advanced AI-powered analysis of bias patterns in therapeutic
            conversations
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-astro-cid-c37ygbpp> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6" data-astro-cid-c37ygbpp> <div class="text-3xl font-bold text-blue-300 mb-2" data-astro-cid-c37ygbpp>6</div> <div class="text-sm text-blue-100" data-astro-cid-c37ygbpp>
Sophisticated Preset Scenarios
</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6" data-astro-cid-c37ygbpp> <div class="text-3xl font-bold text-purple-300 mb-2" data-astro-cid-c37ygbpp>4</div> <div class="text-sm text-purple-100" data-astro-cid-c37ygbpp>Analysis Layers</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6" data-astro-cid-c37ygbpp> <div class="text-3xl font-bold text-indigo-300 mb-2" data-astro-cid-c37ygbpp>
Real-time
</div> <div class="text-sm text-indigo-100" data-astro-cid-c37ygbpp>Bias Detection</div> </div> </div> </div> </div> </section> <!-- Features Overview --> <section class="py-12 bg-white" data-astro-cid-c37ygbpp> <div class="container mx-auto px-4" data-astro-cid-c37ygbpp> <div class="max-w-6xl mx-auto" data-astro-cid-c37ygbpp> <h2 class="text-3xl font-bold text-center text-gray-900 mb-12" data-astro-cid-c37ygbpp>
Advanced Bias Detection Capabilities
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-c37ygbpp> <!-- Multi-Dimensional Analysis --> <div class="text-center" data-astro-cid-c37ygbpp> <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" data-astro-cid-c37ygbpp> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-c37ygbpp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" data-astro-cid-c37ygbpp></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-c37ygbpp>
Multi-Dimensional Analysis
</h3> <p class="text-gray-600 text-sm" data-astro-cid-c37ygbpp>
Analyze bias across cultural, gender, age, linguistic, and
                intersectional dimensions
</p> </div> <!-- Real-time Processing --> <div class="text-center" data-astro-cid-c37ygbpp> <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" data-astro-cid-c37ygbpp> <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-c37ygbpp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-c37ygbpp></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-c37ygbpp>
Real-time Processing
</h3> <p class="text-gray-600 text-sm" data-astro-cid-c37ygbpp>
Instant analysis with confidence scoring and alert level
                determination
</p> </div> <!-- Counterfactual Analysis --> <div class="text-center" data-astro-cid-c37ygbpp> <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" data-astro-cid-c37ygbpp> <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-c37ygbpp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-c37ygbpp></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-c37ygbpp>
Counterfactual Analysis
</h3> <p class="text-gray-600 text-sm" data-astro-cid-c37ygbpp>
Explore "what-if" scenarios to understand bias reduction
                strategies
</p> </div> <!-- Historical Tracking --> <div class="text-center" data-astro-cid-c37ygbpp> <div class="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" data-astro-cid-c37ygbpp> <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-c37ygbpp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" data-astro-cid-c37ygbpp></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-c37ygbpp>
Historical Tracking
</h3> <p class="text-gray-600 text-sm" data-astro-cid-c37ygbpp>
Monitor progress over time with trend analysis and percentile
                ranking
</p> </div> </div> </div> </div> </section> <!-- Demo Interface --> <section class="py-12 bg-gray-50" data-astro-cid-c37ygbpp> <div class="container mx-auto px-4" data-astro-cid-c37ygbpp> <div class="max-w-7xl mx-auto" data-astro-cid-c37ygbpp> ${renderComponent($$result2, "BiasDetectionDemo", BiasDetectionDemo, { "client:load": true, "enableExport": true, "showHistoricalData": true, "className": "w-full", "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demos/bias-detection/BiasDetectionDemo", "client:component-export": "BiasDetectionDemo", "data-astro-cid-c37ygbpp": true })} </div> </div> </section> <!-- Technical Specifications --> <section class="py-12 bg-white" data-astro-cid-c37ygbpp> <div class="container mx-auto px-4" data-astro-cid-c37ygbpp> <div class="max-w-6xl mx-auto" data-astro-cid-c37ygbpp> <h2 class="text-3xl font-bold text-center text-gray-900 mb-12" data-astro-cid-c37ygbpp>
Technical Specifications
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-c37ygbpp> <!-- Analysis Layers --> <div class="bg-gray-50 rounded-lg p-6" data-astro-cid-c37ygbpp> <h3 class="text-xl font-semibold text-gray-900 mb-4" data-astro-cid-c37ygbpp>
Analysis Layers
</h3> <ul class="space-y-3" data-astro-cid-c37ygbpp> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>
Preprocessing Layer
</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Linguistic bias detection across demographic dimensions
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>Model Layer</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Fairness metrics including demographic parity and
                      calibration
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>
Interactive Layer
</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Counterfactual analysis and consistency scoring
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>
Evaluation Layer
</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
HuggingFace metrics and regard scoring
</div> </div> </li> </ul> </div> <!-- Export Formats --> <div class="bg-gray-50 rounded-lg p-6" data-astro-cid-c37ygbpp> <h3 class="text-xl font-semibold text-gray-900 mb-4" data-astro-cid-c37ygbpp>
Export Capabilities
</h3> <ul class="space-y-3" data-astro-cid-c37ygbpp> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>JSON Format</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Complete structured data with all analysis details
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>CSV Format</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Tabular data optimized for statistical analysis
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>PDF Reports</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
Formatted reports for documentation and compliance
</div> </div> </li> <li class="flex items-start" data-astro-cid-c37ygbpp> <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" data-astro-cid-c37ygbpp></div> <div data-astro-cid-c37ygbpp> <div class="font-medium text-gray-900" data-astro-cid-c37ygbpp>Real-time API</div> <div class="text-sm text-gray-600" data-astro-cid-c37ygbpp>
WebSocket support for live analysis streaming
</div> </div> </li> </ul> </div> </div> </div> </div> </section> <!-- Call to Action --> <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-astro-cid-c37ygbpp> <div class="container mx-auto px-4 text-center" data-astro-cid-c37ygbpp> <div class="max-w-3xl mx-auto" data-astro-cid-c37ygbpp> <h2 class="text-3xl font-bold mb-6" data-astro-cid-c37ygbpp>
Ready to Enhance Your Therapeutic Training?
</h2> <p class="text-xl mb-8 text-blue-100" data-astro-cid-c37ygbpp>
Experience the power of advanced bias detection in therapeutic
            conversations. Join our beta program for early access to the
            complete system.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-c37ygbpp> <a href="/beta" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors" data-astro-cid-c37ygbpp>
Join Beta Program
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" data-astro-cid-c37ygbpp>
Contact Sales
</a> </div> </div> </div> </section> </main> ` })} ${renderScript($$result, "/root/pixel/src/pages/demo/enhanced-bias-detection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/demo/enhanced-bias-detection.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/enhanced-bias-detection.astro";
const $$url = "/demo/enhanced-bias-detection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EnhancedBiasDetection,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
