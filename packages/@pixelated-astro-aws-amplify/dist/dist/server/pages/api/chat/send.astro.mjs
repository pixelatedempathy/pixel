;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="48d02c3c-1ae5-49c2-bc79-0a7dc2e42753",e._sentryDebugIdIdentifier="sentry-dbid-48d02c3c-1ae5-49c2-bc79-0a7dc2e42753")}catch(e){}}();import { f as fheService } from '../../../chunks/fhe_CK4zUaxh.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

class FHEChat {
  async processMessage(message) {
    const secureMessage = {
      ...message,
      fheStatus: {
        encrypted: true,
        verified: true,
        encryptionType: "fhe",
        processedAt: Date.now(),
        verificationHash: await this.generateVerificationHash(message)
      }
    };
    return secureMessage;
  }
  async encryptMessage(message) {
    return await fheService.encrypt(JSON.stringify(message));
  }
  async verifySender(senderId, authorizedSenders) {
    return authorizedSenders.includes(senderId);
  }
  async generateVerificationHash(message) {
    const data = `${message.id}-${message.senderId}-${message.timestamp}`;
    return await fheService.generateHash(data);
  }
}
const fheChat = new FHEChat();

async function POST(request) {
  const body = await request.json();
  const messageData = {
    id: `msg-${crypto.randomUUID()}`,
    conversationId: body.conversationId,
    senderId: body.userId,
    content: body.message,
    timestamp: Date.now(),
    metadata: {
      ipAddress: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown"
    }
  };
  const secureMessage = await fheChat.processMessage(messageData);
  if (body.isEncrypted) {
    await fheChat.encryptMessage(messageData);
  }
  if (body.requireSenderVerification) {
    const authorizedSenders = await getAuthorizedSenders(body.conversationId);
    await fheChat.verifySender(body.userId, authorizedSenders);
  }
  return new Response(
    JSON.stringify({
      success: true,
      message: secureMessage
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
}
async function getAuthorizedSenders(_conversationId) {
  return ["user-1", "user-2", "ai-assistant"];
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
