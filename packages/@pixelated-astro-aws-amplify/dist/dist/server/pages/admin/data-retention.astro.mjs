;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="10e781b5-9c1e-410d-8a18-9aee68e1f311",e._sentryDebugIdIdentifier="sentry-dbid-10e781b5-9c1e-410d-8a18-9aee68e1f311")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, e as addAttribute, a as renderTemplate } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Ciex37LV.mjs';
import { $ as $$Icon } from '../../chunks/Icon_BlgZSp7R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$DataRetentionSystem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DataRetentionSystem;
  const { title = "Data Retention Policy Management" } = Astro2.props;
  const dataCategories = [
    {
      id: "patient-records",
      name: "Patient Records",
      description: "Basic patient demographic and account information",
      currentPolicy: "7 years after last visit",
      legalMinimum: "6 years (HIPAA)",
      recommendedPolicy: "7 years after last visit",
      status: "compliant"
    },
    {
      id: "mental-health-data",
      name: "Mental Health Data",
      description: "Therapy notes, assessments, and treatment plans",
      currentPolicy: "Indefinite",
      legalMinimum: "Varies by state (5-10 years)",
      recommendedPolicy: "10 years after last visit",
      status: "review"
    },
    {
      id: "chat-logs",
      name: "Chat Logs",
      description: "Patient-provider and AI assistant conversations",
      currentPolicy: "3 years after creation",
      legalMinimum: "6 years (HIPAA)",
      recommendedPolicy: "6 years after creation",
      status: "non-compliant"
    },
    {
      id: "emotion-analysis",
      name: "Emotion Analysis Data",
      description: "Emotional state assessments and patterns",
      currentPolicy: "2 years after creation",
      legalMinimum: "Not explicitly defined",
      recommendedPolicy: "2 years after creation or anonymization",
      status: "compliant"
    },
    {
      id: "consent-records",
      name: "Consent Records",
      description: "Patient consent for treatment and data usage",
      currentPolicy: "Indefinite",
      legalMinimum: "6 years after expiration (HIPAA)",
      recommendedPolicy: "Indefinite",
      status: "compliant"
    }
  ];
  const getStatusBadge = (status) => {
    switch (status) {
      case "compliant":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "non-compliant":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };
  const archivingActions = [
    {
      name: "Automated Monthly Archive",
      status: "active",
      lastRun: "2025-07-01",
      nextRun: "2025-08-01"
    },
    {
      name: "Quarterly Data Review",
      status: "pending",
      lastRun: "2025-04-15",
      nextRun: "2025-07-15"
    },
    {
      name: "Annual Secure Destruction",
      status: "active",
      lastRun: "2025-01-10",
      nextRun: "2026-01-10"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> ${title} </h2> <div class="mb-8"> <p class="text-gray-600 dark:text-gray-300 mb-4">
Manage data retention policies in compliance with HIPAA regulations and
        state laws. Configure when data should be archived and when it should be
        securely destroyed.
</p> <div class="flex flex-wrap gap-4 mb-6"> <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" })} <span class="text-blue-700 dark:text-blue-300 text-sm">Configurable retention periods</span> </div> <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "archive", "class": "w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" })} <span class="text-purple-700 dark:text-purple-300 text-sm">Automated archiving</span> </div> <div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trash", "class": "w-5 h-5 text-green-600 dark:text-green-400 mr-2" })} <span class="text-green-700 dark:text-green-300 text-sm">Secure destruction</span> </div> </div> </div> <!-- Data Retention Policies --> <div class="mb-8"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Data Category Retention Policies
</h3> <button type="button" class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "w-4 h-4 mr-1" })}
Add Policy
</button> </div> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="py-3 px-4">Data Category</th> <th scope="col" class="py-3 px-4">Current Policy</th> <th scope="col" class="py-3 px-4">Legal Minimum</th> <th scope="col" class="py-3 px-4">Recommended</th> <th scope="col" class="py-3 px-4">Status</th> <th scope="col" class="py-3 px-4">Actions</th> </tr> </thead> <tbody> ${dataCategories.map((category) => renderTemplate`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"> <td class="py-3 px-4 font-medium text-gray-900 dark:text-white"> <div> <div>${category.name}</div> <div class="text-xs text-gray-500 dark:text-gray-400"> ${category.description} </div> </div> </td> <td class="py-3 px-4">${category.currentPolicy}</td> <td class="py-3 px-4">${category.legalMinimum}</td> <td class="py-3 px-4">${category.recommendedPolicy}</td> <td class="py-3 px-4"> <span${addAttribute(`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(category.status)}`, "class")}> ${category.status.charAt(0).toUpperCase() + category.status.slice(1)} </span> </td> <td class="py-3 px-4"> <div class="flex space-x-2"> <button type="button" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" aria-label="Edit policy"> ${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "class": "w-5 h-5" })} </button> <button type="button" class="font-medium text-gray-600 dark:text-gray-500 hover:underline" aria-label="Archive now"> ${renderComponent($$result, "Icon", $$Icon, { "name": "archive", "class": "w-5 h-5" })} </button> </div> </td> </tr>`)} </tbody> </table> </div> </div> <!-- Archiving and Destruction Actions --> <div class="mb-8"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Automated Retention Actions
</h3> <button type="button" class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "w-4 h-4 mr-1" })}
Schedule Action
</button> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${archivingActions.map((action) => renderTemplate`<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"> <div class="flex justify-between items-start mb-3"> <h4 class="font-medium text-gray-900 dark:text-white"> ${action.name} </h4> <span${addAttribute(`px-2 py-1 rounded-full text-xs font-medium ${action.status === "active" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`, "class")}> ${action.status.charAt(0).toUpperCase() + action.status.slice(1)} </span> </div> <div class="text-sm text-gray-500 dark:text-gray-400 mb-3"> <div class="flex items-center"> <span class="w-28">Last run:</span> <span class="text-gray-700 dark:text-gray-300"> ${action.lastRun} </span> </div> <div class="flex items-center"> <span class="w-28">Next scheduled:</span> <span class="text-gray-700 dark:text-gray-300"> ${action.nextRun} </span> </div> </div> <div class="flex space-x-2 mt-2"> <button type="button" class="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
Run Now
</button> <button type="button" class="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
Configure
</button> </div> </div>`)} </div> </div> <!-- Data Destruction Configuration --> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Secure Data Destruction Configuration
</h3> <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5"> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Destruction Method
</label> <select id="destruction-method" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="crypto-erase">Cryptographic Erasure (Default)</option> <option value="data-overwrite">Data Overwriting (DoD 5220.22-M)</option> <option value="physical">Physical Media Destruction</option> <option value="combined">Combined Approach</option> </select> <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
Cryptographic Erasure securely destroys encryption keys, making the
            encrypted data unrecoverable.
</p> </div> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Destruction Verification
</label> <div class="flex items-center"> <input id="verification-checkbox" type="checkbox" checked class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"> <label for="verification-checkbox" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Require administrative approval and verification for all data
              destruction operations
</label> </div> </div> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Documentation Retention
</label> <select id="documentation-retention" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="3-years">3 Years</option> <option value="5-years">5 Years</option> <option value="7-years" selected>7 Years</option> <option value="10-years">10 Years</option> <option value="indefinite">Indefinite</option> </select> <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
How long to keep records of data destruction operations for
            compliance and audit purposes.
</p> </div> <!-- Action Buttons --> <div class="flex gap-3 mt-6"> <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
Save Configuration
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Cancel
</button> </div> </div> </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/DataRetentionSystem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/DataRetentionSystem.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$RetentionAuditLogs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RetentionAuditLogs;
  const { title = "Data Retention Audit Logs" } = Astro2.props;
  const auditLogs = [
    {
      id: "log-001",
      timestamp: "2025-07-15T14:32:45Z",
      action: "ARCHIVE",
      category: "patient-records",
      description: "Automated archiving of patient records older than 5 years",
      affectedRecords: 1287,
      user: "system",
      status: "success"
    },
    {
      id: "log-002",
      timestamp: "2025-07-10T09:15:22Z",
      action: "DESTRUCTION",
      category: "emotion-analysis",
      description: "Scheduled secure destruction of emotion analysis data older than 2 years",
      affectedRecords: 543,
      user: "system",
      status: "success"
    },
    {
      id: "log-003",
      timestamp: "2025-07-05T16:48:12Z",
      action: "POLICY_UPDATE",
      category: "chat-logs",
      description: "Retention policy for chat logs updated from 3 years to 6 years",
      affectedRecords: 0,
      user: "admin@example.com",
      status: "success"
    },
    {
      id: "log-004",
      timestamp: "2025-06-30T11:22:35Z",
      action: "ARCHIVE",
      category: "mental-health-data",
      description: "Manual archiving of mental health data for inactive patients",
      affectedRecords: 89,
      user: "provider@example.com",
      status: "success"
    },
    {
      id: "log-005",
      timestamp: "2025-06-25T13:05:41Z",
      action: "DESTRUCTION",
      category: "backup-data",
      description: "Automated destruction of encrypted backup files past retention period",
      affectedRecords: 25,
      user: "system",
      status: "success"
    },
    {
      id: "log-006",
      timestamp: "2025-06-20T08:17:03Z",
      action: "DESTRUCTION_FAILED",
      category: "patient-records",
      description: "Failed attempt to destroy archived patient records due to file lock",
      affectedRecords: 0,
      user: "system",
      status: "error"
    },
    {
      id: "log-007",
      timestamp: "2025-06-15T10:42:19Z",
      action: "ARCHIVE",
      category: "patient-records",
      description: "Monthly automated archiving of patient records",
      affectedRecords: 325,
      user: "system",
      status: "success"
    }
  ];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).format(date);
  };
  const getActionIcon = (action) => {
    switch (action) {
      case "ARCHIVE":
        return "archive";
      case "DESTRUCTION":
      case "DESTRUCTION_FAILED":
        return "trash";
      case "POLICY_UPDATE":
        return "pencil";
      default:
        return "clipboard";
    }
  };
  const getStatusBadge = (status) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "error":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> ${title} </h2> <div class="mb-8"> <p class="text-gray-600 dark:text-gray-300 mb-4">
