;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a1137249-95dc-4aaf-a4af-f4cdbf93dba8",e._sentryDebugIdIdentifier="sentry-dbid-a1137249-95dc-4aaf-a4af-f4cdbf93dba8")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { i as isAuthenticated } from '../chunks/auth_DrPSEcKU.mjs';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_BdYC82Kh.mjs';
import { R as RegisterForm } from '../chunks/RegisterForm_DipYyW6-.mjs';
import { $ as $$ClientRouter } from '../chunks/ClientRouter_Csvw1MIg.mjs';
import { $ as $$Icon } from '../chunks/Icon_CGgyUQli.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const astro = Astro2;
  if (await isAuthenticated(astro.cookies)) {
    return astro.redirect("/dashboard");
  }
  const error = astro.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Create Account | Pixelated Empathy", "description": "Join Pixelated Empathy to access mental health resources and personal therapy chat.", "transitionMode": "fade", "data-astro-cid-qraosrxq": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ClientRouter", $$ClientRouter, { "data-astro-cid-qraosrxq": true })} ${maybeRenderHead()}<div class="w-full max-w-md mx-auto p-6 rounded-xl backdrop-blur-sm shadow-xl card-gradient form-container" data-astro-cid-qraosrxq> <div class="text-center mb-6" data-astro-cid-qraosrxq> <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-700/40 to-green-600 mb-3" data-astro-cid-qraosrxq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:user-plus", "class": "w-7 h-7 text-white", "data-astro-cid-qraosrxq": true })} </div> <p class="text-sm text-muted-foreground" data-astro-cid-qraosrxq>
Create your account to get started
</p> </div> ${error && renderTemplate`<div class="alert alert-error mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg" data-astro-cid-qraosrxq> <p class="text-sm text-red-500" data-astro-cid-qraosrxq>${decodeURIComponent(error)}</p> </div>`} ${renderComponent($$result2, "RegisterForm", RegisterForm, { "client:load": true, "showLogin": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/auth/RegisterForm.tsx", "client:component-export": "RegisterForm", "data-astro-cid-qraosrxq": true })} <div class="mt-5 text-center" data-astro-cid-qraosrxq> <p class="text-sm text-muted-foreground" data-astro-cid-qraosrxq>
Already have an account?${" "} <a href="/login" class="text-green-600 dark:text-green-500 hover:underline" data-astro-prefetch data-astro-cid-qraosrxq>
Sign in
</a> </p> </div> </div>  <div class="mt-6 p-4 bg-card/20 backdrop-blur-sm rounded-lg max-w-xs mx-auto flex items-center justify-center space-x-4" data-astro-cid-qraosrxq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:shield", "class": "w-4 h-4 text-green-600", "data-astro-cid-qraosrxq": true })} <span class="text-xs text-muted-foreground" data-astro-cid-qraosrxq>Protected by encryption</span> </div> ` })}  ${renderScript($$result, "/root/pixel/src/pages/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/register.astro", void 0);

const $$file = "/root/pixel/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
