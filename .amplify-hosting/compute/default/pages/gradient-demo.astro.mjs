;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fb46f8f8-4f39-451f-a6b3-2d0f9b908f84",e._sentryDebugIdIdentifier="sentry-dbid-fb46f8f8-4f39-451f-a6b3-2d0f9b908f84")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, a as renderTemplate, e as addAttribute, m as maybeRenderHead, r as renderComponent, d as renderScript, b as createAstro, as as defineStyleVars } from '../chunks/astro/server_DBAAVvAL.mjs';
import { a as $$Plum, $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
import 'clsx';
/* empty css                                         */
import { $ as $$Icon } from '../chunks/Icon_CVlwxpvZ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Rose = createComponent(($$result, $$props, $$slots) => {
  const roses = [
    { id: 1, petals: 28, scale: 8e-3, rotation: 80 },
    { id: 2, petals: 26, scale: 5e-3, rotation: 80 },
    { id: 3, petals: 30, scale: 0.01, rotation: 80 }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div id="rose" class="z--1 fixed top-0 bottom-0 left-0 right-0\n    w-full h-full\n    op-50 dark:op-100\n    pointer-events-none\n    print:hidden dark:invert" style="mask-image: radial-gradient(circle, transparent, black);\n    --webkit-mask-image: radial-gradient(circle, transparent, black)"> ', " </div> <script data-astro-rerun>\n  function getRandom(min, max) {\n    return Math.random() * (max - min) + min\n  }\n\n  function getRandomPercentage(min, max) {\n    return (Math.random() * (max - min) + min).toFixed(2) + '%'\n  }\n\n  if (document.getElementById('rose')) {\n    const animateRose = (\n      roseId,\n      topRange,\n      leftRange,\n      scaleRange,\n      rotationRange,\n    ) => {\n      const rose = document.getElementById(roseId)\n      if (!rose) return\n      const petals = rose.querySelectorAll(`#${roseId} .petal`)\n\n      rose.style.top = `${getRandomPercentage(...topRange)}`\n      rose.style.left = `${getRandomPercentage(...leftRange)}`\n      rose.style.opacity = '1'\n\n      const r = 80\n      const scaleBase = getRandom(...scaleRange)\n      const rotationBase = getRandom(...rotationRange)\n\n      petals.forEach((petal, idx) => {\n        const scaleValue = (idx + 1) * scaleBase\n        const rotateValue = (idx + 1) * (r + rotationBase)\n\n        petal.style.transform = `scale(${scaleValue}, ${scaleValue}) rotate(${rotateValue}deg)`\n      })\n    }\n\n    animateRose('rose-1', [-10, -5], [10, 20], [0.04, 0.06], [-3, 3])\n    animateRose('rose-2', [80, 85], [-5, 5], [0.02, 0.04], [-3, 3])\n    if (window.innerWidth >= 640) {\n      animateRose('rose-3', [45, 65], [85, 90], [0.05, 0.07], [-3, 3])\n    } else {\n      animateRose('rose-3', [45, 65], [85, 90], [0.03, 0.05], [-3, 3])\n    }\n  }\n<\/script>"], ["", '<div id="rose" class="z--1 fixed top-0 bottom-0 left-0 right-0\n    w-full h-full\n    op-50 dark:op-100\n    pointer-events-none\n    print:hidden dark:invert" style="mask-image: radial-gradient(circle, transparent, black);\n    --webkit-mask-image: radial-gradient(circle, transparent, black)"> ', " </div> <script data-astro-rerun>\n  function getRandom(min, max) {\n    return Math.random() * (max - min) + min\n  }\n\n  function getRandomPercentage(min, max) {\n    return (Math.random() * (max - min) + min).toFixed(2) + '%'\n  }\n\n  if (document.getElementById('rose')) {\n    const animateRose = (\n      roseId,\n      topRange,\n      leftRange,\n      scaleRange,\n      rotationRange,\n    ) => {\n      const rose = document.getElementById(roseId)\n      if (!rose) return\n      const petals = rose.querySelectorAll(\\`#\\${roseId} .petal\\`)\n\n      rose.style.top = \\`\\${getRandomPercentage(...topRange)}\\`\n      rose.style.left = \\`\\${getRandomPercentage(...leftRange)}\\`\n      rose.style.opacity = '1'\n\n      const r = 80\n      const scaleBase = getRandom(...scaleRange)\n      const rotationBase = getRandom(...rotationRange)\n\n      petals.forEach((petal, idx) => {\n        const scaleValue = (idx + 1) * scaleBase\n        const rotateValue = (idx + 1) * (r + rotationBase)\n\n        petal.style.transform = \\`scale(\\${scaleValue}, \\${scaleValue}) rotate(\\${rotateValue}deg)\\`\n      })\n    }\n\n    animateRose('rose-1', [-10, -5], [10, 20], [0.04, 0.06], [-3, 3])\n    animateRose('rose-2', [80, 85], [-5, 5], [0.02, 0.04], [-3, 3])\n    if (window.innerWidth >= 640) {\n      animateRose('rose-3', [45, 65], [85, 90], [0.05, 0.07], [-3, 3])\n    } else {\n      animateRose('rose-3', [45, 65], [85, 90], [0.03, 0.05], [-3, 3])\n    }\n  }\n<\/script>"])), maybeRenderHead(), roses.map((rose) => renderTemplate`<div${addAttribute(`rose-${rose.id}`, "id")} class="absolute w-200px h-200px op-0 translate--50%"> ${Array.from({ length: rose.petals }, (_, i) => renderTemplate`<div class="petal absolute left-50%
              h-full w-full
              transition-transform duration-60000 ease-out origin-bottom-center
              before:content-empty
              before:absolute before:w-full before:h-full before:border-solid before:border-0.6 before:border-#22222260 dark:before:border-solid dark:before:border-0.8 dark:before:border-#88888860
              before:rounded-tl-[50%_35%] before:rounded-br-[35%_50%] before:rounded-tr-[45%] before:rounded-bl-[10%]
              before:bg-radial-gradient-98 dark:before:bg-radial-gradient-85
              before:transform-rotate-[-45deg]"${addAttribute({
    "z-index": rose.petals - i,
    "transform": `scale(${i * rose.scale}, ${i * rose.scale}) rotate(${i * rose.rotation}deg)`
  }, "style")}></div>`)} </div>`));
}, "/root/pixel/src/components/backgrounds/Rose.astro", void 0);

