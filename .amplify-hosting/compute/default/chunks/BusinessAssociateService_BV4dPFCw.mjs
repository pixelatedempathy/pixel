;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2fb30b09-ca8a-4b23-b8bf-6a25dba82acc",e._sentryDebugIdIdentifier="sentry-dbid-2fb30b09-ca8a-4b23-b8bf-6a25dba82acc")}catch(e){}}();import { C as ComplianceLevel } from './types_BLbgkxc6.mjs';
import { g as generateId } from './ids_B4loBQsx.mjs';
import './astro/server_jchCCyc7.mjs';

class BusinessAssociateService {
  businessAssociates = /* @__PURE__ */ new Map();
  /**
   * Create a new business associate record
   */
  createBusinessAssociate(name, type, serviceCategories, contactName, contactEmail, complianceLevel = ComplianceLevel.NOT_VERIFIED, contactPhone, address, website, notes) {
    const id = generateId();
    const associate = {
      id,
      name,
      type,
      serviceCategories,
      contactName,
      contactEmail,
      contactPhone,
      address,
      website,
      notes,
      dateAdded: /* @__PURE__ */ new Date(),
      complianceLevel,
      agreementHistory: []
    };
    this.businessAssociates.set(id, associate);
    return associate;
  }
  /**
   * Get a business associate by ID
   */
  getBusinessAssociate(id) {
    return this.businessAssociates.get(id);
  }
  /**
   * Get all business associates
   */
  getAllBusinessAssociates() {
    return Array.from(this.businessAssociates.values());
  }
  /**
   * Update a business associate
   */
  updateBusinessAssociate(id, updates) {
    const associate = this.businessAssociates.get(id);
    if (!associate) {
      return void 0;
    }
    const { id: _, ...updatableFields } = updates;
    const updatedAssociate = {
      ...associate,
      ...updatableFields
    };
    this.businessAssociates.set(id, updatedAssociate);
    return updatedAssociate;
  }
  /**
   * Delete a business associate
   */
  deleteBusinessAssociate(id) {
    return this.businessAssociates.delete(id);
  }
  /**
   * Search for business associates by name, type, or compliance level
   */
  searchBusinessAssociates(query, type, complianceLevel) {
    const normalizedQuery = query.toLowerCase();
    return this.getAllBusinessAssociates().filter((associate) => {
      const matchesQuery = !query || associate.name.toLowerCase().includes(normalizedQuery);
      const matchesType = !type || associate.type === type;
      const matchesCompliance = !complianceLevel || associate.complianceLevel === complianceLevel;
      return matchesQuery && matchesType && matchesCompliance;
    });
  }
  /**
   * Update the compliance verification status of a business associate
   */
  verifyCompliance(id, complianceLevel, verificationDate = /* @__PURE__ */ new Date(), expiryDate, notes) {
    const associate = this.businessAssociates.get(id);
    if (!associate) {
      return void 0;
    }
    const updatedAssociate = {
      ...associate,
      complianceLevel,
      complianceVerificationDate: verificationDate,
      complianceExpiryDate: expiryDate,
      notes: notes ? associate.notes ? `${associate.notes}

${notes}` : notes : associate.notes
    };
    this.businessAssociates.set(id, updatedAssociate);
    return updatedAssociate;
  }
  /**
   * Add a BAA agreement to a business associate's history
   */
  addAgreement(id, agreementId, isActive = true) {
    const associate = this.businessAssociates.get(id);
    if (!associate) {
      return void 0;
    }
    const updatedHistory = [...associate.agreementHistory];
    if (!updatedHistory.includes(agreementId)) {
      updatedHistory.push(agreementId);
    }
    const updatedAssociate = {
      ...associate,
      agreementHistory: updatedHistory,
      activeAgreementId: isActive ? agreementId : associate.activeAgreementId
    };
    this.businessAssociates.set(id, updatedAssociate);
    return updatedAssociate;
  }
  /**
   * Get business associates with expiring compliance verification
   * @param daysThreshold Number of days until expiration to include
   */
  getExpiringCompliance(daysThreshold = 30) {
    const now = /* @__PURE__ */ new Date();
    const thresholdDate = /* @__PURE__ */ new Date();
    thresholdDate.setDate(now.getDate() + daysThreshold);
    return this.getAllBusinessAssociates().filter((associate) => {
      if (!associate.complianceExpiryDate) {
        return false;
      }
      return associate.complianceExpiryDate <= thresholdDate && associate.complianceExpiryDate > now;
    });
  }
  /**
   * Get business associates with expired compliance verification
   */
  getExpiredCompliance() {
    const now = /* @__PURE__ */ new Date();
    return this.getAllBusinessAssociates().filter((associate) => {
      if (!associate.complianceExpiryDate) {
        return false;
      }
      return associate.complianceExpiryDate < now;
    });
  }
  /**
   * Get business associates grouped by compliance level
   */
  getComplianceStatistics() {
    const stats = Object.values(ComplianceLevel).reduce(
      (acc, level) => {
        acc[level] = 0;
        return acc;
      },
      {}
    );
    this.getAllBusinessAssociates().forEach((associate) => {
      stats[associate.complianceLevel]++;
    });
    return stats;
  }
}

export { BusinessAssociateService as B };
