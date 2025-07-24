;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="89b6e2a3-3eca-4d4a-bffa-5d89f82d4f45",e._sentryDebugIdIdentifier="sentry-dbid-89b6e2a3-3eca-4d4a-bffa-5d89f82d4f45")}catch(e){}}();import fs from 'node:fs';
import path from 'node:path';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const latestOnly = url.searchParams.get("latest") === "true";
    const days = parseInt(url.searchParams.get("days") || "30");
    const browsers = url.searchParams.get("browsers")?.split(",") || [];
    const since = url.searchParams.get("since") || null;
    const reportsDir = path.join(
      process.cwd(),
      "browser-compatibility",
      "reports"
    );
    if (!fs.existsSync(reportsDir)) {
      return new Response(
        JSON.stringify({
          error: "No compatibility reports found"
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const reportFiles = fs.readdirSync(reportsDir).filter(
      (file) => file.endsWith(".json") && file.startsWith("compatibility-")
    ).sort().reverse();
    if (reportFiles.length === 0) {
      return new Response(
        JSON.stringify({
          error: "No compatibility reports found"
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const now = /* @__PURE__ */ new Date();
    const threshold = new Date(now.getTime() - days * 24 * 60 * 60 * 1e3);
    const sinceDate = since ? new Date(since) : null;
    let reports = [];
    const filesToProcess = latestOnly ? [reportFiles[0]] : reportFiles;
    for (const file of filesToProcess) {
      const reportPath = path.join(reportsDir, file);
      const fileContent = fs.readFileSync(reportPath, "utf8");
      const report = JSON.parse(fileContent);
      const reportDate = new Date(report.timestamp);
      if (reportDate < threshold) {
        continue;
      }
      if (browsers.length > 0) {
        const filteredBrowsers = Object.fromEntries(
          Object.entries(report.browsers || {}).filter(
            ([key]) => browsers.includes(key)
          )
        );
        report.browsers = filteredBrowsers;
        if (report.issues) {
          report.issues = report.issues.filter(
            (issue) => browsers.includes(issue.browser)
          );
        }
        if (report.tests) {
          report.tests = report.tests.filter(
            (test) => browsers.includes(test.browser)
          );
        }
      }
      if (sinceDate && report.issues) {
        report.issues = report.issues.filter(
          (issue) => {
            if (!issue.timestamp) {
              return false;
            }
            const issueDate = new Date(issue.timestamp);
            return issueDate >= sinceDate;
          }
        );
      }
      reports.push({
        timestamp: report.timestamp,
        summary: report.summary,
        issues: report.issues || [],
        browsers: report.browsers || {},
        tests: report.tests || [],
        screenshots: report.screenshots || []
      });
    }
    const responseData = {
      reports,
      meta: {
        total: reports.length,
        latest: reports.length > 0 ? reports[0].timestamp : null,
        hasNewIssues: reports.some(
          (report) => report.issues && report.issues.length > 0
        )
      }
    };
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching compatibility data:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : String(error)
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
