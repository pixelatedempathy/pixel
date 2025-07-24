;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4b23a997-db7e-4004-9cc0-5afc7925412d",e._sentryDebugIdIdentifier="sentry-dbid-4b23a997-db7e-4004-9cc0-5afc7925412d")}catch(e){}}();import * as os from 'node:os';
import { createClient } from '@supabase/supabase-js';
import { g as getRedisHealth } from '../../../chunks/redis_DQvLURHg.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const startTime = performance.now();
  const healthStatus = {
    status: "healthy",
    api: {
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: "v1"
    }
  };
  const url = new URL(request.url);
  const clientIp = request.headers.get("x-forwarded-for") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  console.info("Health check requested", {
    path: url.pathname,
    clientIp,
    userAgent,
    version: "v1"
  });
  const supabaseUrl = "https://dihivzkwbwpkpebichlk.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs";
  {
    try {
      healthStatus.supabase = await checkSupabaseConnection(
        supabaseUrl,
        supabaseAnonKey
      );
      const supabaseInfo = healthStatus.supabase;
      if (supabaseInfo && supabaseInfo.status === "unhealthy") {
        healthStatus.status = "unhealthy";
      }
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
    const redisInfo = healthStatus.redis;
    if (redisInfo && redisInfo.status === "unhealthy") {
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
  healthStatus.system = getSystemInformation();
  const endTime = performance.now();
  if (healthStatus.api && typeof healthStatus.api === "object" && healthStatus.api !== null && "responseTimeMs" in healthStatus.api) {
    healthStatus.api.responseTimeMs = Math.round(endTime - startTime);
  }
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
function getSystemInformation() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsagePercent = Math.round(usedMemory / totalMemory * 100);
  const cpuInfo = os.cpus();
  const cpuModel = cpuInfo.length > 0 ? cpuInfo[0].model : "Unknown";
  const cpuCores = cpuInfo.length;
  const loadAverage = os.loadavg();
  const platform = os.platform();
  const release = os.release();
  const uptime = os.uptime();
  const nodeVersion = process.version;
  const processMemory = process.memoryUsage();
  const processUptime = process.uptime();
  return {
    memory: {
      total: formatBytes(totalMemory),
      free: formatBytes(freeMemory),
      used: formatBytes(usedMemory),
      usagePercent: memoryUsagePercent
    },
    cpu: {
      model: cpuModel,
      cores: cpuCores,
      loadAverage: {
        "1m": loadAverage[0].toFixed(2),
        "5m": loadAverage[1].toFixed(2),
        "15m": loadAverage[2].toFixed(2)
      }
    },
    os: {
      platform,
      release,
      uptime: formatUptime(uptime)
    },
    runtime: {
      nodeVersion,
      processMemory: {
        rss: formatBytes(processMemory.rss),
        heapTotal: formatBytes(processMemory.heapTotal),
        heapUsed: formatBytes(processMemory.heapUsed),
        external: formatBytes(processMemory.external)
      },
      processUptime: formatUptime(processUptime)
    }
  };
}
function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function formatUptime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor(seconds % (3600 * 24) / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
