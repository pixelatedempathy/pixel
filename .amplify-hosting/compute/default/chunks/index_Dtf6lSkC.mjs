;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e2162908-1956-4349-b072-a68dc2619f70",e._sentryDebugIdIdentifier="sentry-dbid-e2162908-1956-4349-b072-a68dc2619f70")}catch(e){}}();import { R as RedisService } from './RedisService_RIggNH0X.mjs';
import { g as getEnv } from './env_BC5XolJU.mjs';
import './astro/server_bjkJ-nhl.mjs';

const redisUrl = getEnv("UPSTASH_REDIS_REST_URL") || getEnv("REDIS_URL") || "redis://localhost:6379";
const redisPrefix = getEnv("REDIS_PREFIX") || "";
const config = {
  url: redisUrl,
  keyPrefix: redisPrefix,
  maxRetries: 3,
  // Add other default config values if needed
  retryDelay: 1e3,
  connectTimeout: 5e3
  // Add other necessary config fields from RedisServiceConfig
};
const redis = new RedisService(config);

export { redis as r };
