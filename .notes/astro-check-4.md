
[96msrc/lib/ai/mental-llama/evidence/utils/semanticEvidenceParser.ts[0m:[93m243[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '"critical" | "supportive" | "contextual" | "significant"' is not assignable to type 'number | undefined'.
  Type 'string' is not assignable to type 'number'.

[7m243[0m     clinicalRelevance,
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/semanticEvidenceParser.ts[0m:[93m129[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '"critical" | "supportive" | "contextual" | "significant"' is not assignable to type 'number | undefined'.
  Type 'string' is not assignable to type 'number'.

[7m129[0m         clinicalRelevance,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m302[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'metadata' does not exist on type 'EvidenceItem'.

[7m302[0m       expect(result.evidenceItem?.metadata?.semanticRationale).toBe(
[7m   [0m [91m                                  ~~~~~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m301[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'category' does not exist on type 'EvidenceItem'.

[7m301[0m       expect(result.evidenceItem?.category).toBe('semantic_analysis')
[7m   [0m [91m                                  ~~~~~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m223[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'text' does not exist on type 'EvidenceItem'.

[7m223[0m       expect(result.evidenceItem?.text).toBe('Valid evidence text')
[7m   [0m [91m                                  ~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m205[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'text' does not exist on type 'EvidenceItem'.

[7m205[0m       expect(validItem.text).toBe('Valid item')
[7m   [0m [91m                       ~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m175[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'text' does not exist on type 'EvidenceItem'.

[7m175[0m       expect(evidenceItem.text).toBe('Evidence with whitespace')
[7m   [0m [91m                          ~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m93[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'text' does not exist on type 'EvidenceItem'.

[7m93[0m       expect(validItem.text).toBe('Valid evidence item')
[7m  [0m [91m                       ~~~~[0m
[96msrc/lib/ai/mental-llama/evidence/utils/__tests__/semanticEvidenceParser.test.ts[0m:[93m49[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'metadata' does not exist on type 'EvidenceItem'.

[7m49[0m       expect(firstItem.metadata?.semanticRationale).toBe(
[7m  [0m [91m                       ~~~~~~~~[0m

[96msrc/lib/ai/mental-llama/utils/testModelIntegration.ts[0m:[93m33[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'env' does not exist on type '() => { NODE_ENV: "test" | "production" | "development"; PORT: number; LOG_LEVEL: "error" | "debug" | "info" | "warn" | "verbose"; ENABLE_RATE_LIMITING: boolean; ANALYTICS_WS_PORT: number; ... 61 more ...; MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH?: string | undefined; }'.

[7m33[0m     const endpoint7B = env.env?.MENTALLAMA_ENDPOINT_URL_7B
[7m  [0m [91m                           ~~~[0m
[96msrc/lib/ai/mental-llama/utils/testModelIntegration.ts[0m:[93m32[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'env' does not exist on type '() => { NODE_ENV: "test" | "production" | "development"; PORT: number; LOG_LEVEL: "error" | "debug" | "info" | "warn" | "verbose"; ENABLE_RATE_LIMITING: boolean; ANALYTICS_WS_PORT: number; ... 61 more ...; MENTALLAMA_PYTHON_BRIDGE_SCRIPT_PATH?: string | undefined; }'.

[7m32[0m     const apiKey = env.env?.MENTALLAMA_API_KEY
[7m  [0m [91m                       ~~~[0m

[96msrc/lib/ai/models/registry.ts[0m:[93m863[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ModelCapability' is not assignable to parameter of type '"chat" | "crisis" | "response" | "sentiment" | "intervention"'.
  Type '"analysis"' is not assignable to type '"chat" | "crisis" | "response" | "sentiment" | "intervention"'.

[7m863[0m           model.legacyCapabilities.includes(cap as ModelCapability),
[7m   [0m [91m                                            ~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/ai/performance/EdgeComputing.ts[0m:[93m43[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'config' is declared but its value is never read.

[7m43[0m   private config: EdgeComputeConfig
[7m  [0m [91m          ~~~~~~[0m

[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m221[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m221[0m       expect(result.contradictionsFound[0].conflictingText).toBe(oldStatement)
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m220[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m220[0m       expect(result.contradictionsFound[0].type).toBe('statement')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m170[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m170[0m       expect(result.contradictionsFound[0].conflictingText).toBe('I hate pizza')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m169[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m169[0m       expect(result.contradictionsFound[0].type).toBe('statement')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m147[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m147[0m       expect(result.contradictionsFound[0].type).toBe('belief')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m128[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m128[0m       expect(result.contradictionsFound[0].conflictingText).toBe(belief1.belief)
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m127[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m127[0m       expect(result.contradictionsFound[0].type).toBe('belief')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/BeliefConsistencyService.test.ts[0m:[93m56[0m:[93m24[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' to type 'TherapeuticProgress' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' is missing the following properties from type 'TherapeuticProgress': skillsAcquired, trustLevel, rapportScore, therapistPerception, transferenceState

[7m 56[0m   therapeuticProgress: {
[7m   [0m [91m                       ~[0m
[7m 57[0m     insights: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 60[0m     sessionProgressLog: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m 61[0m   } as TherapeuticProgress,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/ai/services/ContextualAwarenessService.ts[0m:[93m4[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"./OutcomeRecommendationEngine"' has no exported member 'RecommendationContext'.

[7m4[0m import type { RecommendationContext } from './OutcomeRecommendationEngine'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/ai/services/OutcomeRecommendationEngine.ts[0m:[93m115[0m:[93m32[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string[]' is not assignable to parameter of type '("low" | "high" | "moderate")[]'.
  Type 'string' is not assignable to type '"low" | "high" | "moderate"'.

[7m115[0m     const risk = calculateRisk(riskFactors)
[7m   [0m [91m                               ~~~~~~~~~~~[0m

[96msrc/lib/ai/services/PatientProfileService.test.ts[0m:[93m175[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m175[0m       expect(updatedProfile?.conversationHistory[0].role).toBe('patient')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/PatientProfileService.test.ts[0m:[93m174[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m174[0m       expect(updatedProfile?.conversationHistory[0].content).toBe('Hello there')
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/PatientProfileService.test.ts[0m:[93m63[0m:[93m24[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' to type 'TherapeuticProgress' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' is missing the following properties from type 'TherapeuticProgress': skillsAcquired, trustLevel, rapportScore, therapistPerception, transferenceState

[7m 63[0m   therapeuticProgress: {
[7m   [0m [91m                       ~[0m
[7m 64[0m     insights: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 67[0m     sessionProgressLog: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m 68[0m   } as TherapeuticProgress,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/PatientProfileService.test.ts[0m:[93m12[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m12[0m import { vi } from 'vitest'
[7m  [0m [91m         ~~[0m

[96msrc/lib/ai/services/PatientResponseService.test.ts[0m:[93m74[0m:[93m24[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' to type 'TherapeuticProgress' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; }' is missing the following properties from type 'TherapeuticProgress': skillsAcquired, trustLevel, rapportScore, therapistPerception, transferenceState

[7m 74[0m   therapeuticProgress: {
[7m   [0m [91m                       ~[0m
[7m 75[0m     insights: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 78[0m     sessionProgressLog: [],
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m 79[0m   } as TherapeuticProgress,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/PatientResponseService.test.ts[0m:[93m17[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m17[0m import { vi } from 'vitest'
[7m  [0m [91m         ~~[0m

[96msrc/lib/ai/services/intervention-analysis.ts[0m:[93m118[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'choices' comes from an index signature, so it must be accessed with ['choices'].

[7m118[0m           completionRecord.choices as unknown as
[7m   [0m [91m                           ~~~~~~~[0m
[96msrc/lib/ai/services/intervention-analysis.ts[0m:[93m116[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m116[0m         (completionRecord.content as string | undefined) ||
[7m   [0m [91m                          ~~~~~~~[0m

[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m163[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m163[0m       expect(savedProfileArgument.conversationHistory[0].content).toBe(
[7m   [0m [91m             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m22[0m:[93m11[0m - [91merror[0m[90m ts(2741): [0mProperty 'skillsAcquired' is missing in type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; trustLevel: number; rapportScore: number; therapistPerception: "neutral"; transferenceState: "none"; }' but required in type 'TherapeuticProgress'.

[7m22[0m     const initialTherapeuticProgress: TherapeuticProgress = {
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m19[0m:[93m63[0m - [91merror[0m[90m ts(2694): [0mNamespace 'global.jest' has no exported member 'Mocked'.

[7m19[0m     mockKvStore = new KVStore('test_profiles', false) as jest.Mocked<KVStore>
[7m  [0m [91m                                                              ~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m13[0m:[93m25[0m - [91merror[0m[90m ts(2694): [0mNamespace 'global.jest' has no exported member 'Mocked'.

[7m13[0m   let mockKvStore: jest.Mocked<KVStore>
[7m  [0m [91m                        ~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m10[0m:[93m1[0m - [91merror[0m[90m ts(2708): [0mCannot use namespace 'jest' as a value.

[7m10[0m jest.mock('../../../db/KVStore')
[7m  [0m [91m~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientProfileService.test.ts[0m:[93m3[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'ProfileIdentifier' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m3[0m   ProfileIdentifier,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m62[0m:[93m11[0m - [91merror[0m[90m ts(2741): [0mProperty 'skillsAcquired' is missing in type '{ insights: never[]; resistanceLevel: number; changeReadiness: "contemplation"; sessionProgressLog: never[]; trustLevel: number; rapportScore: number; therapistPerception: "neutral"; transferenceState: "none"; }' but required in type 'TherapeuticProgress'.

[7m62[0m     const initialTherapeuticProgress: TherapeuticProgress = {
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m4[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'PatientResponseStyleConfig' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m4[0m   PatientResponseStyleConfig,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m1[0m:[93m44[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m1[0m import { describe, it, expect, beforeEach, vi } from 'vitest'
[7m [0m [91m                                           ~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m1[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m1[0m import { describe, it, expect, beforeEach, vi } from 'vitest'
[7m [0m [91m                               ~~~~~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m1[0m import { describe, it, expect, beforeEach, vi } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m1[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m1[0m import { describe, it, expect, beforeEach, vi } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/ai/services/__tests__/PatientResponseService.test.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m1[0m import { describe, it, expect, beforeEach, vi } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/ai/services/__tests__/TherapeuticProgressService.test.ts[0m:[93m11[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m11[0m import { vi } from 'vitest'
[7m  [0m [91m         ~~[0m

[96msrc/lib/ai/temporal/EmotionTemporalAnalyzer.ts[0m:[93m57[0m:[93m23[0m - [91merror[0m[90m ts(6138): [0mProperty 'repository' is declared but its value is never read.

[7m57[0m   constructor(private repository: AIRepository) {}
[7m  [0m [91m                      ~~~~~~~~~~[0m

[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m491[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'EmotionDimensions | undefined' is not assignable to parameter of type 'EmotionDimensions'.
  Type 'undefined' is not assignable to type 'EmotionDimensions'.

[7m491[0m       dimensions[i - 1],
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m344[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m344[0m         window[i].dimensions,
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m343[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m343[0m         window[i - 1].dimensions,
[7m   [0m [91m        ~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m275[0m:[93m32[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m275[0m     correlation += values[i] * values[i + lag]
[7m   [0m [91m                               ~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m275[0m:[93m20[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m275[0m     correlation += values[i] * values[i + lag]
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m216[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m216[0m             end: stableWindow[stableWindow.length - 1].timestamp,
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m215[0m:[93m20[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m215[0m             start: stableWindow[0].timestamp,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m204[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m204[0m       maps[i].dimensions,
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m203[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m203[0m       maps[i - 1].dimensions,
[7m   [0m [91m      ~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m177[0m:[93m16[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m177[0m           end: maps[i + 1].timestamp,
[7m   [0m [91m               ~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m176[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m176[0m           start: maps[i - 1].timestamp,
[7m   [0m [91m                 ~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m162[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m162[0m     const next = maps[i + 1].dimensions
[7m   [0m [91m                 ~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m161[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m161[0m     const curr = maps[i].dimensions
[7m   [0m [91m                 ~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m160[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m160[0m     const prev = maps[i - 1].dimensions
[7m   [0m [91m                 ~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m139[0m:[93m16[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m139[0m           end: maps[maps.length - 1].timestamp,
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m138[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m138[0m           start: maps[0].timestamp,
[7m   [0m [91m                 ~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m98[0m:[93m16[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m98[0m           end: window[window.length - 1].timestamp,
[7m  [0m [91m               ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ai/temporal/TemporalAnalysisAlgorithm.ts[0m:[93m97[0m:[93m18[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m97[0m           start: window[0].timestamp,
[7m  [0m [91m                 ~~~~~~~~~[0m

[96msrc/lib/analytics/breach-analytics.ts[0m:[93m308[0m:[93m49[0m - [91merror[0m[90m ts(4111): [0mProperty 'critical' comes from an index signature, so it must be accessed with ['critical'].

[7m308[0m     const criticalBreaches = metrics.bySeverity.critical || 0
[7m   [0m [91m                                                ~~~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m201[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'EffectivenessMetrics' is not assignable to type 'number'.

[7m201[0m     notificationRate:
[7m   [0m [91m    ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m198[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'breach' implicitly has an 'any' type.

[7m198[0m       (sum, breach) => sum + breach.affectedUsers.length,
[7m   [0m [91m            ~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m198[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'sum' implicitly has an 'any' type.

[7m198[0m       (sum, breach) => sum + breach.affectedUsers.length,
[7m   [0m [91m       ~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m187[0m:[93m6[0m - [91merror[0m[90m ts(7006): [0mParameter 'breach' implicitly has an 'any' type.

[7m187[0m     (breach) =>
[7m   [0m [91m     ~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m102[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'EffectivenessMetrics' is not assignable to type 'number'.

[7m102[0m       notificationEffectiveness,
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m84[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'breach' implicitly has an 'any' type.

[7m84[0m       (breach) =>
[7m  [0m [91m       ~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m10[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../security/breach-notification"' has no exported member 'BreachNotificationSystem'.

[7m10[0m import { BreachNotificationSystem } from '../security/breach-notification'
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m4[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"./risk"' has no exported member 'RiskScoring'.

[7m4[0m import { RiskScoring } from './risk'
[7m [0m [91m         ~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach-analytics.ts[0m:[93m2[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"./ml"' has no exported member 'MachineLearning'.

[7m2[0m import { MachineLearning } from './ml'
[7m [0m [91m         ~~~~~~~~~~~~~~~[0m

[96msrc/lib/analytics/breach.ts[0m:[93m87[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'Record<string, unknown> | undefined' is not assignable to type 'Record<string, unknown>'.
  Type 'undefined' is not assignable to type 'Record<string, unknown>'.

[7m87[0m     metadata: stored.metadata || undefined,
[7m  [0m [91m    ~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m84[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'Date' is not assignable to type 'number'.

[7m84[0m     responseTime: new Date(stored.response_time),
[7m  [0m [91m    ~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m83[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'Date' is not assignable to type 'number'.

[7m83[0m     detectionTime: new Date(stored.detection_time),
[7m  [0m [91m    ~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m80[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'string[]' is not assignable to type 'number'.

[7m80[0m     affectedUsers: stored.affected_users,
[7m  [0m [91m    ~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m66[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '"completed" | "pending" | "in_progress" | undefined' is not assignable to type '"completed" | "pending" | "in_progress"'.
  Type 'undefined' is not assignable to type '"completed" | "pending" | "in_progress"'.

[7m66[0m     remediation_status: breach.remediationStatus,
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m65[0m:[93m40[0m - [91merror[0m[90m ts(2551): [0mProperty 'toISOString' does not exist on type 'number'. Did you mean 'toString'?

[7m65[0m     response_time: breach.responseTime.toISOString(),
[7m  [0m [91m                                       ~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m65[0m:[93m20[0m - [91merror[0m[90m ts(18048): [0m'breach.responseTime' is possibly 'undefined'.

[7m65[0m     response_time: breach.responseTime.toISOString(),
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m64[0m:[93m42[0m - [91merror[0m[90m ts(2551): [0mProperty 'toISOString' does not exist on type 'number'. Did you mean 'toString'?

[7m64[0m     detection_time: breach.detectionTime.toISOString(),
[7m  [0m [91m                                         ~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m64[0m:[93m21[0m - [91merror[0m[90m ts(18048): [0m'breach.detectionTime' is possibly 'undefined'.

[7m64[0m     detection_time: breach.detectionTime.toISOString(),
[7m  [0m [91m                    ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m62[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'string[] | undefined' is not assignable to type 'string[]'.
  Type 'undefined' is not assignable to type 'string[]'.

[7m62[0m     data_types: breach.dataTypes,
[7m  [0m [91m    ~~~~~~~~~~[0m
[96msrc/lib/analytics/breach.ts[0m:[93m61[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'string[]'.
  Type 'undefined' is not assignable to type 'string[]'.

[7m61[0m     affected_users: breach.affectedUsers,
[7m  [0m [91m    ~~~~~~~~~~~~~~[0m

[96msrc/lib/analytics/ml.ts[0m:[93m43[0m:[93m54[0m - [91merror[0m[90m ts(18046): [0m't' is of type 'unknown'.

[7m43[0m   const recentBreaches = trends.slice(-7).map((t) => t.breaches)
[7m  [0m [91m                                                     ~[0m
[96msrc/lib/analytics/ml.ts[0m:[93m22[0m:[93m28[0m - [91merror[0m[90m ts(18046): [0m'trend' is of type 'unknown'.

[7m22[0m     const responseFactor = trend.responseTime > 3600000 ? 0.2 : 0 // 1 hour threshold
[7m  [0m [91m                           ~~~~~[0m
[96msrc/lib/analytics/ml.ts[0m:[93m21[0m:[93m26[0m - [91merror[0m[90m ts(18046): [0m'trend' is of type 'unknown'.

[7m21[0m     const breachFactor = trend.breaches > 5 ? 0.3 : 0
[7m  [0m [91m                         ~~~~~[0m

[96msrc/lib/analytics/statistics.ts[0m:[93m38[0m:[93m21[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m38[0m       const yDiff = dataPoints[i] - yMean
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/statistics.ts[0m:[93m37[0m:[93m21[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m37[0m       const xDiff = xValues[i] - xMean
[7m  [0m [91m                    ~~~~~~~~~~[0m

[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m412[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m412[0m       gtag('event', eventData.event, {
[7m   [0m [91m      ~~~~[0m
[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m411[0m:[93m16[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m411[0m     if (typeof gtag !== 'undefined') {
[7m   [0m [91m               ~~~~[0m
[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m123[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'string | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.

[7m123[0m     return variant
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m114[0m:[93m72[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.

[7m114[0m       sessionStorage.setItem(ANALYTICS_CONFIG.STORAGE_KEYS.AB_VARIANT, variant)
[7m   [0m [91m                                                                       ~~~~~~~[0m
[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m113[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string | null'.
  Type 'undefined' is not assignable to type 'string | null'.

[7m113[0m       variant = variants[Math.floor(Math.random() * variants.length)]
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/lib/analytics/universal-demo-analytics.ts[0m:[93m47[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'DemoPageConfig | undefined' is not assignable to type 'PageConfig'.
  Type 'undefined' is not assignable to type 'PageConfig'.

[7m47[0m     this.pageConfig = DEMO_PAGES_CONFIG[pageName]
[7m  [0m [91m    ~~~~~~~~~~~~~~~[0m

[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m350[0m:[93m67[0m - [91merror[0m[90m ts(2503): [0mCannot find namespace 'vi'.

[7m350[0m         BreachNotificationSystem.listRecentBreaches as unknown as vi.Mocked<
[7m   [0m [91m                                                                  ~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m296[0m:[93m56[0m - [91merror[0m[90m ts(2503): [0mCannot find namespace 'vi'.

[7m296[0m         ComplianceMetrics.calculateScore as unknown as vi.Mocked<
[7m   [0m [91m                                                       ~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m11[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../breach-analytics"' has no exported member 'BreachAnalytics'.

[7m11[0m import { BreachAnalytics } from '../breach-analytics'
[7m  [0m [91m         ~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m10[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/security/breach-notification"' has no exported member 'BreachNotificationSystem'.

[7m10[0m import { BreachNotificationSystem } from '@/lib/security/breach-notification'
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m8[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/fhe"' has no exported member 'FHE'.

[7m8[0m import { FHE } from '@/lib/fhe'
[7m [0m [91m         ~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m7[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/analytics/trends"' has no exported member 'SecurityTrends'.

[7m7[0m import { SecurityTrends } from '@/lib/analytics/trends'
[7m [0m [91m         ~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/analytics/risk"' has no exported member 'RiskScoring'.

[7m5[0m import { RiskScoring } from '@/lib/analytics/risk'
[7m [0m [91m         ~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m4[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/analytics/notifications"' has no exported member 'NotificationEffectiveness'.

[7m4[0m import { NotificationEffectiveness } from '@/lib/analytics/notifications'
[7m [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/analytics/ml"' has no exported member 'MachineLearning'.

[7m3[0m import { MachineLearning } from '@/lib/analytics/ml'
[7m [0m [91m         ~~~~~~~~~~~~~~~[0m
[96msrc/lib/analytics/__tests__/breach-analytics.test.ts[0m:[93m2[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/analytics/compliance"' has no exported member 'ComplianceMetrics'.

[7m2[0m import { ComplianceMetrics } from '@/lib/analytics/compliance'
[7m [0m [91m         ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/animations/sequences.ts[0m:[93m703[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'pulse' comes from an index signature, so it must be accessed with ['pulse'].

[7m703[0m   loading: loadingSequences.pulse,
[7m   [0m [91m                            ~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m700[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'slideInRight' comes from an index signature, so it must be accessed with ['slideInRight'].

[7m700[0m   toast: notificationSequences.slideInRight,
[7m   [0m [91m                               ~~~~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m697[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'scaleUp' comes from an index signature, so it must be accessed with ['scaleUp'].

[7m697[0m   modal: modalSequences.scaleUp,
[7m   [0m [91m                        ~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m694[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'cardFloat' comes from an index signature, so it must be accessed with ['cardFloat'].

[7m694[0m   card: interactiveSequences.cardFloat,
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m693[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'buttonHover' comes from an index signature, so it must be accessed with ['buttonHover'].

[7m693[0m   button: interactiveSequences.buttonHover,
[7m   [0m [91m                               ~~~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m690[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'cascadeIn' comes from an index signature, so it must be accessed with ['cascadeIn'].

[7m690[0m   cascade: listAnimationSequences.cascadeIn,
[7m   [0m [91m                                  ~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m689[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'staggeredFade' comes from an index signature, so it must be accessed with ['staggeredFade'].

[7m689[0m   stagger: listAnimationSequences.staggeredFade,
[7m   [0m [91m                                  ~~~~~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m686[0m:[93m36[0m - [91merror[0m[90m ts(4111): [0mProperty 'scaleIn' comes from an index signature, so it must be accessed with ['scaleIn'].

[7m686[0m   scaleIn: pageTransitionSequences.scaleIn,
[7m   [0m [91m                                   ~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m685[0m:[93m36[0m - [91merror[0m[90m ts(4111): [0mProperty 'slideUp' comes from an index signature, so it must be accessed with ['slideUp'].

[7m685[0m   slideUp: pageTransitionSequences.slideUp,
[7m   [0m [91m                                   ~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m684[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'fadeSlide' comes from an index signature, so it must be accessed with ['fadeSlide'].

[7m684[0m   fadeIn: pageTransitionSequences.fadeSlide,
[7m   [0m [91m                                  ~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m427[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'brightness' does not exist in type 'Variant'.

[7m427[0m       brightness: 1.1,
[7m   [0m [91m      ~~~~~~~~~~[0m
[96msrc/lib/animations/sequences.ts[0m:[93m423[0m:[93m34[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'brightness' does not exist in type 'Variant'.

[7m423[0m     rest: { scale: 1, rotate: 0, brightness: 1 },
[7m   [0m [91m                                 ~~~~~~~~~~[0m

[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m736[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'knowledgeSource' comes from an index signature, so it must be accessed with ['knowledgeSource'].

[7m736[0m         confidence: turn.knowledgeSource.confidence,
[7m   [0m [91m                         ~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m736[0m:[93m21[0m - [91merror[0m[90m ts(18046): [0m'turn.knowledgeSource' is of type 'unknown'.

[7m736[0m         confidence: turn.knowledgeSource.confidence,
[7m   [0m [91m                    ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m733[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'speaker' comes from an index signature, so it must be accessed with ['speaker'].

[7m733[0m           turn.speaker === 'therapist'
[7m   [0m [91m               ~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m731[0m:[93m23[0m - [91merror[0m[90m ts(4111): [0mProperty 'knowledgeSource' comes from an index signature, so it must be accessed with ['knowledgeSource'].

[7m731[0m         content: turn.knowledgeSource.reference,
[7m   [0m [91m                      ~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m731[0m:[93m18[0m - [91merror[0m[90m ts(18046): [0m'turn.knowledgeSource' is of type 'unknown'.

[7m731[0m         content: turn.knowledgeSource.reference,
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m730[0m:[93m22[0m - [91merror[0m[90m ts(4111): [0mProperty 'knowledgeSource' comes from an index signature, so it must be accessed with ['knowledgeSource'].

[7m730[0m         source: turn.knowledgeSource.type,
[7m   [0m [91m                     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m730[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'turn.knowledgeSource' is of type 'unknown'.

[7m730[0m         source: turn.knowledgeSource.type,
[7m   [0m [91m                ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m704[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'conversationParameters' comes from an index signature, so it must be accessed with ['conversationParameters'].

[7m704[0m     baseScore + request.conversationParameters.targetTechniques.length * 3,
[7m   [0m [91m                        ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m704[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'request.conversationParameters' is of type 'unknown'.

[7m704[0m     baseScore + request.conversationParameters.targetTechniques.length * 3,
[7m   [0m [91m                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m700[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'dsm5Criteria' comes from an index signature, so it must be accessed with ['dsm5Criteria'].

[7m700[0m     baseScore + request.knowledgeBase.dsm5Criteria.length * 2,
[7m   [0m [91m                                      ~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m700[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'request.knowledgeBase.dsm5Criteria' is of type 'unknown'.

[7m700[0m     baseScore + request.knowledgeBase.dsm5Criteria.length * 2,
[7m   [0m [91m                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m659[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'profile' is declared but its value is never read.

[7m659[0m   profile: ClientProfile,
[7m   [0m [91m  ~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m642[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'techniques' is declared but its value is never read.

[7m642[0m   techniques: string[],
[7m   [0m [91m  ~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m641[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'dsm5' is declared but its value is never read.

[7m641[0m   dsm5: string[],
[7m   [0m [91m  ~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m632[0m:[93m41[0m - [91merror[0m[90m ts(18048): [0m'profile.presentingProblem' is possibly 'undefined'.

[7m632[0m     high: `I'm really struggling with ${profile.presentingProblem.toLowerCase()}. It feels overwhelming most of the time, and I'm not sure how to manage it anymore.`,
[7m   [0m [91m                                        ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m462[0m:[93m51[0m - [91merror[0m[90m ts(2345): [0mArgument of type '({ speaker: "therapist"; content: string; timestamp: string; techniques: string[]; interventionType: string; knowledgeSource: { type: string; reference: string; confidence: number; }; emotionalState?: undefined; } | { ...; })[]' is not assignable to parameter of type 'DialogueEntry[]'.
  Type '{ speaker: "therapist"; content: string; timestamp: string; techniques: string[]; interventionType: string; knowledgeSource: { type: string; reference: string; confidence: number; }; emotionalState?: undefined; } | { ...; }' is not assignable to type 'DialogueEntry'.

[7m462[0m   const knowledgeMapping = mapKnowledgeToDialogue(generatedDialogue)
[7m   [0m [91m                                                  ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m459[0m:[93m55[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ clientProfile: { severity: "medium" | "low" | "high"; demographics: { age: number; gender: string; background: string; }; riskFactors: string[]; presentingProblem: string; }; knowledgeBase: { ...; }; conversationParameters: { ...; }; }' is not assignable to parameter of type 'ConversationRequest'.
  Property 'therapeuticApproach' is missing in type '{ clientProfile: { severity: "medium" | "low" | "high"; demographics: { age: number; gender: string; background: string; }; riskFactors: string[]; presentingProblem: string; }; knowledgeBase: { ...; }; conversationParameters: { ...; }; }' but required in type 'ConversationRequest'.

[7m459[0m   const qualityMetrics = calculateConversationQuality(validatedRequest)
[7m   [0m [91m                                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m465[0m:[93m70[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m465[0m     conversationId: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                                     ~~~~~~[0m
[96msrc/lib/api/psychology-pipeline-demo.ts[0m:[93m150[0m:[93m62[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m150[0m     caseId: `CASE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                             ~~~~~~[0m

[96msrc/lib/audit/analysis.ts[0m:[93m152[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m152[0m       acc[log.userId].push(log)
[7m   [0m [91m      ~~~~~~~~~~~~~~~[0m
[96msrc/lib/audit/analysis.ts[0m:[93m107[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m107[0m       acc[log.userId].push(log)
[7m   [0m [91m      ~~~~~~~~~~~~~~~[0m
[96msrc/lib/audit/analysis.ts[0m:[93m56[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m56[0m       acc[log.userId].logs.push(log)
[7m  [0m [91m      ~~~~~~~~~~~~~~~[0m
[96msrc/lib/audit/analysis.ts[0m:[93m55[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m55[0m       acc[log.userId].count++
[7m  [0m [91m      ~~~~~~~~~~~~~~~[0m

[96msrc/lib/audit/index.ts[0m:[93m1[0m:[93m30[0m - [91merror[0m[90m ts(2305): [0mModule '"./log"' has no exported member 'createAuditLog'.

[7m1[0m export { type AuditLogEntry, createAuditLog } from './log'
[7m [0m [91m                             ~~~~~~~~~~~~~~[0m

[96msrc/lib/audit/metrics.ts[0m:[93m55[0m:[93m27[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m55[0m   const unusualPatterns = await detectUnusualPatterns(logs)
[7m  [0m [93m                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/audit/__mocks__/log.ts[0m:[93m28[0m:[93m50[0m - [91merror[0m[90m ts(7006): [0mParameter 'metadata' implicitly has an 'any' type.

[7m28[0m   .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                                                 ~~~~~~~~[0m
[96msrc/lib/audit/__mocks__/log.ts[0m:[93m28[0m:[93m40[0m - [91merror[0m[90m ts(7006): [0mParameter 'resource' implicitly has an 'any' type.

[7m28[0m   .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                                       ~~~~~~~~[0m
[96msrc/lib/audit/__mocks__/log.ts[0m:[93m28[0m:[93m32[0m - [91merror[0m[90m ts(7006): [0mParameter 'userId' implicitly has an 'any' type.

[7m28[0m   .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                               ~~~~~~[0m
[96msrc/lib/audit/__mocks__/log.ts[0m:[93m28[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'action' implicitly has an 'any' type.

[7m28[0m   .mockImplementation((action, userId, resource, metadata) => {
[7m  [0m [91m                       ~~~~~~[0m
[96msrc/lib/audit/__mocks__/log.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m1[0m import { vi } from 'vitest'
[7m [0m [91m         ~~[0m

[96msrc/lib/audit/__tests__/analysis.test.ts[0m:[93m7[0m:[93m31[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../types/audit' or its corresponding type declarations.

[7m7[0m import type { AuditLog } from '../../types/audit'
[7m [0m [91m                              ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/auth/authUtils.ts[0m:[93m14[0m:[93m23[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'AstroCookies'.

[7m14[0m   request?: Request | AstroCookies,
[7m  [0m [91m                      ~~~~~~~~~~~~[0m

[96msrc/lib/auth/azure-ad.ts[0m:[93m1[0m:[93m29[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../config/azure.config' or its corresponding type declarations.

[7m1[0m import { azureConfig } from '../../config/azure.config'
[7m [0m [91m                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/auth/index.ts[0m:[93m340[0m:[93m62[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m340[0m     return `reset_${Date.now()}_${Math.random().toString(36).substr(2, 16)}`
[7m   [0m [93m                                                             ~~~~~~[0m
[96msrc/lib/auth/index.ts[0m:[93m320[0m:[93m75[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m320[0m     const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
[7m   [0m [93m                                                                          ~~~~~~[0m
[96msrc/lib/auth/index.ts[0m:[93m162[0m:[93m62[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m162[0m         id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                             ~~~~~~[0m

[96msrc/lib/auth/middleware.ts[0m:[93m57[0m:[93m53[0m - [91merror[0m[90m ts(4111): [0mProperty 'verificationToken' comes from an index signature, so it must be accessed with ['verificationToken'].

[7m57[0m         verificationHash: session.user.app_metadata.verificationToken,
[7m  [0m [91m                                                    ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/middleware.ts[0m:[93m28[0m:[93m37[0m - [91merror[0m[90m ts(4111): [0mProperty 'verificationToken' comes from an index signature, so it must be accessed with ['verificationToken'].

[7m28[0m     if (!session.user.app_metadata?.verificationToken) {
[7m  [0m [91m                                    ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/auth/serverAuth.ts[0m:[93m286[0m:[93m46[0m - [91merror[0m[90m ts(7006): [0mParameter 'context' implicitly has an 'any' type.

[7m286[0m     const apiRouteHandler: APIRoute = async (context) => {
[7m   [0m [91m                                             ~~~~~~~[0m
[96msrc/lib/auth/serverAuth.ts[0m:[93m262[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'user' comes from an index signature, so it must be accessed with ['user'].

[7m262[0m     Astro.locals.user = user
[7m   [0m [91m                 ~~~~[0m
[96msrc/lib/auth/serverAuth.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroCookies'.

[7m2[0m import type { AstroCookies } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/lib/auth/serverAuth.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/lib/auth/session.ts[0m:[93m106[0m:[93m26[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'AuditEventType'.

[7m106[0m     await createAuditLog(userId, 'session_destroyed', sessionId, {
[7m   [0m [91m                         ~~~~~~[0m
[96msrc/lib/auth/session.ts[0m:[93m68[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'AuditEventType'.

[7m68[0m       user.id,
[7m  [0m [91m      ~~~~~~~[0m

[96msrc/lib/auth/sessionUtils.ts[0m:[93m38[0m:[93m33[0m - [91merror[0m[90m ts(4111): [0mProperty 'name' comes from an index signature, so it must be accessed with ['name'].

[7m38[0m       name: user.user_metadata?.name || user.email?.split('@')[0] || '',
[7m  [0m [91m                                ~~~~[0m

[96msrc/lib/auth/supabase.ts[0m:[93m420[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'EMAIL_FROM' comes from an index signature, so it must be accessed with ['EMAIL_FROM'].

[7m420[0m     const emailFrom = process.env.EMAIL_FROM || 'send@pixelatedempathy.com'
[7m   [0m [91m                                  ~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m269[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'notification_preferences' comes from an index signature, so it must be accessed with ['notification_preferences'].

[7m269[0m             ...currentMetadata.notification_preferences,
[7m   [0m [91m                               ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m267[0m:[93m55[0m - [91merror[0m[90m ts(4111): [0mProperty 'security_monitoring_level' comes from an index signature, so it must be accessed with ['security_monitoring_level'].

[7m267[0m             settings.securityLevel ?? currentMetadata.security_monitoring_level,
[7m   [0m [91m                                                      ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m265[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'enhanced_security_monitoring' comes from an index signature, so it must be accessed with ['enhanced_security_monitoring'].

[7m265[0m             currentMetadata.enhanced_security_monitoring,
[7m   [0m [91m                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m228[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'notification_preferences' comes from an index signature, so it must be accessed with ['notification_preferences'].

[7m228[0m           metadata.notification_preferences?.suspicious_activity ?? true,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m226[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'notification_preferences' comes from an index signature, so it must be accessed with ['notification_preferences'].

[7m226[0m           metadata.notification_preferences?.failed_login_attempts ?? true,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m224[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'notification_preferences' comes from an index signature, so it must be accessed with ['notification_preferences'].

[7m224[0m           metadata.notification_preferences?.password_changes ?? true,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m222[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'notification_preferences' comes from an index signature, so it must be accessed with ['notification_preferences'].

[7m222[0m           metadata.notification_preferences?.login_from_new_device ?? true,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m219[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'security_monitoring_level' comes from an index signature, so it must be accessed with ['security_monitoring_level'].

[7m219[0m       securityLevel: metadata.security_monitoring_level || 'standard',
[7m   [0m [91m                              ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/supabase.ts[0m:[93m218[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'enhanced_security_monitoring' comes from an index signature, so it must be accessed with ['enhanced_security_monitoring'].

[7m218[0m       enhancedSecurity: metadata.enhanced_security_monitoring || false,
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/auth/__tests__/serverAuth.test.ts[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../../audit/log"' has no exported member 'createResourceAuditLog'.

[7m3[0m import { createResourceAuditLog } from '../../audit/log'
[7m [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/auth/__tests__/serverAuth.test.ts[0m:[93m2[0m:[93m49[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../auth' or its corresponding type declarations.

[7m2[0m import { getCurrentUser, isAuthenticated } from '../auth'
[7m [0m [91m                                                ~~~~~~~~~[0m

[96msrc/lib/backup/verify.ts[0m:[93m347[0m:[93m17[0m - [91merror[0m[90m ts(6133): [0m'markBackupFailed' is declared but its value is never read.

[7m347[0m   private async markBackupFailed(backupFile: string): Promise<void> {
[7m   [0m [91m                ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m313[0m:[93m24[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m313[0m     for (const user of data.users) {
[7m   [0m [91m                       ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m302[0m:[93m24[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m302[0m     for (const user of data.users) {
[7m   [0m [91m                       ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m293[0m:[93m18[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m293[0m       analytics: data.analytics.slice(0, 5),
[7m   [0m [91m                 ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m292[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m292[0m       sessions: data.sessions.slice(0, 5),
[7m   [0m [91m                ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m291[0m:[93m14[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m291[0m       users: data.users.slice(0, 5),
[7m   [0m [91m             ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m277[0m:[93m45[0m - [91merror[0m[90m ts(18046): [0m'backup' is of type 'unknown'.

[7m277[0m       const testData = this.extractTestData(backup.data)
[7m   [0m [91m                                            ~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m267[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m267[0m       url: process.env.REDIS_URL!,
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m260[0m:[93m62[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m260[0m       throw new Error(`Backup content verification failed: ${error.message}`)
[7m   [0m [91m                                                             ~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m237[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'environment' does not exist on type 'object'.

[7m237[0m       typeof data.environment === 'string'
[7m   [0m [91m                  ~~~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m237[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'data' is possibly 'null'.

[7m237[0m       typeof data.environment === 'string'
[7m   [0m [91m             ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m236[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'version' does not exist on type 'object'.

[7m236[0m       typeof data.version === 'string' &&
[7m   [0m [91m                  ~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m236[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'data' is possibly 'null'.

[7m236[0m       typeof data.version === 'string' &&
[7m   [0m [91m             ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m213[0m:[93m22[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 1 of 2, '(o: { [s: string]: unknown; } | ArrayLike<unknown>): [string, unknown][]', gave the following error.
  Overload 2 of 2, '(o: {}): [string, any][]', gave the following error.

[7m213[0m       Object.entries(data).every(
[7m   [0m [91m                     ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m200[0m:[93m34[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m200[0m       if (!this.verifyConfigData(data.config)) {
[7m   [0m [91m                                 ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m195[0m:[93m32[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m195[0m       if (!this.verifyFileData(data.files)) {
[7m   [0m [91m                               ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m190[0m:[93m33[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m190[0m       if (!this.verifyRedisData(data.redis)) {
[7m   [0m [91m                                ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m182[0m:[93m29[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m182[0m         (section) => typeof data[section] === 'object',
[7m   [0m [91m                            ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m173[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'object'.

[7m173[0m       typeof backup.data === 'object'
[7m   [0m [91m                    ~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m173[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'backup' is possibly 'null'.

[7m173[0m       typeof backup.data === 'object'
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m172[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'environment' does not exist on type 'object'.

[7m172[0m       typeof backup.environment === 'string' &&
[7m   [0m [91m                    ~~~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m172[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'backup' is possibly 'null'.

[7m172[0m       typeof backup.environment === 'string' &&
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m171[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'version' does not exist on type 'object'.

[7m171[0m       typeof backup.version === 'string' &&
[7m   [0m [91m                    ~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m171[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'backup' is possibly 'null'.

[7m171[0m       typeof backup.version === 'string' &&
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m170[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'timestamp' does not exist on type 'object'.

[7m170[0m       typeof backup.timestamp === 'number' &&
[7m   [0m [91m                    ~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m170[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'backup' is possibly 'null'.

[7m170[0m       typeof backup.timestamp === 'number' &&
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m158[0m:[93m40[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m158[0m         error: `Verification failed: ${error.message}`,
[7m   [0m [91m                                       ~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m94[0m:[93m52[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m94[0m       throw new Error(`Failed to verify backups: ${error.message}`)
[7m  [0m [91m                                                   ~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m85[0m:[93m20[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m85[0m             error: error.message,
[7m  [0m [91m                   ~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m41[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m41[0m       backupDir: getEnv('BACKUP_DIR', './backups'),
[7m  [0m [91m      ~~~~~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m33[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'redis' is declared but its value is never read.

[7m33[0m   private redis: RedisService
[7m  [0m [91m          ~~~~~[0m
[96msrc/lib/backup/verify.ts[0m:[93m254[0m:[93m9[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m254[0m         await this.verifyDataIntegrity(backup.data)
[7m   [0m [93m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/browser/setup.ts[0m:[93m65[0m:[93m5[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m65[0m     logger.error('Error setting up browser environment:', error)
[7m  [0m [91m    ~~~~~~[0m
[96msrc/lib/browser/setup.ts[0m:[93m63[0m:[93m5[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m63[0m     logger.info('Browser environment setup complete')
[7m  [0m [91m    ~~~~~~[0m
[96msrc/lib/browser/setup.ts[0m:[93m49[0m:[93m9[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m49[0m         logger.warn('Missing critical browser features:', missingCritical)
[7m  [0m [91m        ~~~~~~[0m
[96msrc/lib/browser/setup.ts[0m:[93m34[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m34[0m       logger.debug('Detected browser features:', features)
[7m  [0m [91m      ~~~~~~[0m
[96msrc/lib/browser/setup.ts[0m:[93m20[0m:[93m5[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m20[0m     logger.info('Setting up browser environment')
[7m  [0m [91m    ~~~~~~[0m

[96msrc/lib/cache/invalidation.ts[0m:[93m27[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'Redis | null' is not assignable to type 'Redis'.
  Type 'null' is not assignable to type 'Redis'.

[7m27[0m     this.redis =
[7m  [0m [91m    ~~~~~~~~~~[0m

[96msrc/lib/crypto/encryption.ts[0m:[93m102[0m:[93m45[0m - [93mwarning[0m[90m ts(6387): [0mThe signature '(start?: number | undefined, end?: number | undefined): Buffer<ArrayBuffer>' of 'encryptedBuffer.slice' is deprecated.

[7m102[0m       const encryptedData = encryptedBuffer.slice(
[7m   [0m [93m                                            ~~~~~[0m
[96msrc/lib/crypto/encryption.ts[0m:[93m101[0m:[93m39[0m - [93mwarning[0m[90m ts(6387): [0mThe signature '(start?: number | undefined, end?: number | undefined): Buffer<ArrayBuffer>' of 'encryptedBuffer.slice' is deprecated.

[7m101[0m       const authTag = encryptedBuffer.slice(encryptedBuffer.length - 16)
[7m   [0m [93m                                      ~~~~~[0m

[96msrc/lib/crypto/example.ts[0m:[93m138[0m:[93m38[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m138[0m     const redecrypted = await crypto.decrypt(reencrypted)
[7m   [0m [91m                                     ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m133[0m:[93m38[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m133[0m     const reencrypted = await crypto.encrypt(decrypted)
[7m   [0m [91m                                     ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m132[0m:[93m36[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m132[0m     const decrypted = await crypto.decrypt(encrypted)
[7m   [0m [91m                                   ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m124[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m124[0m   const rotatedKey = await keyStorage.rotateKey(keyId)
[7m   [0m [91m                                                ~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m122[0m:[93m5[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'useSecureStorage' does not exist in type 'KeyStorageOptions'.

[7m122[0m     useSecureStorage: true,
[7m   [0m [91m    ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m112[0m:[93m34[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m112[0m   const encrypted = await crypto.encrypt(sensitiveData)
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m83[0m:[93m15[0m - [91merror[0m[90m ts(7006): [0mParameter 'error' implicitly has an 'any' type.

[7m83[0m     onError: (error) => {
[7m  [0m [91m              ~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m80[0m:[93m28[0m - [91merror[0m[90m ts(7006): [0mParameter 'newKeyId' implicitly has an 'any' type.

[7m80[0m     onRotation: (oldKeyId, newKeyId) => {
[7m  [0m [91m                           ~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m80[0m:[93m18[0m - [91merror[0m[90m ts(7006): [0mParameter 'oldKeyId' implicitly has an 'any' type.

[7m80[0m     onRotation: (oldKeyId, newKeyId) => {
[7m  [0m [91m                 ~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m47[0m:[93m5[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'useSecureStorage' does not exist in type 'KeyStorageOptions'.

[7m47[0m     useSecureStorage: true,
[7m  [0m [91m    ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m30[0m:[93m34[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m30[0m   const decrypted = await crypto.decrypt(encrypted)
[7m  [0m [91m                                 ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m25[0m:[93m34[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m25[0m   const encrypted = await crypto.encrypt(sensitiveData)
[7m  [0m [91m                                 ~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m9[0m:[93m30[0m - [91merror[0m[90m ts(2614): [0mModule '"./index"' has no exported member 'ScheduledKeyRotation'. Did you mean to use 'import ScheduledKeyRotation from "./index"' instead?

[7m9[0m import { createCryptoSystem, ScheduledKeyRotation } from './index'
[7m [0m [91m                             ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m138[0m:[93m25[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m138[0m     const redecrypted = await crypto.decrypt(reencrypted)
[7m   [0m [93m                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m133[0m:[93m25[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m133[0m     const reencrypted = await crypto.encrypt(decrypted)
[7m   [0m [93m                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m132[0m:[93m23[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m132[0m     const decrypted = await crypto.decrypt(encrypted)
[7m   [0m [93m                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m112[0m:[93m21[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m112[0m   const encrypted = await crypto.encrypt(sensitiveData)
[7m   [0m [93m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m30[0m:[93m21[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m30[0m   const decrypted = await crypto.decrypt(encrypted)
[7m  [0m [93m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/crypto/example.ts[0m:[93m25[0m:[93m21[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m25[0m   const encrypted = await crypto.encrypt(sensitiveData)
[7m  [0m [93m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/crypto/index.ts[0m:[93m388[0m:[93m22[0m - [91merror[0m[90m ts(6138): [0mProperty 'namespace' is declared but its value is never read.

[7m388[0m     private readonly namespace: string = 'app',
[7m   [0m [91m                     ~~~~~~~~~[0m
[96msrc/lib/crypto/index.ts[0m:[93m106[0m:[93m32[0m - [91merror[0m[90m ts(6138): [0mProperty 'redisUrl' is declared but its value is never read.

[7m106[0m   constructor(private readonly redisUrl: string) {
[7m   [0m [91m                               ~~~~~~~~[0m
[96msrc/lib/crypto/index.ts[0m:[93m18[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'LogLevel'.

[7m18[0m   level: LogLevel.INFO,
[7m  [0m [91m         ~~~~~~~~[0m
[96msrc/lib/crypto/index.ts[0m:[93m17[0m:[93m16[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m17[0m const logger = getLogger({
[7m  [0m [91m               ~~~~~~~~~[0m

[96msrc/lib/crypto/keyRotation.ts[0m:[93m148[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m148[0m       encryptedData.split(':')[0].substring(1),
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/crypto/keyStorage.ts[0m:[93m226[0m:[93m52[0m - [91merror[0m[90m ts(4111): [0mProperty 'keyId' comes from an index signature, so it must be accessed with ['keyId'].

[7m226[0m     return (result.Items || []).map((item) => item.keyId)
[7m   [0m [91m                                                   ~~~~~[0m

[96msrc/lib/crypto/scheduledRotation.ts[0m:[93m32[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'useSecureStorage' does not exist in type 'KeyStorageOptions'.

[7m32[0m       useSecureStorage: options.useSecureStorage || false,
[7m  [0m [91m      ~~~~~~~~~~~~~~~~[0m

[96msrc/lib/db/conversations.ts[0m:[93m146[0m:[93m9[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m146[0m   await createAuditLog({
[7m   [0m [91m        ~~~~~~~~~~~~~~[0m
[96msrc/lib/db/conversations.ts[0m:[93m111[0m:[93m9[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m111[0m   await createAuditLog({
[7m   [0m [91m        ~~~~~~~~~~~~~~[0m
[96msrc/lib/db/conversations.ts[0m:[93m73[0m:[93m9[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m73[0m   await createAuditLog({
[7m  [0m [91m        ~~~~~~~~~~~~~~[0m

[96msrc/lib/db/messages.ts[0m:[93m142[0m:[93m9[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m142[0m   await createAuditLog({
[7m   [0m [91m        ~~~~~~~~~~~~~~[0m
[96msrc/lib/db/messages.ts[0m:[93m88[0m:[93m9[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m88[0m   await createAuditLog({
[7m  [0m [91m        ~~~~~~~~~~~~~~[0m

[96msrc/lib/db/user-settings.ts[0m:[93m90[0m:[93m5[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"user_settings_updated"' is not assignable to parameter of type 'AuditEventType'.

[7m90[0m     'user_settings_updated',
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/db/user-settings.ts[0m:[93m52[0m:[93m5[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"user_settings_created"' is not assignable to parameter of type 'AuditEventType'.

[7m52[0m     'user_settings_created',
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/db/user-settings.ts[0m:[93m89[0m:[93m3[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m 89[0m   await logAuditEvent(
[7m   [0m [93m  ~~~~~~~~~~~~~~~~~~~~[0m
[7m 90[0m     'user_settings_updated',
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 98[0m     },
[7m   [0m [93m~~~~~~[0m
[7m 99[0m   )
[7m   [0m [93m~~~[0m
[96msrc/lib/db/user-settings.ts[0m:[93m51[0m:[93m3[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m 51[0m   await logAuditEvent(
[7m   [0m [93m  ~~~~~~~~~~~~~~~~~~~~[0m
[7m 52[0m     'user_settings_created',
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 59[0m     },
[7m   [0m [93m~~~~~~[0m
[7m 60[0m   )
[7m   [0m [93m~~~[0m

[96msrc/lib/db/ai/initialize.ts[0m:[93m30[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"system"' is not assignable to parameter of type 'AuditEventType'.

[7m30[0m       'system',
[7m  [0m [91m      ~~~~~~~~[0m
[96msrc/lib/db/ai/initialize.ts[0m:[93m16[0m:[93m26[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"system"' is not assignable to parameter of type 'AuditEventType'.

[7m16[0m     await createAuditLog('system', 'system.ai.database.initialize', 'ai', {
[7m  [0m [91m                         ~~~~~~~~[0m

[96msrc/lib/db/ai/repository.ts[0m:[93m862[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'_parsedRiskFactors' is declared but its value is never read.

[7m862[0m       let _parsedRiskFactors: RiskFactor[] | undefined = undefined
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/db/migrations/20250320_add_ai_performance_metrics.ts[0m:[93m35[0m:[93m19[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TemplateStringsArray' is not assignable to parameter of type 'string'.

[7m35[0m   await sql.unsafe`
[7m  [0m [91m                  ~[0m
[7m36[0m     DROP TABLE IF EXISTS ai_performance_metrics;
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m37[0m   `
[7m  [0m [91m~~~[0m
[96msrc/lib/db/migrations/20250320_add_ai_performance_metrics.ts[0m:[93m7[0m:[93m19[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TemplateStringsArray' is not assignable to parameter of type 'string'.

[7m  7[0m   await sql.unsafe`
[7m   [0m [91m                  ~[0m
[7m  8[0m     CREATE TABLE IF NOT EXISTS ai_performance_metrics (
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 28[0m     CREATE INDEX IF NOT EXISTS idx_ai_perf_success ON ai_performance_metrics(success);
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m 29[0m   `
[7m   [0m [91m~~~[0m
[96msrc/lib/db/migrations/20250320_add_ai_performance_metrics.ts[0m:[93m4[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'DATABASE_URL' comes from an index signature, so it must be accessed with ['DATABASE_URL'].

[7m4[0m const sql = postgres(process.env.DATABASE_URL || '')
[7m [0m [91m                                 ~~~~~~~~~~~~[0m

[96msrc/lib/db/migrations/20250321_add_ai_usage_logs.ts[0m:[93m49[0m:[93m19[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TemplateStringsArray' is not assignable to parameter of type 'string'.

[7m49[0m   await sql.unsafe`
[7m  [0m [91m                  ~[0m
[7m50[0m     DROP TABLE IF EXISTS ai_usage_logs CASCADE;
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m51[0m   `
[7m  [0m [91m~~~[0m
[96msrc/lib/db/migrations/20250321_add_ai_usage_logs.ts[0m:[93m7[0m:[93m19[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'TemplateStringsArray' is not assignable to parameter of type 'string'.

[7m  7[0m   await sql.unsafe`
[7m   [0m [91m                  ~[0m
[7m  8[0m     CREATE TABLE IF NOT EXISTS ai_usage_logs (
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m 42[0m       USING (auth.jwt() ? 'is_admin');
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m 43[0m   `
[7m   [0m [91m~~~[0m
[96msrc/lib/db/migrations/20250321_add_ai_usage_logs.ts[0m:[93m4[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'DATABASE_URL' comes from an index signature, so it must be accessed with ['DATABASE_URL'].

[7m4[0m const sql = postgres(process.env.DATABASE_URL || '')
[7m [0m [91m                                 ~~~~~~~~~~~~[0m

[96msrc/lib/db/security/initialize.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"../../audit/log"' has no exported member 'createAuditLog'.

[7m1[0m import { createAuditLog } from '../../audit/log'
[7m [0m [91m         ~~~~~~~~~~~~~~[0m

[96msrc/lib/documentation/DocumentationSystem.ts[0m:[93m495[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'documentId' does not exist on type 'EHRExportResult'.

[7m495[0m         documentId: result.documentId,
[7m   [0m [91m                           ~~~~~~~~~~[0m
[96msrc/lib/documentation/DocumentationSystem.ts[0m:[93m293[0m:[93m9[0m - [91merror[0m[90m ts(2740): [0mType 'Readonly<Record<string, unknown>>' is missing the following properties from type 'SessionMetadata': version, createdAt, updatedAt, createdBy, and 3 more.

[7m293[0m         metadata: { generated: true, timestamp: new Date() } as Readonly<
[7m   [0m [91m        ~~~~~~~~[0m
[96msrc/lib/documentation/DocumentationSystem.ts[0m:[93m30[0m:[93m8[0m - [91merror[0m[90m ts(2459): [0mModule '"./ehrIntegration"' declares 'EHRExportResult' locally, but it is not exported.

[7m30[0m   type EHRExportResult,
[7m  [0m [91m       ~~~~~~~~~~~~~~~[0m
[96msrc/lib/documentation/DocumentationSystem.ts[0m:[93m29[0m:[93m8[0m - [91merror[0m[90m ts(2459): [0mModule '"./ehrIntegration"' declares 'EHRExportOptions' locally, but it is not exported.

[7m29[0m   type EHRExportOptions,
[7m  [0m [91m       ~~~~~~~~~~~~~~~~[0m

[96msrc/lib/documentation/useDocumentation.ts[0m:[93m419[0m:[93m25[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m419[0m             ? { errors: rawResult.errors }
[7m   [0m [91m                        ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m418[0m:[93m29[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m418[0m           ...(Array.isArray(rawResult.errors)
[7m   [0m [91m                            ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m417[0m:[93m54[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m417[0m           ...(rawResult.data !== undefined ? { data: rawResult.data } : {}),
[7m   [0m [91m                                                     ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m417[0m:[93m15[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m417[0m           ...(rawResult.data !== undefined ? { data: rawResult.data } : {}),
[7m   [0m [91m              ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m410[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m410[0m               ? rawResult.metadata
[7m   [0m [91m                ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m409[0m:[93m13[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m409[0m             rawResult.metadata !== null
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m408[0m:[93m20[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m408[0m             typeof rawResult.metadata === 'object' &&
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m405[0m:[93m17[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m405[0m               ? rawResult.format
[7m   [0m [91m                ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m404[0m:[93m20[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m404[0m             typeof rawResult.format === 'string'
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m402[0m:[93m54[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m402[0m             typeof rawResult.success === 'boolean' ? rawResult.success : false,
[7m   [0m [91m                                                     ~~~~~~~~~[0m
[96msrc/lib/documentation/useDocumentation.ts[0m:[93m402[0m:[93m20[0m - [91merror[0m[90m ts(18046): [0m'rawResult' is of type 'unknown'.

[7m402[0m             typeof rawResult.success === 'boolean' ? rawResult.success : false,
[7m   [0m [91m                   ~~~~~~~~~[0m

[96msrc/lib/ehr/__tests__/allscripts.test.ts[0m:[93m24[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_SECRET' comes from an index signature, so it must be accessed with ['CLIENT_SECRET'].

[7m24[0m     clientSecret: process.env.CLIENT_SECRET || 'example-client-secret',
[7m  [0m [91m                              ~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/allscripts.test.ts[0m:[93m23[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m23[0m     clientId: testId || 'example-client-id',
[7m  [0m [91m              ~~~~~~[0m

[96msrc/lib/ehr/__tests__/athenahealth.test.ts[0m:[93m15[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_SECRET' comes from an index signature, so it must be accessed with ['CLIENT_SECRET'].

[7m15[0m     clientSecret: process.env.CLIENT_SECRET || 'example-client-secret',
[7m  [0m [91m                              ~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/athenahealth.test.ts[0m:[93m14[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m14[0m     clientId: testId || 'example-client-id',
[7m  [0m [91m              ~~~~~~[0m

[96msrc/lib/ehr/__tests__/cerner.test.ts[0m:[93m16[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_SECRET' comes from an index signature, so it must be accessed with ['CLIENT_SECRET'].

[7m16[0m     clientSecret: process.env.CLIENT_SECRET || 'example-client-secret',
[7m  [0m [91m                              ~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/cerner.test.ts[0m:[93m15[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m15[0m     clientId: testId || 'example-client-id',
[7m  [0m [91m              ~~~~~~[0m

[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m110[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_SECRET' comes from an index signature, so it must be accessed with ['CLIENT_SECRET'].

[7m110[0m     clientSecret: process.env.CLIENT_SECRET || 'example-client-secret',
[7m   [0m [91m                              ~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m109[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m109[0m     clientId: testId || 'example-client-id',
[7m   [0m [91m              ~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m87[0m:[93m42[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m87[0m       await ehrService.configureProvider(mockProvider)
[7m  [0m [91m                                         ~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m78[0m:[93m42[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m78[0m       await ehrService.configureProvider(mockProvider)
[7m  [0m [91m                                         ~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m67[0m:[93m42[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m67[0m       await ehrService.configureProvider(mockProvider)
[7m  [0m [91m                                         ~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m53[0m:[93m42[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m53[0m       await ehrService.configureProvider(mockProvider)
[7m  [0m [91m                                         ~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m46[0m:[93m38[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ vendor: string; id: string; name: string; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ vendor: string; id: string; name: string; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m46[0m         ehrService.configureProvider(invalidProvider),
[7m  [0m [91m                                     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m36[0m:[93m38[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is not assignable to parameter of type 'EHRProvider'.
  Type '{ id: string; name: string; vendor: "epic"; baseUrl: string; clientId: any; clientSecret: string; scopes: string[]; }' is missing the following properties from type 'EHRProvider': initialize, cleanup

[7m36[0m         ehrService.configureProvider(mockProvider),
[7m  [0m [91m                                     ~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m18[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_SECRET' comes from an index signature, so it must be accessed with ['CLIENT_SECRET'].

[7m18[0m     clientSecret: process.env.CLIENT_SECRET || 'example-client-secret',
[7m  [0m [91m                              ~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/__tests__/ehr.test.ts[0m:[93m17[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m17[0m     clientId: testId || 'example-client-id',
[7m  [0m [91m              ~~~~~~[0m

[96msrc/lib/ehr/plugins/api.ts[0m:[93m25[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType 'RedisStorageAPI' is not assignable to type 'StorageAPI'.
  The types returned by 'get(...)' are incompatible between these types.

[7m25[0m     storage,
[7m  [0m [91m    ~~~~~~~[0m

[96msrc/lib/ehr/providers/allscripts.provider.ts[0m:[93m160[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m160[0m   async cleanup(): Promise<void> {
[7m   [0m [91m        ~~~~~~~[0m
[96msrc/lib/ehr/providers/allscripts.provider.ts[0m:[93m130[0m:[93m22[0m - [91merror[0m[90m ts(18046): [0m'capabilityStatement' is of type 'unknown'.

[7m130[0m     const security = capabilityStatement.rest[0]?.security
[7m   [0m [91m                     ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/providers/allscripts.provider.ts[0m:[93m122[0m:[93m12[0m - [91merror[0m[90m ts(18046): [0m'capabilityStatement' is of type 'unknown'.

[7m122[0m       if (!capabilityStatement[feature]) {
[7m   [0m [91m           ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/ehr/providers/allscripts.provider.ts[0m:[93m31[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m31[0m   async initialize(): Promise<void> {
[7m  [0m [91m        ~~~~~~~~~~[0m

[96msrc/lib/ehr/providers/athenahealth.provider.ts[0m:[93m186[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m186[0m   async cleanup(): Promise<void> {
[7m   [0m [91m        ~~~~~~~[0m
[96msrc/lib/ehr/providers/athenahealth.provider.ts[0m:[93m57[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m57[0m   async initialize(): Promise<void> {
[7m  [0m [91m        ~~~~~~~~~~[0m

[96msrc/lib/ehr/providers/cerner.provider.ts[0m:[93m108[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m108[0m   async cleanup(): Promise<void> {
[7m   [0m [91m        ~~~~~~~[0m
[96msrc/lib/ehr/providers/cerner.provider.ts[0m:[93m29[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m29[0m   async initialize(): Promise<void> {
[7m  [0m [91m        ~~~~~~~~~~[0m

[96msrc/lib/ehr/providers/epic.provider.ts[0m:[93m69[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m69[0m   async cleanup(): Promise<void> {
[7m  [0m [91m        ~~~~~~~[0m
[96msrc/lib/ehr/providers/epic.provider.ts[0m:[93m24[0m:[93m9[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'BaseEHRProvider'.

[7m24[0m   async initialize(): Promise<void> {
[7m  [0m [91m        ~~~~~~~~~~[0m

[96msrc/lib/ehr/services/oauth2.service.ts[0m:[93m48[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'access_token' does not exist on type 'string'.

[7m48[0m     return newToken.access_token
[7m  [0m [91m                    ~~~~~~~~~~~~[0m

[96msrc/lib/ehr/services/redis.storage.ts[0m:[93m37[0m:[93m9[0m - [91merror[0m[90m ts(2416): [0mProperty 'get' in type 'RedisStorageAPI' is not assignable to the same property in base type 'StorageAPI'.
  Type '(key: string) => Promise<unknown>' is not assignable to type '<T = unknown>(key: string) => Promise<T>'.

[7m37[0m   async get(key: string): Promise<unknown> {
[7m  [0m [91m        ~~~[0m

[96msrc/lib/error/ErrorBoundary.tsx[0m:[93m45[0m:[93m10[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<Props, State, any>'.

[7m45[0m   public render() {
[7m  [0m [91m         ~~~~~~[0m
[96msrc/lib/error/ErrorBoundary.tsx[0m:[93m29[0m:[93m10[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<Props, State, any>'.

[7m29[0m   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/error/ErrorBoundary.tsx[0m:[93m20[0m:[93m10[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<Props, State, any>'.

[7m20[0m   public state: State = {
[7m  [0m [91m         ~~~~~[0m

[96msrc/lib/fhe/analytics.ts[0m:[93m645[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m645[0m           userMessages[userMessages.length - 1].timestamp || Date.now()
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/analytics.ts[0m:[93m643[0m:[93m32[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m643[0m         const firstTimestamp = userMessages[0].timestamp || Date.now()
[7m   [0m [91m                               ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/analytics.ts[0m:[93m520[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType 'ChatMessage | undefined' is not assignable to type 'ChatMessage'.
  Type 'undefined' is not assignable to type 'ChatMessage'.

[7m520[0m             client: filteredMessages[i + 1],
[7m   [0m [91m            ~~~~~~[0m
[96msrc/lib/fhe/analytics.ts[0m:[93m519[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType 'ChatMessage | undefined' is not assignable to type 'ChatMessage'.
  Type 'undefined' is not assignable to type 'ChatMessage'.

[7m519[0m             therapist: filteredMessages[i],
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/lib/fhe/analytics.ts[0m:[93m516[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m516[0m           filteredMessages[i + 1].role === 'user'
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/analytics.ts[0m:[93m515[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m515[0m           filteredMessages[i].role === 'assistant' &&
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/exports.ts[0m:[93m81[0m:[93m10[0m - [91merror[0m[90m ts(2614): [0mModule '"./index"' has no exported member 'FHEService'. Did you mean to use 'import FHEService from "./index"' instead?

[7m81[0m export { FHEService } from './index'
[7m  [0m [91m         ~~~~~~~~~~[0m
[96msrc/lib/fhe/exports.ts[0m:[93m69[0m:[93m11[0m - [91merror[0m[90m ts(2339): [0mProperty 'fheService' does not exist on type 'typeof import("/root/pixel/src/lib/fhe/index")'.

[7m69[0m   const { fheService } = await import('./index')
[7m  [0m [91m          ~~~~~~~~~~[0m
[96msrc/lib/fhe/exports.ts[0m:[93m28[0m:[93m10[0m - [91merror[0m[90m ts(2614): [0mModule '"./index"' has no exported member 'fheService'. Did you mean to use 'import fheService from "./index"' instead?

[7m28[0m export { fheService } from './index'
[7m  [0m [91m         ~~~~~~~~~~[0m

[96msrc/lib/fhe/fhe-factory.ts[0m:[93m569[0m:[93m98[0m - [91merror[0m[90m ts(4111): [0mProperty 'tenantId' comes from an index signature, so it must be accessed with ['tenantId'].

[7m569[0m           `Tenant ${tenantId} attempted to decrypt data owned by tenant ${encryptedData.metadata.tenantId}`,
[7m   [0m [91m                                                                                                 ~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m566[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'tenantId' comes from an index signature, so it must be accessed with ['tenantId'].

[7m566[0m         encryptedData.metadata.tenantId !== tenantId
[7m   [0m [91m                               ~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m565[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'tenantId' comes from an index signature, so it must be accessed with ['tenantId'].

[7m565[0m         encryptedData.metadata.tenantId &&
[7m   [0m [91m                               ~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m331[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m331[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m325[0m:[93m50[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{}' is not assignable to parameter of type 'SealCipherText'.
  Type '{}' is missing the following properties from type 'SealCipherText': copy, delete

[7m325[0m       const result = await sealOperations.rotate(ciphertext, steps)
[7m   [0m [91m                                                 ~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m319[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m319[0m         vector.metadata?.serializedCiphertext || (vector.data as string)
[7m   [0m [91m                         ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m305[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m305[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m299[0m:[93m54[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{}' is not assignable to parameter of type 'SealCipherText'.
  Type '{}' is missing the following properties from type 'SealCipherText': copy, delete

[7m299[0m       const result = await sealOperations.polynomial(ciphertext, coefficients)
[7m   [0m [91m                                                     ~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m293[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m293[0m         value.metadata?.serializedCiphertext || (value.data as string)
[7m   [0m [91m                        ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m279[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m279[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m273[0m:[93m50[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{}' is not assignable to parameter of type 'SealCipherText'.
  Type '{}' is missing the following properties from type 'SealCipherText': copy, delete

[7m273[0m       const result = await sealOperations.negate(ciphertext)
[7m   [0m [91m                                                 ~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m267[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m267[0m         value.metadata?.serializedCiphertext || (value.data as string)
[7m   [0m [91m                        ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m256[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m256[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m248[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m248[0m         aCiphertext as string,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m241[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m241[0m       const bCiphertext = b.metadata?.serializedCiphertext || (b.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m240[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m240[0m       const aCiphertext = a.metadata?.serializedCiphertext || (a.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m222[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m222[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m214[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m214[0m         aCiphertext as string,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m207[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m207[0m       const bCiphertext = b.metadata?.serializedCiphertext || (b.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m206[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m206[0m       const aCiphertext = a.metadata?.serializedCiphertext || (a.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m188[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m188[0m       return createEncryptedData(result.result)
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m180[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m180[0m         aCiphertext as string,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m173[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m173[0m       const bCiphertext = b.metadata?.serializedCiphertext || (b.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m172[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m172[0m       const aCiphertext = a.metadata?.serializedCiphertext || (a.data as string)
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m154[0m:[93m41[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{}' is not assignable to parameter of type 'SealCipherText'.
  Type '{}' is missing the following properties from type 'SealCipherText': copy, delete

[7m154[0m       return (await sealService.decrypt(ciphertext)) as T
[7m   [0m [91m                                        ~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m147[0m:[93m33[0m - [91merror[0m[90m ts(4111): [0mProperty 'serializedCiphertext' comes from an index signature, so it must be accessed with ['serializedCiphertext'].

[7m147[0m         encryptedData.metadata?.serializedCiphertext ||
[7m   [0m [91m                                ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/fhe-factory.ts[0m:[93m133[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'SealCipherText' is not assignable to parameter of type 'string'.

[7m133[0m       return createEncryptedData(encrypted, data as number[])
[7m   [0m [91m                                 ~~~~~~~~~[0m

[96msrc/lib/fhe/hipaa-monitoring.ts[0m:[93m11[0m:[93m17[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'aws-sdk' or its corresponding type declarations.

[7m11[0m import AWS from 'aws-sdk'
[7m  [0m [91m                ~~~~~~~~~[0m

[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m497[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'supported' comes from an index signature, so it must be accessed with ['supported'].

[7m497[0m         metadata.supported = false
[7m   [0m [91m                 ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m492[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'operation' comes from an index signature, so it must be accessed with ['operation'].

[7m492[0m         metadata.custom = params?.operation || 'unknown'
[7m   [0m [91m                                  ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m492[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'custom' comes from an index signature, so it must be accessed with ['custom'].

[7m492[0m         metadata.custom = params?.operation || 'unknown'
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m489[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'operation' comes from an index signature, so it must be accessed with ['operation'].

[7m489[0m           params?.operation as string,
[7m   [0m [91m                  ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m483[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'filtered' comes from an index signature, so it must be accessed with ['filtered'].

[7m483[0m         metadata.filtered = true
[7m   [0m [91m                 ~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m481[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'filterTerms' comes from an index signature, so it must be accessed with ['filterTerms'].

[7m481[0m           params?.filterTerms as string[] | undefined,
[7m   [0m [91m                  ~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m475[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'tokenCount' comes from an index signature, so it must be accessed with ['tokenCount'].

[7m475[0m         metadata.tokenCount = tokens.length
[7m   [0m [91m                 ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m469[0m:[93m38[0m - [91merror[0m[90m ts(4111): [0mProperty 'maxLength' comes from an index signature, so it must be accessed with ['maxLength'].

[7m469[0m         metadata.maxLength = params?.maxLength || 100
[7m   [0m [91m                                     ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m469[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'maxLength' comes from an index signature, so it must be accessed with ['maxLength'].

[7m469[0m         metadata.maxLength = params?.maxLength || 100
[7m   [0m [91m                 ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m467[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'maxLength' comes from an index signature, so it must be accessed with ['maxLength'].

[7m467[0m           params?.maxLength as number | undefined,
[7m   [0m [91m                  ~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m461[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m461[0m         metadata.categories = params?.categories || {}
[7m   [0m [91m                                      ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m461[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m461[0m         metadata.categories = params?.categories || {}
[7m   [0m [91m                 ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m459[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m459[0m           params?.categories as Record<string, string[]> | undefined,
[7m   [0m [91m                  ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m453[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'confidence' comes from an index signature, so it must be accessed with ['confidence'].

[7m453[0m         metadata.confidence = 0.85
[7m   [0m [91m                 ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m396[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m396[0m         return { result: rotResult.result, success: rotResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m395[0m:[93m47[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m395[0m         rotResult = await this.sealOps.rotate(serializedCiphertext, steps)
[7m   [0m [91m                                              ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m394[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'steps' comes from an index signature, so it must be accessed with ['steps'].

[7m394[0m         steps = (params?.steps as number) || 1
[7m   [0m [91m                         ~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m390[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m390[0m         return { result: polyResult.result, success: polyResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m387[0m:[93m11[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m387[0m           serializedCiphertext,
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m385[0m:[93m33[0m - [91merror[0m[90m ts(4111): [0mProperty 'coefficients' comes from an index signature, so it must be accessed with ['coefficients'].

[7m385[0m         coefficients = (params?.coefficients as number[]) || [0, 1]
[7m   [0m [91m                                ~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m381[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m381[0m         return { result: negResult.result, success: negResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m380[0m:[93m47[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m380[0m         negResult = await this.sealOps.negate(serializedCiphertext)
[7m   [0m [91m                                              ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m376[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m376[0m         return { result: multResult.result, success: multResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m373[0m:[93m11[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m373[0m           serializedCiphertext,
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m371[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'multiplier' comes from an index signature, so it must be accessed with ['multiplier'].

[7m371[0m         multiplier = (params?.multiplier as number[]) || [2]
[7m   [0m [91m                              ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m367[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m367[0m         return { result: subResult.result, success: subResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m364[0m:[93m11[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m364[0m           serializedCiphertext,
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m362[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'subtrahend' comes from an index signature, so it must be accessed with ['subtrahend'].

[7m362[0m         subtrahend = (params?.subtrahend as number[]) || [1]
[7m   [0m [91m                              ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m358[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'string'.

[7m358[0m         return { result: addResult.result, success: addResult.success }
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m357[0m:[93m44[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string' is not assignable to parameter of type 'SealCipherText'.

[7m357[0m         addResult = await this.sealOps.add(serializedCiphertext, addend)
[7m   [0m [91m                                           ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m356[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'addend' comes from an index signature, so it must be accessed with ['addend'].

[7m356[0m         addend = (params?.addend as number[]) || [1]
[7m   [0m [91m                          ~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m263[0m:[93m43[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m263[0m             metadata.categories = params?.categories || {}
[7m   [0m [91m                                          ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m263[0m:[93m22[0m - [91merror[0m[90m ts(4111): [0mProperty 'categories' comes from an index signature, so it must be accessed with ['categories'].

[7m263[0m             metadata.categories = params?.categories || {}
[7m   [0m [91m                     ~~~~~~~~~~[0m
[96msrc/lib/fhe/homomorphic-ops.ts[0m:[93m248[0m:[93m22[0m - [91merror[0m[90m ts(4111): [0mProperty 'confidence' comes from an index signature, so it must be accessed with ['confidence'].

[7m248[0m             metadata.confidence = 0.85
[7m   [0m [91m                     ~~~~~~~~~~[0m

[96msrc/lib/fhe/index.ts[0m:[93m68[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'data' is declared but its value is never read.

[7m68[0m       data: string,
[7m  [0m [91m      ~~~~[0m
[96msrc/lib/fhe/index.ts[0m:[93m56[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m56[0m       return parts[parts.length - 1]
[7m  [0m [91m      ~~~~~~[0m

[96msrc/lib/fhe/key-rotation.ts[0m:[93m13[0m:[93m17[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'aws-sdk' or its corresponding type declarations.

[7m13[0m import AWS from 'aws-sdk'
[7m  [0m [91m                ~~~~~~~~~[0m
[96msrc/lib/fhe/key-rotation.ts[0m:[93m12[0m:[93m38[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'aws-sdk' or its corresponding type declarations.

[7m12[0m import type { KMS, CloudWatch } from 'aws-sdk'
[7m  [0m [91m                                     ~~~~~~~~~[0m

[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m788[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'determineSecurityLevel' is declared but its value is never read.

[7m788[0m   private determineSecurityLevel(complexity: number): SecurityLevel {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m776[0m:[93m44[0m - [91merror[0m[90m ts(4111): [0mProperty 'batchSize' comes from an index signature, so it must be accessed with ['batchSize'].

[7m776[0m       const batchSize = context.parameters.batchSize as number
[7m   [0m [91m                                           ~~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m768[0m:[93m43[0m - [91merror[0m[90m ts(4111): [0mProperty 'dataSize' comes from an index signature, so it must be accessed with ['dataSize'].

[7m768[0m       const dataSize = context.parameters.dataSize as number
[7m   [0m [91m                                          ~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m753[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m753[0m     return params
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m614[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m614[0m     return baseParams
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m573[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m573[0m     return baseParams
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m548[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'basePreset' is declared but its value is never read.

[7m548[0m     basePreset: string,
[7m   [0m [91m    ~~~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m541[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m541[0m     return baseParams
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m503[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m503[0m     return baseParams
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m474[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'basePreset' is declared but its value is never read.

[7m474[0m     basePreset: string,
[7m   [0m [91m    ~~~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m467[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ polyModulusDegree?: number | undefined; coeffModulusBits?: number[] | undefined; plainModulus?: number; scale?: number; securityLevel?: SealSecurityLevel; }' is not assignable to type 'SealEncryptionParamsOptions'.
  Types of property 'polyModulusDegree' are incompatible.

[7m467[0m     return baseParams
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m442[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'basePreset' is declared but its value is never read.

[7m442[0m     basePreset: string,
[7m   [0m [91m    ~~~~~~~~~~[0m
[96msrc/lib/fhe/parameter-optimizer.ts[0m:[93m364[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m364[0m       operationGroups[metric.operation].push(metric)
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/pattern-recognition-factory.ts[0m:[93m128[0m:[93m57[0m - [91merror[0m[90m ts(4111): [0mProperty 'mode' comes from an index signature, so it must be accessed with ['mode'].

[7m128[0m     const useMock = config?.useMock === true || config?.mode === 'development'
[7m   [0m [91m                                                        ~~~~[0m
[96msrc/lib/fhe/pattern-recognition-factory.ts[0m:[93m128[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'useMock' comes from an index signature, so it must be accessed with ['useMock'].

[7m128[0m     const useMock = config?.useMock === true || config?.mode === 'development'
[7m   [0m [91m                            ~~~~~~~[0m
[96msrc/lib/fhe/pattern-recognition-factory.ts[0m:[93m107[0m:[93m7[0m - [91merror[0m[90m ts(2741): [0mProperty 'severityScore' is missing in type '{ id: string; riskFactor: string; correlatedFactors: { factor: string; strength: number; }[]; confidence: number; significance: string; }' but required in type 'RiskCorrelation'.

[7m107[0m       {
[7m   [0m [91m      ~[0m
[7m108[0m         id: nanoid(),
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m112[0m         significance: 'Strong correlation detected',
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m113[0m       },
[7m   [0m [91m~~~~~~~[0m
[96msrc/lib/fhe/pattern-recognition-factory.ts[0m:[93m83[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'number'.

[7m83[0m         significance: 'Medium significance',
[7m  [0m [91m        ~~~~~~~~~~~~[0m

[96msrc/lib/fhe/run-seal-test.js[0m:[93m13[0m:[93m22[0m - [93mwarning[0m[90m ts(80001): [0mFile is a CommonJS module; it may be converted to an ES module.

[7m13[0m const { execSync } = require('child_process')
[7m  [0m [93m                     ~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/seal-operations.ts[0m:[93m603[0m:[93m13[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'number | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m603[0m             coefficients[i],
[7m   [0m [91m            ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m598[0m:[93m31[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m598[0m           ckksEncoder.encode([coefficients[i]], Number(scale), nextCoef)
[7m   [0m [91m                              ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m570[0m:[93m11[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'number | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m570[0m           coefficients[n],
[7m   [0m [91m          ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m565[0m:[93m29[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m565[0m         ckksEncoder.encode([coefficients[n]], Number(scale), highestCoef)
[7m   [0m [91m                            ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m538[0m:[93m13[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'number | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m538[0m             coefficients[0],
[7m   [0m [91m            ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m530[0m:[93m43[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m530[0m           const currentCoeff: number[] = [coefficients[0]]
[7m   [0m [91m                                          ~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m260[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m260[0m             coefArray[i] = bAsNumberArray[i]
[7m   [0m [91m            ~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m8[0m:[93m39[0m - [91merror[0m[90m ts(1484): [0m'SealPlainText' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m8[0m import { SealService, SealCipherText, SealPlainText } from './seal-service'
[7m [0m [91m                                      ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-operations.ts[0m:[93m8[0m:[93m23[0m - [91merror[0m[90m ts(1484): [0m'SealCipherText' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m8[0m import { SealService, SealCipherText, SealPlainText } from './seal-service'
[7m [0m [91m                      ~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m734[0m:[93m19[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'T | undefined' is not assignable to parameter of type 'T'.
  'T' could be instantiated with an arbitrary type which could be unrelated to 'T | undefined'.

[7m734[0m       result.push(copy[index])
[7m   [0m [91m                  ~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m711[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m711[0m         matrix[i][j] =
[7m   [0m [91m        ~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m688[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m688[0m           matrix[i][j] = 0.3 + Math.random() * 0.6
[7m   [0m [91m          ~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m685[0m:[93m11[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m685[0m           matrix[i][j] = 1 // Self-correlation is always 1
[7m   [0m [91m          ~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m666[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '{ type: string | undefined; confidence: number; }[]' is not assignable to type '{ type: string; confidence: number; }[]'.
  Type '{ type: string | undefined; confidence: number; }' is not assignable to type '{ type: string; confidence: number; }'.

[7m666[0m     return results
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m638[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'windowSize' is declared but its value is never read.

[7m638[0m     windowSize: number,
[7m   [0m [91m    ~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m637[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'encryptedFeatures' is declared but its value is never read.

[7m637[0m     encryptedFeatures: unknown[],
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m622[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'isolation' comes from an index signature, so it must be accessed with ['isolation'].

[7m622[0m       weights.isolation || 1,
[7m   [0m [91m              ~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m621[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'substance_use' comes from an index signature, so it must be accessed with ['substance_use'].

[7m621[0m       weights.substance_use || 1,
[7m   [0m [91m              ~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m620[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'suicidal' comes from an index signature, so it must be accessed with ['suicidal'].

[7m620[0m       weights.suicidal || 1,
[7m   [0m [91m              ~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m619[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'helplessness' comes from an index signature, so it must be accessed with ['helplessness'].

[7m619[0m       weights.helplessness || 1,
[7m   [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m618[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'anxiety' comes from an index signature, so it must be accessed with ['anxiety'].

[7m618[0m       weights.anxiety || 1,
[7m   [0m [91m              ~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m617[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'depression' comes from an index signature, so it must be accessed with ['depression'].

[7m617[0m       weights.depression || 1,
[7m   [0m [91m              ~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m591[0m:[93m58[0m - [91merror[0m[90m ts(7006): [0mParameter 'r' implicitly has an 'any' type.

[7m591[0m         const isolationRisk = analysis.riskFactors.find((r) =>
[7m   [0m [91m                                                         ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m588[0m:[93m58[0m - [91merror[0m[90m ts(7006): [0mParameter 'r' implicitly has an 'any' type.

[7m588[0m         const substanceRisk = analysis.riskFactors.find((r) =>
[7m   [0m [91m                                                         ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m585[0m:[93m57[0m - [91merror[0m[90m ts(7006): [0mParameter 'r' implicitly has an 'any' type.

[7m585[0m         const suicidalRisk = analysis.riskFactors.find((r) =>
[7m   [0m [91m                                                        ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m565[0m:[93m12[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m565[0m           (e) => String(e.type) === 'dominance' || String(e.type) === 'control',
[7m   [0m [91m           ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m561[0m:[93m12[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m561[0m           (e) => String(e.type) === 'arousal' || String(e.type) === 'anxiety',
[7m   [0m [91m           ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m557[0m:[93m12[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m557[0m           (e) => String(e.type) === 'valence' || String(e.type) === 'happiness',
[7m   [0m [91m           ~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m478[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'dominance' comes from an index signature, so it must be accessed with ['dominance'].

[7m478[0m           featureVector.push(emotions.dominance || 0)
[7m   [0m [91m                                      ~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m477[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'arousal' comes from an index signature, so it must be accessed with ['arousal'].

[7m477[0m           featureVector.push(emotions.arousal || 0)
[7m   [0m [91m                                      ~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m476[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'valence' comes from an index signature, so it must be accessed with ['valence'].

[7m476[0m           featureVector.push(emotions.valence || 0)
[7m   [0m [91m                                      ~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m428[0m:[93m15[0m - [91merror[0m[90m ts(6133): [0m'_data' is declared but its value is never read.

[7m428[0m         const _data = JSON.parse(encryptedData.encryptedData)
[7m   [0m [91m              ~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m380[0m:[93m13[0m - [91merror[0m[90m ts(6133): [0m'_seal' is declared but its value is never read.

[7m380[0m       const _seal = this.sealService.getSeal()
[7m   [0m [91m            ~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m337[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m337[0m           description: patternDescriptions[i % patternDescriptions.length],
[7m   [0m [91m          ~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m335[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m335[0m           type: patternType,
[7m   [0m [91m          ~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m254[0m:[93m13[0m - [91merror[0m[90m ts(6133): [0m'_seal' is declared but its value is never read.

[7m254[0m       const _seal = this.sealService.getSeal()
[7m   [0m [91m            ~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m128[0m:[93m13[0m - [91merror[0m[90m ts(6133): [0m'_seal' is declared but its value is never read.

[7m128[0m       const _seal = this.sealService.getSeal()
[7m   [0m [91m            ~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m33[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'sealOperations' is declared but its value is never read.

[7m33[0m   private sealOperations: SealOperations
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/seal-pattern-recognition.ts[0m:[93m22[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"../ai/interfaces/therapy"' has no exported member 'EmotionAnalysis'.

[7m22[0m import type { EmotionAnalysis, TherapySession } from '../ai/interfaces/therapy'
[7m  [0m [91m              ~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/seal-service.ts[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'SealContextOptions' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m13[0m   SealContextOptions,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/test-seal-integration.ts[0m:[93m94[0m:[93m51[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'SealCipherText'.

[7m94[0m       const decryptedMult = await service.decrypt(multResult.result)
[7m  [0m [91m                                                  ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/test-seal-integration.ts[0m:[93m78[0m:[93m50[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'SealCipherText'.

[7m78[0m       const decryptedAdd = await service.decrypt(addResult.result)
[7m  [0m [91m                                                 ~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/__mocks__/fhe-service.ts[0m:[93m4[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m4[0m import { vi } from 'vitest'
[7m [0m [91m         ~~[0m

[96msrc/lib/fhe/__tests__/key-rotation.test.ts[0m:[93m92[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'HIPAA_MASTER_SECRET' comes from an index signature, so it must be accessed with ['HIPAA_MASTER_SECRET'].

[7m92[0m       process.env.HIPAA_MASTER_SECRET = undefined
[7m  [0m [91m                  ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/key-rotation.test.ts[0m:[93m13[0m:[93m13[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m13[0m process.env.NODE_ENV = 'test'
[7m  [0m [91m            ~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/key-rotation.test.ts[0m:[93m11[0m:[93m13[0m - [91merror[0m[90m ts(4111): [0mProperty 'KEY_ROTATION_LAMBDA_ARN' comes from an index signature, so it must be accessed with ['KEY_ROTATION_LAMBDA_ARN'].

[7m11[0m process.env.KEY_ROTATION_LAMBDA_ARN =
[7m  [0m [91m            ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/key-rotation.test.ts[0m:[93m9[0m:[93m13[0m - [91merror[0m[90m ts(4111): [0mProperty 'HIPAA_MASTER_SECRET' comes from an index signature, so it must be accessed with ['HIPAA_MASTER_SECRET'].

[7m9[0m process.env.HIPAA_MASTER_SECRET =
[7m [0m [91m            ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/fhe/__tests__/multi-tenant-isolation.test.ts[0m:[93m15[0m:[93m31[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../tenant-manager' or its corresponding type declarations.

[7m15[0m import { tenantManager } from '../tenant-manager'
[7m  [0m [91m                              ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/fhe/__tests__/multi-tenant-isolation.test.ts[0m:[93m14[0m:[93m10[0m - [91merror[0m[90m ts(2614): [0mModule '"../index"' has no exported member 'fheService'. Did you mean to use 'import fheService from "../index"' instead?
