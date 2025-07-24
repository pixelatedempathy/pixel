;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="22f05207-eca2-46fb-87fb-be3201f3df2a",e._sentryDebugIdIdentifier="sentry-dbid-22f05207-eca2-46fb-87fb-be3201f3df2a")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, e as addAttribute, a as renderTemplate, b as createAstro } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Ciex37LV.mjs';
import { $ as $$Icon } from '../../chunks/Icon_BlgZSp7R.mjs';
export { renderers } from '../../renderers.mjs';

const $$PatientRightsSystem = createComponent(($$result, $$props, $$slots) => {
  const accessRequests = [
    {
      id: "REQ-2025-1234",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Emily Johnson",
      type: "data-access",
      dateRequested: "2025-06-12T08:30:00Z",
      status: "fulfilled",
      dateProcessed: "2025-06-14T16:45:00Z",
      priority: "medium"
    },
    {
      id: "REQ-2025-1235",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Michael Smith",
      type: "data-export",
      dateRequested: "2025-06-15T14:20:00Z",
      status: "pending",
      dateProcessed: null,
      priority: "high"
    },
    {
      id: "REQ-2025-1236",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Sarah Williams",
      type: "correction",
      dateRequested: "2025-06-10T09:15:00Z",
      status: "fulfilled",
      dateProcessed: "2025-06-12T11:30:00Z",
      priority: "medium"
    },
    {
      id: "REQ-2025-1237",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "James Brown",
      type: "data-access",
      dateRequested: "2025-06-18T16:40:00Z",
      status: "overdue",
      dateProcessed: null,
      priority: "high"
    },
    {
      id: "REQ-2025-1238",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Robert Garcia",
      type: "data-export",
      dateRequested: "2025-06-19T10:05:00Z",
      status: "pending",
      dateProcessed: null,
      priority: "low"
    },
    {
      id: "REQ-2025-1239",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Lisa Thompson",
      type: "data-access",
      dateRequested: "2025-06-14T08:35:00Z",
      status: "fulfilled",
      dateProcessed: "2025-06-15T14:25:00Z",
      priority: "medium"
    },
    {
      id: "REQ-2025-1240",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Amanda Martinez",
      type: "correction",
      dateRequested: "2025-06-16T15:50:00Z",
      status: "pending",
      dateProcessed: null,
      priority: "high"
    }
  ];
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "fulfilled":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "medium":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getRequestTypeInfo = (type) => {
    switch (type) {
      case "data-access":
        return {
          class: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
          label: "Data Access"
        };
      case "data-export":
        return {
          class: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
          label: "Data Export"
        };
      case "correction":
        return {
          class: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
          label: "Correction"
        };
      default:
        return {
          class: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
          label: "Other"
        };
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="space-y-6"> <!-- Search and Filter Bar --> <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:items-center"> <div class="flex flex-1 relative items-center max-w-md"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "h-5 w-5 text-gray-400" })} </div> <input type="text" placeholder="Search by ID, name, or patient ID..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> </div> <div class="flex flex-wrap gap-2"> <div class="inline-flex"> <select id="filter-status" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">All Statuses</option> <option value="pending">Pending</option> <option value="fulfilled">Fulfilled</option> <option value="overdue">Overdue</option> </select> </div> <div class="inline-flex"> <select id="filter-type" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">All Types</option> <option value="data-access">Data Access</option> <option value="data-export">Data Export</option> <option value="correction">Correction</option> </select> </div> <div class="inline-flex"> <select id="filter-priority" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">All Priorities</option> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </div> </div> </div> <!-- Access Requests Table --> <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-gray-800"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Request ID
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Patient
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Type
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Priority
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Requested
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Status
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Processed
</th> <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700"> ${accessRequests.map((request) => {
    const typeInfo = getRequestTypeInfo(request.type);
    return renderTemplate`<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50"> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"> ${request.id} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <div class="flex flex-col"> <span class="font-medium text-gray-800 dark:text-white"> ${request.patientName} </span> <span class="text-xs text-gray-500 dark:text-gray-400"> ${request.patientId} </span> </div> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${typeInfo.class}`, "class")}> ${typeInfo.label} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadgeClass(request.priority)}`, "class")}> ${request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${formatDate(request.dateRequested)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(request.status)}`, "class")}> ${request.status.charAt(0).toUpperCase() + request.status.slice(1)} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${formatDate(request.dateProcessed)} </td> <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <div class="flex justify-end space-x-2"> <button type="button" class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"${addAttribute(`View request ${request.id}`, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "eye", "class": "h-5 w-5" })} </button> ${request.status === "pending" && renderTemplate`<button type="button" class="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"${addAttribute(`Process request ${request.id}`, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "check-circle", "class": "h-5 w-5" })} </button>`} <button type="button" class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"${addAttribute(`More options for request ${request.id}`, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "more-vertical", "class": "h-5 w-5" })} </button> </div> </td> </tr>`;
  })} </tbody> </table> </div> <!-- Pagination --> <div class="flex items-center justify-between"> <div class="flex-1 flex justify-between sm:hidden"> <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Previous
</button> <button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Next
</button> </div> <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"> <div> <p class="text-sm text-gray-700 dark:text-gray-300">
Showing <span class="font-medium">1</span> to <span class="font-medium">7</span> of <span class="font-medium">32</span> results
</p> </div> <div> <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination"> <button class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"> <span class="sr-only">Previous</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-left", "class": "h-5 w-5" })} </button> <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
1
</button> <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-gray-600 dark:text-blue-400 dark:hover:bg-blue-900/30" aria-current="page">
2
</button> <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
3
</button> <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
4
</button> <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300">
...
</span> <button class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"> <span class="sr-only">Next</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "h-5 w-5" })} </button> </nav> </div> </div> </div> <!-- Compliance Note --> <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 dark:bg-blue-900/20 dark:border-blue-500"> <div class="flex"> <div class="flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "info-circle", "class": "h-5 w-5 text-blue-400" })} </div> <div class="ml-3"> <h3 class="text-sm font-medium text-blue-800 dark:text-blue-300">
HIPAA Compliance Note
</h3> <div class="mt-2 text-sm text-blue-700 dark:text-blue-400"> <p>
Under HIPAA regulations, patients have the right to access their
            health information, request corrections, and obtain an electronic
            copy of their records. Requests must be fulfilled within 30 days
            (with a possible 30-day extension if needed). Track all request
            activities for audit purposes.
</p> </div> </div> </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/PatientRightsSystem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/PatientRightsSystem.astro", void 0);

const $$AccessRequestsLog = createComponent(($$result, $$props, $$slots) => {
  const complianceMetrics = {
    averageResponseTime: "2.3 days",
    timely30DayResponseRate: "94%",
    totalRequests: {
      current: 39,
      change: "+22%"
    },
    requestTypes: [
      { type: "Data Access", count: 18, percentage: 46 },
      { type: "Data Export", count: 13, percentage: 33 },
      { type: "Correction", count: 8, percentage: 21 }
    ]
  };
  const auditLogEntries = [
    {
      date: "2025-06-19T14:32:00Z",
      requestId: "REQ-2025-1235",
      action: "request_processed",
      user: "Dr. Smith",
      details: "Data export request processed and fulfilled"
    },
    {
      date: "2025-06-18T09:15:00Z",
      requestId: "REQ-2025-1237",
      action: "request_viewed",
      user: "Admin Johnson",
      details: "Request details viewed by administrator"
    },
    {
      date: "2025-06-17T16:08:00Z",
      requestId: "REQ-2025-1240",
      action: "request_created",
      user: "System",
      details: "New correction request created via patient portal"
    },
    {
      date: "2025-06-17T11:22:00Z",
      requestId: "REQ-2025-1238",
      action: "request_updated",
      user: "Dr. Garcia",
      details: "Priority changed from low to medium"
    },
    {
      date: "2025-06-16T13:45:00Z",
      requestId: "REQ-2025-1236",
      action: "request_processed",
      user: "Dr. Williams",
      details: "Correction request processed and fulfilled"
    }
  ];
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getActionBadgeClass = (action) => {
    switch (action) {
      case "request_created":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "request_processed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "request_viewed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300";
      case "request_updated":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const formatActionLabel = (action) => {
    return action.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  return renderTemplate`${maybeRenderHead()}<div class="space-y-8"> <!-- Compliance Metrics --> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Compliance Metrics
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <!-- Metrics Cards --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Average Response Time
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${complianceMetrics.averageResponseTime} </p> <div class="flex items-center mt-4 text-green-500 dark:text-green-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trending-down", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium">-12% from previous month</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
30-Day Response Rate
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${complianceMetrics.timely30DayResponseRate} </p> <div class="flex items-center mt-4 text-green-500 dark:text-green-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trending-up", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium">+3% from previous month</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Total Requests
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${complianceMetrics.totalRequests.current} </p> <div class="flex items-center mt-4 text-green-500 dark:text-green-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trending-up", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium">${complianceMetrics.totalRequests.change} from previous month</span> </div> </div> </div> <!-- Request Type Distribution --> <div class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <h4 class="text-md font-medium text-gray-900 dark:text-white mb-4">
Request Type Distribution
</h4> <div class="space-y-3"> ${complianceMetrics.requestTypes.map((type) => renderTemplate`<div> <div class="flex justify-between items-center"> <span class="text-sm font-medium text-gray-700 dark:text-gray-300"> ${type.type} </span> <span class="text-sm text-gray-700 dark:text-gray-300"> ${type.count} (${type.percentage}%)
</span> </div> <div class="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"> <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"${addAttribute(`width: ${type.percentage}%`, "style")}></div> </div> </div>`)} </div> </div> </div> <!-- Audit Log --> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Access Request Audit Log
</h3> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-gray-800"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Timestamp
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Request ID
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Action
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
User
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Details
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700"> ${auditLogEntries.map((entry) => renderTemplate`<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50"> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${formatDate(entry.date)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"> ${entry.requestId} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getActionBadgeClass(entry.action)}`, "class")}> ${formatActionLabel(entry.action)} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${entry.user} </td> <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400"> ${entry.details} </td> </tr>`)} </tbody> </table> </div> </div> </div> <!-- Export Controls --> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Compliance Reports
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Report Generation --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <h4 class="text-md font-medium text-gray-900 dark:text-white mb-4">
Generate Report
</h4> <form class="space-y-4"> <div> <label for="report-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Report Type
</label> <select id="report-type" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="hipaa-compliance">HIPAA Compliance Summary</option> <option value="access-request-audit">Access Request Audit</option> <option value="response-time">Response Time Analysis</option> </select> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="start-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Start Date
</label> <input type="date" id="start-date" class="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> <div> <label for="end-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
End Date
</label> <input type="date" id="end-date" class="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> </div> </div> <div> <label for="report-format" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Format
</label> <select id="report-format" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="pdf">PDF</option> <option value="csv">CSV</option> <option value="json">JSON</option> </select> </div> <div> <button type="button" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-center items-center dark:bg-blue-700 dark:hover:bg-blue-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "h-5 w-5 mr-2" })}
Generate Report
</button> </div> </form> </div> <!-- Recent Reports --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <h4 class="text-md font-medium text-gray-900 dark:text-white mb-4">
Recent Reports
</h4> <ul class="divide-y divide-gray-200 dark:divide-gray-700"> <li class="py-3"> <div class="flex items-center justify-between"> <div> <p class="text-sm font-medium text-gray-900 dark:text-white">
HIPAA Compliance Summary
</p> <p class="text-xs text-gray-500 dark:text-gray-400">
Generated on Jun 15, 2025
</p> </div> <button class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "h-5 w-5" })} </button> </div> </li> <li class="py-3"> <div class="flex items-center justify-between"> <div> <p class="text-sm font-medium text-gray-900 dark:text-white">
Q2 Access Request Audit
</p> <p class="text-xs text-gray-500 dark:text-gray-400">
Generated on Jun 10, 2025
</p> </div> <button class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "h-5 w-5" })} </button> </div> </li> <li class="py-3"> <div class="flex items-center justify-between"> <div> <p class="text-sm font-medium text-gray-900 dark:text-white">
Response Time Analysis
</p> <p class="text-xs text-gray-500 dark:text-gray-400">
Generated on Jun 5, 2025
</p> </div> <button class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "h-5 w-5" })} </button> </div> </li> </ul> </div> </div> </div> <!-- HIPAA Compliance Information --> <div class="bg-blue-50 border-l-4 border-blue-400 p-4 dark:bg-blue-900/20 dark:border-blue-500"> <div class="flex"> <div class="flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "info-circle", "class": "h-5 w-5 text-blue-400" })} </div> <div class="ml-3"> <h3 class="text-sm font-medium text-blue-800 dark:text-blue-300">
HIPAA Documentation Requirements
</h3> <div class="mt-2 text-sm text-blue-700 dark:text-blue-400"> <p>
HIPAA requires maintaining comprehensive documentation of all
            patient data access requests and their resolution. Records must be
            kept for at least 6 years and should include request details,
            processing timeline, and fulfillment method. Regular compliance
            reports should be generated and reviewed to ensure adherence to
            regulations.
</p> </div> </div> </div> </div> </div>`;
}, "/root/pixel/src/components/admin/AccessRequestsLog.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$DataDeletionRequestForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DataDeletionRequestForm;
  const { patientId = "", patientName = "" } = Astro2.props;
  const dataCategories = [
    {
      id: "demographics",
      label: "Demographics",
      description: "Basic patient information"
    },
    {
      id: "sessions",
      label: "Session Records",
      description: "Records of therapy sessions"
    },
    {
      id: "assessments",
      label: "Assessments",
      description: "Psychological assessment data"
    },
    {
      id: "emotions",
      label: "Emotion Data",
      description: "Tracked emotional patterns"
    },
    {
      id: "notes",
      label: "Clinical Notes",
      description: "Therapist notes and observations"
    },
    { id: "messages", label: "Messages", description: "Communication records" },
    {
      id: "media",
      label: "Media Files",
      description: "Uploaded photos or documents"
    }
  ];
  const deletionReasons = [
    {
      id: "patient-request",
      label: "Patient Request",
      description: "Patient exercised right to delete under HIPAA"
    },
    {
      id: "data-error",
      label: "Data Error",
      description: "Data was incorrectly entered or associated"
    },
    {
      id: "end-treatment",
      label: "End of Treatment",
      description: "Patient has completed treatment"
    },
    {
      id: "legal-requirement",
      label: "Legal Requirement",
      description: "Deletion required by law or court order"
    },
    {
      id: "privacy-concern",
      label: "Privacy Concern",
      description: "Specific privacy concern raised by patient"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
Patient Data Deletion Request
</h2> <form id="deletion-request-form" class="space-y-6"> <!-- CSRF Token (Hidden) --> <input type="hidden" id="csrf-token" name="csrf-token" value="generate-server-token-here"> <!-- Patient Information Section --> <div class="space-y-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Patient Information
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="patient-id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
Patient ID
</label> <input type="text" id="patient-id" name="patient-id"${addAttribute(patientId, "value")} class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" required> </div> <div> <label for="patient-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
Patient Name
</label> <input type="text" id="patient-name" name="patient-name"${addAttribute(patientName, "value")} class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" required> </div> </div> </div> <!-- Deletion Scope Section --> <div class="space-y-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Deletion Scope
</h3> <div class="space-y-4"> <div class="flex items-center"> <input type="radio" id="scope-all" name="deletion-scope" value="all" class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" checked> <label for="scope-all" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
Delete All Data (Complete Record)
</label> </div> <div class="flex items-center"> <input type="radio" id="scope-specific" name="deletion-scope" value="specific" class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"> <label for="scope-specific" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
Delete Specific Data Categories
</label> </div> </div> <!-- Specific Data Categories (initially hidden, shown when "Specific" is selected) --> <div id="data-categories-container" class="pl-7 mt-3 space-y-3 hidden"> <p class="text-sm text-gray-500 dark:text-gray-400">
Select data categories to delete:
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-3"> ${dataCategories.map((category) => renderTemplate`<div class="flex items-start"> <div class="flex items-center h-5"> <input type="checkbox"${addAttribute(`category-${category.id}`, "id")} name="data-categories"${addAttribute(category.id, "value")} class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"> </div> <div class="ml-3 text-sm"> <label${addAttribute(`category-${category.id}`, "for")} class="font-medium text-gray-700 dark:text-gray-300"> ${category.label} </label> <p class="text-gray-500 dark:text-gray-400"> ${category.description} </p> </div> </div>`)} </div> </div> </div> <!-- Deletion Reason Section --> <div class="space-y-4"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Deletion Reason
</h3> <div> <label for="deletion-reason" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
Primary Reason
</label> <select id="deletion-reason" name="deletion-reason" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" required> <option value="">Select a reason...</option> ${deletionReasons.map((reason) => renderTemplate`<option${addAttribute(reason.id, "value")}> ${reason.label} - ${reason.description} </option>`)} </select> </div> <div> <label for="additional-details" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
Additional Details
</label> <textarea id="additional-details" name="additional-details" rows="3" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Provide any additional context or details about this deletion request..."></textarea> </div> </div> <!-- HIPAA Compliance Section --> <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-md dark:bg-yellow-900/20 dark:border-yellow-800"> <div class="flex"> <div class="flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "alert-triangle", "class": "h-5 w-5 text-yellow-400" })} </div> <div class="ml-3"> <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-400">
HIPAA Compliance Notice
</h3> <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300"> <p>
This deletion request will be logged and processed in accordance
              with HIPAA regulations. Certain data may need to be retained for
              the minimum required period per regulatory requirements.
</p> </div> <div class="mt-4"> <div class="flex items-start"> <div class="flex items-center h-5"> <input id="hipaa-confirmation" name="hipaa-confirmation" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" required> </div> <div class="ml-3 text-sm"> <label for="hipaa-confirmation" class="font-medium text-yellow-700 dark:text-yellow-300">
I confirm this deletion request complies with HIPAA
                  requirements
</label> </div> </div> </div> </div> </div> </div> <!-- Action Buttons --> <div class="flex justify-end space-x-3"> <button type="button" id="cancel-button" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
Cancel
</button> <button type="submit" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trash", "class": "w-4 h-4 mr-2" })}
Submit Deletion Request
</button> </div> </form> </div> ${renderScript($$result, "/root/pixel/src/components/admin/DataDeletionRequestForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/DataDeletionRequestForm.astro", void 0);

const $$DataDeletionLog = createComponent(async ($$result, $$props, $$slots) => {
  const deletionRequests = [
    {
      id: "DEL-2025-5678",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Robert Garcia",
      dateRequested: "2025-06-15T10:30:00Z",
      dataScope: "all",
      reason: "No longer a patient",
      status: "pending",
      dateProcessed: null,
      processedBy: null
    },
    {
      id: "DEL-2025-5679",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Jessica Thompson",
      dateRequested: "2025-06-12T14:15:00Z",
      dataScope: "specific",
      reason: "Privacy concerns for specific sessions",
      status: "completed",
      dateProcessed: "2025-06-14T09:20:00Z",
      processedBy: "Admin Johnson"
    },
    {
      id: "DEL-2025-5680",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "James Brown",
      dateRequested: "2025-06-10T08:45:00Z",
      dataScope: "all",
      reason: "Moving to different provider",
      status: "completed",
      dateProcessed: "2025-06-11T16:30:00Z",
      processedBy: "Dr. Smith"
    },
    {
      id: "DEL-2025-5681",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "Maria Rodriguez",
      dateRequested: "2025-06-17T11:25:00Z",
      dataScope: "specific",
      reason: "Sensitive data from prior visit",
      status: "pending",
      dateProcessed: null,
      processedBy: null
    },
    {
      id: "DEL-2025-5682",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      patientName: "David Wilson",
      dateRequested: "2025-05-30T09:10:00Z",
      dataScope: "all",
      reason: "Exercise HIPAA right to delete",
      status: "completed",
      dateProcessed: "2025-06-02T13:45:00Z",
      processedBy: "Admin Johnson"
    }
  ];
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "denied":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300";
    }
  };
  const getScopeBadgeClass = (scope) => {
    switch (scope) {
      case "all":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "specific":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="space-y-6"> <!-- Header with Stats --> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Total Deletion Requests
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">7</p> <div class="flex items-center mt-4 text-green-500 dark:text-green-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trending-up", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium">+3 from last month</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Pending Requests
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">2</p> <div class="flex items-center mt-4 text-yellow-500 dark:text-yellow-400"> <span class="text-sm font-medium">Requires attention</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Avg. Processing Time
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
1.8 days
</p> <div class="flex items-center mt-4 text-green-500 dark:text-green-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "trending-down", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium">-0.5 days from last month</span> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
Full Record Deletions
</p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">60%</p> <div class="flex items-center mt-4 text-gray-500 dark:text-gray-400"> <span class="text-sm font-medium">3 of 5 requests</span> </div> </div> </div> <!-- Action Buttons --> <div class="flex justify-end"> <button id="new-deletion-request-btn" type="button" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-700 dark:hover:bg-red-600 flex items-center" aria-label="Create new deletion request"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "w-5 h-5 mr-2" })}
New Deletion Request
</button> </div> <!-- Search and Filter Controls --> <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4"> <div class="flex flex-1 relative items-center max-w-md"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "h-5 w-5 text-gray-400" })} </div> <input type="text" placeholder="Search by ID, name, or patient ID..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> </div> <div class="flex flex-wrap gap-2"> <div class="inline-flex"> <select id="filter-status" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">All Statuses</option> <option value="pending">Pending</option> <option value="completed">Completed</option> <option value="in-progress">In Progress</option> <option value="denied">Denied</option> </select> </div> <div class="inline-flex"> <select id="filter-scope" class="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"> <option value="">All Scopes</option> <option value="all">Full Record</option> <option value="specific">Specific Data</option> </select> </div> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "w-5 h-5 mr-2" })}
Date Range
</button> </div> </div> <!-- Deletion Requests Table --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-gray-800"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Request ID
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Patient
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Requested
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Scope
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Status
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Processed
</th> <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700"> ${deletionRequests.map((request) => renderTemplate`<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50"> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"> ${request.id} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <div class="flex flex-col"> <span class="font-medium text-gray-800 dark:text-white"> ${request.patientName} </span> <span class="text-xs text-gray-500 dark:text-gray-400"> ${request.patientId} </span> </div> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${formatDate(request.dateRequested)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getScopeBadgeClass(request.dataScope)}`, "class")}> ${request.dataScope === "all" ? "Full Record" : "Specific Data"} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(request.status)}`, "class")}> ${request.status.charAt(0).toUpperCase() + request.status.slice(1)} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${request.dateProcessed ? formatDate(request.dateProcessed) : "-"} ${request.processedBy && renderTemplate`<span class="block text-xs text-gray-500 dark:text-gray-400">
by ${request.processedBy} </span>`} </td> <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <div class="flex justify-end space-x-2"> <button type="button" class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="View details"> ${renderComponent($$result, "Icon", $$Icon, { "name": "eye", "class": "w-5 h-5" })} </button> ${request.status === "pending" && renderTemplate`<button type="button" class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300" aria-label="Approve request"${addAttribute(request.id, "data-request-id")} data-action="approve"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "w-5 h-5" })} </button>`} ${request.status === "pending" && renderTemplate`<button type="button" class="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" aria-label="Deny request"${addAttribute(request.id, "data-request-id")} data-action="deny"> ${renderComponent($$result, "Icon", $$Icon, { "name": "x", "class": "w-5 h-5" })} </button>`} </div> </td> </tr>`)} ${deletionRequests.length === 0 && renderTemplate`<tr> <td colspan="7" class="px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
No deletion requests found
</td> </tr>`} </tbody> </table> </div> <!-- Pagination --> <div class="flex items-center justify-between"> <div class="flex-1 flex justify-between items-center"> <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Previous
</button> <span class="text-sm text-gray-700 dark:text-gray-300">
Page 1 of 1
</span> <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Next
</button> </div> </div> </div> <!-- Modal for New Deletion Request --> <div id="deletion-request-modal" class="fixed inset-0 z-50 overflow-y-auto hidden" role="dialog" aria-modal="true"> <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> <!-- Background overlay --> <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> <!-- Modal panel --> <div class="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"> <div class="absolute top-0 right-0 pt-4 pr-4"> <button type="button" id="close-modal-btn" class="bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Close modal"> <span class="sr-only">Close</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "x", "class": "h-6 w-6" })} </button> </div> <!-- Deletion Request Form --> ${renderComponent($$result, "DataDeletionRequestForm", $$DataDeletionRequestForm, {})} </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/DataDeletionLog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/DataDeletionLog.astro", void 0);

const prerender = false;
const $$PatientRights = createComponent(($$result, $$props, $$slots) => {
  const title = "Patient Rights Management";
  const description = "Manage patient access requests, data deletion, and HIPAA compliance for patient rights";
  const statusData = {
    fulfilled: 29,
    pending: 8,
    overdue: 2,
    totalRequests: 39
  };
  const quickStats = [
    {
      id: "access-requests",
      label: "Access Requests",
      value: "32",
      change: "+15%",
      trend: "up",
      icon: "document-search"
    },
    {
      id: "deletion-requests",
      label: "Deletion Requests",
      value: "7",
      change: "+3",
      trend: "up",
      icon: "trash"
    },
    {
      id: "avg-response",
      label: "Avg. Response Time",
      value: "2.3 days",
      change: "-12%",
      trend: "down",
      icon: "clock"
    },
    {
      id: "compliance-rate",
      label: "Compliance Rate",
      value: "95%",
      change: "+2%",
      trend: "up",
      icon: "shield-check"
    }
  ];
  const getTrendClass = (trend) => {
    return trend === "up" ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400";
  };
  const fulfillmentPercentage = Math.round(
    statusData.fulfilled / statusData.totalRequests * 100
  );
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "description": description, "activeItem": "patient-rights" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <!-- Header Section --> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <h1 class="text-2xl font-bold text-gray-900 dark:text-white"> ${title} </h1> <p class="mt-1 text-gray-500 dark:text-gray-400">
Manage patient data rights and access requests in compliance with
          HIPAA regulations
</p> </div> <div class="flex items-center gap-3"> <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "class": "w-5 h-5 mr-2" })}
New Request
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "refresh", "class": "w-5 h-5 mr-2" })}
Refresh
</button> </div> </div> <!-- Compliance Summary --> <div class="grid grid-cols-1 md:grid-cols-5 gap-4"> <!-- Fulfillment Status Card --> <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
Request Fulfillment Status
</h3> <div class="flex items-center mb-4"> <div class="relative w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"> <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500"${addAttribute(`width: ${fulfillmentPercentage}%`, "style")}></div> </div> <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">${fulfillmentPercentage}%</span> </div> <div class="grid grid-cols-3 gap-2 text-center"> <div> <div class="text-2xl font-bold text-green-600 dark:text-green-400"> ${statusData.fulfilled} </div> <div class="text-xs text-gray-500 dark:text-gray-400">
Fulfilled
</div> </div> <div> <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400"> ${statusData.pending} </div> <div class="text-xs text-gray-500 dark:text-gray-400">Pending</div> </div> <div> <div class="text-2xl font-bold text-red-600 dark:text-red-400"> ${statusData.overdue} </div> <div class="text-xs text-gray-500 dark:text-gray-400">Overdue</div> </div> </div> </div> <!-- Quick Stats Cards --> <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"> ${quickStats.map((stat) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <div class="flex justify-between items-start"> <div> <p class="text-sm font-medium text-gray-500 dark:text-gray-400"> ${stat.label} </p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${stat.value} </p> </div> <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20"> ${renderComponent($$result2, "Icon", $$Icon, { "name": stat.icon, "class": "w-6 h-6 text-blue-600 dark:text-blue-400" })} </div> </div> <div${addAttribute(`flex items-center mt-4 ${getTrendClass(stat.trend)}`, "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": stat.trend === "up" ? "trending-up" : "trending-down", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium"> ${stat.change} from last month
</span> </div> </div>`)} </div> </div> <!-- Main Content --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="border-b border-gray-200 dark:border-gray-700"> <nav class="flex space-x-2 px-4" aria-label="Tabs"> <button id="tab-requests" type="button" class="py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium text-sm" aria-selected="true">
Access Requests
</button> <button id="tab-deletions" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Deletion Requests
</button> <button id="tab-compliance" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Compliance Reports
</button> </nav> </div> <!-- Tab Content --> <div class="p-4"> <!-- Access Requests Panel (Default Active) --> <div id="panel-requests" class="block"> ${renderComponent($$result2, "PatientRightsSystem", $$PatientRightsSystem, {})} </div> <!-- Deletion Requests Panel (Initially Hidden) --> <div id="panel-deletions" class="hidden"> ${renderComponent($$result2, "DataDeletionLog", $$DataDeletionLog, {})} </div> <!-- Compliance Reports Panel (Initially Hidden) --> <div id="panel-compliance" class="hidden"> ${renderComponent($$result2, "AccessRequestsLog", $$AccessRequestsLog, {})} </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/patient-rights.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/patient-rights.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/patient-rights.astro";
const $$url = "/admin/patient-rights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PatientRights,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
