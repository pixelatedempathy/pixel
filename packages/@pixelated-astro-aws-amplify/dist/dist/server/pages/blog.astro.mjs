;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7bc079c-bb0a-49c4-8ba1-1a3652f6a9b0",e._sentryDebugIdIdentifier="sentry-dbid-c7bc079c-bb0a-49c4-8ba1-1a3652f6a9b0")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Ck5BzePu.mjs';
import { g as getCollection } from '../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_BfiMC6NG.mjs';
import { B as Button } from '../chunks/button_H-9GKzIc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center items-center gap-4 mt-16"> ${url.prev ? renderTemplate`<a${addAttribute(url.prev, "href")}> ${renderComponent($$result, "Button", Button, { "variant": "outline" }, { "default": ($$result2) => renderTemplate`← Previous` })} </a>` : renderTemplate`${renderComponent($$result, "Button", Button, { "variant": "outline", "disabled": true }, { "default": ($$result2) => renderTemplate`← Previous` })}`} <span class="text-sm text-muted-foreground">
Page ${currentPage} of ${totalPages} </span> ${url.next ? renderTemplate`<a${addAttribute(url.next, "href")}> ${renderComponent($$result, "Button", Button, { "variant": "outline" }, { "default": ($$result2) => renderTemplate`Next →` })} </a>` : renderTemplate`${renderComponent($$result, "Button", Button, { "variant": "outline", "disabled": true }, { "default": ($$result2) => renderTemplate`Next →` })}`} </nav>`;
}, "/root/pixel/src/components/blog/Pagination.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog", ({ data }) => {
    return !data.draft ;
  });
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  return paginate(sortedPosts, { pageSize: 10 });
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { page } = Astro2.props;
  const { data: posts, currentPage, totalPages, url } = page;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Thoughts, stories, and ideas from the Pixelated Empathy team." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <header class="text-center mb-12"> <h1 class="text-5xl font-bold tracking-tight">Pixelated Empathy Blog</h1> <p class="mt-4 text-lg text-muted-foreground">Thoughts, stories, and ideas from our team.</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "url": url })} </div> ` })}`;
}, "/root/pixel/src/pages/blog/index.astro", void 0);
const $$file = "/root/pixel/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
