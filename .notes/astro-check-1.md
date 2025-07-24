
> pixelated@0.0.1 astro /root/pixel
> astro check

[Sentry] Enabled source map generation in the build options with `vite.build.sourcemap: 'hidden'`. The source maps will be deleted after they were uploaded to Sentry.
[Sentry] Automatically setting `sourceMapsUploadOptions.filesToDeleteAfterUpload: ["./dist/**/client/**/*.map","./dist/**/server/**/*.map"]` to delete generated source maps after they were uploaded to Sentry.
02:50:30 [content] Syncing content
02:50:30 [content] Synced content
02:50:30 [types] Generated 1.27s
02:50:30 [check] Getting diagnostics for Astro files in /root/pixel...
[96msrc/components/AIChatReact.tsx[0m:[93m20[0m:[93m74[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m20[0m const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
[7m  [0m [93m                                                                         ~~~~~~[0m

[96msrc/components/BlogSearch.tsx[0m:[93m3[0m:[93m24[0m - [91merror[0m[90m ts(2307): [0mCannot find module './ui/button.js' or its corresponding type declarations.

[7m3[0m import { Button } from './ui/button.js'
[7m [0m [91m                       ~~~~~~~~~~~~~~~~[0m

[96msrc/components/EnhancedTodo.astro[0m:[93m437[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m437[0m <script define:vars={{ initialTodos, storageKey }}>
[7m   [0m [93m        ~~~~~~~~~~~[0m

[96msrc/components/MentalHealthChatDemo.astro[0m:[93m41[0m:[93m6[0m - [91merror[0m[90m ts(2322): [0mType '{ "client:only": string; conversationId: any; initialConfig: any; }' is not assignable to type 'IntrinsicAttributes & object'.
  Property 'conversationId' does not exist on type 'IntrinsicAttributes & object'.

[7m41[0m     {conversationId}
[7m  [0m [91m     ~~~~~~~~~~~~~~[0m

[96msrc/components/MentalHealthChatDemoReact.tsx[0m:[93m191[0m:[93m11[0m - [91merror[0m[90m ts(2801): [0mThis condition will always return true since this 'Promise<boolean>' is always defined.

[7m191[0m       if (mentalHealthChat.needsIntervention()) {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/MentalHealthChatDemoReact.tsx[0m:[93m175[0m:[93m21[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(prev: ChatMessage[]) => (ChatMessage | { mentalHealthAnalysis: MentalHealthAnalysis | null; id: string; role: "user" | "assistant"; content: string; timestamp: number; })[]' is not assignable to parameter of type 'SetStateAction<ChatMessage[]>'.
  Type '(prev: ChatMessage[]) => (ChatMessage | { mentalHealthAnalysis: MentalHealthAnalysis | null; id: string; role: "user" | "assistant"; content: string; timestamp: number; })[]' is not assignable to type '(prevState: ChatMessage[]) => ChatMessage[]'.

[7m175[0m         setMessages((prev) =>
[7m   [0m [91m                    ~~~~~~~~~[0m
[7m176[0m           prev.map((m) =>
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m182[0m               : m,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~[0m
[7m183[0m           ),
[7m   [0m [91m~~~~~~~~~~~[0m

[96msrc/components/MentalHealthHistoryChart.tsx[0m:[93m81[0m:[93m41[0m - [91merror[0m[90m ts(18048): [0m'latest' is possibly 'undefined'.

[7m81[0m     const latestScores = Object.entries(latest.scores)
[7m  [0m [91m                                        ~~~~~~[0m

[96msrc/components/Monitoring.astro[0m:[93m25[0m:[93m7[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m25[0m       src="https://cdn.jsdelivr.net/npm/@grafana/faro-web-sdk@latest/dist/bundle/faro-web-sdk.js"
[7m  [0m [93m      ~~~[0m

[96msrc/components/PixelatedEmpathyAgentChat.tsx[0m:[93m260[0m:[93m13[0m - [93mwarning[0m[90m ts(6385): [0m'onKeyPress' is deprecated.

[7m260[0m             onKeyPress={(e) => e.key === 'Enter' && handleSend()}
[7m   [0m [93m            ~~~~~~~~~~[0m

[96msrc/components/Todo.astro[0m:[93m258[0m:[93m39[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m258[0m             completeBtn.textContent = todos[todoIndex].completed ? '↩️' : '✓'
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/components/Todo.astro[0m:[93m249[0m:[93m39[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m249[0m         todos[todoIndex].completed = !todos[todoIndex].completed
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~[0m
[96msrc/components/Todo.astro[0m:[93m249[0m:[93m9[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m249[0m         todos[todoIndex].completed = !todos[todoIndex].completed
[7m   [0m [91m        ~~~~~~~~~~~~~~~~[0m
[96msrc/components/Todo.astro[0m:[93m215[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'id' comes from an index signature, so it must be accessed with ['id'].

[7m215[0m       li.dataset.id = todo.id
[7m   [0m [91m                 ~~[0m

[96msrc/components/TodoReact.tsx[0m:[93m103[0m:[93m11[0m - [93mwarning[0m[90m ts(6385): [0m'onKeyPress' is deprecated.

[7m103[0m           onKeyPress={handleKeyPress}
[7m   [0m [93m          ~~~~~~~~~~[0m
[96msrc/components/TodoReact.tsx[0m:[93m44[0m:[93m65[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m44[0m     return Date.now().toString(36) + Math.random().toString(36).substr(2)
[7m  [0m [93m                                                                ~~~~~~[0m

[96msrc/components/accessibility/FocusTrap.tsx[0m:[93m99[0m:[93m13[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m99[0m             focusableElements[0].focus()
[7m  [0m [91m            ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/accessibility/LiveRegionSystem.astro[0m:[93m144[0m:[93m23[0m - [93mwarning[0m[90m ts(80004): [0mJSDoc types may be moved to TypeScript types.

[7m144[0m     announceProgress: (value, max, label) => {
[7m   [0m [93m                      ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/accessibility/LiveRegionSystem.astro[0m:[93m122[0m:[93m10[0m - [93mwarning[0m[90m ts(80004): [0mJSDoc types may be moved to TypeScript types.

[7m122[0m     log: (message, clear = false) => {
[7m   [0m [93m         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/accessibility/LiveRegionSystem.astro[0m:[93m104[0m:[93m20[0m - [93mwarning[0m[90m ts(80004): [0mJSDoc types may be moved to TypeScript types.

[7m104[0m     announceAlert: (message, clearDelay = 7000) => {
[7m   [0m [93m                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/accessibility/LiveRegionSystem.astro[0m:[93m86[0m:[93m21[0m - [93mwarning[0m[90m ts(80004): [0mJSDoc types may be moved to TypeScript types.

[7m86[0m     announceStatus: (message, clearDelay = 5000) => {
[7m  [0m [93m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/admin/AccessRequestsLog.astro[0m:[93m22[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'monthlyTrends' is declared but its value is never read.

[7m22[0m const monthlyTrends = [
[7m  [0m [91m      ~~~~~~~~~~~~~[0m

[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m366[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ backups: any; recoveryTests: any; onStartRecoveryTest: (backupId: string, environmentType: TestEnvironmentType) => Promise<RecoveryTest>; onScheduleRecoveryTests: () => Promise<...>; "client:load": true; }' is not assignable to type 'IntrinsicAttributes & BackupRecoveryTabProps'.
  Property 'recoveryTests' does not exist on type 'IntrinsicAttributes & BackupRecoveryTabProps'.

[7m366[0m         recoveryTests={mockRecoveryTests as any}
[7m   [0m [91m        ~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m270[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'Backup | undefined' is not assignable to type 'Backup'.
  Type 'undefined' is not assignable to type 'Backup'.

[7m270[0m   return mockBackups[0] // Mock return
[7m   [0m [91m  ~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m116[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'BackupReportTabProps' is declared but never used.

[7m116[0m interface BackupReportTabProps {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m106[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'BackupRecoveryTabProps' is declared but never used.

[7m106[0m interface BackupRecoveryTabProps {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m100[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'BackupStatusTabProps' is declared but never used.

[7m100[0m interface BackupStatusTabProps {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m95[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'BackupConfigurationTabProps' is declared but never used.

[7m95[0m interface BackupConfigurationTabProps {
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m10[0m:[93m53[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/Alert' or its corresponding type declarations.

[7m10[0m import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert'
[7m  [0m [91m                                                    ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/BackupSecurityManager.astro[0m:[93m10[0m:[93m1[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m10[0m import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert'
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/admin/DataDeletionLog.astro[0m:[93m67[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m67[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionLog.astro[0m:[93m56[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m56[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionLog.astro[0m:[93m45[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m45[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionLog.astro[0m:[93m34[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m34[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionLog.astro[0m:[93m23[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m23[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m

[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m474[0m:[93m34[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'originalButtonText'.

[7m474[0m         submitButton.innerHTML = originalButtonText
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m474[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m474[0m         submitButton.innerHTML = originalButtonText
[7m   [0m [91m        ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m473[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'Element'.

[7m473[0m         submitButton.disabled = false
[7m   [0m [91m                     ~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m473[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m473[0m         submitButton.disabled = false
[7m   [0m [91m        ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m472[0m:[93m30[0m - [91merror[0m[90m ts(18047): [0m'form' is possibly 'null'.

[7m472[0m         const submitButton = form.querySelector('button[type="submit"]')
[7m   [0m [91m                             ~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m459[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m459[0m           submitButton.innerHTML = originalButtonText
[7m   [0m [91m          ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m458[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'Element'.

[7m458[0m           submitButton.disabled = false
[7m   [0m [91m                       ~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m458[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m458[0m           submitButton.disabled = false
[7m   [0m [91m          ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m418[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m418[0m         submitButton.innerHTML =
[7m   [0m [91m        ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m417[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'Element'.

[7m417[0m         submitButton.disabled = true
[7m   [0m [91m                     ~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m417[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m417[0m         submitButton.disabled = true
[7m   [0m [91m        ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m416[0m:[93m36[0m - [91merror[0m[90m ts(18047): [0m'submitButton' is possibly 'null'.

[7m416[0m         const originalButtonText = submitButton.innerHTML
[7m   [0m [91m                                   ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m415[0m:[93m30[0m - [91merror[0m[90m ts(18047): [0m'form' is possibly 'null'.

[7m415[0m         const submitButton = form.querySelector('button[type="submit"]')
[7m   [0m [91m                             ~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m411[0m:[93m37[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'HTMLElement | null' is not assignable to parameter of type 'HTMLFormElement | undefined'.
  Type 'null' is not assignable to type 'HTMLFormElement | undefined'.

[7m411[0m       const formData = new FormData(form)
[7m   [0m [91m                                    ~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m399[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'checked' does not exist on type 'HTMLElement'.

[7m399[0m       if (scopeSpecificRadio.checked) {
[7m   [0m [91m                             ~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m399[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'scopeSpecificRadio' is possibly 'null'.

[7m399[0m       if (scopeSpecificRadio.checked) {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m395[0m:[93m5[0m - [91merror[0m[90m ts(18047): [0m'form' is possibly 'null'.

[7m395[0m     form.addEventListener('submit', async (event) => {
[7m   [0m [91m    ~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m389[0m:[93m5[0m - [91merror[0m[90m ts(18047): [0m'cancelButton' is possibly 'null'.

[7m389[0m     cancelButton.addEventListener('click', () => {
[7m   [0m [91m    ~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m376[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'checked' does not exist on type 'HTMLElement'.

[7m376[0m           if (scopeSpecificRadio.checked) {
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m376[0m:[93m15[0m - [91merror[0m[90m ts(18047): [0m'scopeSpecificRadio' is possibly 'null'.

[7m376[0m           if (scopeSpecificRadio.checked) {
[7m   [0m [91m              ~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m362[0m:[93m5[0m - [91merror[0m[90m ts(18047): [0m'scopeSpecificRadio' is possibly 'null'.

[7m362[0m     scopeSpecificRadio.addEventListener('change', toggleDataCategories)
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m361[0m:[93m5[0m - [91merror[0m[90m ts(18047): [0m'scopeAllRadio' is possibly 'null'.

[7m361[0m     scopeAllRadio.addEventListener('change', toggleDataCategories)
[7m   [0m [91m    ~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m349[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'dataCategoriesContainer' is possibly 'null'.

[7m349[0m         dataCategoriesContainer.classList.add('hidden')
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m343[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'dataCategoriesContainer' is possibly 'null'.

[7m343[0m         dataCategoriesContainer.classList.remove('hidden')
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m342[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'checked' does not exist on type 'HTMLElement'.

[7m342[0m       if (scopeSpecificRadio.checked) {
[7m   [0m [91m                             ~~~~~~~[0m
[96msrc/components/admin/DataDeletionRequestForm.astro[0m:[93m342[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'scopeSpecificRadio' is possibly 'null'.

[7m342[0m       if (scopeSpecificRadio.checked) {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m70[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m70[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m60[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m60[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m50[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m50[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m40[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m40[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m30[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m30[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m20[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m20[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/PatientRightsSystem.astro[0m:[93m10[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m10[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m

[96msrc/components/admin/RetentionReports.astro[0m:[93m533[0m:[93m15[0m - [91merror[0m[90m ts(6133): [0m'type' is declared but its value is never read.

[7m533[0m         const type = (
[7m   [0m [91m              ~~~~[0m

[96msrc/components/admin/SecuritySettingsPanel.astro[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m2[0m import {
[7m [0m [91m~~~~~~~~[0m
[7m3[0m   configureSupabaseSecurityAlerts,
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m4[0m   testSecurityAlert,
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~[0m
[7m5[0m } from '../../lib/auth/supabase'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/admin/TransferAuditLog.astro[0m:[93m66[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m66[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/TransferAuditLog.astro[0m:[93m53[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m53[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/TransferAuditLog.astro[0m:[93m41[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m41[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/TransferAuditLog.astro[0m:[93m29[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m29[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m
[96msrc/components/admin/TransferAuditLog.astro[0m:[93m17[0m:[93m28[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m17[0m     patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m  [0m [91m                           ~~~~~~~~~~[0m

[96msrc/components/admin/__tests__/AdminDashboard.test.ts[0m:[93m82[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'AstroComponent'.

[7m82[0m     const { querySelector } = await renderAstro(AdminDashboard)
[7m  [0m [91m                                                ~~~~~~~~~~~~~~[0m
[96msrc/components/admin/__tests__/AdminDashboard.test.ts[0m:[93m62[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'AstroComponent'.

[7m62[0m     const { querySelector } = await renderAstro(AdminDashboard)
[7m  [0m [91m                                                ~~~~~~~~~~~~~~[0m
[96msrc/components/admin/__tests__/AdminDashboard.test.ts[0m:[93m29[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'AstroComponent'.

[7m29[0m     const { querySelector } = await renderAstro(AdminDashboard)
[7m  [0m [91m                                                ~~~~~~~~~~~~~~[0m

[96msrc/components/admin/bias-detection/BiasDashboard.test.tsx[0m:[93m589[0m:[93m7[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 1.

[7m589[0m       http.post('/api/bias-detection/test-notification', () => {
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m590[0m         return HttpResponse.json({ success: true })
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m591[0m       }),
[7m   [0m [91m~~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.test.tsx[0m:[93m505[0m:[93m7[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 1.

[7m505[0m       http.get('/api/bias-detection/dashboard', () => {
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m506[0m         return HttpResponse.json(emptyMockData)
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m507[0m       }),
[7m   [0m [91m~~~~~~~~[0m

[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m3336[0m:[93m36[0m - [91merror[0m[90m ts(7006): [0mParameter 'rec' implicitly has an 'any' type.

[7m3336[0m               recommendations.map((rec) => (
[7m    [0m [91m                                   ~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m2874[0m:[93m39[0m - [91merror[0m[90m ts(18048): [0m'percent' is possibly 'undefined'.

[7m2874[0m                           `${name} ${(percent * 100).toFixed(0)}%`
[7m    [0m [91m                                      ~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m2808[0m:[93m39[0m - [91merror[0m[90m ts(18048): [0m'percent' is possibly 'undefined'.

[7m2808[0m                           `${name} ${(percent * 100).toFixed(0)}%`
[7m    [0m [91m                                      ~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m2327[0m:[93m17[0m - [91merror[0m[90m ts(2322): [0mType '(e: React.ChangeEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLSelectElement>'.
  Types of parameters 'e' and 'event' are incompatible.

[7m2327[0m                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
[7m    [0m [91m                ~~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m2301[0m:[93m17[0m - [91merror[0m[90m ts(2322): [0mType '(e: React.ChangeEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLSelectElement>'.
  Types of parameters 'e' and 'event' are incompatible.

[7m2301[0m                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
[7m    [0m [91m                ~~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m1836[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '(e: React.ChangeEvent<HTMLSelectElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLInputElement>'.
  Types of parameters 'e' and 'event' are incompatible.

[7m1836[0m                       onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
[7m    [0m [91m                      ~~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m1808[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '(e: React.ChangeEvent<HTMLSelectElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLInputElement>'.
  Types of parameters 'e' and 'event' are incompatible.

[7m1808[0m                       onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
[7m    [0m [91m                      ~~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m869[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'prev' implicitly has an 'any' type.

[7m869[0m                 setDashboardData((prev) => {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m852[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'prev' implicitly has an 'any' type.

[7m852[0m                 setDashboardData((prev) => {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m838[0m:[93m62[0m - [91merror[0m[90m ts(7006): [0mParameter 'session' implicitly has an 'any' type.

[7m838[0m                     recentAnalyses: prev.recentAnalyses.map((session) =>
[7m   [0m [91m                                                             ~~~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m831[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'prev' implicitly has an 'any' type.

[7m831[0m                 setDashboardData((prev) => {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m810[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'prev' implicitly has an 'any' type.

[7m810[0m                 setDashboardData((prev) => {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m527[0m:[93m40[0m - [91merror[0m[90m ts(7006): [0mParameter 'alert' implicitly has an 'any' type.

[7m527[0m               alerts: prev.alerts.map((alert) =>
[7m   [0m [91m                                       ~~~~~[0m
[96msrc/components/admin/bias-detection/BiasDashboard.tsx[0m:[93m73[0m:[93m15[0m - [91merror[0m[90m ts(2614): [0mModule '"@/lib/ai/bias-detection"' has no exported member 'BiasDashboardData'. Did you mean to use 'import BiasDashboardData from "@/lib/ai/bias-detection"' instead?

[7m73[0m import type { BiasDashboardData } from '@/lib/ai/bias-detection'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~[0m

[96msrc/components/ai/SyntheticTherapyDemo.tsx[0m:[93m193[0m:[93m17[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; min: number; max: number; step: number; value: number[]; onValueChange: (value: number[]) => void; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m193[0m                 id="maxTurns"
[7m   [0m [91m                ~~[0m
[96msrc/components/ai/SyntheticTherapyDemo.tsx[0m:[93m175[0m:[93m17[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; min: number; max: number; step: number; value: number[]; onValueChange: (value: number[]) => void; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m175[0m                 id="numSessions"
[7m   [0m [91m                ~~[0m
[96msrc/components/ai/SyntheticTherapyDemo.tsx[0m:[93m3[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m3[0m import React, { useState } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/ai/chat/ChatCompletionExample.tsx[0m:[93m233[0m:[93m13[0m - [93mwarning[0m[90m ts(6385): [0m'onKeyPress' is deprecated.

[7m233[0m             onKeyPress={handleKeyPress}
[7m   [0m [93m            ~~~~~~~~~~[0m

[96msrc/components/ai/chat/ResponseGenerationExample.tsx[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React, { useState } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/ai/chat/useChatCompletion.ts[0m:[93m640[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ content: string; role?: "user" | "assistant" | "system" | undefined; name?: string; }' is not assignable to type 'AIMessage'.
  Types of property 'role' are incompatible.

[7m640[0m         newMessages[index] = { ...newMessages[index], content: newContent }
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ai/chat/useChatCompletion.ts[0m:[93m590[0m:[93m21[0m - [91merror[0m[90m ts(2322): [0mType '{ content: string; role?: "user" | "assistant" | "system" | undefined; name?: string; }' is not assignable to type 'AIMessage'.
  Types of property 'role' are incompatible.

[7m590[0m                     newMessages[newMessages.length - 1] = {
[7m   [0m [91m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ai/chat/useChatCompletion.ts[0m:[93m589[0m:[93m23[0m - [91merror[0m[90m ts(18048): [0m'lastMessage' is possibly 'undefined'.

[7m589[0m                   if (lastMessage.role === 'assistant') {
[7m   [0m [91m                      ~~~~~~~~~~~[0m
[96msrc/components/ai/chat/useChatCompletion.ts[0m:[93m410[0m:[93m25[0m - [91merror[0m[90m ts(2322): [0mType '{ content: string; role?: "user" | "assistant" | "system" | undefined; name?: string; }' is not assignable to type 'AIMessage'.
  Types of property 'role' are incompatible.

[7m410[0m                         newMessages[newMessages.length - 1] = {
[7m   [0m [91m                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ai/chat/useChatCompletion.ts[0m:[93m408[0m:[93m27[0m - [91merror[0m[90m ts(18048): [0m'lastMessage' is possibly 'undefined'.

[7m408[0m                       if (lastMessage.role === 'assistant') {
[7m   [0m [91m                          ~~~~~~~~~~~[0m

[96msrc/components/ai/chat/useCrisisDetection.ts[0m:[93m269[0m:[93m61[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m269[0m       id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                            ~~~~~~[0m

[96msrc/components/ai/chat/useResponseGeneration.ts[0m:[93m111[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'_contextWindow' is declared but its value is never read.

[7m111[0m   _contextWindow = 4096,
[7m   [0m [91m  ~~~~~~~~~~~~~~[0m

[96msrc/components/ai/chat/useSentimentAnalysis.ts[0m:[93m110[0m:[93m42[0m - [91merror[0m[90m ts(4111): [0mProperty 'positive' comes from an index signature, so it must be accessed with ['positive'].

[7m110[0m   const positiveRatio = (sentimentCounts.positive ?? 0) / results.length
[7m   [0m [91m                                         ~~~~~~~~[0m
[96msrc/components/ai/chat/useSentimentAnalysis.ts[0m:[93m109[0m:[93m42[0m - [91merror[0m[90m ts(4111): [0mProperty 'negative' comes from an index signature, so it must be accessed with ['negative'].

[7m109[0m   const negativeRatio = (sentimentCounts.negative ?? 0) / results.length
[7m   [0m [91m                                         ~~~~~~~~[0m

[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m361[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-value": string; "data-step": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m361[0m               id="smoothing-slider"
[7m   [0m [91m              ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m314[0m:[93m47[0m - [91merror[0m[90m ts(6133): [0m'category' is declared but its value is never read.

[7m314[0m               availablePatternCategories.map((category: string) => (
[7m   [0m [91m                                              ~~~~~~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m302[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-value": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m302[0m               id="confidence-slider"
[7m   [0m [91m              ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m285[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-value": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m285[0m               id="strength-slider"
[7m   [0m [91m              ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m242[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-start": string; "data-end": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m242[0m                   id="dominance-range-slider"
[7m   [0m [91m                  ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m221[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-start": string; "data-end": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m221[0m                   id="arousal-range-slider"
[7m   [0m [91m                  ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m203[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-start": string; "data-end": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m203[0m                   id="valence-range-slider"
[7m   [0m [91m                  ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m181[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ id: string; "data-min": string; "data-max": string; "data-start": string; "data-end": string; }' is not assignable to type 'IntrinsicAttributes & SliderProps'.
  Property 'id' does not exist on type 'IntrinsicAttributes & SliderProps'.

[7m181[0m               id="intensity-range-slider"
[7m   [0m [91m              ~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m15[0m:[93m26[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/Checkbox' or its corresponding type declarations.

[7m15[0m import { Checkbox } from '@/components/ui/Checkbox'
[7m  [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m330[0m:[93m13[0m - [91merror[0m[90m ts(1005): [0m')' expected.

[7m330[0m             }
[7m   [0m [91m            ~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m708[0m:[93m66[0m - [91merror[0m[90m ts(18048): [0m'value' is possibly 'undefined'.

[7m708[0m           if (confidenceDisplay) confidenceDisplay.textContent = value.toFixed(1)
[7m   [0m [91m                                                                 ~~~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m694[0m:[93m62[0m - [91merror[0m[90m ts(18048): [0m'value' is possibly 'undefined'.

[7m694[0m           if (strengthDisplay) strengthDisplay.textContent = value.toFixed(1)
[7m   [0m [91m                                                             ~~~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m682[0m:[93m97[0m - [91merror[0m[90m ts(18048): [0m'max' is possibly 'undefined'.

[7m682[0m           if (dominanceRangeDisplay) dominanceRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                                                ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m682[0m:[93m77[0m - [91merror[0m[90m ts(18048): [0m'min' is possibly 'undefined'.

[7m682[0m           if (dominanceRangeDisplay) dominanceRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                            ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m681[0m:[93m64[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m681[0m           options.emotions.dimensionalRanges.dominance = [min, max]
[7m   [0m [91m                                                               ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m681[0m:[93m59[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m681[0m           options.emotions.dimensionalRanges.dominance = [min, max]
[7m   [0m [91m                                                          ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m667[0m:[93m93[0m - [91merror[0m[90m ts(18048): [0m'max' is possibly 'undefined'.

[7m667[0m           if (arousalRangeDisplay) arousalRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                                            ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m667[0m:[93m73[0m - [91merror[0m[90m ts(18048): [0m'min' is possibly 'undefined'.

[7m667[0m           if (arousalRangeDisplay) arousalRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                        ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m666[0m:[93m62[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m666[0m           options.emotions.dimensionalRanges.arousal = [min, max]
[7m   [0m [91m                                                             ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m666[0m:[93m57[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m666[0m           options.emotions.dimensionalRanges.arousal = [min, max]
[7m   [0m [91m                                                        ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m652[0m:[93m93[0m - [91merror[0m[90m ts(18048): [0m'max' is possibly 'undefined'.

[7m652[0m           if (valenceRangeDisplay) valenceRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                                            ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m652[0m:[93m73[0m - [91merror[0m[90m ts(18048): [0m'min' is possibly 'undefined'.

[7m652[0m           if (valenceRangeDisplay) valenceRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                        ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m651[0m:[93m62[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m651[0m           options.emotions.dimensionalRanges.valence = [min, max]
[7m   [0m [91m                                                             ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m651[0m:[93m57[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m651[0m           options.emotions.dimensionalRanges.valence = [min, max]
[7m   [0m [91m                                                        ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m637[0m:[93m97[0m - [91merror[0m[90m ts(18048): [0m'max' is possibly 'undefined'.

[7m637[0m           if (intensityRangeDisplay) intensityRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                                                ~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.astro[0m:[93m637[0m:[93m77[0m - [91merror[0m[90m ts(18048): [0m'min' is possibly 'undefined'.

[7m637[0m           if (intensityRangeDisplay) intensityRangeDisplay.textContent = `${min.toFixed(1)} - ${max.toFixed(1)}`
[7m   [0m [91m                                                                            ~~~[0m

[96msrc/components/analytics/AdvancedFilteringComponent.tsx[0m:[93m25[0m:[93m26[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/Checkbox' or its corresponding type declarations.

[7m25[0m import { Checkbox } from '@/components/ui/Checkbox'
[7m  [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/AdvancedFilteringComponent.tsx[0m:[93m17[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/popover' or its corresponding type declarations.

[7m17[0m } from '@/components/ui/popover'
[7m  [0m [91m       ~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/analytics/AnalyticsDashboard.astro[0m:[93m47[0m:[93m104[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ small: string; medium: string; large: string; }'.

[7m47[0m     class={`grid ${gridClasses[columns as keyof typeof gridClasses] || 'grid-cols-1 lg:grid-cols-2'} ${gapClasses[widgetGap]}`}
[7m  [0m [91m                                                                                                       ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/AnalyticsDashboard.astro[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'TableWidget' is declared but its value is never read.

[7m4[0m import { TableWidget } from './TableWidget'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/AnalyticsDashboard.astro[0m:[93m3[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'ChartWidget' is declared but its value is never read.

[7m3[0m import { ChartWidget } from './ChartWidget'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/AnalyticsDashboard.astro[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'MetricWidget' is declared but its value is never read.

[7m2[0m import { MetricWidget } from './MetricWidget'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/analytics/ComparativeProgressDisplay.tsx[0m:[93m76[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m76[0m   return new Date().toISOString().split('T')[0]
[7m  [0m [91m  ~~~~~~[0m
[96msrc/components/analytics/ComparativeProgressDisplay.tsx[0m:[93m72[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m72[0m   return date.toISOString().split('T')[0]
[7m  [0m [91m  ~~~~~~[0m

[96msrc/components/analytics/ConversionDashboard.tsx[0m:[93m98[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m98[0m       conversionTypes[event.conversionId].push(event)
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/analytics/MetricWidget.tsx[0m:[93m47[0m:[93m19[0m - [91merror[0m[90m ts(7030): [0mNot all code paths return a value.

[7m47[0m   React.useEffect(() => {
[7m  [0m [91m                  ~~~~~~~[0m

[96msrc/components/analytics/PatternVisualization.tsx[0m:[93m5[0m:[93m48[0m - [91merror[0m[90m ts(2307): [0mCannot find module './PatternVisualizationReact' or its corresponding type declarations.

[7m5[0m export type { PatternVisualizationProps } from './PatternVisualizationReact'
[7m [0m [91m                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/analytics/PatternVisualization.tsx[0m:[93m4[0m:[93m38[0m - [91merror[0m[90m ts(2307): [0mCannot find module './PatternVisualizationReact' or its corresponding type declarations.

[7m4[0m export { PatternVisualization } from './PatternVisualizationReact'
[7m [0m [91m                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/analytics/PrivacyDashboard.tsx[0m:[93m125[0m:[93m54[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'number | undefined' is not assignable to parameter of type 'number | boolean'.
  Type 'undefined' is not assignable to type 'number | boolean'.

[7m125[0m                 handleSettingChange('privacyBudget', values[0])
[7m   [0m [91m                                                     ~~~~~~~~~[0m

[96msrc/components/analytics/TableWidget.tsx[0m:[93m88[0m:[93m17[0m - [91merror[0m[90m ts(6133): [0m'setError' is declared but its value is never read.

[7m88[0m   const [error, setError] = useState<string | null>(null)
[7m  [0m [91m                ~~~~~~~~[0m
[96msrc/components/analytics/TableWidget.tsx[0m:[93m88[0m:[93m10[0m - [91merror[0m[90m ts(6133): [0m'error' is declared but its value is never read.

[7m88[0m   const [error, setError] = useState<string | null>(null)
[7m  [0m [91m         ~~~~~[0m

[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m15[0m:[93m33[0m - [91merror[0m[90m ts(7031): [0mBinding element 'children' implicitly has an 'any' type.

[7m15[0m   ResponsiveContainer: vi.fn(({ children }) => (
[7m  [0m [91m                                ~~~~~~~~[0m
[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m12[0m:[93m23[0m - [91merror[0m[90m ts(7031): [0mBinding element 'children' implicitly has an 'any' type.

[7m12[0m   LineChart: vi.fn(({ children }) => (
[7m  [0m [91m                      ~~~~~~~~[0m
[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m11[0m:[93m18[0m - [91merror[0m[90m ts(7031): [0mBinding element 'children' implicitly has an 'any' type.

[7m11[0m   Line: vi.fn(({ children }) => <div data-testid="line-chart">{children}</div>),
[7m  [0m [91m                 ~~~~~~~~[0m
[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m7[0m:[93m23[0m - [91merror[0m[90m ts(7031): [0mBinding element 'children' implicitly has an 'any' type.

[7m7[0m   AreaChart: vi.fn(({ children }) => (
[7m [0m [91m                      ~~~~~~~~[0m
[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m6[0m:[93m18[0m - [91merror[0m[90m ts(7031): [0mBinding element 'children' implicitly has an 'any' type.

[7m6[0m   Area: vi.fn(({ children }) => <div data-testid="area-chart">{children}</div>),
[7m [0m [91m                 ~~~~~~~~[0m
[96msrc/components/analytics/__tests__/PatternVisualization.test.tsx[0m:[93m2[0m:[93m38[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../PatternVisualizationReact' or its corresponding type declarations.

[7m2[0m import { PatternVisualization } from '../PatternVisualizationReact'
[7m [0m [91m                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/analytics/__tests__/PatternVisualizationReact.test.tsx[0m:[93m3[0m:[93m38[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../PatternVisualizationReact' or its corresponding type declarations.

[7m3[0m import { PatternVisualization } from '../PatternVisualizationReact'
[7m [0m [91m                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/audit/UnusualPatterns.tsx[0m:[93m9[0m:[93m28[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/components/ui/scroll-area' or its corresponding type declarations.

[7m9[0m import { ScrollArea } from '@/components/ui/scroll-area'
[7m [0m [91m                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/backgrounds/GradientAnimation.astro[0m:[93m69[0m:[93m24[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ default: { colors: string[]; darkColors: string[]; }; purple: { colors: string[]; darkColors: string[]; }; blue: { colors: string[]; darkColors: string[]; }; green: { colors: string[]; darkColors: string[]; }; sunset: { ...; }; }'.

[7m69[0m const selectedScheme = colorSchemes[colorScheme]
[7m  [0m [91m                       ~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/base/ErrorBoundary.astro[0m:[93m6[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'fallback' is declared but its value is never read.

[7m6[0m const { fallback = 'Something went wrong. Please try refreshing the page.' } =
[7m [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/base/NavItem.astro[0m:[93m3[0m:[93m1[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m3[0m import { ensureTrailingSlash, getUrl } from '@/utils/common'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/base/__tests__/ErrorBoundary.test.ts[0m:[93m67[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m67[0m     const { querySelector } = await renderAstro(ErrorBoundary)
[7m  [0m [91m                                                ~~~~~~~~~~~~~[0m
[96msrc/components/base/__tests__/ErrorBoundary.test.ts[0m:[93m44[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m44[0m     const { querySelector } = await renderAstro(ErrorBoundary)
[7m  [0m [91m                                                ~~~~~~~~~~~~~[0m
[96msrc/components/base/__tests__/ErrorBoundary.test.ts[0m:[93m21[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m21[0m     const { querySelector } = await renderAstro(ErrorBoundary, {
[7m  [0m [91m                                                ~~~~~~~~~~~~~[0m
[96msrc/components/base/__tests__/ErrorBoundary.test.ts[0m:[93m10[0m:[93m49[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m10[0m     const { querySelector } = await renderAstro(ErrorBoundary, {
[7m  [0m [91m                                                ~~~~~~~~~~~~~[0m

[96msrc/components/blog/TableOfContents.astro[0m:[93m39[0m:[93m34[0m - [91merror[0m[90m ts(2551): [0mProperty 'textConten' does not exist on type 'Element'. Did you mean 'textContent'?

[7m39[0m       link.textContent = heading.textConten
[7m  [0m [91m                                 ~~~~~~~~~~[0m
[96msrc/components/blog/TableOfContents.astro[0m:[93m26[0m:[93m19[0m - [91merror[0m[90m ts(2551): [0mProperty 'textConten' does not exist on type 'Element'. Did you mean 'textContent'?

[7m26[0m           heading.textConten
[7m  [0m [91m                  ~~~~~~~~~~[0m

[96msrc/components/chat/AnalyticsDashboardReact.tsx[0m:[93m128[0m:[93m61[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m128[0m       return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
[7m   [0m [93m                                                            ~~~~~~[0m

[96msrc/components/chat/CognitiveModelSelector.tsx[0m:[93m61[0m:[93m27[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m61[0m             onSelectModel(modelList[0].id)
[7m  [0m [91m                          ~~~~~~~~~~~~[0m

[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m392[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter 'msg' implicitly has an 'any' type.

[7m392[0m             messages={messages.map((msg) => ({
[7m   [0m [91m                                    ~~~[0m
[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m333[0m:[93m27[0m - [91merror[0m[90m ts(7006): [0mParameter 'm' implicitly has an 'any' type.

[7m333[0m         {messages.filter((m) => m.memoryStored).length > 0 && (
[7m   [0m [91m                          ~[0m
[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m94[0m:[93m33[0m - [91merror[0m[90m ts(7006): [0mParameter 'msg' implicitly has an 'any' type.

[7m94[0m         messages: messages.map((msg) => ({
[7m  [0m [91m                                ~~~[0m
[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m49[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'_placeholder' is declared but its value is never read.

[7m49[0m   _placeholder = 'Type your message here...',
[7m  [0m [91m  ~~~~~~~~~~~~[0m
[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m49[0m:[93m3[0m - [91merror[0m[90m ts(2339): [0mProperty '_placeholder' does not exist on type 'MemoryAwareChatSystemProps'.

[7m49[0m   _placeholder = 'Type your message here...',
[7m  [0m [91m  ~~~~~~~~~~~~[0m
[96msrc/components/chat/MemoryAwareChatSystem.tsx[0m:[93m4[0m:[93m35[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/hooks/useChatWithMemory' or its corresponding type declarations.

[7m4[0m import { useChatWithMemory } from '@/hooks/useChatWithMemory'
[7m [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m96[0m:[93m47[0m - [91merror[0m[90m ts(7006): [0mParameter 'issue' implicitly has an 'any' type.

[7m96[0m             {currentStyle.recommendedFor.map((issue) => (
[7m  [0m [91m                                              ~~~~~[0m
[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m87[0m:[93m47[0m - [91merror[0m[90m ts(7006): [0mParameter 'technique' implicitly has an 'any' type.

[7m87[0m             {currentStyle.techniquesUsed.map((technique) => (
[7m  [0m [91m                                              ~~~~~~~~~[0m
[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m70[0m:[93m18[0m - [91merror[0m[90m ts(18046): [0m'style' is of type 'unknown'.

[7m70[0m                 {style.name}
[7m  [0m [91m                 ~~~~~[0m
[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m32[0m:[93m28[0m - [91merror[0m[90m ts(7006): [0mParameter 'style' implicitly has an 'any' type.

[7m32[0m     recommendedStyles.map((style) => style.id),
[7m  [0m [91m                           ~~~~~[0m
[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m6[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../lib/ai/types/TherapyStyles' or its corresponding type declarations.

[7m6[0m } from '../../lib/ai/types/TherapyStyles'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/chat/TherapyStyleSelector.tsx[0m:[93m2[0m:[93m37[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../lib/ai/types/TherapyStyles' or its corresponding type declarations.

[7m2[0m import type { TherapyStyleId } from '../../lib/ai/types/TherapyStyles'
[7m [0m [91m                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/demo/ChatDemo.tsx[0m:[93m441[0m:[93m3[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<{ children: ReactNode; fallback?: ReactNode; }, { hasError: boolean; error?: Error | undefined; }, any>'.

[7m441[0m   render() {
[7m   [0m [91m  ~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m436[0m:[93m3[0m - [91merror[0m[90m ts(4114): [0mThis member must have an 'override' modifier because it overrides a member in the base class 'Component<{ children: ReactNode; fallback?: ReactNode; }, { hasError: boolean; error?: Error | undefined; }, any>'.

[7m436[0m   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
[7m   [0m [91m  ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m397[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter 'action' implicitly has an 'any' type.

[7m397[0m                               .map((action) => (
[7m   [0m [91m                                    ~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m395[0m:[93m43[0m - [91merror[0m[90m ts(2339): [0mProperty 'suggestedActions' does not exist on type 'CrisisDetectionResult'.

[7m395[0m                             {crisisResult.suggestedActions
[7m   [0m [91m                                          ~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m389[0m:[93m36[0m - [91merror[0m[90m ts(2339): [0mProperty 'suggestedActions' does not exist on type 'CrisisDetectionResult'.

[7m389[0m                       crisisResult.suggestedActions.length > 0 && (
[7m   [0m [91m                                   ~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m388[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'suggestedActions' does not exist on type 'CrisisDetectionResult'.

[7m388[0m                     {crisisResult.suggestedActions &&
[7m   [0m [91m                                  ~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m368[0m:[93m41[0m - [91merror[0m[90m ts(2339): [0mProperty 'category' does not exist on type 'CrisisDetectionResult'.

[7m368[0m                           {crisisResult.category}
[7m   [0m [91m                                        ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m364[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'category' does not exist on type 'CrisisDetectionResult'.

[7m364[0m                     {crisisResult.category && (
[7m   [0m [91m                                  ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m355[0m:[93m39[0m - [91merror[0m[90m ts(2339): [0mProperty 'isCrisis' does not exist on type 'CrisisDetectionResult'.

[7m355[0m                         {crisisResult.isCrisis ? 'Yes' : 'No'}
[7m   [0m [91m                                      ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m353[0m:[93m72[0m - [91merror[0m[90m ts(2339): [0mProperty 'isCrisis' does not exist on type 'CrisisDetectionResult'.

[7m353[0m                         className={`text-sm font-medium ${crisisResult.isCrisis ? 'text-red-600' : 'text-green-600'}`}
[7m   [0m [91m                                                                       ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m311[0m:[93m59[0m - [91merror[0m[90m ts(2339): [0mProperty 'emotions' does not exist on type 'SentimentAnalysisResult'.

[7m311[0m                           {Object.entries(sentimentResult.emotions)
[7m   [0m [91m                                                          ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m305[0m:[93m38[0m - [91merror[0m[90m ts(2339): [0mProperty 'emotions' does not exist on type 'SentimentAnalysisResult'.

[7m305[0m                     {sentimentResult.emotions && (
[7m   [0m [91m                                     ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m246[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType '{ messages: { role: "user" | "assistant" | "system"; content: string; name: string; }[]; onSendMessage: (message: string) => Promise<void>; isLoading: boolean; error: string | undefined; inputPlaceholder: string; onRetry: () => Promise<...>; disabled: boolean; }' is not assignable to type 'IntrinsicAttributes & ChatContainerProps'.
  Property 'onRetry' does not exist on type 'IntrinsicAttributes & ChatContainerProps'.

[7m246[0m           onRetry={retryLastMessage}
[7m   [0m [91m          ~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m177[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'isCrisis' does not exist on type 'CrisisDetectionResult'.

[7m177[0m       {crisisAlertShown && crisisResult?.isCrisis && (
[7m   [0m [91m                                         ~~~~~~~~[0m
[96msrc/components/demo/ChatDemo.tsx[0m:[93m78[0m:[93m5[0m - [91merror[0m[90m ts(2322): [0mType '(result: import("/root/pixel/src/lib/ai/crisis/types").CrisisDetectionResult) => void' is not assignable to type '(result: import("/root/pixel/src/lib/db/ai/types").CrisisDetectionResult) => void'.
  Types of parameters 'result' and 'result' are incompatible.

[7m78[0m     onCrisisDetected: useCallback(
[7m  [0m [91m    ~~~~~~~~~~~~~~~~[0m

[96msrc/components/demo/DemographicBalancingDisplay.tsx[0m:[93m287[0m:[93m7[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m287[0m       acc[stat.category].push(stat)
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/demo/PresentingProblemVisualization.tsx[0m:[93m21[0m:[93m20[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m21[0m       const unit = match[2].toLowerCase()
[7m  [0m [91m                   ~~~~~~~~[0m
[96msrc/components/demo/PresentingProblemVisualization.tsx[0m:[93m20[0m:[93m28[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m20[0m       const num = parseInt(match[1])
[7m  [0m [91m                           ~~~~~~~~[0m

[96msrc/components/demo/ScenarioGenerationDemo.tsx[0m:[93m564[0m:[93m51[0m - [91merror[0m[90m ts(7006): [0mParameter 'treatmentPlan' implicitly has an 'any' type.

[7m564[0m             onFormulationGenerated={(formulation, treatmentPlan) => {
[7m   [0m [91m                                                  ~~~~~~~~~~~~~[0m
[96msrc/components/demo/ScenarioGenerationDemo.tsx[0m:[93m564[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'formulation' implicitly has an 'any' type.

[7m564[0m             onFormulationGenerated={(formulation, treatmentPlan) => {
[7m   [0m [91m                                     ~~~~~~~~~~~[0m
[96msrc/components/demo/ScenarioGenerationDemo.tsx[0m:[93m560[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ patientInfo: PatientInfo; presentingProblem: string; complexity: "medium" | "low" | "high"; therapeuticApproaches: string[]; onFormulationGenerated: (formulation: any, treatmentPlan: any) => void; }' is not assignable to type 'IntrinsicAttributes & ClinicalFormulationDemoProps'.
  Property 'patientInfo' does not exist on type 'IntrinsicAttributes & ClinicalFormulationDemoProps'.

[7m560[0m             patientInfo={profileData.patientInfo}
[7m   [0m [91m            ~~~~~~~~~~~[0m

[96msrc/components/demo/__tests__/setup.ts[0m:[93m21[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'query' implicitly has an 'any' type.

[7m21[0m   value: vi.fn().mockImplementation((query) => ({
[7m  [0m [91m                                     ~~~~~[0m
[96msrc/components/demo/__tests__/setup.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m1[0m import { vi } from 'vitest'
[7m [0m [91m         ~~[0m

[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m404[0m:[93m26[0m - [91merror[0m[90m ts(18048): [0m'response' is possibly 'undefined'.

[7m404[0m       const data = await response.json()
[7m   [0m [91m                         ~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m388[0m:[93m26[0m - [91merror[0m[90m ts(7030): [0mNot all code paths return a value.

[7m388[0m       const retryFetch = async (url: string, options: any, maxRetries = 3) => {
[7m   [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m48[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterEach'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                               ~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m36[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                   ~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m28[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                           ~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                       ~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m             ~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/APIServiceIntegration.test.tsx[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m1[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m         ~~[0m

[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m451[0m:[93m41[0m - [91merror[0m[90m ts(7006): [0mParameter 'metrics' implicitly has an 'any' type.

[7m451[0m           onBalanceUpdate={(categories, metrics) => {
[7m   [0m [91m                                        ~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m451[0m:[93m29[0m - [91merror[0m[90m ts(7006): [0mParameter 'categories' implicitly has an 'any' type.

[7m451[0m           onBalanceUpdate={(categories, metrics) => {
[7m   [0m [91m                            ~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m403[0m:[93m41[0m - [91merror[0m[90m ts(7006): [0mParameter 'metrics' implicitly has an 'any' type.

[7m403[0m           onBalanceUpdate={(categories, metrics) => {
[7m   [0m [91m                                        ~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m403[0m:[93m29[0m - [91merror[0m[90m ts(7006): [0mParameter 'categories' implicitly has an 'any' type.

[7m403[0m           onBalanceUpdate={(categories, metrics) => {
[7m   [0m [91m                            ~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m330[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'HTMLElement | undefined' is not assignable to parameter of type 'Document | Node | Element | Window'.
  Type 'undefined' is not assignable to type 'Document | Node | Element | Window'.

[7m330[0m       fireEvent.click(testButtons[0])
[7m   [0m [91m                      ~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m7[0m:[93m31[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../ResultsExportDemo' or its corresponding type declarations.

[7m7[0m import ResultsExportDemo from '../../ResultsExportDemo'
[7m [0m [91m                              ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m6[0m:[93m35[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../CategoryBalancingDemo' or its corresponding type declarations.

[7m6[0m import CategoryBalancingDemo from '../../CategoryBalancingDemo'
[7m [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m5[0m:[93m28[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../ValidationDemo' or its corresponding type declarations.

[7m5[0m import ValidationDemo from '../../ValidationDemo'
[7m [0m [91m                           ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m4[0m:[93m31[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../DataIngestionDemo' or its corresponding type declarations.

[7m4[0m import DataIngestionDemo from '../../DataIngestionDemo'
[7m [0m [91m                              ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m48[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterEach'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                               ~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m36[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                   ~~~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                           ~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                       ~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m14[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m             ~~~~~~~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m3[0m import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
[7m [0m [91m         ~~[0m
[96msrc/components/demo/__tests__/integration/PipelineIntegration.test.tsx[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/demos/bias-detection/BiasDetectionDemo.tsx[0m:[93m202[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'HistoricalComparison | null' is not assignable to parameter of type 'HistoricalComparison'.
  Type 'null' is not assignable to type 'HistoricalComparison'.

[7m202[0m       historicalComparison,
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/demos/bias-detection/ExportControls.tsx[0m:[93m197[0m:[93m56[0m - [91merror[0m[90m ts(2339): [0mProperty 'expectedBiasReduction' does not exist on type 'CounterfactualScenario'.

[7m197[0m         content += `   Expected Reduction: ${(scenario.expectedBiasReduction * 100).toFixed(1)}%\n`
[7m   [0m [91m                                                       ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/demos/bias-detection/ExportControls.tsx[0m:[93m115[0m:[93m51[0m - [91merror[0m[90m ts(2339): [0mProperty 'expectedBiasReduction' does not exist on type 'CounterfactualScenario'.

[7m115[0m           `Counterfactual ${index + 1},${scenario.expectedBiasReduction},Counterfactual`,
[7m   [0m [91m                                                  ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/demos/bias-detection/PresetScenarioSelector.tsx[0m:[93m153[0m:[93m54[0m - [91merror[0m[90m ts(2339): [0mProperty 'title' does not exist on type 'PresetScenario'.

[7m153[0m             aria-label={`Select scenario: ${scenario.title}`}
[7m   [0m [91m                                                     ~~~~~[0m

[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m245[0m:[93m60[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m245[0m           <p className="mt-1 text-sm text-red-600">{errors.content}</p>
[7m   [0m [91m                                                           ~~~~~~~[0m
[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m244[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m244[0m         {errors.content && (
[7m   [0m [91m                ~~~~~~~[0m
[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m241[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m241[0m             errors.content ? 'border-red-300' : 'border-gray-300'
[7m   [0m [91m                   ~~~~~~~[0m
[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m71[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m71[0m       scenario: formData.scenario || undefined,
[7m  [0m [91m      ~~~~~~~~[0m
[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m55[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m55[0m       newErrors.content = 'Content must be at least 10 characters'
[7m  [0m [91m                ~~~~~~~[0m
[96msrc/components/demos/bias-detection/SessionInputForm.tsx[0m:[93m53[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'content' comes from an index signature, so it must be accessed with ['content'].

[7m53[0m       newErrors.content = 'Content is required'
[7m  [0m [91m                ~~~~~~~[0m

[96msrc/components/docs/Check.astro[0m:[93m26[0m:[93m29[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ success: string; info: string; default: string; }'.

[7m26[0m   <div class={`check-icon ${iconColors[variant]}`}>
[7m  [0m [91m                            ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/docs/Check.astro[0m:[93m25[0m:[93m27[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ success: string; info: string; default: string; }'.

[7m25[0m <div class={`check-item ${variantClasses[variant]} ${className || ''}`}>
[7m  [0m [91m                          ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m194[0m:[93m46[0m - [91merror[0m[90m ts(2339): [0mProperty 'documentUrl' does not exist on type 'EHRExportResult'.

[7m194[0m                           href={exportResult.documentUrl}
[7m   [0m [91m                                             ~~~~~~~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m191[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'documentUrl' does not exist on type 'EHRExportResult'.

[7m191[0m                     {exportResult.documentUrl && (
[7m   [0m [91m                                  ~~~~~~~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m188[0m:[93m52[0m - [91merror[0m[90m ts(2339): [0mProperty 'documentId' does not exist on type 'EHRExportResult'.

[7m188[0m                         Document ID: {exportResult.documentId}
[7m   [0m [91m                                                   ~~~~~~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m186[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'documentId' does not exist on type 'EHRExportResult'.

[7m186[0m                     {exportResult.documentId && (
[7m   [0m [91m                                  ~~~~~~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m177[0m:[93m35[0m - [91merror[0m[90m ts(2551): [0mProperty 'error' does not exist on type 'EHRExportResult'. Did you mean 'errors'?

[7m177[0m                     {exportResult.error}
[7m   [0m [91m                                  ~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m175[0m:[93m31[0m - [91merror[0m[90m ts(2551): [0mProperty 'error' does not exist on type 'EHRExportResult'. Did you mean 'errors'?

[7m175[0m                 {exportResult.error && (
[7m   [0m [91m                              ~~~~~[0m
[96msrc/components/documentation/ExportToEHR.tsx[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2459): [0mModule '"@/lib/documentation/ehrIntegration"' declares 'EHRExportOptions' locally, but it is not exported.

[7m3[0m import type { EHRExportOptions } from '@/lib/documentation/ehrIntegration'
[7m [0m [91m              ~~~~~~~~~~~~~~~~[0m

[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m214[0m:[93m35[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useCallback'.

[7m214[0m   const generateFeedbackSummary = useCallback(() => {
[7m   [0m [91m                                  ~~~~~~~~~~~[0m
[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m142[0m:[93m39[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useCallback'.

[7m142[0m   const identifyMissedOpportunities = useCallback(() => {
[7m   [0m [91m                                      ~~~~~~~~~~~[0m
[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m92[0m:[93m29[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useCallback'.

[7m92[0m   const analyzeTechniques = useCallback(() => {
[7m  [0m [91m                            ~~~~~~~~~~~[0m
[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m88[0m:[93m5[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'generateFeedbackSummary' used before its declaration.

[7m88[0m     generateFeedbackSummary,
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m87[0m:[93m5[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'identifyMissedOpportunities' used before its declaration.

[7m87[0m     identifyMissedOpportunities,
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/feedback/SupervisorFeedback.tsx[0m:[93m86[0m:[93m5[0m - [91merror[0m[90m ts(2448): [0mBlock-scoped variable 'analyzeTechniques' used before its declaration.

[7m86[0m     analyzeTechniques,
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~[0m

[96msrc/components/layout/HeaderReact.tsx[0m:[93m4[0m:[93m29[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../ui/ThemeToggle' or its corresponding type declarations.

[7m4[0m import { ThemeToggle } from '../ui/ThemeToggle'
[7m [0m [91m                            ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/layout/ResponsiveContainer.astro[0m:[93m52[0m:[93m50[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ xs: string; sm: string; md: string; lg: string; xl: string; '2xl': string; none: string; }'.

[7m52[0m   maxWidth !== 'none' && variant === 'default' ? maxWidthClasses[maxWidth] : '',
[7m  [0m [91m                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/layout/ResponsiveContainer.astro[0m:[93m51[0m:[93m3[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ none: string; sm: string; md: string; lg: string; xl: string; }'.

[7m51[0m   paddingClasses[padding],
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/layout/ResponsiveContainer.astro[0m:[93m50[0m:[93m3[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ default: string; fluid: string; narrow: string; wide: string; }'.

[7m50[0m   variantClasses[variant],
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/layout/ResponsiveGrid.astro[0m:[93m61[0m:[93m3[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ xs: string; sm: string; md: string; lg: string; xl: string; }'.

[7m61[0m   gapClasses[gap],
[7m  [0m [91m  ~~~~~~~~~~~~~~~[0m
[96msrc/components/layout/ResponsiveGrid.astro[0m:[93m215[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m215[0m <script define:vars={{ columns, minCardWidth, breakpoints: defaultBreakpoints }}
[7m   [0m [93m        ~~~~~~~~~~~[0m

[96msrc/components/layout/SidebarReact.tsx[0m:[93m3[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m3[0m import React, { useState, useEffect } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/media/BackgroundImage.astro[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'ImageMetadata'.

[7m3[0m import type { ImageMetadata } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~~[0m
[96msrc/components/media/BackgroundImage.astro[0m:[93m269[0m:[93m53[0m - [91merror[0m[90m ts(4111): [0mProperty 'src' comes from an index signature, so it must be accessed with ['src'].

[7m269[0m                   const actualImage = image.dataset.src
[7m   [0m [91m                                                    ~~~[0m

[96msrc/components/media/CMSImage.astro[0m:[93m61[0m:[93m8[0m - [91merror[0m[90m ts(7006): [0mParameter 'bp' implicitly has an 'any' type.

[7m61[0m       (bp) =>
[7m  [0m [91m       ~~[0m

[96msrc/components/media/OptimizedImage.astro[0m:[93m24[0m:[93m42[0m - [91merror[0m[90m ts(6133): [0m'src' is declared but its value is never read.

[7m24[0m async function generateBase64Placeholder(src: string | ImageMetadata) {
[7m  [0m [91m                                         ~~~[0m
[96msrc/components/media/OptimizedImage.astro[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'ImageMetadata'.

[7m3[0m import type { ImageMetadata } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~~[0m

[96msrc/components/media/ResponsiveImage.astro[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'ImageMetadata'.

[7m3[0m import type { ImageMetadata } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~~[0m

[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m591[0m:[93m65[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'ReactNode'.

[7m591[0m                           <span className="text-sm font-medium">{count}</span>
[7m   [0m [91m                                                                ~~~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m587[0m:[93m44[0m - [91merror[0m[90m ts(18046): [0m'count' is of type 'unknown'.

[7m587[0m                                 width: `${(count / (memory.stats?.totalMemories || 1)) * 100}%`,
[7m   [0m [91m                                           ~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m473[0m:[93m51[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; asChild: true; }' is not assignable to type 'IntrinsicAttributes & AlertDialogTriggerProps'.
  Property 'asChild' does not exist on type 'IntrinsicAttributes & AlertDialogTriggerProps'.

[7m473[0m                               <AlertDialogTrigger asChild>
[7m   [0m [91m                                                  ~~~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m429[0m:[93m46[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; asChild: true; }' is not assignable to type 'IntrinsicAttributes & DialogTriggerProps & RefAttributes<HTMLButtonElement>'.
  Property 'asChild' does not exist on type 'IntrinsicAttributes & DialogTriggerProps & RefAttributes<HTMLButtonElement>'.

[7m429[0m                               <DialogTrigger asChild>
[7m   [0m [91m                                             ~~~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m407[0m:[93m67[0m - [91merror[0m[90m ts(7006): [0mParameter 'tag' implicitly has an 'any' type.

[7m407[0m                             {mem.metadata?.tags?.slice(0, 3).map((tag) => (
[7m   [0m [91m                                                                  ~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m382[0m:[93m18[0m - [91merror[0m[90m ts(2739): [0mType '{ children: Element[]; }' is missing the following properties from type 'TableProps<TableRowData>': columns, dataSource, tableState, onStateChange

[7m382[0m                 <Table>
[7m   [0m [91m                 ~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m278[0m:[93m34[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; asChild: true; }' is not assignable to type 'IntrinsicAttributes & DialogTriggerProps & RefAttributes<HTMLButtonElement>'.
  Property 'asChild' does not exist on type 'IntrinsicAttributes & DialogTriggerProps & RefAttributes<HTMLButtonElement>'.

[7m278[0m                   <DialogTrigger asChild>
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/components/memory/MemoryDashboard.tsx[0m:[93m65[0m:[93m34[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/memory/memory-client' or its corresponding type declarations.

[7m65[0m import type { MemoryEntry } from '@/lib/memory/memory-client'
[7m  [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/monitoring/AIPerformanceDashboard.astro[0m:[93m260[0m:[93m3[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m260[0m   define:vars={{
[7m   [0m [93m  ~~~~~~~~~~~[0m

[96msrc/components/monitoring/AuditDashboard.tsx[0m:[93m97[0m:[93m82[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'string'.

[7m97[0m               <li key={`unusual-access-${detail.id || detail.timestamp || detail.user || Date.now()}`} className="flex items-center text-red-600">
[7m  [0m [91m                                                                                 ~~~~[0m
[96msrc/components/monitoring/AuditDashboard.tsx[0m:[93m97[0m:[93m62[0m - [91merror[0m[90m ts(2339): [0mProperty 'timestamp' does not exist on type 'string'.

[7m97[0m               <li key={`unusual-access-${detail.id || detail.timestamp || detail.user || Date.now()}`} className="flex items-center text-red-600">
[7m  [0m [91m                                                             ~~~~~~~~~[0m
[96msrc/components/monitoring/AuditDashboard.tsx[0m:[93m97[0m:[93m49[0m - [91merror[0m[90m ts(2339): [0mProperty 'id' does not exist on type 'string'.

[7m97[0m               <li key={`unusual-access-${detail.id || detail.timestamp || detail.user || Date.now()}`} className="flex items-center text-red-600">
[7m  [0m [91m                                                ~~[0m
[96msrc/components/monitoring/AuditDashboard.tsx[0m:[93m3[0m:[93m26[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../ui/charts/PieChart' or its corresponding type declarations.

[7m3[0m import { PieChart } from '../ui/charts/PieChart'
[7m [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/monitoring/AuditDashboard.tsx[0m:[93m2[0m:[93m27[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../ui/charts/LineChart' or its corresponding type declarations.

[7m2[0m import { LineChart } from '../ui/charts/LineChart'
[7m [0m [91m                          ~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/monitoring/RUMWidget.tsx[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React, { useEffect } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/monitoring/RealUserMonitoring.astro[0m:[93m16[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'config' is declared but its value is never read.

[7m16[0m const config = getMonitoringConfig()
[7m  [0m [91m      ~~~~~~[0m
[96msrc/components/monitoring/RealUserMonitoring.astro[0m:[93m13[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'refreshInterval' is declared but its value is never read.

[7m13[0m   refreshInterval = 60000,
[7m  [0m [91m  ~~~~~~~~~~~~~~~[0m

[96msrc/components/monitoring/WebPerformanceDashboard.astro[0m:[93m13[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'config' is declared but its value is never read.

[7m13[0m const config = getMonitoringConfig()
[7m  [0m [91m      ~~~~~~[0m
[96msrc/components/monitoring/WebPerformanceDashboard.astro[0m:[93m3[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'getPerformanceIndicator' is declared but its value is never read.

[7m3[0m import { getPerformanceIndicator } from '@/lib/monitoring/hooks'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/monitoring/WebPerformanceDashboard.astro[0m:[93m273[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m273[0m <script define:vars={{ refreshInterval, performanceBudgets }}>
[7m   [0m [93m        ~~~~~~~~~~~[0m

[96msrc/components/monitoring/__tests__/RUMWidget.test.tsx[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/monitoring/__tests__/RealUserMonitoring.astro.test.ts[0m:[93m129[0m:[93m61[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  The last overload gave the following error.

[7m129[0m     render(React.createElement(RealUserMonitoringComponent, customProps))
[7m   [0m [91m                                                            ~~~~~~~~~~~[0m
[96msrc/components/monitoring/__tests__/RealUserMonitoring.astro.test.ts[0m:[93m13[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'API_KEY' comes from an index signature, so it must be accessed with ['API_KEY'].

[7m13[0m       apiKey: process.env.API_KEY || 'example-api-key',
[7m  [0m [91m                          ~~~~~~~[0m

[96msrc/components/notification/__tests__/NotificationCenter.test.tsx[0m:[93m168[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useWebSocket'.

[7m168[0m     vi.mocked(useWebSocket).mockReturnValue({
[7m   [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationCenter.test.tsx[0m:[93m125[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useWebSocket'.

[7m125[0m     vi.mocked(useWebSocket).mockReturnValue({
[7m   [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationCenter.test.tsx[0m:[93m93[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useWebSocket'.

[7m93[0m     vi.mocked(useWebSocket).mockReturnValue({
[7m  [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationCenter.test.tsx[0m:[93m66[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useWebSocket'.

[7m66[0m     vi.mocked(useWebSocket).mockReturnValue({
[7m  [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationCenter.test.tsx[0m:[93m29[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useWebSocket'.

[7m29[0m     vi.mocked(useWebSocket).mockReturnValue({
[7m  [0m [91m              ~~~~~~~~~~~~[0m

[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m173[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m173[0m       ...useNotificationPreferences(),
[7m   [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m172[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m172[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m   [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m152[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m152[0m       ...useNotificationPreferences(),
[7m   [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m151[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m151[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m   [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m137[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m137[0m       ...useNotificationPreferences(),
[7m   [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m136[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m136[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m   [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m117[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m117[0m       ...useNotificationPreferences(),
[7m   [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m116[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m116[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m   [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m89[0m:[93m12[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m89[0m         ...useNotificationPreferences().preferences,
[7m  [0m [91m           ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m87[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m87[0m       ...useNotificationPreferences(),
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m86[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m86[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m54[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m54[0m       ...useNotificationPreferences(),
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m53[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m53[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m44[0m:[93m10[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m44[0m       ...useNotificationPreferences(),
[7m  [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/notification/__tests__/NotificationPreferences.test.tsx[0m:[93m43[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'useNotificationPreferences'.

[7m43[0m     vi.mocked(useNotificationPreferences).mockReturnValueOnce({
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/pages/EmotionProgressDemo.tsx[0m:[93m31[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType '{ progressData: EmotionProgressData; timeRange: "month" | "week" | "year" | "quarter"; onTimeRangeChange: Dispatch<SetStateAction<"month" | "week" | "year" | "quarter">>; isLoading: boolean; className: string; }' is not assignable to type 'IntrinsicAttributes & EmotionProgressDashboardProps'.
  Property 'progressData' does not exist on type 'IntrinsicAttributes & EmotionProgressDashboardProps'.

[7m31[0m           progressData={data}
[7m  [0m [91m          ~~~~~~~~~~~~[0m

[96msrc/components/pages/EmotionVisualizationDemo.tsx[0m:[93m155[0m:[93m17[0m - [91merror[0m[90m ts(2322): [0mType 'EmotionData[]' is not assignable to type 'EmotionDataPoint[]'.
  Property 'id' is missing in type 'EmotionData' but required in type 'EmotionDataPoint'.

[7m155[0m                 emotionData={data}
[7m   [0m [91m                ~~~~~~~~~~~[0m

[96msrc/components/pages/EmotionVisualizationPage.tsx[0m:[93m73[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType 'EmotionData[]' is not assignable to type 'EmotionDataPoint[]'.
  Property 'id' is missing in type 'EmotionData' but required in type 'EmotionDataPoint'.

[7m73[0m             emotionData={emotionData}
[7m  [0m [91m            ~~~~~~~~~~~[0m

[96msrc/components/patient/PatientFileViewer.tsx[0m:[93m3[0m:[93m35[0m - [91merror[0m[90m ts(6133): [0m'_patientModel' is declared but its value is never read.

[7m3[0m export function PatientFileViewer({
[7m [0m [91m                                  ~[0m
[7m4[0m   _patientModel,
[7m [0m [91m~~~~~~~~~~~~~~~~[0m
[7m5[0m }: {
[7m [0m [91m~[0m

[96msrc/components/security/FHEDemo.astro[0m:[93m10[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'CardFooter' is declared but its value is never read.

[7m10[0m import CardFooter from '@/components/ui/CardFooter.astro';
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/FHEDemo.astro[0m:[93m270[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'encrypted' is declared but its value is never read.

[7m270[0m     encrypted: string,
[7m   [0m [91m    ~~~~~~~~~[0m

[96msrc/components/security/SecurityDashboard.astro[0m:[93m231[0m:[93m9[0m - [91merror[0m[90m ts(6133): [0m'mockStats' is declared but its value is never read.

[7m231[0m   const mockStats: SecurityStats = {
[7m   [0m [91m        ~~~~~~~~~[0m

[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m74[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Record<string, any>) => any' is not assignable to parameter of type 'AstroComponent'.

[7m74[0m     await renderAstro(SecurityDashboard)
[7m  [0m [91m                      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m65[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Record<string, any>) => any' is not assignable to parameter of type 'AstroComponent'.

[7m65[0m     await renderAstro(SecurityDashboard)
[7m  [0m [91m                      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m57[0m:[93m22[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'HTMLElement | undefined' is not assignable to parameter of type 'Document | Node | Element | Window'.
  Type 'undefined' is not assignable to type 'Document | Node | Element | Window'.

[7m57[0m     fireEvent.change(severitySelect, { target: { value: 'high' } })
[7m  [0m [91m                     ~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m51[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Record<string, any>) => any' is not assignable to parameter of type 'AstroComponent'.

[7m51[0m     await renderAstro(SecurityDashboard)
[7m  [0m [91m                      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m37[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Record<string, any>) => any' is not assignable to parameter of type 'AstroComponent'.

[7m37[0m     await renderAstro(SecurityDashboard)
[7m  [0m [91m                      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m17[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Record<string, any>) => any' is not assignable to parameter of type 'AstroComponent'.

[7m17[0m     const { container } = await renderAstro(SecurityDashboard)
[7m  [0m [91m                                            ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/security/__tests__/SecurityDashboard.test.ts[0m:[93m17[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m17[0m     const { container } = await renderAstro(SecurityDashboard)
[7m  [0m [91m            ~~~~~~~~~[0m

[96msrc/components/session/EmotionTemporalAnalysisChart.tsx[0m:[93m305[0m:[93m45[0m - [91merror[0m[90m ts(7006): [0mParameter 'point' implicitly has an 'any' type.

[7m305[0m           {prepareCriticalPointsData().map((point) => (
[7m   [0m [91m                                            ~~~~~[0m
[96msrc/components/session/EmotionTemporalAnalysisChart.tsx[0m:[93m161[0m:[93m47[0m - [91merror[0m[90m ts(7006): [0mParameter 'rel' implicitly has an 'any' type.

[7m161[0m     return data.dimensionalRelationships.map((rel) => ({
[7m   [0m [91m                                              ~~~[0m
[96msrc/components/session/EmotionTemporalAnalysisChart.tsx[0m:[93m148[0m:[93m47[0m - [91merror[0m[90m ts(7006): [0mParameter 'transition' implicitly has an 'any' type.

[7m148[0m     return data.transitions.slice(0, 10).map((transition) => ({
[7m   [0m [91m                                              ~~~~~~~~~~[0m
[96msrc/components/session/EmotionTemporalAnalysisChart.tsx[0m:[93m108[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter 'point' implicitly has an 'any' type.

[7m108[0m     return data.criticalPoints.map((point) => ({
[7m   [0m [91m                                    ~~~~~[0m
[96msrc/components/session/EmotionTemporalAnalysisChart.tsx[0m:[93m17[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"../../lib/ai/temporal/EmotionTemporalAnalyzer"' has no exported member 'TemporalEmotionAnalysis'.

[7m17[0m import type { TemporalEmotionAnalysis } from '../../lib/ai/temporal/EmotionTemporalAnalyzer'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/session/MultidimensionalEmotionChart.tsx[0m:[93m571[0m:[93m61[0m - [91merror[0m[90m ts(2339): [0mProperty 'dispose' does not exist on type 'typeof Material'.

[7m571[0m                 ;(object.material as typeof THREE.Material).dispose()
[7m   [0m [91m                                                            ~~~~~~~[0m
[96msrc/components/session/MultidimensionalEmotionChart.tsx[0m:[93m568[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'dispose' does not exist on type 'typeof Material'.

[7m568[0m                   (material) => material.dispose(),
[7m   [0m [91m                                         ~~~~~~~[0m
[96msrc/components/session/MultidimensionalEmotionChart.tsx[0m:[93m216[0m:[93m5[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"dampingFactor"' can't be used to index type 'OrbitControls'.
  Property 'dampingFactor' does not exist on type 'OrbitControls'.

[7m216[0m     controls['dampingFactor'] = 0.25
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/session/MultidimensionalEmotionChart.tsx[0m:[93m215[0m:[93m5[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"enableDamping"' can't be used to index type 'OrbitControls'.
  Property 'enableDamping' does not exist on type 'OrbitControls'.

[7m215[0m     controls['enableDamping'] = true
[7m   [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/session/SessionAnalysis.tsx[0m:[93m92[0m:[93m49[0m - [91merror[0m[90m ts(2339): [0mProperty 'dominantEmotion' does not exist on type 'EmotionApiItem'.

[7m92[0m                 ? { ...baseData, label: `${item.dominantEmotion}` }
[7m  [0m [91m                                                ~~~~~~~~~~~~~~~[0m
[96msrc/components/session/SessionAnalysis.tsx[0m:[93m91[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'dominantEmotion' does not exist on type 'EmotionApiItem'.

[7m91[0m               return item.dominantEmotion
[7m  [0m [91m                          ~~~~~~~~~~~~~~~[0m

[96msrc/components/session/SessionDocumentation.tsx[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2724): [0m'"../../lib/documentation/useDocumentation"' has no exported member named 'SessionDocumentation'. Did you mean 'useDocumentation'?

[7m2[0m import type { SessionDocumentation } from '../../lib/documentation/useDocumentation'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/session/SessionList.astro[0m:[93m41[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'session' implicitly has an 'any' type.

[7m41[0m         {sessions.map((session) => (
[7m  [0m [91m                       ~~~~~~~[0m

[96msrc/components/tailus/AppHeader.astro[0m:[93m4[0m:[93m53[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-button' or its corresponding type declarations.

[7m4[0m import { button, ghostButton, outlinedButton } from '@tailus/themer-button'
[7m [0m [91m                                                    ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/tailus/BentoGrid.astro[0m:[93m4[0m:[93m45[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-card' or its corresponding type declarations.

[7m4[0m import { softGradientVariant as card } from '@tailus/themer-card'
[7m [0m [91m                                            ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/tailus/CallToAction.astro[0m:[93m5[0m:[93m40[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-button' or its corresponding type declarations.

[7m5[0m import { button, outlinedButton } from '@tailus/themer-button'
[7m [0m [91m                                       ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/tailus/HeroSection.astro[0m:[93m4[0m:[93m40[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-button' or its corresponding type declarations.

[7m4[0m import { button, outlinedButton } from '@tailus/themer-button'
[7m [0m [91m                                       ~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/tailus/SpeedSection.astro[0m:[93m4[0m:[93m26[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-progress' or its corresponding type declarations.

[7m4[0m import { progress } from '@tailus/themer-progress'
[7m [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/tailus/Testimonials.astro[0m:[93m3[0m:[93m37[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@tailus/themer-card' or its corresponding type declarations.

[7m3[0m import { softVariant as card } from '@tailus/themer-card'
[7m [0m [91m                                    ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/testing/BrowserCompatibilityTester.tsx[0m:[93m29[0m:[93m25[0m - [93mwarning[0m[90m ts(6385): [0m'vendor' is deprecated.

[7m29[0m       vendor: navigator.vendor,
[7m  [0m [93m                        ~~~~~~[0m
[96msrc/components/testing/BrowserCompatibilityTester.tsx[0m:[93m26[0m:[93m27[0m - [93mwarning[0m[90m ts(6385): [0m'platform' is deprecated.

[7m26[0m       platform: navigator.platform,
[7m  [0m [93m                          ~~~~~~~~[0m

[96msrc/components/theme/ThemeProvider.tsx[0m:[93m41[0m:[93m13[0m - [91merror[0m[90m ts(7030): [0mNot all code paths return a value.

[7m41[0m   useEffect(() => {
[7m  [0m [91m            ~~~~~~~[0m
[96msrc/components/theme/ThemeProvider.tsx[0m:[93m3[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m3[0m import React, { createContext, useContext, useEffect, useState } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m885[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '(string | undefined)[]' is not assignable to type 'string[]'.
  Type 'string | undefined' is not assignable to type 'string'.

[7m885[0m   return interventions
[7m   [0m [91m  ~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m830[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ notes?: string | undefined; completedAt?: number | undefined; id: string; description: string | undefined; isCompleted: boolean; }[]' is not assignable to type '{ id: string; description: string; isCompleted: boolean; completedAt?: number | undefined; notes?: string | undefined; }[]'.
  Type '{ notes?: string | undefined; completedAt?: number | undefined; id: string; description: string | undefined; isCompleted: boolean; }' is not assignable to type '{ id: string; description: string; isCompleted: boolean; completedAt?: number | undefined; notes?: string | undefined; }'.

[7m830[0m   return checkpoints
[7m   [0m [91m  ~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m773[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'EMOTIONAL' does not exist on type 'typeof GoalCategory'.

[7m773[0m     return GoalCategory.EMOTIONAL
[7m   [0m [91m                        ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m770[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'SPIRITUAL' does not exist on type 'typeof GoalCategory'.

[7m770[0m     return GoalCategory.SPIRITUAL
[7m   [0m [91m                        ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m764[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'PHYSICAL' does not exist on type 'typeof GoalCategory'.

[7m764[0m     return GoalCategory.PHYSICAL
[7m   [0m [91m                        ~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m758[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'BEHAVIORAL' does not exist on type 'typeof GoalCategory'.

[7m758[0m     return GoalCategory.BEHAVIORAL
[7m   [0m [91m                        ~~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m752[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'INTERPERSONAL' does not exist on type 'typeof GoalCategory'.

[7m752[0m     return GoalCategory.INTERPERSONAL
[7m   [0m [91m                        ~~~~~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m746[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'COGNITIVE' does not exist on type 'typeof GoalCategory'.

[7m746[0m     return GoalCategory.COGNITIVE
[7m   [0m [91m                        ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m740[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'EMOTIONAL' does not exist on type 'typeof GoalCategory'.

[7m740[0m     return GoalCategory.EMOTIONAL
[7m   [0m [91m                        ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m660[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'EMOTIONAL' does not exist on type 'typeof GoalCategory'.

[7m660[0m       category: GoalCategory.EMOTIONAL,
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m472[0m:[93m54[0m - [91merror[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m472[0m             {activeGoal.checkpoints.map((checkpoint, index) => (
[7m   [0m [91m                                                     ~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m402[0m:[93m56[0m - [91merror[0m[90m ts(2339): [0mProperty 'ABANDONED' does not exist on type 'typeof GoalStatus'.

[7m402[0m                           : goal.status === GoalStatus.ABANDONED
[7m   [0m [91m                                                       ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m348[0m:[93m52[0m - [91merror[0m[90m ts(2339): [0mProperty 'EMOTIONAL' does not exist on type 'typeof GoalCategory'.

[7m348[0m               value={form.category || GoalCategory.EMOTIONAL}
[7m   [0m [91m                                                   ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m324[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; isOpen: true; onClose: () => void; title: string; }' is not assignable to type 'IntrinsicAttributes & DialogRootProps'.
  Property 'isOpen' does not exist on type 'IntrinsicAttributes & DialogRootProps'. Did you mean 'open'?

[7m324[0m           isOpen={showModal}
[7m   [0m [91m          ~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m197[0m:[93m36[0m - [91merror[0m[90m ts(2339): [0mProperty 'EMOTIONAL' does not exist on type 'typeof GoalCategory'.

[7m197[0m             category: GoalCategory.EMOTIONAL,
[7m   [0m [91m                                   ~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m69[0m:[93m27[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m69[0m           setActiveGoalId(fallbackGoals[0].id)
[7m  [0m [91m                          ~~~~~~~~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m59[0m:[93m29[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m59[0m             setActiveGoalId(initialGoals[0].id)
[7m  [0m [91m                            ~~~~~~~~~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m52[0m:[93m29[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m52[0m             setActiveGoalId(data[0].id)
[7m  [0m [91m                            ~~~~~~~[0m
[96msrc/components/therapy/TherapeuticGoalsTracker.tsx[0m:[93m11[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/components/ui/form"' has no exported member 'Textarea'.

[7m11[0m import { Textarea } from '@/components/ui/form'
[7m  [0m [91m         ~~~~~~~~[0m

[96msrc/components/therapy/TreatmentPlanManager.tsx[0m:[93m854[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element | null; isOpen: boolean; onClose: () => void; title: string; showCloseButton: boolean; className: string; footer: Element; }' is not assignable to type 'IntrinsicAttributes & DialogRootProps'.
  Property 'isOpen' does not exist on type 'IntrinsicAttributes & DialogRootProps'. Did you mean 'open'?

[7m854[0m         isOpen={isEditModalOpen}
[7m   [0m [91m        ~~~~~~[0m
[96msrc/components/therapy/TreatmentPlanManager.tsx[0m:[93m714[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; isOpen: boolean; onClose: () => void; title: string; showCloseButton: boolean; className: string; footer: Element; }' is not assignable to type 'IntrinsicAttributes & DialogRootProps'.
  Property 'isOpen' does not exist on type 'IntrinsicAttributes & DialogRootProps'. Did you mean 'open'?

[7m714[0m         isOpen={isCreateModalOpen}
[7m   [0m [91m        ~~~~~~[0m
[96msrc/components/therapy/TreatmentPlanManager.tsx[0m:[93m698[0m:[93m39[0m - [91merror[0m[90m ts(2322): [0mType '{ children: Element; asChild: true; }' is not assignable to type 'IntrinsicAttributes & AlertDialogTriggerProps'.
  Property 'asChild' does not exist on type 'IntrinsicAttributes & AlertDialogTriggerProps'.

[7m698[0m                   <AlertDialogTrigger asChild>
[7m   [0m [91m                                      ~~~~~~~[0m
[96msrc/components/therapy/TreatmentPlanManager.tsx[0m:[93m666[0m:[93m10[0m - [91merror[0m[90m ts(2739): [0mType '{ children: Element[]; }' is missing the following properties from type 'TableProps<TableRowData>': columns, dataSource, tableState, onStateChange

[7m666[0m         <Table>
[7m   [0m [91m         ~~~~~[0m
[96msrc/components/therapy/TreatmentPlanManager.tsx[0m:[93m101[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m101[0m   startDate: new Date().toISOString().split('T')[0],
[7m   [0m [91m  ~~~~~~~~~[0m

[96msrc/components/toc/Toc.astro[0m:[93m113[0m:[93m22[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m113[0m           years.map((item) => (
[7m   [0m [91m                     ~~~~[0m
[96msrc/components/toc/Toc.astro[0m:[93m103[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m103[0m           category.map((item) => (
[7m   [0m [91m                        ~~~~[0m
[96msrc/components/toc/Toc.astro[0m:[93m85[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m85[0m             years.map((item) => (
[7m  [0m [91m                       ~~~~[0m
[96msrc/components/toc/Toc.astro[0m:[93m75[0m:[93m27[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m75[0m             category.map((item) => (
[7m  [0m [91m                          ~~~~[0m
[96msrc/components/toc/Toc.astro[0m:[93m9[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'MarkdownHeading'.

[7m9[0m import type { MarkdownHeading } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~~~~[0m

[96msrc/components/toc/TocButton.astro[0m:[93m47[0m:[93m28[0m - [91merror[0m[90m ts(2551): [0mProperty 'targe' does not exist on type 'MouseEvent'. Did you mean 'target'?

[7m47[0m       const target = event.targe
[7m  [0m [91m                           ~~~~~[0m

[96msrc/components/toc/TocItem.astro[0m:[93m24[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'subheading' implicitly has an 'any' type.

[7m24[0m         {children.map((subheading) => (
[7m  [0m [91m                       ~~~~~~~~~~[0m

[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m364[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'initial' comes from an index signature, so it must be accessed with ['initial'].

[7m364[0m       initial={masterSequence?.initial || {}}
[7m   [0m [91m                               ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m364[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'Variant' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | undefined'.
  Type 'TargetResolver' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | undefined'.

[7m364[0m       initial={masterSequence?.initial || {}}
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m353[0m:[93m51[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m353[0m         await masterControls.start(masterSequence.animate || {})
[7m   [0m [91m                                                  ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m319[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'initial' comes from an index signature, so it must be accessed with ['initial'].

[7m319[0m       initial={currentVariants.initial || {}}
[7m   [0m [91m                               ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m319[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'Variant' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | undefined'.
  Type 'TargetResolver' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | undefined'.

[7m319[0m       initial={currentVariants.initial || {}}
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m303[0m:[93m46[0m - [91merror[0m[90m ts(4111): [0mProperty 'initial' comes from an index signature, so it must be accessed with ['initial'].

[7m303[0m       await controls.start(steps[0].variants.initial || {})
[7m   [0m [91m                                             ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m303[0m:[93m28[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m303[0m       await controls.start(steps[0].variants.initial || {})
[7m   [0m [91m                           ~~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m294[0m:[93m18[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m294[0m           delay: step.delay || 0,
[7m   [0m [91m                 ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m293[0m:[93m69[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m293[0m           ease: typeof step.ease === 'string' ? EASING[step.ease] : step.ease,
[7m   [0m [91m                                                                    ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m293[0m:[93m56[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m293[0m           ease: typeof step.ease === 'string' ? EASING[step.ease] : step.ease,
[7m   [0m [91m                                                       ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m293[0m:[93m24[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m293[0m           ease: typeof step.ease === 'string' ? EASING[step.ease] : step.ease,
[7m   [0m [91m                       ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m292[0m:[93m21[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m292[0m           duration: step.duration || TIMING.normal,
[7m   [0m [91m                    ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m290[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m290[0m         ...step.variants.animate,
[7m   [0m [91m                         ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m290[0m:[93m12[0m - [91merror[0m[90m ts(18048): [0m'step' is possibly 'undefined'.

[7m290[0m         ...step.variants.animate,
[7m   [0m [91m           ~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m289[0m:[93m28[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ transition: { duration: number; ease: number[] | readonly [0.25, 0.1, 0.25, 1] | readonly [0.4, 0, 1, 1] | readonly [0, 0, 0.2, 1] | readonly [0.4, 0, 0.2, 1] | readonly [0.34, 1.56, 0.64, 1] | readonly [0.22, 1, 0.36, 1] | readonly [0.68, -0.55, 0.265, 1.55] | undefined; delay: number; }; ... 698 more ...; transi...' is not assignable to parameter of type 'AnimationDefinition'.
  Types of property 'transition' are incompatible.

[7m289[0m       await controls.start({
[7m   [0m [91m                           ~[0m
[7m290[0m         ...step.variants.animate,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m295[0m         },
[7m   [0m [91m~~~~~~~~~~[0m
[7m296[0m       })
[7m   [0m [91m~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m142[0m:[93m21[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'keyof IntrinsicElements' can't be used to index type '(<Props, TagName extends keyof DOMMotionComponents | string = "div">(Component: string | TagName | ComponentType<Props>, { forwardMotionProps }?: MotionComponentOptions | undefined, preloadedFeatures?: FeaturePackages | undefined, createVisualElement?: CreateVisualElement<...> | undefined) => MotionComponent<...>) &...'.
  No index signature with a parameter of type 'string' was found on type '(<Props, TagName extends keyof DOMMotionComponents | string = "div">(Component: string | TagName | ComponentType<Props>, { forwardMotionProps }?: MotionComponentOptions | undefined, preloadedFeatures?: FeaturePackages | undefined, createVisualElement?: CreateVisualElement<...> | undefined) => MotionComponent<...>) &...'.

[7m142[0m   const Component = motion[as] as React.ComponentType<
[7m   [0m [91m                    ~~~~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m104[0m:[93m67[0m - [91merror[0m[90m ts(4111): [0mProperty 'transition' comes from an index signature, so it must be accessed with ['transition'].

[7m104[0m             ...((baseVariants.animate as Record<string, unknown>).transition || {}),
[7m   [0m [91m                                                                  ~~~~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m104[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m104[0m             ...((baseVariants.animate as Record<string, unknown>).transition || {}),
[7m   [0m [91m                              ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m102[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m102[0m           ...baseVariants.animate,
[7m   [0m [91m                          ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m97[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m97[0m       typeof baseVariants.animate === 'object'
[7m  [0m [91m                          ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m96[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'animate' comes from an index signature, so it must be accessed with ['animate'].

[7m96[0m       baseVariants.animate &&
[7m  [0m [91m                   ~~~~~~~[0m
[96msrc/components/transitions/AnimationOrchestrator.tsx[0m:[93m83[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'Variants | undefined' is not assignable to type 'Variants'.
  Type 'undefined' is not assignable to type 'Variants'.

[7m83[0m       baseVariants = animationPresets[sequence] || animationPresets.fadeIn
[7m  [0m [91m      ~~~~~~~~~~~~[0m

[96msrc/components/transitions/PageTransitions.astro[0m:[93m60[0m:[93m22[0m - [91merror[0m[90m ts(18048): [0m'currentTransition' is possibly 'undefined'.

[7m60[0m const newTransform = currentTransition.new.transform || 'none'
[7m  [0m [91m                     ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/transitions/PageTransitions.astro[0m:[93m59[0m:[93m20[0m - [91merror[0m[90m ts(18048): [0m'currentTransition' is possibly 'undefined'.

[7m59[0m const newOpacity = currentTransition.new.opacity || '1'
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/transitions/PageTransitions.astro[0m:[93m58[0m:[93m22[0m - [91merror[0m[90m ts(18048): [0m'currentTransition' is possibly 'undefined'.

[7m58[0m const oldTransform = currentTransition.old.transform || 'none'
[7m  [0m [91m                     ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/transitions/PageTransitions.astro[0m:[93m57[0m:[93m20[0m - [91merror[0m[90m ts(18048): [0m'currentTransition' is possibly 'undefined'.

[7m57[0m const oldOpacity = currentTransition.old.opacity || '1'
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/transitions/PageTransitions.astro[0m:[93m177[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'newDocument' is declared but its value is never read.

[7m177[0m     const newDocument = event.newDocument
[7m   [0m [91m          ~~~~~~~~~~~[0m

[96msrc/components/ui/AccessibilityAnnouncer.tsx[0m:[93m27[0m:[93m13[0m - [91merror[0m[90m ts(7030): [0mNot all code paths return a value.

[7m27[0m   useEffect(() => {
[7m  [0m [91m            ~~~~~~~[0m
[96msrc/components/ui/AccessibilityAnnouncer.tsx[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React, { useEffect, useState } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/ui/Alert.astro[0m:[93m56[0m:[93m33[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ info: string; success: string; warning: string; error: string; }'.

[7m56[0m const classes = cn(baseClasses, variantClasses[variant], className);
[7m  [0m [91m                                ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ui/Alert.astro[0m:[93m55[0m:[93m29[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ info: string; success: string; warning: string; error: string; }'.

[7m55[0m const displayIcon = icon || defaultIcons[variant];
[7m  [0m [91m                            ~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/ui/ToastProvider.tsx[0m:[93m24[0m:[93m9[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'success' does not exist in type 'Partial<Partial<Pick<Toast, "style" | "duration" | "className" | "id" | "icon" | "ariaProps" | "position" | "iconTheme" | "removeDelay">>>'.

[7m24[0m         success: {
[7m  [0m [91m        ~~~~~~~[0m
[96msrc/components/ui/ToastProvider.tsx[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m2[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/ui/UserMenu.tsx[0m:[93m58[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user_metadata' does not exist on type 'AuthUser'.

[7m58[0m               {user.user_metadata?.full_name || user.email}
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/components/ui/UserMenu.tsx[0m:[93m47[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user_metadata' does not exist on type 'AuthUser'.

[7m47[0m           src={user.user_metadata?.avatar_url}
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/components/ui/UserMenu.tsx[0m:[93m3[0m:[93m24[0m - [91merror[0m[90m ts(2307): [0mCannot find module './avatar' or its corresponding type declarations.

[7m3[0m import { Avatar } from './avatar'
[7m [0m [91m                       ~~~~~~~~~~[0m
[96msrc/components/ui/UserMenu.tsx[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React, { useState, useRef, useEffect } from 'react'
[7m [0m [91m       ~~~~~[0m

[96msrc/components/ui/icons.tsx[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/ui/label.tsx[0m:[93m11[0m:[93m21[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m11[0m     if (process.env.NODE_ENV !== 'production' && !htmlFor) {
[7m  [0m [91m                    ~~~~~~~~[0m

[96msrc/components/ui/rubiks-cube.tsx[0m:[93m6[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@react-three/drei"' has no exported member 'PerspectiveCamera'.

[7m6[0m import { PerspectiveCamera } from "@react-three/drei";
[7m [0m [91m         ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ui/rubiks-cube.tsx[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@react-three/drei"' has no exported member 'SpotLight'.

[7m5[0m import { SpotLight } from "@react-three/drei";
[7m [0m [91m         ~~~~~~~~~[0m
[96msrc/components/ui/rubiks-cube.tsx[0m:[93m4[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@react-three/drei"' has no exported member 'RoundedBox'.

[7m4[0m import { RoundedBox } from "@react-three/drei";
[7m [0m [91m         ~~~~~~~~~~[0m

[96msrc/components/ui/tabs.tsx[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m1[0m import React, {
[7m [0m [91m       ~~~~~[0m

[96msrc/components/ui/toast.tsx[0m:[93m3[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'React' is declared but its value is never read.

[7m3[0m import React from 'react'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m125[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m125[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m125[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m125[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m114[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m114[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m114[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m114[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m104[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m104[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m104[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m104[0m     const { container } = await renderAstro(Alert, {
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m93[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m93[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m93[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m93[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m81[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m81[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m81[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m81[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m69[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m69[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m69[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m69[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m55[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m55[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m55[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m55[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m38[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m38[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m38[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m38[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m19[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m19[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m19[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m19[0m     const { container } = await renderAstro(Alert, {
[7m  [0m [91m            ~~~~~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m7[0m:[93m45[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.

[7m7[0m     const { container } = await renderAstro(Alert, {
[7m [0m [91m                                            ~~~~~[0m
[96msrc/components/ui/__tests__/Alert.test.ts[0m:[93m7[0m:[93m13[0m - [91merror[0m[90m ts(2339): [0mProperty 'container' does not exist on type '{ astroContainer: HTMLDivElement; html: string; querySelector: (selector: string) => Element | null; querySelectorAll: (selector: string) => NodeListOf<Element>; }'.

[7m7[0m     const { container } = await renderAstro(Alert, {
[7m [0m [91m            ~~~~~~~~~[0m

[96msrc/components/ui/__tests__/Card.test.ts[0m:[93m158[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type '(_props: Props) => any' is not assignable to parameter of type 'AstroComponent'.
