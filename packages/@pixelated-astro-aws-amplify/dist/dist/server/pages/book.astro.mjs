;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a5b9af78-93e0-41df-b4d8-6ae37368a9a9",e._sentryDebugIdIdentifier="sentry-dbid-a5b9af78-93e0-41df-b4d8-6ae37368a9a9")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Book = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Book Your Session - Pixelated Empathy", "description": "Schedule your therapy session with our licensed professionals", "bgType": false, "showNavBar": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[80vh] flex items-center justify-center px-4"> <div class="max-w-2xl mx-auto text-center"> <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
Book Your Session
</h1> <p class="text-xl text-slate-600 dark:text-slate-300 mb-8">
Connect with licensed therapists for professional mental health care.
</p> <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"> <h2 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
Coming Soon
</h2> <p class="text-slate-600 dark:text-slate-400 mb-6">
Our booking system is currently under development. We'll be launching
          soon!
</p> <div class="space-y-4"> <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
Contact Us for Scheduling
</a> <div class="text-sm text-slate-500 dark:text-slate-400">
Or email us at: <a href="mailto:booking@pixelatedempathy.com" class="text-blue-600 dark:text-blue-400 hover:underline">booking@pixelatedempathy.com</a> </div> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/book.astro", void 0);

const $$file = "/root/pixel/src/pages/book.astro";
const $$url = "/book";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Book,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
