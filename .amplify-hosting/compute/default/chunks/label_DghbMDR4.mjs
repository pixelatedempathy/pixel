;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7dde6fa3-a63f-4ee8-9fe8-4cefe246e312",e._sentryDebugIdIdentifier="sentry-dbid-7dde6fa3-a63f-4ee8-9fe8-4cefe246e312")}catch(e){}}();import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn } from './utils_y2hdiMjE.mjs';
import './astro/server_bjkJ-nhl.mjs';

const Label = React.forwardRef(
  ({ className, htmlFor, ...props }, ref) => {
    if (process.env.NODE_ENV !== "production" && !htmlFor) {
      console.warn(
        "Label component should have an htmlFor prop to associate it with a form control"
      );
    }
    return /* @__PURE__ */ jsx(
      "label",
      {
        ref,
        htmlFor,
        className: cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Label.displayName = "Label";

export { Label as L };
