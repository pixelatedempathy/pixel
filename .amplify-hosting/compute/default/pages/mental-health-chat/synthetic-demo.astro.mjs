;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e91e2f31-a9e3-437d-a0c6-2c0cb0fca4b1",e._sentryDebugIdIdentifier="sentry-dbid-e91e2f31-a9e3-437d-a0c6-2c0cb0fca4b1")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { B as Button } from '../../chunks/button_BvU_XMCD.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../../chunks/card_Cqp1GJuj.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from '../../chunks/tabs_vss1a8ip.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from '../../chunks/select_DWgSZvR0.mjs';
import { S as Slider } from '../../chunks/slider_ByMT6kCq.mjs';
import { S as Switch } from '../../chunks/switch_BLLO_lPx.mjs';
import { L as Label } from '../../chunks/label_38MppD6c.mjs';
import { B as Badge } from '../../chunks/badge_DYhJImS2.mjs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { c as cn } from '../../chunks/utils_CaJ1_uI4.mjs';
import { InfoIcon, RefreshCwIcon, BrainIcon, DownloadIcon, MessageSquareIcon } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

var DisorderCategory = /* @__PURE__ */ ((DisorderCategory2) => {
  DisorderCategory2["Anxiety"] = "anxiety";
  DisorderCategory2["Depression"] = "depression";
  DisorderCategory2["PTSD"] = "ptsd";
  DisorderCategory2["ADHD"] = "adhd";
  DisorderCategory2["OCD"] = "ocd";
  DisorderCategory2["BipolarDisorder"] = "bipolar_disorder";
  DisorderCategory2["EatingDisorder"] = "eating_disorder";
  DisorderCategory2["SocialAnxiety"] = "social_anxiety";
  DisorderCategory2["PanicDisorder"] = "panic_disorder";
  DisorderCategory2["Trauma"] = "trauma";
  return DisorderCategory2;
})(DisorderCategory || {});

