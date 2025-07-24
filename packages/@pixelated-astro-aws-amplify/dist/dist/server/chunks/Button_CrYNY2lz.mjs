;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9c2717fc-7443-43d1-b418-95b6b071740f",e._sentryDebugIdIdentifier="sentry-dbid-9c2717fc-7443-43d1-b418-95b6b071740f")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, a as renderTemplate, h as renderSlot } from './astro/server_t-wqd6mp.mjs';
import { cva } from 'class-variance-authority';
import { c as cn } from './utils_C7j64O8V.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const {
    href,
    type = "button",
    variant = "default",
    size = "default",
    class: className,
    loading = false,
    loadingText,
    disabled,
    ...rest
  } = Astro2.props;
  const isDisabled = disabled || loading;
  if (size === "icon" && !rest["aria-label"]) {
    console.warn(
      "Warning: Icon-only buttons should have an aria-label attribute for accessibility"
    );
  }
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(cn(buttonVariants({ variant, size, className })), "class")}${spreadAttributes(rest)}>${loading && renderTemplate`<svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`}${loading ? loadingText || renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`${renderSlot($$result, $$slots["default"])}`}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(cn(buttonVariants({ variant, size, className })), "class")}${addAttribute(isDisabled, "disabled")}${spreadAttributes(rest)}>${loading && renderTemplate`<svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`}${loading ? loadingText || renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`${renderSlot($$result, $$slots["default"])}`}</button>`}`;
}, "/root/pixel/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
