;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6dda3c5f-7c24-4e22-92fc-747ce3616376",e._sentryDebugIdIdentifier="sentry-dbid-6dda3c5f-7c24-4e22-92fc-747ce3616376")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';

async function protectApi(request) {
  try {
    const authHeader = request.headers.get("Authorization") || "";
    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      return {
        success: false,
        error: "No authentication token provided"
      };
    }
    return {
      success: true,
      userId: "user-id-placeholder"
    };
  } catch (error) {
    console.error("API authentication error:", error);
    return {
      success: false,
      error: "Authentication error"
    };
  }
}

export { protectApi as p };
