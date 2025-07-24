;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e34370a0-63e6-48cb-8e6f-de3b334dda35",e._sentryDebugIdIdentifier="sentry-dbid-e34370a0-63e6-48cb-8e6f-de3b334dda35")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_36chXnrf.mjs';
import { $ as $$DashboardLayout } from '../../../chunks/DashboardLayout_CuwLqWXq.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { r as requirePageAuth } from '../../../chunks/serverAuth_DpRotyBD.mjs';
export { renderers } from '../../../renderers.mjs';

const EmotionDimensionalAnalysis = ({
  userId,
  className
}) => {
  const [emotionData, setEmotionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDimensions, setSelectedDimensions] = useState({
    valence: true,
    arousal: true,
    dominance: false
  });
  useEffect(() => {
    const mockData = [
      {
        id: "1",
        timestamp: "2024-01-15T10:30:00Z",
        valence: 0.7,
        arousal: 0.5,
        dominance: 0.6,
        emotion: "joy",
        confidence: 0.85
      },
      {
        id: "2",
        timestamp: "2024-01-15T11:00:00Z",
        valence: -0.3,
        arousal: 0.8,
        dominance: 0.2,
        emotion: "anxiety",
        confidence: 0.78
      },
      {
        id: "3",
        timestamp: "2024-01-15T11:30:00Z",
        valence: 0.1,
        arousal: 0.3,
        dominance: 0.5,
        emotion: "calm",
        confidence: 0.92
      },
      {
        id: "4",
        timestamp: "2024-01-15T12:00:00Z",
        valence: 0.5,
        arousal: 0.6,
        dominance: 0.7,
        emotion: "excitement",
        confidence: 0.81
      }
    ];
    setTimeout(() => {
      setEmotionData(mockData);
      setIsLoading(false);
    }, 1e3);
  }, [userId]);
  const handleDimensionToggle = (dimension) => {
    setSelectedDimensions((prev) => ({
      ...prev,
      [dimension]: !prev[dimension]
    }));
  };
  const getEmotionColor = (emotion) => {
    const colors = {
      joy: "#FFC107",
      anxiety: "#F44336",
      calm: "#4CAF50",
      excitement: "#FF9800",
      sadness: "#2196F3",
      anger: "#F44336"
    };
    return colors[emotion] || "#9E9E9E";
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: `emotion-dimensional-analysis ${className || ""}`, children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsx("div", { className: "text-lg text-gray-500", children: "Loading emotion analysis..." }) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: `emotion-dimensional-analysis ${className || ""} space-y-6`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Dimensional Controls" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: Object.entries(selectedDimensions).map(([dimension, isSelected]) => /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            checked: isSelected,
            onChange: () => handleDimensionToggle(dimension),
            className: "form-checkbox h-4 w-4 text-blue-600"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "capitalize font-medium", children: dimension }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
          dimension === "valence" && "(Positive/Negative)",
          dimension === "arousal" && "(Energized/Calm)",
          dimension === "dominance" && "(Control/Submissive)"
        ] })
      ] }, dimension)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Emotion Plot" }),
      /* @__PURE__ */ jsx("div", { className: "relative bg-gray-50 rounded-lg p-4", style: { height: "400px" }, children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 400 300", children: [
        /* @__PURE__ */ jsx("line", { x1: "50", y1: "250", x2: "350", y2: "250", stroke: "#666", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("line", { x1: "50", y1: "250", x2: "50", y2: "50", stroke: "#666", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("text", { x: "200", y: "280", textAnchor: "middle", className: "text-sm fill-gray-600", children: selectedDimensions.valence ? "Valence" : selectedDimensions.arousal ? "Arousal" : "Dominance" }),
        /* @__PURE__ */ jsx("text", { x: "30", y: "150", textAnchor: "middle", className: "text-sm fill-gray-600", transform: "rotate(-90, 30, 150)", children: selectedDimensions.arousal && selectedDimensions.valence ? "Arousal" : selectedDimensions.dominance ? "Dominance" : "Arousal" }),
        emotionData.map((point) => {
          let x = 50, y = 250;
          if (selectedDimensions.valence && selectedDimensions.arousal) {
            x = 50 + (point.valence + 1) * 150;
            y = 250 - point.arousal * 200;
          } else if (selectedDimensions.valence && selectedDimensions.dominance) {
            x = 50 + (point.valence + 1) * 150;
            y = 250 - point.dominance * 200;
          } else if (selectedDimensions.arousal && selectedDimensions.dominance) {
            x = 50 + point.arousal * 300;
            y = 250 - point.dominance * 200;
          }
          return /* @__PURE__ */ jsx(
            "circle",
            {
              cx: x,
              cy: y,
              r: "6",
              fill: getEmotionColor(point.emotion),
              stroke: "#fff",
              strokeWidth: "2",
              opacity: point.confidence,
              children: /* @__PURE__ */ jsx("title", { children: `${point.emotion} (${new Date(point.timestamp).toLocaleTimeString()})` })
            },
            point.id
          );
        })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Emotion Timeline" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: emotionData.map((point) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-4 h-4 rounded-full",
              style: { backgroundColor: getEmotionColor(point.emotion) }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-medium capitalize", children: point.emotion }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: new Date(point.timestamp).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
            "V: ",
            point.valence.toFixed(2),
            " | A: ",
            point.arousal.toFixed(2),
            " | D: ",
            point.dominance.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
            "Confidence: ",
            (point.confidence * 100).toFixed(1),
            "%"
          ] })
        ] })
      ] }, point.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Statistics" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: (emotionData.reduce((sum, p) => sum + p.valence, 0) / emotionData.length).toFixed(2) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Average Valence" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: (emotionData.reduce((sum, p) => sum + p.arousal, 0) / emotionData.length).toFixed(2) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Average Arousal" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-purple-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-600", children: (emotionData.reduce((sum, p) => sum + p.dominance, 0) / emotionData.length).toFixed(2) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Average Dominance" })
        ] })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$DimensionalAnalysis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DimensionalAnalysis;
  const result = await requirePageAuth(
    Astro2
  );
  if (result instanceof Response) {
    return result;
  }
  const user = Astro2.locals.user;
  const pageTitle = "Dimensional Emotion Analysis";
  const pageDescription = "Analyze emotions in multi-dimensional space using valence, arousal, and dominance dimensions";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ClientRouter", $$ClientRouter, {})} ${renderComponent($$result2, "DashboardLayout", $$DashboardLayout, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <div class="mb-6"> <h1 class="text-2xl font-bold text-gray-900 mb-2"> ${pageTitle} </h1> <p class="text-gray-600"> ${pageDescription} </p> </div> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-lg font-medium text-gray-900 mb-4">
