;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="633db619-8f7d-46b1-8f6c-91a95a0aa5b6",e._sentryDebugIdIdentifier="sentry-dbid-633db619-8f7d-46b1-8f6c-91a95a0aa5b6")}catch(e){}}();import { F as FHEOperation } from './types_BkGjjw9K.mjs';
import './astro/server_Ck5BzePu.mjs';

var SealSchemeType = /* @__PURE__ */ ((SealSchemeType2) => {
  SealSchemeType2["BFV"] = "bfv";
  SealSchemeType2["BGV"] = "bgv";
  SealSchemeType2["CKKS"] = "ckks";
  return SealSchemeType2;
})(SealSchemeType || {});
const SEAL_SUPPORTED_OPERATIONS = {
  ["bfv" /* BFV */]: [
    FHEOperation.Addition,
    FHEOperation.Subtraction,
    FHEOperation.Multiplication,
    FHEOperation.Negation,
    FHEOperation.Square,
    FHEOperation.Rotation,
    FHEOperation.Polynomial
  ],
  ["bgv" /* BGV */]: [
    FHEOperation.Addition,
    FHEOperation.Subtraction,
    FHEOperation.Multiplication,
    FHEOperation.Negation,
    FHEOperation.Square,
    FHEOperation.Rotation,
    FHEOperation.Polynomial
  ],
  ["ckks" /* CKKS */]: [
    FHEOperation.Addition,
    FHEOperation.Subtraction,
    FHEOperation.Multiplication,
    FHEOperation.Negation,
    FHEOperation.Square,
    FHEOperation.Rotation,
    FHEOperation.Polynomial,
    FHEOperation.Rescale
    // CKKS specific operation
  ]
};
function getSchemeForMode(mode) {
  switch (mode) {
    case "high-precision":
      return "ckks" /* CKKS */;
    case "integer":
      return "bfv" /* BFV */;
    default:
      return "bfv" /* BFV */;
  }
}
const SEAL_PARAMETER_PRESETS = {
  "bfv-default": {
    polyModulusDegree: 8192,
    coeffModulusBits: [60, 40, 40, 40, 60],
    plainModulus: 1032193
  },
  "bgv-default": {
    polyModulusDegree: 8192,
    coeffModulusBits: [60, 40, 40, 40, 60],
    plainModulus: 1032193
  },
  "ckks-default": {
    polyModulusDegree: 8192,
    coeffModulusBits: [60, 40, 40, 40, 60],
    scale: 2 ** 40
  },
  "low-security": {
    polyModulusDegree: 4096,
    coeffModulusBits: [40, 20, 20, 40],
    plainModulus: 1032193
  },
  "high-security": {
    polyModulusDegree: 16384,
    coeffModulusBits: [60, 40, 40, 40, 40, 40, 60],
    plainModulus: 1032193
  },
  "high-performance": {
    polyModulusDegree: 8192,
    coeffModulusBits: [30, 20, 20, 20, 30],
    plainModulus: 65537
  }
};

export { SealSchemeType as S, SEAL_PARAMETER_PRESETS as a, SEAL_SUPPORTED_OPERATIONS as b, getSchemeForMode as g };
