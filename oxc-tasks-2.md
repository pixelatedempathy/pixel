# OXC Linting Tasks - Part 2

## TypeScript Errors

### `no-explicit-any`

- [x] `src/lib/db/ai/repository.ts:1381:17`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1384:23`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1444:25`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1445:25`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1446:21`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1447:22`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1448:23`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1452:16`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1491:50`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1546:14`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1660:33`: Unexpected any. Specify a different type.
- [x] `src/lib/db/ai/repository.ts:1670:18`: Unexpected any. Specify a different type.
- [x] `src/simulator/utils/privacy.ts:189:43`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:595:18`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:609:42`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:640:12`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:672:49`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:672:65`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:702:43`: Unexpected any. Specify a different type.
- [x] `src/lib/api/psychology-pipeline-demo.ts:702:59`: Unexpected any. Specify a different type.

### `no-require-imports`

- [x] `src/lib/ai/models/registry.ts:807:28`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/mental-llama/config.ts:118:28`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/bias-detection/__tests__/fixtures/index.ts:31:33`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/bias-detection/__tests__/fixtures/index.ts:32:40`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/bias-detection/__tests__/fixtures/index.ts:49:7`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/bias-detection/__tests__/fixtures/index.ts:67:7`: Expected "import" statement instead of "require" call
- [x] `src/lib/ai/bias-detection/__tests__/fixtures/index.ts:86:7`: Expected "import" statement instead of "require" call

### `ban-ts-comment`

- [x] `src/lib/logging/index.ts:373:5`: Include a description after the @ts-expect-error directive
- [x] `src/lib/logging/index.ts:375:7`: Include a description after the @ts-expect-error directive
- [x] `src/lib/logging/index.ts:378:5`: Include a description after the @ts-expect-error directive
- [x] `src/lib/logging/index.ts:401:5`: Include a description after the @ts-expect-error directive

### `no-extraneous-class`

- [x] `src/lib/ai/bias-detection/errors.ts:567:14`: Unexpected class with only static properties.
- [x] `src/lib/ai/temporal/TemporalAnalysisAlgorithm.ts:17:14`: Unexpected class with only static properties.
- [x] `src/lib/analytics/trends.ts:10:14`: Unexpected class with only static properties.
- [x] `src/lib/analytics/breach.ts:94:14`: Unexpected class with only static properties.
- [x] `src/lib/analytics/notifications.ts:84:14`: Unexpected class with only static properties.
- [x] `src/lib/analytics/compliance.ts:10:14`: Unexpected class with only static properties.
- [x] `src/lib/analytics/breach-analytics.ts:69:14`: Unexpected class with only static properties.
- [x] `src/lib/ai/services/ContextualAwarenessService.ts:15:14`: Unexpected class with only static properties.
- [x] `src/lib/ai/services/OutcomeRecommendationEngine.ts:29:14`: Unexpected class with only static properties.

## ESLint Errors

### `no-unused-vars`

- [x] `tests/mobile/mobile-responsiveness.spec.ts:176:15`: Variable 'inputType' is declared but never used.
- [x] `tests/mobile/mobile-responsiveness.spec.ts:177:15`: Variable 'autocomplete' is declared but never used.
- [x] `tests/accessibility/accessibility-audit.spec.ts:213:19`: Variable 'ariaDescribedby' is declared but never used.
- [x] `src/lib/api/psychology-pipeline-demo.ts:595:3`: Parameter 'knowledgeBase' is declared but never used.
- [x] `src/lib/api/psychology-pipeline-demo.ts:657:3`: Parameter 'guidelines' is declared but never used.
- [x] `src/lib/api/psychology-pipeline-demo.ts:658:3`: Parameter 'severity' is declared but never used.
- [x] `src/lib/api/psychology-pipeline-demo.ts:702:50`: Parameter 'request' is declared but never used.
- [x] `tests/security/ai-web-vulnerability-scanner.ts:514:16`: Catch parameter 'error' is caught but never used.
- [x] `scripts/validate-typescript.ts:288:12`: Catch parameter 'error' is caught but never used.
- [x] `tests/e2e/user-acceptance.spec.ts:21:5`: Parameter 'context' is declared but never used.
- [x] `tests/e2e/demo-workflow.spec.ts:239:13`: Variable 'initialRatio' is declared but never used.
- [x] `tests/e2e/demo-workflow.spec.ts:250:13`: Variable 'updatedRatio' is declared but never used.
- [x] `src/components/therapy/TreatmentPlanManager.tsx:58:12`: Catch parameter 'e' is caught but never used.
- [x] `src/lib/crypto/index.ts:626:18`: Catch parameter 'error' is caught but never used.
- [x] `src/lib/ai/bias-detection/serverless-handlers.ts:12:29`: Parameter 'context' is declared but never used.
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:26:8`: Parameter 'clinicalCase' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:178:5`: Parameter 'approach' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:358:5`: Parameter 'conv' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:359:5`: Parameter 'approach' is declared but never used.
- [x] `src/components/demo/ConversationGenerationDemo.tsx:143:59`: Parameter 'index' is declared but never used.
- [x] `src/components/demo/ConversationGenerationDemo.tsx:266:5`: Parameter 'sources' is declared but never used.
- [x] `src/components/transitions/AnimationOrchestrator.tsx:61:3`: Parameter 'orchestrationType' is declared but never used.
- [x] `src/components/transitions/AnimationOrchestrator.tsx:73:3`: Parameter 'viewport' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:22:3`: Parameter 'title' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:23:3`: Parameter 'description' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:24:3`: Parameter 'activeItem' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:821:20`: Parameter 'index' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:828:40`: Parameter 'sessionFeatures' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:833:37`: Parameter 'sessionFeatures' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:954:40`: Parameter 'transitions' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:1406:5`: Parameter 'sessions' is declared but never used.
- [x] `src/middleware/monitoring.ts:44:12`: Catch parameter 'error' is caught but never used.
- [x] `src/lib/auth/azure-supabase-integration.ts:198:21`: Variable 'session' is declared but never used.
- [x] `tests/security/ai-web-vulnerability-scanner.ts:514:16`: Catch parameter 'error' is caught but never used.
- [x] `scripts/validate-typescript.ts:288:12`: Catch parameter 'error' is caught but never used.
- [x] `tests/e2e/user-acceptance.spec.ts:21:5`: Parameter 'context' is declared but never used.
- [x] `tests/e2e/demo-workflow.spec.ts:239:13`: Variable 'initialRatio' is declared but never used.
- [x] `tests/e2e/demo-workflow.spec.ts:250:13`: Variable 'updatedRatio' is declared but never used.
- [x] `src/components/therapy/TreatmentPlanManager.tsx:58:12`: Catch parameter 'e' is caught but never used.
- [x] `src/lib/crypto/index.ts:626:18`: Catch parameter 'error' is caught but never used.
- [x] `src/lib/ai/bias-detection/serverless-handlers.ts:12:29`: Parameter 'context' is declared but never used.
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:26:8`: Parameter 'clinicalCase' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:178:5`: Parameter 'approach' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:358:5`: Parameter 'conv' is declared but never used.
- [x] `src/components/demo/QualityAssessmentDemo.tsx:359:5`: Parameter 'approach' is declared but never used.
- [x] `src/components/demo/ConversationGenerationDemo.tsx:143:59`: Parameter 'index' is declared but never used.
- [x] `src/components/demo/ConversationGenerationDemo.tsx:266:5`: Parameter 'sources' is declared but never used.
- [x] `src/components/transitions/AnimationOrchestrator.tsx:61:3`: Parameter 'orchestrationType' is declared but never used.
- [x] `src/components/transitions/AnimationOrchestrator.tsx:73:3`: Parameter 'viewport' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:22:3`: Parameter 'title' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:23:3`: Parameter 'description' is declared but never used.
- [x] `src/components/admin/AdminLayoutAdapter.tsx:24:3`: Parameter 'activeItem' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:821:20`: Parameter 'index' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:828:40`: Parameter 'sessionFeatures' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:833:37`: Parameter 'sessionFeatures' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:954:40`: Parameter 'transitions' is declared but never used.
- [x] `src/lib/ai/services/PatternRecognitionFactory.ts:1406:5`: Parameter 'sessions' is declared but never used.
- [x] `src/middleware/monitoring.ts:44:12`: Catch parameter 'error' is caught but never used.
- [x] `src/lib/auth/azure-supabase-integration.ts:198:21`: Variable 'session' is declared but never used.

