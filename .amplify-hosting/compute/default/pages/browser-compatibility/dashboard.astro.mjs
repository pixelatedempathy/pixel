;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8137ea14-46cf-47a6-99b1-0d483baaaea1",e._sentryDebugIdIdentifier="sentry-dbid-8137ea14-46cf-47a6-99b1-0d483baaaea1")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Xugxt_b3.mjs';
import { $ as $$Icon } from '../../chunks/Icon_CVlwxpvZ.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const compatibility_placeholder_data = {
  browsers: [
    { name: "Chrome", version: "110+", icon: "chrome" },
    { name: "Firefox", version: "109+", icon: "firefox" },
    { name: "Safari", version: "16.2+", icon: "safari" },
    { name: "Edge", version: "110+", icon: "edge" },
    { name: "Samsung Internet", version: "19+", icon: "samsung" },
    { name: "iOS Safari", version: "16.2+", icon: "safari" },
    { name: "Android Chrome", version: "110+", icon: "chrome" }
  ],
  tests: [
    {
      id: 1,
      name: "Homepage rendering",
      browser: "Chrome",
      status: "passed",
      type: "functional",
      duration: 245,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Homepage rendering",
      browser: "Firefox",
      status: "passed",
      type: "functional",
      duration: 267,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 3,
      name: "Homepage rendering",
      browser: "Safari",
      status: "passed",
      type: "functional",
      duration: 289,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 4,
      name: "Homepage rendering",
      browser: "Edge",
      status: "passed",
      type: "functional",
      duration: 255,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 5,
      name: "Homepage rendering",
      browser: "Samsung Internet",
      status: "passed",
      type: "functional",
      duration: 312,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 6,
      name: "Homepage rendering",
      browser: "iOS Safari",
      status: "passed",
      type: "functional",
      duration: 345,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 7,
      name: "Homepage rendering",
      browser: "Android Chrome",
      status: "passed",
      type: "functional",
      duration: 302,
      timestamp: "2025-01-15T10:30:00Z"
    },
    {
      id: 8,
      name: "Dashboard loading",
      browser: "Chrome",
      status: "passed",
      type: "functional",
      duration: 378,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 9,
      name: "Dashboard loading",
      browser: "Firefox",
      status: "passed",
      type: "functional",
      duration: 392,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 10,
      name: "Dashboard loading",
      browser: "Safari",
      status: "failed",
      type: "functional",
      duration: 402,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 11,
      name: "Dashboard loading",
      browser: "Edge",
      status: "passed",
      type: "functional",
      duration: 384,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 12,
      name: "Dashboard loading",
      browser: "Samsung Internet",
      status: "passed",
      type: "functional",
      duration: 425,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 13,
      name: "Dashboard loading",
      browser: "iOS Safari",
      status: "failed",
      type: "functional",
      duration: 436,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 14,
      name: "Dashboard loading",
      browser: "Android Chrome",
      status: "passed",
      type: "functional",
      duration: 398,
      timestamp: "2025-01-15T10:35:00Z"
    },
    {
      id: 15,
      name: "Login form submission",
      browser: "Chrome",
      status: "passed",
      type: "functional",
      duration: 412,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 16,
      name: "Login form submission",
      browser: "Firefox",
      status: "passed",
      type: "functional",
      duration: 427,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 17,
      name: "Login form submission",
      browser: "Safari",
      status: "passed",
      type: "functional",
      duration: 456,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 18,
      name: "Login form submission",
      browser: "Edge",
      status: "passed",
      type: "functional",
      duration: 418,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 19,
      name: "Login form submission",
      browser: "Samsung Internet",
      status: "passed",
      type: "functional",
      duration: 453,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 20,
      name: "Login form submission",
      browser: "iOS Safari",
      status: "passed",
      type: "functional",
      duration: 472,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 21,
      name: "Login form submission",
      browser: "Android Chrome",
      status: "passed",
      type: "functional",
      duration: 445,
      timestamp: "2025-01-15T10:40:00Z"
    },
    {
      id: 22,
      name: "Data visualization rendering",
      browser: "Chrome",
      status: "passed",
      type: "visual",
      duration: 534,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 23,
      name: "Data visualization rendering",
      browser: "Firefox",
      status: "passed",
      type: "visual",
      duration: 547,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 24,
      name: "Data visualization rendering",
      browser: "Safari",
      status: "failed",
      type: "visual",
      duration: 623,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 25,
      name: "Data visualization rendering",
      browser: "Edge",
      status: "passed",
      type: "visual",
      duration: 538,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 26,
      name: "Data visualization rendering",
      browser: "Samsung Internet",
      status: "failed",
      type: "visual",
      duration: 612,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 27,
      name: "Data visualization rendering",
      browser: "iOS Safari",
      status: "failed",
      type: "visual",
      duration: 643,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 28,
      name: "Data visualization rendering",
      browser: "Android Chrome",
      status: "passed",
      type: "visual",
      duration: 569,
      timestamp: "2025-01-15T10:45:00Z"
    },
    {
      id: 29,
      name: "Mobile navigation",
      browser: "Chrome",
      status: "passed",
      type: "functional",
      duration: 321,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 30,
      name: "Mobile navigation",
      browser: "Firefox",
      status: "passed",
      type: "functional",
      duration: 334,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 31,
      name: "Mobile navigation",
      browser: "Safari",
      status: "passed",
      type: "functional",
      duration: 352,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 32,
      name: "Mobile navigation",
      browser: "Edge",
      status: "passed",
      type: "functional",
      duration: 330,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 33,
      name: "Mobile navigation",
      browser: "Samsung Internet",
      status: "passed",
      type: "functional",
      duration: 347,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 34,
      name: "Mobile navigation",
      browser: "iOS Safari",
      status: "failed",
      type: "functional",
      duration: 362,
      timestamp: "2025-01-15T10:50:00Z"
    },
    {
      id: 35,
      name: "Mobile navigation",
      browser: "Android Chrome",
      status: "passed",
      type: "functional",
      duration: 341,
      timestamp: "2025-01-15T10:50:00Z"
    }
  ],
  issues: [
    {
      id: 1,
      browser: "Safari",
      component: "Dashboard",
      description: "Data visualization charts fail to render correctly",
      severity: "major",
      timestamp: "2025-01-15T10:45:23Z"
    },
    {
      id: 2,
      browser: "iOS Safari",
      component: "Dashboard",
      description: "Data visualization charts fail to render correctly",
      severity: "major",
      timestamp: "2025-01-15T10:45:43Z"
    },
    {
      id: 3,
      browser: "Samsung Internet",
      component: "Dashboard",
      description: "Data visualization charts render with incorrect colors",
      severity: "minor",
      timestamp: "2025-01-15T10:45:56Z"
    },
    {
      id: 4,
      browser: "iOS Safari",
      component: "Navigation",
      description: "Mobile menu does not close when clicking outside",
      severity: "minor",
      timestamp: "2025-01-15T10:50:28Z"
    },
    {
      id: 5,
      browser: "Safari",
      component: "Dashboard",
      description: "Loading indicator gets stuck after data loads",
      severity: "minor",
      timestamp: "2025-01-15T10:36:12Z"
    },
    {
      id: 6,
      browser: "iOS Safari",
      component: "Form",
      description: "Virtual keyboard causes layout shift on form submission",
      severity: "major",
      timestamp: "2025-01-15T10:40:45Z"
    },
    {
      id: 7,
      browser: "Safari",
      component: "Animation",
      description: "Page transition animations are choppy",
      severity: "minor",
      timestamp: "2025-01-15T10:33:21Z"
    }
  ]
};

