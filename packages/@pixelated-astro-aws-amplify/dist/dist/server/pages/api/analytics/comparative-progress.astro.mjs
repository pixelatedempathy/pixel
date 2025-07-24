;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3377dfe5-477b-43b3-9031-ba6bafaa41ee",e._sentryDebugIdIdentifier="sentry-dbid-3377dfe5-477b-43b3-9031-ba6bafaa41ee")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

class ComparativeProgressService {
  logger;
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * Performs comparative analysis of user progress against benchmarks.
   * @param params Parameters for the comparison
   * @returns ComparativeProgressResult with user data, benchmarks, and insights
   */
  async analyzeProgress(params) {
    try {
      this.logger.info("Comparative progress analysis requested", {
        metricName: params.metricName,
        cohortId: params.cohortId,
        dateRange: params.dateRange
      });
      const userProgressSnapshots = await this.fetchUserProgressData(params);
      if (!userProgressSnapshots.length) {
        return this.createInsufficientDataResult(params);
      }
      const benchmarkData = await this.fetchBenchmarkData(params);
      const comparisonInsights = this.generateInsights(
        userProgressSnapshots,
        benchmarkData
      );
      return {
        userProgressSnapshots,
        benchmarkData,
        comparisonInsights
      };
    } catch (error) {
      this.logger.error("Error in comparative progress analysis", {
        metricName: params.metricName,
        cohortId: params.cohortId,
        error: error instanceof Error ? error.message : String(error)
      });
      return {
        userProgressSnapshots: [],
        benchmarkData: null,
        comparisonInsights: {
          trend: "insufficient_data"
        },
        error: "Failed to complete comparative analysis"
      };
    }
  }
  /**
   * Fetches anonymized progress data for a specific user.
   * In production, this would query a database with proper anonymization.
   * @param params Parameters to identify the user and metrics
   * @returns Array of progress snapshots
   */
  async fetchUserProgressData(params) {
    const { anonymizedUserId, metricName, dateRange } = params;
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    const daysBetween = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1e3 * 3600 * 24)
    );
    const snapshots = [];
    const dataPointCount = Math.min(Math.ceil(daysBetween / 7), 12);
    const trendType = Math.random() > 0.5 ? "improving" : "declining";
    const baseValue = metricName.includes("phq") || metricName.includes("gad") ? 12 : 50;
    const changePerPoint = trendType === "improving" ? -0.7 : 0.5;
    for (let i = 0; i < dataPointCount; i++) {
      const pointDate = new Date(startDate);
      pointDate.setDate(startDate.getDate() + i * 7);
      const randomVariance = (Math.random() - 0.5) * 2;
      const value = Math.max(0, baseValue + i * changePerPoint + randomVariance);
      snapshots.push({
        anonymizedUserId,
        date: pointDate.toISOString().split("T")[0],
        metricName,
        metricValue: Math.round(value * 10) / 10,
        // Round to 1 decimal place
        sessionId: `session-${i + 1}`
      });
    }
    return snapshots;
  }
  /**
   * Fetches benchmark data for comparison.
   * In production, this would query an analytics database with pre-computed benchmarks.
   * @param params Parameters to identify the cohort and metric
   * @returns Benchmark data or null if not available
   */
  async fetchBenchmarkData(params) {
    const { cohortId, metricName } = params;
    if (metricName.includes("phq")) {
      return {
        cohortId,
        metricName,
        averageValue: 8.5,
        percentile25: 5,
        percentile75: 12,
        standardDeviation: 3.2,
        sampleSize: 1250,
        benchmarkDescription: `Anonymized ${metricName} scores from similar users`
      };
    } else if (metricName.includes("gad")) {
      return {
        cohortId,
        metricName,
        averageValue: 7.2,
        percentile25: 4,
        percentile75: 10.5,
        standardDeviation: 2.8,
        sampleSize: 1100,
        benchmarkDescription: `Anonymized ${metricName} scores from similar users`
      };
    } else if (metricName.includes("engagement")) {
      return {
        cohortId,
        metricName,
        averageValue: 68.5,
        percentile25: 52,
        percentile75: 85,
        standardDeviation: 15.3,
        sampleSize: 980,
        benchmarkDescription: `Anonymized ${metricName} ratings from similar users`
      };
    }
    return null;
  }
  /**
   * Analyzes user progress against benchmarks to generate insights.
   * @param snapshots User progress snapshots
   * @param benchmark Benchmark data for comparison
   * @returns Comparison insights
   */
  generateInsights(snapshots, benchmark) {
    if (snapshots.length < 2 || !benchmark) {
      return { trend: "insufficient_data" };
    }
    const sortedSnapshots = [...snapshots].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const lowerIsBetter = benchmark.metricName.includes("phq") || benchmark.metricName.includes("gad");
    const firstSnapshot = sortedSnapshots[0];
    const lastSnapshot = sortedSnapshots[sortedSnapshots.length - 1];
    if (!firstSnapshot || !lastSnapshot) {
      return { trend: "insufficient_data" };
    }
    const firstValue = firstSnapshot.metricValue;
    const lastValue = lastSnapshot.metricValue;
    const valueDifference = lastValue - firstValue;
    let trend = "stable";
    if (Math.abs(valueDifference) < 1) {
      trend = "stable";
    } else if (lowerIsBetter && valueDifference < 0 || !lowerIsBetter && valueDifference > 0) {
      trend = "improving";
    } else {
      trend = "declining";
    }
    const relativeToAverage = this.compareToAverage(
      lastValue,
      benchmark,
      lowerIsBetter
    );
    const percentileRank = this.estimatePercentileRank(
      lastValue,
      benchmark,
      lowerIsBetter
    );
    const narrativeSummary = this.generateNarrativeSummary(
      trend,
      relativeToAverage,
      percentileRank,
      lowerIsBetter,
      benchmark.metricName
    );
    return {
      trend,
      relativeToAverage,
      percentileRank,
      narrativeSummary
    };
  }
  /**
   * Compares a value to the benchmark average.
   */
  compareToAverage(value, benchmark, lowerIsBetter) {
    const difference = value - benchmark.averageValue;
    const threshold = benchmark.standardDeviation ? benchmark.standardDeviation * 0.2 : 1;
    if (Math.abs(difference) <= threshold) {
      return "at";
    }
    if (lowerIsBetter) {
      return difference < 0 ? "above" : "below";
    } else {
      return difference > 0 ? "above" : "below";
    }
  }
  /**
   * Estimates the percentile rank of a value within the benchmark distribution.
   */
  estimatePercentileRank(value, benchmark, lowerIsBetter) {
    if (value <= benchmark.percentile25) {
      return lowerIsBetter ? 75 : 25;
    } else if (value >= benchmark.percentile75) {
      return lowerIsBetter ? 25 : 75;
    } else {
      return 50;
    }
  }
  /**
   * Generates a narrative summary of the comparison.
   */
  generateNarrativeSummary(trend, relativeToAverage, _percentileRank, lowerIsBetter, metricName) {
    const trendText = trend === "improving" ? "improving" : trend === "declining" ? "declining" : "stable";
    const positionText = relativeToAverage === "above" ? lowerIsBetter ? "better than" : "above" : relativeToAverage === "below" ? lowerIsBetter ? "below" : "worse than" : "at";
    return `Your ${metricName} is ${trendText} and currently ${positionText} average for similar users.`;
  }
  /**
   * Creates a result for insufficient data scenarios.
   */
  createInsufficientDataResult(_params) {
    return {
      userProgressSnapshots: [],
      benchmarkData: null,
      comparisonInsights: {
        trend: "insufficient_data"
      }
    };
  }
}

