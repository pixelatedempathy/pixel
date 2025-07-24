;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4a968514-f6dd-48cc-a062-f573f51ab36f",e._sentryDebugIdIdentifier="sentry-dbid-4a968514-f6dd-48cc-a062-f573f51ab36f")}catch(e){}}();import { m as mergedDatasetExists, g as getMergedDatasetPath, a as mergeAllDatasets } from '../../../../chunks/merge-datasets_BUbZvxjh.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = createBuildSafeLogger("dataset-merge");
const POST = async ({ request }) => {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const body = await request.json();
    const { force = false } = body;
    if (mergedDatasetExists() && !force) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Dataset already exists. Use force: true to recreate.",
          datasetPath: getMergedDatasetPath()
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const stats = await mergeAllDatasets();
    if (!stats) {
      logger.error("Dataset merge failed via API call");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to merge datasets. Check server logs for details."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Datasets merged successfully",
        stats,
        datasetPath: getMergedDatasetPath()
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error(`Error in dataset merge API: ${error}`);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const GET = async () => {
  try {
    const exists = mergedDatasetExists();
    return new Response(
      JSON.stringify({
        exists,
        datasetPath: exists ? getMergedDatasetPath() : null
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error(`Error in dataset status API: ${error}`);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
