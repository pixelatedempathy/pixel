;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c71af67f-b52a-4e3f-b49f-f8ea8ad5eb94",e._sentryDebugIdIdentifier="sentry-dbid-c71af67f-b52a-4e3f-b49f-f8ea8ad5eb94")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_CqouZpRI.mjs';
import 'clsx';
import { g as getMonitoringConfig } from '../../chunks/config_CWKIXPLn.mjs';
/* empty css                                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$RealUserMonitoring$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RealUserMonitoring$1;
  const {
    title = "Real User Monitoring",
    description = "Monitor real user performance metrics",
    refreshInterval = 6e4
  } = Astro2.props;
  getMonitoringConfig();
  return renderTemplate`${maybeRenderHead()}<div class="rum-dashboard bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden" data-testid="astro-component" data-astro-cid-jf7q25wa> <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa> <h2 class="text-xl font-semibold text-gray-800 dark:text-white" data-astro-cid-jf7q25wa> ${title} </h2> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-jf7q25wa>${description}</p> </div> <button id="refresh-btn" class="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-200 rounded text-sm" data-astro-cid-jf7q25wa>
Refresh Now
</button> </div> <div class="metrics-container p-4" data-astro-cid-jf7q25wa> <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-jf7q25wa> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
Loading Performance
</h3> <div id="loading-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>TTFB:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>FCP:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>LCP:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>Speed Index:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
Interactivity
</h3> <div id="interactivity-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>FID:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>TBT:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>TTI:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
Visual Stability
</h3> <div id="stability-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>CLS:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
User Demographics
</h3> <div id="demographics-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>Devices:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>Browsers:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>Countries:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
Resource Metrics
</h3> <div id="resource-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>JS Size:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>CSS Size:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>Requests:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> <div class="metric-card bg-gray-50 dark:bg-gray-700 p-3 rounded-lg" data-astro-cid-jf7q25wa> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-astro-cid-jf7q25wa>
Error Rates
</h3> <div id="error-metrics" data-astro-cid-jf7q25wa> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>JS Errors:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>API Errors:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> <div data-astro-cid-jf7q25wa><span data-astro-cid-jf7q25wa>404s:</span> <span data-astro-cid-jf7q25wa>Loading...</span></div> </div> </div> </div> <div class="mt-6" data-astro-cid-jf7q25wa> <span id="last-updated" data-astro-cid-jf7q25wa>Last updated: Never</span> <button id="refresh-btn" data-astro-cid-jf7q25wa>Refresh Now</button> </div> </div> </div> `;
}, "/root/pixel/src/components/monitoring/RealUserMonitoring.astro", void 0);

const $$RealUserMonitoring = createComponent(($$result, $$props, $$slots) => {
  const config = getMonitoringConfig();
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Real User Monitoring | Admin Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-4 py-8 mx-auto"> <header class="mb-8"> <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
Real User Monitoring
</h1> <p class="mt-2 text-gray-600 dark:text-gray-400">
Monitor actual user experiences across devices, browsers, and regions.
</p> </header> <div class="mb-8"> ${renderComponent($$result2, "RealUserMonitoringComponent", $$RealUserMonitoring$1, { "title": "Performance Overview", "description": "Core Web Vitals and performance metrics across all users", "refreshInterval": 3e4 })} </div> <div class="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"> <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
Understanding Real User Monitoring
</h2> <div class="prose dark:prose-invert max-w-none"> <p>
Real User Monitoring (RUM) collects performance data from actual users
          of your application. Unlike synthetic testing, RUM provides insights
          into real-world experiences across different:
</p> <ul class="list-disc ml-6 mt-2 mb-4"> <li>Device types and capabilities</li> <li>Network conditions</li> <li>Geographic locations</li> <li>Browsers and operating systems</li> </ul> <h3 class="text-lg font-medium mt-4 mb-2">Key Benefits</h3> <ol class="list-decimal ml-6 mb-4"> <li> <strong>Real-world data:</strong> See how your site performs for actual
            users
</li> <li> <strong>Prioritize improvements:</strong> Focus on fixing issues affecting
            the most users
</li> <li> <strong>Track business impact:</strong> Understand how performance affects
            conversion and engagement
</li> <li> <strong>Catch regional issues:</strong> Identify problems in specific
            locations or networks
</li> </ol> <h3 class="text-lg font-medium mt-4 mb-2">Using This Dashboard</h3> <p>
The dashboard above shows key metrics from the Web Vitals initiative
          and other important performance indicators. Values are color-coded
          based on the performance budgets defined in our testing framework:
</p> <ul class="mt-2"> <li> <span class="text-green-500 font-medium">Green:</span> Good - Meeting
            performance targets
</li> <li> <span class="text-yellow-500 font-medium">Yellow:</span> Needs Improvement
            - Under acceptable limits but could be better
</li> <li> <span class="text-red-500 font-medium">Red:</span> Poor - Exceeding acceptable
            limits, requires attention
</li> </ul> </div> </div> ${config.grafana.enableRUM && renderTemplate`<div class="text-sm text-gray-500 dark:text-gray-400 mb-6"> <p>
Data is collected using Grafana Faro Web SDK with a sampling rate of${" "} ${config.grafana.rumSamplingRate * 100}%. Configuration can be
            adjusted in the monitoring settings.
</p> </div>`} </div> ` })}`;
}, "/root/pixel/src/pages/admin/real-user-monitoring.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/real-user-monitoring.astro";
const $$url = "/admin/real-user-monitoring";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RealUserMonitoring,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
