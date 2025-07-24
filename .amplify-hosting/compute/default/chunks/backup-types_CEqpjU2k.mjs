;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a2330cab-bc1d-44b9-8307-e100e7952e74",e._sentryDebugIdIdentifier="sentry-dbid-a2330cab-bc1d-44b9-8307-e100e7952e74")}catch(e){}}();import './astro/server_bjkJ-nhl.mjs';

var BackupType = /* @__PURE__ */ ((BackupType2) => {
  BackupType2["FULL"] = "full";
  BackupType2["DIFFERENTIAL"] = "differential";
  BackupType2["TRANSACTION"] = "transaction";
  BackupType2["INCREMENTAL"] = "incremental";
  return BackupType2;
})(BackupType || {});
var BackupStatus = /* @__PURE__ */ ((BackupStatus2) => {
  BackupStatus2["PENDING"] = "pending";
  BackupStatus2["IN_PROGRESS"] = "in_progress";
  BackupStatus2["COMPLETED"] = "completed";
  BackupStatus2["FAILED"] = "failed";
  BackupStatus2["VERIFIED"] = "verified";
  BackupStatus2["VERIFICATION_FAILED"] = "verification_failed";
  BackupStatus2["EXPIRED"] = "expired";
  BackupStatus2["DELETED"] = "deleted";
  return BackupStatus2;
})(BackupStatus || {});
var RecoveryTestStatus = /* @__PURE__ */ ((RecoveryTestStatus2) => {
  RecoveryTestStatus2["SCHEDULED"] = "scheduled";
  RecoveryTestStatus2["IN_PROGRESS"] = "in_progress";
  RecoveryTestStatus2["PASSED"] = "passed";
  RecoveryTestStatus2["FAILED"] = "failed";
  return RecoveryTestStatus2;
})(RecoveryTestStatus || {});
var StorageLocation = /* @__PURE__ */ ((StorageLocation2) => {
  StorageLocation2["PRIMARY"] = "primary";
  StorageLocation2["SECONDARY"] = "secondary";
  StorageLocation2["TERTIARY"] = "tertiary";
  return StorageLocation2;
})(StorageLocation || {});
var TestEnvironmentType = /* @__PURE__ */ ((TestEnvironmentType2) => {
  TestEnvironmentType2["DOCKER"] = "docker";
  TestEnvironmentType2["KUBERNETES"] = "kubernetes";
  TestEnvironmentType2["VM"] = "vm";
  TestEnvironmentType2["SANDBOX"] = "sandbox";
  return TestEnvironmentType2;
})(TestEnvironmentType || {});

export { BackupType as B, RecoveryTestStatus as R, StorageLocation as S, TestEnvironmentType as T, BackupStatus as a };
