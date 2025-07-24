;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4888a111-5620-43d6-af91-c679c1bc5575",e._sentryDebugIdIdentifier="sentry-dbid-4888a111-5620-43d6-af91-c679c1bc5575")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_CqouZpRI.mjs';
import { $ as $$Card } from '../chunks/Card_C_GhxMHY.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { c as createBuildSafeLogger } from '../chunks/build-safe-logger_0J2m2aGD.mjs';
export { renderers } from '../renderers.mjs';

const logger = createBuildSafeLogger("use-analytics-dashboard");
const DEFAULT_OPTIONS = {
  refreshInterval: 3e5,
  // 5 minutes
  retryAttempts: 3,
  enableAutoRefresh: true
};
function useAnalyticsDashboard(filters, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const retryTimeoutRef = useRef(null);
  const refreshIntervalRef = useRef(null);
  const abortControllerRef = useRef(null);
  const fetchAnalyticsData = useCallback(async (currentFilters, retryCount = 0) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    try {
      logger.info("Fetching analytics data", { filters: currentFilters, retryCount });
      const response = await fetch("/api/analytics/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentFilters),
        signal: abortControllerRef.current.signal
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const analyticsData = await response.json();
      if (!analyticsData.sessionMetrics || !analyticsData.skillProgress || !analyticsData.summaryStats) {
        throw new Error("Invalid analytics data structure received");
      }
      logger.info("Analytics data fetched successfully");
      return analyticsData;
    } catch (fetchError) {
      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        throw fetchError;
      }
      if (retryCount < config.retryAttempts) {
        const retryDelay = Math.min(1e3 * Math.pow(2, retryCount), 1e4);
        logger.warn(`Fetch failed, retrying in ${retryDelay}ms`, {
          error: fetchError,
          retryCount: retryCount + 1
        });
        return new Promise((resolve, reject) => {
          retryTimeoutRef.current = setTimeout(async () => {
            try {
              const result = await fetchAnalyticsData(currentFilters, retryCount + 1);
              resolve(result);
            } catch (retryError) {
              reject(retryError);
            }
          }, retryDelay);
        });
      }
      throw fetchError;
    }
  }, [config.retryAttempts]);
  const loadData = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) {
        setIsLoading(true);
      }
      setError(null);
      const analyticsData = await fetchAnalyticsData(filters);
      setData(analyticsData);
    } catch (loadError) {
      if (loadError instanceof Error && loadError.name === "AbortError") {
        return;
      }
      const analyticsError = {
        code: "FETCH_ERROR",
        message: loadError instanceof Error ? loadError.message : "Unknown error occurred",
        details: loadError
      };
      setError(analyticsError);
      logger.error("Failed to load analytics data", { error: analyticsError });
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  }, [filters, fetchAnalyticsData]);
  const refetch = useCallback(async () => {
    await loadData(true);
  }, [loadData]);
  const clearError = useCallback(() => {
    setError(null);
  }, []);
  useEffect(() => {
    if (!config.enableAutoRefresh) {
      return;
    }
    const setupAutoRefresh = () => {
      refreshIntervalRef.current = setInterval(() => {
        if (!document.hidden) {
          loadData(false);
        }
      }, config.refreshInterval);
    };
    setupAutoRefresh();
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (refreshIntervalRef.current) {
          clearInterval(refreshIntervalRef.current);
        }
      } else {
        setupAutoRefresh();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [config.enableAutoRefresh, config.refreshInterval, loadData]);
  useEffect(() => {
    loadData(true);
  }, [loadData]);
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, []);
  return {
    data,
    isLoading,
    error,
    refetch,
    clearError
  };
}

