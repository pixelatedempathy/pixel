;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="60752ed3-362c-42a7-a254-04bb063ebcea",e._sentryDebugIdIdentifier="sentry-dbid-60752ed3-362c-42a7-a254-04bb063ebcea")}catch(e){}}();import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { u as useAuth } from './useAuth_D6oRLR3C.mjs';
import './astro/server_bjkJ-nhl.mjs';

function AccessibilityAnnouncer({
  message,
  assertive = false,
  clearDelay = 1e3
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  useEffect(() => {
    if (message) {
      setCurrentMessage(message);
      if (clearDelay > 0) {
        const timer = setTimeout(() => {
          setCurrentMessage("");
        }, clearDelay);
        return () => clearTimeout(timer);
      }
    } else {
      setCurrentMessage("");
    }
  }, [message, clearDelay]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "status",
      "aria-live": assertive ? "assertive" : "polite",
      "aria-atomic": "true",
      className: "sr-only",
      children: currentMessage
    }
  );
}

function MobileFormValidation({
  children,
  onValidationChange,
  validationRules,
  validateOnChange = true,
  validateOnBlur = true,
  validateOnSubmit = true,
  focusFirstInvalidField = true,
  showErrorSummary = false
}) {
  const [errors, setErrors] = useState({});
  const [, setTouchedFields] = useState(/* @__PURE__ */ new Set());
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 767px)").matches || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) {
      return "";
    }
    for (const rule of rules) {
      if (!rule.test(value)) {
        return rule.message;
      }
    }
    return "";
  }, [validationRules]);
  const handleChange = useCallback((e) => {
    const input = e.target;
    const name = input.getAttribute("name");
    if (!name) {
      return;
    }
    setTouchedFields((prev) => {
      const newSet = new Set(prev);
      newSet.add(name);
      return newSet;
    });
    if (validateOnChange) {
      const { value } = input;
      const error = validateField(name, value);
      let newErrors = {};
      setErrors((prev) => {
        newErrors = { ...prev };
        if (error) {
          newErrors[name] = error;
        } else {
          delete newErrors[name];
        }
        return newErrors;
      });
      input.setAttribute("aria-invalid", error ? "true" : "false");
      if (onValidationChange) {
        onValidationChange(Object.keys(newErrors).length === 0, newErrors);
      }
    }
  }, [validateOnChange, validateField, onValidationChange]);
  const handleBlur = useCallback((e) => {
    if (!validateOnBlur) {
      return;
    }
    const input = e.target;
    const name = input.getAttribute("name");
    if (!name) {
      return;
    }
    const { value } = input;
    const error = validateField(name, value);
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
    input.setAttribute("aria-invalid", error ? "true" : "false");
  }, [validateOnBlur, validateField]);
  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const name = input.getAttribute("name");
      if (!name || !validationRules[name]) {
        return;
      }
      input.addEventListener("change", handleChange);
      input.addEventListener("blur", handleBlur);
      input.setAttribute("aria-required", "true");
      if (isMobile) {
        input.classList.add("mobile-input");
      }
    });
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("change", handleChange);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, [validationRules, isMobile, handleChange, handleBlur, formRef]);
  const validateForm = () => {
    const newErrors = {};
    if (!formRef.current) {
      return newErrors;
    }
    const form = formRef.current;
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const name = input.getAttribute("name");
      if (!name || !validationRules[name]) {
        return;
      }
      const { value } = input;
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
        input.setAttribute("aria-invalid", "true");
        const errorId = `${name}-error`;
        input.setAttribute("aria-describedby", errorId);
      } else {
        input.setAttribute("aria-invalid", "false");
      }
    });
    return newErrors;
  };
  const handleSubmit = (e) => {
    if (validateOnSubmit) {
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll(
          "input, textarea, select"
        );
        const fieldNames = /* @__PURE__ */ new Set();
        inputs.forEach((input) => {
          const name = input.getAttribute("name");
          if (name) {
            fieldNames.add(name);
          }
        });
        setTouchedFields(fieldNames);
      }
      const newErrors = validateForm();
      setErrors(newErrors);
      setSubmitted(true);
      if (Object.keys(newErrors).length > 0) {
        e.preventDefault();
        if (focusFirstInvalidField && formRef.current) {
          const firstErrorName = Object.keys(newErrors)[0];
          const firstErrorField = formRef.current.querySelector(
            `[name="${firstErrorName}"]`
          );
          if (firstErrorField && "scrollIntoView" in firstErrorField) {
            firstErrorField.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
            setTimeout(() => {
              if (firstErrorField instanceof HTMLElement) {
                firstErrorField.focus();
                if (isMobile && "vibrate" in navigator) {
                  navigator.vibrate([50, 100, 50]);
                }
              }
            }, 500);
          }
        }
        if (isMobile) {
          const errorCount = Object.keys(newErrors).length;
          const errorSummary = document.getElementById(
            "validation-error-summary"
          );
          if (errorSummary) {
            errorSummary.textContent = `Form has ${errorCount} ${errorCount === 1 ? "error" : "errors"}. Please correct before submitting.`;
            errorSummary.setAttribute("role", "alert");
          }
        }
        if (onValidationChange) {
          onValidationChange(false, newErrors);
        }
      } else if (onValidationChange) {
        onValidationChange(true, {});
      }
    }
  };
  const enhancedForm = React__default.Children.map(children, (child) => {
    if (React__default.isValidElement(child) && child.type === "form") {
      const specificChild = child;
      const formProps = {
        ...specificChild.props,
        ref: formRef,
        onSubmit: (e) => {
          handleSubmit(e);
          if (specificChild.props.onSubmit) {
            specificChild.props.onSubmit(e);
          }
        },
        noValidate: true
        // Disable browser validation in favor of our custom validation
      };
      return React__default.cloneElement(specificChild, formProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    enhancedForm,
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "validation-error-summary",
        className: "sr-only",
        "aria-live": "assertive"
      }
    ),
    showErrorSummary && submitted && Object.keys(errors).length > 0 && /* @__PURE__ */ jsxs("div", { className: "validation-error-summary", role: "alert", children: [
      /* @__PURE__ */ jsx("h3", { children: "Please correct the following errors:" }),
      /* @__PURE__ */ jsx("ul", { children: Object.entries(errors).map(([field, error]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `#${field}`,
          onClick: (e) => {
            e.preventDefault();
            const element = document.querySelector(`[name="${field}"]`);
            if (element instanceof HTMLElement) {
              element.focus();
              element.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
          },
          children: error
        }
      ) }, field)) })
    ] })
  ] });
}
const ValidationRules = {
  required: (message = "This field is required") => ({
    test: (value) => value.trim() !== "",
    message
  }),
  email: (message = "Please enter a valid email address") => ({
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message
  }),
  minLength: (length, message) => ({
    test: (value) => value.length >= length,
    message: message || `Must be at least ${length} characters`
  }),
  maxLength: (length, message) => ({
    test: (value) => value.length <= length,
    message: message || `Must be no more than ${length} characters`
  }),
  pattern: (regex, message) => ({
    test: (value) => regex.test(value),
    message
  }),
  match: (fieldName, message) => ({
    test: (value) => {
      const matchField = document.querySelector(
        `[name="${fieldName}"]`
      );
      return matchField && matchField.value === value;
    },
    message
  })
};

