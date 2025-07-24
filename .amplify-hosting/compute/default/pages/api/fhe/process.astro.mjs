;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f2250d3d-0906-43de-aab0-1e1957618145",e._sentryDebugIdIdentifier="sentry-dbid-f2250d3d-0906-43de-aab0-1e1957618145")}catch(e){}}();import { f as fheService } from '../../../chunks/fhe_B0T2Q1bz.mjs';
import { E as EncryptionMode } from '../../../chunks/types_BbfxVq6m.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { r as rateLimit } from '../../../chunks/rate-limit_BI9_TZUs.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const clientIp = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "anonymous";
    const rateLimitResult = await rateLimit.check(clientIp, "anonymous");
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
    const body = await request.json();
    const { encryptedData, operation, params = {} } = body;
    if (!encryptedData) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Encrypted data is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!operation) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Operation is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!fheService.isInitialized()) {
      await fheService.initialize({
        mode: EncryptionMode.FHE,
        securityLevel: "high",
        enableDebug: false
      });
    }
    const result = await fheService.processEncrypted(
      encryptedData,
      operation,
      params
    );
    return new Response(
      JSON.stringify({
        success: true,
        result
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    createBuildSafeLogger("default").error(
      `FHE API error: ${error.message}`
    );
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process encrypted data",
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
