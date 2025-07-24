
[7m14[0m import { fheService } from '../index'
[7m  [0m [91m         ~~~~~~~~~~[0m

[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m59[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'SealSecurityLevel' is not assignable to type 'SecurityLevel | undefined'.
  Type '"tc128"' is not assignable to type 'SecurityLevel | undefined'. Did you mean 'SecurityLevel.TC192'?

[7m59[0m       minimumSecurityLevel: 'tc192' as SealSecurityLevel,
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m11[0m:[93m26[0m - [91merror[0m[90m ts(1484): [0m'SealSecurityLevel' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m11[0m import { SealSchemeType, SealSecurityLevel } from '../seal-types'
[7m  [0m [91m                         ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m5[0m:[93m44[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m5[0m import { describe, expect, beforeEach, it, vi } from 'vitest'
[7m [0m [91m                                           ~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m5[0m:[93m40[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, expect, beforeEach, it, vi } from 'vitest'
[7m [0m [91m                                       ~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m5[0m:[93m28[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, expect, beforeEach, it, vi } from 'vitest'
[7m [0m [91m                           ~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, expect, beforeEach, it, vi } from 'vitest'
[7m [0m [91m                   ~~~~~~[0m
[96msrc/lib/fhe/__tests__/parameter-optimizer.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, expect, beforeEach, it, vi } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/fhe/mock/index.ts[0m:[93m11[0m:[93m3[0m - [91merror[0m[90m ts(2459): [0mModule '"./mock-fhe-service"' declares 'MockFHEScheme' locally, but it is not exported.

[7m11[0m   MockFHEScheme,
[7m  [0m [91m  ~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/mock/mock-fhe-service.ts[0m:[93m333[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m333[0m       (params?.categories as Record<string, string[]>) || categories
[7m   [0m [91m               ~~~~~~~~~~[0m
[96msrc/lib/fhe/mock/mock-fhe-service.ts[0m:[93m73[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'keysGenerated' is declared but its value is never read.

[7m73[0m   private keysGenerated = false
[7m  [0m [91m          ~~~~~~~~~~~~~[0m

[96msrc/lib/hooks/useMultidimensionalEmotions.ts[0m:[93m3[0m:[93m46[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/ai/temporal/types' or its corresponding type declarations.

[7m3[0m import type { MultidimensionalPattern } from '@/lib/ai/temporal/types'
[7m [0m [91m                                             ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/hooks/useMultidimensionalEmotions.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2724): [0m'"@/lib/ai/emotions/dimensionalTypes"' has no exported member named 'DimensionalEmotionMap'. Did you mean 'DimensionalEmotion'?

[7m2[0m import type { DimensionalEmotionMap } from '@/lib/ai/emotions/dimensionalTypes'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/jobs/queue.ts[0m:[93m252[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(jobStr: string) => any' is not assignable to parameter of type '((value: string, index: number, array: string[]) => any) & ((value: RedisZSetMember, index: number, array: RedisZSetMember[]) => any)'.
  Type '(jobStr: string) => any' is not assignable to type '(value: RedisZSetMember, index: number, array: RedisZSetMember[]) => any'.

[7m252[0m         jobIds = pendingJobs.map((jobStr: string) => JSON.parse(jobStr).id)
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/jobs/queue.ts[0m:[93m219[0m:[93m48[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(item: { value: string; }) => string' is not assignable to parameter of type '((value: string, index: number, array: string[]) => string) & ((value: RedisZSetMember, index: number, array: RedisZSetMember[]) => string)'.
  Type '(item: { value: string; }) => string' is not assignable to type '(value: string, index: number, array: string[]) => string'.

[7m219[0m         jobStrings = pendingJobsWithScores.map((item: { value: string }) => item.value)
[7m   [0m [91m                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/jobs/queue.ts[0m:[93m117[0m:[93m33[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m117[0m     const job: Job = JSON.parse(jobString[0].value)
[7m   [0m [91m                                ~~~~~~~~~~~~[0m

[96msrc/lib/jobs/worker.ts[0m:[93m159[0m:[93m65[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TherapeuticSession[]' is not assignable to parameter of type 'import("/root/pixel/src/lib/ai/bias-detection/types").TherapeuticSession[]'.
  Type 'TherapeuticSession' is missing the following properties from type 'TherapeuticSession': sessionId, timestamp, participantDemographics, scenario, and 3 more.

[7m159[0m           report = await biasDetectionEngine.generateBiasReport(sessions, timeRange, options)
[7m   [0m [91m                                                                ~~~~~~~~[0m
[96msrc/lib/jobs/worker.ts[0m:[93m159[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'BiasReport' is not assignable to type 'Record<string, unknown>'.
  Index signature for type 'string' is missing in type 'BiasReport'.

[7m159[0m           report = await biasDetectionEngine.generateBiasReport(sessions, timeRange, options)
[7m   [0m [91m          ~~~~~~[0m
[96msrc/lib/jobs/worker.ts[0m:[93m139[0m:[93m13[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TherapeuticSession[]' is not assignable to parameter of type 'import("/root/pixel/src/lib/ai/bias-detection/types").TherapeuticSession[]'.
  Type 'TherapeuticSession' is missing the following properties from type 'TherapeuticSession': sessionId, timestamp, participantDemographics, scenario, and 3 more.

[7m139[0m             sessions,
[7m   [0m [91m            ~~~~~~~~[0m
[96msrc/lib/jobs/worker.ts[0m:[93m138[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'PromiseSettledResult<BiasAnalysisResult>[]' is not assignable to type 'Record<string, unknown>'.
  Index signature for type 'string' is missing in type 'PromiseSettledResult<BiasAnalysisResult>[]'.

[7m138[0m           results = await biasDetectionEngine.analyzeSessionsBatch(
[7m   [0m [91m          ~~~~~~~[0m
[96msrc/lib/jobs/worker.ts[0m:[93m55[0m:[93m28[0m - [91merror[0m[90m ts(2341): [0mProperty 'isInitialized' is private and only accessible within class 'BiasDetectionEngine'.

[7m55[0m   if (!biasDetectionEngine.isInitialized) {
[7m  [0m [91m                           ~~~~~~~~~~~~~[0m

[96msrc/lib/logging/performance-logger.ts[0m:[93m104[0m:[93m23[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m104[0m           fileDate <= timeRange.end.toISOString().split('T')[0]
[7m   [0m [91m                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/logging/performance-logger.ts[0m:[93m103[0m:[93m23[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m103[0m           fileDate >= timeRange.start.toISOString().split('T')[0] &&
[7m   [0m [91m                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/logging/performance-logger.ts[0m:[93m12[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'LOG_DIR' comes from an index signature, so it must be accessed with ['LOG_DIR'].

[7m12[0m     this.logDir = process.env.LOG_DIR || './logs/performance'
[7m  [0m [91m                              ~~~~~~~[0m
[96msrc/lib/logging/performance-logger.ts[0m:[93m1[0m:[93m41[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../ai/performance' or its corresponding type declarations.

[7m1[0m import type { PerformanceMetrics } from '../ai/performance'
[7m [0m [91m                                        ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/logging/rotation.ts[0m:[93m169[0m:[93m43[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m169[0m         .filter((file) => file.startsWith(prefix) && file !== baseFile)
[7m   [0m [91m                                          ~~~~~~[0m

[96msrc/lib/mental-health/analyzer.ts[0m:[93m97[0m:[93m64[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m97[0m       id: `analysis_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
[7m  [0m [93m                                                               ~~~~~~[0m

[96msrc/lib/mental-health/__tests__/service.test.ts[0m:[93m34[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m34[0m       expect(result.analysis?.indicators[0].type).toBe('depression')
[7m  [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/mental-health/__tests__/service.test.ts[0m:[93m1[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m1[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                               ~~~~~~~~~~[0m
[96msrc/lib/mental-health/__tests__/service.test.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m1[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/mental-health/__tests__/service.test.ts[0m:[93m1[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m1[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/mental-health/__tests__/service.test.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m1[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m512[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'content' does not exist on type 'IntegratedResponse'.

[7m512[0m       expect(result.content).not.toBe('Just deal with it')
[7m   [0m [91m                    ~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m243[0m:[93m14[0m - [91merror[0m[90m ts(18048): [0m'safetyResult' is possibly 'undefined'.

[7m243[0m       expect(safetyResult.score).toBeLessThan(0.5) // Should score low on safety
[7m   [0m [91m             ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m241[0m:[93m63[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m241[0m       const safetyResult = result.evaluation.objectiveResults.safety
[7m   [0m [91m                                                              ~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m212[0m:[93m32[0m - [91merror[0m[90m ts(2339): [0mProperty 'explanation' does not exist on type 'ObjectiveEvaluationResult'.

[7m212[0m         expect(objectiveResult.explanation.length).toBeGreaterThan(0)
[7m   [0m [91m                               ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m211[0m:[93m39[0m - [91merror[0m[90m ts(2339): [0mProperty 'explanation' does not exist on type 'ObjectiveEvaluationResult'.

[7m211[0m         expect(typeof objectiveResult.explanation).toBe('string')
[7m   [0m [91m                                      ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m210[0m:[93m32[0m - [91merror[0m[90m ts(2339): [0mProperty 'explanation' does not exist on type 'ObjectiveEvaluationResult'.

[7m210[0m         expect(objectiveResult.explanation).toBeTruthy()
[7m   [0m [91m                               ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m17[0m:[93m3[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'createChatStream' does not exist in type 'Partial<AIService>'.

[7m17[0m   createChatStream: vi.fn(),
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m55[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m                                                      ~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m44[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterEach'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m                                           ~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m                               ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/metaaligner/api/alignment-api.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m772[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'content' does not exist in type 'IntegratedResponse'.

[7m772[0m       content: finalResponse,
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m204[0m:[93m11[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'explanation' does not exist in type 'ObjectiveEvaluationResult'.

[7m204[0m           explanation: `${objective.name}: Score reflects alignment with criteria such as ${objective.criteria.map((c) => c.criterion).join(', ')}.`, // Added default explanation
[7m   [0m [91m          ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m144[0m:[93m11[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'explanation' does not exist in type 'ObjectiveEvaluationResult'.

[7m144[0m           explanation: 'Response was null or undefined.',
[7m   [0m [91m          ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m25[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentMetrics' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m25[0m   AlignmentMetrics,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m20[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m20[0m   AlignmentEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m19[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m19[0m   ObjectiveEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m14[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m14[0m   AlignmentContext,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m13[0m   ObjectiveDefinition,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m10[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"../../ai/models/types"' has no exported member 'AIStreamOptions'.

[7m10[0m   AIStreamOptions,
[7m  [0m [91m  ~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/api/alignment-api.ts[0m:[93m8[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"../../ai/models/types"' has no exported member 'AIServiceResponse'.

[7m8[0m   AIServiceResponse,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m353[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m353[0m       expect(objective.criteria[0].criterion).toBe('template-criterion')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m53[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m53[0m       expect(objective.criteria[0].criterion).toBe('test-criterion')
[7m  [0m [91m             ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m1[0m:[93m38[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m1[0m import { describe, test, beforeEach, expect } from 'vitest'
[7m [0m [91m                                     ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m1[0m:[93m26[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m1[0m import { describe, test, beforeEach, expect } from 'vitest'
[7m [0m [91m                         ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m1[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'test'.

[7m1[0m import { describe, test, beforeEach, expect } from 'vitest'
[7m [0m [91m                   ~~~~[0m
[96msrc/lib/metaaligner/core/objective-interfaces.test.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m1[0m import { describe, test, beforeEach, expect } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m565[0m:[93m50[0m - [91merror[0m[90m ts(4111): [0mProperty 'acceptable' comes from an index signature, so it must be accessed with ['acceptable'].

[7m565[0m       DEFAULT_METRICS_CONFIG.benchmarkThresholds.acceptable,
[7m   [0m [91m                                                 ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m564[0m:[93m55[0m - [91merror[0m[90m ts(4111): [0mProperty 'good' comes from an index signature, so it must be accessed with ['good'].

[7m564[0m     expect(DEFAULT_METRICS_CONFIG.benchmarkThresholds.good).toBeGreaterThan(
[7m   [0m [91m                                                      ~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m563[0m:[93m66[0m - [91merror[0m[90m ts(4111): [0mProperty 'good' comes from an index signature, so it must be accessed with ['good'].

[7m563[0m     ).toBeGreaterThan(DEFAULT_METRICS_CONFIG.benchmarkThresholds.good)
[7m   [0m [91m                                                                 ~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m562[0m:[93m50[0m - [91merror[0m[90m ts(4111): [0mProperty 'excellent' comes from an index signature, so it must be accessed with ['excellent'].

[7m562[0m       DEFAULT_METRICS_CONFIG.benchmarkThresholds.excellent,
[7m   [0m [91m                                                 ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m545[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m545[0m       expect(metrics.criteriaBreakdown[0].contribution).toBe(0)
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m544[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m544[0m       expect(metrics.criteriaBreakdown[0].score).toBe(0)
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m538[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ criteria: { criterion: string; description: string; weight: number; }[]; id?: string | undefined; name?: string | undefined; description?: string | undefined; weight?: number | undefined; evaluationFunction?: ((response: string, context: AlignmentContext) => number) | undefined; }' is not assignable to parameter of type 'ObjectiveDefinition'.
  Types of property 'id' are incompatible.

[7m538[0m         objectiveWithMissingCriteria,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m533[0m:[93m50[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m533[0m         ...mockEvaluationResult.objectiveResults.correctness,
[7m   [0m [91m                                                 ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m488[0m:[93m30[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ overallScore: number | undefined; timestamp: Date; objectiveResults: Record<string, ObjectiveEvaluationResult>; weights: Record<string, number>; normalizedScores: Record<string, number>; aggregationMethod: AggregationMethod; evaluationContext: AlignmentContext; }' is not assignable to parameter of type 'AlignmentEvaluationResult'.
  Types of property 'overallScore' are incompatible.

[7m488[0m         engine.addEvaluation(evaluation, mockObjectives)
[7m   [0m [91m                             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m468[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m468[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m466[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m466[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m462[0m:[93m30[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ timestamp: Date; objectiveResults: { correctness: { score: number | undefined; objectiveId?: string | undefined; criteriaScores?: Record<string, number> | undefined; confidence?: number | undefined; metadata?: EvaluationMetadata | undefined; }; }; ... 4 more ...; evaluationContext: AlignmentContext; }' is not assignable to parameter of type 'AlignmentEvaluationResult'.
  Types of property 'objectiveResults' are incompatible.

[7m462[0m         engine.addEvaluation(evaluation, mockObjectives)
[7m   [0m [91m                             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m457[0m:[93m56[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m457[0m               ...mockEvaluationResult.objectiveResults.correctness,
[7m   [0m [91m                                                       ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m438[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m438[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m436[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m436[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m432[0m:[93m30[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ timestamp: Date; objectiveResults: { correctness: { score: number; objectiveId?: string | undefined; criteriaScores?: Record<string, number> | undefined; confidence?: number | undefined; metadata?: EvaluationMetadata | undefined; }; }; ... 4 more ...; evaluationContext: AlignmentContext; }' is not assignable to parameter of type 'AlignmentEvaluationResult'.
  Types of property 'objectiveResults' are incompatible.

[7m432[0m         engine.addEvaluation(evaluation, mockObjectives)
[7m   [0m [91m                             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m427[0m:[93m56[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m427[0m               ...mockEvaluationResult.objectiveResults.correctness,
[7m   [0m [91m                                                       ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m408[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m408[0m         correctnessObjective,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m406[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m406[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m391[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m391[0m         safetyObjective,
[7m   [0m [91m        ~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m389[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m389[0m       const evaluationResult = mockEvaluationResult.objectiveResults.safety
[7m   [0m [91m                                                                     ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m372[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m372[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m364[0m:[93m54[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m364[0m             ...mockEvaluationResult.objectiveResults.correctness,
[7m   [0m [91m                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m345[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m345[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m343[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m343[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m306[0m:[93m30[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ timestamp: Date; objectiveResults: { correctness: { score: number; objectiveId?: string | undefined; criteriaScores?: Record<string, number> | undefined; confidence?: number | undefined; metadata?: EvaluationMetadata | undefined; }; }; ... 4 more ...; evaluationContext: AlignmentContext; }' is not assignable to parameter of type 'AlignmentEvaluationResult'.
  Types of property 'objectiveResults' are incompatible.

[7m306[0m         engine.addEvaluation(evaluation, mockObjectives)
[7m   [0m [91m                             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m300[0m:[93m56[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m300[0m               ...mockEvaluationResult.objectiveResults.correctness,
[7m   [0m [91m                                                       ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m229[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m229[0m       expect(metrics.objectiveMetrics.safety).toBeDefined()
[7m   [0m [91m                                      ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m228[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m228[0m       expect(metrics.objectiveMetrics.empathy).toBeDefined()
[7m   [0m [91m                                      ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m227[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m227[0m       expect(metrics.objectiveMetrics.correctness).toBeDefined()
[7m   [0m [91m                                      ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m202[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m202[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m199[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m199[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m179[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m179[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m176[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m176[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m157[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ObjectiveDefinition | undefined' is not assignable to parameter of type 'ObjectiveDefinition'.
  Type 'undefined' is not assignable to type 'ObjectiveDefinition'.

[7m157[0m         objective,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m154[0m:[93m70[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m154[0m       const evaluationResult = mockEvaluationResult.objectiveResults.correctness
[7m   [0m [91m                                                                     ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m17[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m17[0m   AlignmentContext,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m16[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m16[0m   ObjectiveDefinition,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m12[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m12[0m   AlignmentEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m9[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'MetricsConfig' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m9[0m   MetricsConfig,
[7m [0m [91m  ~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m5[0m:[93m40[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                                       ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m5[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                               ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/core/objective-metrics.ts[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m13[0m   AlignmentEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.ts[0m:[93m12[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m12[0m   ObjectiveEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.ts[0m:[93m9[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveCriteria' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m9[0m   ObjectiveCriteria,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.ts[0m:[93m8[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m8[0m   AlignmentContext,
[7m [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-metrics.ts[0m:[93m7[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m7[0m   ObjectiveDefinition,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m500[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ correctness: ObjectiveEvaluationResult | undefined; }' is not assignable to parameter of type 'Record<string, ObjectiveEvaluationResult>'.
  Property 'correctness' is incompatible with index signature.

[7m500[0m         singleResult,
[7m   [0m [91m        ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m495[0m:[93m44[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m495[0m         correctness: mockEvaluationResults.correctness,
[7m   [0m [91m                                           ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m300[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m300[0m       expect(result.weights.empathy).toBeGreaterThan(baseWeight)
[7m   [0m [91m                            ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m299[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m299[0m       expect(result.weights.safety).toBeGreaterThan(baseWeight)
[7m   [0m [91m                            ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m236[0m:[93m54[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m236[0m         result.weights.correctness! / result.weights.safety!
[7m   [0m [91m                                                     ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m236[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m236[0m         result.weights.correctness! / result.weights.safety!
[7m   [0m [91m                       ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m234[0m:[93m54[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m234[0m         initialWeights.correctness! / initialWeights.safety!
[7m   [0m [91m                                                     ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m234[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m234[0m         initialWeights.correctness! / initialWeights.safety!
[7m   [0m [91m                       ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m227[0m:[93m50[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m227[0m         result.weights.empathy! / result.weights.safety!
[7m   [0m [91m                                                 ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m227[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m227[0m         result.weights.empathy! / result.weights.safety!
[7m   [0m [91m                       ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m225[0m:[93m50[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m225[0m         initialWeights.empathy! / initialWeights.safety!
[7m   [0m [91m                                                 ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m225[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m225[0m         initialWeights.empathy! / initialWeights.safety!
[7m   [0m [91m                       ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m128[0m:[93m69[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m128[0m       expect(result.weights.empathy).toBeGreaterThan(result.weights.correctness)
[7m   [0m [91m                                                                    ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m128[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m128[0m       expect(result.weights.empathy).toBeGreaterThan(result.weights.correctness)
[7m   [0m [91m                            ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m127[0m:[93m68[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m127[0m       expect(result.weights.safety).toBeGreaterThan(result.weights.correctness)
[7m   [0m [91m                                                                   ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m127[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m127[0m       expect(result.weights.safety).toBeGreaterThan(result.weights.correctness)
[7m   [0m [91m                            ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m110[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'safety' comes from an index signature, so it must be accessed with ['safety'].

[7m110[0m       expect(result.weights.safety).toBeCloseTo(expectedWeight, 5)
[7m   [0m [91m                            ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m109[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'empathy' comes from an index signature, so it must be accessed with ['empathy'].

[7m109[0m       expect(result.weights.empathy).toBeCloseTo(expectedWeight, 5)
[7m   [0m [91m                            ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m108[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'correctness' comes from an index signature, so it must be accessed with ['correctness'].

[7m108[0m       expect(result.weights.correctness).toBeCloseTo(expectedWeight, 5)
[7m   [0m [91m                            ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m23[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'UserProfile' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m23[0m   UserProfile, // Import UserProfile
[7m  [0m [91m  ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m21[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m21[0m   AlignmentContext,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m20[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m20[0m   ObjectiveDefinition,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m17[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m17[0m   ObjectiveEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m16[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveConfiguration' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m16[0m   ObjectiveConfiguration,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m5[0m:[93m40[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                                       ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m5[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                               ~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, it as test, expect, beforeEach } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m497[0m:[93m28[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m497[0m         (evaluationResults[Object.keys(evaluationResults)[0]]?.metadata
[7m   [0m [91m                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m496[0m:[93m7[0m - [91merror[0m[90m ts(2739): [0mType '{}' is missing the following properties from type 'AlignmentContext': userQuery, detectedContext

[7m496[0m       evaluationContext:
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m438[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m438[0m           previousWeight: baseWeight,
[7m   [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m434[0m:[93m37[0m - [91merror[0m[90m ts(18048): [0m'baseWeight' is possibly 'undefined'.

[7m434[0m       if (Math.abs(adjustedWeight - baseWeight) > 0.01) {
[7m   [0m [91m                                    ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m308[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m308[0m           weights[objective.id] *= 1.2
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m235[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m235[0m           weights[pref.objectiveId] *= 1 + pref.preferenceStrength
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m201[0m:[93m13[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'string' can't be used to index type 'ContextualObjectiveWeights'.
  No index signature with a parameter of type 'string' was found on type 'ContextualObjectiveWeights'.

[7m201[0m           ? contextualWeights[objectiveId]!
[7m   [0m [91m            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m200[0m:[93m9[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'string' can't be used to index type 'ContextualObjectiveWeights'.
  No index signature with a parameter of type 'string' was found on type 'ContextualObjectiveWeights'.

[7m200[0m         contextualWeights[objectiveId] !== undefined
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m16[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m16[0m   AlignmentEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m15[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveEvaluationResult' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m15[0m   ObjectiveEvaluationResult,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m14[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveConfiguration' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m14[0m   ObjectiveConfiguration,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m8[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m8[0m   AlignmentContext,
[7m [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m7[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m7[0m   ObjectiveDefinition,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m659[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m659[0m   private static geometricMean(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m641[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m641[0m   private static harmonicMean(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m627[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m627[0m   private static weightedSum(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m611[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m611[0m   private static weightedAverage(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m588[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m588[0m   private static aggregateScores(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m576[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m576[0m   private static sigmoidNormalize(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m554[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m554[0m   private static zScoreNormalize(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m534[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m534[0m   private static minMaxNormalize(
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/metaaligner/core/objective-weighting.ts[0m:[93m503[0m:[93m3[0m - [91merror[0m[90m ts(1005): [0m',' expected.

[7m503[0m   private static extractScores(
[7m   [0m [91m  ~~~~~~~[0m

[96msrc/lib/metaaligner/core/objectives.test.ts[0m:[93m300[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'sessionId' comes from an index signature, so it must be accessed with ['sessionId'].

[7m300[0m       expect(context.sessionMetadata?.sessionId).toBe('123')
[7m   [0m [91m                                      ~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objectives.test.ts[0m:[93m4[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentContext' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m4[0m   AlignmentContext,
[7m [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/core/objectives.test.ts[0m:[93m3[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m3[0m   ObjectiveDefinition,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m15[0m:[93m10[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveDefinition' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m15[0m import { ObjectiveDefinition } from '../core/objectives'
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'TimestampedEvaluation' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m13[0m   TimestampedEvaluation,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m12[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'CriteriaMetrics' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m12[0m   CriteriaMetrics,
[7m  [0m [91m  ~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m11[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'AlignmentMetrics' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m11[0m   AlignmentMetrics,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m10[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ObjectiveMetrics' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m10[0m   ObjectiveMetrics,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/explainability/visualization.tsx[0m:[93m6[0m:[93m37[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/charts' or its corresponding type declarations.

[7m6[0m import { LineChart, PieChart } from '@/components/ui/charts'
[7m [0m [91m                                    ~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m488[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m488[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m            ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m488[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'sum' implicitly has an 'any' type.

[7m488[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m       ~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m420[0m:[93m40[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m420[0m     result.selectedObjectives.forEach((so) => {
[7m   [0m [91m                                       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m416[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m416[0m         defaultWeights[id] /= totalDefaultWeight
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m266[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m266[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m            ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m266[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'sum' implicitly has an 'any' type.

[7m266[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m       ~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m256[0m:[93m21[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m256[0m       .reduce((max, so) => Math.max(max, so.weight), 0)
[7m   [0m [91m                    ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m256[0m:[93m16[0m - [91merror[0m[90m ts(7006): [0mParameter 'max' implicitly has an 'any' type.

[7m256[0m       .reduce((max, so) => Math.max(max, so.weight), 0)
[7m   [0m [91m               ~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m252[0m:[93m10[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m252[0m         (so) =>
[7m   [0m [91m         ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m243[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m243[0m       (so) => so.objective.id === 'correctness',
[7m   [0m [91m       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m240[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m240[0m       (so) => so.objective.id === 'informativeness',
[7m   [0m [91m       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m179[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m179[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m            ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m179[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'sum' implicitly has an 'any' type.

[7m179[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m       ~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m168[0m:[93m40[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m168[0m     result.selectedObjectives.forEach((so) => {
[7m   [0m [91m                                       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m162[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m162[0m       (so) => so.objective.id === 'safety',
[7m   [0m [91m       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m134[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m134[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m            ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m134[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'sum' implicitly has an 'any' type.

[7m134[0m       (sum, so) => sum + so.weight,
[7m   [0m [91m       ~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m123[0m:[93m40[0m - [91merror[0m[90m ts(7006): [0mParameter 'so' implicitly has an 'any' type.

[7m123[0m     result.selectedObjectives.forEach((so) => {
[7m   [0m [91m                                       ~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m12[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'UserProfile' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m12[0m   UserProfile,
[7m  [0m [91m  ~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/adaptive-selector.test.ts[0m:[93m8[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module './adaptive-selector' or its corresponding type declarations.

[7m8[0m } from './adaptive-selector'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m611[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m611[0m       expect(results[2].educationalType).toBe(EducationalType.SYMPTOMS)
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m610[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m610[0m       expect(results[1].educationalType).toBe(EducationalType.EXPLANATION)
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m609[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m609[0m       expect(results[0].educationalType).toBe(EducationalType.DEFINITION)
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m24[0m:[93m3[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'createChatStream' does not exist in type 'AIService'.

[7m24[0m   createChatStream: vi.fn(),
[7m  [0m [91m  ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m53[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'Mock'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                                                    ~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m36[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                                   ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                               ~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/metaaligner/prioritization/educational-context-recognizer.ts[0m:[93m6[0m:[93m37[0m - [91merror[0m[90m ts(2305): [0mModule '"../../ai/models/types"' has no exported member 'AIRole'.

[7m6[0m import type { AIService, AIMessage, AIRole } from '../../ai/models/types'
[7m [0m [91m                                    ~~~~~~[0m

[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m600[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m600[0m       ;(mockAIService.generateText as Mock).mockImplementation(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m586[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m586[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m571[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m571[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m556[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m556[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m397[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m397[0m       expect(results[2].isSupport).toBe(true)
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m396[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m396[0m       expect(results[1].isSupport).toBeDefined() // Should have fallback result
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m395[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m395[0m       expect(results[0].isSupport).toBe(true)
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m381[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m381[0m       ;(mockAIService.generateText as Mock)
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m359[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m359[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m233[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m233[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m221[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m221[0m       ;(mockAIService.generateText as Mock).mockRejectedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m215[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m215[0m       expect(mockAIService.generateText).toHaveBeenCalledWith(
[7m   [0m [91m                           ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m199[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m199[0m       expect(mockAIService.generateText).toHaveBeenCalledWith(
[7m   [0m [91m                           ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m185[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m185[0m       expect(mockAIService.generateText).toHaveBeenCalled()
[7m   [0m [91m                           ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m176[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'generateText' does not exist on type 'AIService'.

[7m176[0m       ;(mockAIService.generateText as Mock).mockResolvedValue(
[7m   [0m [91m                      ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m21[0m:[93m3[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'generateText' does not exist in type 'AIService'.

[7m21[0m   generateText: vi.fn(),
[7m  [0m [91m  ~~~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m53[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'Mock'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                                                    ~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m36[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                                   ~~~~~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                               ~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/metaaligner/prioritization/support-context-identifier.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m5[0m import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/middleware/audit-logging.ts[0m:[93m310[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'SecurityEventType' is not assignable to parameter of type 'AuditEventType'.

[7m310[0m         eventType,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m297[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'durationUnit' comes from an index signature, so it must be accessed with ['durationUnit'].

[7m297[0m       metadata.durationUnit = 'ms'
[7m   [0m [91m               ~~~~~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m296[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'duration' comes from an index signature, so it must be accessed with ['duration'].

[7m296[0m       metadata.duration = Math.round(duration)
[7m   [0m [91m               ~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m292[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'responseStatusText' comes from an index signature, so it must be accessed with ['responseStatusText'].

[7m292[0m       metadata.responseStatusText = response.statusText
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m291[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'responseStatus' comes from an index signature, so it must be accessed with ['responseStatus'].

[7m291[0m       metadata.responseStatus = response.status
[7m   [0m [91m               ~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m278[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'requestBody' comes from an index signature, so it must be accessed with ['requestBody'].

[7m278[0m         metadata.requestBody = body
[7m   [0m [91m                 ~~~~~~~~~~~[0m
[96msrc/lib/middleware/audit-logging.ts[0m:[93m270[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'headers' comes from an index signature, so it must be accessed with ['headers'].

[7m270[0m         ;(metadata.headers as Record<string, string>)[header] = value
[7m   [0m [91m                   ~~~~~~~[0m

[96msrc/lib/middleware/auth.middleware.ts[0m:[93m213[0m:[93m11[0m - [91merror[0m[90m ts(4111): [0mProperty 'user' comes from an index signature, so it must be accessed with ['user'].

[7m213[0m   context.user = data.user as AuthUser
[7m   [0m [91m          ~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m55[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m55[0m           context.request.url,
[7m  [0m [91m                  ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m46[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m46[0m         path: new URL(context.request.url).pathname,
[7m  [0m [91m                              ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m45[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m45[0m         method: context.request.method,
[7m  [0m [91m                        ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m44[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m44[0m         userAgent: context.request.headers.get('user-agent') || 'unknown',
[7m  [0m [91m                           ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m42[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m42[0m           context.request.headers.get('x-real-ip') ||
[7m  [0m [91m                  ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m41[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m41[0m           context.request.headers.get('x-forwarded-for') ||
[7m  [0m [91m                  ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m37[0m:[93m38[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type 'APIContextWithUser'.

[7m37[0m       createResource(new URL(context.request.url).pathname, 'route'),
[7m  [0m [91m                                     ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m31[0m:[93m45[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type 'APIContextWithUser'.

[7m31[0m   const user = await getCurrentUser(context.cookies)
[7m  [0m [91m                                            ~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m7[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../audit/log"' has no exported member 'createResourceAuditLog'.

[7m7[0m import { createResourceAuditLog } from '../audit/log'
[7m [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/auth.middleware.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIContext'.

[7m2[0m import type { APIContext } from 'astro'
[7m [0m [91m              ~~~~~~~~~~[0m

[96msrc/lib/middleware/csp.ts[0m:[93m2[0m:[93m27[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'MiddlewareNext'.

[7m2[0m import type { APIContext, MiddlewareNext } from 'astro'
[7m [0m [91m                          ~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/csp.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIContext'.

[7m2[0m import type { APIContext, MiddlewareNext } from 'astro'
[7m [0m [91m              ~~~~~~~~~~[0m

[96msrc/lib/middleware/csrf.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroCookies'.

[7m1[0m import type { AstroCookies } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~[0m

[96msrc/lib/middleware/enhanced-rate-limit.ts[0m:[93m71[0m:[93m21[0m - [91merror[0m[90m ts(2551): [0mProperty 'setex' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'. Did you mean 'set'?
  Property 'setex' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m71[0m         await redis.setex(key, Math.ceil(effectiveWindowMs / 1000), '1')
[7m  [0m [91m                    ~~~~~[0m
[96msrc/lib/middleware/enhanced-rate-limit.ts[0m:[93m62[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'multi' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'multi' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m62[0m       const multi = redis.multi()
[7m  [0m [91m                          ~~~~~[0m

[96msrc/lib/middleware/index.ts[0m:[93m15[0m:[93m3[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'contentTypeMiddleware'.

[7m15[0m   contentTypeMiddleware,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m14[0m:[93m3[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'securityHeadersMiddleware'.

[7m14[0m   securityHeadersMiddleware,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'csrfMiddleware'.

[7m13[0m   csrfMiddleware,
[7m  [0m [91m  ~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m12[0m:[93m3[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'corsMiddleware'.

[7m12[0m   corsMiddleware,
[7m  [0m [91m  ~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m11[0m:[93m3[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'loggingMiddleware'.

[7m11[0m   loggingMiddleware,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m10[0m:[93m35[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'sequence'.

[7m10[0m export const middlewareSequence = sequence(
[7m  [0m [91m                                  ~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m1[0m:[93m46[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'MiddlewareNext'.

[7m1[0m import type { APIContext, MiddlewareHandler, MiddlewareNext } from 'astro'
[7m [0m [91m                                             ~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m1[0m:[93m27[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'MiddlewareHandler'.

[7m1[0m import type { APIContext, MiddlewareHandler, MiddlewareNext } from 'astro'
[7m [0m [91m                          ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/index.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIContext'.

[7m1[0m import type { APIContext, MiddlewareHandler, MiddlewareNext } from 'astro'
[7m [0m [91m              ~~~~~~~~~~[0m

[96msrc/lib/middleware/logging.ts[0m:[93m14[0m:[93m18[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m14[0m   const logger = getLogger(requestId)
[7m  [0m [91m                 ~~~~~~~~~[0m

[96msrc/lib/middleware/rate-limit.ts[0m:[93m155[0m:[93m9[0m - [91merror[0m[90m ts(18048): [0m'config' is possibly 'undefined'.

[7m155[0m         config.windowMs,
[7m   [0m [91m        ~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m154[0m:[93m9[0m - [91merror[0m[90m ts(18048): [0m'config' is possibly 'undefined'.

[7m154[0m         config.limits,
[7m   [0m [91m        ~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m87[0m:[93m42[0m - [91merror[0m[90m ts(4111): [0mProperty 'anonymous' comes from an index signature, so it must be accessed with ['anonymous'].

[7m87[0m     const limit = limits[role] || limits.anonymous || 10
[7m  [0m [91m                                         ~~~~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m80[0m:[93m24[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m80[0m     windowMs: number = rateLimitConfigs[2].windowMs,
[7m  [0m [91m                       ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m79[0m:[93m38[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m79[0m     limits: Record<string, number> = rateLimitConfigs[2].limits,
[7m  [0m [91m                                     ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m58[0m:[93m20[0m - [91merror[0m[90m ts(6133): [0m'userLimits' is declared but its value is never read.

[7m58[0m   private readonly userLimits: Record<string, number>
[7m  [0m [91m                   ~~~~~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m57[0m:[93m20[0m - [91merror[0m[90m ts(6133): [0m'windowMs' is declared but its value is never read.

[7m57[0m   private readonly windowMs: number
[7m  [0m [91m                   ~~~~~~~~[0m
[96msrc/lib/middleware/rate-limit.ts[0m:[93m56[0m:[93m20[0m - [91merror[0m[90m ts(6133): [0m'defaultLimit' is declared but its value is never read.

[7m56[0m   private readonly defaultLimit: number
[7m  [0m [91m                   ~~~~~~~~~~~~[0m

[96msrc/lib/middleware/rate-limiter.ts[0m:[93m31[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m31[0m       ? ip.split(',')[0].trim()
[7m  [0m [91m        ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/middleware/rate-limiter.ts[0m:[93m1[0m:[93m54[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'next' or its corresponding type declarations.

[7m1[0m import type { NextApiRequest, NextApiResponse } from 'next'
[7m [0m [91m                                                     ~~~~~~[0m
[96msrc/lib/middleware/rate-limiter.ts[0m:[93m17[0m:[93m17[0m - [93mwarning[0m[90m ts(80006): [0mThis may be converted to an async function.

[7m17[0m export function rateLimiter(
[7m  [0m [93m                ~~~~~~~~~~~[0m

[96msrc/lib/monitoring/azure-insights.ts[0m:[93m19[0m:[93m35[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../config/azure.config' or its corresponding type declarations.

[7m19[0m       const module = await import('../../config/azure.config')
[7m  [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/monitoring/config.ts[0m:[93m56[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'GRAFANA_ORG_ID' comes from an index signature, so it must be accessed with ['GRAFANA_ORG_ID'].

[7m56[0m         orgId: process.env.GRAFANA_ORG_ID || defaultConfig.grafana.orgId,
[7m  [0m [91m                           ~~~~~~~~~~~~~~[0m
[96msrc/lib/monitoring/config.ts[0m:[93m55[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'GRAFANA_API_KEY' comes from an index signature, so it must be accessed with ['GRAFANA_API_KEY'].

[7m55[0m         apiKey: process.env.GRAFANA_API_KEY || defaultConfig.grafana.apiKey,
[7m  [0m [91m                            ~~~~~~~~~~~~~~~[0m

[96msrc/lib/monitoring/service.ts[0m:[93m214[0m:[93m31[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(resource: PerformanceResourceTiming) => void' is not assignable to parameter of type '(value: PerformanceEntry, index: number, array: PerformanceEntry[]) => void'.
  Types of parameters 'resource' and 'value' are incompatible.

[7m214[0m     metrics.resources.forEach((resource: PerformanceResourceTiming) => {
[7m   [0m [91m                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/monitoring/service.ts[0m:[93m142[0m:[93m36[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'PerformanceEntry | undefined' is not assignable to parameter of type 'PerformanceEntry'.
  Type 'undefined' is not assignable to type 'PerformanceEntry'.

[7m142[0m         this.reportWebVital('LCP', lastEntry)
[7m   [0m [91m                                   ~~~~~~~~~[0m

[96msrc/lib/monitoring/setup.ts[0m:[93m26[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'redis' is declared but its value is never read.

[7m26[0m   private redis: RedisService
[7m  [0m [91m          ~~~~~[0m
[96msrc/lib/monitoring/setup.ts[0m:[93m3[0m:[93m34[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/analytics/service' or its corresponding type declarations.

[7m3[0m import { AnalyticsService } from '@/lib/analytics/service'
[7m [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/providers/ErrorBoundary.tsx[0m:[93m43[0m:[93m3[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<Props, State, any>'.

[7m43[0m   render() {
[7m  [0m [91m  ~~~~~~[0m
[96msrc/lib/providers/ErrorBoundary.tsx[0m:[93m32[0m:[93m3[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<Props, State, any>'.

[7m32[0m   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/providers/SecurityProvider.tsx[0m:[93m132[0m:[93m26[0m - [91merror[0m[90m ts(2554): [0mExpected 1 arguments, but got 0.

[7m132[0m         await fheService.initialize()
[7m   [0m [91m                         ~~~~~~~~~~[0m
[96msrc/lib/providers/SecurityProvider.tsx[0m:[93m74[0m:[93m30[0m - [91merror[0m[90m ts(2554): [0mExpected 1 arguments, but got 0.

[7m74[0m             await fheService.initialize()
[7m  [0m [91m                             ~~~~~~~~~~[0m

[96msrc/lib/providers/SharedProviders.tsx[0m:[93m7[0m:[93m38[0m - [91merror[0m[90m ts(2307): [0mCannot find module './NotificationProvider' or its corresponding type declarations.

[7m7[0m import { NotificationProvider } from './NotificationProvider'
[7m [0m [91m                                     ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/providers/SharedProviders.tsx[0m:[93m4[0m:[93m30[0m - [91merror[0m[90m ts(2307): [0mCannot find module './AuthProvider' or its corresponding type declarations.

[7m4[0m import { AuthProvider } from './AuthProvider'
[7m [0m [91m                             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/providers/SharedProviders.tsx[0m:[93m3[0m:[93m35[0m - [91merror[0m[90m ts(2307): [0mCannot find module './AnalyticsProvider' or its corresponding type declarations.

[7m3[0m import { AnalyticsProvider } from './AnalyticsProvider'
[7m [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/providers/StatePersistenceProvider.tsx[0m:[93m131[0m:[93m5[0m - [91merror[0m[90m ts(2454): [0mVariable 'refreshStats' is used before being assigned.

[7m131[0m     refreshStats,
[7m   [0m [91m    ~~~~~~~~~~~~[0m
[96msrc/lib/providers/StatePersistenceProvider.tsx[0m:[93m131[0m:[93m5[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'refreshStats' used before its declaration.

[7m131[0m     refreshStats,
[7m   [0m [91m    ~~~~~~~~~~~~[0m
[96msrc/lib/providers/StatePersistenceProvider.tsx[0m:[93m130[0m:[93m5[0m - [91merror[0m[90m ts(2454): [0mVariable 'createBackup' is used before being assigned.

[7m130[0m     createBackup,
[7m   [0m [91m    ~~~~~~~~~~~~[0m
[96msrc/lib/providers/StatePersistenceProvider.tsx[0m:[93m130[0m:[93m5[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'createBackup' used before its declaration.

[7m130[0m     createBackup,
[7m   [0m [91m    ~~~~~~~~~~~~[0m

[96msrc/lib/providers/__tests__/providers.test.tsx[0m:[93m20[0m:[93m11[0m - [91merror[0m[90m ts(2339): [0mProperty 'securityLevel' does not exist on type 'SecurityContextValue'.

[7m20[0m   const { securityLevel, setSecurityLevel } = useSecurity()
[7m  [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/providers/__tests__/providers.test.tsx[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m2[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/repositories/emotionsRepository.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2724): [0m'"../ai/emotions/dimensionalTypes"' has no exported member named 'DimensionalEmotionMap'. Did you mean 'DimensionalEmotion'?

[7m1[0m import type { DimensionalEmotionMap } from '../ai/emotions/dimensionalTypes'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/alert-system.ts[0m:[93m393[0m:[93m40[0m - [91merror[0m[90m ts(4111): [0mProperty 'reviewNotes' comes from an index signature, so it must be accessed with ['reviewNotes'].

[7m393[0m           reviewNotes: metadataObject?.reviewNotes as string | undefined,
[7m   [0m [91m                                       ~~~~~~~~~~~[0m
[96msrc/lib/security/alert-system.ts[0m:[93m392[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'reviewedBy' comes from an index signature, so it must be accessed with ['reviewedBy'].

[7m392[0m           reviewedBy: metadataObject?.reviewedBy as string | undefined,
[7m   [0m [91m                                      ~~~~~~~~~~[0m
[96msrc/lib/security/alert-system.ts[0m:[93m391[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m391[0m             (metadataObject?.status as AlertDetails['status']) || 'pending',
[7m   [0m [91m                             ~~~~~~[0m
[96msrc/lib/security/alert-system.ts[0m:[93m389[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'requiresHumanReview' comes from an index signature, so it must be accessed with ['requiresHumanReview'].

[7m389[0m             (metadataObject?.requiresHumanReview as boolean) ?? true,
[7m   [0m [91m                             ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/alert-system.ts[0m:[93m383[0m:[93m36[0m - [91merror[0m[90m ts(4111): [0mProperty 'source' comes from an index signature, so it must be accessed with ['source'].

[7m383[0m           source: (metadataObject?.source as string) || 'unknown',
[7m   [0m [91m                                   ~~~~~~[0m

[96msrc/lib/security/anonymizationPipeline.ts[0m:[93m121[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '"" | T' is not assignable to type 'T'.
  '"" | T' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'string | Record<string, unknown>'.

[7m121[0m       anonymized: typeof input === 'string' ? '' : ({} as T),
[7m   [0m [91m      ~~~~~~~~~~[0m
[96msrc/lib/security/anonymizationPipeline.ts[0m:[93m11[0m:[93m10[0m - [91merror[0m[90m ts(2459): [0mModule '"./phiDetection"' declares 'Anonymizer' locally, but it is not exported.

[7m11[0m import { Anonymizer as PHIAnonymizer } from './phiDetection'
[7m  [0m [91m         ~~~~~~~~~~[0m

[96msrc/lib/security/breach-notification.ts[0m:[93m483[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ procedures: { content: string; lastUpdated: number; }; guidelines: { title: string; content: string; lastUpdated: number; }; templates: { title: string; content: string; lastUpdated: number; }; }' is not assignable to type 'TrainingMaterials'.
  Types of property 'procedures' are incompatible.

[7m483[0m     return materials
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/security/breach-notification.ts[0m:[93m416[0m:[93m17[0m - [91merror[0m[90m ts(2554): [0mExpected 3 arguments, but got 2.

[7m416[0m     await redis.hset(monthKey, {
[7m   [0m [91m                ~~~~[0m
[96msrc/lib/security/breach-notification.ts[0m:[93m339[0m:[93m46[0m - [91merror[0m[90m ts(7006): [0mParameter 'b' implicitly has an 'any' type.

[7m339[0m     return breaches.filter(Boolean).sort((a, b) => b.timestamp - a.timestamp)
[7m   [0m [91m                                             ~[0m
[96msrc/lib/security/breach-notification.ts[0m:[93m339[0m:[93m43[0m - [91merror[0m[90m ts(7006): [0mParameter 'a' implicitly has an 'any' type.

[7m339[0m     return breaches.filter(Boolean).sort((a, b) => b.timestamp - a.timestamp)
[7m   [0m [91m                                          ~[0m
[96msrc/lib/security/breach-notification.ts[0m:[93m331[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m331[0m     const keys = await redis.keys(`${BREACH_KEY_PREFIX}*`)
[7m   [0m [91m                             ~~~~[0m

[96msrc/lib/security/dlp-integration.ts[0m:[93m9[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroGlobal'.

[7m9[0m import type { AstroGlobal } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~[0m
[96msrc/lib/security/dlp-integration.ts[0m:[93m8[0m:[93m54[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'next' or its corresponding type declarations.

[7m8[0m import type { NextApiRequest, NextApiResponse } from 'next'
[7m [0m [91m                                                     ~~~~~~[0m

[96msrc/lib/security/index.ts[0m:[93m209[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'SIMULATION_KEY' comes from an index signature, so it must be accessed with ['SIMULATION_KEY'].

[7m209[0m     process.env.SIMULATION_KEY ||
[7m   [0m [91m                ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/index.ts[0m:[93m188[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'SIMULATION_KEY' comes from an index signature, so it must be accessed with ['SIMULATION_KEY'].

[7m188[0m     process.env.SIMULATION_KEY ||
[7m   [0m [91m                ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/index.ts[0m:[93m4[0m:[93m10[0m - [91merror[0m[90m ts(2724): [0m'"../logging/build-safe-logger"' has no exported member named 'securityLogger'. Did you mean 'getSecurityLogger'?

[7m4[0m import { securityLogger } from '../logging/build-safe-logger'
[7m [0m [91m         ~~~~~~~~~~~~~~[0m

[96msrc/lib/security/monitoring.ts[0m:[93m198[0m:[93m17[0m - [91merror[0m[90m ts(6133): [0m'lockAccount' is declared but its value is never read.

[7m198[0m   private async lockAccount(
[7m   [0m [91m                ~~~~~~~~~~~[0m

[96msrc/lib/security/token.encryption.ts[0m:[93m29[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'TOKEN_ENCRYPTION_SALT' comes from an index signature, so it must be accessed with ['TOKEN_ENCRYPTION_SALT'].

[7m29[0m       salt: process.env.TOKEN_ENCRYPTION_SALT || '',
[7m  [0m [91m                        ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/token.encryption.ts[0m:[93m105[0m:[93m46[0m - [93mwarning[0m[90m ts(6387): [0mThe signature '(start?: number | undefined, end?: number | undefined): Buffer<ArrayBuffer>' of 'encryptedData.slice' is deprecated.

[7m105[0m       const encryptedContent = encryptedData.slice(0, -16)
[7m   [0m [93m                                             ~~~~~[0m
[96msrc/lib/security/token.encryption.ts[0m:[93m104[0m:[93m37[0m - [93mwarning[0m[90m ts(6387): [0mThe signature '(start?: number | undefined, end?: number | undefined): Buffer<ArrayBuffer>' of 'encryptedData.slice' is deprecated.

[7m104[0m       const authTag = encryptedData.slice(-16)
[7m   [0m [93m                                    ~~~~~[0m

[96msrc/lib/security/__tests__/breach-notification.integration.test.ts[0m:[93m85[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m85[0m     vi.mocked(redis.keys).mockResolvedValue(['breach:test_breach_id'])
[7m  [0m [91m                    ~~~~[0m

[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m299[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m299[0m       ;(redis.keys as any).mockResolvedValue(['breach:valid', 'breach:invalid'])
[7m   [0m [91m              ~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m286[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m286[0m       ;(redis.keys as any).mockRejectedValue(new Error('Redis error'))
[7m   [0m [91m              ~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m270[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m270[0m       ;(redis.keys as any).mockResolvedValue([
[7m   [0m [91m              ~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m201[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'SECURITY_STAKEHOLDERS' comes from an index signature, so it must be accessed with ['SECURITY_STAKEHOLDERS'].

[7m201[0m       process.env.SECURITY_STAKEHOLDERS = ''
[7m   [0m [91m                  ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m185[0m:[93m40[0m - [91merror[0m[90m ts(4111): [0mProperty 'SECURITY_STAKEHOLDERS' comes from an index signature, so it must be accessed with ['SECURITY_STAKEHOLDERS'].

[7m185[0m       const stakeholders = process.env.SECURITY_STAKEHOLDERS!.split(',')
[7m   [0m [91m                                       ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m175[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'HHS_NOTIFICATION_EMAIL' comes from an index signature, so it must be accessed with ['HHS_NOTIFICATION_EMAIL'].

[7m175[0m           to: process.env.HHS_NOTIFICATION_EMAIL,
[7m   [0m [91m                          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m158[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'HHS_NOTIFICATION_EMAIL' comes from an index signature, so it must be accessed with ['HHS_NOTIFICATION_EMAIL'].

[7m158[0m           to: process.env.HHS_NOTIFICATION_EMAIL,
[7m   [0m [91m                          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m128[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'getUserById' does not exist on type 'Auth'.

[7m128[0m       ;(auth.getUserById as any).mockResolvedValue({ id: 'user1' }) // User without email
[7m   [0m [91m             ~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m114[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'getUserById' does not exist on type 'Auth'.

[7m114[0m       expect(auth.getUserById).toHaveBeenCalledTimes(
[7m   [0m [91m                  ~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m74[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'SECURITY_STAKEHOLDERS' comes from an index signature, so it must be accessed with ['SECURITY_STAKEHOLDERS'].

[7m74[0m     process.env.SECURITY_STAKEHOLDERS =
[7m  [0m [91m                ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m73[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'HHS_NOTIFICATION_EMAIL' comes from an index signature, so it must be accessed with ['HHS_NOTIFICATION_EMAIL'].

[7m73[0m     process.env.HHS_NOTIFICATION_EMAIL = 'hhs@example.com'
[7m  [0m [91m                ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m72[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'ORGANIZATION_ADDRESS' comes from an index signature, so it must be accessed with ['ORGANIZATION_ADDRESS'].

[7m72[0m     process.env.ORGANIZATION_ADDRESS = '123 Test St'
[7m  [0m [91m                ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m71[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'SECURITY_CONTACT' comes from an index signature, so it must be accessed with ['SECURITY_CONTACT'].

[7m71[0m     process.env.SECURITY_CONTACT = 'security@test.org'
[7m  [0m [91m                ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m70[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'ORGANIZATION_NAME' comes from an index signature, so it must be accessed with ['ORGANIZATION_NAME'].

[7m70[0m     process.env.ORGANIZATION_NAME = 'Test Org'
[7m  [0m [91m                ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m65[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'getUserById' does not exist on type 'Auth'.

[7m65[0m     ;(auth.getUserById as any).mockResolvedValue(mockUser)
[7m  [0m [91m           ~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m64[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'keys' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m64[0m     ;(redis.keys as any).mockResolvedValue([])
[7m  [0m [91m            ~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m6[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../breach-notification"' has no exported member 'BreachNotificationSystem'.

[7m6[0m import { BreachNotificationSystem } from '../breach-notification'
[7m [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/breach-notification.test.ts[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/fhe"' has no exported member 'FHE'.

[7m3[0m import { FHE } from '@/lib/fhe'
[7m [0m [91m         ~~~[0m

[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m121[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m121[0m       expect(dlpService['rules'][0].action).toBe(DLPAction.BLOCK)
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m120[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m120[0m       expect(dlpService['rules'][0].name).toBe('Updated Test Rule')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m36[0m:[93m54[0m - [91merror[0m[90m ts(7006): [0mParameter 'metadata' implicitly has an 'any' type.

[7m36[0m       .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                                                     ~~~~~~~~[0m
[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m36[0m:[93m44[0m - [91merror[0m[90m ts(7006): [0mParameter 'resource' implicitly has an 'any' type.

[7m36[0m       .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                                           ~~~~~~~~[0m
[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m36[0m:[93m36[0m - [91merror[0m[90m ts(7006): [0mParameter 'userId' implicitly has an 'any' type.

[7m36[0m       .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                                   ~~~~~~[0m
[96msrc/lib/security/__tests__/dlp.test.ts[0m:[93m36[0m:[93m28[0m - [91merror[0m[90m ts(7006): [0mParameter 'action' implicitly has an 'any' type.

[7m36[0m       .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                           ~~~~~~[0m

[96msrc/lib/security/__tests__/token.encryption.test.ts[0m:[93m22[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 'callback' implicitly has an 'any' type.

[7m22[0m   scrypt: vi.fn((_p, _s, _k, callback) =>
[7m  [0m [91m                             ~~~~~~~~[0m
[96msrc/lib/security/__tests__/token.encryption.test.ts[0m:[93m22[0m:[93m26[0m - [91merror[0m[90m ts(7006): [0mParameter '_k' implicitly has an 'any' type.

[7m22[0m   scrypt: vi.fn((_p, _s, _k, callback) =>
[7m  [0m [91m                         ~~[0m
[96msrc/lib/security/__tests__/token.encryption.test.ts[0m:[93m22[0m:[93m22[0m - [91merror[0m[90m ts(7006): [0mParameter '_s' implicitly has an 'any' type.

[7m22[0m   scrypt: vi.fn((_p, _s, _k, callback) =>
[7m  [0m [91m                     ~~[0m
[96msrc/lib/security/__tests__/token.encryption.test.ts[0m:[93m22[0m:[93m18[0m - [91merror[0m[90m ts(7006): [0mParameter '_p' implicitly has an 'any' type.

[7m22[0m   scrypt: vi.fn((_p, _s, _k, callback) =>
[7m  [0m [91m                 ~~[0m

[96msrc/lib/security/baa/BaaDocumentGenerator.ts[0m:[93m52[0m:[93m5[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m52[0m     document.auditTrail[0].documentId = document.id
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaDocumentGenerator.ts[0m:[93m30[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'BaaStatus'.

[7m30[0m       status: BaaStatus.DRAFT,
[7m  [0m [91m              ~~~~~~~~~[0m

[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m529[0m:[93m57[0m - [91merror[0m[90m ts(2322): [0mType '"TELEMEDICINE"' is not assignable to type 'BusinessAssociateType'.

[7m529[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                                        ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m529[0m:[93m39[0m - [91merror[0m[90m ts(2322): [0mType '"DATA_ANALYTICS"' is not assignable to type 'BusinessAssociateType'.

[7m529[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m529[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '"CLOUD_SERVICE"' is not assignable to type 'BusinessAssociateType'.

[7m529[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m529[0m:[93m8[0m - [91merror[0m[90m ts(2322): [0mType '"EHR_VENDOR"' is not assignable to type 'BusinessAssociateType'.

[7m529[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m       ~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m503[0m:[93m28[0m - [91merror[0m[90m ts(18048): [0m'template.tags' is possibly 'undefined'.

[7m503[0m       if (criteria.tag && !template.tags.includes(criteria.tag)) {
[7m   [0m [91m                           ~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m382[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ key?: string | undefined; label?: string | undefined; description?: string | undefined; required?: boolean | undefined; defaultValue?: string; }' is not assignable to type 'BaaPlaceholder'.
  Types of property 'key' are incompatible.

[7m382[0m     updatedPlaceholders[placeholderIndex] = {
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/BaaTemplateService.ts[0m:[93m219[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ id?: string | undefined; title?: string | undefined; description?: string; content?: string | undefined; required?: boolean | undefined; order?: number | undefined; }' is not assignable to type 'BaaTemplateSection'.
  Types of property 'id' are incompatible.

[7m219[0m     updatedSections[sectionIndex] = {
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m562[0m:[93m30[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ SELF_ATTESTATION: number; DOCUMENTATION_REVIEW: number; THIRD_PARTY_AUDIT: number; ONSITE_ASSESSMENT: number; }' to type 'Record<VerificationMethod, number>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ SELF_ATTESTATION: number; DOCUMENTATION_REVIEW: number; THIRD_PARTY_AUDIT: number; ONSITE_ASSESSMENT: number; }' is missing the following properties from type 'Record<VerificationMethod, number>': self_assessment, documentation_review, third_party_audit, certification_validation, and 2 more.

[7m562[0m       verificationsByMethod: {
[7m   [0m [91m                             ~[0m
[7m563[0m         SELF_ATTESTATION: 0,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m566[0m         ONSITE_ASSESSMENT: 0,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m567[0m       } as Record<VerificationMethod, number>,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m557[0m:[93m29[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ low: number; medium: number; high: number; }' to type 'Record<ComplianceLevel, number>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ low: number; medium: number; high: number; }' is missing the following properties from type 'Record<ComplianceLevel, number>': not_verified, self_attested, third_party_verified, hipaa_certified, non_compliant

[7m557[0m       verificationsByLevel: {
[7m   [0m [91m                            ~[0m
[7m558[0m         low: 0,
[7m   [0m [91m~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m560[0m         high: 0,
[7m   [0m [91m~~~~~~~~~~~~~~~~[0m
[7m561[0m       } as Record<ComplianceLevel, number>,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m524[0m:[93m57[0m - [91merror[0m[90m ts(2322): [0mType '"TELEMEDICINE"' is not assignable to type 'BusinessAssociateType'.

[7m524[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                                        ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m524[0m:[93m39[0m - [91merror[0m[90m ts(2322): [0mType '"DATA_ANALYTICS"' is not assignable to type 'BusinessAssociateType'.

[7m524[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m524[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '"CLOUD_SERVICE"' is not assignable to type 'BusinessAssociateType'.

[7m524[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m524[0m:[93m8[0m - [91merror[0m[90m ts(2322): [0mType '"EHR_VENDOR"' is not assignable to type 'BusinessAssociateType'.

[7m524[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m       ~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m512[0m:[93m57[0m - [91merror[0m[90m ts(2322): [0mType '"TELEMEDICINE"' is not assignable to type 'BusinessAssociateType'.

[7m512[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                                        ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m512[0m:[93m39[0m - [91merror[0m[90m ts(2322): [0mType '"DATA_ANALYTICS"' is not assignable to type 'BusinessAssociateType'.

[7m512[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m512[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '"CLOUD_SERVICE"' is not assignable to type 'BusinessAssociateType'.

[7m512[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m                     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/baa/ComplianceVerificationService.ts[0m:[93m512[0m:[93m8[0m - [91merror[0m[90m ts(2322): [0mType '"EHR_VENDOR"' is not assignable to type 'BusinessAssociateType'.

[7m512[0m       ['EHR_VENDOR', 'CLOUD_SERVICE', 'DATA_ANALYTICS', 'TELEMEDICINE'],
[7m   [0m [91m       ~~~~~~~~~~~~[0m

[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m65[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'currentEnvironmentIndex' is declared but its value is never read.

[7m65[0m   private currentEnvironmentIndex = 0
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m64[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'isInitialized' is declared but its value is never read.

[7m64[0m   private isInitialized = false
[7m  [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m63[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'backupProvider' is declared but its value is never read.

[7m63[0m   private backupProvider: () => Promise<BackupMetadata[]>
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m62[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'scheduledJobs' is declared but its value is never read.

[7m62[0m   private scheduledJobs: Map<string, cron.ScheduledTask> = new Map()
[7m  [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m61[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'recoveryManager' is declared but its value is never read.

[7m61[0m   private recoveryManager: RecoveryTestingManager
[7m  [0m [91m          ~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/automated-recovery.ts[0m:[93m60[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'config' is declared but its value is never read.

[7m60[0m   private config: AutomatedRecoveryConfig
[7m  [0m [91m          ~~~~~~[0m

[96msrc/lib/security/backup/index.ts[0m:[93m782[0m:[93m13[0m - [91merror[0m[90m ts(2488): [0mType '[StorageLocation, StorageProvider] | undefined' must have a '[Symbol.iterator]()' method that returns an iterator.

[7m782[0m       const [location, provider] = storageEntries[i]
[7m   [0m [91m            ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m604[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'iv' is declared but its value is never read.

[7m604[0m     iv: Uint8Array,
[7m   [0m [91m    ~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m591[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'calculateRetentionDate' is declared but its value is never read.

[7m591[0m   private calculateRetentionDate(type: BackupType): string {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m211[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'recoveryTestingManager' is declared but its value is never read.

[7m211[0m   private recoveryTestingManager?: RecoveryTestingManager
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m884[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m884[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m885[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m891[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m892[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m870[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m870[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m871[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m878[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m879[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m759[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m759[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m760[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m766[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m767[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m740[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m740[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m741[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m749[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m750[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m644[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m644[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m645[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m653[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m654[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m534[0m:[93m9[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m534[0m       : await this.getRandomBytes(16)
[7m   [0m [93m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m490[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m490[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m491[0m         AuditEventType.CREATE,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m500[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m501[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/index.ts[0m:[93m443[0m:[93m11[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m443[0m         ? await dlpService.scanContent(new TextDecoder().decode(data), {
[7m   [0m [93m          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m444[0m             userId: 'system',
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m446[0m             metadata: { mode: 'backup' },
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m447[0m           })
[7m   [0m [93m~~~~~~~~~~~~[0m

[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m209[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(tc: TestCaseConfig) => void' is not assignable to parameter of type '(value: { name: string; description: string; backupType: string; dataVerification: { type: "content" | "query" | "hash"; target: string; expected?: string | number | boolean | undefined; }[]; }, index: number, array: { ...; }[]) => void'.
  Types of parameters 'tc' and 'value' are incompatible.

[7m209[0m         config.testCases.forEach((tc: TestCaseConfig) => {
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m164[0m:[93m37[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(tc: TestCaseConfig) => void' is not assignable to parameter of type '(value: { name: string; description: string; backupType: string; dataVerification: { type: "content" | "query" | "hash"; target: string; expected?: string | number | boolean | undefined; }[]; }, index: number, array: { ...; }[]) => void'.
  Types of parameters 'tc' and 'value' are incompatible.

[7m164[0m       this.config.testCases.forEach((tc: TestCaseConfig) => {
[7m   [0m [91m                                    ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m450[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m450[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m451[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m459[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m460[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m417[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m417[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m418[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m430[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m431[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m345[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m345[0m       await logAuditEvent(
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~[0m
[7m346[0m         AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m353[0m         },
[7m   [0m [93m~~~~~~~~~~[0m
[7m354[0m       )
[7m   [0m [93m~~~~~~~[0m
[96msrc/lib/security/backup/recovery-testing.ts[0m:[93m320[0m:[93m5[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m320[0m     await logAuditEvent(
[7m   [0m [93m    ~~~~~~~~~~~~~~~~~~~~[0m
[7m321[0m       AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m329[0m       },
[7m   [0m [93m~~~~~~~~[0m
[7m330[0m     )
[7m   [0m [93m~~~~~[0m

[96msrc/lib/security/backup/storage-providers-wrapper.ts[0m:[93m101[0m:[93m18[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m101[0m   const logger = getLogger(prefix)
[7m   [0m [91m                 ~~~~~~~~~[0m

[96msrc/lib/security/backup/storage-providers.browser.ts[0m:[93m191[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'storeName' comes from an index signature, so it must be accessed with ['storeName'].

[7m191[0m     this.storeName = (config.storeName as string) || 'backups'
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers.browser.ts[0m:[93m190[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'dbName' comes from an index signature, so it must be accessed with ['dbName'].

[7m190[0m     this.dbName = (config.dbName as string) || 'backupStorage'
[7m   [0m [91m                          ~~~~~~[0m
[96msrc/lib/security/backup/storage-providers.browser.ts[0m:[93m111[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'prefix' comes from an index signature, so it must be accessed with ['prefix'].

[7m111[0m     this.prefix = (config.prefix as string) || 'backup-'
[7m   [0m [91m                          ~~~~~~[0m

[96msrc/lib/security/backup/storage-providers.ts[0m:[93m911[0m:[93m42[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@azure/storage-blob' or its corresponding type declarations.

[7m911[0m         const azureModule = await import('@azure/storage-blob')
[7m   [0m [91m                                         ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers.ts[0m:[93m723[0m:[93m40[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@google-cloud/storage' or its corresponding type declarations.

[7m723[0m         const gcsModule = await import('@google-cloud/storage')
[7m   [0m [91m                                       ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/backup/storage-providers/aws-s3.ts[0m:[93m87[0m:[93m22[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ [key: string]: string; } | undefined' to type 'S3Credentials' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ [key: string]: string; }' is missing the following properties from type 'S3Credentials': accessKeyId, secretAccessKey

[7m87[0m         credentials: this.config.credentials as S3Credentials,
[7m  [0m [91m                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/aws-s3.ts[0m:[93m86[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'S3' is not assignable to type 'S3Client'.
  The types returned by 'listObjects(...)' are incompatible between these types.

[7m86[0m       this.s3 = new S3({
[7m  [0m [91m      ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/aws-s3.ts[0m:[93m8[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"../backup-types"' has no exported member 'StorageProvider'.

[7m8[0m import type { StorageProvider, StorageProviderConfig } from '../backup-types'
[7m [0m [91m              ~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m210[0m:[93m20[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m210[0m       const file = this.bucket.file(key)
[7m   [0m [91m                   ~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m182[0m:[93m20[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m182[0m       const file = this.bucket.file(key)
[7m   [0m [91m                   ~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m145[0m:[93m20[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m145[0m       const file = this.bucket.file(key)
[7m   [0m [91m                   ~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m118[0m:[93m29[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m118[0m       const [files] = await this.bucket.getFiles(options)
[7m   [0m [91m                            ~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m84[0m:[93m21[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m84[0m       this.bucket = this.storage.bucket(this.bucketName);
[7m  [0m [91m                    ~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m75[0m:[93m40[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@google-cloud/storage' or its corresponding type declarations.

[7m75[0m       const { Storage } = await import('@google-cloud/storage');
[7m  [0m [91m                                       ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/google-cloud.ts[0m:[93m8[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"../backup-types"' has no exported member 'StorageProvider'.

[7m8[0m import type { StorageProvider, StorageProviderConfig } from '../backup-types'
[7m [0m [91m              ~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m174[0m:[93m13[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m174[0m       await this.fs.unlink(fullPath)
[7m   [0m [91m            ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m167[0m:[93m15[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m167[0m         await this.fs.access(fullPath)
[7m   [0m [91m              ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m163[0m:[93m24[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m163[0m       const fullPath = this.path.join(this.basePath, key)
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m147[0m:[93m26[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m147[0m       const data = await this.fs.readFile(fullPath)
[7m   [0m [91m                         ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m144[0m:[93m13[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m144[0m       await this.fs.access(fullPath)
[7m   [0m [91m            ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m141[0m:[93m24[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m141[0m       const fullPath = this.path.join(this.basePath, key)
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m127[0m:[93m13[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m127[0m       await this.fs.writeFile(fullPath, data)
[7m   [0m [91m            ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m124[0m:[93m13[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m124[0m       await this.fs.mkdir(dir, { recursive: true })
[7m   [0m [91m            ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m123[0m:[93m19[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m123[0m       const dir = this.path.dirname(fullPath)
[7m   [0m [91m                  ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m120[0m:[93m24[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m120[0m       const fullPath = this.path.join(this.basePath, key)
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m92[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m92[0m         this.path.relative(this.basePath, file),
[7m  [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m66[0m:[93m13[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m66[0m       await this.fs.mkdir(this.basePath, { recursive: true });
[7m  [0m [91m            ~~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m51[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ (path: PathLike, options: MakeDirectoryOptions & { recursive: true; }): Promise<string | undefined>; (path: PathLike, options?: Mode | ... 2 more ... | undefined): Promise<...>; (path: PathLike, options?: MakeDirectoryOptions | ... 2 more ... | undefined): Promise<...>; }' is not assignable to type '(path: string, options?: { recursive?: boolean | undefined; } | undefined) => Promise<void>'.
  Types of parameters 'options' and 'options' are incompatible.

[7m51[0m         mkdir: fsModule.mkdir,
[7m  [0m [91m        ~~~~~[0m
[96msrc/lib/security/backup/storage-providers/local-fs.ts[0m:[93m37[0m:[93m23[0m - [91merror[0m[90m ts(6138): [0mProperty 'config' is declared but its value is never read.

[7m37[0m   constructor(private config: StorageProviderConfig) {
[7m  [0m [91m                      ~~~~~~[0m

[96msrc/lib/security/backup/storage-providers/memory.ts[0m:[93m14[0m:[93m23[0m - [91merror[0m[90m ts(6138): [0mProperty 'config' is declared but its value is never read.

[7m14[0m   constructor(private config: StorageProviderConfig) {}
[7m  [0m [91m                      ~~~~~~[0m
[96msrc/lib/security/backup/storage-providers/memory.ts[0m:[93m8[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"../backup-types"' has no exported member 'StorageProvider'.

[7m8[0m import type { StorageProvider, StorageProviderConfig } from '../backup-types'
[7m [0m [91m              ~~~~~~~~~~~~~~~[0m

[96msrc/lib/security/consent/ConsentService.ts[0m:[93m610[0m:[93m55[0m - [91merror[0m[90m ts(2339): [0mProperty 'consent_type_id' does not exist on type '{ consent_type_id: any; consent_types: { name: any; }[]; }[]'.

[7m610[0m           consentTypeId: consentData.consent_versions.consent_type_id,
[7m   [0m [91m                                                      ~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/consent/ConsentService.ts[0m:[93m601[0m:[93m56[0m - [91merror[0m[90m ts(2339): [0mProperty 'consent_types' does not exist on type '{ consent_type_id: any; consent_types: { name: any; }[]; }[]'.

[7m601[0m       const consentType = consentData.consent_versions.consent_types.name
[7m   [0m [91m                                                       ~~~~~~~~~~~~~[0m

[96msrc/lib/security/pii/index.ts[0m:[93m410[0m:[93m54[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'timestamp'.

[7m410[0m         metadata: { operation: FHEOperation.ANALYZE, timestamp: Date.now() },
[7m   [0m [91m                                                     ~~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m51[0m - [91merror[0m[90m ts(2454): [0mVariable 'types' is used before being assigned.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                                  ~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m51[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'types' used before its declaration.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                                  ~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m46[0m - [91merror[0m[90m ts(2695): [0mLeft side of comma operator is unused and has no side effects.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                             ~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m34[0m - [91merror[0m[90m ts(2454): [0mVariable 'confidence' is used before being assigned.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                 ~~~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m34[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'confidence' used before its declaration.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                 ~~~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m25[0m - [91merror[0m[90m ts(2695): [0mLeft side of comma operator is unused and has no side effects.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                        ~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m392[0m:[93m31[0m - [91merror[0m[90m ts(2352): [0mConversion of type 'RealFHEService' to type 'FHEService' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Property 'processEncrypted' is missing in type 'RealFHEService' but required in type 'FHEService'.

[7m392[0m       const fheServiceTyped = fheService as FHEService;
[7m   [0m [91m                              ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m410[0m:[93m21[0m - [93mwarning[0m[90m ts(7028): [0mUnused label.

[7m410[0m         metadata: { operation: FHEOperation.ANALYZE, timestamp: Date.now() },
[7m   [0m [93m                    ~~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m410[0m:[93m9[0m - [93mwarning[0m[90m ts(7028): [0mUnused label.

[7m410[0m         metadata: { operation: FHEOperation.ANALYZE, timestamp: Date.now() },
[7m   [0m [93m        ~~~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m17[0m - [93mwarning[0m[90m ts(7028): [0mUnused label.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [93m                ~~~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m9[0m - [93mwarning[0m[90m ts(7028): [0mUnused label.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [93m        ~~~~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m410[0m:[93m77[0m - [91merror[0m[90m ts(1128): [0mDeclaration or statement expected.

[7m410[0m         metadata: { operation: FHEOperation.ANALYZE, timestamp: Date.now() },
[7m   [0m [91m                                                                            ~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m410[0m:[93m63[0m - [91merror[0m[90m ts(1005): [0m';' expected.

[7m410[0m         metadata: { operation: FHEOperation.ANALYZE, timestamp: Date.now() },
[7m   [0m [91m                                                              ~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m62[0m - [91merror[0m[90m ts(1128): [0mDeclaration or statement expected.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                                             ~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m56[0m - [91merror[0m[90m ts(1005): [0m';' expected.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                                       ~[0m
[96msrc/lib/security/pii/index.ts[0m:[93m409[0m:[93m44[0m - [91merror[0m[90m ts(1005): [0m';' expected.

[7m409[0m         data: { hasPII: 'false', confidence: '0', types: '' },
[7m   [0m [91m                                           ~[0m

[96msrc/lib/security/pii/middleware.ts[0m:[93m129[0m:[93m50[0m - [91merror[0m[90m ts(6133): [0m'context' is declared but its value is never read.

[7m129[0m export const onRequest = defineMiddleware(async (context: APIContext, next) => {
[7m   [0m [91m                                                 ~~~~~~~[0m
[96msrc/lib/security/pii/middleware.ts[0m:[93m17[0m:[93m30[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'next/server' or its corresponding type declarations.

[7m17[0m import { NextResponse } from 'next/server'
[7m  [0m [91m                             ~~~~~~~~~~~~~[0m
[96msrc/lib/security/pii/middleware.ts[0m:[93m15[0m:[93m34[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'next/server' or its corresponding type declarations.

[7m15[0m import type { NextRequest } from 'next/server'
[7m  [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/security/pii/middleware.ts[0m:[93m12[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIContext'.

[7m12[0m import type { APIContext } from 'astro'
[7m  [0m [91m              ~~~~~~~~~~[0m

[96msrc/lib/security/pii/register.ts[0m:[93m93[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m93[0m   if (process.env.NODE_ENV === 'test') {
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/lib/security/pii/register.ts[0m:[93m86[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'HIPAA_COMPLIANCE_MODE' comes from an index signature, so it must be accessed with ['HIPAA_COMPLIANCE_MODE'].

[7m86[0m       blockRequests: process.env.HIPAA_COMPLIANCE_MODE === 'true',
[7m  [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/security/pii/register.ts[0m:[93m82[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m82[0m   if (process.env.NODE_ENV === 'production') {
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/lib/security/pii/register.ts[0m:[93m71[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m71[0m   if (process.env.NODE_ENV === 'development') {
[7m  [0m [91m                  ~~~~~~~~[0m

[96msrc/lib/server-only/MentalLLaMAPythonBridge.ts[0m:[93m10[0m:[93m16[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'baseLogger'.

[7m10[0m const logger = baseLogger
[7m  [0m [91m               ~~~~~~~~~~[0m
[96msrc/lib/server-only/MentalLLaMAPythonBridge.ts[0m:[93m7[0m:[93m17[0m - [91merror[0m[90m ts(1484): [0m'ChildProcessWithoutNullStreams' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m7[0m import { spawn, ChildProcessWithoutNullStreams } from 'child_process'
[7m [0m [91m                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/server-only/MentalLLaMAPythonBridge.ts[0m:[93m6[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../types/index.ts' or its corresponding type declarations.

[7m6[0m } from '../types/index.ts'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/OllamaCheckInService.ts[0m:[93m188[0m:[93m22[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m188[0m           decision = fallbackMatch[1].toLowerCase() as 'yes' | 'no'
[7m   [0m [91m                     ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/OllamaCheckInService.ts[0m:[93m183[0m:[93m20[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m183[0m         decision = decisionMatch[1].toLowerCase() as 'yes' | 'no'
[7m   [0m [91m                   ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/OllamaCheckInService.ts[0m:[93m156[0m:[93m34[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m156[0m         const improvementsText = improvementsMatch[1].trim()
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/TaskListManager.ts[0m:[93m248[0m:[93m36[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 2.

[7m248[0m         this.checkParentCompletion(tasks, task)
[7m   [0m [91m                                   ~~~~~~~~~~~[0m
[96msrc/lib/services/TaskListManager.ts[0m:[93m85[0m:[93m24[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m85[0m           parentTask = taskStack[taskStack.length - 1].task
[7m  [0m [91m                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/TaskListManager.ts[0m:[93m79[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.
