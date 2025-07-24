;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b246f279-38ee-457a-9bec-f497d4d75f99",e._sentryDebugIdIdentifier="sentry-dbid-b246f279-38ee-457a-9bec-f497d4d75f99")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server_bjkJ-nhl.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    external = false,
    class: className,
    ...rest
  } = Astro2.props;
  const isExternal = external || href && href.startsWith("http");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "op-60 no-underline hover:op-100",
    className
  ], "class:list")}${addAttribute(href, "href")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/root/pixel/src/components/base/Link.astro", void 0);

export { $$Link as $ };
