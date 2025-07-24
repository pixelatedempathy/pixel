;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="559cce72-0bef-4b00-9c8d-f70f340f83e6",e._sentryDebugIdIdentifier="sentry-dbid-559cce72-0bef-4b00-9c8d-f70f340f83e6")}catch(e){}}();import { b as createAstro, c as createComponent, g as renderHead, h as renderSlot, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$ChatLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChatLayout;
  const { title = "Chat" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body> <!-- Skip to content link for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:shadow-lg transition-transform">
Skip to content
</a> <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/root/pixel/src/layouts/ChatLayout.astro", void 0);

function BrowserCompatibilityTester() {
  const [browserInfo, setBrowserInfo] = useState({
    userAgent: "",
    platform: "",
    language: "",
    cookiesEnabled: false,
    vendor: "",
    screenSize: "",
    pixelRatio: 0,
    touchPoints: 0,
    hasTouch: false
  });
  const [results, setResults] = useState({});
  useEffect(() => {
    setBrowserInfo({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookiesEnabled: navigator.cookieEnabled,
      vendor: navigator.vendor,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      pixelRatio: window.devicePixelRatio,
      touchPoints: navigator.maxTouchPoints,
      hasTouch: "ontouchstart" in window
    });
    const featureTests = [
      {
        name: "ES2024 Features",
        test: () => {
          try {
            return typeof Promise.withResolvers === "function" && "groupBy" in Array.prototype && typeof Array.prototype.findLast === "function";
          } catch {
            return false;
          }
        }
      },
      {
        name: "WebCrypto",
        test: () => typeof window !== "undefined" && "crypto" in window && "subtle" in window.crypto
      },
      {
        name: "WebWorkers",
        test: () => typeof window !== "undefined" && "Worker" in window
      },
      {
        name: "SharedArrayBuffer",
        test: () => typeof SharedArrayBuffer === "function"
      },
      {
        name: "WebAssembly",
        test: () => typeof WebAssembly === "object"
      },
      {
        name: "CSS Grid",
        test: () => {
          if (typeof document === "undefined") {
            return false;
          }
          const el = document.createElement("div");
          return typeof el.style.grid !== "undefined";
        }
      },
      {
        name: "Fetch API",
        test: () => typeof fetch === "function"
      },
      {
        name: "LocalStorage",
        test: () => typeof localStorage !== "undefined"
      },
      {
        name: "Reduced Motion Support",
        test: () => {
          if (typeof window === "undefined" || !window.matchMedia) {
            return false;
          }
          return !!window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
      },
      {
        name: "High Contrast Mode",
        test: () => {
          if (typeof window === "undefined" || !window.matchMedia) {
            return false;
          }
          return !!window.matchMedia("(forced-colors: active)").matches;
        }
      }
    ];
    const testResults = {};
    featureTests.forEach(({ name, test }) => {
      try {
        testResults[name] = test();
      } catch {
        testResults[name] = false;
      }
    });
    if (testResults["Reduced Motion Support"] === true) {
      testResults["Reduced Motion Support"] = "Active";
    }
    if (testResults["High Contrast Mode"] === true) {
      testResults["High Contrast Mode"] = "Active";
    }
    setResults(testResults);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "browser-compatibility-tester", children: [
    /* @__PURE__ */ jsx("h2", { children: "Browser Compatibility Test" }),
    /* @__PURE__ */ jsxs("section", { "aria-labelledby": "browser-info-heading", children: [
      /* @__PURE__ */ jsx("h3", { id: "browser-info-heading", children: "Browser Information" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "User Agent:" }),
          " ",
          browserInfo.userAgent
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Platform:" }),
          " ",
          browserInfo.platform
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Language:" }),
          " ",
          browserInfo.language
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Vendor:" }),
          " ",
          browserInfo.vendor
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Cookies Enabled:" }),
          " ",
          browserInfo.cookiesEnabled ? "Yes" : "No"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Screen Size:" }),
          " ",
          browserInfo.screenSize
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Pixel Ratio:" }),
          " ",
          browserInfo.pixelRatio
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Touch Points:" }),
          " ",
          browserInfo.touchPoints
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Touch Support:" }),
          " ",
          browserInfo.hasTouch ? "Yes" : "No"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { "aria-labelledby": "feature-support-heading", children: [
      /* @__PURE__ */ jsx("h3", { id: "feature-support-heading", children: "Feature Support" }),
      /* @__PURE__ */ jsxs("table", { children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Feature" }),
          /* @__PURE__ */ jsx("th", { children: "Support" }),
          /* @__PURE__ */ jsx("th", { children: "Notes" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: Object.entries(results).map(([feature, supported]) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: feature }),
          /* @__PURE__ */ jsx("td", { children: typeof supported === "boolean" ? supported ? "✅ Yes" : "❌ No" : "Not Supported" }),
          /* @__PURE__ */ jsx("td", { children: feature === "ES2024 Features" ? "Used for modern JavaScript features" : feature === "WebCrypto" ? "Used for secure encryption" : feature === "WebWorkers" ? "Used for background processing" : feature === "SharedArrayBuffer" ? "Used for high-performance data sharing" : feature === "WebAssembly" ? "Used for high-performance code execution" : feature === "CSS Grid" ? "Used for layout and alignment" : feature === "Fetch API" ? "Used for asynchronous data fetching" : feature === "LocalStorage" ? "Used for client-side storage" : feature === "Reduced Motion Support" ? "Used for reducing motion on devices" : feature === "High Contrast Mode" ? "Used for high contrast mode" : "" })
        ] }, feature)) })
      ] })
    ] })
  ] });
}

export { $$ChatLayout as $, BrowserCompatibilityTester as B };
