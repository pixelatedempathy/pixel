;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="18ea679d-b895-4d77-baa6-225f8872bd76",e._sentryDebugIdIdentifier="sentry-dbid-18ea679d-b895-4d77-baa6-225f8872bd76")}catch(e){}}();/* empty css                                                   */
/* empty css                                          */
import '../../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../../../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_CQPtU_GH.mjs';
import { B as BusinessAssociateService } from '../../../../chunks/BusinessAssociateService_C8aQv5zW.mjs';
import { C as ComplianceVerificationService } from '../../../../chunks/ComplianceVerificationService_CJTxZekB.mjs';
import { B as BusinessAssociateType, S as ServiceCategory, C as ComplianceLevel } from '../../../../chunks/types_BTDF_brL.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Vendors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vendors;
  const businessAssociateService = new BusinessAssociateService();
  const verificationService = new ComplianceVerificationService();
  const searchQuery = Astro2.url.searchParams.get("searchQuery") || "";
  const type = Astro2.url.searchParams.get("type") || "";
  const compliance = Astro2.url.searchParams.get("compliance") || "";
  if (businessAssociateService.getAllBusinessAssociates().length === 0) {
    businessAssociateService.createBusinessAssociate(
      "Secure Health Storage Inc.",
      BusinessAssociateType.VENDOR,
      [ServiceCategory.DATA_STORAGE],
      "John Smith",
      "john@securehealth.example.com",
      ComplianceLevel.HIPAA_CERTIFIED,
      "555-123-4567",
      "123 Security Ave, Dataville, CA 90210",
      "https://securehealth.example.com",
      "HITRUST certified cloud storage provider"
    );
    businessAssociateService.createBusinessAssociate(
      "Analytics Partners LLC",
      BusinessAssociateType.SERVICE_PROVIDER,
      [ServiceCategory.ANALYTICS, ServiceCategory.DATA_PROCESSING],
      "Sarah Johnson",
      "sarah@analyticspartners.example.com",
      ComplianceLevel.SELF_ATTESTED,
      "555-987-6543",
      "456 Data Lane, Analytics City, NY 10001",
      "https://analyticspartners.example.com",
      "Provides data analysis and reporting services"
    );
    businessAssociateService.createBusinessAssociate(
      "Healthcare API Solutions",
      BusinessAssociateType.PARTNER,
      [ServiceCategory.TECHNICAL_SUPPORT, ServiceCategory.DATA_PROCESSING],
      "Michael Wong",
      "michael@hcapi.example.com",
      ComplianceLevel.THIRD_PARTY_VERIFIED,
      "555-567-8901",
      "789 API Road, Integration Hills, WA 98101",
      "https://hcapi.example.com",
      "API integration and technical support partner"
    );
  }
  const businessAssociates = businessAssociateService.searchBusinessAssociates(
    searchQuery,
    type || void 0,
    compliance || void 0
  );
  const typeOptions = Object.values(BusinessAssociateType).map((type2) => ({
    value: type2,
    label: type2.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  }));
  const complianceOptions = Object.values(ComplianceLevel).map((level) => ({
    value: level,
    label: level.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  }));
  if (verificationService.getAllRequirements().length === 0) {
    verificationService.initializeDefaultRequirements();
  }
  const stats = {
    total: businessAssociates.length,
    verified: businessAssociates.filter(
      (ba) => ba.complianceLevel !== ComplianceLevel.NOT_VERIFIED && ba.complianceLevel !== ComplianceLevel.NON_COMPLIANT
    ).length,
    expiring: businessAssociateService.getExpiringCompliance().length,
    expired: businessAssociateService.getExpiredCompliance().length,
    noncompliant: businessAssociates.filter(
      (ba) => ba.complianceLevel === ComplianceLevel.NON_COMPLIANT
    ).length
  };
  const complianceStats = businessAssociateService.getComplianceStatistics();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Vendor Compliance Verification", "description": "Manage and verify HIPAA compliance for business associates" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8"> <div class="flex justify-between items-center mb-6"> <h1 class="text-2xl font-bold text-gray-800">
Vendor Compliance Verification
</h1> <div class="flex space-x-3"> <button id="add-vendor-btn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
Add New Vendor
</button> <a href="/admin/security/baa/vendors/requirements" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
Manage Requirements
</a> </div> </div> <!-- Statistics Cards --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6"> <div class="bg-white rounded-lg shadow-sm p-4"> <h3 class="text-sm font-medium text-gray-500">Total Vendors</h3> <p class="text-2xl font-bold text-gray-800">${stats.total}</p> </div> <div class="bg-white rounded-lg shadow-sm p-4"> <h3 class="text-sm font-medium text-gray-500">Verified Vendors</h3> <p class="text-2xl font-bold text-green-600">${stats.verified}</p> </div> <div class="bg-white rounded-lg shadow-sm p-4"> <h3 class="text-sm font-medium text-gray-500">Expiring Soon</h3> <p class="text-2xl font-bold text-amber-500">${stats.expiring}</p> </div> <div class="bg-white rounded-lg shadow-sm p-4"> <h3 class="text-sm font-medium text-gray-500">Expired</h3> <p class="text-2xl font-bold text-orange-600">${stats.expired}</p> </div> <div class="bg-white rounded-lg shadow-sm p-4"> <h3 class="text-sm font-medium text-gray-500">Non-Compliant</h3> <p class="text-2xl font-bold text-red-600">${stats.noncompliant}</p> </div> </div> <!-- Search and Filter --> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-lg font-semibold mb-4">Search and Filter Vendors</h2> <form id="search-form" class="grid grid-cols-1 md:grid-cols-4 gap-4"> <div> <label for="searchQuery" class="block text-sm font-medium text-gray-700 mb-1">Search</label> <input type="text" id="searchQuery" name="searchQuery"${addAttribute(searchQuery, "value")} placeholder="Vendor name or contact" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Vendor Type</label> <select id="type" name="type" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> <option value="">All Types</option> ${typeOptions.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}${addAttribute(type === option.value, "selected")}> ${option.label} </option>`)} </select> </div> <div> <label for="compliance" class="block text-sm font-medium text-gray-700 mb-1">Compliance Level</label> <select id="compliance" name="compliance" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> <option value="">All Levels</option> ${complianceOptions.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}${addAttribute(compliance === option.value, "selected")}> ${option.label} </option>`)} </select> </div> <div class="flex items-end"> <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors w-full">
Apply Filters
</button> </div> </form> </div> <!-- Vendors Table --> <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8"> <div class="px-6 py-4 border-b border-gray-200"> <h2 class="text-lg font-semibold">Business Associates / Vendors</h2> </div> ${businessAssociates.length === 0 ? renderTemplate`<div class="p-6 text-center text-gray-500">
No vendors match your search criteria. Try adjusting your filters or
            add a new vendor.
