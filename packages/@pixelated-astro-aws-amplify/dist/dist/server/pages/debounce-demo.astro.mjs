;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9be0a74b-2a4b-43de-be3a-306c831103cc",e._sentryDebugIdIdentifier="sentry-dbid-9be0a74b-2a4b-43de-be3a-306c831103cc")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function debounce(func, wait = 300, immediate = false) {
  let timeout = null;
  return function(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };
    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
}

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useDebouncedCallback(callback, delay = 300, immediate = false) {
  return debounce(callback, delay, immediate);
}

const DebounceDemoComponent = () => {
  const [inputValue1, setInputValue1] = useState("");
  const debouncedValue = useDebounce(inputValue1, 500);
  const [debouncedResult1, setDebouncedResult1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [debouncedResult2, setDebouncedResult2] = useState("");
  const handleDebouncedChange = useDebouncedCallback((...args) => {
    const value = args[0];
    setDebouncedResult2(value);
  }, 500);
  useEffect(() => {
    setDebouncedResult1(debouncedValue);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6 text-gray-900 dark:text-white", children: "Debounce Hooks Demo" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200", children: "useDebounce Hook Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Type in the input below. The debounced value will update 500ms after you stop typing." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "input1",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Input Value:"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "input1",
              type: "text",
              value: inputValue1,
              onChange: (e) => setInputValue1(e.target.value),
              className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",
              placeholder: "Type something..."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: [
            "Current value: “",
            inputValue1,
            "”"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Debounced Value:" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900",
              role: "status",
              "aria-live": "polite",
              children: debouncedResult1
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200", children: "useDebouncedCallback Hook Demo" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "This demo uses the debounced callback. The output updates 500ms after you stop typing." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "input2",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Input Value:"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "input2",
              type: "text",
              value: inputValue2,
              onChange: (e) => {
                const newValue = e.target.value;
                setInputValue2(newValue);
                handleDebouncedChange(newValue);
              },
              className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",
              placeholder: "Type something..."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: [
            "Current value: “",
            inputValue2,
            "”"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Debounced Result:" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900",
              role: "status",
              "aria-live": "polite",
              children: debouncedResult2
            }
          )
        ] })
      ] })
    ] })
  ] });
};

const $$DebounceDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Debounce Hooks Demo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <h1 class="text-3xl font-bold text-center mb-2">Debounce Hooks Demo</h1> <p class="text-center text-gray-600 dark:text-gray-400">
A demonstration of useDebounce and useDebouncedCallback hooks
</p> </div> <div class="mb-8"> ${renderComponent($$result2, "DebounceDemoComponent", DebounceDemoComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demos/DebounceDemoComponent", "client:component-export": "default" })} </div> <div class="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"> <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
Implementation Details
</h2> <div class="mb-6"> <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
useDebounce Hook
</h3> <p class="text-gray-600 dark:text-gray-400 mb-4">
The <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">useDebounce</code> hook takes a value and a delay, returning a debounced version of that
          value that only updates after the specified delay has passed without changes.
</p> <div class="p-4 bg-gray-100 dark:bg-gray-900 rounded-md overflow-x-auto mb-4"> <pre><code class="language-tsx">
// Usage example
const [searchTerm, setSearchTerm] = useState(&apos;&apos;);
const debouncedSearchTerm = useDebounce(searchTerm, 500);

// Only runs when debouncedSearchTerm changes (500ms after user stops typing)
useEffect(() =&gt; &#123;
  performSearch(debouncedSearchTerm);
&#125;, [debouncedSearchTerm]);
          </code></pre> </div> </div> <div> <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
useDebouncedCallback Hook
</h3> <p class="text-gray-600 dark:text-gray-400 mb-4">
The <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">useDebouncedCallback</code> hook creates a debounced version of the provided callback function that
          will only execute after the specified delay.
</p> <div class="p-4 bg-gray-100 dark:bg-gray-900 rounded-md overflow-x-auto"> <pre><code class="language-tsx">
// Usage example
const debouncedSearch = useDebouncedCallback((query) =&gt; &#123;
  performSearch(query);
&#125;, 500);

// Call the debounced function directly
return &lt;input onChange=&#123;(e) =&gt; debouncedSearch(e.target.value)&#125; /&gt;;
          </code></pre> </div> </div> </div> </main> ` })}`;
}, "/root/pixel/src/pages/debounce-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/debounce-demo.astro";
const $$url = "/debounce-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DebounceDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
