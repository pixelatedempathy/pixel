;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71a6eefc-f105-457f-b194-3acfae32114a",e._sentryDebugIdIdentifier="sentry-dbid-71a6eefc-f105-457f-b194-3acfae32114a")}catch(e){}}();import './astro/server_Ck5BzePu.mjs';

const MentalLLaMAPythonBridge = class {
  constructor() {
    console.warn("Python bridge not available in browser environment");
  }
  async initialize() {
    return false;
  }
  isReady() {
    return false;
  }
  async analyzeTextWithPythonModel() {
    throw new Error("Python bridge not available in browser environment");
  }
  async runIMHIEvaluation() {
    throw new Error("Python bridge not available in browser environment");
  }
  async shutdown() {
  }
  pythonBridgeDisabled = true;
};

export { MentalLLaMAPythonBridge };
