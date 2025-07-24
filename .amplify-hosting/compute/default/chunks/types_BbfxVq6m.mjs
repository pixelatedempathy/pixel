;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f0c9178f-eb4f-4dd9-9e85-1ba5e95a0cc1",e._sentryDebugIdIdentifier="sentry-dbid-f0c9178f-eb4f-4dd9-9e85-1ba5e95a0cc1")}catch(e){}}();import './astro/server_DBAAVvAL.mjs';

var EncryptionMode = /* @__PURE__ */ ((EncryptionMode2) => {
  EncryptionMode2["NONE"] = "none";
  EncryptionMode2["STANDARD"] = "standard";
  EncryptionMode2["FHE"] = "fhe";
  EncryptionMode2["HIPAA"] = "hipaa";
  return EncryptionMode2;
})(EncryptionMode || {});
var FHEOperation = /* @__PURE__ */ ((FHEOperation2) => {
  FHEOperation2["Addition"] = "addition";
  FHEOperation2["Subtraction"] = "subtraction";
  FHEOperation2["Multiplication"] = "multiplication";
  FHEOperation2["Square"] = "square";
  FHEOperation2["Negation"] = "negation";
  FHEOperation2["Rotation"] = "rotation";
  FHEOperation2["Polynomial"] = "polynomial";
  FHEOperation2["Rescale"] = "rescale";
  FHEOperation2["SENTIMENT"] = "sentiment";
  FHEOperation2["CATEGORIZE"] = "categorize";
  FHEOperation2["SUMMARIZE"] = "summarize";
  FHEOperation2["TOKENIZE"] = "tokenize";
  FHEOperation2["FILTER"] = "filter";
  FHEOperation2["CUSTOM"] = "custom";
  FHEOperation2["WORD_COUNT"] = "word_count";
  FHEOperation2["CHARACTER_COUNT"] = "character_count";
  FHEOperation2["KEYWORD_DENSITY"] = "keyword_density";
  FHEOperation2["READING_LEVEL"] = "reading_level";
  FHEOperation2["ANALYZE"] = "ANALYZE";
  return FHEOperation2;
})(FHEOperation || {});
class OperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "OperationError";
  }
}

export { EncryptionMode as E, FHEOperation as F, OperationError as O };
