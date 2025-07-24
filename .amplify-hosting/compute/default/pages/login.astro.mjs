;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8bdf4049-74de-41d9-b3a4-306f045993ee",e._sentryDebugIdIdentifier="sentry-dbid-8bdf4049-74de-41d9-b3a4-306f045993ee")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
import { L as LoginForm } from '../chunks/LoginForm_CcVMLF4a.mjs';
import { $ as $$ClientRouter } from '../chunks/ClientRouter_Dxjf8yEn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const redirectUrl = Astro2.url.searchParams.get("redirect") || "/dashboard";
  const isFromDashboard = redirectUrl.includes("/dashboard");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login | Pixelated Empathy", "description": "Log in to your Pixelated Empathy account to access mental health resources and personal therapy chat.", "bgType": false, "centered": true, "contentClass": "pt-8 pb-8 px-4 flex-grow", "transitionMode": "fade", "isLoginPage": true, "optimizeImages": true, "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ClientRouter", $$ClientRouter, { "data-astro-cid-sgpqyurt": true })} ${maybeRenderHead()}<div class="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "redirectTo": redirectUrl, "showSignup": false, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/auth/LoginForm.tsx", "client:component-export": "LoginForm", "data-astro-cid-sgpqyurt": true })} ${isFromDashboard && renderTemplate`<div class="mt-6 p-4 border border-yellow-500/20 rounded-xl bg-yellow-500/5 text-sm" data-astro-cid-sgpqyurt> <div class="flex items-center justify-center" data-astro-cid-sgpqyurt> <div class="mr-3" data-astro-cid-sgpqyurt> <svg class="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sgpqyurt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-sgpqyurt></path> </svg> </div> <div class="text-center" data-astro-cid-sgpqyurt> <h3 class="text-sm font-medium text-white" data-astro-cid-sgpqyurt>Session Required</h3> <p class="text-xs text-gray-400 mt-1" data-astro-cid-sgpqyurt>
You need to be logged in to access the dashboard.
</p> </div> </div> </div>`} </div> ` })} `;
}, "/root/pixel/src/pages/login.astro", void 0);

const $$file = "/root/pixel/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
