;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="549568cb-38fc-47a0-8540-b2d6be83c740",e._sentryDebugIdIdentifier="sentry-dbid-549568cb-38fc-47a0-8540-b2d6be83c740")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server_jchCCyc7.mjs';
import { cva } from 'class-variance-authority';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default: "border-transparent bg-primary text-primary-foreground",
          secondary: "border-transparent bg-secondary text-secondary-foreground",
          destructive: "border-transparent bg-destructive text-destructive-foreground",
          outline: "text-foreground"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  const { class: className, variant, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([badgeVariants({ variant }), className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/Badge.astro", void 0);

export { $$Badge as $ };
