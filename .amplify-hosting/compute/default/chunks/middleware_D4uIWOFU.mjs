;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="93bb9978-02db-4294-91ab-14f936601be6",e._sentryDebugIdIdentifier="sentry-dbid-93bb9978-02db-4294-91ab-14f936601be6")}catch(e){}}();import './fhe_ZZVTPva_.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import { g as getSession } from './session_w6Zx6kHE.mjs';
import './astro/server_bjkJ-nhl.mjs';

const logger = createBuildSafeLogger("default");
async function verifyAdmin(request, context) {
  try {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "No session found" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (session.user?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    context.adminVerification = {
      verified: true,
      timestamp: Date.now(),
      userId: session.user.id
    };
    return null;
  } catch (error) {
    logger.error("Admin verification error:", error);
    return new Response(
      JSON.stringify({ error: "Admin verification failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

export { verifyAdmin as v };
