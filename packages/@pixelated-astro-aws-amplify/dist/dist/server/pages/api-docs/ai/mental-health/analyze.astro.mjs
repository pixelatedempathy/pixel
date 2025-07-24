;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2d5d2b2b-4577-4912-9a9b-81516f841ded",e._sentryDebugIdIdentifier="sentry-dbid-2d5d2b2b-4577-4912-9a9b-81516f841ded")}catch(e){}}();import '../../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../../renderers.mjs';

const get = async () => {
  return new Response("", {
    status: 302,
    headers: {
      Location: "/api/ai/mental-health"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
