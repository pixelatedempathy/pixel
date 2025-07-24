;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6af3d2e5-30f3-4d49-819b-9b3eb83f999d",e._sentryDebugIdIdentifier="sentry-dbid-6af3d2e5-30f3-4d49-819b-9b3eb83f999d")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import './astro/server_bjkJ-nhl.mjs';

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

export { getHipaaCompliantLogger as a, getClinicalAnalysisLogger as b, getAiServiceLogger as c, getApiEndpointLogger as d, getBiasDetectionLogger as g };
