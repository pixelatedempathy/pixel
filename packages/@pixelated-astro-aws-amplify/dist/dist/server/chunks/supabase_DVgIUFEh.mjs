;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4b226e17-ba0d-459f-b400-4659ac8834a0",e._sentryDebugIdIdentifier="sentry-dbid-4b226e17-ba0d-459f-b400-4659ac8834a0")}catch(e){}}();import { createClient } from '@supabase/supabase-js';
import './astro/server_t-wqd6mp.mjs';

const processEnv = typeof process !== "undefined" ? process.env : {};
const NODE_ENV = processEnv.NODE_ENV || "development";
const FALLBACK_SUPABASE_URL = "https://example.supabase.co";
const FALLBACK_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example";
const isProduction = NODE_ENV === "production";
const getEnvVar = (key, fallback) => {
  const variants = [
    key,
    // Regular
    `PUBLIC_${key}`,
    // Public prefix
    `VITE_${key}`
    // Vite prefix
  ];
  if (typeof window === "undefined") {
    for (const variant of variants) {
      if (processEnv[variant]) {
        return processEnv[variant];
      }
    }
    return fallback;
  }
  for (const variant of variants) {
    if (env?.[variant]) {
      return env[variant];
    }
  }
  return fallback;
};
const supabaseUrl = getEnvVar(
  "SUPABASE_URL",
  isProduction ? void 0 : FALLBACK_SUPABASE_URL
);
const supabaseAnonKey = getEnvVar(
  "SUPABASE_ANON_KEY",
  isProduction ? void 0 : FALLBACK_ANON_KEY
);
const supabaseServiceRole = processEnv.SUPABASE_SERVICE_ROLE_KEY;
if (isProduction && (!supabaseUrl || !supabaseAnonKey)) {
  console.error(
    "CRITICAL: Missing Supabase credentials in production environment. Check for SUPABASE_URL/PUBLIC_SUPABASE_URL/VITE_SUPABASE_URL and SUPABASE_ANON_KEY/PUBLIC_SUPABASE_ANON_KEY/VITE_SUPABASE_ANON_KEY"
  );
}
function createMockClient() {
  const message = isProduction ? "CRITICAL: Using mock Supabase client in production. This should never happen." : "Using mock Supabase client for development. This should not be used in production.";
  console.warn(message);
  return {
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {
        } } }
      }),
      refreshSession: () => Promise.resolve({ data: { session: null }, error: null }),
      updateUser: () => Promise.resolve({ data: { user: null }, error: null }),
      signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithOtp: () => Promise.resolve({ error: null }),
      resetPasswordForEmail: () => Promise.resolve({ error: null })
    },
    from: (_table) => ({
      insert: () => Promise.resolve({ error: null }),
      select: (_columns) => ({
        eq: (_column, _value) => ({
          order: (_column2, _options) => ({
            range: (_from, _to) => Promise.resolve({ data: [], error: null }),
            limit: (_count) => Promise.resolve({ data: [], error: null })
          }),
          limit: (_count) => Promise.resolve({ data: [], error: null })
        }),
        neq: (_column, _value) => ({
          order: (_column2, _options) => Promise.resolve({ data: [], error: null })
        }),
        gt: (_column, _value) => ({
          order: (_column2, _options) => Promise.resolve({ data: [], error: null })
        }),
        single: () => Promise.resolve({ data: null, error: null })
      }),
      update: () => ({
        eq: (_column, _value) => Promise.resolve({ error: null })
      }),
      delete: () => ({
        eq: (_column, _value) => Promise.resolve({ error: null })
      }),
      upsert: () => Promise.resolve({ error: null })
    })
  };
}
const hasValidCredentials = supabaseUrl && supabaseUrl !== FALLBACK_SUPABASE_URL && supabaseAnonKey && supabaseAnonKey !== FALLBACK_ANON_KEY;
const supabase = hasValidCredentials ? createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
}) : createMockClient();
const supabaseAdmin = hasValidCredentials && supabaseServiceRole ? createClient(supabaseUrl, supabaseServiceRole, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
}) : createMockClient();

export { supabaseAdmin as a, supabase as s };
