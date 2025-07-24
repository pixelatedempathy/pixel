;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="55ac41ab-296e-4423-b68e-568e825b2cfc",e._sentryDebugIdIdentifier="sentry-dbid-55ac41ab-296e-4423-b68e-568e825b2cfc")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, ar as unescapeHTML, a as renderTemplate, d as renderScript, r as renderComponent } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BYnqm6jE.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import { s as styles } from '../../chunks/comparative-progress.54a46817_BvV9vBsh.mjs';
import { c as cn } from '../../chunks/utils_C7j64O8V.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

function anonymizeUserId(userId) {
  return `anon-${userId.split("").reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0) | 0, 0).toString(36).replace("-", "").substring(0, 10)}`;
}
function useComparativeProgress(userId, metric, cohort, dateRange) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const validateInputs = useCallback(() => {
    if (!userId || typeof userId !== "string" || userId.trim() === "") {
      return {
        isValid: false,
        errorMessage: "Invalid user ID: must be a non-empty string"
      };
    }
    if (!metric || typeof metric !== "string" || metric.trim() === "") {
      return {
        isValid: false,
        errorMessage: "Invalid metric: must be a non-empty string"
      };
    }
    if (!cohort || typeof cohort !== "string" || cohort.trim() === "") {
      return {
        isValid: false,
        errorMessage: "Invalid cohort: must be a non-empty string"
      };
    }
    if (!dateRange || typeof dateRange !== "object") {
      return {
        isValid: false,
        errorMessage: "Invalid dateRange: must be an object"
      };
    }
    if (!dateRange.startDate || !/^\d{4}-\d{2}-\d{2}$/.test(dateRange.startDate)) {
      return {
        isValid: false,
        errorMessage: "Invalid startDate: must be in YYYY-MM-DD format"
      };
    }
    if (!dateRange.endDate || !/^\d{4}-\d{2}-\d{2}$/.test(dateRange.endDate)) {
      return {
        isValid: false,
        errorMessage: "Invalid endDate: must be in YYYY-MM-DD format"
      };
    }
    if (new Date(dateRange.startDate) > new Date(dateRange.endDate)) {
      return {
        isValid: false,
        errorMessage: "Invalid dateRange: startDate must be before or equal to endDate"
      };
    }
    return { isValid: true, errorMessage: null };
  }, [userId, metric, cohort, dateRange]);
  const fetchData = useCallback(async () => {
    const { isValid, errorMessage } = validateInputs();
    if (!isValid) {
      setError(errorMessage);
      setLoading(false);
      setData(null);
      return;
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    setLoading(true);
    setError(null);
    try {
      const anonymizedUserId = anonymizeUserId(userId);
      const params = new URLSearchParams({
        anonymizedUserId,
        metric,
        cohort,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate
      });
      const response = await fetch(
        `/api/analytics/comparative-progress?${params.toString()}`,
        { signal: controller.signal }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch progress data");
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || "Failed to process progress data");
      }
      setData(result.data);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [userId, metric, cohort, dateRange, validateInputs]);
  useEffect(() => {
    fetchData();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
}

function ComparativeProgressControls({
  metric,
  setMetric,
  cohort,
  setCohort,
  dateRange,
  setDateRange,
  isLoading,
  availableMetrics,
  availableCohorts
}) {
  const [dateError, setDateError] = useState(null);
  const validateDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return true;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start <= end;
  };
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (validateDateRange(newStartDate, dateRange.endDate)) {
      setDateRange({ ...dateRange, startDate: newStartDate });
      setDateError(null);
    } else {
      setDateError("Start date cannot be after end date");
    }
  };
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (validateDateRange(dateRange.startDate, newEndDate)) {
      setDateRange({ ...dateRange, endDate: newEndDate });
      setDateError(null);
    } else {
      setDateError("End date cannot be before start date");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "metric-select",
          className: "block text-sm font-medium mb-1",
          children: "Metric"
        }
      ),
      /* @__PURE__ */ jsx(
        "select",
        {
          id: "metric-select",
          value: metric,
          onChange: (e) => setMetric(e.target.value),
          className: "w-full sm:w-auto px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
          disabled: isLoading,
          children: availableMetrics.map((option) => /* @__PURE__ */ jsx("option", { value: option.id, children: option.label }, option.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "cohort-select",
          className: "block text-sm font-medium mb-1",
          children: "Comparison Group"
        }
      ),
      /* @__PURE__ */ jsx(
        "select",
        {
          id: "cohort-select",
          value: cohort,
          onChange: (e) => setCohort(e.target.value),
          className: "w-full sm:w-auto px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
          disabled: isLoading,
          children: availableCohorts.map((option) => /* @__PURE__ */ jsx("option", { value: option.id, children: option.label }, option.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "date-range", className: "block text-sm font-medium mb-1", children: "Time Period" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              id: "start-date",
              value: dateRange.startDate,
              onChange: handleStartDateChange,
              className: `w-full sm:w-auto px-3 py-2 bg-white dark:bg-gray-800 border ${dateError ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`,
              disabled: isLoading
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "to" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              id: "end-date",
              value: dateRange.endDate,
              onChange: handleEndDateChange,
              className: `w-full sm:w-auto px-3 py-2 bg-white dark:bg-gray-800 border ${dateError ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`,
              disabled: isLoading
            }
          )
        ] }),
        dateError && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs mt-1", children: dateError })
      ] })
    ] })
  ] });
}

