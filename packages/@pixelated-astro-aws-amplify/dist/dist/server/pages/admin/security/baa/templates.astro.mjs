;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aace3022-f046-452f-8106-b54394be1984",e._sentryDebugIdIdentifier="sentry-dbid-aace3022-f046-452f-8106-b54394be1984")}catch(e){}}();/* empty css                                                   */
/* empty css                                          */
import '../../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_Bujh6RVI.mjs';
import { g as generateId } from '../../../../chunks/ids_CBoNmafZ.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_tzJzO24i.mjs';
export { renderers } from '../../../../renderers.mjs';

const logger = createBuildSafeLogger("phi-audit");
class BaaTemplateService {
  templates = /* @__PURE__ */ new Map();
  constructor() {
    logger.info("BaaTemplateService initialized", {
      component: "BaaTemplateService",
      action: "initialize"
    });
  }
  /**
   * Create a new BAA template
   */
  createTemplate(name, description, version, createdBy, associateTypes, serviceCategories, sections = [], placeholders = [], isDefault = false, tags = []) {
    const id = generateId();
    const template = {
      id,
      name,
      description,
      version,
      lastUpdated: /* @__PURE__ */ new Date(),
      createdBy,
      associateTypes,
      serviceCategories,
      sections,
      placeholders,
      isDefault,
      tags
    };
    this.templates.set(id, template);
    logger.info("BAA Template created", {
      templateId: id,
      name,
      version,
      createdBy,
      action: "create_template"
    });
    return template;
  }
  /**
   * Get a template by ID
   */
  getTemplate(id) {
    const template = this.templates.get(id);
    logger.info("BAA Template accessed", {
      templateId: id,
      found: !!template,
      action: "get_template"
    });
    return template;
  }
  /**
   * Update an existing template
   */
  updateTemplate(id, updates) {
    const template = this.templates.get(id);
    if (!template) {
      logger.warn("BAA Template update failed - template not found", {
        templateId: id,
        action: "update_template_failed"
      });
      return void 0;
    }
    const updatedTemplate = {
      ...template,
      ...updates,
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(id, updatedTemplate);
    logger.info("BAA Template updated", {
      templateId: id,
      updatedFields: Object.keys(updates),
      action: "update_template"
    });
    return updatedTemplate;
  }
  /**
   * Delete a template
   */
  deleteTemplate(id) {
    const result = this.templates.delete(id);
    logger.info("BAA Template deleted", {
      templateId: id,
      success: result,
      action: "delete_template"
    });
    return result;
  }
  /**
   * Add a section to a template
   */
  addSection(templateId, title, content, required = true, description) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn("BAA Template section add failed - template not found", {
        templateId,
        sectionTitle: title,
        action: "add_section_failed"
      });
      return void 0;
    }
    const sectionId = generateId();
    const newSection = {
      id: sectionId,
      title,
      description,
      content,
      required,
      order: template.sections.length
    };
    const updatedTemplate = {
      ...template,
      sections: [...template.sections, newSection],
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template section added", {
      templateId,
      sectionId,
      sectionTitle: title,
      action: "add_section"
    });
    return updatedTemplate;
  }
  /**
   * Update a section in a template
   */
  updateSection(templateId, sectionId, updates) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn("BAA Template section update failed - template not found", {
        templateId,
        sectionId,
        action: "update_section_failed"
      });
      return void 0;
    }
    const sectionIndex = template.sections.findIndex(
      (section) => section.id === sectionId
    );
    if (sectionIndex === -1) {
      logger.warn("BAA Template section update failed - section not found", {
        templateId,
        sectionId,
        action: "update_section_failed"
      });
      return void 0;
    }
    const updatedSections = [...template.sections];
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      ...updates
    };
    const updatedTemplate = {
      ...template,
      sections: updatedSections,
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template section updated", {
      templateId,
      sectionId,
      updatedFields: Object.keys(updates),
      action: "update_section"
    });
    return updatedTemplate;
  }
  /**
   * Remove a section from a template
   */
  removeSection(templateId, sectionId) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn("BAA Template section removal failed - template not found", {
        templateId,
        sectionId,
        action: "remove_section_failed"
      });
      return void 0;
    }
    const updatedSections = template.sections.filter(
      (section) => section.id !== sectionId
    );
    const reorderedSections = updatedSections.map((section, index) => ({
      ...section,
      order: index
    }));
    const updatedTemplate = {
      ...template,
      sections: reorderedSections,
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template section removed", {
      templateId,
      sectionId,
      action: "remove_section"
    });
    return updatedTemplate;
  }
  /**
   * Add a placeholder to a template
   */
  addPlaceholder(templateId, key, label, description, required = true, defaultValue) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn("BAA Template placeholder add failed - template not found", {
        templateId,
        placeholderKey: key,
        action: "add_placeholder_failed"
      });
      return void 0;
    }
    if (template.placeholders.some((p) => p.key === key)) {
      logger.warn("BAA Template placeholder add failed - key already exists", {
        templateId,
        placeholderKey: key,
        action: "add_placeholder_failed"
      });
      return void 0;
    }
    const newPlaceholder = {
      key,
      label,
      description,
      required,
      defaultValue
    };
    const updatedTemplate = {
      ...template,
      placeholders: [...template.placeholders, newPlaceholder],
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template placeholder added", {
      templateId,
      placeholderKey: key,
      action: "add_placeholder"
    });
    return updatedTemplate;
  }
  /**
   * Update a placeholder in a template
   */
  updatePlaceholder(templateId, key, updates) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn(
        "BAA Template placeholder update failed - template not found",
        {
          templateId,
          placeholderKey: key,
          action: "update_placeholder_failed"
        }
      );
      return void 0;
    }
    const placeholderIndex = template.placeholders.findIndex(
      (p) => p.key === key
    );
    if (placeholderIndex === -1) {
      logger.warn(
        "BAA Template placeholder update failed - placeholder not found",
        {
          templateId,
          placeholderKey: key,
          action: "update_placeholder_failed"
        }
      );
      return void 0;
    }
    const updatedPlaceholders = [...template.placeholders];
    updatedPlaceholders[placeholderIndex] = {
      ...updatedPlaceholders[placeholderIndex],
      ...updates
    };
    const updatedTemplate = {
      ...template,
      placeholders: updatedPlaceholders,
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template placeholder updated", {
      templateId,
      placeholderKey: key,
      updatedFields: Object.keys(updates),
      action: "update_placeholder"
    });
    return updatedTemplate;
  }
  /**
   * Remove a placeholder from a template
   */
  removePlaceholder(templateId, key) {
    const template = this.templates.get(templateId);
    if (!template) {
      logger.warn(
        "BAA Template placeholder removal failed - template not found",
        {
          templateId,
          placeholderKey: key,
          action: "remove_placeholder_failed"
        }
      );
      return void 0;
    }
    const updatedPlaceholders = template.placeholders.filter(
      (p) => p.key !== key
    );
    if (updatedPlaceholders.length === template.placeholders.length) {
      logger.warn(
        "BAA Template placeholder removal failed - placeholder not found",
        {
          templateId,
          placeholderKey: key,
          action: "remove_placeholder_failed"
        }
      );
      return void 0;
    }
    const updatedTemplate = {
      ...template,
      placeholders: updatedPlaceholders,
      lastUpdated: /* @__PURE__ */ new Date()
    };
    this.templates.set(templateId, updatedTemplate);
    logger.info("BAA Template placeholder removed", {
      templateId,
      placeholderKey: key,
      action: "remove_placeholder"
    });
    return updatedTemplate;
  }
  /**
   * Get all templates
   */
  getAllTemplates() {
    const templates = Array.from(this.templates.values());
    logger.info("All BAA Templates accessed", {
      templateCount: templates.length,
      action: "get_all_templates"
    });
    return templates;
  }
  /**
   * Filter templates by criteria
   */
  filterTemplates(criteria) {
    const templates = Array.from(this.templates.values()).filter((template) => {
      if (criteria.associateType && !template.associateTypes.includes(criteria.associateType)) {
        return false;
      }
      if (criteria.serviceCategory && !template.serviceCategories.includes(criteria.serviceCategory)) {
        return false;
      }
      if (criteria.isDefault !== void 0 && template.isDefault !== criteria.isDefault) {
        return false;
      }
      if (criteria.tag && !template.tags.includes(criteria.tag)) {
        return false;
      }
      return true;
    });
    logger.info("BAA Templates filtered", {
      criteria: JSON.stringify(criteria),
      resultCount: templates.length,
      action: "filter_templates"
    });
    return templates;
  }
  /**
   * Create a default BAA template with standard sections
   */
  createDefaultTemplate(createdBy) {
    const template = this.createTemplate(
      "Standard HIPAA Business Associate Agreement",
      "Default BAA template compliant with HIPAA regulations",
      "1.0",
      createdBy,
      ["EHR_VENDOR", "CLOUD_SERVICE", "DATA_ANALYTICS", "TELEMEDICINE"],
      ["DATA_STORAGE", "SOFTWARE_SERVICES", "CONSULTING"],
      [],
      [],
      true,
      ["hipaa", "default", "standard"]
    );
    this.addSection(
      template.id,
      "Definitions",
      '1.1. **Business Associate** shall have the same meaning as the term "business associate" in 45 CFR § 160.103.\n\n1.2. **Covered Entity** shall have the same meaning as the term "covered entity" in 45 CFR § 160.103.\n\n1.3. **HIPAA Rules** shall mean the Privacy, Security, Breach Notification, and Enforcement Rules at 45 CFR Part 160 and Part 164.\n\n1.4. **Protected Health Information** or **PHI** shall have the same meaning as the term "protected health information" in 45 CFR § 160.103, limited to the information created, received, maintained, or transmitted by Business Associate on behalf of Covered Entity.',
      true,
      "Defines key terms used throughout the agreement"
    );
    this.addSection(
      template.id,
      "Obligations of Business Associate",
      "2.1. Not use or disclose PHI other than as permitted or required by this Agreement or as required by law.\n\n2.2. Use appropriate safeguards, and comply with Subpart C of 45 CFR Part 164 with respect to electronic PHI, to prevent use or disclosure of PHI other than as provided for by this Agreement.\n\n2.3. Report to Covered Entity any use or disclosure of PHI not provided for by this Agreement of which it becomes aware, including breaches of unsecured PHI as required by 45 CFR § 164.410, and any security incident of which it becomes aware.\n\n2.4. In accordance with 45 CFR §§ 164.502(e)(1)(ii) and 164.308(b)(2), ensure that any subcontractors that create, receive, maintain, or transmit PHI on behalf of the Business Associate agree to the same restrictions, conditions, and requirements that apply to the Business Associate with respect to such information.",
      true,
      "Outlines the responsibilities of the Business Associate"
    );
    this.addSection(
      template.id,
      "Permitted Uses and Disclosures",
      "Business Associate may only use or disclose PHI as necessary to perform the services set forth in the Service Agreement between the parties, provided that such use or disclosure would not violate HIPAA if done by Covered Entity.\n\nBusiness Associate may use or disclose PHI as required by law.\n\nBusiness Associate agrees to make uses and disclosures and requests for PHI consistent with Covered Entity's minimum necessary policies and procedures.",
      true,
      "Describes how PHI may be used by the Business Associate"
    );
    this.addSection(
      template.id,
      "Obligations of Covered Entity",
      "4.1. Notify Business Associate of any limitation(s) in the notice of privacy practices of Covered Entity under 45 CFR § 164.520, to the extent that such limitation may affect Business Associate's use or disclosure of PHI.\n\n4.2. Notify Business Associate of any changes in, or revocation of, the permission by an individual to use or disclose his or her PHI, to the extent that such changes may affect Business Associate's use or disclosure of PHI.\n\n4.3. Notify Business Associate of any restriction on the use or disclosure of PHI that Covered Entity has agreed to or is required to abide by under 45 CFR § 164.522, to the extent that such restriction may affect Business Associate's use or disclosure of PHI.",
      true,
      "Outlines the responsibilities of the Covered Entity"
    );
    this.addSection(
      template.id,
      "Term and Termination",
      "5.1. **Term**. The term of this Agreement shall be effective as of [EFFECTIVE_DATE], and shall terminate on the earlier of (a) the termination of the Service Agreement or (b) the date Covered Entity terminates for cause as authorized in paragraph 5.2 of this Section.\n\n5.2. **Termination for Cause**. Business Associate authorizes termination of this Agreement by Covered Entity, if Covered Entity determines Business Associate has violated a material term of the Agreement and Business Associate has not cured the breach or ended the violation within a reasonable time specified by Covered Entity.\n\n5.3. **Obligations upon Termination**. Upon termination of this Agreement for any reason, Business Associate shall return to Covered Entity or, if agreed to by Covered Entity, destroy all PHI received from Covered Entity, or created, maintained, or received by Business Associate on behalf of Covered Entity. Business Associate shall retain no copies of the PHI. If return or destruction is infeasible, the protections of this Agreement shall continue to apply to such PHI, and Business Associate shall limit further uses and disclosures of such PHI to those purposes that make the return or destruction infeasible.",
      true,
      "Specifies agreement duration and termination conditions"
    );
    this.addPlaceholder(
      template.id,
      "EFFECTIVE_DATE",
      "Effective Date",
      "The effective date of this BAA",
      true
    );
    logger.info("Default BAA Template created", {
      templateId: template.id,
      createdBy,
      action: "create_default_template"
    });
    return template;
  }
}

