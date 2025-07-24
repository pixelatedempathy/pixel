;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="02b3d867-980d-4581-a451-5a0e6bfbd385",e._sentryDebugIdIdentifier="sentry-dbid-02b3d867-980d-4581-a451-5a0e6bfbd385")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, h as renderSlot, a as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import 'clsx';
/* empty css                                         */
import { P as PrivacyDashboard } from '../../chunks/PrivacyDashboard_DWV1h-Mu.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { D as DashboardWidget, C as ChartWidget } from '../../chunks/ChartWidget_CXXAxRJj.mjs';
import { ArrowUpRight, ArrowDownRight, Minus, Search, Download, ArrowUp, ArrowDown } from 'lucide-react';
import { T as TableHeader, a as TableRow, b as TableHead, c as TableBody, d as TableCell } from '../../chunks/table_Cxoal68L.mjs';
import { I as Input } from '../../chunks/input_DnMLFOfd.mjs';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$AnalyticsDashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnalyticsDashboard;
  const {
    title = "Analytics Dashboard",
    description = "Monitor and analyze key metrics and performance data",
    columns = 2,
    widgetGap = "medium"
  } = Astro2.props;
  const gapClasses = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8"
  };
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  return renderTemplate`${maybeRenderHead()}<div class="analytics-dashboard" role="main" aria-labelledby="dashboard-title" data-astro-cid-fkakxftz> <header class="mb-6" data-astro-cid-fkakxftz> <h1 id="dashboard-title" class="text-2xl font-bold" data-astro-cid-fkakxftz>${title}</h1> ${description && renderTemplate`<p class="text-gray-600 dark:text-gray-400 mt-1" data-astro-cid-fkakxftz>${description}</p>`} </header> <div${addAttribute(`grid ${gridClasses[columns] || "grid-cols-1 lg:grid-cols-2"} ${gapClasses[widgetGap]}`, "class")} data-astro-cid-fkakxftz> ${renderSlot($$result, $$slots["default"])} </div> </div> <a href="#dashboard-title" class="skip-link" data-astro-cid-fkakxftz>Skip to dashboard content</a> `;
}, "/root/pixel/src/components/analytics/AnalyticsDashboard.astro", void 0);

function MetricWidget({
  title,
  description,
  metricName,
  value,
  previousValue,
  format = "number",
  prefix = "",
  suffix = "",
  isLoading: initialLoading = false,
  variant = "default",
  className = "",
  refreshInterval,
  fetchMetric
}) {
  const [currentValue, setCurrentValue] = React.useState(value);
  const [prevValue, setPrevValue] = React.useState(
    previousValue
  );
  const [isLoading, setIsLoading] = React.useState(initialLoading || !value);
  React.useEffect(() => {
    const loadData = async () => {
      if (fetchMetric) {
        try {
          setIsLoading(true);
          const result = await fetchMetric(metricName);
          setCurrentValue(result.value);
          setPrevValue(result.previousValue);
        } catch (error) {
          console.error(`Error fetching metric ${metricName}:`, error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadData();
    if (refreshInterval && fetchMetric) {
      const interval = setInterval(loadData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [metricName, fetchMetric, refreshInterval]);
  const calculateChange = () => {
    if (currentValue === void 0 || prevValue === void 0) {
      return null;
    }
    const current = typeof currentValue === "string" ? parseFloat(currentValue) : currentValue;
    const previous = typeof prevValue === "string" ? parseFloat(prevValue) : prevValue;
    if (isNaN(current) || isNaN(previous) || previous === 0) {
      return null;
    }
    return (current - previous) / previous * 100;
  };
  const percentChange = calculateChange();
  const formatValue = (val) => {
    if (val === void 0) {
      return "N/A";
    }
    const numValue = typeof val === "string" ? parseFloat(val) : val;
    if (isNaN(numValue)) {
      return "N/A";
    }
    let hours, minutes, seconds;
    switch (format) {
      case "currency":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(numValue);
      case "percentage":
        return `${numValue.toFixed(1)}%`;
      case "duration":
        hours = Math.floor(numValue / 3600);
        minutes = Math.floor(numValue % 3600 / 60);
        seconds = Math.floor(numValue % 60);
        if (hours > 0) {
          return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      default:
        return numValue.toLocaleString();
    }
  };
  const handleRefresh = async () => {
    if (fetchMetric) {
      try {
        setIsLoading(true);
        const result = await fetchMetric(metricName);
        setCurrentValue(result.value);
        setPrevValue(result.previousValue);
      } catch (error) {
        console.error(`Error refreshing metric ${metricName}:`, error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return /* @__PURE__ */ jsx(
    DashboardWidget,
    {
      title,
      description,
      isLoading,
      onRefresh: fetchMetric ? handleRefresh : void 0,
      className,
      variant,
      children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold", "aria-live": "polite", children: [
          /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
            title,
            " value"
          ] }),
          prefix,
          formatValue(currentValue),
          suffix
        ] }),
        percentChange !== null && /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-1 text-gray-500", children: "vs previous:" }),
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: `flex items-center font-medium ${percentChange > 0 ? "text-green-500" : percentChange < 0 ? "text-red-500" : "text-gray-500"}`,
              children: [
                percentChange > 0 ? /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }) : percentChange < 0 ? /* @__PURE__ */ jsx(ArrowDownRight, { className: "h-4 w-4 mr-1" }) : /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 mr-1" }),
                Math.abs(percentChange || 0).toFixed(1),
                "%"
              ]
            }
          )
        ] })
      ] })
    }
  );
}

