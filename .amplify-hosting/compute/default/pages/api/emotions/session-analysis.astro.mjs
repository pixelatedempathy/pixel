;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ab2ee415-ae01-4eb3-b1b4-f024f2e581e3",e._sentryDebugIdIdentifier="sentry-dbid-ab2ee415-ae01-4eb3-b1b4-f024f2e581e3")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import { A as AIRepository } from '../../../chunks/repository_DURRa261.mjs';
import { M as MultidimensionalEmotionMapper } from '../../../chunks/MultidimensionalEmotionMapper_uK2hb0up.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("session-analysis-api");
const GET = protectRoute()(async ({ locals, request }) => {
  try {
    const { user } = locals;
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const url = new URL(request.url);
    const sessionId = url.searchParams.get("sessionId");
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const repository = new AIRepository();
    const emotionMapper = new MultidimensionalEmotionMapper();
    const sessions = await repository.getSessionsByIds([sessionId]);
    if (sessions.length === 0) {
      return new Response(JSON.stringify({ error: "Session not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const session = sessions[0];
    if (!session) {
      return new Response(JSON.stringify({ error: "Session not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (session.therapistId !== user.id && session.clientId !== user.id) {
      return new Response(
        JSON.stringify({ error: "Access denied for this session" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const emotions = await repository.getEmotionsForSession(sessionId);
    if (emotions.length === 0) {
      return new Response(
        JSON.stringify([]),
        // Return empty array instead of error
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    emotions.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    const emotionsWithDimensions = emotions.map((emotion) => {
      const dimensions = emotionMapper.mapEmotionsToDimensions(emotion);
      return {
        ...emotion,
        dimensions: dimensions.dimensions,
        primaryEmotion: dimensions.primaryEmotion,
        intensity: dimensions.intensity
      };
    });
    logger.info("Returning session emotion data", {
      sessionId,
      count: emotionsWithDimensions.length
    });
    return new Response(JSON.stringify(emotionsWithDimensions), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error processing session emotion data request", { error });
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
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
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
