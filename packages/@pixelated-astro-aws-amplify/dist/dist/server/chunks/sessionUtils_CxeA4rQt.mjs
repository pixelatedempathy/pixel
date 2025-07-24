;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="178a4f61-78f3-4d3d-9dce-54f65911d8de",e._sentryDebugIdIdentifier="sentry-dbid-178a4f61-78f3-4d3d-9dce-54f65911d8de")}catch(e){}}();import { createClient } from '@supabase/supabase-js';
import { c as createBuildSafeLogger } from './build-safe-logger_0J2m2aGD.mjs';
import './astro/server_Ck5BzePu.mjs';

const logger = createBuildSafeLogger("session-utils");
async function getUser() {
  try {
    const supabase = createClient(
      "https://dihivzkwbwpkpebichlk.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs"
    );
    const { data, error } = await supabase.auth.getSession();
    if (error || !data?.session) {
      return null;
    }
    const { user } = data.session;
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    return {
      id: user.id,
      email: user.email || "",
      name: user.user_metadata?.name || user.email?.split("@")[0] || "",
      role: profile?.role || "user",
      permissions: [],
      metadata: user.user_metadata
    };
  } catch (error) {
    logger.error("Error getting user:", error);
    return null;
  }
}

export { getUser as g };
