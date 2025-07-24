;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="795178d4-7e6e-4a6d-a1a3-58766986b328",e._sentryDebugIdIdentifier="sentry-dbid-795178d4-7e6e-4a6d-a1a3-58766986b328")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_C2Fkryh0.mjs';
import { i as isAuthenticated } from '../chunks/auth_B2tmxZMv.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { u as useAuth } from '../chunks/useAuth_wASDLmt-.mjs';
/* empty css                                                  */
export { renderers } from '../renderers.mjs';

function ResetPasswordForm({ token, email }) {
  const { verifyOtp } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const result = await verifyOtp?.({
        token,
        email,
        type: "recovery"
      });
      if (result?.success) {
        const event = new CustomEvent("password-reset-success");
        document.dispatchEvent(event);
      } else {
        throw new Error(
          typeof result?.error === "string" ? result.error : "Password reset failed"
        );
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      const event = new CustomEvent("password-reset-error", {
        detail: { message }
      });
      document.dispatchEvent(event);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "reset-password-form", children: [
    error && /* @__PURE__ */ jsx("div", { className: "error-message mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded", children: error }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group mb-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block mb-2 font-medium", children: "New Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "password",
            type: "password",
            className: "w-full p-2 border rounded",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
            disabled: isLoading,
            minLength: 8,
            placeholder: "••••••••",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx("small", { className: "text-xs text-gray-500 mt-1", children: "Password must be at least 8 characters" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group mb-6", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "confirmPassword", className: "block mb-2 font-medium", children: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "confirmPassword",
            type: "password",
            className: "w-full p-2 border rounded",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            required: true,
            disabled: isLoading,
            placeholder: "••••••••",
            autoComplete: "new-password"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full py-2 px-4 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors",
          disabled: isLoading,
          children: isLoading ? "Resetting Password..." : "Reset Password"
        }
      )
    ] })
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$ResetPasswordConfirm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPasswordConfirm;
  let error = null;
  const token = Astro2.cookies.get("auth_recovery_token")?.value;
  const email = Astro2.cookies.get("auth_recovery_email")?.value;
  const urlToken = Astro2.url.searchParams.get("token");
  const urlType = Astro2.url.searchParams.get("type");
  if (urlToken && urlType === "recovery") {
    const callbackUrl = new URL("/auth-callback", Astro2.url.origin);
    callbackUrl.searchParams.set("token", urlToken);
    callbackUrl.searchParams.set("type", urlType);
    if (email) {
      callbackUrl.searchParams.set("email", email);
    }
    return Astro2.redirect(callbackUrl.toString());
  }
  const alreadyAuthenticated = await isAuthenticated(Astro2.cookies);
  if (alreadyAuthenticated) {
    return Astro2.redirect("/dashboard");
  }
  let validToken = false;
  if (token && email) {
    try {
      validToken = true;
    } catch (err) {
      console.error("Token verification error:", err);
      error = "Invalid or expired token";
    }
  } else if (!token) {
    error = "Missing recovery token. Please use the link from your email.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Reset Password - Pixelated Empathy", "transitionMode": "slide-down", "data-astro-cid-qoq2teek": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8" data-astro-cid-qoq2teek> <div class="max-w-md mx-auto" data-astro-cid-qoq2teek> <div class="text-center mb-8" data-astro-cid-qoq2teek> <h1 class="text-2xl font-bold" data-astro-cid-qoq2teek>Reset Your Password</h1> <p class="text-muted-foreground mt-2" data-astro-cid-qoq2teek>
Create a new password for your account
</p> </div> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4" data-astro-cid-qoq2teek> ${error} </div>`} ${validToken && true && token && email && renderTemplate`${renderComponent($$result2, "ResetPasswordForm", ResetPasswordForm, { "token": token, "email": email, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/ResetPasswordForm", "client:component-export": "ResetPasswordForm", "data-astro-cid-qoq2teek": true })}`} </div> </main> ` })}  ${renderScript($$result, "/root/pixel/src/pages/reset-password-confirm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/reset-password-confirm.astro", void 0);

const $$file = "/root/pixel/src/pages/reset-password-confirm.astro";
const $$url = "/reset-password-confirm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPasswordConfirm,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
