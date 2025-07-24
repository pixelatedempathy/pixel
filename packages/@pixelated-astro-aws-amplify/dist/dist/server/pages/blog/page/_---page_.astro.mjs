;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="032f7381-b9a7-46b7-b0a0-530323fe5d9e",e._sentryDebugIdIdentifier="sentry-dbid-032f7381-b9a7-46b7-b0a0-530323fe5d9e")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderTransition } from '../../../chunks/astro/server_Ck5BzePu.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BKh1dVJn.mjs';
/* empty css                                        */
/* empty css                                                 */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  function paginate(data, options) {
    const { pageSize } = options;
    const totalPages = Math.ceil(data.length / pageSize);
    const pages = [];
    let i = 0;
    while (i !== totalPages) {
      const start = i * pageSize;
      const end = start + pageSize;
      const isNotFirst = i !== 0;
      const isNotLast = i !== totalPages - 1;
      pages.push({
        params: { page: (i + 1).toString() },
        props: {
          page: {
            data: data.slice(start, end),
            currentPage: i + 1,
            lastPage: totalPages,
            size: pageSize,
            total: data.length,
            url: {
              current: `/blog/page/${i + 1}`,
              prev: isNotFirst ? `/blog/page/${i}` : void 0,
              next: isNotLast ? `/blog/page/${i + 2}` : void 0
            }
          }
        }
      });
      i++;
    }
    return pages;
  }
  const posts = await getCollection("blog", (entry) => {
    return !entry.data.draft ;
  });
  const sortedPosts = posts.sort((postA, postB) => {
    return postB.data.pubDate.valueOf() - postA.data.pubDate.valueOf();
  });
  return paginate(sortedPosts, { pageSize: 20 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const postsByYear = {};
  for (const post of page.data) {
    const year = new Date(post.data.pubDate).getFullYear().toString();
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  }
  const years = Object.keys(postsByYear).sort((yearA, yearB) => {
    return parseInt(yearB) - parseInt(yearA);
  });
  function formatPostDate(date, readingTime) {
    const monthDay = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
    return readingTime ? `${monthDay} · ${readingTime} min` : monthDay;
  }
  const title = `Blog - Page ${page.currentPage}`;
  const description = "Articles about mental health, therapy, and technology";
  const bgType = "rose";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "bgType": bgType, "data-astro-cid-gathbs6p": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-prose mx-auto" data-astro-cid-gathbs6p> <h1 class="text-4xl font-bold mb-8" data-astro-cid-gathbs6p>Blog</h1> <!-- Performance Stats --> <div class="mb-6 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-gathbs6p>
Showing ${page.data.length} of ${page.total} posts (Page ${page.currentPage} of
${page.lastPage})
</div> <div class="prose dark:prose-invert" data-astro-cid-gathbs6p> <!-- Posts by Year --> ${years.map((year) => {
    const yearPosts = postsByYear[year];
    if (!yearPosts || yearPosts.length === 0) return null;
    return renderTemplate`<div class="mb-8" data-astro-cid-gathbs6p> <h2 class="text-2xl mb-4" data-astro-cid-gathbs6p>${year}</h2> <ul class="space-y-3 list-none pl-0" data-astro-cid-gathbs6p> ${yearPosts.map((post) => renderTemplate`<li class="flex justify-between items-baseline mb-2 leading-relaxed" data-astro-cid-gathbs6p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="flex-1 text-primary hover:underline text-lg" data-astro-cid-gathbs6p${addAttribute(renderTransition($$result2, "qnspsosz", "", `post-title-${post.slug}`), "data-astro-transition-scope")}> ${post.data.title} </a> <span class="text-sm text-gray-500 dark:text-gray-400 op-80 ml-4" data-astro-cid-gathbs6p> ${formatPostDate(post.data.pubDate, post.data.readingTime)} </span> </li>`)} </ul> </div>`;
  })} <!-- Pagination --> <div class="mt-12 flex justify-center" data-astro-cid-gathbs6p> <div class="flex gap-2 items-center" data-astro-cid-gathbs6p> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-astro-cid-gathbs6p>
← Previous
</a>`} <span class="px-4 py-2 text-sm text-gray-600 dark:text-gray-400" data-astro-cid-gathbs6p>
Page ${page.currentPage} of ${page.lastPage} </span> ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-astro-cid-gathbs6p>
Next →
</a>`} </div> </div> <!-- Navigation --> <div class="mt-16" data-astro-cid-gathbs6p> <div class="flex justify-between items-center" data-astro-cid-gathbs6p> <div class="flex gap-2" data-astro-cid-gathbs6p> <a href="/blog" class="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-astro-cid-gathbs6p>
all posts
</a> <a href="/blog/tags" class="text-sm px-3 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" data-astro-cid-gathbs6p>
tags
</a> </div> <a href="/rss.xml" class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" data-astro-cid-gathbs6p>
RSS
</a> </div> </div> </div> </div> ` })} `;
}, "/root/pixel/src/pages/blog/page/[...page].astro", "self");
const $$file = "/root/pixel/src/pages/blog/page/[...page].astro";
const $$url = "/blog/page/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
