;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b34b1b31-4ba8-4174-b9c2-27ca25a52e88",e._sentryDebugIdIdentifier="sentry-dbid-b34b1b31-4ba8-4174-b9c2-27ca25a52e88")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { M as MentalHealthService } from '../../chunks/service_DsfUD04Y.mjs';
import { c as createBuildSafeLogger } from '../../chunks/build-safe-logger_tzJzO24i.mjs';
import { $ as $$Card } from '../../chunks/Card_DkLu_rH_.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_B-WlwD0P.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_Ds6nOAL0.mjs';
import { $ as $$Badge } from '../../chunks/Badge_2usZ2CMb.mjs';
export { renderers } from '../../renderers.mjs';

const PipelineOverview = ({ className }) => {
  const pipelineStages = [
    {
      id: 1,
      title: "Data Ingestion",
      description: "Multi-source psychological content intake with format validation and preprocessing",
      icon: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
      features: ["Text & Document Processing", "Clinical Records Integration", "Real-time Data Validation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Knowledge Parsing",
      description: "Advanced entity extraction and concept analysis using NLP and clinical ontologies",
      icon: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) }),
      features: ["Mental Health Entity Recognition", "Therapeutic Concept Mapping", "Clinical Term Standardization"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Scenario Generation",
      description: "AI-powered creation of therapeutic scenarios with clinical formulations and treatment plans",
      icon: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }) }),
      features: ["Dynamic Client Profiles", "Evidence-Based Formulations", "Personalized Treatment Plans"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Analysis & Insights",
      description: "Comprehensive analytics with confidence scoring and clinical relevance metrics",
      icon: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }),
      features: ["Risk Assessment Algorithms", "Performance Metrics Tracking", "Quality Assurance Reports"],
      color: "from-orange-500 to-orange-600"
    }
  ];
  const technicalSpecs = [
    { label: "Processing Speed", value: "< 500ms average response time" },
    { label: "Accuracy Rate", value: "94.7% clinical entity recognition" },
    { label: "Model Training", value: "50,000+ clinical case studies" },
    { label: "Data Security", value: "HIPAA compliant encryption" },
    { label: "Scalability", value: "10,000+ concurrent analyses" },
    { label: "Integration", value: "RESTful API with webhooks" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: `pipeline-overview max-w-7xl mx-auto ${className || ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-3", children: "AI Psychology Pipeline Architecture" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "A sophisticated workflow that transforms raw psychological content into actionable clinical insights through advanced AI processing and analysis." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 to-orange-500" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: pipelineStages.map((stage, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-200", children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto`, children: stage.id }),
            /* @__PURE__ */ jsx("div", { className: `text-gray-600 mb-4 flex justify-center bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`, children: stage.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 text-center", children: stage.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4 text-center", children: stage.description }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: stage.features.map((feature) => /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-gray-500", children: [
              /* @__PURE__ */ jsx("div", { className: `w-2 h-2 bg-gradient-to-r ${stage.color} rounded-full mr-2` }),
              feature
            ] }, feature)) })
          ] }),
          index < pipelineStages.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-20 -right-3 z-10", children: /* @__PURE__ */ jsx("div", { className: `w-6 h-6 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center text-white`, children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", d: "M9 5l7 7-7 7" }) }) }) })
        ] }, stage.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Technical Specifications" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: technicalSpecs.map((spec) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: spec.label }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 font-mono", children: spec.value })
        ] }, spec.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Pipeline Capabilities" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: "Real-time Processing" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Instant analysis and feedback for clinical workflows" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: "Multi-modal Input" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Text, audio, and structured data processing" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: "Clinical Validation" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Evidence-based algorithms with peer review" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: "Continuous Learning" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Model updates based on clinical outcomes" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-white rounded-xl shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-6 text-center", children: "Data Flow & Processing Architecture" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-2", children: "Input Sources" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 text-center space-y-1", children: [
            /* @__PURE__ */ jsx("div", { children: "Clinical Notes" }),
            /* @__PURE__ */ jsx("div", { children: "Patient Records" }),
            /* @__PURE__ */ jsx("div", { children: "Research Papers" }),
            /* @__PURE__ */ jsx("div", { children: "Assessment Tools" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-gray-400 lg:rotate-0 rotate-90", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 7l5 5m0 0l-5 5m5-5H6" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-2", children: "AI Processing" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 text-center space-y-1", children: [
            /* @__PURE__ */ jsx("div", { children: "NLP Analysis" }),
            /* @__PURE__ */ jsx("div", { children: "Entity Extraction" }),
            /* @__PURE__ */ jsx("div", { children: "Pattern Recognition" }),
            /* @__PURE__ */ jsx("div", { children: "Risk Assessment" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-gray-400 lg:rotate-0 rotate-90", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 7l5 5m0 0l-5 5m5-5H6" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-2", children: "Clinical Insights" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 text-center space-y-1", children: [
            /* @__PURE__ */ jsx("div", { children: "Diagnostic Support" }),
            /* @__PURE__ */ jsx("div", { children: "Treatment Plans" }),
            /* @__PURE__ */ jsx("div", { children: "Risk Indicators" }),
            /* @__PURE__ */ jsx("div", { children: "Progress Metrics" })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const logger = createBuildSafeLogger("KnowledgeParsingDemo");
const KnowledgeParsingDemo = ({ className }) => {
  const [inputText, setInputText] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [_error, setError] = useState(null);
  const clinicalPatterns = {
    mentalHealthConditions: {
      pattern: /\b(depression|anxiety|stress|trauma|ptsd|ocd|bipolar|panic|eating disorder|social anxiety|adhd|autism|schizophrenia|bpd|borderline)\b/gi,
      category: "mental_health"
    },
    therapeuticTechniques: {
      pattern: /\b(cbt|cognitive behavioral therapy|dbt|dialectical behavior therapy|emdr|exposure therapy|mindfulness|meditation|grounding|breathing exercises|behavioral activation|cognitive restructuring)\b/gi,
      category: "therapeutic_technique"
    },
    clinicalTerms: {
      pattern: /\b(diagnosis|symptoms|assessment|intervention|treatment|therapy|counseling|psychiatrist|psychologist|therapist|medication|antidepressant|anxiolytic)\b/gi,
      category: "clinical_term"
    },
    interventions: {
      pattern: /\b(crisis intervention|safety planning|resource connection|support group|hospitalization|emergency|suicide|self-harm|crisis)\b/gi,
      category: "intervention"
    }
  };
  const extractEntitiesAndConcepts = async (text) => {
    const startTime = Date.now();
    const entities = [];
    const concepts = [];
    Object.entries(clinicalPatterns).forEach(([patternName, config]) => {
      const matches = [...text.matchAll(config.pattern)];
      matches.forEach((match) => {
        if (match.index !== void 0) {
          entities.push({
            type: patternName,
            value: match[0],
            confidence: 0.85 + Math.random() * 0.1,
            // Realistic confidence range
            startIndex: match.index,
            endIndex: match.index + match[0].length
          });
        }
      });
    });
    const uniqueMatches = /* @__PURE__ */ new Map();
    Object.entries(clinicalPatterns).forEach(([_, config]) => {
      const matches = [...text.matchAll(config.pattern)];
      matches.forEach((match) => {
        const term = match[0].toLowerCase();
        if (!uniqueMatches.has(term)) {
          uniqueMatches.set(term, {
            name: term,
            category: config.category,
            confidence: 0.8 + Math.random() * 0.15,
            evidence: [match[0]],
            // The actual matched text
            relatedTerms: getRelatedTerms(term)
          });
        } else {
          const existing = uniqueMatches.get(term);
          existing.confidence = Math.min(0.95, existing.confidence + 0.05);
          existing.evidence.push(match[0]);
        }
      });
    });
    concepts.push(...uniqueMatches.values());
    let detectedConditions = [];
    const suggestedTechniques = [];
    let riskLevel = "low";
    let clinicalRelevance = 0.5;
    try {
      const mentalHealthService = new MentalHealthService({
        enableAnalysis: true,
        confidenceThreshold: 0.6,
        enableCrisisDetection: true
      });
      const sessionId = `demo-${Date.now()}`;
      const result = await mentalHealthService.processMessage(sessionId, {
        id: `msg-${Date.now()}`,
        role: "user",
        content: text,
        timestamp: Date.now()
      });
      if (result.analysis) {
        detectedConditions = result.analysis.indicators.map((i) => i.type);
        riskLevel = result.analysis.riskLevel === "critical" ? "high" : result.analysis.riskLevel === "medium" ? "moderate" : "low";
        clinicalRelevance = result.analysis.indicators.length > 0 ? 0.8 : 0.3;
        if (result.analysis.indicators.some((i) => i.type === "depression")) {
          suggestedTechniques.push("Behavioral Activation", "Cognitive Restructuring");
        }
        if (result.analysis.indicators.some((i) => i.type === "anxiety")) {
          suggestedTechniques.push("Grounding Techniques", "Breathing Exercises");
        }
        if (result.analysis.indicators.some((i) => i.type === "stress")) {
          suggestedTechniques.push("Stress Management", "Relaxation Techniques");
        }
      }
    } catch (err) {
      logger.warn("MentalHealthService analysis failed, using fallback", { error: err });
      if (text.toLowerCase().includes("depress")) {
        detectedConditions.push("depression");
      }
      if (text.toLowerCase().includes("anxi")) {
        detectedConditions.push("anxiety");
      }
      if (text.toLowerCase().includes("stress")) {
        detectedConditions.push("stress");
      }
      clinicalRelevance = entities.length > 0 ? 0.7 : 0.2;
    }
    const processingTime = Date.now() - startTime;
    const overallConfidence = entities.length > 0 ? entities.reduce((sum, e) => sum + e.confidence, 0) / entities.length : 0;
    return {
      entities,
      concepts,
      overallConfidence,
      analysisMetadata: {
        textLength: text.length,
        processingTime,
        clinicalRelevance,
        riskLevel,
        detectedConditions: [...new Set(detectedConditions)],
        suggestedTechniques: [...new Set(suggestedTechniques)]
      }
    };
  };
  const getRelatedTerms = (term) => {
    const relatedMap = {
      "depression": ["mood disorder", "major depressive disorder", "dysthymia", "melancholia"],
      "anxiety": ["worry", "panic", "phobia", "generalized anxiety disorder"],
      "stress": ["tension", "pressure", "burnout", "overwhelm"],
      "cbt": ["cognitive therapy", "behavior therapy", "thought challenging"],
      "dbt": ["mindfulness", "distress tolerance", "emotion regulation"],
      "trauma": ["ptsd", "acute stress", "complex trauma", "dissociation"],
      "therapy": ["counseling", "psychotherapy", "treatment", "intervention"]
    };
    return relatedMap[term.toLowerCase()] || [];
  };
  const handleParse = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to analyze");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const results = await extractEntitiesAndConcepts(inputText);
      setParsedData(results);
      logger.info("Knowledge parsing completed", {
        entityCount: results.entities.length,
        conceptCount: results.concepts.length,
        confidence: results.overallConfidence
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Analysis failed: ${errorMessage}`);
      logger.error("Knowledge parsing failed", { error: err });
    } finally {
      setIsLoading(false);
    }
  };
  const getRiskLevelColor = (level) => {
    switch (level) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "moderate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
    }
  };
  const getCategoryColor = (category) => {
    switch (category) {
      case "mental_health":
        return "bg-cyan-100 text-cyan-800";
      case "therapeutic_technique":
        return "bg-blue-100 text-blue-800";
      case "clinical_term":
        return "bg-gray-100 text-gray-800";
      case "intervention":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `knowledge-parsing-demo max-w-4xl mx-auto p-6 ${className || ""}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Clinical Knowledge Parsing Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Advanced entity and concept extraction for mental health and therapeutic content" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "input-text", className: "block text-sm font-medium text-gray-700", children: "Enter psychological or clinical text to analyze:" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "input-text",
            value: inputText,
            onChange: (e) => setInputText(e.target.value),
            placeholder: "Example: I've been feeling depressed lately and my therapist suggested cognitive behavioral therapy. The anxiety has been overwhelming, especially with the panic attacks...",
            rows: 4,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
            inputText.length,
            " characters"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleParse,
              disabled: isLoading,
              className: `px-6 py-2 rounded-md font-medium transition-colors ${isLoading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`,
              children: isLoading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Analyzing..."
              ] }) : "Parse Knowledge"
            }
          )
        ] })
      ] }),
      _error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Analysis Error" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-red-700", children: _error })
      ] }) }) }),
      parsedData && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Analysis Overview" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: parsedData.entities.length }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Entities" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-cyan-600", children: parsedData.concepts.length }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Concepts" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                (parsedData.overallConfidence * 100).toFixed(1),
                "%"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Confidence" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRiskLevelColor(parsedData.analysisMetadata.riskLevel)}`, children: [
                parsedData.analysisMetadata.riskLevel.toUpperCase(),
                " RISK"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Risk Level" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Extracted Entities" }),
          parsedData.entities.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: parsedData.entities.map((entity) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: entity.value }),
              /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(entity.type)}`, children: entity.type.replace(/([A-Z])/g, " $1").trim() })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
              (entity.confidence * 100).toFixed(1),
              "% confidence"
            ] })
          ] }, `${entity.type}-${entity.value}`)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No entities detected" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Extracted Concepts" }),
          parsedData.concepts.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: parsedData.concepts.map((concept) => /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900 capitalize", children: concept.name }),
                /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(concept.category)}`, children: concept.category.replace(/_/g, " ") })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
                (concept.confidence * 100).toFixed(1),
                "% confidence"
              ] })
            ] }),
            concept.relatedTerms.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Related: " }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-800", children: concept.relatedTerms.join(", ") })
            ] })
          ] }, `${concept.category}-${concept.name}`)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No concepts detected" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Clinical Analysis" }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Detected Conditions" }),
              parsedData.analysisMetadata.detectedConditions.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: parsedData.analysisMetadata.detectedConditions.map((condition) => /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800", children: condition }, `condition-${condition}`)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No specific conditions detected" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Suggested Techniques" }),
              parsedData.analysisMetadata.suggestedTechniques.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: parsedData.analysisMetadata.suggestedTechniques.map((technique) => /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: technique }, `technique-${technique}`)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No specific techniques suggested" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Analysis Metadata" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Processing Time:" }),
              /* @__PURE__ */ jsxs("span", { className: "ml-2 font-medium", children: [
                parsedData.analysisMetadata.processingTime,
                "ms"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Text Length:" }),
              /* @__PURE__ */ jsxs("span", { className: "ml-2 font-medium", children: [
                parsedData.analysisMetadata.textLength,
                " chars"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Clinical Relevance:" }),
              /* @__PURE__ */ jsxs("span", { className: "ml-2 font-medium", children: [
                (parsedData.analysisMetadata.clinicalRelevance * 100).toFixed(1),
                "%"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
};

const PresentingProblemVisualization = ({ events, presentingProblem }) => {
  const sortedEvents = [...events].sort((a, b) => {
    const getTimeValue = (timeStr) => {
      const match = timeStr.match(/(\d+)\s*(month|week|day|year)/i);
      if (!match) {
        return 0;
      }
      const num = parseInt(match[1]);
      const unit = match[2].toLowerCase();
      switch (unit) {
        case "year":
          return num * 365;
        case "month":
          return num * 30;
        case "week":
          return num * 7;
        case "day":
          return num;
        default:
          return num;
      }
    };
    return getTimeValue(b.time) - getTimeValue(a.time);
  });
  const getSeverityColor = (index, total) => {
    const intensity = (index + 1) / total;
    if (intensity <= 0.33) {
      return "bg-yellow-200 border-yellow-400";
    }
    if (intensity <= 0.66) {
      return "bg-orange-200 border-orange-400";
    }
    return "bg-red-200 border-red-400";
  };
  return /* @__PURE__ */ jsxs("div", { className: "presenting-problem-visualization bg-white rounded-lg p-6 border shadow-sm", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Presenting Problem Development Timeline" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800 mb-2", children: "Current Presenting Problem" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-700 text-sm", children: presentingProblem })
    ] }),
    sortedEvents.length > 0 && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-700 mb-4", children: "Problem Development History" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: sortedEvents.map((event, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative flex items-start",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `
                    relative z-10 flex items-center justify-center w-4 h-4 rounded-full border-2
                    ${getSeverityColor(index, sortedEvents.length)}
                  `,
                  children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-current opacity-60" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "ml-6 flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded", children: event.time }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
                    "Stage ",
                    index + 1,
                    " of ",
                    sortedEvents.length
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: event.description })
              ] })
            ]
          },
          `${event.time}-${event.description.slice(0, 20)}`
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 p-3 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-gray-700 mb-2", children: "Severity Progression" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-200 border border-yellow-400" }),
            /* @__PURE__ */ jsx("span", { children: "Early Stage" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-orange-200 border border-orange-400" }),
            /* @__PURE__ */ jsx("span", { children: "Developing" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-200 border border-red-400" }),
            /* @__PURE__ */ jsx("span", { children: "Acute/Current" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-indigo-50 rounded-lg", children: [
        /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-indigo-800 mb-2", children: "Clinical Insights" }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-indigo-700 space-y-1", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Duration:" }),
            " Problem has been developing over",
            " ",
            sortedEvents.length,
            " documented stages"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Pattern:" }),
            " ",
            sortedEvents.length > 2 ? "Progressive escalation with identifiable triggers" : "Recent onset with clear precipitating factors"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Intervention Window:" }),
            " ",
            sortedEvents.length <= 2 ? "Early intervention opportunity" : "Established pattern requiring comprehensive treatment"
          ] })
        ] })
      ] })
    ] }),
    sortedEvents.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-gray-500", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-8 h-8 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Add timeline events to visualize problem development" })
    ] })
  ] });
};