function SyntheticTherapyDemo() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState(
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const [config, setConfig] = useState({
    numSessions: 1,
    maxTurns: 3,
    disorders: [DisorderCategory.Anxiety, DisorderCategory.Depression],
    usePythonBridge: false,
    model: "gpt-3.5-turbo"
  });
  const handleGenerateConversations = async () => {
    setLoading(true);
    try {
      const mockConversations = [
        {
          patientText: "I've been struggling with excessive worry for about 6 months now. I have difficulty sleeping and I'm constantly catastrophizing. I'm also experiencing restlessness and fatigue. Fidgeting has been particularly difficult to deal with. I'm not sure what to do anymore. I've tried to manage on my own, but it's getting harder. Can you help me understand what's happening and what I might do about it?",
          therapistText: "I hear that you've been dealing with excessive worry for quite some time, and it's been affecting your sleep and causing physical symptoms like restlessness and fatigue. That sounds really challenging. When you mention catastrophizing, could you share an example of the kinds of thoughts you have when you're worried?",
          encodedSymptoms: [
            {
              name: "excessive worry",
              severity: 0.7,
              duration: "6 months",
              manifestations: [
                "difficulty sleeping",
                "restlessness",
                "physical tension",
                "avoidance of anxiety-provoking situations"
              ],
              cognitions: [
                "catastrophizing",
                "overestimation of threat",
                "intolerance of uncertainty"
              ]
            },
            {
              name: "restlessness",
              severity: 0.6,
              duration: "3 months",
              manifestations: ["fidgeting", "unable to sit still", "pacing"],
              cognitions: ["feeling on edge", "anticipating danger"]
            },
            {
              name: "fatigue",
              severity: 0.5,
              duration: "2 months",
              manifestations: [
                "decreased energy",
                "difficulty completing tasks",
                "requiring more rest than usual"
              ],
              cognitions: ["feeling overwhelmed", "diminished self-efficacy"]
            }
          ],
          decodedSymptoms: ["anxiety", "insomnia", "fatigue"],
          sessionSummary: "Session Summary:\n\nPatient presented with excessive worry, restlessness, fatigue.\nTherapist identified: anxiety, insomnia, fatigue.\n\nSymptom detection accuracy: 67%\n\nThe conversation covered the patient's experiences with excessive worry, fatigue.\nThe therapist may have missed: restlessness.\n\nThis simulated interaction demonstrates the importance of thorough assessment and active listening in the therapeutic relationship.",
          accuracyScore: 0.67
        }
      ];
      setConversations(mockConversations);
      setSelectedConversationIndex(0);
    } catch (error) {
      console.error("Failed to generate conversations:", error);
    } finally {
      setLoading(false);
    }
  };
  const selectedConversation = conversations[selectedConversationIndex] || null;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full max-w-6xl mx-auto gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Synthetic Therapy Conversation Generator" }),
      /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(InfoIcon, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsx(TooltipContent, { className: "max-w-sm", children: /* @__PURE__ */ jsx("p", { children: "This demo uses the MentalArena framework to generate synthetic therapy conversations between patients and therapists. The system encodes symptoms into a patient profile and then measures how accurately a therapist model identifies those symptoms." }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Configuration" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Adjust settings for conversation generation" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "numSessions", children: "Number of Sessions" }),
            /* @__PURE__ */ jsx(
              Slider,
              {
                id: "numSessions",
                min: 1,
                max: 5,
                step: 1,
                value: [config.numSessions],
                onValueChange: (value) => setConfig({ ...config, numSessions: value[0] ?? 1 })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-right text-sm text-muted-foreground", children: config.numSessions })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "maxTurns", children: "Max Turns per Conversation" }),
            /* @__PURE__ */ jsx(
              Slider,
              {
                id: "maxTurns",
                min: 1,
                max: 10,
                step: 1,
                value: [config.maxTurns],
                onValueChange: (value) => setConfig({ ...config, maxTurns: value[0] ?? 3 })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-right text-sm text-muted-foreground", children: config.maxTurns })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "model", children: "Model" }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: config.model,
                onValueChange: (value) => setConfig({ ...config, model: value }),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "gpt-3.5-turbo", children: "GPT-3.5 Turbo" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "gpt-4", children: "GPT-4" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "llama-3-8b", children: "Llama 3 (8B)" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "meta-llama/Meta-Llama-3-8B", children: "Meta-Llama-3-8B" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Disorders" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: Object.values(DisorderCategory).slice(0, 5).map((disorder) => /* @__PURE__ */ jsx(
              Badge,
              {
                variant: config.disorders.includes(disorder) ? "default" : "outline",
                className: "cursor-pointer",
                onClick: () => {
                  const disorders = config.disorders.includes(
                    disorder
                  ) ? config.disorders.filter((d) => d !== disorder) : [...config.disorders, disorder];
                  setConfig({ ...config, disorders });
                },
                children: disorder
              },
              disorder
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Switch,
              {
                id: "pythonBridge",
                checked: config.usePythonBridge,
                onCheckedChange: (checked) => setConfig({ ...config, usePythonBridge: checked })
              }
            ),
            /* @__PURE__ */ jsx(Label, { htmlFor: "pythonBridge", children: "Use Python Bridge" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(
          Button,
          {
            className: "w-full",
            onClick: handleGenerateConversations,
            disabled: loading,
            children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(RefreshCwIcon, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Generating..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(BrainIcon, { className: "mr-2 h-4 w-4" }),
              "Generate Conversations"
            ] })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-3 space-y-6", children: conversations.length > 0 && selectedConversation ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "conversation", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "w-full justify-start", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "conversation", children: "Conversation" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "symptoms", children: "Symptoms" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "summary", children: "Summary" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "conversation", className: "space-y-4 mt-4", children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Synthetic Therapy Conversation" }),
            /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
              "Session ",
              selectedConversationIndex + 1,
              "/",
              conversations.length
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-secondary/50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white", children: "P" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Patient" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1", children: selectedConversation.patientText })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-muted p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white", children: "T" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Therapist" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1", children: selectedConversation.therapistText })
              ] })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "symptoms", className: "space-y-4 mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Encoded Symptoms (Patient)" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Symptoms encoded into the patient profile" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: selectedConversation.encodedSymptoms.map(
              (symptom) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "rounded-lg border p-4 space-y-2",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-medium", children: symptom.name }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", children: symptom.duration })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
                        "Severity:",
                        " ",
                        (symptom.severity * 100).toFixed(0),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "w-full bg-secondary rounded-full h-2", children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "bg-primary h-2 rounded-full",
                          style: {
                            width: `${symptom.severity * 100}%`
                          }
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Manifestations:" }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: symptom.manifestations.map(
                        (manifestation) => /* @__PURE__ */ jsx(
                          Badge,
                          {
                            variant: "secondary",
                            children: manifestation
                          },
                          `${symptom.name}-${manifestation}`
                        )
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Cognitions:" }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: symptom.cognitions.map((cognition) => /* @__PURE__ */ jsx(
                        Badge,
                        {
                          variant: "outline",
                          children: cognition
                        },
                        `${symptom.name}-${cognition}`
                      )) })
                    ] })
                  ]
                },
                `${symptom.name}-${symptom.duration}`
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Decoded Symptoms (Therapist)" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Symptoms identified by the therapist model" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-4 space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Identified Symptoms" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: selectedConversation.decodedSymptoms.map(
                  (symptom) => {
                    const isCorrect = selectedConversation.encodedSymptoms.some(
                      (s) => s.name.includes(symptom) || symptom.includes(s.name)
                    );
                    return /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: isCorrect ? "default" : "outline",
                        children: symptom
                      },
                      symptom
                    );
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-4 space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Correctly Identified" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: selectedConversation.encodedSymptoms.filter(
                  (encoded) => selectedConversation.decodedSymptoms.some(
                    (decoded) => decoded.includes(encoded.name) || encoded.name.includes(decoded)
                  )
                ).map((symptom) => /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: "default",
                    children: symptom.name
                  },
                  `correctly-identified-${symptom.name}`
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-4 space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Missed by Therapist" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: selectedConversation.encodedSymptoms.filter(
                  (encoded) => !selectedConversation.decodedSymptoms.some(
                    (decoded) => decoded.includes(encoded.name) || encoded.name.includes(decoded)
                  )
                ).map((symptom) => /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: "outline",
                    children: symptom.name
                  },
                  `missed-${symptom.name}`
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-4 space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Incorrectly Identified" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: selectedConversation.decodedSymptoms.filter(
                  (decoded) => !selectedConversation.encodedSymptoms.some(
                    (encoded) => encoded.name.includes(decoded) || decoded.includes(encoded.name)
                  )
                ).map((symptom) => /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: "secondary",
                    children: symptom
                  },
                  `incorrect-${symptom}`
                )) })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "summary", className: "space-y-4 mt-4", children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Session Summary & Analysis" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "AI-generated summary and accuracy score" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-muted p-4 whitespace-pre-wrap font-mono text-sm", children: selectedConversation.sessionSummary }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(
              Badge,
              {
                variant: selectedConversation.accuracyScore && selectedConversation.accuracyScore >= 0.7 ? "default" : "destructive",
                children: [
                  ((selectedConversation.accuracyScore || 0) * 100).toFixed(0),
                  "% Accuracy"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
            /* @__PURE__ */ jsx(DownloadIcon, { className: "mr-2 h-4 w-4" }),
            "Download Report"
          ] }) })
        ] }) })
      ] }) }) : /* @__PURE__ */ jsxs(Card, { className: "flex flex-col items-center justify-center h-96 border-dashed", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "No Conversations Generated" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Click the button to generate synthetic conversations." })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(MessageSquareIcon, { className: "h-16 w-16 text-muted-foreground" }) })
      ] }) })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Synthetic Therapy - Pixelated Empathy Health" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container pb-12 pt-6"> ${renderComponent($$result2, "SyntheticTherapyDemo", SyntheticTherapyDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ai/SyntheticTherapyDemo", "client:component-export": "default" })} </div> ` })}`;
}, "/root/pixel/src/pages/mental-health-chat/synthetic-demo/index.astro", void 0);

const $$file = "/root/pixel/src/pages/mental-health-chat/synthetic-demo/index.astro";
const $$url = "/mental-health-chat/synthetic-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
