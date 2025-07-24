;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c2d39e7b-1df4-42e9-bb36-c738b9ea06ce",e._sentryDebugIdIdentifier="sentry-dbid-c2d39e7b-1df4-42e9-bb36-c738b9ea06ce")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, e as addAttribute, a as renderTemplate } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_gCflplD1.mjs';
import { $ as $$Icon } from '../../chunks/Icon_CVlwxpvZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$DataPortabilitySystem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DataPortabilitySystem;
  const { title = "Data Portability System" } = Astro2.props;
  const dataFormats = [
    {
      id: "json",
      name: "JSON",
      description: "Standard JSON format for maximum compatibility"
    },
    {
      id: "csv",
      name: "CSV",
      description: "Comma-separated values for spreadsheet applications"
    },
    {
      id: "fhir",
      name: "FHIR",
      description: "Fast Healthcare Interoperability Resources standard"
    },
    { id: "ccd", name: "CCD", description: "Continuity of Care Document format" },
    {
      id: "hl7",
      name: "HL7",
      description: "Health Level Seven messaging standard"
    }
  ];
  const dataSections = [
    {
      id: "profile",
      name: "Patient Profile",
      description: "Basic demographic information"
    },
    {
      id: "mental-health",
      name: "Mental Health Data",
      description: "Assessments, notes, and emotional analysis"
    },
    {
      id: "chat-history",
      name: "Chat History",
      description: "Conversation logs and interactions"
    },
    {
      id: "consent",
      name: "Consent Records",
      description: "History of consent grants and withdrawals"
    }
  ];
  const recipientTypes = [
    {
      id: "provider",
      name: "Healthcare Provider",
      description: "Other mental health professionals"
    },
    {
      id: "patient",
      name: "Patient Direct Access",
      description: "Direct access for the patient"
    },
    {
      id: "research",
      name: "Research Institution",
      description: "Approved research organizations with consent"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> ${title} </h2> <div class="mb-8"> <p class="text-gray-600 dark:text-gray-300 mb-4">
This system allows for standardized, secure transfer of patient data in
        compliance with HIPAA regulations. All transfers are fully encrypted,
        logged, and require appropriate authorization.
</p> <div class="flex flex-wrap gap-4 mb-6"> <div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "shield-check", "class": "w-5 h-5 text-green-600 dark:text-green-400 mr-2" })} <span class="text-green-700 dark:text-green-300 text-sm">End-to-end encryption</span> </div> <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "clipboard-check", "class": "w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" })} <span class="text-blue-700 dark:text-blue-300 text-sm">Comprehensive audit logging</span> </div> <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "document-check", "class": "w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" })} <span class="text-purple-700 dark:text-purple-300 text-sm">Consent verification</span> </div> </div> </div> <!-- Data Portability Form --> <form id="data-portability-form" class="space-y-6"> <!-- Patient Selection --> <div> <label for="patient-id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Patient ID or Identifier
</label> <input type="text" id="patient-id" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter patient identifier" required> </div> <!-- Data Format Selection --> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Export Format
</label> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> ${dataFormats.map((format) => renderTemplate`<div class="relative"> <input type="radio"${addAttribute(`format-${format.id}`, "id")} name="data-format"${addAttribute(format.id, "value")} class="peer sr-only" required> <label${addAttribute(`format-${format.id}`, "for")} class="flex p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:peer-checked:border-blue-400 dark:peer-checked:bg-blue-900/30 dark:peer-checked:text-blue-400 dark:text-white"> <div> <h3 class="font-medium">${format.name}</h3> <p class="text-xs text-gray-500 dark:text-gray-400"> ${format.description} </p> </div> </label> </div>`)} </div> </div> <!-- Data Sections --> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Data Sections to Include
</label> <div class="space-y-2"> ${dataSections.map((section) => renderTemplate`<div class="flex items-start"> <div class="flex items-center h-5"> <input${addAttribute(`section-${section.id}`, "id")} name="data-sections" type="checkbox"${addAttribute(section.id, "value")} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"> </div> <div class="ml-3 text-sm"> <label${addAttribute(`section-${section.id}`, "for")} class="font-medium text-gray-700 dark:text-white"> ${section.name} </label> <p class="text-xs text-gray-500 dark:text-gray-400"> ${section.description} </p> </div> </div>`)} </div> </div> <!-- Recipient Type --> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Recipient Type
</label> <select id="recipient-type" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required> <option value="">Select recipient type</option> ${recipientTypes.map((type) => renderTemplate`<option${addAttribute(type.id, "value")}>${type.name}</option>`)} </select> </div> <!-- Recipient Information --> <div id="recipient-details" class="space-y-3"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Recipient Details
</label> <input type="text" id="recipient-name" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Recipient name or organization" required> <input type="email" id="recipient-email" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Recipient email" required> </div> <!-- Data Transfer Authorization --> <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg"> <div class="flex items-start"> <div class="flex items-center h-5"> <input id="authorization-checkbox" type="checkbox" required class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"> </div> <div class="ml-3 text-sm"> <label for="authorization-checkbox" class="font-medium text-yellow-800 dark:text-yellow-300">Authorization Required</label> <p class="text-yellow-700 dark:text-yellow-400">
I confirm I have proper authorization to transfer this patient
              data, and that appropriate consent has been verified.
