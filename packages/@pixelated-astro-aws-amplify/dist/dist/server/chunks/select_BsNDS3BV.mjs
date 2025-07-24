;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2ef6fc28-f5dd-4983-bfc0-38570a2f0c23",e._sentryDebugIdIdentifier="sentry-dbid-2ef6fc28-f5dd-4983-bfc0-38570a2f0c23")}catch(e){}}();import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useState, useRef, useEffect, useCallback, useContext } from 'react';
import './astro/server_Ck5BzePu.mjs';

const SelectContext = createContext(void 0);
function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select provider");
  }
  return context;
}
function Select({
  defaultValue,
  value,
  onValueChange,
  children,
  disabled = false,
  className = "",
  placeholder = "Select an option"
}) {
  const [options, setOptions] = useState([]);
  const [internalValue, setInternalValue] = useState(
    value !== void 0 ? value : defaultValue || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const currentValue = value !== void 0 ? value : internalValue;
  useEffect(() => {
    if (value !== void 0) {
      setInternalValue(value);
    }
  }, [value]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && contentRef.current && triggerRef.current && !contentRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const setValue = useCallback(
    (newValue) => {
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
      setIsOpen(false);
    },
    [onValueChange, value]
  );
  const registerOption = useCallback((optionValue, label) => {
    setOptions((prev) => {
      const exists = prev.some((o) => o.value === optionValue);
      if (!exists) {
        return [...prev, { value: optionValue, label }];
      }
      return prev;
    });
  }, []);
  const unregisterOption = useCallback((optionValue) => {
    setOptions((prev) => prev.filter((o) => o.value !== optionValue));
  }, []);
  const selectedOption = options.find((o) => o.value === currentValue);
  const selectedLabel = selectedOption?.label || placeholder;
  return /* @__PURE__ */ jsx(
    SelectContext.Provider,
    {
      value: {
        value: currentValue,
        setValue,
        isOpen,
        setIsOpen,
        registerOption,
        unregisterOption,
        options,
        triggerRef,
        contentRef,
        selectedLabel,
        disabled
      },
      children: /* @__PURE__ */ jsx("div", { className: `select-container ${className}`, children })
    }
  );
}
function SelectTrigger({
  children,
  className = "",
  "aria-label": ariaLabel
}) {
  const { isOpen, setIsOpen, triggerRef, selectedLabel, disabled } = useSelectContext();
  const handleKeyDown = (e) => {
    if (disabled) {
      return;
    }
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-controls": "select-listbox",
      "aria-label": ariaLabel || "Select option",
      className: `select-trigger ${isOpen ? "select-trigger-open" : ""} ${className}`,
      ref: triggerRef,
      onClick: () => !disabled && setIsOpen(!isOpen),
      onKeyDown: handleKeyDown,
      disabled,
      children: [
        children || selectedLabel,
        /* @__PURE__ */ jsx("span", { className: "select-trigger-icon", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: { transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M2.5 4.5L6 8L9.5 4.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) })
      ]
    }
  );
}
function SelectContent({
  children,
  className = "",
  position = "popper"
}) {
  const { isOpen, contentRef } = useSelectContext();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "select-listbox",
      className: `select-content ${position === "popper" ? "select-content-popper" : "select-content-item-aligned"} ${className}`,
      ref: contentRef,
      role: "listbox",
      children
    }
  );
}
function SelectItem({
  value,
  children,
  className = "",
  disabled = false,
  ...props
}) {
  const {
    value: selectedValue,
    setValue,
    registerOption,
    unregisterOption
  } = useSelectContext();
  useEffect(() => {
    registerOption(value, children);
    return () => unregisterOption(value);
  }, [value, children, registerOption, unregisterOption]);
  const isSelected = selectedValue === value;
  const handleKeyDown = (e) => {
    if (disabled) {
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setValue(value);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "option",
      "aria-selected": isSelected,
      className: `select-item ${isSelected ? "select-item-selected" : ""} ${disabled ? "select-item-disabled" : ""} ${className}`,
      onClick: () => !disabled && setValue(value),
      onKeyDown: handleKeyDown,
      "data-value": value,
      "data-disabled": disabled,
      tabIndex: disabled ? -1 : 0,
      ...props,
      children: [
        children,
        isSelected && /* @__PURE__ */ jsx("span", { className: "select-item-check", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M2.5 6L5 8.5L9.5 4",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) })
      ]
    }
  );
}
function SelectValue({ className = "" }) {
  const { selectedLabel } = useSelectContext();
  return /* @__PURE__ */ jsx("span", { className: `select-value ${className}`, children: selectedLabel });
}

export { Select as S, SelectTrigger as a, SelectValue as b, SelectContent as c, SelectItem as d };
