;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="141b949c-abea-4465-aeb2-6f05328f1a1e",e._sentryDebugIdIdentifier="sentry-dbid-141b949c-abea-4465-aeb2-6f05328f1a1e")}catch(e){}}();import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn } from './utils_BxM-XLWA.mjs';
import './astro/server_Ck5BzePu.mjs';

const Switch = React.forwardRef(
  ({ className, checked, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };
    return /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          ref,
          className: "sr-only peer",
          checked,
          onChange: handleChange,
          ...props
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 peer-checked:bg-primary peer-unchecked:bg-input bg-input peer-checked:bg-primary",
            className
          ),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
                checked ? "translate-x-5" : "translate-x-0"
              )
            }
          )
        }
      )
    ] });
  }
);
Switch.displayName = "Switch";

export { Switch as S };
