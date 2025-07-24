;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="72434f9f-cea6-4db0-a118-08c1c1b910b3",e._sentryDebugIdIdentifier="sentry-dbid-72434f9f-cea6-4db0-a118-08c1c1b910b3")}catch(e){}}();import '../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const newUrl = new URL(url);
  newUrl.pathname = "/api/v1/search" + newUrl.pathname.substring("/api/search".length);
  return new Response(null, {
    status: 308,
    // Permanent redirect
    headers: {
      Location: newUrl.toString()
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