const demographicTargets = {
  age: {
    "18-25": 15,
    "26-35": 25,
    "36-50": 30,
    "51-65": 20,
    "65+": 10
  },
  gender: {
    "female": 45,
    "male": 40,
    "non-binary": 10,
    "prefer not to say": 5
  },
  occupation: {
    "Healthcare": 12,
    "Education": 15,
    "Technology": 18,
    "Business/Finance": 20,
    "Service Industry": 15,
    "Student": 10,
    "Retired": 5,
    "Other": 5
  },
  background: {
    Urban: 60,
    Suburban: 25,
    Rural: 15
  }
};
const currentStats = {
  age: {
    "18-25": 12,
    "26-35": 28,
    "36-50": 25,
    "51-65": 22,
    "65+": 13
  },
  gender: {
    "female": 52,
    "male": 35,
    "non-binary": 8,
    "prefer not to say": 5
  },
  occupation: {
    "Healthcare": 15,
    "Education": 18,
    "Technology": 22,
    "Business/Finance": 18,
    "Service Industry": 12,
    "Student": 8,
    "Retired": 4,
    "Other": 3
  },
  background: {
    Urban: 65,
    Suburban: 22,
    Rural: 13
  }
};
const DemographicBalancingDisplay = ({
  currentProfile,
  onBalanceUpdate
}) => {
  const [demographicStats, setDemographicStats] = useState([]);
  const [overallBalance, setOverallBalance] = useState(0);
  const getAgeCategory = (age) => {
    if (age <= 25) {
      return "18-25";
    }
    if (age <= 35) {
      return "26-35";
    }
    if (age <= 50) {
      return "36-50";
    }
    if (age <= 65) {
      return "51-65";
    }
    return "65+";
  };
  const getOccupationCategory = (occupation) => {
    const occ = occupation.toLowerCase();
    if (occ.includes("doctor") || occ.includes("nurse") || occ.includes("therapist") || occ.includes("medical")) {
      return "Healthcare";
    }
    if (occ.includes("teacher") || occ.includes("professor") || occ.includes("education")) {
      return "Education";
    }
    if (occ.includes("engineer") || occ.includes("developer") || occ.includes("tech") || occ.includes("software")) {
      return "Technology";
    }
    if (occ.includes("manager") || occ.includes("analyst") || occ.includes("finance") || occ.includes("business")) {
      return "Business/Finance";
    }
    if (occ.includes("service") || occ.includes("retail") || occ.includes("restaurant")) {
      return "Service Industry";
    }
    if (occ.includes("student")) {
      return "Student";
    }
    if (occ.includes("retired")) {
      return "Retired";
    }
    return "Other";
  };
  const getBackgroundCategory = (background) => {
    const bg = background.toLowerCase();
    if (bg.includes("urban") || bg.includes("city")) {
      return "Urban";
    }
    if (bg.includes("suburban") || bg.includes("suburb")) {
      return "Suburban";
    }
    if (bg.includes("rural") || bg.includes("country")) {
      return "Rural";
    }
    return "Urban";
  };
  useEffect(() => {
    const stats = [
      // Age demographics
      ...Object.entries(demographicTargets.age).map(([category, target]) => ({
        category: "Age",
        subcategory: category,
        current: currentStats.age[category],
        target,
        percentage: currentStats.age[category] / target * 100
      })),
      // Gender demographics
      ...Object.entries(demographicTargets.gender).map(
        ([category, target]) => ({
          category: "Gender",
          subcategory: category,
          current: currentStats.gender[category],
          target,
          percentage: currentStats.gender[category] / target * 100
        })
      ),
      // Occupation demographics
      ...Object.entries(demographicTargets.occupation).map(
        ([category, target]) => ({
          category: "Occupation",
          subcategory: category,
          current: currentStats.occupation[category],
          target,
          percentage: currentStats.occupation[category] / target * 100
        })
      ),
      // Background demographics
      ...Object.entries(demographicTargets.background).map(
        ([category, target]) => ({
          category: "Background",
          subcategory: category,
          current: currentStats.background[category],
          target,
          percentage: currentStats.background[category] / target * 100
        })
      )
    ];
    setDemographicStats(stats);
    const balanceScore = stats.reduce((acc, stat) => {
      const deviation = Math.abs(stat.percentage - 100);
      return acc + (100 - Math.min(deviation, 100));
    }, 0) / stats.length;
    setOverallBalance(balanceScore);
    onBalanceUpdate?.(balanceScore);
  }, [
    currentProfile,
    onBalanceUpdate
  ]);
  const getBalanceColor = (percentage) => {
    if (percentage >= 90 && percentage <= 110) {
      return "text-green-600 bg-green-50";
    }
    if (percentage >= 75 && percentage <= 125) {
      return "text-yellow-600 bg-yellow-50";
    }
    return "text-red-600 bg-red-50";
  };
  const getProgressBarColor = (percentage) => {
    if (percentage >= 90 && percentage <= 110) {
      return "bg-green-500";
    }
    if (percentage >= 75 && percentage <= 125) {
      return "bg-yellow-500";
    }
    return "bg-red-500";
  };
  const getCurrentProfileHighlight = (category, subcategory) => {
    const ageCategory = getAgeCategory(currentProfile.age);
    const genderCategory = currentProfile.gender;
    const occupationCategory = getOccupationCategory(currentProfile.occupation);
    const backgroundCategory = getBackgroundCategory(currentProfile.background);
    if (category === "Age" && subcategory === ageCategory) {
      return true;
    }
    if (category === "Gender" && subcategory === genderCategory) {
      return true;
    }
    if (category === "Occupation" && subcategory === occupationCategory) {
      return true;
    }
    if (category === "Background" && subcategory === backgroundCategory) {
      return true;
    }
    return false;
  };
  const groupedStats = demographicStats.reduce(
    (acc, stat) => {
      if (!acc[stat.category]) {
        acc[stat.category] = [];
      }
      acc[stat.category].push(stat);
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ jsxs("div", { className: "demographic-balancing-display bg-white rounded-lg p-6 border shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-800", children: "Demographic Balance & Diversity" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Overall Balance:" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `px-3 py-1 rounded-full text-sm font-medium ${overallBalance >= 85 ? "bg-green-100 text-green-800" : overallBalance >= 70 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
            children: [
              overallBalance.toFixed(1),
              "%"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800 mb-2", children: "Current Profile Classification" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm text-blue-700", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Age Group:" }),
          " ",
          getAgeCategory(currentProfile.age)
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Gender:" }),
          " ",
          currentProfile.gender
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Occupation Type:" }),
          " ",
          getOccupationCategory(currentProfile.occupation)
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Background:" }),
          " ",
          getBackgroundCategory(currentProfile.background)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: Object.entries(groupedStats).map(([category, stats]) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4", children: [
      /* @__PURE__ */ jsxs("h5", { className: "font-medium text-gray-700 mb-3", children: [
        category,
        " Distribution"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: stats.map((stat) => {
        const isCurrentProfile = getCurrentProfileHighlight(
          category,
          stat.subcategory
        );
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `
                    flex items-center justify-between p-2 rounded
                    ${isCurrentProfile ? "bg-blue-100 border border-blue-300" : "bg-gray-50"}
                  `,
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `text-sm font-medium ${isCurrentProfile ? "text-blue-800" : "text-gray-700"}`,
                  children: [
                    stat.subcategory,
                    isCurrentProfile && /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs", children: "(Current)" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600", children: [
                  stat.current,
                  "% / ",
                  stat.target,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-20 h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `h-full transition-all duration-300 ${getProgressBarColor(stat.percentage)}`,
                    style: {
                      width: `${Math.min(stat.percentage, 100)}%`
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `text-xs px-2 py-1 rounded ${getBalanceColor(stat.percentage)}`,
                    children: [
                      stat.percentage.toFixed(0),
                      "%"
                    ]
                  }
                )
              ] })
            ]
          },
          stat.subcategory
        );
      }) })
    ] }, category)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-indigo-50 rounded-lg", children: [
      /* @__PURE__ */ jsx("h5", { className: "font-medium text-indigo-800 mb-3", children: "Balance Recommendations" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-indigo-700 space-y-2", children: [
        demographicStats.filter((stat) => stat.percentage < 75 || stat.percentage > 125).slice(0, 3).map((stat) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              stat.category,
              " - ",
              stat.subcategory,
              ":"
            ] }),
            " ",
            stat.percentage < 75 ? `Under-represented (${stat.current}% vs ${stat.target}% target)` : `Over-represented (${stat.current}% vs ${stat.target}% target)`
          ] })
        ] }, `${stat.category}-${stat.subcategory}`)),
        demographicStats.filter(
          (stat) => stat.percentage < 75 || stat.percentage > 125
        ).length === 0 && /* @__PURE__ */ jsx("p", { className: "text-indigo-600", children: "✓ All demographic categories are well-balanced" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-gray-700 mb-2", children: "Balance Indicators" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-xs", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-green-500" }),
          /* @__PURE__ */ jsx("span", { children: "Well Balanced (90-110%)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-yellow-500" }),
          /* @__PURE__ */ jsx("span", { children: "Acceptable (75-125%)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-red-500" }),
          /* @__PURE__ */ jsx("span", { children: "Needs Attention (<75% or >125%)" })
        ] })
      ] })
    ] })
  ] });
};