const ProgressDataDisplay = ({
  labels = [],
  userData = [],
  benchmarkData = [],
  color,
  title,
  benchmarkLabel
}) => {
  const hasValidData = labels.length > 0 && userData.length > 0 && benchmarkData.length > 0 && labels.length === userData.length && labels.length === benchmarkData.length;
  const formattedLabels = Array.isArray(labels) ? labels.join(", ") : "";
  const formattedUserData = Array.isArray(userData) ? userData.join(", ") : "";
  const formattedBenchmarkData = Array.isArray(benchmarkData) ? benchmarkData.join(", ") : "";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles["chartContainer"],
      role: "region",
      "aria-labelledby": "data-title data-description",
      children: [
        /* @__PURE__ */ jsx("h4", { id: "data-title", className: styles["chartTitle"], children: title }),
        hasValidData ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("p", { id: "data-description", className: styles["chartDescription"], children: [
            "Data for: ",
            formattedLabels
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles["dataRow"], children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: styles["colorIndicator"],
                style: { "--indicator-color": color },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: styles["dataText"], children: [
              /* @__PURE__ */ jsx("span", { className: styles["dataLabel"], children: "User Data:" }),
              " ",
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles["userData"],
                  style: { "--user-data-color": color },
                  children: formattedUserData
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
                " (represented in ",
                color,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles["dataRow"], children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `${styles["colorIndicator"]} ${styles["benchmarkIndicator"]}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: styles["dataText"], children: [
              /* @__PURE__ */ jsxs("span", { className: styles["dataLabel"], children: [
                "Benchmark (",
                benchmarkLabel,
                "):"
              ] }),
              " ",
              formattedBenchmarkData
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sr-only", "aria-live": "polite", children: [
            "This data display compares user data ",
            formattedUserData,
            " with benchmark data for ",
            benchmarkLabel,
            " ",
            formattedBenchmarkData,
            " across the following categories: ",
            formattedLabels,
            "."
          ] })
        ] }) : /* @__PURE__ */ jsx("p", { className: styles["noDataMessage"], children: "No valid data available to display" })
      ]
    }
  );
};

const TREND_CONFIGS = {
  info: {
    color: "blue",
    label: "Information",
    icon: "ℹ️"
    // Using emoji as placeholder, consider importing proper icons
  },
  success: {
    color: "green",
    label: "Success",
    icon: "✅"
  },
  warning: {
    color: "orange",
    label: "Warning",
    icon: "⚠️"
  }
};
const COLOR_MAP = {
  blue: "rgba(0, 0, 255, $opacity)",
  green: "rgba(0, 128, 0, $opacity)",
  orange: "rgba(255, 165, 0, $opacity)"
};
const getColorWithOpacity = (color, opacity) => {
  const template = COLOR_MAP[color] || "rgba(0, 0, 0, $opacity)";
  return template.replace("$opacity", opacity.toString());
};
const InsightMessage = ({
  summary,
  trend
}) => {
  const { color, label, icon } = TREND_CONFIGS[trend];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        border: `1px solid ${color}`,
        padding: "10px",
        backgroundColor: getColorWithOpacity(color, 0.1)
        // Proper 10% opacity with rgba
      },
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: { display: "flex", alignItems: "center", marginBottom: "4px" },
            children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { marginRight: "8px" }, children: icon }),
              /* @__PURE__ */ jsx("span", { style: { fontWeight: "bold", color }, children: label })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { children: summary })
      ]
    }
  );
};

const PercentileBar = ({
  rank,
  label
}) => {
  const validRank = Math.min(Math.max(0, isNaN(rank) ? 0 : rank), 100);
  const getBarColor = (value) => {
    if (value < 30) {
      return "#d9534f";
    }
    if (value < 70) {
      return "#f0ad4e";
    }
    return "#5cb85c";
  };
  const barColor = getBarColor(validRank);
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: { border: "1px solid #eee", padding: "10px", margin: "10px 0" },
      "aria-label": `Percentile rank visualization: ${validRank}%`,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: { width: "100%", backgroundColor: "#ddd" },
          role: "progressbar",
          "aria-valuenow": validRank,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": label || `Percentile rank: ${validRank}%`,
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                width: `${validRank}%`,
                backgroundColor: barColor,
                height: "20px",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "30px"
                // Ensure text is visible even for very low percentiles
              },
              children: [
                validRank,
                "%"
              ]
            }
          )
        }
      )
    }
  );
};

const LoadingSpinner = () => /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center py-12", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500" }) });
const ErrorState = ({
  message,
  retry
}) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300 rounded-md", children: [
  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Error loading data" }),
  /* @__PURE__ */ jsx("p", { className: "text-sm", children: message }),
  /* @__PURE__ */ jsx(
    "button",
    {
      onClick: retry,
      className: "mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 dark:bg-red-800/30 dark:hover:bg-red-800/50 rounded-md text-sm font-medium",
      children: "Retry"
    }
  )
] });
const EmptyState = () => /* @__PURE__ */ jsxs("div", { className: "p-8 text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-md", children: [
  /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No data available for the selected metric and time period." }),
  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 dark:text-gray-500 mt-2", children: "Try selecting a different metric or expanding the date range." })
] });
const availableMetricsForDisplay = [
  { id: "phq9_score", label: "Depression (PHQ-9)", color: "#3b82f6" },
  { id: "gad7_score", label: "Anxiety (GAD-7)", color: "#8b5cf6" },
  { id: "engagement_rating", label: "Session Engagement", color: "#10b981" },
  { id: "treatment_adherence", label: "Treatment Adherence", color: "#f59e0b" }
];
function getMetricConfig(metricId) {
  const config = availableMetricsForDisplay.find((m) => m.id === metricId);
  return config || { label: metricId, color: "#6366f1" };
}
function getDefaultStartDate() {
  const date = /* @__PURE__ */ new Date();
  date.setMonth(date.getMonth() - 3);
  return date.toISOString().split("T")[0];
}
function getDefaultEndDate() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function prepareChartData(progressData) {
  if (!progressData || !progressData.userProgressSnapshots || progressData.userProgressSnapshots.length === 0) {
    return { labels: [], userData: [], benchmarkData: [] };
  }
  const sortedSnapshots = [...progressData.userProgressSnapshots].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const labels = sortedSnapshots.map((snapshot) => {
    const date = new Date(snapshot.date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });
  const userData = sortedSnapshots.map((snapshot) => snapshot.metricValue);
  const benchmarkValues = progressData.benchmarkData ? Array(labels.length).fill(progressData.benchmarkData.averageValue) : [];
  return { labels, userData, benchmarkData: benchmarkValues };
}
function trendToAlertType(trend) {
  if (trend === "improving") {
    return "success";
  }
  if (trend === "declining") {
    return "warning";
  }
  return "info";
}
function clampValue(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function ComparativeProgressDisplay({
  userId,
  defaultMetric = "phq9_score",
  defaultCohort = "all_users",
  className = ""
}) {
  const [metric, setMetric] = useState(defaultMetric);
  const [cohort, setCohort] = useState(defaultCohort);
  const [dateRange, setDateRange] = useState({
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate()
  });
  const { data, loading, error, refetch } = useComparativeProgress(
    userId,
    metric,
    cohort,
    dateRange
  );
  const {
    labels,
    userData,
    benchmarkData: chartBenchmarkData
  } = prepareChartData(data);
  const { label: metricLabel, color: chartColor } = getMetricConfig(metric);
  const availableCohorts = [
    { id: "all_users", label: "All Users" },
    { id: "similar_age", label: "Similar Age Group" },
    { id: "similar_condition", label: "Similar Condition" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsx(
      ComparativeProgressControls,
      {
        metric,
        setMetric,
        cohort,
        setCohort,
        dateRange,
        setDateRange,
        isLoading: loading,
        availableMetrics: availableMetricsForDisplay,
        availableCohorts
      }
    ),
    loading && /* @__PURE__ */ jsx(LoadingSpinner, {}),
    error && !loading && /* @__PURE__ */ jsx(ErrorState, { message: error, retry: refetch }),
    !loading && !error && (!data || !data.userProgressSnapshots || data.userProgressSnapshots.length === 0) && /* @__PURE__ */ jsx(EmptyState, {}),
    !loading && !error && data && data.userProgressSnapshots && data.userProgressSnapshots.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        ProgressDataDisplay,
        {
          labels,
          userData,
          benchmarkData: chartBenchmarkData,
          color: chartColor,
          title: `${metricLabel} Progress`,
          benchmarkLabel: data.benchmarkData?.benchmarkDescription || "Average"
        }
      ),
      data.comparisonInsights?.narrativeSummary && /* @__PURE__ */ jsx(
        InsightMessage,
        {
          summary: data.comparisonInsights.narrativeSummary,
          trend: trendToAlertType(data.comparisonInsights.trend)
        }
      ),
      data.comparisonInsights?.percentileRank != null && /* @__PURE__ */ jsx(
        PercentileBar,
        {
          rank: clampValue(
            data.comparisonInsights.percentileRank,
            0,
            100
          )
        }
      )
    ] })
  ] });
}

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Alert;
  const {
    variant = "info",
    title,
    description,
    icon,
    dismissible = false,
    class: className = "",
    actions,
    ...props
  } = Astro2.props;
  const baseClasses = "relative flex p-4 rounded-md border";
  const variantClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-200",
    success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200",
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200"
  };
  const defaultIcons = {
    info: `<svg class="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
  </svg>`,
    success: `<svg class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>`,
    warning: `<svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
  </svg>`,
    error: `<svg class="w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
  </svg>`
  };
  const displayIcon = icon || defaultIcons[variant];
  const classes = cn(baseClasses, variantClasses[variant], className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} role="alert"${spreadAttributes(props)}> <!-- Icon --> <div class="flex-shrink-0 mr-3">${unescapeHTML(displayIcon)}</div> <!-- Content --> <div class="flex-1"> ${title && renderTemplate`<h3 class="text-sm font-medium">${title}</h3>`} ${description && renderTemplate`<div class="text-sm mt-1">${description}</div>`} ${actions && renderTemplate`<div class="mt-3">${actions}</div>`} </div> <!-- Dismiss button --> ${dismissible && renderTemplate`<button type="button" class="alert-dismiss absolute top-1 right-1 inline-flex text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none p-1.5 rounded-md" aria-label="Dismiss alert"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button>`} </div> ${dismissible && renderTemplate`${renderScript($$result, "/root/pixel/src/components/ui/Alert.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/root/pixel/src/components/ui/Alert.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$ComparativeProgress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComparativeProgress;
  const isAuthenticated = Astro2.cookies.has("auth-token");
  const userId = isAuthenticated ? "user-123" : null;
  if (!isAuthenticated) {
    return Astro2.redirect("/login?redirect=/analytics/comparative-progress");
  }
  const title = "Comparative Progress Analysis";
  const description = "Compare your progress against anonymized benchmarks and gain insights into your therapeutic journey.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Breadcrumbs --> <nav class="mb-6" aria-label="Breadcrumb"> <ol class="flex space-x-2 text-sm text-gray-500 dark:text-gray-400"> <li> <a href="/" class="hover:text-gray-700 dark:hover:text-gray-300">Home</a> <span class="mx-2">/</span> </li> <li> <a href="/analytics" class="hover:text-gray-700 dark:hover:text-gray-300">Analytics</a> <span class="mx-2">/</span> </li> <li class="font-medium text-gray-900 dark:text-gray-100" aria-current="page">
Comparative Progress
</li> </ol> </nav> <!-- Page header --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
Comparative Progress Analysis
</h1> <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
Compare your progress against anonymized benchmarks and gain insights
        into your therapeutic journey.
</p> </div> <!-- Privacy notice --> ${renderComponent($$result2, "Alert", $$Alert, { "type": "info", "class": "mb-6" }, { "default": ($$result3) => renderTemplate` <p> <strong>Privacy Notice:</strong> All comparisons use anonymized data. Your
        personal information is never shared with others. Benchmarks are derived
        from aggregated, de-identified data in compliance with privacy regulations.
</p> ` })} <!-- Main content --> <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6"> ${renderComponent($$result2, "ComparativeProgressDisplay", ComparativeProgressDisplay, { "userId": userId, "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/analytics/ComparativeProgressDisplay", "client:component-export": "ComparativeProgressDisplay" })} </div> <!-- Additional information --> <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6"> <h2 class="text-xl font-semibold mb-4">Understanding Your Results</h2> <p class="text-gray-600 dark:text-gray-400 mb-4">
Comparative progress analysis helps you understand how your
          therapeutic journey compares to others with similar profiles. This can
          provide context for your progress and help identify areas where
          additional focus might be beneficial.
</p> <p class="text-gray-600 dark:text-gray-400">
Remember that each person's journey is unique, and these comparisons
          are meant to provide context, not judgment. Always discuss your
          results with your healthcare provider.
</p> </div> <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6"> <h2 class="text-xl font-semibold mb-4">About the Metrics</h2> <ul class="space-y-3 text-gray-600 dark:text-gray-400"> <li> <strong>PHQ-9 Score:</strong> Measures depression severity (lower scores
            indicate improvement)
</li> <li> <strong>GAD-7 Score:</strong> Measures anxiety severity (lower scores
            indicate improvement)
</li> <li> <strong>Session Engagement:</strong> Measures participation in therapy
            sessions (higher scores indicate improvement)
</li> <li> <strong>Treatment Adherence:</strong> Measures consistency in following
            treatment plans (higher scores indicate improvement)
</li> </ul> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/analytics/comparative-progress.astro", void 0);

const $$file = "/root/pixel/src/pages/analytics/comparative-progress.astro";
const $$url = "/analytics/comparative-progress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComparativeProgress,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
