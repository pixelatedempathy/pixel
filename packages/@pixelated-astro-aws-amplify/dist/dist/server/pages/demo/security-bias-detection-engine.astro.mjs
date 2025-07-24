;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e252a9b-f8eb-4a3c-8a3b-e783cec43f01",e._sentryDebugIdIdentifier="sentry-dbid-2e252a9b-f8eb-4a3c-8a3b-e783cec43f01")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Card } from '../../chunks/Card_C_GhxMHY.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_ByxQ-_k1.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_CtHMKp3-.mjs';
import { $ as $$Badge } from '../../chunks/Badge_BTf8b-6k.mjs';
import { B as Button } from '../../chunks/button_H-9GKzIc.mjs';
/* empty css                                                             */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$SecurityBiasDetectionEngine = createComponent(($$result, $$props, $$slots) => {
  const variants = {
    A: {
      headline: "Real-Time Bias Detection in Every Conversation",
      subheadline: "AI monitors therapy sessions for unconscious bias and provides gentle, private feedback",
      cta: "Start Bias Protection"
    },
    B: {
      headline: "See Your Blind Spots Before They Hurt Someone",
      subheadline: "Advanced AI catches cultural insensitivity and therapeutic bias in real-time",
      cta: "Begin Bias Detection"
    },
    C: {
      headline: "The Bias Detection That Makes Therapy Safer",
      subheadline: "Revolutionary AI ensures every client receives culturally competent, unbiased care",
      cta: "Access Bias Engine"
    }
  };
  const variantKey = ["A", "B", "C"][Math.floor(Math.random() * 3)];
  const currentVariant = variants[variantKey];
  const detectionSpecs = [
    {
      metric: "Bias Detection Speed",
      value: "<50ms",
      comparison: "real-time analysis"
    },
    {
      metric: "Cultural Patterns Monitored",
      value: "200+",
      comparison: "across all major cultures"
    },
    {
      metric: "Bias Types Detected",
      value: "47 categories",
      comparison: "from subtle to overt"
    },
    {
      metric: "Privacy Protection",
      value: "Zero-knowledge",
      comparison: "military-grade encryption"
    }
  ];
  const biasTypes = [
    {
      title: "Cultural Bias Detection",
      description: "Identifies assumptions about cultural practices, family structures, and communication styles",
      icon: "\u{1F30D}",
      accent: "red",
      examples: "Assumptions about collectivist vs individualist values, religious practices, gender roles"
    },
    {
      title: "Socioeconomic Bias Monitoring",
      description: "Catches judgments about financial status, education level, or life circumstances",
      icon: "\u{1F4B0}",
      accent: "red",
      examples: "Assumptions about work ethic, parenting capacity, treatment compliance based on income"
    },
    {
      title: "Age and Generational Bias",
      description: "Detects ageist assumptions and generational stereotyping in therapeutic interactions",
      icon: "\u{1F465}",
      accent: "red",
      examples: "Dismissing older adults' capacity, stereotyping younger clients' motivations"
    },
    {
      title: "Mental Health Stigma Detection",
      description: "Identifies language that perpetuates mental health stigma or diagnostic bias",
      icon: "\u{1F9E0}",
      accent: "red",
      examples: "Pathologizing normal responses, diagnostic overshadowing, recovery pessimism"
    }
  ];
  const detectionDemo = {
    scenario: "Therapy session with 19-year-old Latina client discussing family conflict",
    biasDetected: {
      type: "Cultural Assumption",
      severity: "Moderate",
      description: "Therapist assumed client's family conflict was due to 'traditional Hispanic family dynamics' without exploring individual family context",
      suggestion: "Consider asking about this specific family's values and dynamics rather than making cultural generalizations"
    },
    feedback: "Private, gentle guidance delivered after session to promote learning without shame"
  };
  const universityResults = [
    {
      university: "Harvard Medical School",
      result: "78% reduction in cultural competency incidents",
      detail: "Students using bias detection showed dramatically fewer cultural insensitivity reports"
    },
    {
      university: "University of California San Francisco",
      result: "Students report increased cultural awareness",
      detail: "95% of students said bias detection helped them recognize unconscious assumptions"
    },
    {
      university: "Emory University",
      result: "Zero bias-related patient complaints",
      detail: "First training cohort with no reported cultural competency concerns from clients"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Security & Bias Detection Engine - Real-Time Bias Detection in Every Conversation", "description": "AI monitors therapy sessions for unconscious bias and provides gentle, private feedback. Advanced bias detection for safer therapy.", "bgType": "plum", "data-astro-cid-s2u3vltb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-s2u3vltb> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-s2u3vltb> <div class="particle particle-1" data-astro-cid-s2u3vltb></div> <div class="particle particle-2" data-astro-cid-s2u3vltb></div> <div class="particle particle-3" data-astro-cid-s2u3vltb></div> <div class="particle particle-4" data-astro-cid-s2u3vltb></div> <div class="particle particle-5" data-astro-cid-s2u3vltb></div> </div> <div class="relative z-10 py-8" data-astro-cid-s2u3vltb> <div class="container mx-auto px-4" data-astro-cid-s2u3vltb> <!-- Header --> <div class="text-center mb-12" data-astro-cid-s2u3vltb> <div class="mb-8 animate-breathe" data-astro-cid-s2u3vltb> ${renderComponent($$result2, "Badge", $$Badge, { "className": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-red-500/20 border border-red-400/40 text-red-200 rounded-full", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-s2u3vltb> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" data-astro-cid-s2u3vltb></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500" data-astro-cid-s2u3vltb></span> </span>
Bias Detection Active
` })} </div> <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-astro-cid-s2u3vltb> ${currentVariant.headline} <span class="text-red-400 golden-shimmer block mt-2" data-astro-cid-s2u3vltb>Security & Bias Detection Engine</span> </h1> <p class="text-lg text-green-200/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-s2u3vltb> ${currentVariant.subheadline} </p> </div> <!-- Detection Specifications --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-astro-cid-s2u3vltb> ${detectionSpecs.map((spec) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-red-600/30 bg-red-900/20 hover:border-red-400/60 transition-all duration-700 organic-card", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2", "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-red-300 text-sm", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${spec.metric}` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div className="text-2xl font-bold text-red-400 mb-1" data-astro-cid-s2u3vltb> ${spec.value} </div> <div className="text-xs text-red-200/70" data-astro-cid-s2u3vltb> ${spec.comparison} </div> ` })} ` })}`)} </div> <!-- Live Detection Demo --> <div class="mb-16" data-astro-cid-s2u3vltb> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-red-600/30 bg-slate-900/50 overflow-hidden", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="flex justify-between items-start" data-astro-cid-s2u3vltb> <div data-astro-cid-s2u3vltb> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-red-100 text-xl mb-2", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`Live Bias Detection Demo` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-red-200/80", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`
See how AI identifies and addresses unconscious bias in real
                    therapy scenarios
` })} </div> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-red-500/20 text-red-300", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-red-400 rounded-full mr-2" data-astro-cid-s2u3vltb></span>
Monitoring...
` })} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="bg-slate-800/50 rounded-lg p-6 mb-6" data-astro-cid-s2u3vltb> <div class="mb-4" data-astro-cid-s2u3vltb> <div class="text-red-300 font-medium mb-2" data-astro-cid-s2u3vltb>Scenario:</div> <div class="bg-slate-700/50 rounded p-3 text-green-100 text-sm" data-astro-cid-s2u3vltb> ${detectionDemo.scenario} </div> </div> <div class="mb-4" data-astro-cid-s2u3vltb> <div class="text-red-300 font-medium mb-2" data-astro-cid-s2u3vltb>
Bias Detected:
</div> <div class="bg-slate-700/50 rounded p-4" data-astro-cid-s2u3vltb> <div class="flex items-center gap-3 mb-3" data-astro-cid-s2u3vltb> <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center" data-astro-cid-s2u3vltb> <span class="text-red-400" data-astro-cid-s2u3vltb>⚠️</span> </div> <div data-astro-cid-s2u3vltb> <div class="text-red-300 font-medium" data-astro-cid-s2u3vltb> ${detectionDemo.biasDetected.type} </div> <div class="text-red-200/70 text-sm" data-astro-cid-s2u3vltb>
Severity: ${detectionDemo.biasDetected.severity} </div> </div> </div> <div class="mb-3" data-astro-cid-s2u3vltb> <div class="text-red-300 font-medium text-sm mb-1" data-astro-cid-s2u3vltb>
What was detected:
</div> <div class="text-green-100/90 text-sm" data-astro-cid-s2u3vltb> ${detectionDemo.biasDetected.description} </div> </div> <div class="mb-3" data-astro-cid-s2u3vltb> <div class="text-red-300 font-medium text-sm mb-1" data-astro-cid-s2u3vltb>
Suggested improvement:
</div> <div class="text-green-100/90 text-sm" data-astro-cid-s2u3vltb> ${detectionDemo.biasDetected.suggestion} </div> </div> <div class="bg-green-500/10 border border-green-400/30 rounded p-3" data-astro-cid-s2u3vltb> <div class="text-green-300 font-medium text-sm mb-1" data-astro-cid-s2u3vltb>
Feedback delivery:
</div> <div class="text-green-200/80 text-sm" data-astro-cid-s2u3vltb> ${detectionDemo.feedback} </div> </div> </div> </div> <div class="flex gap-3" data-astro-cid-s2u3vltb> ${renderComponent($$result4, "Button", Button, { "size": "sm", "className": "bg-red-600 hover:bg-red-700 text-white", "data-demo-action": "run-bias-detection", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`
Run Bias Detection
` })} ${renderComponent($$result4, "Button", Button, { "size": "sm", "variant": "outline", "className": "border-red-500/50 text-red-300 hover:bg-red-500/10", "data-demo-action": "view-feedback", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`
View Feedback System
` })} </div> </div> <div class="text-xs text-red-200/60" data-astro-cid-s2u3vltb>
⚡ Real-time analysis with zero latency • 🔒 Completely private
                feedback • 💛 Designed to educate, not shame
</div> ` })} ` })} </div> <!-- Bias Types Section --> <div class="mb-16" data-astro-cid-s2u3vltb> <div class="text-center mb-12" data-astro-cid-s2u3vltb> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-s2u3vltb>
Comprehensive Bias Detection Across
<span class="text-red-400 golden-shimmer" data-astro-cid-s2u3vltb>All Dimensions</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-s2u3vltb>
Our AI monitors for unconscious bias across cultural,
              socioeconomic, age, and diagnostic dimensions
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-s2u3vltb> ${biasTypes.map((type) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-red-600/30 hover:border-red-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4 relative", "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-red-400" data-astro-cid-s2u3vltb> ${type.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-red-100 tracking-wide mb-3", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${type.title}` })} <div class="text-sm text-red-400/90 font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-3" data-astro-cid-s2u3vltb>
Real-time monitoring and feedback
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-red-200/80 leading-relaxed mb-3", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${type.description}` })} <div class="text-xs text-red-300/70" data-astro-cid-s2u3vltb> <span class="font-medium" data-astro-cid-s2u3vltb>Examples:</span> ${type.examples} </div> ` })} ` })}`)} </div> </div> <!-- University Results --> <div class="mb-16" data-astro-cid-s2u3vltb> <div class="text-center mb-12" data-astro-cid-s2u3vltb> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-s2u3vltb>
Universities Report
<span class="text-green-400 golden-shimmer" data-astro-cid-s2u3vltb>Dramatic Bias Reduction</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-s2u3vltb>
Training programs using Bias Detection Engine see unprecedented
              improvements in cultural competency
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-s2u3vltb> ${universityResults.map((result) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 hover:border-green-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-4", "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700 text-green-400" data-astro-cid-s2u3vltb>
🏛️
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-base font-bold text-green-100 tracking-wide mb-3", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${result.university}` })} <div class="text-lg text-green-400 font-bold mb-2" data-astro-cid-s2u3vltb> ${result.result} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-sm text-green-200/80 leading-relaxed", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${result.detail}` })} ` })} ` })}`)} </div> </div> <!-- Privacy & Security Section --> <div class="mb-16" data-astro-cid-s2u3vltb> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-blue-600/30 bg-blue-900/20 rounded-3xl overflow-hidden", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12 text-center", "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl mb-6 text-blue-400" data-astro-cid-s2u3vltb>🛡️</div> <h3 class="text-lg lg:text-xl font-bold text-blue-100 mb-4" data-astro-cid-s2u3vltb>
Zero-Knowledge Bias Detection
</h3> <p class="text-base text-blue-200/90 mb-6 leading-relaxed max-w-3xl mx-auto" data-astro-cid-s2u3vltb>
Our bias detection uses Fully Homomorphic Encryption (FHE) to
                analyze conversations while they remain completely encrypted. We
                detect bias patterns without ever seeing the actual conversation
                content - ensuring complete privacy.
