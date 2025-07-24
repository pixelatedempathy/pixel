;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a44c68f3-0d29-4db2-b7aa-5b3d7ec6acf1",e._sentryDebugIdIdentifier="sentry-dbid-a44c68f3-0d29-4db2-b7aa-5b3d7ec6acf1")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';

async function getAIUsageStats(options = {}) {
  return {
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    averageResponseTime: 0,
    period: options.period || "day"
  };
}

export { getAIUsageStats as g };
