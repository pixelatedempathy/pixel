;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dbb1c2cf-f9dc-40c4-bd93-191d7958e066",e._sentryDebugIdIdentifier="sentry-dbid-dbb1c2cf-f9dc-40c4-bd93-191d7958e066")}catch(e){}}();import { c as createPatternRecognitionService } from '../../../chunks/PatternRecognitionFactory_CO3IDG06.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_4gmt5n21.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("api-pattern-trends");
const GET = protectRoute({})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const url = new URL(request.url);
    const clientId = url.searchParams.get("clientId");
    const startDateParam = url.searchParams.get("startDate");
    const endDateParam = url.searchParams.get("endDate");
    if (!clientId) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Client ID is required"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const now = /* @__PURE__ */ new Date();
    const startDate = startDateParam ? new Date(startDateParam) : new Date(now.getTime() - 30 * 24 * 3600 * 1e3);
    const endDate = endDateParam ? new Date(endDateParam) : now;
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Invalid date format"
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
    logger.info("Processing trend pattern request", {
      clientId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      user: user.id
    });
    const patternService = await createPatternRecognitionService();
    const trendPatterns = await patternService.analyzeLongTermTrends(
      clientId,
      startDate,
      endDate
    );
    logger.info("Successfully retrieved trend patterns", {
      clientId,
      patternCount: trendPatterns.length
    });
    return new Response(
      JSON.stringify({
        clientId,
        timeRange: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
        },
        patterns: trendPatterns,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    logger.error("Error processing trend pattern request", { error });
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
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
