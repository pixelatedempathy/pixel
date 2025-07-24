;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b5d965ad-4e5a-4cd8-8b16-472e98e6774b",e._sentryDebugIdIdentifier="sentry-dbid-b5d965ad-4e5a-4cd8-8b16-472e98e6774b")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_GdQMzlRz.mjs';
import { R as RegisterForm } from '../chunks/RegisterForm_BvJhzJtu.mjs';
import { i as isAuthenticated } from '../chunks/auth_Ddp7K708.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const astro = Astro2;
  const redirect = astro.url.searchParams.get("redirect") || "/dashboard";
  const alreadyAuthenticated = await isAuthenticated(astro.cookies);
  if (alreadyAuthenticated) {
    return astro.redirect(redirect);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Sign Up - Pixelated Empathy", "transitionMode": "slide", "data-astro-cid-sgjovbj7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8" data-astro-cid-sgjovbj7> <div class="max-w-md mx-auto" data-astro-cid-sgjovbj7> ${renderComponent($$result2, "RegisterForm", RegisterForm, { "client:load": true, "redirectTo": redirect, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/auth/RegisterForm", "client:component-export": "RegisterForm", "data-astro-cid-sgjovbj7": true })} </div> </main> ` })} `;
}, "/root/pixel/src/pages/signup.astro", void 0);

const $$file = "/root/pixel/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