Comprehensive audit logs for all archiving, retention policy changes,
        and data destruction operations. These logs provide a complete history
        for compliance and security auditing purposes.
</p> <!-- Filters Section --> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> <div> <label for="action-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Action Type
</label> <select id="action-filter" class="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="all">All Actions</option> <option value="archive">Archive</option> <option value="destruction">Destruction</option> <option value="policy">Policy Changes</option> </select> </div> <div> <label for="category-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Data Category
</label> <select id="category-filter" class="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="all">All Categories</option> <option value="patient-records">Patient Records</option> <option value="mental-health-data">Mental Health Data</option> <option value="chat-logs">Chat Logs</option> <option value="emotion-analysis">Emotion Analysis</option> <option value="backup-data">Backup Data</option> </select> </div> <div> <label for="date-from" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Date From
</label> <input type="date" id="date-from" class="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> <div> <label for="date-to" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Date To
</label> <input type="date" id="date-to" class="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> </div> <div class="flex justify-between items-center mb-4"> <button id="apply-filters" type="button" class="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
Apply Filters
</button> <div class="flex items-center space-x-2"> <button type="button" class="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "w-4 h-4 mr-1" })}
Export Logs
</button> <button type="button" class="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "refresh", "class": "w-4 h-4 mr-1" })}
Refresh
</button> </div> </div> </div> <!-- Audit Logs Table --> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="py-3 px-4">Date & Time</th> <th scope="col" class="py-3 px-4">Action</th> <th scope="col" class="py-3 px-4">Category</th> <th scope="col" class="py-3 px-4">Description</th> <th scope="col" class="py-3 px-4">Records</th> <th scope="col" class="py-3 px-4">User</th> <th scope="col" class="py-3 px-4">Status</th> <th scope="col" class="py-3 px-4">Details</th> </tr> </thead> <tbody> ${auditLogs.map((log) => renderTemplate`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"> <td class="py-3 px-4 whitespace-nowrap"> ${formatDate(log.timestamp)} </td> <td class="py-3 px-4"> <div class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": getActionIcon(log.action), "class": "w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" })} <span>${log.action.replace(/_/g, " ")}</span> </div> </td> <td class="py-3 px-4"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"> ${log.category} </span> </td> <td class="py-3 px-4">${log.description}</td> <td class="py-3 px-4 text-center"> ${log.affectedRecords.toLocaleString()} </td> <td class="py-3 px-4"> <span${addAttribute(
    log.user === "system" ? "text-gray-500 dark:text-gray-400 italic" : "",
    "class"
  )}> ${log.user} </span> </td> <td class="py-3 px-4"> <span${addAttribute(`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(log.status)}`, "class")}> ${log.status.charAt(0).toUpperCase() + log.status.slice(1)} </span> </td> <td class="py-3 px-4"> <button type="button" class="text-blue-600 dark:text-blue-500 hover:underline"${addAttribute(log.id, "data-log-id")} aria-label="View details"> ${renderComponent($$result, "Icon", $$Icon, { "name": "eye", "class": "w-5 h-5" })} </button> </td> </tr>`)} </tbody> </table> </div> <!-- Pagination --> <div class="flex items-center justify-between mt-4"> <div class="text-sm text-gray-700 dark:text-gray-300">
