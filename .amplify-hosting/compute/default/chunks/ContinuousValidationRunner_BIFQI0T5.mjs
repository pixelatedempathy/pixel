;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d8d3f98e-281b-4807-b9df-92c5b5cbb4e2",e._sentryDebugIdIdentifier="sentry-dbid-d8d3f98e-281b-4807-b9df-92c5b5cbb4e2")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';
import './astro/server_jchCCyc7.mjs';

const appLogger = createBuildSafeLogger("app");
class ContinuousValidationRunner {
  initialised = false;
  history = [];
  async initialize() {
    if (!this.initialised) {
      appLogger.info("ContinuousValidationRunner initialised (stub)");
      this.initialised = true;
    }
  }
  async getRunHistory(limit) {
    return this.history.slice(-limit).reverse();
  }
  async scheduleValidationRuns(_schedule) {
    appLogger.info("scheduleValidationRuns called (stub)");
  }
  async handleWebhook(_payload) {
    appLogger.info("handleWebhook called (stub)");
    return { status: "handled" };
  }
  getState() {
    return {
      initialised: this.initialised,
      historyCount: this.history.length
    };
  }
  stopScheduledRuns() {
    appLogger.info("stopScheduledRuns called (stub)");
  }
}
const validationRunner = new ContinuousValidationRunner();

export { validationRunner as v };
