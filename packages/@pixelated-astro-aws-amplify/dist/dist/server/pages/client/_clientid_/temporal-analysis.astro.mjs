;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="46d39c5d-ce78-4e83-adf5-7d4a597fecbf",e._sentryDebugIdIdentifier="sentry-dbid-46d39c5d-ce78-4e83-adf5-7d4a597fecbf")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, d as renderScript } from '../../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BKh1dVJn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Area, ScatterChart, ZAxis, Scatter, Line } from 'recharts';
import { c as cn } from '../../../chunks/utils_BxM-XLWA.mjs';
import 'clsx';
import { r as requirePageAuth } from '../../../chunks/serverAuth_4gmt5n21.mjs';
export { renderers } from '../../../renderers.mjs';

const emotionColors = {
  happiness: "#4ade80",
  // green-400
  joy: "#22c55e",
  // green-500
  excitement: "#10b981",
  // emerald-500
  contentment: "#60a5fa",
  // blue-400
  gratitude: "#3b82f6",
  // blue-500
  neutral: "#94a3b8",
  // slate-400
  surprise: "#c084fc",
  // purple-400
  anxiety: "#f59e0b",
  // amber-500
  fear: "#f97316",
  // orange-500
  anger: "#ef4444",
  // red-500
  sadness: "#6366f1",
  // indigo-500
  disgust: "#8b5cf6"
  // violet-500
};
const getEmotionColor = (emotion) => {
  return emotionColors[emotion.toLowerCase()] || "#94a3b8";
};
function EmotionTemporalAnalysisChart({
  data,
  className,
  isLoading = false,
  height = 400
}) {
  const [viewMode, setViewMode] = useState("trends");
  const [emotionFilters, setEmotionFilters] = useState(
    {}
  );
  const prepareTrendData = () => {
    const emotionTypes = Object.keys(data.trendlines);
    if (Object.keys(emotionFilters).length === 0 && emotionTypes.length > 0) {
      const initialFilters = {};
      const topEmotions = emotionTypes.slice(
        0,
        Math.min(5, emotionTypes.length)
      );
      emotionTypes.forEach((type) => {
        initialFilters[type] = topEmotions.includes(type);
      });
      setEmotionFilters(initialFilters);
    }
    const filteredEmotions = Object.entries(emotionFilters).filter(([_, isSelected]) => isSelected).map(([emotion]) => emotion);
    return filteredEmotions.map((emotion) => {
      const trendline = data.trendlines[emotion];
      const volatility = data.volatility[emotion] || 0;
      return {
        name: emotion,
        slope: trendline.slope,
        correlation: trendline.correlation,
        significance: trendline.significance,
        volatility,
        color: getEmotionColor(emotion)
      };
    });
  };
  const prepareCriticalPointsData = () => {
    return data.criticalPoints.map((point) => ({
      name: point.emotion,
      intensity: point.intensity,
      timestamp: point.timestamp.toLocaleString(),
      sessionId: point.sessionId,
      color: getEmotionColor(point.emotion)
    }));
  };
  const prepareProgressionData = () => {
    const { progression } = data;
    return [
      {
        name: "Overall Improvement",
        value: progression.overallImprovement,
        fill: progression.overallImprovement >= 0 ? "#22c55e" : "#ef4444"
      },
      {
        name: "Stability Change",
        value: progression.stabilityChange,
        fill: progression.stabilityChange >= 0 ? "#3b82f6" : "#f97316"
      },
      {
        name: "Positive Emotion Change",
        value: progression.positiveEmotionChange,
        fill: progression.positiveEmotionChange >= 0 ? "#4ade80" : "#f59e0b"
      },
      {
        name: "Negative Emotion Change",
        value: progression.negativeEmotionChange,
        fill: progression.negativeEmotionChange >= 0 ? "#8b5cf6" : "#6366f1"
      }
    ];
  };
  const prepareTransitionsData = () => {
    return data.transitions.slice(0, 10).map((transition) => ({
      name: `${transition.from} → ${transition.to}`,
      frequency: transition.frequency,
      duration: transition.avgDuration / (1e3 * 60),
      // Convert to minutes
      from: transition.from,
      to: transition.to,
      fromColor: getEmotionColor(transition.from),
      toColor: getEmotionColor(transition.to)
    }));
  };
  const prepareRelationshipsData = () => {
    return data.dimensionalRelationships.map((rel) => ({
      name: `${rel.dimensions[0]} & ${rel.dimensions[1]}`,
      correlation: rel.correlation,
      description: rel.description,
      color: rel.correlation >= 0 ? "#22c55e" : "#ef4444"
    }));
  };
  const toggleEmotionFilter = (emotion) => {
    setEmotionFilters((prev) => ({
      ...prev,
      [emotion]: !prev[emotion]
    }));
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-6 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse flex flex-col w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4 mb-2.5" }),
      /* @__PURE__ */ jsx("div", { className: "h-40 bg-gray-200 rounded w-full" })
    ] }) });
  }
  if (!data || Object.keys(data.trendlines).length === 0 && data.criticalPoints.length === 0 && data.transitions.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-2", children: "No temporal analysis data available" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "More data needs to be collected across sessions" })
    ] });
  }
  const renderChart = () => {
    if (viewMode === "trends") {
      return /* @__PURE__ */ jsxs(
        AreaChart,
        {
          data: prepareTrendData(),
          margin: { top: 20, right: 30, left: 0, bottom: 10 },
          children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
            /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
            /* @__PURE__ */ jsx(YAxis, { domain: [-1, 1] }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                formatter: (value, name) => {
                  if (name === "slope") {
                    return [
                      `${value.toFixed(2)} (${value > 0 ? "increasing" : "decreasing"})`,
                      "Trend"
                    ];
                  }
                  if (name === "correlation") {
                    return [value.toFixed(2), "Correlation"];
                  }
                  if (name === "significance") {
                    return [value.toFixed(2), "Significance"];
                  }
                  return [value, name];
                }
              }
            ),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(ReferenceLine, { y: 0, stroke: "#666" }),
            /* @__PURE__ */ jsx("defs", { children: prepareTrendData().map((item) => /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: `gradient-${item.name}`,
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "1",
                children: [
                  /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: item.color, stopOpacity: 0.8 }),
                  /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: item.color, stopOpacity: 0.2 })
                ]
              },
              item.name
            )) }),
            /* @__PURE__ */ jsx(
              Area,
              {
                type: "monotone",
                dataKey: "slope",
                stroke: "#8884d8",
                fill: "#8884d8",
                strokeWidth: 2,
                fillOpacity: 0.6,
                name: "Trend"
              }
            ),
            /* @__PURE__ */ jsx(
              Area,
              {
                type: "monotone",
                dataKey: "correlation",
                stroke: "#82ca9d",
                fill: "#82ca9d",
                strokeWidth: 2,
                fillOpacity: 0.6,
                name: "Correlation"
              }
            )
          ]
        }
      );
    }
    if (viewMode === "critical") {
      return /* @__PURE__ */ jsxs(ScatterChart, { margin: { top: 20, right: 30, left: 0, bottom: 10 }, children: [
        /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
        /* @__PURE__ */ jsx(XAxis, { type: "category", dataKey: "name", name: "Emotion" }),
        /* @__PURE__ */ jsx(YAxis, { type: "number", dataKey: "intensity", name: "Intensity" }),
        /* @__PURE__ */ jsx(ZAxis, { type: "category", dataKey: "sessionId", name: "Session" }),
        /* @__PURE__ */ jsx(
          Tooltip,
          {
            cursor: { strokeDasharray: "3 3" },
            formatter: (value, name, _props) => {
              if (name === "Intensity") {
                return [value, name];
              }
              if (name === "Session") {
                return [_props.payload.sessionId, "Session"];
              }
              if (name === "Timestamp") {
                return [_props.payload.timestamp, "Timestamp"];
              }
              return [value, name];
            }
          }
        ),
        /* @__PURE__ */ jsx(Legend, {}),
        prepareCriticalPointsData().map((point) => /* @__PURE__ */ jsx(
          Scatter,
          {
            name: point.name,
            data: [point],
            fill: point.color
          },
          `${point.name}-${point.sessionId}-${point.timestamp}`
        ))
      ] });
    }
    if (viewMode === "progression") {
      return /* @__PURE__ */ jsxs(
        AreaChart,
        {
          data: prepareProgressionData(),
          margin: { top: 20, right: 30, left: 0, bottom: 10 },
          children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
            /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
            /* @__PURE__ */ jsx(YAxis, {}),
            /* @__PURE__ */ jsx(Tooltip, {}),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(ReferenceLine, { y: 0, stroke: "#666" }),
            prepareProgressionData().map((item) => /* @__PURE__ */ jsx(
              Area,
              {
                type: "monotone",
                dataKey: "value",
                name: item.name,
                stroke: item.fill,
                fill: item.fill,
                fillOpacity: 0.6,
                strokeWidth: 2
              },
              item.name
            ))
          ]
        }
      );
    }
    if (viewMode === "transitions") {
      return /* @__PURE__ */ jsxs(
        AreaChart,
        {
          data: prepareTransitionsData(),
          margin: { top: 20, right: 30, left: 0, bottom: 10 },
          children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
            /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
            /* @__PURE__ */ jsx(
              YAxis,
              {
                yAxisId: "left",
                orientation: "left",
                dataKey: "frequency",
                name: "Frequency"
              }
            ),
            /* @__PURE__ */ jsx(
              YAxis,
              {
                yAxisId: "right",
                orientation: "right",
                dataKey: "duration",
                name: "Avg. Duration (min)"
              }
            ),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                formatter: (value, name, _props) => {
                  if (name === "frequency") {
                    return [value, "Frequency"];
                  }
                  if (name === "duration") {
                    return [value.toFixed(1), "Avg Duration (min)"];
                  }
                  return [value, name];
                }
              }
            ),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(
              Area,
              {
                yAxisId: "left",
                type: "monotone",
                dataKey: "frequency",
                stroke: "#8884d8",
                fill: "#8884d8",
                fillOpacity: 0.6,
                strokeWidth: 2,
                name: "Frequency"
              }
            ),
            /* @__PURE__ */ jsx(
              Line,
              {
                yAxisId: "right",
                type: "monotone",
                dataKey: "duration",
                stroke: "#82ca9d",
                strokeWidth: 2,
                name: "Avg Duration (min)"
              }
            )
          ]
        }
      );
    }
    if (viewMode === "relationships") {
      return /* @__PURE__ */ jsxs(
        AreaChart,
        {
          data: prepareRelationshipsData(),
          margin: { top: 20, right: 30, left: 0, bottom: 10 },
          children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
            /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
            /* @__PURE__ */ jsx(YAxis, { domain: [-1, 1] }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                formatter: (value, name) => {
                  if (name === "correlation") {
                    return [value.toFixed(2), "Correlation"];
                  }
                  return [value, name];
                }
              }
            ),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(ReferenceLine, { y: 0, stroke: "#666" }),
            /* @__PURE__ */ jsx(
              Area,
              {
                type: "monotone",
                dataKey: "correlation",
                stroke: "#8884d8",
                fill: "#8884d8",
                fillOpacity: 0.6,
                strokeWidth: 2,
                name: "Correlation"
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(AreaChart, { data: [], margin: { top: 20, right: 30, left: 0, bottom: 10 }, children: [
      /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
      /* @__PURE__ */ jsx(XAxis, {}),
      /* @__PURE__ */ jsx(YAxis, {}),
      /* @__PURE__ */ jsx(Tooltip, {})
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("p-4 bg-white rounded-lg shadow-sm", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Temporal Emotion Analysis" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("trends"),
            className: cn(
              "px-3 py-1 text-sm rounded-full",
              viewMode === "trends" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-600"
            ),
            children: "Trends"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("critical"),
            className: cn(
              "px-3 py-1 text-sm rounded-full",
              viewMode === "critical" ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-600"
            ),
            children: "Critical Points"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("progression"),
            className: cn(
              "px-3 py-1 text-sm rounded-full",
              viewMode === "progression" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
            ),
            children: "Progression"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("transitions"),
            className: cn(
              "px-3 py-1 text-sm rounded-full",
              viewMode === "transitions" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"
            ),
            children: "Transitions"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("relationships"),
            className: cn(
              "px-3 py-1 text-sm rounded-full",
              viewMode === "relationships" ? "bg-indigo-100 text-indigo-800" : "bg-gray-100 text-gray-600"
            ),
            children: "Relationships"
          }
        )
      ] })
    ] }),
    viewMode === "trends" && /* @__PURE__ */ jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: Object.entries(emotionFilters).map(([emotion, isSelected]) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => toggleEmotionFilter(emotion),
        className: cn(
          "px-2 py-1 text-xs rounded-full border",
          isSelected ? "text-white" : "bg-white text-gray-600"
        ),
        style: {
          backgroundColor: isSelected ? getEmotionColor(emotion) : void 0
        },
        children: emotion
      },
      emotion
    )) }),
    /* @__PURE__ */ jsx("div", { style: { width: "100%", height: `${height}px` }, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: renderChart() }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-600", children: [
      viewMode === "trends" && /* @__PURE__ */ jsx("p", { children: "This chart shows emotional trend patterns over time, helping to identify which emotions are increasing or decreasing in intensity across sessions. Positive slopes indicate increasing emotions, while negative slopes show decreasing trends." }),
      viewMode === "critical" && /* @__PURE__ */ jsx("p", { children: "Critical emotional points represent significant moments with high emotional intensity. These points often indicate important therapeutic breakthroughs or challenges." }),
      viewMode === "progression" && /* @__PURE__ */ jsx("p", { children: "The progression chart shows overall emotional improvement metrics. Positive values indicate beneficial changes, while negative values may indicate areas needing attention." }),
      viewMode === "transitions" && /* @__PURE__ */ jsx("p", { children: "This view shows the most common emotional transitions and their frequency. Understanding emotional shifts provides insight into emotional regulation patterns." }),
      viewMode === "relationships" && /* @__PURE__ */ jsx("p", { children: "Emotional relationships show correlations between different emotions. Positive correlations indicate emotions that tend to occur together, while negative correlations show emotions that rarely co-occur." })
    ] })
  ] });
}

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$ClientHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientHeader;
  const { clientId, name, email, avatar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between bg-white rounded-lg shadow-sm p-6 mb-6"> <div class="flex items-center"> <img${addAttribute(avatar, "src")}${addAttribute(name, "alt")} class="w-16 h-16 rounded-full object-cover mr-4"> <div> <h1 class="text-2xl font-bold">${name}</h1> <p class="text-gray-600">${email}</p> <div class="flex mt-2"> <a${addAttribute(`/client/${clientId}`, "href")} class="text-sm text-purple-600 hover:text-purple-800 mr-4">Overview</a> <a${addAttribute(`/client/${clientId}/sessions`, "href")} class="text-sm text-purple-600 hover:text-purple-800 mr-4">Sessions</a> <a${addAttribute(`/client/${clientId}/temporal-analysis`, "href")} class="text-sm text-purple-600 hover:text-purple-800 mr-4 font-semibold">Temporal Analysis</a> <a${addAttribute(`/client/${clientId}/insights`, "href")} class="text-sm text-purple-600 hover:text-purple-800">Insights</a> </div> </div> </div> <div> <a${addAttribute(`/client/${clientId}/notes`, "href")} class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"> <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path> </svg>
Client Notes
</a> </div> </div>`;
}, "/root/pixel/src/components/client/ClientHeader.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$SessionList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SessionList;
  const { sessions, selectedSessionId } = Astro2.props;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-4 border-b border-gray-200"> <h3 class="text-lg font-semibold">Recent Sessions</h3> </div> ${sessions.length === 0 ? renderTemplate`<div class="p-6 text-center text-gray-500">No sessions found</div>` : renderTemplate`<ul> ${sessions.map((session) => renderTemplate`<li${addAttribute(`border-b border-gray-100 last:border-0 ${selectedSessionId === session.id ? "bg-purple-50" : ""}`, "class")}> <a${addAttribute(`/client/${session.clientId}/sessions/${session.id}`, "href")} class="block px-4 py-3 hover:bg-gray-50 transition"> <div class="flex justify-between items-center"> <div> <h4 class="font-medium text-gray-900">${session.title}</h4> <div class="text-sm text-gray-500"> ${formatDate(session.startTime)} </div> </div> <div> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${session.status === "completed" ? "bg-green-100 text-green-800" : session.status === "scheduled" ? "bg-blue-100 text-blue-800" : session.status === "canceled" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`, "class")}> ${session.status} </span> </div> </div> </a> </li>`)} </ul>`} </div>`;
}, "/root/pixel/src/components/session/SessionList.astro", void 0);

var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 1] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 2] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 3] = "ERROR";
  LogLevel2[LogLevel2["NONE"] = 4] = "NONE";
  return LogLevel2;
})(LogLevel || {});
const DEFAULT_OPTIONS = {
  level: 1 /* INFO */,
  timestamp: true,
  context: "app",
  environment: typeof window !== "undefined" ? "client" : "server"
};
let currentLogLevel = typeof process !== "undefined" && process.env["NODE_ENV"] === "production" ? 3 /* ERROR */ : 0 /* DEBUG */;
function createLogger(options = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  return {
    debug: (message, ...args) => {
      if (currentLogLevel <= 0 /* DEBUG */) {
        logMessage(0 /* DEBUG */, opts, message, ...args);
      }
    },
    info: (message, ...args) => {
      if (currentLogLevel <= 1 /* INFO */) {
        logMessage(1 /* INFO */, opts, message, ...args);
      }
    },
    warn: (message, ...args) => {
      if (currentLogLevel <= 2 /* WARN */) {
        logMessage(2 /* WARN */, opts, message, ...args);
      }
    },
    error: (message, ...args) => {
      if (currentLogLevel <= 3 /* ERROR */) {
        if (message instanceof Error) {
          logMessage(3 /* ERROR */, opts, message.message, ...args);
          console.error(message.stack);
        } else {
          logMessage(3 /* ERROR */, opts, message, ...args);
        }
      }
    },
    setLevel: (level) => {
      currentLogLevel = level;
    },
    getLevel: () => currentLogLevel
  };
}
function logMessage(level, options, message, ...args) {
  const timestamp = options.timestamp ? `[${(/* @__PURE__ */ new Date()).toISOString()}]` : "";
  const levelStr = LogLevel[level].padEnd(5);
  const context = options.context ? `[${options.context}]` : "";
  const prefix = `${timestamp} ${levelStr} ${context}:`;
  switch (level) {
    case 0 /* DEBUG */:
      console.debug(prefix, message, ...args);
      break;
    case 1 /* INFO */:
      console.info(prefix, message, ...args);
      break;
    case 2 /* WARN */:
      console.warn(prefix, message, ...args);
      break;
    case 3 /* ERROR */:
      console.error(prefix, message, ...args);
      break;
  }
}
createLogger();

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$TemporalAnalysis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TemporalAnalysis;
  const logger = createLogger({ context: "temporal-analysis-page" });
  const astro = Astro2;
  const { clientId } = astro.params;
  const safeClientId = clientId || "unknown";
  const authResult = await requirePageAuth(astro);
  if (authResult) {
    return authResult;
  }
  const user = astro.locals?.user;
  if (!user) {
    return astro.redirect("/auth/login");
  }
  const client = {
    id: safeClientId,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "/img/avatars/woman1.png",
    therapistId: user.id
  };
  const recentSessions = Array.from({ length: 5 }, (_, i) => ({
    id: `session-${i + 1}`,
    clientId: safeClientId,
    therapistId: user.id,
    startTime: new Date(Date.now() - i * 864e5).toISOString(),
    // 1 day back for each
    status: "completed",
    title: `Session ${i + 1}`
  }));
  const placeholderData = {
    trendlines: {},
    volatility: {},
    transitions: [],
    patterns: [],
    criticalPoints: [],
    progression: {
      overallImprovement: 0,
      stabilityChange: 0,
      positiveEmotionChange: 0,
      negativeEmotionChange: 0
    },
    dimensionalRelationships: []
  };
  logger.info("Temporal analysis page accessed", {
    userId: user.id,
    clientId: safeClientId
  });
  const title = `Temporal Analysis - ${client.name}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "ClientHeader", $$ClientHeader, { "clientId": client.id, "name": client.name, "email": client.email, "avatar": client.avatar })} <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8"> <div class="lg:col-span-2"> <h2 class="text-2xl font-semibold mb-4">
