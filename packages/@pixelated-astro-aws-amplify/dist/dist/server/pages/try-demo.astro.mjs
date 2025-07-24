;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ad9771eb-8bd1-4eea-8365-87023ac22f15",e._sentryDebugIdIdentifier="sentry-dbid-ad9771eb-8bd1-4eea-8365-87023ac22f15")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Badge } from '../chunks/Badge_BTf8b-6k.mjs';
import { B as Button } from '../chunks/button_H-9GKzIc.mjs';
import { $ as $$Card } from '../chunks/Card_C_GhxMHY.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../chunks/CardTitle_ByxQ-_k1.mjs';
import { $ as $$CardDescription } from '../chunks/CardDescription_CtHMKp3-.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from '../chunks/card_DkLCUGNM.mjs';
import { c as cn } from '../chunks/utils_BxM-XLWA.mjs';
import { B as Badge } from '../chunks/badge_BDYuHo1H.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from '../chunks/tabs_DqEyi8rE.mjs';
import { Play, CheckCircle, Upload, FileText, Brain, AlertTriangle, BarChart3, Download, Zap } from 'lucide-react';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

function Progress({
  value = 0,
  max = 100,
  indeterminate = false,
  showValue = false,
  variant = "primary",
  size = "md",
  className,
  valueClassName,
  bgClassName,
  ...props
}) {
  const percentage = Math.min(Math.max(0, value / max * 100), 100);
  const sizeClasses = {
    xs: "h-1",
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };
  const variantClasses = {
    default: "bg-gray-600 dark:bg-gray-400",
    primary: "bg-primary dark:bg-primary-dark",
    secondary: "bg-gray-500 dark:bg-gray-400",
    success: "bg-green-500 dark:bg-green-600",
    warning: "bg-yellow-500 dark:bg-yellow-600",
    error: "bg-red-500 dark:bg-red-600"
  };
  const baseBackgroundClasses = "bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden";
  const baseProgressClasses = "h-full rounded-full transition-all duration-300 ease-in-out";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("w-full", className),
      role: "progressbar",
      "aria-valuenow": indeterminate ? void 0 : value,
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-label": indeterminate ? "Loading" : `${percentage}% loaded`,
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "w-full",
              baseBackgroundClasses,
              sizeClasses[size],
              bgClassName
            ),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  baseProgressClasses,
                  variantClasses[variant],
                  {
                    "animate-pulse": indeterminate,
                    "animate-progress-indeterminate w-3/4": indeterminate
                  },
                  valueClassName
                ),
                style: { width: indeterminate ? void 0 : `${percentage}%` }
              }
            )
          }
        ),
        showValue && !indeterminate && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-xs text-gray-500 dark:text-gray-400", children: [
          Math.round(percentage),
          "%"
        ] })
      ] })
    }
  );
}

const ClientFacingDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [, setDemoData] = useState({
    uploadedFiles: 0,
    validationScore: 0,
    balanceScore: 0,
    exportReady: false
  });
  const demoSteps = [
    {
      id: "upload",
      title: "Upload Psychology Content",
      description: "Upload case studies, therapy notes, or training materials",
      status: "completed",
      progress: 100
    },
    {
      id: "validate",
      title: "AI-Powered Validation",
      description: "Validate content for clinical accuracy and ethical compliance",
      status: currentStep >= 1 ? "completed" : "pending",
      progress: currentStep >= 1 ? 100 : 0
    },
    {
      id: "balance",
      title: "Category Balancing",
      description: "Ensure balanced representation across psychology categories",
      status: currentStep >= 2 ? "completed" : "pending",
      progress: currentStep >= 2 ? 100 : 0
    },
    {
      id: "export",
      title: "Export Results",
      description: "Generate training-ready datasets and quality reports",
      status: currentStep >= 3 ? "completed" : "pending",
      progress: currentStep >= 3 ? 100 : 0
    }
  ];
  const sampleFiles = [
    {
      name: "anxiety-case-studies.json",
      size: "2.4 MB",
      type: "JSON",
      status: "processed"
    },
    {
      name: "therapy-session-notes.csv",
      size: "1.8 MB",
      type: "CSV",
      status: "processed"
    },
    {
      name: "clinical-assessments.txt",
      size: "956 KB",
      type: "TXT",
      status: "processed"
    }
  ];
  const validationResults = [
    {
      category: "Clinical Accuracy",
      score: 94,
      status: "excellent",
      color: "text-green-400"
    },
    {
      category: "Ethical Compliance",
      score: 98,
      status: "excellent",
      color: "text-green-400"
    },
    {
      category: "Content Quality",
      score: 91,
      status: "good",
      color: "text-blue-400"
    },
    {
      category: "Format Consistency",
      score: 88,
      status: "good",
      color: "text-blue-400"
    }
  ];
  const categoryBalance = [
    {
      name: "Anxiety Disorders",
      percentage: 30,
      target: 30,
      color: "bg-purple-500"
    },
    {
      name: "Mood Disorders",
      percentage: 25,
      target: 25,
      color: "bg-blue-500"
    },
    {
      name: "Trauma & PTSD",
      percentage: 20,
      target: 20,
      color: "bg-green-500"
    },
    {
      name: "Personality Disorders",
      percentage: 15,
      target: 15,
      color: "bg-yellow-500"
    },
    { name: "Substance Use", percentage: 10, target: 10, color: "bg-red-500" }
  ];
  const runDemo = async () => {
    setIsProcessing(true);
    for (let i = 0; i <= 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCurrentStep(i);
      if (i === 0) {
        setDemoData((prev) => ({ ...prev, uploadedFiles: 3 }));
      } else if (i === 1) {
        setDemoData((prev) => ({ ...prev, validationScore: 93 }));
      } else if (i === 2) {
        setDemoData((prev) => ({ ...prev, balanceScore: 94 }));
      } else if (i === 3) {
        setDemoData((prev) => ({ ...prev, exportReady: true }));
      }
    }
    setIsProcessing(false);
  };
  const resetDemo = () => {
    setCurrentStep(0);
    setIsProcessing(false);
    setDemoData({
      uploadedFiles: 0,
      validationScore: 0,
      balanceScore: 0,
      exportReady: false
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Interactive Pipeline Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Experience our complete psychology training pipeline with sample data" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: runDemo,
            disabled: isProcessing,
            className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3",
            children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }),
              "Processing..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 mr-2" }),
              "Run Complete Demo"
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: resetDemo,
            variant: "outline",
            className: "border-purple-400 text-purple-300 hover:bg-purple-900/50 px-8 py-3",
            children: "Reset Demo"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-8", children: demoSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center flex-1", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step.status === "completed" ? "bg-green-600" : step.status === "processing" ? "bg-blue-600" : "bg-gray-600"}`,
          children: step.status === "completed" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: index + 1 })
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-white text-center", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 text-center mt-1", children: step.description }),
      step.progress > 0 && /* @__PURE__ */ jsx(Progress, { value: step.progress, className: "w-full mt-2 h-1" })
    ] }, step.id)) }) }),
    /* @__PURE__ */ jsxs(Tabs, { value: demoSteps[currentStep]?.id || "upload", className: "w-full", children: [
      /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-4 bg-slate-800", children: demoSteps.map((step, index) => /* @__PURE__ */ jsx(
        TabsTrigger,
        {
          value: step.id,
          disabled: index > currentStep,
          className: "data-[state=active]:bg-purple-600",
          children: step.title
        },
        step.id
      )) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "upload", className: "mt-6", children: /* @__PURE__ */ jsxs(Card, { className: "bg-slate-800 border-slate-700", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-purple-400 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Upload, { className: "w-5 h-5" }),
          "Data Upload & Processing"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Sample Files Processed" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: sampleFiles.map((file) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center justify-between p-3 bg-slate-700 rounded-lg",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-purple-400" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-medium", children: file.name }),
                      /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-xs", children: [
                        file.size,
                        " • ",
                        file.type
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-green-400 border-green-400",
                      children: file.status
                    }
                  )
                ]
              },
              `${file.name}-${file.type}`
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Processing Statistics" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "3" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Files Processed" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "1,247" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Items Extracted" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-400", children: "98.5%" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Success Rate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-400", children: "2.3s" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Avg Process Time" })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "validate", className: "mt-6", children: /* @__PURE__ */ jsxs(Card, { className: "bg-slate-800 border-slate-700", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-blue-400 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Brain, { className: "w-5 h-5" }),
          "AI-Powered Content Validation"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Validation Categories" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: validationResults.map((result) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: result.category }),
                /* @__PURE__ */ jsxs("span", { className: `font-bold ${result.color}`, children: [
                  result.score,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: result.score, className: "h-2" }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mt-2", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: result.color, children: result.status }) })
            ] }, `validation-${result.category}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Sample Validation" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 mb-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-purple-400 font-medium mb-2", children: "Input Content" }),
              /* @__PURE__ */ jsx("div", { className: "bg-slate-900 rounded p-3 text-sm text-gray-300", children: '"Client presents with persistent worry, restlessness, and difficulty concentrating for the past 6 months. Symptoms interfere with work performance and social relationships..."' })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-green-400 font-medium mb-2", children: "AI Analysis" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Clinical terminology accurate" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Ethical guidelines followed" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "No PII detected" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-yellow-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Consider adding duration specificity" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "balance", className: "mt-6", children: /* @__PURE__ */ jsxs(Card, { className: "bg-slate-800 border-slate-700", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-green-400 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5" }),
          "Category Balance Optimization"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Category Distribution" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: categoryBalance.map((category) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: category.name }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-gray-400 text-sm", children: [
                    "Target: ",
                    category.target,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
                    category.percentage,
                    "%"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-600 rounded-full h-3", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `${category.color} h-3 rounded-full transition-all duration-500`,
                  style: { width: `${category.percentage}%` }
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: Math.abs(category.percentage - category.target) === 0 ? "Perfect" : Math.abs(
                  category.percentage - category.target
                ) <= 2 ? "Excellent" : "Good" }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
                  category.percentage >= category.target ? "+" : "",
                  category.percentage - category.target,
                  "%"
                ] })
              ] })
            ] }, `category-${category.name}`)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Balance Metrics" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-6 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-green-400 mb-2", children: "94%" }),
                /* @__PURE__ */ jsx("div", { className: "text-lg font-medium text-white mb-1", children: "Overall Balance Score" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Excellent distribution" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "1,247" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Total Items" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "5" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Categories" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h5", { className: "text-white font-medium mb-2", children: "Recommendations" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { children: "✓ Distribution meets training requirements" }),
                  /* @__PURE__ */ jsx("div", { children: "✓ All categories have sufficient samples" }),
                  /* @__PURE__ */ jsx("div", { children: "✓ Ready for model training" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "export", className: "mt-6", children: /* @__PURE__ */ jsxs(Card, { className: "bg-slate-800 border-slate-700", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-yellow-400 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Export Training-Ready Results"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-6 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: "📊" }),
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-400 mb-2", children: "Training Dataset" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Balanced, validated dataset ready for ML training" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-4", children: "Format: JSON • Size: ~2.5 MB" }),
              /* @__PURE__ */ jsxs(Button, { className: "w-full bg-purple-600 hover:bg-purple-700 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Download JSON"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-6 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: "📈" }),
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-400 mb-2", children: "Quality Report" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Comprehensive analysis and validation metrics" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-4", children: "Format: PDF • Size: ~1.2 MB" }),
              /* @__PURE__ */ jsxs(Button, { className: "w-full bg-blue-600 hover:bg-blue-700 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Download PDF"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 rounded-lg p-6 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: "⚙️" }),
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-400 mb-2", children: "API Integration" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Direct connection to training platforms" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-4", children: "Hugging Face • MLflow • W&B" }),
              /* @__PURE__ */ jsxs(Button, { className: "w-full bg-green-600 hover:bg-green-700 text-white", children: [
                /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 mr-2" }),
                "Connect API"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-slate-700 rounded-lg p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Export Summary" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4 text-center", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "1,247" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Training Items" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "94%" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Quality Score" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-400", children: "5" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Categories" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-400", children: "Ready" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Status" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};

const prerender = true;
const $$TryDemo = createComponent(($$result, $$props, $$slots) => {
  const demoStats = [
    { value: "4 Steps", label: "Simple Process" },
    { value: "< 5 Min", label: "Quick Setup" },
    { value: "Real-Time", label: "Live Results" },
    { value: "100%", label: "Privacy Safe" }
  ];
  const testimonials = [
    {
      text: "This demo showed me exactly what our students needed. The validation scores were eye-opening.",
      author: "Dr. Sarah M.",
      role: "Clinical Supervisor, Harvard Medical",
      rating: 5
    },
    {
      text: "I ran our entire curriculum through this. Found gaps we never knew existed.",
      author: "Dr. Jennifer L.",
      role: "Program Director, Johns Hopkins",
      rating: 5
    },
    {
      text: "The category balancing feature alone saved us months of manual work.",
      author: "Prof. Michael R.",
      role: "Psychology Department, Mayo Clinic",
      rating: 5
    }
  ];
  const benefits = [
    {
      title: "See Real Validation Scores",
      description: "Watch our AI analyze sample psychology content and provide detailed quality metrics in real-time.",
      icon: "\u{1F4CA}",
      accent: "green"
    },
    {
      title: "Test Category Balancing",
      description: "Upload your own content or use our samples to see how we ensure balanced representation across psychology domains.",
      icon: "\u2696\uFE0F",
      accent: "emerald"
    },
    {
      title: "Experience the Full Pipeline",
      description: "From upload to export - see exactly how your training data gets processed and validated.",
      icon: "\u{1F504}",
      accent: "green"
    },
    {
      title: "No Risk, No Commitment",
      description: "This is a completely safe demo environment. Your data stays private and nothing gets stored.",
      icon: "\u{1F6E1}\uFE0F",
      accent: "emerald"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Try Demo - Pixelated Empathy", "description": "Experience our AI-powered psychology training data pipeline. Upload content, see validation scores, and test category balancing in real-time.", "bgType": "plum", "data-astro-cid-li35yy42": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-li35yy42> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-li35yy42> <div class="particle particle-1" data-astro-cid-li35yy42></div> <div class="particle particle-2" data-astro-cid-li35yy42></div> <div class="particle particle-3" data-astro-cid-li35yy42></div> <div class="particle particle-4" data-astro-cid-li35yy42></div> <div class="particle particle-5" data-astro-cid-li35yy42></div> </div> <!-- Hero Section --> <section class="relative py-6 lg:py-8 z-10 hero-section" data-astro-cid-li35yy42> <div class="relative container mx-auto px-4 max-w-6xl" data-astro-cid-li35yy42> <div class="w-full max-w-none" data-astro-cid-li35yy42> <!-- Status Badge --> <div class="mb-8 animate-breathe text-center" data-astro-cid-li35yy42> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-purple-500/20 border border-purple-400/40 text-purple-200 rounded-full", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-li35yy42> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" data-astro-cid-li35yy42></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500" data-astro-cid-li35yy42></span> </span>
Interactive Demo Environment
` })} </div> <!-- Power Headlines --> <div class="text-center mb-16" data-astro-cid-li35yy42> <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide mb-4 leading-tight max-w-6xl mx-auto" data-astro-cid-li35yy42>
See How It Works
<br data-astro-cid-li35yy42> <span class="text-purple-400 golden-shimmer" data-astro-cid-li35yy42>Try It Yourself</span> </h1> <p class="text-base lg:text-lg text-purple-200/90 font-medium mb-6 max-w-4xl mx-auto" data-astro-cid-li35yy42>
Experience our complete AI-powered training data pipeline. Upload
              psychology content, see real validation scores, and test category
              balancing.
</p> <div class="flex items-center justify-center gap-4 text-purple-300/80 text-xs" data-astro-cid-li35yy42> <span data-astro-cid-li35yy42>🔒</span> <span data-astro-cid-li35yy42>Completely safe demo environment</span> <span class="hidden sm:inline" data-astro-cid-li35yy42>•</span> <span class="hidden sm:inline" data-astro-cid-li35yy42>No data stored or shared</span> </div> </div> <!-- Demo Stats --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16" data-astro-cid-li35yy42> ${demoStats.map((stat) => renderTemplate`<div class="text-center p-6 rounded-2xl border border-purple-600/30 hover:border-purple-400/50 transition-all duration-500 stat-card" data-astro-cid-li35yy42> <div class="text-2xl lg:text-3xl font-bold text-purple-400 mb-2 organic-counter" data-astro-cid-li35yy42> ${stat.value} </div> <div class="text-xs lg:text-sm text-purple-200/80 tracking-wide" data-astro-cid-li35yy42> ${stat.label} </div> </div>`)} </div> </div> </div> </section> <!-- Interactive Demo Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-li35yy42> <div class="container mx-auto px-4 relative" data-astro-cid-li35yy42> <div class="max-w-7xl mx-auto" data-astro-cid-li35yy42> <!-- Demo Introduction --> <div class="text-center mb-12" data-astro-cid-li35yy42> <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6" data-astro-cid-li35yy42>
Interactive Demo
</h2> <p class="text-base text-purple-100/90 max-w-3xl mx-auto" data-astro-cid-li35yy42>
Follow the 4-step process below. Use our sample data or upload
              your own psychology content to see how our AI validates and
              processes training materials.
</p> </div> <!-- React Demo Component --> <div class="bg-slate-900/50 border border-purple-500/30 rounded-3xl p-8 lg:p-12" data-astro-cid-li35yy42> ${renderComponent($$result2, "ClientFacingDemo", ClientFacingDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/demo/ClientFacingDemo.tsx", "client:component-export": "default", "data-astro-cid-li35yy42": true })} </div> </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-li35yy42> <div class="mx-auto max-w-2xl border-t border-purple-500/30" data-astro-cid-li35yy42></div> </div> <!-- Benefits Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-li35yy42> <div class="container mx-auto px-4 relative" data-astro-cid-li35yy42> <div class="max-w-6xl mx-auto" data-astro-cid-li35yy42> <div class="text-center mb-12" data-astro-cid-li35yy42> <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6" data-astro-cid-li35yy42>
What You'll Experience
</h2> <p class="text-base text-purple-100/90" data-astro-cid-li35yy42>
This demo gives you hands-on experience with our complete training
              data pipeline
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-li35yy42> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-purple-600/30 hover:border-purple-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4 relative", "data-astro-cid-li35yy42": true }, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700" data-astro-cid-li35yy42> ${benefit.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-lg font-bold text-purple-100 tracking-wide mb-3", "data-astro-cid-li35yy42": true }, { "default": ($$result5) => renderTemplate`${benefit.title}` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-li35yy42": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-sm text-purple-200/80 leading-relaxed", "data-astro-cid-li35yy42": true }, { "default": ($$result5) => renderTemplate`${benefit.description}` })} ` })} ` })}`)} </div> </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-li35yy42> <div class="mx-auto max-w-2xl border-t border-purple-500/30" data-astro-cid-li35yy42></div> </div> <!-- Social Proof Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-li35yy42> <div class="container mx-auto px-4 relative" data-astro-cid-li35yy42> <div class="max-w-6xl mx-auto" data-astro-cid-li35yy42> <div class="text-center mb-12" data-astro-cid-li35yy42> <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6" data-astro-cid-li35yy42>
What Program Directors Say
</h2> <p class="text-base text-purple-100/90" data-astro-cid-li35yy42>
Universities using our demo to evaluate their training programs
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-li35yy42> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "bg-slate-800/50 border border-purple-600/30 hover:border-purple-400/50 transition-all duration-300", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "p-6", "data-astro-cid-li35yy42": true }, { "default": ($$result4) => renderTemplate` <div class="flex gap-1 mb-4" data-astro-cid-li35yy42> ${Array.from({ length: testimonial.rating }).map((_) => renderTemplate`<span class="text-purple-400" data-astro-cid-li35yy42>⭐</span>`)} </div> <p class="text-sm text-purple-100 mb-4 italic" data-astro-cid-li35yy42>
"${testimonial.text}"
</p> <div class="text-purple-300" data-astro-cid-li35yy42> <div class="font-semibold text-sm" data-astro-cid-li35yy42> ${testimonial.author} </div> <div class="text-xs text-purple-300/70" data-astro-cid-li35yy42> ${testimonial.role} </div> </div> ` })} ` })}`)} </div> </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-li35yy42> <div class="mx-auto max-w-2xl border-t border-purple-500/30" data-astro-cid-li35yy42></div> </div> <!-- CTA Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-li35yy42> <div class="relative container mx-auto px-4 text-center" data-astro-cid-li35yy42> <div class="max-w-5xl mx-auto" data-astro-cid-li35yy42> <div class="rounded-3xl border border-purple-500/40 p-12 lg:p-16 bg-slate-900/30" data-astro-cid-li35yy42> <!-- Demo completion badge --> <div class="mb-6" data-astro-cid-li35yy42> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate` <span class="text-green-400" data-astro-cid-li35yy42>✓</span>
Demo Complete - Ready for the Real Thing?
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-purple-100 mb-8" data-astro-cid-li35yy42>
Ready to Transform
<br data-astro-cid-li35yy42> <span class="text-purple-400 golden-shimmer" data-astro-cid-li35yy42>Your Training Program?</span> </h2> <p class="text-base lg:text-lg text-purple-200/90 mb-8 leading-relaxed" data-astro-cid-li35yy42>
You've seen how it works. Now let's discuss how we can customize
              this for your specific program needs.
</p> <!-- Program-focused CTA --> <div class="bg-purple-500/10 border border-purple-400/30 rounded-2xl p-6 mb-8" data-astro-cid-li35yy42> <h4 class="text-sm font-bold text-purple-200 mb-2" data-astro-cid-li35yy42>
🎓 For Program Directors
</h4> <p class="text-sm text-purple-200/80" data-astro-cid-li35yy42>
Schedule a personalized demo with your actual curriculum
                content. See exactly how we can improve your training outcomes.
</p> </div> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-li35yy42> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300 w-auto", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate`
Schedule Program Demo →
` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300 w-auto", "data-astro-cid-li35yy42": true }, { "default": ($$result3) => renderTemplate`
Join Beta Program
` })} </div> <!-- Final trust signals --> <p class="text-xs text-purple-300/70" data-astro-cid-li35yy42>
🏛️ Trusted by 50+ universities • 🔒 HIPAA++ compliant • 🎯 Made by
              therapists, for therapists
</p> </div> </div> </div> </section> </div> ` })} `;
}, "/root/pixel/src/pages/try-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/try-demo.astro";
const $$url = "/try-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TryDemo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