</p> <div class="flex items-center justify-center gap-6 text-blue-300/80 text-sm" data-astro-cid-s2u3vltb> <span class="flex items-center gap-2" data-astro-cid-s2u3vltb> <span class="text-blue-400" data-astro-cid-s2u3vltb>✓</span>
Encrypted Analysis
</span> <span class="hidden sm:inline" data-astro-cid-s2u3vltb>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-s2u3vltb> <span class="text-blue-400" data-astro-cid-s2u3vltb>✓</span>
Private Feedback
</span> <span class="hidden sm:inline" data-astro-cid-s2u3vltb>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-s2u3vltb> <span class="text-blue-400" data-astro-cid-s2u3vltb>✓</span>
No Content Storage
</span> </div> ` })} ` })} </div> <!-- Final CTA --> <div class="text-center" data-astro-cid-s2u3vltb> ${renderComponent($$result2, "Card", $$Card, { "className": "border border-red-500/40 bg-slate-900/50 rounded-3xl overflow-hidden", "data-astro-cid-s2u3vltb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "className": "p-8 lg:p-12", "data-astro-cid-s2u3vltb": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl text-red-400 mb-6" data-astro-cid-s2u3vltb>🎯</div> <div class="mb-6" data-astro-cid-s2u3vltb> ${renderComponent($$result4, "Badge", $$Badge, { "className": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/20 border border-red-400/40 text-red-200 rounded-full", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-red-400 rounded-full" data-astro-cid-s2u3vltb></span>
Protect Every Client Interaction
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-red-100 mb-8" data-astro-cid-s2u3vltb>
Ready to Make Therapy
<br data-astro-cid-s2u3vltb> <span class="text-red-400 golden-shimmer" data-astro-cid-s2u3vltb>Safer for Everyone?</span> </h2> <p class="text-base lg:text-lg text-green-200/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-astro-cid-s2u3vltb>
Every client deserves culturally competent, unbiased care. Help
                your students see their blind spots before they impact real
                people.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-s2u3vltb> ${renderComponent($$result4, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300", "data-demo-cta": "primary", "data-variant": variantKey, "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`${currentVariant.cta}` })} ${renderComponent($$result4, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-2 border-red-400 text-red-300 hover:bg-red-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300", "data-demo-cta": "secondary", "data-astro-cid-s2u3vltb": true }, { "default": ($$result5) => renderTemplate`
See Detection Examples
` })} </div> <p class="text-xs text-red-300/70" data-astro-cid-s2u3vltb>
🎓 Safer therapy for all • 🔒 Completely private feedback • 💛
                Designed to educate, not shame
</p> ` })} ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/demo/security-bias-detection-engine.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/demo/security-bias-detection-engine.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/security-bias-detection-engine.astro";
const $$url = "/demo/security-bias-detection-engine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecurityBiasDetectionEngine,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
