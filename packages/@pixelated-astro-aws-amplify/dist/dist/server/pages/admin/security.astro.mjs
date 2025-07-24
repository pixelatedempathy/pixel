;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ceafcecc-9960-42b3-87f2-3178162c27c9",e._sentryDebugIdIdentifier="sentry-dbid-ceafcecc-9960-42b3-87f2-3178162c27c9")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ar as unescapeHTML, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_CQPtU_GH.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$SecuritySubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecuritySubmenu;
  const currentPath = Astro2.url.pathname;
  const securityMenuItems = [
    {
      href: "/admin/security",
      label: "Security Overview",
      icon: "shield-check"
    },
    {
      href: "/admin/security/risk-assessment",
      label: "Risk Assessment",
      icon: "chart-bar",
      isNew: true
    },
    {
      href: "/admin/security/disaster-recovery",
      label: "Disaster Recovery",
      icon: "refresh",
      isNew: true
    },
    {
      href: "/admin/security/baa",
      label: "Business Associates",
      icon: "document-text"
    },
    {
      href: "/admin/security/consent",
      label: "Consent Management",
      icon: "document-report"
    },
    {
      href: "/admin/security/patient-rights",
      label: "Patient Rights",
      icon: "user-circle"
    },
    {
      href: "/admin/security/dlp",
      label: "Data Loss Prevention",
      icon: "shield-exclamation"
    },
    {
      href: "/admin/security/backup",
      label: "Backup Security",
      icon: "database"
    }
  ];
  function getIcon(iconName) {
    switch (iconName) {
      case "shield-check":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>`;
      case "chart-bar":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>`;
      case "refresh":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>`;
      case "document-text":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
              </svg>`;
      case "document-report":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
              </svg>`;
      case "user-circle":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>`;
      case "shield-exclamation":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
              </svg>`;
      case "database":
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>`;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6"> <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
Security Administration
</h2> <nav> <ul class="space-y-1"> ${securityMenuItems.map((item) => {
    const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
    return renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`flex items-center px-4 py-2 rounded-md transition-colors ${isActive ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`, "class")}> <span class="mr-3">${unescapeHTML(getIcon(item.icon))}</span> <span>${item.label}</span> ${item.isNew && renderTemplate`<span class="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
New
</span>`} </a> </li>`;
  })} </ul> </nav> </div>`;
}, "/root/pixel/src/components/admin/SecuritySubmenu.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const securityMetrics = {
    hipaaComplianceScore: 98,
    securityRiskScore: 92,
    threatDetectionLevel: 95,
    dataProtectionLevel: 96,
    lastSecurityScan: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3)
    // 2 days ago
  };
  const securityAlerts = [
    {
      id: "alert-001",
      title: "Unusual Data Access Pattern Detected",
      level: "medium",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1e3),
      description: "User accessed an unusually large number of patient records."
    },
    {
      id: "alert-002",
      title: "Failed Login Attempts",
      level: "low",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1e3),
      description: "Multiple failed login attempts detected from IP 192.168.1.45."
    },
    {
      id: "alert-003",
      title: "Backup Verification Successful",
      level: "info",
      timestamp: new Date(Date.now() - 28 * 60 * 60 * 1e3),
      description: "Weekly backup verification completed successfully with 100% integrity."
    }
  ];
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }
  function getAlertLevelClass(level) {
    switch (level) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      case "info":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  const recentUpdates = [
    {
      name: "Risk Assessment System",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3),
      description: "Implemented comprehensive automated security risk assessment tool.",
      link: "/admin/security/risk-assessment"
    },
    {
      name: "Disaster Recovery Framework",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3),
      description: "Deployed new disaster recovery and business continuity planning framework.",
      link: "/admin/security/disaster-recovery"
    },
    {
      name: "BAA Management System",
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1e3),
      description: "Enhanced BAA management system with workflow automation.",
      link: "/admin/security/baa/management"
    },
    {
      name: "Patient Rights Management",
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3),
      description: "Added comprehensive patient rights request management system.",
      link: "/admin/security/patient-rights"
    }
  ];
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Security Dashboard", "description": "Security and compliance management dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8"> <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
Security Dashboard
</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <!-- Left sidebar with submenu --> <div class="md:col-span-1"> ${renderComponent($$result2, "SecuritySubmenu", $$SecuritySubmenu, {})} <!-- Recent Updates Card --> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"> <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
Recent Updates
</h2> <div class="space-y-4"> ${recentUpdates.map((update) => renderTemplate`<div class="border-l-4 border-green-500 pl-4 py-2"> <h3 class="font-medium text-gray-800 dark:text-white"> ${update.name} </h3> <p class="text-sm text-gray-600 dark:text-gray-300"> ${update.description} </p> <div class="flex justify-between items-center mt-2"> <span class="text-xs text-gray-500"> ${formatDate(update.date)} </span> <a${addAttribute(update.link, "href")} class="text-xs text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
View Details
</a> </div> </div>`)} </div> </div> </div> <!-- Main content area --> <div class="md:col-span-2 space-y-6"> <!-- Security Metrics Cards --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
HIPAA Compliance
</h3> <div class="mt-2 flex justify-between items-end"> <p class="text-3xl font-bold text-green-600 dark:text-green-400"> ${securityMetrics.hipaaComplianceScore}%
</p> <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> </div> <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
All critical controls implemented
</p> </div> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Security Risk Score
</h3> <div class="mt-2 flex justify-between items-end"> <p class="text-3xl font-bold text-blue-600 dark:text-blue-400"> ${securityMetrics.securityRiskScore}%
</p> <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
Last assessment: ${formatDate(securityMetrics.lastSecurityScan)} </p> </div> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Threat Detection
</h3> <div class="mt-2 flex justify-between items-end"> <p class="text-3xl font-bold text-purple-600 dark:text-purple-400"> ${securityMetrics.threatDetectionLevel}%
</p> <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> </div> <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
Advanced threat monitoring active
</p> </div> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"> <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Data Protection
</h3> <div class="mt-2 flex justify-between items-end"> <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400"> ${securityMetrics.dataProtectionLevel}%
</p> <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> </div> <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
FHE encryption active on all PHI
</p> </div> </div> <!-- Security Alerts Card --> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"> <div class="flex justify-between items-center mb-4"> <h2 class="text-lg font-semibold text-gray-800 dark:text-white">
Security Alerts
</h2> <a href="/admin/security/alerts" class="text-sm text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
View All
</a> </div> ${securityAlerts.length === 0 ? renderTemplate`<div class="text-center py-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <p class="mt-4 text-gray-600 dark:text-gray-300">
No security alerts at this time.
</p> </div>` : renderTemplate`<div class="space-y-4"> ${securityAlerts.map((alert) => renderTemplate`<div class="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-3"> <div class="flex justify-between items-center"> <h3 class="font-medium text-gray-800 dark:text-white"> ${alert.title} </h3> <span${addAttribute(`px-2 py-1 text-xs font-medium rounded-full ${getAlertLevelClass(alert.level)}`, "class")}> ${alert.level.charAt(0).toUpperCase() + alert.level.slice(1)} </span> </div> <p class="text-sm text-gray-600 dark:text-gray-300 mt-1"> ${alert.description} </p> <div class="flex justify-between items-center mt-2"> <span class="text-xs text-gray-500"> ${formatDate(alert.timestamp)} </span> <a${addAttribute(`/admin/security/alerts/${alert.id}`, "href")} class="text-xs text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
View Details
</a> </div> </div>`)} </div>`} </div> <!-- HIPAA Compliance Summary --> <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"> <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
HIPAA Compliance Summary
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div> <h3 class="font-medium text-gray-800 dark:text-white mb-2">
Technical Safeguards
</h3> <div class="flex items-center mb-4"> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2"> <div class="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style="width: 98%"></div> </div> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">98%</span> </div> <ul class="space-y-1 text-sm"> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Access Control</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Audit Controls</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Data Integrity</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Transmission Security</span> </li> </ul> </div> <div> <h3 class="font-medium text-gray-800 dark:text-white mb-2">
Administrative Safeguards
</h3> <div class="flex items-center mb-4"> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2"> <div class="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style="width: 100%"></div> </div> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">100%</span> </div> <ul class="space-y-1 text-sm"> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Risk Analysis</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Risk Management</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Workforce Security</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Disaster Recovery</span> </li> </ul> </div> <div> <h3 class="font-medium text-gray-800 dark:text-white mb-2">
Physical Safeguards
</h3> <div class="flex items-center mb-4"> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2"> <div class="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style="width: 95%"></div> </div> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">95%</span> </div> <ul class="space-y-1 text-sm"> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Facility Access</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Workstation Security</span> </li> <li class="flex items-center text-green-800 dark:text-green-400"> <span class="mr-2">✓</span> <span>Device Controls</span> </li> <li class="flex items-center text-amber-800 dark:text-amber-400"> <span class="mr-2">⚠</span> <span>Media Disposal</span> </li> </ul> </div> </div> <div class="mt-6 text-center"> <a href="/admin/security/compliance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
View Full Compliance Report
</a> </div> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/admin/security/index.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security/index.astro";
const $$url = "/admin/security";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
