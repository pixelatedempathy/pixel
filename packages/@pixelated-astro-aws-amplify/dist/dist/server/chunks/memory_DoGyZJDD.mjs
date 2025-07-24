;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1f31877-b4e9-40e8-ae44-7893a4fce56a",e._sentryDebugIdIdentifier="sentry-dbid-b1f31877-b4e9-40e8-ae44-7893a4fce56a")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';

class InMemoryStorageProvider {
  constructor(config) {
    this.config = config;
  }
  storage = /* @__PURE__ */ new Map();
  initialized = false;
  async initialize() {
    this.initialized = true;
    console.info("In-memory storage provider initialized");
  }
  async listFiles(pattern) {
    this.checkInitialized();
    if (!pattern) {
      return Array.from(this.storage.keys());
    }
    const regexPattern = pattern.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".");
    const regex = new RegExp(`^${regexPattern}$`);
    return Array.from(this.storage.keys()).filter((key) => regex.test(key));
  }
  async storeFile(key, data) {
    this.checkInitialized();
    const clonedData = new Uint8Array(data);
    this.storage.set(key, clonedData);
  }
  async getFile(key) {
    this.checkInitialized();
    const data = this.storage.get(key);
    if (!data) {
      throw new Error(`File not found: ${key}`);
    }
    return new Uint8Array(data);
  }
  async deleteFile(key) {
    this.checkInitialized();
    if (!this.storage.has(key)) {
      console.warn(`File not found for deletion: ${key}`);
      return;
    }
    this.storage.delete(key);
  }
  checkInitialized() {
    if (!this.initialized) {
      throw new Error("Storage provider not initialized");
    }
  }
}

export { InMemoryStorageProvider };
