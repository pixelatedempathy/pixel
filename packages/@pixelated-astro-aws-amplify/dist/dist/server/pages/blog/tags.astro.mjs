;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="181bfad3-592c-46c5-b6d4-605a55fb4313",e._sentryDebugIdIdentifier="sentry-dbid-181bfad3-592c-46c5-b6d4-605a55fb4313")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection(
    "blog",
    ({ data }) => {
      return !data.draft ;
    }
  );
  const tagCounts = posts.reduce(
    (acc, post) => {
      if (!post.data.tags) return acc;
      post.data.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {}
  );
  const sortedTags = Object.entries(tagCounts).sort((a, b) => a[0].localeCompare(b[0])).map(([tag, count]) => ({ tag, count }));
  const title = "Blog Tags";
  const description = "Browse all blog tags";
  const bgType = "rose";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "bgType": bgType, "data-astro-cid-sfsyb3ip": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4 py-12" data-astro-cid-sfsyb3ip> <header class="mb-8" data-astro-cid-sfsyb3ip> <div class="flex items-center gap-2 mb-2 text-sm" data-astro-cid-sfsyb3ip> <a href="/blog" class="hover:text-primary transition-colors" data-astro-prefetch data-astro-cid-sfsyb3ip>Blog</a> <span data-astro-cid-sfsyb3ip>/</span> <span class="font-medium text-primary" data-astro-cid-sfsyb3ip>Tags</span> </div> <h1 class="text-3xl font-bold mb-2" data-astro-cid-sfsyb3ip>${title}</h1> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-sfsyb3ip>${description}</p> </header> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-sfsyb3ip> ${sortedTags.map(({ tag, count }) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}`, "href")} class="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group" data-astro-prefetch data-astro-cid-sfsyb3ip> <div class="font-medium group-hover:text-primary transition-colors" data-astro-cid-sfsyb3ip> ${tag} </div> <div class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-sfsyb3ip> ${count} ${count === 1 ? "post" : "posts"} </div> </a>`)} </div> <div class="mt-12" data-astro-cid-sfsyb3ip> <a href="/blog" class="inline-flex items-center text-sm hover:text-primary transition-colors" data-astro-prefetch data-astro-cid-sfsyb3ip>
← Back to all posts
</a> </div> </main>  ` })}`;
}, "/root/pixel/src/pages/blog/tags/index.astro", void 0);
const $$file = "/root/pixel/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
