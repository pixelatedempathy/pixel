;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="82b5e4d5-700a-4028-a0bc-b90f39ac8cf1",e._sentryDebugIdIdentifier="sentry-dbid-82b5e4d5-700a-4028-a0bc-b90f39ac8cf1")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, a as renderTemplate } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_gCflplD1.mjs';
import { D as DLPAction, d as dlpService } from '../../chunks/dlp_amO05trP.mjs';
import { $ as $$Badge } from '../../chunks/Badge_D9picocO.mjs';
import { $ as $$Card } from '../../chunks/Card_D3BEhU5g.mjs';
import { b as $$CardContent, $ as $$CardHeader, a as $$CardTitle } from '../../chunks/CardTitle_D_HUwMpR.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_aCKcYT_j.mjs';
import { S as Switch } from '../../chunks/switch_BLLO_lPx.mjs';
import { $ as $$Button } from '../../chunks/Button_Dyw2PF3v.mjs';
import { Trash2 } from 'lucide-react';
import { A as AuditEventType } from '../../chunks/audit_BtMut9h8.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from '../../chunks/card_Cqp1GJuj.mjs';
import { B as Button } from '../../chunks/button_BvU_XMCD.mjs';
import { I as Input } from '../../chunks/input_Co-9Uymp.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from '../../chunks/select_DWgSZvR0.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from '../../chunks/tabs_vss1a8ip.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$DLPRulesList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DLPRulesList;
  const { rules } = Astro2.props;
  const getActionBadge = (action) => {
    switch (action) {
      case DLPAction.ALLOW:
        return { variant: "outline", text: "Allow" };
      case DLPAction.REDACT:
        return { variant: "secondary", text: "Redact" };
      case DLPAction.BLOCK:
        return { variant: "destructive", text: "Block" };
      case DLPAction.BLOCK_AND_ALERT:
        return { variant: "destructive", text: "Block & Alert" };
      default:
        return { variant: "outline", text: "Unknown" };
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="rules-list"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-semibold">DLP Rules</h2> ${renderComponent($$result, "Button", $$Button, { "data-new-rule": true, "class": "bg-primary text-white hover:bg-primary/90" }, { "default": ($$result2) => renderTemplate`Add New Rule` })} </div> ${rules.length === 0 ? renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "py-8" }, { "default": ($$result3) => renderTemplate` <p class="text-center text-muted-foreground">
No DLP rules found. Add a rule to get started.
</p> ` })} ` })}` : renderTemplate`<div class="space-y-4"> ${rules.map((ruleItem) => {
    const actionBadge = getActionBadge(ruleItem.action);
    return renderTemplate`<div class="rule-card"> ${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "pb-2" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-between items-start"> <div> ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-lg" }, { "default": ($$result4) => renderTemplate`${ruleItem.name}` })} ${renderComponent($$result3, "CardDescription", $$CardDescription, {}, { "default": ($$result4) => renderTemplate`${ruleItem.description}` })} </div> <div class="flex items-center space-x-2"> <span class="text-sm text-muted-foreground"> ${ruleItem.isActive ? "Active" : "Inactive"} </span> ${renderComponent($$result3, "Switch", Switch, { "checked": ruleItem.isActive, "data-rule-id": ruleItem.id, "data-rule-name": ruleItem.name, "className": "toggle-rule", "onCheckedChange": (isChecked) => {
      const ruleId = ruleItem.id;
      const ruleName = ruleItem.name;
      const allRules = dlpService.getRules();
      const existingRule = allRules.find((r) => r.id === ruleId);
      if (existingRule) {
        const updatedRule = {
          ...existingRule,
          isActive: isChecked
        };
        dlpService.removeRule(ruleId);
        dlpService.addRule(updatedRule);
        document.dispatchEvent(
          new CustomEvent("dlp:rule-updated", {
            detail: { id: ruleId, name: ruleName, isActive: isChecked }
          })
        );
      }
    } })} </div> </div> ` })} ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "pt-0" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-between items-center"> <div> ${renderComponent($$result3, "Badge", $$Badge, { "variant": actionBadge.variant }, { "default": ($$result4) => renderTemplate`${actionBadge.text}` })} </div> <div class="flex space-x-2"> ${renderComponent($$result3, "Button", $$Button, { "variant": "outline", "size": "sm", "data-edit-rule": ruleItem.id, "data-rule": JSON.stringify(ruleItem), "id": `edit-rule-${ruleItem.id}`, "class": "edit-rule-btn" }, { "default": ($$result4) => renderTemplate`
