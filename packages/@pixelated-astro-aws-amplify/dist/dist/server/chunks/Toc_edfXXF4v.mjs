;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7153be55-a2b4-44ef-a390-3cc6a29d1676",e._sentryDebugIdIdentifier="sentry-dbid-7153be55-a2b4-44ef-a390-3cc6a29d1676")}catch(e){}}();import { c as createComponent, m as maybeRenderHead, h as renderSlot, d as renderScript, a as renderTemplate, b as createAstro, r as renderComponent, e as addAttribute } from './astro/server_t-wqd6mp.mjs';
import { $ as $$Link } from './Link_DHpR9-Fz.mjs';
import 'clsx';
import { s as slug } from './common_Dp__P9nz.mjs';
import { F as FEATURES } from './config_f05_Kix0.mjs';

const $$TocButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="toc-open-button" class="z-50 fixed right-5 bottom-18
    w-10 h-10 rounded-full
    op-0 bg-#8883 dark:bg-#8886 pointer-events-none op-transition
    lt-lgp:(op-50 pointer-events-auto)
    hover:op-100 print:hidden" title="Open table of contents"> <div u-i-lucide-table-of-contents></div> </button> <nav id="toc-panel" class="z-200 fixed top-20 left-5% right-5%
    flex flex-col
    w-90% max-h-82vh py-6 px-8 rounded-lg
    bg-[var(--c-bg)]"> <div class="pb-1 b-b b-[var(--c-scrollbar)] op-80 text-4.4 font-600">
Table of Contents
</div> <ul> ${renderSlot($$result, $$slots["default"])} </ul> </nav> ${renderScript($$result, "/root/pixel/src/components/toc/TocButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/toc/TocButton.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$TocItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TocItem;
  const { heading } = Astro2.props;
  const { slug, children, text } = heading;
  return renderTemplate`${maybeRenderHead()}<li> ${slug && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": `#${slug}`, "aria-label": `Scroll to ${text}` }, { "default": ($$result2) => renderTemplate`${text}` })}`} ${!!children.length && renderTemplate`<ul> ${children.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/root/pixel/src/components/toc/TocItem.astro", void 0);

function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    const depthDiff = item.depth - lastItem.depth;
    if (depthDiff > 1) {
      let currentDepth = lastItem.depth + 1;
      let currentItems = lastItem.children;
      while (currentDepth < item.depth) {
        const fillerItem = {
          depth: currentDepth,
          children: [],
          slug: "",
          text: ""
        };
        currentItems.push(fillerItem);
        currentItems = fillerItem.children;
        currentDepth++;
      }
      currentItems.push(item);
    } else {
      injectChild(lastItem.children, item);
    }
  }
}
function generateToc(headings, minHeadingLevel, maxHeadingLevel) {
  if (minHeadingLevel > maxHeadingLevel) {
    throw new Error(
      "`minHeadingLevel` must be less than or equal to `maxHeadingLevel`"
    );
  }
  const bodyHeadings = headings.filter(
    ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
  );
  const toc = [];
  for (const heading of bodyHeadings)
    injectChild(toc, { ...heading, children: [] });
  return toc;
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Toc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Toc;
  const { headings = [], category = [], years = [], style } = Astro2.props;
  const getTocConfig = () => {
    const defaultConfig = {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: "left",
      displayMode: "hover"
    };
    if (!Array.isArray(FEATURES.toc) || false) {
      return defaultConfig;
    }
    return { ...defaultConfig, ...FEATURES.toc[1] };
  };
  const isArticle = !!headings.length;
  const { minHeadingLevel, maxHeadingLevel, displayPosition, displayMode } = getTocConfig();
  const specHeadings = generateToc(headings, minHeadingLevel, maxHeadingLevel);
  const iconClasses = [
    "toc-desktop-anchor",
    displayPosition === "left" ? "i-ri-menu-2-fill" : "i-ri-menu-3-fill",
    displayMode === "always" ? "op-60" : ""
  ].filter(Boolean);
  return renderTemplate`${maybeRenderHead()}<aside> ${renderComponent($$result, "table-of-contents", "table-of-contents", { "data-min-h": isArticle ? minHeadingLevel : void 0, "data-max-h": isArticle ? maxHeadingLevel : void 0 }, { "default": () => renderTemplate` <!-- Greater than or equal to 1128px --> <nav${addAttribute(`toc-desktop ${displayPosition === "right" ? "toc-desktop-right" : ""}
      ${displayMode === "always" ? "toc-desktop-on" : ""}`, "class")}${addAttribute(style, "style")}> <div${addAttribute(iconClasses.join(" "), "class")}></div> <ul> ${!!specHeadings.length && specHeadings.map((heading) => renderTemplate`${renderComponent($$result, "TocItem", $$TocItem, { "heading": heading })}`)} ${!!category.length && category.map((item) => renderTemplate`<li> ${renderComponent($$result, "Link", $$Link, { "href": `#${slug(item)}`, "aria-label": `Scroll to ${item}` }, { "default": ($$result2) => renderTemplate`${item}` })} </li>`)} ${!!years.length && years.map((item) => renderTemplate`<li> ${renderComponent($$result, "Link", $$Link, { "href": `#${slug(item)}`, "aria-label": `Scroll to ${item}` }, { "default": ($$result2) => renderTemplate`${item}` })} </li>`)} </ul> </nav> <!-- less than 1024px --> ${renderComponent($$result, "TocButton", $$TocButton, {}, { "default": ($$result2) => renderTemplate`${!!specHeadings.length && specHeadings.map((heading) => renderTemplate`${renderComponent($$result2, "TocItem", $$TocItem, { "heading": heading })}`)}${!!category.length && category.map((item) => renderTemplate`<li> ${renderComponent($$result2, "Link", $$Link, { "href": `#${slug(item)}`, "aria-label": `Scroll to ${item}` }, { "default": ($$result3) => renderTemplate`${item}` })} </li>`)}${!!years.length && years.map((item) => renderTemplate`<li> ${renderComponent($$result2, "Link", $$Link, { "href": `#${slug(item)}`, "aria-label": `Scroll to ${item}` }, { "default": ($$result3) => renderTemplate`${item}` })} </li>`)}` })} ` })} </aside> ${renderScript($$result, "/root/pixel/src/components/toc/Toc.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/toc/Toc.astro", void 0);

export { $$Toc as $ };
