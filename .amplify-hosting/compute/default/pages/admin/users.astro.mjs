;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="657e85f7-95d3-4959-8d95-4b20e1394eac",e._sentryDebugIdIdentifier="sentry-dbid-657e85f7-95d3-4959-8d95-4b20e1394eac")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Users = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Placeholder Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-4"> <h1 class="text-2xl font-bold">Placeholder Page</h1> <p>
This page is temporarily replaced during the build process to avoid null
      byte issues.
</p> <p>The original page will be restored after the build.</p> </div> ` })}`;
}, "/root/pixel/src/pages/admin/users.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/users.astro";
const $$url = "/admin/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
