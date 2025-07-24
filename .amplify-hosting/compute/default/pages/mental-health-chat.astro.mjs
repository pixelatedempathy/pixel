;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9c33bf91-aa5f-4786-8cb2-386dcd9884b8",e._sentryDebugIdIdentifier="sentry-dbid-9c33bf91-aa5f-4786-8cb2-386dcd9884b8")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_ViZXiFJ5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Mental Health Chat | Pixelated Empathy Therapy", "description": "AI-powered mental health chat with advanced analysis capabilities" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-6"> <div class="mb-6"> <h1 class="text-3xl font-bold tracking-tight mb-2">Mental Health Chat</h1> <p class="text-muted-foreground">
Have a therapeutic conversation with our AI assistant using MentalLLaMA
        technology
</p> </div> <!-- Chat Interface --> <div class="flex flex-col md:flex-row gap-4 w-full"> <div class="flex-1 md:max-w-[65%]"> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-[600px] flex flex-col"> <div class="flex-1 overflow-y-auto space-y-4 mb-4"> <!-- Bot message --> <div class="flex justify-start"> <div class="rounded-lg px-4 py-2 max-w-[80%] bg-gray-100 dark:bg-gray-700"> <p>Hello! I'm here to chat. How are you feeling today?</p> </div> </div> </div> <div class="flex gap-2"> <input type="text" placeholder="Type your message..." class="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"> <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
Send
</button> </div> </div> </div> <!-- Analysis Panel --> <div class="md:w-[35%]"> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"> <div class="mb-4 border-b pb-2"> <div class="flex space-x-4"> <button class="px-3 py-1 text-blue-600 border-b-2 border-blue-600 font-medium">
Insights
</button> <button class="px-3 py-1 text-gray-500 hover:text-gray-700">
History
</button> <button class="px-3 py-1 text-gray-500 hover:text-gray-700">
Settings
</button> </div> </div> <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"> <p class="text-sm text-center py-8 text-gray-500 dark:text-gray-400">
No analysis available yet. Send a message to see insights.
</p> </div> </div> </div> </div> <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-100 dark:border-blue-900"> <h3 class="text-md font-medium text-blue-800 dark:text-blue-300 mb-2 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
About This Chat
</h3> <p class="text-sm text-blue-700 dark:text-blue-400">
This chat uses MentalLLaMA, a specialized mental health model that can
        analyze conversations for mental health indicators. All processing is
        done with privacy-first technology, and you can control the analysis
        settings using the panel on the right.
</p> <div class="mt-3 text-xs text-blue-600 dark:text-blue-500">
No conversation data is stored on our servers. All analysis happens in
        your browser for maximum privacy.
</div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/mental-health-chat/index.astro", void 0);

const $$file = "/root/pixel/src/pages/mental-health-chat/index.astro";
const $$url = "/mental-health-chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
