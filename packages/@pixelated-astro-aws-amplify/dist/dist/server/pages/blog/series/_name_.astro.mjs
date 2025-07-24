;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d452ab9-b2e2-4b31-86dc-5064df752ba0",e._sentryDebugIdIdentifier="sentry-dbid-8d452ab9-b2e2-4b31-86dc-5064df752ba0")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Ck5BzePu.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_BfiMC6NG.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  const allBlogPosts = await getCollection(
    "blog",
    ({ data }) => !data.draft 
  );
  const allSeries = [...new Set(allBlogPosts.flatMap((post) => post.data.tags || []))];
  return allSeries.map((name) => ({
    params: { name },
    props: { name }
  }));
}
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.props;
  const allPosts = await getCollection(
    "blog",
    ({ data }) => !data.draft 
  );
  const postsInSeries = allPosts.filter((post) => post.data.tags && post.data.tags.includes(name)).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  const title = `Series: ${name}`;
  const description = `All posts in the '${name}' series.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto py-12 px-4"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-white">Series: ${name}</h1> <p class="text-lg text-slate-400 mt-2">${postsInSeries.length} post${postsInSeries.length !== 1 ? "s" : ""} in this series</p> </div> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${postsInSeries.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </ul> </div> ` })}`;
}, "/root/pixel/src/pages/blog/series/[name].astro", void 0);
const $$file = "/root/pixel/src/pages/blog/series/[name].astro";
const $$url = "/blog/series/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
