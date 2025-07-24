;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0562861f-1b8c-452e-a0ab-069a44fedeea",e._sentryDebugIdIdentifier="sentry-dbid-0562861f-1b8c-452e-a0ab-069a44fedeea")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_bjkJ-nhl.mjs';
/* empty css                                         */

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$MentalHealthChatDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MentalHealthChatDemo;
  const {
    conversationId = "astro-demo",
    title = "Mental Health Support Chat",
    description = "Production-grade mental health analysis and therapeutic response system.",
    initialConfig = {}
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-6xl mx-auto transition-colors duration-300" data-astro-cid-hbbchx2h> ${title && renderTemplate`<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white" data-astro-cid-hbbchx2h> ${title} </h2>`} ${description && renderTemplate`<p class="mb-6 text-gray-600 dark:text-gray-400" data-astro-cid-hbbchx2h>${description}</p>`} ${renderComponent($$result, "MentalHealthChatDemoComponent", null, { "client:only": "react", "conversationId": conversationId, "initialConfig": initialConfig, "client:component-hydration": "only", "data-astro-cid-hbbchx2h": true, "client:component-path": "/root/pixel/src/components/MentalHealthChatDemo", "client:component-export": "default" })} </div> `;
}, "/root/pixel/src/components/MentalHealthChatDemo.astro", void 0);

export { $$MentalHealthChatDemo as $ };
