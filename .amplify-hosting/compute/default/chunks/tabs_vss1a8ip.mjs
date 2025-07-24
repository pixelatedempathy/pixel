;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="52bac646-ee3a-42cd-9621-a8b21fd8c6e7",e._sentryDebugIdIdentifier="sentry-dbid-52bac646-ee3a-42cd-9621-a8b21fd8c6e7")}catch(e){}}();import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useCallback, useContext } from 'react';
import './astro/server_DBAAVvAL.mjs';

const TabsContext = createContext(void 0);
function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}
function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className = ""
}) {
  const [tabValues, setTabValues] = useState([]);
  const [internalValue, setInternalValue] = useState(
    value || defaultValue || ""
  );
  const activeValue = value !== void 0 ? value : internalValue;
  useEffect(() => {
    if (value !== void 0) {
      setInternalValue(value);
    }
  }, [value]);
  const setActiveValue = useCallback(
    (newValue) => {
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [onValueChange, value]
  );
  const registerTab = useCallback(
    (tabValue) => {
      setTabValues((prev) => {
        if (!prev.includes(tabValue)) {
          return [...prev, tabValue];
        }
        return prev;
      });
      if (!activeValue && tabValue) {
        setActiveValue(tabValue);
      }
    },
    [activeValue, setActiveValue]
  );
  const unregisterTab = useCallback((tabValue) => {
    setTabValues((prev) => prev.filter((v) => v !== tabValue));
  }, []);
  return /* @__PURE__ */ jsx(
    TabsContext.Provider,
    {
      value: {
        activeValue,
        setActiveValue,
        registerTab,
        unregisterTab,
        tabValues
      },
      children: /* @__PURE__ */ jsx("div", { className: `tabs ${className}`, role: "tablist", children })
    }
  );
}
function TabsList({ children, className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `tabs-list ${className}`, role: "tablist", children });
}
function TabsTrigger({
  value,
  children,
  className = "",
  disabled = false
}) {
  const { activeValue, setActiveValue, registerTab, unregisterTab } = useTabsContext();
  useEffect(() => {
    registerTab(value);
    return () => unregisterTab(value);
  }, [value, registerTab, unregisterTab]);
  const isActive = activeValue === value;
  return /* @__PURE__ */ jsx(
    "button",
    {
      role: "tab",
      type: "button",
      "aria-selected": isActive,
      "aria-controls": `tabpanel-${value}`,
      id: `tab-${value}`,
      tabIndex: isActive ? 0 : -1,
      className: `tabs-trigger ${isActive ? "tabs-trigger-active" : ""} ${className}`,
      onClick: () => !disabled && setActiveValue(value),
      disabled,
      children
    }
  );
}
function TabsContent({
  value,
  children,
  className = "",
  forceMount = false
}) {
  const { activeValue } = useTabsContext();
  if (!forceMount && activeValue !== value) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "tabpanel",
      "aria-labelledby": `tab-${value}`,
      id: `tabpanel-${value}`,
      hidden: activeValue !== value,
      className: `tabs-content ${className}`,
      tabIndex: 0,
      children
    }
  );
}

export { Tabs as T, TabsList as a, TabsTrigger as b, TabsContent as c };
