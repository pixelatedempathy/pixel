;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7852bbbd-05cb-4d69-8a2b-9fed75fe9681",e._sentryDebugIdIdentifier="sentry-dbid-7852bbbd-05cb-4d69-8a2b-9fed75fe9681")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, m as maybeRenderHead, d as renderScript, a as renderTemplate, r as renderComponent, e as addAttribute } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { B as Button } from '../chunks/button_H-9GKzIc.mjs';
import { $ as $$Card } from '../chunks/Card_C_GhxMHY.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../chunks/CardTitle_ByxQ-_k1.mjs';
import { $ as $$CardDescription } from '../chunks/CardDescription_CtHMKp3-.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Badge } from '../chunks/Badge_BTf8b-6k.mjs';
export { renderers } from '../renderers.mjs';

const $$SpinningGlobe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="globe-container" class="globe-wrapper slide-enter" style="--enter-stage: 0; animation-duration: 1.2s;" data-astro-cid-otlqqr5b> <canvas id="globe-canvas" data-astro-cid-otlqqr5b></canvas> </div> ${renderScript($$result, "/root/pixel/src/components/widgets/SpinningGlobe.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/components/widgets/SpinningGlobe.astro", void 0);

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroStats = [
    { value: "500+", label: "Training Programs" },
    { value: "92%", label: "Pass Rate Increase" },
    { value: "50+", label: "Client Personas" },
    { value: "Zero", label: "Real Harm Risk" }
  ];
  const testimonials = [
    {
      text: "Honestly? This saved my students from making some pretty painful mistakes. They practice the hard conversations here first.",
      author: "Dr. Sarah M.",
      role: "Clinical Supervisor",
      rating: 5
    },
    {
      text: "I had no idea I was being dismissive with certain clients until the AI caught it. Humbling, but so grateful.",
      author: "Mike T.",
      role: "Therapist in Training",
      rating: 5
    },
    {
      text: "Our graduation rates went up 40% after we started using this. Students just seem... ready. Actually ready.",
      author: "Dr. Jennifer L.",
      role: "Program Director",
      rating: 5
    }
  ];
  const features = [
    {
      title: "50+ Different Personalities to Learn From",
      description: "Every challenging client type you can imagine - from the quietly withdrawn to the explosively angry. Practice until you feel ready for anything.",
      icon: "\u{1F3AD}",
      accent: "green",
      benefit: "No real person gets hurt while you learn"
    },
    {
      title: "Catch Your Blind Spots (Gently)",
      description: "We all have biases. Our AI notices when you might be reacting from your own stuff instead of helping theirs. It's like having a really wise supervisor who never judges.",
      icon: "\u{1FA9E}",
      accent: "emerald",
      benefit: "See yourself clearly without shame"
    },
    {
      title: "Your Mistakes Stay Private",
      description: "Everything here is completely confidential. Make all the beginner mistakes you need to without anyone knowing except you.",
      icon: "\u{1F910}",
      accent: "green",
      benefit: "Learn without fear of judgment"
    },
    {
      title: "See Your Growth Over Time",
      description: "Track how you're improving session by session. Watch yourself get more confident, more skilled, more ready to help real people heal.",
      icon: "\u{1F331}",
      accent: "emerald",
      benefit: "Actual proof you're getting better at this"
    },
    {
      title: "Try Wild New Ideas Safely",
      description: "Read about some new technique? Wondered if art therapy might work? Test it here first. No ethics boards to worry about, just learning.",
      icon: "\u{1F3A8}",
      accent: "green",
      benefit: "Innovation without consequences"
    },
    {
      title: "Practice the Really Hard Stuff",
      description: "Suicidal clients. Trauma responses. Full meltdowns. The scenarios that keep you up at night worrying - practice them until you feel steady.",
      icon: "\u{1F4AA}",
      accent: "emerald",
      benefit: "Ready for anything life throws at you"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pixelated Empathy - AI Therapist Training Platform", "description": "Safe AI role-play training for therapists. Practice with difficult client personas, get bias detection feedback, and build confidence without real-world risk.", "bgType": "plum", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-j7pv25f6> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-j7pv25f6> <div class="particle particle-1" data-astro-cid-j7pv25f6></div> <div class="particle particle-2" data-astro-cid-j7pv25f6></div> <div class="particle particle-3" data-astro-cid-j7pv25f6></div> <div class="particle particle-4" data-astro-cid-j7pv25f6></div> <div class="particle particle-5" data-astro-cid-j7pv25f6></div> </div> <!-- Hero Section --> <section class="relative py-6 lg:py-8 z-10 hero-section" data-astro-cid-j7pv25f6> <div class="relative container mx-auto px-4 max-w-6xl" data-astro-cid-j7pv25f6> <div class="w-full max-w-none" data-astro-cid-j7pv25f6> <!-- Status Badge --> <div class="mb-8 animate-breathe text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-3 px-6 py-3 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <span class="relative flex h-3 w-3" data-astro-cid-j7pv25f6> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" data-astro-cid-j7pv25f6></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" data-astro-cid-j7pv25f6></span> </span>
AI Training Simulator Active
` })} </div> <!-- Spinning Globe - Centered below badge --> <div class="flex justify-center mb-12" data-astro-cid-j7pv25f6> <div class="w-48 h-48 lg:w-56 lg:h-56 flex items-center justify-center" data-astro-cid-j7pv25f6> <!-- Spinning Globe Component - Clean, no box --> ${renderComponent($$result2, "SpinningGlobe", $$SpinningGlobe, { "data-astro-cid-j7pv25f6": true })} </div> </div> <!-- Power Headlines with Value Proposition --> <div class="text-center mb-20" data-astro-cid-j7pv25f6> <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide mb-4 leading-tight max-w-6xl mx-auto" data-astro-cid-j7pv25f6>
Practice Makes Perfect
<br data-astro-cid-j7pv25f6> <span class="text-green-400 golden-shimmer" data-astro-cid-j7pv25f6>But Practice Safely</span> </h1> <!-- Value Proposition Subheading --> <p class="text-base lg:text-lg text-green-200/90 font-medium mb-6 max-w-4xl mx-auto" data-astro-cid-j7pv25f6>
When you're learning to help people heal, every conversation matters. Practice with our AI clients first.
</p> <!-- Social Proof --> <div class="flex items-center justify-center gap-4 text-green-300/80 text-xs" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>💛💛💛💛💛</span> <span data-astro-cid-j7pv25f6>Loved by therapy schools everywhere</span> <span class="hidden sm:inline" data-astro-cid-j7pv25f6>•</span> <span class="hidden sm:inline" data-astro-cid-j7pv25f6>Your secrets stay safe</span> </div> </div> <!-- Two-column layout: Description/Buttons LEFT + Image RIGHT --> <div class="max-w-5xl mx-auto w-full" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20 w-full items-center" data-astro-cid-j7pv25f6> <!-- Left column: Benefits and CTA --> <div class="flex flex-col items-center text-center" data-astro-cid-j7pv25f6> <!-- Key Benefits List --> <ul class="space-y-4 mb-8 text-green-100 items-center flex flex-col" data-astro-cid-j7pv25f6> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <span class="text-green-400 text-lg" data-astro-cid-j7pv25f6>💝</span> <span class="text-base" data-astro-cid-j7pv25f6>Learn from clients who won't judge your mistakes</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <span class="text-green-400 text-lg" data-astro-cid-j7pv25f6>🌱</span> <span class="text-base" data-astro-cid-j7pv25f6>Try that new approach you read about in a safe space</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <span class="text-green-400 text-lg" data-astro-cid-j7pv25f6>🪞</span> <span class="text-base" data-astro-cid-j7pv25f6>See your blind spots before they hurt someone real</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <span class="text-green-400 text-lg" data-astro-cid-j7pv25f6>💪</span> <span class="text-base" data-astro-cid-j7pv25f6>Walk into your first tough session feeling ready</span> </li> </ul> <!-- Urgency-Driven CTA --> <div class="flex flex-col items-center space-y-4" data-astro-cid-j7pv25f6> <!-- Primary CTA with urgency --> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "w-full max-w-xs mx-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-gray-900 px-6 lg:px-10 py-4 lg:py-5 text-sm lg:text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Try it free (we believe in you) →
` })} <!-- Risk Reversal --> <div class="flex flex-col lg:flex-row gap-3 lg:gap-4 items-center w-full lg:w-auto justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", Button, { "variant": "outline", "size": "lg", "className": "w-full lg:w-auto px-4 lg:px-6 py-3 text-xs lg:text-sm font-semibold rounded-full border-2 border-green-400 text-green-300 hover:bg-green-400/10 transition-all duration-300", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
See how it works
` })} <div class="flex flex-col items-center w-full justify-center" data-astro-cid-j7pv25f6> <span class="block text-xs text-green-300/70 text-center" data-astro-cid-j7pv25f6>No pressure</span> <span class="block text-xs text-green-300/70 text-center" data-astro-cid-j7pv25f6>Made for people who care</span> </div> </div> </div> </div> <!-- Right column: Mental Health Therapy Image --> <div class="flex justify-center items-center" data-astro-cid-j7pv25f6> <div class="relative w-60 h-60 lg:w-72 lg:h-72" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-3xl border border-green-500/30 overflow-hidden" data-astro-cid-j7pv25f6> <!-- Mental Health Therapy Image --> <img src="/images/features/mental-health-therapy.jpg" alt="Professional mental health therapy session showing a therapist and client in a comfortable, safe counseling environment" class="w-full h-full object-cover rounded-2xl" loading="lazy" data-astro-cid-j7pv25f6> <!-- Subtle overlay to maintain visual coherence --> <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 pointer-events-none" data-astro-cid-j7pv25f6></div> </div> <!-- Floating particles around the image --> <div class="absolute -top-4 -left-4 w-4 h-4 bg-green-400/60 rounded-full animate-pulse" data-astro-cid-j7pv25f6></div> <div class="absolute -bottom-6 -right-6 w-6 h-6 bg-emerald-400/50 rounded-full animate-pulse" style="animation-delay: 1s;" data-astro-cid-j7pv25f6></div> <div class="absolute top-1/4 -right-8 w-3 h-3 bg-green-300/40 rounded-full animate-pulse" style="animation-delay: 2s;" data-astro-cid-j7pv25f6></div> </div> </div> </div> </div> <!-- Social Proof Stats --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16" data-astro-cid-j7pv25f6> ${heroStats.map((stat) => renderTemplate`<div class="text-center p-6 rounded-2xl border border-green-600/30 hover:border-green-400/50 transition-all duration-500 stat-card" data-astro-cid-j7pv25f6> <div class="text-2xl lg:text-3xl font-bold text-green-400 mb-2 organic-counter" data-astro-cid-j7pv25f6> ${stat.value} </div> <div class="text-xs lg:text-sm text-green-200/80 tracking-wide" data-astro-cid-j7pv25f6> ${stat.label} </div> </div>`)} </div> <!-- Testimonials Section --> <div class="max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <h3 class="text-lg lg:text-xl font-bold text-center text-green-100 mb-12" data-astro-cid-j7pv25f6>
Here's what people are saying (and we're pretty proud of it)
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${testimonials.map((testimonial) => renderTemplate`<div class="p-6 rounded-2xl border border-green-600/30 hover:border-green-400/50 transition-all duration-300" data-astro-cid-j7pv25f6> <div class="flex gap-1 mb-4" data-astro-cid-j7pv25f6> ${Array.from({ length: testimonial.rating }).map((_) => renderTemplate`<span class="text-green-400" data-astro-cid-j7pv25f6>⭐</span>`)} </div> <p class="text-sm text-green-100 mb-4 italic" data-astro-cid-j7pv25f6>"${testimonial.text}"</p> <div class="text-green-300" data-astro-cid-j7pv25f6> <div class="font-semibold text-sm" data-astro-cid-j7pv25f6>${testimonial.author}</div> <div class="text-xs text-green-300/70" data-astro-cid-j7pv25f6>${testimonial.role}</div> </div> </div>`)} </div> </div> </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-j7pv25f6> <div class="mx-auto max-w-2xl border-t border-green-500/30" data-astro-cid-j7pv25f6></div> </div> <!-- Security Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 relative" data-astro-cid-j7pv25f6> <div class="max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <!-- Section Header --> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <div class="mb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/20 border border-blue-400/40 text-blue-200 rounded-full", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <span class="text-blue-400" data-astro-cid-j7pv25f6>🛡️</span>
Military-Grade Security
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-8" data-astro-cid-j7pv25f6>
Your Data Remains
<span class="text-blue-400 golden-shimmer" data-astro-cid-j7pv25f6>
Your Data
</span> </h2> <p class="text-base lg:text-lg text-green-100/90 leading-relaxed max-w-4xl mx-auto" data-astro-cid-j7pv25f6>
We don't just meet HIPAA standards—we obliterate them. Your training sessions are protected by the same encryption that guards state secrets.
</p> </div> <!-- Security Features Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-astro-cid-j7pv25f6> <!-- Zero-Knowledge Encryption --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-600/30 hover:border-blue-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4 relative", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-blue-400" data-astro-cid-j7pv25f6>
🔐
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-base font-bold text-blue-100 tracking-wide mb-3", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
Zero-Knowledge Protection
` })} <div class="text-sm text-blue-400/90 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20" data-astro-cid-j7pv25f6>
Even we can't see your sessions
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-sm text-blue-200/80 leading-relaxed", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
Think of it like a safety deposit box where even the bank employees can't see inside. Your training conversations are encrypted before they ever leave your device. We literally cannot read them, even if we wanted to.
` })} ` })} ` })} <!-- Military-Level Encryption --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-600/30 hover:border-blue-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4 relative", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-blue-400" data-astro-cid-j7pv25f6>
🎖️
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-base font-bold text-blue-100 tracking-wide mb-3", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
Military-Grade Encryption
` })} <div class="text-sm text-blue-400/90 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20" data-astro-cid-j7pv25f6>
Same tech that protects state secrets
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-blue-200/80 leading-relaxed", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
We use AES-256 encryption—the gold standard trusted by governments worldwide. If someone intercepted your data, it would take longer than the age of the universe to crack it.
` })} ` })} ` })} <!-- FHE --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-600/30 hover:border-blue-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4 relative", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700 text-blue-400" data-astro-cid-j7pv25f6>
🧬
</div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-base font-bold text-blue-100 tracking-wide mb-3", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
Our Favorite: FHE
` })} <div class="text-sm text-blue-400/90 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20" data-astro-cid-j7pv25f6>
Computing on invisible data
</div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-blue-200/80 leading-relaxed", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`
Fully Homomorphic Encryption lets our AI analyze your sessions while they stay completely encrypted. It's like having a conversation through a one-way mirror that only shows insights, never the actual words.
` })} ` })} ` })} </div> <!-- Trust Statement --> <div class="text-center" data-astro-cid-j7pv25f6> <div class="bg-blue-500/10 border border-blue-400/30 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <div class="text-6xl mb-6 text-blue-400" data-astro-cid-j7pv25f6>🏛️</div> <h3 class="text-lg lg:text-xl font-bold text-blue-100 mb-4" data-astro-cid-j7pv25f6>
Beyond HIPAA. Beyond Compliance.
</h3> <p class="text-base text-blue-200/90 mb-6 leading-relaxed" data-astro-cid-j7pv25f6>
While others worry about meeting minimum standards, we've built a fortress. Your students practice in complete privacy, your institution stays protected, and you sleep soundly knowing that every conversation is locked away tighter than Fort Knox.
</p> <div class="flex items-center justify-center gap-6 text-blue-300/80 text-sm" data-astro-cid-j7pv25f6> <span class="flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="text-blue-400" data-astro-cid-j7pv25f6>✓</span>
SOC 2 Type II Certified
</span> <span class="hidden sm:inline" data-astro-cid-j7pv25f6>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="text-blue-400" data-astro-cid-j7pv25f6>✓</span>
FERPA Compliant
</span> <span class="hidden sm:inline" data-astro-cid-j7pv25f6>•</span> <span class="hidden sm:inline flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="text-blue-400" data-astro-cid-j7pv25f6>✓</span>
Zero Data Retention
</span> </div> </div> </div> </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-j7pv25f6> <div class="mx-auto max-w-2xl border-t border-blue-500/30" data-astro-cid-j7pv25f6></div> </div> <!-- Features Section --> <section class="py-12 lg:py-16 relative z-10" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 relative" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-2xl lg:text-4xl font-bold text-white mb-8" data-astro-cid-j7pv25f6>
Why This Actually
<span class="text-green-400 golden-shimmer" data-astro-cid-j7pv25f6>
Helps
</span> </h2> <p class="text-base text-green-100/90" data-astro-cid-j7pv25f6>
Because learning to heal people is hard enough without the fear of messing up
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${features.map((feature) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": `border border-green-600/30 hover:border-green-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4 relative", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <div${addAttribute(`text-5xl mb-4 group-hover:scale-110 transition-transform duration-700`, "class")} data-astro-cid-j7pv25f6> ${feature.icon} </div> ${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-base font-bold text-green-100 tracking-wide mb-3", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`${feature.title}` })}  <div class="text-sm text-green-400/90 font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20" data-astro-cid-j7pv25f6> ${feature.benefit} </div> ` })} ${renderComponent($$result3, "CardContent", $$CardContent, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-sm text-green-200/80 leading-relaxed", "data-astro-cid-j7pv25f6": true }, { "default": ($$result5) => renderTemplate`${feature.description}` })} ` })} ` })}`)} </div> </div> </section> <!-- Section Separator --> <div class="py-8" data-astro-cid-j7pv25f6> <div class="mx-auto max-w-2xl border-t border-green-500/30" data-astro-cid-j7pv25f6></div> </div> <!-- Final CTA Section --> <section class="py-6 lg:py-8 relative z-10" data-astro-cid-j7pv25f6> <div class="relative container mx-auto px-4 text-center" data-astro-cid-j7pv25f6> <div class="max-w-5xl mx-auto" data-astro-cid-j7pv25f6> <div class="rounded-3xl border border-green-500/40 p-12 lg:p-16" data-astro-cid-j7pv25f6> <!-- AI ornament --> <div class="flex justify-center mb-8" data-astro-cid-j7pv25f6> <div class="text-6xl text-green-400" data-astro-cid-j7pv25f6>🤖</div> </div> <!-- Urgency Badge --> <div class="mb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Badge", $$Badge, { "class": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/20 border border-red-400/40 text-red-200 rounded-full", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <span class="animate-pulse w-2 h-2 bg-red-400 rounded-full" data-astro-cid-j7pv25f6></span>
We can only onboard a few programs at a time
` })} </div> <h2 class="text-2xl lg:text-4xl font-bold text-green-100 mb-8" data-astro-cid-j7pv25f6>
Ready to Give Your Students
<br data-astro-cid-j7pv25f6> <span class="text-green-400 golden-shimmer" data-astro-cid-j7pv25f6>Something Better?</span> </h2> <p class="text-base lg:text-lg text-green-200/90 mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Your future therapists deserve to feel confident and prepared. Let's help them get there together.
</p> <!-- Risk-Free Guarantee --> <div class="bg-green-500/10 border border-green-400/30 rounded-2xl p-6 mb-8" data-astro-cid-j7pv25f6> <h4 class="text-sm font-bold text-green-200 mb-2" data-astro-cid-j7pv25f6>💛 Our Promise to You</h4> <p class="text-sm text-green-200/80" data-astro-cid-j7pv25f6>Try it with your program for 30 days. If your students aren't more confident, we'll refund every penny.</p> </div> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-gray-900 px-10 py-5 text-base font-bold rounded-full transform hover:scale-105 transition-all duration-300 w-auto", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Let's talk about your program →
` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-transparent border-2 border-green-400 text-green-300 hover:bg-green-400/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300 w-auto", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Watch a quick demo
` })} </div> <!-- Final social proof --> <p class="text-xs text-green-300/70" data-astro-cid-j7pv25f6>
💛 Loved by therapy schools everywhere • 🔒 Your data stays safe • 🎓 Made by therapists, for therapists
</p> </div> </div> </div> </section> </div> ` })} `;
}, "/root/pixel/src/pages/index.astro", void 0);

const $$file = "/root/pixel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
