;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3292cf0a-70c4-4de5-9b5a-ffb6acd06ab1",e._sentryDebugIdIdentifier="sentry-dbid-3292cf0a-70c4-4de5-9b5a-ffb6acd06ab1")}catch(e){}}();import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_Y2xlcmsucGl4ZWxhdGVkZW1wYXRoeS5jb20k", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs", "PUBLIC_SUPABASE_URL": "https://dihivzkwbwpkpebichlk.supabase.co", "SITE": "https://pixelatedempathy.com", "SSR": true};
const analyticsData = [];
const POST = async ({ request }) => {
  try {
    const eventData = await request.json();
    const validationErrors = [];
    if (!eventData.event) {
      validationErrors.push({
        field: "event",
        message: "Event name is required"
      });
    }
    if (!eventData.session_id) {
      validationErrors.push({
        field: "session_id",
        message: "Session ID is required"
      });
    }
    if (!eventData.ab_variant) {
      validationErrors.push({
        field: "ab_variant",
        message: "A/B variant is required"
      });
    }
    if (validationErrors.length > 0) {
      const error = {
        code: "VALIDATION_ERROR",
        message: "Invalid analytics event data",
        details: validationErrors
      };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const enrichedEvent = {
      ...eventData,
      server_timestamp: Date.now(),
      ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
      user_agent: request.headers.get("user-agent") || eventData.user_agent
    };
    analyticsData.push(enrichedEvent);
    console.log("Demo Analytics Event:", {
      event: enrichedEvent.event,
      session_id: enrichedEvent.session_id,
      ab_variant: enrichedEvent.ab_variant,
      timestamp: new Date(enrichedEvent.timestamp).toISOString()
    });
    await Promise.allSettled([
      sendToGoogleAnalytics(enrichedEvent),
      sendToMixpanel(enrichedEvent),
      sendToCustomAnalytics(enrichedEvent)
    ]);
    const response = {
      success: true,
      event_id: enrichedEvent.session_id + "_" + enrichedEvent.timestamp
    };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Demo analytics error:", error);
    const apiError = {
      code: "PROCESSING_ERROR",
      message: "Failed to process analytics event",
      details: {
        source: "demo-tracking",
        message: error instanceof Error ? error.message : String(error)
      }
    };
    return new Response(JSON.stringify(apiError), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const GET = async ({ url }) => {
  try {
    const { searchParams } = new URL(url);
    const sessionId = searchParams.get("session_id");
    const abVariant = searchParams.get("ab_variant");
    const event = searchParams.get("event");
    let filteredData = analyticsData;
    if (sessionId) {
      filteredData = filteredData.filter(
        (item) => item.session_id === sessionId
      );
    }
    if (abVariant) {
      filteredData = filteredData.filter(
        (item) => item.ab_variant === abVariant
      );
    }
    if (event) {
      filteredData = filteredData.filter((item) => item.event === event);
    }
    const summary = generateAnalyticsSummary(filteredData);
    const response = {
      total_events: filteredData.length,
      events: filteredData.slice(-100),
      // Return last 100 events
      summary
    };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Demo analytics query error:", error);
    const apiError = {
      code: "PROCESSING_ERROR",
      message: "Failed to retrieve analytics data",
      details: {
        source: "demo-tracking",
        message: error instanceof Error ? error.message : String(error)
      }
    };
    return new Response(JSON.stringify(apiError), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function sendToGoogleAnalytics(event) {
  const GA_MEASUREMENT_ID = Object.assign(__vite_import_meta_env__, { _: process.env._ }).PUBLIC_GA_MEASUREMENT_ID;
  const { GA_API_SECRET } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  if (!GA_MEASUREMENT_ID || !GA_API_SECRET) {
    console.warn("Google Analytics credentials not configured");
    return;
  }
  try {
    const gaEvent = {
      name: event.event,
      parameters: {
        ab_variant: event.ab_variant,
        page_title: "ClinicalVault Trainer Demo",
        page_location: event.url,
        custom_parameter_1: event.session_id,
        custom_parameter_2: event.ab_variant,
        ...Object.fromEntries(
          Object.entries(event).filter(
            ([key]) => ![
              "event",
              "timestamp",
              "session_id",
              "ab_variant",
              "url"
            ].includes(key)
          )
        )
      }
    };
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: event.session_id,
          events: [gaEvent]
        })
      }
    );
    if (!response.ok) {
      throw new Error(`GA4 API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send to Google Analytics:", error);
  }
}
async function sendToMixpanel(event) {
  const { MIXPANEL_TOKEN } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token not configured");
    return;
  }
  try {
    const mixpanelEvent = {
      event: event.event,
      properties: {
        token: MIXPANEL_TOKEN,
        distinct_id: event.session_id,
        ab_variant: event.ab_variant,
        page: event.page,
        time: Math.floor(event.timestamp / 1e3),
        ...event
      }
    };
    const response = await fetch("https://api.mixpanel.com/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([mixpanelEvent])
    });
    if (!response.ok) {
      throw new Error(`Mixpanel API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send to Mixpanel:", error);
  }
}
async function sendToCustomAnalytics(event) {
  const { CUSTOM_ANALYTICS_ENDPOINT, CUSTOM_ANALYTICS_TOKEN } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  if (!CUSTOM_ANALYTICS_ENDPOINT || !CUSTOM_ANALYTICS_TOKEN) {
    return;
  }
  try {
    const response = await fetch(CUSTOM_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${CUSTOM_ANALYTICS_TOKEN}`
      },
      body: JSON.stringify(event)
    });
    if (!response.ok) {
      throw new Error(`Custom analytics API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send to custom analytics:", error);
  }
}
function generateAnalyticsSummary(events) {
  const summary = {
    total_events: events.length,
    unique_sessions: new Set(events.map((e) => e.session_id)).size,
    ab_variants: {},
    event_types: {},
    conversion_funnel: {
      page_views: 0,
      demo_interactions: 0,
      cta_clicks: 0,
      conversion_rate: 0
    },
    avg_time_to_cta: 0,
    scroll_depth_avg: 0
  };
  events.forEach((event) => {
    summary.ab_variants[event.ab_variant] = (summary.ab_variants[event.ab_variant] || 0) + 1;
    summary.event_types[event.event] = (summary.event_types[event.event] || 0) + 1;
  });
  summary.conversion_funnel.page_views = events.filter(
    (e) => e.event === "demo_page_view"
  ).length;
  summary.conversion_funnel.demo_interactions = events.filter(
    (e) => e.event === "demo_interaction"
  ).length;
  summary.conversion_funnel.cta_clicks = events.filter(
    (e) => e.event === "demo_cta_click"
  ).length;
  if (summary.conversion_funnel.page_views > 0) {
    summary.conversion_funnel.conversion_rate = summary.conversion_funnel.cta_clicks / summary.conversion_funnel.page_views * 100;
  }
  const ctaEvents = events.filter(
    (e) => e.event === "demo_cta_click" && e.time_to_click
  );
  if (ctaEvents.length > 0) {
    summary.avg_time_to_cta = ctaEvents.reduce((sum, e) => sum + (e.time_to_click || 0), 0) / ctaEvents.length;
  }
  const scrollEvents = events.filter(
    (e) => e.event === "demo_scroll_depth" && e.depth_percent
  );
  if (scrollEvents.length > 0) {
    summary.scroll_depth_avg = scrollEvents.reduce((sum, e) => sum + (e.depth_percent || 0), 0) / scrollEvents.length;
  }
  return summary;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
