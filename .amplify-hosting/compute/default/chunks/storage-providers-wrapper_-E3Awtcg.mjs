;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="de6fbd57-447a-4951-9f33-df5d5bd4bb3a",e._sentryDebugIdIdentifier="sentry-dbid-de6fbd57-447a-4951-9f33-df5d5bd4bb3a")}catch(e){}}();import { i as isBrowser } from './index_C1LTAoUt.mjs';
import './astro/server_DBAAVvAL.mjs';

async function getStorageProvider(providerName, config) {
  if (isBrowser) {
    return createBrowserStubProvider();
  }
  let providerModule;
  try {
    switch (providerName) {
      case "google-cloud-storage": {
        providerModule = await import('./google-cloud_BkgIibuj.mjs');
        return new providerModule.GoogleCloudStorageProvider(config);
      }
      case "aws-s3": {
        providerModule = await import('./aws-s3_BpqiwBS6.mjs');
        return new providerModule.S3StorageProvider(config);
      }
      case "local-fs": {
        providerModule = await import('./local-fs_BMq8dieM.mjs');
        return new providerModule.LocalFileSystemProvider(config);
      }
      case "memory": {
        providerModule = await import('./memory_CYZvWqNn.mjs');
        return new providerModule.InMemoryStorageProvider(config);
      }
      case "default":
      default: {
        providerModule = await import('./memory_CYZvWqNn.mjs');
        return new providerModule.InMemoryStorageProvider(config);
      }
    }
  } catch (error) {
    console.error(`Error loading storage provider '${providerName}':`, error);
    providerModule = await import('./memory_CYZvWqNn.mjs');
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
