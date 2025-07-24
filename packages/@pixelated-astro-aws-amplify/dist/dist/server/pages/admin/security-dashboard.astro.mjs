;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="46a7bcc4-8cdf-4203-806c-d68778435a1e",e._sentryDebugIdIdentifier="sentry-dbid-46a7bcc4-8cdf-4203-806c-d68778435a1e")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
export { renderers } from '../../renderers.mjs';

const $$SecurityDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Placeholder Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-4"> <h1 class="text-2xl font-bold">Placeholder Page</h1> <p>
This page is temporarily replaced during the build process to avoid null
      byte issues.
</p> <p>The original page will be restored after the build.</p> </div> ` })}`;
}, "/root/pixel/src/pages/admin/security-dashboard.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security-dashboard.astro";
const $$url = "/admin/security-dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecurityDashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