const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Browser Compatibility Dashboard";
  const pageDescription = "Monitor browser compatibility status and issues across all supported platforms";
  const fetchCompatibilityData = async () => {
    try {
      const response = await fetch("/api/browser-compatibility/data?latest=true");
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      const data2 = await response.json();
      return data2.reports && data2.reports.length > 0 ? data2.reports[0] : null;
    } catch (error) {
      console.error("Error fetching compatibility data:", error);
      return null;
    }
  };
  const apiData = await fetchCompatibilityData();
  const useRealData = apiData !== null;
  const data = useRealData ? apiData : compatibility_placeholder_data;
  const browsers = data.browsers || compatibility_placeholder_data.browsers;
  const tests = data.tests || compatibility_placeholder_data.tests;
  const issues = data.issues || [];
  const totalTests = tests.length;
  const passedTests = tests.filter(
    (test) => test.status === "passed"
  ).length;
  const failedTests = tests.filter(
    (test) => test.status === "failed"
  ).length;
  const skippedTests = tests.filter(
    (test) => test.status === "skipped"
  ).length;
  const passRate = totalTests > 0 ? Math.round(passedTests / totalTests * 100) : 0;
  const issuesByBrowser = {};
  for (const test of tests) {
    if (test.browser && !issuesByBrowser[test.browser]) {
      issuesByBrowser[test.browser] = [];
    }
  }
  for (const issue of issues) {
    if (!issuesByBrowser[issue.browser]) {
      issuesByBrowser[issue.browser] = [];
    }
    issuesByBrowser[issue.browser].push(issue);
  }
  const criticalIssues = issues.filter(
    (issue) => issue.severity === "critical"
  );
  const majorIssues = issues.filter(
    (issue) => issue.severity === "major"
  );
  const minorIssues = issues.filter(
    (issue) => issue.severity === "minor"
  );
  const lastUpdate = data.timestamp ? new Date(data.timestamp).toLocaleString() : (/* @__PURE__ */ new Date()).toLocaleString();
  const newIssues = issues.filter((issue) => {
    if (!issue.timestamp) return false;
    const issueDate = new Date(issue.timestamp);
    const oneDayAgo = /* @__PURE__ */ new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    return issueDate >= oneDayAgo;
  });
  const hasNewIssues = newIssues.length > 0;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-mnojquos": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ToastContainer", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-mnojquos": true, "client:component-path": "@/components/common/Toast", "client:component-export": "ToastContainer" })} ${maybeRenderHead()}<div class="container mx-auto py-8 px-4" data-astro-cid-mnojquos> <h1 class="text-3xl font-bold mb-6 text-center text-gradient" data-astro-cid-mnojquos>
