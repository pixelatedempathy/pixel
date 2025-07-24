;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fbe1f3fc-c60a-4c79-a9f4-036741a58ba2",e._sentryDebugIdIdentifier="sentry-dbid-fbe1f3fc-c60a-4c79-a9f4-036741a58ba2")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Card } from '../../chunks/Card_C_GhxMHY.mjs';
export { renderers } from '../../renderers.mjs';

const $$CompatibilityDashboard = createComponent(($$result, $$props, $$slots) => {
  const mockPolyfillData = {
    recentReports: [
      {
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        polyfills: ["WebAnimations", "ResizeObserver"],
        timestamp: "2025-04-12T15:23:45Z"
      },
      {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
        polyfills: ["CustomElements", "WebAnimations"],
        timestamp: "2025-04-12T15:20:12Z"
      },
      {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        polyfills: [],
        timestamp: "2025-04-12T15:18:33Z"
      }
    ]
  };
  function parseUserAgent(ua) {
    let browser = "Unknown";
    let device = "Unknown";
    if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Safari")) browser = "Safari";
    else if (ua.includes("Edge")) browser = "Edge";
    if (ua.includes("iPhone")) device = "iPhone";
    else if (ua.includes("iPad")) device = "iPad";
    else if (ua.includes("Android")) device = "Android";
    else if (ua.includes("Windows")) device = "Windows";
    else if (ua.includes("Mac OS X")) device = "Mac";
    return `${browser} on ${device}`;
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Browser Compatibility Dashboard", "description": "Monitor browser compatibility and polyfill usage", "showNavBar": true, "showFooter": true, "centered": false, "contentClass": "pt-20 pb-10 px-4 flex-grow" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto max-w-7xl"> <h1 class="text-3xl font-bold mb-8 text-center">
Browser Compatibility Dashboard
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <!-- Polyfill Usage Overview Card --> ${renderComponent($$result2, "Card", $$Card, { "title": "Polyfill Usage Overview" }, { "default": ($$result3) => renderTemplate` <div class="p-4"> <canvas id="polyfillUsageChart" height="250"></canvas> </div> ` })} <!-- Browser Distribution Card --> ${renderComponent($$result2, "Card", $$Card, { "title": "Browser Distribution" }, { "default": ($$result3) => renderTemplate` <div class="p-4"> <canvas id="browserDistributionChart" height="250"></canvas> </div> ` })} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <!-- Polyfill Usage Trend Card --> ${renderComponent($$result2, "Card", $$Card, { "title": "Polyfill Usage Trend" }, { "default": ($$result3) => renderTemplate` <div class="p-4"> <canvas id="polyfillTrendChart" height="250"></canvas> </div> ` })} <!-- Device Type Distribution Card --> ${renderComponent($$result2, "Card", $$Card, { "title": "Device Type Distribution" }, { "default": ($$result3) => renderTemplate` <div class="p-4"> <canvas id="deviceTypeChart" height="250"></canvas> </div> ` })} </div> <!-- Recent Polyfill Reports Card --> ${renderComponent($$result2, "Card", $$Card, { "title": "Recent Polyfill Reports" }, { "default": ($$result3) => renderTemplate` <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-gray-800"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Browser/Device</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Polyfills Used</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Timestamp</th> </tr> </thead> <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"> ${mockPolyfillData.recentReports.map((report) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${parseUserAgent(report.userAgent)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${report.polyfills.length > 0 ? report.polyfills.join(", ") : "None"} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${formatDate(report.timestamp)} </td> </tr>`)} </tbody> </table> </div> ` })} <div class="mt-8 text-center"> <p class="text-sm text-gray-500 dark:text-gray-400">
Data is updated daily. Last updated: 2025-04-12 23:59:59 UTC
</p> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/compatibility-dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/compatibility-dashboard.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/compatibility-dashboard.astro";
const $$url = "/admin/compatibility-dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CompatibilityDashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