const requestSchema = z.object({
  anonymizedUserId: z.string().min(1, "User ID is required"),
  metricName: z.string().min(1, "Metric name is required"),
  cohortId: z.string().min(1, "Cohort ID is required"),
  dateRange: z.object({
    startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Start date must be in YYYY-MM-DD format"),
    endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "End date must be in YYYY-MM-DD format")
  })
});
const logger = createBuildSafeLogger("default");
const comparativeProgressService = new ComparativeProgressService(logger);
const get = async ({ request, cookies }) => {
  try {
    const authToken = cookies.get("auth-token")?.value;
    if (!authToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Authentication required"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const url = new URL(request.url);
    const params = {
      anonymizedUserId: url.searchParams.get("anonymizedUserId") || "",
      metricName: url.searchParams.get("metric") || "",
      cohortId: url.searchParams.get("cohort") || "",
      dateRange: {
        startDate: url.searchParams.get("startDate") || "",
        endDate: url.searchParams.get("endDate") || ""
      }
    };
    const validationResult = requestSchema.safeParse(params);
    if (!validationResult.success) {
      logger.warn("Invalid comparative progress request", {
        errors: validationResult.error.format(),
        path: url.pathname
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid request parameters",
          details: validationResult.error.format()
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const analysisResult = await comparativeProgressService.analyzeProgress(
      validationResult.data
    );
    if (analysisResult.error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: analysisResult.error
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: analysisResult
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "private, max-age=300"
          // Cache for 5 minutes
        }
      }
    );
  } catch (error) {
    logger.error("Error processing comparative progress request", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred while processing the request"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