</p> </div> </div> </div> <!-- Action Buttons --> <div class="flex gap-3"> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
Generate Transfer
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Cancel
</button> </div> </form> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/DataPortabilitySystem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/DataPortabilitySystem.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$TransferAuditLog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TransferAuditLog;
  const { title = "Data Transfer Audit Log" } = Astro2.props;
  const auditLogEntries = [
    {
      id: "log-001",
      timestamp: "2025-07-15T14:32:45Z",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      initiatedBy: "Dr. Sarah Johnson",
      recipientType: "Healthcare Provider",
      recipientDetails: "Northwest Medical Center",
      dataFormat: "FHIR",
      sections: ["Patient Profile", "Mental Health Data"],
      status: "completed",
      encryptionVerified: true
    },
    {
      id: "log-002",
      timestamp: "2025-07-14T09:15:21Z",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      initiatedBy: "Dr. James Wilson",
      recipientType: "Patient Direct Access",
      recipientDetails: "Patient Email",
      dataFormat: "JSON",
      sections: ["Patient Profile", "Chat History", "Consent Records"],
      status: "completed",
      encryptionVerified: true
    },
    {
      id: "log-003",
      timestamp: "2025-07-13T16:45:09Z",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      initiatedBy: "Dr. Lisa Chen",
      recipientType: "Research Institution",
      recipientDetails: "University Medical Research",
      dataFormat: "CSV",
      sections: ["Mental Health Data"],
      status: "completed",
      encryptionVerified: true
    },
    {
      id: "log-004",
      timestamp: "2025-07-12T11:23:54Z",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      initiatedBy: "Dr. Sarah Johnson",
      recipientType: "Healthcare Provider",
      recipientDetails: "Eastside Clinic",
      dataFormat: "CCD",
      sections: ["Patient Profile", "Mental Health Data", "Chat History"],
      status: "failed",
      encryptionVerified: false,
      failureReason: "Encryption verification failed"
    },
    {
      id: "log-005",
      timestamp: "2025-07-10T08:12:37Z",
      patientId: process.env.PATIENT_ID || "example-patient-id",
      initiatedBy: "System Administrator",
      recipientType: "Patient Direct Access",
      recipientDetails: "Patient Portal",
      dataFormat: "JSON",
      sections: ["Patient Profile", "Consent Records"],
      status: "completed",
      encryptionVerified: true
    }
  ];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };
  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30";
      case "failed":
        return "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30";
      case "in-progress":
        return "text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30";
      default:
        return "text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800";
    }
  };
  const getEncryptionClass = (verified) => {
    return verified ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400";
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> ${title} </h2> <div class="mb-8"> <p class="text-gray-600 dark:text-gray-300 mb-4">
Complete audit trail of all data transfers, including timestamps,
        recipient information, and encryption verification. All data transfer
        activities are logged for compliance with HIPAA regulations.
</p> <!-- Filter and Search Controls --> <div class="flex flex-col md:flex-row gap-4 mb-6"> <div class="flex-1"> <label for="search" class="sr-only">Search</label> <div class="relative"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "w-5 h-5 text-gray-500 dark:text-gray-400" })} </div> <input type="search" id="search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search by patient ID, provider..."> </div> </div> <div class="w-full md:w-auto flex flex-col md:flex-row gap-2"> <select id="status-filter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="">All Statuses</option> <option value="completed">Completed</option> <option value="failed">Failed</option> <option value="in-progress">In Progress</option> </select> <select id="date-filter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="7">Last 7 Days</option> <option value="30">Last 30 Days</option> <option value="90">Last 90 Days</option> <option value="all">All Time</option> </select> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
Apply Filters
</button> </div> </div> </div> <!-- Audit Log Table --> <div class="overflow-x-auto relative shadow-md sm:rounded-lg"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="py-3 px-4">Timestamp</th> <th scope="col" class="py-3 px-4">Patient ID</th> <th scope="col" class="py-3 px-4">Initiated By</th> <th scope="col" class="py-3 px-4">Recipient</th> <th scope="col" class="py-3 px-4">Format</th> <th scope="col" class="py-3 px-4">Status</th> <th scope="col" class="py-3 px-4">Encryption</th> <th scope="col" class="py-3 px-4">Actions</th> </tr> </thead> <tbody> ${auditLogEntries.map((entry) => renderTemplate`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"> <td class="py-3 px-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"> ${formatDate(entry.timestamp)} </td> <td class="py-3 px-4">${entry.patientId}</td> <td class="py-3 px-4">${entry.initiatedBy}</td> <td class="py-3 px-4"> <div> <div class="font-medium">${entry.recipientType}</div> <div class="text-xs text-gray-500 dark:text-gray-400"> ${entry.recipientDetails} </div> </div> </td> <td class="py-3 px-4">${entry.dataFormat}</td> <td class="py-3 px-4"> <span${addAttribute(`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(entry.status)}`, "class")}> ${entry.status.charAt(0).toUpperCase() + entry.status.slice(1)} </span> </td> <td class="py-3 px-4"> <div${addAttribute(`flex items-center ${getEncryptionClass(entry.encryptionVerified)}`, "class")}> ${entry.encryptionVerified ? renderTemplate`<span class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check-circle", "class": "w-4 h-4 mr-1" })}
Verified
</span>` : renderTemplate`<span class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "x-circle", "class": "w-4 h-4 mr-1" })}
Failed
</span>`} </div> </td> <td class="py-3 px-4"> <div class="flex space-x-2"> <button type="button" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" aria-label="View details"> ${renderComponent($$result, "Icon", $$Icon, { "name": "eye", "class": "w-5 h-5" })} </button> <button type="button" class="font-medium text-gray-600 dark:text-gray-500 hover:underline" aria-label="Download report"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "class": "w-5 h-5" })} </button> </div> </td> </tr>`)} </tbody> </table> <!-- Pagination --> <div class="flex justify-between items-center pt-4 px-2"> <div class="text-sm text-gray-700 dark:text-gray-300">
Showing <span class="font-medium">1</span> to <span class="font-medium">5</span> of <span class="font-medium">25</span> entries
</div> <div class="flex space-x-1"> <button type="button" class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Previous
</button> <button type="button" class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-blue-50 dark:border-gray-600 dark:text-white dark:bg-blue-900/30">
1
</button> <button type="button" class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
2
</button> <button type="button" class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Next
</button> </div> </div> </div> </div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/TransferAuditLog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/TransferAuditLog.astro", void 0);

