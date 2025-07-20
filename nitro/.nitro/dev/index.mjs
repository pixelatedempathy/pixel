globalThis.__nitro_main__ = import.meta.url; import destr from 'file:///root/pixel/nitro/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { defineHandler, handleCacheHeaders, toResponse, isEvent, redirect, proxyRequest, getRequestURL, HTTPError, H3, lazyEventHandler, getRouterParam } from 'file:///root/pixel/nitro/node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly/dist/_entries/node.mjs';
import { createHooks } from 'file:///root/pixel/nitro/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers } from 'file:///root/pixel/nitro/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { FastResponse, toNodeHandler } from 'file:///root/pixel/nitro/node_modules/.pnpm/srvx@0.8.2/node_modules/srvx/dist/adapters/node.mjs';
import { parseURL, withoutBase, joinURL, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///root/pixel/nitro/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { prefixStorage } from 'file:///root/pixel/nitro/node_modules/.pnpm/unstorage@1.16.1_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import { createStorage } from 'file:///root/pixel/node_modules/.pnpm/unstorage@1.16.1_@azure+storage-blob@12.27.0_@capacitor+preferences@7.0.1_@capacitor+co_c07f95571997f8a1d6ca4cdc462dddaf/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///root/pixel/node_modules/.pnpm/unstorage@1.16.1_@azure+storage-blob@12.27.0_@capacitor+preferences@7.0.1_@capacitor+co_c07f95571997f8a1d6ca4cdc462dddaf/node_modules/unstorage/drivers/fs.mjs';
import { hash } from 'file:///root/pixel/nitro/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///root/pixel/nitro/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///root/pixel/nitro/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///root/pixel/nitro/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import defu from 'file:///root/pixel/nitro/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { createRouter, addRoute, findAllRoutes } from 'file:///root/pixel/nitro/node_modules/.pnpm/rou3@0.7.3/node_modules/rou3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import consola from 'file:///root/pixel/nitro/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///root/pixel/nitro/node_modules/.pnpm/youch-core@0.3.3/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///root/pixel/nitro/node_modules/.pnpm/youch@4.1.0-beta.8/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///root/pixel/nitro/node_modules/.pnpm/source-map@0.7.4/node_modules/source-map/source-map.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///root/pixel/nitro/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { getRequestURL as getRequestURL$1, getMethod, getRequestHeaders } from 'file:///root/pixel/nitro/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { isSocketSupported, getSocketAddress } from 'file:///root/pixel/nitro/node_modules/.pnpm/get-port-please@3.2.0/node_modules/get-port-please/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/root/pixel/src/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/root/pixel/nitro"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/root/pixel/src"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/root/pixel/nitro/.nitro"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/root/pixel/nitro/.nitro/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/root/pixel/nitro/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    shouldBypassCache: (event) => {
      return event.req.method !== "GET" && event.req.method !== "HEAD";
    },
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.url.pathname + event.url.search;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.req.headers.get(header)]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.status >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (event) => {
      const filteredHeaders = [...event.req.headers.entries()].filter(
        ([key]) => !variableHeaderNames.includes(key.toLowerCase())
      );
      try {
        event.req = new Request(event.req.url, {
          method: event.req.method,
          headers: filteredHeaders
        });
      } catch (error) {
        console.error("[cache] Failed to filter headers:", error);
      }
      const rawValue = await handler(event);
      const res = await toResponse(rawValue, event);
      const body = await res.text();
      if (!res.headers.has("etag")) {
        res.headers.set("etag", `W/"${hash(body)}"`);
      }
      if (!res.headers.has("last-modified")) {
        res.headers.set("last-modified", (/* @__PURE__ */ new Date()).toUTCString());
      }
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        res.headers.set("cache-control", cacheControl.join(", "));
      }
      const cacheEntry = {
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries()),
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    return new FastResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  });
}
const cachedEventHandler = defineCachedEventHandler;

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = globalThis.__NITRO_RUNTIME_CONFIG__ || {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: undefined,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const routeRules = createRouter();
for (const [route, rules] of Object.entries(config.nitro.routeRules)) {
  addRoute(routeRules, void 0, route, rules);
}
function createRouteRulesHandler() {
  return defineHandler((event) => {
    const routeRules2 = getRouteRules(event);
    if (routeRules2.headers) {
      for (const [key, value] of Object.entries(routeRules2.headers)) {
        event.res.headers.set(key, value);
      }
    }
    if (routeRules2.redirect) {
      let target = routeRules2.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.url.pathname + event.url.search;
        const strpBase = routeRules2.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.url.search) {
        target = withQuery(target, Object.fromEntries(event.url.searchParams));
      }
      return redirect(event, target, routeRules2.redirect.status);
    }
    if (routeRules2.proxy) {
      let target = routeRules2.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.url.pathname + event.url.search;
        const strpBase = routeRules2.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.url.search) {
        target = withQuery(target, Object.fromEntries(event.url.searchParams));
      }
      return proxyRequest(event, target, {
        ...routeRules2.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.url.pathname, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu(
    {},
    ...findAllRoutes(routeRules, void 0, path).map((m) => m.data).reverse()
  );
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    event.res.status = res.status;
    event.res.statusText = res.statusText;
    for (const [name, value] of Object.entries(res.headers)) {
      event.res.headers.set(name, value);
    }
    return typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2);
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled;
  const status = error.status || 500;
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.req.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !event.req.headers.get("accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    status,
    statusText: error.statusText,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.req.method,
      headers: Object.fromEntries(event.req.headers.entries())
    }
  });
  return {
    status,
    statusText: error.statusText,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function vitePluginFlexsearchSSR() {
  const virtualModuleId = "virtual:flexsearch-stub";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  const isSSR = process.env.SSR === "true" || !globalThis.window;
  const flexsearchPaths = [
    "flexsearch",
    "flexsearch/dist/module/document",
    "flexsearch/dist/module/index",
    "flexsearch/dist/flexsearch.min.js",
    "flexsearch/dist/module/lang",
    "flexsearch/lang"
  ];
  return {
    name: "vite-plugin-flexsearch-ssr",
    enforce: "pre",
    // Run this plugin before other plugins
    resolveId(id, importer, options) {
      if (isSSR && flexsearchPaths.includes(id)) {
        console.log(`[flexsearch-ssr] Intercepting direct import: ${id}`);
        return resolvedVirtualModuleId;
      }
      if (isSSR && id.includes("/node_modules/flexsearch/")) {
        console.log(`[flexsearch-ssr] Intercepting node_modules import: ${id}`);
        return resolvedVirtualModuleId;
      }
      if (isSSR && importer && (importer.includes("flexsearch") || importer.includes("node_modules/flexsearch"))) {
        console.log(
          `[flexsearch-ssr] Intercepting relative import from flexsearch: ${id} (imported by ${importer})`
        );
        return resolvedVirtualModuleId;
      }
      if (isSSR && options && options.dynamicImport && (id.includes("flexsearch") || id === "flexsearch")) {
        console.log(`[flexsearch-ssr] Intercepting dynamic import: ${id}`);
        return resolvedVirtualModuleId;
      }
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
          // SSR-safe stub for all flexsearch imports

          // Export a default object with all commonly used FlexSearch methods
          const stubMethods = {
            add: () => {},
            search: () => [],
            remove: () => {},
            update: () => {},
            clear: () => {},
            where: () => {},
            find: () => [],
            index: () => {},
            encode: () => ''
          };

          // Main Document class
          class DocumentStub {
            constructor() {
              return Object.assign(this, stubMethods);
            }
          }

          // Main Index class
          class IndexStub {
            constructor() {
              return Object.assign(this, stubMethods);
            }
          }

          // Main export
          const flexsearchStub = {
            Document: function() {
              return new DocumentStub();
            },
            Index: function() {
              return new IndexStub();
            },
            create: function() {
              return new IndexStub();
            },
            registerLanguage: () => {},
            registerEncoder: () => {},
            registerMatcher: () => {},
            registerFilter: () => {},
            registerAsync: () => {}
          };

          // Export as default for standard imports
          export default flexsearchStub;

          // Also export as named exports for destructured imports
          export const Document = DocumentStub;
          export const Index = IndexStub;
          export const create = flexsearchStub.create;
          export const registerLanguage = flexsearchStub.registerLanguage;
          export const registerEncoder = flexsearchStub.registerEncoder;
          export const registerMatcher = flexsearchStub.registerMatcher;
          export const registerFilter = flexsearchStub.registerFilter;
        `;
      }
    }
  };
}

function _MOeBATAlVDZxfXLkxydgwhKjYvZbDnTp6j77OIDtiIY() {
  return {};
}

function middlewarePatchPlugin() {
  return {
    name: "vite-plugin-middleware-patch",
    enforce: "pre",
    resolveId(id) {
      if (id === "astro:middleware" || id === "astro-internal:middleware") {
        return "virtual:patched-middleware";
      }
      return null;
    },
    load(id) {
      if (id === "virtual:patched-middleware") {
        return `
          // Direct import from sequence module to avoid circular dependencies
          import { sequence as _sequence } from 'astro/dist/core/middleware/sequence.js';
          
          // Re-export the sequence function
          export const sequence = _sequence;
          
          // Export other middleware-related functions if needed
          export * from 'astro/dist/core/middleware/app.js';
          export * from 'astro/dist/core/middleware/createContext.js';
          export * from 'astro/dist/core/middleware/createMiddleware.js';
        `;
      }
      return null;
    }
  };
}

const plugins = [
    vitePluginFlexsearchSSR,
_MOeBATAlVDZxfXLkxydgwhKjYvZbDnTp6j77OIDtiIY,
middlewarePatchPlugin
  ];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6dd-wiRvyN5al8YL5USdOCfPviIwdlQ\"",
    "mtime": "2025-07-20T05:07:51.036Z",
    "size": 42717,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"a96d-LvVA6+O2oq52sRnIa+xh0R5BtbE\"",
    "mtime": "2025-07-20T05:07:51.036Z",
    "size": 43373,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _1xpiMl = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(event.url.pathname))
  );
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});

function getLogLevel() {
  if (typeof process !== "undefined" && process.env) ;
  return 1 /* INFO */;
}
function createBuildSafeLogger(prefix = "app") {
  const level = getLogLevel();
  return {
    debug(message, data) {
      if (0 /* DEBUG */ < level) return;
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [DEBUG] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.debug(formatted, data);
      } else {
        console.debug(formatted);
      }
    },
    info(message, data) {
      if (1 /* INFO */ < level) return;
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [INFO] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.info(formatted, data);
      } else {
        console.info(formatted);
      }
    },
    warn(message, data) {
      if (2 /* WARN */ < level) return;
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const formatted = `[${timestamp}] [WARN] [${prefix}] ${message}`;
      if (data !== void 0) {
        console.warn(formatted, data);
      } else {
        console.warn(formatted);
      }
    },
    error(message, data) {
      if (3 /* ERROR */ < level) return;
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

const logger = createBuildSafeLogger("monitoring-middleware");
const azureInsights = {
  trackPageView: () => {
  },
  trackRequest: () => {
  },
  trackMetric: () => {
  },
  trackEvent: () => {
  }
};
async function monitoringMiddleware(event, next) {
  const startTime = Date.now();
  const url = new URL(getRequestURL$1(event));
  const method = getMethod(event) || "UNKNOWN";
  const headersObj = getRequestHeaders(event);
  const userAgent = headersObj["user-agent"] ?? "unknown";
  const ip = headersObj["x-forwarded-for"] ?? headersObj["x-real-ip"] ?? "unknown";
  let userId;
  try {
    const cookies = headersObj["cookie"];
    const sessionCookie = cookies?.split(";").find((c) => c.trim().startsWith("pixelated_session="))?.split("=")[1];
    if (sessionCookie) {
      const session = JSON.parse(decodeURIComponent(sessionCookie));
      userId = session.userId;
    }
  } catch (error) {
  }
  const requestMetrics = {
    startTime,
    userAgent,
    ip,
    userId
  };
  if (method === "GET" && !url.pathname.startsWith("/api/")) {
    azureInsights.trackPageView(url.pathname, url.toString(), {
      userAgent,
      ip,
      userId: userId || "anonymous"
    });
  }
  try {
    const response = await next();
    const endTime = Date.now();
    const duration = endTime - startTime;
    const statusCode = response.status;
    const success = statusCode >= 200 && statusCode < 400;
    requestMetrics.endTime = endTime;
    requestMetrics.duration = duration;
    requestMetrics.statusCode = statusCode;
    requestMetrics.success = success;
    azureInsights.trackRequest({
      name: `${method} ${url.pathname}`,
      url: url.toString(),
      duration,
      responseCode: statusCode.toString(),
      success,
      properties: {
        method,
        userAgent,
        ip,
        userId: userId || "anonymous",
        pathname: url.pathname
      },
      measurements: {
        duration,
        statusCode
      }
    });
    azureInsights.trackMetric({
      name: "request.duration",
      value: duration,
      properties: {
        method,
        pathname: url.pathname,
        statusCode: statusCode.toString(),
        success: success.toString()
      }
    });
    if (!success) {
      azureInsights.trackMetric({
        name: "request.errors",
        value: 1,
        properties: {
          method,
          pathname: url.pathname,
          statusCode: statusCode.toString()
        }
      });
      if (statusCode >= 500) {
        azureInsights.trackEvent({
          name: "server_error",
          properties: {
            method,
            pathname: url.pathname,
            statusCode: statusCode.toString(),
            userAgent,
            ip,
            userId: userId || "anonymous"
          }
        });
      } else if (statusCode === 404) {
        azureInsights.trackEvent({
          name: "page_not_found",
          properties: {
            method,
            pathname: url.pathname,
            userAgent,
            ip,
            userId: userId || "anonymous"
          }
        });
      } else if (statusCode === 401 || statusCode === 403) {
        azureInsights.trackEvent({
          name: "unauthorized_access",
          properties: {
            method,
            pathname: url.pathname,
            statusCode: statusCode.toString(),
            userAgent,
            ip,
            userId: userId || "anonymous"
          }
        });
      }
    }
    if (duration > 5e3) {
      azureInsights.trackEvent({
        name: "slow_request",
        properties: {
          method,
          pathname: url.pathname,
          userAgent,
          ip,
          userId: userId || "anonymous"
        },
        measurements: {
          duration
        }
      });
    }
    logger.info("Request completed", {
      method,
      pathname: url.pathname,
      statusCode,
      duration,
      success,
      userId: userId || "anonymous",
      ip
    });
    return response;
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    requestMetrics.endTime = endTime;
    requestMetrics.duration = duration;
    requestMetrics.success = false;
    azureInsights.trackException({
      exception: error instanceof Error ? error : new Error(String(error)),
      properties: {
        method,
        pathname: url.pathname,
        userAgent,
        ip,
        userId: userId || "anonymous"
      },
      measurements: {
        duration
      },
      severityLevel: "Error"
    });
    azureInsights.trackRequest({
      name: `${method} ${url.pathname}`,
      url: url.toString(),
      duration,
      responseCode: "500",
      success: false,
      properties: {
        method,
        userAgent,
        ip,
        userId: userId || "anonymous",
        pathname: url.pathname,
        error: error instanceof Error ? error.message : String(error)
      },
      measurements: {
        duration
      }
    });
    azureInsights.trackMetric({
      name: "request.exceptions",
      value: 1,
      properties: {
        method,
        pathname: url.pathname,
        errorType: error instanceof Error ? error.constructor.name : "Unknown"
      }
    });
    logger.error("Request failed", {
      method,
      pathname: url.pathname,
      duration,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      userId: userId || "anonymous",
      ip
    });
    throw error;
  }
}

const handlers = [
  { route: '', handler: _1xpiMl, lazy: false, middleware: true, method: undefined },
  { route: '', handler: monitoringMiddleware, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = new H3({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      if (event.context._platform) {
        Object.assign(event.context, event.context._platform);
      }
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onResponse: async (response, event) => {
      await nitroApp$1.hooks.callHook("response", response, event).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const appFetch = (input, init, ctx) => {
    return Promise.resolve(h3App._fetch(input, init, ctx));
  };
  const hybridFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return appFetch(input, init);
  };
  const $fetch = createFetch({
    fetch: hybridFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (!h.route) {
      h3App.use(handler);
    } else if (h.middleware) {
      h3App.use(h.route, handler, { method: h.method });
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      h3App.on(h.method, h.route, handler);
    }
  }
  const app = {
    hooks,
    h3App,
    fetch: appFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw new HTTPError({
      message: `Task \`${name}\` is not available!`,
      status: 404
    });
  }
  if (!tasks[name].resolve) {
    throw new HTTPError({
      message: `Task \`${name}\` is not implemented!`,
      status: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeHandler(nitroApp.h3App.fetch));
let listener;
listen().catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.h3App.get(
  "/_nitro/tasks",
  defineHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.h3App.use(
  "/_nitro/tasks/:name",
  defineHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const body = await event.req.json().catch(() => ({}));
    const payload = {
      ...Object.fromEntries(event.url.searchParams.entries()),
      ...body
    };
    return await runTask(name, { payload });
  })
);
async function listen() {
  const listenAddr = await isSocketSupported() ? getSocketAddress({
    name: `nitro-dev-${threadId}`,
    pid: true,
    random: true
  }) : { port: 0, host: "localhost" };
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(listenAddr, () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}
//# sourceMappingURL=index.mjs.map
