;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ccdce698-1392-439b-8819-0c311410983a",e._sentryDebugIdIdentifier="sentry-dbid-ccdce698-1392-439b-8819-0c311410983a")}catch(e){}}();import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useState, useRef, useEffect } from 'react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from './card_CotvXO56.mjs';
import './astro/server_bjkJ-nhl.mjs';
import { S as Skeleton } from './skeleton_DtCSJNlu.mjs';
import { RefreshCw } from 'lucide-react';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select_BVcDabYe.mjs';

function DashboardWidget({
  title,
  description,
  isLoading = false,
  onRefresh,
  className = "",
  children,
  actions,
  variant = "default"
}) {
  const titleId = useId();
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: `dashboard-widget ${className}`,
      role: "region",
      "aria-labelledby": titleId,
      children: [
        /* @__PURE__ */ jsx(CardHeader, { className: variant === "compact" ? "pb-2" : "pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              CardTitle,
              {
                id: titleId,
                className: variant === "compact" ? "text-lg" : "text-xl",
                children: title
              }
            ),
            description && /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", children: description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            onRefresh && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onRefresh,
                className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                "aria-label": "Refresh data",
                children: /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 text-gray-500" })
              }
            ),
            actions
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-[20px] w-[80%] rounded-md" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-[20px] w-[60%] rounded-md" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-[20px] w-[70%] rounded-md" })
        ] }) : children })
      ]
    }
  );
}

function ChartWidget({
  title,
  description,
  chartType,
  labels: initialLabels,
  series: initialSeries,
  isTimeSeries = false,
  height = 300,
  allowRangeSelection = false,
  isLoading: initialLoading = false,
  className = "",
  refreshInterval,
  fetchData
}) {
  const [labels, setLabels] = useState(initialLabels);
  const [series, setSeries] = useState(
    initialSeries
  );
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [range, setRange] = useState("week");
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      import('chart.js').then((ChartJS) => {
        ChartJS.Chart.register(
          ChartJS.CategoryScale,
          ChartJS.LinearScale,
          ChartJS.PointElement,
          ChartJS.LineElement,
          ChartJS.BarElement,
          ChartJS.ArcElement,
          ChartJS.Tooltip,
          ChartJS.Legend
        );
        const ctx = chartRef.current?.getContext("2d");
        if (ctx) {
          if (chart) {
            chart.destroy();
          }
          const config = createChartConfig(chartType, labels, series);
          const newChart = new ChartJS.Chart(
            ctx,
            config
          );
          setChart(newChart);
        }
      });
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartType, labels, series, isTimeSeries, chart]);
  const createChartConfig = (type, chartLabels, chartSeries) => {
    const defaultColors = [
      "rgba(59, 130, 246, 0.5)",
      // Blue
      "rgba(16, 185, 129, 0.5)",
      // Green
      "rgba(249, 115, 22, 0.5)",
      // Orange
      "rgba(139, 92, 246, 0.5)",
      // Purple
      "rgba(236, 72, 153, 0.5)",
      // Pink
      "rgba(245, 158, 11, 0.5)"
      // Amber
    ];
    if (type === "pie" || type === "doughnut") {
      const dataPoints = chartSeries;
      return {
        type,
        data: {
          labels: dataPoints.map((dp) => dp.label),
          datasets: [
            {
              data: dataPoints.map((dp) => dp.value),
              backgroundColor: dataPoints.map(
                (dp, i) => dp.color || defaultColors[i % defaultColors.length]
              ),
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom"
            }
          }
        }
      };
    }
    const multiSeries = chartSeries;
    return {
      type,
      data: {
        labels: chartLabels,
        datasets: multiSeries.map((series2, i) => ({
          label: series2.name,
          data: series2.data,
          backgroundColor: series2.color || defaultColors[i % defaultColors.length],
          borderColor: series2.color || defaultColors[i % defaultColors.length]?.replace("0.5", "1") || "rgba(59, 130, 246, 1)",
          borderWidth: type === "line" ? 2 : 1,
          tension: 0.4,
          fill: type === "line" ? false : void 0
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)"
            }
          }
        },
        plugins: {
          legend: {
            position: "bottom",
            display: multiSeries.length > 1
          },
          tooltip: {
            mode: "index",
            intersect: false
          }
        },
        interaction: {
          mode: "nearest",
          axis: "x",
          intersect: false
        }
      }
    };
  };
  useEffect(() => {
    const loadData = async () => {
      if (fetchData) {
        try {
          setIsLoading(true);
          const data = await fetchData(range);
          setLabels(data.labels);
          setSeries(data.series);
        } catch (error) {
          console.error("Error fetching chart data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadData();
    if (refreshInterval && fetchData) {
      const interval = setInterval(loadData, refreshInterval);
      return () => clearInterval(interval);
    }
    return void 0;
  }, [range, fetchData, refreshInterval]);
  const handleRefresh = () => {
    if (fetchData) {
      const refreshAsync = async () => {
        try {
          setIsLoading(true);
          const data = await fetchData(range);
          setLabels(data.labels);
          setSeries(data.series);
        } catch (error) {
          console.error("Error refreshing chart data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      refreshAsync();
    }
  };
  const rangeSelector = allowRangeSelection ? /* @__PURE__ */ jsxs(Select, { value: range, onValueChange: (value) => setRange(value), children: [
    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[100px] h-8 text-xs", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Time range" }) }),
    /* @__PURE__ */ jsxs(SelectContent, { children: [
      /* @__PURE__ */ jsx(SelectItem, { value: "day", children: "Day" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "week", children: "Week" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "month", children: "Month" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "quarter", children: "Quarter" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "year", children: "Year" })
    ] })
  ] }) : null;
  return /* @__PURE__ */ jsx(
    DashboardWidget,
    {
      title,
      description: description || "",
      isLoading,
      ...fetchData && { onRefresh: handleRefresh },
      className,
      actions: rangeSelector,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: { height: `${height}px` },
          "aria-label": description ? `${title}: ${description}` : title,
          role: "img",
          children: [
            /* @__PURE__ */ jsx("div", { className: "sr-only", children: description ? `${title}: ${description}` : title }),
            /* @__PURE__ */ jsx("canvas", { ref: chartRef })
          ]
        }
      )
    }
  );
}

export { ChartWidget as C, DashboardWidget as D };