Edit
` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "ghost", "size": "icon", "class": "delete-rule-btn", "data-rule-id": ruleItem.id, "data-rule-name": ruleItem.name }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Trash2", Trash2, { "class": "h-4 w-4" })} <span class="sr-only">Delete rule</span> ` })} </div> </div> ` })} ` })} </div>`;
  })} </div>`} </div> <!-- Import the TypeScript file for client-side logic --> ${renderScript($$result, "/root/pixel/src/components/admin/dlp/DLPRulesList.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/dlp/DLPRulesList.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$DLPActivityLogs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DLPActivityLogs;
  const { logs } = Astro2.props;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).format(date);
  };
  const getEventBadge = (eventType) => {
    switch (eventType) {
      case AuditEventType.DLP_ALLOWED:
        return { variant: "secondary", text: "Allowed (Redacted)" };
      case AuditEventType.DLP_BLOCKED:
        return { variant: "destructive", text: "Blocked" };
      case AuditEventType.SECURITY_ALERT:
        return { variant: "destructive", text: "Alert" };
      default:
        return { variant: "outline", text: eventType };
    }
  };
  return renderTemplate`${maybeRenderHead()}<div> <h2 class="text-xl font-semibold">DLP Activity Log</h2> ${logs.length === 0 ? renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "mt-4" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "py-8" }, { "default": ($$result3) => renderTemplate` <p class="text-center text-muted-foreground">
No DLP activity logs found.
</p> ` })} ` })}` : renderTemplate`<div class="space-y-4 mt-4"> ${logs.map((log) => {
    const eventBadge = getEventBadge(log.eventType);
    return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "pb-2" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-between items-start"> <div> ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-base font-medium" }, { "default": ($$result4) => renderTemplate`${log.action}` })} <div class="text-sm text-muted-foreground"> ${formatDate(log.timestamp)} • User: ${log.userId} </div> </div> ${renderComponent($$result3, "Badge", $$Badge, { "variant": eventBadge.variant }, { "default": ($$result4) => renderTemplate`${eventBadge.text}` })} </div> ` })} ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "pt-0" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-2"> <div> <p class="text-sm font-medium">Triggered Rules:</p> <div class="flex flex-wrap gap-1 mt-1"> ${log.triggeredRules.map((rule) => renderTemplate`<span> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline" }, { "default": ($$result4) => renderTemplate`${rule}` })} </span>`)} </div> </div> ${log.destination && renderTemplate`<div> <p class="text-sm font-medium">Destination:</p> <p class="text-sm">${log.destination}</p> </div>`} ${log.reason && renderTemplate`<div class="md:col-span-2"> <p class="text-sm font-medium">Reason:</p> <p class="text-sm">${log.reason}</p> </div>`} </div> ` })} ` })}`;
  })} </div>`} </div>`;
}, "/root/pixel/src/components/admin/dlp/DLPActivityLogs.astro", void 0);

