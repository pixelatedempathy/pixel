;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ce878f52-f7a7-4d12-b38c-978f4c185f39",e._sentryDebugIdIdentifier="sentry-dbid-ce878f52-f7a7-4d12-b38c-978f4c185f39")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Ck5BzePu.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                              */
export { renderers } from '../renderers.mjs';

const RecommendationDisplay = ({
  recommendations
}) => {
  if (!recommendations || recommendations.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-8 text-gray-500", children: "No recommendations available" });
  }
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const getEfficacyColor = (efficacy) => {
    if (efficacy >= 0.8) {
      return "text-green-600";
    } else if (efficacy >= 0.6) {
      return "text-yellow-600";
    } else {
      return "text-red-600";
    }
  };
  const isTreatmentDetails = (treatment) => {
    if (!treatment || typeof treatment !== "object") {
      return false;
    }
    const t = treatment;
    return "approach" in t && (typeof t["approach"] === "string" || t["approach"] === void 0) || "techniques" in t && (Array.isArray(t["techniques"]) || t["techniques"] === void 0) || "duration" in t && (typeof t["duration"] === "string" || t["duration"] === void 0) || "frequency" in t && (typeof t["frequency"] === "string" || t["frequency"] === void 0);
  };
  const isPersonalizationDetails = (personalization) => {
    if (!personalization || typeof personalization !== "object") {
      return false;
    }
    const p = personalization;
    return "factors" in p && (Array.isArray(p["factors"]) || p["factors"] === void 0) || "adaptations" in p && (typeof p["adaptations"] === "string" || p["adaptations"] === void 0);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: [
      "Treatment Recommendations (",
      recommendations.length,
      ")"
    ] }),
    recommendations.map((baseRec) => {
      const rec = baseRec;
      return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: rec.title || "Treatment Recommendation" }),
            rec.description && /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: rec.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: `px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`, children: [
              rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1),
              " Priority"
            ] }),
            typeof rec.efficacy === "number" && /* @__PURE__ */ jsxs("span", { className: `text-sm font-medium ${getEfficacyColor(rec.efficacy)}`, children: [
              Math.round(rec.efficacy * 100),
              "% Efficacy"
            ] })
          ] })
        ] }),
        rec.indications && rec.indications.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Target Indications:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: rec.indications.map((indication) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded",
              children: indication
            },
            `indication-${indication}`
          )) })
        ] }),
        rec.treatment && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Treatment Details:" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded p-3", children: typeof rec.treatment === "string" ? /* @__PURE__ */ jsx("p", { className: "text-gray-800", children: rec.treatment }) : isTreatmentDetails(rec.treatment) ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            rec.treatment["approach"] && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Approach: " }),
              /* @__PURE__ */ jsx("span", { children: rec.treatment["approach"] })
            ] }),
            rec.treatment["techniques"] && rec.treatment["techniques"].length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Techniques: " }),
              /* @__PURE__ */ jsx("span", { children: rec.treatment["techniques"].join(", ") })
            ] }),
            rec.treatment["duration"] && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Duration: " }),
              /* @__PURE__ */ jsx("span", { children: rec.treatment["duration"] })
            ] }),
            rec.treatment["frequency"] && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Frequency: " }),
              /* @__PURE__ */ jsx("span", { children: rec.treatment["frequency"] })
            ] })
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-gray-800", children: "Treatment details available" }) })
        ] }),
        rec.rationale && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Rationale:" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: rec.rationale })
        ] }),
        rec.evidence && rec.evidence.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Supporting Evidence:" }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-sm text-gray-600", children: rec.evidence.map((evidence) => /* @__PURE__ */ jsx("li", { children: evidence }, `evidence-${evidence.slice(0, 20)}`)) })
        ] }),
        rec.personalization && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Personalization Notes:" }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-50 rounded p-3", children: typeof rec.personalization === "string" ? /* @__PURE__ */ jsx("p", { className: "text-blue-800 text-sm", children: rec.personalization }) : isPersonalizationDetails(rec.personalization) ? /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm text-blue-800", children: [
            rec.personalization["factors"] && rec.personalization["factors"].length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Factors: " }),
              /* @__PURE__ */ jsx("span", { children: rec.personalization["factors"].join(", ") })
            ] }),
            rec.personalization["adaptations"] && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Adaptations: " }),
              /* @__PURE__ */ jsx("span", { children: rec.personalization["adaptations"] })
            ] })
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-blue-800 text-sm", children: "Personalization details available" }) })
        ] }),
        rec.alternatives && rec.alternatives.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Alternative Approaches:" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: rec.alternatives.map((alt) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded p-2 text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: alt.name }),
            alt.description && /* @__PURE__ */ jsx("div", { className: "text-gray-600 mt-1", children: alt.description }),
            typeof alt.efficacy === "number" && /* @__PURE__ */ jsxs("div", { className: `mt-1 ${getEfficacyColor(alt.efficacy)}`, children: [
              "Efficacy: ",
              Math.round(alt.efficacy * 100),
              "%"
            ] })
          ] }, `alt-${alt.name}`)) })
        ] }),
        rec.mediaRecommendations && rec.mediaRecommendations.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Recommended Resources:" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: rec.mediaRecommendations.map((media) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded p-3 text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: media.title }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 mt-1 capitalize", children: media.type }),
            media.description && /* @__PURE__ */ jsx("div", { className: "text-gray-600 mt-1 text-xs", children: media.description }),
            media.url && /* @__PURE__ */ jsx(
              "a",
              {
                href: media.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:text-blue-800 text-xs mt-1 inline-block",
                children: "View Resource →"
              }
            )
          ] }, `media-${media.title}-${media.type}`)) })
        ] }),
        rec.timestamp && /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 border-t pt-3 mt-4", children: [
          "Generated: ",
          new Date(rec.timestamp).toLocaleString()
        ] })
      ] }, rec.id || `rec-${rec.title || "untitled"}-${rec.metadata?.generatedAt || Date.now()}`);
    })
  ] });
};

