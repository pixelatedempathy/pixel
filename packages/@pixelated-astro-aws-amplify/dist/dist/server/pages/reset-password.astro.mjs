;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75392de2-c996-4b0b-9582-ff4c4b9e8d0c",e._sentryDebugIdIdentifier="sentry-dbid-75392de2-c996-4b0b-9582-ff4c4b9e8d0c")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_GdQMzlRz.mjs';
import { i as isAuthenticated } from '../chunks/auth_Ddp7K708.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { u as useAuth } from '../chunks/useAuth_Cz5Kpe2N.mjs';
import { toast } from '../chunks/toast_DKDABlZp.mjs';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

function PasswordResetRequestForm() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    setIsLoading(true);
    try {
      const loadingToastId = toast.loading("Sending password reset email...");
      const success = await resetPassword(
        email,
        `${window.location.origin}/auth-callback`
      );
      toast.dismiss(loadingToastId);
      if (success) {
        document.dispatchEvent(
          new CustomEvent("password-reset-request-success")
        );
        setEmail("");
      } else {
        throw new Error("Failed to send password reset email");
      }
    } catch (error) {
      let errorMessage = "An error occurred while requesting password reset";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      document.dispatchEvent(
        new CustomEvent("password-reset-request-error", {
          detail: { message: errorMessage }
        })
      );
      console.error("Password reset request error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          disabled: isLoading,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
          placeholder: "Enter your email"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading,
        className: "w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        children: isLoading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "loading-spinner" }),
          /* @__PURE__ */ jsx("span", { children: "Sending..." })
        ] }) : /* @__PURE__ */ jsx("span", { children: "Send Reset Link" })
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsx("a", { href: "/login", className: "text-sm text-primary hover:underline", children: "Back to login" }) })
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  let success = false;
  const alreadyAuthenticated = await isAuthenticated(Astro2.cookies);
  if (alreadyAuthenticated) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$AuthLayout, { "title": "Reset Password - Pixelated Empathy", "transitionMode": "slide-up", "data-astro-cid-oiuorpsm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8" data-astro-cid-oiuorpsm> <div class="max-w-md mx-auto" data-astro-cid-oiuorpsm> <div class="text-center mb-8" data-astro-cid-oiuorpsm> <h1 class="text-2xl font-bold" data-astro-cid-oiuorpsm>Reset Password</h1> <p class="text-muted-foreground mt-2" data-astro-cid-oiuorpsm>
Enter your email and we'll send you a link to reset your password
</p> </div> ${success} ${renderComponent($$result2, "PasswordResetRequestForm", PasswordResetRequestForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/PasswordResetRequestForm", "client:component-export": "default", "data-astro-cid-oiuorpsm": true })} </div> </main> ` })}  ${renderScript($$result, "/root/pixel/src/pages/reset-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/reset-password.astro", void 0);

const $$file = "/root/pixel/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