const LoadingSkeleton = () => /* @__PURE__ */ jsxs("div", { className: "animate-pulse", children: [
  /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4 mb-4" }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("div", { className: "h-3 bg-gray-200 rounded" }),
    /* @__PURE__ */ jsx("div", { className: "h-3 bg-gray-200 rounded w-5/6" }),
    /* @__PURE__ */ jsx("div", { className: "h-3 bg-gray-200 rounded w-4/6" })
  ] })
] });
const ErrorDisplay = ({ error, onRetry }) => /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "text-red-800 font-medium", children: "Unable to load analytics data" }),
    /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: error.message })
  ] }),
  /* @__PURE__ */ jsx(
    "button",
    {
      onClick: onRetry,
      className: "bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors",
      children: "Retry"
    }
  )
] }) });
const TimeRangeSelector = ({ value, onChange }) => {
  const options = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: options.map((option) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => onChange(option.value),
      className: `px-3 py-1 text-sm rounded transition-colors ${value === option.value ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
      children: option.label
    },
    option.value
  )) });
};
const SessionChart = ({ data, isLoading }) => {
  const maxSessions = useMemo(() => {
    return Math.max(...data.map((d) => d.sessions), 1);
  }, [data]);
  if (isLoading) {
    return /* @__PURE__ */ jsx(LoadingSkeleton, {});
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Session Activity" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-end space-x-2 h-48", children: data.map((day) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-blue-500 w-full rounded-t transition-all duration-300 hover:bg-blue-600",
          style: {
            height: `${day.sessions / maxSessions * 100}%`,
            minHeight: "4px"
          },
          title: `${day.sessions} sessions on ${new Date(day.date).toLocaleDateString()}`
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-xs mt-2 text-gray-600", children: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: day.sessions })
    ] }, day.date)) })
  ] });
};
const SkillProgress = ({ data, isLoading }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx(LoadingSkeleton, {});
  }
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return "↗";
      case "down":
        return "↘";
      case "stable":
        return "→";
    }
  };
  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      case "stable":
        return "text-gray-600";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Skill Progress" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: data.map((skill) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: skill.skill }),
          /* @__PURE__ */ jsx("span", { className: `text-sm ${getTrendColor(skill.trend)}`, children: getTrendIcon(skill.trend) })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
          skill.score,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-green-500 h-2 rounded-full transition-all duration-500",
          style: { width: `${skill.score}%` }
        }
      ) })
    ] }, skill.skill)) })
  ] });
};
const SummaryStats = ({ data, isLoading }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg shadow", children: /* @__PURE__ */ jsx(LoadingSkeleton, {}) }, i)) });
  }
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "purple":
        return "text-purple-600";
      case "orange":
        return "text-orange-600";
      case "red":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: data.map((stat) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow text-center", children: [
    /* @__PURE__ */ jsx("div", { className: `text-2xl font-bold ${getColorClasses(stat.color)}`, children: typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label }),
    stat.trend && /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [
      /* @__PURE__ */ jsxs("span", { className: stat.trend.direction === "up" ? "text-green-600" : stat.trend.direction === "down" ? "text-red-600" : "text-gray-600", children: [
        stat.trend.direction === "up" ? "↗" : stat.trend.direction === "down" ? "↘" : "→",
        " ",
        stat.trend.value,
        "%"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "ml-1", children: stat.trend.period })
    ] })
  ] }, stat.label)) });
};
const AnalyticsCharts = () => {
  const [filters, setFilters] = useState({
    timeRange: "7d",
    userSegment: "all"
  });
  const { data, isLoading, error, refetch } = useAnalyticsDashboard(filters, {
    refreshInterval: 3e5,
    // 5 minutes
    enableAutoRefresh: true
  });
  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);
  const handleTimeRangeChange = useCallback((timeRange) => {
    setFilters((prev) => ({ ...prev, timeRange }));
  }, []);
  if (error && !isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "analytics-charts space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Analytics Overview" }),
        /* @__PURE__ */ jsx(TimeRangeSelector, { value: filters.timeRange, onChange: handleTimeRangeChange })
      ] }),
      /* @__PURE__ */ jsx(ErrorDisplay, { error, onRetry: handleRetry })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "analytics-charts space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Analytics Overview" }),
      /* @__PURE__ */ jsx(TimeRangeSelector, { value: filters.timeRange, onChange: handleTimeRangeChange })
    ] }),
    /* @__PURE__ */ jsx(
      SummaryStats,
      {
        data: data?.summaryStats || [],
        isLoading
      }
    ),
    /* @__PURE__ */ jsx(
      SessionChart,
      {
        data: data?.sessionMetrics || [],
        isLoading
      }
    ),
    /* @__PURE__ */ jsx(
      SkillProgress,
      {
        data: data?.skillProgress || [],
        isLoading
      }
    ),
    data && !isLoading && /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 text-center", children: [
      "Data updated ",
      (/* @__PURE__ */ new Date()).toLocaleTimeString()
    ] })
  ] });
};

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Dashboard | Pixelated Empathy Therapy", "description": "Your therapy dashboard - Overview and quick access to all features" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-6"> <div class="flex flex-col gap-6"> <!-- Welcome Section --> <div class="flex items-center justify-between"> <div class="text-center w-full"> <h1 class="text-3xl font-bold tracking-tight mb-1">
Welcome Back${user?.name ? `, ${user.name.split(" ")[0]}` : ""} </h1> <p class="text-muted-foreground">
Here's an overview of your therapy space
</p> </div> <div class="flex items-center gap-4"> <div class="text-right"> <p class="text-sm font-medium">Security Level</p> <p class="text-xs text-muted-foreground">Maximum (FHE)</p> </div> <div class="h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-primary-foreground"> <span class="material-symbols-outlined text-lg">security</span> </div> </div> </div> <!-- Quick Stats Cards --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-4 flex items-center justify-between"> <div> <p class="text-sm font-medium text-muted-foreground">
Total Sessions
</p> <p class="text-2xl font-bold">42</p> </div> <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined">psychology</span> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-4 flex items-center justify-between"> <div> <p class="text-sm font-medium text-muted-foreground">
Practice Hours
</p> <p class="text-2xl font-bold">18.5</p> </div> <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined">timer</span> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-4 flex items-center justify-between"> <div> <p class="text-sm font-medium text-muted-foreground">
Avg. Score
</p> <p class="text-2xl font-bold">4.2</p> </div> <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined">grade</span> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-4 flex items-center justify-between"> <div> <p class="text-sm font-medium text-muted-foreground">Growth</p> <p class="text-2xl font-bold">+15%</p> </div> <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined">trending_up</span> </div> </div> ` })} </div> <!-- Quick Access Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-6"> <div class="flex items-center gap-2 mb-4 justify-center"> <span class="text-muted-foreground material-symbols-outlined">
psychology
</span> <h3 class="text-lg font-medium">Mental Health Chat</h3> </div> <p class="text-sm text-muted-foreground mb-4 text-center">
Start a therapeutic conversation with our AI-powered mental health
              assistant
