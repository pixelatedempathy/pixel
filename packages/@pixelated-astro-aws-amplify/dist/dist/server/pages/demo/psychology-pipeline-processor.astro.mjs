;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9b625368-5bdb-4865-8493-eef0d9b3f852",e._sentryDebugIdIdentifier="sentry-dbid-9b625368-5bdb-4865-8493-eef0d9b3f852")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$Card } from '../../chunks/Card_DkLu_rH_.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_B-WlwD0P.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_Ds6nOAL0.mjs';
import { $ as $$Badge } from '../../chunks/Badge_2usZ2CMb.mjs';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
/* empty css                                                            */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$PsychologyPipelineProcessor = createComponent(($$result, $$props, $$slots) => {
  const variants = {
    A: {
      headline: "Process 10,000 Hours of Content in 3 Minutes",
      subheadline: "Industrial-scale psychology content processing for comprehensive training programs",
      cta: "Start Processing Content"
    },
    B: {
      headline: "Every Psychology Textbook, Every Case Study, Instantly Searchable",
      subheadline: "AI processes vast psychology literature into personalized training scenarios",
      cta: "Access Content Pipeline"
    },
    C: {
      headline: "The Content Processing That Universities Dream About",
      subheadline: "Transform decades of psychology research into interactive training experiences",
      cta: "Begin Content Transformation"
    }
  };
  const variantKey = ["A", "B", "C"][Math.floor(Math.random() * 3)];
  const currentVariant = variants[variantKey];
  const processingSpecs = [
    {
      metric: "Content Processing Speed",
      value: "3 minutes",
      comparison: "for 10,000+ hours of content"
    },
    {
      metric: "Research Papers Analyzed",
      value: "50,000+",
      comparison: "across all psychology domains"
    },
    {
      metric: "Case Studies Processed",
      value: "25,000+",
      comparison: "from leading institutions"
    },
    {
      metric: "Training Scenarios Generated",
      value: "Unlimited",
      comparison: "from processed content"
    }
  ];
  const contentTypes = [
    {
      title: "Clinical Research Papers",
      description: "Process thousands of peer-reviewed studies into practical training scenarios",
      icon: "\u{1F4DA}",
      accent: "orange",
      examples: "Treatment efficacy studies, diagnostic criteria research, intervention outcomes"
    },
    {
      title: "Case Study Libraries",
      description: "Transform published case studies into interactive training experiences",
      icon: "\u{1F4CB}",
      accent: "orange",
      examples: "Complex cases, treatment progressions, therapeutic breakthroughs"
    },
    {
      title: "Therapeutic Technique Manuals",
      description: "Convert therapy manuals into step-by-step training modules",
      icon: "\u{1F6E0}\uFE0F",
      accent: "orange",
      examples: "CBT protocols, DBT skills, trauma-informed approaches"
    },
    {
      title: "Cultural Competency Resources",
      description: "Process diverse cultural psychology resources for inclusive training",
      icon: "\u{1F30D}",
      accent: "orange",
      examples: "Cross-cultural therapy, minority mental health, indigenous healing"
    }
  ];
  const processingDemo = {
    input: "Upload: 'Trauma-Informed Therapy: A Comprehensive Guide' (847 pages)",
    processing: [
      "Extracting key therapeutic concepts...",
      "Identifying intervention techniques...",
      "Mapping trauma presentations...",
      "Creating practice scenarios...",
      "Generating assessment tools..."
    ],
    output: {
      scenarios: 47,
      techniques: 23,
      assessments: 12,
      culturalAdaptations: 8
    }
  };
  const universityResults = [
    {
      university: "Yale School of Medicine",
      result: "Students access 50x more case studies",
      detail: "Training program now incorporates rare cases from decades of published literature"
    },
    {
      university: "University of Michigan",
      result: "100% curriculum coverage in half the time",
      detail: "AI processing allows comprehensive coverage of all psychology domains efficiently"
    },
    {
      university: "Northwestern University",
      result: "Real-time content updates",
      detail: "New research automatically integrated into training scenarios within hours of publication"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Psychology Pipeline Processor - Process 10,000 Hours of Content in 3 Minutes", "description": "Industrial-scale psychology content processing for comprehensive training programs. Transform research into interactive training.", "bgType": "plum", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-2vzo6rwi> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-2vzo6rwi> <div class="particle particle-1" data-astro-cid-2vzo6rwi></div> <div class="particle particle-2" data-astro-cid-2vzo6rwi></div> <div class="particle particle-3" data-astro-cid-2vzo6rwi></div> <div class="particle particle-4" data-astro-cid-2vzo6rwi></div> <div class="particle particle-5" data-astro-cid-2vzo6rwi></div> </div> <div class="relative z-10 py-8" data-astro-cid-2vzo6rwi> <div class="container mx-auto px-4" data-astro-cid-2vzo6rwi> <!-- Header --> <div class="text-center mb-12" data-astro-cid-2vzo6rwi> <div class="mb-8 animate-breathe" data-astro-cid-2vzo6rwi> ${renderComponent($$result2, "Badge", $$Badge, { "className": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-orange-500/20 border border-orange-400/40 text-orange-200 rounded-full", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-2vzo6rwi> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" data-astro-cid-2vzo6rwi></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500" data-astro-cid-2vzo6rwi></span> </span>
Content Processing Active
` })} </div> <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-astro-cid-2vzo6rwi> ${currentVariant.headline} <span class="text-orange-400 golden-shimmer block mt-2" data-astro-cid-2vzo6rwi>Psychology Pipeline Processor</span> </h1> <p class="text-lg text-green-200/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-2vzo6rwi> ${currentVariant.subheadline} </p> </div> <!-- Processing Specifications --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-astro-cid-2vzo6rwi> ${processingSpecs.map((spec) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-orange-600/30 bg-orange-900/20 hover:border-orange-400/60 transition-all duration-700 organic-card", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-orange-300 text-sm", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${spec.metric}` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div className="text-2xl font-bold text-orange-400 mb-1" data-astro-cid-2vzo6rwi> ${spec.value} </div> <div className="text-xs text-orange-200/70" data-astro-cid-2vzo6rwi> ${spec.comparison} </div> ` })} ` })}`)} </div> <!-- Live Processing Demo --> <div class="mb-16" data-astro-cid-2vzo6rwi> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-orange-600/30 bg-slate-900/50 overflow-hidden", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="flex justify-between items-start" data-astro-cid-2vzo6rwi> <div data-astro-cid-2vzo6rwi> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-orange-100 text-xl mb-2", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`Live Content Processing Demo` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-orange-200/80", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`
Watch AI transform a psychology textbook into interactive
                    training content
` })} </div> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-orange-500/20 text-orange-300", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-orange-400 rounded-full mr-2" data-astro-cid-2vzo6rwi></span>
Processing...
` })} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="bg-slate-800/50 rounded-lg p-6 mb-6" data-astro-cid-2vzo6rwi> <div class="mb-4" data-astro-cid-2vzo6rwi> <div class="text-orange-300 font-medium mb-2" data-astro-cid-2vzo6rwi>
Input Content:
</div> <div class="bg-slate-700/50 rounded p-3 text-green-100 text-sm" data-astro-cid-2vzo6rwi> ${processingDemo.input} </div> </div> <div class="mb-4" data-astro-cid-2vzo6rwi> <div class="text-orange-300 font-medium mb-2" data-astro-cid-2vzo6rwi>
Processing Steps:
</div> <div class="bg-slate-700/50 rounded p-4 space-y-2" data-astro-cid-2vzo6rwi> ${processingDemo.processing.map((step, index) => renderTemplate`<div class="flex items-center gap-3 text-sm" data-astro-cid-2vzo6rwi> <div class="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center" data-astro-cid-2vzo6rwi> <span class="text-orange-400 text-xs" data-astro-cid-2vzo6rwi> ${index + 1} </span> </div> <div class="text-green-100/90" data-astro-cid-2vzo6rwi>${step}</div> <div class="ml-auto" data-astro-cid-2vzo6rwi> <div class="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" data-astro-cid-2vzo6rwi></div> </div> </div>`)} </div> </div> <div class="mb-4" data-astro-cid-2vzo6rwi> <div class="text-orange-300 font-medium mb-2" data-astro-cid-2vzo6rwi>
Generated Training Content:
</div> <div class="bg-slate-700/50 rounded p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" data-astro-cid-2vzo6rwi> <div class="text-center" data-astro-cid-2vzo6rwi> <div class="text-2xl font-bold text-orange-400" data-astro-cid-2vzo6rwi> ${processingDemo.output.scenarios} </div> <div class="text-orange-200/70" data-astro-cid-2vzo6rwi>Training Scenarios</div> </div> <div class="text-center" data-astro-cid-2vzo6rwi> <div class="text-2xl font-bold text-orange-400" data-astro-cid-2vzo6rwi> ${processingDemo.output.techniques} </div> <div class="text-orange-200/70" data-astro-cid-2vzo6rwi>Techniques</div> </div> <div class="text-center" data-astro-cid-2vzo6rwi> <div class="text-2xl font-bold text-orange-400" data-astro-cid-2vzo6rwi> ${processingDemo.output.assessments} </div> <div class="text-orange-200/70" data-astro-cid-2vzo6rwi>Assessments</div> </div> <div class="text-center" data-astro-cid-2vzo6rwi> <div class="text-2xl font-bold text-orange-400" data-astro-cid-2vzo6rwi> ${processingDemo.output.culturalAdaptations} </div> <div class="text-orange-200/70" data-astro-cid-2vzo6rwi>Cultural Adaptations</div> </div> </div> </div> <div class="flex gap-3" data-astro-cid-2vzo6rwi> ${renderComponent($$result4, "Button", Button, { "size": "sm", "className": "bg-orange-600 hover:bg-orange-700 text-white", "data-demo-action": "process-content", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`
Process New Content
` })} ${renderComponent($$result4, "Button", Button, { "size": "sm", "variant": "outline", "className": "border-orange-500/50 text-orange-300 hover:bg-orange-500/10", "data-demo-action": "view-output", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`
View Generated Content
` })} </div> </div> <div class="text-xs text-orange-200/60" data-astro-cid-2vzo6rwi>
⚡ Processes any psychology content format • 🔒 Maintains
                academic integrity and citations