const Label = ({ htmlFor, children, ...props }) => /* @__PURE__ */ jsx(
  "label",
  {
    htmlFor,
    className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    ...props,
    children
  }
);
const Textarea = forwardRef(
  ({ id, placeholder, value, onChange, rows, ...props }, ref) => /* @__PURE__ */ jsx(
    "textarea",
    {
      id,
      placeholder,
      value,
      onChange,
      rows,
      ref,
      className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
const defaultRule = {
  id: "",
  name: "",
  description: "",
  action: DLPAction.REDACT,
  isActive: true
};
function DLPRuleEditor() {
  const [currentRule, setCurrentRule] = useState(defaultRule);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const handleEditRule = (event) => {
      setCurrentRule(event.detail);
      setIsEditing(true);
    };
    const handleNewRule = () => {
      setCurrentRule(defaultRule);
      setIsEditing(false);
    };
    document.addEventListener("dlp:edit-rule", handleEditRule);
    document.addEventListener("dlp:new-rule", handleNewRule);
    return () => {
      document.removeEventListener(
        "dlp:edit-rule",
        handleEditRule
      );
      document.removeEventListener("dlp:new-rule", handleNewRule);
    };
  }, []);
  const handleChange = (field, value) => {
    setCurrentRule({
      ...currentRule,
      [field]: value
    });
  };
  const saveRule = () => {
    if (!currentRule.id || !currentRule.name) {
      document.dispatchEvent(
        new CustomEvent("dlp:error", {
          detail: { message: "Rule ID and name are required" }
        })
      );
      return;
    }
    try {
      const ruleToSave = {
        id: currentRule.id || "",
        name: currentRule.name || "",
        description: currentRule.description || "",
        action: currentRule.action || DLPAction.REDACT,
        isActive: currentRule.isActive === void 0 ? true : !!currentRule.isActive,
        // Default matcher looks for the term specified in the rule name
        matches: (content) => {
          const searchTerm = currentRule.name?.toLowerCase() || "";
          return content.toLowerCase().includes(searchTerm);
        }
      };
      if (ruleToSave.action === DLPAction.REDACT) {
        ruleToSave.redact = (content) => {
          const searchTerm = currentRule.name?.toLowerCase() || "";
          return content.replace(new RegExp(searchTerm, "gi"), "[REDACTED]");
        };
      }
      dlpService.addRule(ruleToSave);
      document.dispatchEvent(
        new CustomEvent("dlp:rule-saved", {
          detail: {
            rule: ruleToSave,
            isEditing
          }
        })
      );
      setCurrentRule(defaultRule);
      setIsEditing(false);
      const rulesTab = document.querySelector('[value="rules"]');
      if (rulesTab) {
        setTimeout(() => {
          rulesTab.click();
          document.dispatchEvent(new CustomEvent("dlp:rules-updated"));
        }, 100);
      }
    } catch (error) {
      console.error("Error saving rule:", error);
      document.dispatchEvent(
        new CustomEvent("dlp:error", {
          detail: {
            message: `Error saving rule: ${error instanceof Error ? error.message : String(error)}`
          }
        })
      );
    }
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: isEditing ? "Edit DLP Rule" : "Create New DLP Rule" }),
      /* @__PURE__ */ jsx(CardDescription, { children: isEditing ? "Modify the existing DLP rule" : "Define a new rule to control how sensitive data is handled" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(
      "form",
      {
        className: "space-y-4",
        onSubmit: (e) => {
          e.preventDefault();
          saveRule();
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "rule-id", children: "Rule ID" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "rule-id",
                  placeholder: "unique-rule-id",
                  value: currentRule.id,
                  onChange: (e) => handleChange("id", e.target.value),
                  readOnly: isEditing,
                  className: isEditing ? "bg-muted" : ""
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "rule-name", children: "Rule Name" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "rule-name",
                  placeholder: "PHI Detection",
                  value: currentRule.name,
                  onChange: (e) => handleChange("name", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "rule-description", children: "Description" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "rule-description",
                placeholder: "Describe what this rule does and when it applies",
                value: currentRule.description,
                onChange: (e) => handleChange("description", e.target.value),
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "rule-action", children: "Action" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: currentRule.action,
                  onValueChange: (value) => handleChange("action", value),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: DLPAction.ALLOW, children: "Allow" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: DLPAction.REDACT, children: "Redact" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: DLPAction.BLOCK, children: "Block" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: DLPAction.BLOCK_AND_ALERT, children: "Block & Alert" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 pt-6", children: [
              /* @__PURE__ */ jsx(
                Switch,
                {
                  id: "rule-active",
                  checked: !!currentRule.isActive,
                  onCheckedChange: (checked) => handleChange("isActive", checked)
                }
              ),
              /* @__PURE__ */ jsx(Label, { htmlFor: "rule-active", children: "Active" })
            ] })
          ] }),
          currentRule.action === DLPAction.REDACT && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-md", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
              /* @__PURE__ */ jsx("strong", { children: "Preview:" }),
              " When this rule is triggered, matching content will be redacted."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Original: " }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono", children: [
                "This contains ",
                currentRule.name || "[term]"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Redacted: " }),
              /* @__PURE__ */ jsx("span", { className: "font-mono", children: "This contains [REDACTED]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-2 pt-4", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => {
                  setCurrentRule(defaultRule);
                  setIsEditing(false);
                  const rulesTab = document.querySelector(
                    '[value="rules"]'
                  );
                  if (rulesTab) {
                    rulesTab.click();
                  }
                },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", children: isEditing ? "Update Rule" : "Create Rule" })
          ] })
        ]
      }
    ) })
  ] });
}

