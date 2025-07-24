;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="951b3c45-216f-4f13-bcd7-ebfb6e7575de",e._sentryDebugIdIdentifier="sentry-dbid-951b3c45-216f-4f13-bcd7-ebfb6e7575de")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$AIChat } from '../chunks/AIChat_DdNqd4Zo.mjs';
export { renderers } from '../renderers.mjs';

const $$AiChat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Chat - TogetherAI Integration" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto py-8"> <h1 class="text-3xl font-bold text-center mb-8">AI Chat with TogetherAI</h1> <p class="text-center mb-8 max-w-2xl mx-auto">
This demo showcases our integration with TogetherAI. Select a model and
      start chatting!
</p> ${renderComponent($$result2, "AIChat", $$AIChat, { "title": "TogetherAI Chat Demo", "description": "This demo showcases our integration with TogetherAI. Select a model and start chatting!", "showModelSelector": true })} <div class="mt-8 text-center text-sm text-gray-500"> <p>
Note: This component uses the TogetherAI API. Make sure your API key is
        properly configured.
</p> </div> </main> ` })}`;
}, "/root/pixel/src/pages/ai-chat.astro", void 0);

const $$file = "/root/pixel/src/pages/ai-chat.astro";
const $$url = "/ai-chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiChat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