function usePasswordStrength(password) {
  const [strengthInfo, setStrengthInfo] = useState({
    strength: "empty",
    score: 0,
    feedback: "",
    color: "#e2e8f0"
    // default gray
  });
  useEffect(() => {
    if (!password) {
      setStrengthInfo({
        strength: "empty",
        score: 0,
        feedback: "",
        color: "#e2e8f0"
        // default gray
      });
      return;
    }
    let score = 0;
    if (password.length >= 8) {
      score += 1;
    }
    if (password.length >= 12) {
      score += 1;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/[a-z]/.test(password)) {
      score += 1;
    }
    if (/[0-9]/.test(password)) {
      score += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    }
    if (/(.)\1{2,}/.test(password)) {
      score -= 1;
    }
    if (/^[A-Za-z]+$/.test(password)) {
      score -= 1;
    }
    if (/^[0-9]+$/.test(password)) {
      score -= 1;
    }
    const commonPasswords = [
      "password",
      "123456",
      "qwerty",
      "letmein",
      "admin",
      "welcome"
    ];
    if (commonPasswords.includes(password.toLowerCase())) {
      score = 0;
    }
    if (/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(
      password
    )) {
      score -= 1;
    }
    score = Math.max(0, Math.min(4, score));
    let strength;
    let feedback;
    let color;
    switch (true) {
      case score === 0:
        strength = "weak";
        feedback = "Very weak - easy to guess";
        color = "#e53e3e";
        break;
      case score === 1:
        strength = "weak";
        feedback = "Weak - easy to crack";
        color = "#e53e3e";
        break;
      case score === 2:
        strength = "fair";
        feedback = "Fair - could be stronger";
        color = "#f6ad55";
        break;
      case score === 3:
        strength = "good";
        feedback = "Good - strong password";
        color = "#68d391";
        break;
      case score >= 4:
        strength = "strong";
        feedback = "Strong - excellent password";
        color = "#38a169";
        break;
      default:
        strength = "weak";
        feedback = "Password could be stronger";
        color = "#e53e3e";
    }
    if (score < 3) {
      const suggestions = [];
      if (password.length < 12) {
        suggestions.push("longer password");
      }
      if (!/[A-Z]/.test(password)) {
        suggestions.push("uppercase letters");
      }
      if (!/[a-z]/.test(password)) {
        suggestions.push("lowercase letters");
      }
      if (!/[0-9]/.test(password)) {
        suggestions.push("numbers");
      }
      if (!/[^A-Za-z0-9]/.test(password)) {
        suggestions.push("special characters");
      }
      if (suggestions.length > 0) {
        feedback += ". Add " + suggestions.join(", ") + ".";
      }
    }
    setStrengthInfo({
      strength,
      score,
      feedback,
      color
    });
  }, [password]);
  return strengthInfo;
}