</div> ` })} ` })} </div> <!-- Content Types Section --> <div class="mb-16" data-astro-cid-2vzo6rwi> <div class="text-center mb-12" data-astro-cid-2vzo6rwi> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-2vzo6rwi>
Transform Any Psychology Content Into
<span class="text-orange-400 golden-shimmer" data-astro-cid-2vzo6rwi>Interactive Training</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-2vzo6rwi>
Our AI processes research papers, case studies, textbooks, and
              manuals into engaging training experiences
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-2vzo6rwi> ${contentTypes.map((type) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-orange-600/30 hover:border-orange-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4 relative", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-orange-400" data-astro-cid-2vzo6rwi> ${type.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-orange-100 tracking-wide mb-3", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${type.title}` })} <div class="text-sm text-orange-400/90 font-medium bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3" data-astro-cid-2vzo6rwi>
Automatically processed and structured
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-orange-200/80 leading-relaxed mb-3", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${type.description}` })} <div class="text-xs text-orange-300/70" data-astro-cid-2vzo6rwi> <span class="font-medium" data-astro-cid-2vzo6rwi>Examples:</span> ${type.examples} </div> ` })} ` })}`)} </div> </div> <!-- University Results --> <div class="mb-16" data-astro-cid-2vzo6rwi> <div class="text-center mb-12" data-astro-cid-2vzo6rwi> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-2vzo6rwi>
Universities Report
<span class="text-green-400 golden-shimmer" data-astro-cid-2vzo6rwi>Unprecedented Content Access</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-2vzo6rwi>
Training programs using Pipeline Processor give students access to
              decades of psychology research in interactive format
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-2vzo6rwi> ${universityResults.map((result) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 hover:border-green-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700 text-green-400" data-astro-cid-2vzo6rwi>
🏛️
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-green-100 tracking-wide mb-3", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${result.university}` })} <div class="text-lg text-green-400 font-bold mb-2" data-astro-cid-2vzo6rwi> ${result.result} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-green-200/80 leading-relaxed", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${result.detail}` })} ` })} ` })}`)} </div> </div> <!-- Academic Integrity Section --> <div class="mb-16" data-astro-cid-2vzo6rwi> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-purple-600/30 bg-purple-900/20 rounded-3xl overflow-hidden", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12 text-center", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl mb-6 text-purple-400" data-astro-cid-2vzo6rwi>📖</div> <h3 class="text-lg lg:text-xl font-bold text-purple-100 mb-4" data-astro-cid-2vzo6rwi>
Academic Integrity Guaranteed
</h3> <p class="text-base text-purple-200/90 mb-6 leading-relaxed max-w-3xl mx-auto" data-astro-cid-2vzo6rwi>
Our processing maintains full academic integrity with proper
                citations, attribution, and respect for intellectual property.
                All processed content includes original source references and
                follows fair use guidelines.
