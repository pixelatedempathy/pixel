;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="160f5567-cf4a-4332-9c68-0e009d425952",e._sentryDebugIdIdentifier="sentry-dbid-160f5567-cf4a-4332-9c68-0e009d425952")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';
import './astro/server_jchCCyc7.mjs';

const logger = createBuildSafeLogger("default");
const defaultConfig = {
  grafana: {
    url: "https://grafana.example.com",
    apiKey: "",
    orgId: "",
    enableRUM: true,
    rumApplicationName: "astro-app",
    rumSamplingRate: 0.5
    // 50% sampling
  },
  metrics: {
    enablePerformanceMetrics: true,
    slowRequestThreshold: 500,
    // ms
    errorRateThreshold: 0.01,
    // 1%
    resourceUtilizationThreshold: 0.8
    // 80%
  },
  alerts: {
    enableAlerts: false,
    slackWebhookUrl: void 0,
    emailRecipients: []
  }
};
function getMonitoringConfig() {
  try {
    return {
      ...defaultConfig,
      grafana: {
        ...defaultConfig.grafana,
        apiKey: process.env.GRAFANA_API_KEY || defaultConfig.grafana.apiKey,
        orgId: process.env.GRAFANA_ORG_ID || defaultConfig.grafana.orgId
      }
    };
  } catch (error) {
    logger.error("Failed to load monitoring configuration", {
      error: error instanceof Error ? error.message : String(error)
    });
    return defaultConfig;
  }
}

export { getMonitoringConfig as g };
