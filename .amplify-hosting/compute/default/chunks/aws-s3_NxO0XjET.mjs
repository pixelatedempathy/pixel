;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0b80825a-5b91-426f-977e-91838e240b2a",e._sentryDebugIdIdentifier="sentry-dbid-0b80825a-5b91-426f-977e-91838e240b2a")}catch(e){}}();import './astro/server_bjkJ-nhl.mjs';

class S3StorageProvider {
  constructor(config) {
    this.config = config;
    this.bucketName = config.bucket || "";
    if (!this.bucketName) {
      throw new Error("Bucket name is required for S3 storage provider");
    }
  }
  s3 = null;
  bucketName;
  initialized = false;
  async initialize() {
    try {
      const { S3 } = await import('@aws-sdk/client-s3');
      this.s3 = new S3({
        credentials: this.config.credentials,
        region: this.config.region,
        ...this.config.options
      });
      this.initialized = true;
      console.info(
        `AWS S3 storage provider initialized for bucket: ${this.bucketName}`
      );
    } catch (error) {
      console.error("Failed to initialize AWS S3 storage provider:", error);
      throw new Error(
        `AWS S3 initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async listFiles(pattern) {
    this.checkInitialized();
    try {
      const params = {
        Bucket: this.bucketName,
        Prefix: pattern ? pattern.split("*")[0] : void 0
      };
      const { Contents = [] } = await this.s3.listObjects(params);
      const fileNames = Contents.map((item) => item.Key);
      if (pattern && pattern.includes("*")) {
        const regexPattern = pattern.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".");
        const regex = new RegExp(`^${regexPattern}$`);
        return fileNames.filter((name) => regex.test(name));
      }
      return fileNames;
    } catch (error) {
      console.error("Failed to list files from AWS S3:", error);
      throw new Error(
        `Failed to list files: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async storeFile(key, data) {
    this.checkInitialized();
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key,
        Body: Buffer.from(data),
        ContentType: "application/octet-stream"
      };
      await this.s3.putObject(params);
    } catch (error) {
      console.error(`Failed to store file ${key} to AWS S3:`, error);
      throw new Error(
        `Failed to store file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async getFile(key) {
    this.checkInitialized();
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key
      };
      const { Body } = await this.s3.getObject(params);
      return new Uint8Array(await Body.transformToByteArray());
    } catch (error) {
      console.error(`Failed to get file ${key} from AWS S3:`, error);
      throw new Error(
        `Failed to get file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async deleteFile(key) {
    this.checkInitialized();
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key
      };
      await this.s3.deleteObject(params);
    } catch (error) {
      console.error(`Failed to delete file ${key} from AWS S3:`, error);
      throw new Error(
        `Failed to delete file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  checkInitialized() {
    if (!this.initialized) {
      throw new Error("AWS S3 storage provider not initialized");
    }
  }
}

export { S3StorageProvider };
