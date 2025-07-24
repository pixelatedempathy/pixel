;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40b9b148-4603-44dd-95db-f27cc40ee01f",e._sentryDebugIdIdentifier="sentry-dbid-40b9b148-4603-44dd-95db-f27cc40ee01f")}catch(e){}}();import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as createAstro, e as addAttribute, g as renderHead, h as renderSlot } from './astro/server_jchCCyc7.mjs';
import { $ as $$Header } from './Header_QjCCVkC8.mjs';
import { useState, useCallback, useEffect } from 'react';

const $$Plum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "bg-plum", "bg-plum", { "class": "z--1 fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden", "style": "mask-image: radial-gradient(circle, transparent 20%, black 60%, transparent); --webkit-mask-image: radial-gradient(circle, transparent 20%, black 60%, transparent); opacity: 0.6;" }, { "default": () => renderTemplate` ${maybeRenderHead()}<canvas></canvas> ` })} ${renderScript($$result, "/root/pixel/src/components/backgrounds/Plum.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/backgrounds/Plum.astro", void 0);

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
const useKonamiCode = (callback) => {
  const [keys, setKeys] = useState([]);
  const handler = useCallback(
    ({ key }) => {
      if (key === "Escape") {
        setKeys([]);
        return;
      }
      const newKeys = [...keys, key];
      if (newKeys.join("").includes(konamiCode.join(""))) {
        callback();
        setKeys([]);
      } else {
        setKeys(newKeys);
      }
    },
    [keys, callback]
  );
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
};

const KonamiTrigger = () => {
  useKonamiCode(() => {
    window.location.href = "/egg";
  });
  return null;
};

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, bgType } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Pixelated Empathy</title><meta name="description"${addAttribute(description ?? "Transforming therapy education with AI.", "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-slate-900 text-slate-100 font-geist"> ${bgType === "plum" && renderTemplate`${renderComponent($$result, "Plum", $$Plum, {})}`} ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "KonamiTrigger", KonamiTrigger, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/KonamiTrigger", "client:component-export": "KonamiTrigger" })} </main> <!-- <Footer /> --> </body></html>`;
}, "/root/pixel/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Plum as a };