Showing <span class="font-medium">1-7</span> of <span class="font-medium">7</span> logs
</div> <div class="flex items-center space-x-2"> <button type="button" class="px-3 py-1 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50" disabled>
Previous
</button> <span class="px-3 py-1 border border-blue-500 text-blue-600 bg-blue-50 rounded-md dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-300">1</span> <button type="button" class="px-3 py-1 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50" disabled>
Next
</button> </div> </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/RetentionAuditLogs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/RetentionAuditLogs.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$RetentionReports = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RetentionReports;
  const { title = "Data Retention Compliance Reports" } = Astro2.props;
  const reportTypes = [
    {
      id: "compliance-summary",
      name: "Compliance Summary",
      description: "Overview of data retention compliance across all data categories",
      format: ["PDF", "CSV", "JSON"],
      frequency: "Monthly",
      lastGenerated: "2025-07-01"
    },
    {
      id: "retention-details",
      name: "Retention Policy Details",
      description: "Detailed breakdown of all data retention policies and their compliance status",
      format: ["PDF", "CSV", "XLSX"],
      frequency: "Quarterly",
      lastGenerated: "2025-06-15"
    },
    {
      id: "archiving-report",
      name: "Archiving Activity",
      description: "Report on all archiving operations performed within a specified time period",
      format: ["PDF", "CSV"],
      frequency: "Monthly",
      lastGenerated: "2025-07-01"
    },
    {
      id: "destruction-audit",
      name: "Data Destruction Audit",
      description: "Comprehensive audit of all data destruction activities with compliance verification",
      format: ["PDF", "CSV", "XLSX"],
      frequency: "Quarterly",
      lastGenerated: "2025-06-15"
    },
    {
      id: "hipaa-compliance",
      name: "HIPAA Compliance",
      description: "Specialized report focusing on HIPAA compliance aspects of data retention",
      format: ["PDF"],
      frequency: "Annually",
      lastGenerated: "2025-01-15"
    }
  ];
  const schedules = [
    {
      id: "schedule-001",
      name: "Monthly Compliance Summary",
      reportType: "compliance-summary",
      format: "PDF",
      frequency: "Monthly",
      day: "1st",
      recipients: ["admin@example.com", "compliance@example.com"],
      status: "active"
    },
    {
      id: "schedule-002",
      name: "Quarterly Retention Audit",
      reportType: "retention-details",
      format: "XLSX",
      frequency: "Quarterly",
      day: "15th",
      recipients: [
        "admin@example.com",
        "compliance@example.com",
        "ceo@example.com"
      ],
      status: "active"
    }
  ];
  const getFormatBadge = (format) => {
    switch (format.toLowerCase()) {
      case "pdf":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "csv":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "xlsx":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "json":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> ${title} </h2> <div class="mb-8"> <p class="text-gray-600 dark:text-gray-300 mb-4">
Generate comprehensive reports for data retention compliance auditing
        and regulatory purposes. Schedule automated report generation and
        distribution to key stakeholders.
</p> <div class="flex flex-wrap gap-4 mb-6"> <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "file-text", "class": "w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" })} <span class="text-blue-700 dark:text-blue-300 text-sm">Customizable reports</span> </div> <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" })} <span class="text-purple-700 dark:text-purple-300 text-sm">Automated scheduling</span> </div> <div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "class": "w-5 h-5 text-green-600 dark:text-green-400 mr-2" })} <span class="text-green-700 dark:text-green-300 text-sm">Email distribution</span> </div> </div> </div> <!-- Report Generation Section --> <div class="mb-8"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Available Reports
</h3> <button type="button" class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "w-4 h-4 mr-1" })}
Create Custom Report
</button> </div> <div class="grid grid-cols-1 gap-4 mb-6"> ${reportTypes.map((report) => renderTemplate`<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"> <div class="flex-1"> <h4 class="text-base font-medium text-gray-900 dark:text-white"> ${report.name} </h4> <p class="text-sm text-gray-500 dark:text-gray-400"> ${report.description} </p> <div class="flex flex-wrap gap-1 mt-2"> ${report.format.map((format) => renderTemplate`<span${addAttribute(`px-2 py-0.5 rounded-full text-xs font-medium ${getFormatBadge(format)}`, "class")}> ${format} </span>`)} </div> </div> <div class="flex flex-col"> <div class="text-sm text-gray-500 dark:text-gray-400 mb-2"> <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "w-4 h-4" })} <span> ${report.frequency} | Last: ${report.lastGenerated} </span> </div> </div> <div class="flex gap-2"> <button type="button" class="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
Generate Now
</button> <button type="button" class="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
Schedule
</button> </div> </div> </div> </div>`)} </div> </div> <!-- Scheduled Reports Section --> <div class="mb-8"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Scheduled Reports
</h3> </div> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="py-3 px-4">Report Name</th> <th scope="col" class="py-3 px-4">Type</th> <th scope="col" class="py-3 px-4">Format</th> <th scope="col" class="py-3 px-4">Frequency</th> <th scope="col" class="py-3 px-4">Recipients</th> <th scope="col" class="py-3 px-4">Status</th> <th scope="col" class="py-3 px-4">Actions</th> </tr> </thead> <tbody> ${schedules.map((schedule) => renderTemplate`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"> <td class="py-3 px-4 font-medium text-gray-900 dark:text-white"> ${schedule.name} </td> <td class="py-3 px-4"> ${schedule.reportType.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())} </td> <td class="py-3 px-4"> <span${addAttribute(`px-2 py-0.5 rounded-full text-xs font-medium ${getFormatBadge(schedule.format)}`, "class")}> ${schedule.format} </span> </td> <td class="py-3 px-4"> ${schedule.frequency} (${schedule.day})
</td> <td class="py-3 px-4"> <div class="flex flex-wrap gap-1"> ${schedule.recipients.map(
    (recipient, index) => index < 2 ? renderTemplate`<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"> ${recipient} </span>` : index === 2 ? renderTemplate`<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
+${schedule.recipients.length - 2} more
</span>` : null
  )} </div> </td> <td class="py-3 px-4"> <span${addAttribute(`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(schedule.status)}`, "class")}> ${schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)} </span> </td> <td class="py-3 px-4"> <div class="flex space-x-2"> <button type="button" class="text-blue-600 dark:text-blue-500 hover:underline" aria-label="Edit schedule"> ${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "class": "w-5 h-5" })} </button> <button type="button" class="text-red-600 dark:text-red-500 hover:underline" aria-label="Delete schedule"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trash", "class": "w-5 h-5" })} </button> </div> </td> </tr>`)} </tbody> </table> </div> </div> <!-- Custom Report Generator --> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Custom Report Generator
