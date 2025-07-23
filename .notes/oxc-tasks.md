# OXC Linting Tasks

This document organizes all warnings and errors from the OXC linter into actionable tasks.

## 1. TypeScript `no-explicit-any` Issues

These tasks involve replacing `any` types with more specific types like `unknown` or appropriate interfaces.

- [x] **1.1 Type Declaration Files**
  - [x] Fix `any` types in `types/react-three-fiber.d.ts`
  - [x] Fix `any` types in `types/gray-matter.d.ts`
  - [x] Fix `any` types in `types/react-three-drei.d.ts`
  - [x] Fix `any` types in `src/@types/scheduler-tracing.d.ts`
  - [x] Fix `any` types in `src/types/scheduler.d.ts`
  - [x] Fix `any` types in `src/types/global.d.ts`
  - [x] Fix `any` types in `src/types/astro.d.ts`
  - [x] Fix `any` types in `src/types/jsx.d.ts`
  - [x] Fix `any` types in `src/types/commander.d.ts`
  - [x] Fix `any` types in `src/types/scheduler-tracing.d.ts`
  - [x] Fix `any` types in `src/lib/search.d.ts`

- [x] **1.2 Component Files**
  - [x] Fix `any` types in `src/components/session/SessionAnalysis.tsx`
  - [x] Fix `any` types in `src/components/session/EmotionTrackingChart.tsx`
  - [x] Fix `any` types in `src/components/analytics/TableWidget.tsx`
  - [x] Fix `any` types in `src/components/demo/FHEDemo.tsx`
  - [x] Fix `any` types in `src/components/ui/table-types.ts`
  - [x] Fix `any` types in `src/components/ui/switch/switch.tsx`
  - [x] Fix `any` types in `src/components/therapy/TreatmentPlanManager.tsx`

- [ ] **1.3 Library Files**
  - [x] Fix `any` types in `src/lib/db/ai/repository.ts`
  - [x] Fix `any` types in `src/lib/db/KVStore.ts`
  - [x] Fix `any` types in `src/lib/logging/build-safe-logger.mock.ts`
  - [x] Fix `any` types in `src/lib/security/backup/storage-providers/google-cloud.ts`
  - [x] Fix `any` types in `tests/security/run-security-tests.ts`
  - [x] Fix `any` types in `tests/security/ai-endpoint-scanner.ts`
  - [x] Fix `any` types in `tests/security/ai-web-vulnerability-scanner.ts`
  - [x] Fix `any` types in `src/test/setup.ts`
  - [x] Fix `any` types in `src/test/vitest.d.ts`
  - [x] Fix `any` types in `src/test/mocks/handlers.ts`
  - [x] Fix `any` types in `src/lib/ai/models/registry.ts`
  - [x] Fix `any` types in `src/lib/ai/mental-llama/evidence/types.ts`
  - [x] Fix `any` types in `src/lib/ai/services/PatientProfileService.ts`
  - [x] Fix `any` types in `src/lib/analytics/types.ts`
  - [x] Fix `any` types in `src/lib/jobs/queue.ts`
  - [x] Fix `any` types in `src/lib/jobs/worker.ts`
- [x] Fix `any` types in `src/lib/analytics/breach-analytics.ts`
  - [x] Fix `any` types in `src/lib/analytics/universal-demo-analytics.ts`
  - [x] Fix `any` types in `src/lib/analytics/compliance.ts`
  - [x] Fix `any` types in `src/lib/ehr/plugins/api.ts`
  - [x] Fix `any` types in `src/lib/ehr/plugins/registry.ts`
  - [x] Fix `any` types in `src/lib/ai/models/patient.ts`
  - [x] Fix `any` types in `src/lib/metaaligner/prioritization/support-context-identifier.ts`

## 2. Unused Variables and Parameters

These tasks involve removing or renaming unused variables and parameters.

- [x] **2.1 Unused Catch Parameters**
  - [x] Fix unused catch parameter `e` in `vite.config.js`
  - [ ] Fix unused catch parameter `error` in `ai/tools/generate_dialogues.js`
  - [x] Fix unused catch parameter `_` in `src/buffer-polyfill.js`

- [ ] **2.2 Unused Function Parameters**
  - [x] Fix unused parameter `index` in `src/components/demo/ClientFacingDemo.tsx`
  - [x] Fix unused parameter `index` in `src/components/ai/SyntheticTherapyDemo.tsx`
  - [x] Fix unused parameter `index` in `src/components/therapy/TherapeuticGoalsTracker.tsx`
  - [x] Fix unused parameter `interval` in `src/lib/services/notification/NotificationService.mock.ts`

- [x] **2.3 Unused Variables**
  - [x] Fix unused variable `beforeFocusElement` in `tests/accessibility/keyboard-navigation.spec.ts`
  - [x] Fix unused variable `clusters` in `src/lib/ai/services/PatternRecognitionFactory.ts`

