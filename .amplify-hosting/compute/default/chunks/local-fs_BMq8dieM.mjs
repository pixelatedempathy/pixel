;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cf1ddb4d-f483-4b5a-967e-8605aa3e520d",e._sentryDebugIdIdentifier="sentry-dbid-cf1ddb4d-f483-4b5a-967e-8605aa3e520d")}catch(e){}}();import './astro/server_DBAAVvAL.mjs';

class LocalFileSystemProvider {
  constructor(config) {
    this.config = config;
    this.basePath = config.path || "";
    if (!this.basePath) {
      throw new Error("Path is required for local filesystem storage provider");
    }
  }
  basePath;
  fs = null;
  path = null;
  initialized = false;
  async initialize() {
    try {
      const fsModule = await import('fs/promises');
      const pathModule = await import('path');
      this.fs = {
        mkdir: fsModule.mkdir,
        readdir: fsModule.readdir,
        writeFile: fsModule.writeFile,
        readFile: fsModule.readFile,
        access: fsModule.access,
        unlink: fsModule.unlink
      };
      this.path = {
        join: pathModule.join,
        dirname: pathModule.dirname,
        relative: pathModule.relative
      };
      await this.fs.mkdir(this.basePath, { recursive: true });
      this.initialized = true;
      console.info(
        `Local filesystem storage provider initialized with base path: ${this.basePath}`
      );
    } catch (error) {
      console.error(
        "Failed to initialize local filesystem storage provider:",
        error
      );
      throw new Error(
        `Local filesystem initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async listFiles(pattern) {
    this.checkInitialized();
    try {
      const allFiles = await this.listFilesRecursively(this.basePath);
      const relativeFiles = allFiles.map(
        (file) => this.path.relative(this.basePath, file)
      );
      if (pattern) {
        const regexPattern = pattern.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".");
        const regex = new RegExp(`^${regexPattern}$`);
        return relativeFiles.filter((name) => regex.test(name));
      }
      return relativeFiles;
    } catch (error) {
      console.error("Failed to list files from local filesystem:", error);
      throw new Error(
        `Failed to list files: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async storeFile(key, data) {
    this.checkInitialized();
    try {
      const fullPath = this.path.join(this.basePath, key);
      const dir = this.path.dirname(fullPath);
      await this.fs.mkdir(dir, { recursive: true });
      await this.fs.writeFile(fullPath, data);
    } catch (error) {
      console.error(`Failed to store file ${key} to local filesystem:`, error);
      throw new Error(
        `Failed to store file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async getFile(key) {
    this.checkInitialized();
    try {
      const fullPath = this.path.join(this.basePath, key);
      await this.fs.access(fullPath);
      const data = await this.fs.readFile(fullPath);
      return new Uint8Array(data);
    } catch (error) {
      console.error(`Failed to get file ${key} from local filesystem:`, error);
      throw new Error(
        `Failed to get file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async deleteFile(key) {
    this.checkInitialized();
    try {
      const fullPath = this.path.join(this.basePath, key);
      try {
        await this.fs.access(fullPath);
      } catch (_error) {
        console.warn(`File not found for deletion: ${key}`);
        return;
      }
      await this.fs.unlink(fullPath);
    } catch (error) {
      console.error(
        `Failed to delete file ${key} from local filesystem:`,
        error
      );
      throw new Error(
        `Failed to delete file: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  checkInitialized() {
    if (!this.initialized) {
      throw new Error("Local filesystem storage provider not initialized");
    }
  }
  // Helper method to list files recursively
  async listFilesRecursively(dir) {
    const entries = await this.fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async (entry) => {
        const fullPath = this.path.join(dir, entry.name);
        return entry.isDirectory() ? await this.listFilesRecursively(fullPath) : fullPath;
      })
    );
    return files.flat();
  }
}

export { LocalFileSystemProvider };