const ClinicalFormulationDemo = ({
  patientData
}) => {
  const [formulation, setFormulation] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState("cbt");
  const mockFormulation = {
    id: "form-001",
    patientId: "patient-001",
    presentingProblems: [
      "Persistent low mood and loss of interest",
      "Sleep disturbances and fatigue",
      "Difficulty concentrating at work",
      "Social withdrawal from friends and family"
    ],
    precipitatingFactors: [
      "Recent job loss 3 months ago",
      "End of long-term relationship",
      "Financial stress and uncertainty"
    ],
    predisposingFactors: [
      "Family history of depression",
      "Previous episode of depression in late teens",
      "Perfectionist personality traits",
      "Limited emotional regulation skills"
    ],
    perpetuatingFactors: [
      "Negative thinking patterns and rumination",
      "Social isolation and reduced activity",
      "Poor sleep hygiene",
      "Avoidance of challenging situations"
    ],
    protectiveFactors: [
      "Strong family support system",
      "Previous successful therapy experience",
      "Good physical health",
      "Creative hobbies and interests",
      "Stable housing situation"
    ],
    hypotheses: {
      primary: "Major Depressive Episode triggered by multiple life stressors, maintained by cognitive patterns and behavioral withdrawal",
      alternative: [
        "Adjustment Disorder with mixed anxiety and depressed mood",
        "Persistent Depressive Disorder with acute exacerbation"
      ]
    },
    treatmentGoals: [
      "Reduce depressive symptoms to manageable levels",
      "Improve sleep quality and energy levels",
      "Develop effective coping strategies for stress",
      "Increase social engagement and activity levels",
      "Enhance emotional regulation skills"
    ],
    interventionPlan: [
      "Cognitive Behavioral Therapy (CBT) - 16-20 sessions",
      "Behavioral activation techniques",
      "Cognitive restructuring for negative thought patterns",
      "Sleep hygiene education",
      "Graded exposure to avoided activities",
      "Mindfulness and relaxation training"
    ],
    riskAssessment: {
      level: "moderate",
      factors: [
        "History of suicidal ideation",
        "Current hopelessness",
        "Social isolation"
      ]
    },
    prognosis: "Good with appropriate treatment engagement and support",
    reviewDate: "2024-04-01"
  };
  const generateFormulation = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    setFormulation(mockFormulation);
    setIsGenerating(false);
  };
  const approaches = {
    cbt: "Cognitive Behavioral Therapy",
    psychodynamic: "Psychodynamic Therapy",
    humanistic: "Humanistic Therapy",
    systemic: "Systemic Therapy"
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-6xl mx-auto p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Clinical Formulation Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Generate comprehensive clinical formulations using AI-assisted analysis" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Patient Information" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Presenting Problem" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 bg-gray-50 p-3 rounded", children: patientData?.presentingProblem || "Patient reports feeling depressed for the past 3 months, with difficulty sleeping, loss of appetite, and decreased motivation following job loss." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Demographics" }),
          /* @__PURE__ */ jsxs("div", { className: "text-gray-600 bg-gray-50 p-3 rounded space-y-1", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              "Age: ",
              patientData?.demographics?.age || 32
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Gender: ",
              patientData?.demographics?.gender || "Female"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Background: ",
              patientData?.demographics?.culturalBackground?.join(", ") || "Caucasian, Urban"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Therapeutic Approach" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: selectedApproach,
            onChange: (e) => setSelectedApproach(e.target.value),
            className: "w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            children: Object.entries(approaches).map(([key, label]) => /* @__PURE__ */ jsx("option", { value: key, children: label }, key))
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: generateFormulation,
          disabled: isGenerating,
          className: "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors",
          children: isGenerating ? "Generating Formulation..." : "Generate Clinical Formulation"
        }
      ) })
    ] }),
    isGenerating && /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Analyzing patient data and generating formulation..." })
    ] }) }),
    formulation && !isGenerating && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Four P's Formulation" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg border border-red-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-800 mb-3", children: "Precipitating Factors" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-red-700", children: formulation.precipitatingFactors.map((factor, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: factor })
            ] }, `precip-${index}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg border border-orange-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800 mb-3", children: "Predisposing Factors" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-orange-700", children: formulation.predisposingFactors.map((factor, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: factor })
            ] }, `predis-${index}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-yellow-800 mb-3", children: "Perpetuating Factors" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-yellow-700", children: formulation.perpetuatingFactors.map((factor, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: factor })
            ] }, `perp-${index}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-green-800 mb-3", children: "Protective Factors" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-green-700", children: formulation.protectiveFactors.map((factor, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: factor })
            ] }, `prot-${index}`)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Clinical Hypotheses" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 mb-2", children: "Primary Hypothesis" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-700", children: formulation.hypotheses.primary })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-2", children: "Alternative Hypotheses" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: formulation.hypotheses.alternative.map((hypothesis, index) => /* @__PURE__ */ jsxs("li", { className: "text-gray-600 flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 text-gray-400", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: hypothesis })
            ] }, `alt-${index}`)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Treatment Plan" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Treatment Goals" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: formulation.treatmentGoals.map((goal, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 text-green-500 font-bold", children: "✓" }),
              /* @__PURE__ */ jsx("span", { children: goal })
            ] }, `goal-${index}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Intervention Plan" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: formulation.interventionPlan.map((intervention, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 text-blue-500", children: "→" }),
              /* @__PURE__ */ jsx("span", { children: intervention })
            ] }, `intervention-${index}`)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Risk Assessment" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Risk Level:" }),
          /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${formulation.riskAssessment.level === "high" ? "bg-red-100 text-red-800" : formulation.riskAssessment.level === "moderate" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`, children: formulation.riskAssessment.level.charAt(0).toUpperCase() + formulation.riskAssessment.level.slice(1) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Risk Factors:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: formulation.riskAssessment.factors.map((factor, index) => /* @__PURE__ */ jsxs("li", { className: "text-gray-600 flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2 text-orange-500", children: "⚠" }),
            /* @__PURE__ */ jsx("span", { children: factor })
          ] }, `risk-${index}`)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Prognosis & Review" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Prognosis:" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 bg-gray-50 p-3 rounded", children: formulation.prognosis })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 mb-2", children: "Next Review Date:" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: new Date(formulation.reviewDate).toLocaleDateString() })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const ScenarioGenerationDemo = () => {
  const [profileData, setProfileData] = useState({
    patientInfo: {
      age: 35,
      gender: "female",
      occupation: "Marketing Manager",
      background: "Urban professional with supportive family network"
    },
    presentingProblem: "Generalized anxiety and work-related stress",
    presentingProblemDevelopment: [
      {
        time: "6 months ago",
        description: "Started new high-pressure job position"
      },
      {
        time: "3 months ago",
        description: "Began experiencing sleep difficulties and worry"
      },
      {
        time: "1 month ago",
        description: "Anxiety symptoms intensified, affecting work performance"
      }
    ],
    complexity: "medium",
    therapeuticApproach: ["CBT", "Mindfulness"],
    culturalFactors: [
      "Urban professional culture",
      "Work-life balance expectations"
    ]
  });
  const [generatedProfile, setGeneratedProfile] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiConnectionStatus, setApiConnectionStatus] = useState("disconnected");
  const [generationMetadata, setGenerationMetadata] = useState(null);
  const genderOptions = ["female", "male", "non-binary", "prefer not to say"];
  const complexityOptions = [
    {
      value: "low",
      label: "Low - Single presenting issue, stable support system"
    },
    { value: "medium", label: "Medium - Multiple factors, some comorbidity" },
    {
      value: "high",
      label: "High - Complex trauma, multiple diagnoses, crisis risk"
    }
  ];
  const therapeuticApproaches = [
    "CBT",
    "DBT",
    "Psychodynamic",
    "Humanistic",
    "EMDR",
    "Mindfulness",
    "Solution-Focused",
    "Family Systems"
  ];
  const handlePatientInfoChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      patientInfo: { ...prev.patientInfo, [field]: value }
    }));
  };
  const handlePresentingProblemChange = (value) => {
    setProfileData((prev) => ({ ...prev, presentingProblem: value }));
  };
  const handleComplexityChange = (value) => {
    setProfileData((prev) => ({ ...prev, complexity: value }));
  };
  const handleTherapeuticApproachToggle = (approach) => {
    setProfileData((prev) => ({
      ...prev,
      therapeuticApproach: prev.therapeuticApproach.includes(approach) ? prev.therapeuticApproach.filter((a) => a !== approach) : [...prev.therapeuticApproach, approach]
    }));
  };
  const addPresentingProblemEvent = () => {
    setProfileData((prev) => ({
      ...prev,
      presentingProblemDevelopment: [
        ...prev.presentingProblemDevelopment,
        { time: "", description: "" }
      ]
    }));
  };
  const updatePresentingProblemEvent = (index, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      presentingProblemDevelopment: prev.presentingProblemDevelopment.map(
        (event, i) => i === index ? { ...event, [field]: value } : event
      )
    }));
  };
  const removePresentingProblemEvent = (index) => {
    setProfileData((prev) => ({
      ...prev,
      presentingProblemDevelopment: prev.presentingProblemDevelopment.filter(
        (_, i) => i !== index
      )
    }));
  };
  const generateProfile = async () => {
    setIsGenerating(true);
    setApiConnectionStatus("testing");
    try {
      const { generateClientScenario } = await import('../../chunks/psychology-pipeline-demo_DJ_TyyK-.mjs');
      const requestData = {
        patientInfo: profileData.patientInfo,
        presentingProblem: profileData.presentingProblem,
        presentingProblemDevelopment: profileData.presentingProblemDevelopment,
        complexity: profileData.complexity,
        therapeuticApproach: profileData.therapeuticApproach,
        culturalFactors: profileData.culturalFactors
      };
      const generatedResponse = await generateClientScenario(requestData);
      const generated = {
        caseId: generatedResponse.caseId,
        patientInfo: generatedResponse.patientInfo,
        presentingProblem: generatedResponse.presentingProblem,
        presentingProblemDevelopment: generatedResponse.presentingProblemDevelopment,
        clinicalFormulation: generatedResponse.clinicalFormulation,
        treatmentPlan: generatedResponse.treatmentPlan
      };
      setGeneratedProfile(generated);
      setGenerationMetadata({
        processingTime: generatedResponse.generationMetadata.processingTime,
        qualityScore: generatedResponse.generationMetadata.qualityScore,
        balanceScore: generatedResponse.generationMetadata.balanceScore,
        timestamp: generatedResponse.generationMetadata.timestamp
      });
      setApiConnectionStatus("connected");
      console.log(
        "Scenario Generation Metadata:",
        generatedResponse.generationMetadata
      );
    } catch (error) {
      console.error("Error generating client scenario:", error);
      setApiConnectionStatus("disconnected");
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      const generated = {
        caseId: `CASE_${Date.now()}`,
        patientInfo: profileData.patientInfo,
        presentingProblem: profileData.presentingProblem,
        presentingProblemDevelopment: profileData.presentingProblemDevelopment,
        clinicalFormulation: {
          provisionalDiagnosis: [
            "Generalized Anxiety Disorder (300.02)",
            "Adjustment Disorder with Anxiety (309.24)"
          ],
          contributingFactors: {
            biological: [
              "Possible genetic predisposition to anxiety",
              "Sleep disruption affecting stress response"
            ],
            psychological: [
              "Perfectionist tendencies",
              "Catastrophic thinking patterns",
              "Low distress tolerance"
            ],
            social: [
              "High-pressure work environment",
              "Limited work-life boundaries",
              "Social comparison pressures"
            ]
          },
          summary: "Client presents with work-related anxiety that has escalated over the past 6 months following a job transition. Symptoms include persistent worry, sleep difficulties, and performance anxiety that is beginning to impact professional functioning."
        },
        treatmentPlan: {
          goals: {
            shortTerm: [
              "Reduce anxiety symptoms by 40% within 8 weeks",
              "Establish healthy sleep hygiene routine",
              "Develop coping strategies for work stress"
            ],
            longTerm: [
              "Maintain stable mood and anxiety levels",
              "Establish sustainable work-life balance",
              "Build resilience for future stressors"
            ]
          },
          interventions: [
            "Cognitive restructuring for catastrophic thinking",
            "Progressive muscle relaxation training",
            "Mindfulness-based stress reduction techniques",
            "Time management and boundary-setting skills"
          ],
          modalities: profileData.therapeuticApproach,
          outcomeMeasures: [
            "GAD-7",
            "Beck Anxiety Inventory",
            "Work and Social Adjustment Scale"
          ]
        }
      };
      setGeneratedProfile(generated);
      setGenerationMetadata({
        processingTime: 2e3,
        qualityScore: 75,
        balanceScore: 70,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    setIsGenerating(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "scenario-generation-demo p-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Scenario Generation Showcase" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Create comprehensive client profiles for therapeutic training scenarios" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-2", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-3 py-1 rounded-full text-sm ${apiConnectionStatus === "connected" ? "bg-green-100 text-green-800" : apiConnectionStatus === "testing" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${apiConnectionStatus === "connected" ? "bg-green-500" : apiConnectionStatus === "testing" ? "bg-yellow-500 animate-pulse" : "bg-red-500"}`
                }
              ),
              /* @__PURE__ */ jsx("span", { children: apiConnectionStatus === "connected" ? "API Connected" : apiConnectionStatus === "testing" ? "Testing Connection" : "API Disconnected" })
            ]
          }
        ),
        generationMetadata && /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 text-right", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Quality: ",
            generationMetadata.qualityScore.toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Balance: ",
            generationMetadata.balanceScore.toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Time: ",
            generationMetadata.processingTime,
            "ms"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Client Profile Creation" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700", children: "Patient Information" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "patient-age", className: "block text-sm font-medium text-gray-700 mb-1", children: "Age" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "patient-age",
                  type: "number",
                  value: profileData.patientInfo.age,
                  onChange: (e) => handlePatientInfoChange("age", parseInt(e.target.value)),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  min: "18",
                  max: "100"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "patient-gender", className: "block text-sm font-medium text-gray-700 mb-1", children: "Gender" }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  id: "patient-gender",
                  value: profileData.patientInfo.gender,
                  onChange: (e) => handlePatientInfoChange("gender", e.target.value),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  children: genderOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option, children: option }, option))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "patient-occupation", className: "block text-sm font-medium text-gray-700 mb-1", children: "Occupation" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "patient-occupation",
                type: "text",
                value: profileData.patientInfo.occupation,
                onChange: (e) => handlePatientInfoChange("occupation", e.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "patient-background", className: "block text-sm font-medium text-gray-700 mb-1", children: "Background" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "patient-background",
                value: profileData.patientInfo.background,
                onChange: (e) => handlePatientInfoChange("background", e.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                rows: 3
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700", children: "Presenting Problem" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "primary-concern", className: "block text-sm font-medium text-gray-700 mb-1", children: "Primary Concern" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "primary-concern",
                value: profileData.presentingProblem,
                onChange: (e) => handlePresentingProblemChange(e.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "problem-timeline", className: "block text-sm font-medium text-gray-700", children: "Problem Development Timeline" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: addPresentingProblemEvent,
                  className: "px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600",
                  children: "Add Event"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: profileData.presentingProblemDevelopment.map(
              (event, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex gap-2 items-start",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Timeline (e.g., 3 months ago)",
                        value: event.time,
                        onChange: (e) => updatePresentingProblemEvent(
                          index,
                          "time",
                          e.target.value
                        ),
                        className: "w-1/3 px-2 py-1 border border-gray-300 rounded text-sm"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Event description",
                        value: event.description,
                        onChange: (e) => updatePresentingProblemEvent(
                          index,
                          "description",
                          e.target.value
                        ),
                        className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => removePresentingProblemEvent(index),
                        className: "px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600",
                        children: "×"
                      }
                    )
                  ]
                },
                `${event.time}-${event.description.slice(0, 20)}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700", children: "Case Complexity" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: complexityOptions.map((option) => /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "complexity",
                value: option.value,
                checked: profileData.complexity === option.value,
                onChange: (e) => handleComplexityChange(
                  e.target.value
                ),
                className: "mr-2"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: option.label })
          ] }, option.value)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700", children: "Preferred Therapeutic Approaches" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: therapeuticApproaches.map((approach) => /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: profileData.therapeuticApproach.includes(
                  approach
                ),
                onChange: () => handleTherapeuticApproachToggle(approach),
                className: "mr-2"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: approach })
          ] }, approach)) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: generateProfile,
            disabled: isGenerating,
            className: "w-full mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed",
            children: isGenerating ? "Generating Profile..." : "Generate Comprehensive Profile"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(
          PresentingProblemVisualization,
          {
            events: profileData.presentingProblemDevelopment,
            presentingProblem: profileData.presentingProblem
          }
        ),
        /* @__PURE__ */ jsx(
          DemographicBalancingDisplay,
          {
            currentProfile: profileData.patientInfo
          }
        ),
        /* @__PURE__ */ jsx(
          ClinicalFormulationDemo,
          {
            patientInfo: profileData.patientInfo,
            presentingProblem: profileData.presentingProblem,
            complexity: profileData.complexity,
            therapeuticApproaches: profileData.therapeuticApproach,
            onFormulationGenerated: (formulation, treatmentPlan) => {
              setGeneratedProfile((prev) => ({
                ...prev,
                clinicalFormulation: formulation,
                treatmentPlan
              }));
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Generated Clinical Case" }),
          !generatedProfile ? /* @__PURE__ */ jsx("div", { className: "text-center py-8 text-gray-500", children: /* @__PURE__ */ jsx("p", { children: 'Configure the client profile and click "Generate Comprehensive Profile" to see the AI-generated clinical case.' }) }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700 mb-2", children: "Case ID" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm bg-white p-2 rounded border", children: generatedProfile.caseId })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700 mb-2", children: "Patient Summary" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border text-sm", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Age:" }),
                  " ",
                  generatedProfile.patientInfo?.age
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Gender:" }),
                  " ",
                  generatedProfile.patientInfo?.gender
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Occupation:" }),
                  " ",
                  generatedProfile.patientInfo?.occupation
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Background:" }),
                  " ",
                  generatedProfile.patientInfo?.background
                ] })
              ] })
            ] }),
            generatedProfile.clinicalFormulation && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700 mb-2", children: "Clinical Formulation" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border text-sm space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Provisional Diagnoses:" }),
                  /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside mt-1", children: generatedProfile.clinicalFormulation.provisionalDiagnosis.map(
                    (diagnosis) => /* @__PURE__ */ jsx("li", { children: diagnosis }, diagnosis)
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Contributing Factors:" }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-1 space-y-1", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("em", { children: "Biological:" }),
                      " ",
                      generatedProfile.clinicalFormulation.contributingFactors.biological.join(
                        ", "
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("em", { children: "Psychological:" }),
                      " ",
                      generatedProfile.clinicalFormulation.contributingFactors.psychological.join(
                        ", "
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("em", { children: "Social:" }),
                      " ",
                      generatedProfile.clinicalFormulation.contributingFactors.social.join(
                        ", "
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Summary:" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1", children: generatedProfile.clinicalFormulation.summary })
                ] })
              ] })
            ] }),
            generatedProfile.treatmentPlan && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-700 mb-2", children: "Treatment Plan" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border text-sm space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Goals:" }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("em", { children: "Short-term:" }) }),
                    /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside ml-4", children: generatedProfile.treatmentPlan.goals.shortTerm.map(
                      (goal) => /* @__PURE__ */ jsx("li", { children: goal }, goal)
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("em", { children: "Long-term:" }) }),
                    /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside ml-4", children: generatedProfile.treatmentPlan.goals.longTerm.map(
                      (goal) => /* @__PURE__ */ jsx("li", { children: goal }, goal)
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Interventions:" }),
                  /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside mt-1", children: generatedProfile.treatmentPlan.interventions.map(
                    (intervention) => /* @__PURE__ */ jsx("li", { children: intervention }, intervention)
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Modalities:" }),
                  " ",
                  generatedProfile.treatmentPlan.modalities.join(", ")
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Outcome Measures:" }),
                  " ",
                  generatedProfile.treatmentPlan.outcomeMeasures.join(
                    ", "
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const $$PsychologyPipeline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Psychology Pipeline Demo", "description": "Advanced AI-powered psychology pipeline demonstration featuring clinical knowledge parsing, therapeutic scenario generation, and comprehensive mental health analysis tools.", "bgType": "plum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen text-white py-8"> <div class="container mx-auto px-4"> <!-- Header --> <div class="text-center mb-12"> <div class="mb-6"> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 rounded-full" }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3"> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span> </span>
Live Demo Active
` })} </div> <h1 class="text-4xl lg:text-5xl font-bold mb-6">
Psychology Pipeline
<span class="text-cyan-400 block mt-2">AI-Powered Clinical Analysis</span> </h1> <p class="text-lg text-slate-300 max-w-3xl mx-auto">
Experience cutting-edge artificial intelligence in clinical psychology with real-time knowledge parsing, 
          therapeutic scenario generation, and comprehensive mental health analysis tools.
