;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40e71c78-f8de-4fd2-9a0c-16a4f1f4dfdf",e._sentryDebugIdIdentifier="sentry-dbid-40e71c78-f8de-4fd2-9a0c-16a4f1f4dfdf")}catch(e){}}();import { c as createAuditLog } from '../../../chunks/audit_DWq5CQbl.mjs';
import { g as getSession } from '../../../chunks/session_CjG7jjfF.mjs';
import { createClient } from '@supabase/supabase-js';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const supabaseUrl = "https://dihivzkwbwpkpebichlk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs";
const supabase = createClient(supabaseUrl, supabaseKey) ;

const GET = async ({ request, url }) => {
  try {
    const session = await getSession(request);
    if (session?.user?.role !== "admin") {
      return new Response(
        JSON.stringify({ error: "Unauthorized - Admin access required" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { user } = session;
    const period = url.searchParams.get("period") || "weekly";
    const startDate = url.searchParams.get("startDate") ? new Date(url.searchParams.get("startDate")) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    const endDate = url.searchParams.get("endDate") ? new Date(url.searchParams.get("endDate")) : /* @__PURE__ */ new Date();
    const model = url.searchParams.get("model") || void 0;
    const limit = Number.parseInt(url.searchParams.get("limit") || "100", 10);
    await createAuditLog({
      userId: user.id,
      action: "ai.performance.metrics.request",
      resource: "ai",
      metadata: {
        period,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        model,
        limit
      }
    });
    const { data: results, error } = await supabase.rpc("get_ai_metrics", {
      p_period: period,
      p_start_date: startDate.toISOString(),
      p_end_date: endDate.toISOString(),
      p_model: model,
      p_limit: limit
    }).then((response) => response.data);
    if (error) {
      throw error;
    }
    const metrics = results?.map(
      (row) => ({
        date: row.date_trunc,
        model: row.model,
        requestCount: Number(row.request_count),
        latency: {
          avg: Number(row.avg_latency),
          max: Number(row.max_latency),
          min: Number(row.min_latency)
        },
        tokens: {
          input: Number(row.total_input_tokens),
          output: Number(row.total_output_tokens),
          total: Number(row.total_tokens)
        },
        successRate: Number(row.success_count) / Number(row.request_count),
        cacheHitRate: Number(row.cached_count) / Number(row.request_count),
        optimizationRate: Number(row.optimized_count) / Number(row.request_count)
      })
    ) ?? [];
    const { data: modelBreakdown, error: modelBreakdownError } = await supabase.rpc("get_ai_model_breakdown", {
      p_start_date: startDate.toISOString(),
      p_end_date: endDate.toISOString()
    }).then((response) => response.data);
    if (modelBreakdownError) {
      throw modelBreakdownError;
    }
    const { data: errorBreakdown, error: errorBreakdownError } = await supabase.rpc("get_ai_error_breakdown", {
      p_start_date: startDate.toISOString(),
      p_end_date: endDate.toISOString()
    }).then((response) => response.data);
    if (errorBreakdownError) {
      throw errorBreakdownError;
    }
    if (errorBreakdownError) {
      throw errorBreakdownError;
    }
    return new Response(
      JSON.stringify({
        metrics,
        modelBreakdown: modelBreakdown?.map(
          (row) => ({
            model: row.model,
            requestCount: Number(row.request_count),
            totalTokens: Number(row.total_tokens),
            successRate: Number(row.success_count) / Number(row.request_count),
            cacheHitRate: Number(row.cached_count) / Number(row.request_count),
            optimizationRate: Number(row.optimized_count) / Number(row.request_count)
          })
        ) ?? [],
        errorBreakdown: errorBreakdown?.map(
          (row) => ({
            errorCode: row.error_code,
            count: Number(row.error_count)
          })
        ) ?? []
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error fetching AI performance metrics:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch AI performance metrics",
        details: error instanceof Error ? error?.message : String(error)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
