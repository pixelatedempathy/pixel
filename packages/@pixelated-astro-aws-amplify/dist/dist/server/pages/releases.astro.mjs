;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e57fcf90-c06d-4f5b-ad33-d551b5559033",e._sentryDebugIdIdentifier="sentry-dbid-e57fcf90-c06d-4f5b-ad33-d551b5559033")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$Link } from '../chunks/Link_urbCl899.mjs';
import { $ as $$GithubView } from '../chunks/GithubView_D0Bc-paF.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Releases = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Releases;
  const frontmatter = {
    title: "AstroEco is Releasing...",
    description: "Example: Displaying GitHub releases using astro-loader-github-releases"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-white mb-4">
AstroEco is <span class="animate-pulse">Releasing...</span> </h1> <p class="text-slate-400 italic mb-12">
Example: Displaying GitHub releases using ${renderComponent($$result2, "Link", $$Link, { "href": "https://github.com/lin-stephanie/astro-loaders/tree/main/packages/astro-loader-github-releases", "external": true }, { "default": ($$result3) => renderTemplate`astro-loader-github-releases` })} </p> ${renderComponent($$result2, "GithubView", $$GithubView, { "collectionType": "releases" })} </div> </section> ` })}`;
}, "/root/pixel/src/pages/releases.astro", void 0);

const $$file = "/root/pixel/src/pages/releases.astro";
const $$url = "/releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Releases,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
