;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="11a2b5ba-1ada-4cc9-8f79-8621e8c68be8",e._sentryDebugIdIdentifier="sentry-dbid-11a2b5ba-1ada-4cc9-8f79-8621e8c68be8")}catch(e){}}();import { createClient } from '@supabase/supabase-js';
import { g as getRedisHealth } from '../../chunks/redis_BqCEtZ7U.mjs';
import '../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const startTime = performance.now();
  const healthStatus = {
    status: "healthy",
    api: {
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
  const url = new URL(request.url);
  const clientIp = request.headers.get("x-forwarded-for") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  console.info("Health check requested", {
    path: url.pathname,
    clientIp,
    userAgent
  });
  const supabaseUrl = "https://dihivzkwbwpkpebichlk.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs";
  {
    try {
      healthStatus.supabase = await checkSupabaseConnection(
        supabaseUrl,
        supabaseAnonKey
      );
    } catch (error) {
      console.error("Error during Supabase health check:", error);
      healthStatus.supabase = {
        status: "unhealthy",
        error: error instanceof Error ? error.message : String(error)
      };
      healthStatus.status = "unhealthy";
    }
  }
  try {
    healthStatus.redis = await getRedisHealth();
    if (healthStatus.redis && healthStatus.redis.status === "unhealthy") {
      healthStatus.status = "unhealthy";
    }
  } catch (error) {
    console.error("Error during Redis health check:", error);
    healthStatus.redis = {
      status: "unhealthy",
      error: error instanceof Error ? error.message : String(error)
    };
    healthStatus.status = "unhealthy";
  }
  const endTime = performance.now();
  healthStatus.api.responseTimeMs = Math.round(endTime - startTime);
  return new Response(JSON.stringify(healthStatus, null, 2), {
    status: healthStatus.status === "healthy" ? 200 : 503,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0"
    }
  });
};
async function checkSupabaseConnection(supabaseUrl, supabaseAnonKey) {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {
    const { error } = await supabase.from("_health").select("status").limit(1).maybeSingle();
    if (error) {
      throw new Error(`Supabase connection check failed: ${error.message}`);
    }
    return {
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    console.error("Supabase health check failed:", error);
    return {
      status: "unhealthy",
      error: error instanceof Error ? error.message : String(error),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
