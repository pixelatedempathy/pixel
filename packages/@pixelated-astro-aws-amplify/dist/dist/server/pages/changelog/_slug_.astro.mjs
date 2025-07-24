;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="41ee11a1-3e23-4f1e-a1dc-ad826b6b87e8",e._sentryDebugIdIdentifier="sentry-dbid-41ee11a1-3e23-4f1e-a1dc-ad826b6b87e8")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Toc } from '../../chunks/Toc_wE5inh6h.mjs';
import { $ as $$ShareLink } from '../../chunks/ShareLink_B_tMEaCz.mjs';
import { $ as $$Warning } from '../../chunks/Warning_B5t82WcW.mjs';
import { f as formatDate } from '../../chunks/datetime_q4GKrHnk.mjs';
import { F as FEATURES } from '../../chunks/config_Piylsppw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("changelog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { data: frontmatter } = post;
  const { Content, headings } = await renderEntry(post);
  const { share, toc } = FEATURES;
  const pubDate = frontmatter.pubDate instanceof Date ? frontmatter.pubDate.toISOString() : void 0;
  const updatedDate = frontmatter.lastModDate instanceof Date ? frontmatter.lastModDate.toISOString() : void 0;
  const UNPUBLISHED_WARNING = `This article is not yet available.
Please check back later.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto py-12 px-4 prose prose-invert"> <header class="not-prose mb-8"> <h1 class="text-4xl font-bold text-white mb-2">${frontmatter.title}</h1> ${pubDate && renderTemplate`<p class="text-slate-400 text-sm"> <time${addAttribute(pubDate, "datetime")}>${formatDate(pubDate)}</time> ${updatedDate && renderTemplate`<time${addAttribute(updatedDate, "datetime")}>
| Updated: ${formatDate(updatedDate)} </time>`} </p>`} ${frontmatter.pubDate && new Date(frontmatter.pubDate) > /* @__PURE__ */ new Date() && renderTemplate`${renderComponent($$result2, "Warning", $$Warning, { "rawHTMLString": UNPUBLISHED_WARNING })}`} </header> ${Array.isArray(toc) && toc[0] && frontmatter.toc && renderTemplate`${renderComponent($$result2, "Toc", $$Toc, { "headings": headings })}`} ${renderComponent($$result2, "Content", Content, {})} <footer class="not-prose mt-12"> ${Array.isArray(share) && share[0] && frontmatter.share && renderTemplate`${renderComponent($$result2, "ShareLink", $$ShareLink, { "config": share[1] })}`} </footer> </article> ` })}`;
}, "/root/pixel/src/pages/changelog/[slug].astro", void 0);

const $$file = "/root/pixel/src/pages/changelog/[slug].astro";
const $$url = "/changelog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
