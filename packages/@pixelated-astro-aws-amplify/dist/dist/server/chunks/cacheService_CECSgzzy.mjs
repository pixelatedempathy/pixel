;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b8911b19-dde8-4d4e-97df-f3c52fd1391f",e._sentryDebugIdIdentifier="sentry-dbid-b8911b19-dde8-4d4e-97df-f3c52fd1391f")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_0J2m2aGD.mjs';
import 'buffer';
import './astro/server_Ck5BzePu.mjs';

const logger = createBuildSafeLogger("cache-service");
class VercelKVCacheService {
  redis = null;
  connected = true;
  prefix = "app:cache:";
  constructor() {
    this.connected = false;
    logger.info("Vercel KV cache service disabled for AWS deployment");
  }
  getFullKey(key) {
    return `${this.prefix}${key}`;
  }
  async get(key) {
    if (!this.connected) {
      return null;
    }
    try {
      const fullKey = this.getFullKey(key);
      const result = await this.redis.get(fullKey);
      if (result) {
        logger.debug("Cache hit", { key });
        return result;
      }
      logger.debug("Cache miss", { key });
      return null;
    } catch (error) {
      logger.error("Error getting from cache", { key, error });
      return null;
    }
  }
  async set(key, value, ttl = 300) {
    if (!this.connected) {
      return;
    }
    try {
      const fullKey = this.getFullKey(key);
      await this.redis.set(fullKey, value, { ex: ttl });
      logger.debug("Cached value", { key, ttl });
    } catch (error) {
      logger.error("Error setting cache", { key, error });
    }
  }
  async delete(key) {
    if (!this.connected) {
      return;
    }
    try {
      const fullKey = this.getFullKey(key);
      await this.redis.del(fullKey);
      logger.debug("Deleted from cache", { key });
    } catch (error) {
      logger.error("Error deleting from cache", { key, error });
    }
  }
  async clearByPrefix(prefix) {
    if (!this.connected) {
      return;
    }
    try {
      const fullPrefix = this.getFullKey(prefix);
      const keys = await this.redis.keys(`${fullPrefix}*`);
      if (keys.length > 0) {
        await this.redis.del(...keys);
        logger.info("Cleared cache by prefix", { prefix, count: keys.length });
      }
    } catch (error) {
      logger.error("Error clearing cache by prefix", { prefix, error });
    }
  }
  async mget(keys) {
    if (!this.connected || keys.length === 0) {
      return {};
    }
    try {
      const fullKeys = keys.map((key) => this.getFullKey(key));
      const results = await this.redis.mget(...fullKeys);
      const resultMap = {};
      keys.forEach((key, index) => {
        resultMap[key] = results[index] ?? null;
      });
      return resultMap;
    } catch (error) {
      logger.error("Error getting multiple values from cache", { error });
      return {};
    }
  }
}
class MemoryCacheService {
  cache = /* @__PURE__ */ new Map();
  maxEntries = 1e3;
  prefix = "memory:";
  cleanupInterval;
  constructor() {
    this.cleanupInterval = setInterval(() => this.cleanup(), 6e4);
    logger.info("Memory cache service initialized");
  }
  getFullKey(key) {
    return `${this.prefix}${key}`;
  }
  cleanup() {
    const now = Date.now();
    let expiredCount = 0;
    for (const [key, entry] of Array.from(this.cache.entries())) {
      if (entry.expires < now) {
        this.cache.delete(key);
        expiredCount++;
      }
    }
    if (expiredCount > 0) {
      logger.debug("Cleaned up expired cache entries", { count: expiredCount });
    }
  }
  async get(key) {
    const fullKey = this.getFullKey(key);
    const entry = this.cache.get(fullKey);
    if (!entry) {
      logger.debug("Memory cache miss", { key });
      return null;
    }
    const now = Date.now();
    if (entry.expires < now) {
      this.cache.delete(fullKey);
      logger.debug("Memory cache expired", { key });
      return null;
    }
    logger.debug("Memory cache hit", { key });
    return entry.value;
  }
  async set(key, value, ttl = 300) {
    if (this.cache.size >= this.maxEntries) {
      this.evictOldest();
    }
    const fullKey = this.getFullKey(key);
    const expires = Date.now() + ttl * 1e3;
    this.cache.set(fullKey, { value, expires });
    logger.debug("Set memory cache", { key, ttl });
  }
  async delete(key) {
    const fullKey = this.getFullKey(key);
    this.cache.delete(fullKey);
    logger.debug("Deleted from memory cache", { key });
  }
  async clearByPrefix(prefix) {
    const fullPrefix = this.getFullKey(prefix);
    let count = 0;
    for (const key of Array.from(this.cache.keys())) {
      if (key.startsWith(fullPrefix)) {
        this.cache.delete(key);
        count++;
      }
    }
    logger.info("Cleared memory cache by prefix", { prefix, count });
  }
  async mget(keys) {
    const result = {};
    const now = Date.now();
    for (const key of keys) {
      const fullKey = this.getFullKey(key);
      const entry = this.cache.get(fullKey);
      if (entry && entry.expires > now) {
        result[key] = entry.value;
      } else {
        result[key] = null;
        if (entry) {
          this.cache.delete(fullKey);
        }
      }
    }
    return result;
  }
  evictOldest() {
    let oldestKey = null;
    let oldestTime = Infinity;
    for (const [key, entry] of Array.from(this.cache.entries())) {
      if (entry.expires < oldestTime) {
        oldestTime = entry.expires;
        oldestKey = key;
      }
    }
    if (oldestKey) {
      this.cache.delete(oldestKey);
      logger.debug("Evicted oldest entry from memory cache");
    }
  }
  destroy() {
    clearInterval(this.cleanupInterval);
    this.cache.clear();
    logger.debug("Memory cache service destroyed");
  }
}
let vercelKVCacheService = null;
let memoryCacheService = null;
function getCacheService() {
  if (!vercelKVCacheService) {
    vercelKVCacheService = new VercelKVCacheService();
  }
  if (!memoryCacheService) {
    memoryCacheService = new MemoryCacheService();
  }
  if (vercelKVCacheService.connected) {
    return vercelKVCacheService;
  } else {
    return memoryCacheService;
  }
}

export { getCacheService as g };
