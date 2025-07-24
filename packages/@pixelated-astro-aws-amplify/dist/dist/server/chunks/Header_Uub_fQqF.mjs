;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9e171d93-c211-4ecf-8c4c-900970d2fd15",e._sentryDebugIdIdentifier="sentry-dbid-9e171d93-c211-4ecf-8c4c-900970d2fd15")}catch(e){}}();import { c as createComponent, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from './astro/server_Ck5BzePu.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Training Demos", href: "/demos" },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
    { name: "Dashboard", href: "/dashboard" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<header class="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/30 border-b border-slate-300/10"> <div class="max-w-6xl mx-auto px-4"> <div class="flex items-center justify-between h-16"> <!-- Site branding --> <div class="shrink-0 mr-4"> <a class="flex items-center gap-2" href="/"> <img class="h-8 w-8" src="/images/logo-light.svg" alt="Pixelated Empathy Logo"> <span class="text-xl font-bold text-slate-100 font-geist tracking-tight">\nPixelated Empathy\n</span> </a> </div> <!-- Desktop navigation --> <nav class="hidden md:flex md:grow"> <!-- Desktop menu links --> <ul class="flex grow justify-end flex-wrap items-center"> ', ` </ul> <!-- Dark mode toggle --> <div class="flex items-center justify-end pl-4"> <button id="theme-toggle" class="text-slate-400 hover:text-green-400"> <span class="sr-only">Toggle theme</span> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> </nav> <!-- Mobile menu button (optional) --> <div class="md:hidden"> <!-- Hamburger button can be added here --> </div> </div> </div> </header> <script>
  // Basic dark mode toggle script
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  // Apply theme on initial load
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
  applyTheme(savedTheme);
<\/script>`])), maybeRenderHead(), navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="font-medium text-slate-300 hover:text-green-400 px-4 py-3 flex items-center transition duration-150 ease-in-out font-geist"> ${link.name} </a> </li>`));
}, "/root/pixel/src/components/layout/Header.astro", void 0);

export { $$Header as $ };
