;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="66129e80-c78c-406c-94f5-aa6374648889",e._sentryDebugIdIdentifier="sentry-dbid-66129e80-c78c-406c-94f5-aa6374648889")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Badge } from '../../chunks/Badge_BTf8b-6k.mjs';
import { B as Button } from '../../chunks/button_H-9GKzIc.mjs';
import { $ as $$Card } from '../../chunks/Card_C_GhxMHY.mjs';
import { b as $$CardContent, $ as $$CardHeader, a as $$CardTitle } from '../../chunks/CardTitle_ByxQ-_k1.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_CtHMKp3-.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.draft).map((post) => ({
    params: { slug: post.data.slug || post.slug },
    props: { entry: post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const allPosts = await getCollection(
    "blog",
    ({ data }) => !data.draft
  );
  const relatedPosts = allPosts.filter(
    (p) => p.id !== entry.id && // Not the current post
    (p.data.category === entry.data.category || // Same category
    p.data.tags?.some((tag) => entry.data.tags?.includes(tag)))
    // Shared tags
  ).sort(() => Math.random() - 0.5).slice(0, 3);
  const categoryColors = {
    "AI Training": "cyan",
    "Clinical Practice": "green",
    "Student Success": "blue",
    "Technology": "purple",
    "Research": "orange",
    "University Spotlight": "red"
  };
  const categoryColor = categoryColors[entry.data.category] || "gray";
  const wordsPerMinute = 200;
  const wordCount = entry.body?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "bgType": "plum", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-screen text-white" data-astro-cid-7jjqptxk> <!-- Floating Particles --> <div class="particles-container absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-7jjqptxk> <div class="particle particle-1" data-astro-cid-7jjqptxk></div> <div class="particle particle-2" data-astro-cid-7jjqptxk></div> <div class="particle particle-3" data-astro-cid-7jjqptxk></div> <div class="particle particle-4" data-astro-cid-7jjqptxk></div> <div class="particle particle-5" data-astro-cid-7jjqptxk></div> </div> <div class="relative z-10 py-8" data-astro-cid-7jjqptxk> <div class="container mx-auto px-4" data-astro-cid-7jjqptxk> <!-- Back Navigation --> <div class="mb-8" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Button", Button, { "variant": "outline", "size": "sm", "className": "border-green-500/50 text-green-300 hover:bg-green-500/10", "data-back-button": "true", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate`
← Back to Blog
` })} </div> <!-- Article Header --> <div class="max-w-4xl mx-auto mb-12" data-astro-cid-7jjqptxk> <div class="text-center mb-8" data-astro-cid-7jjqptxk> <!-- Category and Meta Info --> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-7jjqptxk> ${entry.data.category && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "class": `bg-${categoryColor}-500/20 text-${categoryColor}-300`, "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate`${entry.data.category}` })}`} ${renderComponent($$result2, "Badge", $$Badge, { "class": "bg-gray-500/20 text-gray-300", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate`${readingTime} min read
` })} ${renderComponent($$result2, "Badge", $$Badge, { "class": "bg-gray-500/20 text-gray-300", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate`${new Date(entry.data.pubDate).toLocaleDateString()}` })} </div> <!-- Title --> <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-astro-cid-7jjqptxk> <span${addAttribute(`text-${categoryColor}-400 golden-shimmer`, "class")} data-astro-cid-7jjqptxk> ${entry.data.title} </span> </h1> <!-- Description --> ${entry.data.description && renderTemplate`<p class="text-lg text-green-200/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-7jjqptxk> ${entry.data.description} </p>`} <!-- Featured Image --> ${entry.data.image && renderTemplate`<div class="w-full max-w-3xl mx-auto mb-8" data-astro-cid-7jjqptxk> <div${addAttribute(`bg-gradient-to-br from-${categoryColor}-400/20 to-${categoryColor}-500/20 rounded-2xl p-2 overflow-hidden`, "class")} data-astro-cid-7jjqptxk> <img${addAttribute(entry.data.image.url, "src")}${addAttribute(entry.data.image.alt, "alt")} class="w-full h-64 lg:h-96 object-cover rounded-xl" data-astro-cid-7jjqptxk> </div> </div>`} <!-- Tags --> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap items-center justify-center gap-2 mb-8" data-astro-cid-7jjqptxk> ${entry.data.tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "class": "bg-slate-700/50 text-slate-300 text-xs", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate`
#${tag}` })}`)} </div>`} </div> </div> <!-- Article Content --> <div class="max-w-4xl mx-auto" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Card", $$Card, { "class": `border border-${categoryColor}-600/30 bg-slate-900/50 rounded-2xl overflow-hidden mb-12`, "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "p-8 lg:p-12", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result4) => renderTemplate` <div class="prose prose-lg prose-invert max-w-none" data-astro-cid-7jjqptxk> ${renderComponent($$result4, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </div> ` })} ` })} </div> <!-- Article Actions --> <div class="max-w-4xl mx-auto mb-16" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-green-600/30 bg-green-900/20 rounded-2xl overflow-hidden", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "p-6 lg:p-8 text-center", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result4) => renderTemplate` <div class="text-4xl mb-4 text-green-400" data-astro-cid-7jjqptxk>💡</div> <h3 class="text-xl font-bold text-green-100 mb-4" data-astro-cid-7jjqptxk>
Found This Helpful?
</h3> <p class="text-green-200/80 mb-6 max-w-2xl mx-auto" data-astro-cid-7jjqptxk>
Share your thoughts with other therapy educators or explore more
                insights from the training revolution.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-7jjqptxk> ${renderComponent($$result4, "Button", Button, { "className": "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-full", "data-demo-link": "/demo-hub", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate`
Try Our Training Demos →
` })} ${renderComponent($$result4, "Button", Button, { "variant": "outline", "className": "border-green-500/50 text-green-300 hover:bg-green-500/10 px-6 py-3 rounded-full", "data-blog-link": "/blog", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate`
Read More Articles
` })} </div> ` })} ` })} </div> <!-- Related Posts --> ${relatedPosts.length > 0 && renderTemplate`<div class="max-w-6xl mx-auto mb-16" data-astro-cid-7jjqptxk> <div class="text-center mb-12" data-astro-cid-7jjqptxk> <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4" data-astro-cid-7jjqptxk>
You Might Also
<span${addAttribute(`text-${categoryColor}-400 golden-shimmer`, "class")} data-astro-cid-7jjqptxk>
Enjoy
</span> </h2> <p class="text-base text-green-100/90 max-w-2xl mx-auto" data-astro-cid-7jjqptxk>
More insights from the therapy training revolution
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-7jjqptxk> ${relatedPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "border border-slate-600/30 hover:border-slate-400/60 rounded-2xl overflow-hidden group transition-all duration-700 organic-card bg-slate-900/50", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, { "class": "pb-4", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result4) => renderTemplate`${post.data.image && renderTemplate`<div class="w-full h-40 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg mb-4 overflow-hidden" data-astro-cid-7jjqptxk> <img${addAttribute(post.data.image.url, "src")}${addAttribute(post.data.image.alt, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-astro-cid-7jjqptxk> </div>`}${post.data.category && renderTemplate`${renderComponent($$result4, "Badge", $$Badge, { "class": "bg-slate-500/20 text-slate-300 text-xs mb-3", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate`${post.data.category}` })}`}${renderComponent($$result4, "CardTitle", $$CardTitle, { "class": "text-base font-bold text-slate-100 tracking-wide mb-3 group-hover:text-slate-50 transition-colors", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate` <a${addAttribute(`/blog/${post.data.slug || post.slug}`, "href")} class="hover:underline" data-astro-cid-7jjqptxk> ${post.data.title} </a> ` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, { "class": "text-sm text-slate-200/80 leading-relaxed mb-4", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate`${post.data.description}` })} <div class="flex items-center justify-between text-xs text-slate-300/70" data-astro-cid-7jjqptxk> <span data-astro-cid-7jjqptxk> ${new Date(post.data.pubDate).toLocaleDateString()} </span> </div> ` })} ` })}`)} </div> </div>`} <!-- Newsletter Signup --> <div class="max-w-4xl mx-auto" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Card", $$Card, { "class": "border border-blue-500/40 bg-slate-900/50 rounded-3xl overflow-hidden", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", $$CardContent, { "class": "p-8 lg:p-12 text-center", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result4) => renderTemplate` <div class="text-6xl text-blue-400 mb-6" data-astro-cid-7jjqptxk>📬</div> <h2 class="text-2xl lg:text-3xl font-bold text-blue-100 mb-6" data-astro-cid-7jjqptxk>
Stay Ahead of the
<br data-astro-cid-7jjqptxk> <span class="text-blue-400 golden-shimmer" data-astro-cid-7jjqptxk>Training Revolution</span> </h2> <p class="text-base text-blue-200/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-astro-cid-7jjqptxk>
Get weekly insights like this delivered to your inbox.
                University success stories, breakthrough research, and practical
                tips for therapy educators.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 max-w-md mx-auto" data-astro-cid-7jjqptxk> <input type="email" placeholder="your.email@university.edu" class="flex-1 px-4 py-3 rounded-full bg-slate-800/50 border border-blue-500/30 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:border-blue-400" data-astro-cid-7jjqptxk> ${renderComponent($$result4, "Button", Button, { "className": "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result5) => renderTemplate`
Subscribe
` })} </div> <p class="text-xs text-blue-300/70" data-astro-cid-7jjqptxk>
📧 Weekly insights • 🎓 University-focused • 🔒 No spam, ever
</p> ` })} ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/blog/[...slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/blog/[...slug].astro", void 0);

const $$file = "/root/pixel/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

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
