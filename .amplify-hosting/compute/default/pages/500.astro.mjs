;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="03503f68-3eb7-4afe-9b11-68e6b4fec84c",e._sentryDebugIdIdentifier="sentry-dbid-03503f68-3eb7-4afe-9b11-68e6b4fec84c")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  const title = "500 - Internal Server Error";
  const description = "Sorry, something went wrong on our end. Please try again later.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16 text-center"> <h1 class="text-4xl font-bold mb-4">500</h1> <p class="text-xl mb-8">Internal Server Error</p> <p>
We're experiencing some technical difficulties. Please try again later or
      contact support if the issue persists.
</p> <a href="/" class="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
Return Home
</a> </div> ` })}`;
}, "/root/pixel/src/pages/500.astro", void 0);

const $$file = "/root/pixel/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
