;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="38678880-c3b3-44e9-8370-f14fd0438885",e._sentryDebugIdIdentifier="sentry-dbid-38678880-c3b3-44e9-8370-f14fd0438885")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server_Ck5BzePu.mjs';
import { c as cn } from './utils_BxM-XLWA.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card"${addAttribute(cn(
    "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