### `exhaustive-deps`

- [x] `src/components/ai/PerformanceDashboardReact.tsx:56:6`: React Hook useEffect has a missing dependency: 'fetchCacheStats'
- [x] `src/components/ai/PerformanceDashboard.tsx:115:6`: React Hook useEffect has missing dependencies: 'mockResponseTimeData', and 'mockTokenUsageData'
- [x] `src/components/ui/MobileFormValidation.tsx:97:7`: React Hook useEffect has an unnecessary dependency: formRef.
- [x] `src/components/ui/MobileFormValidation.tsx:97:6`: React Hook useEffect has missing dependencies: 'handleBlur', and 'handleChange'
- [x] `src/simulator/components/VideoDisplay.tsx:265:6`: React Hook useEffect has missing dependencies: 'handleSignalingMessage', 'setupMediaStream', 'createAndSendOffer', and 'initializePeerConnection'
- [x] `src/components/admin/dlp/DLPRuleEditor.tsx:109:6`: React Hook useEffect has a dependency array that changes every render.
- [x] `src/components/feedback/SupervisorFeedback.tsx:83:6`: React Hook useEffect has missing dependencies: 'identifyMissedOpportunities', 'analyzeTechniques', and 'generateFeedbackSummary'
- [x] `src/components/analytics/PrivacyDashboard.tsx:39:6`: React Hook useEffect has a missing dependency: 'analytics'
- [x] `src/components/demo/ValidationDemo.tsx:109:6`: React Hook useEffect has a missing dependency: 'validateContent'
- [x] `src/components/demo/FormatStandardizationDemo.tsx:434:6`: React Hook useEffect has a missing dependency: 'convertToFormat'
- [x] `src/components/demo/DemographicBalancingDisplay.tsx:234:6`: React Hook useEffect has missing dependencies: 'currentStats.occupation', 'demographicTargets.gender', 'demographicTargets.occupation', 'currentStats.background', 'demographicTargets.background', 'currentStats', 'currentStats.age', 'currentStats.gender', and 'demographicTargets.age'
- [x] `src/components/analytics/ConversionDashboard.tsx:45:6`: React Hook useEffect has a missing dependency: 'loadConversionData'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:185:6`: React Hook useEffect has a missing dependency: 'calculateMetrics'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:195:6`: React Hook useEffect has missing dependencies: 'categories', and 'calculateMetrics'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:243:6`: React Hook useEffect has missing dependencies: 'realTimeInterval', and 'calculateMetrics'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:270:6`: React Hook useEffect has a missing dependency: 'pushBalanceUpdate'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:289:6`: React Hook useEffect has missing dependencies: 'syncWithKnowledgeBalancer', and 'fetchLiveData'
- [x] `src/components/demo/CategoryBalancingDemo.tsx:296:6`: React Hook useEffect has a missing dependency: 'pushBalanceUpdate'
- [x] `src/components/demo/DataIngestionDemo.tsx:72:6`: React Hook useCallback has a missing dependency: 'processFile'

### `no-array-index-key`

- [x] `src/components/ai/RecommendationDisplay.tsx:70:23`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/chat/ChatContainer.tsx:51:28`: Usage of Array index in keys is not allowed
- [x] `src/components/ui/slider.tsx:22:9`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:237:23`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:358:31`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:388:55`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:403:53`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:437:51`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:462:49`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:484:49`: Usage of Array index in keys is not allowed
- [x] `src/components/ai/SyntheticTherapyDemo.tsx:506:49`: Usage of Array index in keys is not allowed
- [x] `src/components/feedback/SupervisorFeedback.tsx:350:27`: Usage of Array index in keys is not allowed
- [x] `src/components/feedback/SupervisorFeedback.tsx:379:33`: Usage of Array index in keys is not allowed
- [x] `src/components/feedback/SupervisorFeedback.tsx:405:28`: Usage of Array index in keys is not allowed
- [x] `src/components/feedback/SupervisorFeedback.tsx:449:27`: Usage of Array index in keys is not allowed
- [x] `src/components/feedback/SupervisorFeedback.tsx:466:27`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/EvidenceBasedVerificationDemo.tsx:516:27`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/EvidenceBasedVerificationDemo.tsx:532:27`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/SafetyCheckingDemo.tsx:501:33`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/SafetyCheckingDemo.tsx:525:33`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/SafetyCheckingDemo.tsx:585:29`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/SafetyCheckingDemo.tsx:609:33`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/PresentingProblemVisualization.tsx:79:22`: Usage of Array index in keys is not allowed
- [x] `src/components/demos/bias-detection/BiasAnalysisDisplay.tsx:355:19`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/QualityAssessmentDemo.tsx:597:21`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/QualityAssessmentDemo.tsx:617:23`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/QualityAssessmentDemo.tsx:638:23`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/QualityAssessmentDemo.tsx:663:21`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:439:28`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:623:35`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:679:37`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:689:37`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:701:35`: Usage of Array index in keys is not allowed
- [x] `src/components/analytics/TableWidget.tsx:283:27`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:496:17`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:538:25`: Usage of Array index in keys is not allowed
- [x] `src/components/demo/ValidationDemo.tsx:411:25`: Usage of Array index in keys is not allowed

### `no-unescaped-entities`

- [x] `src/components/dashboard/SimulatorDashboardReact.tsx:154:72`: `"` can be escaped with &quot;
- [x] `src/components/dashboard/SimulatorDashboardReact.tsx:155:20`: `"` can be escaped with &quot;
- [x] `src/simulator/components/FeedbackPanel.tsx:138:17`: `"` can be escaped with &quot;
- [x] `src/simulator/components/FeedbackPanel.tsx:138:36`: `"` can be escaped with &quot;
- [x] `src/components/ui/OfflineIndicator.tsx:79:16`: `'` can be escaped with &apos;
- [x] `src/components/admin/backup/BackupScheduleTab.tsx:68:75`: `'` can be escaped with &apos;
- [x] `src/components/admin/backup/BackupScheduleTab.tsx:179:65`: `'` can be escaped with &apos;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:488:15`: `"` can be escaped with &quot;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:488:44`: `"` can be escaped with &quot;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:524:21`: `"` can be escaped with &quot;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:524:41`: `"` can be escaped with &quot;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:582:65`: `'` can be escaped with &apos;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:619:70`: `"` can be escaped with &quot;
- [x] `src/components/demo/TherapeuticApproachShowcase.tsx:620:23`: `"` can be escaped with &quot;
- [x] `src/components/session/SessionAnalysis.tsx:126:40`: `'` can be escaped with &apos;
- [x] `src/components/therapy/TreatmentPlanManager.tsx:830:37`: `"` can be escaped with &quot;
- [x] `src/components/therapy/TreatmentPlanManager.tsx:830:76`: `"` can be escaped with &quot;
- [x] `src/components/therapy/TreatmentPlanManager.tsx:887:38`: `"` can be escaped with &quot;
- [x] `src/components/therapy/TreatmentPlanManager.tsx:887:62`: `"` can be escaped with &quot;
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:573:58`: `"` can be escaped with &quot;
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:574:26`: `"` can be escaped with &quot;
- [x] `src/components/demo/ClientFacingDemo.tsx:400:23`: `"` can be escaped with &quot;
- [x] `src/components/demo/ClientFacingDemo.tsx:403:39`: `"` can be escaped with &quot;
- [x] `src/components/demo/ConversationGenerationDemo.tsx:658:55`: `"` can be escaped with &quot;
- [x] `src/components/demo/ConversationGenerationDemo.tsx:658:77`: `"` can be escaped with &quot;
- [x] `src/components/demo/ClinicalFormulationDemo.tsx:571:19`: `"` can be escaped with &quot;
- [x] `src/components/demo/ClinicalFormulationDemo.tsx:571:40`: `"` can be escaped with &quot;

