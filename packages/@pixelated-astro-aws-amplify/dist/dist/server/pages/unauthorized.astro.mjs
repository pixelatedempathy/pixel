;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="062a466e-fe7f-4bfa-b892-9298ce16c7b0",e._sentryDebugIdIdentifier="sentry-dbid-062a466e-fe7f-4bfa-b892-9298ce16c7b0")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Unauthorized = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Unauthorized - Pixelated Empathy", "data-astro-cid-dtqszox4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-16" data-astro-cid-dtqszox4> <div class="max-w-2xl mx-auto text-center" data-astro-cid-dtqszox4> <h1 class="text-4xl font-bold mb-4" data-astro-cid-dtqszox4>Access Denied</h1> <div class="bg-yellow-900/20 border border-yellow-400/30 text-yellow-200 rounded-lg p-6 mb-8" data-astro-cid-dtqszox4> <p class="text-lg mb-2" data-astro-cid-dtqszox4>
You don't have permission to access this page.
</p> <p data-astro-cid-dtqszox4>
Please contact your administrator if you believe this is an error.
</p> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8" data-astro-cid-dtqszox4> <a href="/" class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-green-500" data-astro-cid-dtqszox4>
Go to Home
</a> <a href="/dashboard" class="inline-flex items-center justify-center px-6 py-3 border border-slate-600 rounded-md shadow-sm text-base font-medium text-slate-200 bg-slate-700/50 hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-green-500" data-astro-cid-dtqszox4>
Back to Dashboard
</a> </div> </div> </main> ` })} `;
}, "/root/pixel/src/pages/unauthorized.astro", void 0);

const $$file = "/root/pixel/src/pages/unauthorized.astro";
const $$url = "/unauthorized";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Unauthorized,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
