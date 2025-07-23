/**
 * Utility functions for safely accessing environment variables
 */

/**
 * Safely access an environment variable with proper TypeScript typing
 * @param key The environment variable key
 * @param defaultValue Optional default value if the environment variable is not set
 * @returns The environment variable value or the default value
 */
export function getEnv(key: string, defaultValue?: string): string | undefined {
  return process.env[key] ?? defaultValue
}

/**
 * Safely access an environment variable that is required
 * @param key The environment variable key
 * @throws Error if the environment variable is not set
 * @returns The environment variable value
 */
export function getRequiredEnv(key: string): string {
  const value = process.env[key]
  if (value === undefined) {
    throw new Error(`Required environment variable ${key} is not set`)
  }
  return value
}

/**
 * Check if an environment variable is set to a truthy value
 * @param key The environment variable key
 * @returns true if the environment variable is set to a truthy value, false otherwise
 */
export function isEnvTrue(key: string): boolean {
  const value = process.env[key]?.toLowerCase()
  return value === 'true' || value === '1' || value === 'yes'
}

/**
 * Check if an environment variable is set to a falsy value
 * @param key The environment variable key
 * @returns true if the environment variable is set to a falsy value, false otherwise
 */
export function isEnvFalse(key: string): boolean {
  const value = process.env[key]?.toLowerCase()
  return value === 'false' || value === '0' || value === 'no'
}
