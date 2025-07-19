/**
 * Shared types for the documentation system to avoid circular dependencies
 */

// Production-grade types
export interface SessionDocumentation {
  readonly sessionId: string
  readonly clientId: string
  readonly therapistId: string
  readonly startTime: Date
  readonly endTime?: Date | undefined
  readonly notes: string
  readonly interventions: readonly string[]
  readonly outcomes: readonly string[]
  readonly nextSteps: readonly string[]
  readonly riskAssessment: RiskAssessment
  readonly metadata: SessionMetadata
}

export interface RiskAssessment {
  readonly level: 'low' | 'moderate' | 'high' | 'critical'
  readonly factors: readonly string[]
  readonly recommendations: readonly string[]
  readonly requiresImmediateAttention: boolean
}

export interface SessionMetadata {
  readonly version: string
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly createdBy: string
  readonly sessionType: 'individual' | 'group' | 'family' | 'couples'
  readonly duration: number // in minutes
  readonly modality: 'in-person' | 'telehealth' | 'hybrid'
}

export interface DocumentationGenerationOptions {
  readonly includeRiskAssessment: boolean
  readonly includeInterventions: boolean
  readonly includeOutcomes: boolean
  readonly includeNextSteps: boolean
  readonly format: 'clinical' | 'progress' | 'summary'
  readonly template?: string
}

export interface DocumentationValidationResult {
  readonly isValid: boolean
  readonly errors: readonly string[]
  readonly warnings: readonly string[]
  readonly completeness: number // 0-1 scale
}

/**
 * Interface for EHR export options
 */
export interface EHRExportOptions {
  /**
   * The format to export the documentation in
   */
  format: 'fhir' | 'ccda' | 'pdf'

  /**
   * The patient ID in the EHR system
   */
  patientId: string

  /**
   * The provider ID in the EHR system
   */
  providerId: string

  /**
   * Additional metadata to include in the export
   */
  metadata?: Record<string, any>

  /**
   * Whether to include sensitive information
   */
  includeSensitiveInfo?: boolean
}

/**
 * Interface for EHR export result
 */
export interface EHRExportResult {
  /**
   * Whether the export was successful
   */
  success: boolean

  /**
   * The exported data (format depends on the export format)
   */
  data?: any

  /**
   * Any errors that occurred during export
   */
  errors?: string[]

  /**
   * The export format used
   */
  format: 'fhir' | 'ccda' | 'pdf'

  /**
   * Metadata about the export
   */
  metadata: {
    exportedAt: Date
    exportedBy: string
    patientId: string
    providerId: string
  }
}
