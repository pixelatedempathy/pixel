;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="57efc604-f4a9-4069-aaa1-b684398c906b",e._sentryDebugIdIdentifier="sentry-dbid-57efc604-f4a9-4069-aaa1-b684398c906b")}catch(e){}}();import { c as createPatternRecognitionService } from '../../../chunks/PatternRecognitionFactory_CO3IDG06.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_4gmt5n21.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("api-pattern-cross-session");
const POST = protectRoute({})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    let requestBody;
    try {
      requestBody = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Bad Request", message: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { clientId, sessions } = requestBody;
    if (!clientId) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Client ID is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!sessions || !Array.isArray(sessions) || sessions.length < 2) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "At least two valid sessions are required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validSessions = [];
    for (const session of sessions) {
      if (!session.sessionId || !session.clientId || !session.startTime || !session.endTime) {
        logger.warn("Invalid session provided", { session });
        continue;
      }
      try {
        validSessions.push({
          ...session,
          startTime: new Date(session.startTime),
          endTime: new Date(session.endTime)
        });
      } catch (error) {
        logger.warn("Invalid date format in session", { session, error });
      }
    }
    if (validSessions.length < 2) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "At least two valid sessions are required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const isTherapist = user.role === "therapist";
    const isAdmin = user.role === "admin";
    if (!isAdmin && isTherapist && user.id !== clientId) {
      return new Response(
        JSON.stringify({
          error: "Forbidden",
          message: "You do not have access to this client"
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    logger.info("Processing cross-session pattern request", {
      clientId,
      sessionCount: validSessions.length,
      user: user.id
    });
    const patternService = await createPatternRecognitionService();
    const patterns = await patternService.detectCrossSessionPatterns(
      clientId,
      validSessions
    );
    logger.info("Successfully retrieved cross-session patterns", {
      clientId,
      patternCount: patterns.length
    });
    return new Response(
      JSON.stringify({
        clientId,
        sessions: validSessions.map((s) => s.sessionId),
        patterns,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error processing cross-session pattern request", { error });
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
