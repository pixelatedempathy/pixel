# Astro Check Tasks - File 4

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Lib/ai/mental-llama/evidence/utils/semanticEvidenceParser.ts
- [ ] Fix type error: Change `clinicalRelevance` type from string to number or update the type definition

## Lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts
- [ ] Fix property access errors in EvidenceItem:
  - [ ] Add type assertion or update type definition for `text` property
  - [ ] Add type assertion or update type definition for `category` property
  - [ ] Add type assertion or update type definition for `metadata` property

## Lib/ai/mental-llama/utils/testModelIntegration.ts
- [ ] Fix property access: Remove `.env` from `env.env?.MENTALLAMA_API_KEY`
- [ ] Fix property access: Remove `.env` from `env.env?.MENTALLAMA_ENDPOINT_URL_7B`

## Lib/ai/models/registry.ts
- [ ] Fix type error: Update type assertion for `cap as ModelCapability` to match expected types

## Lib/ai/performance/EdgeComputing.ts
- [ ] Remove unused private variable `config` or use it

## Lib/ai/services/BeliefConsistencyService.test.ts
- [ ] Add null checks for `result.contradictionsFound[0]` before accessing properties

## Lib/ai/services/ContextualAwarenessService.ts
- [ ] Fix import for `RecommendationContext` from './OutcomeRecommendationEngine'

## Lib/ai/services/OutcomeRecommendationEngine.ts
- [ ] Fix type error: Add type assertion or validation for `riskFactors` to match expected type

## Lib/ai/services/PatientProfileService.test.ts
- [ ] Add null checks for `updatedProfile?.conversationHistory[0]` before accessing properties
- [ ] Fix TherapeuticProgress type error: Add missing required properties or update type definition
- [ ] Fix import for `vi` from 'vitest'

## Lib/ai/services/PatientResponseService.test.ts
- [ ] Fix TherapeuticProgress type error: Add missing required properties or update type definition
- [ ] Fix import for `vi` from 'vitest'

## Lib/ai/services/intervention-analysis.ts
- [ ] Fix property access: Change `completionRecord.content` to `completionRecord['content']`
- [ ] Fix property access: Change `completionRecord.choices` to `completionRecord['choices']`

## Lib/ai/services/__tests__/PatientProfileService.test.ts
- [ ] Add null check for `savedProfileArgument.conversationHistory[0]` before accessing properties
- [ ] Add missing `skillsAcquired` property to `initialTherapeuticProgress`
- [ ] Fix jest imports and usage:
  - [ ] Replace `jest.Mocked` with appropriate type
  - [ ] Fix `jest.mock` usage
- [ ] Use type-only import for `ProfileIdentifier`

## Lib/ai/services/__tests__/PatientResponseService.test.ts
- [ ] Add missing `skillsAcquired` property to `initialTherapeuticProgress`
- [ ] Use type-only import for `PatientResponseStyleConfig`
- [ ] Fix vitest imports:
  - [ ] Fix import for `describe` from 'vitest'
  - [ ] Fix import for `it` from 'vitest'
  - [ ] Fix import for `expect` from 'vitest'
  - [ ] Fix import for `beforeEach` from 'vitest'
  - [ ] Fix import for `vi` from 'vitest'

## Lib/ai/services/__tests__/TherapeuticProgressService.test.ts
- [ ] Fix import for `vi` from 'vitest'

## Lib/ai/temporal/EmotionTemporalAnalyzer.ts
- [ ] Remove unused private variable `repository` or use it

## Lib/ai/temporal/TemporalAnalysisAlgorithm.ts
- [ ] Add null checks for array access operations:
  - [ ] Add null check for `dimensions[i - 1]` before using it
  - [ ] Add null check for `window[i - 1]` and `window[i]` before accessing properties
  - [ ] Add null check for `values[i]` and `values[i + lag]` before using them
  - [ ] Add null check for `stableWindow[0]` and `stableWindow[stableWindow.length - 1]` before accessing properties
  - [ ] Add null check for `maps[i - 1]`, `maps[i]`, and `maps[i + 1]` before accessing properties
  - [ ] Add null check for `maps[0]` and `maps[maps.length - 1]` before accessing properties
  - [ ] Add null check for `window[0]` and `window[window.length - 1]` before accessing properties
