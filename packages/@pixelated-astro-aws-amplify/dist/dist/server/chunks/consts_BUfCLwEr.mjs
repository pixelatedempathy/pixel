;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1a6f9518-58ab-4fb7-9b27-b9af68355c12",e._sentryDebugIdIdentifier="sentry-dbid-1a6f9518-58ab-4fb7-9b27-b9af68355c12")}catch(e){}}();const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

export { DEFAULT_HASH_PROPS as D, VALID_SUPPORTED_FORMATS as V, DEFAULT_OUTPUT_FORMAT as a, VALID_INPUT_FORMATS as b };
