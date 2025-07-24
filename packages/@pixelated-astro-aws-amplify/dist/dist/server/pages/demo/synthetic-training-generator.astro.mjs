;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40d0e251-1ab7-497c-a653-5c18e5b8db15",e._sentryDebugIdIdentifier="sentry-dbid-40d0e251-1ab7-497c-a653-5c18e5b8db15")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$Card } from '../../chunks/Card_DkLu_rH_.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_B-WlwD0P.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_Ds6nOAL0.mjs';
import { $ as $$Badge } from '../../chunks/Badge_2usZ2CMb.mjs';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
/* empty css                                                           */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$SyntheticTrainingGenerator = createComponent(($$result, $$props, $$slots) => {
  const variants = {
    A: {
      headline: "Generate 50,000+ AI Patients in 12 Seconds",
      subheadline: "Create unlimited diverse client personas for comprehensive therapy training",
      cta: "Generate AI Patients Now"
    },
    B: {
      headline: "Every Client Type Your Students Will Ever Meet",
      subheadline: "AI generates authentic patient personas with complex histories and presentations",
      cta: "Start Patient Generation"
    },
    C: {
      headline: "The Patient Database That Never Existed Before",
      subheadline: "Breakthrough AI creates realistic clients with trauma, personality disorders, and rare conditions",
      cta: "Access Patient Library"
    }
  };
  const variantKey = ["A", "B", "C"][Math.floor(Math.random() * 3)];
  const currentVariant = variants[variantKey];
  const generationSpecs = [
    {
      metric: "Patient Generation Speed",
      value: "12 seconds",
      comparison: "for 50,000+ unique patients"
    },
    {
      metric: "Personality Variations",
      value: "847 types",
      comparison: "including rare presentations"
    },
    {
      metric: "Cultural Backgrounds",
      value: "200+ cultures",
      comparison: "authentic representation"
    },
    {
      metric: "Trauma Histories",
      value: "Unlimited",
      comparison: "ethically generated scenarios"
    }
  ];
  const patientTypes = [
    {
      title: "Complex Trauma Survivors",
      description: "AI generates patients with authentic PTSD, dissociation, and attachment disorders based on clinical literature",
      icon: "\u{1F494}",
      accent: "cyan",
      examples: "Childhood abuse survivors, combat veterans, trafficking survivors"
    },
    {
      title: "Personality Disorder Presentations",
      description: "Borderline, narcissistic, antisocial patterns with realistic behavioral manifestations",
      icon: "\u{1F3AD}",
      accent: "cyan",
      examples: "Splitting behaviors, manipulation tactics, emotional dysregulation"
    },
    {
      title: "Crisis Presentations",
      description: "Suicidal ideation, psychotic episodes, manic states with appropriate risk factors",
      icon: "\u{1F6A8}",
      accent: "cyan",
      examples: "Active suicidality, command hallucinations, severe depression"
    },
    {
      title: "Rare Clinical Conditions",
      description: "Dissociative identity disorder, selective mutism, conversion disorders",
      icon: "\u{1F9E9}",
      accent: "cyan",
      examples: "Multiple personalities, somatic symptoms, unusual presentations"
    }
  ];
  const generationDemo = {
    prompt: "Generate a 23-year-old client with borderline personality disorder, history of self-harm, and fear of abandonment",
    result: {
      name: "Alex Chen",
      age: 23,
      presentation: "Presents with intense fear of abandonment, history of self-cutting, unstable relationships",
      background: "Adopted at age 8 after neglect, multiple foster placements, recent breakup triggered current crisis",
      symptoms: "Emotional dysregulation, identity disturbance, chronic emptiness, impulsive behaviors",
      strengths: "Artistic talent, strong desire for connection, previous therapy engagement"
    }
  };
  const universityResults = [
    {
      university: "Stanford Medical School",
      result: "Students exposed to 300% more client types",
      detail: "Training program now covers rare presentations that would take years to encounter naturally"
    },
    {
      university: "University of Pennsylvania",
      result: "95% student confidence in diverse populations",
      detail: "Students report feeling prepared for any client background or presentation"
    },
    {
      university: "UCLA Psychology Department",
      result: "Zero cultural competency incidents",
      detail: "First semester with no reported cultural insensitivity in student clinical work"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Synthetic Training Generator - Generate 50,000+ AI Patients in 12 Seconds", "description": "Create unlimited diverse client personas for comprehensive therapy training. AI generates authentic patients with complex histories and presentations.", "bgType": "plum", "data-astro-cid-qsek7fus": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-qsek7fus> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-qsek7fus> <div class="particle particle-1" data-astro-cid-qsek7fus></div> <div class="particle particle-2" data-astro-cid-qsek7fus></div> <div class="particle particle-3" data-astro-cid-qsek7fus></div> <div class="particle particle-4" data-astro-cid-qsek7fus></div> <div class="particle particle-5" data-astro-cid-qsek7fus></div> </div> <div class="relative z-10 py-8" data-astro-cid-qsek7fus> <div class="container mx-auto px-4" data-astro-cid-qsek7fus> <!-- Header --> <div class="text-center mb-12" data-astro-cid-qsek7fus> <div class="mb-8 animate-breathe" data-astro-cid-qsek7fus> ${renderComponent($$result2, "Badge", $$Badge, { "className": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 rounded-full", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-qsek7fus> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" data-astro-cid-qsek7fus></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" data-astro-cid-qsek7fus></span> </span>
AI Generation Active
` })} </div> <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-astro-cid-qsek7fus> ${currentVariant.headline} <span class="text-cyan-400 golden-shimmer block mt-2" data-astro-cid-qsek7fus>Synthetic Training Generator</span> </h1> <p class="text-lg text-green-200/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-qsek7fus> ${currentVariant.subheadline} </p> </div> <!-- Generation Specifications --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-astro-cid-qsek7fus> ${generationSpecs.map((spec) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-cyan-600/30 bg-cyan-900/20 hover:border-cyan-400/60 transition-all duration-700 organic-card", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2", "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-cyan-300 text-sm", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${spec.metric}` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div className="text-2xl font-bold text-cyan-400 mb-1" data-astro-cid-qsek7fus> ${spec.value} </div> <div className="text-xs text-cyan-200/70" data-astro-cid-qsek7fus> ${spec.comparison} </div> ` })} ` })}`)} </div> <!-- Live Generation Demo --> <div class="mb-16" data-astro-cid-qsek7fus> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-cyan-600/30 bg-slate-900/50 overflow-hidden", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="flex justify-between items-start" data-astro-cid-qsek7fus> <div data-astro-cid-qsek7fus> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-cyan-100 text-xl mb-2", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`Live Patient Generation Demo` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-cyan-200/80", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`
Watch AI create a complex patient profile in real-time
` })} </div> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-cyan-500/20 text-cyan-300", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-cyan-400 rounded-full mr-2" data-astro-cid-qsek7fus></span>
Generating...
` })} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="bg-slate-800/50 rounded-lg p-6 mb-6" data-astro-cid-qsek7fus> <div class="mb-4" data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-2" data-astro-cid-qsek7fus>
Generation Prompt:
</div> <div class="bg-slate-700/50 rounded p-3 text-green-100 text-sm" data-astro-cid-qsek7fus> ${generationDemo.prompt} </div> </div> <div class="mb-4" data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-2" data-astro-cid-qsek7fus>
Generated Patient Profile:
</div> <div class="bg-slate-700/50 rounded p-4 space-y-3" data-astro-cid-qsek7fus> <div class="flex items-center gap-3" data-astro-cid-qsek7fus> <div class="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center" data-astro-cid-qsek7fus> <span class="text-cyan-400" data-astro-cid-qsek7fus>👤</span> </div> <div data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium" data-astro-cid-qsek7fus> ${generationDemo.result.name} </div> <div class="text-cyan-200/70 text-sm" data-astro-cid-qsek7fus>
Age ${generationDemo.result.age} </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" data-astro-cid-qsek7fus> <div data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-1" data-astro-cid-qsek7fus>
Presentation:
</div> <div class="text-green-100/90" data-astro-cid-qsek7fus> ${generationDemo.result.presentation} </div> </div> <div data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-1" data-astro-cid-qsek7fus>
Background:
</div> <div class="text-green-100/90" data-astro-cid-qsek7fus> ${generationDemo.result.background} </div> </div> <div data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-1" data-astro-cid-qsek7fus>
Symptoms:
</div> <div class="text-green-100/90" data-astro-cid-qsek7fus> ${generationDemo.result.symptoms} </div> </div> <div data-astro-cid-qsek7fus> <div class="text-cyan-300 font-medium mb-1" data-astro-cid-qsek7fus>
Strengths:
</div> <div class="text-green-100/90" data-astro-cid-qsek7fus> ${generationDemo.result.strengths} </div> </div> </div> </div> </div> <div class="flex gap-3" data-astro-cid-qsek7fus> ${renderComponent($$result4, "Button", Button, { "size": "sm", "className": "bg-cyan-600 hover:bg-cyan-700 text-white", "data-demo-action": "generate-patient", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`
Generate New Patient
` })} ${renderComponent($$result4, "Button", Button, { "size": "sm", "variant": "outline", "className": "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10", "data-demo-action": "customize-generation", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`
Customize Parameters
` })} </div> </div> <div class="text-xs text-cyan-200/60" data-astro-cid-qsek7fus>
⚡ Each patient is unique with authentic clinical presentations
                • 🔒 Ethically generated from clinical literature
