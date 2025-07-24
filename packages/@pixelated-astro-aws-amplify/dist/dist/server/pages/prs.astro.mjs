;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="19527a09-f3f6-4a1c-a5ca-95ac8361f84e",e._sentryDebugIdIdentifier="sentry-dbid-19527a09-f3f6-4a1c-a5ca-95ac8361f84e")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$GithubView } from '../chunks/GithubView_D0Bc-paF.mjs';
import { $ as $$Link } from '../chunks/Link_urbCl899.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Prs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prs;
  const frontmatter = {
    title: "AstroEco is Contributing..",
    description: "Example: Displaying GitHub pull requests using astro-loader-github-prs"};
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-white mb-4">
AstroEco is <span class="animate-pulse">Contributing...</span> </h1> <p class="text-slate-400 italic mb-12">
Example: Displaying GitHub pull requests using ${renderComponent($$result2, "Link", $$Link, { "href": "https://github.com/lin-stephanie/astro-loaders/tree/main/packages/astro-loader-github-prs", "external": true }, { "default": ($$result3) => renderTemplate`astro-loader-github-prs` })} </p> ${renderComponent($$result2, "GithubView", $$GithubView, { "collectionType": "prs" })} </div> </section> ` })}`;
}, "/root/pixel/src/pages/prs.astro", void 0);

const $$file = "/root/pixel/src/pages/prs.astro";
const $$url = "/prs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prs,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
