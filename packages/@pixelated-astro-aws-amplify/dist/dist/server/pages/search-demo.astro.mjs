;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ec699c97-ccf9-4082-8b58-9b7aed67f45c",e._sentryDebugIdIdentifier="sentry-dbid-ec699c97-ccf9-4082-8b58-9b7aed67f45c")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useMemo, useEffect } from 'react';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

function SearchBox({
  placeholder = "Search...",
  maxResults = 5,
  minQueryLength = 2,
  showNoResults = true,
  autoFocus = false,
  className = "",
  onSearch,
  onResultClick
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearchReady, setIsSearchReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const hasResults = useMemo(() => results.length > 0, [results]);
  const showResults = useMemo(
    () => isOpen && query.length >= minQueryLength,
    [isOpen, query, minQueryLength]
  );
  useEffect(() => {
    const handleSearchReady = () => {
      setIsSearchReady(true);
    };
    if (typeof window !== "undefined" && window.searchClient) {
      setIsSearchReady(true);
    }
    window.addEventListener("search:ready", handleSearchReady);
    return () => {
      window.removeEventListener("search:ready", handleSearchReady);
    };
  }, []);
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  useEffect(() => {
    if (!isSearchReady || query.length < minQueryLength) {
      setResults([]);
      return;
    }
    try {
      const searchResults = window.searchClient.search(query);
      let limitedResults = searchResults;
      if (maxResults && searchResults.length > maxResults) {
        limitedResults = searchResults.slice(0, maxResults);
      }
      setResults(limitedResults);
      if (onSearch) {
        onSearch(query, limitedResults);
      }
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    }
  }, [query, isSearchReady, maxResults, minQueryLength, onSearch]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target) && !inputRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setIsOpen(true);
    }
  };
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsOpen(newQuery.length > 0);
  };
  const handleResultClick = (result) => {
    setIsOpen(false);
    setQuery("");
    if (onResultClick) {
      onResultClick(result);
    } else {
      window.location.href = result.url;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: query,
          onChange: handleInputChange,
          onKeyDown: handleKeyDown,
          onFocus: () => query.length >= minQueryLength && setIsOpen(true),
          placeholder,
          "aria-label": "Search",
          className: `w-full py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 ${className}`,
          "aria-controls": "search-results",
          autoComplete: "off"
        }
      ),
      query.length > 0 && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
          onClick: () => {
            setQuery("");
            setIsOpen(false);
            inputRef.current?.focus();
          },
          "aria-label": "Clear search",
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ]
            }
          )
        }
      )
    ] }),
    showResults && /* @__PURE__ */ jsx(
      "div",
      {
        ref: resultsRef,
        id: "search-results",
        className: "absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700",
        role: "listbox",
        children: hasResults ? /* @__PURE__ */ jsx("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: results.map((result) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700",
            onClick: () => handleResultClick(result),
            children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-white", children: result.title }),
              result.content && /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400 line-clamp-2", children: [
                result.content.substring(0, 150),
                "..."
              ] }),
              result.category && /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200", children: result.category }) })
            ]
          }
        ) }, result.id)) }) : showNoResults && query.length >= minQueryLength && /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400", children: [
          'No results found for "',
          query,
          '"'
        ] })
      }
    )
  ] });
}

