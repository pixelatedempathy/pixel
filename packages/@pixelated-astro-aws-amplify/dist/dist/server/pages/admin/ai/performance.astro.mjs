;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9577f9f6-bd07-4a9c-a073-921e957ad64c",e._sentryDebugIdIdentifier="sentry-dbid-9577f9f6-bd07-4a9c-a073-921e957ad64c")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, r as renderComponent } from '../../../chunks/astro/server_t-wqd6mp.mjs';
import 'clsx';
/* empty css                                             */
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_Cutfhivd.mjs';
import { v as verifyAdmin } from '../../../chunks/middleware_BSocMA7k.mjs';
export { renderers } from '../../../renderers.mjs';

const $$PerformanceDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 performance-dashboard" data-astro-cid-4do4c2fz> <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" data-astro-cid-4do4c2fz>
AI Performance Dashboard
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-astro-cid-4do4c2fz> <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg transition-all" data-astro-cid-4do4c2fz> <h3 class="text-lg font-medium mb-2 text-blue-700 dark:text-blue-300" data-astro-cid-4do4c2fz>
Requests
</h3> <p class="text-3xl font-bold text-blue-800 dark:text-blue-200" data-astro-cid-4do4c2fz>2,547</p> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-4do4c2fz>Last 7 days</p> <div class="mt-2 h-1 w-full bg-blue-100 dark:bg-blue-800" data-astro-cid-4do4c2fz> <div class="h-1 bg-blue-500 dark:bg-blue-400" style="width: 75%;" data-astro-cid-4do4c2fz></div> </div> </div> <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg transition-all" data-astro-cid-4do4c2fz> <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300" data-astro-cid-4do4c2fz>
Avg Response Time
</h3> <p class="text-3xl font-bold text-green-800 dark:text-green-200" data-astro-cid-4do4c2fz>312ms</p> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-4do4c2fz>Last 7 days</p> <div class="mt-2 h-1 w-full bg-green-100 dark:bg-green-800" data-astro-cid-4do4c2fz> <div class="h-1 bg-green-500 dark:bg-green-400" style="width: 60%;" data-astro-cid-4do4c2fz></div> </div> </div> <div class="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg transition-all" data-astro-cid-4do4c2fz> <h3 class="text-lg font-medium mb-2 text-purple-700 dark:text-purple-300" data-astro-cid-4do4c2fz>
Token Usage
</h3> <p class="text-3xl font-bold text-purple-800 dark:text-purple-200" data-astro-cid-4do4c2fz>
1.2M
</p> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-4do4c2fz>Last 7 days</p> <div class="mt-2 h-1 w-full bg-purple-100 dark:bg-purple-800" data-astro-cid-4do4c2fz> <div class="h-1 bg-purple-500 dark:bg-purple-400" style="width: 85%;" data-astro-cid-4do4c2fz></div> </div> </div> </div> <div class="mb-8" data-astro-cid-4do4c2fz> <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white" data-astro-cid-4do4c2fz>
Performance Over Time
</h3> <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center skeleton-container" data-astro-cid-4do4c2fz> <div class="skeleton-chart" aria-hidden="true" data-astro-cid-4do4c2fz> <div class="skeleton-line" data-astro-cid-4do4c2fz></div> <div class="skeleton-line" data-astro-cid-4do4c2fz></div> <div class="skeleton-line" data-astro-cid-4do4c2fz></div> <div class="skeleton-line" data-astro-cid-4do4c2fz></div> </div> <p class="text-gray-500 dark:text-gray-400 sr-only" data-astro-cid-4do4c2fz>
Chart placeholder - Historical performance data
</p> </div> </div> <div data-astro-cid-4do4c2fz> <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white" data-astro-cid-4do4c2fz>
Model Comparison
</h3> <div class="overflow-x-auto" data-astro-cid-4do4c2fz> <table class="min-w-full bg-white dark:bg-gray-800 border-collapse" data-astro-cid-4do4c2fz> <thead data-astro-cid-4do4c2fz> <tr class="bg-gray-100 dark:bg-gray-700" data-astro-cid-4do4c2fz> <th class="py-3 px-4 text-left text-gray-700 dark:text-gray-300" data-astro-cid-4do4c2fz>Model</th> <th class="py-3 px-4 text-left text-gray-700 dark:text-gray-300" data-astro-cid-4do4c2fz>Avg Response Time</th> <th class="py-3 px-4 text-left text-gray-700 dark:text-gray-300" data-astro-cid-4do4c2fz>Tokens/Request</th> <th class="py-3 px-4 text-left text-gray-700 dark:text-gray-300" data-astro-cid-4do4c2fz>Success Rate</th> </tr> </thead> <tbody data-astro-cid-4do4c2fz> <tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" data-astro-cid-4do4c2fz> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>Mixtral-8x7B</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>285ms</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>1,245</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>99.8%</td> </tr> <tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" data-astro-cid-4do4c2fz> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>Llama-3-70B</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>312ms</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>1,312</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>99.7%</td> </tr> <tr class="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" data-astro-cid-4do4c2fz> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>Qwen-1.5-72B</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>325ms</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>1,185</td> <td class="py-3 px-4 text-gray-800 dark:text-gray-300" data-astro-cid-4do4c2fz>99.5%</td> </tr> </tbody> </table> </div> </div> </div> `;
}, "/root/pixel/src/components/admin/PerformanceDashboard.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Performance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Performance;
  const context = {
    session: Astro2.locals.session || null,
    securityVerification: void 0,
    hipaaCompliance: void 0
  };
  const response = await verifyAdmin(Astro2.request, context);
  if (response) return response;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Performance" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-6"> <div class="flex justify-between items-center mb-6"> <div> <h1 class="text-3xl font-bold">AI Performance Dashboard</h1> <p class="text-muted-foreground">
Monitor and analyze AI service performance metrics
</p> </div> </div> ${renderComponent($$result2, "PerformanceDashboard", $$PerformanceDashboard, {})} </div> ` })}`;
}, "/root/pixel/src/pages/admin/ai/performance.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/ai/performance.astro";
const $$url = "/admin/ai/performance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Performance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