function TableWidget({
  title,
  description,
  columns,
  data: initialData,
  isLoading: initialLoading = false,
  className = "",
  refreshInterval,
  enableSearch = true,
  enableExport = true,
  fetchData,
  pagination,
  ...props
}) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  useEffect(() => {
    if (fetchData === void 0) {
      return;
    }
    const loadData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData();
        setData(result);
      } catch (error2) {
        console.error("Error fetching table data:", error2);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
    let intervalId = null;
    if (refreshInterval && refreshInterval > 0) {
      intervalId = setInterval(loadData, refreshInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [fetchData, refreshInterval, setIsLoading, setData]);
  const handleSort = useCallback((key) => {
    setSortConfig((prevConfig) => {
      if (prevConfig?.key === key) {
        return {
          key,
          direction: prevConfig.direction === "asc" ? "desc" : "asc"
        };
      }
      return { key, direction: "asc" };
    });
  }, []);
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (row) => columns.some((column) => {
          const value = String(row[column.key] || "").toLowerCase();
          return value.includes(searchLower);
        })
      );
    }
    if (sortConfig) {
      const { key, direction } = sortConfig;
      result.sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];
        if (aValue === bValue) {
          return 0;
        }
        if (aValue == null) {
          return direction === "asc" ? -1 : 1;
        }
        if (bValue == null) {
          return direction === "asc" ? 1 : -1;
        }
        const comparison = String(aValue).localeCompare(String(bValue));
        return direction === "asc" ? comparison : -comparison;
      });
    }
    return result;
  }, [data, searchTerm, sortConfig, columns, pagination]);
  const handleExport = useCallback(() => {
    try {
      const headers = columns.map((col) => `"${col.label}"`).join(",");
      const rows = filteredAndSortedData.map(
        (row) => columns.map((col) => {
          const value = row[col.key];
          const escaped = String(value || "").replace(/"/g, '""');
          return `"${escaped}"`;
        }).join(",")
      ).join("\n");
      const csvContent = `${headers}
${rows}`;
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.toLowerCase().replace(/\s+/g, "-")}-export-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error2) {
      console.error("Error exporting data:", error2);
    }
  }, [data, columns, title]);
  return /* @__PURE__ */ jsx(
    DashboardWidget,
    {
      title,
      description,
      className,
      isLoading,
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          enableSearch && /* @__PURE__ */ jsxs("div", { className: "relative w-64", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Search...",
                className: "pl-8",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value)
              }
            )
          ] }),
          enableExport && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExport,
              disabled: data.length === 0,
              children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                "Export"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(TableHead, { children: column.sortable ? /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center space-x-1",
              onClick: () => column.sortable && handleSort(column.key),
              disabled: !column.sortable,
              "aria-label": `Sort by ${column.label}`,
              children: [
                /* @__PURE__ */ jsx("span", { children: column.label }),
                sortConfig?.key === column.key && (sortConfig.direction === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" }))
              ]
            }
          ) : column.label }, column.key)) }) }),
          /* @__PURE__ */ jsx(TableBody, { children: data.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "text-center py-8", children: "No data available" }) }) : filteredAndSortedData.map((row, rowIndex) => /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(TableCell, { children: column.render ? column.render(row[column.key], row) : String(row[column.key] || "") }, `${rowIndex}-${column.key}`)) }, row.id || `row-${rowIndex}`)) })
        ] }) })
      ] })
    }
  );
}

