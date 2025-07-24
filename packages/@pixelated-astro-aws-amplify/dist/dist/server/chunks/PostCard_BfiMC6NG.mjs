;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="370a6d81-97c8-4dd8-99e6-46a0334f634a",e._sentryDebugIdIdentifier="sentry-dbid-370a6d81-97c8-4dd8-99e6-46a0334f634a")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_Ck5BzePu.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="transition-all duration-300"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="group block rounded-xl border border-slate-700 bg-slate-800/40 backdrop-blur-md shadow-lg hover:border-green-400/70 hover:shadow-green-400/10 transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400/70 hover:scale-[1.03] duration-200"> ${post.data.image?.url && renderTemplate`<img${addAttribute(post.data.image.url, "src")}${addAttribute(post.data.image.alt ?? post.data.title, "alt")} class="w-full h-44 object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy">`} <div class="p-5 flex flex-col gap-2"> <span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold text-green-300 bg-green-900/30 mb-1"> ${post.data.category ?? "Blog"} </span> <h2 class="text-xl font-bold text-slate-100 group-hover:text-green-400 mb-1 transition-colors line-clamp-2 tracking-tight font-geist">${post.data.title}</h2> <p class="text-sm text-slate-300 line-clamp-3 mb-2">${post.data.description}</p> <div class="flex items-center gap-2 mt-auto"> <img src="/assets/avatar-default.svg" alt="Author avatar" class="w-7 h-7 rounded-full border border-green-400/30"> <span class="text-xs text-slate-400">By ${post.data.author ?? "Pixelated Empathy"}</span> <time class="text-xs text-slate-400 ml-auto">${new Date(post.data.pubDate).toLocaleDateString()}</time> </div> </div> </a> </li>`;
}, "/root/pixel/src/components/blog/PostCard.astro", void 0);

export { $$PostCard as $ };
