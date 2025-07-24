;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9abcf9de-dfaf-481d-9776-6e923ab10b2f",e._sentryDebugIdIdentifier="sentry-dbid-9abcf9de-dfaf-481d-9776-6e923ab10b2f")}catch(e){}}();import { g as generateId } from './ids_Css-MDcN.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_0J2m2aGD.mjs';
import './astro/server_Ck5BzePu.mjs';

const logger = createBuildSafeLogger("phi-audit");
class ComplianceVerificationService {
  verifications = /* @__PURE__ */ new Map();
  documents = /* @__PURE__ */ new Map();
  requirements = /* @__PURE__ */ new Map();
  constructor() {
    logger.info("ComplianceVerificationService initialized", {
      component: "ComplianceVerificationService",
      action: "initialize"
    });
  }
  /**
   * Create a new compliance verification entry
   */
  createVerification(businessAssociateId, complianceLevel, verificationMethod, verifiedBy, verificationDate = /* @__PURE__ */ new Date(), expiryDate, notes, attachments = []) {
    const id = generateId();
    const verification = {
      id,
      businessAssociateId,
      verificationDate,
      expiryDate,
      complianceLevel,
      verificationMethod,
      verifiedBy,
      notes,
      attachments
    };
    this.verifications.set(id, verification);
    logger.info("Compliance verification created", {
      verificationId: id,
      businessAssociateId,
      complianceLevel,
      verificationMethod,
      verifiedBy,
      action: "create_verification"
    });
    return verification;
  }
  /**
   * Get all verifications for a business associate
   */
  getVerifications(businessAssociateId) {
    const verifications = Array.from(this.verifications.values()).filter((v) => v.businessAssociateId === businessAssociateId).sort(
      (a, b) => b.verificationDate.getTime() - a.verificationDate.getTime()
    );
    logger.info("Compliance verifications accessed", {
      businessAssociateId,
      count: verifications.length,
      action: "get_verifications"
    });
    return verifications;
  }
  /**
   * Get a verification by ID
   */
  getVerification(id) {
    const verification = this.verifications.get(id);
    logger.info("Compliance verification accessed", {
      verificationId: id,
      found: !!verification,
      action: "get_verification"
    });
    return verification;
  }
  /**
   * Update a verification
   */
  updateVerification(id, updates) {
    const verification = this.verifications.get(id);
    if (!verification) {
      logger.warn(
        "Compliance verification update failed - verification not found",
        {
          verificationId: id,
          action: "update_verification_failed"
        }
      );
      return void 0;
    }
    const { id: _, ...updatableFields } = updates;
    const updatedVerification = {
      ...verification,
      ...updatableFields
    };
    this.verifications.set(id, updatedVerification);
    logger.info("Compliance verification updated", {
      verificationId: id,
      businessAssociateId: verification.businessAssociateId,
      updatedFields: Object.keys(updatableFields),
      action: "update_verification"
    });
    return updatedVerification;
  }
  /**
   * Delete a verification
   */
  deleteVerification(id) {
    const verification = this.verifications.get(id);
    const result = this.verifications.delete(id);
    logger.info("Compliance verification deleted", {
      verificationId: id,
      businessAssociateId: verification?.businessAssociateId,
      success: result,
      action: "delete_verification"
    });
    return result;
  }
  /**
   * Create a new compliance document
   */
  createDocument(businessAssociateId, name, documentUrl, uploadedBy, type = "other", description, expiryDate, tags = [], relatedVerificationId, isValid = true) {
    const id = generateId();
    const document = {
      id,
      businessAssociateId,
      name,
      description,
      type,
      uploadDate: /* @__PURE__ */ new Date(),
      expiryDate,
      documentUrl,
      uploadedBy,
      tags,
      relatedVerificationId,
      isValid
    };
    this.documents.set(id, document);
    logger.info("Compliance document created", {
      documentId: id,
      businessAssociateId,
      documentType: type,
      uploadedBy,
      action: "create_document"
    });
    return document;
  }
  /**
   * Get all documents for a business associate
   */
  getDocuments(businessAssociateId) {
    const documents = Array.from(this.documents.values()).filter((d) => d.businessAssociateId === businessAssociateId).sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    logger.info("Compliance documents accessed", {
      businessAssociateId,
      count: documents.length,
      action: "get_documents"
    });
    return documents;
  }
  /**
   * Get a document by ID
   */
  getDocument(id) {
    const document = this.documents.get(id);
    logger.info("Compliance document accessed", {
      documentId: id,
      found: !!document,
      action: "get_document"
    });
    return document;
  }
  /**
   * Update a document
   */
  updateDocument(id, updates) {
    const document = this.documents.get(id);
    if (!document) {
      logger.warn("Compliance document update failed - document not found", {
        documentId: id,
        action: "update_document_failed"
      });
      return void 0;
    }
    const { id: _, ...updatableFields } = updates;
    const updatedDocument = {
      ...document,
      ...updatableFields
    };
    this.documents.set(id, updatedDocument);
    logger.info("Compliance document updated", {
      documentId: id,
      businessAssociateId: document.businessAssociateId,
      updatedFields: Object.keys(updatableFields),
      action: "update_document"
    });
    return updatedDocument;
  }
  /**
   * Set document validity
   */
  setDocumentValidity(id, isValid) {
    const document = this.documents.get(id);
    if (!document) {
      logger.warn(
        "Compliance document validity update failed - document not found",
        {
          documentId: id,
          action: "update_document_validity_failed"
        }
      );
      return void 0;
    }
    const updatedDocument = {
      ...document,
      isValid
    };
    this.documents.set(id, updatedDocument);
    logger.info("Compliance document validity updated", {
      documentId: id,
      businessAssociateId: document.businessAssociateId,
      isValid,
      action: "update_document_validity"
    });
    return updatedDocument;
  }
  /**
   * Delete a document
   */
  deleteDocument(id) {
    const document = this.documents.get(id);
    const result = this.documents.delete(id);
    logger.info("Compliance document deleted", {
      documentId: id,
      businessAssociateId: document?.businessAssociateId,
      success: result,
      action: "delete_document"
    });
    return result;
  }
  /**
   * Create a new compliance requirement
   */
  createRequirement(name, description, applicableTypes, applicableCategories, requiredDocuments, minimumComplianceLevel, isRequired, verificationMethod, frequency) {
    const id = generateId();
    const requirement = {
      id,
      name,
      description,
      applicableTypes,
      applicableCategories,
      requiredDocuments,
      minimumComplianceLevel,
      isRequired,
      verificationMethod,
      frequency
    };
    this.requirements.set(id, requirement);
    logger.info("Compliance requirement created", {
      requirementId: id,
      name,
      minimumComplianceLevel,
      isRequired,
      action: "create_requirement"
    });
    return requirement;
  }
  /**
   * Get all compliance requirements
   */
  getAllRequirements() {
    const requirements = Array.from(this.requirements.values());
    logger.info("All compliance requirements accessed", {
      count: requirements.length,
      action: "get_all_requirements"
    });
    return requirements;
  }
  /**
   * Get applicable requirements for a business associate
   */
  getApplicableRequirements(type, categories) {
    const requirements = Array.from(this.requirements.values()).filter(
      (req) => {
        return req.applicableTypes.includes(type) && req.applicableCategories.some((cat) => categories.includes(cat));
      }
    );
    logger.info("Applicable compliance requirements accessed", {
      associateType: type,
      serviceCategories: categories,
      count: requirements.length,
      action: "get_applicable_requirements"
    });
    return requirements;
  }
  /**
   * Get a requirement by ID
   */
  getRequirement(id) {
    const requirement = this.requirements.get(id);
    logger.info("Compliance requirement accessed", {
      requirementId: id,
      found: !!requirement,
      action: "get_requirement"
    });
    return requirement;
  }
  /**
   * Update a requirement
   */
  updateRequirement(id, updates) {
    const requirement = this.requirements.get(id);
    if (!requirement) {
      logger.warn(
        "Compliance requirement update failed - requirement not found",
        {
          requirementId: id,
          action: "update_requirement_failed"
        }
      );
      return void 0;
    }
    const { id: _, ...updatableFields } = updates;
    const updatedRequirement = {
      ...requirement,
      ...updatableFields
    };
    this.requirements.set(id, updatedRequirement);
    logger.info("Compliance requirement updated", {
      requirementId: id,
      updatedFields: Object.keys(updatableFields),
      action: "update_requirement"
    });
    return updatedRequirement;
  }
  /**
   * Delete a requirement
   */
  deleteRequirement(id) {
    const requirement = this.requirements.get(id);
    const result = this.requirements.delete(id);
    logger.info("Compliance requirement deleted", {
      requirementId: id,
      name: requirement?.name,
      success: result,
      action: "delete_requirement"
    });
    return result;
  }
  /**
   * Initialize with default HIPAA compliance requirements
   */
  initializeDefaultRequirements() {
    this.requirements.clear();
    logger.info("Initializing default compliance requirements", {
      action: "initialize_default_requirements"
    });
    this.createRequirement(
      "Security Risk Assessment",
      "A comprehensive evaluation of potential risks and vulnerabilities to the confidentiality, integrity, and availability of PHI.",
      ["EHR_VENDOR", "CLOUD_SERVICE", "DATA_ANALYTICS", "TELEMEDICINE"],
      ["DATA_STORAGE", "SOFTWARE_SERVICES", "CONSULTING"],
      ["risk_assessment"],
      "high",
      true,
      "THIRD_PARTY_AUDIT",
      "annual"
    );
    this.createRequirement(
      "HIPAA Security Training",
      "Evidence of regular HIPAA and security awareness training for all staff with access to PHI.",
      ["EHR_VENDOR", "CLOUD_SERVICE", "DATA_ANALYTICS", "TELEMEDICINE"],
      ["DATA_STORAGE", "SOFTWARE_SERVICES", "CONSULTING"],
      ["training_records"],
      "medium",
      true,
      "DOCUMENTATION_REVIEW",
      "annual"
    );
    logger.info("Default compliance requirements initialized", {
      count: this.requirements.size,
      action: "default_requirements_initialized"
    });
  }
  /**
   * Get verification statistics
   */
  getVerificationStatistics() {
    const verifications = Array.from(this.verifications.values());
    const documents = Array.from(this.documents.values());
    const stats = {
      totalVerifications: verifications.length,
      verificationsByLevel: {
        low: 0,
        medium: 0,
        high: 0
      },
      verificationsByMethod: {
        SELF_ATTESTATION: 0,
        DOCUMENTATION_REVIEW: 0,
        THIRD_PARTY_AUDIT: 0,
        ONSITE_ASSESSMENT: 0
      },
      documentsUploaded: documents.length,
      expiringVerifications: 0
    };
    verifications.forEach((verification) => {
      stats.verificationsByLevel[verification.complianceLevel]++;
      stats.verificationsByMethod[verification.verificationMethod]++;
      if (verification.expiryDate && verification.expiryDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 30 * 24 * 60 * 60 * 1e3) {
        stats.expiringVerifications++;
      }
    });
    logger.info("Compliance verification statistics accessed", {
      totalVerifications: stats.totalVerifications,
      documentsUploaded: stats.documentsUploaded,
      expiringVerifications: stats.expiringVerifications,
      action: "get_verification_statistics"
    });
    return stats;
  }
}

export { ComplianceVerificationService as C };