</h3> <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Report Title
</label> <input type="text" id="report-title" placeholder="Enter report title" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Report Type
</label> <select id="report-type" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">Select a report type</option> <option value="compliance-summary">Compliance Summary</option> <option value="retention-details">Retention Policy Details</option> <option value="archiving-report">Archiving Activity</option> <option value="destruction-audit">Data Destruction Audit</option> <option value="hipaa-compliance">HIPAA Compliance</option> <option value="custom">Custom Report</option> </select> </div> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Date Range
</label> <div class="flex space-x-2"> <input type="date" id="date-from" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <input type="date" id="date-to" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> </div> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Format
</label> <select id="report-format" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="pdf">PDF</option> <option value="csv">CSV</option> <option value="xlsx">Excel (XLSX)</option> <option value="json">JSON</option> </select> </div> <div class="mb-4 md:col-span-2"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Data Categories to Include
</label> <div class="flex flex-wrap gap-3"> <div class="flex items-center"> <input type="checkbox" id="include-patient-records" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> <label for="include-patient-records" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Patient Records
</label> </div> <div class="flex items-center"> <input type="checkbox" id="include-mental-health" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> <label for="include-mental-health" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Mental Health Data
</label> </div> <div class="flex items-center"> <input type="checkbox" id="include-chat-logs" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> <label for="include-chat-logs" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Chat Logs
</label> </div> <div class="flex items-center"> <input type="checkbox" id="include-emotion-analysis" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> <label for="include-emotion-analysis" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Emotion Analysis
</label> </div> <div class="flex items-center"> <input type="checkbox" id="include-consent-records" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> <label for="include-consent-records" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Consent Records
</label> </div> </div> </div> </div> <!-- Action Buttons --> <div class="flex gap-3 mt-6"> <button id="generate-report-btn" type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
Generate Report
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Reset
</button> </div> </div> </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/RetentionReports.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/RetentionReports.astro", void 0);