const $$Particle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "bg-particle", "bg-particle", { "class": "z--1 fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden dark:invert" })} ${renderScript($$result, "/root/pixel/src/components/backgrounds/Particle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/backgrounds/Particle.astro", void 0);

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$GradientAnimation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GradientAnimation;
  const {
    colorScheme = "default",
    speed = 15,
    opacity = 80,
    blur = true,
    class: className = ""
  } = Astro2.props;
  const colorSchemes = {
    default: {
      colors: ["#4a9a95", "#3e817d", "#6366f1", "#8b5cf6"],
      darkColors: ["#3e817d", "#2d5f5c", "#4f46e5", "#7c3aed"]
    },
    purple: {
      colors: ["#8b5cf6", "#6366f1", "#c084fc", "#a855f7"],
      darkColors: ["#7c3aed", "#4f46e5", "#a855f7", "#9333ea"]
    },
    blue: {
      colors: ["#3b82f6", "#60a5fa", "#2563eb", "#93c5fd"],
      darkColors: ["#2563eb", "#3b82f6", "#1d4ed8", "#60a5fa"]
    },
    green: {
      colors: ["#10b981", "#34d399", "#059669", "#6ee7b7"],
      darkColors: ["#059669", "#10b981", "#047857", "#34d399"]
    },
    sunset: {
      colors: ["#f59e0b", "#f97316", "#ef4444", "#ec4899"],
      darkColors: ["#d97706", "#ea580c", "#dc2626", "#db2777"]
    }
  };
  const selectedScheme = colorSchemes[colorScheme];
  const $$definedVars = defineStyleVars([{
    animationDuration: `${speed}s`,
    opacity: opacity / 100,
    blur: blur ? "80px" : "0px",
    color1: selectedScheme.colors[0],
    color2: selectedScheme.colors[1],
    color3: selectedScheme.colors[2],
    color4: selectedScheme.colors[3],
    darkColor1: selectedScheme.darkColors[0],
    darkColor2: selectedScheme.darkColors[1],
    darkColor3: selectedScheme.darkColors[2],
    darkColor4: selectedScheme.darkColors[3]
  }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`gradient-animation fixed inset-0 -z-10 pointer-events-none ${className}`, "class")}${addAttribute(colorScheme, "data-color-scheme")}${addAttribute(speed, "data-speed")}${addAttribute(blur ? "true" : "false", "data-blur")} data-astro-cid-2lqbpv3z${addAttribute($$definedVars, "style")}> <div class="gradient-container" data-astro-cid-2lqbpv3z${addAttribute($$definedVars, "style")}></div> </div>  ${renderScript($$result, "/root/pixel/src/components/backgrounds/GradientAnimation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/backgrounds/GradientAnimation.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Background;
  const { type, colorScheme = "default" } = Astro2.props;
  return renderTemplate`${type === "default" && renderTemplate`${maybeRenderHead()}<div class="fixed inset-0 -z-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"></div>`}${type === "plum" && renderTemplate`${renderComponent($$result, "Plum", $$Plum, {})}`}${type === "pulse" && renderTemplate`${renderComponent($$result, "Particle", $$Particle, {})}`}${type === "light" && renderTemplate`<div class="fixed inset-0 -z-10 bg-white"></div>`}${type === "dark" && renderTemplate`<div class="fixed inset-0 -z-10 bg-gray-900"></div>`}${type === "stars" && renderTemplate`${renderComponent($$result, "Rose", $$Rose, {})}`}${type === "rose" && renderTemplate`${renderComponent($$result, "Rose", $$Rose, {})}`}${type === "animated" && renderTemplate`${renderComponent($$result, "GradientAnimation", $$GradientAnimation, { "colorScheme": colorScheme })}`}`;
}, "/root/pixel/src/components/backgrounds/Background.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$GradientDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GradientDemo;
  const colorSchemes = [
    { id: "default", name: "Default", description: "Teal and purple gradient" },
    { id: "purple", name: "Purple", description: "Vibrant purple tones" },
    { id: "blue", name: "Blue", description: "Calming blue gradient" },
    { id: "green", name: "Green", description: "Fresh green tones" },
    { id: "sunset", name: "Sunset", description: "Warm orange and red" }
  ];
  const colorScheme = Astro2.url.searchParams.get("colorScheme") || "blue";
  const selectedScheme = colorSchemes.find((scheme) => scheme.id === colorScheme) || colorSchemes[0];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Animated Gradient Background Demo", "description": "Showcase of beautiful animated gradient backgrounds", "data-astro-cid-djjapdp5": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Background", $$Background, { "type": "particle", "colorScheme": "blue", "data-astro-cid-djjapdp5": true })} ${maybeRenderHead()}<main class="relative min-h-screen flex flex-col items-center justify-center py-12 px-4" data-astro-cid-djjapdp5> <div class="max-w-4xl mx-auto text-center relative z-10" data-astro-cid-djjapdp5> <h1 class="text-5xl md:text-6xl font-bold mb-8" data-astro-cid-djjapdp5>
