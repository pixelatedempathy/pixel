;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0962f844-9070-4102-87f8-71613d57cc46",e._sentryDebugIdIdentifier="sentry-dbid-0962f844-9070-4102-87f8-71613d57cc46")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { $ as $$Button } from '../chunks/Button_CrYNY2lz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us | Pixelated Empathy", "description": "Learn more about Pixelated Empathy and our mission to revolutionize AI-assisted emotional intelligence.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4" data-astro-cid-kh7btl4r> <div class="text-center mb-8" data-astro-cid-kh7btl4r> <h1 class="text-4xl font-bold text-white" data-astro-cid-kh7btl4r>About Pixelated Empathy</h1> <p class="text-lg text-slate-400 mt-2" data-astro-cid-kh7btl4r>Revolutionizing AI-assisted emotional intelligence</p> </div> <div class="prose prose-invert max-w-none mx-auto" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Pixelated Empathy is at the forefront of AI-assisted emotional
        intelligence, developing cutting-edge solutions that help people
        understand and manage their emotions better.
</p> <h2 data-astro-cid-kh7btl4r>Our Mission</h2> <p data-astro-cid-kh7btl4r>
Our mission is to create AI tools that enhance human emotional
        intelligence, making emotional well-being accessible to everyone. We
        believe that technology should serve humanity by augmenting our natural
        capabilities and helping us overcome our limitations.
</p> <h2 data-astro-cid-kh7btl4r>Our Team</h2> <p data-astro-cid-kh7btl4r>
We are a diverse team of AI researchers, psychologists, and engineers
        passionate about the intersection of artificial intelligence and human
        emotions. Our multidisciplinary approach allows us to create solutions
        that are both technically advanced and deeply human-centered.
</p> <h2 data-astro-cid-kh7btl4r>Our Approach</h2> <p data-astro-cid-kh7btl4r>
At Pixelated Empathy, we take a responsible approach to AI development.
        We prioritize:
</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Privacy:</strong> Your emotional data belongs to you and is handled
          with the utmost care.
</li> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Transparency:</strong> We're open about how our AI works and wha
          it can and cannot do.
</li> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Inclusivity:</strong> Our solutions are designed to work for people
          of all backgrounds and experiences.
</li> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Scientific Rigor:</strong> Our approaches are grounded in the lates
          research in psychology and AI.
</li> </ul> <div class="mt-8 text-center" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "default", "size": "lg", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate`Get in Touch` })} </div> </div> </div> ` })} `;
}, "/root/pixel/src/pages/about.astro", void 0);

const $$file = "/root/pixel/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