### `no-await-in-loop`

- [x] `supabase/setup-storage.js:50:25`: Unexpected `await` inside a loop.
- [x] `supabase/setup-storage.js:62:42`: Unexpected `await` inside a loop.
- [x] `supabase/optimize-db.js:172:27`: Unexpected `await` inside a loop.
- [x] `supabase/migrate.js:53:25`: Unexpected `await` inside a loop. (Intentional - migrations must be sequential)
- [x] `supabase/migrate.js:88:25`: Unexpected `await` inside a loop. (Intentional - migrations must be sequential)
- [x] `supabase/migrate.js:143:25`: Unexpected `await` inside a loop. (Intentional - migrations must be sequential)
- [x] `src/tests/responsive-navigation.test.js:153:20`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:184:7`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:188:7`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:191:25`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:198:7`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:199:7`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:211:9`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:214:9`: Unexpected `await` inside a loop.
- [x] `src/tests/responsive-navigation.test.js:225:9`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:186:20`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:191:9`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:196:25`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:199:9`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:212:9`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:220:30`: Unexpected `await` inside a loop.
- [x] `scripts/run_full_dialogue_pipeline.js:224:11`: Unexpected `await` inside a loop.
- [x] `scripts/download-fonts.mjs:100:7`: Unexpected `await` inside a loop.

### `no-extend-native`

- [x] `tests/e2e/user-experience.spec.ts:30:7`: Element prototype is read-only, properties should not be added.
- [x] `src/components/demo/__tests__/setup.ts:34:1`: HTMLElement prototype is read-only, properties should not be added.
- [x] `src/components/demo/__tests__/setup.ts:35:1`: HTMLElement prototype is read-only, properties should not be added.
- [x] `src/components/demo/__tests__/setup.ts:36:1`: HTMLElement prototype is read-only, properties should not be added.
- [x] `src/components/admin/backup/BackupLocationTab.js:23:40`: 'ar' is used outside of binding context.

### `react-in-jsx-scope`

- [x] `src/components/admin/backup/BackupLocationTab.js:210:6`: 'React' must be in scope when using JSX
- [x] `src/components/admin/backup/BackupLocationTab.js:211:8`: 'React' must be in scope when using JSX
- [x] `src/components/admin/backup/BackupLocationTab.js:212:10`: 'React' must be in scope when using JSX
- [x] `src/components/admin/backup/BackupLocationTab.js:213:12`: 'React' must be in scope when using JSX
- [x] `src/components/admin/backup/BackupLocationTab.js:214:14`: 'React' must be in scope when using JSX
- [x] `src/components/admin/backup/BackupLocationTab.js:215:14`: 'React' must be in scope when using JSX
## JSX Accessibility Errors

### `click-events-have-key-events`

- [x] `src/components/ai/RecommendationDisplay.tsx:20:9`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/ui/MobileDrawer.tsx:35:7`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/ui/table.tsx:149:5`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demo/PipelineOverview.tsx:59:13`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:231:11`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:257:11`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:283:11`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demos/bias-detection/PresetScenarioSelector.tsx:136:11`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demo/ApprovalProcessWorkflowDemo.tsx:399:17`: Enforce a clickable non-interactive element has at least one keyboard event listener.
- [x] `src/components/demo/ResultsExportDemo.tsx:1297:15`: Enforce a clickable non-interactive element has at least one keyboard event listener.

### `prefer-tag-over-role`

- [x] `src/simulator/components/RealTimePrompts.tsx:92:13`: Prefer `button` over `role` attribute `button`.
- [x] `src/simulator/components/RealTimeFeedbackPanel.tsx:333:21`: Prefer `button` over `role` attribute `button`.

### `no-static-element-interactions`

- [x] `src/components/ui/MobileDrawer.tsx:35:7`: Static HTML elements with event handlers require a role.
- [x] `src/components/ui/table.tsx:149:5`: Static HTML elements with event handlers require a role.

### `role-supports-aria-props`

- [x] `src/components/ui/Radio.tsx:84:13`: The attribute aria-invalid is not supported by the role radio.
- [x] `src/components/ui/SearchBox.tsx:154:11`: The attribute aria-expanded is not supported by the role textbox.

### `media-has-caption`

- [x] `src/simulator/components/VideoDisplay.tsx:295:7`: Missing <track> element with captions inside <audio> or <video> element.
- [x] `src/simulator/components/VideoDisplay.tsx:295:7`: Missing <track> element with captions inside <audio> or <video> element.

### `label-has-associated-control`

- [x] `src/components/demo/ScenarioGenerationDemo.tsx:341:19`: A form label must be associated with a control.
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:357:19`: A form label must be associated with a control.
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:377:17`: A form label must be associated with a control.
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:391:17`: A form label must be associated with a control.
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:410:17`: A form label must be associated with a control.
- [x] `src/components/demo/ScenarioGenerationDemo.tsx:425:19`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:316:11`: A form label must have accessible text.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:339:11`: A form label must have accessible text.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:362:11`: A form label must have accessible text.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:390:11`: A form label must have accessible text.
- [x] `src/components/demos/bias-detection/ExportControls.tsx:411:11`: A form label must have accessible text.
- [x] `src/components/demos/bias-detection/PresetScenarioSelector.tsx:88:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/PresetScenarioSelector.tsx:108:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:110:9`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:130:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:150:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:171:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:195:13`: A form label must be associated with a control.
- [x] `src/components/demos/bias-detection/SessionInputForm.tsx:225:9`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:681:15`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:713:15`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:735:15`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:757:15`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:982:15`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:1036:25`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:1453:17`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:1473:17`: A form label must be associated with a control.
- [x] `src/components/demo/CategoryBalancingDemo.tsx:1493:17`: A form label must be associated with a control.

