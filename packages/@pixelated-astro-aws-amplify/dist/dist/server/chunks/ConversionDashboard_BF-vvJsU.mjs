;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cee2e50a-1393-429a-9fa7-727430f55ca6",e._sentryDebugIdIdentifier="sentry-dbid-cee2e50a-1393-429a-9fa7-727430f55ca6")}catch(e){}}();import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { A as AnalyticsService } from './PrivacyDashboard_DWV1h-Mu.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from './card_BfnhUXNW.mjs';
import './astro/server_t-wqd6mp.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from './tabs_C15Tyo9L.mjs';
import { B as Button } from './button_QWh7Abi4.mjs';
import { RefreshCw, Download, Filter } from 'lucide-react';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select_BdS8I9Y_.mjs';

const IconRefresh = (props) => /* @__PURE__ */ jsx(
  RefreshCw,
  {
    className: props.className,
    size: props.size,
    strokeWidth: props.strokeWidth
  }
);
const IconDownload = (props) => /* @__PURE__ */ jsx(
  Download,
  {
    className: props.className,
    size: props.size,
    strokeWidth: props.strokeWidth
  }
);
const IconFilter = (props) => /* @__PURE__ */ jsx(
  Filter,
  {
    className: props.className,
    size: props.size,
    strokeWidth: props.strokeWidth
  }
);

