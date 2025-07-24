;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2be1cf22-2385-415b-92c9-544c1a47806b",e._sentryDebugIdIdentifier="sentry-dbid-2be1cf22-2385-415b-92c9-544c1a47806b")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { v as verifyAdmin } from '../../chunks/middleware_CXoLDaOh.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$FheDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FheDashboard;
  const context = {
    session: Astro2.locals.session || null,
    securityVerification: void 0,
    hipaaCompliance: void 0
  };
  const response = await verifyAdmin(Astro2.request, context);
  if (response) return response;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "FHE Dashboard", "data-astro-cid-nv2x4md6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8" data-astro-cid-nv2x4md6> <h1 class="text-3xl font-bold mb-8" data-astro-cid-nv2x4md6>
Fully Homomorphic Encryption Dashboard
</h1> ${renderTemplate`<div class="bg-white shadow rounded-lg p-6 text-center" data-astro-cid-nv2x4md6> <p class="text-gray-500" data-astro-cid-nv2x4md6>No FHE verification data available</p> </div>`} </div> ` })} `;
}, "/root/pixel/src/pages/admin/fhe-dashboard.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/fhe-dashboard.astro";
const $$url = "/admin/fhe-dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FheDashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