</div> ` })} ` })} </div> <!-- Patient Types Section --> <div class="mb-16" data-astro-cid-qsek7fus> <div class="text-center mb-12" data-astro-cid-qsek7fus> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-qsek7fus>
Every Client Type Your Students
<span class="text-cyan-400 golden-shimmer" data-astro-cid-qsek7fus>Will Ever Meet</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-qsek7fus>
AI generates authentic presentations across all diagnostic
              categories and cultural backgrounds
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-qsek7fus> ${patientTypes.map((type) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-cyan-600/30 hover:border-cyan-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4 relative", "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-cyan-400" data-astro-cid-qsek7fus> ${type.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-cyan-100 tracking-wide mb-3", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${type.title}` })} <div class="text-sm text-cyan-400/90 font-medium bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3" data-astro-cid-qsek7fus>
Ethically generated from clinical research
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-cyan-200/80 leading-relaxed mb-3", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${type.description}` })} <div class="text-xs text-cyan-300/70" data-astro-cid-qsek7fus> <span class="font-medium" data-astro-cid-qsek7fus>Examples:</span> ${type.examples} </div> ` })} ` })}`)} </div> </div> <!-- University Results --> <div class="mb-16" data-astro-cid-qsek7fus> <div class="text-center mb-12" data-astro-cid-qsek7fus> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-qsek7fus>
Universities Report
<span class="text-green-400 golden-shimmer" data-astro-cid-qsek7fus>Unprecedented Diversity</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-qsek7fus>
Training programs using Synthetic Generator expose students to
              client diversity that would take decades to encounter naturally
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-qsek7fus> ${universityResults.map((result) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 hover:border-green-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4", "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700 text-green-400" data-astro-cid-qsek7fus>
🏛️
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-green-100 tracking-wide mb-3", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${result.university}` })} <div class="text-lg text-green-400 font-bold mb-2" data-astro-cid-qsek7fus> ${result.result} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-green-200/80 leading-relaxed", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${result.detail}` })} ` })} ` })}`)} </div> </div> <!-- Ethical AI Section --> <div class="mb-16" data-astro-cid-qsek7fus> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-purple-600/30 bg-purple-900/20 rounded-3xl overflow-hidden", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12 text-center", "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl mb-6 text-purple-400" data-astro-cid-qsek7fus>🤖</div> <h3 class="text-lg lg:text-xl font-bold text-purple-100 mb-4" data-astro-cid-qsek7fus>
Ethical AI Patient Generation
</h3> <p class="text-base text-purple-200/90 mb-6 leading-relaxed max-w-3xl mx-auto" data-astro-cid-qsek7fus>
Our AI generates patients from clinical literature and research,
                not real patient data. Every synthetic patient is created
                ethically, ensuring authentic presentations without compromising
                anyone's privacy.