const PasswordInputWithStrength = forwardRef(
  ({
    label,
    name,
    error,
    showStrengthMeter = true,
    showToggleButton = true,
    showStrengthText = true,
    helperText,
    wrapperClassName = "",
    inputClassName = "",
    required = false,
    onChange,
    onBlur,
    value = "",
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [valueState, setValueState] = useState("");
    const currentValue = typeof value === "string" ? value : valueState;
    const { strength, feedback, color } = usePasswordStrength(currentValue);
    const handleChange = (e) => {
      if (typeof value !== "string") {
        setValueState(e.target.value);
      }
      if (onChange) {
        onChange(e);
      }
    };
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
    const handleKeyDown = () => {
      if ("vibrate" in navigator && isFocused && currentValue && strength === "weak") {
        navigator.vibrate(5);
      }
    };
    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };
    const isShowingError = !!error && !isFocused;
    return /* @__PURE__ */ jsx("div", { className: `password-input-wrapper ${wrapperClassName}`, children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "block mb-2 font-medium", children: [
        label,
        required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            id: name,
            name,
            type: showPassword ? "text" : "password",
            className: `
                w-full p-3 border rounded
                ${isShowingError ? "border-red-500 bg-red-50" : "border-gray-300"}
                ${isFocused ? "ring-2 ring-blue-300 border-blue-300" : ""}
                ${showToggleButton ? "pr-12" : ""}
                ${inputClassName}
              `,
            value: currentValue,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            "aria-invalid": isShowingError ? "true" : "false",
            "aria-describedby": isShowingError ? `${name}-error` : showStrengthMeter ? `${name}-strength` : void 0,
            ...props
          }
        ),
        showToggleButton && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none",
            onClick: togglePasswordVisibility,
            "aria-label": showPassword ? "Hide password" : "Show password",
            tabIndex: -1,
            children: showPassword ? /* @__PURE__ */ jsx(
              "span",
              {
                className: "material-symbols-outlined",
                "aria-hidden": "true",
                children: "visibility_off"
              }
            ) : /* @__PURE__ */ jsx(
              "span",
              {
                className: "material-symbols-outlined",
                "aria-hidden": "true",
                children: "visibility"
              }
            )
          }
        ),
        isShowingError && /* @__PURE__ */ jsx("div", { className: "error-label", children: error })
      ] }),
      isShowingError && /* @__PURE__ */ jsx(
        "div",
        {
          id: `${name}-error`,
          className: "text-red-500 text-sm mt-1",
          role: "alert",
          children: error
        }
      ),
      !isShowingError && helperText && /* @__PURE__ */ jsx("div", { id: `${name}-helper`, className: "text-gray-500 text-xs mt-1", children: helperText }),
      showStrengthMeter && currentValue && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            id: `${name}-strength`,
            className: "password-strength-meter mt-2",
            role: "progressbar",
            "aria-valuenow": strength === "empty" ? 0 : strength === "weak" ? 25 : strength === "fair" ? 50 : strength === "good" ? 75 : 100,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-label": `Password strength: ${strength}`,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `strength-${strength}`,
                style: {
                  backgroundColor: color,
                  width: strength === "empty" ? "0%" : strength === "weak" ? "25%" : strength === "fair" ? "50%" : strength === "good" ? "75%" : "100%"
                }
              }
            )
          }
        ),
        showStrengthText && /* @__PURE__ */ jsx(
          "div",
          {
            className: "password-feedback text-xs mt-1",
            style: { color },
            children: feedback
          }
        )
      ] })
    ] }) });
  }
);
PasswordInputWithStrength.displayName = "PasswordInputWithStrength";

