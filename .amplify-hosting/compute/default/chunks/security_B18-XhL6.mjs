;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="013fcc3a-4a79-4155-a556-cb57a4888ec9",e._sentryDebugIdIdentifier="sentry-dbid-013fcc3a-4a79-4155-a556-cb57a4888ec9")}catch(e){}}();import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { f as fheService } from './fhe_ZZVTPva_.mjs';
import { E as EncryptionMode } from './types_CQf1BJz-.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import './astro/server_bjkJ-nhl.mjs';

const logger = createBuildSafeLogger("default");
atom(false);
atomWithStorage("chatEncryptionKeys", null);
atomWithStorage("chatSecurityLevel", "medium");
const enhancedFHEService = fheService;
const SECRET_KEY = typeof process !== "undefined" && process.env ? process.env.SECRET_KEY || "default-secret-key" : "default-secret-key";
async function initializeSecurity() {
  try {
    logger.info("Initializing security system...");
    const securityLevel = process.env.SECURITY_LEVEL || "medium";
    const encryptionSuccess = await initializeEncryption(securityLevel);
    if (!encryptionSuccess) {
      logger.warn(
        "Encryption initialization failed, continuing with reduced security"
      );
    }
    logger.info("Security system initialized successfully");
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error)
    };
    logger.error("Failed to initialize security system:", errorDetails);
    throw new Error(
      `Security initialization failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
async function initializeEncryption(level = "medium") {
  try {
    const encryptionMode = level === "high" ? EncryptionMode.FHE : level === "medium" ? EncryptionMode.HIPAA : EncryptionMode.STANDARD;
    await enhancedFHEService.initialize({
      mode: encryptionMode,
      keySize: level === "high" ? 2048 : 1024,
      securityLevel: level,
      enableDebug: process.env.NODE_ENV === "development"
    });
    if (encryptionMode === EncryptionMode.FHE && enhancedFHEService.setupKeyManagement) {
      const keyId = await enhancedFHEService.setupKeyManagement({
        rotationPeriodDays: 7,
        persistKeys: true
      });
      logger.info(`FHE initialized with key ID: ${keyId}`);
    }
    logger.info(
      `Encryption initialized successfully with mode: ${encryptionMode}`
    );
    return true;
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error)
    };
    logger.error("Failed to initialize encryption:", errorDetails);
    return false;
  }
}
async function createVerificationToken(message) {
  try {
    if (enhancedFHEService.createVerificationToken) {
      return await enhancedFHEService.createVerificationToken(message);
    }
    const timestamp = Date.now().toString();
    const data = `${message}:${timestamp}`;
    return `${createSignature(data)}.${timestamp}`;
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error)
    };
    logger.error("Verification token generation error:", errorDetails);
    throw error;
  }
}
function createSignature(data) {
  try {
    if (typeof window !== "undefined") {
      return btoa(
        String.fromCharCode.apply(
          null,
          Array.from(new TextEncoder().encode(data + SECRET_KEY))
        )
      );
    } else {
      const encoder = new TextEncoder();
      const dataWithKey = encoder.encode(data + SECRET_KEY);
      return btoa(String.fromCharCode.apply(null, Array.from(dataWithKey)));
    }
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error)
    };
    logger.error("Signature creation error:", errorDetails);
    return "";
  }
}
function verifySignature(data, signature) {
  const expectedSignature = createSignature(data);
  return expectedSignature === signature;
}
function verifySecureToken(token) {
  try {
    const [encodedData, signature] = token.split(".");
    if (!encodedData || !signature) {
      return null;
    }
    if (!verifySignature(encodedData, signature)) {
      return null;
    }
    const dataString = atob(encodedData);
    const payload = JSON.parse(dataString);
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1e3)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export { createVerificationToken as c, initializeSecurity as i, verifySecureToken as v };
