;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f25cfd7-02ab-43a9-9110-fceb7878f68f",e._sentryDebugIdIdentifier="sentry-dbid-7f25cfd7-02ab-43a9-9110-fceb7878f68f")}catch(e){}}();import { b as createAstro, c as createComponent, e as addAttribute, r as renderComponent, g as renderHead, h as renderSlot, d as renderScript, i as renderTransition, j as createTransitionScope, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import { S as SITE } from './config_SUBLc_BE.mjs';
import { createClient } from '@supabase/supabase-js';
import { c as createBuildSafeLogger } from './build-safe-logger_AsZljXJu.mjs';
import { g as getUser } from './sessionUtils_DRjKSnQs.mjs';
import { $ as $$ClientRouter } from './ClientRouter_Dxjf8yEn.mjs';
/* empty css                                   */
/* empty css                                   */

const logger = createBuildSafeLogger("auth-utils");
async function isAuthenticated(request) {
  try {
    const supabase = createClient(
      "https://dihivzkwbwpkpebichlk.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs"
    );
    if (request) ;
    const { data, error } = await supabase.auth.getSession();
    if (error || !data?.session) {
      return false;
    }
    return true;
  } catch (error) {
    logger.error("Error checking authentication:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0
    });
    return false;
  }
}
async function hasAdminRole(user) {
  try {
    return user.role === "admin";
  } catch (error) {
    logger.error("Error checking admin role:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0
    });
    return false;
  }
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const {
    title = "Admin Dashboard",
    description = `Admin dashboard for ${SITE.title}`,
    activeItem = "dashboard",
    image = "/og-image.png"
  } = Astro2.props;
  const isLoggedIn = await isAuthenticated();
  const user = isLoggedIn ? await getUser() : null;
  const isAdmin = isLoggedIn && user && await hasAdminRole(user);
  if (!isLoggedIn || !isAdmin) {
    return Astro2.redirect("/login?redirect=/admin");
  }
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "/admin" },
    { id: "users", label: "Users", icon: "users", href: "/admin/users" },
    {
      id: "ai-performance",
      label: "AI Performance",
      icon: "stats",
      href: "/admin/ai-performance"
    },
    {
      id: "security",
      label: "Security",
      icon: "shield",
      href: "/admin/security-dashboard"
    },
    {
      id: "dlp",
      label: "DLP Rules",
      icon: "shield-check",
      href: "/admin/dlp"
    },
    {
      id: "backup-security",
      label: "Backup Security",
      icon: "database",
      href: "/admin/backup-security"
    },
    {
      id: "data-transfer",
      label: "Data Transfer",
      icon: "file-export",
      href: "/admin/data-transfer"
    },
    {
      id: "data-retention",
      label: "Data Retention",
      icon: "calendar",
      href: "/admin/data-retention"
    },
    {
      id: "audit-logs",
      label: "Audit Logs",
      icon: "list",
      href: "/admin/audit-logs"
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
      href: "/admin/settings"
    },
    {
      id: "patient-rights",
      label: "Patient Rights",
      icon: "user",
      href: "/admin/patient-rights"
    }
  ];
  const isActive = (navId) => activeItem === navId;
  return renderTemplate`<html${addAttribute(SITE.lang, "lang")} data-astro-cid-vbp3ken7${addAttribute(renderTransition($$result, "iaue33sz", "fade", ""), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Admin Dashboard</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-vbp3ken7": true })}${renderHead()}</head> <body class="bg-gray-100 dark:bg-gray-900 min-h-screen" data-astro-cid-vbp3ken7> <!-- Skip to content link for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:shadow-lg transition-transform" data-astro-cid-vbp3ken7>
Skip to content
</a> <div class="flex min-h-screen" data-astro-cid-vbp3ken7> <!-- Sidebar --> <aside id="sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 md:translate-x-0" data-astro-cid-vbp3ken7${addAttribute(createTransitionScope($$result, "u3nh2alg"), "data-astro-transition-persist")}> <div class="h-full px-3 py-4 overflow-y-auto" data-astro-cid-vbp3ken7> <!-- Logo --> <div class="flex items-center mb-5 p-2" data-astro-cid-vbp3ken7> <h2 class="text-xl font-semibold text-gray-800 dark:text-white" data-astro-cid-vbp3ken7>
Admin Portal
</h2> </div> <!-- Navigation --> <ul class="space-y-2 font-medium" data-astro-cid-vbp3ken7> ${navItems.map((item) => renderTemplate`<li data-astro-cid-vbp3ken7> <a${addAttribute(item.href, "href")}${addAttribute(`flex items-center p-2 rounded-lg ${isActive(item.id) ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`, "class")} data-astro-cid-vbp3ken7> <span class="ms-3" data-astro-cid-vbp3ken7>${item.label}</span> </a> </li>`)} </ul> </div> </aside> <!-- Mobile header --> <div class="sticky top-0 z-30 w-full flex items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:px-8" data-astro-cid-vbp3ken7${addAttribute(createTransitionScope($$result, "fk23fa57"), "data-astro-transition-persist")}> <button id="sidebar-toggle" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-label="Toggle sidebar menu" data-astro-cid-vbp3ken7> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-vbp3ken7> <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" data-astro-cid-vbp3ken7></path> </svg> </button> <div class="flex-1 flex justify-between items-center ml-2 md:ml-0" data-astro-cid-vbp3ken7> <span class="font-semibold" data-astro-cid-vbp3ken7>${title}</span> <div class="flex items-center gap-4" data-astro-cid-vbp3ken7> <div class="relative" data-astro-cid-vbp3ken7> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" aria-label="Notifications" data-astro-cid-vbp3ken7> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vbp3ken7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-astro-cid-vbp3ken7></path> </svg> </button> </div> <div class="relative" data-astro-cid-vbp3ken7> <button class="flex items-center gap-2 text-gray-700 dark:text-gray-300" aria-label="User profile" data-astro-cid-vbp3ken7> <img class="h-8 w-8 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" data-astro-cid-vbp3ken7> <span class="hidden md:inline" data-astro-cid-vbp3ken7>Admin</span> </button> </div> </div> </div> </div> <!-- Page content --> <main id="main-content" class="p-4 md:ml-64 pt-20 w-full" data-astro-cid-vbp3ken7${addAttribute(renderTransition($$result, "zk6rshg7", "fade", ""), "data-astro-transition-scope")}> <div class="p-4 border-2 border-gray-200 dark:border-gray-700 border-dashed rounded-lg" data-astro-cid-vbp3ken7> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> ${renderScript($$result, "/root/pixel/src/components/admin/AdminLayout.astro?astro&type=script&index=0&lang.ts")}  </body> </html>`;
}, "/root/pixel/src/components/admin/AdminLayout.astro", "self");

export { $$AdminLayout as $ };
