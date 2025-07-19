'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var logger_1 = require('./lib/utils/logger')
// Initialize logger for PHI audit logging
var logger = (0, logger_1.getLogger)('phi-audit')
// Log access to types containing PHI-related structures for HIPAA compliance
logger.info('Types module accessed', {
  dataType: 'types-definitions',
  action: 'module-access',
  component: 'types.ts',
  containsPHI: true,
})
