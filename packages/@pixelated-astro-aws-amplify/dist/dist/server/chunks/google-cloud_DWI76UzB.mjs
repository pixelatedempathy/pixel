;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dbe7b914-6e05-4ab4-9a81-ebf3fa47471a",e._sentryDebugIdIdentifier="sentry-dbid-dbe7b914-6e05-4ab4-9a81-ebf3fa47471a")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';

class GoogleCloudStorageProvider {
  constructor(config) {
    this.config = config;
    this.bucketName = config.bucket || "";
    if (!this.bucketName) {
      throw new Error(
        "Bucket name is required for Google Cloud Storage provider"
      );
    }
  }
  storage = null;
  bucket = null;
  bucketName;
  initialized = false;
  async initialize() {
    try {
      const { Storage } = await import('@google-cloud/storage');
      this.storage = new Storage({
        credentials: this.config.credentials,
        projectId: this.config.credentials?.project_id,
        ...this.config.options
      });
      this.bucket = this.storage.bucket(this.bucketName);
      this.initialized = true;
      console.info(
        `Google Cloud Storage provider initialized for bucket: ${this.bucketName}`
      );
    } catch (error) {
      console.error(
        "Failed to initialize Google Cloud Storage provider:",
        error
      );
      throw new Error(
        `Google Cloud Storage initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async listFiles(pattern) {
    this.checkInitialized();
    try {
      const options = {};
      if (pattern) {
        const patternParts = pattern.split("*");
        if (patternParts.length > 1) {
          options.prefix = patternParts[0];
        } else {
          options.prefix = pattern;
        }
      }
      const [files] = await this.bucket.getFiles(options);
      const fileNames = files.map((file) => file.name);
      if (pattern && pattern.includes("*")) {
        const regexPattern = pattern.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".");
        const regex = new RegExp(`^${regexPattern}$`);
        return fileNames.filter((name) => regex.test(name));
      }
      return fileNames;
    } catch (error) {
      console.error("Failed to list files from Google Cloud Storage:", error);
      throw new Error(
        `Failed to list files: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async storeFile(key, data) {
    this.checkInitialized();
    try {
      const file = this.bucket.file(key);
      await new Promise((resolve, reject) => {
        const stream = file.createWriteStream({
          resumable: false,
          metadata: {
            contentType: "application/octet-stream"
          }
        });
        stream.on("error", (err) => {
          reject(err);
        });
        stream.on("finish", () => {
          resolve();
        });
        const nodeBuffer = Buffer.from(data);
        stream.end(nodeBuffer);
      });
    } catch (error) {
      console.error(
        `Failed to store file ${key} to Google Cloud Storage:`,
        error
      );
      throw new Error(
        `Failed to store file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async getFile(key) {
    this.checkInitialized();
    try {
      const file = this.bucket.file(key);
      const [exists] = await file.exists();
      if (!exists) {
        throw new Error(`File not found: ${key}`);
      }
      const [fileContent] = await file.download();
      return new Uint8Array(fileContent);
    } catch (error) {
      console.error(
        `Failed to get file ${key} from Google Cloud Storage:`,
        error
      );
      throw new Error(
        `Failed to get file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async deleteFile(key) {
    this.checkInitialized();
    try {
      const file = this.bucket.file(key);
      const [exists] = await file.exists();
      if (!exists) {
        console.warn(`File not found for deletion: ${key}`);
        return;
      }
      await file.delete();
    } catch (error) {
      console.error(
        `Failed to delete file ${key} from Google Cloud Storage:`,
        error
      );
      throw new Error(
        `Failed to delete file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  checkInitialized() {
    if (!this.initialized) {
      throw new Error("Google Cloud Storage provider not initialized");
    }
  }
}

export { GoogleCloudStorageProvider };