const prerender = false;
const $$DataTransfer = createComponent(($$result, $$props, $$slots) => {
  const title = "Data Transfer Management";
  const description = "Secure data portability and transfer management for HIPAA compliance";
  const metrics = [
    {
      id: "transfers-completed",
      label: "Transfers Completed",
      value: 154,
      change: "+12%",
      trend: "up",
      icon: "file-export"
    },
    {
      id: "transfers-failed",
      label: "Transfer Failures",
      value: 3,
      change: "-5%",
      trend: "down",
      icon: "alert-triangle"
    },
    {
      id: "patients-accessed",
      label: "Patients Accessed",
      value: 87,
      change: "+8%",
      trend: "up",
      icon: "users"
    },
    {
      id: "data-volume",
      label: "Data Volume (GB)",
      value: 25.4,
      change: "+15%",
      trend: "up",
      icon: "database"
    }
  ];
  const getTrendClass = (trend) => {
    return trend === "up" ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400";
  };
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "description": description, "activeItem": "data-transfer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <!-- Header Section --> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <h1 class="text-2xl font-bold text-gray-900 dark:text-white"> ${title} </h1> <p class="mt-1 text-gray-500 dark:text-gray-400">
Manage patient data transfers with advanced security controls
</p> </div> <div class="flex items-center gap-3"> <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "file-export", "class": "w-5 h-5 mr-2" })}
Export Audit Logs
</button> <button type="button" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "refresh", "class": "w-5 h-5 mr-2" })}
Refresh
</button> </div> </div> <!-- Metrics Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> ${metrics.map((metric) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"> <div class="flex justify-between items-start"> <div> <p class="text-sm font-medium text-gray-500 dark:text-gray-400"> ${metric.label} </p> <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1"> ${metric.value} </p> </div> <div${addAttribute(`p-3 rounded-full bg-${metric.trend === "up" ? "green" : "red"}-100 dark:bg-${metric.trend === "up" ? "green" : "red"}-900/20`, "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": metric.icon, "class": `w-6 h-6 ${getTrendClass(metric.trend)}` })} </div> </div> <div${addAttribute(`flex items-center mt-4 ${getTrendClass(metric.trend)}`, "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": metric.trend === "up" ? "trending-up" : "trending-down", "class": "w-4 h-4 mr-1" })} <span class="text-sm font-medium"> ${metric.change} from last month
</span> </div> </div>`)} </div> <!-- Main Content Tabs --> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="border-b border-gray-200 dark:border-gray-700"> <nav class="flex space-x-2 px-4" aria-label="Tabs"> <button id="tab-data-portability" type="button" class="py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium text-sm" aria-selected="true">
Data Portability
</button> <button id="tab-audit-logs" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Audit Logs
</button> <button id="tab-settings" type="button" class="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 font-medium text-sm" aria-selected="false">
Settings
</button> </nav> </div> <!-- Tab Panels --> <div class="p-4"> <!-- Data Portability Panel (Default Active) --> <div id="panel-data-portability" class="block"> ${renderComponent($$result2, "DataPortabilitySystem", $$DataPortabilitySystem, {})} </div> <!-- Audit Logs Panel (Initially Hidden) --> <div id="panel-audit-logs" class="hidden"> ${renderComponent($$result2, "TransferAuditLog", $$TransferAuditLog, {})} </div> <!-- Settings Panel (Initially Hidden) --> <div id="panel-settings" class="hidden"> <div class="p-6 bg-white dark:bg-gray-800 rounded-lg"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
Data Transfer Settings
</h2> <div class="space-y-6"> <!-- Encryption Settings --> <div class="space-y-3"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Encryption Settings
</h3> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">End-to-End Encryption</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Apply FHE to all data transfers
</p> </div> <div class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="encryption-toggle" checked class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </div> </div> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">Key Rotation Period</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Automatically rotate encryption keys
</p> </div> <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="30">30 days</option> <option value="60">60 days</option> <option value="90" selected>90 days</option> <option value="180">180 days</option> </select> </div> </div> <!-- Access Control Settings --> <div class="space-y-3"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Access Control
</h3> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">
Two-Factor Authentication for Transfers
</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Require 2FA for all data transfers
</p> </div> <div class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="tfa-toggle" checked class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </div> </div> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">Allowed Export Formats</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Select permitted data formats
</p> </div> <select multiple size="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="json" selected>JSON</option> <option value="csv" selected>CSV</option> <option value="fhir" selected>FHIR</option> <option value="ccd" selected>CCD</option> <option value="hl7" selected>HL7</option> </select> </div> </div> <!-- Audit Settings --> <div class="space-y-3"> <h3 class="text-lg font-medium text-gray-900 dark:text-white">
Audit Settings
</h3> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">Log Retention Period</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Set how long audit logs are retained
</p> </div> <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="180">6 months</option> <option value="365">1 year</option> <option value="730" selected>2 years</option> <option value="1825">5 years</option> </select> </div> <div class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"> <div> <p class="font-medium">Suspicious Activity Alerts</p> <p class="text-sm text-gray-500 dark:text-gray-400">
Notify admins about unusual transfer patterns
</p> </div> <div class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="alerts-toggle" checked class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </div> </div> </div> <!-- Save Button --> <div class="mt-6"> <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
Save Settings
</button> </div> </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/data-transfer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/data-transfer.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/data-transfer.astro";
const $$url = "/admin/data-transfer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DataTransfer,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
