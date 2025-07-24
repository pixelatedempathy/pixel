;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9fdd3ce4-42a1-4453-8ce0-646f6dcb7c3f",e._sentryDebugIdIdentifier="sentry-dbid-9fdd3ce4-42a1-4453-8ce0-646f6dcb7c3f")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
export { renderers } from '../renderers.mjs';

const $$Custom404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404 - Page Not Found";
  const description = "Sorry, the page you are looking for could not be found.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16 text-center"> <h1 class="text-4xl font-bold mb-4">404</h1> <p class="text-xl mb-8">Page not found</p> <p>The page you're looking for doesn't exist or has been moved.</p> <a href="/" class="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
Return Home
</a> </div> ` })}`;
}, "/root/pixel/src/pages/custom-404.astro", void 0);

const $$file = "/root/pixel/src/pages/custom-404.astro";
const $$url = "/custom-404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Custom404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
