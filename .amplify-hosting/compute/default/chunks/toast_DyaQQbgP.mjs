;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="54335057-e6f6-453b-928d-cd7bc5cbd6a9",e._sentryDebugIdIdentifier="sentry-dbid-54335057-e6f6-453b-928d-cd7bc5cbd6a9")}catch(e){}}();import { jsx, jsxs } from 'react/jsx-runtime';
import { toast as toast$1 } from 'react-hot-toast';
import { c as cn } from './utils_Cq1Cukkb.mjs';
import './astro/server_jchCCyc7.mjs';

const defaultOptions = {
  duration: 3e3,
  position: "bottom-right"
};
const toast = {
  // Base toast method
  custom: ({ message, icon, ...options }) => {
    return toast$1.custom(
      (t) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex items-center p-4 bg-white dark:bg-gray-800 rounded-md shadow-md",
            "max-w-md w-full",
            t.visible ? "animate-enter" : "animate-leave"
          ),
          children: [
            icon && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mr-3", children: icon }),
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: message }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toast$1.dismiss(t.id),
                className: "ml-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            )
          ]
        }
      ),
      {
        ...defaultOptions,
        ...options
      }
    );
  },
  // Success toas
  success: (message, options) => {
    return toast$1.success(message, {
      ...defaultOptions,
      ...options
    });
  },
  // Error toas
  error: (message, options) => {
    return toast$1.error(message, {
      ...defaultOptions,
      ...options
    });
  },
  // Info toas
  info: (message, options) => {
    return toast$1(message, {
      ...defaultOptions,
      ...options,
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-5 h-5 text-blue-500",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
              clipRule: "evenodd"
            }
          )
        }
      )
    });
  },
  // Warning toas
  warning: (message, options) => {
    return toast$1(message, {
      ...defaultOptions,
      ...options,
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-5 h-5 text-yellow-500",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              clipRule: "evenodd"
            }
          )
        }
      )
    });
  },
  // Loading toas
  loading: (message, options) => {
    return toast$1.loading(message, {
      ...defaultOptions,
      ...options
    });
  },
  // Promise toast with proper TypeScript generics
  promise: function promiseToast(promise, messages, options) {
    return toast$1.promise(
      promise,
      {
        loading: messages.loading,
        success: messages.success,
        error: messages.error
      },
      {
        ...defaultOptions,
        ...options
      }
    );
  },
  // Dismiss toas
  dismiss: (toastId) => {
    toast$1.dismiss(toastId);
  }
};

export { toast };
