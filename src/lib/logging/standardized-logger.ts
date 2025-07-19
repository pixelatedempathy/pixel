/**
 * Standardized Logger Module
 *
 * This module provides a unified logging interface with distinct, clearly named functions
 * for different use cases throughout the application. It consolidates the various
 * logging utilities into one coherent system.
 */

import {
  createBuildSafeLogger,
  type BuildSafeLogger,
} from '@/lib/logging/build-safe-logger'

// Type alias for compatibility
export type Logger = BuildSafeLogger

/**
 * Get a HIPAA-compliant logger with the specified prefix
 * This is the primary logger for PHI-related operations
 *
 * @param prefix - The prefix to identify the logger context
 * @returns A HIPAA-compliant logger instance
 */
export function getHipaaCompliantLogger(prefix: string): Logger {
  // Use build-safe logger for HIPAA compliance
  return createBuildSafeLogger(`hipaa-${prefix}`)
}

/**
 * Get a clinical analysis logger specifically for mental health operations
 *
 * @param context - The clinical context (e.g., 'bias-detection', 'mental-llama')
 * @returns A logger configured for clinical analysis
 */
export function getClinicalAnalysisLogger(context: string): Logger {
  return getHipaaCompliantLogger(`clinical-${context}`)
}

/**
 * Get a bias detection logger for bias monitoring and analysis
 *
 * @param component - The bias detection component (e.g., 'engine', 'alerts', 'metrics')
 * @returns A logger configured for bias detection
 */
export function getBiasDetectionLogger(component: string): Logger {
  return getHipaaCompliantLogger(`bias-${component}`)
}

/**
 * Get an AI service logger for AI model operations
 *
 * @param service - The AI service name (e.g., 'mental-llama', 'openai', 'anthropic')
 * @returns A logger configured for AI services
 */
export function getAiServiceLogger(service: string): Logger {
  return getHipaaCompliantLogger(`ai-${service}`)
}

/**
 * Get an API endpoint logger for API routes
 *
 * @param endpoint - The API endpoint path (e.g., 'bias-detection', 'mental-health')
 * @returns A logger configured for API endpoints
 */
export function getApiEndpointLogger(endpoint: string): Logger {
  return getHipaaCompliantLogger(`api-${endpoint}`)
}

/**
 * Get a component logger for UI components
 *
 * @param component - The component name (e.g., 'dashboard', 'chat-demo')
 * @returns A logger configured for UI components
 */
export function getComponentLogger(component: string): Logger {
  return getHipaaCompliantLogger(`component-${component}`)
}

/**
 * Get a service logger for general services
 *
 * @param service - The service name (e.g., 'websocket', 'analytics')
 * @returns A logger configured for services
 */
export function getServiceLogger(service: string): Logger {
  return getHipaaCompliantLogger(`service-${service}`)
}

/**
 * Get a security logger for security-related operations
 *
 * @param operation - The security operation (e.g., 'audit', 'breach', 'crypto')
 * @returns A logger configured for security operations
 */
export function getSecurityLogger(operation: string): Logger {
  return getHipaaCompliantLogger(`security-${operation}`)
}

// Note: createBuildSafeLogger, getBrowserLogger, and getPerformanceLogger functions removed
// to avoid initialization issues during build. Use createBuildSafeLogger directly instead.

/**
 * Backward compatibility function - maps to HIPAA compliant logger
 * @deprecated Use getHipaaCompliantLogger instead for clarity
 */
export function getLegacyLogger(prefix: string): Logger {
  return getHipaaCompliantLogger(prefix)
}
