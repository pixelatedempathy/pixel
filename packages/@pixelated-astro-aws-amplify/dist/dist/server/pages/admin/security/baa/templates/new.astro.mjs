;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="31d21abd-0ef6-489f-8aad-46a03d915bbe",e._sentryDebugIdIdentifier="sentry-dbid-31d21abd-0ef6-489f-8aad-46a03d915bbe")}catch(e){}}();/* empty css                                                      */
/* empty css                                             */
import '../../../../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, a as renderTemplate, f as defineScriptVars, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../../../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../../../../chunks/AdminLayout_Bujh6RVI.mjs';
import { B as BusinessAssociateType, S as ServiceCategory } from '../../../../../chunks/types_KGCeBlOt.mjs';
export { renderers } from '../../../../../renderers.mjs';

const standardSections = [
  {
    id: "definitions",
    title: "Definitions",
    description: "Defines key terms used throughout the agreement",
    content: 'For the purposes of this Agreement, the following definitions shall apply:\n\n1.1. **Business Associate** shall mean {{BUSINESS_ASSOCIATE_NAME}}.\n\n1.2. **Covered Entity** shall mean {{COVERED_ENTITY_NAME}}.\n\n1.3. **HIPAA** shall mean the Health Insurance Portability and Accountability Act of 1996, Public Law 104-191, as amended by the Health Information Technology for Economic and Clinical Health Act, Public Law 111-005, and related regulations.\n\n1.4. **Protected Health Information** or **PHI** shall have the same meaning as the term "protected health information" in 45 CFR § 160.103, limited to the information created, received, maintained, or transmitted by Business Associate on behalf of Covered Entity.',
    required: true,
    order: 0
  },
  {
    id: "obligations",
    title: "Obligations of Business Associate",
    description: "Outlines the core responsibilities of the Business Associate",
    content: "Business Associate agrees to:\n\n2.1. Not use or disclose PHI other than as permitted or required by this Agreement or as required by law.\n\n2.2. Use appropriate safeguards, and comply with Subpart C of 45 CFR Part 164 with respect to electronic PHI, to prevent use or disclosure of PHI other than as provided for by this Agreement.\n\n2.3. Report to Covered Entity any use or disclosure of PHI not provided for by this Agreement of which it becomes aware, including breaches of unsecured PHI as required by 45 CFR § 164.410, and any security incident of which it becomes aware.\n\n2.4. In accordance with 45 CFR §§ 164.502(e)(1)(ii) and 164.308(b)(2), ensure that any subcontractors that create, receive, maintain, or transmit PHI on behalf of the Business Associate agree to the same restrictions, conditions, and requirements that apply to the Business Associate with respect to such information.",
    required: true,
    order: 1
  },
  {
    id: "permitted-uses",
    title: "Permitted Uses and Disclosures",
    description: "Specifies allowed uses of protected health information",
    content: "Business Associate may only use or disclose PHI as necessary to perform the services set forth in the Service Agreement between the parties, provided that such use or disclosure would not violate HIPAA if done by Covered Entity.\n\nBusiness Associate may use or disclose PHI as required by law.\n\nBusiness Associate agrees to make uses and disclosures and requests for PHI consistent with Covered Entity's minimum necessary policies and procedures.",
    required: true,
    order: 2
  },
  {
    id: "covered-entity-obligations",
    title: "Obligations of Covered Entity",
    description: "Specifies the responsibilities of the Covered Entity",
    content: "Covered Entity shall:\n\n4.1. Notify Business Associate of any limitation(s) in the notice of privacy practices of Covered Entity under 45 CFR § 164.520, to the extent that such limitation may affect Business Associate's use or disclosure of PHI.\n\n4.2. Notify Business Associate of any changes in, or revocation of, the permission by an individual to use or disclose his or her PHI, to the extent that such changes may affect Business Associate's use or disclosure of PHI.\n\n4.3. Notify Business Associate of any restriction on the use or disclosure of PHI that Covered Entity has agreed to or is required to abide by under 45 CFR § 164.522, to the extent that such restriction may affect Business Associate's use or disclosure of PHI.",
    required: true,
    order: 3
  },
  {
    id: "term-termination",
    title: "Term and Termination",
    description: "Defines the agreement duration and termination conditions",
    content: "5.1. **Term**. The Term of this Agreement shall be effective as of {{EFFECTIVE_DATE}}, and shall terminate on the earlier of (a) the termination of the Service Agreement, or (b) the date either party terminates for cause as authorized in Section 5.2.\n\n5.2. **Termination for Cause**. Either party may terminate this Agreement for cause if it determines that the other party has violated a material term of the Agreement and has not cured the breach within {{CURE_PERIOD}} days after written notice of such breach.\n\n5.3. **Obligations upon Termination**. Upon termination of this Agreement for any reason, Business Associate shall return to Covered Entity or, if agreed to by Covered Entity, destroy all PHI received from Covered Entity, or created, maintained, or received by Business Associate on behalf of Covered Entity. Business Associate shall retain no copies of the PHI. If return or destruction is infeasible, the protections of this Agreement shall continue to apply to such PHI, and Business Associate shall limit further uses and disclosures of such PHI to those purposes that make the return or destruction infeasible.",
    required: true,
    order: 4
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    description: "Includes additional legal provisions and requirements",
    content: "6.1. **Regulatory References**. A reference in this Agreement to a section in HIPAA means the section as in effect or as amended.\n\n6.2. **Amendment**. The Parties agree to take such action as is necessary to amend this Agreement from time to time as is necessary for compliance with the requirements of HIPAA.\n\n6.3. **Interpretation**. Any ambiguity in this Agreement shall be interpreted to permit compliance with HIPAA.\n\n6.4. **No Third-Party Beneficiaries**. Nothing in this Agreement shall confer upon any person other than the parties and their respective successors or assigns, any rights, remedies, obligations, or liabilities whatsoever.\n\n6.5. **Governing Law**. This Agreement shall be governed by and construed in accordance with the laws of {{GOVERNING_LAW_STATE}}, without regard to its conflict of laws principles.",
    required: true,
    order: 5
  },
  {
    id: "special-provisions",
    title: "Special Provisions",
    description: "Additional provisions specific to certain business relationships or use cases",
    content: "7.1. **Fully Homomorphic Encryption**. When processing electronic PHI, Business Associate will utilize Fully Homomorphic Encryption (FHE) capabilities provided by Covered Entity when available and appropriate for the specific processing needs. For PHI that is processed using Covered Entity's FHE systems, Business Associate acknowledges that it will not have access to unencrypted PHI and will only perform operations on the encrypted data as authorized.\n\n7.2. **Security Certifications**. Business Associate represents and warrants that it has implemented security measures that meet or exceed industry standards required for handling and processing PHI, including {{SECURITY_CERTIFICATIONS}}.\n\n7.3. **Audit Rights**. Covered Entity shall have the right, upon reasonable notice, to audit Business Associate's compliance with this Agreement, including but not limited to its privacy and security policies, procedures, and practices relating to the PHI received, created, maintained, or transmitted by Business Associate on behalf of Covered Entity.",
    required: false,
    order: 6
  },
  {
    id: "data-breach-procedure",
    title: "Data Breach Procedure",
    description: "Detailed procedure for handling data breaches",
    content: "8.1. **Breach Notification**. Business Associate shall notify Covered Entity of any Breach of Unsecured Protected Health Information without unreasonable delay and in no case later than {{BREACH_NOTIFICATION_PERIOD}} calendar days after discovery of a Breach.\n\n8.2. **Notification Content**. The notification shall include, to the extent possible, the identification of each individual whose Unsecured Protected Health Information has been, or is reasonably believed by Business Associate to have been, accessed, acquired, used, or disclosed during the Breach. Business Associate shall also provide Covered Entity with any other available information that Covered Entity is required to include in notification to the individual under 45 CFR § 164.404(c).\n\n8.3. **Investigation and Mitigation**. Business Associate agrees to investigate the Breach, to identify the root cause, and to implement appropriate remediation measures to prevent similar Breaches in the future.",
    required: false,
    order: 7
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Insurance requirements for the Business Associate",
    content: "Business Associate shall maintain insurance coverage sufficient to cover its responsibilities and liabilities under this Agreement, including but not limited to cyber liability insurance coverage with a policy limit of not less than {{INSURANCE_COVERAGE_AMOUNT}} per occurrence.\n\nBusiness Associate shall provide proof of such insurance coverage to Covered Entity upon request.",
    required: false,
    order: 8
  }
];
const standardPlaceholders = [
  {
    key: "BUSINESS_ASSOCIATE_NAME",
    label: "Business Associate Name",
    description: "Legal name of the business associate or vendor",
    required: true
  },
  {
    key: "COVERED_ENTITY_NAME",
    label: "Covered Entity Name",
    description: "Legal name of the covered entity (your organization)",
    required: true
  },
  {
    key: "EFFECTIVE_DATE",
    label: "Effective Date",
    description: "Date when the agreement goes into effect (MM/DD/YYYY)",
    required: true
  },
  {
    key: "CURE_PERIOD",
    label: "Cure Period",
    description: "Number of days allowed to fix a material breach of the agreement",
    required: true,
    defaultValue: "30"
  },
  {
    key: "GOVERNING_LAW_STATE",
    label: "Governing Law State",
    description: "State whose laws govern this agreement",
    required: true
  },
  {
    key: "SECURITY_CERTIFICATIONS",
    label: "Security Certifications",
    description: "Security certifications held by the business associate (e.g., SOC 2, HITRUST, ISO 27001)",
    required: false,
    defaultValue: "SOC 2 Type II certification"
  },
  {
    key: "BREACH_NOTIFICATION_PERIOD",
    label: "Breach Notification Period",
    description: "Number of days within which the business associate must notify the covered entity of a breach",
    required: false,
    defaultValue: "5"
  },
  {
    key: "INSURANCE_COVERAGE_AMOUNT",
    label: "Insurance Coverage Amount",
    description: "Minimum insurance coverage amount required (e.g., $1,000,000)",
    required: false,
    defaultValue: "$2,000,000"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$New = createComponent(($$result, $$props, $$slots) => {
  const associateTypeOptions = Object.values(BusinessAssociateType).map(
    (type) => ({
      value: type,
      label: type.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    })
  );
  const serviceCategoryOptions = Object.values(ServiceCategory).map(
    (category) => ({
      value: category,
      label: category.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    })
  );
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  // Client-side JavaScript for template form management
  document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('sections-container')
    const placeholdersContainer = document.getElementById(
      'placeholders-container',
    )
    const addSectionBtn = document.getElementById('add-section-btn')
    const addPlaceholderBtn = document.getElementById('add-placeholder-btn')
    const useStandardSectionsBtn = document.getElementById(
      'use-standard-sections-btn',
    )
    const useStandardPlaceholdersBtn = document.getElementById(
      'use-standard-placeholders-btn',
    )
    const templateForm = document.getElementById('template-form')

    let sections = []
    let placeholders = []

    // Function to render sections
    function renderSections() {
      if (sections.length === 0) {
        sectionsContainer.innerHTML = \`
          <div class="border border-gray-200 p-4 rounded-md">
            <p class="text-center text-gray-500 my-4">
              No sections added yet. Click "Add New Section" or "Use Standard Sections" to add sections to your template.
            </p>
          </div>
        \`
        return
      }

      sectionsContainer.innerHTML = ''
      sections.forEach((section, index) => {
        const sectionElement = document.createElement('div')
        sectionElement.className = 'border border-gray-200 p-4 rounded-md'
        sectionElement.innerHTML = \`
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-medium">\${section.title}</h3>
            <div>
              <button type="button" class="move-up-section text-gray-500 hover:text-gray-700 mr-2" \${index === 0 ? 'disabled' : ''}>
                \u2191
              </button>
              <button type="button" class="move-down-section text-gray-500 hover:text-gray-700 mr-2" \${index === sections.length - 1 ? 'disabled' : ''}>
                \u2193
              </button>
              <button type="button" class="remove-section text-red-500 hover:text-red-700">
                \xD7
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value="\${section.title}"
                class="section-title w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value="\${section.description || ''}"
                class="section-description w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              rows="4"
              class="section-content w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >\${section.content}</textarea>
            <p class="text-xs text-gray-500 mt-1">Supports basic Markdown formatting (e.g., **bold**, *italic*)</p>
          </div>
          <div>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="section-required h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                \${section.required ? 'checked' : ''}
              />
              <span class="ml-2 text-sm text-gray-700">Required section (cannot be removed from generated documents)</span>
            </label>
          </div>
        \`

        // Add event listeners
        const moveUpBtn = sectionElement.querySelector('.move-up-section')
        const moveDownBtn = sectionElement.querySelector('.move-down-section')
        const removeBtn = sectionElement.querySelector('.remove-section')
        const titleInput = sectionElement.querySelector('.section-title')
        const descriptionInput = sectionElement.querySelector(
          '.section-description',
        )
        const contentTextarea = sectionElement.querySelector('.section-content')
        const requiredCheckbox =
          sectionElement.querySelector('.section-required')

        moveUpBtn.addEventListener('click', () => {
          if (index > 0) {
            ;[sections[index - 1], sections[index]] = [
              sections[index],
              sections[index - 1],
            ]
            renderSections()
          }
        })

        moveDownBtn.addEventListener('click', () => {
          if (index < sections.length - 1) {
            ;[sections[index], sections[index + 1]] = [
              sections[index + 1],
              sections[index],
            ]
            renderSections()
          }
        })

        removeBtn.addEventListener('click', () => {
          sections.splice(index, 1)
          renderSections()
        })

        titleInput.addEventListener('change', (e) => {
          sections[index].title = e.target.value
        })

        descriptionInput.addEventListener('change', (e) => {
          sections[index].description = e.target.value
        })

        contentTextarea.addEventListener('change', (e) => {
          sections[index].content = e.target.value
        })

        requiredCheckbox.addEventListener('change', (e) => {
          sections[index].required = e.target.checked
        })

        sectionsContainer.appendChild(sectionElement)
      })
    }

    // Function to render placeholders
    function renderPlaceholders() {
      if (placeholders.length === 0) {
        placeholdersContainer.innerHTML = \`
          <div class="border border-gray-200 p-4 rounded-md">
            <p class="text-center text-gray-500 my-4">
              No placeholders added yet. Click "Add New Placeholder" or "Use Standard Placeholders" to add placeholders to your template.
            </p>
          </div>
        \`
        return
      }

      placeholdersContainer.innerHTML = ''
      placeholders.forEach((placeholder, index) => {
        const placeholderElement = document.createElement('div')
        placeholderElement.className = 'border border-gray-200 p-4 rounded-md'
        placeholderElement.innerHTML = \`
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-medium">\${placeholder.label}</h3>
            <button type="button" class="remove-placeholder text-red-500 hover:text-red-700">
              \xD7
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Key</label>
              <input
                type="text"
                value="\${placeholder.key}"
                class="placeholder-key w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p class="text-xs text-gray-500 mt-1">Use in content as {{KEY}}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Label</label>
              <input
                type="text"
                value="\${placeholder.label}"
                class="placeholder-label w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value="\${placeholder.description}"
                class="placeholder-description w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Default Value</label>
              <input
                type="text"
                value="\${placeholder.defaultValue || ''}"
                class="placeholder-default w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="placeholder-required h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                \${placeholder.required ? 'checked' : ''}
              />
              <span class="ml-2 text-sm text-gray-700">Required (must be filled when creating a document)</span>
            </label>
          </div>
        \`

        // Add event listeners
        const removeBtn = placeholderElement.querySelector(
          '.remove-placeholder',
        )
        const keyInput = placeholderElement.querySelector('.placeholder-key')
        const labelInput =
          placeholderElement.querySelector('.placeholder-label')
        const descriptionInput = placeholderElement.querySelector(
          '.placeholder-description',
        )
        const defaultInput = placeholderElement.querySelector(
          '.placeholder-default',
        )
        const requiredCheckbox = placeholderElement.querySelector(
          '.placeholder-required',
        )

        removeBtn.addEventListener('click', () => {
          placeholders.splice(index, 1)
          renderPlaceholders()
        })

        keyInput.addEventListener('change', (e) => {
          placeholders[index].key = e.target.value.toUpperCase()
          keyInput.value = placeholders[index].key // Update to show uppercase
        })

        labelInput.addEventListener('change', (e) => {
          placeholders[index].label = e.target.value
        })

        descriptionInput.addEventListener('change', (e) => {
          placeholders[index].description = e.target.value
        })

        defaultInput.addEventListener('change', (e) => {
          placeholders[index].defaultValue = e.target.value
        })

        requiredCheckbox.addEventListener('change', (e) => {
          placeholders[index].required = e.target.checked
        })

        placeholdersContainer.appendChild(placeholderElement)
      })
    }

    // Add a new section
    addSectionBtn.addEventListener('click', () => {
      sections.push({
        id: 'section-' + Date.now(),
        title: 'New Section',
        description: '',
        content: 'Enter section content here...',
        required: true,
        order: sections.length,
      })
      renderSections()
    })

    // Add a new placeholder
    addPlaceholderBtn.addEventListener('click', () => {
      placeholders.push({
        key: 'NEW_PLACEHOLDER',
        label: 'New Placeholder',
        description: 'Description of this placeholder',
        required: false,
        defaultValue: '',
      })
      renderPlaceholders()
    })

    // Use standard sections
    useStandardSectionsBtn.addEventListener('click', () => {
      if (sections.length > 0) {
        if (!confirm('This will replace your current sections. Continue?')) {
          return
        }
      }

      sections = JSON.parse(JSON.stringify(standardSections))
      renderSections()
    })

    // Use standard placeholders
    useStandardPlaceholdersBtn.addEventListener('click', () => {
      if (placeholders.length > 0) {
        if (
          !confirm('This will replace your current placeholders. Continue?')
        ) {
          return
        }
      }

      placeholders = JSON.parse(JSON.stringify(standardPlaceholders))
      renderPlaceholders()
    })

    // Form submission
    templateForm.addEventListener('submit', (e) => {
      e.preventDefault()

      // In a real implementation, this would collect all form data and submit to an API
      const formData = {
        name: document.getElementById('templateName').value,
        version: document.getElementById('templateVersion').value,
        description: document.getElementById('templateDescription').value,
        associateTypes: Array.from(
          document.getElementById('associateTypes').selectedOptions,
        ).map((opt) => opt.value),
        serviceCategories: Array.from(
          document.getElementById('serviceCategories').selectedOptions,
        ).map((opt) => opt.value),
        isDefault: document.getElementById('isDefault').checked,
        tags: document
          .getElementById('tags')
          .value.split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        sections,
        placeholders,
      }

      console.log('Template data:', formData)

      // Redirect back to the templates list
      // In a real implementation, this would happen after successful API response
      alert('Template created successfully!')
      window.location.href = '/admin/security/baa/templates'
    })

    // Initial render
    renderSections()
    renderPlaceholders()
  })
})();<\/script>`], ["", " <script>(function(){", `
  // Client-side JavaScript for template form management
  document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('sections-container')
    const placeholdersContainer = document.getElementById(
      'placeholders-container',
    )
    const addSectionBtn = document.getElementById('add-section-btn')
    const addPlaceholderBtn = document.getElementById('add-placeholder-btn')
    const useStandardSectionsBtn = document.getElementById(
      'use-standard-sections-btn',
    )
    const useStandardPlaceholdersBtn = document.getElementById(
      'use-standard-placeholders-btn',
    )
    const templateForm = document.getElementById('template-form')

    let sections = []
    let placeholders = []

    // Function to render sections
    function renderSections() {
      if (sections.length === 0) {
        sectionsContainer.innerHTML = \\\`
          <div class="border border-gray-200 p-4 rounded-md">
            <p class="text-center text-gray-500 my-4">
              No sections added yet. Click "Add New Section" or "Use Standard Sections" to add sections to your template.
            </p>
          </div>
        \\\`
        return
      }

      sectionsContainer.innerHTML = ''
      sections.forEach((section, index) => {
        const sectionElement = document.createElement('div')
        sectionElement.className = 'border border-gray-200 p-4 rounded-md'
        sectionElement.innerHTML = \\\`
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-medium">\\\${section.title}</h3>
            <div>
              <button type="button" class="move-up-section text-gray-500 hover:text-gray-700 mr-2" \\\${index === 0 ? 'disabled' : ''}>
                \u2191
              </button>
              <button type="button" class="move-down-section text-gray-500 hover:text-gray-700 mr-2" \\\${index === sections.length - 1 ? 'disabled' : ''}>
                \u2193
              </button>
              <button type="button" class="remove-section text-red-500 hover:text-red-700">
                \xD7
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value="\\\${section.title}"
                class="section-title w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value="\\\${section.description || ''}"
                class="section-description w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              rows="4"
              class="section-content w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >\\\${section.content}</textarea>
            <p class="text-xs text-gray-500 mt-1">Supports basic Markdown formatting (e.g., **bold**, *italic*)</p>
          </div>
          <div>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="section-required h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                \\\${section.required ? 'checked' : ''}
              />
              <span class="ml-2 text-sm text-gray-700">Required section (cannot be removed from generated documents)</span>
            </label>
          </div>
        \\\`

        // Add event listeners
        const moveUpBtn = sectionElement.querySelector('.move-up-section')
        const moveDownBtn = sectionElement.querySelector('.move-down-section')
        const removeBtn = sectionElement.querySelector('.remove-section')
        const titleInput = sectionElement.querySelector('.section-title')
        const descriptionInput = sectionElement.querySelector(
          '.section-description',
        )
        const contentTextarea = sectionElement.querySelector('.section-content')
        const requiredCheckbox =
          sectionElement.querySelector('.section-required')

        moveUpBtn.addEventListener('click', () => {
          if (index > 0) {
            ;[sections[index - 1], sections[index]] = [
              sections[index],
              sections[index - 1],
            ]
            renderSections()
          }
        })

        moveDownBtn.addEventListener('click', () => {
          if (index < sections.length - 1) {
            ;[sections[index], sections[index + 1]] = [
              sections[index + 1],
              sections[index],
            ]
            renderSections()
          }
        })

        removeBtn.addEventListener('click', () => {
          sections.splice(index, 1)
          renderSections()
        })

        titleInput.addEventListener('change', (e) => {
          sections[index].title = e.target.value
        })

        descriptionInput.addEventListener('change', (e) => {
          sections[index].description = e.target.value
        })

        contentTextarea.addEventListener('change', (e) => {
          sections[index].content = e.target.value
        })

        requiredCheckbox.addEventListener('change', (e) => {
          sections[index].required = e.target.checked
        })

        sectionsContainer.appendChild(sectionElement)
      })
    }

    // Function to render placeholders
    function renderPlaceholders() {
      if (placeholders.length === 0) {
        placeholdersContainer.innerHTML = \\\`
          <div class="border border-gray-200 p-4 rounded-md">
            <p class="text-center text-gray-500 my-4">
              No placeholders added yet. Click "Add New Placeholder" or "Use Standard Placeholders" to add placeholders to your template.
            </p>
          </div>
        \\\`
        return
      }

      placeholdersContainer.innerHTML = ''
      placeholders.forEach((placeholder, index) => {
        const placeholderElement = document.createElement('div')
        placeholderElement.className = 'border border-gray-200 p-4 rounded-md'
        placeholderElement.innerHTML = \\\`
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-medium">\\\${placeholder.label}</h3>
            <button type="button" class="remove-placeholder text-red-500 hover:text-red-700">
              \xD7
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Key</label>
              <input
                type="text"
                value="\\\${placeholder.key}"
                class="placeholder-key w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p class="text-xs text-gray-500 mt-1">Use in content as {{KEY}}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Label</label>
              <input
                type="text"
                value="\\\${placeholder.label}"
                class="placeholder-label w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value="\\\${placeholder.description}"
                class="placeholder-description w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Default Value</label>
              <input
                type="text"
                value="\\\${placeholder.defaultValue || ''}"
                class="placeholder-default w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="placeholder-required h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                \\\${placeholder.required ? 'checked' : ''}
              />
              <span class="ml-2 text-sm text-gray-700">Required (must be filled when creating a document)</span>
            </label>
          </div>
        \\\`

        // Add event listeners
        const removeBtn = placeholderElement.querySelector(
          '.remove-placeholder',
        )
        const keyInput = placeholderElement.querySelector('.placeholder-key')
        const labelInput =
          placeholderElement.querySelector('.placeholder-label')
        const descriptionInput = placeholderElement.querySelector(
          '.placeholder-description',
        )
        const defaultInput = placeholderElement.querySelector(
          '.placeholder-default',
        )
        const requiredCheckbox = placeholderElement.querySelector(
          '.placeholder-required',
        )

        removeBtn.addEventListener('click', () => {
          placeholders.splice(index, 1)
          renderPlaceholders()
        })

        keyInput.addEventListener('change', (e) => {
          placeholders[index].key = e.target.value.toUpperCase()
          keyInput.value = placeholders[index].key // Update to show uppercase
        })

        labelInput.addEventListener('change', (e) => {
          placeholders[index].label = e.target.value
        })

        descriptionInput.addEventListener('change', (e) => {
          placeholders[index].description = e.target.value
        })

        defaultInput.addEventListener('change', (e) => {
          placeholders[index].defaultValue = e.target.value
        })

        requiredCheckbox.addEventListener('change', (e) => {
          placeholders[index].required = e.target.checked
        })

        placeholdersContainer.appendChild(placeholderElement)
      })
    }

    // Add a new section
    addSectionBtn.addEventListener('click', () => {
      sections.push({
        id: 'section-' + Date.now(),
        title: 'New Section',
        description: '',
        content: 'Enter section content here...',
        required: true,
        order: sections.length,
      })
      renderSections()
    })

    // Add a new placeholder
    addPlaceholderBtn.addEventListener('click', () => {
      placeholders.push({
        key: 'NEW_PLACEHOLDER',
        label: 'New Placeholder',
        description: 'Description of this placeholder',
        required: false,
        defaultValue: '',
      })
      renderPlaceholders()
    })

    // Use standard sections
    useStandardSectionsBtn.addEventListener('click', () => {
      if (sections.length > 0) {
        if (!confirm('This will replace your current sections. Continue?')) {
          return
        }
      }

      sections = JSON.parse(JSON.stringify(standardSections))
      renderSections()
    })

    // Use standard placeholders
    useStandardPlaceholdersBtn.addEventListener('click', () => {
      if (placeholders.length > 0) {
        if (
          !confirm('This will replace your current placeholders. Continue?')
        ) {
          return
        }
      }

      placeholders = JSON.parse(JSON.stringify(standardPlaceholders))
      renderPlaceholders()
    })

    // Form submission
    templateForm.addEventListener('submit', (e) => {
      e.preventDefault()

      // In a real implementation, this would collect all form data and submit to an API
      const formData = {
        name: document.getElementById('templateName').value,
        version: document.getElementById('templateVersion').value,
        description: document.getElementById('templateDescription').value,
        associateTypes: Array.from(
          document.getElementById('associateTypes').selectedOptions,
        ).map((opt) => opt.value),
        serviceCategories: Array.from(
          document.getElementById('serviceCategories').selectedOptions,
        ).map((opt) => opt.value),
        isDefault: document.getElementById('isDefault').checked,
        tags: document
          .getElementById('tags')
          .value.split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        sections,
        placeholders,
      }

      console.log('Template data:', formData)

      // Redirect back to the templates list
      // In a real implementation, this would happen after successful API response
      alert('Template created successfully!')
      window.location.href = '/admin/security/baa/templates'
    })

    // Initial render
    renderSections()
    renderPlaceholders()
  })
})();<\/script>`])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Create BAA Template", "description": "Create a new HIPAA-compliant Business Associate Agreement template" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8"> <div class="flex items-center mb-6"> <a href="/admin/security/baa/templates" class="text-indigo-600 hover:text-indigo-900 mr-4">
&larr; Back to Templates
</a> <h1 class="text-2xl font-bold text-gray-800">Create New BAA Template</h1> </div> <form id="template-form" class="space-y-8"> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Template Details</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="templateName" class="block text-sm font-medium text-gray-700 mb-1">Template Name*</label> <input type="text" id="templateName" name="templateName" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Standard HIPAA BAA Template"> </div> <div> <label for="templateVersion" class="block text-sm font-medium text-gray-700 mb-1">Version*</label> <input type="text" id="templateVersion" name="templateVersion" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 1.0.0"> </div> <div class="md:col-span-2"> <label for="templateDescription" class="block text-sm font-medium text-gray-700 mb-1">Description*</label> <textarea id="templateDescription" name="templateDescription" rows="3" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Describe the purpose and use case for this template"></textarea> </div> <div> <label for="associateTypes" class="block text-sm font-medium text-gray-700 mb-1">Associate Types*</label> <select id="associateTypes" name="associateTypes" multiple required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" size="5"> ${associateTypeOptions.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}>${option.label}</option>`)} </select> <p class="text-xs text-gray-500 mt-1">
Hold Ctrl/Cmd to select multiple types
</p> </div> <div> <label for="serviceCategories" class="block text-sm font-medium text-gray-700 mb-1">Service Categories*</label> <select id="serviceCategories" name="serviceCategories" multiple required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" size="5"> ${serviceCategoryOptions.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}>${option.label}</option>`)} </select> <p class="text-xs text-gray-500 mt-1">
Hold Ctrl/Cmd to select multiple categories
</p> </div> <div> <label for="tags" class="block text-sm font-medium text-gray-700 mb-1">Tags</label> <input type="text" id="tags" name="tags" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., hipaa, vendor, cloud-storage"> <p class="text-xs text-gray-500 mt-1">Comma-separated tags</p> </div> <div class="flex items-center"> <input type="checkbox" id="isDefault" name="isDefault" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"> <label for="isDefault" class="ml-2 block text-sm text-gray-700">
Set as default template
</label> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-semibold">Template Sections</h2> <button type="button" id="add-section-btn" class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm">
Add New Section
</button> </div> <div id="sections-container" class="space-y-6"> <!-- Sections will be added here dynamically --> <div class="border border-gray-200 p-4 rounded-md"> <p class="text-center text-gray-500 my-4">
No sections added yet. Click "Add New Section" or "Use Standard
              Sections" to add sections to your template.
</p> </div> </div> <div class="mt-4 flex justify-end"> <button type="button" id="use-standard-sections-btn" class="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
Use Standard Sections
</button> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-semibold">Template Placeholders</h2> <button type="button" id="add-placeholder-btn" class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm">
Add New Placeholder
</button> </div> <div id="placeholders-container" class="space-y-6"> <!-- Placeholders will be added here dynamically --> <div class="border border-gray-200 p-4 rounded-md"> <p class="text-center text-gray-500 my-4">
No placeholders added yet. Click "Add New Placeholder" or "Use
              Standard Placeholders" to add placeholders to your template.
</p> </div> </div> <div class="mt-4 flex justify-end"> <button type="button" id="use-standard-placeholders-btn" class="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
Use Standard Placeholders
</button> </div> </div> <div class="flex justify-end space-x-4"> <a href="/admin/security/baa/templates" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Cancel
</a> <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Create Template
</button> </div> </form> </div> ` }), defineScriptVars({ standardSections, standardPlaceholders }));
}, "/root/pixel/src/pages/admin/security/baa/templates/new.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security/baa/templates/new.astro";
const $$url = "/admin/security/baa/templates/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
