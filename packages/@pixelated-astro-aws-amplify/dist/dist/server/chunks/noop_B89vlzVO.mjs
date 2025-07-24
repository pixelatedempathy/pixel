;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6e6a1bea-f000-4ce6-b345-aea789e3540d",e._sentryDebugIdIdentifier="sentry-dbid-6e6a1bea-f000-4ce6-b345-aea789e3540d")}catch(e){}}();import { b as baseService } from './_astro_assets_Cs76h3vR.mjs';

const noopService = {
  ...baseService,
  propertiesToHash: ["src"],
  async transform(inputBuffer, transformOptions) {
    return {
      data: inputBuffer,
      format: transformOptions.format
    };
  }
};
var noop_default = noopService;

export { noop_default as default };
