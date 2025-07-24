;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="673e1e79-d684-4343-9679-f1cf2c55c0c3",e._sentryDebugIdIdentifier="sentry-dbid-673e1e79-d684-4343-9679-f1cf2c55c0c3")}catch(e){}}();import { EventEmitter } from 'events';
import { a as getHipaaCompliantLogger } from './standardized-logger_kYBE-aYG.mjs';
import { Redis } from 'ioredis';
import './astro/server_DBAAVvAL.mjs';

var RedisErrorCode = /* @__PURE__ */ ((RedisErrorCode2) => {
  RedisErrorCode2["CONNECTION_FAILED"] = "REDIS_CONNECTION_FAILED";
  RedisErrorCode2["OPERATION_FAILED"] = "REDIS_OPERATION_FAILED";
  RedisErrorCode2["INVALID_CONFIG"] = "REDIS_INVALID_CONFIG";
  RedisErrorCode2["CONNECTION_CLOSED"] = "REDIS_CONNECTION_CLOSED";
  RedisErrorCode2["POOL_EXHAUSTED"] = "REDIS_POOL_EXHAUSTED";
  RedisErrorCode2["HEALTH_CHECK_FAILED"] = "REDIS_HEALTH_CHECK_FAILED";
  return RedisErrorCode2;
})(RedisErrorCode || {});
class RedisServiceError extends Error {
  constructor(code, message, cause) {
    super(message);
    this.code = code;
    this.cause = cause;
    this.name = "RedisServiceError";
  }
}