const TreatmentPlanner = ({
  pageTitle,
  pageDescription
}) => {
  const [clientId, setClientId] = useState("");
  const [indications, setIndications] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  async function fetchRecommendations(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations([]);
    try {
      if (!clientId || !indications) {
        setError("Client ID and at least one indication are required.");
        setLoading(false);
        return;
      }
      const res = await fetch("/api/ai/recommendations/enhanced", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId,
          indications: indications.split(",").map((s) => s.trim()).filter(Boolean),
          includePersonalization: true,
          includeEfficacyStats: true,
          includeAlternativeApproaches: true,
          maxMediaRecommendations: 3
        })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Failed to fetch recommendations");
        setLoading(false);
        return;
      }
      setRecommendations(data.data.recommendations);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }
  const filteredRecommendations = filter === "all" ? recommendations : recommendations.filter((rec) => rec.priority === filter);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: pageTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: pageDescription })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "bg-white rounded-lg shadow p-6 mb-8",
        onSubmit: fetchRecommendations,
        autoComplete: "off",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "clientId",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Client ID (UUID)"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "clientId",
                name: "clientId",
                type: "text",
                required: true,
                pattern: "[0-9a-fA-F-]{36}",
                className: "w-full border border-gray-300 rounded px-3 py-2",
                value: clientId,
                onChange: (e) => setClientId(e.target.value),
                placeholder: "e.g. 123e4567-e89b-12d3-a456-426614174000"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "indications",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Indications (comma-separated)"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "indications",
                name: "indications",
                type: "text",
                required: true,
                className: "w-full border border-gray-300 rounded px-3 py-2",
                value: indications,
                onChange: (e) => setIndications(e.target.value),
                placeholder: "e.g. depression, anxiety"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition disabled:opacity-50",
              disabled: loading,
              children: "Fetch Recommendations"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `filter-btn${filter === "all" ? " active" : ""}`,
          onClick: () => setFilter("all"),
          children: "All"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `filter-btn${filter === "high" ? " active" : ""}`,
          onClick: () => setFilter("high"),
          children: "High Priority"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `filter-btn${filter === "medium" ? " active" : ""}`,
          onClick: () => setFilter("medium"),
          children: "Medium"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `filter-btn${filter === "low" ? " active" : ""}`,
          onClick: () => setFilter("low"),
          children: "Low"
        }
      )
    ] }),
    loading && /* @__PURE__ */ jsx("div", { className: "text-blue-600", children: "Loading recommendations..." }),
    error && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: error }),
    !loading && !error && filteredRecommendations.length > 0 && /* @__PURE__ */ jsx(RecommendationDisplay, { recommendations: filteredRecommendations })
  ] });
};

const $$TreatmentPlanning = createComponent(($$result, $$props, $$slots) => {
  const title = "Treatment Planning";
  const description = "Personalized, evidence-based treatment recommendations for therapy planning.";
  return renderTemplate`${maybeRenderHead()}<main class="max-w-4xl mx-auto py-10 px-4" data-astro-cid-i3d4kz5p> <h1 class="text-3xl font-bold mb-2" data-astro-cid-i3d4kz5p>${title}</h1> <p class="text-lg text-gray-600 mb-8" data-astro-cid-i3d4kz5p>${description}</p> ${renderComponent($$result, "TreatmentPlanner", TreatmentPlanner, { "client:load": true, "pageTitle": title, "pageDescription": description, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/treatment/TreatmentPlanner.tsx", "client:component-export": "default", "data-astro-cid-i3d4kz5p": true })} </main> `;
}, "/root/pixel/src/pages/treatment-planning.astro", void 0);

const $$file = "/root/pixel/src/pages/treatment-planning.astro";
const $$url = "/treatment-planning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TreatmentPlanning,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