function RegisterForm({
  redirectTo,
  showLogin = true
}) {
  const { signUp, signInWithOAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const validationRules = {
    fullName: [
      ValidationRules.required("Full name is required"),
      ValidationRules.minLength(2, "Name must be at least 2 characters")
    ],
    email: [
      ValidationRules.required("Email is required"),
      ValidationRules.email("Please enter a valid email address")
    ],
    password: [
      ValidationRules.required("Password is required"),
      ValidationRules.minLength(8, "Password must be at least 8 characters")
    ],
    terms: [
      {
        test: (value) => value === "true",
        message: "You must accept the Terms of Service and Privacy Policy"
      }
    ]
  };
  const handleValidationChange = (isValid, errors) => {
    setFormIsValid(isValid);
    setFieldErrors(errors);
  };
  useEffect(() => {
    if (isLoading) {
      setAnnouncement("Creating your account, please wait...");
    } else if (errorMessage) {
      setAnnouncement(`Error: ${errorMessage}`);
    } else if (isSuccessful) {
      setAnnouncement(
        "Registration successful! Please check your email to verify your account."
      );
    }
  }, [isLoading, errorMessage, isSuccessful]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await signUp(email, password, fullName);
      if (!response.success && response.error) {
        setErrorMessage(
          typeof response.error === "string" ? response.error : "Registration failed"
        );
        return;
      }
      if (response.user) {
        setIsSuccessful(true);
      }
    } catch (error) {
      const errorMessage2 = error instanceof Error ? error.message : "An unexpected error occurred";
      setErrorMessage(errorMessage2);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setAnnouncement("Initiating Google sign in...");
      await signInWithOAuth("google", redirectTo);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  if (isSuccessful) {
    return /* @__PURE__ */ jsxs("div", { className: "auth-success", role: "alert", "aria-live": "polite", children: [
      /* @__PURE__ */ jsx("h2", { children: "Registration Successful" }),
      /* @__PURE__ */ jsx("p", { children: "Please check your email to verify your account. If you don't see it within a few minutes, check your spam folder." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "auth-form-container", children: [
    /* @__PURE__ */ jsx("h1", { children: "Create Account" }),
    /* @__PURE__ */ jsx(AccessibilityAnnouncer, { message: announcement, clearDelay: 3e3 }),
    errorMessage && /* @__PURE__ */ jsx("div", { className: "error-message", role: "alert", "aria-live": "assertive", children: errorMessage }),
    /* @__PURE__ */ jsx(
      MobileFormValidation,
      {
        validationRules,
        onValidationChange: handleValidationChange,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnSubmit: true,
        focusFirstInvalidField: true,
        showErrorSummary: true,
        children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "auth-form form-container",
            noValidate: true,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxs("label", { htmlFor: "fullName", children: [
                  "Full Name",
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "(required)" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "fullName",
                    name: "fullName",
                    type: "text",
                    value: fullName,
                    onChange: (e) => setFullName(e.target.value),
                    required: true,
                    disabled: isLoading,
                    placeholder: "John Doe",
                    "aria-required": "true",
                    "aria-invalid": fieldErrors["fullName"] ? "true" : "false",
                    className: "mobile-input",
                    autoComplete: "name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
                  "Email",
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "(required)" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                    disabled: isLoading,
                    placeholder: "your@email.com",
                    "aria-required": "true",
                    "aria-invalid": fieldErrors["email"] ? "true" : "false",
                    className: "mobile-input",
                    autoComplete: "email"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx(
                PasswordInputWithStrength,
                {
                  label: "Password",
                  name: "password",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  required: true,
                  disabled: isLoading,
                  minLength: 8,
                  placeholder: "••••••••",
                  autoComplete: "new-password",
                  showStrengthMeter: true,
                  showStrengthText: true,
                  ...fieldErrors["password"] && {
                    error: fieldErrors["password"]
                  },
                  helperText: "Password must be at least 8 characters"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxs("div", { className: "checkbox-wrapper", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "terms",
                    name: "terms",
                    checked: acceptTerms,
                    onChange: (e) => setAcceptTerms(e.target.checked),
                    required: true,
                    disabled: isLoading,
                    "aria-required": "true",
                    "aria-invalid": fieldErrors["terms"] ? "true" : "false",
                    value: acceptTerms.toString()
                  }
                ),
                /* @__PURE__ */ jsxs("label", { htmlFor: "terms", children: [
                  "I agree to the",
                  " ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/terms",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Terms of Service (opens in new tab)",
                      children: "Terms of Service"
                    }
                  ),
                  " ",
                  "and",
                  " ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/privacy",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Privacy Policy (opens in new tab)",
                      children: "Privacy Policy"
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isLoading,
                  "aria-busy": isLoading,
                  children: isLoading ? "Creating Account..." : "Create Account"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "auth-separator",
        role: "separator",
        "aria-orientation": "horizontal",
        children: /* @__PURE__ */ jsx("span", { children: "OR" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleGoogleSignIn,
        className: "btn btn-google",
        disabled: isLoading,
        "aria-busy": isLoading,
        "aria-label": "Sign up with Google",
        children: [
          /* @__PURE__ */ jsx("span", { className: "btn-icon", children: /* @__PURE__ */ jsx(
            "svg",
            {
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              role: "img",
              "aria-label": "Google logo",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                }
              )
            }
          ) }),
          "Sign up with Google"
        ]
      }
    ),
    showLogin && /* @__PURE__ */ jsxs("div", { className: "auth-alternate-action", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/login", className: "auth-link", children: "Log in" })
    ] })
  ] });
}

export { RegisterForm as R };
