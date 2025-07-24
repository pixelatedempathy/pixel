;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aaa65f40-7b4a-41c2-a038-f60781160a24",e._sentryDebugIdIdentifier="sentry-dbid-aaa65f40-7b4a-41c2-a038-f60781160a24")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DQ9SjUHy.mjs';
import { $ as $$ClientRouter } from '../../chunks/ClientRouter_Dxjf8yEn.mjs';
import { v as verifyAdmin } from '../../chunks/middleware_BCvQaeLy.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$BiasDetection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BiasDetection;
  const context = {
    session: Astro2.locals.session || null,
    securityVerification: void 0,
    hipaaCompliance: void 0
  };
  const response = await verifyAdmin(Astro2.request, context);
  if (response) return response;
  const pageTitle = "Bias Detection Dashboard";
  const pageDescription = "Monitor and analyze bias detection in therapeutic training sessions";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": pageTitle, "description": pageDescription, "activeItem": "bias-detection", "data-astro-cid-hkm3wgv6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ClientRouter", $$ClientRouter, { "data-astro-cid-hkm3wgv6": true })} ${maybeRenderHead()}<div class="container mx-auto px-4 py-6" data-astro-cid-hkm3wgv6> <div class="flex justify-between items-center mb-6" data-astro-cid-hkm3wgv6> <div data-astro-cid-hkm3wgv6> <h1 class="text-3xl font-bold text-gray-900 dark:text-white" data-astro-cid-hkm3wgv6>
Bias Detection Dashboard
</h1> <p class="text-muted-foreground mt-2" data-astro-cid-hkm3wgv6>
Real-time monitoring and analytics for bias detection in therapeutic
          training sessions
</p> </div> </div> <!-- Main Dashboard Component --> <div id="bias-dashboard" data-testid="bias-dashboard" class="bias-dashboard-container" data-astro-cid-hkm3wgv6> <!-- React component will be mounted here --> </div> </div> ${renderScript($$result2, "/root/pixel/src/pages/admin/bias-detection.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/root/pixel/src/pages/admin/bias-detection.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/bias-detection.astro";
const $$url = "/admin/bias-detection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BiasDetection,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
