;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc0d6d79-0437-4953-a904-68a53a44c095",e._sentryDebugIdIdentifier="sentry-dbid-dc0d6d79-0437-4953-a904-68a53a44c095")}catch(e){}}();import './astro/server_Ck5BzePu.mjs';

function slug(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/-{2,}/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
function getUrl(...paths) {
  return paths.join("/");
}
function ensureTrailingSlash(pathname) {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export { ensureTrailingSlash as e, getUrl as g, slug as s };