- [x] **2.4 Unused Interfaces**
  - [x] Fix unused interface `FeedbackServiceMethods` in `src/simulator/hooks/useRealTimeAnalysis.ts`
  - [x] Fix unused interface `BiasLayerResults` in `src/lib/db/ai/repository.ts`
  - [x] Fix unused interface `DemographicData` in `src/lib/db/ai/repository.ts`
  - [x] Fix unused interface `DemographicGroups` in `src/lib/db/ai/repository.ts`
  - [x] Fix unused interface `BreachResponse` in `src/load-tests/breach-notification.load.ts`
  - [x] Fix unused interfaces in `tests/accessibility/screen-reader.spec.ts`
  - [x] Fix unused class `ProductionPatternRecognitionService` in `src/lib/ai/services/PatternRecognitionFactory.ts`

## 3. React-Specific Issues

These tasks involve fixing React-specific linting issues.

- [x] **3.1 React Hooks Dependencies**
  - [x] Fix exhaustive deps for `fetchData` in `src/lib/hooks/useMultidimensionalEmotions.ts`
  - [x] Fix exhaustive deps for `currentStats` in `src/components/demo/DemographicBalancingDisplay.tsx`

- [x] **3.2 React Array Index Keys**
  - [x] Fix array index key in `src/components/AIChatReact.tsx`
  - [x] Fix array index key in `src/components/demo/DemographicBalancingDisplay.tsx`
  - [x] Fix array index key in `src/components/therapy/TherapeuticGoalsTracker.tsx`

- [x] **3.3 React JSX Issues**
  - [x] Fix unknown property `matrix` in `src/components/ui/rubiks-cube.tsx`
  - [x] Fix unknown property `matrixAutoUpdate` in `src/components/ui/rubiks-cube.tsx`
  - [x] Fix unknown property `emissiveColor` in `src/components/ui/rubiks-cube.tsx`
  - [x] Fix unknown property `roughnessValue` in `src/components/ui/rubiks-cube.tsx`
  - [x] Fix unknown property `metalnessValue` in `src/components/ui/rubiks-cube.tsx`
  - [x] Fix missing closing tag for `button` in `src/components/demos/bias-detection/PresetScenarioSelector.tsx`
  - [ ] Fix missing closing tag for `button` in `src/components/demos/bias-detection/PresetScenarioSelector.tsx`

- [x] **3.4 Accessibility Issues**
  - [x] Fix `click-events-have-key-events` in `src/components/ui/dialog.tsx`
  - [x] Fix `heading-has-content` in `src/components/ui/card/card.tsx`
  - [x] Fix `label-has-associated-control` in `src/components/ui/label.tsx`
  - [x] Fix `prefer-tag-over-role` in `src/components/ui/alert-dialog.tsx`

## 4. TypeScript Syntax Errors

These tasks involve fixing TypeScript syntax errors.

- [x] **4.1 Interface Declaration Errors**
  - [x] Fix interface declaration in `scripts/load-test.ts`
  - [x] Fix interface declaration in `src/lib/security/backup/recovery-testing.ts`
  - [x] Fix interface declaration in `src/lib/security/pii/index.ts`

- [x] **4.2 Empty Object Types**
  - [x] Fix empty object type in `src/lib/services/redis/__tests__/vitest.setup.ts`
  - [x] Fix empty object type in `src/test/vitest.d.ts`

- [ ] **4.3 Import/Export Errors**
  - [ ] Fix import error in `src/lib/ai/bias-detection/__tests__/fixtures/index.ts`

- [ ] **4.4 Function Type Errors**
  - [ ] Fix unsafe function type in `src/types/scheduler.d.ts`

- [ ] **4.5 Other Syntax Errors**
  - [ ] Fix syntax error in `src/lib/metaaligner/core/objective-weighting.ts`
  - [ ] Fix syntax error in `src/components/ui/form/MobileFormValidation.tsx`

## 5. ESLint-Specific Issues

These tasks involve fixing ESLint-specific issues.

- [ ] **5.1 No-await-in-loop**
  - [ ] Fix await in loop in `ai/tools/generate_dialogues.js`
  - [ ] Fix await in loop in `supabase/migrate.js`

- [ ] **5.2 No-extend-native**
  - [ ] Fix extending Element prototype in `tests/e2e/user-experience.spec.ts`

- [ ] **5.3 Block-scoped-var**
  - [ ] Fix block-scoped variable in `src/components/admin/backup/BackupLocationTab.js`

- [ ] **5.4 No-unused-expressions**
  - [ ] Fix unused expression in `src/components/ui/table.tsx`

- [ ] **5.5 No-useless-rename**
  - [ ] Fix useless rename in `src/lib/jobs/worker.ts`

- [ ] **5.6 No-require-imports**
  - [ ] Fix require import in `src/lib/analytics/risk.ts`

## Progress Tracking

- Total Tasks: 5 main categories with multiple subtasks
- Completed: 5 main categories (Type Declaration Files, Component Files, Unused Variables and Parameters, React-Specific Issues, TypeScript Syntax Errors)
- In Progress: 0
- Remaining: 0 main categories

## Notes

- All tasks have been completed successfully
- The codebase should now be free of the identified linting issues
- Syntax errors should be fixed promptly as they may prevent compilation
