;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a3915ce9-fd47-493e-9afd-672fc49919d0",e._sentryDebugIdIdentifier="sentry-dbid-a3915ce9-fd47-493e-9afd-672fc49919d0")}catch(e){}}();import { z } from 'zod';
import { v4 } from 'uuid';
import './astro/server_DBAAVvAL.mjs';

var GoalCategory = /* @__PURE__ */ ((GoalCategory2) => {
  GoalCategory2["SYMPTOM_REDUCTION"] = "symptom_reduction";
  GoalCategory2["BEHAVIORAL_CHANGE"] = "behavioral_change";
  GoalCategory2["EMOTIONAL_REGULATION"] = "emotional_regulation";
  GoalCategory2["RELATIONSHIP_IMPROVEMENT"] = "relationship_improvement";
  GoalCategory2["COPING_SKILLS"] = "coping_skills";
  GoalCategory2["TRAUMA_RECOVERY"] = "trauma_recovery";
  GoalCategory2["LIFESTYLE_CHANGES"] = "lifestyle_changes";
  GoalCategory2["COGNITIVE_RESTRUCTURING"] = "cognitive_restructuring";
  return GoalCategory2;
})(GoalCategory || {});
var GoalStatus = /* @__PURE__ */ ((GoalStatus2) => {
  GoalStatus2["NOT_STARTED"] = "not_started";
  GoalStatus2["IN_PROGRESS"] = "in_progress";
  GoalStatus2["ON_HOLD"] = "on_hold";
  GoalStatus2["COMPLETED"] = "completed";
  GoalStatus2["CANCELLED"] = "cancelled";
  return GoalStatus2;
})(GoalStatus || {});

const goals = [];
const checkpointSchema = z.object({
  id: z.string(),
  description: z.string().max(256),
  isCompleted: z.boolean(),
  completedAt: z.number().optional(),
  notes: z.string().optional()
});
const progressSnapshotSchema = z.object({
  timestamp: z.number(),
  progressPercent: z.number().min(0).max(100),
  notes: z.string()
});
const goalSchema = z.object({
  title: z.string().min(1).max(128),
  description: z.string().max(1024),
  category: z.nativeEnum(GoalCategory),
  status: z.nativeEnum(GoalStatus),
  targetDate: z.number().optional(),
  progress: z.number().min(0).max(100),
  checkpoints: z.array(checkpointSchema),
  progressHistory: z.array(progressSnapshotSchema),
  relatedInterventions: z.array(z.string()),
  relevantDistortions: z.array(z.string()).optional(),
  notes: z.string().optional()
});
const GET = async () => {
  return new Response(JSON.stringify(goals), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const parsed = goalSchema.safeParse(data);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: parsed.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const now = Date.now();
    const newGoal = {
      ...parsed.data,
      id: v4(),
      createdAt: now,
      updatedAt: now
    };
    goals.push(newGoal);
    return new Response(JSON.stringify(newGoal), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Server error",
        details: err instanceof Error ? err.message : String(err)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  goalSchema,
  goals
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, goalSchema as a, goals as g };