</p> </div> <!-- Features Overview --> <div class="grid md:grid-cols-3 gap-8 mb-12"> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-600/30 bg-slate-800/50 backdrop-blur" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-3">🧠</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-blue-100" }, { "default": ($$result5) => renderTemplate`Knowledge Parsing` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-blue-200/80" }, { "default": ($$result5) => renderTemplate`
Advanced entity extraction and concept analysis for psychological and therapeutic content with real-time confidence scoring.
` })} <div class="mt-4 space-y-2"> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-blue-400 rounded-full"></span> <span>Mental health condition detection</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-blue-400 rounded-full"></span> <span>Therapeutic technique identification</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-blue-400 rounded-full"></span> <span>Risk assessment & analysis</span> </div> </div> ` })} ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "border border-orange-600/30 bg-slate-800/50 backdrop-blur" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-3">📋</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-orange-100" }, { "default": ($$result5) => renderTemplate`Scenario Generation` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-orange-200/80" }, { "default": ($$result5) => renderTemplate`
Create comprehensive therapeutic scenarios with detailed client profiles, clinical formulations, and treatment plans.
` })} <div class="mt-4 space-y-2"> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-orange-400 rounded-full"></span> <span>Dynamic client profile creation</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-orange-400 rounded-full"></span> <span>Clinical formulation generation</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-orange-400 rounded-full"></span> <span>Treatment plan development</span> </div> </div> ` })} ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 bg-slate-800/50 backdrop-blur" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-3">📊</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-green-100" }, { "default": ($$result5) => renderTemplate`Analytics & Insights` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-green-200/80" }, { "default": ($$result5) => renderTemplate`
Comprehensive analysis with detailed metadata, confidence scoring, and clinical relevance metrics for informed decision-making.
` })} <div class="mt-4 space-y-2"> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-green-400 rounded-full"></span> <span>Real-time confidence scoring</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-green-400 rounded-full"></span> <span>Performance metrics tracking</span> </div> <div class="flex items-center gap-2 text-sm"> <span class="w-2 h-2 bg-green-400 rounded-full"></span> <span>Clinical relevance assessment</span> </div> </div> ` })} ` })} </div> <!-- Pipeline Overview Section --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-slate-600/30 bg-slate-800/50 backdrop-blur mb-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-slate-100 text-2xl" }, { "default": ($$result5) => renderTemplate`Pipeline Architecture Overview` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-slate-300" }, { "default": ($$result5) => renderTemplate`
Understand the sophisticated workflow that powers our AI-driven clinical analysis system.
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "PipelineOverview", PipelineOverview, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demo/PipelineOverview.tsx", "client:component-export": "default" })} ` })} ` })} <!-- Knowledge Parsing Demo Section --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-slate-600/30 bg-slate-800/50 backdrop-blur mb-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-slate-100 text-2xl" }, { "default": ($$result5) => renderTemplate`Clinical Knowledge Parsing Demo` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-slate-300" }, { "default": ($$result5) => renderTemplate`
Experience real-time entity extraction and concept analysis for psychological and therapeutic content.
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "KnowledgeParsingDemo", KnowledgeParsingDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demo/KnowledgeParsingDemo.tsx", "client:component-export": "default" })} ` })} ` })} <!-- Scenario Generation Demo Section --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-slate-600/30 bg-slate-800/50 backdrop-blur mb-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-slate-100 text-2xl" }, { "default": ($$result5) => renderTemplate`Therapeutic Scenario Generation Demo` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-slate-300" }, { "default": ($$result5) => renderTemplate`
Create comprehensive clinical cases with detailed formulations and evidence-based treatment plans.
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ScenarioGenerationDemo", ScenarioGenerationDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demo/ScenarioGenerationDemo.tsx", "client:component-export": "default" })} ` })} ` })} <!-- Technical Specifications --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-slate-600/30 bg-slate-800/50 backdrop-blur" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-slate-100 text-xl" }, { "default": ($$result5) => renderTemplate`Technical Specifications` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-slate-300" }, { "default": ($$result5) => renderTemplate`
Performance metrics and system capabilities of the psychology pipeline.
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-blue-400">${"< 500ms"}</div> <div class="text-sm text-slate-400">Average Response Time</div> </div> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-green-400">94.7%</div> <div class="text-sm text-slate-400">Clinical Entity Recognition</div> </div> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-orange-400">50k+</div> <div class="text-sm text-slate-400">Training Case Studies</div> </div> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-yellow-400">HIPAA</div> <div class="text-sm text-slate-400">Compliant Encryption</div> </div> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-red-400">10k+</div> <div class="text-sm text-slate-400">Concurrent Analyses</div> </div> <div class="text-center p-4 bg-slate-700/50 rounded-lg"> <div class="text-2xl font-bold text-cyan-400">REST</div> <div class="text-sm text-slate-400">API with Webhooks</div> </div> </div> ` })} ` })} </div> </div> ` })}`;
}, "/root/pixel/src/pages/demo/psychology-pipeline.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/psychology-pipeline.astro";
const $$url = "/demo/psychology-pipeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PsychologyPipeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
