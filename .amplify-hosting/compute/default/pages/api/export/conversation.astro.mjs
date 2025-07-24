;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="393018aa-a665-474a-8baf-7b3e605a384a",e._sentryDebugIdIdentifier="sentry-dbid-393018aa-a665-474a-8baf-7b3e605a384a")}catch(e){}}();import { g as getSession } from '../../../chunks/session_CShSauy5.mjs';
import { E as EncryptionMode } from '../../../chunks/types_BbfxVq6m.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { c as createSignedVerificationToken } from '../../../chunks/verification_WxfTGDcw.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
import PDFDocument from 'pdfkit';
import archiver from 'archiver';
import { Buffer } from 'buffer';
import { f as fheService } from '../../../chunks/fhe_B0T2Q1bz.mjs';
export { renderers } from '../../../renderers.mjs';

function generateId() {
  return `id_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
}

const logger$2 = createBuildSafeLogger("default");
var ExportFormat$2 = /* @__PURE__ */ ((ExportFormat2) => {
  ExportFormat2["JSON_FORMAT"] = "json";
  ExportFormat2["PDF"] = "pdf";
  ExportFormat2["ARCHIVE"] = "archive";
  return ExportFormat2;
})(ExportFormat$2 || {});
const DEFAULT_EXPORT_OPTIONS$1 = {
  format: "json" /* JSON_FORMAT */,
  includeMetadata: true,
  encryptionMode: EncryptionMode.HIPAA,
  includeVerificationToken: true,
  encryption: {
    enabled: false,
    mode: EncryptionMode.HIPAA
  }
};
let ExportError$1 = class ExportError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExportError";
  }
};
let ExportService$2 = class ExportService {
  static instance;
  fheService;
  initialized = false;
  options;
  /**
   * Private constructor to enforce singleton pattern
   */
  constructor(fheService) {
    this.fheService = fheService;
    logger$2.info("Export service (browser) initialized");
    this.options = { ...DEFAULT_EXPORT_OPTIONS$1 };
  }
  /**
   * Get singleton instance
   */
  static getInstance(fheService) {
    if (!ExportService.instance) {
      ExportService.instance = new ExportService(fheService);
    }
    return ExportService.instance;
  }
  /**
   * Initialize the export service
   */
  async initialize() {
    if (this.initialized) {
      logger$2.warn("Export service already initialized");
      return;
    }
    logger$2.info("Initializing export service (browser)");
    try {
      if (!this.fheService) {
        throw new Error("FHE service not available");
      }
      this.initialized = true;
      logger$2.info("Export service initialized successfully");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger$2.error("Failed to initialize export service", {
        error: errorMessage
      });
      throw error;
    }
  }
  /**
   * Export conversation messages with secure encryption
   *
   * @param messages - The conversation messages to export
   * @param options - Export configuration options
   * @returns Export result with the exported data
   */
  async exportConversation(messages, options = {}) {
    if (!this.initialized) {
      await this.initialize();
    }
    const exportOptions = { ...this.options, ...options };
    const timestamp = Date.now();
    const exportId = generateId();
    try {
      logger$2.info(
        `Exporting conversation with ${messages.length} messages in ${exportOptions.format} format`
      );
      let exportData;
      let mimeType;
      let filename;
      if (exportOptions.format === "json" /* JSON_FORMAT */) {
        exportData = await this.createJSONExport(messages, exportOptions);
        mimeType = "application/json";
        filename = `therapy-conversation-${exportId}.json`;
      } else if (exportOptions.format === "pdf" /* PDF */) {
        throw new Error("PDF export is not supported in browser environments");
      } else if (exportOptions.format === "archive" /* ARCHIVE */) {
        throw new Error(
          "Encrypted archive export is not supported in browser environments"
        );
      } else {
        throw new Error(`Unsupported export format: ${exportOptions.format}`);
      }
      let verificationToken;
      if (exportOptions.includeVerificationToken) {
        verificationToken = await this.createVerificationToken(
          exportData,
          exportId,
          timestamp
        );
      }
      return {
        id: exportId,
        data: exportData,
        format: exportOptions.format,
        encryptionMode: exportOptions.encryptionMode,
        verificationToken,
        timestamp,
        mimeType,
        filename,
        totalMessages: messages.length
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger$2.error("Failed to export conversation", { error: errorMessage });
      throw new Error(`Export failed: ${errorMessage}`);
    }
  }
  /**
   * Create JSON export with JWE encryption if needed
   */
  async createJSONExport(messages, options) {
    try {
      const exportData = {
        version: "1.0",
        timestamp: Date.now(),
        messageCount: messages.length,
        messages: messages.map((msg) => ({
          id: msg.id,
          role: msg.role,
          content: this.sanitizeContent(msg.content),
          timestamp: msg.timestamp
        }))
      };
      if (options.includeMetadata) {
        Object.assign(exportData, {
          metadata: {
            exportVersion: "1.0",
            encryptionMode: options.encryptionMode,
            exportTimestamp: Date.now()
          }
        });
      }
      const jsonData = JSON.stringify(exportData, null, 2);
      if (options.encryptionMode !== EncryptionMode.NONE) {
        try {
          const encryptedJson = await this.fheService.encrypt(jsonData);
          const jweHeader = {
            alg: "FHE",
            enc: options.encryptionMode,
            cty: "application/json"
          };
          const jwe = {
            protected: btoa(JSON.stringify(jweHeader)),
            payload: encryptedJson,
            metadata: {
              exportTimestamp: Date.now(),
              messageCount: messages.length
            }
          };
          return JSON.stringify(jwe, null, 2);
        } catch (err) {
          throw new Error(
            `Encryption failed: ${err instanceof Error ? err.message : String(err)}`
          );
        }
      }
      return jsonData;
    } catch (error) {
      throw new ExportError$1(
        `JSON export failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
  // Helper method to sanitize content
  sanitizeContent(content) {
    if (typeof content !== "string") {
      return "[Invalid Content]";
    }
    return content.split("").filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 32 && code <= 126 || // Basic Latin (printable)
      code >= 160 && code <= 255;
    }).join("").trim();
  }
  /**
   * Create verification token for export integrity
   */
  async createVerificationToken(data, exportId, timestamp) {
    const dataBuffer = typeof data === "string" ? new TextEncoder().encode(data) : data;
    const tokenPayload = {
      exportId,
      timestamp,
      contentLength: dataBuffer.length
    };
    return createSignedVerificationToken(tokenPayload);
  }
};
const index_browser = { ExportService: ExportService$2 };