Browser Compatibility Dashboard
</h1> <div class="text-center mb-8" data-astro-cid-mnojquos> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-mnojquos>
Monitor compatibility issues across browsers and devices
</p> <div class="mt-4 flex justify-center space-x-4" data-astro-cid-mnojquos> <a href="/browser-compatibility/dashboard" class="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-800" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:device-desktop", "class": "w-4 h-4 mr-2", "data-astro-cid-mnojquos": true })}
Compatibility Dashboard
</a> <a href="/browser-compatibility/visual-regression" class="inline-flex items-center px-4 py-2 bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-800" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:photo-edit", "class": "w-4 h-4 mr-2", "data-astro-cid-mnojquos": true })}
Visual Regression Tests
</a> </div> ${!useRealData && renderTemplate`<div class="mt-2 inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded text-sm" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-triangle", "class": "w-4 h-4 inline mr-1", "data-astro-cid-mnojquos": true })}
Using placeholder data. API connection failed.
</div>`} ${hasNewIssues && renderTemplate`<div class="mt-2 inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded text-sm animate-pulse" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-circle", "class": "w-4 h-4 inline mr-1", "data-astro-cid-mnojquos": true })} ${newIssues.length} new compatibility${" "} ${newIssues.length === 1 ? "issue" : "issues"} detected in the last
            24 hours!
</div>`} </div> <!-- Overview Cards --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-astro-cid-mnojquos> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-mnojquos> <div class="flex items-center justify-between" data-astro-cid-mnojquos> <div data-astro-cid-mnojquos> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos>Pass Rate</p> <h2 class="text-3xl font-bold" data-astro-cid-mnojquos>${passRate}%</h2> </div> <div${addAttribute(`text-2xl ${passRate > 90 ? "text-green-500" : passRate > 75 ? "text-yellow-500" : "text-red-500"}`, "class")} data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chart-pie", "data-astro-cid-mnojquos": true })} </div> </div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4" data-astro-cid-mnojquos> <div${addAttribute(`h-2.5 rounded-full ${passRate > 90 ? "bg-green-500" : passRate > 75 ? "bg-yellow-500" : "bg-red-500"}`, "class")}${addAttribute(`width: ${passRate}%`, "style")} data-astro-cid-mnojquos></div> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-mnojquos> <div class="flex items-center justify-between" data-astro-cid-mnojquos> <div data-astro-cid-mnojquos> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos>Total Issues</p> <h2 class="text-3xl font-bold" data-astro-cid-mnojquos>${issues.length}</h2> </div> <div class="text-2xl text-purple-500" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:bug", "data-astro-cid-mnojquos": true })} </div> </div> <div class="flex gap-2 mt-4" data-astro-cid-mnojquos> <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${criticalIssues.length} Critical
</span> <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${majorIssues.length} Major
</span> <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${minorIssues.length} Minor
</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-mnojquos> <div class="flex items-center justify-between" data-astro-cid-mnojquos> <div data-astro-cid-mnojquos> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos>Tests Run</p> <h2 class="text-3xl font-bold" data-astro-cid-mnojquos>${totalTests}</h2> </div> <div class="text-2xl text-blue-500" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:test-pipe", "data-astro-cid-mnojquos": true })} </div> </div> <div class="flex gap-2 mt-4" data-astro-cid-mnojquos> <span class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${passedTests} Passed
</span> <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${failedTests} Failed
</span> <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos> ${skippedTests} Skipped
</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-mnojquos> <div class="flex items-center justify-between" data-astro-cid-mnojquos> <div data-astro-cid-mnojquos> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos>
Browsers Tested
</p> <h2 class="text-3xl font-bold" data-astro-cid-mnojquos>${browsers.length}</h2> </div> <div class="text-2xl text-teal-500" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:browser", "data-astro-cid-mnojquos": true })} </div> </div> <div class="mt-4 flex flex-wrap gap-1" data-astro-cid-mnojquos> ${browsers.map((browser) => renderTemplate`<span class="inline-block" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": `browser-${browser.icon || "default"}`, "class": "w-5 h-5", "data-astro-cid-mnojquos": true })} </span>`)} </div> </div> </div> <!-- Browser Support Matrix --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8" data-astro-cid-mnojquos> <div class="p-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-mnojquos> <h2 class="text-xl font-semibold" data-astro-cid-mnojquos>Browser Support Matrix</h2> </div> <div class="p-4 overflow-x-auto" data-astro-cid-mnojquos> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-mnojquos> <thead data-astro-cid-mnojquos> <tr data-astro-cid-mnojquos> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Browser</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Version</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Status</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Issues</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Pass Rate</th> </tr> </thead> <tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-mnojquos> ${browsers.map((browser, index) => {
    const browserIssues = issuesByBrowser[browser.name] || [];
    const browserTests = tests.filter(
      (test) => test.browser === browser.name
    );
    const passedBrowserTests = browserTests.filter(
      (test) => test.status === "passed"
    );
    const browserPassRate = browserTests.length > 0 ? Math.round(
      passedBrowserTests.length / browserTests.length * 100
    ) : 0;
    return renderTemplate`<tr${addAttribute(
      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : "",
      "class"
    )} data-astro-cid-mnojquos> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> <div class="flex items-center" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": `browser-${browser.icon || "default"}`, "class": "w-5 h-5 mr-2", "data-astro-cid-mnojquos": true })} <span data-astro-cid-mnojquos>${browser.name}</span> </div> </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> ${browser.version} </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> ${browserIssues.some(
      (issue) => issue.severity === "critical"
    ) ? renderTemplate`<span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos>
Critical Issues
</span>` : browserIssues.some(
      (issue) => issue.severity === "major"
    ) ? renderTemplate`<span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos>
Major Issues
</span>` : browserIssues.length > 0 ? renderTemplate`<span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos>
Minor Issues
</span>` : renderTemplate`<span class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded" data-astro-cid-mnojquos>
Supported
</span>`} </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> ${browserIssues.length} </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> <div class="flex items-center" data-astro-cid-mnojquos> <div class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2" data-astro-cid-mnojquos> <div${addAttribute(`h-2 rounded-full ${browserPassRate > 90 ? "bg-green-500" : browserPassRate > 75 ? "bg-yellow-500" : "bg-red-500"}`, "class")}${addAttribute(`width: ${browserPassRate}%`, "style")} data-astro-cid-mnojquos></div> </div> <span data-astro-cid-mnojquos>${browserPassRate}%</span> </div> </td> </tr>`;
  })} </tbody> </table> </div> </div> <!-- Recent Issues --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8" data-astro-cid-mnojquos> <div class="p-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-mnojquos> <h2 class="text-xl font-semibold" data-astro-cid-mnojquos>Recent Issues</h2> </div> <div class="p-4" data-astro-cid-mnojquos> ${issues.length === 0 ? renderTemplate`<p class="text-center text-gray-500 dark:text-gray-400 py-4" data-astro-cid-mnojquos>
No issues found
</p>` : renderTemplate`<div class="space-y-4" data-astro-cid-mnojquos> ${issues.slice(0, 5).map((issue) => renderTemplate`<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4" data-astro-cid-mnojquos> <div class="flex items-center justify-between" data-astro-cid-mnojquos> <div class="flex items-center" data-astro-cid-mnojquos> <div${addAttribute(`
                      w-2 h-2 rounded-full mr-2
                      ${issue.severity === "critical" ? "bg-red-500" : issue.severity === "major" ? "bg-yellow-500" : "bg-blue-500"}
                    `, "class")} data-astro-cid-mnojquos></div> <span${addAttribute(`
                      text-xs font-medium px-2 py-1 rounded
                      ${issue.severity === "critical" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : issue.severity === "major" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}
                    `, "class")} data-astro-cid-mnojquos> ${issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)} </span> </div> <div class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos> ${new Date(issue.timestamp).toLocaleDateString()} </div> </div> <div class="mt-2" data-astro-cid-mnojquos> <h3 class="font-medium" data-astro-cid-mnojquos>${issue.component}</h3> <p class="text-gray-600 dark:text-gray-400 mt-1" data-astro-cid-mnojquos> ${issue.description} </p> </div> <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": `browser-${issue.browser.toLowerCase().replace(/\s+/g, "-")}`, "class": "w-4 h-4 mr-1", "data-astro-cid-mnojquos": true })} ${issue.browser} </div> </div>`)} </div>`} ${issues.length > 5 && renderTemplate`<div class="mt-4 text-center" data-astro-cid-mnojquos> <a href="/browser-compatibility/issues" class="text-blue-600 dark:text-blue-400 hover:underline" data-astro-cid-mnojquos>
