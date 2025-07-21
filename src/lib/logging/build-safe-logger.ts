/**
 * Build-Safe Logger
 *
 * This is a simple logger implementation that has NO dependencies
 * and can be safely imported during build time without causing
 * circular dependency issues.
 */

// Simple log levels
export enum BuildSafeLogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

// Simple interface for logging
export interface BuildSafeLogger {
  debug(message: string, data?: unknown): void
  info(message: string, data?: unknown): void
  warn(message: string, data?: unknown): void
  error(message: string, data?: unknown): void
}

// Environment-safe way to get log level
function getLogLevel(): BuildSafeLogLevel {
  if (typeof process !== 'undefined' && process.env) {
    const envLevel = process.env["NODE_ENV"]
    if (envLevel === 'production') {
      return BuildSafeLogLevel.ERROR
    }
    if (envLevel === 'test') {
      return BuildSafeLogLevel.WARN
    }
  }
  return BuildSafeLogLevel.INFO
}

// Factory function that creates loggers with no dependencies
export function createBuildSafeLogger(prefix = 'app'): BuildSafeLogger {
  // Create the logger inline to avoid class initialization issues
  const level = getLogLevel()

  return {
    debug(message: string, data?: unknown): void {
      if (BuildSafeLogLevel.DEBUG < level) {
        return
      }
      const timestamp = new Date().toISOString()
      const formatted = `[${timestamp}] [DEBUG] [${prefix}] ${message}`
      if (data !== undefined) {
        console.debug(formatted, data)
      } else {
        console.debug(formatted)
      }
    },

    info(message: string, data?: unknown): void {
      if (BuildSafeLogLevel.INFO < level) {
        return
      }
      const timestamp = new Date().toISOString()
      const formatted = `[${timestamp}] [INFO] [${prefix}] ${message}`
      if (data !== undefined) {
        console.info(formatted, data)
      } else {
        console.info(formatted)
      }
    },

    warn(message: string, data?: unknown): void {
      if (BuildSafeLogLevel.WARN < level) {
        return
      }
      const timestamp = new Date().toISOString()
      const formatted = `[${timestamp}] [WARN] [${prefix}] ${message}`
      if (data !== undefined) {
        console.warn(formatted, data)
      } else {
        console.warn(formatted)
      }
    },

    error(message: string, data?: unknown): void {
      if (BuildSafeLogLevel.ERROR < level) {
        return
      }
      const timestamp = new Date().toISOString()
      const formatted = `[${timestamp}] [ERROR] [${prefix}] ${message}`
      if (data !== undefined) {
        console.error(formatted, data)
      } else {
        console.error(formatted)
      }
    },
  }
}

// Factory functions for common use cases (avoid top-level instantiation)
export function getBuildSafeLogger(): BuildSafeLogger {
  return createBuildSafeLogger('app')
}

export function getStartupLogger(): BuildSafeLogger {
  return createBuildSafeLogger('startup')
}

export function getSecurityLogger(): BuildSafeLogger {
  return createBuildSafeLogger('security')
}

export function getPhiAuditLogger(): BuildSafeLogger {
  return createBuildSafeLogger('phi-audit')
}
