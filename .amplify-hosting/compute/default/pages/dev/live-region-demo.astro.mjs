;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9df5a08f-42aa-4e70-b45b-333379f045d3",e._sentryDebugIdIdentifier="sentry-dbid-9df5a08f-42aa-4e70-b45b-333379f045d3")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useState, useCallback, useEffect, useContext } from 'react';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const LiveRegionContext = createContext({
  announceStatus: () => {
  },
  announceAlert: () => {
  },
  log: () => {
  },
  announceProgress: () => {
  }
});
function LiveRegionProvider({ children }) {
  const [statusMessage, setStatusMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [logMessages, setLogMessages] = useState([]);
  const [progressMessage, setProgressMessage] = useState("");
  const [progressData, setProgressData] = useState(null);
  const announceStatus = useCallback((message, clearDelay = 5e3) => {
    setStatusMessage(message);
    if (clearDelay > 0) {
      setTimeout(() => {
        setStatusMessage("");
      }, clearDelay);
    }
  }, []);
  const announceAlert = useCallback((message, clearDelay = 7e3) => {
    setAlertMessage(message);
    if (clearDelay > 0) {
      setTimeout(() => {
        setAlertMessage("");
      }, clearDelay);
    }
  }, []);
  const log = useCallback((message, clear = false) => {
    if (clear) {
      setLogMessages([message]);
    } else {
      setLogMessages((prev) => [...prev, message]);
    }
  }, []);
  const announceProgress = useCallback(
    (value, max, label) => {
      const percent = Math.round(Number(value) / Number(max) * 100);
      setProgressMessage(`${label}: ${percent}% (${value} of ${max})`);
      setProgressData({ value, max, label });
    },
    []
  );
  useEffect(() => {
    if (typeof window !== "undefined" && window.LiveRegionSystem && statusMessage) {
      window.LiveRegionSystem.announceStatus(statusMessage);
    }
  }, [statusMessage]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.LiveRegionSystem && alertMessage) {
      window.LiveRegionSystem.announceAlert(alertMessage);
    }
  }, [alertMessage]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.LiveRegionSystem && logMessages.length > 0) {
      const latestMessage = logMessages[logMessages.length - 1];
      if (latestMessage) {
        window.LiveRegionSystem.log(latestMessage);
      }
    }
  }, [logMessages]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.LiveRegionSystem && progressData) {
      window.LiveRegionSystem.announceProgress(
        progressData.value,
        progressData.max,
        progressData.label
      );
    }
  }, [progressData]);
  const contextValue = {
    announceStatus,
    announceAlert,
    log,
    announceProgress
  };
  return /* @__PURE__ */ jsxs(LiveRegionContext.Provider, { value: contextValue, children: [
    /* @__PURE__ */ jsxs("div", { className: "live-region-system", "aria-hidden": "false", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-live": "polite",
          "aria-atomic": "true",
          className: "sr-only",
          role: "status",
          children: statusMessage
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-live": "assertive",
          "aria-atomic": "true",
          className: "sr-only",
          role: "alert",
          children: alertMessage
        }
      ),
      /* @__PURE__ */ jsx("div", { "aria-live": "polite", "aria-atomic": "false", className: "sr-only", children: logMessages.map((msg, index) => /* @__PURE__ */ jsx("div", { children: msg }, `log-${index}-${msg.slice(0, 10)}`)) }),
      /* @__PURE__ */ jsx("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: progressMessage })
    ] }),
    children
  ] });
}
function useLiveRegion() {
  return useContext(LiveRegionContext);
}
function useStatusAnnouncer() {
  const { announceStatus } = useContext(LiveRegionContext);
  return announceStatus;
}

