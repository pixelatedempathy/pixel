;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7010179-7c9a-4e53-a788-dad13f6cbf7b",e._sentryDebugIdIdentifier="sentry-dbid-c7010179-7c9a-4e53-a788-dad13f6cbf7b")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$Layout } from '../chunks/Layout_DhRd5sBF.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Accessibility = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Accessibility Statement | Pixelated Empathy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-3xl"> <h1 class="text-4xl font-bold mb-6">Accessibility Statement</h1> <div class="prose prose-lg dark:prose-invert"> <p>
At Pixelated Empathy, we are committed to ensuring digital accessibility
        for people with disabilities. We are continually improving the user
        experience for everyone, and applying the relevant accessibility
        standards.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">Conformance Status</h2> <p>
The Web Content Accessibility Guidelines (WCAG) defines requirements for
        designers and developers to improve accessibility for people with
        disabilities. It defines three levels of conformance: Level A, Level AA,
        and Level AAA. Pixelated Empathy is partially conformant with WCAG 2.1
        level AA. Partially conformant means that some parts of the content do
        not fully conform to the accessibility standard.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">
Compatibility with Browsers and Assistive Technology
</h2> <p>
Pixelated Empathy is designed to be compatible with the following
        assistive technologies:
</p> <ul class="list-disc ml-6 mb-4"> <li>Screen readers including NVDA, JAWS, and VoiceOver</li> <li>Zoom and magnification features in modern browsers</li> <li>Speech recognition software</li> <li>Keyboard-only navigation</li> </ul> <h2 class="text-2xl font-semibold mt-8 mb-4">Technical Specifications</h2> <p>
Accessibility of Pixelated Empathy relies on the following technologies
        to work with the particular combination of web browser and any assistive
        technologies or plugins installed on your computer:
</p> <ul class="list-disc ml-6 mb-4"> <li>HTML</li> <li>WAI-ARIA</li> <li>CSS</li> <li>JavaScript</li> </ul> <h2 class="text-2xl font-semibold mt-8 mb-4">Assessment Approach</h2> <p>
Pixelated Empathy has assessed the accessibility of our platform by the
        following approaches:
</p> <ul class="list-disc ml-6 mb-4"> <li>Self-evaluation</li> <li>External accessibility evaluation</li> <li>Automated testing tools</li> <li>User testing</li> </ul> <h2 class="text-2xl font-semibold mt-8 mb-4">Feedback</h2> <p>
We welcome your feedback on the accessibility of Pixelated Empathy.
        Please let us know if you encounter accessibility barriers on our
        website:
</p> <ul class="list-disc ml-6 mb-4"> <li>
Email: <a href="mailto:accessibility@pixelated.com">accessibility@pixelated.com</a> </li> <li>Phone: +1-800-123-4567</li> </ul> <p>We try to respond to feedback within 5 business days.</p> </div> </main> ` })}`;
}, "/root/pixel/src/pages/accessibility.astro", void 0);

const $$file = "/root/pixel/src/pages/accessibility.astro";
const $$url = "/accessibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accessibility,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
