;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dfd8e782-df2f-40a7-9a7b-396353fbde61",e._sentryDebugIdIdentifier="sentry-dbid-dfd8e782-df2f-40a7-9a7b-396353fbde61")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_CqouZpRI.mjs';
import { $ as $$Card } from '../chunks/Card_C_GhxMHY.mjs';
import { r as requireAuth } from '../chunks/auth_DrPSEcKU.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as SkeletonProfile } from '../chunks/skeleton_BM8kiDRA.mjs';
export { renderers } from '../renderers.mjs';

function ProfileComponent({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "",
    profession: "",
    specialization: "",
    experience: ""
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Updated profile:", formData);
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
    }, 1e3);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx(SkeletonProfile, {});
  }
  if (isEditing) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-center w-full", children: "Edit Profile" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium", children: "Full Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              name: "name",
              type: "text",
              value: formData.name,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-border rounded-md bg-card",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              value: formData.email,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-border rounded-md bg-card",
              required: true,
              disabled: true
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Email cannot be changed. Contact support for assistance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "bio", className: "block text-sm font-medium", children: "Bio" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "bio",
              name: "bio",
              value: formData.bio,
              onChange: handleInputChange,
              rows: 3,
              className: "w-full px-3 py-2 border border-border rounded-md bg-card resize-none",
              placeholder: "Tell us a bit about yourself"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "profession", className: "block text-sm font-medium", children: "Profession" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "profession",
                name: "profession",
                type: "text",
                value: formData.profession,
                onChange: handleInputChange,
                className: "w-full px-3 py-2 border border-border rounded-md bg-card",
                placeholder: "e.g. Psychologist, Therapist"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "specialization",
                className: "block text-sm font-medium",
                children: "Specialization"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "specialization",
                name: "specialization",
                type: "text",
                value: formData.specialization,
                onChange: handleInputChange,
                className: "w-full px-3 py-2 border border-border rounded-md bg-card",
                placeholder: "e.g. CBT, Trauma"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "experience", className: "block text-sm font-medium", children: "Years of Experience" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "experience",
              name: "experience",
              type: "text",
              value: formData.experience,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-border rounded-md bg-card",
              placeholder: "e.g. 5"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 flex gap-4 justify-end", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsEditing(false),
              className: "px-4 py-2 border border-border rounded-md text-sm font-medium transition-colors hover:bg-accent",
              disabled: isLoading,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-colors hover:bg-primary/90 flex items-center",
              disabled: isLoading,
              children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }
                      )
                    ]
                  }
                ),
                "Saving..."
              ] }) : "Save Changes"
            }
          )
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-center w-full", children: "Profile Information" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden", children: user?.name ? /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: user.name.split(" ").map((n) => n[0]).join("") }) : /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl text-primary", children: "person" }) }),
        /* @__PURE__ */ jsx("button", { className: "mt-4 text-xs text-primary hover:underline", children: "Upload Photo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-grow space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Full Name" }),
            /* @__PURE__ */ jsx("p", { children: user?.name || "Not set" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Email Address" }),
            /* @__PURE__ */ jsx("p", { children: user?.email || "Not set" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Profession" }),
            /* @__PURE__ */ jsx("p", { children: "Not set" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Specialization" }),
            /* @__PURE__ */ jsx("p", { children: "Not set" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 md:col-span-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Bio" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No bio available" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsEditing(true),
            className: "px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-colors hover:bg-primary/90",
            children: "Edit Profile"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-6 mt-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-4 text-center", children: "Account Information" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Account Type" }),
          /* @__PURE__ */ jsx("p", { children: "Professional (Licensed)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Member Since" }),
          /* @__PURE__ */ jsx("p", { children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Last Login" }),
          /* @__PURE__ */ jsx("p", { children: (/* @__PURE__ */ new Date()).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Subscription" }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("span", { className: "inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full", children: "Pro Plan" }) })
        ] })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
async function GET(context) {
  const authRedirect = await requireAuth({
    cookies: context.cookies,
    redirect: context.redirect,
    request: context.request
  });
  if (authRedirect) {
    return authRedirect;
  }
  const user = context.locals.user;
  return {
    props: { user }
  };
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "User Profile | Pixelated Empathy Therapy", "description": "Manage your profile, settings, and preferences" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-6"> <div class="flex flex-col gap-6"> <!-- Page Header --> <div class="flex items-center justify-between"> <div class="text-center w-full"> <h1 class="text-3xl font-bold tracking-tight mb-1">Your Profile</h1> <p class="text-muted-foreground">
Manage your account settings and preferences
</p> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <!-- Profile Information Card --> ${renderComponent($$result2, "Card", $$Card, { "class": "lg:col-span-2" }, { "default": async ($$result3) => renderTemplate` <div class="p-6"> ${renderComponent($$result3, "ProfileComponent", ProfileComponent, { "client:load": true, "user": user, "client:component-hydration": "load", "client:component-path": "@/components/profile/ProfileComponent", "client:component-export": "ProfileComponent" })} </div> ` })} <!-- Security Settings --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="p-6"> <h3 class="text-lg font-medium mb-4 text-center">
Security Settings
</h3> <div class="space-y-4"> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Privacy Mode</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground">
Homomorphic Encryption
</span> <div class="w-11 h-6 bg-primary rounded-full px-1 flex items-center"> <div class="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-5"></div> </div> </div> <p class="text-xs text-muted-foreground">
Your data is protected with advanced encryption technology
</p> </div> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Two-Factor Authentication</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground">
Enable 2FA
</span> <div class="w-11 h-6 bg-muted rounded-full px-1 flex items-center"> <div class="w-4 h-4 bg-white rounded-full shadow-sm"></div> </div> </div> <p class="text-xs text-muted-foreground">
Add an extra layer of security to your account
</p> </div> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Session Timeout</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground">
30 minutes
</span> <button class="text-xs text-primary hover:underline">
Change
</button> </div> <p class="text-xs text-muted-foreground">
Automatically log out after period of inactivity
</p> </div> <div class="pt-4"> <button class="w-full py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-md text-sm font-medium transition-colors">
Security Audit Log
</button> </div> </div> </div> ` })} </div> <!-- Preferences Section --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="p-6"> <h3 class="text-lg font-medium mb-4 text-center">Preferences</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Notifications</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground">
Email Notifications
</span> <div class="w-11 h-6 bg-primary rounded-full px-1 flex items-center"> <div class="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-5"></div> </div> </div> <p class="text-xs text-muted-foreground">
Receive important updates and summaries
</p> </div> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Theme</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground"> Dark Mode </span> <div class="w-11 h-6 bg-primary rounded-full px-1 flex items-center"> <div class="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-5"></div> </div> </div> <p class="text-xs text-muted-foreground">
Interface color scheme preference
</p> </div> <div class="flex flex-col space-y-2"> <span class="text-sm font-medium">Language</span> <div class="flex items-center justify-between"> <span class="text-sm text-muted-foreground">
English (US)
</span> <button class="text-xs text-primary hover:underline">
Change
</button> </div> <p class="text-xs text-muted-foreground">
Interface language preference
</p> </div> </div> </div> ` })} </div> </div> ` })}`;
}, "/root/pixel/src/pages/profile/index.astro", void 0);

const $$file = "/root/pixel/src/pages/profile/index.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
