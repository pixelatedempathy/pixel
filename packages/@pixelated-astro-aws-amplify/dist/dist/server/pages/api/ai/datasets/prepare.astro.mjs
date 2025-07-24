;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e90dccba-6ec6-4b82-a7d5-c8659f083a07",e._sentryDebugIdIdentifier="sentry-dbid-e90dccba-6ec6-4b82-a7d5-c8659f083a07")}catch(e){}}();import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
import path from 'node:path';
import fs from 'node:fs';
import '../../../../chunks/astro/server_t-wqd6mp.mjs';
import { m as mergedDatasetExists } from '../../../../chunks/merge-datasets_BUbZvxjh.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger$1 = createBuildSafeLogger("default");
function preparedDatasetsExist() {
  const openaiPath = path.join(
    process.cwd(),
    "data",
    "prepared",
    "openai_dataset.jsonl"
  );
  const huggingfacePath = path.join(
    process.cwd(),
    "data",
    "prepared",
    "huggingface_dataset.json"
  );
  return {
    openai: fs.existsSync(openaiPath),
    huggingface: fs.existsSync(huggingfacePath)
  };
}
async function prepareForOpenAI() {
  try {
    logger$1.info("Preparing dataset for OpenAI format");
    const outputPath = path.join(
      process.cwd(),
      "data",
      "prepared",
      "openai_dataset.jsonl"
    );
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      outputPath,
      '{"messages": [{"role": "system", "content": "You are a helpful assistant."}]}\n'
    );
    logger$1.info(`OpenAI dataset prepared: ${outputPath}`);
    return outputPath;
  } catch (error) {
    logger$1.error(`Failed to prepare OpenAI dataset: ${error}`);
    return null;
  }
}
async function prepareForHuggingFace() {
  try {
    logger$1.info("Preparing dataset for HuggingFace format");
    const outputPath = path.join(
      process.cwd(),
      "data",
      "prepared",
      "huggingface_dataset.json"
    );
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const data = {
      train: [{ text: "Example training text", label: "example" }]
    };
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    logger$1.info(`HuggingFace dataset prepared: ${outputPath}`);
    return outputPath;
  } catch (error) {
    logger$1.error(`Failed to prepare HuggingFace dataset: ${error}`);
    return null;
  }
}
async function prepareAllFormats() {
  const openaiPath = await prepareForOpenAI();
  const huggingfacePath = await prepareForHuggingFace();
  return {
    openai: openaiPath,
    huggingface: huggingfacePath
  };
}

const logger = createBuildSafeLogger("dataset-prepare");
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
    const { format = "all", force = false } = body;
    if (!mergedDatasetExists()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Merged dataset not found. Run the dataset merge process first."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const existingDatasets = preparedDatasetsExist();
    if (!force && (format === "all" && existingDatasets.openai && existingDatasets.huggingface || format === "openai" && existingDatasets.openai || format === "huggingface" && existingDatasets.huggingface)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Prepared datasets already exist. Use force: true to recreate.",
          existingDatasets
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    let result = null;
    if (format === "all") {
      result = await prepareAllFormats();
    } else if (format === "openai") {
      const openaiPath = await prepareForOpenAI();
      result = { openai: openaiPath, huggingface: null };
    } else if (format === "huggingface") {
      const huggingfacePath = await prepareForHuggingFace();
      result = { openai: null, huggingface: huggingfacePath };
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid format. Use "all", "openai", or "huggingface".'
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!result || format === "all" && (!result.openai || !result.huggingface) || format === "openai" && !result.openai || format === "huggingface" && !result.huggingface) {
      logger.error("Dataset preparation failed via API call");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to prepare datasets. Check server logs for details."
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
        message: "Datasets prepared successfully",
        openai: result.openai,
        huggingface: result.huggingface
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error(`Error in dataset preparation API: ${error}`);
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
    const preparedStatus = preparedDatasetsExist();
    const mergedExists = mergedDatasetExists();
    return new Response(
      JSON.stringify({
        mergedDatasetExists: mergedExists,
        preparedDatasets: preparedStatus
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error(`Error in dataset preparation status API: ${error}`);
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
