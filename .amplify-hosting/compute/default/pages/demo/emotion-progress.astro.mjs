;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c01604dd-8761-4abb-81ee-a307dc35d4bb",e._sentryDebugIdIdentifier="sentry-dbid-c01604dd-8761-4abb-81ee-a307dc35d4bb")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
export { renderers } from '../../renderers.mjs';

const EmotionProgressDashboard = ({
  data = [],
  isLoading = false,
  error = null,
  timeRange = "month"
}) => {
  const mockData = [
    {
      date: "2024-01-01",
      overallProgress: 65,
      valenceScore: 72,
      arousalStability: 68,
      dominanceGains: 58,
      riskFactors: 25,
      goalProgress: 70
    },
    {
      date: "2024-01-08",
      overallProgress: 72,
      valenceScore: 75,
      arousalStability: 74,
      dominanceGains: 65,
      riskFactors: 20,
      goalProgress: 78
    },
    {
      date: "2024-01-15",
      overallProgress: 78,
      valenceScore: 80,
      arousalStability: 76,
      dominanceGains: 72,
      riskFactors: 18,
      goalProgress: 82
    },
    {
      date: "2024-01-22",
      overallProgress: 85,
      valenceScore: 82,
      arousalStability: 84,
      dominanceGains: 79,
      riskFactors: 15,
      goalProgress: 88
    }
  ];
  const displayData = data.length > 0 ? data : mockData;
  const getProgressColor = (score) => {
    if (score >= 80) {
      return "text-green-600 bg-green-100";
    } else if (score >= 60) {
      return "text-yellow-600 bg-yellow-100";
    } else {
      return "text-red-600 bg-red-100";
    }
  };
  const getRiskColor = (risk) => {
    if (risk <= 20) {
      return "text-green-600 bg-green-100";
    } else if (risk <= 40) {
      return "text-yellow-600 bg-yellow-100";
    } else {
      return "text-red-600 bg-red-100";
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "w-full max-w-6xl mx-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 bg-gray-200 rounded w-1/3" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-32 bg-gray-200 rounded" }, `skeleton-${i}`)) }),
      /* @__PURE__ */ jsx("div", { className: "h-64 bg-gray-200 rounded" })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "w-full max-w-6xl mx-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-red-800 font-semibold mb-2", children: "Error Loading Progress Data" }),
      /* @__PURE__ */ jsx("p", { className: "text-red-600", children: error.message })
    ] }) });
  }
  const latestData = displayData[displayData.length - 1];
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-6xl mx-auto p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Emotion Progress Dashboard" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
        "Tracking emotional health improvements over ",
        timeRange
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Overall Progress" }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold mt-2 text-blue-600", children: [
            latestData?.overallProgress || 0,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-sm font-medium ${getProgressColor(latestData?.overallProgress || 0)}`, children: (latestData?.overallProgress || 0) >= 80 ? "Excellent" : (latestData?.overallProgress || 0) >= 60 ? "Good" : "Needs Attention" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Valence Score" }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold mt-2 text-green-600", children: [
            latestData?.valenceScore || 0,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-sm font-medium ${getProgressColor(latestData?.valenceScore || 0)}`, children: "Positive Emotions" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Risk Factors" }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold mt-2 text-orange-600", children: [
            latestData?.riskFactors || 0,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(latestData?.riskFactors || 0)}`, children: (latestData?.riskFactors || 0) <= 20 ? "Low Risk" : (latestData?.riskFactors || 0) <= 40 ? "Moderate" : "High Risk" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Emotional Dimensions" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Arousal Stability" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-32 bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                  style: { width: `${latestData?.arousalStability || 0}%` }
                }
              ) }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                latestData?.arousalStability || 0,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Dominance Gains" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-32 bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-purple-600 h-2 rounded-full transition-all duration-300",
                  style: { width: `${latestData?.dominanceGains || 0}%` }
                }
              ) }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                latestData?.dominanceGains || 0,
                "%"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Goal Achievement" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl font-bold mb-4", children: [
            latestData?.goalProgress || 0,
            "%"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: (latestData?.goalProgress || 0) >= 80 ? "Exceeding expectations!" : (latestData?.goalProgress || 0) >= 60 ? "Great progress!" : "Keep working toward your goals" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Progress Over Time" }),
      /* @__PURE__ */ jsx("div", { className: "h-64 flex items-end justify-center space-x-4 bg-gray-50 rounded p-4", children: displayData.map((point) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-8 bg-blue-500 rounded-t",
              style: { height: `${point.overallProgress / 100 * 200}px` },
              title: `Overall: ${point.overallProgress}%`
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-6 bg-green-500 rounded-t",
              style: { height: `${point.valenceScore / 100 * 160}px` },
              title: `Valence: ${point.valenceScore}%`
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-4 bg-purple-500 rounded-t",
              style: { height: `${point.goalProgress / 100 * 120}px` },
              title: `Goals: ${point.goalProgress}%`
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 transform rotate-45 origin-left", children: new Date(point.date).toLocaleDateString() })
      ] }, point.date)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-6 mt-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-blue-500 rounded mr-2" }),
          /* @__PURE__ */ jsx("span", { children: "Overall Progress" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-500 rounded mr-2" }),
          /* @__PURE__ */ jsx("span", { children: "Valence Score" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-purple-500 rounded mr-2" }),
          /* @__PURE__ */ jsx("span", { children: "Goal Progress" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Key Insights" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded p-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700 mb-2", children: "✓ Positive Trends" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-600", children: [
            /* @__PURE__ */ jsx("li", { children: "• Overall emotional stability has improved by 20%" }),
            /* @__PURE__ */ jsx("li", { children: "• Positive emotion frequency increased" }),
            /* @__PURE__ */ jsx("li", { children: "• Risk factors have decreased significantly" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded p-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-700 mb-2", children: "💡 Recommendations" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-600", children: [
            /* @__PURE__ */ jsx("li", { children: "• Continue current coping strategies" }),
            /* @__PURE__ */ jsx("li", { children: "• Focus on arousal regulation techniques" }),
            /* @__PURE__ */ jsx("li", { children: "• Maintain regular check-ins" })
          ] })
        ] })
      ] })
    ] })
  ] });
};

function useEmotionProgress({
  timeRange,
  userId
}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchEmotionProgressData() {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const mockData = {
          currentPeriod: {
            overallImprovement: 0.15,
            stabilityChange: -0.08,
            positiveEmotionChange: 0.18,
            negativeEmotionChange: -0.12
          },
          previousPeriod: {
            overallImprovement: 0.1,
            stabilityChange: -0.05,
            positiveEmotionChange: 0.12,
            negativeEmotionChange: -0.08
          },
          historicalProgress: generateHistoricalData(timeRange),
          riskFactors: [
            {
              factor: "Anxiety",
              currentLevel: 0.45,
              previousLevel: 0.65,
              trend: "improving",
              priority: "medium"
            },
            {
              factor: "Sleep Disruption",
              currentLevel: 0.3,
              previousLevel: 0.25,
              trend: "worsening",
              priority: "high"
            },
            {
              factor: "Social Withdrawal",
              currentLevel: 0.2,
              previousLevel: 0.4,
              trend: "improving",
              priority: "medium"
            },
            {
              factor: "Irritability",
              currentLevel: 0.35,
              previousLevel: 0.35,
              trend: "stable",
              priority: "low"
            }
          ],
          goals: [
            {
              name: "Reduce Anxiety",
              target: 0.25,
              current: 0.45,
              progress: 0.55
              // 55% of the way from original baseline to target
            },
            {
              name: "Improve Positive Engagement",
              target: 0.75,
              current: 0.65,
              progress: 0.8
              // 80% of the way to target
            },
            {
              name: "Emotional Regulation",
              target: 0.9,
              current: 0.75,
              progress: 0.75
              // 75% of the way to target
            },
            {
              name: "Consistent Sleep Pattern",
              target: 0.8,
              current: 0.4,
              progress: 0.3
              // 30% of the way to target
            }
          ]
        };
        setData(mockData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch emotion progress data")
        );
        console.error("Error fetching emotion progress data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEmotionProgressData();
  }, [timeRange, userId]);
  return {
    data,
    isLoading,
    error
  };
}
function generateHistoricalData(timeRange) {
  const dataPoints = timeRange === "week" ? 7 : timeRange === "month" ? 30 : timeRange === "quarter" ? 12 : timeRange === "year" ? 12 : 7;
  const result = [];
  for (let i = 0; i < dataPoints; i++) {
    let date;
    if (timeRange === "week") {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - (dataPoints - 1 - i));
      date = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else if (timeRange === "month") {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - (dataPoints - 1 - i));
      date = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else if (timeRange === "quarter") {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - (dataPoints - 1 - i) * 7);
      date = `Week ${i + 1}`;
    } else {
      const d = /* @__PURE__ */ new Date();
      d.setMonth(d.getMonth() - (dataPoints - 1 - i));
      date = d.toLocaleDateString("en-US", { month: "short" });
    }
    const improvement = 0.05 + i / dataPoints * 0.2 + (Math.random() * 0.1 - 0.05);
    const stability = -0.02 - i / dataPoints * 0.1 + (Math.random() * 0.05 - 0.025);
    const positive = 0.08 + i / dataPoints * 0.15 + (Math.random() * 0.08 - 0.04);
    const negative = -0.04 - i / dataPoints * 0.12 + (Math.random() * 0.06 - 0.03);
    result.push({
      date,
      overallImprovement: improvement,
      stabilityChange: stability,
      positiveEmotionChange: positive,
      negativeEmotionChange: negative
    });
  }
  return result;
}

const EmotionProgressDemo = () => {
  const [timeRange, setTimeRange] = useState("month");
  const { data, isLoading, error } = useEmotionProgress({ timeRange });
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-8 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "Emotion Progress Dashboard" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "This dashboard visualizes emotional health progress over time, showing improvements across multiple dimensions, tracking risk factors, and measuring progress toward goals." }),
    error && /* @__PURE__ */ jsxs("div", { className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Error" }),
      /* @__PURE__ */ jsx("p", { children: error.message })
    ] }),
    data ? /* @__PURE__ */ jsx(
      EmotionProgressDashboard,
      {
        progressData: data,
        timeRange,
        onTimeRangeChange: setTimeRange,
        isLoading,
        className: "mb-8"
      }
    ) : isLoading ? /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow p-6 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4" }),
      /* @__PURE__ */ jsx("div", { className: "h-10 bg-gray-200 rounded w-full" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-40 bg-gray-200 rounded" }),
        /* @__PURE__ */ jsx("div", { className: "h-40 bg-gray-200 rounded" })
      ] })
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "bg-gray-100 rounded-lg p-6 text-center mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No emotion progress data available" }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "About Emotion Progress Tracking" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { children: "The Emotion Progress Dashboard provides a comprehensive view of emotional health improvements over time, helping users visualize their journey and identify areas of growth." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: "Key Features:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Overall Progress:" }),
            " Track improvements in emotional well-being with metrics for overall improvement, stability, and changes in positive and negative emotions."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Trend Analysis:" }),
            " Visualize emotional health trends over time to identify patterns, progress, and areas that may need attention."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Risk Factor Tracking:" }),
            " Monitor changes in identified risk factors and track improvements over time."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Goals & Achievements:" }),
            " Measure progress toward specific emotional health goals and track achievements."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This visualization tool helps users understand their emotional health journey, celebrate progress, and identify areas for continued growth and improvement." })
      ] })
    ] })
  ] });
};

const $$EmotionProgress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Emotion Progress Dashboard | Mental Health Analytics" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EmotionProgressDemo", EmotionProgressDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/pages/EmotionProgressDemo", "client:component-export": "default" })} ` })}`;
}, "/root/pixel/src/pages/demo/emotion-progress.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/emotion-progress.astro";
const $$url = "/demo/emotion-progress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmotionProgress,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