## Other Errors

### `no-useless-concat`

- [ ] `src/tests/crypto.test.ts:310:5`: Unexpected string concatenation of literals.

### `no-unsafe-function-type`

- [ ] `src/lib/security/__tests__/dlp.test.ts:192:65`: The `Function` type accepts any function-like value.
- [ ] `src/lib/security/__tests__/dlp.test.ts:312:55`: The `Function` type accepts any function-like value.
- [ ] `src/lib/security/__tests__/dlp.test.ts:333:55`: The `Function` type accepts any function-like value.

### `no-case-declarations`

- [ ] `src/lib/jobs/worker.ts:88:11`: Unexpected lexical declaration in case block.
- [ ] `src/lib/jobs/worker.ts:93:11`: Unexpected lexical declaration in case block.
- [ ] `src/lib/jobs/worker.ts:105:11`: Unexpected lexical declaration in case block.
- [ ] `src/lib/jobs/worker.ts:110:11`: Unexpected lexical declaration in case block.

### Syntax Errors

- [ ] `tests/ai/crisis-detection.test.ts:226:5`: Unexpected token
- [ ] `src/tests/ai/crisis-detection.test.ts:193:9`: Unexpected token
- [ ] `src/components/admin/backup/BackupRecoveryTab.tsx:206:16`: Unterminated regular expression
- [ ] `src/components/admin/backup/BackupRecoveryTab.tsx:124:6`: Expected corresponding JSX closing tag for 'div'.
- [ ] `plugins/index.ts:4:6`: Identifier `RemarkPlugins` has already been declared
- [ ] `plugins/index.ts:5:6`: Identifier `RehypePlugins` has already been declared
- [ ] `src/lib/analytics/risk.ts:26:1`: Unexpected token

## Plan of Action

1. Fix TypeScript errors first, especially `no-explicit-any` and `no-require-imports`
2. Fix ESLint errors like `no-unused-vars` and `exhaustive-deps`
3. Fix JSX accessibility issues
4. Fix syntax errors and other critical issues
5. Fix remaining errors
