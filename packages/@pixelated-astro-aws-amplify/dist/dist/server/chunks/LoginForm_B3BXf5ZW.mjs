;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fc78cde0-253d-4a5a-bad6-1104257387b0",e._sentryDebugIdIdentifier="sentry-dbid-fc78cde0-253d-4a5a-bad6-1104257387b0")}catch(e){}}();import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useAuth } from './useAuth_Cz5Kpe2N.mjs';
import './astro/server_t-wqd6mp.mjs';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY_EMAIL = "auth_remember_email";
const STORAGE_KEY_REMEMBER = "auth_remember_me";
function LoginForm({
  redirectTo,
  showSignup = true,
  showResetPassword = true
}) {
  const { signIn, signInWithOAuth, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("login");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    try {
      const rememberedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
      const rememberedFlag = localStorage.getItem(STORAGE_KEY_REMEMBER) === "true";
      if (rememberedEmail && rememberedFlag) {
        setEmail(rememberedEmail);
        setRememberMe(true);
      }
    } catch (_e) {
      console.error("LocalStorage access error:", _e);
    }
  }, []);
  useEffect(() => {
    if (!toastMessage) {
      return;
    }
    let toastId;
    const { type, message } = toastMessage;
    import('./toast_DKDABlZp.mjs').then(({ toast }) => {
      if (type === "loading") {
        toastId = toast.loading(message);
      } else if (type === "success") {
        toast.success(message);
      } else if (type === "error") {
        toast.error(message);
      } else if (type === "info") {
        toast.info(message);
      }
    });
    return () => {
      if (type === "loading") {
        import('./toast_DKDABlZp.mjs').then(({ toast }) => {
          toast.dismiss(toastId);
        });
      }
    };
  }, [toastMessage]);
  const validateEmail = (email2) => {
    if (!email2) {
      return "Email is required";
    }
    if (!EMAIL_REGEX.test(email2)) {
      return "Please enter a valid email address";
    }
    return void 0;
  };
  const validatePassword = (password2) => {
    if (!password2) {
      return "Password is required";
    }
    if (password2.length < 8) {
      return "Password must be at least 8 characters";
    }
    return void 0;
  };
  const validateForm = () => {
    const newErrors = {};
    const emailError = validateEmail(email);
    if (emailError) {
      newErrors.email = emailError;
    }
    if (mode === "login") {
      const passwordError = validatePassword(password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setToastMessage({
        type: "error",
        message: "Please correct the form errors"
      });
      return;
    }
    setIsLoading(true);
    try {
      if (mode === "login") {
        if (rememberMe) {
          try {
            localStorage.setItem(STORAGE_KEY_EMAIL, email);
            localStorage.setItem(STORAGE_KEY_REMEMBER, "true");
          } catch (_e) {
          }
        } else {
          try {
            localStorage.removeItem(STORAGE_KEY_EMAIL);
            localStorage.removeItem(STORAGE_KEY_REMEMBER);
          } catch (_e) {
          }
        }
        setToastMessage({ type: "loading", message: "Signing in..." });
        const response = await signIn(email, password);
        setToastMessage(null);
        if (response.error) {
          setToastMessage({
            type: "error",
            message: typeof response.error === "object" && response.error !== null ? response.error.message || "Login failed" : "Login failed"
          });
          return;
        }
        setToastMessage({ type: "success", message: "Successfully signed in!" });
      } else if (mode === "reset") {
        setToastMessage({
          type: "loading",
          message: "Sending password reset email..."
        });
        await resetPassword(email, window.location.origin + "/auth-callback");
        setToastMessage(null);
        setToastMessage({
          type: "success",
          message: "Password reset email sent!"
        });
        setResetEmailSent(true);
      }
    } catch (error) {
      setToastMessage({
        type: "error",
        message: error instanceof Error ? `Authentication error: ${error.message}` : "An unexpected error occurred. Please try again."
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setToastMessage({ type: "loading", message: "Connecting to Google..." });
      await signInWithOAuth("google", redirectTo);
      setToastMessage(null);
      setToastMessage({
        type: "info",
        message: "Redirecting to Google authentication..."
      });
    } catch (error) {
      setToastMessage({
        type: "error",
        message: error instanceof Error ? `Google sign-in error: ${error.message}` : "Failed to connect to Google. Please try again."
      });
      setIsLoading(false);
    }
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: void 0 }));
    }
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: void 0 }));
    }
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleEmailBlur = () => {
    setFocusedInput(null);
    const error = validateEmail(email);
    setErrors((prev) => ({ ...prev, email: error }));
  };
  const handlePasswordBlur = () => {
    setFocusedInput(null);
    const error = validatePassword(password);
    setErrors((prev) => ({ ...prev, password: error }));
  };
  if (mode === "reset" && resetEmailSent) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-gradient", children: "Password Reset Email Sent" }),
      /* @__PURE__ */ jsx("p", { children: "Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setMode("login");
            setResetEmailSent(false);
          },
          className: "btn btn-primary mt-4",
          children: "Return to Login"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "auth-form-container text-center form-container", children: [
    mode === "reset" && /* @__PURE__ */ jsx("h2", { className: "text-gradient", children: "Reset Password" }),
    mode === "login" && /* @__PURE__ */ jsx("h2", { className: "text-gradient", children: "Sign In" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "auth-form", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `input-wrapper ${focusedInput === "email" ? "focused" : ""} ${errors.email ? "error" : ""}`,
            children: /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                type: "email",
                value: email,
                onChange: handleEmailChange,
                onFocus: () => setFocusedInput("email"),
                onBlur: handleEmailBlur,
                required: true,
                disabled: isLoading,
                placeholder: "your@email.com",
                className: "form-input",
                "aria-invalid": errors.email ? "true" : "false",
                "aria-describedby": errors.email ? "email-error" : void 0,
                autoComplete: "email"
              }
            )
          }
        ),
        errors.email && /* @__PURE__ */ jsx("div", { id: "email-error", className: "error-message text-sm mt-1", children: errors.email })
      ] }),
      mode === "login" && /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `input-wrapper ${focusedInput === "password" ? "focused" : ""} ${errors.password ? "error" : ""}`,
            children: /* @__PURE__ */ jsx(
              "input",
              {
                id: "password",
                type: "password",
                value: password,
                onChange: handlePasswordChange,
                onFocus: () => setFocusedInput("password"),
                onBlur: handlePasswordBlur,
                required: true,
                disabled: isLoading,
                placeholder: "••••••••",
                className: "form-input",
                "aria-invalid": errors.password ? "true" : "false",
                "aria-describedby": errors.password ? "password-error" : void 0,
                autoComplete: "current-password"
              }
            )
          }
        ),
        errors.password && /* @__PURE__ */ jsx("div", { id: "password-error", className: "error-message text-sm mt-1", children: errors.password })
      ] }),
      mode === "login" && /* @__PURE__ */ jsx("div", { className: "form-group remember-me", children: /* @__PURE__ */ jsxs("label", { htmlFor: "rememberMeCheckbox", className: "checkbox-container", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "rememberMeCheckbox",
            type: "checkbox",
            checked: rememberMe,
            onChange: handleRememberMeChange,
            disabled: isLoading,
            className: "remember-checkbox"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "checkbox-label", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "loading-spinner" }),
        /* @__PURE__ */ jsx("span", { children: mode === "login" ? "Signing in..." : "Sending..." })
      ] }) : /* @__PURE__ */ jsx("span", { children: mode === "login" ? "Sign In" : "Send Reset Link" }) })
    ] }),
    mode === "login" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "auth-separator", children: /* @__PURE__ */ jsx("hr", { className: "my-4" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleGoogleSignIn,
          className: "btn btn-outline",
          disabled: isLoading,
          "aria-label": "Sign in with Google",
          children: "Continue with Google"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "auth-links", children: [
      mode === "login" && showResetPassword && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMode("reset"),
          className: "text-gray-400 text-sm hover:text-gray-300 underline",
          children: "Forgot your password?"
        }
      ),
      mode === "reset" && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMode("login"),
          className: "text-gray-400 text-sm hover:text-gray-300 underline",
          children: "Back to Login"
        }
      ),
      mode === "login" && showSignup && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "/signup",
          className: "text-gray-400 text-sm hover:text-gray-300 underline mt-2",
          children: "Don't have an account? Sign up"
        }
      )
    ] })
  ] });
}

export { LoginForm as L };
