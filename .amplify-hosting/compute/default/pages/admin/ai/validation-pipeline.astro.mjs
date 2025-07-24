;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b56a977e-9302-4048-98b4-8fdfc256cf71",e._sentryDebugIdIdentifier="sentry-dbid-b56a977e-9302-4048-98b4-8fdfc256cf71")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_DQ9SjUHy.mjs';
import { e as emotionValidationPipeline } from '../../../chunks/EmotionValidationPipeline_By-IjV6H.mjs';
import { v as validationRunner } from '../../../chunks/ContinuousValidationRunner_DXOpFTyY.mjs';
export { renderers } from '../../../renderers.mjs';

const $$ValidationPipeline = createComponent(async ($$result, $$props, $$slots) => {
  let validationInitError = null;
  let validationStats = null;
  let runnerState = null;
  try {
    await validationRunner.initialize();
    validationStats = emotionValidationPipeline.getValidationStats();
    runnerState = validationRunner.getState();
  } catch (error) {
    validationInitError = error.message;
  }
  const title = "AI Validation Pipeline";
  const description = "Manage and monitor the continuous validation pipeline for AI models";
  const cronSchedules = [
    { value: "0 0 * * *", label: "Daily at midnight" },
    { value: "0 */12 * * *", label: "Every 12 hours" },
    { value: "0 */6 * * *", label: "Every 6 hours" },
    { value: "0 */2 * * *", label: "Every 2 hours" },
    { value: "*/30 * * * *", label: "Every 30 minutes (dev only)" }
  ];
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-6 py-8 max-w-6xl mx-auto"> <div class="mb-8 flex justify-between items-center"> <div> <h1 class="text-3xl font-bold mb-2">${title}</h1> <p class="text-gray-600 dark:text-gray-400">${description}</p> </div> <div class="flex gap-4"> <button id="run-validation" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
Run Validation
</button> <button id="start-continuous" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
Start Continuous
</button> <button id="stop-continuous" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
Stop Continuous
</button> </div> </div> ${validationInitError && renderTemplate`<div class="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 rounded-md p-4 mb-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
Validation Pipeline Error
</h3> <div class="mt-2 text-sm text-red-700 dark:text-red-300"> <p>${validationInitError}</p> </div> </div> </div> </div>`} <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"> <!-- Validation Status --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"> <h2 class="text-xl font-semibold mb-4">Validation Status</h2> <div id="status-indicator" class="flex items-center mb-6"> <div class="h-4 w-4 rounded-full bg-green-500 mr-2"></div> <span>Pipeline Initialized</span> </div> <div class="grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500 dark:text-gray-400">Last Run</p> <p id="last-run" class="font-medium"> ${validationStats?.lastRun ? new Date(validationStats.lastRun).toLocaleString() : "Never"} </p> </div> <div> <p class="text-sm text-gray-500 dark:text-gray-400">Run Count</p> <p id="run-count" class="font-medium"> ${validationStats?.runCount || 0} </p> </div> </div> </div> <!-- Test Coverage --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"> <h2 class="text-xl font-semibold mb-4">Test Coverage</h2> <div class="grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500 dark:text-gray-400">Total Tests</p> <p id="total-tests" class="font-medium"> ${validationStats?.totalTests || 0} </p> </div> <div> <p class="text-sm text-gray-500 dark:text-gray-400">
Models Covered
</p> <p id="models-count" class="font-medium"> ${Object.keys(validationStats?.byModel || {}).length || 0} </p> </div> </div> </div> <!-- Overall Performance --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"> <h2 class="text-xl font-semibold mb-4">Overall Performance</h2> <div class="grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500 dark:text-gray-400">Passed Tests</p> <p id="passed-tests" class="font-medium"> ${validationStats?.passedTests || 0} </p> </div> <div> <p class="text-sm text-gray-500 dark:text-gray-400">Pass Rate</p> <p id="pass-rate" class="font-medium"> ${validationStats?.totalTests ? `${Math.round(validationStats.passedTests / validationStats.totalTests * 100)}%` : "N/A"} </p> </div> </div> </div> </div> <!-- Validation Results --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8"> <h2 class="text-xl font-semibold mb-4">Validation Results</h2> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead> <tr> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Test ID
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Model
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Provider
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Result
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Score
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Timestamp
</th> </tr> </thead> <tbody id="results-body" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"> <tr> <td class="px-6 py-4 text-gray-500 dark:text-gray-400" colspan="6">No validation results yet</td> </tr> </tbody> </table> </div> </div> <!-- Continuous Validation Settings --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8"> <h2 class="text-xl font-semibold mb-4">Continuous Validation</h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <div> <h3 class="text-lg font-medium mb-3">Schedule Settings</h3> <div class="mb-4"> <label for="cron-schedule" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Schedule Frequency
</label> <select id="cron-schedule" class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"> ${cronSchedules.map((schedule) => renderTemplate`<option${addAttribute(schedule.value, "value")}>${schedule.label}</option>`)} <option value="custom">Custom schedule...</option> </select> </div> <div id="custom-schedule-container" class="mb-4 hidden"> <label for="custom-cron" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Custom Cron Expression
</label> <input type="text" id="custom-cron" placeholder="0 0 * * *" class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"> <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
Format: minute hour day-of-month month day-of-week
</p> </div> <div class="flex space-x-4 mt-4"> <button id="schedule-validation" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
Set Schedule
</button> <button id="unschedule-validation" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"${addAttribute(!runnerState?.isScheduled, "disabled")}>
Cancel Schedule
</button> </div> </div> <div> <h3 class="text-lg font-medium mb-3">Current Schedule</h3> ${runnerState?.isScheduled ? renderTemplate`<div class="rounded bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 p-4"> <div class="flex items-center mb-2"> <div class="h-4 w-4 rounded-full bg-green-500 mr-2"></div> <p class="font-medium">Schedule Active</p> </div> <div class="grid grid-cols-2 gap-4 mt-3"> <div> <p class="text-sm text-gray-500 dark:text-gray-400">
Current Schedule
</p> <p id="current-schedule" class="font-medium"> ${runnerState?.schedule || "Unknown"} </p> </div> <div> <p class="text-sm text-gray-500 dark:text-gray-400">
Next Run
</p> <p id="next-run" class="font-medium"> ${runnerState?.nextScheduledRun ? new Date(
    runnerState.nextScheduledRun
  ).toLocaleString() : "Not scheduled"} </p> </div> </div> </div>` : renderTemplate`<div class="rounded bg-gray-100 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 p-4"> <div class="flex items-center mb-2"> <div class="h-4 w-4 rounded-full bg-gray-500 mr-2"></div> <p class="font-medium">No Active Schedule</p> </div> <p class="text-gray-600 dark:text-gray-400 text-sm">
Set up a schedule to run validation automatically.
</p> </div>`} </div> </div> </div> <!-- Validation History --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8"> <h2 class="text-xl font-semibold mb-4">Run History</h2> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead> <tr> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Run ID
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Timestamp
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Status
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Tests
</th> <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Pass Rate
</th> </tr> </thead> <tbody id="history-body" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"> <tr> <td class="px-6 py-4 text-gray-500 dark:text-gray-400" colspan="5">No history available</td> </tr> </tbody> </table> </div> </div> <!-- Integration & Documentation --> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"> <h2 class="text-xl font-semibold mb-4">CI/CD Integration</h2> <div class="mb-4"> <p class="text-gray-700 dark:text-gray-300 mb-2">
The continuous validation pipeline integrates with your CI/CD
          workflows for automated model validation.
</p> <div class="rounded bg-gray-100 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 p-4 mt-2"> <h3 class="font-medium mb-2">GitHub Actions Integration</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
A GitHub Actions workflow is included at <code class="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">.github/workflows/ai-validation.yml</code> </p> <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400"> <li>Runs validation daily at midnight UTC</li> <li>Triggers validation on successful deployments</li> <li>Creates GitHub issues for failed validations</li> <li>Generates validation result summaries</li> </ul> </div> </div> <div class="mb-4"> <h3 class="font-medium mb-2">Webhook API</h3> <p class="text-sm text-gray-600 dark:text-gray-400">
Validation can be triggered via webhook:
</p> <pre class="bg-gray-100 dark:bg-gray-900/30 p-2 rounded text-xs overflow-auto mt-2">POST /api/ai/validation/webhook
Headers: Content-Type: application/json, x-github-event: workflow_dispatch
Body: JSON with action and environment
        </pre> </div> </div> </main> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/ai/validation-pipeline.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/ai/validation-pipeline.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/ai/validation-pipeline.astro";
const $$url = "/admin/ai/validation-pipeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ValidationPipeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
