;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4b6805a-6f28-48a8-9414-b73318d46430",e._sentryDebugIdIdentifier="sentry-dbid-e4b6805a-6f28-48a8-9414-b73318d46430")}catch(e){}}();import { z } from 'zod';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const updateTreatmentObjectiveSchema = z.object({
  id: z.string().uuid().optional(),
  // ID for existing objectives, must be UUID
  description: z.string().min(1).optional(),
  targetDate: z.string().datetime().optional().nullable(),
  status: z.enum(["Not Started", "In Progress", "Completed", "On Hold", "Cancelled"]).optional(),
  interventions: z.array(z.string().min(1)).min(1).optional(),
  progressNotes: z.string().optional().nullable()
}).passthrough();
const updateTreatmentGoalSchema = z.object({
  id: z.string().uuid().optional(),
  // ID for existing goals, must be UUID
  description: z.string().min(1).optional(),
  targetDate: z.string().datetime().optional().nullable(),
  status: z.enum([
    "Not Started",
    "In Progress",
    "Achieved",
    "Partially Achieved",
    "Not Achieved"
  ]).optional(),
  objectives: z.array(updateTreatmentObjectiveSchema).optional()
}).passthrough();
const updateTreatmentPlanClientSchema = z.object({
  title: z.string().min(1).optional(),
  diagnosis: z.string().optional().nullable(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional().nullable(),
  status: z.enum(["Draft", "Active", "Completed", "Discontinued", "Archived"]).optional(),
  goals: z.array(updateTreatmentGoalSchema).optional(),
  generalNotes: z.string().optional().nullable()
});
const GET = async ({ params, locals }) => {
  const { supabase } = locals;
  if (!supabase) {
    return new Response(
      JSON.stringify({ error: "Supabase client not found" }),
      { status: 500 }
    );
  }
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401
    });
  }
  const { planId } = params;
  if (!planId) {
    return new Response(JSON.stringify({ error: "Plan ID is required" }), {
      status: 400
    });
  }
  try {
    const { data: plan, error } = await supabase.from("treatment_plans").select(
      `
        id, client_id, therapist_id, title, diagnosis, start_date, end_date, status, general_notes, created_at, updated_at,
        goals:treatment_goals (
          id, description, target_date, status, created_at, updated_at,
          objectives:treatment_objectives (*)
        )
      `
    ).eq("id", planId).eq("user_id", user.id).single();
    if (error) {
      if (error.code === "PGRST116") {
        return new Response(
          JSON.stringify({
            error: "Treatment plan not found or not authorized."
          }),
          { status: 404 }
        );
      }
      throw error;
    }
    return new Response(JSON.stringify(plan), { status: 200 });
  } catch (error) {
    console.error(`Error fetching treatment plan ${planId}:`, error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch treatment plan.",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};
const PUT = async ({ params, request, locals }) => {
  const { supabase } = locals;
  if (!supabase) {
    return new Response(
      JSON.stringify({ error: "Supabase client not found" }),
      { status: 500 }
    );
  }
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401
    });
  }
  const { planId } = params;
  if (!planId) {
    return new Response(JSON.stringify({ error: "Plan ID is required" }), {
      status: 400
    });
  }
  try {
    const body = await request.json();
    const validationResult = updateTreatmentPlanClientSchema.safeParse(body);
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid input data.",
          details: validationResult.error.flatten()
        }),
        { status: 400 }
      );
    }
    const { goals: clientGoals, ...planUpdates } = validationResult.data;
    const { data: updatedPlanData, error: planUpdateError } = await supabase.from("treatment_plans").update(planUpdates).eq("id", planId).eq("user_id", user.id).select_one("id").single();
    if (planUpdateError) {
      throw planUpdateError;
    }
    if (!updatedPlanData) {
      return new Response(
        JSON.stringify({ error: "Plan not found or update failed." }),
        { status: 404 }
      );
    }
    if (clientGoals) {
      for (const clientGoal of clientGoals) {
        const { objectives: clientObjectives, ...goalData } = clientGoal;
        if (clientGoal.id) {
          const { error: goalUpdateError } = await supabase.from("treatment_goals").update(goalData).eq("id", clientGoal.id).eq("plan_id", planId);
          if (goalUpdateError) {
            console.warn(
              `Error updating goal ${clientGoal.id}:`,
              goalUpdateError
            );
          }
        } else {
          const { error: goalInsertError } = await supabase.from("treatment_goals").insert({ ...goalData, plan_id: planId, user_id: user.id });
          if (goalInsertError) {
            console.warn(`Error inserting new goal:`, goalInsertError);
          }
        }
        if (clientObjectives && clientGoal.id) {
          for (const clientObjective of clientObjectives) {
            const objectiveData = { ...clientObjective };
            if (clientObjective.id) {
              const { error: objUpdateError } = await supabase.from("treatment_objectives").update(objectiveData).eq("id", clientObjective.id).eq("goal_id", clientGoal.id);
              if (objUpdateError) {
                console.warn(
                  `Error updating objective ${clientObjective.id}:`,
                  objUpdateError
                );
              }
            } else {
              const { error: objInsertError } = await supabase.from("treatment_objectives").insert({
                ...objectiveData,
                goal_id: clientGoal.id,
                user_id: user.id
              });
              if (objInsertError) {
                console.warn(
                  `Error inserting new objective for goal ${clientGoal.id}:`,
                  objInsertError
                );
              }
            }
          }
        }
      }
    }
    const { data: finalUpdatedPlan, error: fetchError } = await supabase.from("treatment_plans").select(
      `id, client_id, therapist_id, title, diagnosis, start_date, end_date, status, general_notes, created_at, updated_at, goals:treatment_goals(id, description, target_date, status, created_at, updated_at, objectives:treatment_objectives(*))`
    ).eq("id", planId).eq("user_id", user.id).single();
    if (fetchError) {
      throw fetchError;
    }
    return new Response(JSON.stringify(finalUpdatedPlan), {
      status: 200
    });
  } catch (error) {
    console.error(`Error updating treatment plan ${planId}:`, error);
    return new Response(
      JSON.stringify({
        error: "Failed to update treatment plan.",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};
const DELETE = async ({ params, locals }) => {
  const { supabase } = locals;
  if (!supabase) {
    return new Response(
      JSON.stringify({ error: "Supabase client not found" }),
      { status: 500 }
    );
  }
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401
    });
  }
  const { planId } = params;
  if (!planId) {
    return new Response(JSON.stringify({ error: "Plan ID is required" }), {
      status: 400
    });
  }
  try {
    const { error } = await supabase.from("treatment_plans").delete().eq("id", planId).eq("user_id", user.id);
    if (error) {
      throw error;
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(`Error deleting treatment plan ${planId}:`, error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete treatment plan.",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
