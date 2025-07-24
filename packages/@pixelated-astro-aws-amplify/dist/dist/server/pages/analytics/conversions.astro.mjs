;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6cb874ff-80c8-48f7-9e27-731bf4b21c7a",e._sentryDebugIdIdentifier="sentry-dbid-6cb874ff-80c8-48f7-9e27-731bf4b21c7a")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { C as ConversionDashboard } from '../../chunks/ConversionDashboard_CRzK-j5l.mjs';
/* empty css                                          */
import { P as PrivacyDashboard } from '../../chunks/PrivacyDashboard_cjzaSL3c.mjs';
import { r as requirePageAuth } from '../../chunks/serverAuth_4gmt5n21.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$AnalyticsConversionDashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnalyticsConversionDashboard;
  const {
    title = "Conversion Tracking",
    description = "Track and analyze conversion events across your application",
    showHeader = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="conversion-dashboard w-full" data-astro-cid-nnuij3dc> ${showHeader && renderTemplate`<div class="mb-6" data-astro-cid-nnuij3dc> <h2 class="text-2xl font-bold" data-astro-cid-nnuij3dc>${title}</h2> <p class="text-gray-600 dark:text-gray-400 mt-1" data-astro-cid-nnuij3dc>${description}</p> </div>`} ${renderComponent($$result, "ConversionDashboard", ConversionDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/analytics/ConversionDashboard", "client:component-export": "ConversionDashboard", "data-astro-cid-nnuij3dc": true })} </div> `;
}, "/root/pixel/src/components/analytics/AnalyticsConversionDashboard.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Conversions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Conversions;
  await requirePageAuth(Astro2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Conversion Tracking", "description": "Track and analyze user conversions" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-8">Conversion Analytics</h1> <div class="grid gap-8 md:grid-cols-[350px,1fr]"> <!-- Privacy Controls Sidebar --> <div class="space-y-4"> ${renderComponent($$result2, "PrivacyDashboard", PrivacyDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/analytics/PrivacyDashboard", "client:component-export": "PrivacyDashboard" })} </div> <!-- Main Analytics Content --> <div class="space-y-8"> <div class="bg-card rounded-lg border p-6"> ${renderComponent($$result2, "AnalyticsConversionDashboard", $$AnalyticsConversionDashboard, { "showHeader": false })} </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/analytics/conversions.astro", void 0);

const $$file = "/root/pixel/src/pages/analytics/conversions.astro";
const $$url = "/analytics/conversions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Conversions,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
