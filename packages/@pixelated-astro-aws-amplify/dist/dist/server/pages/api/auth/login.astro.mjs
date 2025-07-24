;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="80be5d77-4fc4-4025-9cc4-ed8734da80f4",e._sentryDebugIdIdentifier="sentry-dbid-80be5d77-4fc4-4025-9cc4-ed8734da80f4")}catch(e){}}();import { f as fheService } from '../../../chunks/fhe_DSvfCX7o.mjs';
import { E as EncryptionMode } from '../../../chunks/types_BkGjjw9K.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { c as createVerificationToken } from '../../../chunks/security_C5H7fmSs.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("default");
async function POST(request) {
  try {
    const body = await request.json();
    const user = {
      id: `user-${crypto.randomUUID()}`,
      email: body.email
    };
    const sessionData = {
      sessionId: `session-${crypto.randomUUID()}`,
      userId: user.id,
      startTime: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1e3,
      // 24 hours
      securityLevel: body.securityLevel || "medium",
      metadata: {
        ipAddress: request.headers.get("x-forwarded-for") || "unknown",
        userAgent: request.headers.get("user-agent") || "unknown"
      }
    };
    const verificationToken = await createVerificationToken(
      JSON.stringify(sessionData)
    );
    let encryptedSessionData = null;
    if (sessionData.securityLevel !== "low") {
      await fheService.initialize({
        mode: sessionData.securityLevel === "high" ? EncryptionMode.FHE : EncryptionMode.STANDARD,
        securityLevel: sessionData.securityLevel
      });
      encryptedSessionData = await fheService.encrypt(
        JSON.stringify({
          userId: sessionData.userId,
          sessionId: sessionData.sessionId,
          metadata: sessionData.metadata
        })
      );
    }
    const secureSession = {
      ...sessionData,
      verificationToken,
      securityMetadata: {
        encryptionEnabled: sessionData.securityLevel !== "low",
        encryptedData: encryptedSessionData,
        encryptionMode: sessionData.securityLevel === "high" ? EncryptionMode.FHE : EncryptionMode.STANDARD,
        timestamp: Date.now()
      }
    };
    logger.info("User authenticated successfully", {
      userId: user.id,
      securityLevel: sessionData.securityLevel,
      timestamp: Date.now()
    });
    return new Response(
      JSON.stringify({
        success: true,
        session: secureSession
        // ... other response data ...
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
          // ... other headers ...
        }
      }
    );
  } catch (error) {
    logger.error("Login error:", {
      message: error instanceof Error ? error?.message : String(error)
    });
    return new Response(
      JSON.stringify({
        success: false,
        message: "Authentication failed",
        error: error instanceof Error ? error?.message : "Unknown error"
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