</p> <div class="flex items-center justify-center gap-6 text-purple-300/80 text-sm" data-astro-cid-qsek7fus> <span class="flex items-center gap-2" data-astro-cid-qsek7fus> <span class="text-purple-400" data-astro-cid-qsek7fus>✓</span>
No Real Patient Data Used
</span> <span class="hidden sm:inline" data-astro-cid-qsek7fus>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-qsek7fus> <span class="text-purple-400" data-astro-cid-qsek7fus>✓</span>
Research-Based Generation
</span> <span class="hidden sm:inline" data-astro-cid-qsek7fus>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-qsek7fus> <span class="text-purple-400" data-astro-cid-qsek7fus>✓</span>
Clinically Authentic
</span> </div> ` })} ` })} </div> <!-- Final CTA --> <div class="text-center" data-astro-cid-qsek7fus> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-cyan-500/40 bg-slate-900/50 rounded-3xl overflow-hidden", "data-astro-cid-qsek7fus": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12", "data-astro-cid-qsek7fus": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl text-cyan-400 mb-6" data-astro-cid-qsek7fus>🎯</div> <div class="mb-6" data-astro-cid-qsek7fus> ${renderComponent($$result4, "Badge", $$Badge, { "className": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 rounded-full", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-cyan-400 rounded-full" data-astro-cid-qsek7fus></span>
Generate Unlimited Patients
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-cyan-100 mb-8" data-astro-cid-qsek7fus>
Ready to Give Your Students
<br data-astro-cid-qsek7fus> <span class="text-cyan-400 golden-shimmer" data-astro-cid-qsek7fus>Every Client They'll Ever Meet?</span> </h2> <p class="text-base lg:text-lg text-green-200/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-astro-cid-qsek7fus>
Stop limiting your students to the few cases that walk through
                your clinic doors. Give them the full spectrum of human
                experience.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-qsek7fus> ${renderComponent($$result4, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300", "data-demo-cta": "primary", "data-variant": variantKey, "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`${currentVariant.cta}` })} ${renderComponent($$result4, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300", "data-demo-cta": "secondary", "data-astro-cid-qsek7fus": true }, { "default": ($$result5) => renderTemplate`
See Generation Examples
` })} </div> <p class="text-xs text-cyan-300/70" data-astro-cid-qsek7fus>
🎓 Unlimited patient diversity • 🔒 Ethically generated • 💛
                Loved by training programs
</p> ` })} ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/demo/synthetic-training-generator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/demo/synthetic-training-generator.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/synthetic-training-generator.astro";
const $$url = "/demo/synthetic-training-generator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SyntheticTrainingGenerator,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