const $$Engagement = createComponent(async ($$result, $$props, $$slots) => {
  let metrics = null;
  let error = null;
  try {
    const res = await fetch("/api/analytics/engagement");
    if (!res.ok) throw new Error("Failed to fetch engagement metrics");
    metrics = await res.json();
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error";
  }
  const activityTableColumns = [
    { key: "user", label: "User ID", sortable: true },
    { key: "action", label: "Activity Type", sortable: true },
    {
      key: "duration",
      label: "Duration (min)",
      sortable: true,
      render: (value) => value.toFixed(1)
    },
    {
      key: "timestamp",
      label: "Time",
      sortable: true,
      render: (value) => new Date(value).toLocaleTimeString()
    },
    {
      key: "sessionScore",
      label: "Score",
      sortable: true,
      render: (value) => `<span class="${value >= 85 ? "text-green-500" : value >= 70 ? "text-yellow-500" : "text-red-500"}">${value}%</span>`
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Engagement Metrics | Analytics", "description": "Track and analyze user engagement metrics" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex flex-col lg:flex-row gap-8"> <!-- Sidebar --> <div class="w-full lg:w-[350px] space-y-6"> ${renderComponent($$result2, "PrivacyDashboard", PrivacyDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/analytics/PrivacyDashboard", "client:component-export": "PrivacyDashboard" })} <div class="bg-card rounded-lg border p-4"> <h3 class="text-lg font-semibold mb-3">Analytics Sections</h3> <ul class="space-y-2"> <li> <a href="/analytics" class="flex items-center py-2 px-3 hover:bg-primary/10 text-foreground hover:text-primary rounded-md transition-colors"> <span class="text-sm font-medium">Usage Analytics</span> </a> </li> <li> <a href="/analytics/engagement" class="flex items-center py-2 px-3 bg-primary/10 text-primary rounded-md"> <span class="text-sm font-medium">Engagement Metrics</span> </a> </li> <li> <a href="/analytics/conversions" class="flex items-center py-2 px-3 hover:bg-primary/10 text-foreground hover:text-primary rounded-md transition-colors"> <span class="text-sm font-medium">Conversion Tracking</span> </a> </li> <li> <a href="/admin/performance-dashboard" class="flex items-center py-2 px-3 hover:bg-primary/10 text-foreground hover:text-primary rounded-md transition-colors"> <span class="text-sm font-medium">Performance Metrics</span> </a> </li> </ul> </div> </div> <!-- Main Content --> <div class="flex-1"> ${renderComponent($$result2, "AnalyticsDashboard", $$AnalyticsDashboard, { "title": "Engagement Metrics", "description": "Track and analyze user engagement with your platform", "columns": 2, "widgetGap": "medium" }, { "default": async ($$result3) => renderTemplate`${error ? renderTemplate`<div class="col-span-2 text-center text-red-600 font-semibold py-8">
Failed to load engagement metrics: ${error} </div>` : !metrics ? renderTemplate`<div class="col-span-2 text-center text-gray-500 py-8">
Loading engagement metrics...
</div>` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "MetricWidget", MetricWidget, { "client:load": true, "title": "Total Sessions", "metricName": "total_sessions", "value": metrics.totalSessions, "previousValue": void 0, "client:component-hydration": "load", "client:component-path": "@/components/analytics/MetricWidget", "client:component-export": "MetricWidget" })} ${renderComponent($$result4, "MetricWidget", MetricWidget, { "client:load": true, "title": "Engagement Rate", "metricName": "engagement_rate", "value": metrics.engagementRate, "previousValue": void 0, "format": "percentage", "client:component-hydration": "load", "client:component-path": "@/components/analytics/MetricWidget", "client:component-export": "MetricWidget" })} ${renderComponent($$result4, "MetricWidget", MetricWidget, { "client:load": true, "title": "Avg. Session Duration", "metricName": "avg_session_duration", "value": metrics.avgSessionDuration, "previousValue": void 0, "suffix": " min", "client:component-hydration": "load", "client:component-path": "@/components/analytics/MetricWidget", "client:component-export": "MetricWidget" })} ${renderComponent($$result4, "MetricWidget", MetricWidget, { "client:load": true, "title": "Active Users", "metricName": "active_users", "value": metrics.activeUsers, "previousValue": void 0, "client:component-hydration": "load", "client:component-path": "@/components/analytics/MetricWidget", "client:component-export": "MetricWidget" })}  ${renderComponent($$result4, "ChartWidget", ChartWidget, { "client:load": true, "title": "Session Trends", "description": "Daily session count and unique users", "chartType": "line", "labels": metrics.sessionTrends.labels, "series": metrics.sessionTrends.series, "isTimeSeries": true, "allowRangeSelection": true, "height": 300, "client:component-hydration": "load", "client:component-path": "@/components/analytics/ChartWidget", "client:component-export": "ChartWidget" })} ${renderComponent($$result4, "ChartWidget", ChartWidget, { "client:load": true, "title": "Engagement Rate Trend", "description": "Daily engagement rate percentage", "chartType": "line", "labels": metrics.engagementRateTrend.labels, "series": metrics.engagementRateTrend.series, "isTimeSeries": true, "allowRangeSelection": true, "height": 300, "client:component-hydration": "load", "client:component-path": "@/components/analytics/ChartWidget", "client:component-export": "ChartWidget" })} ${renderComponent($$result4, "ChartWidget", ChartWidget, { "client:load": true, "title": "Session Duration Trend", "description": "Average daily session duration in minutes", "chartType": "line", "labels": metrics.sessionDurationTrend.labels, "series": metrics.sessionDurationTrend.series, "isTimeSeries": true, "allowRangeSelection": true, "height": 300, "client:component-hydration": "load", "client:component-path": "@/components/analytics/ChartWidget", "client:component-export": "ChartWidget" })} ${renderComponent($$result4, "ChartWidget", ChartWidget, { "client:load": true, "title": "Interaction Breakdown", "description": "Percentage distribution of user interactions", "chartType": "pie", "labels": metrics.interactionBreakdown.map((i) => i.label), "series": metrics.interactionBreakdown, "height": 300, "client:component-hydration": "load", "client:component-path": "@/components/analytics/ChartWidget", "client:component-export": "ChartWidget" })}  <div class="col-span-1 lg:col-span-2"> ${renderComponent($$result4, "TableWidget", TableWidget, { "client:load": true, "title": "Recent Activity", "description": "Latest user engagement events", "columns": activityTableColumns, "data": metrics.recentActivity, "enableSearch": true, "enableExport": true, "pagination": { pageSize: 5 }, "client:component-hydration": "load", "client:component-path": "@/components/analytics/TableWidget", "client:component-export": "TableWidget" })} </div> ` })}`}` })} </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/analytics/engagement.astro", void 0);

const $$file = "/root/pixel/src/pages/analytics/engagement.astro";
const $$url = "/analytics/engagement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Engagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
