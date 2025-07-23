/**
 * A logger that's safe to use during build time
 */

export interface Logger {
  info: (message: string, ...args: any[]) => void;
  warn: (message: string, ...args: any[]) => void;
  error: (message: string, ...args: any[]) => void;
  debug: (message: string, ...args: any[]) => void;
}

/**
 * Create a logger that's safe to use during build time
 */
export function createBuildSafeLogger(component: string): Logger {
  return {
    info: (message: string, ...args: any[]) => {
      console.log(`[${component}] INFO: ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
      console.warn(`[${component}] WARN: ${message}`, ...args);
    },
    error: (message: string, ...args: any[]) => {
      console.error(`[${component}] ERROR: ${message}`, ...args);
    },
    debug: (message: string, ...args: any[]) => {
      console.debug(`[${component}] DEBUG: ${message}`, ...args);
    },
  };
}
