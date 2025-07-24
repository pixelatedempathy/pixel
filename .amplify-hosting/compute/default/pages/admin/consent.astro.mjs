;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fb09b253-e6cb-44a0-b227-d8499377815b",e._sentryDebugIdIdentifier="sentry-dbid-fb09b253-e6cb-44a0-b227-d8499377815b")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute, b as createAstro } from '../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_gCflplD1.mjs';
import { $ as $$Card } from '../../chunks/Card_D3BEhU5g.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_D_HUwMpR.mjs';
import { $ as $$Badge } from '../../chunks/Badge_D9picocO.mjs';
import { s as supabase } from '../../chunks/supabase_pbWOGD7E.mjs';
import { $ as $$Icon } from '../../chunks/Icon_CVlwxpvZ.mjs';
import { r as requirePageAuth } from '../../chunks/serverAuth_DACuVCIs.mjs';
export { renderers } from '../../renderers.mjs';

const $$ConsentDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const { data: activeConsents, error: activeConsentsError } = await supabase.from("user_consents").select("id, consent_version_id, consent_versions(consent_type_id, consent_types(name))").eq("is_active", true);
  const { data: withdrawnConsents, error: withdrawnConsentsError } = await supabase.from("user_consents").select("id, withdrawal_date, withdrawal_reason, consent_version_id, consent_versions(consent_type_id, consent_types(name))").eq("is_active", false).not("withdrawal_date", "is", null);
  const { data: consentTypes, error: consentTypesError } = await supabase.from("consent_types").select("id, name, scope, is_active");
  const { data: consentVersions, error: consentVersionsError } = await supabase.from("consent_versions").select("id, version, consent_type_id, consent_types(name), is_current, effective_date").order("consent_type_id", { ascending: true }).order("effective_date", { ascending: false });
  const typedConsentVersions = consentVersions;
  const typedActiveConsents = activeConsents;
  const typedWithdrawnConsents = withdrawnConsents;
  const totalActiveConsents = (typedActiveConsents || []).length;
  const totalWithdrawnConsents = (typedWithdrawnConsents || []).length;
  const totalConsentTypes = consentTypes?.length || 0;
  const totalConsentVersions = typedConsentVersions?.length || 0;
  const consentsByType = {};
  (typedActiveConsents || []).forEach((consent) => {
    const typeName = consent.consent_versions?.consent_types?.name;
    if (typeName) {
      consentsByType[typeName] = (consentsByType[typeName] || 0) + 1;
    }
  });
  const withdrawalsByType = {};
  (typedWithdrawnConsents || []).forEach((consent) => {
    const typeName = consent.consent_versions?.consent_types?.name;
    if (typeName) {
      withdrawalsByType[typeName] = (withdrawalsByType[typeName] || 0) + 1;
    }
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  };
  const hasErrors = Boolean(
    activeConsentsError || withdrawnConsentsError || consentTypesError || consentVersionsError
  );
  return renderTemplate`${maybeRenderHead()}<div class="space-y-6"> <div class="flex justify-between items-center"> <h1 class="text-2xl font-bold tracking-tight">Consent Management</h1> <div class="flex space-x-2"> <a href="/admin/consent/types" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:settings", "class": "mr-2 h-4 w-4" })}
Manage Types
</a> <a href="/admin/consent/versions" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:versions", "class": "mr-2 h-4 w-4" })}
Manage Versions
</a> </div> </div> ${hasErrors && renderTemplate`<div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:alert-triangle", "class": "h-5 w-5 text-red-500" })} </div> <div class="ml-3"> <p class="text-sm text-red-700">
Error loading consent data. Please try refreshing the page.
</p> </div> </div> </div>`} <!-- Dashboard Stats Cards --> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"> ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "flex flex-row items-center justify-between space-y-0 pb-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-sm font-medium" }, { "default": async ($$result4) => renderTemplate`Active Consents` })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:check-circle", "class": "h-4 w-4 text-green-500" })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="text-2xl font-bold">${totalActiveConsents}</div> <p class="text-xs text-muted-foreground">
Active user consents across all types
</p> ` })} ` })} ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "flex flex-row items-center justify-between space-y-0 pb-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-sm font-medium" }, { "default": async ($$result4) => renderTemplate`Withdrawn Consents` })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:circle-x", "class": "h-4 w-4 text-red-500" })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="text-2xl font-bold">${totalWithdrawnConsents}</div> <p class="text-xs text-muted-foreground">Total withdrawals recorded</p> ` })} ` })} ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "flex flex-row items-center justify-between space-y-0 pb-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-sm font-medium" }, { "default": async ($$result4) => renderTemplate`Consent Types` })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:category", "class": "h-4 w-4 text-blue-500" })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="text-2xl font-bold">${totalConsentTypes}</div> <p class="text-xs text-muted-foreground">Consent categories defined</p> ` })} ` })} ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, { "class": "flex flex-row items-center justify-between space-y-0 pb-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, { "class": "text-sm font-medium" }, { "default": async ($$result4) => renderTemplate`Consent Versions` })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:versions", "class": "h-4 w-4 text-purple-500" })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="text-2xl font-bold">${totalConsentVersions}</div> <p class="text-xs text-muted-foreground">Total document versions</p> ` })} ` })} </div> <!-- Consent Types and Versions --> <div class="grid gap-4 md:grid-cols-2"> ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, {}, { "default": async ($$result4) => renderTemplate`Consent Types` })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="space-y-4"> ${consentTypes && consentTypes.map((type) => renderTemplate`<div class="flex items-center justify-between border-b pb-2"> <div> <p class="font-medium">${type.name}</p> <p class="text-xs text-muted-foreground">
Scope: ${type.scope} </p> </div> <div class="flex items-center space-x-2"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": type.is_active ? "default" : "secondary" }, { "default": async ($$result4) => renderTemplate`${type.is_active ? "Active" : "Inactive"}` })} <span class="text-sm font-medium"> ${consentsByType[type.name] || 0} active
</span> </div> </div>`)} ${(!consentTypes || consentTypes.length === 0) && renderTemplate`<p class="text-center text-muted-foreground py-4">
No consent types defined
</p>`} </div> ` })} ` })} ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, {}, { "default": async ($$result4) => renderTemplate`Current Versions` })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="space-y-4"> ${typedConsentVersions && typedConsentVersions.filter(
    (v) => v.is_current && !!v.consent_types?.name
  ).map((version) => renderTemplate`<div class="flex items-center justify-between border-b pb-2"> <div> <p class="font-medium">${version.consent_types?.name || "Unknown"}</p> <p class="text-xs text-muted-foreground">
