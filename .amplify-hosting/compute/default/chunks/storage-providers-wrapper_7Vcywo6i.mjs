;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9abd681e-8d24-44f6-9178-8d7860873774",e._sentryDebugIdIdentifier="sentry-dbid-9abd681e-8d24-44f6-9178-8d7860873774")}catch(e){}}();import { i as isBrowser } from './index_DdltUk4d.mjs';
import './astro/server_bjkJ-nhl.mjs';

async function getStorageProvider(providerName, config) {
  if (isBrowser) {
    return createBrowserStubProvider();
  }
  let providerModule;
  try {
    switch (providerName) {
      case "google-cloud-storage": {
        providerModule = await import('./google-cloud_DflCX7p7.mjs');
        return new providerModule.GoogleCloudStorageProvider(config);
      }
      case "aws-s3": {
        providerModule = await import('./aws-s3_NxO0XjET.mjs');
        return new providerModule.S3StorageProvider(config);
      }
      case "local-fs": {
        providerModule = await import('./local-fs_C0KyRyLa.mjs');
        return new providerModule.LocalFileSystemProvider(config);
      }
      case "memory": {
        providerModule = await import('./memory_DGH7gI-A.mjs');
        return new providerModule.InMemoryStorageProvider(config);
      }
      case "default":
      default: {
        providerModule = await import('./memory_DGH7gI-A.mjs');
        return new providerModule.InMemoryStorageProvider(config);
      }
    }
  } catch (error) {
    console.error(`Error loading storage provider '${providerName}':`, error);
    providerModule = await import('./memory_DGH7gI-A.mjs');
    return new providerModule.InMemoryStorageProvider(config);
  }
}
function createBrowserStubProvider() {
  return {
    initialize: async () => {
      console.warn(
        "Storage providers are not available in browser environments"
      );
    },
    listFiles: async () => {
      console.warn(
        "Storage providers are not available in browser environments"
      );
      return [];
    },
    storeFile: async () => {
      console.warn(
        "Storage providers are not available in browser environments"
      );
    },
    getFile: async () => {
      console.warn(
        "Storage providers are not available in browser environments"
      );
      return new Uint8Array();
    },
    deleteFile: async () => {
      console.warn(
        "Storage providers are not available in browser environments"
      );
    }
  };
}

export { getStorageProvider };
