;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="51b93617-f2ab-4169-b11c-899e15fe3afa",e._sentryDebugIdIdentifier="sentry-dbid-51b93617-f2ab-4169-b11c-899e15fe3afa")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Therapists = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Meet Our Therapists - Pixelated Empathy", "description": "Connect with our licensed mental health professionals", "bgType": false, "showNavBar": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[80vh] px-4 py-16"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
Meet Our Therapists
</h1> <p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
Our team of licensed mental health professionals is here to support
          your journey to wellness.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <!-- Sample therapist cards --> ${[1, 2, 3, 4, 5, 6].map((id) => renderTemplate`<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"> <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"> <span class="text-white text-2xl font-bold">Dr</span> </div> <h3 class="text-xl font-semibold text-slate-900 dark:text-white text-center mb-2">
Dr. Therapist ${id} </h3> <p class="text-slate-600 dark:text-slate-400 text-center mb-4">
Licensed Clinical Psychologist
</p> <div class="space-y-2 text-sm text-slate-500 dark:text-slate-400"> <div>• Specializes in anxiety and depression</div> <div>• 10+ years of experience</div> <div>• Licensed in multiple states</div> </div> <button class="w-full mt-4 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
View Profile
</button> </div>`)} </div> <div class="text-center"> <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"> <h2 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
Ready to Get Started?
</h2> <p class="text-slate-600 dark:text-slate-400 mb-6">
Find the right therapist for your needs and begin your journey to
            wellness.
</p> <a href="/book" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
Book Your First Session
</a> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/therapists.astro", void 0);

const $$file = "/root/pixel/src/pages/therapists.astro";
const $$url = "/therapists";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Therapists,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