Animated Gradient Background
</h1> <p class="text-xl md:text-2xl mb-12" data-astro-cid-djjapdp5>
A beautiful, animated gradient background with smooth transitions and
        subtle motion effects.
</p> <!-- Color scheme selector --> <div class="mb-16" data-astro-cid-djjapdp5> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-djjapdp5>Select a Color Scheme</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-djjapdp5> ${colorSchemes.map((scheme) => renderTemplate`<a${addAttribute(`?colorScheme=${scheme.id}`, "href")}${addAttribute(`p-4 rounded-lg transition-all duration-300 flex flex-col items-center justify-center ${selectedScheme.id === scheme.id ? "bg-white/20 shadow-lg scale-105 border border-white/30" : "bg-white/10 hover:bg-white/15 hover:scale-105"}`, "class")} data-astro-cid-djjapdp5> <div class="w-16 h-16 rounded-full mb-3"${addAttribute(`background: linear-gradient(135deg, var(--color-${scheme.id}-1), var(--color-${scheme.id}-2))`, "style")} data-astro-cid-djjapdp5></div> <h3 class="text-lg font-medium" data-astro-cid-djjapdp5>${scheme.name}</h3> <p class="text-sm opacity-80" data-astro-cid-djjapdp5>${scheme.description}</p> </a>`)} </div> </div> <!-- Call to action --> <div class="mt-12" data-astro-cid-djjapdp5> <a href="/features" class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 font-medium" data-astro-cid-djjapdp5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-left", "class": "w-5 h-5", "data-astro-cid-djjapdp5": true })}
Back to Features
</a> </div> </div> </main> ` })} `;
}, "/root/pixel/src/pages/gradient-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/gradient-demo.astro";
const $$url = "/gradient-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GradientDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
