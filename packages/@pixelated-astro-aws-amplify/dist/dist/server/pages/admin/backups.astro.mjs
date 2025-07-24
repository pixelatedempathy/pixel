;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="588ec524-27bd-4893-a165-793f14f52b81",e._sentryDebugIdIdentifier="sentry-dbid-588ec524-27bd-4893-a165-793f14f52b81")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Ciex37LV.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Backup & Recovery";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "activeItem": "backups" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <div class="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6"> <h2 class="text-2xl font-bold mb-6">Backup Management</h2> <div class="border-b border-gray-200 dark:border-gray-700 mb-6"> <ul class="flex flex-wrap -mb-px text-sm font-medium text-center"> <li class="mr-2"> <a href="#backups" class="inline-block p-4 border-b-2 border-primary-500 rounded-t-lg active text-primary-500" aria-current="page">
System Backups
</a> </li> <li class="mr-2"> <a href="#recovery" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
Recovery Testing
</a> </li> <li class="mr-2"> <a href="#schedule" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
Backup Schedule
</a> </li> </ul> </div> <!-- Backup List Tab (Default Active) --> <div id="backups-content" class="block"> <div class="overflow-x-auto relative"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="py-3 px-6">Backup Name</th> <th scope="col" class="py-3 px-6">Size</th> <th scope="col" class="py-3 px-6">Created At</th> <th scope="col" class="py-3 px-6">Status</th> <th scope="col" class="py-3 px-6">Actions</th> </tr> </thead> <tbody> <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> <td class="py-4 px-6">backup-2025-01-15-full</td> <td class="py-4 px-6">2.4 GB</td> <td class="py-4 px-6">Jan 15, 2025 08:30 AM</td> <td class="py-4 px-6"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Complete</span></td> <td class="py-4 px-6 flex space-x-2"> <button class="text-blue-600 hover:underline">Download</button> <button class="text-red-600 hover:underline">Delete</button> </td> </tr> <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> <td class="py-4 px-6">backup-2025-01-14-full</td> <td class="py-4 px-6">2.3 GB</td> <td class="py-4 px-6">Jan 14, 2025 08:30 AM</td> <td class="py-4 px-6"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Complete</span></td> <td class="py-4 px-6 flex space-x-2"> <button class="text-blue-600 hover:underline">Download</button> <button class="text-red-600 hover:underline">Delete</button> </td> </tr> <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> <td class="py-4 px-6">backup-2025-01-13-full</td> <td class="py-4 px-6">2.3 GB</td> <td class="py-4 px-6">Jan 13, 2025 08:30 AM</td> <td class="py-4 px-6"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Complete</span></td> <td class="py-4 px-6 flex space-x-2"> <button class="text-blue-600 hover:underline">Download</button> <button class="text-red-600 hover:underline">Delete</button> </td> </tr> <tr class="bg-white dark:bg-gray-800"> <td class="py-4 px-6">backup-2025-01-12-full</td> <td class="py-4 px-6">2.2 GB</td> <td class="py-4 px-6">Jan 12, 2025 08:30 AM</td> <td class="py-4 px-6"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Complete</span></td> <td class="py-4 px-6 flex space-x-2"> <button class="text-blue-600 hover:underline">Download</button> <button class="text-red-600 hover:underline">Delete</button> </td> </tr> </tbody> </table> </div> <div class="mt-6 flex justify-between"> <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
Create Manual Backup
</button> <div class="flex space-x-2"> <button class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
Previous
</button> <button class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
Next
</button> </div> </div> </div>
Based on the lint error shown in the context, the \`BackupRecoveryTab\`
      component is missing required props \`onStartRecoveryTest\` and
      \`onScheduleRecoveryTests\`. I'll add these props with appropriate handler
      functions.
<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg"> <h3 class="text-lg font-semibold mb-4">Current Schedule</h3> <div class="space-y-4"> <div class="flex justify-between"> <span class="text-sm text-gray-600 dark:text-gray-400">Full Backup:</span> <span class="text-sm font-medium">Daily at 3:00 AM</span> </div> <div class="flex justify-between"> <span class="text-sm text-gray-600 dark:text-gray-400">Incremental Backup:</span> <span class="text-sm font-medium">Every 4 hours</span> </div> <div class="flex justify-between"> <span class="text-sm text-gray-600 dark:text-gray-400">Retention Period:</span> <span class="text-sm font-medium">30 days</span> </div> <div class="flex justify-between"> <span class="text-sm text-gray-600 dark:text-gray-400">Storage Location:</span> <span class="text-sm font-medium">S3 Bucket & Local Storage</span> </div> </div> </div> <div class="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg"> <h3 class="text-lg font-semibold mb-4">Modify Schedule</h3> <form class="space-y-4"> <div> <label for="full-backup" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Backup Time</label> <select id="full-backup" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"> <option>Daily at 1:00 AM</option> <option>Daily at 2:00 AM</option> <option selected>Daily at 3:00 AM</option> <option>Daily at 4:00 AM</option> </select> </div> <div> <label for="incremental-backup" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Incremental Backup Frequency</label> <select id="incremental-backup" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"> <option>Every 2 hours</option> <option selected>Every 4 hours</option> <option>Every 6 hours</option> <option>Every 12 hours</option> </select> </div> <div> <label for="retention" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Retention Period</label> <select id="retention" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"> <option>7 days</option> <option>14 days</option> <option selected>30 days</option> <option>60 days</option> <option>90 days</option> </select> </div> <div class="pt-2"> <button type="submit" class="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
Update Schedule
</button> </div> </form> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/backups/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/backups/index.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/backups/index.astro";
const $$url = "/admin/backups";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
