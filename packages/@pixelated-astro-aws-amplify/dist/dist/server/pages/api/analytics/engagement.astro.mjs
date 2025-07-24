;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3bf0ed5e-9a46-4288-8c6b-2dcd7e1e567f",e._sentryDebugIdIdentifier="sentry-dbid-3bf0ed5e-9a46-4288-8c6b-2dcd7e1e567f")}catch(e){}}();import { r as requirePageAuth } from '../../../chunks/serverAuth_4gmt5n21.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request, cookies }) => {
  try {
    await requirePageAuth({ request, cookies });
    const sessionTrends = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        {
          name: "Sessions",
          data: [28, 34, 42, 38, 45, 35, 32],
          color: "rgba(59, 130, 246, 0.5)"
        },
        {
          name: "Unique Users",
          data: [20, 25, 30, 28, 33, 24, 22],
          color: "rgba(16, 185, 129, 0.5)"
        }
      ]
    };
    const engagementRateTrend = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        {
          name: "Engagement Rate (%)",
          data: [42, 45, 48, 47, 52, 45, 44],
          color: "rgba(139, 92, 246, 0.5)"
        }
      ]
    };
    const sessionDurationTrend = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        {
          name: "Average Duration (min)",
          data: [12.5, 13.2, 15, 14.8, 16.2, 14, 13.5],
          color: "rgba(249, 115, 22, 0.5)"
        }
      ]
    };
    const interactionBreakdown = [
      { label: "Chat Responses", value: 35 },
      { label: "Tool Usage", value: 25 },
      { label: "Form Submissions", value: 18 },
      { label: "Feedback Responses", value: 12 },
      { label: "Report Views", value: 10 }
    ];
    const recentActivity = [
      {
        user: "User 123",
        action: "Session Completed",
        duration: 14.5,
        timestamp: Date.now() - 1e3 * 60 * 30,
        sessionScore: 87
      },
      {
        user: "User 456",
        action: "Feedback Submitted",
        duration: 22.3,
        timestamp: Date.now() - 1e3 * 60 * 45,
        sessionScore: 92
      },
      {
        user: "User 789",
        action: "Assessment Taken",
        duration: 18.7,
        timestamp: Date.now() - 1e3 * 60 * 60,
        sessionScore: 78
      },
      {
        user: "User 234",
        action: "Chat Session",
        duration: 11.2,
        timestamp: Date.now() - 1e3 * 60 * 90,
        sessionScore: 84
      },
      {
        user: "User 567",
        action: "Report Generated",
        duration: 8.5,
        timestamp: Date.now() - 1e3 * 60 * 120,
        sessionScore: 90
      }
    ];
    const metrics = {
      totalSessions: 235,
      engagementRate: 48.5,
      avgSessionDuration: 14.5,
      activeUsers: 182,
      sessionTrends,
      engagementRateTrend,
      sessionDurationTrend,
      interactionBreakdown,
      recentActivity
    };
    return new Response(JSON.stringify(metrics), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=60"
      }
    });
  } catch (error) {
    console.error("Engagement metrics API error:", error);
    const apiError = {
      code: "PROCESSING_ERROR",
      message: "Failed to fetch engagement metrics",
      details: {
        source: "engagement",
        message: error instanceof Error ? error.message : String(error)
      }
    };
    const status = error && typeof error === "object" && "status" in error ? error.status : 500;
    return new Response(JSON.stringify(apiError), {
      status,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
