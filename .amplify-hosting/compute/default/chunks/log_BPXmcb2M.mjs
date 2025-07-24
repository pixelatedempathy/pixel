;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2cb3447d-28cb-4242-bfd1-88af233c58c2",e._sentryDebugIdIdentifier="sentry-dbid-2cb3447d-28cb-4242-bfd1-88af233c58c2")}catch(e){}}();import { createClient } from '@supabase/supabase-js';
import { g as getEnv } from './env_BDOKHGZh.mjs';
import './astro/server_DBAAVvAL.mjs';

function getEnvVars() {
  let url;
  let anonKey;
  let serviceRoleKey;
  if (typeof globalThis !== "undefined") {
    const win = globalThis;
    if (win.__astro_env || win.__vite_env) {
      const env = win.__astro_env || win.__vite_env;
      if (env) {
        url = env["PUBLIC_SUPABASE_URL"];
        anonKey = env["PUBLIC_SUPABASE_ANON_KEY"];
        serviceRoleKey = env["SUPABASE_SERVICE_ROLE_KEY"];
      }
    }
  }
  if ((!url || !anonKey) && typeof process !== "undefined" && process.env) {
    url = url || getEnv("PUBLIC_SUPABASE_URL");
    anonKey = anonKey || getEnv("PUBLIC_SUPABASE_ANON_KEY");
    serviceRoleKey = serviceRoleKey || getEnv("SUPABASE_SERVICE_ROLE_KEY");
  }
  if (!url || !anonKey) {
    try {
      const getImportMeta = new Function(
        'return typeof import !== "undefined" ? import.meta : undefined'
      );
      const importMeta = getImportMeta();
      if (importMeta && importMeta.env) {
        url = url || importMeta.env["PUBLIC_SUPABASE_URL"];
        anonKey = anonKey || importMeta.env["PUBLIC_SUPABASE_ANON_KEY"];
        serviceRoleKey = serviceRoleKey || importMeta.env["SUPABASE_SERVICE_ROLE_KEY"];
      }
    } catch {
    }
  }
  if (!url || !anonKey) {
    console.warn(
      "Supabase environment variables not found, using fallback values"
    );
    url = url || "https://your-project.supabase.co";
    anonKey = anonKey || "your-anon-key";
  }
  return {
    url,
    anonKey,
    serviceRoleKey
  };
}

let clientInstance = null;
let config = null;
function validateConfig() {
  const { url, anonKey, serviceRoleKey } = getEnvVars();
  if (!url || !anonKey) {
    throw new Error(
      "Missing required Supabase configuration. Please check your environment variables."
    );
  }
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error("Invalid Supabase URL format");
  }
  if (!parsedUrl.protocol.startsWith("http")) {
    throw new Error("Invalid Supabase URL protocol");
  }
  if (anonKey.length < 100 || !anonKey.includes(".")) {
    throw new Error("Invalid Supabase anonymous key format");
  }
  return { url, anonKey, serviceRoleKey };
}
function createClientInstance(clientConfig) {
  return createClient(clientConfig.url, clientConfig.anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: "pkce",
      storage: typeof window !== "undefined" ? window.localStorage : void 0
    },
    global: {
      headers: {
        "X-Client-Info": "pixelated-empathy-web"
      }
    },
    db: {
      schema: "public"
    },
    realtime: {
      params: {
        eventsPerSecond: 10
      }
    }
  });
}
function setupHealthCheck(client) {
  if (typeof window === "undefined") {
    return;
  }
  client.auth.onAuthStateChange((event) => {
    if ((event === "SIGNED_OUT" || event === "TOKEN_REFRESHED") && "caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          if (name.includes("supabase")) {
            caches.delete(name);
          }
        });
      });
    }
  });
  setInterval(async () => {
    try {
      await client.from("health_check").select("1").limit(1);
    } catch (error) {
      console.warn("Supabase connection health check failed:", error);
    }
  }, 3e5);
}
function getInstance() {
  if (!clientInstance) {
    config = validateConfig();
    clientInstance = createClientInstance(config);
    setupHealthCheck(clientInstance);
  }
  return clientInstance;
}
const supabase = getInstance();

async function getUserAuditLogs(userId, limit = 100, offset = 0) {
  try {
    const result = await supabase.from("audit_logs").select("*").eq("user_id", userId).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
    const { data, error } = result;
    if (error) {
      console.error("Error getting user audit logs:", error);
      return [];
    }
    return (data || []).map((log) => ({
      id: log.id,
      userId: log.user_id,
      action: log.action,
      resource: {
        id: log.resource,
        type: void 0
      },
      metadata: log.details,
      timestamp: new Date(log.created_at)
    }));
  } catch (error) {
    console.error("Error getting user audit logs:", error);
    return [];
  }
}
async function getActionAuditLogs(action, limit = 100, offset = 0) {
  try {
    const result = await supabase.from("audit_logs").select("*").eq("action", action).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
    const { data, error } = result;
    if (error) {
      console.error("Error getting audit logs:", error);
      return [];
    }
    return (data || []).map((log) => ({
      id: log.id,
      userId: log.user_id,
      action: log.action,
      resource: {
        id: log.resource,
        type: void 0
      },
      metadata: log.details,
      timestamp: new Date(log.created_at)
    }));
  } catch (error) {
    console.error("Error getting audit logs:", error);
    return [];
  }
}
async function getAuditLogs() {
  const result = await supabase.from("audit_logs").select("*").order("created_at", { ascending: false });
  const { data, error } = result;
  if (error) {
    console.error("Error getting audit logs:", error);
    return [];
  }
  return (data || []).map((log) => ({
    id: log.id,
    timestamp: new Date(log.created_at),
    action: log.action,
    userId: log.user_id,
    resource: {
      id: log.resource,
      type: void 0
    },
    metadata: log.details
  }));
}

export { getUserAuditLogs as a, getAuditLogs as b, getActionAuditLogs as g };
