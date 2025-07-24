;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a25c6068-b045-47e3-ab11-85cd4080d83d",e._sentryDebugIdIdentifier="sentry-dbid-a25c6068-b045-47e3-ab11-85cd4080d83d")}catch(e){}}();import { b as createAstro, c as createComponent, as as defineStyleVars, r as renderComponent, d as renderScript, a as renderTemplate, ar as unescapeHTML, e as addAttribute, F as Fragment, m as maybeRenderHead } from './astro/server_Ck5BzePu.mjs';
import { $ as $$ClientRouter } from './ClientRouter_Csvw1MIg.mjs';
/* empty css                                  */
import { g as getUrl } from './common_BfWY_4NZ.mjs';
import { S as SITE } from './config_Piylsppw.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$PageTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageTransitions;
  const { mode = "default", duration = 300 } = Astro2.props;
  const transitions = {
    "default": {
      old: { opacity: "0", transform: "scale(0.96)" },
      new: { opacity: "0", transform: "scale(1.04)" }
    },
    "fade": {
      old: { opacity: "0" },
      new: { opacity: "0" }
    },
    "slide": {
      old: { opacity: "0", transform: "translateX(-2%)" },
      new: { opacity: "0", transform: "translateX(2%)" }
    },
    "slide-up": {
      old: { opacity: "0", transform: "translateY(2%)" },
      new: { opacity: "0", transform: "translateY(-2%)" }
    },
    "slide-down": {
      old: { opacity: "0", transform: "translateY(-2%)" },
      new: { opacity: "0", transform: "translateY(2%)" }
    },
    "zoom": {
      old: { opacity: "0", transform: "scale(0.9)" },
      new: { opacity: "0", transform: "scale(1.1)" }
    }
  };
  const currentTransition = transitions[mode];
  const oldOpacity = currentTransition.old.opacity || "1";
  const oldTransform = currentTransition.old.transform || "none";
  const newOpacity = currentTransition.new.opacity || "1";
  const newTransform = currentTransition.new.transform || "none";
  defineStyleVars([{
    duration: `${duration}ms`,
    oldOpacity,
    oldTransform,
    newOpacity,
    newTransform
  }]);
  return renderTemplate`${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-mlb2iem4": true })}  <!-- Script to handle custom transitions logic --> ${renderScript($$result, "/root/pixel/src/components/transitions/PageTransitions.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/transitions/PageTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const {
    title,
    description,
    pubDate,
    lastModDate,
    transitionMode = "slide"
  } = Astro2.props;
  const pageTitle = title && title !== SITE.title ? `${title} - ${SITE.title}` : SITE.title;
  const pageDescription = description || SITE.description;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImageURL = getUrl("og-images", "og-image.png");
  const blogPostingData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": pageTitle,
    "image": ogImageURL,
    "url": canonicalURL,
    "datePublished": pubDate,
    ...lastModDate && { dateModified: lastModDate },
    ...description && { description },
    "author": {
      "@type": "Person",
      "name": SITE.author,
      "url": SITE.website
    }
  };
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "webPage",
    "name": `${title || SITE.title}`,
    ...description && { description },
    "publisher": {
      "@type": "ProfilePage",
      "name": `${SITE.author}'s Personal Website`
    }
  };
  return renderTemplate(_c || (_c = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- Primary Metadata --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><!-- Color --><meta name="theme-color" content="#4a9a95"><meta name="color-scheme" content="light dark"><!-- Fonts and Styles --><link rel="stylesheet"', '><!-- Three.js is imported dynamically in components that need it --><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale"', ">", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Icon --><link rel="icon" sizes="any"', '><link rel="icon" type="image/svg+xml"', '><link rel="apple-touch-icon"', '><!-- Manifest --><link rel="manifest"', '><link rel="alternate" type="application/manifest+json"', '><!-- Sitemap --><link rel="sitemap"', '><!-- RSS --><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><!-- Google JSON-LD Structured Data -->', "<!-- Page Transitions Component -->", '<!-- Replace external polyfill.io with local polyfills --><script src="/js/feature-detector.js"><\/script>'])), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(SITE.author, "content"), addAttribute(getUrl("/css/fonts.css"), "href"), addAttribute(pubDate ? "article" : "website", "content"), addAttribute(canonicalURL, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(ogImageURL, "content"), addAttribute(SITE.title, "content"), addAttribute(SITE.ogLocale, "content"), pubDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(SITE.author, "content")}><meta property="article:published_time"${addAttribute(pubDate, "content")}><meta property="article:modified_time"${addAttribute(lastModDate, "content")}>` })}`, addAttribute(canonicalURL, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(ogImageURL, "content"), addAttribute(canonicalURL, "href"), addAttribute(getUrl("/favicon.ico"), "href"), addAttribute(getUrl("/favicon.svg"), "href"), addAttribute(getUrl("/apple-touch-icon.png"), "href"), addAttribute(getUrl("/manifest.webmanifest"), "href"), addAttribute(getUrl("/manifest.json"), "href"), addAttribute(getUrl("/sitemap-index.xml"), "href"), addAttribute(getUrl("/rss.xml"), "title"), pubDate ? renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(blogPostingData))) : renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(webPageData))), renderComponent($$result, "PageTransitions", $$PageTransitions, { "mode": transitionMode, "duration": 350 }));
}, "/root/pixel/src/components/base/Head.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { showSocialLinks = true, className = "" } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`w-full py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto ${className}`, "class")}> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="col-span-1 md:col-span-2"> <a href="/" class="flex items-center gap-2 mb-4"> <img src="/favicon.svg" alt="Logo" class="w-8 h-8"> <span class="text-xl font-bold brand-title">Pixelated Empathy</span> </a> <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
Secure AI therapy platform with advanced encryption for maximum
          privacy and HIPAA compliance.
</p> ${showSocialLinks && renderTemplate`<div class="flex space-x-4"> <a href="#" class="text-gray-500 hover:text-primary dark:hover:text-primary" aria-label="Twitter"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-primary dark:hover:text-primary" aria-label="GitHub"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-primary dark:hover:text-primary" aria-label="LinkedIn"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path> </svg> </a> </div>`} </div> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
Platform
</h3> <ul class="space-y-3"> <li> <a href="/dashboard" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
Dashboard
</a> </li> <li> <a href="/chat" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
Chat
</a> </li> <li> <a href="/profile" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
Profile
</a> </li> </ul> </div> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
Resources
</h3> <ul class="space-y-3"> <li> <a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
About
</a> </li> <li> <a href="/contact" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
Contact
</a> </li> <li> <a href="/faq" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
FAQ
</a> </li> </ul> </div> </div> <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400"> <p>
&copy;
${currentYear} Pixelated Empathy. All rights reserved.
</p> </div> </div> </footer>`;
}, "/root/pixel/src/components/layout/Footer.astro", void 0);

export { $$Head as $, $$Footer as a };
