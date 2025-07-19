export interface AuditDetails {
  userId?: string
  action: string
  timestamp: Date
  details?: Record<string, any>
}