function StatusButton() {
  const announceStatus = useStatusAnnouncer();
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    announceStatus(
      `Button clicked ${newCount} ${newCount === 1 ? "time" : "times"}`
    );
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleClick,
      className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md mr-3",
      children: [
        "Status Hook: Click Me (",
        count,
        ")"
      ]
    }
  );
}
function AlertButton() {
  const { announceAlert } = useLiveRegion();
  const [severity, setSeverity] = useState("low");
  const handleClick = () => {
    const nextSeverity = severity === "low" ? "medium" : severity === "medium" ? "high" : "low";
    setSeverity(nextSeverity);
    announceAlert(`Alert severity changed to ${nextSeverity}`);
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleClick,
      className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md",
      children: [
        "Alert Hook: Severity (",
        severity,
        ")"
      ]
    }
  );
}
function LiveRegionDemoReact() {
  return /* @__PURE__ */ jsx(LiveRegionProvider, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-4", children: "React Live Region Hooks" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm", children: "These buttons use React hooks to access the live region system." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(StatusButton, {}),
      /* @__PURE__ */ jsx(AlertButton, {})
    ] })
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://pixelatedempathy.com");
const $$LiveRegionDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LiveRegionDemo;
  const sections = [
    {
      title: "Status Announcements",
      description: "Use for non-critical updates",
      examples: [
        { label: "Simple Status", message: "Operation completed successfully" },
        {
          label: "Data Update",
          message: "Data refreshed. 5 new items available"
        },
        { label: "Settings Change", message: "Dark mode enabled" }
      ]
    },
    {
      title: "Alert Announcements",
      description: "Use for important information requiring immediate attention",
      examples: [
        { label: "Error Alert", message: "Error: Connection lost" },
        {
          label: "Warning Alert",
          message: "Warning: Session will expire in 2 minutes"
        },
        {
          label: "Security Alert",
          message: "Security alert: New login detected"
        }
      ]
    },
    {
      title: "Log Messages",
      description: "Use for sequential information that builds up",
      examples: [
        { label: "Add Log Entry", message: "User profile updated" },
        { label: "Add Another Entry", message: "Password changed successfully" },
        { label: "Clear Log", message: "Starting new session", clear: true }
      ]
    }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  // Progress demo functionality\n  document.addEventListener('DOMContentLoaded', () => {\n    const progressButton = document.getElementById('progress-demo')\n    const progressBar = document.getElementById('progress-bar')\n    const progressText = document.getElementById('progress-text')\n\n    if (progressButton && progressBar && progressText) {\n      let isRunning = false\n\n      progressButton.addEventListener('click', () => {\n        if (isRunning) return\n        isRunning = true\n\n        let progress = 0\n        progressBar.style.width = '0%'\n        progressText.textContent = '0%'\n        progressButton.disabled = true\n        progressButton.textContent = 'Progress Running...'\n\n        // Announce start\n        if (window.LiveRegionSystem) {\n          window.LiveRegionSystem.announceStatus('Starting process...')\n        }\n\n        const interval = setInterval(() => {\n          progress += 10\n\n          // Update visual indicators\n          progressBar.style.width = `${progress}%`\n          progressText.textContent = `${progress}%`\n\n          // Announce progress\n          if (window.LiveRegionSystem) {\n            window.LiveRegionSystem.announceProgress(progress, 100, 'Process')\n          }\n\n          if (progress >= 100) {\n            clearInterval(interval)\n            if (window.LiveRegionSystem) {\n              window.LiveRegionSystem.announceStatus(\n                'Process completed successfully',\n              )\n            }\n            progressButton.disabled = false\n            progressButton.textContent = 'Start Progress Demo'\n            isRunning = false\n          }\n        }, 1000)\n      })\n    }\n  })\n<\/script> <!-- TypeScript declarations moved to types file to prevent empty chunk generation --> "], ["", " <script>\n  // Progress demo functionality\n  document.addEventListener('DOMContentLoaded', () => {\n    const progressButton = document.getElementById('progress-demo')\n    const progressBar = document.getElementById('progress-bar')\n    const progressText = document.getElementById('progress-text')\n\n    if (progressButton && progressBar && progressText) {\n      let isRunning = false\n\n      progressButton.addEventListener('click', () => {\n        if (isRunning) return\n        isRunning = true\n\n        let progress = 0\n        progressBar.style.width = '0%'\n        progressText.textContent = '0%'\n        progressButton.disabled = true\n        progressButton.textContent = 'Progress Running...'\n\n        // Announce start\n        if (window.LiveRegionSystem) {\n          window.LiveRegionSystem.announceStatus('Starting process...')\n        }\n\n        const interval = setInterval(() => {\n          progress += 10\n\n          // Update visual indicators\n          progressBar.style.width = \\`\\${progress}%\\`\n          progressText.textContent = \\`\\${progress}%\\`\n\n          // Announce progress\n          if (window.LiveRegionSystem) {\n            window.LiveRegionSystem.announceProgress(progress, 100, 'Process')\n          }\n\n          if (progress >= 100) {\n            clearInterval(interval)\n            if (window.LiveRegionSystem) {\n              window.LiveRegionSystem.announceStatus(\n                'Process completed successfully',\n              )\n            }\n            progressButton.disabled = false\n            progressButton.textContent = 'Start Progress Demo'\n            isRunning = false\n          }\n        }, 1000)\n      })\n    }\n  })\n<\/script> <!-- TypeScript declarations moved to types file to prevent empty chunk generation --> "])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Live Region Demo", "data-astro-cid-b76h2hil": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-8" data-astro-cid-b76h2hil> <h1 class="text-3xl font-bold mb-6 text-center" data-astro-cid-b76h2hil>Live Region System Demo</h1> <p class="mb-8 text-lg text-center" data-astro-cid-b76h2hil>
This page demonstrates the Live Region System for screen reader
      announcements. Click the buttons below to trigger various types of
      announcements.
<br data-astro-cid-b76h2hil> <span class="text-amber-600 dark:text-amber-400" data-astro-cid-b76h2hil>
You'll need a screen reader enabled to hear the announcements.
</span> </p> <div class="grid gap-10 mb-10" data-astro-cid-b76h2hil> ${sections.map((section) => renderTemplate`<section class="border border-border/40 rounded-lg p-6 bg-card/50" data-astro-cid-b76h2hil> <h2 class="text-xl font-semibold mb-3" data-astro-cid-b76h2hil>${section.title}</h2> <p class="mb-5 text-gray-600 dark:text-gray-300" data-astro-cid-b76h2hil> ${section.description} </p> <div class="grid gap-3" data-astro-cid-b76h2hil> ${section.examples.map((example) => renderTemplate`<div class="flex flex-col sm:flex-row sm:items-center gap-3" data-astro-cid-b76h2hil> <button class="px-4 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-md"${addAttribute(`window.LiveRegionSystem.${section.title.startsWith("Status") ? "announceStatus" : section.title.startsWith("Alert") ? "announceAlert" : "log"}
                    ('${example.message}'${example.clear ? ", true" : ""})`, "onclick")} data-astro-cid-b76h2hil> ${example.label} </button> <span class="text-sm opacity-80" data-astro-cid-b76h2hil>"${example.message}"</span> </div>`)} </div> </section>`)} <section class="border border-border/40 rounded-lg p-6 bg-card/50" data-astro-cid-b76h2hil> <h2 class="text-xl font-semibold mb-3" data-astro-cid-b76h2hil>Progress Announcements</h2> <p class="mb-5 text-gray-600 dark:text-gray-300" data-astro-cid-b76h2hil>
Use for tracking progress of operations
</p> <div class="mb-5" data-astro-cid-b76h2hil> <button id="progress-demo" class="px-4 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-md mb-3" data-astro-cid-b76h2hil>
Start Progress Demo
</button> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden" data-astro-cid-b76h2hil> <div id="progress-bar" class="bg-purple-600 h-4 rounded-full w-0 transition-all duration-500" data-astro-cid-b76h2hil></div> </div> <div class="mt-2 text-sm text-center" id="progress-text" data-astro-cid-b76h2hil>0%</div> </div> </section> </div> <section class="border border-border/40 rounded-lg p-6 bg-card/50 mb-8" data-astro-cid-b76h2hil> <h2 class="text-xl font-semibold mb-3" data-astro-cid-b76h2hil>React Component Example</h2> <p class="mb-5 text-gray-600 dark:text-gray-300" data-astro-cid-b76h2hil>
Using the LiveRegionProvider React context
</p> ${renderComponent($$result2, "LiveRegionDemoReact", LiveRegionDemoReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/accessibility/LiveRegionDemo", "client:component-export": "default", "data-astro-cid-b76h2hil": true })} </section> <div class="prose dark:prose-invert max-w-none" data-astro-cid-b76h2hil> <h2 data-astro-cid-b76h2hil>How It Works</h2> <p data-astro-cid-b76h2hil>
The Live Region System provides a standardized way to announce dynamic
        content changes to users of assistive technologies. It works by using
        ARIA live regions with different politeness levels and properties.
</p> <h3 data-astro-cid-b76h2hil>Implementation</h3> <ul data-astro-cid-b76h2hil> <li data-astro-cid-b76h2hil> <strong data-astro-cid-b76h2hil>Astro Component:</strong> Automatically included in BaseLayout
</li> <li data-astro-cid-b76h2hil><strong data-astro-cid-b76h2hil>React Context:</strong> For React components</li> <li data-astro-cid-b76h2hil> <strong data-astro-cid-b76h2hil>Utility Functions:</strong> For use in any JavaScript/TypeScript
          file
</li> </ul> <h3 data-astro-cid-b76h2hil>Learn More</h3> <p data-astro-cid-b76h2hil>
Check out the <a href="/docs/accessibility/live-regions" data-astro-cid-b76h2hil>Live Region System documentation</a>
for detailed information on implementation, best practices, and examples.
</p> </div> </div> ` }));
}, "/root/pixel/src/pages/dev/live-region-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/dev/live-region-demo.astro";
const $$url = "/dev/live-region-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LiveRegionDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
