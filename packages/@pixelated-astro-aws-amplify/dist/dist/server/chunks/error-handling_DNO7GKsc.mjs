;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8a074dd5-79de-4a42-95bf-0c3d4c60b31c",e._sentryDebugIdIdentifier="sentry-dbid-8a074dd5-79de-4a42-95bf-0c3d4c60b31c")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';
import './astro/server_t-wqd6mp.mjs';

const logger = createBuildSafeLogger("default");
function handleApiError(error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  logger.error("API Error:", { error: errorMessage });
  return new Response(
    JSON.stringify({
      error: "Internal Server Error",
      message: errorMessage
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export { handleApiError as h };
