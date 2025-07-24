;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b16cfc00-acd9-4bd3-9e96-ae9e55539925",e._sentryDebugIdIdentifier="sentry-dbid-b16cfc00-acd9-4bd3-9e96-ae9e55539925")}catch(e){}}();import Redis from 'ioredis';
import './astro/server_bjkJ-nhl.mjs';

const getConfig = async () => {
  try {
    const configModule = await import('./env.config_C7r7Q_W6.mjs');
    return configModule.config;
  } catch {
    return null;
  }
};
const isProduction = () => {
  const config = getConfig();
  return config?.isProduction() ?? false;
};
const getRedisConfig = () => {
  const config = getConfig();
  return {
    restUrl: config?.redis.url(),
    restToken: config?.redis.token()
  };
};
function createMockRedisClient() {
  const message = isProduction() ? "CRITICAL: Using mock Redis client in production. This should never happen." : "Using mock Redis client for development. This should not be used in production.";
  console.warn(message);
  return {
    get: async (_key) => null,
    set: async (_key, _value, _options) => "OK",
    del: async (_key) => 1,
    incr: async (_key) => 1,
    exists: async (_key) => 0,
    expire: async (_key, _seconds) => 1,
    hset: async (_key, _field, _value) => 1,
    hget: async (_key, _field) => null,
    hgetall: async (_key) => ({}),
    hdel: async (_key, _field) => 1,
    ping: async () => "PONG",
    disconnect: async () => {
    }
  };
}
function createRedisClient() {
  const { restUrl, restToken } = getRedisConfig();
  const hasValidCredentials = Boolean(restUrl && restToken);
  if (hasValidCredentials) {
    return new Redis(restUrl, {
      password: restToken
      // Add any additional options here if needed
    });
  } else {
    if (isProduction()) {
      console.error(
        "CRITICAL: Missing Redis credentials in production environment"
      );
    }
    return createMockRedisClient();
  }
}
const redis = createRedisClient();
async function checkRedisConnection() {
  try {
    const pingResult = await redis.ping();
    return pingResult === "PONG";
  } catch (error) {
    console.error("Redis connectivity check failed:", error);
    return false;
  }
}
async function getRedisHealth() {
  try {
    const isConnected = await checkRedisConnection();
    if (isConnected) {
      return { status: "healthy" };
    } else {
      return {
        status: "unhealthy",
        details: { message: "Could not connect to Redis" }
      };
    }
  } catch (error) {
    return {
      status: "unhealthy",
      details: {
        message: "Redis health check failed",
        error: error instanceof Error ? error.message : String(error)
      }
    };
  }
}

export { getRedisHealth as g, redis as r };