</p> <div class="text-center"> <a href="/mental-health-chat" class="text-sm text-primary hover:text-primary/90 font-medium">
Open Chat →
</a> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-6"> <div class="flex items-center gap-2 mb-4 justify-center"> <span class="text-muted-foreground material-symbols-outlined">
exercise
</span> <h3 class="text-lg font-medium">Practice Simulator</h3> </div> <p class="text-sm text-muted-foreground mb-4 text-center">
Practice therapeutic techniques in a safe, private environment
</p> <div class="text-center"> <a href="/simulator" class="text-sm text-primary hover:text-primary/90 font-medium">
Start Practice →
</a> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-6"> <div class="flex items-center gap-2 mb-4 justify-center"> <span class="text-primary material-symbols-outlined">
analytics
</span> <h3 class="text-lg font-medium">Progress Analytics</h3> </div> <p class="text-sm text-muted-foreground mb-4 text-center">
View insights and progress from your therapeutic journey
</p> <div class="text-center"> <a href="/analytics" class="text-sm text-primary hover:text-primary/90 font-medium">
View Analytics →
</a> </div> </div> ` })} </div> <!-- Analytics Charts --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-6"> ${renderComponent($$result3, "AnalyticsCharts", AnalyticsCharts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/dashboard/AnalyticsCharts", "client:component-export": "AnalyticsCharts" })} </div> ` })} <!-- Recent Activity & Quick Stats --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> ${renderComponent($$result2, "Card", $$Card, { "class": "lg:col-span-2" }, { "default": ($$result3) => renderTemplate` <div class="p-6"> <h3 class="text-lg font-medium mb-4 text-center">
Recent Sessions
</h3> <div class="divide-y divide-border"> <div class="py-3 flex items-center justify-between"> <div class="flex items-center gap-3"> <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined text-sm">videocam</span> </div> <div> <p class="text-sm font-medium">CBT Practice Session</p> <p class="text-xs text-muted-foreground">30 minutes</p> </div> </div> <div class="text-right"> <p class="text-sm">Today</p> <p class="text-xs text-muted-foreground">10:30 AM</p> </div> </div> <div class="py-3 flex items-center justify-between"> <div class="flex items-center gap-3"> <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined text-sm">chat</span> </div> <div> <p class="text-sm font-medium">Therapy Chat Session</p> <p class="text-xs text-muted-foreground">45 minutes</p> </div> </div> <div class="text-right"> <p class="text-sm">Yesterday</p> <p class="text-xs text-muted-foreground">2:15 PM</p> </div> </div> <div class="py-3 flex items-center justify-between"> <div class="flex items-center gap-3"> <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"> <span class="material-symbols-outlined text-sm">videocam</span> </div> <div> <p class="text-sm font-medium">Mindfulness Practice</p> <p class="text-xs text-muted-foreground">20 minutes</p> </div> </div> <div class="text-right"> <p class="text-sm">2 days ago</p> <p class="text-xs text-muted-foreground">9:00 AM</p> </div> </div> </div> <div class="mt-4 text-center"> <a href="/sessions" class="text-sm text-primary hover:underline">
View all sessions
</a> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-6"> <h3 class="text-lg font-medium mb-4 text-center">
Improvement Areas
</h3> <div class="space-y-4"> <div> <div class="flex justify-between items-center mb-1"> <span class="text-sm">Active Listening</span> <span class="text-xs text-muted-foreground">85%</span> </div> <div class="w-full bg-border/50 rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 85%"></div> </div> </div> <div> <div class="flex justify-between items-center mb-1"> <span class="text-sm">Empathetic Responses</span> <span class="text-xs text-muted-foreground">72%</span> </div> <div class="w-full bg-border/50 rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 72%"></div> </div> </div> <div> <div class="flex justify-between items-center mb-1"> <span class="text-sm">CBT Techniques</span> <span class="text-xs text-muted-foreground">60%</span> </div> <div class="w-full bg-border/50 rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 60%"></div> </div> </div> <div> <div class="flex justify-between items-center mb-1"> <span class="text-sm">Trauma-Informed Care</span> <span class="text-xs text-muted-foreground">45%</span> </div> <div class="w-full bg-border/50 rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 45%"></div> </div> </div> </div> <div class="mt-6 text-center"> <a href="/resources" class="text-sm text-primary hover:underline">
View improvement resources
</a> </div> </div> ` })} </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/dashboard/index.astro", void 0);

const $$file = "/root/pixel/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
