;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="98080e1b-4bc1-4f08-8ca3-c1371e0b9d78",e._sentryDebugIdIdentifier="sentry-dbid-98080e1b-4bc1-4f08-8ca3-c1371e0b9d78")}catch(e){}}();import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { g as getEnv, i as isEnvTrue } from '../../../chunks/env_BDOKHGZh.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
export { renderers } from '../../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const logger$1 = console;
const supabaseUrl = Object.assign(__vite_import_meta_env__, { EMAIL_FROM: "send@pixelatedempathy.com", RESEND_API_KEY: "re_6w2ZvHiS_ByYjtrQ6hEJQHLXbUq8Qhziq", SUPABASE_SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQ4MDk1MCwiZXhwIjoyMDY0MDU2OTUwfQ.ASiLbSrSUmPQD7g3Vs-zkgzbne2PqyjA3hw4VThkonM", SUPABASE_URL: "https://dihivzkwbwpkpebichlk.supabase.co", _: process.env._ })["PUBLIC_SUPABASE_URL"];
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQ4MDk1MCwiZXhwIjoyMDY0MDU2OTUwfQ.ASiLbSrSUmPQD7g3Vs-zkgzbne2PqyjA3hw4VThkonM";
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing required Supabase configuration");
}
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
const resendApiKey = getEnv("RESEND_API_KEY");
if (!resendApiKey) {
  throw new Error("Missing required Resend API key");
}
new Resend(resendApiKey);
({
  maxLoginAttempts: Number(Object.assign(__vite_import_meta_env__, { EMAIL_FROM: "send@pixelatedempathy.com", RESEND_API_KEY: "re_6w2ZvHiS_ByYjtrQ6hEJQHLXbUq8Qhziq", SUPABASE_SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQ4MDk1MCwiZXhwIjoyMDY0MDU2OTUwfQ.ASiLbSrSUmPQD7g3Vs-zkgzbne2PqyjA3hw4VThkonM", SUPABASE_URL: "https://dihivzkwbwpkpebichlk.supabase.co", _: process.env._ })["SECURITY_MAX_LOGIN_ATTEMPTS"]) || 5,
  lockoutDuration: Number(Object.assign(__vite_import_meta_env__, { EMAIL_FROM: "send@pixelatedempathy.com", RESEND_API_KEY: "re_6w2ZvHiS_ByYjtrQ6hEJQHLXbUq8Qhziq", SUPABASE_SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQ4MDk1MCwiZXhwIjoyMDY0MDU2OTUwfQ.ASiLbSrSUmPQD7g3Vs-zkgzbne2PqyjA3hw4VThkonM", SUPABASE_URL: "https://dihivzkwbwpkpebichlk.supabase.co", _: process.env._ })["SECURITY_ACCOUNT_LOCKOUT_DURATION"]) || 1800,
  enableBruteForceProtection: isEnvTrue("SECURITY_ENABLE_BRUTE_FORCE_PROTECTION"),
  enableAlerts: isEnvTrue("SECURITY_ENABLE_ALERTS")});
async function testSecurityAlert(alertType) {
  try {
    logger$1.info(`Testing security alert: ${alertType}`);
    const { error } = await supabase.rpc("test_security_alert", {
      alert_type: alertType,
      is_test: true
    });
    if (error) {
      throw error;
    }
    logger$1.info(`Security alert test completed: ${alertType}`);
    return true;
  } catch (error) {
    logger$1.error(`Failed to test security alert: ${alertType}`, { error });
    throw error;
  }
}

const logger = createBuildSafeLogger("security-admin");
const POST = protectRoute({
  requiredRole: "admin"
})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const body = await request.json();
    const alertType = body.alertType || "suspicious_login";
    if (!["suspicious_login", "password_reset", "account_locked"].includes(
      alertType
    )) {
      return new Response(
        JSON.stringify({
          error: "Invalid alert type",
          message: "Alert type must be one of: suspicious_login, password_reset, account_locked"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const success = await testSecurityAlert(
      alertType
    );
    if (!success) {
      throw new Error("Failed to send test alert");
    }
    logger.info(`Security alert test initiated by admin`, {
      userId: user.id,
      alertType
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: `Test ${alertType} alert sent successfully`
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    logger.error("Error testing security alert", {
      error: errorMessage,
      userId: locals.user?.id
    });
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: errorMessage
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
