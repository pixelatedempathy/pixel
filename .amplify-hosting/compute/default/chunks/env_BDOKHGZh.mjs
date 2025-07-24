;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fde5110a-4f0b-49ac-a767-26a1a0f06c5f",e._sentryDebugIdIdentifier="sentry-dbid-fde5110a-4f0b-49ac-a767-26a1a0f06c5f")}catch(e){}}();import './astro/server_DBAAVvAL.mjs';

function getEnv(key, defaultValue) {
  return process.env[key] ?? defaultValue;
}
function isEnvTrue(key) {
  const value = process.env[key]?.toLowerCase();
  return value === "true" || value === "1" || value === "yes";
}

export { getEnv as g, isEnvTrue as i };
