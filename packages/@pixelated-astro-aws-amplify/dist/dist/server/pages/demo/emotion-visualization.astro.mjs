;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="de566a32-793f-4f49-8e7f-cfcc5283d4e7",e._sentryDebugIdIdentifier="sentry-dbid-de566a32-793f-4f49-8e7f-cfcc5283d4e7")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { u as useMultidimensionalEmotions, M as MultidimensionalEmotionChart } from '../../chunks/MultidimensionalEmotionChart_DAh5J2WS.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
export { renderers } from '../../renderers.mjs';

const EmotionVisualizationDemo = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [dataPoints, setDataPoints] = useState(100);
  const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(null);
  const DEMO_CLIENT_ID = "demo-client";
  const { data, isLoading, error } = useMultidimensionalEmotions(
    DEMO_CLIENT_ID,
    timeRange,
    dataPoints
  );
  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };
  const handleDataPointsChange = (event) => {
    setDataPoints(Number(event.target.value));
  };
  const handleEmotionSelect = (index) => {
    setSelectedEmotionIndex(index === selectedEmotionIndex ? null : index);
  };
  const selectedEmotion = selectedEmotionIndex !== null ? data[selectedEmotionIndex] : null;
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow-sm py-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "3D Emotion Visualization" }) }) }),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-gray-700 dark:text-gray-300", children: "This demo visualizes emotions in a 3D space using the PAD (Pleasure-Arousal-Dominance) model. The visualization shows how emotions change over time, with each point representing an emotional state." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 bg-white dark:bg-gray-800 p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Controls" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "timeRangeSelect",
                className: "block text-sm font-medium mb-1",
                children: "Time Range"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "timeRangeSelect",
                value: timeRange,
                onChange: handleTimeRangeChange,
                className: "w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "day", children: "Last 24 Hours" }),
                  /* @__PURE__ */ jsx("option", { value: "week", children: "Last Week" }),
                  /* @__PURE__ */ jsx("option", { value: "month", children: "Last Month" }),
                  /* @__PURE__ */ jsx("option", { value: "year", children: "Last Year" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs(
              "label",
              {
                htmlFor: "dataPointsInput",
                className: "block text-sm font-medium mb-1",
                children: [
                  "Data Points: ",
                  dataPoints
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "dataPointsInput",
                type: "range",
                min: "10",
                max: "500",
                step: "10",
                value: dataPoints,
                onChange: handleDataPointsChange,
                className: "w-full"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs mt-1", children: [
              /* @__PURE__ */ jsx("span", { children: "10" }),
              /* @__PURE__ */ jsx("span", { children: "250" }),
              /* @__PURE__ */ jsx("span", { children: "500" })
            ] })
          ] }),
          selectedEmotion && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Selected Emotion" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ jsx("strong", { children: "Time:" }),
              " ",
              formatDate(selectedEmotion.timestamp)
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ jsx("strong", { children: "Valence:" }),
              " ",
              selectedEmotion.valence.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ jsx("strong", { children: "Arousal:" }),
              " ",
              selectedEmotion.arousal.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ jsx("strong", { children: "Dominance:" }),
              " ",
              selectedEmotion.dominance.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("strong", { children: "Emotion:" }),
              " ",
              selectedEmotion.emotion || "Unknown"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Legend" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Valence (X-axis):" }),
              " Pleasure to displeasure"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Arousal (Y-axis):" }),
              " Activation to deactivation"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dominance (Z-axis):" }),
              " Dominance to submissiveness"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1 md:col-span-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow", children: /* @__PURE__ */ jsxs("div", { style: { height: "600px" }, children: [
          /* @__PURE__ */ jsx(
            MultidimensionalEmotionChart,
            {
              emotionData: data,
              isLoading
            }
          ),
          error && /* @__PURE__ */ jsxs("p", { className: "text-red-500 mt-2", children: [
            "Error loading emotion data: ",
            error.message
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Emotion Data Points" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto max-h-[300px]", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-2 border-b", children: "Time" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-2 border-b", children: "Valence" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-2 border-b", children: "Arousal" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-2 border-b", children: "Dominance" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-2 border-b", children: "Emotion" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: data.map((point, index) => /* @__PURE__ */ jsxs(
              "tr",
              {
                onClick: () => handleEmotionSelect(index),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleEmotionSelect(index);
                  }
                },
                tabIndex: 0,
                className: `cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700
                        ${selectedEmotionIndex === index ? "bg-blue-50 dark:bg-blue-900/20" : ""}`,
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-2 border-b", children: formatDate(point.timestamp) }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 border-b", children: point.valence.toFixed(2) }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 border-b", children: point.arousal.toFixed(2) }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 border-b", children: point.dominance.toFixed(2) }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 border-b", children: point.emotion || "Unknown" })
                ]
              },
              point.timestamp
            )) })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};

const $$EmotionVisualization = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "3D Emotion Visualization | Emotion Analytics" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EmotionVisualizationDemo", EmotionVisualizationDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/pages/EmotionVisualizationDemo", "client:component-export": "default" })} ` })}`;
}, "/root/pixel/src/pages/demo/emotion-visualization.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/emotion-visualization.astro";
const $$url = "/demo/emotion-visualization";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmotionVisualization,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