View all ${issues.length} issues
</a> </div>`} </div> </div> <!-- Recent Test Results --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow" data-astro-cid-mnojquos> <div class="p-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-mnojquos> <h2 class="text-xl font-semibold" data-astro-cid-mnojquos>Recent Test Results</h2> </div> <div class="p-4" data-astro-cid-mnojquos> <div class="overflow-x-auto" data-astro-cid-mnojquos> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-mnojquos> <thead data-astro-cid-mnojquos> <tr data-astro-cid-mnojquos> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Test</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Browser</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Status</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Duration</th> <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-astro-cid-mnojquos>Run Date</th> </tr> </thead> <tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-mnojquos> ${tests.slice(0, 10).map((test, index) => renderTemplate`<tr${addAttribute(
    index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : "",
    "class"
  )} data-astro-cid-mnojquos> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> <div class="flex items-center" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": test.type === "visual" ? "tabler:photo" : "tabler:code", "class": "w-4 h-4 mr-2", "data-astro-cid-mnojquos": true })} <span data-astro-cid-mnojquos>${test.name}</span> </div> </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> <div class="flex items-center" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": `browser-${test.browser.toLowerCase().replace(/\s+/g, "-")}`, "class": "w-4 h-4 mr-1", "data-astro-cid-mnojquos": true })} ${test.browser} </div> </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> <span${addAttribute(`
                      text-xs px-2 py-1 rounded
                      ${test.status === "passed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : test.status === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"}
                    `, "class")} data-astro-cid-mnojquos> ${test.status.charAt(0).toUpperCase() + test.status.slice(1)} </span> </td> <td class="px-4 py-3 whitespace-nowrap" data-astro-cid-mnojquos> ${test.duration}ms
</td> <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400" data-astro-cid-mnojquos> ${new Date(test.timestamp).toLocaleDateString()} </td> </tr>`)} </tbody> </table> </div> ${tests.length > 10 && renderTemplate`<div class="mt-4 text-center" data-astro-cid-mnojquos> <a href="/browser-compatibility/tests" class="text-blue-600 dark:text-blue-400 hover:underline" data-astro-cid-mnojquos>
View all ${tests.length} test results
</a> </div>`} </div> </div> <div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8" data-astro-cid-mnojquos>
Last updated: ${lastUpdate} ${useRealData && renderTemplate`<button id="refresh-data" class="ml-2 text-blue-600 dark:text-blue-400 hover:underline" data-astro-cid-mnojquos> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:refresh", "class": "w-4 h-4 inline", "data-astro-cid-mnojquos": true })}
Refresh
</button>`} </div> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/browser-compatibility/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/browser-compatibility/dashboard.astro", void 0);

const $$file = "/root/pixel/src/pages/browser-compatibility/dashboard.astro";
const $$url = "/browser-compatibility/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
