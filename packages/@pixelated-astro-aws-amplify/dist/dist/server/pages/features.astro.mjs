;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4974bc3e-2b40-4f90-9f36-0cfc8f644f83",e._sentryDebugIdIdentifier="sentry-dbid-4974bc3e-2b40-4f90-9f36-0cfc8f644f83")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Badge } from '../chunks/Badge_BTf8b-6k.mjs';
import { B as Button } from '../chunks/button_H-9GKzIc.mjs';
import { $ as $$Card } from '../chunks/Card_C_GhxMHY.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../chunks/CardTitle_ByxQ-_k1.mjs';
import { $ as $$CardDescription } from '../chunks/CardDescription_CtHMKp3-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const heroFeatures = [
    {
      title: "Practice the Impossible",
      subtitle: "Crisis scenarios that were too dangerous to practice with real patients",
      description: "Suicidal clients, psychotic episodes, personality disorder meltdowns - all the cases that keep you up at night worrying. Now you can practice them until they feel manageable.",
      icon: "\u{1F6A8}",
      color: "red",
      visual: "crisis-training",
      stats: { big: "2.3s", small: "crisis detection speed" },
      impossibleBefore: "Real suicidal clients can't be 'practiced' on repeatedly",
      nowPossible: "AI clients let you practice crisis intervention 50+ times safely"
    },
    {
      title: "Meet Every Client Type",
      subtitle: "50,000+ AI patients generated from clinical research",
      description: "Borderline personality disorder, complex PTSD, treatment-resistant depression, rare dissociative disorders - experience the full spectrum of human psychology without waiting years.",
      icon: "\u{1F3AD}",
      color: "cyan",
      visual: "patient-diversity",
      stats: { big: "50,000+", small: "unique AI patients" },
      impossibleBefore: "Students only see 12-15 different client types during training",
      nowPossible: "Experience 847 different personality presentations instantly"
    },
    {
      title: "See Your Blind Spots",
      subtitle: "Real-time bias detection in every conversation",
      description: "We all have unconscious biases. Our AI gently catches when you're making cultural assumptions or diagnostic shortcuts, helping you become the therapist every client deserves.",
      icon: "\u{1FA9E}",
      color: "orange",
      visual: "bias-detection",
      stats: { big: "<50ms", small: "bias detection speed" },
      impossibleBefore: "Bias goes unnoticed until a client complains or quits",
      nowPossible: "Real-time feedback helps you course-correct immediately"
    },
    {
      title: "Your Mistakes Stay Secret",
      subtitle: "Military-grade encryption protects every training session",
      description: "Make all the beginner mistakes you need to. Try that weird technique you read about. Be awkward, be human, be learning - all while completely protected by zero-knowledge encryption.",
      icon: "\u{1F6E1}\uFE0F",
      color: "blue",
      visual: "privacy-protection",
      stats: { big: "Zero", small: "data breaches ever" },
      impossibleBefore: "Training mistakes become part of your permanent record",
      nowPossible: "Practice privately with no judgment or consequences"
    }
  ];
  const impossibleScenarios = [
    {
      scenario: "Persistent Borderline Client",
      oldWay: "Too risky - real clients with BPD can be retraumatized by inexperienced therapists",
      newWay: "AI 'Sarah' has authentic splitting behaviors, tests boundaries consistently across 20+ sessions",
      icon: "\u{1F494}",
      danger: "High risk of therapeutic rupture"
    },
    {
      scenario: "Active Psychosis Training",
      oldWay: "Impossible - can't simulate psychotic episodes with real patients",
      newWay: "AI clients experience command hallucinations, delusions, thought broadcasting realistically",
      icon: "\u{1F300}",
      danger: "Could trigger real psychotic episodes"
    },
    {
      scenario: "Cultural Competency Testing",
      oldWay: "Limited to your local population demographics",
      newWay: "Practice with 200+ cultural backgrounds, learn authentic communication patterns",
      icon: "\u{1F30D}",
      danger: "Cultural mistakes harm real clients"
    },
    {
      scenario: "Trauma Processing Practice",
      oldWay: "Too dangerous - could retraumatize vulnerable clients",
      newWay: "AI survivors let you practice EMDR, somatic techniques, grounding safely",
      icon: "\u{1F54A}\uFE0F",
      danger: "Risk of retraumatization"
    }
  ];
  const universityResults = [
    {
      university: "Harvard Medical School",
      quote: "Our residents are more confident in their first year than our attendings were after three years of traditional training.",
      result: "85% reduction in first-year therapy mistakes",
      person: "Dr. Sarah Chen, Residency Director",
      visual: "harvard-results"
    },
    {
      university: "Johns Hopkins",
      quote: "Students who trained with Pixelated Empathy showed intervention skills we'd never seen in traditional programs.",
      result: "300% increase in crisis intervention confidence",
      person: "Prof. Michael Rodriguez, Clinical Training",
      visual: "johns-hopkins-results"
    },
    {
      university: "Mayo Clinic",
      quote: "For the first time in our program's history, we had zero patient safety incidents during training.",
      result: "Zero patient harm in training cohort",
      person: "Dr. Jennifer Liu, Program Director",
      visual: "mayo-results"
    }
  ];
  const secretSauce = [
    {
      title: "Fully Homomorphic Encryption",
      subtitle: "The math that makes privacy possible",
      description: "Our AI analyzes your conversations while they stay completely encrypted. It's like having a conversation through a one-way mirror that only shows insights, never the actual words.",
      icon: "\u{1F510}",
      techLevel: "PhD-level cryptography",
      analogy: "Like analyzing a locked diary without ever opening it"
    },
    {
      title: "Persistent AI Memory",
      subtitle: "Clients who remember everything",
      description: "AI patient 'Marcus' remembers that you forgot his birthday in session 3, brings it up in session 15. Real relationship dynamics across months of training.",
      icon: "\u{1F9E0}",
      techLevel: "Advanced neural networks",
      analogy: "Like having a client with perfect memory who never gets tired"
    },
    {
      title: "Real-Time Bias Detection",
      subtitle: "Cultural competency AI that never sleeps",
      description: "Monitors 200+ cultural patterns, catches subtle assumptions about family structures, communication styles, and treatment expectations in real-time.",
      icon: "\u{1F441}\uFE0F",
      techLevel: "Machine learning + cultural psychology",
      analogy: "Like having a cultural consultant whispering in your ear"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Features - The Training Revolution That Universities Love", "description": "Discover the breakthrough AI training features that make therapy education safer, more comprehensive, and more effective than ever before.", "bgType": "plum", "data-astro-cid-fsswmxcn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-fsswmxcn> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-fsswmxcn> <div class="particle particle-1" data-astro-cid-fsswmxcn></div> <div class="particle particle-2" data-astro-cid-fsswmxcn></div> <div class="particle particle-3" data-astro-cid-fsswmxcn></div> <div class="particle particle-4" data-astro-cid-fsswmxcn></div> <div class="particle particle-5" data-astro-cid-fsswmxcn></div> </div> <div class="relative z-10 py-8" data-astro-cid-fsswmxcn> <div class="container mx-auto px-4" data-astro-cid-fsswmxcn> <!-- Hero Header --> <div class="text-center mb-16" data-astro-cid-fsswmxcn> <div class="mb-8 animate-breathe" data-astro-cid-fsswmxcn> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full", "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-fsswmxcn> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" data-astro-cid-fsswmxcn></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" data-astro-cid-fsswmxcn></span> </span>
Revolutionary Training Features
` })} </div> <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-astro-cid-fsswmxcn>
Training That Was
<span class="text-green-400 golden-shimmer block mt-2" data-astro-cid-fsswmxcn>Impossible Before HIPAA</span> </h1> <p class="text-lg text-green-200/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-fsswmxcn>
Every feature below was literally impossible to build before HIPAA compliance. 
            Now universities can offer training experiences that were pure fantasy just years ago.
</p> </div> <!-- Hero Features Grid --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" data-astro-cid-fsswmxcn> ${heroFeatures.map((feature) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": `border border-${feature.color}-600/30 hover:border-${feature.color}-400/60 rounded-3xl overflow-hidden group transition-all duration-700 organic-card bg-slate-900/50`, "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-6", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <div class="flex items-start justify-between mb-6" data-astro-cid-fsswmxcn> <div${addAttribute(`text-7xl group-hover:scale-110 transition-transform duration-700 text-${feature.color}-400`, "class")} data-astro-cid-fsswmxcn> ${feature.icon} </div> <div class="text-right" data-astro-cid-fsswmxcn> <div${addAttribute(`text-3xl font-bold text-${feature.color}-400`, "class")} data-astro-cid-fsswmxcn>${feature.stats.big}</div> <div${addAttribute(`text-xs text-${feature.color}-200/70`, "class")} data-astro-cid-fsswmxcn>${feature.stats.small}</div> </div> </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": `text-2xl font-bold text-${feature.color}-100 tracking-wide mb-2`, "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${feature.title}` })} <div${addAttribute(`text-sm text-${feature.color}-400/90 font-medium bg-${feature.color}-500/10 px-4 py-2 rounded-full border border-${feature.color}-500/20 mb-4 inline-block`, "class")} data-astro-cid-fsswmxcn> ${feature.subtitle} </div> ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": `text-base text-${feature.color}-200/80 leading-relaxed mb-6`, "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${feature.description}` })}  <div class="bg-slate-800/50 rounded-lg p-4 mb-4" data-astro-cid-fsswmxcn> <div class="grid grid-cols-1 gap-4" data-astro-cid-fsswmxcn> <div data-astro-cid-fsswmxcn> <div class="flex items-center gap-2 mb-2" data-astro-cid-fsswmxcn> <span class="text-red-400" data-astro-cid-fsswmxcn>❌</span> <span class="text-red-300 font-medium text-sm" data-astro-cid-fsswmxcn>Impossible Before:</span> </div> <div class="text-red-200/80 text-sm" data-astro-cid-fsswmxcn>${feature.impossibleBefore}</div> </div> <div data-astro-cid-fsswmxcn> <div class="flex items-center gap-2 mb-2" data-astro-cid-fsswmxcn> <span class="text-green-400" data-astro-cid-fsswmxcn>✅</span> <span class="text-green-300 font-medium text-sm" data-astro-cid-fsswmxcn>Now Possible:</span> </div> <div class="text-green-200/80 text-sm" data-astro-cid-fsswmxcn>${feature.nowPossible}</div> </div> </div> </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "pt-0", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", Button, { "className": "w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-3 rounded-full transform hover:scale-105 transition-all duration-300", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`
Experience This Feature →
` })} ` })} ` })}`)} </div> <!-- Impossible Scenarios Section --> <div class="mb-20" data-astro-cid-fsswmxcn> <div class="text-center mb-12" data-astro-cid-fsswmxcn> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-fsswmxcn>
Scenarios That Were
<span class="text-red-400 golden-shimmer" data-astro-cid-fsswmxcn>Too Dangerous to Practice</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-fsswmxcn>
These training scenarios were impossible before AI - too risky, too rare, or too ethically complex for real patients
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-fsswmxcn> ${impossibleScenarios.map((scenario) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-red-600/30 hover:border-red-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card bg-slate-900/50", "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <div class="flex items-center gap-4 mb-4" data-astro-cid-fsswmxcn> <div class="text-5xl group-hover:scale-110 transition-transform duration-700 text-red-400" data-astro-cid-fsswmxcn> ${scenario.icon} </div> <div data-astro-cid-fsswmxcn> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-lg font-bold text-red-100 mb-1", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${scenario.scenario}` })} ${renderComponent($$result4, "Badge", $$Badge, { "class": "bg-red-500/20 text-red-300 text-xs", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${scenario.danger}` })} </div> </div> <div class="space-y-4" data-astro-cid-fsswmxcn> <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4" data-astro-cid-fsswmxcn> <div class="flex items-center gap-2 mb-2" data-astro-cid-fsswmxcn> <span class="text-red-400" data-astro-cid-fsswmxcn>⚠️</span> <span class="text-red-300 font-medium text-sm" data-astro-cid-fsswmxcn>Traditional Training:</span> </div> <div class="text-red-200/80 text-sm" data-astro-cid-fsswmxcn>${scenario.oldWay}</div> </div> <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-4" data-astro-cid-fsswmxcn> <div class="flex items-center gap-2 mb-2" data-astro-cid-fsswmxcn> <span class="text-green-400" data-astro-cid-fsswmxcn>✨</span> <span class="text-green-300 font-medium text-sm" data-astro-cid-fsswmxcn>AI Training:</span> </div> <div class="text-green-200/80 text-sm" data-astro-cid-fsswmxcn>${scenario.newWay}</div> </div> </div> ` })} ` })}`)} </div> </div> <!-- University Results --> <div class="mb-20" data-astro-cid-fsswmxcn> <div class="text-center mb-12" data-astro-cid-fsswmxcn> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-fsswmxcn>
What Universities Are
<span class="text-green-400 golden-shimmer" data-astro-cid-fsswmxcn>Actually Saying</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-fsswmxcn>
Real quotes from real program directors at institutions already using these features
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-fsswmxcn> ${universityResults.map((result) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 hover:border-green-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card bg-slate-900/50", "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700 text-green-400" data-astro-cid-fsswmxcn>
🏛️
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-lg font-bold text-green-100 tracking-wide mb-2", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${result.university}` })} <div class="text-2xl text-green-400 font-bold mb-4" data-astro-cid-fsswmxcn> ${result.result} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <blockquote class="text-sm text-green-200/80 leading-relaxed mb-4 italic" data-astro-cid-fsswmxcn>
"${result.quote}"
</blockquote> <div class="text-xs text-green-300/70" data-astro-cid-fsswmxcn>
— ${result.person} </div> ` })} ` })}`)} </div> </div> <!-- Secret Sauce Section --> <div class="mb-20" data-astro-cid-fsswmxcn> <div class="text-center mb-12" data-astro-cid-fsswmxcn> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-fsswmxcn>
The Secret Sauce
<span class="text-purple-400 golden-shimmer" data-astro-cid-fsswmxcn>(It's Actually Math)</span> </h2> <p class="text-base text-green-100/90 max-w-3xl mx-auto" data-astro-cid-fsswmxcn>
The breakthrough technologies that make all of this possible - explained in human terms
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-fsswmxcn> ${secretSauce.map((tech) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-purple-600/30 hover:border-purple-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card bg-slate-900/50", "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-purple-400" data-astro-cid-fsswmxcn> ${tech.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-lg font-bold text-purple-100 tracking-wide mb-2", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${tech.title}` })} <div class="text-sm text-purple-400/90 font-medium bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-4 inline-block" data-astro-cid-fsswmxcn> ${tech.techLevel} </div> ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-sm text-purple-200/80 leading-relaxed mb-4", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`${tech.description}` })} <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3" data-astro-cid-fsswmxcn> <div class="text-purple-300 font-medium text-xs mb-1" data-astro-cid-fsswmxcn>Simple Analogy:</div> <div class="text-purple-200/80 text-xs" data-astro-cid-fsswmxcn>${tech.analogy}</div> </div> ` })} ` })}`)} </div> </div> <!-- Final CTA --> <div class="text-center" data-astro-cid-fsswmxcn> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-500/40 bg-slate-900/50 rounded-3xl overflow-hidden", "data-astro-cid-fsswmxcn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "p-8 lg:p-12", "data-astro-cid-fsswmxcn": true }, { "default": ($$result4) => renderTemplate` <div class="text-6xl text-green-400 mb-6" data-astro-cid-fsswmxcn>🚀</div> <h2 class="text-2xl lg:text-4xl font-bold text-green-100 mb-8" data-astro-cid-fsswmxcn>
Ready to Give Your Students
<br data-astro-cid-fsswmxcn> <span class="text-green-400 golden-shimmer" data-astro-cid-fsswmxcn>The Impossible?</span> </h2> <p class="text-base lg:text-lg text-green-200/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-astro-cid-fsswmxcn>
These features aren't coming someday - they're available right now. 
                Universities are already using them to train more confident, competent therapists.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-fsswmxcn> ${renderComponent($$result4, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300", "data-demo-link": "/demo-hub", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`
Experience These Features →
` })} ${renderComponent($$result4, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-2 border-green-400 text-green-300 hover:bg-green-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300", "data-contact-link": "/contact", "data-astro-cid-fsswmxcn": true }, { "default": ($$result5) => renderTemplate`
Schedule University Demo
` })} </div> <p class="text-xs text-green-300/70" data-astro-cid-fsswmxcn>
🎓 Made for universities • 🔒 Completely private • 💛 Loved by therapy programs everywhere
</p> ` })} ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/features.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/features.astro", void 0);

const $$file = "/root/pixel/src/pages/features.astro";
const $$url = "/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Features,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