Emotional Patterns Over Time
</h2> <p class="text-gray-600 mb-6">
Temporal analysis tracks emotional patterns across multiple sessions,
          helping identify trends, detect critical moments, and measure
          progress.
</p> <div class="bg-white rounded-lg shadow-sm mb-8"> ${renderComponent($$result2, "EmotionTemporalAnalysisChart", EmotionTemporalAnalysisChart, { "client:load": true, "data": placeholderData, "clientId": safeClientId, "height": 500, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/session/EmotionTemporalAnalysisChart", "client:component-export": "default" })} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <div class="bg-white rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold mb-3">
Intervention Effectiveness
</h3> <p class="text-gray-600 mb-4">
Analysis of which therapeutic approaches have been most effective
              based on emotional response patterns.
</p> <div class="flex flex-col space-y-2"> <div class="flex justify-between items-center"> <span>Cognitive Behavioral Therapy</span> <div class="h-2 bg-gray-200 rounded-full w-2/3"> <div class="h-2 bg-green-500 rounded-full" style="width: 85%"></div> </div> </div> <div class="flex justify-between items-center"> <span>Mindfulness Techniques</span> <div class="h-2 bg-gray-200 rounded-full w-2/3"> <div class="h-2 bg-green-500 rounded-full" style="width: 70%"></div> </div> </div> <div class="flex justify-between items-center"> <span>Exposure Therapy</span> <div class="h-2 bg-gray-200 rounded-full w-2/3"> <div class="h-2 bg-green-500 rounded-full" style="width: 65%"></div> </div> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold mb-3">Key Insights</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> </span> <span>Anxiety levels show a consistent decreasing trend over the
                  last 5 sessions</span> </li> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path> </svg> </span> <span>Strong correlation between mindfulness practice and increased
                  positive emotions</span> </li> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg> </span> <span>Weekly pattern of increased anxiety detected on Mondays</span> </li> </ul> </div> </div> <h3 class="text-xl font-semibold mb-4">Recommendations</h3> <div class="bg-white rounded-lg shadow-sm p-6 mb-8"> <p class="mb-4">Based on temporal analysis of emotional patterns:</p> <ul class="space-y-3"> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path> </svg> </span> <span>Continue mindfulness exercises with focus on daily practice
                rather than weekly sessions</span> </li> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path> </svg> </span> <span>Consider additional Monday morning support or check-ins to
                address weekly pattern</span> </li> <li class="flex items-start"> <span class="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-800 mr-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path> </svg> </span> <span>Explore and address root causes behind negative emotion spikes
                in social situations</span> </li> </ul> </div> </div> <div class="lg:col-span-1"> <h3 class="text-xl font-semibold mb-4">Recent Sessions</h3> ${renderComponent($$result2, "SessionList", $$SessionList, { "sessions": recentSessions, "selectedSessionId": "" })} <div class="bg-white rounded-lg shadow-sm p-6 mt-6"> <h3 class="text-lg font-semibold mb-3">Analysis Settings</h3> <form class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Time Window</label> <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"> <option value="30">Last 30 days</option> <option value="90" selected>Last 90 days</option> <option value="180">Last 180 days</option> <option value="365">Last year</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Emotion Types</label> <div class="space-y-2"> <div class="flex items-center"> <input id="emotion-all" type="checkbox" checked class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="emotion-all" class="ml-2 text-sm text-gray-700">All Emotions</label> </div> <div class="flex items-center"> <input id="emotion-anxiety" type="checkbox" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="emotion-anxiety" class="ml-2 text-sm text-gray-700">Anxiety</label> </div> <div class="flex items-center"> <input id="emotion-sadness" type="checkbox" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="emotion-sadness" class="ml-2 text-sm text-gray-700">Sadness</label> </div> <div class="flex items-center"> <input id="emotion-joy" type="checkbox" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="emotion-joy" class="ml-2 text-sm text-gray-700">Joy</label> </div> </div> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Analysis Features</label> <div class="space-y-2"> <div class="flex items-center"> <input id="patterns" type="checkbox" checked class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="patterns" class="ml-2 text-sm text-gray-700">Include Pattern Detection</label> </div> <div class="flex items-center"> <input id="dimensions" type="checkbox" checked class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"> <label for="dimensions" class="ml-2 text-sm text-gray-700">Dimensional Analysis</label> </div> </div> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
Update Analysis
</button> </form> </div> <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6"> <h3 class="text-md font-semibold text-blue-800 mb-2">
About Temporal Analysis
</h3> <p class="text-sm text-blue-700 mb-2">
Temporal analysis helps identify emotional patterns, trends, and
            significant moments across multiple therapy sessions.
</p> <p class="text-sm text-blue-700">
This analysis uses AI to detect patterns that might not be
            immediately obvious during individual sessions, providing a more
            comprehensive view of progress.
</p> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/client/[clientId]/temporal-analysis.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/client/[clientId]/temporal-analysis.astro", void 0);

const $$file = "/root/pixel/src/pages/client/[clientId]/temporal-analysis.astro";
const $$url = "/client/[clientId]/temporal-analysis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TemporalAnalysis,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
