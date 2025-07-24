;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ecb2f339-dc4c-421e-942c-f7e503491df4",e._sentryDebugIdIdentifier="sentry-dbid-ecb2f339-dc4c-421e-942c-f7e503491df4")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import { c as cn } from './utils_CaJ1_uI4.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$CardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardContent;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card-content"${addAttribute(cn("px-6", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/CardContent.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$CardHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardHeader;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card-header"${addAttribute(cn(
    "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/CardHeader.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$CardTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTitle;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card-title"${addAttribute(cn("leading-none font-semibold", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/CardTitle.astro", void 0);

export { $$CardHeader as $, $$CardTitle as a, $$CardContent as b };
