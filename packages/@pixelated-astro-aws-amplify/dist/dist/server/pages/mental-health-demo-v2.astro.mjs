;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc77bfcf-be7c-4c6d-8d55-00e232777c5e",e._sentryDebugIdIdentifier="sentry-dbid-dc77bfcf-be7c-4c6d-8d55-00e232777c5e")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$MentalHealthChatDemo } from '../chunks/MentalHealthChatDemo_C3Y02YTt.mjs';
export { renderers } from '../renderers.mjs';

const $$MentalHealthDemoV2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mental Health Support Chat - Production Demo", "description": "Production-grade mental health analysis and therapeutic response system demonstration" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-4xl mx-auto"> <header class="text-center mb-8"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Mental Health Support Chat
</h1> <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
Production-grade mental health analysis and therapeutic response
          system
</p> <div class="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8"> <h2 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
🚀 New Production-Grade Features
</h2> <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1 text-left"> <li>• Real-time mental health analysis with confidence scoring</li> <li>• Crisis detection and intervention recommendations</li> <li>• Evidence-based therapeutic response generation</li> <li>• Risk trend analysis and conversation insights</li> <li>• Configurable analysis parameters and thresholds</li> <li>• Comprehensive testing and documentation</li> </ul> </div> </header> ${renderComponent($$result2, "MentalHealthChatDemo", $$MentalHealthChatDemo, { "conversationId": "production-demo", "title": "", "description": "", "initialConfig": {
    enableAnalysis: true,
    confidenceThreshold: 0.6,
    interventionThreshold: 0.7,
    analysisMinLength: 10,
    enableCrisisDetection: true
  } })} <section class="mt-12 space-y-8"> <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
How It Works
</h2> <div class="grid md:grid-cols-2 gap-6"> <div> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
Analysis Engine
</h3> <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1"> <li>• Keyword-based pattern detection</li> <li>• Sentiment analysis and scoring</li> <li>• Risk level categorization</li> <li>• Confidence measurement</li> </ul> </div> <div> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
Therapeutic Response
</h3> <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1"> <li>• Evidence-based approaches</li> <li>• Crisis intervention protocols</li> <li>• Cognitive and behavioral techniques</li> <li>• Supportive communication</li> </ul> </div> </div> </div> <div class="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6"> <h2 class="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-3">
⚠️ Important Disclaimer
</h2> <p class="text-sm text-yellow-700 dark:text-yellow-300">
This is a demonstration system for educational purposes. It is not
            intended to replace professional mental health care. If you or
            someone you know is experiencing a mental health crisis, please
            contact:
</p> <ul class="text-sm text-yellow-700 dark:text-yellow-300 mt-2 space-y-1"> <li>
• <strong>National Suicide Prevention Lifeline:</strong> 988
</li> <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li> <li>• <strong>Emergency Services:</strong> 911</li> </ul> </div> <div class="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6"> <h2 class="text-xl font-bold text-green-800 dark:text-green-200 mb-3">
🔒 Privacy & Security
</h2> <ul class="text-sm text-green-700 dark:text-green-300 space-y-1"> <li>• All processing happens locally in your browser</li> <li>• No data is sent to external servers</li> <li>• Conversation history is temporary and limited</li> <li>• No personal information is stored</li> </ul> </div> </section> </div> </main> ` })}`;
}, "/root/pixel/src/pages/mental-health-demo-v2.astro", void 0);

const $$file = "/root/pixel/src/pages/mental-health-demo-v2.astro";
const $$url = "/mental-health-demo-v2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentalHealthDemoV2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