Version ${version.version} • Effective:${" "} ${formatDate(version.effective_date)} </p> </div> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline" }, { "default": async ($$result4) => renderTemplate`Current` })} </div>`)} ${(!typedConsentVersions || typedConsentVersions.filter((v) => v.is_current).length === 0) && renderTemplate`<p class="text-center text-muted-foreground py-4">
No current versions found
</p>`} </div> ` })} ` })}</div> <!-- Consent Analytics --> ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, {}, { "default": async ($$result4) => renderTemplate`Consent Analytics` })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate`${Object.keys(consentsByType).length > 0 ? renderTemplate`<div class="space-y-8"> <div> <h3 class="text-sm font-medium mb-2">Active Consents by Type</h3> <div class="space-y-2"> ${Object.entries(consentsByType).map(([typeName, count]) => renderTemplate`<div> <div class="flex items-center justify-between"> <span class="text-sm">${typeName}</span> <span class="text-sm font-medium">${count}</span> </div> <div class="h-2 w-full mt-1 bg-gray-100 rounded-full overflow-hidden"> <div class="bg-green-500 h-full rounded-full"${addAttribute(`width: ${Math.min(100, Math.round(count / totalActiveConsents * 100))}%`, "style")}></div> </div> </div>`)} </div> </div> ${Object.keys(withdrawalsByType).length > 0 && renderTemplate`<div> <h3 class="text-sm font-medium mb-2">Withdrawals by Type</h3> <div class="space-y-2"> ${Object.entries(withdrawalsByType).map(
    ([typeName, count]) => renderTemplate`<div> <div class="flex items-center justify-between"> <span class="text-sm">${typeName}</span> <span class="text-sm font-medium">${count}</span> </div> <div class="h-2 w-full mt-1 bg-gray-100 rounded-full overflow-hidden"> <div class="bg-red-500 h-full rounded-full"${addAttribute(`width: ${Math.min(100, Math.round(count / totalWithdrawnConsents * 100))}%`, "style")}></div> </div> </div>`
  )} </div> </div>`} </div>` : renderTemplate`<div class="text-center py-8"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:chart-bar", "class": "h-12 w-12 text-gray-300 mx-auto mb-3" })} <p class="text-muted-foreground">
No consent data available for analysis
</p> </div>`}` })} ` })} <!-- Recent Withdrawals --> ${typedWithdrawnConsents && typedWithdrawnConsents.length > 0 && renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", $$CardHeader, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", $$CardTitle, {}, { "default": async ($$result4) => renderTemplate`Recent Consent Withdrawals` })} ` })} ${renderComponent($$result2, "CardContent", $$CardContent, {}, { "default": async ($$result3) => renderTemplate` <div class="space-y-4"> ${typedWithdrawnConsents.slice(0, 5).map((consent) => renderTemplate`<div class="border-b pb-4"> <div class="flex items-center justify-between mb-2"> <div> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline" }, { "default": async ($$result4) => renderTemplate`${consent.consent_versions?.consent_types?.name || "Unknown"}` })} <span class="text-xs text-muted-foreground ml-2">
Withdrawn on ${formatDate(consent.withdrawal_date)} </span> </div> </div> ${consent.withdrawal_reason && renderTemplate`<p class="text-sm border-l-2 border-red-200 pl-3 text-gray-600 italic">
"${consent.withdrawal_reason}"
</p>`} </div>`)} </div> ` })} ` })}`} </div>`;
}, "/root/pixel/src/components/admin/consent/ConsentDashboard.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await requirePageAuth(Astro2, "admin");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Consent Management", "description": "Manage patient consent options, versions, and monitor consent status" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white p-6 shadow rounded-lg mb-6"> <div class="flex items-start mb-6"> <div class="mr-4 bg-green-100 p-2 rounded-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:clipboard-check", "class": "h-8 w-8 text-green-600" })} </div> <div> <h2 class="text-lg font-semibold">
HIPAA-Compliant Consent Management
</h2> <p class="text-gray-600">
This dashboard provides tools to create and manage consent types,
          consent document versions, and monitor user consent status in
          compliance with HIPAA regulations.