function SearchDemoReact() {
  const [lastQuery, setLastQuery] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [selectedResult, setSelectedResult] = useState(
    null
  );
  const handleSearch = (query, results) => {
    setLastQuery(query);
    setResultCount(results.length);
  };
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(
      SearchBox,
      {
        placeholder: "Search documentation...",
        maxResults: 5,
        minQueryLength: 2,
        onSearch: handleSearch,
        onResultClick: handleResultClick,
        className: "w-full"
      }
    ) }),
    lastQuery && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-gray-500 dark:text-gray-400", children: [
      "Found ",
      resultCount,
      " results for “",
      lastQuery,
      "”"
    ] }),
    selectedResult && /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-gray-200 dark:border-gray-700 pt-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white mb-2", children: "Selected Result" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-900 p-3 rounded-md", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: selectedResult.title }),
        selectedResult.content && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-gray-600 dark:text-gray-300 text-sm", children: [
          selectedResult.content.substring(0, 200),
          "..."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
          selectedResult.category && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200", children: selectedResult.category }),
          selectedResult.tags?.map((tag) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300",
              children: tag
            },
            tag
          ))
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: selectedResult.url,
            className: "text-blue-600 dark:text-blue-400 hover:underline text-sm",
            children: [
              "View ",
              selectedResult.url
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-700 dark:text-gray-300 mb-2", children: "FlexSearch Features:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Client-side search for privacy (no server requests)" }),
        /* @__PURE__ */ jsx("li", { children: "Fast performance even with large datasets" }),
        /* @__PURE__ */ jsx("li", { children: "Fuzzy search with typo-tolerance" }),
        /* @__PURE__ */ jsx("li", { children: "Contextual relevance ranking" }),
        /* @__PURE__ */ jsx("li", { children: "Lightweight (only ~5KB)" })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$SearchDemo$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchDemo$1;
  const {
    title = "Search Demo",
    description = "Try our advanced search capabilities with this interactive demo",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full transition-colors duration-300 ${className}`, "class")} data-astro-cid-weaazckt> ${title && renderTemplate`<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white" data-astro-cid-weaazckt> ${title} </h2>`} ${description && renderTemplate`<p class="mb-6 text-gray-600 dark:text-gray-400" data-astro-cid-weaazckt>${description}</p>`} ${renderComponent($$result, "SearchDemoReact", SearchDemoReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/SearchDemoReact", "client:component-export": "default", "data-astro-cid-weaazckt": true })} </div> `;
}, "/root/pixel/src/components/SearchDemo.astro", void 0);

const $$SearchDemo = createComponent(($$result, $$props, $$slots) => {
  const title = "Search Functionality Demo";
  const description = "Try our powerful FlexSearch integration with this interactive demo.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto py-8 px-4"> <div class="max-w-5xl mx-auto"> <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center">${title}</h1> <div class="prose dark:prose-invert max-w-none mb-8"> <p class="text-xl text-center">
Our platform includes powerful search capabilities using FlexSearch, a
          full-text search library that runs entirely in the browser.
</p> <div class="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 my-6"> <p class="font-medium text-blue-800 dark:text-blue-300"> <span class="font-bold">Privacy First:</span> All search operations happen
            directly in your browser, ensuring your search queries never leave your
            device.
</p> </div> </div> ${renderComponent($$result2, "SearchDemo", $$SearchDemo$1, { "title": "Interactive Search Demo", "description": "Try searching for topics like 'mental health', 'analytics', 'privacy', or 'security' to see the search in action.", "className": "mb-12" })} <div class="mt-12 prose dark:prose-invert max-w-none"> <h2 class="text-2xl font-bold">How Our Search Works</h2> <p>
We've implemented a highly optimized search experience that
          prioritizes both performance and privacy:
</p> <div class="grid md:grid-cols-2 gap-6 mt-6"> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"> <h3 class="text-xl font-semibold mb-3 text-primary">
Fast & Efficient
</h3> <ul class="space-y-2"> <li>Optimized index generation for instant results</li> <li>Fuzzy matching for typo tolerance</li> <li>Contextual relevance algorithms</li> <li>Handles large datasets with minimal performance impact</li> </ul> </div> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"> <h3 class="text-xl font-semibold mb-3 text-primary">
Privacy-Focused
</h3> <ul class="space-y-2"> <li>100% client-side search operations</li> <li>No tracking of search queries</li> <li>Zero server requests for each search</li> <li>Content pre-indexed during page load</li> </ul> </div> </div> </div> </div> </section> ` })}`;
}, "/root/pixel/src/pages/search-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/search-demo.astro";
const $$url = "/search-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SearchDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
