# Astro Check Tasks - File 1

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

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
- [x] Fix type error: Property 'recoveryTests' does not exist on type 'IntrinsicAttributes & BackupRecoveryTabProps'
- [x] Fix type error: Add null check for `mockBackups[0]` or provide default value
- [x] Remove unused interfaces or mark them as exported:
  - [x] `BackupReportTabProps`
  - [x] `BackupRecoveryTabProps`
  - [x] `BackupStatusTabProps`
  - [x] `BackupConfigurationTabProps`
- [x] Fix import for Alert component: Correct path for '@/components/ui/Alert'
- [x] Remove unused imports: `Alert`, `AlertTitle`, `AlertDescription`

## Components/admin/DataDeletionLog.astro
- [x] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/DataDeletionRequestForm.astro
- [x] Fix undefined variable: Define `originalButtonText` before using it
- [x] Add null checks for DOM elements before accessing properties:
  - [x] `submitButton`
  - [x] `form`
  - [x] `scopeSpecificRadio`
  - [x] `scopeAllRadio`
  - [x] `dataCategoriesContainer`
- [x] Fix property access: Add type assertions for DOM elements with properties like `disabled`

## Components/admin/PatientRightsSystem.astro
- [x] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/RetentionReports.astro
- [x] Remove unused variable `type` or use it

## Components/admin/SecuritySettingsPanel.astro
- [x] Remove unused imports from '../../lib/auth/supabase'

## Components/admin/TransferAuditLog.astro
- [x] Fix property access: Change `process.env.PATIENT_ID` to `process.env['PATIENT_ID']` in all instances

## Components/admin/__tests__/AdminDashboard.test.ts
- [x] Fix type error: Add proper type assertion for `AdminDashboard` in `renderAstro` calls

## Components/admin/bias-detection/BiasDashboard.test.tsx
- [x] Fix `http.post` and `http.get` calls with correct parameter count

## Components/admin/bias-detection/BiasDashboard.tsx
- [x] Add explicit type for parameter `rec` in recommendations map function
- [x] Add null checks for `percent` before using it
- [x] Fix type mismatch in onChange handlers:
  - [x] Fix HTMLInputElement vs HTMLSelectElement type mismatches
- [x] Add explicit type for parameter `prev` in setDashboardData callbacks
- [x] Add explicit type for parameter `session` in map function
- [x] Fix import for `BiasDashboardData` from '@/lib/ai/bias-detection'

## Components/ai/SyntheticTherapyDemo.tsx
- [x] Remove 'id' property from Slider components or update SliderProps type
- [x] Remove unused import `React`

## Components/ai/chat/ChatCompletionExample.tsx
- [x] Replace deprecated `onKeyPress` with `onKeyDown`

## Components/ai/chat/ResponseGenerationExample.tsx
- [x] Remove unused import `React`

## Components/ai/chat/useChatCompletion.ts
- [x] Fix type errors in message handling:
  - [x] Fix type mismatch in `newMessages[index]` assignment
  - [x] Add null check for `lastMessage` before accessing `role`
  - [x] Fix type mismatch in message array manipulation

## Components/ai/chat/useCrisisDetection.ts
- [x] Fix deprecated method: Replace `.substr(2, 9)` with `.substring(2, 11)`

## Components/ai/chat/useResponseGeneration.ts
- [x] Remove unused parameter `_contextWindow` or use it

## Components/ai/chat/useSentimentAnalysis.ts
- [x] Fix property access: Change `sentimentCounts.negative` to `sentimentCounts['negative']`
- [x] Fix property access: Change `sentimentCounts.positive` to `sentimentCounts['positive']`