const logger = getHipaaCompliantLogger("general");
class RedisService extends EventEmitter {
  getClient() {
    return this.client;
  }
  client = null;
  subscribers = /* @__PURE__ */ new Map();
  healthCheckInterval = null;
  config;
  constructor(config = { url: "" }) {
    super();
    this.config = {
      maxRetries: 3,
      retryDelay: 1e3,
      maxConnections: 10,
      url: ""
    };
    this.validateConfig(config);
  }
  validateConfig(config) {
    Object.assign(this.config, config);
    const hasUpstashUrl = Boolean(process.env["UPSTASH_REDIS_REST_URL"]);
    const hasRedisUrl = Boolean(process.env["REDIS_URL"]);
    if (hasUpstashUrl) {
      this.config.url = process.env["UPSTASH_REDIS_REST_URL"];
    } else if (hasRedisUrl) {
      this.config.url = process.env["REDIS_URL"];
    }
    if (!this.config.url && !hasUpstashUrl && !hasRedisUrl) {
      if (process.env["NODE_ENV"] === "development") {
        logger.warn("No Redis URL configured, using mock Redis in development");
        return;
      }
      logger.error("No Redis URL available, service may not function properly");
      if (process.env["NODE_ENV"] !== "production") {
        return;
      }
    }
  }
  async connect() {
    try {
      if (this.client) {
        return;
      }
      if (!this.config.url && process.env["NODE_ENV"] === "development") {
        logger.warn(
          "No Redis URL configured, skipping connection in development"
        );
        return;
      }
      const redisOptions = {
        maxRetriesPerRequest: this.config.maxRetries,
        retryStrategy: (times) => {
          if (times > (this.config.maxRetries || 3)) {
            return null;
          }
          return this.config.retryDelay || 100;
        }
      };
      if (this.config.keyPrefix) {
        redisOptions["keyPrefix"] = this.config.keyPrefix;
      }
      if (this.config.connectTimeout) {
        redisOptions["connectTimeout"] = this.config.connectTimeout;
      }
      this.client = new Redis(this.config.url, redisOptions);
      this.client.on("error", (error) => {
        logger.error("Redis error:", { error: String(error) });
      });
      this.client.on("connect", () => {
        logger.info("Connected to Redis");
      });
      this.client.on("close", () => {
        logger.warn("Redis connection closed");
      });
      await this.client.connect();
      this.startHealthCheck();
    } catch (error) {
      if (process.env["NODE_ENV"] === "development") {
        logger.warn(
          "Failed to connect to Redis in development, will use mock:",
          {
            error: error instanceof Error ? error.message : String(error)
          }
        );
        this.client = null;
        return;
      }
      throw new RedisServiceError(
        RedisErrorCode.CONNECTION_FAILED,
        "Failed to connect to Redis",
        error
      );
    }
  }
  async disconnect() {
    try {
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
        this.healthCheckInterval = null;
      }
      if (this.client) {
        await this.client.quit();
        this.client = null;
      }
      await Promise.all(
        Array.from(this.subscribers.values()).map((sub) => sub.quit())
      );
      this.subscribers.clear();
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.CONNECTION_CLOSED,
        "Error disconnecting from Redis",
        error
      );
    }
  }
  async ensureConnection() {
    if (!this.client) {
      await this.connect();
    }
    if (!this.client) {
      if (process.env["NODE_ENV"] === "development") {
        logger.warn("Using mock Redis client in development");
        return this.createMockClient();
      }
      throw new RedisServiceError(
        RedisErrorCode.CONNECTION_FAILED,
        "Redis client is not initialized"
      );
    }
    return this.client;
  }
  // Mock client for development when no Redis URL is available
  createMockClient() {
  }
  createClient() {
    const redisOptions = {
      url: this.config.url,
      maxRetriesPerRequest: this.config.maxRetries,
      retryStrategy: (times) => {
        if (times > (this.config.maxRetries || 3)) {
          return null;
        }
        return this.config.retryDelay || 100;
      },
      keyPrefix: this.config.keyPrefix,
      connectTimeout: this.config.connectTimeout
    };
    return new Redis(this.config.url, redisOptions);
  }
  startHealthCheck() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    this.healthCheckInterval = setInterval(async () => {
      try {
        await this.isHealthy();
      } catch (error) {
        logger.error("Health check failed:", { error: String(error) });
      }
    }, this.config.healthCheckInterval || 5e3);
  }
  async isHealthy() {
    try {
      const client = await this.ensureConnection();
      await client.ping();
      return true;
    } catch (error) {
      logger.error("Redis health check failed:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return false;
    }
  }
  async get(key) {
    try {
      const client = await this.ensureConnection();
      return await client.get(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get key: ${key}`,
        error
      );
    }
  }
  async set(key, value, ttlMs) {
    try {
      const client = await this.ensureConnection();
      if (ttlMs) {
        await client.set(key, value, "PX", ttlMs);
      } else {
        await client.set(key, value);
      }
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to set key: ${key}`,
        error
      );
    }
  }
  async del(key) {
    try {
      const client = await this.ensureConnection();
      await client.del(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to delete key: ${key}`,
        error
      );
    }
  }
  async exists(key) {
    try {
      const client = await this.ensureConnection();
      const result = await client.exists(key);
      return result === 1;
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to check existence of key: ${key}`,
        error
      );
    }
  }
  async ttl(key) {
    try {
      const client = await this.ensureConnection();
      return await client.pttl(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get TTL for key: ${key}`,
        error
      );
    }
  }
  async incr(key) {
    try {
      const client = await this.ensureConnection();
      return await client.incr(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to increment key: ${key}`,
        error
      );
    }
  }
  async sadd(key, member) {
    try {
      const client = await this.ensureConnection();
      return await client.sadd(key, member);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to add member to set: ${key}`,
        error
      );
    }
  }
  async srem(key, member) {
    try {
      const client = await this.ensureConnection();
      return await client.srem(key, member);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to remove member from set: ${key}`,
        error
      );
    }
  }
  async smembers(key) {
    try {
      const client = await this.ensureConnection();
      return await client.smembers(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get members of set: ${key}`,
        error
      );
    }
  }
  async keys(pattern) {
    try {
      const client = await this.ensureConnection();
      return await client.keys(pattern);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get keys matching pattern: ${pattern}`,
        error
      );
    }
  }
  async getPoolStats() {
    try {
      const client = await this.ensureConnection();
      const info = await client.info("clients");
      const stats = {
        totalConnections: 0,
        activeConnections: 0,
        idleConnections: 0,
        waitingClients: 0
      };
      info.split("\n").forEach((line) => {
        if (line.startsWith("connected_clients:")) {
          const value = line.split(":")[1];
          if (value !== void 0) {
            stats.totalConnections = Number.parseInt(value, 10);
          }
        }
        if (line.startsWith("blocked_clients:")) {
          const value = line.split(":")[1];
          if (value !== void 0) {
            stats.waitingClients = Number.parseInt(value, 10);
          }
        }
      });
      stats.activeConnections = stats.totalConnections - stats.waitingClients;
      stats.idleConnections = Math.max(
        0,
        stats.totalConnections - stats.activeConnections
      );
      return stats;
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        "Failed to get pool stats",
        error
      );
    }
  }
  async subscribe(channel, callback) {
    if (!this.subscribers.has(channel)) {
      const subscriber = this.createClient();
      this.subscribers.set(channel, subscriber);
      subscriber.on("message", (ch, message) => {
        if (ch === channel) {
          callback(message);
        }
      });
      await subscriber.subscribe(channel);
    }
  }
  async publish(channel, message) {
    try {
      if (!this.client) {
        await this.connect();
      }
      if (!this.client) {
        throw new RedisServiceError(
          RedisErrorCode.CONNECTION_FAILED,
          "Redis client is not initialized"
        );
      }
      return await this.client.publish(channel, message);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to publish to channel: ${channel}`,
        error
      );
    }
  }
  async unsubscribe(channel) {
    const subscriber = this.subscribers.get(channel);
    if (subscriber) {
      await subscriber.unsubscribe(channel);
      subscriber.disconnect();
      this.subscribers.delete(channel);
    }
  }
  /**
   * Delete all keys matching a pattern
   */
  async deletePattern(pattern) {
    try {
      const client = await this.ensureConnection();
      const keys = await client.keys(pattern);
      if (keys.length === 0) {
        return;
      }
      if (keys.length > 0) {
        const pipeline = client.pipeline();
        keys.forEach((key) => pipeline.del(key));
        await pipeline.exec();
      }
      logger.debug(`Deleted ${keys.length} keys matching pattern: ${pattern}`);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to delete keys matching pattern: ${pattern}`,
        error
      );
    }
  }
  // Hash operations
  async hset(key, field, value) {
    try {
      const client = await this.ensureConnection();
      return await client.hset(key, field, value);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to set hash field: ${key}[${field}]`,
        error
      );
    }
  }
  async hget(key, field) {
    try {
      const client = await this.ensureConnection();
      return await client.hget(key, field);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get hash field: ${key}[${field}]`,
        error
      );
    }
  }
  async hgetall(key) {
    try {
      const client = await this.ensureConnection();
      const result = await client.hgetall(key);
      return result || {};
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get all hash fields: ${key}`,
        error
      );
    }
  }
  async hdel(key, field) {
    try {
      const client = await this.ensureConnection();
      return await client.hdel(key, field);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to delete hash field: ${key}[${field}]`,
        error
      );
    }
  }
  async hlen(key) {
    try {
      const client = await this.ensureConnection();
      return await client.hlen(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get hash length: ${key}`,
        error
      );
    }
  }
  // Sorted set operations
  async zadd(key, score, member) {
    try {
      const client = await this.ensureConnection();
      return await client.zadd(key, score, member);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to add to sorted set: ${key}`,
        error
      );
    }
  }
  async zrem(key, member) {
    try {
      const client = await this.ensureConnection();
      return await client.zrem(key, member);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to remove from sorted set: ${key}`,
        error
      );
    }
  }
  async zrange(key, start, stop, withScores) {
    try {
      const client = await this.ensureConnection();
      if (withScores === "WITHSCORES") {
        const result = await client.zrange(key, start, stop, "WITHSCORES");
        const arr = [];
        for (let i = 0; i < result.length; i += 2) {
          if (typeof result[i] === "string" && typeof result[i + 1] !== "undefined") {
            arr.push({
              value: result[i],
              score: Number(result[i + 1])
            });
          } else {
            logger.debug(
              `[RedisService] zrange WITHSCORES: Skipping invalid pair at index ${i}: value=${String(result[i])}, score=${String(result[i + 1])}`
            );
          }
        }
        return arr;
      }
      return await client.zrange(key, start, stop);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get range from sorted set: ${key}`,
        error
      );
    }
  }
  async zpopmin(key) {
    try {
      const client = await this.ensureConnection();
      const result = await client.zpopmin(key);
      if (Array.isArray(result) && result.length === 2 && typeof result[0] === "string" && typeof result[1] !== "undefined") {
        return [{ value: result[0], score: Number(result[1]) }];
      } else {
        logger.debug(
          `[RedisService] zpopmin: Unexpected result format for key ${key}:`,
          result
        );
      }
      return [];
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to pop min from sorted set: ${key}`,
        error
      );
    }
  }
  async zcard(key) {
    try {
      const client = await this.ensureConnection();
      return await client.zcard(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get sorted set cardinality: ${key}`,
        error
      );
    }
  }
  // List operations
  async lpush(key, ...elements) {
    try {
      const client = await this.ensureConnection();
      return await client.lpush(key, ...elements);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to push to list: ${key}`,
        error
      );
    }
  }
  async rpoplpush(source, destination) {
    try {
      const client = await this.ensureConnection();
      return await client.rpoplpush(source, destination);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to move element from ${source} to ${destination}`,
        error
      );
    }
  }
  async lrem(key, count, value) {
    try {
      const client = await this.ensureConnection();
      return await client.lrem(key, count, value);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to remove elements from list: ${key}`,
        error
      );
    }
  }
  async llen(key) {
    try {
      const client = await this.ensureConnection();
      return await client.llen(key);
    } catch (error) {
      throw new RedisServiceError(
        RedisErrorCode.OPERATION_FAILED,
        `Failed to get list length: ${key}`,
        error
      );
    }
  }
}

export { RedisService as R };
