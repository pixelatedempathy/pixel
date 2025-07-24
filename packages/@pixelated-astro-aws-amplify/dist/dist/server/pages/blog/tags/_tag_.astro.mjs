;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bcafeab4-709f-4b2a-ad39-5e51dfb739b5",e._sentryDebugIdIdentifier="sentry-dbid-bcafeab4-709f-4b2a-ad39-5e51dfb739b5")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_Ck5BzePu.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_Csvw1MIg.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft
  );
  const tags = [
    ...new Set(
      posts.flatMap((post) => post.data.tags)
    )
  ];
  return tags.map((tag) => ({
    params: { tag },
    props: {
      posts: posts.filter((post) => post.data.tags.includes(tag)).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      )
    }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const postsByYear = posts.reduce(
    (acc, post) => {
      const year = post.data.pubDate.getFullYear();
      acc[year] = acc[year] || [];
      acc[year].push(post);
      return acc;
    },
    {}
  );
  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);
  const formatPostDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit"
    }).replace("/", "-");
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Posts tagged with "${tag}"`, "description": `All blog posts tagged with ${tag}`, "bgType": "rose", "data-astro-cid-nm6udwxr": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ViewTransitions", $$ClientRouter, { "data-astro-cid-nm6udwxr": true })} ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4 py-12" data-astro-cid-nm6udwxr> <header class="mb-8" data-astro-cid-nm6udwxr> <div class="flex items-center gap-2 mb-2 text-sm" data-astro-cid-nm6udwxr> <a href="/blog" class="hover:text-primary transition-colors" data-astro-cid-nm6udwxr>Blog</a> <span data-astro-cid-nm6udwxr>/</span> <span data-astro-cid-nm6udwxr>Tag</span> <span data-astro-cid-nm6udwxr>/</span> <span class="font-medium text-primary" data-astro-cid-nm6udwxr>${tag}</span> </div> <h1 class="text-3xl font-bold" data-astro-cid-nm6udwxr>Posts tagged with "${tag}"</h1> </header> <div class="space-y-12" data-astro-cid-nm6udwxr> ${years.map((year) => renderTemplate`<div data-astro-cid-nm6udwxr> <h2 class="text-xl font-semibold mb-4 border-b pb-1" data-astro-cid-nm6udwxr>${year}</h2> <ul class="space-y-3" data-astro-cid-nm6udwxr> ${postsByYear[year].map(
    (post) => renderTemplate`<li data-astro-cid-nm6udwxr> <a${addAttribute(`/blog/${post.slug}`, "href")} class="group grid grid-cols-[80px_1fr] gap-4 items-baseline" data-astro-cid-nm6udwxr> <span class="text-sm font-mono text-gray-500 dark:text-gray-400" data-astro-cid-nm6udwxr> ${formatPostDate(post.data.pubDate)} </span> <span class="group-hover:text-primary transition-colors" data-astro-cid-nm6udwxr> ${post.data.title} ${post.data.readingTime && renderTemplate`<span class="ml-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-nm6udwxr>
· ${post.data.readingTime} min
</span>`} </span> </a> </li>`
  )} </ul> </div>`)} </div> <div class="mt-12" data-astro-cid-nm6udwxr> <a href="/blog" class="inline-flex items-center text-sm hover:text-primary transition-colors" data-astro-cid-nm6udwxr>
← Back to all posts
</a> </div> </main>  ` })}`;
}, "/root/pixel/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/root/pixel/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

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
