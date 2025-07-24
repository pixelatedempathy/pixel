;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0fa09d72-7fcf-4e75-bda6-4432ce9c25bb",e._sentryDebugIdIdentifier="sentry-dbid-0fa09d72-7fcf-4e75-bda6-4432ce9c25bb")}catch(e){}}();import './astro/server_Ck5BzePu.mjs';

function getLogLevel() {
  if (typeof process !== "undefined" && process.env) {
    const envLevel = process.env["NODE_ENV"];
    if (envLevel === "production") {
      return 3 /* ERROR */;
    }
    if (envLevel === "test") {
      return 2 /* WARN */;
    }
  }
  return 1 /* INFO */;
}
function createBuildSafeLogger(prefix = "app") {
  const level = getLogLevel();
  return {
    debug(message, data) {
      if (0 /* DEBUG */ < level) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [DEBUG] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.debug(formatted, data);
      } else {
        console.debug(formatted);
      }
    },
    info(message, data) {
      if (1 /* INFO */ < level) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [INFO] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.info(formatted, data);
      } else {
        console.info(formatted);
      }
    },
    warn(message, data) {
      if (2 /* WARN */ < level) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [WARN] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.warn(formatted, data);
      } else {
        console.warn(formatted);
      }
    },
    error(message, data) {
      if (3 /* ERROR */ < level) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [ERROR] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.error(formatted, data);
      } else {
        console.error(formatted);
      }
    }
  };
}
function getStartupLogger() {
  return createBuildSafeLogger("startup");
}

export { createBuildSafeLogger as c, getStartupLogger as g };
