;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6129be2a-7b9c-49ed-9be7-96ed439673d2",e._sentryDebugIdIdentifier="sentry-dbid-6129be2a-7b9c-49ed-9be7-96ed439673d2")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, F as Fragment, i as renderTransition } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$ShareLink } from '../../chunks/ShareLink_B_tMEaCz.mjs';
/* empty css                                     */
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { entry } = Astro2.props;
  const {
    title: postTitle,
    description,
    image,
    pubDate,
    readingTime,
    tags = []
  } = entry.data;
  const formattedDate = new Date(pubDate);
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  const shareConfig = {
    twitter: [true, "@GradiantAscent"],
    mastodon: false,
    facebook: true,
    pinterest: false,
    reddit: false,
    telegram: false,
    whatsapp: false,
    email: false
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": postTitle, "description": description, "ogImage": image?.url, "bgType": "rose" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-prose mx-auto px-4 sm:px-0 py-12"> <header class="mb-8"> <div class="mb-6"> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"> <time${addAttribute(formattedDate.toISOString(), "datetime")}> ${formatDate(formattedDate)} </time> ${readingTime && readingTime > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="mx-2">·</span> <span>${readingTime} min read</span> ` })}`} </div> <h1 class="text-3xl sm:text-4xl font-bold mb-4 leading-tight"${addAttribute(renderTransition($$result2, "o4bj6brz", "", `post-title-${entry.data.slug}`), "data-astro-transition-scope")}> ${postTitle} </h1> ${description && renderTemplate`<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"> ${description} </p>`} </div> ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-6"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}`, "href")} class="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-astro-prefetch${addAttribute(renderTransition($$result2, "nfsjoa6w", "slide", ""), "data-astro-transition-scope")}> ${tag} </a>`)} </div>`} ${image?.url && renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(image.alt || postTitle, "alt")} class="w-full rounded-lg shadow-md mb-8"${addAttribute(renderTransition($$result2, "hit7f5dj", "", `image-${entry.data.slug}`), "data-astro-transition-scope")}>`} </header> <div class="prose dark:prose-invert prose-lg max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"> <!-- Social Share Section --> <div class="flex justify-between items-center"> <a href="/blog" class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" data-astro-prefetch> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
back
</a> <div class="flex items-center"> ${renderComponent($$result2, "ShareLink", $$ShareLink, { "config": shareConfig })} </div> </div> </footer> </article> ` })} `;
}, "/root/pixel/src/layouts/BlogPostLayout.astro", "self");

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs.filter((doc) => !doc.data.draft).map((doc) => ({
    params: { slug: doc.data.slug || doc.slug },
    props: { entry: doc }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/root/pixel/src/pages/docs/[...slug].astro", void 0);

const $$file = "/root/pixel/src/pages/docs/[...slug].astro";
const $$url = "/docs/[...slug]";

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
