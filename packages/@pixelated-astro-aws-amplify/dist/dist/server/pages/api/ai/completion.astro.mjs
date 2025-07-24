;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c313125e-f82c-4fc6-b31e-ebccdcad5efa",e._sentryDebugIdIdentifier="sentry-dbid-c313125e-f82c-4fc6-b31e-ebccdcad5efa")}catch(e){}}();import { c as createAuditLog, A as AuditEventType, b as AuditEventStatus } from '../../../chunks/audit_DWq5CQbl.mjs';
import { h as handleApiError } from '../../../chunks/error-handling_DNO7GKsc.mjs';
import { c as createTogetherAIService } from '../../../chunks/together_DLoWi1ME.mjs';
import { g as getSession } from '../../../chunks/session_CjG7jjfF.mjs';
import { v as validateRequestBody } from '../../../chunks/index_BiPiIrsZ.mjs';
import { C as CompletionRequestSchema } from '../../../chunks/schemas_DNoPZ1TT.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../chunks/astro-designed-error-pages_BRlznF53.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
import 'clsx';
import { r as redis } from '../../../chunks/redis_CkM-_UY_.mjs';
import { scrypt } from 'crypto';
import { promisify } from 'util';
export { renderers } from '../../../renderers.mjs';

const logger$2 = createBuildSafeLogger("rate-limit");
function createEnhancedRateLimiter(defaultLimit = 30, windowMs = 60 * 1e3) {
  const userLimits = {
    admin: 60,
    therapist: 40,
    user: 30,
    anonymous: 15
  };
  const check = async ({
    identifier,
    role,
    path,
    clientIp,
    userAgent,
    referer,
    customConfig
  }) => {
    const now = Date.now();
    const effectiveWindowMs = customConfig?.windowMs || windowMs;
    const limit = customConfig?.limits?.[role] || userLimits[role] || defaultLimit;
    const key = `ratelimit:${identifier}:${path}:${role}`;
    try {
      const multi = redis.multi();
      multi.get(key);
      multi.ttl(key);
      const [countStr, ttl] = await multi.exec();
      const count = parseInt(countStr || "0", 10);
      if (ttl < 0) {
        await redis.setex(key, Math.ceil(effectiveWindowMs / 1e3), "1");
        return {
          allowed: true,
          limit,
          remaining: limit - 1,
          reset: now + effectiveWindowMs
        };
      }
      if (count >= limit) {
        if (customConfig?.trackSuspiciousActivity) {
          logger$2.warn("Rate limit exceeded", {
            identifier,
            path,
            clientIp,
            userAgent,
            referer
          });
        }
        return {
          allowed: false,
          limit,
          remaining: 0,
          reset: now + ttl * 1e3,
          suspicious: count > limit * 2
          // Mark as suspicious if significantly over limit
        };
      }
      await redis.incr(key);
      return {
        allowed: true,
        limit,
        remaining: limit - (count + 1),
        reset: now + ttl * 1e3
      };
    } catch (error) {
      logger$2.error("Redis rate limit error:", error);
      return {
        allowed: true,
        limit,
        remaining: 1,
        reset: now + effectiveWindowMs
      };
    }
  };
  return { check };
}