</div>` : renderTemplate`<div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Name
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Type
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Contact
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Compliance Status
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Last Verified
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Active BAA
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${businessAssociates.map((vendor) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm font-medium text-gray-900"> ${vendor.name} </div> ${vendor.website && renderTemplate`<div class="text-sm text-gray-500"> <a${addAttribute(vendor.website, "href")} target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-900"> ${vendor.website.replace(/^https?:\/\//, "")} </a> </div>`} </td> <td class="px-6 py-4 whitespace-nowrap"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> ${vendor.type.replace(/_/g, " ")} </span> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm text-gray-900"> ${vendor.contactName} </div> <div class="text-sm text-gray-500"> ${vendor.contactEmail} </div> ${vendor.contactPhone && renderTemplate`<div class="text-sm text-gray-500"> ${vendor.contactPhone} </div>`} </td> <td class="px-6 py-4 whitespace-nowrap"> ${(() => {
    switch (vendor.complianceLevel) {
      case ComplianceLevel.HIPAA_CERTIFIED:
        return renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
HIPAA Certified
</span>`;
      case ComplianceLevel.THIRD_PARTY_VERIFIED:
        return renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
Third Party Verified
</span>`;
      case ComplianceLevel.SELF_ATTESTED:
        return renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
Self Attested
</span>`;
      case ComplianceLevel.NON_COMPLIANT:
        return renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
Non Compliant
</span>`;
      default:
        return renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
Not Verified
</span>`;
    }
  })()} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${vendor.complianceVerificationDate ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${new Date(
    vendor.complianceVerificationDate
  ).toLocaleDateString()}${vendor.complianceExpiryDate && renderTemplate`<div class="text-xs text-gray-500">
Expires:${" "} ${new Date(
    vendor.complianceExpiryDate
  ).toLocaleDateString()} </div>`}` })}` : renderTemplate`<span>Not verified</span>`} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${vendor.activeAgreementId ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
Active
</span>` : renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
None
</span>`} </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"> <a${addAttribute(`/admin/security/baa/vendors/${vendor.id}`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
View
</a> <a${addAttribute(`/admin/security/baa/vendors/${vendor.id}/verify`, "href")} class="text-green-600 hover:text-green-900 mr-3">
Verify
</a> <a${addAttribute(`/admin/security/baa/vendors/${vendor.id}/edit`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
Edit
</a> <button${addAttribute(vendor.id, "data-vendor-id")} class="delete-vendor text-red-600 hover:text-red-900">
Delete
</button> </td> </tr>`)} </tbody> </table> </div>`} </div> <!-- Compliance Levels Legend --> <div class="bg-white rounded-lg shadow-sm p-6 mb-8"> <h2 class="text-lg font-semibold mb-4">Compliance Levels</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"> <div class="flex items-center"> <span class="inline-block w-4 h-4 rounded-full bg-green-100 mr-2"></span> <div> <div class="text-sm font-medium">HIPAA Certified</div> <div class="text-xs text-gray-500"> ${complianceStats[ComplianceLevel.HIPAA_CERTIFIED]} vendors
</div> </div> </div> <div class="flex items-center"> <span class="inline-block w-4 h-4 rounded-full bg-cyan-100 mr-2"></span> <div> <div class="text-sm font-medium">Third Party Verified</div> <div class="text-xs text-gray-500"> ${complianceStats[ComplianceLevel.THIRD_PARTY_VERIFIED]} vendors
</div> </div> </div> <div class="flex items-center"> <span class="inline-block w-4 h-4 rounded-full bg-yellow-100 mr-2"></span> <div> <div class="text-sm font-medium">Self Attested</div> <div class="text-xs text-gray-500"> ${complianceStats[ComplianceLevel.SELF_ATTESTED]} vendors
</div> </div> </div> <div class="flex items-center"> <span class="inline-block w-4 h-4 rounded-full bg-gray-100 mr-2"></span> <div> <div class="text-sm font-medium">Not Verified</div> <div class="text-xs text-gray-500"> ${complianceStats[ComplianceLevel.NOT_VERIFIED]} vendors
</div> </div> </div> <div class="flex items-center"> <span class="inline-block w-4 h-4 rounded-full bg-red-100 mr-2"></span> <div> <div class="text-sm font-medium">Non Compliant</div> <div class="text-xs text-gray-500"> ${complianceStats[ComplianceLevel.NON_COMPLIANT]} vendors
</div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/security/baa/vendors.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/security/baa/vendors.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security/baa/vendors.astro";
const $$url = "/admin/security/baa/vendors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vendors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
