;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ec802520-7249-47cf-9636-30698ae405a3",e._sentryDebugIdIdentifier="sentry-dbid-ec802520-7249-47cf-9636-30698ae405a3")}catch(e){}}();import './astro/server_t-wqd6mp.mjs';

var BusinessAssociateType = /* @__PURE__ */ ((BusinessAssociateType2) => {
  BusinessAssociateType2["VENDOR"] = "vendor";
  BusinessAssociateType2["PARTNER"] = "partner";
  BusinessAssociateType2["SUBCONTRACTOR"] = "subcontractor";
  BusinessAssociateType2["SERVICE_PROVIDER"] = "service_provider";
  BusinessAssociateType2["OTHER"] = "other";
  return BusinessAssociateType2;
})(BusinessAssociateType || {});
var ServiceCategory = /* @__PURE__ */ ((ServiceCategory2) => {
  ServiceCategory2["DATA_STORAGE"] = "data_storage";
  ServiceCategory2["DATA_PROCESSING"] = "data_processing";
  ServiceCategory2["TECHNICAL_SUPPORT"] = "technical_support";
  ServiceCategory2["CONSULTATION"] = "consultation";
  ServiceCategory2["ANALYTICS"] = "analytics";
  ServiceCategory2["PATIENT_CARE"] = "patient_care";
  ServiceCategory2["ADMINISTRATIVE"] = "administrative";
  ServiceCategory2["OTHER"] = "other";
  return ServiceCategory2;
})(ServiceCategory || {});
var ComplianceLevel = /* @__PURE__ */ ((ComplianceLevel2) => {
  ComplianceLevel2["NOT_VERIFIED"] = "not_verified";
  ComplianceLevel2["SELF_ATTESTED"] = "self_attested";
  ComplianceLevel2["THIRD_PARTY_VERIFIED"] = "third_party_verified";
  ComplianceLevel2["HIPAA_CERTIFIED"] = "hipaa_certified";
  ComplianceLevel2["NON_COMPLIANT"] = "non_compliant";
  return ComplianceLevel2;
})(ComplianceLevel || {});
var VerificationMethod = /* @__PURE__ */ ((VerificationMethod2) => {
  VerificationMethod2["SELF_ASSESSMENT"] = "self_assessment";
  VerificationMethod2["DOCUMENTATION_REVIEW"] = "documentation_review";
  VerificationMethod2["THIRD_PARTY_AUDIT"] = "third_party_audit";
  VerificationMethod2["CERTIFICATION_VALIDATION"] = "certification_validation";
  VerificationMethod2["ONSITE_ASSESSMENT"] = "onsite_assessment";
  VerificationMethod2["QUESTIONNAIRE"] = "questionnaire";
  return VerificationMethod2;
})(VerificationMethod || {});

export { BusinessAssociateType as B, ComplianceLevel as C, ServiceCategory as S, VerificationMethod as V };
