;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0a2dc138-b347-4f42-9e00-a1a17c76564d",e._sentryDebugIdIdentifier="sentry-dbid-0a2dc138-b347-4f42-9e00-a1a17c76564d")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_By1itFZO.mjs';
import './astro/server_DzSu7Vuv.mjs';

const logger = createBuildSafeLogger("default");
function createSignedVerificationToken(payload) {
  try {
    const timestamp = Date.now();
    const token = {
      ...JSON.parse(JSON.stringify(payload)),
      iat: timestamp,
      exp: timestamp + 36e5
      // 1 hour expiration
    };
    const jsonString = JSON.stringify(token);
    return btoa(jsonString);
  } catch (error) {
    logger.error("Failed to create verification token", { error });
    throw new Error("Verification token creation failed");
  }
}
function verifyToken(token) {
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp < Date.now()) {
      logger.warn("Token expired", { token });
      return null;
    }
    return decoded;
  } catch (error) {
    logger.error("Error verifying token", { error, token });
    return null;
  }
}

export { createSignedVerificationToken as c, verifyToken as v };
//# sourceMappingURL=verification_DXsVF0m7.mjs.map