</p> <div class="flex items-center justify-center gap-6 text-purple-300/80 text-sm" data-astro-cid-2vzo6rwi> <span class="flex items-center gap-2" data-astro-cid-2vzo6rwi> <span class="text-purple-400" data-astro-cid-2vzo6rwi>✓</span>
Full Citation Tracking
</span> <span class="hidden sm:inline" data-astro-cid-2vzo6rwi>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-2vzo6rwi> <span class="text-purple-400" data-astro-cid-2vzo6rwi>✓</span>
Fair Use Compliance
</span> <span class="hidden sm:inline" data-astro-cid-2vzo6rwi>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-2vzo6rwi> <span class="text-purple-400" data-astro-cid-2vzo6rwi>✓</span>
Source Attribution
</span> </div> ` })} ` })} </div> <!-- Final CTA --> <div class="text-center" data-astro-cid-2vzo6rwi> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-orange-500/40 bg-slate-900/50 rounded-3xl overflow-hidden", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl text-orange-400 mb-6" data-astro-cid-2vzo6rwi>🎯</div> <div class="mb-6" data-astro-cid-2vzo6rwi> ${renderComponent($$result4, "Badge", $$Badge, { "className": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-orange-500/20 border border-orange-400/40 text-orange-200 rounded-full", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-orange-400 rounded-full" data-astro-cid-2vzo6rwi></span>
Process Unlimited Content
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-orange-100 mb-8" data-astro-cid-2vzo6rwi>
Ready to Transform Your
<br data-astro-cid-2vzo6rwi> <span class="text-orange-400 golden-shimmer" data-astro-cid-2vzo6rwi>Entire Psychology Library?</span> </h2> <p class="text-base lg:text-lg text-green-200/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-astro-cid-2vzo6rwi>
Stop limiting your students to a few textbooks. Give them access
                to the entire field of psychology in interactive, engaging
                training formats.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-2vzo6rwi> ${renderComponent($$result4, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300", "data-demo-cta": "primary", "data-variant": variantKey, "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`${currentVariant.cta}` })} ${renderComponent($$result4, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-2 border-orange-400 text-orange-300 hover:bg-orange-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300", "data-demo-cta": "secondary", "data-astro-cid-2vzo6rwi": true }, { "default": ($$result5) => renderTemplate`
See Processing Examples
` })} </div> <p class="text-xs text-orange-300/70" data-astro-cid-2vzo6rwi>
🎓 Process any psychology content • 🔒 Academic integrity
                maintained • 💛 Trusted by universities
</p> ` })} ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/demo/psychology-pipeline-processor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/demo/psychology-pipeline-processor.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/psychology-pipeline-processor.astro";
const $$url = "/demo/psychology-pipeline-processor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PsychologyPipelineProcessor,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