const $$Templates = createComponent(($$result, $$props, $$slots) => {
  const templateService = new BaaTemplateService();
  const userId = "admin-user";
  const templates = templateService.getAllTemplates();
  if (templates.length === 0) {
    templateService.createDefaultTemplate(userId);
  }
  const allTemplates = templateService.getAllTemplates();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "BAA Template Management", "description": "Manage HIPAA-compliant Business Associate Agreement templates" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8"> <div class="flex justify-between items-center mb-6"> <h1 class="text-2xl font-bold text-gray-800">BAA Template Management</h1> <button id="create-template" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
Create New Template
</button> </div> <div class="bg-white rounded-lg shadow-sm p-6 mb-8"> <h2 class="text-xl font-semibold mb-4">Templates</h2> ${allTemplates.length === 0 ? renderTemplate`<p class="text-gray-500">
No templates found. Create your first template to get started.
</p>` : renderTemplate`<div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Name
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Version
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Last Updated
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Associate Types
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Default
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${allTemplates.map((template) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> ${template.name} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${template.version} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${template.lastUpdated.toLocaleDateString()} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${template.associateTypes.map((type) => renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1"> ${type.replace("_", " ")} </span>`)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${template.isDefault ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
Default
</span>` : renderTemplate`<span>-</span>`} </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"> <a${addAttribute(`/admin/security/baa/templates/${template.id}`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
View
</a> <a${addAttribute(`/admin/security/baa/templates/${template.id}/edit`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
Edit
</a> <button${addAttribute(template.id, "data-template-id")} class="delete-template text-red-600 hover:text-red-900">
Delete
</button> </td> </tr>`)} </tbody> </table> </div>`} </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Template Creation Guide</h2> <div class="space-y-4"> <p class="text-gray-700">
BAA templates help enforce HIPAA compliance with your business
            associates. Here's how to create an effective template:
</p> <ol class="list-decimal list-inside text-gray-700 space-y-2"> <li>Start with the standard HIPAA BAA template as a foundation</li> <li>
Customize required sections to match your organization's policies
</li> <li>
Define placeholders for variable information that changes per
              agreement
</li> <li>
Add optional sections for specific types of business associates
</li> <li>
Ensure all regulatory requirements are covered in your template
</li> </ol> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">HIPAA Requirements</h2> <div class="space-y-4"> <p class="text-gray-700">
Business Associate Agreements must include provisions that:
</p> <ul class="list-disc list-inside text-gray-700 space-y-2"> <li>
Describe permitted and required uses of PHI by the business
              associate
</li> <li>
Prohibit the business associate from using or disclosing PHI other
              than as permitted or required
</li> <li>
Require appropriate safeguards to prevent unauthorized use or
              disclosure
</li> <li>Require reporting of breaches or unauthorized disclosures</li> <li>
Require the business associate to comply with HIPAA Privacy Rule
              requirements
</li> <li>
Require the return or destruction of PHI upon termination of the
              agreement
</li> </ul> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/security/baa/templates.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/pages/admin/security/baa/templates.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security/baa/templates.astro";
const $$url = "/admin/security/baa/templates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Templates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
