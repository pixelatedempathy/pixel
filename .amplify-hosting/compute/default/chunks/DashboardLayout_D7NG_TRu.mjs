;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a658f8ea-f07e-4215-bf1f-164e1959433c",e._sentryDebugIdIdentifier="sentry-dbid-a658f8ea-f07e-4215-bf1f-164e1959433c")}catch(e){}}();import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, e as addAttribute, h as renderSlot } from './astro/server_bjkJ-nhl.mjs';
/* empty css                                  */
/* empty css                                  */
import { $ as $$Head, a as $$Footer } from './Footer_DP6ff-Y0.mjs';
import 'clsx';
import { $ as $$Header } from './Header_C2rv2YQ9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as cn } from './utils_y2hdiMjE.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$ErrorBoundary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorBoundary;
  const { fallback = "Something went wrong. Please try refreshing the page." } = Astro2.props;
  return renderTemplate``;
}, "/root/pixel/src/components/base/ErrorBoundary.astro", void 0);

function Sidebar() {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const isDashboardPage = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin") || pathname?.startsWith("/simulator") || pathname?.startsWith("/analytics");
  const [isOpen, setIsOpen] = useState(isDashboardPage);
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    therapy: true,
    account: false
  });
  useEffect(() => {
    setIsOpen(isDashboardPage);
  }, [pathname, isDashboardPage]);
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  const navigationSections = [
    {
      title: "Overview",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: [
            /* @__PURE__ */ jsx("path", { d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" }),
            /* @__PURE__ */ jsx("path", { d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" })
          ] })
        },
        {
          name: "Analytics",
          href: "/analytics",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" }) })
        }
      ]
    },
    {
      title: "Therapy Tools",
      items: [
        {
          name: "Chat",
          href: "/chat",
          icon: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: [
            /* @__PURE__ */ jsx("path", { d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" }),
            /* @__PURE__ */ jsx("path", { d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" })
          ] }),
          badge: "3"
        },
        {
          name: "Practice Simulator",
          href: "/simulator",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
              clipRule: "evenodd"
            }
          ) })
        },
        {
          name: "Resources",
          href: "/resources",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" }) })
        },
        {
          name: "Session History",
          href: "/sessions",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
              clipRule: "evenodd"
            }
          ) })
        }
      ]
    },
    {
      title: "Account",
      items: [
        {
          name: "Profile",
          href: "/profile",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
              clipRule: "evenodd"
            }
          ) })
        },
        {
          name: "Security",
          href: "/security",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
              clipRule: "evenodd"
            }
          ) })
        },
        {
          name: "Settings",
          href: "/settings",
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
              clipRule: "evenodd"
            }
          ) })
        }
      ]
    }
  ];
  if (!isDashboardPage && typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "aside",
    {
      className: cn(
        "fixed top-0 left-0 z-20 w-64 h-full pt-16 pb-4 overflow-y-auto transition-transform bg-card border-r border-border",
        !isOpen ? "-translate-x-full" : "",
        "lg:translate-x-0"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "px-3 py-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center w-full p-2 text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition duration-200 group",
            onClick: () => setIsOpen(!isOpen),
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-5 h-5 text-muted-foreground transition duration-75 group-hover:text-foreground",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: isOpen ? "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" : "M4 6h16M4 12h16M4 18h16",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "ml-3", children: "Toggle Menu" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: navigationSections.map((section) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection(section.title.toLowerCase()),
              className: "flex items-center w-full px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition",
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: section.title }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: `w-4 h-4 transition-transform ${expandedSections[section.title.toLowerCase()] ? "rotate-180" : ""}`,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 9l-7 7-7-7"
                      }
                    )
                  }
                )
              ]
            }
          ),
          expandedSections[section.title.toLowerCase()] && /* @__PURE__ */ jsx("ul", { className: "space-y-1 pl-2", children: section.items.map((item) => {
            const isActive = pathname === item.href;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: item.href,
                className: cn(
                  "flex items-center p-2 text-sm rounded-lg transition-colors duration-200",
                  isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent hover:text-accent-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        isActive ? "text-primary-foreground" : "text-muted-foreground"
                      ),
                      children: item.icon
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3", children: item.name }),
                  item.badge && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-5 h-5 ml-auto text-xs font-semibold text-primary-foreground bg-primary rounded-full", children: item.badge })
                ]
              }
            ) }, item.name);
          }) })
        ] }, section.title)) })
      ] })
    }
  );
}

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SidebarReact", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/layout/SidebarReact", "client:component-export": "Sidebar" })}`;
}, "/root/pixel/src/components/layout/Sidebar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://pixelatedempathy.com");
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const {
    title = "Pixelated Empathy Therapy | Dashboard",
    description = "Advanced therapeutic tools for mental health professionals",
    metaImage = "/og-image.png",
    showHeader = true,
    showFooter = true,
    showSidebar = true,
    showThemeToggle = true,
    showUserMenu = true,
    showSocialLinks = true,
    contentClassName = ""
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full scroll-smooth" data-astro-cid-kqx5um5x> ', "", '<body class="relative font-sans theme-page flex flex-col min-h-screen theme-bg-primary" data-astro-cid-kqx5um5x> <!-- Skip to content link for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:shadow-lg transition-transform" data-astro-cid-kqx5um5x>\nSkip to content\n</a> ', " <!-- Theme handling script with improved performance --> <script>\n      // Get saved theme or use system default\n      const getTheme = () => {\n        const savedTheme = localStorage?.getItem('theme')\n        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {\n          return savedTheme\n        }\n        return 'system'\n      }\n\n      // Apply theme\n      const applyTheme = (theme) => {\n        const isDark =\n          theme === 'dark' ||\n          (theme === 'system' &&\n            window.matchMedia('(prefers-color-scheme: dark)').matches)\n\n        document.documentElement.classList.toggle('dark', isDark)\n      }\n\n      // Initialize theme\n      applyTheme(getTheme())\n\n      // Listen for OS theme changes\n      window\n        .matchMedia('(prefers-color-scheme: dark)')\n        .addEventListener('change', () => {\n          const theme = getTheme()\n          if (theme === 'system') {\n            applyTheme('system')\n          }\n        })\n    <\/script> </body> </html> "])), renderComponent($$result, "Head", $$Head, { "title": title, "description": description, "ogImage": metaImage, "data-astro-cid-kqx5um5x": true }), maybeRenderHead(), renderComponent($$result, "ErrorBoundary", $$ErrorBoundary, { "data-astro-cid-kqx5um5x": true }, { "default": ($$result2) => renderTemplate`${showHeader && renderTemplate`${renderComponent($$result2, "Header", $$Header, { "showThemeToggle": showThemeToggle, "showUserMenu": showUserMenu, "position": "sticky", "data-astro-cid-kqx5um5x": true })}`}<div class="flex flex-grow flex-col lg:flex-row" data-astro-cid-kqx5um5x> ${showSidebar && renderTemplate`<aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 pt-16
            backdrop-blur-sm bg-card/80 border-r border-border/30
            transform transition-transform duration-300 lg:translate-x-0 lg:static lg:h-auto" id="sidebar" data-astro-cid-kqx5um5x> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-kqx5um5x": true })} </aside>`} <main${addAttribute([
    "relative flex-grow pt-16 transition-all duration-300 ease-in-out slide-enter",
    showSidebar ? "lg:ml-64" : "w-full",
    contentClassName
  ], "class:list")} id="main-content" data-astro-cid-kqx5um5x> <div class="container mx-auto px-4 py-6 min-h-[calc(100vh-4rem)] flex flex-col slide-enter-content" data-astro-cid-kqx5um5x> ${renderSlot($$result2, $$slots["default"])} </div> ${showFooter && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "showSocialLinks": showSocialLinks, "className": "mt-auto border-t border-border/30 backdrop-blur-sm", "data-astro-cid-kqx5um5x": true })}`} </main> </div> ` }));
}, "/root/pixel/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
