;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="034f7b8e-79ef-4d83-86c5-e211dfbc813e",e._sentryDebugIdIdentifier="sentry-dbid-034f7b8e-79ef-4d83-86c5-e211dfbc813e")}catch(e){}}();import { S as SITE } from './config_Piylsppw.mjs';
import './astro/server_Ck5BzePu.mjs';

function formatDate(d, showYear = true, useUTC = false) {
  const date = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }
  const options = {
    month: "short",
    day: "numeric",
    ...showYear && { year: "numeric" },
    ...useUTC && { timeZone: "UTC" }
  };
  return date.toLocaleDateString(SITE.lang, options);
}
function getYear(a) {
  return new Date(a).getFullYear();
}
function isSameYear(a, b) {
  return a && b && getYear(a) === getYear(b);
}
function isDiffMonth(currentTime, preTime) {
  return preTime ? new Date(currentTime).getMonth() !== new Date(preTime).getMonth() : false;
}

export { isDiffMonth as a, formatDate as f, getYear as g, isSameYear as i };
