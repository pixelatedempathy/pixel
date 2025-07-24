;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="39d98930-3e08-4265-9aa7-3e660e9a92bb",e._sentryDebugIdIdentifier="sentry-dbid-39d98930-3e08-4265-9aa7-3e660e9a92bb")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { L as LoginForm } from '../chunks/LoginForm_DNb_Y36U.mjs';
import { $ as $$ClientRouter } from '../chunks/ClientRouter_Csvw1MIg.mjs';
import { $ as $$Icon } from '../chunks/Icon_CGgyUQli.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const redirectUrl = Astro2.url.searchParams.get("redirect") || "/dashboard";
  const isFromDashboard = redirectUrl.includes("/dashboard");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sign In | Pixelated Empathy", "description": "Log in to your Pixelated Empathy account to access mental health resources and personal therapy chat.", "bgType": false, "centered": true, "transitionMode": "fade", "isLoginPage": true, "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ClientRouter", $$ClientRouter, { "data-astro-cid-cj4bt2fj": true })} ${maybeRenderHead()}<div class="w-full max-w-md mx-auto p-6 rounded-xl backdrop-blur-sm shadow-xl card-gradient" data-astro-cid-cj4bt2fj> <div class="text-center mb-8" data-astro-cid-cj4bt2fj> <h1 class="text-2xl font-semibold" data-astro-cid-cj4bt2fj>Welcome Back</h1> <p class="text-sm text-muted-foreground mt-1" data-astro-cid-cj4bt2fj>
Sign in to continue to your therapy space
</p> </div> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "redirectTo": redirectUrl, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/auth/LoginForm.tsx", "client:component-export": "LoginForm", "data-astro-cid-cj4bt2fj": true })} <div class="mt-6 text-center" data-astro-cid-cj4bt2fj> <p class="text-sm text-muted-foreground" data-astro-cid-cj4bt2fj>
Don't have an account?${" "} <a href="/register" class="text-primary hover:underline" data-astro-prefetch data-astro-cid-cj4bt2fj>
Sign up
</a> </p> </div> ${isFromDashboard && renderTemplate`<div class="mt-8 p-4 border border-border/50 rounded-lg bg-card/50" data-astro-cid-cj4bt2fj> <div class="flex items-start" data-astro-cid-cj4bt2fj> <div class="mr-3 mt-1" data-astro-cid-cj4bt2fj> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:info", "class": "w-5 h-5 text-primary", "data-astro-cid-cj4bt2fj": true })} </div> <div data-astro-cid-cj4bt2fj> <h3 class="text-sm font-medium" data-astro-cid-cj4bt2fj>Session Required</h3> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-cj4bt2fj>
You need to be logged in to access the dashboard. Please sign in
                with your credentials or create a new account.
</p> </div> </div> </div>`} </div> ` })} `;
}, "/root/pixel/src/pages/signin.astro", void 0);

const $$file = "/root/pixel/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
