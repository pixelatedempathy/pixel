;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cec627bc-a46e-4e64-b45f-6741fa260ffb",e._sentryDebugIdIdentifier="sentry-dbid-cec627bc-a46e-4e64-b45f-6741fa260ffb")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$Card } from '../../chunks/Card_DkLu_rH_.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_B-WlwD0P.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_Ds6nOAL0.mjs';
import { $ as $$Badge } from '../../chunks/Badge_2usZ2CMb.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$DemoAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Demo Analytics Dashboard", "description": "Real-time analytics and A/B testing results for ClinicalVault Trainer demo", "bgType": "plum" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen text-white py-8"> <div class="container mx-auto px-4"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-4xl lg:text-5xl font-bold mb-6">
Demo Analytics Dashboard
<span class="text-purple-400 block mt-2">Real-Time A/B Testing Results</span> </h1> ${renderComponent($$result2, "Badge", $$Badge, { "className": "inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full" }, { "default": async ($$result3) => renderTemplate` <span class="relative flex h-3 w-3"> <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span>
Live Data Stream Active
` })} </div> <!-- Real-time Stats --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-600/30 bg-blue-900/20" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-blue-300 text-lg" }, { "default": async ($$result5) => renderTemplate`Total Sessions` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div id="total-sessions" class="text-3xl font-bold text-blue-400">
0
</div> <div class="text-sm text-blue-200/80">Last 24 hours</div> ` })} ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 bg-green-900/20" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-green-300 text-lg" }, { "default": async ($$result5) => renderTemplate`Conversion Rate` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div id="conversion-rate" class="text-3xl font-bold text-green-400">
0%
</div> <div class="text-sm text-green-200/80">CTA clicks / Page views</div> ` })} ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "border border-purple-600/30 bg-purple-900/20" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-purple-300 text-lg" }, { "default": async ($$result5) => renderTemplate`Avg. Time to CTA` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div id="avg-time-cta" class="text-3xl font-bold text-purple-400">
0s
</div> <div class="text-sm text-purple-200/80">Time to first click</div> ` })} ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "border border-yellow-600/30 bg-yellow-900/20" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "className": "pb-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-yellow-300 text-lg" }, { "default": async ($$result5) => renderTemplate`Avg. Scroll Depth` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div id="avg-scroll-depth" class="text-3xl font-bold text-yellow-400">
0%
</div> <div class="text-sm text-yellow-200/80">Page engagement</div> ` })} ` })} </div> <!-- A/B Test Results --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> <!-- Variant Performance --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-purple-600/30 bg-slate-900/50" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-purple-100" }, { "default": async ($$result5) => renderTemplate`A/B Test Performance` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-purple-200/80" }, { "default": async ($$result5) => renderTemplate`
Conversion rates by variant
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div class="space-y-4"> <div id="variant-a-stats" class="bg-slate-800/50 rounded-lg p-4"> <div class="flex justify-between items-center mb-2"> <span class="text-purple-300 font-medium">Variant A: "HIPAA Made Impossible"</span> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-purple-500/20 text-purple-300" }, { "default": async ($$result5) => renderTemplate`Original` })} </div> <div class="grid grid-cols-3 gap-4 text-sm"> <div> <div class="text-purple-400 font-bold" id="variant-a-sessions">
0
</div> <div class="text-purple-200/70">Sessions</div> </div> <div> <div class="text-purple-400 font-bold" id="variant-a-conversions">
0
</div> <div class="text-purple-200/70">Conversions</div> </div> <div> <div class="text-purple-400 font-bold" id="variant-a-rate">
0%
</div> <div class="text-purple-200/70">Rate</div> </div> </div> </div> <div id="variant-b-stats" class="bg-slate-800/50 rounded-lg p-4"> <div class="flex justify-between items-center mb-2"> <span class="text-green-300 font-medium">Variant B: "Train Without Risk"</span> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-green-500/20 text-green-300" }, { "default": async ($$result5) => renderTemplate`Test` })} </div> <div class="grid grid-cols-3 gap-4 text-sm"> <div> <div class="text-green-400 font-bold" id="variant-b-sessions">
0
</div> <div class="text-green-200/70">Sessions</div> </div> <div> <div class="text-green-400 font-bold" id="variant-b-conversions">
0
</div> <div class="text-green-200/70">Conversions</div> </div> <div> <div class="text-green-400 font-bold" id="variant-b-rate">
0%
</div> <div class="text-green-200/70">Rate</div> </div> </div> </div> <div id="variant-c-stats" class="bg-slate-800/50 rounded-lg p-4"> <div class="flex justify-between items-center mb-2"> <span class="text-blue-300 font-medium">Variant C: "Practice Crisis Safely"</span> ${renderComponent($$result4, "Badge", $$Badge, { "className": "bg-blue-500/20 text-blue-300" }, { "default": async ($$result5) => renderTemplate`Test` })} </div> <div class="grid grid-cols-3 gap-4 text-sm"> <div> <div class="text-blue-400 font-bold" id="variant-c-sessions">
0
</div> <div class="text-blue-200/70">Sessions</div> </div> <div> <div class="text-blue-400 font-bold" id="variant-c-conversions">
0
</div> <div class="text-blue-200/70">Conversions</div> </div> <div> <div class="text-blue-400 font-bold" id="variant-c-rate">
0%
</div> <div class="text-blue-200/70">Rate</div> </div> </div> </div> </div> ` })} ` })} <!-- Statistical Significance --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-orange-600/30 bg-slate-900/50" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-orange-100" }, { "default": async ($$result5) => renderTemplate`Statistical Significance` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-orange-200/80" }, { "default": async ($$result5) => renderTemplate`
Test confidence and recommendations
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div class="space-y-4"> <div class="bg-slate-800/50 rounded-lg p-4"> <div class="text-orange-300 font-medium mb-2">Test Status</div> <div id="test-status" class="text-orange-400 font-bold">
Collecting Data...
</div> <div class="text-sm text-orange-200/70 mt-1">
Minimum 100 conversions needed
</div> </div> <div class="bg-slate-800/50 rounded-lg p-4"> <div class="text-orange-300 font-medium mb-2">
Confidence Level
</div> <div id="confidence-level" class="text-orange-400 font-bold">
--
</div> <div class="text-sm text-orange-200/70 mt-1">
95% confidence required
</div> </div> <div class="bg-slate-800/50 rounded-lg p-4"> <div class="text-orange-300 font-medium mb-2">
Recommendation
</div> <div id="recommendation" class="text-orange-400 font-bold">
Continue Testing
</div> <div class="text-sm text-orange-200/70 mt-1">
Based on current data
</div> </div> </div> ` })} ` })} </div> <!-- Event Timeline --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-gray-600/30 bg-slate-900/50 mb-12" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-gray-100" }, { "default": async ($$result5) => renderTemplate`Live Event Stream` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-gray-200/80" }, { "default": async ($$result5) => renderTemplate`
Real-time user interactions
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div id="event-timeline" class="space-y-2 max-h-96 overflow-y-auto"> <div class="text-gray-400 text-center py-8">
Waiting for events...
</div> </div> ` })} ` })} <!-- Conversion Funnel --> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-indigo-600/30 bg-slate-900/50" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, { "className": "text-indigo-100" }, { "default": async ($$result5) => renderTemplate`Conversion Funnel` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "className": "text-indigo-200/80" }, { "default": async ($$result5) => renderTemplate`
User journey through demo page
` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": async ($$result4) => renderTemplate` <div class="space-y-4"> <div class="flex items-center justify-between bg-slate-800/50 rounded-lg p-4"> <span class="text-indigo-300">Page Views</span> <div class="flex items-center gap-4"> <div id="funnel-page-views" class="text-indigo-400 font-bold">
0
</div> <div class="w-32 bg-slate-700 rounded-full h-2"> <div id="funnel-page-views-bar" class="bg-indigo-500 h-2 rounded-full" style="width: 100%"></div> </div> <span class="text-indigo-300 text-sm">100%</span> </div> </div> <div class="flex items-center justify-between bg-slate-800/50 rounded-lg p-4"> <span class="text-purple-300">Demo Interactions</span> <div class="flex items-center gap-4"> <div id="funnel-demo-interactions" class="text-purple-400 font-bold">
0
</div> <div class="w-32 bg-slate-700 rounded-full h-2"> <div id="funnel-demo-interactions-bar" class="bg-purple-500 h-2 rounded-full" style="width: 0%"></div> </div> <span id="funnel-demo-interactions-pct" class="text-purple-300 text-sm">0%</span> </div> </div> <div class="flex items-center justify-between bg-slate-800/50 rounded-lg p-4"> <span class="text-green-300">CTA Clicks</span> <div class="flex items-center gap-4"> <div id="funnel-cta-clicks" class="text-green-400 font-bold">
0
</div> <div class="w-32 bg-slate-700 rounded-full h-2"> <div id="funnel-cta-clicks-bar" class="bg-green-500 h-2 rounded-full" style="width: 0%"></div> </div> <span id="funnel-cta-clicks-pct" class="text-green-300 text-sm">0%</span> </div> </div> </div> ` })} ` })} </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/demo-analytics.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/demo-analytics.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/demo-analytics.astro";
const $$url = "/admin/demo-analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DemoAnalytics,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
