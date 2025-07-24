;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6faff19b-aa82-49b5-b21b-3721c2f1a1db",e._sentryDebugIdIdentifier="sentry-dbid-6faff19b-aa82-49b5-b21b-3721c2f1a1db")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, h as renderSlot, e as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import 'clsx';
import { e as ensureTrailingSlash, g as getUrl } from '../chunks/common_Dp__P9nz.mjs';
import { U as UI, F as FEATURES } from '../chunks/config_f05_Kix0.mjs';
/* empty css                                 */
import { g as getCollection, a as getEntry, r as renderEntry } from '../chunks/_astro_content_BJQReLnb.mjs';
import { $ as $$Categorizer } from '../chunks/Categorizer_BbJNXQa1.mjs';
import { $ as $$Link } from '../chunks/Link_DHpR9-Fz.mjs';
import { f as formatDate, g as getYear, i as isSameYear } from '../chunks/datetime_DVMvA6US.mjs';
import { $ as $$Toc } from '../chunks/Toc_edfXXF4v.mjs';
import { $ as $$Warning } from '../chunks/Warning_BTMKXVUP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://pixelatedempathy.com");
const $$TabbedLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabbedLayout;
  const { subtitle } = Astro2.props;
  let tabs;
  if (!UI.tabbedLayoutTabs || Array.isArray(UI.tabbedLayoutTabs) && UI.tabbedLayoutTabs.length === 0) {
    throw new Error("`UI.tabbedLayoutTabs` is not configured.");
  } else {
    tabs = UI.tabbedLayoutTabs;
  }
  const currentPath = ensureTrailingSlash(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<nav id="nav-tabs" class="prose mx-auto mb-8" aria-label="Page sections" data-astro-cid-dndmyvxb> <div u-flex="~ gap-3 lt-sm:(col wrap gap-1)" class="mb-0 text-3xl select-none" role="tablist" data-astro-cid-dndmyvxb> ${tabs.map((tab) => renderTemplate`<a${addAttribute({
    "link": true,
    "op-transition!": true,
    "active": currentPath === getUrl(ensureTrailingSlash(tab.path)),
    "inactive": currentPath !== getUrl(ensureTrailingSlash(tab.path))
  }, "class:list")}${addAttribute(getUrl(ensureTrailingSlash(tab.path)), "href")} role="tab"${addAttribute(
    currentPath === getUrl(ensureTrailingSlash(tab.path)) ? "page" : false,
    "aria-current"
  )} data-astro-cid-dndmyvxb> ${tab.title} </a>`)} </div> ${subtitle && renderTemplate`<p class="mt-4! op-50 italic" data-astro-cid-dndmyvxb>${subtitle}</p>`} </nav> <div class="prose mx-auto" data-astro-cid-dndmyvxb> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/root/pixel/src/layouts/TabbedLayout.astro", void 0);

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListItem;
  const {
    idx,
    redirect,
    collectionType,
    postSlug,
    title,
    video,
    radio,
    date,
    minutesRead,
    platform
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slide-enter"${addAttribute({ "--enter-stage": idx }, "style")}> ${renderComponent($$result, "Link", $$Link, { "u-flex": "~ items-center lt-md:(col items-start) gap-2", "class": "border-b-none! mb-6 mt-2 op-transition!", "href": redirect ?? getUrl(`/${collectionType}/${postSlug}/`), "external": redirect ? true : false, "enableNewTabWarning": redirect ? true : false }, { "end": ($$result2) => renderTemplate`<span u-flex="~ gap-2 items-center"> ${video && renderTemplate`<span u-i-ri-film-line class="flex-none op-50 align-middle" title="Provided in video" aria-label="Provided in video"></span>`} ${radio && renderTemplate`<span u-i-ri-radio-line class="flex-none op-50 align-middle" title="Provided in radio" aria-label="Provided in radio"></span>`} <time class="op-50 text-sm ws-nowrap"${addAttribute(new Date(date).toISOString(), "datetime")}> ${formatDate(date, false)} </time> ${typeof minutesRead === "number" && minutesRead > 0 && renderTemplate`<span class="op-40 text-sm ws-nowrap">· ${minutesRead} min read</span>`} ${platform && renderTemplate`<span class="op-40 text-sm ws-nowrap">· ${platform}</span>`} </span>`, "title": ($$result2) => renderTemplate`<div>${title}</div>` })} </div>`;
}, "/root/pixel/src/components/views/ListItem.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$ListView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListView;
  const { collectionType, pageToc } = Astro2.props;
  const { toc } = FEATURES;
  const tocEnabled = Array.isArray(toc) && toc[0] && pageToc;
  let years = [];
  let blogItems = [];
  let sortedBlogItems = [];
  if (collectionType === "blog" || collectionType === "changelog") {
    const postType = collectionType === "blog" ? "blog" : "docs";
    blogItems = await getCollection(postType);
    sortedBlogItems = blogItems.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
    if (tocEnabled) {
      const yearsSet = /* @__PURE__ */ new Set();
      sortedBlogItems.forEach((item) => {
        const year = getYear(item.data.pubDate);
        yearsSet.add(year);
      });
      years = Array.from(yearsSet).sort((a, b) => b - a).map((year) => year.toString());
    }
  }
  let streamItems = [];
  let sortedStreamItems = [];
  if (collectionType === "streams") {
    const streamData = await getEntry("streams", "data");
    if (streamData) {
      streamItems = streamData.data.streams;
      sortedStreamItems = streamItems.sort(
        (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
      );
      if (tocEnabled) {
        const yearsSet = /* @__PURE__ */ new Set();
        sortedStreamItems.forEach((item) => {
          const year = getYear(item.pubDate);
          yearsSet.add(year);
        });
        years = Array.from(yearsSet).sort((a, b) => b - a).map((year) => year.toString());
      }
    }
  }
  let feedItems = [];
  let sortedFeedItems = [];
  if (collectionType === "feeds") {
    feedItems = await getCollection("feeds");
    const feedsData = feedItems.length > 0 ? feedItems[0].data : void 0;
    if (Array.isArray(feedsData)) {
      sortedFeedItems = [...feedsData].sort((a, b) => {
        if (!a.pubDate || !b.pubDate)
          throw new Error("Feed item is missing 'pubDate' field.");
        return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
      });
    } else {
      sortedFeedItems = [];
      if (feedsData !== void 0) {
        console.warn(
          `Expected feedsData to be an array, but got: ${typeof feedsData}. Check the structure of your 'feeds' collection.`
        );
      }
    }
    if (tocEnabled && sortedFeedItems.length > 0) {
      const yearsSet = /* @__PURE__ */ new Set();
      sortedFeedItems.forEach((item) => {
        const year = getYear(new Date(item.pubDate));
        yearsSet.add(year);
      });
      years = Array.from(yearsSet).sort((a, b) => b - a).map((year) => year.toString());
    }
  }
  const warningHTML = `The '${collectionType}' collection type does no
  belong to the built-in types 'blog', 'feeds', or 'streams'. You may
  need to modify the <code>ListView.astro</code> logic for your defined
  collection types to render the list.`;
  return renderTemplate`${tocEnabled && renderTemplate`${renderComponent($$result, "Toc", $$Toc, { "years": years })}`}${(collectionType === "blog" || collectionType === "changelog") && renderTemplate`${maybeRenderHead()}<div aria-label="Post list">${sortedBlogItems.length === 0 ? renderTemplate`<div class="py-2 op-50">nothing here yet</div>` : sortedBlogItems.map(async (item, idx) => {
    const data = item.data;
    const slug = item.id;
    const rendered = await renderEntry(item);
    const remarkPluginFrontmatter = rendered.remarkPluginFrontmatter;
    const minutesRead = "minutesRead" in data ? data.minutesRead : remarkPluginFrontmatter && "minutesRead" in remarkPluginFrontmatter ? remarkPluginFrontmatter.minutesRead : void 0;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${!isSameYear(
      data.pubDate,
      sortedBlogItems[idx - 1]?.data.pubDate
    ) && renderTemplate`${renderComponent($$result2, "Categorizer", $$Categorizer, { "idx": idx, "needId": tocEnabled, "text": getYear(data.pubDate).toString() })}`}${renderComponent($$result2, "ListItem", $$ListItem, { "idx": idx, "collectionType": collectionType, "redirect": "redirect" in data ? data.redirect : void 0, "postSlug": slug, "title": data.title, "video": "video" in data ? data.video : void 0, "radio": "radio" in data ? data.radio : void 0, "date": data.pubDate, "minutesRead": minutesRead || void 0, "platform": "platform" in data ? data.platform : void 0 })}` })}`;
  })}</div>`}${collectionType === "streams" && renderTemplate`<div aria-label="Stream list">${sortedStreamItems.length === 0 ? renderTemplate`<div class="py-2 op-50">nothing here yet</div>` : sortedStreamItems.map((item, idx) => {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${!isSameYear(
      item.pubDate,
      sortedStreamItems[idx - 1]?.pubDate
    ) && renderTemplate`${renderComponent($$result2, "Categorizer", $$Categorizer, { "idx": idx, "needId": tocEnabled, "text": getYear(item.pubDate).toString() })}`}${renderComponent($$result2, "ListItem", $$ListItem, { "idx": idx, "collectionType": collectionType, "redirect": item.link, "title": item.id, "video": item.video, "radio": item.radio, "date": item.pubDate, "platform": item.platform })}` })}`;
  })}</div>`}${collectionType === "feeds" && renderTemplate`<div aria-label="Feed list">${sortedFeedItems.length === 0 ? renderTemplate`<div class="py-2 op-50">nothing here yet</div>` : sortedFeedItems.map((item, idx) => {
    if (!item.link) throw new Error(`Feed item is missing 'link' field.`);
    if (!item.title)
      throw new Error(`Feed item is missing 'title' field.`);
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${idx > 0 && !isSameYear(
      new Date(item.pubDate),
      new Date(sortedFeedItems[idx - 1]?.pubDate || "")
    ) && renderTemplate`${renderComponent($$result2, "Categorizer", $$Categorizer, { "idx": idx, "needId": tocEnabled, "text": getYear(new Date(item.pubDate)).toString() })}`}${renderComponent($$result2, "ListItem", $$ListItem, { "idx": idx, "collectionType": collectionType, "redirect": item.link, "title": item.title, "date": item.pubDate })}` })}`;
  })}</div>`}${!["blog", "changelog", "feeds", "streams"].includes(collectionType) && renderTemplate`${renderComponent($$result, "Warning", $$Warning, { "rawHTMLString": warningHTML })}`}`;
}, "/root/pixel/src/components/views/ListView.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Feeds = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feeds;
  const frontmatter = {
    title: "Astro Blog",
    description: "Example: fetching Astro Blog using @ascorbic/feed-loader",
    subtitle: "Example: fetching Astro Blog using @ascorbic/feed-loader",
    bgType: false,
    toc: true,
    ogImage: false
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description, "bgType": frontmatter.bgType, "ogImage": frontmatter.ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TabbedLayout", $$TabbedLayout, { "subtitle": frontmatter.subtitle }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ListView", $$ListView, { "pageToc": frontmatter.toc, "collectionType": "feeds" })} ` })} ` })}`;
}, "/root/pixel/src/pages/feeds.astro", void 0);

const $$file = "/root/pixel/src/pages/feeds.astro";
const $$url = "/feeds";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feeds,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
