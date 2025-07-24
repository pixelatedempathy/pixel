;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="78d20692-dce6-4745-8f7b-66004bfeff35",e._sentryDebugIdIdentifier="sentry-dbid-78d20692-dce6-4745-8f7b-66004bfeff35")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
export { renderers } from '../../renderers.mjs';

const $$FheDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Placeholder Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-4"> <h1 class="text-2xl font-bold">Placeholder Page</h1> <p>
This page is temporarily replaced during the build process to avoid null
      byte issues.
</p> <p>The original page will be restored after the build.</p> </div> ` })}`;
}, "/root/pixel/src/pages/security/fhe-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/security/fhe-demo.astro";
const $$url = "/security/fhe-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FheDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
