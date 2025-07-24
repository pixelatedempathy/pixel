;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="38231190-4e35-4787-8e6e-2c93f1bc5fae",e._sentryDebugIdIdentifier="sentry-dbid-38231190-4e35-4787-8e6e-2c93f1bc5fae")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_t-wqd6mp.mjs';
import { r as requirePermission } from '../../../chunks/access-control_BvpmOJeX.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_Cutfhivd.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Usage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Usage;
  const checkPermission = requirePermission("read:admin");
  const permissionResponse = await checkPermission({
    cookies: Astro2.cookies,
    redirect: Astro2.redirect
  });
  if (permissionResponse) {
    return permissionResponse;
  }
  const period = Astro2.url.searchParams.get("period") || "daily";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Usage Statistics", "data-astro-cid-nk7ndqi3": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-container" data-astro-cid-nk7ndqi3> <div class="admin-header" data-astro-cid-nk7ndqi3> <h1 data-astro-cid-nk7ndqi3>AI Usage Statistics</h1> <p data-astro-cid-nk7ndqi3>Monitor AI usage across the platform.</p> </div> <div class="admin-actions" data-astro-cid-nk7ndqi3> <a href="/admin" class="btn btn-secondary" data-astro-cid-nk7ndqi3>Back to Admin Dashboard</a> <div class="period-selector" data-astro-cid-nk7ndqi3> <a href="?period=daily"${addAttribute(`btn ${period === "daily" ? "btn-primary" : "btn-outline"}`, "class")} data-astro-cid-nk7ndqi3>Daily</a> <a href="?period=weekly"${addAttribute(`btn ${period === "weekly" ? "btn-primary" : "btn-outline"}`, "class")} data-astro-cid-nk7ndqi3>Weekly</a> <a href="?period=monthly"${addAttribute(`btn ${period === "monthly" ? "btn-primary" : "btn-outline"}`, "class")} data-astro-cid-nk7ndqi3>Monthly</a> </div> </div> <div class="stats-grid" data-astro-cid-nk7ndqi3> <div class="stat-card" id="total-requests" data-astro-cid-nk7ndqi3> <h3 data-astro-cid-nk7ndqi3>Total Requests</h3> <div class="stat-value" data-astro-cid-nk7ndqi3>Loading...</div> <div class="stat-chart" data-astro-cid-nk7ndqi3></div> </div> <div class="stat-card" id="total-tokens" data-astro-cid-nk7ndqi3> <h3 data-astro-cid-nk7ndqi3>Total Tokens</h3> <div class="stat-value" data-astro-cid-nk7ndqi3>Loading...</div> <div class="stat-chart" data-astro-cid-nk7ndqi3></div> </div> <div class="stat-card" id="total-cost" data-astro-cid-nk7ndqi3> <h3 data-astro-cid-nk7ndqi3>Estimated Cost</h3> <div class="stat-value" data-astro-cid-nk7ndqi3>Loading...</div> <div class="stat-chart" data-astro-cid-nk7ndqi3></div> </div> <div class="stat-card" id="model-usage" data-astro-cid-nk7ndqi3> <h3 data-astro-cid-nk7ndqi3>Model Usage</h3> <div class="stat-chart-large" data-astro-cid-nk7ndqi3></div> </div> </div> <div class="data-table-container" data-astro-cid-nk7ndqi3> <h2 data-astro-cid-nk7ndqi3>Usage Details</h2> <table class="data-table" id="usage-table" data-astro-cid-nk7ndqi3> <thead data-astro-cid-nk7ndqi3> <tr data-astro-cid-nk7ndqi3> <th data-astro-cid-nk7ndqi3>Date</th> <th data-astro-cid-nk7ndqi3>Requests</th> <th data-astro-cid-nk7ndqi3>Tokens</th> <th data-astro-cid-nk7ndqi3>Cost</th> <th data-astro-cid-nk7ndqi3>Models Used</th> </tr> </thead> <tbody data-astro-cid-nk7ndqi3> <tr data-astro-cid-nk7ndqi3> <td colspan="5" class="loading-row" data-astro-cid-nk7ndqi3>Loading data...</td> </tr> </tbody> </table> </div> </main> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/ai/usage.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/root/pixel/src/pages/admin/ai/usage.astro?astro&type=script&index=1&lang.ts")} `;
}, "/root/pixel/src/pages/admin/ai/usage.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/ai/usage.astro";
const $$url = "/admin/ai/usage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Usage,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