</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3"> <a href="/admin/consent/types" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"> <div class="mr-3 bg-blue-100 p-2 rounded-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:category", "class": "h-5 w-5 text-blue-600" })} </div> <div> <h3 class="font-medium">Consent Types</h3> <p class="text-sm text-gray-500">Manage consent categories</p> </div> </a> <a href="/admin/consent/versions" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"> <div class="mr-3 bg-purple-100 p-2 rounded-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:versions", "class": "h-5 w-5 text-purple-600" })} </div> <div> <h3 class="font-medium">Document Versions</h3> <p class="text-sm text-gray-500">Manage consent documents</p> </div> </a> <a href="/admin/consent/options" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"> <div class="mr-3 bg-green-100 p-2 rounded-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:list-details", "class": "h-5 w-5 text-green-600" })} </div> <div> <h3 class="font-medium">Consent Options</h3> <p class="text-sm text-gray-500">Manage granular options</p> </div> </a> </div> </div> ${renderComponent($$result2, "ConsentDashboard", $$ConsentDashboard, {})} <div class="mt-8 bg-amber-50 border-l-4 border-amber-400 p-4"> <div class="flex"> <div class="flex-shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:info-circle", "class": "h-5 w-5 text-amber-400" })} </div> <div class="ml-3"> <h3 class="text-sm font-medium text-amber-800">Implementation Note</h3> <div class="mt-2 text-sm text-amber-700"> <p>
This consent management system implements granular consent with
            version tracking and withdrawal workflows according to HIPAA
            requirements. It includes a complete audit trail of all
            consent-related activities.
</p> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/admin/consent/index.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/consent/index.astro";
const $$url = "/admin/consent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
