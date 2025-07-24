;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="58fd6835-4f22-45c4-832d-dfa291acc67e",e._sentryDebugIdIdentifier="sentry-dbid-58fd6835-4f22-45c4-832d-dfa291acc67e")}catch(e){}}();import { createClient } from '@supabase/supabase-js';
import './audit_JLSGKMAB.mjs';
import './astro/server_DzSu7Vuv.mjs';

async function getSession(request) {
  try {
    console.log("Processing request:", request.url);
    const supabase = createClient(
      "https://dihivzkwbwpkpebichlk.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs"
    );
    const { data, error } = await supabase.auth.getSession();
    if (error || !data?.session) {
      console.log("Error getting session:", error);
      return null;
    }
    return {
      user: data?.session.user,
      session: data?.session
    };
  } catch (error) {
    console.error("Error getting session:", error);
    return null;
  }
}

export { getSession as g };
//# sourceMappingURL=session_BCCJby5d.mjs.map
