;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c751246b-a7bf-468c-9b38-34171b0202d5",e._sentryDebugIdIdentifier="sentry-dbid-c751246b-a7bf-468c-9b38-34171b0202d5")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_CQPtU_GH.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$SystemHealth = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "System Health Dashboard", "description": "Monitor system health and API availability", "data-astro-cid-sdck4owc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4" data-astro-cid-sdck4owc> <h1 class="text-3xl font-bold mb-6" data-astro-cid-sdck4owc>System Health Dashboard</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-astro-cid-sdck4owc> <!-- API Health Status Card --> <div class="card border rounded-lg overflow-hidden shadow-md" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-sdck4owc></path> </svg>
API Health Status
</h2> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <div id="api-status" class="flex items-center mb-2" data-astro-cid-sdck4owc> <div class="status-indicator w-4 h-4 rounded-full bg-gray-300 mr-2" data-astro-cid-sdck4owc></div> <span class="status-text" data-astro-cid-sdck4owc>Checking API status...</span> </div> <div id="api-response-time" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Response time: --
</div> <div id="api-last-check" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Last checked: --
</div> </div> </div> <!-- Database Status Card --> <div class="card border rounded-lg overflow-hidden shadow-md" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" data-astro-cid-sdck4owc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16" data-astro-cid-sdck4owc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11h16" data-astro-cid-sdck4owc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14h8" data-astro-cid-sdck4owc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17h8" data-astro-cid-sdck4owc></path> </svg>
Database Status
</h2> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <div id="db-status" class="flex items-center mb-2" data-astro-cid-sdck4owc> <div class="status-indicator w-4 h-4 rounded-full bg-gray-300 mr-2" data-astro-cid-sdck4owc></div> <span class="status-text" data-astro-cid-sdck4owc>Checking database status...</span> </div> <div id="db-details" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Details: --
</div> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-astro-cid-sdck4owc> <!-- Redis Status Card --> <div class="card border rounded-lg overflow-hidden shadow-md" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" data-astro-cid-sdck4owc></path> </svg>
Redis Cache Status
</h2> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <div id="redis-status" class="flex items-center mb-2" data-astro-cid-sdck4owc> <div class="status-indicator w-4 h-4 rounded-full bg-gray-300 mr-2" data-astro-cid-sdck4owc></div> <span class="status-text" data-astro-cid-sdck4owc>Checking Redis status...</span> </div> <div id="redis-details" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Details: --
</div> </div> </div> <!-- System Resources Card --> <div class="card border rounded-lg overflow-hidden shadow-md" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" data-astro-cid-sdck4owc></path> </svg>
System Resources
</h2> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <div class="mb-2" data-astro-cid-sdck4owc> <div class="flex justify-between mb-1" data-astro-cid-sdck4owc> <span class="text-sm font-medium" data-astro-cid-sdck4owc>Memory Usage</span> <span id="memory-usage-percent" class="text-sm" data-astro-cid-sdck4owc>--%</span> </div> <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" data-astro-cid-sdck4owc> <div id="memory-usage-bar" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%" data-astro-cid-sdck4owc></div> </div> </div> <div id="memory-details" class="text-sm text-gray-600 dark:text-gray-400 mb-4" data-astro-cid-sdck4owc>
Memory: -- / --
</div> <div id="cpu-info" class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-astro-cid-sdck4owc>
CPU: --
</div> <div id="load-average" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Load Average: --
</div> </div> </div> </div> <!-- System Info Card --> <div class="card border rounded-lg overflow-hidden shadow-md mb-8" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-sdck4owc></path> </svg>
System Information
</h2> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-sdck4owc> <div data-astro-cid-sdck4owc> <h3 class="font-medium mb-2" data-astro-cid-sdck4owc>Operating System</h3> <div id="os-info" class="text-sm text-gray-600 dark:text-gray-400 mb-4" data-astro-cid-sdck4owc>
Platform: --<br data-astro-cid-sdck4owc>
Release: --<br data-astro-cid-sdck4owc>
Uptime: --
</div> </div> <div data-astro-cid-sdck4owc> <h3 class="font-medium mb-2" data-astro-cid-sdck4owc>Runtime</h3> <div id="runtime-info" class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-sdck4owc>
Node.js: --<br data-astro-cid-sdck4owc>
Process Memory: --<br data-astro-cid-sdck4owc>
Process Uptime: --
</div> </div> </div> </div> </div> <!-- Raw Health Check Response Card --> <div class="card border rounded-lg overflow-hidden shadow-md" data-astro-cid-sdck4owc> <div class="card-header bg-slate-100 dark:bg-slate-800 p-4 border-b" data-astro-cid-sdck4owc> <div class="flex justify-between items-center" data-astro-cid-sdck4owc> <h2 class="text-xl font-semibold flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-sdck4owc></path> </svg>
Raw Health Check Response
</h2> <button id="refresh-btn" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center" data-astro-cid-sdck4owc> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sdck4owc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-astro-cid-sdck4owc></path> </svg>
Refresh
</button> </div> </div> <div class="card-body p-4" data-astro-cid-sdck4owc> <pre id="raw-response" class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm h-80 max-h-80" data-astro-cid-sdck4owc>Loading health check data...</pre> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/system-health.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/admin/system-health.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/system-health.astro";
const $$url = "/admin/system-health";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SystemHealth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
