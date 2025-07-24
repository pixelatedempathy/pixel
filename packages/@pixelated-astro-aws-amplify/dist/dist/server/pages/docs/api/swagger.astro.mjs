;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3b301d5b-b787-4bb8-aac1-409d731556e0",e._sentryDebugIdIdentifier="sentry-dbid-3b301d5b-b787-4bb8-aac1-409d731556e0")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$DocumentationLayout } from '../../../chunks/DocumentationLayout_ChP9fjW6.mjs';
/* empty css                                         */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Swagger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <!-- Load Swagger UI assets via CDN to avoid TypeScript issues --> <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css">  <script>
  // Load the Swagger UI script
  document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js'
    script.onload = function () {
      // Initialize Swagger UI
      const ui = window.SwaggerUIBundle({
        url: '/docs/api/_openapi.yaml',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIBundle.SwaggerUIStandalonePreset,
        ],
        layout: 'BaseLayout',
        persistAuthorization: true,
        requestInterceptor: function (req) {
          // Add CSRF protection if needed
          return req
        },
      })

      // Store UI instance for debugging
      window.ui = ui
    }
    document.body.appendChild(script)
  })
<\/script>`])), renderComponent($$result, "DocumentationLayout", $$DocumentationLayout, { "title": "API Reference - Swagger UI", "description": "Interactive API documentation using Swagger UI", "data-astro-cid-y4wa22pg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-y4wa22pg>API Reference - Swagger UI</h1> <p data-astro-cid-y4wa22pg>
This interactive documentation allows you to explore and test the Pixelated
    Empathy API directly from your browser. You can view request parameters,
    response formats, and even make test API calls.
</p> <div class="card mb-4" data-astro-cid-y4wa22pg> <div class="card-title" data-astro-cid-y4wa22pg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-y4wa22pg> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-y4wa22pg></path> </svg>
Important Note
</div> <p data-astro-cid-y4wa22pg>
To make API calls from this page, you'll need a valid API key. You can
      obtain one from the
<a href="/dashboard/developer" data-astro-cid-y4wa22pg>developer dashboard</a>. Add your API key
      to the "Authorize" dialog to authenticate your requests.
</p> </div> <div id="swagger-ui" class="swagger-ui-container" data-astro-cid-y4wa22pg></div> ` }));
}, "/root/pixel/src/pages/docs/api/swagger.astro", void 0);

const $$file = "/root/pixel/src/pages/docs/api/swagger.astro";
const $$url = "/docs/api/swagger";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Swagger,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
