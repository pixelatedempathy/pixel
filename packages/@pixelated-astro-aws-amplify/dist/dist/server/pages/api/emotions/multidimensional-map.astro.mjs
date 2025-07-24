;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2f8b8dcb-547e-40d2-83d3-4ecad832d91c",e._sentryDebugIdIdentifier="sentry-dbid-2f8b8dcb-547e-40d2-83d3-4ecad832d91c")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { p as protectRoute } from '../../../chunks/serverAuth_4gmt5n21.mjs';
import { A as AIRepository } from '../../../chunks/repository_C2J0EZF7.mjs';
import { M as MultidimensionalEmotionMapper } from '../../../chunks/MultidimensionalEmotionMapper_Bxnr-TAQ.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger$1 = createBuildSafeLogger("temporal-analysis-algorithm");
function analyzeMultidimensionalPatterns(emotionData, dimensionalMaps) {
  logger$1.info("Analyzing multidimensional patterns", {
    dataPoints: emotionData.length,
    dimensionalMaps: dimensionalMaps.length
  });
  const patterns = [];
  if (dimensionalMaps.length < 3) {
    logger$1.warn("Insufficient data for pattern analysis", {
      required: 3,
      actual: dimensionalMaps.length
    });
    return patterns;
  }
  const sortedMaps = [...dimensionalMaps].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  patterns.push(...detectTrends(sortedMaps));
  patterns.push(...detectCycles(sortedMaps));
  patterns.push(...detectShifts(sortedMaps));
  patterns.push(...detectStability(sortedMaps));
  const filteredPatterns = patterns.filter(
    (pattern) => pattern.confidence > 0.5
  );
  logger$1.info("Pattern analysis complete", {
    totalPatterns: patterns.length,
    filteredPatterns: filteredPatterns.length
  });
  return filteredPatterns;
}
function detectTrends(maps) {
  const trends = [];
  const windowSize = Math.min(10, Math.floor(maps.length / 3));
  if (windowSize < 3) {
    return trends;
  }
  for (let i = 0; i <= maps.length - windowSize; i++) {
    const window = maps.slice(i, i + windowSize);
    const valenceTrend = calculateTrendSlope(window, "valence");
    const arousalTrend = calculateTrendSlope(window, "arousal");
    const dominanceTrend = calculateTrendSlope(window, "dominance");
    const significantThreshold = 0.1;
    const hasSignificantTrend = Math.abs(valenceTrend) > significantThreshold || Math.abs(arousalTrend) > significantThreshold || Math.abs(dominanceTrend) > significantThreshold;
    if (hasSignificantTrend) {
      const confidence = calculateTrendConfidence(window);
      trends.push({
        id: `trend-${i}-${Date.now()}`,
        type: "trend",
        timeRange: {
          start: window[0].timestamp,
          end: window[window.length - 1].timestamp
        },
        description: describeTrend(valenceTrend, arousalTrend, dominanceTrend),
        dimensions: window.map((w) => w.dimensions),
        confidence,
        significance: Math.max(
          Math.abs(valenceTrend),
          Math.abs(arousalTrend),
          Math.abs(dominanceTrend)
        )
      });
    }
  }
  return trends;
}
function detectCycles(maps) {
  const cycles = [];
  const minCycleLength = 4;
  const maxCycleLength = Math.floor(maps.length / 3);
  for (let cycleLength = minCycleLength; cycleLength <= maxCycleLength; cycleLength++) {
    const correlation = calculateAutocorrelation(maps, cycleLength);
    if (correlation > 0.6) {
      cycles.push({
        id: `cycle-${cycleLength}-${Date.now()}`,
        type: "cycle",
        timeRange: {
          start: maps[0].timestamp,
          end: maps[maps.length - 1].timestamp
        },
        description: `Cyclical pattern with period of ${cycleLength} data points`,
        dimensions: maps.map((m) => m.dimensions),
        confidence: correlation,
        significance: correlation
      });
    }
  }
  return cycles;
}
function detectShifts(maps) {
  const shifts = [];
  const changeThreshold = 0.5;
  for (let i = 1; i < maps.length - 1; i++) {
    const prev = maps[i - 1].dimensions;
    const curr = maps[i].dimensions;
    const next = maps[i + 1].dimensions;
    const changeMagnitude = calculateDimensionalDistance(prev, curr);
    const nextChangeMagnitude = calculateDimensionalDistance(curr, next);
    const isSustained = nextChangeMagnitude < changeMagnitude * 0.5;
    if (changeMagnitude > changeThreshold && isSustained) {
      shifts.push({
        id: `shift-${i}-${Date.now()}`,
        type: "shift",
        timeRange: {
          start: maps[i - 1].timestamp,
          end: maps[i + 1].timestamp
        },
        description: describeShift(prev, curr),
        dimensions: [prev, curr, next],
        confidence: Math.min(changeMagnitude / changeThreshold, 1),
        significance: changeMagnitude
      });
    }
  }
  return shifts;
}
function detectStability(maps) {
  const stablePatterns = [];
  const stabilityThreshold = 0.2;
  const minStabilityLength = 5;
  let stableStart = 0;
  let isStable = true;
  for (let i = 1; i < maps.length; i++) {
    const change = calculateDimensionalDistance(
      maps[i - 1].dimensions,
      maps[i].dimensions
    );
    if (change > stabilityThreshold) {
      if (isStable && i - stableStart >= minStabilityLength) {
        const stableWindow = maps.slice(stableStart, i);
        stablePatterns.push({
          id: `stability-${stableStart}-${Date.now()}`,
          type: "stability",
          timeRange: {
            start: stableWindow[0].timestamp,
            end: stableWindow[stableWindow.length - 1].timestamp
          },
          description: "Stable emotional state period",
          dimensions: stableWindow.map((w) => w.dimensions),
          confidence: calculateStabilityConfidence(stableWindow),
          significance: i - stableStart
        });
      }
      stableStart = i;
      isStable = false;
    } else {
      isStable = true;
    }
  }
  return stablePatterns;
}
function calculateTrendSlope(window, dimension) {
  if (window.length < 2) {
    return 0;
  }
  const values = window.map((w) => w.dimensions[dimension]);
  const n = values.length;
  const sumX = n * (n - 1) / 2;
  const sumY = values.reduce((sum, val) => sum + val, 0);
  const sumXY = values.reduce((sum, val, idx) => sum + idx * val, 0);
  const sumX2 = n * (n - 1) * (2 * n - 1) / 6;
  return (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
}
function calculateAutocorrelation(maps, lag) {
  if (maps.length <= lag) {
    return 0;
  }
  const values = maps.map(
    (m) => (m.dimensions.valence + m.dimensions.arousal + m.dimensions.dominance) / 3
  );
  const n = values.length - lag;
  let correlation = 0;
  for (let i = 0; i < n; i++) {
    correlation += values[i] * values[i + lag];
  }
  return correlation / n;
}
function calculateDimensionalDistance(dim1, dim2) {
  const valenceDiff = dim1.valence - dim2.valence;
  const arousalDiff = dim1.arousal - dim2.arousal;
  const dominanceDiff = dim1.dominance - dim2.dominance;
  return Math.sqrt(valenceDiff ** 2 + arousalDiff ** 2 + dominanceDiff ** 2);
}
function calculateTrendConfidence(window) {
  const values = window.map(
    (w) => (w.dimensions.valence + w.dimensions.arousal + w.dimensions.dominance) / 3
  );
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  const totalVariance = values.reduce((sum, val) => sum + (val - mean) ** 2, 0);
  if (totalVariance === 0) {
    return 0;
  }
  const n = values.length;
  const sumX = n * (n - 1) / 2;
  const sumY = values.reduce((sum, val) => sum + val, 0);
  const sumXY = values.reduce((sum, val, idx) => sum + idx * val, 0);
  const sumX2 = n * (n - 1) * (2 * n - 1) / 6;
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const residualVariance = values.reduce((sum, val, idx) => {
    const predicted = slope * idx + intercept;
    return sum + (val - predicted) ** 2;
  }, 0);
  return Math.max(0, 1 - residualVariance / totalVariance);
}
function calculateStabilityConfidence(window) {
  if (window.length < 2) {
    return 0;
  }
  const changes = [];
  for (let i = 1; i < window.length; i++) {
    changes.push(
      calculateDimensionalDistance(
        window[i - 1].dimensions,
        window[i].dimensions
      )
    );
  }
  const avgChange = changes.reduce((sum, change) => sum + change, 0) / changes.length;
  return Math.max(0, 1 - avgChange * 2);
}
function describeTrend(valenceTrend, arousalTrend, dominanceTrend) {
  const descriptions = [];
  if (Math.abs(valenceTrend) > 0.1) {
    descriptions.push(
      `${valenceTrend > 0 ? "Improving" : "Declining"} emotional valence`
    );
  }
  if (Math.abs(arousalTrend) > 0.1) {
    descriptions.push(
      `${arousalTrend > 0 ? "Increasing" : "Decreasing"} emotional arousal`
    );
  }
  if (Math.abs(dominanceTrend) > 0.1) {
    descriptions.push(
      `${dominanceTrend > 0 ? "Gaining" : "Losing"} emotional control`
    );
  }
  return descriptions.length > 0 ? descriptions.join(", ") : "Subtle emotional trend";
}
function describeShift(from, to) {
  const valenceDiff = to.valence - from.valence;
  const arousalDiff = to.arousal - from.arousal;
  const dominanceDiff = to.dominance - from.dominance;
  const changes = [];
  if (Math.abs(valenceDiff) > 0.3) {
    changes.push(
      `Shift to ${valenceDiff > 0 ? "more positive" : "more negative"} emotions`
    );
  }
  if (Math.abs(arousalDiff) > 0.3) {
    changes.push(
      `${arousalDiff > 0 ? "Increased" : "Decreased"} emotional intensity`
    );
  }
  if (Math.abs(dominanceDiff) > 0.3) {
    changes.push(
      `Shift to ${dominanceDiff > 0 ? "more" : "less"} emotional control`
    );
  }
  return changes.length > 0 ? changes.join(", ") : "Sudden emotional state change";
}

const prerender = false;
const logger = createBuildSafeLogger("multidimensional-emotions-api");
const GET = protectRoute()(async (context) => {
  try {
    const { locals } = context;
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
    const url = new URL(context.request.url);
    const clientId = url.searchParams.get("clientId");
    const sessionId = url.searchParams.get("sessionId");
    const type = url.searchParams.get("type") || "map";
    const timeRange = parseInt(url.searchParams.get("timeRange") || "30", 10);
    const dataPoints = parseInt(url.searchParams.get("dataPoints") || "100", 10);
    if (!clientId && !sessionId) {
      return new Response(
        JSON.stringify({ error: "Either clientId or sessionId is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const repository = new AIRepository();
    const emotionMapper = new MultidimensionalEmotionMapper();
    const endDate = /* @__PURE__ */ new Date();
    const startDate = /* @__PURE__ */ new Date();
    startDate.setDate(endDate.getDate() - timeRange);
    let fetchedSessions = [];
    if (sessionId) {
      fetchedSessions = await repository.getSessionsByIds([sessionId]);
    } else if (clientId) {
      fetchedSessions = await repository.getSessions({
        clientId,
        startDate,
        endDate
      });
    }
    const sessions = fetchedSessions.filter(
      (s) => !!s.sessionId
    );
    if (sessions.length === 0) {
      return new Response(
        JSON.stringify({
          error: "No sessions found for the specified criteria"
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const emotionData = [];
    for (const session of sessions) {
      const emotionsFromRepo = await repository.getEmotionsForSession(
        session.sessionId
      );
      const emotionsForDTO = emotionsFromRepo.map(
        (e) => ({
          ...e,
          timestamp: e.timestamp
        })
      );
      emotionData.push(...emotionsForDTO);
    }
    let limitedEmotionData = emotionData;
    if (emotionData.length > dataPoints) {
      const interval = Math.floor(emotionData.length / dataPoints);
      limitedEmotionData = emotionData.filter((_, index) => index % interval === 0).slice(0, dataPoints);
    }
    limitedEmotionData.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    if (type === "map") {
      const dimensionalMaps = limitedEmotionData.map(
        (emotion) => emotionMapper.mapEmotionsToDimensions(emotion)
      );
      logger.info("Returning dimensional maps", {
        count: dimensionalMaps.length
      });
      return new Response(JSON.stringify(dimensionalMaps), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (type === "patterns") {
      const dimensionalMaps = limitedEmotionData.map(
        (emotion) => emotionMapper.mapEmotionsToDimensions(emotion)
      );
      const patterns = analyzeMultidimensionalPatterns(
        limitedEmotionData,
        dimensionalMaps
      );
      logger.info("Returning multidimensional patterns", {
        count: patterns.length
      });
      return new Response(JSON.stringify(patterns), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(
        JSON.stringify({
          error: 'Invalid type parameter. Must be "map" or "patterns"'
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  } catch (error) {
    logger.error("Error processing multidimensional emotion request", { error });
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
