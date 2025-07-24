;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3d16caf4-38ae-4f05-8b74-752cd1f22a6e",e._sentryDebugIdIdentifier="sentry-dbid-3d16caf4-38ae-4f05-8b74-752cd1f22a6e")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_AsZljXJu.mjs';
import { l as logAuditEvent, A as AuditEventType } from './audit_BtMut9h8.mjs';
import { d as dlpService } from './dlp_amO05trP.mjs';
import { R as RecoveryTestStatus, S as StorageLocation, B as BackupType, a as BackupStatus } from './backup-types_CGe17-3P.mjs';
import './astro/server_DBAAVvAL.mjs';
import * as NodeCrypto from 'crypto';

const isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined";
let nodeModulesLoaded = false;
let nodeRandomUUIDFunction;
let nodeCryptoCreateHash;
let pathModule;
let fsPromisesModule;
async function loadNodeModules() {
  if (isBrowser$1 || nodeModulesLoaded) {
    return;
  }
  try {
    const cryptoMod = await import('node:crypto');
    const pathMod = await import('node:path');
    const fsPromisesMod = await import('node:fs/promises');
    nodeRandomUUIDFunction = cryptoMod.randomUUID;
    nodeCryptoCreateHash = cryptoMod.createHash;
    pathModule = pathMod;
    fsPromisesModule = fsPromisesMod;
    nodeModulesLoaded = true;
  } catch (_error) {
    console.warn("Node.js modules not available, using fallbacks");
  }
}
function generateUUID() {
  if (!isBrowser$1 && nodeRandomUUIDFunction) {
    return nodeRandomUUIDFunction();
  }
  if (isBrowser$1 && typeof window.crypto !== "undefined" && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
const logger$1 = createBuildSafeLogger("recovery-testing");
class RecoveryTestingManager {
  config;
  testEnvironments = /* @__PURE__ */ new Map();
  testCases = /* @__PURE__ */ new Map();
  constructor(config) {
    this.config = config;
    this.initialize();
  }
  /**
   * Static factory method for async initialization
   */
  static async create(config) {
    await loadNodeModules();
    return new RecoveryTestingManager(config);
  }
  /**
   * Internal initialization method
   */
  initialize() {
    if (!this.config.testCases || this.config.testCases.length === 0) {
      this.loadDefaultTestCases();
    } else {
      this.config.testCases.forEach((tc) => {
        const testCase = {
          id: generateUUID(),
          name: tc.name,
          description: tc.description,
          backupType: tc.backupType,
          verificationSteps: tc.dataVerification.map((dv) => ({
            id: generateUUID(),
            type: dv.type,
            target: dv.target,
            expected: dv.expected
          }))
        };
        this.testCases.set(testCase.id, testCase);
      });
    }
    if (this.config.enabled) {
      this.scheduleAutomatedTests().catch((error) => {
        logger$1.error(
          `Failed to schedule automated tests: ${error instanceof Error ? error.message : String(error)}`
        );
      });
    }
    logger$1.info("Recovery testing manager initialized successfully");
  }
  /**
   * Update the configuration for the recovery testing manager
   */
  async updateConfig(config) {
    logger$1.info("Updating recovery testing configuration");
    try {
      this.config = {
        ...this.config,
        ...config
      };
      if (config.testCases) {
        this.testCases.clear();
        config.testCases.forEach((tc) => {
          const testCase = {
            id: generateUUID(),
            name: tc.name,
            description: tc.description,
            backupType: tc.backupType,
            verificationSteps: tc.dataVerification.map((dv) => ({
              id: generateUUID(),
              type: dv.type,
              target: dv.target,
              expected: dv.expected
            }))
          };
          this.testCases.set(testCase.id, testCase);
        });
      }
      if (config.enabled !== void 0 && config.enabled && !this.config.enabled) {
        await this.scheduleAutomatedTests();
      }
      logger$1.info("Recovery testing configuration updated successfully");
    } catch (error) {
      logger$1.error(
        `Failed to update recovery testing configuration: ${error instanceof Error ? error.message : String(error)}`
      );
      throw error;
    }
  }
  /**
   * Load default test cases for common backup types
   */
  loadDefaultTestCases() {
    const defaultTestCases = [
      {
        id: generateUUID(),
        name: "Full Backup Basic Verification",
        description: "Verifies core system functionality after full backup restoration",
        backupType: "full",
        verificationSteps: [
          {
            id: generateUUID(),
            type: "hash" /* HASH */,
            target: "system-files"
            // expected omitted to avoid type error
          },
          {
            id: generateUUID(),
            type: "query" /* QUERY */,
            target: "database",
            query: "SELECT COUNT(*) FROM users"
          },
          {
            id: generateUUID(),
            type: "api" /* API */,
            target: "/api/health",
            expected: true
          }
        ]
      },
      {
        id: generateUUID(),
        name: "Differential Backup Verification",
        description: "Verifies changes since last full backup",
        backupType: "differential",
        verificationSteps: [
          {
            id: generateUUID(),
            type: "query" /* QUERY */,
            target: "database",
            query: "SELECT MAX(modified_date) FROM data_records"
          },
          {
            id: generateUUID(),
            type: "content" /* CONTENT */,
            target: "latest-records",
            threshold: 100
            // Verify at least 100 latest records
          }
        ]
      }
    ];
    defaultTestCases.forEach((tc) => {
      this.testCases.set(tc.id, tc);
    });
  }
  /**
   * Schedule automated recovery tests based on configuration
   */
  async scheduleAutomatedTests() {
    logger$1.info("Scheduling automated recovery tests", {
      schedule: this.config.schedule
    });
    await logAuditEvent(
      AuditEventType.SECURITY,
      "RECOVERY_TESTS_SCHEDULED",
      "system",
      "backup-system",
      {
        schedule: this.config.schedule,
        environment: this.config.environment.type,
        testCases: Array.from(this.testCases.values()).map((tc) => tc.name)
      }
    );
  }
  /**
   * Run a recovery test for a specific backup
   */
  async runRecoveryTest(backupId, environmentType = "sandbox" /* SANDBOX */) {
    const testId = generateUUID();
    logger$1.info("Starting recovery test", { testId, backupId, environmentType });
    try {
      await logAuditEvent(
        AuditEventType.SECURITY,
        "RECOVERY_TEST_STARTED",
        "system",
        testId,
        {
          backupId,
          environmentType
        }
      );
      const testEnvironment = await this.getTestEnvironment(environmentType);
      await testEnvironment.initialize();
      const startTime = Date.now();
      logger$1.info("Restoring backup to test environment", { testId, backupId });
      await testEnvironment.restoreBackup(backupId);
      logger$1.info("Running verification steps", { testId });
      const verificationResults = await this.runVerificationSteps(
        testEnvironment,
        backupId
      );
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      const status = verificationResults.every((r) => r.passed) ? RecoveryTestStatus.PASSED : RecoveryTestStatus.FAILED;
      const result = {
        id: testId,
        testDate: (/* @__PURE__ */ new Date()).toISOString(),
        backupId,
        environment: environmentType,
        status,
        timeTaken,
        verificationResults: verificationResults.map((vr) => ({
          testCase: vr.testCaseName,
          passed: vr.passed,
          details: vr.details
        }))
      };
      if (status === RecoveryTestStatus.FAILED) {
        result.issues = verificationResults.filter((vr) => !vr.passed).map((vr) => ({
          type: "verification_failed",
          description: `Verification failed for test case: ${vr.testCaseName}`,
          severity: "high"
        }));
      }
      if (this.config.generateReport) {
        result.report = await this.generateTestReport(result);
      }
      await logAuditEvent(
        AuditEventType.SECURITY,
        status === RecoveryTestStatus.PASSED ? "RECOVERY_TEST_PASSED" : "RECOVERY_TEST_FAILED",
        "system",
        testId,
        {
          testId,
          backupId,
          status,
          timeTaken,
          failedSteps: verificationResults.filter((vr) => !vr.passed).length
        }
      );
      await testEnvironment.cleanup();
      if (status === RecoveryTestStatus.FAILED && this.config.notifyOnFailure) {
        this.sendFailureNotifications(result);
      }
      return result;
    } catch (error) {
      logger$1.error("Recovery test failed with exception", {
        testId,
        backupId,
        error: error instanceof Error ? error.message : String(error)
      });
      await logAuditEvent(
        AuditEventType.SECURITY,
        "RECOVERY_TEST_ERROR",
        "system",
        testId,
        {
          testId,
          backupId,
          error: error instanceof Error ? error.message : String(error)
        }
      );
      return {
        id: testId,
        testDate: (/* @__PURE__ */ new Date()).toISOString(),
        backupId,
        environment: environmentType,
        status: RecoveryTestStatus.FAILED,
        timeTaken: 0,
        verificationResults: [],
        issues: [
          {
            type: "test_error",
            description: `Test failed with error: ${error instanceof Error ? error.message : String(error)}`,
            severity: "critical"
          }
        ]
      };
    }
  }
  /**
   * Get or create test environment
   */
  async getTestEnvironment(type) {
    if (this.testEnvironments.has(type)) {
      return this.testEnvironments.get(type);
    }
    let environment;
    switch (type) {
      case "docker" /* DOCKER */:
        environment = new DockerTestEnvironment();
        break;
      case "kubernetes" /* KUBERNETES */:
        environment = new KubernetesTestEnvironment();
        break;
      case "vm" /* VM */:
        environment = new VMTestEnvironment();
        break;
      case "sandbox" /* SANDBOX */:
      default:
        environment = new SandboxTestEnvironment();
        break;
    }
    this.testEnvironments.set(type, environment);
    return environment;
  }
  /**
   * Run verification steps for a restored backup
   */
  async runVerificationSteps(environment, backupId) {
    const results = [];
    for (const testCase of this.testCases.values()) {
      logger$1.info("Running test case", {
        backupId,
        testCaseName: testCase.name
      });
      const verificationDetails = await this.verifyDataIntegrity(
        environment,
        testCase
      );
      const allStepsPassed = verificationDetails.every((v) => v.passed);
      results.push({
        testCaseName: testCase.name,
        passed: allStepsPassed,
        details: {
          description: testCase.description,
          steps: verificationDetails
        }
      });
    }
    return results;
  }
  /**
   * Generate a detailed test report
   */
  async generateTestReport(result) {
    logger$1.info(`Generating test report for recovery test ID: ${result.id}`);
    if (!pathModule || !fsPromisesModule) {
      logger$1.error("Path or fs module not loaded, cannot generate test report.");
      return `Error: Path or fs module not loaded. Report for ${result.id} not generated.`;
    }
    const reportDir = pathModule.join(
      process.cwd(),
      "reports",
      "recovery-tests"
    );
    const reportPath = pathModule.join(reportDir, `${result.id}.json`);
    try {
      await fsPromisesModule.mkdir(reportDir, { recursive: true });
      await fsPromisesModule.writeFile(
        reportPath,
        JSON.stringify(result, null, 2),
        "utf8"
      );
      logger$1.info(`Test report generated: ${reportPath}`);
      return reportPath;
    } catch (error) {
      logger$1.error(
        `Failed to generate test report: ${error instanceof Error ? error.message : String(error)}`
      );
      return `Error generating report: ${error instanceof Error ? error.message : String(error)}`;
    }
  }
  /**
   * Send notifications for failed tests
   */
  sendFailureNotifications(result) {
    logger$1.info("Sending failure notifications", { testId: result.id });
  }
  async verifyDataIntegrity(environment, testCase) {
    const results = [];
    for (const step of testCase.verificationSteps) {
      const verificationResult = await environment.verifyStep(step);
      switch (step.type) {
        case "hash" /* HASH */:
          if (!isBrowser$1 && nodeCryptoCreateHash) {
            if (verificationResult.passed && (typeof verificationResult.actual === "string" || verificationResult.actual instanceof Uint8Array)) {
              const hash = nodeCryptoCreateHash("sha256").update(verificationResult.actual).digest("hex");
              results.push({
                step: step.id,
                passed: hash === step.expected,
                details: {
                  actualHash: hash,
                  expectedHash: step.expected,
                  ...verificationResult.details
                }
              });
            } else if (verificationResult.passed) {
              results.push({
                step: step.id,
                passed: false,
                details: {
                  error: "Actual data for HASH verification is not a string or Uint8Array.",
                  ...verificationResult.details
                }
              });
            } else {
              results.push({
                step: step.id,
                passed: false,
                details: {
                  error: "Hash verification skipped: data retrieval failed.",
                  ...verificationResult.details
                }
              });
            }
          } else {
            results.push({
              step: step.id,
              passed: false,
              details: {
                error: "HASH verification skipped: crypto.createHash not available on server or in browser."
              }
            });
          }
          break;
        case "query" /* QUERY */:
        case "content" /* CONTENT */:
        case "api" /* API */:
          results.push({
            step: step.id,
            passed: verificationResult.passed,
            details: {
              actual: verificationResult.actual,
              expected: step.expected,
              ...verificationResult.details
            }
          });
          break;
        default:
          results.push({
            step: step.id,
            passed: false,
            details: {
              error: `Unsupported verification method: ${step.type}`
            }
          });
          break;
      }
    }
    return results;
  }
}
class DockerTestEnvironment {
  // private config: Record<string, unknown>
  async initialize() {
    logger$1.info("Initializing Docker test environment");
  }
  async restoreBackup(backupId) {
    logger$1.info("Restoring backup to Docker environment", { backupId });
  }
  async verifyStep(step) {
    logger$1.info("Verifying step in Docker environment", {
      stepType: step.type,
      target: step.target
    });
    return {
      step: step.id,
      passed: true,
      // Placeholder
      details: {}
    };
  }
  async cleanup() {
    logger$1.info("Cleaning up Docker test environment");
  }
}
class KubernetesTestEnvironment {
  // private config: Record<string, unknown>
  async initialize() {
    logger$1.info("Initializing Kubernetes test environment");
  }
  async restoreBackup(backupId) {
    logger$1.info("Restoring backup to Kubernetes environment", { backupId });
  }
  async verifyStep(step) {
    logger$1.info("Verifying step in Kubernetes environment", {
      stepType: step.type,
      target: step.target
    });
    return {
      step: step.id,
      passed: true,
      // Placeholder
      details: {}
    };
  }
  async cleanup() {
    logger$1.info("Cleaning up Kubernetes test environment");
  }
}
class VMTestEnvironment {
  // private config: Record<string, unknown>
  async initialize() {
    logger$1.info("Initializing VM test environment");
  }
  async restoreBackup(backupId) {
    logger$1.info("Restoring backup to VM environment", { backupId });
  }
  async verifyStep(step) {
    logger$1.info("Verifying step in VM environment", {
      stepType: step.type,
      target: step.target
    });
    return {
      step: step.id,
      passed: true,
      // Placeholder
      details: {}
    };
  }
  async cleanup() {
    logger$1.info("Cleaning up VM test environment");
  }
}
class SandboxTestEnvironment {
  // private config: Record<string, unknown>
  restoredData = /* @__PURE__ */ new Map();
  async initialize() {
    logger$1.info("Initializing sandbox test environment");
    this.restoredData = /* @__PURE__ */ new Map();
  }
  async restoreBackup(backupId) {
    logger$1.info("Restoring backup to sandbox environment", { backupId });
    this.restoredData.set(
      "system-files",
      new TextEncoder().encode("mock system files")
    );
    this.restoredData.set(
      "database",
      new TextEncoder().encode("mock database content")
    );
    this.restoredData.set(
      "latest-records",
      new TextEncoder().encode("mock latest records")
    );
  }
  async verifyStep(step) {
    logger$1.info("Verifying step in sandbox environment", {
      stepType: step.type,
      target: step.target
    });
    switch (step.type) {
      case "hash" /* HASH */: {
        const data = this.restoredData.get(step.target);
        if (!data) {
          return {
            step: step.id,
            passed: false,
            details: { error: `Target not found: ${step.target}` }
          };
        }
        return {
          step: step.id,
          passed: true,
          // Indicates data was found
          actual: data,
          // Return the actual Uint8Array data
          expected: step.expected,
          details: { target: step.target }
        };
      }
      case "query" /* QUERY */: {
        if (step.target === "database" && step.query) {
          let result;
          if (step.query.includes("COUNT(*)")) {
            result = 1250;
          } else if (step.query.includes("MAX(modified_date)")) {
            result = (/* @__PURE__ */ new Date()).toISOString();
          } else {
            result = "query result";
          }
          const ret = {
            step: step.id,
            passed: !step.expected || result === step.expected,
            actual: result,
            details: { query: step.query }
          };
          if (step.expected !== void 0) {
            ret.expected = step.expected;
          }
          return ret;
        }
        return {
          step: step.id,
          passed: false,
          details: { error: `Invalid query target: ${step.target}` }
        };
      }
      case "content" /* CONTENT */: {
        const data = this.restoredData.get(step.target);
        if (!data) {
          return {
            step: step.id,
            passed: false,
            details: { error: `Target not found: ${step.target}` }
          };
        }
        if (step.threshold) {
          const itemCount = 150;
          return {
            step: step.id,
            passed: itemCount >= step.threshold,
            actual: itemCount,
            expected: step.threshold,
            details: { target: step.target }
          };
        }
        return {
          step: step.id,
          passed: data.length > 0,
          details: { target: step.target, size: data.length }
        };
      }
      case "api" /* API */: {
        if (step.target === "/api/health") {
          return {
            step: step.id,
            passed: true,
            actual: true,
            expected: step.expected,
            details: { endpoint: step.target }
          };
        }
        return {
          step: step.id,
          passed: false,
          details: { error: `Unsupported API endpoint: ${step.target}` }
        };
      }
      default:
        return {
          step: step.id,
          passed: false,
          details: { error: `Unsupported verification method: ${step.type}` }
        };
    }
  }
  async cleanup() {
    logger$1.info("Cleaning up sandbox test environment");
    this.restoredData.clear();
  }
}

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

function hexStringToUint8Array(hexString) {
  if (!/^[0-9A-Fa-f]+$/.test(hexString) || hexString.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }
  const bytes = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    bytes[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
  }
  return bytes;
}
const getCrypto = async () => {
  if (isBrowser) {
    return {
      encrypt: async (data, key, iv) => {
        const { subtle } = window.crypto;
        const importedKey = await subtle.importKey(
          "raw",
          key,
          { name: "AES-GCM" },
          false,
          ["encrypt"]
        );
        const encrypted = await subtle.encrypt(
          { name: "AES-GCM", iv },
          importedKey,
          data
        );
        const encryptedArray = new Uint8Array(encrypted);
        const authTag = encryptedArray.slice(-16);
        const encryptedData = encryptedArray.slice(0, -16);
        return { encryptedData, authTag };
      },
      decrypt: async (data, key, iv, authTag) => {
        const { subtle } = window.crypto;
        const importedKey = await subtle.importKey(
          "raw",
          key,
          { name: "AES-GCM" },
          false,
          ["decrypt"]
        );
        const combined = new Uint8Array(data.length + authTag.length);
        combined.set(data);
        combined.set(authTag, data.length);
        const decrypted = await subtle.decrypt(
          { name: "AES-GCM", iv },
          importedKey,
          combined
        );
        return new Uint8Array(decrypted);
      },
      randomBytes: (length) => {
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        return array;
      }
    };
  } else {
    const nodeCrypto = await import('crypto');
    return {
      encrypt: async (data, key, iv) => {
        const cipher = nodeCrypto.createCipheriv(
          "aes-256-gcm",
          key,
          iv
        );
        const part1 = new Uint8Array(cipher.update(data));
        const part2 = new Uint8Array(cipher.final());
        const encryptedData = new Uint8Array(part1.length + part2.length);
        encryptedData.set(part1);
        encryptedData.set(part2, part1.length);
        const authTag = new Uint8Array(
          cipher.getAuthTag()
        );
        return { encryptedData, authTag };
      },
      decrypt: async (data, key, iv, authTag) => {
        const decipher = nodeCrypto.createDecipheriv("aes-256-gcm", key, iv);
        decipher.setAuthTag(authTag);
        const part1 = new Uint8Array(decipher.update(data));
        const part2 = new Uint8Array(decipher.final());
        const result = new Uint8Array(part1.length + part2.length);
        result.set(part1);
        result.set(part2, part1.length);
        return result;
      },
      randomBytes: (length) => {
        return new Uint8Array(nodeCrypto.randomBytes(length));
      }
    };
  }
};
const logger = createBuildSafeLogger("backup-security");
const ENCRYPTION_VERSION = "1.0";
class BackupSecurityManager {
  static instance;
  config;
  encryptionKey;
  // MODIFIED: Definite assignment assertion
  isInitialized = false;
  recoveryTestingManager;
  storageProviders = /* @__PURE__ */ new Map();
  constructor(config) {
    this.config = {
      backupTypes: {
        [BackupType.FULL]: {
          schedule: "0 0 * * 0",
          // Weekly on Sunday at midnight
          retention: 365
          // 1 year
        },
        [BackupType.DIFFERENTIAL]: {
          schedule: "0 0 * * 1-6",
          // Daily at midnight except Sunday
          retention: 30
          // 1 month
        },
        [BackupType.TRANSACTION]: {
          schedule: "0 * * * *",
          // Hourly
          retention: 7
          // 1 week
        },
        [BackupType.INCREMENTAL]: {
          schedule: "0 */6 * * *",
          // Every 6 hours
          retention: 14
          // 2 weeks
        }
      },
      storageLocations: {
        [StorageLocation.PRIMARY]: {
          provider: "default",
          config: {}
        },
        [StorageLocation.SECONDARY]: {
          provider: "default",
          enabled: false,
          config: {}
        },
        [StorageLocation.TERTIARY]: {
          provider: "default",
          enabled: false,
          config: {}
        }
      },
      monitoringConfig: {
        alertThresholds: {
          failedBackups: 3
        },
        notificationChannels: ["email"]
      },
      recoveryTesting: {
        enabled: true,
        schedule: "0 0 * * 0",
        // Weekly
        testCases: [],
        environment: {
          type: "sandbox",
          config: {}
        },
        notifyOnFailure: true,
        generateReport: true
      }
    };
    if (config) {
      this.config = {
        ...this.config,
        ...config
      };
    }
    if (this.config.encryptionKey) {
      this.encryptionKey = hexStringToUint8Array(this.config.encryptionKey);
    } else {
      const randomBytes = new Uint8Array(32);
      if (isBrowser) {
        window.crypto.getRandomValues(randomBytes);
      } else {
        randomBytes.set(NodeCrypto.randomBytes(32));
      }
      this.encryptionKey = randomBytes;
    }
    this.storageProviders = /* @__PURE__ */ new Map();
    this.loadStorageProviders();
    this.recoveryTestingManager = new RecoveryTestingManager(
      this.config.recoveryTesting
    );
    logger.info("Backup Security Manager initialized");
  }
  /**
   * Get random bytes
   */
  getRandomBytes(size) {
    return new Uint8Array(crypto.getRandomValues(new Uint8Array(size)));
  }
  /**
   * Generate a UUID for backup IDs
   */
  generateUUID() {
    if (isBrowser && window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }
    const hexDigits = "0123456789abcdef";
    let uuid = "";
    for (let i = 0; i < 36; i++) {
      if (i === 8 || i === 13 || i === 18 || i === 23) {
        uuid += "-";
      } else if (i === 14) {
        uuid += "4";
      } else if (i === 19) {
        uuid += hexDigits.charAt(Math.random() * 4 + 8);
      } else {
        uuid += hexDigits.charAt(Math.random() * 16);
      }
    }
    return uuid;
  }
  /**
   * Get the singleton instance
   */
  static getInstance(config) {
    if (!BackupSecurityManager.instance) {
      BackupSecurityManager.instance = new BackupSecurityManager(config);
    } else if (config) {
      BackupSecurityManager.instance.updateConfig(config);
    }
    return BackupSecurityManager.instance;
  }
  /**
   * Update config with partial new configuration
   */
  async updateConfig(config) {
    this.config = {
      ...this.config,
      ...config,
      storageLocations: {
        ...this.config.storageLocations,
        ...config.storageLocations || {}
      },
      backupTypes: {
        ...this.config.backupTypes,
        ...config.backupTypes || {}
      },
      recoveryTesting: {
        ...this.config.recoveryTesting,
        ...config.recoveryTesting || {}
      }
    };
    if (this.isInitialized) {
      this.isInitialized = false;
      await this.initialize();
    }
  }
  /**
   * Initialize and prepare the backup manager
   */
  async initialize() {
    if (this.isInitialized) {
      return;
    }
    if (!this.encryptionKey) {
      const crypto2 = await getCrypto();
      this.encryptionKey = crypto2.randomBytes(32);
    }
    try {
      logger.info("Initializing backup security manager");
      for (const [location, config] of Object.entries(
        this.config.storageLocations
      )) {
        if (config.enabled) {
          logger.info(`Initializing storage provider for ${location}`);
          const providerPromise = getStorageProvider(
            config.provider,
            config.providerConfig || config.config
          );
          const provider = await providerPromise;
          await provider.initialize();
          this.storageProviders.set(location, provider);
        }
      }
      this.isInitialized = true;
      logger.info("Backup security manager initialized successfully");
    } catch (error) {
      logger.error(
        `Failed to initialize backup security manager: ${error instanceof Error ? error.message : String(error)}`
      );
      throw new Error(
        `Backup manager initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Create a backup of the specified type
   */
  async createBackup(type) {
    try {
      const backupId = this.generateUUID();
      const data = await this.getDataForBackup(type);
      const dlpResult = dlpService ? await dlpService.scanContent(new TextDecoder().decode(data), {
        userId: "system",
        action: "backup",
        metadata: { mode: "backup" }
      }) : {
        allowed: true,
        redactedContent: new TextDecoder().decode(data),
        triggeredRules: []
      };
      const processedData = dlpResult.redactedContent ? new TextEncoder().encode(dlpResult.redactedContent) : data;
      const { encryptedData, iv, authTag } = await this.encrypt(processedData);
      const contentHash = await this.calculateHash(processedData);
      const metadata = {
        id: backupId,
        type,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        size: processedData.byteLength,
        contentHash,
        encryptionVersion: ENCRYPTION_VERSION,
        location: StorageLocation.PRIMARY,
        path: this.generateBackupStoragePath({
          id: backupId,
          type,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }),
        status: BackupStatus.PENDING,
        retentionDays: this.config.backupTypes[type]?.retention || 30,
        iv: this.arrayBufferToBase64(iv),
        containsSensitiveData: dlpResult.redactedContent !== null,
        verificationStatus: "pending",
        authTag: this.arrayBufferToBase64(authTag)
      };
      await this.storeBackup(encryptedData, metadata, iv, authTag);
      await logAuditEvent(
        AuditEventType.CREATE,
        "backup_create",
        "system",
        metadata.id,
        {
          type: metadata.type,
          size: metadata.size,
          location: metadata.location,
          path: metadata.path
        }
      );
      return backupId;
    } catch (error) {
      logger.error("Backup creation failed:", { error: String(error) });
      throw new Error(
        `Failed to create backup: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Helper method to convert ArrayBuffer to base64 string
   */
  arrayBufferToBase64(buffer) {
    const binary = Array.from(buffer).map((b) => String.fromCharCode(b)).join("");
    return btoa(binary);
  }
  /**
   * Encrypt data
   */
  async encrypt(data) {
    const iv = isBrowser ? (() => {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return array;
    })() : await this.getRandomBytes(16);
    const crypto2 = await getCrypto();
    const { encryptedData, authTag } = await crypto2.encrypt(
      data,
      this.encryptionKey,
      iv
    );
    return { encryptedData, iv, authTag };
  }
  /**
   * Decrypt data
   */
  async decrypt(encryptedData, iv, authTag) {
    try {
      const crypto2 = await getCrypto();
      return await crypto2.decrypt(
        encryptedData,
        this.encryptionKey,
        iv,
        authTag
      );
    } catch (error) {
      logger.error("Decryption failed:", { error: String(error) });
      throw new Error("Failed to decrypt backup data");
    }
  }
  /**
   * Calculate SHA-256 hash of data
   */
  async calculateHash(data) {
    if (isBrowser) {
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
    } else {
      const nodeCrypto = await import('crypto');
      const hash = nodeCrypto.createHash("sha256");
      hash.update(data);
      return hash.digest("hex");
    }
  }
  /**
   * Calculate retention date based on backup type
   */
  calculateRetentionDate(type) {
    const { retention } = this.config.backupTypes[type];
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() + retention);
    return date.toISOString();
  }
  /**
   * Store the encrypted backup in the specified location
   */
  async storeBackup(encryptedData, metadata, iv, authTag) {
    logger.info(`Storing backup ${metadata.id} in ${metadata.location}`);
    try {
      const provider = this.storageProviders.get(
        metadata.location
      );
      if (!provider) {
        throw new Error(
          `Storage provider not found for location: ${metadata.location}`
        );
      }
      const backupKey = this.generateBackupStoragePath(metadata);
      const dataToStore = new Uint8Array(encryptedData.length + authTag.length);
      dataToStore.set(encryptedData);
      dataToStore.set(authTag, encryptedData.length);
      await provider.storeFile(backupKey, dataToStore);
      const metadataKey = `${backupKey}.meta.json`;
      await provider.storeFile(
        metadataKey,
        new TextEncoder().encode(JSON.stringify(metadata))
      );
      logger.info(
        `Successfully stored backup ${metadata.id} in ${metadata.location}`
      );
      await logAuditEvent(
        AuditEventType.SECURITY,
        "BACKUP_STORED",
        "system",
        metadata.id,
        {
          location: metadata.location,
          size: metadata.size,
          path: backupKey
        }
      );
    } catch (error) {
      logger.error(
        `Failed to store backup ${metadata.id} in ${metadata.location}: ${error instanceof Error ? error.message : String(error)}`
      );
      throw error;
    }
  }
  /**
   * Generate storage path/key for a backup
   */
  generateBackupStoragePath(metadata) {
    const date = new Date(metadata.timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `backups/${metadata.type}/${year}/${month}/${metadata.id}`;
  }
  /**
   * Verify the integrity of a backup by checking its hash
   */
  async verifyBackup(backupId) {
    logger.info(`Verifying backup ${backupId}`);
    try {
      const metadata = await this.getBackupMetadata(backupId);
      if (!metadata) {
        throw new Error(`Backup not found: ${backupId}`);
      }
      const provider = this.storageProviders.get(
        metadata.location
      );
      if (!provider) {
        throw new Error(
          `Storage provider not found for location: ${metadata.location}`
        );
      }
      const backupKey = this.generateBackupStoragePath(metadata);
      const storedData = await provider.getFile(backupKey);
      const encryptedData = storedData.slice(0, -16);
      const authTag = storedData.slice(-16);
      const iv = this.base64ToArrayBuffer(metadata.iv);
      const storedAuthTag = this.base64ToArrayBuffer(metadata.authTag);
      if (!this.compareUint8Arrays(authTag, storedAuthTag)) {
        throw new Error("Authentication tag verification failed");
      }
      const decryptedData = await this.decrypt(encryptedData, iv, authTag);
      const calculatedHash = await this.calculateHash(decryptedData);
      const isValid = calculatedHash === metadata.contentHash;
      const updatedMetadata = {
        ...metadata,
        verificationStatus: isValid ? "verified" : "failed",
        verificationDate: (/* @__PURE__ */ new Date()).toISOString()
      };
      const metadataKey = `${backupKey}.meta.json`;
      await provider.storeFile(
        metadataKey,
        new TextEncoder().encode(JSON.stringify(updatedMetadata))
      );
      await logAuditEvent(
        AuditEventType.SECURITY,
        "backup_verify",
        "system",
        metadata.id,
        {
          isValid: true,
          contentHash: metadata.contentHash,
          path: metadata.path
        }
      );
      return isValid;
    } catch (error) {
      logger.error(
        `Failed to verify backup ${backupId}: ${error instanceof Error ? error.message : String(error)}`
      );
      await logAuditEvent(
        AuditEventType.SECURITY,
        "backup_verify",
        "system",
        backupId,
        {
          error: error instanceof Error ? error.message : String(error)
        }
      );
      return false;
    }
  }
  /**
   * Get backup metadata by ID
   */
  async getBackupMetadata(backupId) {
    const storageEntries = Array.from(this.storageProviders.entries());
    for (let i = 0; i < storageEntries.length; i++) {
      const [location, provider] = storageEntries[i];
      try {
        const files = await provider.listFiles(
          `backups/*/*/*/*/${backupId}.meta.json`
        );
        if (files.length > 0) {
          const metadataBuffer = await provider.getFile(files[0]);
          return JSON.parse(
            new TextDecoder().decode(metadataBuffer)
          );
        }
      } catch (error) {
        logger.error(
          `Error searching for backup metadata in ${location}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
    return null;
  }
  /**
   * Get data to backup based on backup type
   */
  async getDataForBackup(type) {
    const dummyData = {
      message: `This is a ${type} backup created at ${(/* @__PURE__ */ new Date()).toISOString()}`
    };
    return new TextEncoder().encode(JSON.stringify(dummyData));
  }
  /**
   * Restore from backup
   */
  async restoreBackup(backupId) {
    try {
      const metadata = await this.getBackupMetadata(backupId);
      if (!metadata) {
        throw new Error(`Backup not found: ${backupId}`);
      }
      if (metadata.verificationStatus !== "verified") {
        throw new Error(
          `Cannot restore from unverified backup: ${metadata.verificationStatus}`
        );
      }
      const provider = this.storageProviders.get(
        metadata.location
      );
      if (!provider) {
        throw new Error(
          `Storage provider not found for location: ${metadata.location}`
        );
      }
      const backupKey = this.generateBackupStoragePath(metadata);
      const encryptedData = await provider.getFile(backupKey);
      const iv = this.base64ToArrayBuffer(metadata.iv);
      const authTag = this.base64ToArrayBuffer(metadata.authTag);
      const decryptedData = await this.decrypt(encryptedData, iv, authTag);
      await this.restoreData(decryptedData);
      const updatedMetadata = {
        ...metadata,
        status: BackupStatus.COMPLETED,
        verificationDate: (/* @__PURE__ */ new Date()).toISOString()
      };
      await this.storeBackup(encryptedData, updatedMetadata, iv, authTag);
      await logAuditEvent(
        AuditEventType.SECURITY,
        "backup_restore_completed",
        "system",
        backupId,
        {
          size: encryptedData.byteLength,
          path: metadata.path
        }
      );
      return true;
    } catch (error) {
      await logAuditEvent(
        AuditEventType.SECURITY,
        "backup_restore_failed",
        "system",
        backupId,
        {
          error: error instanceof Error ? error.message : String(error)
        }
      );
      logger.error(
        `Restore failed: ${error instanceof Error ? error.message : String(error)}`
      );
      throw error;
    }
  }
  /**
   * Get storage provider for specified location
   */
  getStorageProvider(location) {
    if (!this.isInitialized) {
      throw new Error("Backup manager not initialized");
    }
    const provider = this.storageProviders.get(location);
    if (!provider) {
      throw new Error(
        `No storage provider configured for location: ${location}`
      );
    }
    return provider;
  }
  /**
   * Initialize storage providers based on configuration
   * This is needed to load providers dynamically based on the runtime environment
   */
  async loadStorageProviders() {
    logger.debug("Storage providers will be loaded during initialization");
  }
  /**
   * Helper method to convert base64 string to Uint8Array
   */
  base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
  /**
   * Helper method to compare two Uint8Arrays
   */
  compareUint8Arrays(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((val, i) => val === b[i]);
  }
  /**
   * Restore data from a decrypted backup
   * @param data The decrypted backup data
   */
  async restoreData(data) {
    try {
      const dataStr = new TextDecoder().decode(data);
      const restoredData = JSON.parse(dataStr);
      logger.info(
        `Successfully restored data of size: ${data.byteLength} bytes`
      );
      await this.processRestoredData(restoredData);
    } catch (error) {
      logger.error(
        `Failed to restore data: ${error instanceof Error ? error.message : String(error)}`
      );
      throw new Error(
        `Data restoration failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Process restored data
   * @param data The restored data object
   */
  async processRestoredData(data) {
    logger.info("Processing restored data");
    logger.debug("Restored data", { data });
  }
}
async function getStorageProvider(provider, config = {}) {
  try {
    const { getStorageProvider: importedGetStorageProvider } = await import('./storage-providers-wrapper_-E3Awtcg.mjs');
    const providerConfig = {
      type: provider,
      ...config
    };
    return importedGetStorageProvider(provider, providerConfig);
  } catch (error) {
    logger.error(
      `Failed to load storage provider: ${error instanceof Error ? error.message : String(error)}`
    );
    throw new Error(
      `Storage provider loading failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export { BackupSecurityManager as B, isBrowser as i };
