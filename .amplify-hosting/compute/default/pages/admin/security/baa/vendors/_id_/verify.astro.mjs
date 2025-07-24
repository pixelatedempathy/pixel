;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f93316c4-edc1-4885-a899-a4fe3557a82e",e._sentryDebugIdIdentifier="sentry-dbid-f93316c4-edc1-4885-a899-a4fe3557a82e")}catch(e){}}();/* empty css                                                         */
/* empty css                                                */
import '../../../../../../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../../../../../../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$AdminLayout } from '../../../../../../chunks/AdminLayout_DQ9SjUHy.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const $$Verify = createComponent(($$result, $$props, $$slots) => {
  const documents = [];
  const verificationHistory = [];
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto py-8"> <h1 class="text-2xl font-bold mb-6">Vendor Document Verification</h1> <!-- Upload Document Form --> <form id="document-form" class="bg-white rounded-lg shadow-sm p-6 mb-8" autocomplete="off"> <h2 class="text-lg font-semibold mb-4">Upload Compliance Document</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="documentDescription" class="block text-sm font-medium text-gray-700 mb-1">Description</label> <textarea id="documentDescription" name="documentDescription" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Brief description of the document..."></textarea> </div> <div> <label for="documentExpiryDate" class="block text-sm font-medium text-gray-700 mb-1">Document Expiry Date</label> <input type="date" id="documentExpiryDate" name="documentExpiryDate" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div class="md:col-span-2"> <label for="documentFile" class="block text-sm font-medium text-gray-700 mb-1">Upload Document<span class="text-red-500">*</span></label> <input type="file" id="documentFile" name="documentFile" required accept=".pdf,.doc,.docx,.xls,.xlsx" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> <p class="mt-1 text-xs text-gray-500">
Accepted formats: PDF, DOC, DOCX, XLS, XLSX (max 10MB)
</p> </div> </div> <div class="flex justify-end pt-4"> <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload Document</button> </div> </form> <!-- Documents and Verification History --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> <!-- Documents Section --> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-lg font-semibold mb-4">Compliance Documents</h2> ${documents.length === 0 ? renderTemplate`<p class="text-gray-500">
No documents have been uploaded for this vendor.
</p>` : renderTemplate`<div class="overflow-y-auto max-h-96"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Document
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Type
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Uploaded
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${documents.map((doc) => renderTemplate`<tr> <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-900"> <a${addAttribute(doc.documentUrl, "href")} target="_blank" rel="noopener noreferrer"> ${doc.name} </a> ${doc.description && renderTemplate`<p class="text-xs text-gray-500 truncate"> ${doc.description} </p>`} </td> <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 capitalize"> ${doc.type.replace(/_/g, " ")} </td> <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500"> ${new Date(doc.uploadDate).toLocaleDateString()} ${doc.expiryDate && renderTemplate`<div class="text-xs text-gray-500">
Expires:${" "} ${new Date(doc.expiryDate).toLocaleDateString()} </div>`} </td> <td class="px-4 py-3 whitespace-nowrap"> ${doc.isValid ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
Valid
</span>` : renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
Invalid
</span>`} </td> </tr>`)} </tbody> </table> </div>`} </div> <!-- Verification History Section --> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-lg font-semibold mb-4">Verification History</h2> ${verificationHistory.length === 0 ? renderTemplate`<p class="text-gray-500">
No verification history found for this vendor.
</p>` : renderTemplate`<div class="overflow-y-auto max-h-96"> <div class="space-y-4"> ${verificationHistory.map((verification) => renderTemplate`<div class="border border-gray-200 rounded-md p-4"> <div class="flex justify-between items-start"> <div> <p class="text-sm font-medium"> ${verification.complianceLevel.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} </p> <p class="text-xs text-gray-500">
Verified on${" "} ${new Date(
    verification.verificationDate
  ).toLocaleDateString()}${" "}
via${" "} ${verification.verificationMethod.replace(/_/g, " ")} </p> </div> ${verification.expiryDate && renderTemplate`<div class="text-right"> <p class="text-xs text-gray-500"> ${new Date(verification.expiryDate) > /* @__PURE__ */ new Date() ? `Expires on ${new Date(verification.expiryDate).toLocaleDateString()}` : `Expired on ${new Date(verification.expiryDate).toLocaleDateString()}`} </p> </div>`} </div> ${verification.notes && renderTemplate`<div class="mt-2 text-sm text-gray-600 border-t border-gray-100 pt-2"> ${verification.notes} </div>`} ${verification.attachments && verification.attachments.length > 0 && renderTemplate`<div class="mt-2"> <p class="text-xs font-medium text-gray-500">
Attached Documents:
</p> <ul class="mt-1 text-xs text-indigo-600"> ${verification.attachments.map((docId) => {
    const doc = documents.find((d) => d.id === docId);
    return doc ? renderTemplate`<li class="inline-block mr-2"> <a${addAttribute(doc.documentUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-indigo-900"> ${doc.name} </a> </li>` : null;
  })} </ul> </div>`} </div>`)} </div> </div>`} </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/security/baa/vendors/[id]/verify.astro?astro&type=script&index=0&lang.ts")}
>Document Expiry Date
<input type="date" id="documentExpiryDate" name="documentExpiryDate" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> <div> <label for="documentFile" class="block text-sm font-medium text-gray-700 mb-1">Upload Document*</label> <input type="file" id="documentFile" name="documentFile" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> <p class="mt-1 text-xs text-gray-500">
Accepted formats: PDF, DOC, DOCX, XLS, XLSX (max 10MB)
</p> </div> <div class="flex justify-end pt-4"> <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Upload Document
</button> </div> <!-- Documents and Verification History --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> <!-- Documents Section --> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-lg font-semibold mb-4">Compliance Documents</h2> ${documents.length === 0 ? renderTemplate`<p class="text-gray-500">
No documents have been uploaded for this vendor.
</p>` : renderTemplate`<div class="overflow-y-auto max-h-96"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Document
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Type
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Uploaded
</th> <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${documents.map((doc) => renderTemplate`<tr> <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-900"> <a${addAttribute(doc.documentUrl, "href")} target="_blank" rel="noopener noreferrer"> ${doc.name} </a> ${doc.description && renderTemplate`<p class="text-xs text-gray-500 truncate"> ${doc.description} </p>`} </td> <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 capitalize"> ${doc.type.replace(/_/g, " ")} </td> <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500"> ${new Date(doc.uploadDate).toLocaleDateString()} ${doc.expiryDate && renderTemplate`<div class="text-xs text-gray-500">
Expires: ${new Date(doc.expiryDate).toLocaleDateString()} </div>`} </td> <td class="px-4 py-3 whitespace-nowrap"> ${doc.isValid ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
Valid
</span>` : renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
Invalid
</span>`} </td> </tr>`)} </tbody> </table> </div>`} </div> <!-- Verification History Section --> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-lg font-semibold mb-4">Verification History</h2> ${verificationHistory.length === 0 ? renderTemplate`<p class="text-gray-500">
No verification history found for this vendor.
</p>` : renderTemplate`<div class="overflow-y-auto max-h-96"> <div class="space-y-4"> ${verificationHistory.map((verification) => renderTemplate`<div class="border border-gray-200 rounded-md p-4"> <div class="flex justify-between items-start"> <div> <p class="text-sm font-medium"> ${verification.complianceLevel.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} </p> <p class="text-xs text-gray-500">
Verified on${" "} ${new Date(
    verification.verificationDate
  ).toLocaleDateString()}
via ${verification.verificationMethod.replace(/_/g, " ")} </p> </div> ${verification.expiryDate && renderTemplate`<div class="text-right"> <p class="text-xs text-gray-500"> ${new Date(verification.expiryDate) > /* @__PURE__ */ new Date() ? `Expires on ${new Date(verification.expiryDate).toLocaleDateString()}` : `Expired on ${new Date(verification.expiryDate).toLocaleDateString()}`} </p> </div>`} </div> ${verification.notes && renderTemplate`<div class="mt-2 text-sm text-gray-600 border-t border-gray-100 pt-2"> ${verification.notes} </div>`} ${verification.attachments && verification.attachments.length > 0 && renderTemplate`<div class="mt-2"> <p class="text-xs font-medium text-gray-500">
Attached Documents:
</p> <ul class="mt-1 text-xs text-indigo-600"> ${verification.attachments.map((docId) => {
    const doc = documents.find((d) => d.id === docId);
    return doc ? renderTemplate`<li class="inline-block mr-2"> <a${addAttribute(doc.documentUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-indigo-900"> ${doc.name} </a> </li>` : null;
  })} </ul> </div>`} </div>`)} </div> </div>`} </div> </div> ${renderScript($$result, "/root/pixel/src/pages/admin/security/baa/vendors/[id]/verify.astro?astro&type=script&index=1&lang.ts")}`;
}, "/root/pixel/src/pages/admin/security/baa/vendors/[id]/verify.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security/baa/vendors/[id]/verify.astro";
const $$url = "/admin/security/baa/vendors/[id]/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Verify,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
