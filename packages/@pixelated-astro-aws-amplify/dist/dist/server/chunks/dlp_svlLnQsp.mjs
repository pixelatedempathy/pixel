;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dbb3bd2a-f5b3-449a-b9f5-a2ddf2a6f335",e._sentryDebugIdIdentifier="sentry-dbid-dbb3bd2a-f5b3-449a-b9f5-a2ddf2a6f335")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_tzJzO24i.mjs';
import { A as AuditEventType, l as logAuditEvent } from './audit_DWq5CQbl.mjs';

class Analyzer {
  async loadDefaultPiiRecognizer() {
    return Promise.resolve();
  }
  async analyze(text, options) {
    console.log(
      `Analyzing text with length ${text.length} in language ${options.language}`
    );
    return Promise.resolve([]);
  }
}
class Anonymizer {
  async anonymize(payload) {
    return { text: payload.text };
  }
}
function memoize(fn) {
  const cache = /* @__PURE__ */ new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
function createLogger(name) {
  return {
    info: (message) => console.log(`[INFO] ${name}: ${message}`),
    warn: (message, meta) => console.warn(`[WARN] ${name}: ${message}`, meta),
    error: (message, meta) => console.error(`[ERROR] ${name}: ${message}`, meta)
  };
}
const logger$1 = createLogger("security:phiDetection");
class PresidioPHIDetector {
  static instance;
  analyzer = null;
  anonymizer = null;
  initialized = false;
  initializationError = null;
  /**
   * Initialize the Presidio library
   */
  async initialize() {
    try {
      if (this.initialized) {
        return;
      }
      this.analyzer = new Analyzer();
      this.anonymizer = new Anonymizer();
      await this.analyzer.loadDefaultPiiRecognizer();
      this.initialized = true;
      logger$1.info("Presidio PHI detector initialized successfully");
    } catch (error) {
      this.initializationError = error instanceof Error ? error : new Error("Failed to initialize Presidio: " + String(error));
      logger$1.error("Failed to initialize Presidio PHI detector", {
        error: this.initializationError.message,
        stack: this.initializationError.stack
      });
      this.initialized = false;
    }
  }
  /**
   * Get the singleton instance of PresidioPHIDetector
   */
  static getInstance() {
    if (!PresidioPHIDetector.instance) {
      PresidioPHIDetector.instance = new PresidioPHIDetector();
    }
    return PresidioPHIDetector.instance;
  }
  /**
   * Detect PHI entities in text using Presidio or fallback regex patterns
   */
  async detectPHI(text) {
    if (!text) {
      return { hasDetectedPHI: false, entities: [] };
    }
    try {
      await this.initialize();
      let entities;
      if (this.initialized && this.analyzer) {
        const results = await this.analyzer.analyze(text, { language: "en" });
        entities = results.map((entity) => ({
          type: entity.entity_type,
          start: entity.start,
          end: entity.end,
          score: entity.score,
          value: text.substring(entity.start, entity.end)
        }));
      } else {
        entities = this.fallbackDetection(text);
        if (this.initializationError) {
          logger$1.warn(
            "Using fallback PHI detection due to Presidio initialization error",
            {
              error: this.initializationError.message
            }
          );
        }
      }
      const hasDetectedPHI = entities.length > 0;
      let redactedText;
      if (hasDetectedPHI) {
        redactedText = await this.redactText(text, entities);
      }
      return {
        hasDetectedPHI,
        entities,
        redactedText
      };
    } catch (error) {
      logger$1.error("Error detecting PHI", {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : void 0
      });
      const entities = this.fallbackDetection(text);
      const hasDetectedPHI = entities.length > 0;
      let redactedText;
      if (hasDetectedPHI) {
        try {
          redactedText = await this.redactText(text, entities);
        } catch (redactError) {
          logger$1.error("Error redacting PHI text", {
            error: redactError instanceof Error ? redactError.message : String(redactError)
          });
        }
      }
      return {
        hasDetectedPHI,
        entities,
        redactedText
      };
    }
  }
  /**
   * Redact PHI entities in text using Presidio or a fallback approach
   */
  async redactText(text, entities) {
    try {
      if (this.initialized && this.anonymizer) {
        const anonymizerPayload = {
          text,
          anonymizers: {
            DEFAULT: { type: "replace", newValue: "[REDACTED]" }
          },
          analyzer_results: entities.map((entity) => ({
            entity_type: entity.type,
            start: entity.start,
            end: entity.end,
            score: entity.score
          }))
        };
        const result = await this.anonymizer.anonymize(anonymizerPayload);
        return result.text;
      } else {
        return this.fallbackRedaction(text, entities);
      }
    } catch (error) {
      logger$1.error("Error redacting PHI", {
        error: error instanceof Error ? error.message : String(error)
      });
      return this.fallbackRedaction(text, entities);
    }
  }
  /**
   * Fallback method for detecting PHI entities using regex patterns
   */
  fallbackDetection = memoize((text) => {
    const entities = [];
    const patterns = {
      ["EMAIL_ADDRESS" /* EMAIL_ADDRESS */]: new RegExp(
        "\\b[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}\\b",
        "gi"
      ),
      ["PHONE_NUMBER" /* PHONE_NUMBER */]: new RegExp(
        "\\b(\\+\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}\\b",
        "g"
      ),
      ["US_SSN" /* US_SSN */]: new RegExp(
        "\\b\\d{3}[-]?\\d{2}[-]?\\d{4}\\b",
        "g"
      ),
      ["IP_ADDRESS" /* IP_ADDRESS */]: new RegExp(
        "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b",
        "g"
      ),
      ["CREDIT_CARD" /* CREDIT_CARD */]: new RegExp(
        "\\b(?:\\d{4}[-\\s]?){3}\\d{4}\\b",
        "g"
      ),
      ["DATE_TIME" /* DATE_TIME */]: new RegExp(
        "\\b\\d{1,2}[/.-]\\d{1,2}[/.-]\\d{2,4}\\b",
        "g"
      ),
      ["AGE" /* AGE */]: new RegExp(
        "\\b\\d{1,3}\\s+(?:years?|yrs?|y)(?:\\s+old)?\\b",
        "gi"
      ),
      // Simplified patterns for other types
      ["PERSON" /* PERSON */]: new RegExp(
        "\\b[A-Z][a-z]+\\s+[A-Z][a-z]+\\b",
        "g"
      ),
      ["ADDRESS" /* ADDRESS */]: new RegExp(
        "\\b\\d+\\s+[A-Za-z\\s]+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Ln|Rd|Blvd|Dr|St)\\.?\\s+(?:#\\w+)?\\b",
        "gi"
      ),
      ["LOCATION" /* LOCATION */]: new RegExp(
        "\\b[A-Z][a-z]+(?:,\\s+[A-Z]{2})?\\b",
        "g"
      ),
      ["MEDICAL_RECORD_NUMBER" /* MEDICAL_RECORD_NUMBER */]: new RegExp(
        "\\bMR[N#]?\\s*:?\\s*\\d+\\b",
        "gi"
      ),
      ["URL" /* URL */]: new RegExp(
        "\\bhttps?://[\\w.-]+\\.[a-zA-Z]{2,}[\\w\\-._~:/?#[\\]@!$&'()*+,;=]+\\b",
        "gi"
      ),
      ["US_PASSPORT" /* US_PASSPORT */]: new RegExp("\\b[A-Z]\\d{8}\\b", "g"),
      ["US_DRIVER_LICENSE" /* US_DRIVER_LICENSE */]: new RegExp(
        "\\b[A-Z]\\d{3}-\\d{3}-\\d{3}\\b",
        "g"
      ),
      ["US_BANK_NUMBER" /* US_BANK_NUMBER */]: new RegExp("\\b\\d{10,12}\\b", "g"),
      ["IBAN_CODE" /* IBAN_CODE */]: new RegExp(
        "\\b[A-Z]{2}\\d{2}[A-Z0-9]{4}\\d{7}[A-Z0-9]{0,16}\\b",
        "g"
      ),
      ["US_ITIN" /* US_ITIN */]: new RegExp(
        "\\b9\\d{2}[-]?\\d{2}[-]?\\d{4}\\b",
        "g"
      ),
      ["MEDICAL_LICENSE" /* MEDICAL_LICENSE */]: new RegExp("\\b[A-Z]{2}\\d{6}\\b", "g"),
      ["ORGANIZATION" /* ORGANIZATION */]: new RegExp(
        "\\b[A-Z][a-z]+\\s+(?:Hospital|Medical Center|Clinic|Healthcare|Health)\\b",
        "g"
      )
    };
    for (const [type, pattern] of Object.entries(patterns)) {
      const freshPattern = new RegExp(pattern.source, pattern.flags);
      let match;
      while ((match = freshPattern.exec(text)) !== null) {
        entities.push({
          type,
          start: match.index,
          end: match.index + match[0].length,
          score: 0.8,
          // Arbitrary confidence score for fallback detection
          value: match[0]
        });
      }
    }
    return entities;
  });
  /**
   * Fallback method for redacting PHI entities in text
   */
  fallbackRedaction(text, entities) {
    const sortedEntities = [...entities].sort((a, b) => b.start - a.start);
    let redactedText = text;
    for (const entity of sortedEntities) {
      redactedText = redactedText.substring(0, entity.start) + "[REDACTED]" + redactedText.substring(entity.end);
    }
    return redactedText;
  }
}
PresidioPHIDetector.getInstance();
function detectAndRedactPHI(text) {
  try {
    const detector = PresidioPHIDetector.getInstance();
    const entities = detector["fallbackDetection"](text);
    if (entities.length === 0) {
      return text;
    }
    return detector["fallbackRedaction"](text, entities);
  } catch (error) {
    logger$1.error("Error in detectAndRedactPHI", {
      error: error instanceof Error ? error.message : String(error)
    });
    return text;
  }
}

const logger = createBuildSafeLogger("dlp-service");
class AuditLogger {
  log({
    type,
    userId,
    data
  }) {
    logAuditEvent(type, "dlp", userId, "security", data);
  }
}
const auditLogger = new AuditLogger();
var DLPAction = /* @__PURE__ */ ((DLPAction2) => {
  DLPAction2["ALLOW"] = "allow";
  DLPAction2["REDACT"] = "redact";
  DLPAction2["BLOCK"] = "block";
  DLPAction2["BLOCK_AND_ALERT"] = "block_and_alert";
  return DLPAction2;
})(DLPAction || {});
class DLPService {
  processSensitiveContent(_dataStr, _arg1) {
    throw new Error("Method not implemented.");
  }
  rules = [];
  constructor() {
    this.addDefaultRules();
  }
  /**
   * Add built-in default rules
   */
  addDefaultRules() {
    this.addRule({
      id: "phi-detection",
      name: "PHI/PII Detection",
      description: "Detects and redacts PHI/PII in outgoing content",
      action: "redact" /* REDACT */,
      isActive: true,
      matches: (content) => {
        return detectAndRedactPHI(content) !== content;
      },
      redact: (content) => detectAndRedactPHI(content)
    });
    this.addRule({
      id: "large-data-volume",
      name: "Large Data Volume Protection",
      description: "Prevents large volumes of data export that might contain PHI",
      action: "block" /* BLOCK */,
      isActive: true,
      matches: (content, metadata) => {
        const maxSize = 100 * 1024;
        const dataSize = metadata?.["dataSize"] || content.length;
        return dataSize > maxSize && this.containsPotentialPHI(content);
      }
    });
  }
  /**
   * Add a DLP rule to the service
   * @param rule Rule configuration
   */
  addRule(rule) {
    const existingIndex = this.rules.findIndex((r) => r.id === rule.id);
    if (existingIndex >= 0) {
      this.rules[existingIndex] = rule;
    } else {
      this.rules.push(rule);
    }
    logger.info(`DLP rule added: ${rule.id} - ${rule.name}`);
  }
  /**
   * Remove a DLP rule by ID
   * @param ruleId Rule ID to remove
   */
  removeRule(ruleId) {
    this.rules = this.rules.filter((rule) => rule.id !== ruleId);
    logger.info(`DLP rule removed: ${ruleId}`);
  }
  /**
   * Alias for removeRule
   * @param ruleId Rule ID to delete
   */
  deleteRule(ruleId) {
    this.removeRule(ruleId);
  }
  /**
   * Get all DLP rules
   * @returns Array of all DLP rules
   */
  getRules() {
    return [...this.rules];
  }
  /**
   * Check if content contains any potential PHI
   * @param content Content to check
   * @returns True if the content might contain PHI
   */
  containsPotentialPHI(content) {
    return detectAndRedactPHI(content) !== content;
  }
  /**
   * Scan content against all active DLP rules
   * @param content Content to scan
   * @param context Additional context about the transmission
   * @returns Result of DLP policy check
   */
  scanContent(content, context) {
    const activeRules = this.rules.filter((rule) => rule.isActive);
    const triggeredRules = [];
    let currentContent = content;
    let allowed = true;
    let reason = "";
    for (const rule of activeRules) {
      if (rule.matches(content, context.metadata)) {
        triggeredRules.push(rule);
        if (rule.action === "block" /* BLOCK */ || rule.action === "block_and_alert" /* BLOCK_AND_ALERT */) {
          allowed = false;
          reason = `Blocked by DLP rule: ${rule.name}`;
        }
      }
    }
    if (allowed && triggeredRules.some((rule) => rule.action === "redact" /* REDACT */)) {
      for (const rule of triggeredRules) {
        if (rule.action === "redact" /* REDACT */ && rule.redact) {
          currentContent = rule.redact(currentContent);
        }
      }
    }
    this.logDLPEvent({
      userId: context.userId,
      action: context.action,
      allowed,
      triggeredRules: triggeredRules.map((r) => r.id),
      reason,
      destination: context.destination
    });
    if (!allowed && triggeredRules.some((rule) => rule.action === "block_and_alert" /* BLOCK_AND_ALERT */)) {
      this.generateSecurityAlert({
        userId: context.userId,
        action: context.action,
        destination: context.destination,
        triggeredRules: triggeredRules.filter((r) => r.action === "block_and_alert" /* BLOCK_AND_ALERT */).map((r) => r.id)
      });
    }
    return {
      allowed,
      reason: allowed ? void 0 : reason,
      redactedContent: allowed && currentContent !== content ? currentContent : void 0,
      triggeredRules: triggeredRules.map((rule) => rule.id)
    };
  }
  /**
   * Log a DLP event for audit purposes
   */
  logDLPEvent(event) {
    logger.info(
      `DLP ${event.allowed ? "allowed" : "blocked"} ${event.action}`,
      {
        userId: event.userId,
        action: event.action,
        allowed: event.allowed,
        triggeredRules: event.triggeredRules,
        reason: event.reason,
        destination: event.destination
      }
    );
    auditLogger.log({
      type: event.allowed ? AuditEventType.DLP_ALLOWED : AuditEventType.DLP_BLOCKED,
      userId: event.userId,
      action: event.action,
      data: {
        triggeredRules: event.triggeredRules,
        reason: event.reason,
        destination: event.destination
      }
    });
  }
  /**
   * Generate a security alert for a blocked DLP event
   */
  generateSecurityAlert(event) {
    logger.warn("DLP security alert generated", {
      userId: event.userId,
      action: event.action,
      destination: event.destination,
      triggeredRules: event.triggeredRules
    });
    auditLogger.log({
      type: AuditEventType.SECURITY_ALERT,
      severity: "high",
      userId: event.userId,
      action: "dlp_violation",
      data: {
        action: event.action,
        destination: event.destination,
        triggeredRules: event.triggeredRules
      }
    });
  }
}
const dlpService = new DLPService();

export { DLPAction as D, dlpService as d };
