;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="555f2036-3721-4951-9147-975b67d7814c",e._sentryDebugIdIdentifier="sentry-dbid-555f2036-3721-4951-9147-975b67d7814c")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, a as renderTemplate, f as defineScriptVars, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { $ as $$Icon } from '../../chunks/Icon_CGgyUQli.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$VisualRegression = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Visual Regression Dashboard";
  const pageDescription = "Monitor visual regression test results across browsers and devices";
  const fetchVisualRegressionData = async () => {
    try {
      const isNodeJS = typeof process !== "undefined" && process.versions != null && process.versions.node != null && typeof process.cwd === "function";
      if (!isNodeJS) {
        return {
          error: "This function requires server-side execution",
          screenshots: [],
          byPage: {},
          diffCount: 0,
          lastUpdated: null
        };
      }
      let fs, path;
      try {
        const fsModule = await import('node:fs');
        const pathModule = await import('node:path');
        fs = fsModule.default;
        path = pathModule.default;
      } catch (importError) {
        return {
          error: "Node.js modules not available",
          screenshots: [],
          byPage: {},
          diffCount: 0,
          lastUpdated: null
        };
      }
      const testResultsDir = path.join(process.cwd(), "test-results");
      if (!fs.existsSync(testResultsDir)) {
        return {
          error: "No test results found",
          screenshots: [],
          byPage: {},
          diffCount: 0,
          lastUpdated: null
        };
      }
      const screenshots = [];
      const scanDir = (dir) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            scanDir(filePath);
          } else if (file.endsWith(".png") && !file.includes("-diff.png") && !file.includes("-actual.png")) {
            const relativePath = path.relative(testResultsDir, filePath);
            const baseFilename = path.basename(filePath);
            const fileDir = path.dirname(filePath);
            const actualFile = path.join(
              fileDir,
              baseFilename.replace(".png", "-actual.png")
            );
            const diffFile = path.join(
              fileDir,
              baseFilename.replace(".png", "-diff.png")
            );
            const hasActual = fs.existsSync(actualFile);
            const hasDiff = fs.existsSync(diffFile);
            const nameParts = baseFilename.split("-");
            const page = nameParts[0] || "unknown";
            const deviceType = nameParts.length > 1 ? nameParts[1] || "unknown" : "unknown";
            screenshots.push({
              name: baseFilename,
              page,
              deviceType,
              baselinePath: `/test-results/${relativePath}`,
              actualPath: hasActual ? `/test-results/${path.relative(testResultsDir, actualFile)}` : null,
              diffPath: hasDiff ? `/test-results/${path.relative(testResultsDir, diffFile)}` : null,
              hasDiff,
              lastUpdated: new Date(stat.mtime).toISOString()
            });
          }
        }
      };
      try {
        scanDir(testResultsDir);
      } catch (err) {
        console.error("Error scanning directories:", err);
      }
      const byPage = {};
      for (const screenshot of screenshots) {
        if (!byPage[screenshot.page]) {
          byPage[screenshot.page] = [];
        }
        byPage[screenshot.page].push(screenshot);
      }
      return {
        error: null,
        screenshots,
        byPage,
        diffCount: screenshots.filter((s) => s.hasDiff).length,
        lastUpdated: screenshots.length > 0 ? new Date(
          Math.max(
            ...screenshots.map((s) => new Date(s.lastUpdated).getTime())
          )
        ).toISOString() : null
      };
    } catch (error) {
      console.error("Error fetching visual regression data:", error);
      return {
        error: "Error loading visual regression data",
        screenshots: [],
        byPage: {},
        diffCount: 0,
        lastUpdated: null
      };
    }
  };
  const visualData = await fetchVisualRegressionData();
  const placeholderThumbnail = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"%3E%3Crect width="200" height="150" fill="%23f0f0f0"/%3E%3Ctext x="100" y="75" font-family="Arial" font-size="14" text-anchor="middle" dominant-baseline="middle" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
  return renderTemplate(_a || (_a = __template(["", "  <script>(function(){", "\n  // Refresh button\n  document.getElementById('refresh-data')?.addEventListener('click', () => {\n    window.location.reload()\n  })\n\n  // Image comparison modal\n  const modal = document.getElementById('imageModal')\n  const closeModalBtn = document.getElementById('closeModal')\n  const modalTitle = document.getElementById('modalTitle')\n  const modalExpected = document.getElementById('modalExpected')\n  const modalActual = document.getElementById('modalActual')\n  const modalDiff = document.getElementById('modalDiff')\n\n  // Close modal with escape key\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {\n      closeModal()\n    }\n  })\n\n  // Close modal function\n  function closeModal() {\n    modal?.classList.add('hidden')\n  }\n\n  // Close modal button click\n  closeModalBtn?.addEventListener('click', () => {\n    closeModal()\n  })\n\n  // Allow clicking outside modal to close\n  modal?.addEventListener('click', (e) => {\n    if (e.target === modal) {\n      closeModal()\n    }\n  })\n\n  // Add the openImageComparisonModal function to the window object\n  function openImageComparisonModal(name) {\n    // Find the screenshot data\n    const screenshots = visualData.screenshots\n    const screenshot = screenshots.find((s) => s.name === name)\n\n    if (!screenshot) return\n\n    if (modalTitle) {\n      modalTitle.textContent = `Image Comparison: ${screenshot.name}`\n    }\n\n    if (modalExpected) {\n      modalExpected.src = screenshot.baselinePath || placeholderThumbnail\n    }\n\n    if (modalActual) {\n      modalActual.src = screenshot.actualPath || placeholderThumbnail\n    }\n\n    if (modalDiff) {\n      modalDiff.src = screenshot.diffPath || placeholderThumbnail\n    }\n\n    modal?.classList.remove('hidden')\n  }\n\n  // Make the function globally available\n  window.openImageComparisonModal = openImageComparisonModal\n})();<\/script>"], ["", "  <script>(function(){", "\n  // Refresh button\n  document.getElementById('refresh-data')?.addEventListener('click', () => {\n    window.location.reload()\n  })\n\n  // Image comparison modal\n  const modal = document.getElementById('imageModal')\n  const closeModalBtn = document.getElementById('closeModal')\n  const modalTitle = document.getElementById('modalTitle')\n  const modalExpected = document.getElementById('modalExpected')\n  const modalActual = document.getElementById('modalActual')\n  const modalDiff = document.getElementById('modalDiff')\n\n  // Close modal with escape key\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {\n      closeModal()\n    }\n  })\n\n  // Close modal function\n  function closeModal() {\n    modal?.classList.add('hidden')\n  }\n\n  // Close modal button click\n  closeModalBtn?.addEventListener('click', () => {\n    closeModal()\n  })\n\n  // Allow clicking outside modal to close\n  modal?.addEventListener('click', (e) => {\n    if (e.target === modal) {\n      closeModal()\n    }\n  })\n\n  // Add the openImageComparisonModal function to the window object\n  function openImageComparisonModal(name) {\n    // Find the screenshot data\n    const screenshots = visualData.screenshots\n    const screenshot = screenshots.find((s) => s.name === name)\n\n    if (!screenshot) return\n\n    if (modalTitle) {\n      modalTitle.textContent = \\`Image Comparison: \\${screenshot.name}\\`\n    }\n\n    if (modalExpected) {\n      modalExpected.src = screenshot.baselinePath || placeholderThumbnail\n    }\n\n    if (modalActual) {\n      modalActual.src = screenshot.actualPath || placeholderThumbnail\n    }\n\n    if (modalDiff) {\n      modalDiff.src = screenshot.diffPath || placeholderThumbnail\n    }\n\n    modal?.classList.remove('hidden')\n  }\n\n  // Make the function globally available\n  window.openImageComparisonModal = openImageComparisonModal\n})();<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-nmipi7z5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-8 px-4" data-astro-cid-nmipi7z5> <h1 class="text-3xl font-bold mb-6 text-center text-gradient" data-astro-cid-nmipi7z5>
Visual Regression Dashboard
</h1> <div class="text-center mb-8" data-astro-cid-nmipi7z5> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-nmipi7z5>
Monitor visual changes across browsers and devices
</p> <div class="mt-4 flex justify-center space-x-4" data-astro-cid-nmipi7z5> <a href="/browser-compatibility/dashboard" class="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-800" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:device-desktop", "class": "w-4 h-4 mr-2", "data-astro-cid-nmipi7z5": true })}
Compatibility Dashboard
</a> <a href="/browser-compatibility/visual-regression" class="inline-flex items-center px-4 py-2 bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-800" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:photo-edit", "class": "w-4 h-4 mr-2", "data-astro-cid-nmipi7z5": true })}
Visual Regression Tests
</a> </div> ${visualData.error && renderTemplate`<div class="mt-2 inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded text-sm" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-triangle", "class": "w-4 h-4 inline mr-1", "data-astro-cid-nmipi7z5": true })} ${visualData.error} </div>`} ${visualData.diffCount > 0 && renderTemplate`<div class="mt-2 inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded text-sm animate-pulse" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-circle", "class": "w-4 h-4 inline mr-1", "data-astro-cid-nmipi7z5": true })} ${visualData.diffCount} visual${" "} ${visualData.diffCount === 1 ? "difference" : "differences"}${" "}
detected!
</div>`} </div> <!-- Overview Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-astro-cid-nmipi7z5> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-nmipi7z5> <div class="flex items-center justify-between" data-astro-cid-nmipi7z5> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-nmipi7z5>
Total Screenshots
</p> <h2 class="text-3xl font-bold" data-astro-cid-nmipi7z5>${visualData.screenshots.length}</h2> </div> <div class="text-2xl text-blue-500" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:photo", "data-astro-cid-nmipi7z5": true })} </div> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-nmipi7z5> <div class="flex items-center justify-between" data-astro-cid-nmipi7z5> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-nmipi7z5>
Visual Differences
</p> <h2 class="text-3xl font-bold" data-astro-cid-nmipi7z5>${visualData.diffCount}</h2> </div> <div class="text-2xl text-red-500" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:photo-off", "data-astro-cid-nmipi7z5": true })} </div> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6" data-astro-cid-nmipi7z5> <div class="flex items-center justify-between" data-astro-cid-nmipi7z5> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-nmipi7z5>Pages Tested</p> <h2 class="text-3xl font-bold" data-astro-cid-nmipi7z5> ${Object.keys(visualData.byPage || {}).length} </h2> </div> <div class="text-2xl text-purple-500" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:layout-dashboard", "data-astro-cid-nmipi7z5": true })} </div> </div> </div> </div> <!-- Diff Results --> ${visualData.diffCount > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8" data-astro-cid-nmipi7z5> <div class="p-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-nmipi7z5> <h2 class="text-xl font-semibold" data-astro-cid-nmipi7z5>Visual Differences</h2> </div> <div class="p-4" data-astro-cid-nmipi7z5> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-nmipi7z5> ${visualData.screenshots.filter((s) => s.hasDiff).map((screenshot) => renderTemplate`<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4" data-astro-cid-nmipi7z5> <h3 class="font-medium text-lg mb-2" data-astro-cid-nmipi7z5>${screenshot.name}</h3> <div class="grid grid-cols-2 gap-2 mb-4" data-astro-cid-nmipi7z5> <div data-astro-cid-nmipi7z5> <p class="text-xs text-gray-500 mb-1" data-astro-cid-nmipi7z5>Expected</p> <img${addAttribute(screenshot.baselinePath || placeholderThumbnail, "src")}${addAttribute(`Expected ${screenshot.name}`, "alt")} class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded"${addAttribute(`this.onerror=null; this.src='${placeholderThumbnail}'`, "onerror")} data-astro-cid-nmipi7z5> </div> <div data-astro-cid-nmipi7z5> <p class="text-xs text-gray-500 mb-1" data-astro-cid-nmipi7z5>Actual</p> <img${addAttribute(screenshot.actualPath || placeholderThumbnail, "src")}${addAttribute(`Actual ${screenshot.name}`, "alt")} class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded"${addAttribute(`this.onerror=null; this.src='${placeholderThumbnail}'`, "onerror")} data-astro-cid-nmipi7z5> </div> </div> <div data-astro-cid-nmipi7z5> <p class="text-xs text-gray-500 mb-1" data-astro-cid-nmipi7z5>Difference</p> <img${addAttribute(screenshot.diffPath || placeholderThumbnail, "src")}${addAttribute(`Diff ${screenshot.name}`, "alt")} class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded"${addAttribute(`this.onerror=null; this.src='${placeholderThumbnail}'`, "onerror")} data-astro-cid-nmipi7z5> </div> <div class="mt-2 text-right" data-astro-cid-nmipi7z5> <a href="#" class="text-sm text-blue-600 dark:text-blue-400 hover:underline"${addAttribute(screenshot.name, "data-name")} onclick="openImageComparisonModal(this.dataset.name); return false;" data-astro-cid-nmipi7z5>
View Full Size
</a> </div> </div>`)} </div> </div> </div>`} <!-- All Screenshots --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow" data-astro-cid-nmipi7z5> <div class="p-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-nmipi7z5> <h2 class="text-xl font-semibold" data-astro-cid-nmipi7z5>All Visual Tests</h2> </div> <div class="p-4" data-astro-cid-nmipi7z5> ${Object.entries(visualData.byPage || {}).map(([page, screenshots]) => renderTemplate`<div class="mb-8" data-astro-cid-nmipi7z5> <h3 class="text-lg font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2" data-astro-cid-nmipi7z5> ${page.charAt(0).toUpperCase() + page.slice(1)} Page
</h3> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-astro-cid-nmipi7z5> ${screenshots.map((screenshot) => renderTemplate`<div${addAttribute(`border rounded-lg p-3 ${screenshot.hasDiff ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20" : "border-gray-200 dark:border-gray-700"}`, "class")} data-astro-cid-nmipi7z5> <p class="text-sm font-medium mb-2 truncate"${addAttribute(screenshot.name, "title")} data-astro-cid-nmipi7z5> ${screenshot.deviceType} </p> <div class="aspect-w-16 aspect-h-9 mb-2" data-astro-cid-nmipi7z5> <img${addAttribute(screenshot.baselinePath || placeholderThumbnail, "src")}${addAttribute(screenshot.name, "alt")} class="object-cover w-full h-full rounded border border-gray-300 dark:border-gray-600"${addAttribute(`this.onerror=null; this.src='${placeholderThumbnail}'`, "onerror")} data-astro-cid-nmipi7z5> </div> <div class="flex items-center justify-between text-xs" data-astro-cid-nmipi7z5> <span class="text-gray-500 dark:text-gray-400" data-astro-cid-nmipi7z5> ${new Date(screenshot.lastUpdated).toLocaleDateString()} </span> ${screenshot.hasDiff ? renderTemplate`<span class="text-red-600 dark:text-red-400 flex items-center" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-circle", "class": "w-3 h-3 mr-1", "data-astro-cid-nmipi7z5": true })}
Diff
</span>` : renderTemplate`<span class="text-green-600 dark:text-green-400 flex items-center" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check-circle", "class": "w-3 h-3 mr-1", "data-astro-cid-nmipi7z5": true })}
Pass
</span>`} </div> </div>`)} </div> </div>`)} ${Object.keys(visualData.byPage || {}).length === 0 && renderTemplate`<div class="text-center py-8" data-astro-cid-nmipi7z5> <p class="text-gray-500 dark:text-gray-400" data-astro-cid-nmipi7z5>
No visual test results found.
</p> <p class="text-sm text-gray-500 dark:text-gray-400 mt-2" data-astro-cid-nmipi7z5>
Run visual regression tests to see results here.
</p> </div>`} </div> </div> <div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8" data-astro-cid-nmipi7z5>
Last updated: ${visualData.lastUpdated ? new Date(visualData.lastUpdated).toLocaleString() : "N/A"} <button id="refresh-data" class="ml-2 text-blue-600 dark:text-blue-400 hover:underline" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:refresh", "class": "w-4 h-4 inline", "data-astro-cid-nmipi7z5": true })}
Refresh
</button> </div> </div>  <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center hidden" data-astro-cid-nmipi7z5> <div class="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto p-6 relative" data-astro-cid-nmipi7z5> <button id="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" data-astro-cid-nmipi7z5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:x", "class": "w-6 h-6", "data-astro-cid-nmipi7z5": true })} </button> <h2 id="modalTitle" class="text-xl font-semibold mb-4" data-astro-cid-nmipi7z5>
Image Comparison
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-astro-cid-nmipi7z5> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 mb-1" data-astro-cid-nmipi7z5>Expected</p> <img id="modalExpected"${addAttribute(placeholderThumbnail, "src")} alt="Expected" class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded" data-astro-cid-nmipi7z5> </div> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 mb-1" data-astro-cid-nmipi7z5>Actual</p> <img id="modalActual"${addAttribute(placeholderThumbnail, "src")} alt="Actual" class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded" data-astro-cid-nmipi7z5> </div> </div> <div data-astro-cid-nmipi7z5> <p class="text-sm text-gray-500 mb-1" data-astro-cid-nmipi7z5>Difference</p> <img id="modalDiff"${addAttribute(placeholderThumbnail, "src")} alt="Difference" class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded" data-astro-cid-nmipi7z5> </div> </div> </div> ` }), defineScriptVars({ visualData, placeholderThumbnail }));
}, "/root/pixel/src/pages/browser-compatibility/visual-regression.astro", void 0);

const $$file = "/root/pixel/src/pages/browser-compatibility/visual-regression.astro";
const $$url = "/browser-compatibility/visual-regression";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VisualRegression,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