const prerender = false;
const $$DataRetention = createComponent(($$result, $$props, $$slots) => {
  const title = "Data Retention Management";
  const description = "Manage data retention policies, archiving, and secure destruction for HIPAA compliance";
  const statusData = {
    compliant: 12,
    review: 3,
    nonCompliant: 1,
    totalPolicies: 16
  };
  const quickStats = [
    {
      id: "archived-records",
      label: "Records Archived",
      value: "287,412",
      change: "+24%",
      trend: "up",
      icon: "archive"
    },
    {
      id: "scheduled-actions",
      label: "Scheduled Actions",
      value: "8",
      change: "+2",
      trend: "up",
      icon: "calendar"
    },
    {
      id: "destroyed-records",
      label: "Records Destroyed",
      value: "15,943",
      change: "+12%",
      trend: "up",
      icon: "trash"
    },
    {
      id: "policy-compliance",
      label: "Policy Compliance",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: "shield-check"
    }
  ];
  const getTrendClass = (trend) => {
    return trend === "up" ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400";
  };
  const compliancePercentage = Math.round(
    statusData.compliant / statusData.totalPolicies * 100
  );
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "description": description, "activeItem": "data-retention" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <!-- Header Section --> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <h1 class="text-2xl font-bold text-gray-900 dark:text-white"> ${title} </h1> <p class="mt-1 text-gray-500 dark:text-gray-400">
Manage retention policies and automated archiving for patient data
</p> </div> <div class="flex items-center gap-3"> <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "class": "w-5 h-5 mr-2" })}
New Policy
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "refresh", "class": "w-5 h-5 mr-2" })}
Refresh
</button> </div> </div> <!-- Compliance Summary --> <div class="grid grid-cols-1 md:grid-cols-5 gap-4"> <!-- Compliance Status Card --> <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Compliance Status
</h3> <div class="flex items-center mb-4"> <div class="relative w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"> <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500"${addAttribute(`width: ${compliancePercentage}%`, "style")}></div> </div> <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">${compliancePercentage}%</span> </div> <div class="grid grid-cols-3 gap-2 text-center"> <div> <div class="text-2xl font-bold text-green-600 dark:text-green-400"> ${statusData.compliant} </div> <div class="text-xs text-gray-500 dark:text-gray-400">
Compliant
</div> </div> <div> <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400"> ${statusData.review} </div> <div class="text-xs text-gray-500 dark:text-gray-400">
Review Needed
</div> </div> <div> <div class="text-2xl font-bold text-red-600 dark:text-red-400"> ${statusData.nonCompliant} </div> <div class="text-xs text-gray-500 dark:text-gray-400">
Non-Compliant
</div> </div> </div> </div> <!-- Quick Stats Cards --> <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${quickStats.map((stat) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <div class="flex justify-between items-start"> <div> <p class="text-sm font-medium text-gray-500 dark:text-gray-400"> ${stat.label} </p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${stat.value} </p> </div> <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20"> ${renderComponent($$result2, "Icon", $$Icon, { "name": stat.icon, "class": "w-6 h-6 text-blue-600 dark:text-blue-400" })} </div> </div> <div${addAttribute(`flex items-center mt-4 ${getTrendClass(stat.trend)}`, "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": stat.trend === "up" ? "trending-up" : "trending-down", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium"> ${stat.change} from last month
</span> </div> </div>`)} </div> </div> <!-- Main Content --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="border-b border-gray-200 dark:border-gray-700"> <nav class="flex space-x-2 px-4" aria-label="Tabs"> <button id="tab-policies" type="button" class="py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium text-sm" aria-selected="true">
Retention Policies
</button> <button id="tab-audit" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Archiving Audit
</button> <button id="tab-exports" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Export Reports
</button> </nav> </div> <!-- Tab Content --> <div class="p-4"> <!-- Retention Policies Panel (Default Active) --> <div id="panel-policies" class="block"> ${renderComponent($$result2, "DataRetentionSystem", $$DataRetentionSystem, {})} </div> <!-- Archiving Audit Panel (Initially Hidden) --> <div id="panel-audit" class="hidden"> ${renderComponent($$result2, "RetentionAuditLogs", $$RetentionAuditLogs, {})} </div> <!-- Export Reports Panel (Initially Hidden) --> <div id="panel-exports" class="hidden"> ${renderComponent($$result2, "RetentionReports", $$RetentionReports, {})} </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/data-retention.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/data-retention.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/data-retention.astro";
const $$url = "/admin/data-retention";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DataRetention,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
