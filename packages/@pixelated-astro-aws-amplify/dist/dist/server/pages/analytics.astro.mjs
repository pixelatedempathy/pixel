;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df0e3745-167b-416a-a853-89bc236b0007",e._sentryDebugIdIdentifier="sentry-dbid-df0e3745-167b-416a-a853-89bc236b0007")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { P as PrivacyDashboard } from '../chunks/PrivacyDashboard_DWV1h-Mu.mjs';
import AnalyticsDashboard from '../chunks/AnalyticsDashboardReact_plT2ZVg-.mjs';
import { C as ConversionDashboard } from '../chunks/ConversionDashboard_BF-vvJsU.mjs';
import { r as requirePageAuth } from '../chunks/serverAuth_DpRotyBD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await requirePageAuth(Astro2);
  const defaultConfig = {
    securityLevel: "maximum",
    encryptionEnabled: true,
    scenario: "analytics"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Analytics Dashboard", "description": "View and manage analytics data" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-8">Analytics Dashboard</h1> <div class="grid gap-8 md:grid-cols-[350px,1fr]">  <div class="space-y-4"> ${renderComponent($$result2, "PrivacyDashboard", PrivacyDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/analytics/PrivacyDashboard", "client:component-export": "PrivacyDashboard" })} <div class="bg-card rounded-lg border p-4"> <h3 class="text-lg font-semibold mb-3">Analytics Sections</h3> <ul class="space-y-2"> <li> <a href="/analytics" class="flex items-center py-2 px-3 bg-primary/10 text-primary rounded-md"> <span class="text-sm font-medium">Usage Analytics</span> </a> </li> <li> <a href="/analytics/conversions" class="flex items-center py-2 px-3 hover:bg-primary/10 text-foreground hover:text-primary rounded-md transition-colors"> <span class="text-sm font-medium">Conversion Tracking</span> </a> </li> <li> <a href="/admin/performance-dashboard" class="flex items-center py-2 px-3 hover:bg-primary/10 text-foreground hover:text-primary rounded-md transition-colors"> <span class="text-sm font-medium">Performance Metrics</span> </a> </li> </ul> </div> </div>  <div class="space-y-8"> <div class="bg-card rounded-lg border p-6"> <h2 class="text-2xl font-semibold mb-4">Usage Analytics</h2> ${renderComponent($$result2, "AnalyticsDashboard", AnalyticsDashboard, { "client:load": true, "messages": [], "securityLevel": defaultConfig.securityLevel, "encryptionEnabled": defaultConfig.encryptionEnabled, "scenario": defaultConfig.scenario, "client:component-hydration": "load", "client:component-path": "@/components/chat/AnalyticsDashboardReact", "client:component-export": "default" })} </div> <div class="bg-card rounded-lg border p-6"> <h2 class="text-2xl font-semibold mb-4">Conversion Overview</h2> <p class="text-muted-foreground mb-4">
Quick summary of recent conversion metrics. For detailed analysis,
            visit the
<a href="/analytics/conversions" class="text-primary hover:underline">Conversion Tracking Dashboard</a>.
</p> ${renderComponent($$result2, "ConversionDashboard", ConversionDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/analytics/ConversionDashboard", "client:component-export": "ConversionDashboard" })} </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/analytics/index.astro", void 0);

const $$file = "/root/pixel/src/pages/analytics/index.astro";
const $$url = "/analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
