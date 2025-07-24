;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="13815f2e-7924-4ea8-9ae8-28e74dff7597",e._sentryDebugIdIdentifier="sentry-dbid-13815f2e-7924-4ea8-9ae8-28e74dff7597")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, ao as spreadAttributes, e as addAttribute, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import { s as slug } from './common_EF7hpbRN.mjs';
import './config_SUBLc_BE.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Categorizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categorizer;
  const { idx, text, needId = false, wide = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(needId ? { id: slug(text) } : {})}${addAttribute(`toc-heading relative h-20
    pointer-events-none select-none
    ${idx !== void 0 ? "slide-enter" : ""}`, "class")}${addAttribute(idx !== void 0 ? { "--enter-stage": idx - 2 } : void 0, "style")}> ${!wide ? renderTemplate`<span class="absolute left--12 top--8
          op-10 text-8em text-stroke-2 text-stroke-hex-aaa font-bold color-transparent"> ${text} </span>` : renderTemplate`<span${addAttribute(`absolute top-0 op-35 dark:op-20
          text-5em lt-lg:text-4.5em lt-sm:(text-3.6em top-2) text-stroke-1.5 text-stroke-#aaa
          font-bold color-transparent leading-1em
          ${"left--4" }`, "class")}> ${text} </span>`} </div>`;
}, "/root/pixel/src/components/base/Categorizer.astro", void 0);

export { $$Categorizer as $ };
