;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="87e12c71-0a33-4635-9c7a-4bb0baaa611f",e._sentryDebugIdIdentifier="sentry-dbid-87e12c71-0a33-4635-9c7a-4bb0baaa611f")}catch(e){}}();import { config } from '../../../chunks/env.config_Cpl4OEkp.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
import { f as fheService } from '../../../chunks/fhe_CK4zUaxh.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import { R as RateLimiter } from '../../../chunks/rate-limit_0PzDjm5u.mjs';
import { E as EncryptionMode } from '../../../chunks/types_2_ya51oN.mjs';
export { renderers } from '../../../renderers.mjs';

const rateLimitConfig = {
  /**
   * Default rate limiting settings
   */
  default: {
    /**
     * Maximum number of requests allowed in the specified window
     */
    maxRequests: config.rateLimiting.maxRequests(),
    /**
     * Time window in milliseconds for rate limiting
     */
    windowMs: config.rateLimiting.windowMs(),
    /**
     * Whether rate limiting is enabled
     */
    enabled: config.server.enableRateLimiting()},
  /**
   * Rate limiting for sensitive operations
   */
  sensitive: {
    /**
     * Highly restrictive rate limits for sensitive operations
     */
    maxRequests: 10,
    windowMs: 60 * 60 * 1e3}};

const POST = async ({ request, cookies }) => {
  const rateLimit = new RateLimiter(
    rateLimitConfig.sensitive.maxRequests,
    rateLimitConfig.sensitive.windowMs
  );
  try {
    const rateLimitResult = await rateLimit.check(
      request.headers.get("x-forwarded-for") || "anonymous",
      "key-rotation"
    );
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Please try again later."
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString()
          }
        }
      );
    }
    const sessionToken = cookies.get("session");
    if (!sessionToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Authentication required"
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!fheService.isInitialized()) {
      await fheService.initialize({
        mode: EncryptionMode.FHE,
        securityLevel: "high",
        enableDebug: false
      });
    }
    const result = await fheService.rotateKeys();
    return new Response(
      JSON.stringify({
        success: true,
        keyId: result,
        timestamp: Date.now()
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    createBuildSafeLogger("default").error(
      `Key rotation API error: ${error.message}`
    );
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to rotate encryption keys",
        message: void 0
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
