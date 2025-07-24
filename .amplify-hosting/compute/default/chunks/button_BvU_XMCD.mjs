;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="393027fa-e6eb-4259-bb6e-89d80e15c2ef",e._sentryDebugIdIdentifier="sentry-dbid-393027fa-e6eb-4259-bb6e-89d80e15c2ef")}catch(e){}}();import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { c as cn } from './utils_CaJ1_uI4.mjs';
import './astro/server_DBAAVvAL.mjs';

function isLinkButton(props) {
  return "href" in props && typeof props.href === "string";
}
function getAriaProps(props) {
  return {
    "aria-label": props["aria-label"],
    "aria-description": props["aria-description"],
    "aria-disabled": props.disabled,
    "aria-busy": props.loading
  };
}
function getButtonClassName(props) {
  const classes = [];
  if (props.fullWidth) {
    classes.push("w-full");
  }
  if (props.loading) {
    classes.push("cursor-wait");
  }
  if (props.disabled) {
    classes.push("cursor-not-allowed");
  }
  return classes.join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({
    className,
    variant,
    size,
    loading = false,
    loadingText,
    showSpinner = true,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    href,
    target,
    rel,
    ...props
  }, ref) => {
    const isLink = isLinkButton({ href });
    const content = loading && loadingText ? loadingText : children;
    const commonProps = {
      className: cn(
        buttonVariants({ variant, size, className }),
        getButtonClassName({ loading, disabled, fullWidth })
      ),
      disabled: disabled || loading,
      ...getAriaProps({ loading, disabled, ...props }),
      ...props
    };
    const loadingSpinner = loading && showSpinner ? /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent",
        role: "status",
        "aria-label": "Loading"
      }
    ) : null;
    const contentWrapper = /* @__PURE__ */ jsxs(Fragment, { children: [
      loadingSpinner,
      !loading && leftIcon,
      content,
      !loading && rightIcon
    ] });
    if (isLink) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          ref,
          href,
          target,
          rel: target === "_blank" ? "noopener noreferrer" : rel,
          ...commonProps,
          children: contentWrapper
        }
      );
    }
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        ...commonProps,
        children: contentWrapper
      }
    );
  }
);
Button.displayName = "Button";

export { Button as B, buttonVariants as b };
