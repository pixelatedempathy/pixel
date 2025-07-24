;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3b7d5de1-4a32-4fb0-800c-241905dbea46",e._sentryDebugIdIdentifier="sentry-dbid-3b7d5de1-4a32-4fb0-800c-241905dbea46")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DBAAVvAL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { u as useMultidimensionalEmotions, M as MultidimensionalEmotionChart } from '../chunks/MultidimensionalEmotionChart_CgpgERBO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
export { renderers } from '../renderers.mjs';

const EmotionVisualizationPage = () => {
  const { clientId } = useParams();
  const [timeRange, setTimeRange] = useState(
    "week"
  );
  const [dataPoints, setDataPoints] = useState(50);
  const {
    data: emotionData,
    isLoading,
    error
  } = useMultidimensionalEmotions(clientId || "unknown", timeRange, dataPoints);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "3D Emotion Visualization" }),
    error && /* @__PURE__ */ jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4", children: [
      "Error: ",
      error.message
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "timeRange", className: "block text-sm font-medium mb-1", children: "Time Range" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "timeRange",
            value: timeRange,
            onChange: (e) => setTimeRange(e.target.value),
            className: "border rounded px-3 py-2",
            children: [
              /* @__PURE__ */ jsx("option", { value: "day", children: "Day" }),
              /* @__PURE__ */ jsx("option", { value: "week", children: "Week" }),
              /* @__PURE__ */ jsx("option", { value: "month", children: "Month" }),
              /* @__PURE__ */ jsx("option", { value: "year", children: "Year" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "dataPoints",
            className: "block text-sm font-medium mb-1",
            children: "Data Points"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "dataPoints",
            type: "number",
            min: "5",
            max: "200",
            value: dataPoints,
            onChange: (e) => setDataPoints(Number(e.target.value)),
            className: "border rounded px-3 py-2 w-24"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-lg p-4", children: /* @__PURE__ */ jsx("div", { className: "h-[600px]", children: /* @__PURE__ */ jsx(
      MultidimensionalEmotionChart,
      {
        emotionData,
        isLoading
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-gray-100 p-4 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3", children: "About the 3D Emotion Visualization" }),
      /* @__PURE__ */ jsx("p", { className: "mb-3", children: "This visualization uses the PAD (Pleasure-Arousal-Dominance) emotional state model to represent emotions in a three-dimensional space:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-3", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Valence (X-axis):" }),
          " Represents pleasure-displeasure, ranging from negative to positive feelings."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Arousal (Y-axis):" }),
          " Represents activation-deactivation, ranging from calm to excited states."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Dominance (Z-axis):" }),
          " Represents dominance-submissiveness, ranging from feeling controlled to in control."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "The connected points show how emotional states have changed over time, with the newest data points appearing in brighter colors." })
    ] })
  ] });
};

const $$EmotionVisualization = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "3D Emotion Visualization" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EmotionVisualizationPage", EmotionVisualizationPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/pages/EmotionVisualizationPage", "client:component-export": "default" })} ` })}`;
}, "/root/pixel/src/pages/emotion-visualization.astro", void 0);

const $$file = "/root/pixel/src/pages/emotion-visualization.astro";
const $$url = "/emotion-visualization";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmotionVisualization,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
