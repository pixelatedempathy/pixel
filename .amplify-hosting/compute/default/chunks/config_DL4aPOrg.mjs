;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6d6d32e9-efc9-4b4a-a42c-828b9d219518",e._sentryDebugIdIdentifier="sentry-dbid-6d6d32e9-efc9-4b4a-a42c-828b9d219518")}catch(e){}}();import './astro/server_bjkJ-nhl.mjs';

class Logger {
  options;
  constructor(options) {
    this.options = {
      level: "info",
      enabled: true,
      environment: process.env["NODE_ENV"] || "development",
      ...options
    };
  }
  /**
   * Redact sensitive keys from an object
   */
  redact(obj, keys) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    const newObj = { ...obj };
    for (const key of keys) {
      if (key in newObj) {
        newObj[key] = "[REDACTED]";
      }
    }
    return newObj;
  }
  /**
   * Set logger options
   */
  configure(options) {
    this.options = {
      ...this.options,
      ...options
    };
  }
  /**
   * Log a debug message
   */
  debug(message, ...args) {
    this.log("debug", message, ...args);
  }
  /**
   * Log an info message
   */
  info(message, ...args) {
    this.log("info", message, ...args);
  }
  /**
   * Log a warning message
   */
  warn(message, ...args) {
    this.log("warn", message, ...args);
  }
  /**
   * Log an error message
   */
  error(message, ...args) {
    if (message instanceof Error) {
      this.log(
        "error",
        message.message,
        { error: message, stack: message.stack },
        ...args
      );
    } else {
      this.log("error", message, ...args);
    }
  }
  /**
   * Create a child logger with the specified prefix
   */
  child(prefix) {
    return new Logger({
      ...this.options,
      prefix: this.options.prefix ? `${this.options.prefix}:${prefix}` : prefix
    });
  }
  /**
   * Internal logging method
   */
  log(level, message, ...args) {
    if (!this.isLevelEnabled(level) || !this.options.enabled) {
      return;
    }
    if (level === "debug" && this.options.environment === "production") {
      return;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const prefix = this.options.prefix ? `[${this.options.prefix}]` : "";
    const formattedMessage = `${timestamp} ${level.toUpperCase()} ${prefix} ${message}`;
    const redactedArgs = this.options.redact ? args.map((arg) => this.redact(arg, this.options.redact)) : args;
    if (typeof window !== "undefined") {
      this.browserLog(level, formattedMessage, ...redactedArgs);
    } else {
      this.serverLog(level, formattedMessage, ...redactedArgs);
    }
  }
  /**
   * Browser-specific logging
   */
  browserLog(level, message, ...args) {
    switch (level) {
      case "debug":
        console.debug(message, ...args);
        break;
      case "info":
        console.info(message, ...args);
        break;
      case "warn":
        console.warn(message, ...args);
        break;
      case "error":
        console.error(message, ...args);
        break;
      default:
        console.log(message, ...args);
    }
  }
  /**
   * Server-specific logging
   */
  serverLog(level, message, ...args) {
    this.browserLog(level, message, ...args);
  }
  /**
   * Check if a log level is enabled
   */
  isLevelEnabled(level) {
    const logLevels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
    return logLevels[level] >= logLevels[this.options.level];
  }
}
function getLogger(prefix) {
  if (!getLogger._instance) {
    getLogger._instance = new Logger();
  }
  const baseLogger = getLogger._instance;
  return prefix ? baseLogger.child(prefix) : baseLogger;
}

// Initialize logger for PHI audit logging
const logger = getLogger('phi-audit');

const SITE = {
  website: 'https://pixelatedempathy.com',
  title: 'Pixelated Empathy',
  description: 'All your base are belong to us',
  author: 'Vivi Ornitier',
  lang: 'en',
  ogLocale: 'en_US'};

// Log config access for HIPAA compliance
logger.info('Configuration module loaded', {
  dataType: 'system-config',
  action: 'module-load',
  component: 'config.ts',
});

const UI = {
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3},
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://www.svgrepo.com/show/475654/github-color.svg'],
      [/tweet/, 'i-logos-twitter'],
    ],
  }};

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
const FEATURES = {
  share: [
    true,
    {
      twitter: [true, '@GradiantAscent'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: true,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'always',
    },
  ]}


;

export { FEATURES as F, SITE as S, UI as U };
