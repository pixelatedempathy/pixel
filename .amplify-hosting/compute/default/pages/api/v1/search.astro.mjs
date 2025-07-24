;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ef571064-f226-48ed-a253-55bbe3f9a957",e._sentryDebugIdIdentifier="sentry-dbid-ef571064-f226-48ed-a253-55bbe3f9a957")}catch(e){}}();import { g as getCollection } from '../../../chunks/_astro_content_DWth_CNt.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

class ServerSearchClient {
  search() {
    return [];
  }
  importDocuments() {
  }
}
const blogSearch = {
  _posts: [],
  addPost(post, content) {
    const summary = content.slice(0, 200).replace(/<[^>]*>?/gm, "");
    const doc = {
      id: post.slug,
      title: post.data.title,
      content: summary,
      url: `/blog/${post.slug}`,
      tags: post.data.tags || []
    };
    if (post.data.category) {
      doc.category = post.data.category;
    }
    this._posts.push(doc);
    if (typeof window !== "undefined" && window.searchClient) {
      window.searchClient.importDocuments([doc]);
    }
  },
  search(query) {
    if (typeof window !== "undefined" && window.searchClient) {
      return window.searchClient.search(query);
    }
    if (!query) {
      return [];
    }
    const lowerQuery = query.toLowerCase();
    return this._posts.filter((post) => {
      return post.title.toLowerCase().includes(lowerQuery) || post.content.toLowerCase().includes(lowerQuery) || post.tags?.some(
        (tag) => tag.toLowerCase().includes(lowerQuery)
      );
    }).map((post) => {
      const result = {
        id: post.id,
        title: post.title,
        content: post.content,
        url: post.url,
        score: 1,
        matches: [{ field: "title", match: post.title }]
      };
      if (post.category) {
        result.category = post.category;
      }
      if (post.tags) {
        result.tags = post.tags;
      }
      return result;
    });
  }
};
function createSearchDocument(id, title, content, url, tags, category) {
  const doc = {
    id,
    title,
    content,
    url
  };
  if (tags) {
    doc.tags = tags;
  }
  if (category) {
    doc.category = category;
  }
  return doc;
}
let searchClientInstance = new ServerSearchClient();
if (typeof window !== "undefined") {
  window._pendingSearchDocs = window._pendingSearchDocs || [];
  const proxyClient = {
    search(query, options) {
      return searchClientInstance.search(query, options);
    },
    importDocuments(documents) {
      if (searchClientInstance instanceof ServerSearchClient) {
        window._pendingSearchDocs = [...window._pendingSearchDocs, ...documents];
      } else {
        searchClientInstance.importDocuments(documents);
      }
    }
  };
  window.searchClient = proxyClient;
  (async () => {
    try {
      const { initBrowserSearch } = await import('../../../chunks/search-browser_Ds0eyuYN.mjs');
      const realClient = await initBrowserSearch();
      if (window._pendingSearchDocs.length > 0) {
        realClient.importDocuments(window._pendingSearchDocs);
        window._pendingSearchDocs = [];
      }
      searchClientInstance = realClient;
    } catch (error) {
      console.error("Failed to load search implementation:", error);
    }
  })();
  searchClientInstance = proxyClient;
}
const searchClient = searchClientInstance;
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    // Use the already-exported blogSearch
    get blogSearch() {
      return blogSearch;
    },
    get searchClient() {
      return searchClient;
    },
    get createSearchDocument() {
      return createSearchDocument;
    }
  };
}

let isIndexed = false;
async function indexPosts() {
  if (isIndexed) {
    return;
  }
  const posts = await getCollection("blog");
  for (const post of posts) {
    const { Content } = await post.render();
    const content = Content.toString();
    blogSearch.addPost(post, content);
  }
  isIndexed = true;
}
const GET = async ({ url }) => {
  const query = url.searchParams.get("q");
  if (!query) {
    return new Response(
      JSON.stringify({
        version: "v1",
        results: []
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-API-Version": "v1"
        }
      }
    );
  }
  await indexPosts();
  const results = blogSearch.search(query);
  return new Response(
    JSON.stringify({
      version: "v1",
      results
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-API-Version": "v1"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
