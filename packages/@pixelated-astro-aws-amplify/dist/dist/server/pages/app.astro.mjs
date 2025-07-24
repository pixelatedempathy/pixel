;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="de8671b9-b87d-4dfa-a54e-8122ed09a58b",e._sentryDebugIdIdentifier="sentry-dbid-de8671b9-b87d-4dfa-a54e-8122ed09a58b")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, g as renderHead, a as renderTemplate } from '../chunks/astro/server_t-wqd6mp.mjs';
import 'clsx';
import { g as getStartupLogger } from '../chunks/build-safe-logger_tzJzO24i.mjs';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { i as initializeSecurity } from '../chunks/security_DBoL4g4k.mjs';
export { renderers } from '../renderers.mjs';

const execAsync = promisify(exec);
const defaultConfig = {
  logDir: path.join(process.cwd(), "logs"),
  maxSize: 10 * 1024 * 1024,
  // 10MB
  maxFiles: 5,
  compress: true,
  frequency: "daily"
};
class LogRotationService {
  config;
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
  }
  /**
   * Ensure log directory exists
   */
  async ensureLogDir() {
    try {
      await fs.mkdir(this.config.logDir, { recursive: true });
    } catch (error) {
      console.error("Failed to create log directory:", error);
    }
  }
  /**
   * Get current log filename based on frequency
   */
  getLogFilename(prefix = "app") {
    const date = /* @__PURE__ */ new Date();
    let dateStr;
    switch (this.config.frequency) {
      case "hourly":
        dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${String(date.getHours()).padStart(2, "0")}`;
        break;
      case "weekly": {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay());
        dateStr = `${startOfWeek.getFullYear()}-${String(startOfWeek.getMonth() + 1).padStart(2, "0")}-${String(startOfWeek.getDate()).padStart(2, "0")}`;
        break;
      }
      case "daily":
      default:
        dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    }
    return path.join(this.config.logDir, `${prefix}-${dateStr}.log`);
  }
  /**
   * Write a log entry to the appropriate file
   */
  async writeLog(entry, prefix = "app") {
    await this.ensureLogDir();
    const filename = this.getLogFilename(prefix);
    try {
      await fs.appendFile(filename, `${entry}
`);
      await this.checkAndRotate(filename);
    } catch (error) {
      console.error("Failed to write log:", error);
    }
  }
  /**
   * Check file size and rotate if needed
   */
  async checkAndRotate(filename) {
    try {
      const stats = await fs.stat(filename);
      if (stats.size >= (this.config.maxSize ?? defaultConfig.maxSize)) {
        await this.rotateLog(filename);
      }
    } catch {
    }
  }
  /**
   * Rotate log file
   */
  async rotateLog(filename) {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/:/g, "-").replace(/\..+/, "");
      const rotatedFilename = `${filename}.${timestamp}`;
      await fs.rename(filename, rotatedFilename);
      if (this.config.compress) {
        await this.compressLog(rotatedFilename);
      }
      await this.cleanupOldLogs(filename);
    } catch (error) {
      console.error("Failed to rotate log:", error);
    }
  }
  /**
   * Compress a log file
   */
  async compressLog(filename) {
    try {
      await execAsync(`gzip -9 ${filename}`);
    } catch (error) {
      console.error("Failed to compress log:", error);
    }
  }
  /**
   * Clean up old log files
   */
  async cleanupOldLogs(baseFilename) {
    try {
      const dirname = path.dirname(baseFilename);
      const baseFile = path.basename(baseFilename);
      const prefix = baseFile.split(".")[0];
      const files = await fs.readdir(dirname);
      const rotatedFiles = files.filter((file) => file.startsWith(prefix) && file !== baseFile).map((file) => ({ name: file, path: path.join(dirname, file) }));
      const filesWithStats = await Promise.all(
        rotatedFiles.map(async (file) => {
          const stats = await fs.stat(file.path);
          return { ...file, mtime: stats.mtime };
        })
      );
      filesWithStats.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
      const maxFiles = this.config.maxFiles ?? defaultConfig.maxFiles;
      if (filesWithStats.length >= maxFiles) {
        const filesToDelete = filesWithStats.slice(maxFiles - 1);
        for (const file of filesToDelete) {
          await fs.unlink(file.path);
        }
      }
    } catch (error) {
      console.error("Failed to clean up old logs:", error);
    }
  }
  /**
   * Aggregate logs from multiple files
   */
  async aggregateLogs(output, pattern = "*", startDate, endDate) {
    try {
      await this.ensureLogDir();
      const { logDir } = this.config;
      const files = await fs.readdir(logDir);
      const filteredFiles = files.filter((file) => {
        if (!file.endsWith(".log") && !file.endsWith(".log.gz")) {
          return false;
        }
        if (pattern !== "*" && !file.includes(pattern)) {
          return false;
        }
        const dateMatch = file.match(/\d{4}-\d{2}-\d{2}/);
        if (!dateMatch) {
          return true;
        }
        const fileDate = new Date(dateMatch[0]);
        if (startDate && fileDate < startDate) {
          return false;
        }
        if (endDate && fileDate > endDate) {
          return false;
        }
        return true;
      });
      filteredFiles.sort();
      await fs.writeFile(output, "");
      for (const file of filteredFiles) {
        const filePath = path.join(logDir, file);
        if (file.endsWith(".gz")) {
          const { stdout } = await execAsync(`gunzip -c ${filePath}`);
          await fs.appendFile(output, stdout);
        } else {
          const content = await fs.readFile(filePath, "utf8");
          await fs.appendFile(output, content);
        }
      }
    } catch (error) {
      console.error("Failed to aggregate logs:", error);
    }
  }
}

const startupLogger = getStartupLogger();
const logger = startupLogger;
async function initializeApplication() {
  try {
    logger.info("Starting application initialization...");
    const logRotation = new LogRotationService();
    await logRotation.ensureLogDir();
    await initializeSecurity();
    logger.info("Application initialization complete");
  } catch (error) {
    logger.error(
      "Failed to initialize application",
      error
    );
    throw error;
  }
}
async function shutdownApplication() {
  try {
    logger.info("Starting application shutdown...");
    logger.info("Application shutdown complete");
  } catch (error) {
    logger.error(
      "Error during application shutdown",
      error
    );
    throw error;
  }
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  function safeLog(level, message, data) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const prefix = "[phi-audit]";
    if (level === "error") {
      console.error(`${timestamp} ERROR ${prefix} ${message}`, data || "");
    } else {
      console.info(`${timestamp} INFO ${prefix} ${message}`, data || "");
    }
  }
  {
    try {
      await initializeApplication();
      safeLog("info", "Application started successfully");
      process.on("SIGTERM", handleShutdown);
      process.on("SIGINT", handleShutdown);
    } catch (error) {
      safeLog(
        "error",
        "Failed to start application",
        error instanceof Error ? { message: error.message, stack: error.stack } : void 0
      );
      console.error("Application failed to start properly");
    }
  }
  async function handleShutdown() {
    safeLog("info", "Shutdown signal received, gracefully shutting down...");
    try {
      await shutdownApplication();
      safeLog("info", "Application shutdown complete");
      process.exit(0);
    } catch (error) {
      safeLog(
        "error",
        "Error during shutdown",
        error instanceof Error ? { message: error.message, stack: error.stack } : void 0
      );
      process.exit(1);
    }
  }
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Application</title>${renderHead()}</head> <body> <main> <h1>Application Status</h1> <p>The server-side application has been initialized.</p> </main> </body></html>`;
}, "/root/pixel/src/pages/app.astro", void 0);
const $$file = "/root/pixel/src/pages/app.astro";
const $$url = "/app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$App,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
