;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="afbd0e28-67ac-44af-b5a4-46f0b44c66ae",e._sentryDebugIdIdentifier="sentry-dbid-afbd0e28-67ac-44af-b5a4-46f0b44c66ae")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
import { $ as $$MentalHealthChatDemo } from '../chunks/MentalHealthChatDemo_CH-_zeVE.mjs';
export { renderers } from '../renderers.mjs';

const $$MentalHealthDemo = createComponent(($$result, $$props, $$slots) => {
  const title = "Mental Health Analysis Demo";
  const description = "Experience our advanced mental health analysis tools in action. This demo showcases real-time analysis of text for mental health indicators.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto py-8 px-4"> <div class="max-w-5xl mx-auto"> <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center">${title}</h1> <div class="prose dark:prose-invert max-w-none mb-8"> <p class="text-xl text-center">
This demonstration showcases how our AI system can analyze text in
          real-time for mental health indicators while maintaining privacy and
          security.
</p> <div class="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800 my-6"> <p class="font-medium text-amber-800 dark:text-amber-300"> <span class="font-bold">Demo Purpose:</span> This is for demonstration
            purposes only and is not intended to provide medical advice or diagnosis.
            The analysis shown here is simulated and uses mock data.
</p> </div> </div> ${renderComponent($$result2, "MentalHealthChatDemo", $$MentalHealthChatDemo, { "title": "Interactive Mental Health Analysis Demo", "description": "Type messages in the chat to see how our system analyzes text for mental health indicators. The right panel shows the analysis in real-time.", "showSettingsPanel": true, "showAnalysisPanel": true, "initialTab": "analysis" })} <div class="mt-12 prose dark:prose-invert max-w-none"> <h2 class="text-2xl font-bold">How It Works</h2> <p>
Our system uses advanced natural language processing to analyze text
          for indicators of mental health conditions. The analysis is performed
          in real-time with full privacy protection using Fully Homomorphic
          Encryption (FHE) technology.
</p> <h3 class="text-xl font-semibold mt-6">Key Features</h3> <ul> <li> <strong>Privacy-First:</strong> All analysis is done with encrypted data
</li> <li> <strong>Real-Time Analysis:</strong> Immediate feedback on mental health
            indicators
</li> <li> <strong>Expert-Guided:</strong> Analysis based on clinician-validated
            criteria
</li> <li> <strong>Pattern Detection:</strong> Identifies patterns across multiple
            messages
</li> <li> <strong>Customizable:</strong> Configure the analysis to your specific
            needs
</li> </ul> </div> </div> </section> ` })}`;
}, "/root/pixel/src/pages/mental-health-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/mental-health-demo.astro";
const $$url = "/mental-health-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentalHealthDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