promisify(scrypt);
async function generateHash(data) {
  try {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch (error) {
    console.warn(
      "Web Crypto API not available, using fallback hash method",
      error
    );
    return fallbackHash(data);
  }
}
function fallbackHash(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash.toString(16);
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  const timestamp = Date.now().toString(36);
  return hash.toString(16) + timestamp;
}

const logger$1 = createBuildSafeLogger("default");
const enhancedRateLimiter = createEnhancedRateLimiter(30, 60 * 1e3);
async function applyRateLimit(request, endpoint, customConfig) {
  const url = new URL(request.url);
  const path = url.pathname;
  const clientIp = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const referer = request.headers.get("referer") || "direct";
  let userId = "anonymous";
  let role = "anonymous";
  try {
    const session = await getSession(request);
    if (session?.user?.id) {
      userId = session.user.id;
      role = session.user.role || "user";
    }
  } catch (error) {
    logger$1.warn("Error getting session for rate limiting:", { error, path });
  }
  const clientIdentifier = await generateHash(`${clientIp}:${userId}`);
  const result = await enhancedRateLimiter.check({
    identifier: clientIdentifier,
    role,
    path: endpoint,
    clientIp,
    userAgent,
    referer,
    customConfig
  });
  const headers = new Headers();
  headers.set("X-RateLimit-Limit", result.limit.toString());
  headers.set("X-RateLimit-Remaining", result.remaining.toString());
  headers.set("X-RateLimit-Reset", result.reset.toString());
  if (!result.allowed) {
    headers.set(
      "Retry-After",
      Math.ceil((result.reset - Date.now()) / 1e3).toString()
    );
    logger$1.warn(`Rate limit exceeded for ${path}`, {
      userId,
      clientIp,
      role,
      suspicious: result.suspicious,
      ipReputation: result.ipReputation
    });
  }
  return {
    result,
    headers,
    createErrorResponse: () => {
      if (!result.allowed) {
        return new Response(
          JSON.stringify({
            error: "Too Many Requests",
            message: "Rate limit exceeded. Please try again later.",
            retryAfter: Math.ceil((result.reset - Date.now()) / 1e3)
          }),
          {
            status: 429,
            headers
          }
        );
      }
      return null;
    }
  };
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const logger = createBuildSafeLogger("ai-completion");
const GET = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(
      JSON.stringify({
        name: "AI Completion API",
        description: "Endpoint for AI chat completions",
        methods: ["POST"],
        version: "1.0.0",
        status: "active",
        authentication: "required",
        rateLimit: {
          admin: "120 requests/minute",
          therapist: "80 requests/minute",
          user: "40 requests/minute",
          anonymous: "10 requests/minute"
        },
        maxPayloadSize: "50KB",
        supportedModels: ["gpt-4", "claude-3"],
        features: ["streaming", "caching", "rate-limiting"]
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to get endpoint information",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const POST = async ({ request }) => {
  let session = null;
  try {
    logger.info("Processing AI completion request");
    session = await getSession(request);
    if (!session?.user) {
      logger.warn("Unauthorized access attempt to AI completion endpoint");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const rateLimit = await applyRateLimit(request, "/api/ai/completion", {
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
      windowMs: 60 * 1e3,
      // 1 minute window
      trackSuspiciousActivity: true
    });
    const errorResponse = rateLimit.createErrorResponse();
    if (errorResponse) {
      return errorResponse;
    }
    const [data, validationError] = await validateRequestBody(
      request,
      CompletionRequestSchema
    );
    if (validationError) {
      await createAuditLog(
        AuditEventType.AI_OPERATION,
        // eventType
        "ai.completion.validation_error",
        // action
        session?.user?.id || "anonymous",
        // userId
        "ai-completion",
        // resource
        {
          // details
          error: validationError.error,
          details: JSON.stringify(validationError.details)
        },
        AuditEventStatus.FAILURE
        // status
      );
      return new Response(JSON.stringify(validationError), {
        status: validationError.status,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const totalInputSize = JSON.stringify(data).length;
    const maxAllowedSize = 1024 * 50;
    if (totalInputSize > maxAllowedSize) {
      return new Response(
        JSON.stringify({
          error: "Payload too large",
          message: "The request payload exceeds the maximum allowed size"
        }),
        {
          status: 413,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const aiService = createTogetherAIService({
      apiKey: Object.assign(__vite_import_meta_env__, { _: process.env._ })["TOGETHER_API_KEY"] || "example-api-key",
      togetherApiKey: Object.assign(__vite_import_meta_env__, { _: process.env._ })["TOGETHER_API_KEY"],
      togetherBaseUrl: Object.assign(__vite_import_meta_env__, { _: process.env._ })["TOGETHER_BASE_URL"]
    });
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      // eventType
      "ai.completion.request",
      // action
      session?.user?.id || "anonymous",
      // userId
      "ai-completion",
      // resource
      {
        // details
        model: data?.model,
        messageCount: data?.messages?.length,
        inputSize: totalInputSize
      },
      AuditEventStatus.SUCCESS
      // status
    );
    const formattedMessages = (data?.messages || []).map(
      (msg) => ({
        role: msg.role || "user",
        content: msg.content || "",
        // Include name if provided, but ensure it's optional
        ...msg.name && { name: msg.name }
      })
    );
    if (data?.stream) {
      const readableStream = new ReadableStream({
        async start(controller) {
          try {
            const stream = await aiService.createStreamingChatCompletion(
              formattedMessages,
              {
                model: data?.model,
                temperature: data?.temperature,
                maxTokens: data?.max_tokens
              }
            );
            try {
              for await (const chunk of stream) {
                controller.enqueue(
                  new TextEncoder().encode(
                    `data: ${JSON.stringify({
                      choices: [{ delta: { content: chunk.content } }]
                    })}

`
                  )
                );
              }
              controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
              controller.close();
            } catch (streamError) {
              console.error("Stream processing error:", streamError);
              controller.error(streamError);
              await createAuditLog(
                AuditEventType.AI_OPERATION,
                // eventType
                "ai.completion.stream_error",
                // action
                session?.user?.id || "anonymous",
                // userId
                "ai-completion",
                // resource
                {
                  // details
                  error: streamError instanceof Error ? streamError.message : String(streamError)
                },
                AuditEventStatus.FAILURE
                // status
              );
            }
          } catch (error) {
            console.error("Error creating streaming completion:", error);
            controller.error(error);
            await createAuditLog(
              AuditEventType.AI_OPERATION,
              // eventType
              "ai.completion.stream_error",
              // action
              session?.user?.id || "anonymous",
              // userId
              "ai-completion",
              // resource
              {
                // details
                error: error instanceof Error ? error.message : String(error)
              },
              AuditEventStatus.FAILURE
              // status
            );
          }
        },
        cancel() {
          console.log("Stream cancelled by client");
        }
      });
      return new Response(readableStream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive",
          ...Object.fromEntries(rateLimit.headers.entries())
        }
      });
    }
    const completion = await aiService.createChatCompletion(formattedMessages, {
      model: data?.model,
      temperature: data?.temperature,
      maxTokens: data?.max_tokens
    });
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      // eventType
      "ai.completion.response",
      // action
      session?.user?.id || "anonymous",
      // userId
      "ai-completion",
      // resource
      {
        // details
        model: completion.model,
        contentLength: completion.content.length
      },
      AuditEventStatus.SUCCESS
      // status
    );
    return new Response(JSON.stringify(completion), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        ...Object.fromEntries(rateLimit.headers.entries())
      }
    });
  } catch (error) {
    logger.error(
      "Error in AI completion API:",
      error instanceof Error ? { message: error.message, stack: error.stack } : { message: String(error) }
    );
    console.error("Error in AI completion API:", error);
    await createAuditLog(
      AuditEventType.AI_OPERATION,
      // eventType
      "ai.completion.error",
      // action
      session?.user?.id || "anonymous",
      // userId
      "ai-completion",
      // resource
      {
        // details
        error: error instanceof Error ? error?.message : String(error),
        stack: error instanceof Error ? error?.stack : void 0
      },
      AuditEventStatus.FAILURE
      // status
    );
    return handleApiError(error);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
