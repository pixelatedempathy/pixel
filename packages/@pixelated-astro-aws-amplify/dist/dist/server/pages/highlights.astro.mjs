;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="509ac0fd-1277-43c6-a060-f7647f7918e8",e._sentryDebugIdIdentifier="sentry-dbid-509ac0fd-1277-43c6-a060-f7647f7918e8")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, ar as unescapeHTML } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { g as getCollection } from '../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D_Lh64bK.mjs';
import { $ as $$Link } from '../chunks/Link_urbCl899.mjs';
import { f as formatDate } from '../chunks/datetime_q4GKrHnk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$SwiperCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SwiperCarousel;
  const { images, imageProps = {}, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "swiper-container", "swiper-container", { "style": "--swiper-pagination-color: #374151", "class": className, "pagination": "true", "pagination-clickable": "true", "autoplay-delay": "3000", "autoplay-disable-on-interaction": "true", "mousewheel": "true", "effect": "fade" }, { "default": () => renderTemplate` ${images.map((item) => renderTemplate`${renderComponent($$result, "swiper-slide", "swiper-slide", {}, { "default": () => renderTemplate` ${typeof item.src === "string" ? renderTemplate`${maybeRenderHead()}<img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")}${addAttribute(imageProps.width || 1200, "width")}${addAttribute(imageProps.height || 675, "height")} class="aspect-[16/9] object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item.src, "alt": item.alt, "width": imageProps.width || 1200, "height": imageProps.height || 675, "quality": imageProps.quality, "class": "aspect-[16/9] object-cover" })}`} ` })}`)} ` })} ${renderScript($$result, "/root/pixel/src/components/widgets/SwiperCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/widgets/SwiperCarousel.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$CardItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardItem;
  const {
    // idx,
    item,
    imageProps,
    videoProps,
    class: className
  } = Astro2.props;
  const MAX_DETAILS = 3;
  const { date, text, html, link, images, video, external, quote, details } = item;
  const MediaContainer = link ? $$Link : "div";
  const Content = details ? "collapsible-content" : "div";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(className, "class")}> <div class="overflow-hidden flex flex-col
      b b-[#8884] rounded-lg bg-white dark:bg-black
      shadow-transition-500 hover:(shadow-custom_0_3_20_-5)"> ${(images && images.length > 0 || video) && renderTemplate`${renderComponent($$result, "MediaContainer", MediaContainer, { "class": "b-b b-b-[#8884] op-100!", ...MediaContainer === $$Link ? { href: link } : {} }, { "default": ($$result2) => renderTemplate`${images && images.length > 0 && (images.length > 1 ? renderTemplate`${renderComponent($$result2, "SwiperCarousel", $$SwiperCarousel, { "images": images, "imageProps": {
    width: 1200,
    height: 675
  } })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "aspect-[16/9] object-cover", "src": images[0].src, "alt": images[0].alt, "width": 1200, "height": 675, ...imageProps })}`)}${video && renderTemplate`<video class="w-full aspect-[16/9] object-cover"${addAttribute(video.src, "src")}${addAttribute(video.thumbnail, "poster")}${addAttribute(video.alt, "aria-label")} autoplay muted loop playsinline${spreadAttributes(videoProps)}></video>`}` })}`} ${external && renderTemplate`${renderComponent($$result, "Link", $$Link, { "class": "overflow-hidden flex flex-col b b-[#8884] rounded-lg mt-3 mx-3 op-100! shadow-transition-500 hover:(shadow-custom_0_5_15_-3)", "href": external.uri }, { "default": ($$result2) => renderTemplate`${external.thumb && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "b-b b-b-[#8884] aspect-[1.91/1] object-cover", "src": external.thumb, "alt": external.title, "width": 1200, "height": 628, ...imageProps })}`}<div class="flex flex-col px-3 pt-2 pb-1"> <div class="flex flex-col gap-1 pb-1.5 b-b b-b-[#8884]"> <p class="text-sm font-600">${external.title}</p> <p class="text-xs">${external.description}</p> </div> <div class="flex items-center gap-1 pt-1 text-[0.72rem] op-70"> <div u-i-lucide-globe class="size-1em" aria-hidden="true"></div> <p>${new URL(external.uri).hostname}</p> </div> </div> ` })}`} ${quote && renderTemplate`<div class="overflow-hidden flex flex-col gap-2 b b-[#8884] rounded-lg p-2 mt-3 mx-3 text-sm shadow-transition-500 hover:(shadow-custom_0_5_15_-3)"> <div class="flex items-center gap-1"> ${renderComponent($$result, "Image", $$Image, { "class": "size-1em rounded-full object-cover", "src": quote.author.avatar, "alt": quote.author.name, "inferSize": true })} <p class="truncate"> <span class="font-600">${quote.author.name}</span> ${renderComponent($$result, "Link", $$Link, { "class": "op-transition", "href": quote.author.link }, { "default": ($$result2) => renderTemplate`${`@${quote.author.handle}`}` })} </p> </div> ${renderComponent($$result, "Link", $$Link, { "class": "op-80!", "href": quote.uri }, { "default": ($$result2) => renderTemplate` <p class="line-height-normal">${quote.text}</p> ` })} </div>`} ${renderComponent($$result, "Content", Content, { "class": "p-4 pb-3" }, { "default": ($$result2) => renderTemplate`${html && renderTemplate`<div class="prose card-item-prose">${unescapeHTML(html)}</div>`}${text && renderTemplate`<p class="prose card-item-prose">${text}</p>`}${details && renderTemplate`<div class="card-item-details" style="max-height: 0; overflow-y: clip;"> <ol class="relative border-s border-gray-200 dark:border-gray-700"> ${details.slice(0, MAX_DETAILS + 1).map((detail, idx) => renderTemplate`<li class="ms-4 mb-6 last:mb-0"> <div class="absolute start--1.6 w-3 h-3 border rounded-full border-white dark:border-gray-900 mt-1.5 bg-gray-200 dark:bg-gray-700"></div> ${idx < MAX_DETAILS && renderTemplate`<div class="prose card-item-prose">${unescapeHTML(detail)}</div>`} ${link && idx === MAX_DETAILS && renderTemplate`${renderComponent($$result2, "Link", $$Link, { "class": "prose card-item-prose op-100!", "href": link }, { "default": ($$result3) => renderTemplate`
View more...
` })}`} </li>`)} </ol> </div>`}${date && renderTemplate`<div class="flex justify-between items-center pt-3 text-sm"> ${link ? renderTemplate`${renderComponent($$result2, "Link", $$Link, { "class": "flex-auto op-transition", "href": link }, { "default": ($$result3) => renderTemplate`${formatDate(date, false)}` })}` : renderTemplate`<p class="op-60">${formatDate(date, false)}</p>`} ${details && renderTemplate`<button class="details-switch op-50 op-transition hover:op-100"> <div u-i-lucide-chevron-down class="icon-down"></div> <div u-i-lucide-chevron-up class="icon-up hidden"></div> </button>`} </div>`}` })} </div> </section> ${renderScript($$result, "/root/pixel/src/components/views/CardItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/views/CardItem.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$CardView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardView;
  const {
    collectionType,
    mode = "masonry",
    gap = 16,
    minCardWidth = 350,
    maxCardWidth = 1e3
  } = Astro2.props;
  const collectionItems = await getCollection(collectionType);
  return renderTemplate`${mode === "masonry" && renderTemplate`${renderComponent($$result, "responsive-masonry", "responsive-masonry", { "class": "block relative w-full min-h-screen op-0 op-transition-500", "data-gap": gap, "data-min-card-width": minCardWidth, "data-max-card-width": maxCardWidth }, { "default": () => renderTemplate`${collectionItems.map((item) => renderTemplate`${renderComponent($$result, "CardItem", $$CardItem, { "class": "card-masonry absolute top-0 left-0", "item": item })}`)}` })}`}${renderScript($$result, "/root/pixel/src/components/views/CardView.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/views/CardView.astro", void 0);

const $$Highlights = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Highlights",
    subtitle: "Showcase your creative work or curated posts",
    description: "Showcase your creative work or curated posts"};
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-white mb-4">${frontmatter.title}</h1> <p class="text-lg text-slate-400 mb-12">${frontmatter.subtitle}</p> ${renderComponent($$result2, "CardView", $$CardView, { "collectionType": "highlights" })} </div> </section> ` })}`;
}, "/root/pixel/src/pages/highlights.astro", void 0);

const $$file = "/root/pixel/src/pages/highlights.astro";
const $$url = "/highlights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Highlights,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
