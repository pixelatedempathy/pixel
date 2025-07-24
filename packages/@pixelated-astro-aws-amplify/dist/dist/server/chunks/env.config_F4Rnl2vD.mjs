;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0dd667f7-b401-4ca9-ae79-bdb0fce593e8",e._sentryDebugIdIdentifier="sentry-dbid-0dd667f7-b401-4ca9-ae79-bdb0fce593e8")}catch(e){}}();import { z } from 'zod';
import './astro/server_Ck5BzePu.mjs';

const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Server configuration
  PORT: z.string().transform(Number).default("3000"),
  LOG_LEVEL: z.enum(["error", "warn", "info", "verbose", "debug"]).default("info"),
  ENABLE_RATE_LIMITING: z.string().transform((val) => val === "true").default("true"),
  // Analytics worker configuration
  ANALYTICS_WS_PORT: z.string().transform(Number).default("8083"),
  // Notification worker configuration
  NOTIFICATION_WS_PORT: z.string().transform(Number).default("8082"),
  // Database
  POSTGRES_URL: z.string().optional(),
  POSTGRES_PRISMA_URL: z.string().optional(),
  POSTGRES_URL_NON_POOLING: z.string().optional(),
  // Redis configuration
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  REDIS_URL: z.string().optional(),
  REDIS_TOKEN: z.string().optional(),
  // Authentication
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_KEY: z.string().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  SUPABASE_JWT_SECRET: z.string().optional(),
  // APIs
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_BASE_URL: z.string().url().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  TOGETHER_API_KEY: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  REPLICATE_API_TOKEN: z.string().optional(),
  // Azure OpenAI
  AZURE_OPENAI_API_KEY: z.string().optional(),
  AZURE_OPENAI_ENDPOINT: z.string().url().optional(),
  AZURE_OPENAI_API_VERSION: z.string().optional(),
  AZURE_OPENAI_DEPLOYMENT_NAME: z.string().optional(),
  // Azure Services
  AZURE_STORAGE_CONNECTION_STRING: z.string().optional(),
  AZURE_STORAGE_ACCOUNT_NAME: z.string().optional(),
  AZURE_STORAGE_ACCOUNT_KEY: z.string().optional(),
  AZURE_STORAGE_CONTAINER_NAME: z.string().optional(),
  // Azure Authentication
  AZURE_AD_CLIENT_ID: z.string().optional(),
  AZURE_AD_CLIENT_SECRET: z.string().optional(),
  AZURE_AD_TENANT_ID: z.string().optional(),
  // Monitoring and analytics
  SENTRY_DSN: z.string().url().optional(),
  AXIOM_DATASET: z.string().optional(),
  AXIOM_TOKEN: z.string().optional(),
  VITE_LITLYX_PROJECT_ID: z.string().optional(),
  VITE_LITLYX_API_KEY: z.string().optional(),
  // Email
  EMAIL_FROM: z.string().email().optional(),
  RESEND_API_KEY: z.string().optional(),
  // Security
  SECURITY_ENABLE_BRUTE_FORCE_PROTECTION: z.string().transform((val) => val === "true").default("true"),
  SECURITY_MAX_LOGIN_ATTEMPTS: z.string().transform(Number).default("5"),
  SECURITY_ACCOUNT_LOCKOUT_DURATION: z.string().transform(Number).default("1800"),
  SECURITY_API_ABUSE_THRESHOLD: z.string().transform(Number).default("100"),
  SECURITY_ENABLE_ALERTS: z.string().transform((val) => val === "true").default("true"),
  // Rate limiting
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default("100"),
  RATE_LIMIT_WINDOW_MS: z.string().transform(Number).default("900000"),
  // Logging
  LOG_CONSOLE: z.string().transform((val) => val === "true").default("true"),
  LOG_AUDIT: z.string().transform((val) => val === "true").default("true"),
  // Client-side variables (exposed to the browser)
  VITE_API_URL: z.string().url().optional(),
  VITE_SUPABASE_URL: z.string().url().optional(),
  VITE_SUPABASE_ANON_KEY: z.string().optional(),
  // Notification configuration
  VAPID_PUBLIC_KEY: z.string().optional(),
  VAPID_PRIVATE_KEY: z.string().optional(),
  VAPID_SUBJECT: z.string().url().optional(),
  // Twilio configuration
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_PHONE_NUMBER: z.string().optional(),
  // Slack (for notifications)
  SLACK_WEBHOOK_URL: z.string().url().optional(),
  // MentalLLaMA configuration
  MENTALLAMA_API_KEY: z.string().optional(),
  MENTALLAMA_ENDPOINT_URL_7B: z.string().url().optional(),
  MENTALLAMA_ENDPOINT_URL_13B: z.string().url().optional(),
  MENTALLAMA_DEFAULT_MODEL_TIER: z.enum(["7B", "13B"]).optional(),
  MENTALLAMA_ENABLE_PYTHON_BRIDGE: z.string().transform((val) => val === "true").optional(),
  MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH: z.string().optional()
});
function maskEnv(env2) {
  const secretKeys = [
    "SUPABASE_KEY",
    "SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_JWT_SECRET",
    "OPENAI_API_KEY",
    "TOGETHER_API_KEY",
    "GOOGLE_API_KEY",
    "REPLICATE_API_TOKEN",
    "AXIOM_TOKEN",
    "VITE_LITLYX_API_KEY",
    "RESEND_API_KEY",
    "TWILIO_AUTH_TOKEN",
    "SENTRY_DSN",
    "SLACK_WEBHOOK_URL"
  ];
  return Object.fromEntries(
    Object.entries(env2).map(([k, v]) => [
      k,
      secretKeys.includes(k) && v ? "[hidden]" : v
    ])
  );
}
function getEnv() {
  let envSource;
  if (typeof process !== "undefined") {
    envSource = process.env;
  } else {
    envSource = {};
  }
  if (envSource["CI"] || envSource["NODE_ENV"] === "production") {
    console.log(
      "[env.config] Environment variables at build:",
      maskEnv(envSource)
    );
  }
  return envSchema.parse(envSource);
}
const env = /* @__PURE__ */ (() => {
  let cachedEnvInstance = null;
  return () => {
    if (!cachedEnvInstance) {
      cachedEnvInstance = getEnv();
    }
    return cachedEnvInstance;
  };
})();
const config = {
  isDevelopment: () => env().NODE_ENV === "development",
  isProduction: () => env().NODE_ENV === "production",
  isTest: () => env().NODE_ENV === "test",
  server: {
    port: () => env().PORT,
    logLevel: () => env().LOG_LEVEL,
    enableRateLimiting: () => env().ENABLE_RATE_LIMITING
  },
  workers: {
    analytics: {
      wsPort: () => env().ANALYTICS_WS_PORT
    },
    notification: {
      wsPort: () => env().NOTIFICATION_WS_PORT
    }
  },
  database: {
    url: () => env().POSTGRES_URL,
    prismaUrl: () => env().POSTGRES_PRISMA_URL,
    nonPoolingUrl: () => env().POSTGRES_URL_NON_POOLING
  },
  redis: {
    url: () => env().UPSTASH_REDIS_REST_URL || env().REDIS_URL,
    token: () => env().UPSTASH_REDIS_REST_TOKEN || env().REDIS_TOKEN
  },
  supabase: {
    url: () => env().SUPABASE_URL,
    key: () => env().SUPABASE_KEY,
    anonKey: () => env().SUPABASE_ANON_KEY,
    serviceRoleKey: () => env().SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: () => env().SUPABASE_JWT_SECRET
  },
  ai: {
    openAiKey: () => env().OPENAI_API_KEY,
    openAiBaseUrl: () => env().OPENAI_BASE_URL,
    anthropicApiKey: () => env().ANTHROPIC_API_KEY,
    togetherApiKey: () => env().TOGETHER_API_KEY,
    googleApiKey: () => env().GOOGLE_API_KEY,
    replicateToken: () => env().REPLICATE_API_TOKEN,
    // Azure OpenAI
    azureOpenAiKey: () => env().AZURE_OPENAI_API_KEY,
    azureOpenAiEndpoint: () => env().AZURE_OPENAI_ENDPOINT,
    azureOpenAiApiVersion: () => env().AZURE_OPENAI_API_VERSION,
    azureOpenAiDeploymentName: () => env().AZURE_OPENAI_DEPLOYMENT_NAME
  },
  azure: {
    // Storage
    storageConnectionString: () => env().AZURE_STORAGE_CONNECTION_STRING,
    storageAccountName: () => env().AZURE_STORAGE_ACCOUNT_NAME,
    storageAccountKey: () => env().AZURE_STORAGE_ACCOUNT_KEY,
    storageContainerName: () => env().AZURE_STORAGE_CONTAINER_NAME,
    // Authentication
    adClientId: () => env().AZURE_AD_CLIENT_ID,
    adClientSecret: () => env().AZURE_AD_CLIENT_SECRET,
    adTenantId: () => env().AZURE_AD_TENANT_ID
  },
  monitoring: {
    sentryDsn: () => env().SENTRY_DSN,
    axiomDataset: () => env().AXIOM_DATASET,
    axiomToken: () => env().AXIOM_TOKEN,
    litlyxProjectId: () => env().VITE_LITLYX_PROJECT_ID,
    litlyxApiKey: () => env().VITE_LITLYX_API_KEY
  },
  email: {
    from: () => env().EMAIL_FROM,
    resendApiKey: () => env().RESEND_API_KEY
  },
  security: {
    enableBruteForceProtection: () => env().SECURITY_ENABLE_BRUTE_FORCE_PROTECTION,
    maxLoginAttempts: () => env().SECURITY_MAX_LOGIN_ATTEMPTS,
    accountLockoutDuration: () => env().SECURITY_ACCOUNT_LOCKOUT_DURATION,
    apiAbuseThreshold: () => env().SECURITY_API_ABUSE_THRESHOLD,
    enableAlerts: () => env().SECURITY_ENABLE_ALERTS
  },
  rateLimiting: {
    maxRequests: () => env().RATE_LIMIT_MAX_REQUESTS,
    windowMs: () => env().RATE_LIMIT_WINDOW_MS
  },
  logging: {
    console: () => env().LOG_CONSOLE,
    audit: () => env().LOG_AUDIT
  },
  client: {
    apiUrl: () => env().VITE_API_URL,
    supabaseUrl: () => env().VITE_SUPABASE_URL,
    supabaseAnonKey: () => env().VITE_SUPABASE_ANON_KEY
  },
  notifications: {
    vapidPublicKey: () => env().VAPID_PUBLIC_KEY,
    vapidPrivateKey: () => env().VAPID_PRIVATE_KEY,
    vapidSubject: () => env().VAPID_SUBJECT,
    slackWebhookUrl: () => env().SLACK_WEBHOOK_URL
    // Added for Slack
  },
  twilio: {
    accountSid: () => env().TWILIO_ACCOUNT_SID,
    authToken: () => env().TWILIO_AUTH_TOKEN,
    phoneNumber: () => env().TWILIO_PHONE_NUMBER
  },
  mentalLLaMA: {
    apiKey: () => env().MENTALLAMA_API_KEY,
    endpointUrl7B: () => env().MENTALLAMA_ENDPOINT_URL_7B,
    endpointUrl13B: () => env().MENTALLAMA_ENDPOINT_URL_13B,
    defaultModelTier: () => env().MENTALLAMA_DEFAULT_MODEL_TIER,
    enablePythonBridge: () => env().MENTALLAMA_ENABLE_PYTHON_BRIDGE,
    pythonBridgeScriptPath: () => env().MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH
  }
};

export { config, config as default, env, getEnv };
