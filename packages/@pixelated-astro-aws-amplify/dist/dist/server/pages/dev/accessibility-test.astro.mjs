;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0372c3b2-38cf-42da-9451-f5c06ba54f67",e._sentryDebugIdIdentifier="sentry-dbid-0372c3b2-38cf-42da-9451-f5c06ba54f67")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, d as renderScript } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$ChatLayout, B as BrowserCompatibilityTester } from '../../chunks/BrowserCompatibilityTester_kN1aBYaC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                                 */
export { renderers } from '../../renderers.mjs';

function ContrastChecker() {
  const [color1, setColor1] = useState("#FFFFFF");
  const [color2, setColor2] = useState("#000000");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { htmlFor: "color1Input", children: [
      "Color 1:",
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "color1Input",
          type: "color",
          value: color1,
          onChange: (e) => setColor1(e.target.value)
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { htmlFor: "color2Input", children: [
      "Color 2:",
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "color2Input",
          type: "color",
          value: color2,
          onChange: (e) => setColor2(e.target.value)
        }
      )
    ] }) })
  ] });
}

const $$AccessibilityTest = createComponent(($$result, $$props, $$slots) => {
  const sizeMap = {
    small: { width: 50, height: 20 },
    medium: { width: 100, height: 30 },
    large: { width: 150, height: 40 }
  };
  return renderTemplate`${renderComponent($$result, "ChatLayout", $$ChatLayout, { "title": "Accessibility Testing", "data-astro-cid-kgpifehl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-kgpifehl> <h1 data-astro-cid-kgpifehl>Accessibility Testing Dashboard</h1> <section class="test-section" data-astro-cid-kgpifehl> <h2 data-astro-cid-kgpifehl>Browser Compatibility</h2> ${renderComponent($$result2, "BrowserCompatibilityTester", BrowserCompatibilityTester, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/testing/BrowserCompatibilityTester", "client:component-export": "BrowserCompatibilityTester", "data-astro-cid-kgpifehl": true })} </section> <section class="test-section" data-astro-cid-kgpifehl> <h2 data-astro-cid-kgpifehl>Color Contrast</h2> ${renderComponent($$result2, "ContrastChecker", ContrastChecker, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/accessibility/ContrastChecker", "client:component-export": "ContrastChecker", "data-astro-cid-kgpifehl": true })} </section> <section class="test-section" data-astro-cid-kgpifehl> <h2 data-astro-cid-kgpifehl>Loading Indicators</h2> <div class="loading-indicators-test" data-astro-cid-kgpifehl> <div data-astro-cid-kgpifehl> <h3 data-astro-cid-kgpifehl>Small</h3> <!-- AccessibleLoadingIndicator replaced with inline implementation --> <div class="loading-indicator" aria-live="polite" data-astro-cid-kgpifehl> <div class="loading-skeleton"${addAttribute(`width: ${sizeMap.small.width}px; height: ${sizeMap.small.height}px;`, "style")} data-astro-cid-kgpifehl></div> <p class="loading-message" data-astro-cid-kgpifehl>Loading small...</p> </div> </div> <div data-astro-cid-kgpifehl> <h3 data-astro-cid-kgpifehl>Medium</h3> <div class="loading-indicator" aria-live="polite" data-astro-cid-kgpifehl> <div class="loading-skeleton"${addAttribute(`width: ${sizeMap.medium.width}px; height: ${sizeMap.medium.height}px;`, "style")} data-astro-cid-kgpifehl></div> <p class="loading-message" data-astro-cid-kgpifehl>Loading medium...</p> </div> </div> <div data-astro-cid-kgpifehl> <h3 data-astro-cid-kgpifehl>Large</h3> <div class="loading-indicator" aria-live="polite" data-astro-cid-kgpifehl> <div class="loading-skeleton"${addAttribute(`width: ${sizeMap.large.width}px; height: ${sizeMap.large.height}px;`, "style")} data-astro-cid-kgpifehl></div> <p class="loading-message" data-astro-cid-kgpifehl>Loading large...</p> </div> </div> </div> </section> <section class="test-section" data-astro-cid-kgpifehl> <h2 data-astro-cid-kgpifehl>Keyboard Navigation Test</h2> <p data-astro-cid-kgpifehl>Tab through the following elements to test keyboard navigation:</p> <div class="keyboard-test" data-astro-cid-kgpifehl> <button class="test-button" data-astro-cid-kgpifehl>Button 1</button> <button class="test-button" data-astro-cid-kgpifehl>Button 2</button> <input type="text" placeholder="Text input" class="test-input" data-astro-cid-kgpifehl> <textarea placeholder="Textarea" class="test-textarea" data-astro-cid-kgpifehl></textarea> </div> </section> <section class="test-section" data-astro-cid-kgpifehl> <h2 data-astro-cid-kgpifehl>Screen Reader Test</h2> <p data-astro-cid-kgpifehl>
The following elements should be properly announced by screen readers:
</p> <div class="screen-reader-test" data-astro-cid-kgpifehl> <div aria-live="polite" class="live-region" data-astro-cid-kgpifehl> <button id="announce-btn" class="test-button" data-astro-cid-kgpifehl>Announce Message</button> <div id="announcement-area" class="announcement-area" data-astro-cid-kgpifehl>
No announcement ye
</div> </div> <div class="sr-only-test" data-astro-cid-kgpifehl> <p data-astro-cid-kgpifehl>This text is visible to everyone.</p> <p class="sr-only" data-astro-cid-kgpifehl>This text is only visible to screen readers.</p> </div> <div class="image-test" data-astro-cid-kgpifehl> <img src="/images/test-image.jpg" alt="A placeholder for testing alt text" width="200" height="100" data-astro-cid-kgpifehl> </div> </div> </section> </div> ${renderScript($$result2, "/root/pixel/src/pages/dev/accessibility-test.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/root/pixel/src/pages/dev/accessibility-test.astro", void 0);

const $$file = "/root/pixel/src/pages/dev/accessibility-test.astro";
const $$url = "/dev/accessibility-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AccessibilityTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