function ConversionDashboard() {
  const [period, setPeriod] = useState("weekly");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [conversionEvents, setConversionEvents] = useState(
    []
  );
  const [activeTab, setActiveTab] = useState("overview");
  const analytics = AnalyticsService.getInstance();
  const loadConversionData = useCallback(async () => {
    setIsLoading(true);
    try {
      const events = analytics.getEvents().filter((event) => event.eventType === "conversion_event");
      const conversions = events.map((event) => ({
        conversionId: event.data["conversionId"],
        value: event.data["value"],
        timestamp: event.timestamp,
        path: event.data["path"],
        source: event.data["source"],
        ...event.data
      }));
      const filtered = filter === "all" ? conversions : conversions.filter((c) => String(c.conversionId) === filter);
      setConversionEvents(filtered);
    } catch (error) {
      console.error("Failed to load conversion data", error);
    } finally {
      setIsLoading(false);
    }
  }, [analytics, filter]);
  useEffect(() => {
    loadConversionData();
  }, [period, filter, loadConversionData]);
  const summaryData = useMemo(() => {
    const conversionTypes = {};
    conversionEvents.forEach((event) => {
      if (!conversionTypes[event.conversionId]) {
        conversionTypes[event.conversionId] = [];
      }
      conversionTypes[event.conversionId].push(event);
    });
    return Object.entries(conversionTypes).map(([id, events]) => {
      const totalValue = events.reduce(
        (sum, event) => sum + (event.value || 0),
        0
      );
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1e3;
      const trend = Array(7).fill(0).map((_, i) => {
        const dayStart = now - (6 - i) * oneDay;
        const dayEnd = dayStart + oneDay;
        return events.filter(
          (e) => e.timestamp >= dayStart && e.timestamp < dayEnd
        ).length;
      });
      return {
        id,
        count: events.length,
        totalValue,
        conversionRate: events.length / 1e3 * 100,
        // Mockup rate based on 1000 page views
        trend
      };
    });
  }, [conversionEvents]);
  const sourceData = useMemo(() => {
    const sources = {};
    conversionEvents.forEach((event) => {
      const source = event.source || "direct";
      if (!sources[source]) {
        sources[source] = { count: 0, value: 0 };
      }
      sources[source].count++;
      sources[source].value += event.value || 0;
    });
    const totalCount = conversionEvents.length;
    return Object.entries(sources).map(([source, data]) => ({
      source,
      count: data.count,
      value: data.value,
      percentage: data.count / totalCount * 100
    }));
  }, [conversionEvents]);
  const pageData = useMemo(() => {
    const pages = {};
    conversionEvents.forEach((event) => {
      const path = event.path || "(not set)";
      if (!pages[path]) {
        pages[path] = { count: 0, value: 0 };
      }
      pages[path].count++;
      pages[path].value += event.value || 0;
    });
    const pageViews = {
      "/": 300,
      "/about": 120,
      "/products": 200,
      "/contact": 80,
      "/login": 150,
      "/signup": 100,
      "/checkout": 50,
      "(not set)": 50
    };
    return Object.entries(pages).map(([path, data]) => ({
      path,
      count: data.count,
      value: data.value,
      conversionRate: data.count / (pageViews[path] || 1) * 100
    }));
  }, [conversionEvents]);
  const timeChartData = useMemo(() => {
    let labels = [];
    const now = /* @__PURE__ */ new Date();
    if (period === "daily") {
      labels = Array(7).fill(0).map((_, i) => {
        const date = /* @__PURE__ */ new Date();
        date.setDate(now.getDate() - (6 - i));
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric"
        });
      });
    } else if (period === "weekly") {
      labels = Array(6).fill(0).map((_, i) => {
        const date = /* @__PURE__ */ new Date();
        date.setDate(now.getDate() - (5 - i) * 7);
        return `Week ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
      });
    } else {
      labels = Array(6).fill(0).map((_, i) => {
        const date = /* @__PURE__ */ new Date();
        date.setMonth(now.getMonth() - (5 - i));
        return date.toLocaleDateString("en-US", { month: "short" });
      });
    }
    return {
      labels,
      datasets: [
        {
          label: "Conversions",
          data: [12, 19, 15, 22, 24, 28],
          backgroundColor: "rgba(99, 102, 241, 0.5)",
          borderColor: "rgb(99, 102, 241)",
          borderWidth: 1
        }
      ]
    };
  }, [period]);
  const typeChartData = useMemo(() => {
    return {
      labels: summaryData.map((item) => item.id),
      datasets: [
        {
          label: "Count",
          data: summaryData.map((item) => item.count),
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)"
          ]
        }
      ]
    };
  }, [summaryData]);
  const exportToCsv = () => {
    if (conversionEvents.length === 0) {
      return;
    }
    const headers = ["Conversion ID", "Value", "Timestamp", "Source", "Path"];
    const csvRows = [
      headers.join(","),
      ...conversionEvents.map(
        (event) => [
          event.conversionId,
          event.value || 0,
          new Date(event.timestamp).toISOString(),
          event.source || "direct",
          event.path || "(not set)"
        ].join(",")
      )
    ];
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `conversions-${(/* @__PURE__ */ new Date()).toISOString()}.csv`);
    link.click();
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold", children: "Conversion Tracking" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Track and analyze conversion events across your application" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: loadConversionData,
            disabled: isLoading,
            children: [
              /* @__PURE__ */ jsx(IconRefresh, { className: "h-4 w-4 mr-2" }),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: exportToCsv,
            disabled: isLoading || conversionEvents.length === 0,
            children: [
              /* @__PURE__ */ jsx(IconDownload, { className: "h-4 w-4 mr-2" }),
              "Export"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between mb-6 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(IconFilter, { className: "h-4 w-4 text-gray-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Filter:" })
          ] }),
          /* @__PURE__ */ jsxs(Select, { value: filter, onValueChange: setFilter, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Conversions" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "signup", children: "Signup" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "purchase", children: "Purchase" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "download", children: "Download" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "contact", children: "Contact" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: period === "daily" ? "default" : "outline",
              size: "sm",
              onClick: () => setPeriod("daily"),
              children: "Daily"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: period === "weekly" ? "default" : "outline",
              size: "sm",
              onClick: () => setPeriod("weekly"),
              children: "Weekly"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: period === "monthly" ? "default" : "outline",
              size: "sm",
              onClick: () => setPeriod("monthly"),
              children: "Monthly"
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-64", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" }) }) : /* @__PURE__ */ jsxs(
        Tabs,
        {
          defaultValue: "overview",
          value: activeTab,
          onValueChange: setActiveTab,
          children: [
            /* @__PURE__ */ jsxs(TabsList, { className: "mb-6", children: [
              /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", children: "Overview" }),
              /* @__PURE__ */ jsx(TabsTrigger, { value: "sources", children: "Traffic Sources" }),
              /* @__PURE__ */ jsx(TabsTrigger, { value: "pages", children: "Pages" }),
              /* @__PURE__ */ jsx(TabsTrigger, { value: "events", children: "Event Log" })
            ] }),
            /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: summaryData.length > 0 ? summaryData.map((summary) => /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg capitalize", children: summary.id }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Count:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: summary.count })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Value:" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      "$",
                      summary.totalValue.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Conversion Rate:" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      summary.conversionRate.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Last 7 days:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex items-end space-x-1 h-8", children: summary.trend.map((value, i) => /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "bg-primary rounded-sm w-full",
                        style: {
                          height: `${Math.max(20, value / Math.max(...summary.trend) * 100)}%`,
                          minHeight: "4px"
                        }
                      },
                      `trend-${summary.id}-${i}-${value}`
                    )) })
                  ] })
                ] }) })
              ] }, summary.id)) : /* @__PURE__ */ jsx(Card, { className: "col-span-3", children: /* @__PURE__ */ jsx(CardContent, { className: "py-6", children: /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500", children: "No conversion data available for the selected filters." }) }) }) }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Conversions Over Time" }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "h-[300px] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-500", children: [
                  "[Chart Component Would Render Here with",
                  " ",
                  timeChartData.labels.join(", "),
                  "]"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Conversion Types Distribution" }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "h-[300px] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-500", children: [
                  "[Pie Chart Would Render Here with",
                  " ",
                  typeChartData.labels.join(", "),
                  "]"
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx(TabsContent, { value: "sources", className: "space-y-4", children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsx(CardTitle, { children: "Traffic Sources" }),
                /* @__PURE__ */ jsx(CardDescription, { children: "Conversion breakdown by traffic source" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: sourceData.length > 0 ? /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Source" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Conversions" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Value" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Percentage" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: sourceData.map((source) => /* @__PURE__ */ jsxs(
                  "tr",
                  {
                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                    children: [
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap", children: source.source }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: source.count }),
                      /* @__PURE__ */ jsxs("td", { className: "px-6 py-4", children: [
                        "$",
                        source.value.toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
                          source.percentage.toFixed(1),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700", children: /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "bg-primary h-2.5 rounded-full",
                            style: {
                              width: `${source.percentage}%`
                            }
                          }
                        ) })
                      ] }) })
                    ]
                  },
                  source.source
                )) })
              ] }) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-4", children: "No source data available for the selected filters." }) })
            ] }) }),
            /* @__PURE__ */ jsx(TabsContent, { value: "pages", className: "space-y-4", children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsx(CardTitle, { children: "Page Performance" }),
                /* @__PURE__ */ jsx(CardDescription, { children: "Conversion metrics by page" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: pageData.length > 0 ? /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Page" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Conversions" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Value" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Conversion Rate" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: pageData.map((page) => /* @__PURE__ */ jsxs(
                  "tr",
                  {
                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                    children: [
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap", children: page.path }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: page.count }),
                      /* @__PURE__ */ jsxs("td", { className: "px-6 py-4", children: [
                        "$",
                        page.value.toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
                          page.conversionRate.toFixed(1),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700", children: /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "bg-primary h-2.5 rounded-full",
                            style: {
                              width: `${Math.min(page.conversionRate * 2, 100)}%`
                            }
                          }
                        ) })
                      ] }) })
                    ]
                  },
                  page.path
                )) })
              ] }) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-4", children: "No page data available for the selected filters." }) })
            ] }) }),
            /* @__PURE__ */ jsx(TabsContent, { value: "events", className: "space-y-4", children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsx(CardTitle, { children: "Event Log" }),
                /* @__PURE__ */ jsx(CardDescription, { children: "Detailed log of conversion events" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: conversionEvents.length > 0 ? /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Timestamp" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Type" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Value" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Source" }),
                  /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Page" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: conversionEvents.map((event) => /* @__PURE__ */ jsxs(
                  "tr",
                  {
                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                    children: [
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: new Date(event.timestamp).toLocaleString() }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-medium text-gray-900 dark:text-white", children: event.conversionId }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: event.value ? `$${event.value.toFixed(2)}` : "-" }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: event.source || "direct" }),
                      /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: event.path || "(not set)" })
                    ]
                  },
                  `event-${event.conversionId}-${event.timestamp}`
                )) })
              ] }) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-4", children: "No events available for the selected filters." }) })
            ] }) })
          ]
        }
      )
    ] })
  ] }) });
}

export { ConversionDashboard as C };
