;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="363466b5-e6a6-422a-ae20-4c45b96c2697",e._sentryDebugIdIdentifier="sentry-dbid-363466b5-e6a6-422a-ae20-4c45b96c2697")}catch(e){}}();import { jsx, jsxs } from 'react/jsx-runtime';
import { c as cn } from './utils_DFlUSfBg.mjs';
import './astro/server_DzSu7Vuv.mjs';

function Table({
  columns,
  dataSource,
  tableState,
  onStateChange,
  bordered = false,
  striped = false,
  hoverable = false,
  compact = false,
  stickyHeader = false,
  fullWidth = true,
  className,
  ...props
}) {
  const handleSort = (columnId) => {
    const currentSort = tableState.sort;
    let direction = "asc";
    if (currentSort?.sortBy === columnId) {
      if (currentSort.direction === "asc") {
        direction = "desc";
      } else if (currentSort.direction === "desc") {
        direction = null;
      }
    }
    onStateChange({
      sort: direction ? { sortBy: columnId, direction } : void 0
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("relative w-full overflow-auto", {
        "overflow-x-auto": true
      }),
      children: [
        /* @__PURE__ */ jsxs(
          "table",
          {
            className: cn(
              "border-collapse w-full text-sm",
              {
                "w-full": fullWidth,
                "border border-gray-200 dark:border-gray-700": bordered,
                "[&>tbody>tr:nth-child(odd)]:bg-gray-50 dark:[&>tbody>tr:nth-child(odd)]:bg-gray-800/50": striped,
                "[&>tbody>tr:hover]:bg-gray-100 dark:[&>tbody>tr:hover]:bg-gray-800/70": hoverable,
                "[&_td]:p-2 [&_th]:p-2": compact,
                "[&>thead]:sticky [&>thead]:top-0 [&>thead]:bg-inherit": stickyHeader
              },
              className
            ),
            ...props,
            children: [
              /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(
                TableHead,
                {
                  sortable: column.sortable,
                  sortAsc: tableState.sort?.sortBy === column.id && tableState.sort.direction === "asc",
                  sortDesc: tableState.sort?.sortBy === column.id && tableState.sort.direction === "desc",
                  onSort: () => column.sortable && handleSort(column.id),
                  style: { width: column.width },
                  className: cn({
                    "text-right": column.align === "right",
                    "text-center": column.align === "center",
                    "hidden md:table-cell": column.hideMobile
                  }),
                  children: column.Header || column.header
                },
                column.id
              )) }) }),
              /* @__PURE__ */ jsx(TableBody, { children: dataSource.loading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "text-center py-8", children: "Loading..." }) }) : dataSource.error ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "text-center py-8 text-red-500", children: dataSource.error }) }) : dataSource.data.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "text-center py-8", children: "No data available" }) }) : dataSource.data.map((row) => /* @__PURE__ */ jsx(
                TableRow,
                {
                  selected: tableState.selectedRows?.has(row.id),
                  className: cn(row.className, {
                    "opacity-50": row.disabled
                  }),
                  children: columns.map((column) => /* @__PURE__ */ jsx(
                    TableCell,
                    {
                      className: cn({
                        "text-right": column.align === "right",
                        "text-center": column.align === "center",
                        "hidden md:table-cell": column.hideMobile
                      }),
                      children: column.Cell ? /* @__PURE__ */ jsx(column.Cell, { value: column.accessor(row), row }) : column.accessor(row)
                    },
                    `${row.id}-${column.id}`
                  ))
                },
                row.id
              )) })
            ]
          }
        ),
        dataSource.totalCount > tableState.pageSize && /* @__PURE__ */ jsx(
          TablePagination,
          {
            currentPage: tableState.currentPage,
            totalPages: Math.ceil(dataSource.totalCount / tableState.pageSize),
            onPageChange: (page) => onStateChange({ currentPage: page }),
            showPageSize: true,
            pageSize: tableState.pageSize,
            onPageSizeChange: (size) => onStateChange({ pageSize: size, currentPage: 1 })
          }
        )
      ]
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "thead",
    {
      className: cn("bg-gray-50 dark:bg-gray-800", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tbody",
    {
      className: cn("divide-y divide-gray-200 dark:divide-gray-700", className),
      ...props
    }
  );
}
function TableRow({ selected = false, disabled = false, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      className: cn(
        "transition-colors",
        {
          "hover:bg-gray-100 dark:hover:bg-gray-800/50": !disabled,
          "bg-blue-50 dark:bg-blue-900/20": selected,
          "opacity-50 cursor-not-allowed": disabled
        },
        className
      ),
      "aria-selected": selected,
      "aria-disabled": disabled,
      ...props
    }
  );
}
function TableHead({
  sortable = false,
  sortAsc = false,
  sortDesc = false,
  onSort,
  align = "left",
  hideMobile = false,
  width,
  className,
  children,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "th",
    {
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400",
        "border-b border-gray-200 dark:border-gray-700",
        {
          "cursor-pointer select-none": sortable,
          "text-right": align === "right",
          "text-center": align === "center",
          "hidden md:table-cell": hideMobile
        },
        className
      ),
      onClick: sortable ? onSort : void 0,
      onKeyDown: sortable ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSort && onSort();
        }
      } : void 0,
      style: { ...style, width },
      tabIndex: sortable ? 0 : void 0,
      role: sortable ? "button" : void 0,
      "aria-sort": sortable ? sortAsc ? "ascending" : sortDesc ? "descending" : "none" : void 0,
      ...props,
      children: sortable ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { children }),
        /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: cn("h-2 w-2", {
                "text-gray-700 dark:text-gray-300": sortAsc,
                "text-gray-400 dark:text-gray-600": !sortAsc
              }),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M5 15l7-7 7 7"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: cn("h-2 w-2", {
                "text-gray-700 dark:text-gray-300": sortDesc,
                "text-gray-400 dark:text-gray-600": !sortDesc
              }),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 9l-7 7-7-7"
                }
              )
            }
          )
        ] })
      ] }) : children
    }
  );
}
function TableCell({ align = "left", hideMobile = false, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "td",
    {
      className: cn(
        "p-4 align-middle",
        {
          "text-right": align === "right",
          "text-center": align === "center",
          "hidden md:table-cell": hideMobile
        },
        className
      ),
      ...props
    }
  );
}
function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  showPageSize = false,
  pageSizes = [10, 25, 50, 100],
  pageSize = 10,
  onPageSizeChange,
  className,
  ...props
}) {
  const getVisiblePages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 px-4 py-3 dark:border-gray-700",
        className
      ),
      ...props,
      children: [
        showPageSize && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Show" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "rounded-md border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-700",
              value: pageSize,
              onChange: (e) => onPageSizeChange?.(Number(e.target.value)),
              children: pageSizes.map((size) => /* @__PURE__ */ jsx("option", { value: size, children: size }, size))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: cn(
                "flex h-8 w-8 items-center justify-center rounded-md",
                "text-gray-500 dark:text-gray-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
              ),
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage <= 1,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M15 19l-7-7 7-7"
                    }
                  )
                }
              )
            }
          ),
          getVisiblePages().map((page) => /* @__PURE__ */ jsx(
            "button",
            {
              className: cn(
                "flex h-8 w-8 items-center justify-center rounded-md text-sm",
                {
                  "bg-primary text-white": currentPage === page,
                  "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800": currentPage !== page
                }
              ),
              onClick: () => onPageChange(page),
              "aria-label": `Page ${page}`,
              "aria-current": currentPage === page ? "page" : void 0,
              children: page
            },
            page
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: cn(
                "flex h-8 w-8 items-center justify-center rounded-md",
                "text-gray-500 dark:text-gray-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
              ),
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Next page",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M9 5l7 7-7 7"
                    }
                  )
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Page ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: currentPage }),
          " of",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: totalPages })
        ] })
      ]
    }
  );
}

export { TableHeader as T, TableRow as a, TableHead as b, TableBody as c, TableCell as d, Table as e };
//# sourceMappingURL=table_UH55KUy2.mjs.map
