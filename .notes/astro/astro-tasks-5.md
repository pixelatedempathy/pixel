# Astro Check Tasks - File 5


Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Lib/fhe/__tests__/parameter-optimizer.test.ts
- [ ] Fix type error: Use correct SecurityLevel enum value instead of string
- [ ] Use type-only import for `SealSecurityLevel`
- [ ] Fix vitest imports:
  - [ ] Fix import for `describe` from 'vitest'
  - [ ] Fix import for `expect` from 'vitest'
  - [ ] Fix import for `beforeEach` from 'vitest'
  - [ ] Fix import for `it` from 'vitest'
  - [ ] Fix import for `vi` from 'vitest'

## Lib/fhe/mock/index.ts
- [ ] Fix import for `MockFHEScheme` from './mock-fhe-service'

## Lib/fhe/mock/mock-fhe-service.ts
- [ ] Fix property access: Change `params?.categories` to `params?.['categories']`
- [ ] Remove unused private variable `keysGenerated` or use it

## Lib/hooks/useMultidimensionalEmotions.ts
- [ ] Fix import for `MultidimensionalPattern` from '@/lib/ai/temporal/types'
- [ ] Fix import for `DimensionalEmotionMap` from '@/lib/ai/emotions/dimensionalTypes'

## Lib/jobs/queue.ts
- [ ] Fix type errors in map callbacks:
  - [ ] Add proper type assertions for `pendingJobs.map((jobStr: string) => ...)`
  - [ ] Add proper type assertions for `pendingJobsWithScores.map((item: { value: string }) => ...)`
- [ ] Add null check for `jobString[0]` before accessing properties

## Lib/jobs/worker.ts
- [ ] Fix type errors in BiasDetectionEngine:
  - [ ] Add type assertion or conversion for `sessions` parameter
  - [ ] Fix type assignment for `report` and `results` variables
- [ ] Fix access to private property: Use a public method instead of accessing `biasDetectionEngine.isInitialized`

## Lib/logging/performance-logger.ts
- [ ] Add null checks for `timeRange.start` and `timeRange.end` before accessing properties
- [ ] Fix property access: Change `process.env.LOG_DIR` to `process.env['LOG_DIR']`
- [ ] Fix import for `PerformanceMetrics` from '../ai/performance'

## Lib/logging/rotation.ts
- [ ] Add null check or default value for `prefix` before using it in `startsWith`

## Lib/mental-health/analyzer.ts
- [ ] Fix deprecated method: Replace `.substr(2, 9)` with `.substring(2, 11)`

## Lib/mental-health/__tests__/service.test.ts
- [ ] Add null check for `result.analysis?.indicators[0]` before accessing properties
- [ ] Fix vitest imports:
  - [ ] Fix import for `describe` from 'vitest'
  - [ ] Fix import for `it` from 'vitest'
  - [ ] Fix import for `expect` from 'vitest'
  - [ ] Fix import for `beforeEach` from 'vitest'

## Lib/metaaligner/api/alignment-api.test.ts
- [ ] Fix property access errors:
  - [ ] Add type assertion or update type definition for `result.content`
  - [ ] Add null check for `safetyResult` before accessing properties
  - [ ] Fix property access: Change `result.evaluation.objectiveResults.safety` to `result.evaluation.objectiveResults['safety']`
  - [ ] Add type assertion or update type definition for `objectiveResult.explanation`
- [ ] Fix object literal: Remove or properly define `createChatStream` property
- [ ] Fix vitest imports:
  - [ ] Fix import for `describe` from 'vitest'
  - [ ] Fix import for `it` from 'vitest'
  - [ ] Fix import for `expect` from 'vitest'
  - [ ] Fix import for `beforeEach` from 'vitest'
  - [ ] Fix import for `afterEach` from 'vitest'
  - [ ] Fix import for `vi` from 'vitest'

## Lib/metaaligner/api/alignment-api.ts
- [ ] Fix object literal: Remove or properly define `content` property in IntegratedResponse