About Multi-dimensional Emotion Mapping
</h2> <div class="prose max-w-none"> <p>
Multi-dimensional emotion mapping uses established psychological
            models to represent emotions in a three-dimensional space:
</p> <ul> <li> <strong>Valence</strong>: The pleasure-displeasure dimension
              (positive vs. negative feelings)
</li> <li> <strong>Arousal</strong>: The activation-deactivation dimension
              (energized vs. calm)
</li> <li> <strong>Dominance</strong>: The control dimension (feeling in
              control vs. feeling controlled)
</li> </ul> <p>
This approach provides a richer understanding of emotional states
            beyond basic emotion categories. It helps identify patterns,
            transitions, and relationships between different emotional
            dimensions.
</p> </div> </div> ${renderComponent($$result3, "EmotionDimensionalAnalysis", EmotionDimensionalAnalysis, { "client:load": true, "userId": user.id, "client:component-hydration": "load", "client:component-path": "@/components/dashboard/EmotionDimensionalAnalysis", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/root/pixel/src/pages/dashboard/emotions/dimensional-analysis.astro", void 0);

const $$file = "/root/pixel/src/pages/dashboard/emotions/dimensional-analysis.astro";
const $$url = "/dashboard/emotions/dimensional-analysis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DimensionalAnalysis,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
