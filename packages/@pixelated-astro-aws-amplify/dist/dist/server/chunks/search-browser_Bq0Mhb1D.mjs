;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="502e61f7-860a-4070-afb4-bfd7493c2d01",e._sentryDebugIdIdentifier="sentry-dbid-502e61f7-860a-4070-afb4-bfd7493c2d01")}catch(e){}}();import './astro/server_DzSu7Vuv.mjs';

const DEFAULT_CONFIG = {
  indexOptions: {
    tokenize: "forward",
    cache: 100,
    context: true
  },
  searchOptions: {
    limit: 10,
    suggest: true,
    fuzzy: 0.2
  },
  fields: ["title", "content", "tags"],
  boost: {
    title: 2,
    content: 1,
    tags: 3
  }
};
function createFallbackClient() {
  console.warn("Using fallback search implementation");
  return {
    search: () => [],
    importDocuments: () => {
    }
  };
}
class BrowserSearchClient {
  index;
  documents = /* @__PURE__ */ new Map();
  config;
  constructor(Document, config = {}) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
      indexOptions: {
        ...DEFAULT_CONFIG.indexOptions,
        ...config.indexOptions
      },
      searchOptions: {
        ...DEFAULT_CONFIG.searchOptions,
        ...config.searchOptions
      },
      boost: {
        ...DEFAULT_CONFIG.boost,
        ...config.boost
      }
    };
    this.index = new Document({
      document: {
        id: "id",
        index: this.config.fields || ["title", "content", "tags"],
        store: true
      },
      ...this.config.indexOptions
    });
  }
  search(query, options = {}) {
    if (!this.index || !query) {
      return [];
    }
    const searchOptions = {
      ...this.config.searchOptions,
      ...options
    };
    try {
      const results = this.index.search(query, searchOptions);
      const searchResults = [];
      const processedIds = /* @__PURE__ */ new Set();
      for (const result of results) {
        const matches = result.result;
        for (const docId of matches) {
          if (processedIds.has(docId)) {
            continue;
          }
          processedIds.add(docId);
          const originalDoc = this.documents.get(docId);
          if (originalDoc) {
            searchResults.push(originalDoc);
          }
        }
      }
      return searchResults;
    } catch (error) {
      console.error("Search failed:", error);
      return [];
    }
  }
  importDocuments(docs) {
    if (!this.index) {
      return;
    }
    for (const doc of docs) {
      this.documents.set(doc.id, doc);
      try {
        this.index.add(doc);
      } catch (error) {
        console.error(`Failed to add document ${doc.id} to index:`, error);
      }
    }
  }
}
async function initBrowserSearch(config = {}) {
  if (typeof window === "undefined") {
    return createFallbackClient();
  }
  try {
    let Document;
    try {
      const flexsearchPath = "flexsearch";
      const flexsearch = await import(flexsearchPath);
      Document = flexsearch.default?.Document || flexsearch.Document;
    } catch (err) {
      console.warn(
        "Failed to load flexsearch directly, trying alternative path:",
        err
      );
      try {
        const documentModulePath = "flexsearch/dist/module/document";
        const documentModule = await import(documentModulePath);
        Document = documentModule.default;
      } catch (docErr) {
        console.error(
          "Failed to load flexsearch Document from alternate path:",
          docErr
        );
        throw new Error("Cannot load flexsearch Document");
      }
    }
    if (Document) {
      return new BrowserSearchClient(Document, config);
    } else {
      console.error(
        "Failed to load flexsearch Document class - module loaded but Document not found"
      );
      return createFallbackClient();
    }
  } catch (error) {
    console.error("Error loading flexsearch:", error);
    return createFallbackClient();
  }
}

export { initBrowserSearch };
//# sourceMappingURL=search-browser_Bq0Mhb1D.mjs.map
