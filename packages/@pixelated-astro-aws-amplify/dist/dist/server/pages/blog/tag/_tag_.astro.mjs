;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="295c29d2-01f5-4d38-ad4d-823e5ade011f",e._sentryDebugIdIdentifier="sentry-dbid-295c29d2-01f5-4d38-ad4d-823e5ade011f")}catch(e){}}();/* empty css                                                */
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
    ({ data }) => {
      return data.pubDate <= /* @__PURE__ */ new Date() ;
    }
  );
  const allTags = [
    ...new Set(
      allBlogPosts.flatMap(
        (post) => post.data?.tags ?? []
      )
    )
  ];
  return allTags.map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const allBlogPosts = await getCollection(
    "blog",
    ({ data }) => {
      return data.pubDate <= /* @__PURE__ */ new Date() ;
    }
  );
  const posts = allBlogPosts.filter((post) => post.data.tags?.includes(tag)).sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
  const title = `#${tag} | Blog`;
  const description = `Articles tagged with #${tag} - Explore insights and guides on this topic.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto py-12 px-4"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-white">Tagged: #${tag}</h1> <p class="text-lg text-slate-400 mt-2">${posts.length} post${posts.length !== 1 ? "s" : ""} found</p> </div> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </ul> <div class="mt-12 text-center"> <a href="/blog" class="inline-block rounded-lg bg-slate-700/50 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-green-400/70 transition-colors">
Back to All Articles
</a> </div> </div> ` })}`;
}, "/root/pixel/src/pages/blog/tag/[tag].astro", void 0);
const $$file = "/root/pixel/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
