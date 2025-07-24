;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c5b34d9b-44b1-40e4-9513-39307263c39c",e._sentryDebugIdIdentifier="sentry-dbid-c5b34d9b-44b1-40e4-9513-39307263c39c")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_By1itFZO.mjs';
import './astro/server_DzSu7Vuv.mjs';

function getHipaaCompliantLogger(prefix) {
  return createBuildSafeLogger(`hipaa-${prefix}`);
}
function getClinicalAnalysisLogger(context) {
  return getHipaaCompliantLogger(`clinical-${context}`);
}
function getBiasDetectionLogger(component) {
  return getHipaaCompliantLogger(`bias-${component}`);
}
function getAiServiceLogger(service) {
  return getHipaaCompliantLogger(`ai-${service}`);
}
function getApiEndpointLogger(endpoint) {
  return getHipaaCompliantLogger(`api-${endpoint}`);
}

export { getHipaaCompliantLogger as a, getApiEndpointLogger as b, getClinicalAnalysisLogger as c, getAiServiceLogger as d, getBiasDetectionLogger as g };
//# sourceMappingURL=standardized-logger_DVeEH88j.mjs.map