const $$DLPRulesManager = createComponent(($$result, $$props, $$slots) => {
  const rules = dlpService.getRules();
  const activityLogs = [
    {
      id: "log1",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "user123",
      action: "export patient data",
      eventType: AuditEventType.DLP_ALLOWED,
      triggeredRules: ["phi-detection"],
      destination: "file-export",
      reason: void 0,
      allowed: true
    },
    {
      id: "log2",
      timestamp: new Date(Date.now() - 36e5).toISOString(),
      userId: "admin456",
      action: "bulk export",
      eventType: AuditEventType.DLP_BLOCKED,
      triggeredRules: ["large-data-volume"],
      destination: "api-request",
      reason: "Blocked by DLP rule: Large Data Volume Protection",
      allowed: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto p-4"> <h1 class="text-2xl font-bold mb-6">DLP Rules Manager</h1> <div id="dlp-alert" class="hidden mb-4"></div> ${renderComponent($$result, "Tabs", Tabs, { "defaultValue": "rules", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/tabs", "client:component-export": "Tabs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TabsList", TabsList, { "className": "mb-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "rules" }, { "default": ($$result4) => renderTemplate`Rules` })} ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "activity" }, { "default": ($$result4) => renderTemplate`Activity Logs` })} ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "editor" }, { "default": ($$result4) => renderTemplate`Rule Editor` })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "rules", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DLPRulesList", $$DLPRulesList, { "rules": rules })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "activity", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DLPActivityLogs", $$DLPActivityLogs, { "logs": activityLogs })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "editor", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DLPRuleEditor", DLPRuleEditor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/admin/dlp/DLPRuleEditor", "client:component-export": "default" })} ` })} ` })} </div> ${renderScript($$result, "/root/pixel/src/components/admin/DLPRulesManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/DLPRulesManager.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Dlp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dlp;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Data Loss Prevention", "description": "Manage DLP rules and monitor sensitive data protection", "activeItem": "dlp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-4"> <div class="flex flex-col gap-2 mb-6"> <h1 class="text-2xl font-bold">Data Loss Prevention Management</h1> <p class="text-gray-600 dark:text-gray-400">
Create and manage policies to protect PHI/PII and control how sensitive
        data is handled across the platform.
</p> </div> ${renderTemplate`${renderComponent($$result2, "DLPRulesManager", $$DLPRulesManager, {})}` } </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/dlp.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/dlp.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/dlp.astro";
const $$url = "/admin/dlp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dlp,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
