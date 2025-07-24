;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="97dcb59f-cb73-4ad7-a6d9-c3456ba43615",e._sentryDebugIdIdentifier="sentry-dbid-97dcb59f-cb73-4ad7-a6d9-c3456ba43615")}catch(e){}}();import '../../../chunks/astro/server_t-wqd6mp.mjs';
import { p as protectApi } from '../../../chunks/apiAuth_N-291x6N.mjs';
import { g as getCacheService } from '../../../chunks/cacheService_CgLljAp7.mjs';
export { renderers } from '../../../renderers.mjs';

class EmotionsRepositoryImpl {
  async getDimensionalEmotions(query) {
    console.log(`Querying emotions for client: ${query.clientId}`);
    return [];
  }
}
let repository = null;
function getEmotionsRepository() {
  if (!repository) {
    repository = new EmotionsRepositoryImpl();
  }
  return repository;
}

const prerender = false;
const GET = async ({ request }) => {
  try {
    const authResult = await protectApi(request);
    if (!authResult.success) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const url = new URL(request.url);
    const clientId = url.searchParams.get("clientId");
    const startDateStr = url.searchParams.get("startDate");
    const endDateStr = url.searchParams.get("endDate");
    const limitStr = url.searchParams.get("limit");
    if (!clientId) {
      return new Response(JSON.stringify({ error: "Client ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const startDate = startDateStr ? new Date(startDateStr) : void 0;
    const endDate = endDateStr ? new Date(endDateStr) : void 0;
    const limit = limitStr ? parseInt(limitStr, 10) : 100;
    const cacheService = getCacheService();
    const cacheKey = `emotions:dimensional:${clientId}:${startDateStr || "none"}:${endDateStr || "none"}:${limit}`;
    const etag = `"${hashString(cacheKey)}"`;
    const ifNoneMatch = request.headers.get("If-None-Match");
    if (ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          "ETag": etag,
          "Cache-Control": computeCacheControl(startDate, endDate),
          "Vary": "Accept-Encoding, Authorization"
        }
      });
    }
    const cachedData = await cacheService.get(cacheKey);
    if (cachedData) {
      return new Response(cachedData, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": computeCacheControl(startDate, endDate),
          "ETag": etag,
          "X-Cache": "HIT",
          "Vary": "Accept-Encoding, Authorization"
        }
      });
    }
    const emotionsRepository = getEmotionsRepository();
    const startTime = performance.now();
    const dimensionalData = await emotionsRepository.getDimensionalEmotions({
      clientId,
      startDate,
      endDate,
      limit
    });
    const queryTime = performance.now() - startTime;
    const response = {
      data: dimensionalData.map((item) => ({
        timestamp: item.timestamp.getTime(),
        dimensions: {
          valence: item.primaryVector.valence,
          arousal: item.primaryVector.arousal,
          dominance: item.primaryVector.dominance
        },
        mappedEmotion: item.mappedEmotion
      })),
      meta: {
        totalCount: dimensionalData.length,
        pageCount: 1,
        hasMore: false,
        queryTimeMs: Math.round(queryTime)
      }
    };
    const responseJson = JSON.stringify(response);
    const cacheTTL = computeCacheTTLSeconds(startDate, endDate);
    await cacheService.set(cacheKey, responseJson, cacheTTL);
    return new Response(responseJson, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": computeCacheControl(startDate, endDate),
        "ETag": etag,
        "X-Cache": "MISS",
        "X-Response-Time": `${Math.round(queryTime)}ms`,
        "Vary": "Accept-Encoding, Authorization"
      }
    });
  } catch (error) {
    console.error("Error fetching dimensional emotions:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch emotion data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  }
};
function computeCacheTTLSeconds(startDate, endDate) {
  if (!startDate || !endDate) {
    return 300;
  }
  const now = /* @__PURE__ */ new Date();
  const oneDayMs = 24 * 60 * 60 * 1e3;
  if (endDate.getTime() > now.getTime() - oneDayMs) {
    return 120;
  }
  if (endDate.getTime() > now.getTime() - 7 * oneDayMs) {
    return 300;
  }
  if (endDate.getTime() > now.getTime() - 30 * oneDayMs) {
    return 900;
  }
  return 3600;
}
function computeCacheControl(startDate, endDate) {
  const ttl = computeCacheTTLSeconds(startDate, endDate);
  return `max-age=${ttl}, s-maxage=${ttl * 2}, stale-while-revalidate=${ttl * 5}`;
}
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return hash.toString(36);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
