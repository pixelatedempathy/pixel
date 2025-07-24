;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c8b48121-086b-4652-ad46-16041707eb0c",e._sentryDebugIdIdentifier="sentry-dbid-c8b48121-086b-4652-ad46-16041707eb0c")}catch(e){}}();import './astro-designed-error-pages_BRlznF53.mjs';
import './astro/server_t-wqd6mp.mjs';
import 'clsx';
import './audit_DWq5CQbl.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';

createBuildSafeLogger("default");
const rateLimitConfigs = [
  {
    path: "/api/ai/",
    limits: {
      admin: 120,
      // 120 requests per minute for admins
      therapist: 80,
      // 80 requests per minute for therapists
      user: 40,
      // 40 requests per minute for regular users
      anonymous: 10
      // 10 requests per minute for unauthenticated users
    },
    windowMs: 60 * 1e3
    // 1 minute
  },
  {
    path: "/api/auth/",
    limits: {
      admin: 30,
      therapist: 30,
      user: 20,
      anonymous: 5
    },
    windowMs: 60 * 1e3
    // 1 minute
  },
  {
    path: "/api/",
    limits: {
      admin: 300,
      therapist: 200,
      user: 100,
      anonymous: 30
    },
    windowMs: 60 * 1e3
    // 1 minute
  }
];
class RateLimiter {
  defaultLimit;
  windowMs;
  userLimits;
  storage;
  constructor(defaultLimit = 30, windowMs = 60 * 1e3) {
    this.defaultLimit = defaultLimit;
    this.windowMs = windowMs;
    this.userLimits = {
      admin: 60,
      therapist: 40,
      user: 30,
      anonymous: 15
    };
    this.storage = /* @__PURE__ */ new Map();
  }
  /**
   * Check if a request is within rate limits
   */
  check(key, role, limits = rateLimitConfigs[2].limits, windowMs = rateLimitConfigs[2].windowMs) {
    const limit = limits[role] || limits.anonymous || 10;
    const now = Date.now();
    const resetTime = now + windowMs;
    const currentCount = this.storage.get(key) || 0;
    if (currentCount >= limit) {
      return {
        allowed: false,
        limit,
        remaining: 0,
        reset: resetTime
      };
    }
    this.storage.set(key, currentCount + 1);
    setTimeout(() => {
      this.storage.delete(key);
    }, windowMs);
    return {
      allowed: true,
      limit,
      remaining: limit - (currentCount + 1),
      reset: resetTime
    };
  }
}
const rateLimit = new RateLimiter();

export { RateLimiter as R, rateLimit as r };
