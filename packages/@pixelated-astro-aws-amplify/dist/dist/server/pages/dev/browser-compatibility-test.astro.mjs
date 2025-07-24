;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5db6d51d-85f8-4862-b389-be0b7b398815",e._sentryDebugIdIdentifier="sentry-dbid-5db6d51d-85f8-4862-b389-be0b7b398815")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$ChatLayout, B as BrowserCompatibilityTester } from '../../chunks/BrowserCompatibilityTester_BX0hAAhw.mjs';
import { $ as $$AIChat } from '../../chunks/AIChat_DdNqd4Zo.mjs';
/* empty css                                                         */
export { renderers } from '../../renderers.mjs';

const LOADING_SIZES = {
  small: { width: 50, height: 20 },
  medium: { width: 100, height: 30 },
  large: { width: 150, height: 40 }
};

const $$BrowserCompatibilityTest = createComponent(($$result, $$props, $$slots) => {
  const TEST_SECTIONS = {
    browserInfo: {
      title: "Browser Information",
      component: BrowserCompatibilityTester
    },
    aiChat: {
      title: "AI Chat Component Test",
      component: $$AIChat,
      props: {
        title: "AI Chat Test",
        description: "This is a test of the AI Chat component for browser compatibility.",
        showModelSelector: true
      },
      instructions: [
        "Verify that the chat interface loads correctly",
        "Test keyboard navigation (Tab, Enter, Arrow keys)",
        "Test screen reader compatibility",
        "Verify that messages display correctly",
        "Test sending and receiving messages",
        "Verify loading states and animations",
        "Test with reduced motion preference if available",
        "Test with high contrast mode if available"
      ]
    },
    loadingIndicator: {
      title: "Loading Indicator Test",
      instructions: [
        "Verify that loading indicators display correctly",
        "Test with screen readers to verify announcements",
        "Test with reduced motion preference if available",
        "Verify that animations work correctly"
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "ChatLayout", $$ChatLayout, { "title": "Browser Compatibility Testing", "data-astro-cid-mkf5tgmk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-mkf5tgmk> <h1 data-astro-cid-mkf5tgmk>Browser Compatibility Testing Dashboard</h1> <p data-astro-cid-mkf5tgmk>
This page tests critical AI components across different browsers to ensure
      consistent functionality and accessibility. Run this page in Chrome,
      Firefox, Safari, and Edge to verify compatibility.
</p> ${Object.entries(TEST_SECTIONS).map(([key, section]) => renderTemplate`<section class="test-section"${addAttribute(`${key}-title`, "aria-labelledby")} data-astro-cid-mkf5tgmk> <h2${addAttribute(`${key}-title`, "id")} data-astro-cid-mkf5tgmk>${section.title}</h2> <div class="component-test" data-astro-cid-mkf5tgmk> ${section.instructions && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-mkf5tgmk": true }, { "default": ($$result3) => renderTemplate` <h3 data-astro-cid-mkf5tgmk>Test Instructions</h3> <ul data-astro-cid-mkf5tgmk> ${section.instructions.map((instruction) => renderTemplate`<li data-astro-cid-mkf5tgmk>${instruction}</li>`)} </ul> ` })}`} <div class="component-container" data-astro-cid-mkf5tgmk> ${key === "browserInfo" && renderTemplate`${renderComponent($$result2, "BrowserCompatibilityTester", BrowserCompatibilityTester, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/testing/BrowserCompatibilityTester", "client:component-export": "BrowserCompatibilityTester", "data-astro-cid-mkf5tgmk": true })}`} ${key === "aiChat" && renderTemplate`${renderComponent($$result2, "AIChat", $$AIChat, { "title": section.props?.title, "description": section.props?.description, "showModelSelector": section.props?.showModelSelector, "data-astro-cid-mkf5tgmk": true })}`} ${key === "loadingIndicator" && renderTemplate`<div class="loading-indicators-test" data-astro-cid-mkf5tgmk> ${Object.entries(LOADING_SIZES).map(([size, dimensions]) => renderTemplate`<div data-astro-cid-mkf5tgmk> <h4 data-astro-cid-mkf5tgmk>${size}</h4> <div class="loading-indicator" role="status" aria-live="polite" data-astro-cid-mkf5tgmk> <div class="loading-skeleton"${addAttribute(`width: ${dimensions.width}px; height: ${dimensions.height}px;`, "style")} data-astro-cid-mkf5tgmk></div> <p class="loading-message" data-astro-cid-mkf5tgmk>
Loading ${size.toLowerCase()}...
</p> <span class="sr-only" data-astro-cid-mkf5tgmk>
Loading ${size.toLowerCase()} content, please wait.
</span> </div> </div>`)} </div>`} </div> </div> </section>`)} <section class="test-section" aria-labelledby="compatibility-log-title" data-astro-cid-mkf5tgmk> <h2 id="compatibility-log-title" data-astro-cid-mkf5tgmk>Compatibility Issues Log</h2> <div class="compatibility-log" data-astro-cid-mkf5tgmk> <form id="compatibility-form" class="compatibility-form" data-astro-cid-mkf5tgmk> <div class="form-group" data-astro-cid-mkf5tgmk> <label for="browser" data-astro-cid-mkf5tgmk>Browser</label> <input type="text" id="browser" name="browser" required data-astro-cid-mkf5tgmk> </div> <div class="form-group" data-astro-cid-mkf5tgmk> <label for="component" data-astro-cid-mkf5tgmk>Component</label> <select id="component" name="component" required data-astro-cid-mkf5tgmk> <option value="" data-astro-cid-mkf5tgmk>Select a component</option> ${Object.entries(TEST_SECTIONS).map(([key, section]) => renderTemplate`<option${addAttribute(key, "value")} data-astro-cid-mkf5tgmk>${section.title}</option>`)} </select> </div> <div class="form-group" data-astro-cid-mkf5tgmk> <label for="issue" data-astro-cid-mkf5tgmk>Issue Description</label> <textarea id="issue" name="issue" rows="4" required data-astro-cid-mkf5tgmk></textarea> </div> <div class="form-group" data-astro-cid-mkf5tgmk> <label for="severity" data-astro-cid-mkf5tgmk>Severity</label> <select id="severity" name="severity" required data-astro-cid-mkf5tgmk> <option value="" data-astro-cid-mkf5tgmk>Select severity</option> <option value="critical" data-astro-cid-mkf5tgmk>Critical - Blocking functionality</option> <option value="major" data-astro-cid-mkf5tgmk>Major - Significant impact</option> <option value="minor" data-astro-cid-mkf5tgmk>Minor - Cosmetic issues</option> </select> </div> <div class="form-actions" data-astro-cid-mkf5tgmk> <button type="submit" class="btn btn-primary" data-astro-cid-mkf5tgmk>Log Issue</button> </div> </form> <div class="issues-list" data-astro-cid-mkf5tgmk> <h3 data-astro-cid-mkf5tgmk>Reported Issues</h3> <div id="issues-container" data-astro-cid-mkf5tgmk> <p data-astro-cid-mkf5tgmk>No issues reported yet.</p> </div> </div> </div> </section> </div>  ` })} ${renderScript($$result, "/root/pixel/src/pages/dev/browser-compatibility-test.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/dev/browser-compatibility-test.astro", void 0);

const $$file = "/root/pixel/src/pages/dev/browser-compatibility-test.astro";
const $$url = "/dev/browser-compatibility-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BrowserCompatibilityTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
