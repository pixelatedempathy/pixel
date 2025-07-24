;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="757ed475-cf61-4e39-912b-f0e4d6282e7e",e._sentryDebugIdIdentifier="sentry-dbid-757ed475-cf61-4e39-912b-f0e4d6282e7e")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent } from '../chunks/astro/server_Ck5BzePu.mjs';
import 'clsx';
import '../chunks/AuthLayout_BdYC82Kh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$AuthCallback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthCallback;
  const token = Astro2.url.searchParams.get("token");
  const type = Astro2.url.searchParams.get("type");
  const email = Astro2.url.searchParams.get("email");
  if (token && type) {
    if (type === "recovery" && email) {
      try {
        const resetUrl = new URL("/reset-password-confirm", Astro2.url.origin);
        const headers = new Headers();
        headers.append(
          "Set-Cookie",
          `auth_recovery_token=${token}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`
        );
        if (email) {
          headers.append(
            "Set-Cookie",
            `auth_recovery_email=${email}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`
          );
        }
        headers.append("Location", resetUrl.toString());
        return new Response(null, {
          status: 302,
          headers
        });
      } catch (err) {
        console.error("Error handling recovery token:", err);
        return new Response(null, {
          status: 302,
          headers: { Location: "/reset-password?error=invalid_token" }
        });
      }
    } else {
      try {
        return new Response(null, {
          status: 302,
          headers: { Location: "/dashboard" }
        });
      } catch (err) {
        console.error("Error handling auth token:", err);
        return new Response(null, {
          status: 302,
          headers: { Location: "/?error=auth_error" }
        });
      }
    }
  }
  return new Response(null, {
    status: 302,
    headers: { Location: "/" }
  });
}, "/root/pixel/src/pages/auth-callback.astro", void 0);

const $$file = "/root/pixel/src/pages/auth-callback.astro";
const $$url = "/auth-callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AuthCallback,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
