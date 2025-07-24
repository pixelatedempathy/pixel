;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71e3cefb-ea46-47c1-ba2f-94fa09b0f086",e._sentryDebugIdIdentifier="sentry-dbid-71e3cefb-ea46-47c1-ba2f-94fa09b0f086")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import { c as cn } from './utils_CaJ1_uI4.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$CardDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardDescription;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card-description"${addAttribute(cn("text-muted-foreground text-sm", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/CardDescription.astro", void 0);

export { $$CardDescription as $ };
