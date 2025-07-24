;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba8e8523-769a-4f7a-9dc5-740831b00972",e._sentryDebugIdIdentifier="sentry-dbid-ba8e8523-769a-4f7a-9dc5-740831b00972")}catch(e){}}();import { aa as NOOP_MIDDLEWARE_HEADER } from './astro/server_DzSu7Vuv.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

export { NOOP_MIDDLEWARE_FN as N };
//# sourceMappingURL=noop-middleware_CMrPQVjS.mjs.map
