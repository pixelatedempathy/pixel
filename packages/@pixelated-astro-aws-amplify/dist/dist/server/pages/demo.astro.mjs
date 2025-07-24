;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="06ff1c03-e7c3-47b3-aaf9-0ceb908cb8b5",e._sentryDebugIdIdentifier="sentry-dbid-06ff1c03-e7c3-47b3-aaf9-0ceb908cb8b5")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, g as renderHead, a as renderTemplate } from '../chunks/astro/server_t-wqd6mp.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  "UI Component Demos";
  "Demonstration of UI components";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>UI Component Demos</title>${renderHead()}</head> <body> <div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">UI Component Demos</h1> <section class="mb-10"> <h2 class="text-2xl font-semibold mb-6">List Component</h2> <p>This is a placeholder for the List Component demo.</p> <p>The List component has been enhanced with:</p> <ul class="list-disc pl-6 mt-4"> <li>Improved accessibility with ARIA attributes</li> <li>Nested list support for hierarchical data</li> <li>Smooth animations for collapsible elements</li> <li>Maximum items display with "...and X more" support</li> <li>Hover effects and click handlers</li> <li>Badge support for list groups</li> </ul> <p class="mt-4">
Please visit the React version of this demo to see the component in
          action.
</p> </section> </div> </body></html>`;
}, "/root/pixel/src/pages/demo.astro", void 0);

const $$file = "/root/pixel/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
