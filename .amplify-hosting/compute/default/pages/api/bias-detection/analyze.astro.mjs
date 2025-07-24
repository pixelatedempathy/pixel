;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ca53a229-b9ce-4e27-974d-fe25f2b587b1",e._sentryDebugIdIdentifier="sentry-dbid-ca53a229-b9ce-4e27-974d-fe25f2b587b1")}catch(e){}}();import { z } from 'zod';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { B as BiasDetectionEngine, p as performanceMonitor } from '../../../chunks/BiasDetectionEngine_BKcjywlG.mjs';
import { r as redis } from '../../../chunks/index_C06Ye329.mjs';
import { v4 } from 'uuid';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger$1 = createBuildSafeLogger("JobQueueService");
var JobStatus = /* @__PURE__ */ ((JobStatus2) => {
  JobStatus2["PENDING"] = "pending";
  JobStatus2["IN_PROGRESS"] = "in_progress";
  JobStatus2["COMPLETED"] = "completed";
  JobStatus2["FAILED"] = "failed";
  JobStatus2["CANCELLED"] = "cancelled";
  return JobStatus2;
})(JobStatus || {});
class JobQueueService {
  static instance;
  queueKey = "jobs:queue";
  processingKey = "jobs:processing";
  completedKey = "jobs:completed";
  failedKey = "jobs:failed";
  jobStatusKeyPrefix = "job:status:";
  constructor() {
    logger$1.info("JobQueueService initialized");
  }
  static getInstance() {
    if (!JobQueueService.instance) {
      JobQueueService.instance = new JobQueueService();
    }
    return JobQueueService.instance;
  }
  /**
   * Enqueue a new job
   */
  async enqueue(type, payload, options) {
    const job = {
      id: v4(),
      type,
      payload,
      status: "pending" /* PENDING */,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      ...options?.metadata && { metadata: options.metadata }
    };
    const jobString = JSON.stringify(job);
    const score = options?.priority || 0;
    if (options?.delay) {
      await redis.zadd(this.queueKey, Date.now() + options.delay, jobString);
      logger$1.info("Job enqueued with delay", {
        jobId: job.id,
        type: job.type,
        delay: options.delay
      });
    } else {
      await redis.zadd(this.queueKey, score, jobString);
      logger$1.info("Job enqueued", {
        jobId: job.id,
        type: job.type,
        priority: score
      });
    }
    await this.updateJobStatus(job.id, "pending" /* PENDING */, job);
    return job;
  }
  /**
   * Dequeue a job for processing
   * Returns the highest priority job (highest score in sorted set)
   */
  async dequeue() {
    const jobString = await redis.zpopmin(this.queueKey);
    if (!jobString || jobString.length === 0) {
      return null;
    }
    const job = JSON.parse(jobString[0].value);
    job.status = "in_progress" /* IN_PROGRESS */;
    job.startedAt = (/* @__PURE__ */ new Date()).toISOString();
    job.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    await redis.hset(this.processingKey, job.id, JSON.stringify(job));
    await this.updateJobStatus(job.id, "in_progress" /* IN_PROGRESS */, job);
    logger$1.info("Job dequeued", { jobId: job.id, type: job.type });
    return job;
  }
  /**
   * Update job status and store in appropriate list
   */
  async updateJobStatus(jobId, status, updates) {
    const currentJobString = await redis.hget(
      this.jobStatusKeyPrefix + jobId,
      jobId
    );
    let job;
    if (currentJobString) {
      job = {
        ...JSON.parse(currentJobString),
        ...updates,
        status,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    } else if (updates && updates.type && updates.payload) {
      job = {
        id: jobId,
        type: updates.type,
        payload: updates.payload,
        status,
        createdAt: updates.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        ...updates
      };
    } else {
      logger$1.warn(
        "Attempted to update status for non-existent job without full details",
        { jobId, status, updates }
      );
      return;
    }
    await redis.hset(
      this.jobStatusKeyPrefix + jobId,
      jobId,
      JSON.stringify(job)
    );
    await redis.hdel(this.processingKey, jobId);
    switch (status) {
      case "completed" /* COMPLETED */:
        await redis.hset(this.completedKey, jobId, JSON.stringify(job));
        logger$1.info("Job completed", { jobId, type: job.type });
        break;
      case "failed" /* FAILED */:
        await redis.hset(this.failedKey, jobId, JSON.stringify(job));
        logger$1.warn("Job failed", { jobId, type: job.type, error: job.error });
        break;
      case "cancelled" /* CANCELLED */:
        await redis.hset(this.failedKey, jobId, JSON.stringify(job));
        logger$1.info("Job cancelled", { jobId, type: job.type });
        break;
    }
  }
  /**
   * Get job status by ID
   */
  async getJobStatus(jobId) {
    const jobString = await redis.hget(this.jobStatusKeyPrefix + jobId, jobId);
    return jobString ? JSON.parse(jobString) : null;
  }
  /**
   * Get all jobs in a specific status (e.g., PENDING, IN_PROGRESS, COMPLETED, FAILED)
   */
  async getJobsByStatus(status) {
    let jobStrings = [];
    switch (status) {
      case "pending" /* PENDING */: {
        const pendingJobsWithScores = await redis.zrange(
          this.queueKey,
          0,
          -1,
          "WITHSCORES"
        );
        jobStrings = pendingJobsWithScores.map((item) => item.value);
        break;
      }
      case "in_progress" /* IN_PROGRESS */:
        jobStrings = Object.values(await redis.hgetall(this.processingKey));
        break;
      case "completed" /* COMPLETED */:
        jobStrings = Object.values(await redis.hgetall(this.completedKey));
        break;
      case "failed" /* FAILED */:
        jobStrings = Object.values(await redis.hgetall(this.failedKey));
        break;
      case "cancelled" /* CANCELLED */:
        jobStrings = Object.values(await redis.hgetall(this.failedKey));
        jobStrings = jobStrings.filter(
          (jobStr) => JSON.parse(jobStr).status === "cancelled" /* CANCELLED */
        );
        break;
      default:
        return [];
    }
    return jobStrings.map((jobString) => JSON.parse(jobString));
  }
  /**
   * Get all job IDs in a specific status
   */
  async getJobIdsByStatus(status) {
    let jobIds = [];
    switch (status) {
      case "pending" /* PENDING */: {
        const pendingJobs = await redis.zrange(this.queueKey, 0, -1);
        jobIds = pendingJobs.map((jobStr) => JSON.parse(jobStr).id);
        break;
      }
      case "in_progress" /* IN_PROGRESS */:
        jobIds = Object.keys(await redis.hgetall(this.processingKey));
        break;
      case "completed" /* COMPLETED */:
        jobIds = Object.keys(await redis.hgetall(this.completedKey));
        break;
      case "failed" /* FAILED */:
        jobIds = Object.keys(await redis.hgetall(this.failedKey));
        break;
      case "cancelled" /* CANCELLED */: {
        const cancelledJobs = Object.values(await redis.hgetall(this.failedKey));
        jobIds = cancelledJobs.filter(
          (jobStr) => JSON.parse(jobStr).status === "cancelled" /* CANCELLED */
        ).map((jobStr) => JSON.parse(jobStr).id);
        break;
      }
      default:
        return [];
    }
    return jobIds;
  }
  /**
   * Clear all jobs from all lists (for testing/cleanup)
   */
  async clearAllJobs() {
    await redis.del(this.queueKey);
    await redis.del(this.processingKey);
    await redis.del(this.completedKey);
    await redis.del(this.failedKey);
    const allJobStatusKeys = await redis.keys(`${this.jobStatusKeyPrefix}*`);
    if (allJobStatusKeys.length > 0) {
      for (const key of allJobStatusKeys) {
        await redis.del(key);
      }
    }
    logger$1.info("All jobs cleared from queue and status records");
  }
  /**
   * Remove a job from all queues/status records by ID
   */
  async removeJob(jobId) {
    await redis.zrem(this.queueKey, jobId);
    await redis.hdel(this.processingKey, jobId);
    await redis.hdel(this.completedKey, jobId);
    await redis.hdel(this.failedKey, jobId);
    await redis.del(this.jobStatusKeyPrefix + jobId);
    logger$1.info("Job removed", { jobId });
  }
  /**
   * Get counts of jobs by status
   */
  async getJobCounts() {
    const [pending, inProgress, completed, failed] = await Promise.all([
      redis.zcard(this.queueKey),
      redis.hlen(this.processingKey),
      redis.hlen(this.completedKey),
      redis.hlen(this.failedKey)
    ]);
    const allFailedJobs = Object.values(await redis.hgetall(this.failedKey));
    const cancelledCount = allFailedJobs.filter(
      (jobStr) => JSON.parse(jobStr).status === "cancelled" /* CANCELLED */
    ).length;
    const actualFailedCount = failed - cancelledCount;
    return {
      ["pending" /* PENDING */]: pending,
      ["in_progress" /* IN_PROGRESS */]: inProgress,
      ["completed" /* COMPLETED */]: completed,
      ["failed" /* FAILED */]: actualFailedCount,
      ["cancelled" /* CANCELLED */]: cancelledCount
    };
  }
}
const jobQueue = JobQueueService.getInstance();

const AnalyzeSessionRequestSchema = z.object({
  session: z.object({
    sessionId: z.string().uuid(),
    timestamp: z.string().datetime().transform((str) => new Date(str)),
    participantDemographics: z.object({
      age: z.string().min(1),
      gender: z.enum(["male", "female", "non-binary", "prefer-not-to-say"]),
      ethnicity: z.string().min(1),
      primaryLanguage: z.string().min(2),
      socioeconomicStatus: z.enum(["low", "middle", "high", "not-specified"]).optional(),
      education: z.string().optional(),
      region: z.string().optional(),
      culturalBackground: z.array(z.string()).optional(),
      disabilityStatus: z.string().optional()
    }),
    scenario: z.object({
      scenarioId: z.string().min(1),
      type: z.enum([
        "depression",
        "anxiety",
        "trauma",
        "substance-abuse",
        "grief",
        "other"
      ]),
      complexity: z.enum(["beginner", "intermediate", "advanced"]),
      tags: z.array(z.string()),
      description: z.string().min(1),
      learningObjectives: z.array(z.string())
    }),
    content: z.object({
      patientPresentation: z.string().min(1),
      therapeuticInterventions: z.array(z.string()),
      patientResponses: z.array(z.string()),
      sessionNotes: z.string(),
      assessmentResults: z.any().optional()
    }),
    aiResponses: z.array(
      z.object({
        responseId: z.string(),
        timestamp: z.string().datetime().transform((str) => new Date(str)),
        type: z.enum([
          "diagnostic",
          "intervention",
          "risk-assessment",
          "recommendation"
        ]),
        content: z.string().min(1),
        confidence: z.number().min(0).max(1),
        modelUsed: z.string(),
        reasoning: z.string().optional()
      })
    ),
    expectedOutcomes: z.array(z.any()),
    transcripts: z.array(z.any()),
    metadata: z.object({
      trainingInstitution: z.string(),
      supervisorId: z.string().optional(),
      traineeId: z.string(),
      sessionDuration: z.number().positive(),
      completionStatus: z.enum(["completed", "partial", "abandoned"]),
      technicalIssues: z.array(z.string()).optional()
    })
  }),
  options: z.object({
    skipCache: z.boolean().optional(),
    includeExplanation: z.boolean().optional(),
    demographicFocus: z.array(z.any()).optional()
  }).optional()
});
const logger = createBuildSafeLogger("BiasAnalysisAPI");
async function authenticateRequest(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7);
  if (!token || token === "invalid") {
    return null;
  }
  return {
    userId: `user-${token.slice(0, 8)}`,
    email: "user@example.com",
    role: {
      id: "analyst",
      name: "analyst",
      description: "Data Analyst",
      level: 3
    },
    permissions: [
      {
        resource: "bias-analysis",
        actions: ["read", "write"],
        conditions: []
      }
    ]
  };
}
function hasPermission(user, resource, action) {
  return user.permissions.some(
    (p) => p.resource === resource && p.actions.includes(action)
  );
}
const rateLimiter = new RateLimiterMemory({
  points: 60,
  // 60 requests
  duration: 60
  // per 60 seconds
});
async function checkRateLimit(identifier) {
  try {
    await rateLimiter.consume(identifier);
  } catch {
    throw new Error("Rate Limit Exceeded");
  }
}
function sanitizeSessionForLogging(session) {
  return {
    sessionId: session.sessionId,
    timestamp: session.timestamp,
    participantDemographics: {
      age: session.participantDemographics.age,
      gender: session.participantDemographics.gender,
      ethnicity: session.participantDemographics.ethnicity,
      primaryLanguage: session.participantDemographics.primaryLanguage
    },
    scenario: {
      scenarioId: session.scenario.scenarioId,
      type: session.scenario.type,
      complexity: session.scenario.complexity,
      tags: session.scenario.tags,
      description: "[REDACTED]",
      learningObjectives: []
    },
    metadata: {
      trainingInstitution: session.metadata.trainingInstitution,
      traineeId: "[REDACTED]",
      sessionDuration: session.metadata.sessionDuration,
      completionStatus: session.metadata.completionStatus
    }
  };
}
const biasDetectionEngine = new BiasDetectionEngine();
biasDetectionEngine.initialize();
const POST = async (context) => {
  const { request } = context;
  const startTime = Date.now();
  let user = null;
  let sessionId;
  let status = 500;
  let jobId;
  try {
    user = await authenticateRequest(request);
    if (!user) {
      status = 401;
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized",
          message: "Valid authorization token required"
        }),
        {
          status,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": "60",
            "X-RateLimit-Remaining": "0"
          }
        }
      );
    }
    if (!hasPermission(user, "bias-analysis", "write")) {
      status = 403;
      return new Response(
        JSON.stringify({
          success: false,
          error: "Forbidden",
          message: "Insufficient permissions for bias analysis"
        }),
        {
          status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    try {
      await checkRateLimit(user.userId);
    } catch {
      status = 429;
      return new Response(
        JSON.stringify({
          success: false,
          error: "Rate Limit Exceeded",
          message: "Too many requests. Please try again later."
        }),
        {
          status,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60"
          }
        }
      );
    }
    let requestBody;
    try {
      const rawBody = await request.json();
      requestBody = AnalyzeSessionRequestSchema.parse(rawBody);
      sessionId = requestBody.session.sessionId;
    } catch (error) {
      status = 400;
      logger.warn("Invalid request body", {
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: "Bad Request",
          message: "Invalid request format or missing required fields",
          processingTime: Date.now() - startTime,
          cacheHit: false
        }),
        {
          status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    logger.info("Bias analysis job enqueued", {
      sessionId,
      userId: user.userId,
      session: sanitizeSessionForLogging(requestBody.session)
    });
    const job = await jobQueue.enqueue(
      "bias-analysis-batch",
      {
        sessions: [requestBody.session],
        // Enqueue as a batch of one for now
        user,
        request: {
          ipAddress: request.headers.get("x-forwarded-for") || "unknown",
          userAgent: request.headers.get("user-agent") || "unknown"
        }
      },
      { metadata: { sessionId, userId: user.userId } }
    );
    jobId = job.id;
    const processingTime = Date.now() - startTime;
    status = 202;
    return new Response(
      JSON.stringify({
        success: true,
        message: "Analysis job submitted",
        jobId: job.id,
        status: JobStatus.PENDING,
        processingTime
      }),
      {
        status,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error("Bias analysis request failed", {
      error: error instanceof Error ? error.message : "Unknown error",
      sessionId,
      userId: user?.userId,
      processingTime,
      jobId
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Error",
        message: "Failed to submit analysis job",
        processingTime,
        cacheHit: false
      }),
      {
        status,
        headers: { "Content-Type": "application/json" }
      }
    );
  } finally {
    performanceMonitor.recordRequestTiming(
      "/api/bias-detection/analyze",
      "POST",
      Date.now() - startTime,
      status
    );
  }
};
const GET = async ({ request, url }) => {
  const startTime = Date.now();
  let user = null;
  try {
    user = await authenticateRequest(request);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized",
          message: "Valid authorization token required"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!hasPermission(user, "bias-analysis", "read")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Forbidden",
          message: "Insufficient permissions for bias analysis"
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const sessionId = url.searchParams.get("sessionId");
    if (!sessionId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Bad Request",
          message: "sessionId parameter is required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const mockResult = {
      sessionId,
      overallScore: 0.65,
      riskLevel: "medium",
      recommendations: ["Review cultural considerations"],
      layerAnalysis: [],
      demographicAnalysis: {}
    };
    return new Response(
      JSON.stringify({
        success: true,
        data: mockResult,
        processingTime: Date.now() - startTime,
        cacheHit: true
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"
        }
      }
    );
  } catch (error) {
    logger.error("GET bias analysis failed", {
      error: error instanceof Error ? error.message : "Unknown error",
      userId: user?.userId
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Error",
        message: "Failed to retrieve analysis"
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
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
