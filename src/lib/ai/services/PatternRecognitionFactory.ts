import { createBuildSafeLogger } from '../../logging/build-safe-logger'
import type { TherapySession } from '../models/ai-types'
import type { EmotionAnalysis } from '../emotions/types'

import {
  type PatternRecognitionService,
  type PatternRecognitionResult,
  type RiskCorrelation,
  type TrendPattern,
  type CrossSessionPattern,
  PatternRecognitionResultSchema,
  RiskCorrelationSchema,
  TrendPatternSchema,
  CrossSessionPatternSchema,
  ValidationError,
  ProcessingError,
} from './pattern-recognition-types'

const logger = createBuildSafeLogger('pattern-recognition')