const browserImpl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ExportFormat: ExportFormat$2,
  ExportService: ExportService$2,
  default: index_browser
}, Symbol.toStringTag, { value: 'Module' }));

const logger$1 = createBuildSafeLogger("default");
var ExportFormat$1 = /* @__PURE__ */ ((ExportFormat2) => {
  ExportFormat2["JSON_FORMAT"] = "json";
  ExportFormat2["PDF"] = "pdf";
  ExportFormat2["ENCRYPTED_ARCHIVE"] = "encrypted_archive";
  return ExportFormat2;
})(ExportFormat$1 || {});
const DEFAULT_EXPORT_OPTIONS = {
  format: "json" /* JSON_FORMAT */,
  includeMetadata: true,
  encryptionMode: EncryptionMode.HIPAA,
  includeVerificationToken: true
};
class ExportError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExportError";
  }
}
let ExportService$1 = class ExportService {
  static instance;
  fheService;
  initialized = false;
  /**
   * Private constructor to enforce singleton pattern
   */
  constructor(fheService) {
    this.fheService = fheService;
    logger$1.info("Export service initialized");
  }
  /**
   * Get singleton instance
   */
  static getInstance(fheService) {
    if (!ExportService.instance) {
      ExportService.instance = new ExportService(fheService);
    }
    return ExportService.instance;
  }
  /**
   * Initialize the export service
   */
  async initialize() {
    if (this.initialized) {
      logger$1.warn("Export service already initialized");
      return;
    }
    logger$1.info("Initializing export service");
    try {
      if (!this.fheService) {
        throw new Error("FHE service not available");
      }
      this.initialized = true;
      logger$1.info("Export service initialized successfully");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger$1.error("Failed to initialize export service", {
        error: errorMessage
      });
      throw error;
    }
  }
  /**
   * Export conversation messages with secure encryption
   *
   * @param messages - The conversation messages to export
   * @param options - Export configuration options
   * @returns Export result with the exported data
   */
  async exportConversation(messages, options = {}) {
    if (!this.initialized) {
      await this.initialize();
    }
    const exportOptions = { ...DEFAULT_EXPORT_OPTIONS, ...options };
    const timestamp = Date.now();
    const exportId = generateId();
    try {
      logger$1.info(
        `Exporting conversation with ${messages.length} messages in ${exportOptions.format} format`
      );
      let exportData;
      let mimeType;
      let filename;
      switch (exportOptions.format) {
        case "pdf" /* PDF */: {
          const result = await this.createPDFExport(messages, exportOptions);
          exportData = result.data;
          mimeType = "application/pdf";
          filename = `therapy-conversation-${exportId}.pdf`;
          break;
        }
        case "encrypted_archive" /* ENCRYPTED_ARCHIVE */: {
          const archive = await this.createEncryptedArchive(
            messages,
            exportOptions
          );
          exportData = archive.data;
          mimeType = "application/octet-stream";
          filename = `therapy-conversation-${exportId}.secz`;
          break;
        }
        case "json" /* JSON_FORMAT */:
        default: {
          const json = await this.createJSONExport(messages, exportOptions);
          exportData = json.data;
          mimeType = "application/json";
          filename = `therapy-conversation-${exportId}.json`;
        }
      }
      let verificationToken;
      if (exportOptions.includeVerificationToken) {
        verificationToken = await this.createVerificationToken(
          exportData,
          exportId,
          timestamp
        );
      }
      return {
        id: exportId,
        data: exportData,
        format: exportOptions.format,
        encryptionMode: exportOptions.encryptionMode,
        verificationToken,
        timestamp,
        mimeType,
        filename,
        totalMessages: messages.length
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger$1.error("Failed to export conversation", { error: errorMessage });
      throw new Error(`Export failed: ${errorMessage}`);
    }
  }
  /**
   * Create JSON export with JWE encryption if needed
   */
  async createJSONExport(messages, options) {
    const exportContent = {
      id: generateId(),
      timestamp: Date.now(),
      messages: messages.map((msg) => ({
        id: msg.id,
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp || Date.now()
      })),
      metadata: options.includeMetadata ? {
        exportVersion: "1.0",
        encryptionMode: options.encryptionMode,
        totalMessages: messages.length
      } : void 0
    };
    const jsonData = JSON.stringify(exportContent, null, 2);
    if (options.encryptionMode !== EncryptionMode.NONE) {
      const jweHeader = {
        alg: "ECDH-ES+A256KW",
        enc: "A256GCM",
        cty: "application/json"
      };
      const encryptedData = await this.fheService.encryptData(
        new TextEncoder().encode(jsonData),
        options.encryptionMode
      );
      const jwe = {
        protected: btoa(JSON.stringify(jweHeader)),
        encrypted_key: encryptedData.encryptedKey,
        iv: encryptedData.iv,
        ciphertext: encryptedData.data,
        tag: encryptedData.authTag
      };
      return { data: JSON.stringify(jwe) };
    }
    return { data: jsonData };
  }
  /**
   * Create PDF export with embedded encryption
   */
  async createPDFExport(messages, options) {
    try {
      if (!Array.isArray(messages) || messages.length === 0) {
        throw new Error(
          "Invalid or empty messages array provided for PDF export"
        );
      }
      messages.forEach((msg, index) => {
        if (!msg.role || !msg.content) {
          throw new Error(
            `Invalid message format at index ${index}: missing role or content`
          );
        }
      });
      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
        info: {
          Title: "Therapy Conversation Export",
          Author: "Pixelated Empathy System",
          Subject: "Therapy Session Transcript",
          Keywords: "therapy, conversation, export",
          CreationDate: /* @__PURE__ */ new Date()
        },
        // Enable PDF encryption if password provided
        userPassword: options.password,
        ownerPassword: options.password,
        permissions: {
          printing: "highResolution",
          modifying: false,
          copying: false,
          annotating: false,
          fillingForms: false,
          contentAccessibility: true,
          documentAssembly: false
        }
      });
      doc.on("error", (err) => {
        throw new Error(`PDF generation error: ${err.message}`);
      });
      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("pageAdded", () => {
        try {
          const watermarkText = "CONFIDENTIAL";
          doc.save();
          doc.rotate(45, { origin: [doc.page.width / 2, doc.page.height / 2] });
          doc.fontSize(60).fillColor("grey", 0.3).text(watermarkText, 0, 0, {
            align: "center",
            width: Math.sqrt(
              Math.pow(doc.page.width, 2) + Math.pow(doc.page.height, 2)
            )
          });
          doc.restore();
        } catch (err) {
          const error = err;
          console.error("Error adding watermark:", error.message);
        }
      });
      doc.font("Helvetica-Bold").fontSize(24).text("Therapy Conversation Export", { align: "center" }).moveDown();
      doc.font("Helvetica").fontSize(10).fillColor("red").text(
        "CONFIDENTIAL: This document contains sensitive information. Unauthorized access, copying, or distribution is prohibited.",
        { align: "center" }
      ).moveDown().fillColor("black");
      doc.font("Helvetica").fontSize(12).text(`Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}`).text(`Total Messages: ${messages.length}`).text(`Export ID: ${generateId()}`).text(`Security Level: ${options.encryptionMode}`).moveDown();
      doc.font("Helvetica-Bold").fontSize(14).text("Conversation Transcript", { underline: true }).moveDown();
      for (const [index, msg] of messages.entries()) {
        try {
          const sanitizedContent = this.sanitizeContent(msg.content);
          const sanitizedRole = this.sanitizeContent(msg.role);
          const timestamp = msg.timestamp ? new Date(msg.timestamp).toLocaleString() : (/* @__PURE__ */ new Date()).toLocaleString();
          doc.font("Helvetica-Bold").fontSize(12).text(sanitizedRole.toUpperCase(), {
            continued: true
          }).font("Helvetica").text(` - ${timestamp}`);
          const contentLines = this.wrapText(
            sanitizedContent,
            doc.page.width - 100,
            11
          );
          doc.font("Helvetica").fontSize(11).text(contentLines.join("\n"), {
            align: "left",
            width: doc.page.width - 100,
            lineGap: 2
          }).moveDown();
          if (index < messages.length - 1) {
            doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke().moveDown();
          }
        } catch (err) {
          console.error(`Error processing message ${index}:`, err);
          doc.font("Helvetica").fontSize(10).fillColor("red").text(`[Error processing message ${index}]`).fillColor("black").moveDown();
        }
      }
      const totalPages = doc.bufferedPageRange().count;
      for (let i = 0; i < totalPages; i++) {
        doc.switchToPage(i);
        doc.font("Helvetica").fontSize(10).text(
          `Page ${i + 1} of ${totalPages} | Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()} | CONFIDENTIAL`,
          50,
          doc.page.height - 50,
          { align: "center" }
        );
      }
      doc.end();
      const pdfBuffer = await Promise.race([
        new Promise((resolve) => {
          doc.on("end", () => {
            resolve(Buffer.concat(chunks));
          });
        }),
        new Promise(
          (_, reject) => setTimeout(
            () => reject(new Error("PDF generation timeout")),
            3e4
            // 30 second timeout
          )
        )
      ]);
      if (options.encryptionMode !== EncryptionMode.NONE) {
        try {
          const encryptedData = await this.fheService.encryptData(
            new Uint8Array(pdfBuffer),
            options.encryptionMode
          );
          return { data: new Uint8Array(encryptedData.data) };
        } catch (err) {
          const error = err;
          throw new Error(`Encryption failed: ${error.message}`);
        }
      }
      return { data: new Uint8Array(pdfBuffer) };
    } catch (error) {
      throw new ExportError(
        `PDF export failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
  // Helper method to sanitize content
  sanitizeContent(content) {
    if (typeof content !== "string") {
      return "[Invalid Content]";
    }
    return content.split("").filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 32 && code <= 126 || // Basic Latin (printable)
      code >= 160 && code <= 255;
    }).join("").trim();
  }
  // Helper method to wrap text
  wrapText(text, width, fontSize) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    const charsPerLine = Math.floor(width / (fontSize * 0.6));
    for (const word of words) {
      if (currentLine.length + word.length + 1 <= charsPerLine) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }
  /**
   * Create encrypted archive for maximum security
   */
  async createEncryptedArchive(messages, options) {
    const jsonResult = await this.createJSONExport(messages, options);
    const chunks = [];
    const archive = archiver("zip", {
      zlib: { level: 9 }
      // Maximum compression
    });
    archive.on("data", (chunk) => chunks.push(chunk));
    const manifest = {
      format: "SECZ-1.0",
      encryption: options.encryptionMode,
      timestamp: Date.now(),
      contentType: "application/json",
      files: ["conversation.json"],
      metadata: {
        totalMessages: messages.length,
        exportVersion: "1.0",
        encryptionMode: options.encryptionMode
      }
    };
    archive.append(JSON.stringify(manifest, null, 2), {
      name: "manifest.json"
    });
    archive.append(jsonResult.data, { name: "conversation.json" });
    archive.finalize();
    const archiveBuffer = await new Promise((resolve, reject) => {
      archive.on("end", () => resolve(Buffer.concat(chunks)));
      archive.on("error", reject);
    });
    if (options.encryptionMode !== EncryptionMode.NONE) {
      const encryptedData = await this.fheService.encryptData(
        new Uint8Array(archiveBuffer),
        options.encryptionMode
      );
      return { data: new Uint8Array(encryptedData.data) };
    }
    return { data: new Uint8Array(archiveBuffer) };
  }
  /**
   * Create verification token for export integrity
   */
  async createVerificationToken(data, exportId, timestamp) {
    const dataBuffer = typeof data === "string" ? new TextEncoder().encode(data) : data;
    const tokenPayload = {
      exportId,
      timestamp,
      contentLength: dataBuffer.length
    };
    return createSignedVerificationToken(tokenPayload);
  }
};
const index_node = { ExportService: ExportService$1 };

const nodeImpl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ExportFormat: ExportFormat$1,
  ExportService: ExportService$1,
  default: index_node
}, Symbol.toStringTag, { value: 'Module' }));

const isBrowser = typeof window !== "undefined";
const { ExportFormat, ExportService } = isBrowser ? browserImpl : nodeImpl;

const logger = createBuildSafeLogger("default");
const GET = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(
      JSON.stringify({
        name: "Conversation Export API",
        description: "Endpoint for exporting therapy conversations",
        methods: ["POST"],
        version: "1.0.0",
        status: "active",
        authentication: "required",
        supportedFormats: ["json", "pdf", "encrypted_archive"],
        encryptionModes: ["none", "standard", "hipaa", "fhe"],
        features: [
          "HIPAA-compliant encryption",
          "Access control validation",
          "Audit trail logging",
          "Metadata inclusion",
          "Verification tokens"
        ],
        requiredParameters: ["sessionId"],
        optionalParameters: ["format", "encryptionMode"]
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Export API info error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to get endpoint information",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const POST = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const payload = await request.json();
    const { sessionId, format = "json", encryptionMode = "hipaa" } = payload;
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const hasAccess = await checkSessionAccess(session.user.id, sessionId);
    if (!hasAccess) {
      return new Response(
        JSON.stringify({ error: "Access denied to this session" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const messages = await getSessionMessages(sessionId);
    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const exportService = ExportService.getInstance(fheService);
    await exportService.initialize();
    const exportFormat = mapExportFormat(format);
    const exportEncryptionMode = mapEncryptionMode(encryptionMode);
    const exportResult = await exportService.exportConversation(messages, {
      format: exportFormat,
      encryptionMode: exportEncryptionMode,
      includeMetadata: true,
      includeVerificationToken: true
    });
    await recordExportAction(
      session.user.id,
      sessionId,
      exportResult.id,
      exportFormat
    );
    return new Response(
      JSON.stringify({
        id: exportResult.id,
        filename: exportResult.filename,
        format: exportResult.format,
        timestamp: exportResult.timestamp,
        totalMessages: exportResult.totalMessages,
        downloadUrl: `/api/export/download/${exportResult.id}`
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Export API error:", error);
    return new Response(JSON.stringify({ error: "Export failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function checkSessionAccess(userId, sessionId) {
  console.log(`Checking access for user ${userId} to session ${sessionId}`);
  return true;
}
async function getSessionMessages(sessionId) {
  console.log(`Fetching messages for session ${sessionId}`);
  return [
    {
      id: "1",
      role: "system",
      content: "This is a secure therapy session. All messages are encrypted.",
      timestamp: Date.now() - 36e5
    },
    {
      id: "2",
      role: "user",
      content: "I've been feeling anxious lately.",
      timestamp: Date.now() - 35e5
    },
    {
      id: "3",
      role: "assistant",
      content: "I understand. Can you tell me more about what triggers your anxiety?",
      timestamp: Date.now() - 34e5
    },
    {
      id: "4",
      role: "user",
      content: "It seems to happen most often when I have deadlines approaching.",
      timestamp: Date.now() - 33e5
    }
  ];
}
async function recordExportAction(userId, sessionId, exportId, format) {
  logger.info(
    `User ${userId} exported session ${sessionId} in ${format} format with ID ${exportId}`
  );
}
function mapExportFormat(format) {
  switch (format.toLowerCase()) {
    case "pdf":
      return ExportFormat.PDF;
    case "encrypted_archive":
    case "archive":
      return ExportFormat.ENCRYPTED_ARCHIVE;
    case "json":
    default:
      return ExportFormat.JSON;
  }
}
function mapEncryptionMode(mode) {
  switch (mode.toLowerCase()) {
    case "none":
      return EncryptionMode.NONE;
    case "standard":
      return EncryptionMode.STANDARD;
    case "fhe":
    case "maximum":
      return EncryptionMode.FHE;
    case "hipaa":
    default:
      return EncryptionMode.HIPAA;
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
