;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a19d0761-1de0-49ab-86a9-3ce30a6512d0",e._sentryDebugIdIdentifier="sentry-dbid-a19d0761-1de0-49ab-86a9-3ce30a6512d0")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, h as renderSlot, d as renderScript, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Ck5BzePu.mjs';
import 'clsx';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$SimpleAdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleAdminLayout;
  const { title = "Admin Dashboard", activeItem = "dashboard" } = Astro2.props;
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "/admin" },
    { id: "users", label: "Users", icon: "users", href: "/admin/users" },
    { id: "content", label: "Content", icon: "document", href: "/admin/content" },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
      href: "/admin/settings"
    }
  ];
  const hasPermission = (_item) => true;
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-gray-100 dark:bg-gray-900"> <!-- Sidebar --> <aside id="sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"> <div class="h-full px-3 py-4 overflow-y-auto"> <!-- Logo --> <div class="flex items-center mb-5 p-2"> <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
Admin Portal
</h2> </div> <!-- Navigation --> <ul class="space-y-2 font-medium"> ${navItems.map(
    (item) => hasPermission(item.id) && renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`flex items-center p-2 rounded-lg ${activeItem === item.id ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-500" : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`, "class")}> <span class="ms-3">${item.label}</span> </a> </li>`
  )} </ul> </div> </aside> <!-- Mobile menu toggle --> <div class="sticky top-0 z-30 flex items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:px-8"> <button id="sidebar-toggle" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"> <span class="sr-only">Open sidebar</span> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path> </svg> </button> <span class="ml-2 text-xl font-semibold md:ml-0">${title}</span> </div> <!-- Page content --> <div class="p-4 md:ml-64 pt-20"> <div class="p-4 border-2 border-gray-200 dark:border-gray-700 border-dashed rounded-lg"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/SimpleAdminLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/SimpleAdminLayout.astro", void 0);

const $$AdminTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SimpleAdminLayout", $$SimpleAdminLayout, { "title": "Admin Test Page", "data-astro-cid-byj2xrus": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-test-content" data-astro-cid-byj2xrus> <h2 data-astro-cid-byj2xrus>Welcome to the Admin Test Page</h2> <p data-astro-cid-byj2xrus>
This is a simple test page to check if the admin layout works correctly.
</p> <div class="card" data-astro-cid-byj2xrus> <h3 data-astro-cid-byj2xrus>System Metrics</h3> <div class="metrics-grid" data-astro-cid-byj2xrus> <div class="metric-item" data-astro-cid-byj2xrus> <span class="metric-label" data-astro-cid-byj2xrus>Active Users</span> <span class="metric-value" data-astro-cid-byj2xrus>124</span> </div> <div class="metric-item" data-astro-cid-byj2xrus> <span class="metric-label" data-astro-cid-byj2xrus>Active Sessions</span> <span class="metric-value" data-astro-cid-byj2xrus>56</span> </div> <div class="metric-item" data-astro-cid-byj2xrus> <span class="metric-label" data-astro-cid-byj2xrus>Average Response Time</span> <span class="metric-value" data-astro-cid-byj2xrus>238ms</span> </div> <div class="metric-item" data-astro-cid-byj2xrus> <span class="metric-label" data-astro-cid-byj2xrus>CPU Usage</span> <span class="metric-value" data-astro-cid-byj2xrus>42%</span> </div> </div> </div> </div> ` })} `;
}, "/root/pixel/src/pages/admin-test.astro", void 0);

const $$file = "/root/pixel/src/pages/admin-test.astro";
const $$url = "/admin-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdminTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
