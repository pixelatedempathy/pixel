;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="46597d9c-19ea-47be-acee-e4e832793be2",e._sentryDebugIdIdentifier="sentry-dbid-46597d9c-19ea-47be-acee-e4e832793be2")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useState, useEffect } from 'react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from '../../chunks/card_BfnhUXNW.mjs';
import { I as Input } from '../../chunks/input_DnMLFOfd.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from '../../chunks/select_BdS8I9Y_.mjs';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
import { T as TableHeader, a as TableRow, b as TableHead, c as TableBody, d as TableCell, e as Table$1 } from '../../chunks/table_Cxoal68L.mjs';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { format } from 'date-fns';
import { g as getActionAuditLogs, a as getUserAuditLogs } from '../../chunks/log_BQ3dbuzU.mjs';
import { p as protectRoute } from '../../chunks/serverAuth_DpRotyBD.mjs';
export { renderers } from '../../renderers.mjs';

const Table = ({ children }) => {
  return /* @__PURE__ */ jsx(
    Table$1,
    {
      columns: [],
      dataSource: { data: [], totalCount: 0 },
      tableState: { currentPage: 1, pageSize: 10 },
      onStateChange: () => {
      },
      children
    }
  );
};
function AuditLogDashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    eventType: "",
    userId: "",
    startDate: "",
    endDate: "",
    searchTerm: ""
  });
  const eventTypes = [
    "access",
    "create",
    "modify",
    "delete",
    "export",
    "share",
    "login",
    "logout",
    "system",
    "security",
    "admin",
    "consent",
    "ai",
    "dlp_allowed",
    "dlp_blocked",
    "security_alert"
  ];
  const fetchLogs = React__default.useCallback(async () => {
    try {
      setLoading(true);
      let fetchedLogs = [];
      if (filters.eventType) {
        fetchedLogs = await getActionAuditLogs(filters.eventType);
      } else if (filters.userId) {
        fetchedLogs = await getUserAuditLogs(filters.userId);
      } else {
        fetchedLogs = await getUserAuditLogs("all", 1e3);
      }
      if (filters.startDate || filters.endDate) {
        fetchedLogs = fetchedLogs.filter((log) => {
          const logDate = new Date(log.timestamp);
          if (filters.startDate && logDate < new Date(filters.startDate)) {
            return false;
          }
          if (filters.endDate && logDate > new Date(filters.endDate)) {
            return false;
          }
          return true;
        });
      }
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        fetchedLogs = fetchedLogs.filter(
          (log) => log.action.toLowerCase().includes(searchLower) || log.resource.type && log.resource.type.toLowerCase().includes(searchLower) || log.resource.id && log.resource.id.toLowerCase().includes(searchLower) || log.userId.toLowerCase().includes(searchLower)
        );
      }
      setLogs(fetchedLogs);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
    } finally {
      setLoading(false);
    }
  }, [filters]);
  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);
  const getEventTypeStats = () => {
    const stats = logs.reduce(
      (acc, log) => {
        const type = log.action;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      },
      {}
    );
    return Object.entries(stats).map(([name, value]) => ({
      name,
      value
    }));
  };
  const columns = [
    {
      header: "Timestamp",
      cell: (log) => format(new Date(log.timestamp), "PPpp")
    },
    {
      header: "Action",
      cell: (log) => log.action
    },
    {
      header: "User ID",
      cell: (log) => log.userId
    },
    {
      header: "Resource Type",
      cell: (log) => log.resource.type
    },
    {
      header: "Resource ID",
      cell: (log) => log.resource.id
    },
    {
      header: "Details",
      cell: (log) => log.metadata ? JSON.stringify(log.metadata) : "-"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Filters" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Filter audit logs by various criteria" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: filters.eventType,
            onValueChange: (value) => setFilters({ ...filters, eventType: value }),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "", children: "All Events" }),
                eventTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type, children: type }, type))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "User ID",
            value: filters.userId,
            onChange: (e) => setFilters({ ...filters, userId: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "date",
            value: filters.startDate,
            onChange: (e) => setFilters({ ...filters, startDate: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "date",
            value: filters.endDate,
            onChange: (e) => setFilters({ ...filters, endDate: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Search...",
            value: filters.searchTerm,
            onChange: (e) => setFilters({ ...filters, searchTerm: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(Button, { onClick: () => fetchLogs(), children: "Apply Filters" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Event Distribution" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Distribution of audit events by type" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "h-[300px]", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(BarChart, { data: getEventTypeStats(), children: [
        /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
        /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
        /* @__PURE__ */ jsx(YAxis, {}),
        /* @__PURE__ */ jsx(Tooltip, {}),
        /* @__PURE__ */ jsx(Bar, { dataKey: "value", fill: "#3b82f6" })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Audit Logs" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Detailed list of all audit events" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: "Loading..." }) : /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(TableHead, { children: column.header }, column.header)) }) }),
        /* @__PURE__ */ jsx(TableBody, { children: logs.map((log) => /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(TableCell, { children: column.cell(log) }, column.header)) }, log.id)) })
      ] }) })
    ] })
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$AuditLogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuditLogs;
  const { user, redirect } = await protectRoute(Astro2);
  if (redirect) {
    return redirect;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Audit Logs | Admin Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <h1 class="text-3xl font-bold">Audit Log Dashboard</h1> <p class="text-muted-foreground mt-2">
Monitor and analyze system activity and security events
</p> </div> ${renderComponent($$result2, "AuditLogDashboard", AuditLogDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/security/AuditLogDashboard", "client:component-export": "AuditLogDashboard" })} </main> ` })}`;
}, "/root/pixel/src/pages/admin/audit-logs.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/audit-logs.astro";
const $$url = "/admin/audit-logs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AuditLogs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
