;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2fe1c583-7a44-426c-bc6b-adc93270a93d",e._sentryDebugIdIdentifier="sentry-dbid-2fe1c583-7a44-426c-bc6b-adc93270a93d")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, g as renderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { C as ChartWidget } from '../../chunks/ChartWidget_CXXAxRJj.mjs';
/* empty css                                                 */
export { renderers } from '../../renderers.mjs';

const initialForm = {
  sessionId: "",
  clientId: "",
  therapistId: "",
  startTime: "",
  status: "active",
  securityLevel: "standard",
  emotionAnalysisEnabled: true,
  desiredOutcomes: ""
};
const TreatmentForecastForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  function handleChange(e) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: e.target.checked
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const payload = {
        session: {
          sessionId: form.sessionId,
          clientId: form.clientId,
          therapistId: form.therapistId,
          startTime: form.startTime,
          status: form.status,
          securityLevel: form.securityLevel,
          emotionAnalysisEnabled: form.emotionAnalysisEnabled
        },
        chatSession: {},
        recentEmotionState: null,
        recentInterventions: [],
        desiredOutcomes: form.desiredOutcomes.split(",").map((s) => s.trim()).filter(Boolean)
      };
      const res = await fetch("/api/analytics/treatment-forecast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Failed to fetch forecast");
        setLoading(false);
        return;
      }
      setResults(data.data.forecasts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "sessionId", className: "block font-medium", children: "Session ID" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "sessionId",
            name: "sessionId",
            value: form.sessionId,
            onChange: handleChange,
            required: true,
            className: "input input-bordered w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "clientId", className: "block font-medium", children: "Client ID" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "clientId",
            name: "clientId",
            value: form.clientId,
            onChange: handleChange,
            required: true,
            className: "input input-bordered w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "therapistId", className: "block font-medium", children: "Therapist ID" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "therapistId",
            name: "therapistId",
            value: form.therapistId,
            onChange: handleChange,
            required: true,
            className: "input input-bordered w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "startTime", className: "block font-medium", children: "Start Time" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "startTime",
            name: "startTime",
            type: "datetime-local",
            value: form.startTime,
            onChange: handleChange,
            required: true,
            className: "input input-bordered w-full"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "status", className: "block font-medium", children: "Status" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "status",
            name: "status",
            value: form.status,
            onChange: handleChange,
            className: "input input-bordered w-full",
            children: [
              /* @__PURE__ */ jsx("option", { value: "active", children: "Active" }),
              /* @__PURE__ */ jsx("option", { value: "paused", children: "Paused" }),
              /* @__PURE__ */ jsx("option", { value: "completed", children: "Completed" }),
              /* @__PURE__ */ jsx("option", { value: "emergency", children: "Emergency" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "securityLevel", className: "block font-medium", children: "Security Level" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "securityLevel",
            name: "securityLevel",
            value: form.securityLevel,
            onChange: handleChange,
            className: "input input-bordered w-full",
            children: [
              /* @__PURE__ */ jsx("option", { value: "standard", children: "Standard" }),
              /* @__PURE__ */ jsx("option", { value: "hipaa", children: "HIPAA" }),
              /* @__PURE__ */ jsx("option", { value: "fhe", children: "FHE" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "emotionAnalysisEnabled", className: "block font-medium", children: "Enable Emotion Analysis" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "emotionAnalysisEnabled",
          name: "emotionAnalysisEnabled",
          type: "checkbox",
          checked: form.emotionAnalysisEnabled,
          onChange: handleChange,
          className: "checkbox"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "desiredOutcomes", className: "block font-medium", children: [
        "Desired Outcomes",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "(comma-separated)" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "desiredOutcomes",
          name: "desiredOutcomes",
          value: form.desiredOutcomes,
          onChange: handleChange,
          required: true,
          className: "input input-bordered w-full",
          placeholder: "e.g., reduce anxiety, improve sleep"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "btn btn-primary w-full",
        disabled: loading,
        children: loading ? "Forecasting..." : "Get Forecast"
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "alert alert-error mt-4", children: error }),
    results && /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-2", children: "Forecast Results" }),
      /* @__PURE__ */ jsx(
        ChartWidget,
        {
          title: "Predicted Efficacy by Technique",
          chartType: "bar",
          labels: results.map((r) => r.technique),
          series: [
            { name: "Predicted Efficacy", data: results.map((r) => r.score) }
          ],
          height: 300
        }
      ),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: results.map((r) => /* @__PURE__ */ jsxs("li", { className: "bg-gray-50 rounded p-3 border", children: [
        /* @__PURE__ */ jsx("strong", { children: r.technique }),
        ": ",
        Math.round(r.score * 100),
        "% efficacy",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: r.rationale })
      ] }, r.technique)) })
    ] })
  ] });
};

const $$TreatmentForecast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-2rfh7vog> <head><title>Treatment Outcome Forecast</title><meta name="description" content="Forecast treatment outcomes using AI-powered analytics.">${renderHead()}</head> <body data-astro-cid-2rfh7vog> <main class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8" data-astro-cid-2rfh7vog> <h1 class="text-3xl font-bold mb-4 text-primary" data-astro-cid-2rfh7vog>
Treatment Outcome Forecast
</h1> <p class="mb-6 text-gray-700" data-astro-cid-2rfh7vog>
Predict the likelihood of achieving specific treatment outcomes based on
        your session and plan data. All predictions are AI-powered and for
        clinical decision support only.
</p> ${renderComponent($$result, "TreatmentForecastForm", TreatmentForecastForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/analytics/TreatmentForecastForm.tsx", "client:component-export": "default", "data-astro-cid-2rfh7vog": true })} </main> </body></html>`;
}, "/root/pixel/src/pages/analytics/treatment-forecast.astro", void 0);

const $$file = "/root/pixel/src/pages/analytics/treatment-forecast.astro";
const $$url = "/analytics/treatment-forecast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TreatmentForecast,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
