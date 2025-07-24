# Astro Check Tasks - File 1

## Components/AIChatReact.tsx
- [x] Fix deprecated method: Replace `.substr(2, 9)` with `.substring(2, 11)` in `generateId` function

## Components/BlogSearch.tsx
- [x] Fix missing module: Create or import correct path for `./ui/button.js`

## Components/EnhancedTodo.astro
- [x] Add `is:inline` directive to script with `define:vars`

## Components/MentalHealthChatDemo.astro
- [x] Fix type error: Property 'conversationId' does not exist on type 'IntrinsicAttributes & object'

## Components/MentalHealthChatDemoReact.tsx
- [x] Fix conditional check for Promise: Refactor `mentalHealthChat.needsIntervention()` condition
- [x] Fix type error in `setMessages` callback function

## Components/MentalHealthHistoryChart.tsx
- [x] Add null check for `latest` before accessing `latest.scores`

## Components/Monitoring.astro
- [x] Add `is:inline` directive to script with external src

## Components/PixelatedEmpathyAgentChat.tsx
- [x] Replace deprecated `onKeyPress` with `onKeyDown`

## Components/Todo.astro
- [x] Add null checks for `todos[todoIndex]` before accessing properties
- [x] Fix property access: Change `todo.id` to `todo['id']`

## Components/TodoReact.tsx
- [x] Replace deprecated `onKeyPress` with `onKeyDown`
- [x] Fix deprecated method: Replace `.substr(2)` with `.substring(2)`

## Components/accessibility/FocusTrap.tsx
- [x] Add null check for `focusableElements[0]` before calling focus()

## Components/accessibility/LiveRegionSystem.astro
- [x] Convert JSDoc types to TypeScript types for:
  - [x] `announceStatus` function
  - [x] `announceAlert` function
  - [x] `log` function
  - [x] `announceProgress` function

## Components/admin/AccessRequestsLog.astro
- [x] Remove unused variable `monthlyTrends` or use it

## Components/admin/BackupSecurityManager.astro
- [ ] Fix type error: Property 'recoveryTests' does not exist on type 'IntrinsicAttributes & BackupRecoveryTabProps'
- [ ] Fix type error: Add null check for `mockBackups[0]` or provide default value
- [ ] Remove unused interfaces or mark them as exported:
  - [ ] `BackupReportTabProps`
  - [ ] `BackupRecoveryTabProps`
  - [ ] `BackupStatusTabProps`
  - [ ] `BackupConfigurationTabProps`
- [ ] Fix import for Alert component: Correct path for '@/components/ui/Alert'
- [ ] Remove unused imports: `Alert`, `AlertTitle`, `AlertDescription`

## Components/admin/DataDeletionLog.astro
- [ ] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/DataDeletionRequestForm.astro
- [ ] Fix undefined variable: Define `originalButtonText` before using it
- [ ] Add null checks for DOM elements before accessing properties:
  - [ ] `submitButton`
  - [ ] `form`
  - [ ] `scopeSpecificRadio`
  - [ ] `scopeAllRadio`
  - [ ] `dataCategoriesContainer`
- [ ] Fix property access: Add type assertions for DOM elements with properties like `disabled`

## Components/admin/PatientRightsSystem.astro
- [ ] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/RetentionReports.astro
- [ ] Remove unused variable `type` or use it

## Components/admin/SecuritySettingsPanel.astro
- [ ] Remove unused imports from '../../lib/auth/supabase'

## Components/admin/TransferAuditLog.astro
- [ ] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/__tests__/AdminDashboard.test.ts
- [ ] Fix type error: Add proper type assertion for `AdminDashboard` in `renderAstro` calls

## Components/admin/bias-detection/BiasDashboard.test.tsx
- [ ] Fix `http.post` and `http.get` calls with correct parameter count

## Components/admin/bias-detection/BiasDashboard.tsx
- [ ] Add explicit type for parameter `rec` in recommendations map function
- [ ] Add null checks for `percent` before using it
- [ ] Fix type mismatch in onChange handlers:
  - [ ] Fix HTMLInputElement vs HTMLSelectElement type mismatches
- [ ] Add explicit type for parameter `prev` in setDashboardData callbacks
- [ ] Add explicit type for parameter `session` in map function
- [ ] Fix import for `BiasDashboardData` from '@/lib/ai/bias-detection'

## Components/ai/SyntheticTherapyDemo.tsx
- [ ] Remove 'id' property from Slider components or update SliderProps type
- [ ] Remove unused import `React`

## Components/ai/chat/ChatCompletionExample.tsx
- [ ] Replace deprecated `onKeyPress` with `onKeyDown`

## Components/ai/chat/ResponseGenerationExample.tsx
- [ ] Remove unused import `React`

## Components/ai/chat/useChatCompletion.ts
- [ ] Fix type errors in message handling:
  - [ ] Fix type mismatch in `newMessages[index]` assignment
  - [ ] Add null check for `lastMessage` before accessing `role`
  - [ ] Fix type mismatch in message array manipulation

## Components/ai/chat/useCrisisDetection.ts
- [ ] Fix deprecated method: Replace `.substr(2, 9)` with `.substring(2, 11)`

## Components/ai/chat/useResponseGeneration.ts
- [ ] Remove unused parameter `_contextWindow` or use it

## Components/ai/chat/useSentimentAnalysis.ts
- [ ] Fix property access: Change `sentimentCounts.negative` to `sentimentCounts['negative']`
- [ ] Fix property access: Change `sentimentCounts.positive` to `sentimentCounts['positive']`
