
  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/statistics.ts:10:14]
  9 |  */
 10 | export class StatisticalAnalysis {
    :              ^^^^^^^^^^^^^^^^^^^
 11 |   /**
    `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/pages/api/v1/preferences/index.ts:36:10]
 35 | function validateAIPreferences(
 36 |   input: any,
    :          ^^^
 37 | ): asserts input is typeof DEFAULT_AI_PREFERENCES {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test-utils/astro-test-utils.ts:9:18]
  8 |   description?: string
  9 |   [key: string]: any
    :                  ^^^
 10 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/analytics/engagement.ts:138:19]
 137 |     })
 138 |   } catch (error: any) {
     :                   ^^^
 139 |     // Log error securely (avoid leaking sensitive info)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/types/testing.ts:243:29]
 242 |   title: string
 243 |   component?: ComponentType<any>
     :                             ^^^
 244 |   instructions?: string[]
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/types/testing.ts:245:26]
 244 |   instructions?: string[]
 245 |   props?: Record<string, any>
     :                          ^^^
 246 | }
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/pages/api/emotions/real-time-analysis.ts:29:42]
 28 |     _text: string,
 29 |     _options: { userId: string; context: any },
    :                                          ^^^
 30 |   ): Promise<EmotionAnalysisResult> {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/pages/api/analytics/demo-tracking.ts:12:18]
 11 |   user_agent: string
 12 |   [key: string]: any
    :                  ^^^
 13 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/pages/api/examples/profiling-demo.ts:14:64]
 13 | // Simulates a database query
 14 | async function simulateDatabaseQuery(): Promise<Record<string, any>> {
    :                                                                ^^^
 15 |   // Simulate DB query delay
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-namespace): ES2015 module syntax is preferred over namespaces.
    ,-[src/lib/services/redis/__tests__/vitest.setup.ts:10:3]
  9 | declare global {
 10 |   namespace Vi {
    :   ^^^^^^^^^
 11 |     interface Assertion {
    `----
  help: Replace the namespace with an ES2015 module or use `declare module`

  ! eslint(no-unused-vars): Variable 'initialValue' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/cross-browser/browser-compatibility.spec.ts:155:17]
 154 |           // Test slider interaction
 155 |           const initialValue = await firstSlider.getAttribute('aria-valuenow')
     :                 ^^^^^^|^^^^^
     :                       `-- 'initialValue' is declared here
 156 | 
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Variable 'newValue' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/cross-browser/browser-compatibility.spec.ts:162:17]
 161 |           // Value should change (or at least not error)
 162 |           const newValue = await firstSlider.getAttribute('aria-valuenow')
     :                 ^^^^|^^^
     :                     `-- 'newValue' is declared here
 163 |           // Note: Some browsers might not support keyboard slider control
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Catch parameter 'e' is caught but never used. Unused caught errors should start with a '_'.
     ,-[tests/cross-browser/browser-compatibility.spec.ts:299:20]
 298 |             return retrieved === 'value'
 299 |           } catch (e) {
     :                    |
     :                    `-- 'e' is declared here
 300 |             return false
     `----
  help: Consider handling this error.

  ! eslint(no-unused-vars): Catch parameter 'e' is caught but never used. Unused caught errors should start with a '_'.
     ,-[tests/cross-browser/browser-compatibility.spec.ts:318:34]
 317 |                           return true
 318 |                         } catch (e) {
     :                                  |
     :                                  `-- 'e' is declared here
 319 |                           return false
     `----
  help: Consider handling this error.

  ! eslint(no-new): Do not use 'new' for side effects.
     ,-[src/pages/admin/all-demos-analytics.astro:571:5]
 570 |   document.addEventListener('DOMContentLoaded', () => {
 571 |     new AllDemosAnalyticsDashboard();
     :     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 572 |   });
     `----

  ! eslint(no-unused-vars): Parameter 'tasks' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/services/TaskListManager.ts:270:5]
 269 |   private checkParentCompletion(
 270 |     tasks: TaskItem[],
     :     ^^|^^
     :       `-- 'tasks' is declared here
 271 |     completedTask: TaskItem,
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'completedTask' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/services/TaskListManager.ts:271:5]
 270 |     tasks: TaskItem[],
 271 |     completedTask: TaskItem,
     :     ^^^^^^|^^^^^^
     :           `-- 'completedTask' is declared here
 272 |   ): void {
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'request' is declared but never used. Unused parameters should start with a '_'.
   ,-[src/pages/api/memory/test.ts:4:39]
 3 | 
 4 | export const GET: APIRoute = async ({ request, url }) => {
   :                                       ^^^|^^^
   :                                          `-- 'request' is declared here
 5 |   try {
   `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
     ,-[tests/visual/bias-dashboard.visual.spec.ts:171:7]
 170 | // Visual test utilities
 171 | class DashboardVisualTestUtils {
     :       ^^^^^^^^^^^^^^^^^^^^^^^^
 172 |   static async setupMockData(page: Page, data: any) {
     `----
  help: Try using standalone functions instead of static methods

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useCallback has a missing dependency: 'generateSummary'
     ,-[src/hooks/useCognitiveDistortionDetection.ts:122:5]
 121 |     },
 122 |     [minConfidence, onDetection, onComplete],
     :     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 123 |   )
     `----
  help: Either include it or remove the dependency array.

  ! eslint(no-new): Do not use 'new' for side effects.
     ,-[src/pages/admin/demo-analytics.astro:573:5]
 572 |   document.addEventListener('DOMContentLoaded', () => {
 573 |     new DemoAnalyticsDashboard()
     :     ^^^^^^^^^^^^^^^^^^^^^^^^^^
 574 |   })
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/services/cdn/index.ts:250:57]
 249 | 
 250 |   public async getEdgeMetrics(): Promise<Record<string, any>> {
     :                                                         ^^^
 251 |     try {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/services/cdn/index.ts:252:37]
 251 |     try {
 252 |       const metrics: Record<string, any> = {}
     :                                     ^^^
 253 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:120:29]
 119 | 
 120 | function exportAsJSON(data: any): Response {
     :                             ^^^
 121 |   const exportData = {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:136:28]
 135 | 
 136 | function exportAsCSV(data: any): Response {
     :                            ^^^
 137 |   // Create CSV content from dashboard data
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:157:43]
 156 |   if (data.recentSessions) {
 157 |     data.recentSessions.forEach((session: any) => {
     :                                           ^^^
 158 |       csvRows.push(
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:192:33]
 191 |   if (data.alerts) {
 192 |     data.alerts.forEach((alert: any) => {
     :                                 ^^^
 193 |       csvRows.push(
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:220:28]
 219 | 
 220 | function exportAsPDF(data: any): Response {
     :                            ^^^
 221 |   // For PDF export, we'll create a simple HTML-based PDF
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:262:23]
 261 |             ?.map(
 262 |               (alert: any) => `
     :                       ^^^
 263 |           <div class="alert ${alert.level}">
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/pages/api/bias-detection/export.ts:291:27]
 290 |                 ?.map(
 291 |                   (group: any) => `
     :                           ^^^
 292 |               <tr>
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'cookies' is declared but never used. Unused parameters should start with a '_'.
   ,-[src/pages/api/bias-detection/export.ts:7:48]
 6 | 
 7 | export const GET: APIRoute = async ({ request, cookies }) => {
   :                                                ^^^|^^^
   :                                                   `-- 'cookies' is declared here
 8 |   try {
   `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/pages/api/admin/backup/recovery-test.ts:5:40]
 4 | // This will be replaced with the actual recovery testing logic
 5 | async function runRecoveryTest(config: any) {
   :                                        ^^^
 6 |   // Placeholder for recovery test logic
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/pages/api/admin/backup/recovery-test.ts:45:19]
 44 | 
 45 |   } catch (error: any) {
    :                   ^^^
 46 |     console.error('Recovery test API error:', error);
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/documentation/ehrIntegration.ts:10:23]
  9 | export class EHRIntegration {
 10 |   private fhirClient: any
    :                       ^^^
 11 |   private auditLog: boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/documentation/ehrIntegration.ts:18:27]
 17 |    */
 18 |   constructor(fhirClient: any, options: { auditLog?: boolean } = {}) {
    :                           ^^^
 19 |     this.fhirClient = fhirClient
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/documentation/ehrIntegration.ts:279:14]
 278 |     options: EHRExportOptions,
 279 |   ): Promise<any> {
     :              ^^^
 280 |     const now = new Date().toISOString()
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-unused-vars): Catch parameter 'error' is caught but never used.
    ,-[src/buffer-polyfill.js:12:10]
 11 |   BufferPolyfill = bufferPkg.Buffer
 12 | } catch (error) {
    :          ^^|^^
    :            `-- 'error' is declared here
 13 |   // Fallback implementation if package import fails
    `----
  help: Consider handling this error.

  x eslint(no-unused-vars): Parameter 'encoding' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/buffer-polyfill.js:15:23]
 14 |   BufferPolyfill = class BufferShim extends Uint8Array {
 15 |     static from(data, encoding) {
    :                       ^^^^|^^^
    :                           `-- 'encoding' is declared here
 16 |       if (typeof data === 'string') {
    `----
  help: Consider removing this parameter.

  x eslint(no-unused-vars): Parameter 'encoding' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/buffer-polyfill.js:35:14]
 34 | 
 35 |     toString(encoding) {
    :              ^^^^|^^^
    :                  `-- 'encoding' is declared here
 36 |       const decoder = new TextDecoder()
    `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/documentation/useDocumentation.ts:389:88]
 388 |         const documentationSystem = await getDocumentationSystemInstance()
 389 |         const rawResult = await documentationSystem.exportToEHR(sessionId, options) as any;
     :                                                                                        ^^^
 390 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'context' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/metaaligner/core/objective-weighting.ts:244:5]
 243 |     baseWeights: Record<string, number>,
 244 |     context: AlignmentContext,
     :     ^^^|^^^
     :        `-- 'context' is declared here
 245 |   ): Record<string, number> {
     `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
     ,-[src/lib/metaaligner/core/objective-weighting.ts:475:14]
 474 |  */
 475 | export class ObjectiveBalancer {
     :              ^^^^^^^^^^^^^^^^^
 476 |   /**
     `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/documentation/types.ts:75:29]
 74 |    */
 75 |   metadata?: Record<string, any>
    :                             ^^^
 76 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/documentation/types.ts:95:10]
 94 |    */
 95 |   data?: any
    :          ^^^
 96 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/redis.ts:11:24]
 10 |   try {
 11 |     const { config } = require('../config/env.config')
    :                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 12 |     return config
    `----
  help: Do not use CommonJS `require` calls

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/hooks/useConversionTracking.ts:22:18]
 21 | interface EventData {
 22 |   [key: string]: any
    :                  ^^^
 23 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/hooks/useConversionTracking.ts:35:30]
 34 |   const log = useCallback(
 35 |     (message: string, data?: any) => {
    :                              ^^^
 36 |       if (debug) {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/hooks/useConversionTracking.ts:163:17]
 162 |   interface Window {
 163 |     dataLayer?: any[]
     :                 ^^^
 164 |   }
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'trackEvent'
    ,-[src/hooks/useConversionTracking.ts:60:6]
 59 |     }
 60 |   }, [funnels, log])
    :      ^^^^^^^^^^^^^^
 61 | 
    `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/scripts/blog-publisher.ts:160:37]
 159 |   // Create a map of series to posts
 160 |   const seriesMap = new Map<string, any[]>()
     :                                     ^^^
 161 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Variable 'axeResults' is declared but never used. Unused variables should start with a '_'.
    ,-[tests/accessibility/screen-reader.spec.ts:44:13]
 43 |       // Run axe analysis focusing on screen reader related rules
 44 |       const axeResults = await new AxeBuilder({ page: pageContext })
    :             ^^^^^|^^^^
    :                  `-- 'axeResults' is declared here
 45 |         .withTags(['wcag2a', 'wcag2aa'])
    `----
  help: Consider removing this declaration.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/fhe/examples/parameter-optimization-example.ts:54:33]
 53 | 
 54 |   const results: Record<string, any> = {}
    :                                 ^^^
 55 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/fhe/examples/parameter-optimization-example.ts:99:33]
  98 | 
  99 |   const results: Record<string, any> = {}
     :                                 ^^^
 100 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/fhe/dynamic-fhe.tsx:67:34]
 66 | export const useFHE = () => {
 67 |   const [fhe, setFHE] = useState<any>(null)
    :                                  ^^^
 68 |   const [loading, setLoading] = useState(true)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/dashboard/SimulatorDashboard.tsx:145:72]
 144 |             You can track your progress through anonymized metrics that are only
 145 |             stored in your browser. View your progress by clicking the "Progress
     :                                                                        ^
 146 |             Metrics" button above.
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/dashboard/SimulatorDashboard.tsx:146:20]
 145 |             stored in your browser. View your progress by clicking the "Progress
 146 |             Metrics" button above.
     :                    ^
 147 |           </div>
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:160:40]
 159 |   const success = check(createResponse, {
 160 |     'breach created successfully': (r: any) => r.status === 200,
     :                                        ^^^
 161 |     'has breach ID': (r: any) => r.json('id') !== undefined,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:161:26]
 160 |     'breach created successfully': (r: any) => r.status === 200,
 161 |     'has breach ID': (r: any) => r.json('id') !== undefined,
     :                          ^^^
 162 |   })
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:200:46]
 199 |     check(notificationResponse, {
 200 |       'notifications sent successfully': (r: any) => r.status === 200,
     :                                              ^^^
 201 |       'all notifications delivered': (r: any) => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:201:42]
 200 |       'notifications sent successfully': (r: any) => r.status === 200,
 201 |       'all notifications delivered': (r: any) => {
     :                                          ^^^
 202 |         const data = r.json()
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:228:48]
 227 |   check(response, {
 228 |     'test environment setup successfully': (r: any) => r.status === 200,
     :                                                ^^^
 229 |   })
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:234:32]
 233 | 
 234 | export function teardown(data: any) {
     :                                ^^^
 235 |   // Cleanup test environment
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/load-tests/breach-notification.load.ts:245:53]
 244 |   check(response, {
 245 |     'test environment cleaned up successfully': (r: any) => r.status === 200,
     :                                                     ^^^
 246 |   })
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/simulator/hooks/useRealTimeAnalysis.ts:12:60]
 11 |   updateConsent(hasConsent: boolean): void
 12 |   on(event: 'error' | 'connectionChange', callback: (data: any) => void): void
    :                                                            ^^^
 13 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/simulator/hooks/useRealTimeAnalysis.ts:17:60]
 16 | declare module '../services/FeedbackService' {
 17 |   interface FeedbackService extends FeedbackServiceMethods {}
    :                                                            ^^
 18 | }
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/hooks/useMemory.ts:35:50]
 34 |   // Convenience methods
 35 |   addUserPreference: (preference: string, value: any) => Promise<void>
    :                                                  ^^^
 36 |   addConversationContext: (context: string, sessionId?: string) => Promise<void>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/hooks/useMemory.ts:45:35]
 44 |   clearMemories: () => void
 45 |   getMemoryHistory: () => Promise<any[]>
    :                                   ^^^
 46 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/hooks/useMemory.ts:178:39]
 177 |   const addUserPreference = useCallback(
 178 |     async (preference: string, value: any): Promise<void> => {
     :                                       ^^^
 179 |       await memoryManager.addUserPreference(userId, preference, value)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/hooks/useMemory.ts:231:58]
 230 | 
 231 |   const getMemoryHistory = useCallback(async (): Promise<any[]> => {
     :                                                          ^^^
 232 |     try {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/hooks/useMemory.ts:319:32]
 318 |   const setPreference = useCallback(
 319 |     async (key: string, value: any) => {
     :                                ^^^
 320 |       const existingPref = memory.memories.find((m) =>
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/hooks/useMemory.ts:337:20]
 336 |   const getPreference = useCallback(
 337 |     (key: string): any => {
     :                    ^^^
 338 |       const prefMemory = memory.memories.find((m) =>
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/utils/logger.ts:196:5]
 195 |   // Use a function-scoped static variable to avoid TDZ/circular import issues
 196 |   // @ts-expect-error
     :     ^^^^^^^^^^^^^^^^^
 197 |   if (!getLogger._instance) {
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/utils/logger.ts:198:7]
 197 |   if (!getLogger._instance) {
 198 |     // @ts-expect-error
     :       ^^^^^^^^^^^^^^^^^
 199 |     getLogger._instance = new Logger()
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/utils/logger.ts:201:5]
 200 |   }
 201 |   // @ts-expect-error
     :     ^^^^^^^^^^^^^^^^^
 202 |   const baseLogger: Logger = getLogger._instance
     `----

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a dependency array that changes every render.
     ,-[src/lib/hooks/useMultidimensionalEmotions.ts:109:6]
 108 |     fetchData()
 109 |   }, [clientId, sessionId, timeRange, dataPoints, fetchData])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 110 | 
     `----
  help: Try memoizing this variable with `useRef` or `useCallback`.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/simulator/hooks/useSpeechRecognition.ts:70:33]
 69 |   // Refs for speech recognition
 70 |   const recognitionRef = useRef<any>(null)
    :                                 ^^^
 71 |   const listeningRef = useRef<boolean>(false)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/simulator/hooks/useSpeechRecognition.ts:108:47]
 107 |     // Configure speech recognition
 108 |     recognitionRef.current.onresult = (event: any) => {
     :                                               ^^^
 109 |       let finalText = ''
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/simulator/hooks/useSpeechRecognition.ts:166:46]
 165 | 
 166 |     recognitionRef.current.onerror = (event: any) => {
     :                                              ^^^
 167 |       const errorMessage = `Speech recognition error: ${event.error}`
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/db/ai/repository.ts:983:19]
 982 |     confidenceScore: number
 983 |     layerResults: any
     :                   ^^^
 984 |     demographics?: any
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/db/ai/repository.ts:984:20]
 983 |     layerResults: any
 984 |     demographics?: any
     :                    ^^^
 985 |     demographicGroups?: any
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/db/ai/repository.ts:985:25]
 984 |     demographics?: any
 985 |     demographicGroups?: any
     :                         ^^^
 986 |     recommendations?: string[]
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/db/ai/repository.ts:991:16]
 990 |     modelProvider?: string
 991 |     metadata?: any
     :                ^^^
 992 |   }): Promise<string> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1026:62]
 1025 |    */
 1026 |   async getBiasAnalysisBySession(sessionId: string): Promise<any | null> {
      :                                                              ^^^
 1027 |     const { data, error } = await supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1078:14]
 1077 |     },
 1078 |   ): Promise<any[]> {
      :              ^^^
 1079 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1153:16]
 1152 |     aggregationPeriod?: 'hourly' | 'daily' | 'weekly' | 'monthly'
 1153 |     metadata?: any
      :                ^^^
 1154 |   }): Promise<string> {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1188:15]
 1187 |     limit?: number
 1188 |   }): Promise<any[]> {
      :               ^^^
 1189 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1253:14]
 1252 |     message: string
 1253 |     details: any
      :              ^^^
 1254 |     notificationChannels?: string[]
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1292:15]
 1291 |     offset?: number
 1292 |   }): Promise<any[]> {
      :               ^^^
 1293 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1381:17]
 1380 |       escalated?: boolean
 1381 |       actions?: any[]
      :                 ^^^
 1382 |     },
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1384:23]
 1383 |   ): Promise<boolean> {
 1384 |     const updateData: any = {}
      :                       ^^^
 1385 | 
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1444:25]
 1443 |     averageBiasScore?: number
 1444 |     alertDistribution?: any
      :                         ^^^
 1445 |     aggregatedMetrics?: any
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1445:25]
 1444 |     alertDistribution?: any
 1445 |     aggregatedMetrics?: any
      :                         ^^^
 1446 |     trendAnalysis?: any
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1446:21]
 1445 |     aggregatedMetrics?: any
 1446 |     trendAnalysis?: any
      :                     ^^^
 1447 |     customAnalysis?: any
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1447:22]
 1446 |     trendAnalysis?: any
 1447 |     customAnalysis?: any
      :                      ^^^
 1448 |     recommendations?: any
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1448:23]
 1447 |     customAnalysis?: any
 1448 |     recommendations?: any
      :                       ^^^
 1449 |     executionTimeMs?: number
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1452:16]
 1451 |     expiresAt?: Date
 1452 |     metadata?: any
      :                ^^^
 1453 |   }): Promise<string> {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1491:50]
 1490 |    */
 1491 |   async getBiasReport(reportId: string): Promise<any | null> {
      :                                                  ^^^
 1492 |     const { data, error } = await supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1546:14]
 1545 |     },
 1546 |   ): Promise<any[]> {
      :              ^^^
 1547 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1660:33]
 1659 |     const dailyTrends = Object.values(
 1660 |       summaryData?.reduce((acc: any, row) => {
      :                                 ^^^
 1661 |         const date = row.analysis_date.split('T')[0]
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1670:18]
 1669 |       }, {}) || {},
 1670 |     ).map((item: any) => ({
      :                  ^^^
 1671 |       date: item.date,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Variable 'inputType' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/mobile/mobile-responsiveness.spec.ts:176:15]
 175 |         // Check mobile-optimized input attributes
 176 |         const inputType = await textArea.getAttribute('type')
     :               ^^^^|^^^^
     :                   `-- 'inputType' is declared here
 177 |         const autocomplete = await textArea.getAttribute('autocomplete')
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Variable 'autocomplete' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/mobile/mobile-responsiveness.spec.ts:177:15]
 176 |         const inputType = await textArea.getAttribute('type')
 177 |         const autocomplete = await textArea.getAttribute('autocomplete')
     :               ^^^^^^|^^^^^
     :                     `-- 'autocomplete' is declared here
 178 |         const spellcheck = await textArea.getAttribute('spellcheck')
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Variable 'ariaDescribedby' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/accessibility/accessibility-audit.spec.ts:213:19]
 212 |             const ariaLabelledby = await element.getAttribute('aria-labelledby')
 213 |             const ariaDescribedby =
     :                   ^^^^^^^|^^^^^^^
     :                          `-- 'ariaDescribedby' is declared here
 214 |               await element.getAttribute('aria-describedby')
     `----
  help: Consider removing this declaration.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'fetchCacheStats'
    ,-[src/components/ai/PerformanceDashboardReact.tsx:56:6]
 55 |     }
 56 |   }, [refreshInterval])
    :      ^^^^^^^^^^^^^^^^^
 57 | 
    `----
  help: Either include it or remove the dependency array.

  x Unexpected token
     ,-[tests/ai/crisis-detection.test.ts:226:5]
 225 |       expect(mockAIService.createChatCompletion).toHaveBeenCalledTimes(1)
 226 |     })
     :     ^
 227 |   })
     `----

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/ai/RecommendationDisplay.tsx:20:9]
 19 |           {recommendations.map((rec) => (
 20 | ,->         <div
 21 | |             key={rec.id}
 22 | |             className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer group"
 23 | |             tabIndex={0}
 24 | |             aria-label={`Recommendation: ${rec.title}`}
 25 | |             onClick={() => onSelect?.(rec)}
 26 | `->         >
 27 |               <div className="flex items-center justify-between mb-2">
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/ai/RecommendationDisplay.tsx:70:23]
 69 |                 {rec.supportingPatterns.map((pattern, idx) => (
 70 |                   <li key={idx}>
    :                       ^^^^^^^^^
 71 |                     {'type' in pattern ? pattern.type : pattern.riskFactor}
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/simulator/utils/privacy.ts:189:43]
 188 |   // Check for Web Audio API (for audio processing)
 189 |   if (!window.AudioContext && !(window as any)['webkitAudioContext']) {
     :                                           ^^^
 190 |     missingFeatures.push('Web Audio API')
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:595:18]
 594 |   approach: string,
 595 |   knowledgeBase: any,
     :                  ^^^
 596 | ): string {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:609:42]
 608 | 
 609 | function generateClientResponse(profile: any): string {
     :                                          ^^^
 610 |   const responses = {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:640:12]
 639 | function generateClientProcessingResponse(
 640 |   profile: any,
     :            ^^^
 641 |   approach: string,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:672:49]
 671 | 
 672 | function calculateConversationQuality(dialogue: any[], request: any) {
     :                                                 ^^^
 673 |   // Simulate quality calculation based on knowledge integration
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:672:65]
 671 | 
 672 | function calculateConversationQuality(dialogue: any[], request: any) {
     :                                                                 ^^^
 673 |   // Simulate quality calculation based on knowledge integration
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:702:43]
 701 | 
 702 | function mapKnowledgeToDialogue(dialogue: any[], request: any) {
     :                                           ^^^
 703 |   return dialogue.map((turn, index) => ({
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/api/psychology-pipeline-demo.ts:702:59]
 701 | 
 702 | function mapKnowledgeToDialogue(dialogue: any[], request: any) {
     :                                                           ^^^
 703 |   return dialogue.map((turn, index) => ({
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'knowledgeBase' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/api/psychology-pipeline-demo.ts:595:3]
 594 |   approach: string,
 595 |   knowledgeBase: any,
     :   ^^^^^^|^^^^^^
     :         `-- 'knowledgeBase' is declared here
 596 | ): string {
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'guidelines' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/api/psychology-pipeline-demo.ts:657:3]
 656 |   approach: string,
 657 |   guidelines: string[],
     :   ^^^^^|^^^^
     :        `-- 'guidelines' is declared here
 658 |   severity: string,
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'severity' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/api/psychology-pipeline-demo.ts:658:3]
 657 |   guidelines: string[],
 658 |   severity: string,
     :   ^^^^|^^^
     :       `-- 'severity' is declared here
 659 | ): string {
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'request' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/api/psychology-pipeline-demo.ts:702:50]
 701 | 
 702 | function mapKnowledgeToDialogue(dialogue: any[], request: any) {
     :                                                  ^^^|^^^
     :                                                     `-- 'request' is declared here
 703 |   return dialogue.map((turn, index) => ({
     `----
  help: Consider removing this parameter.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'mockResponseTimeData', and 'mockTokenUsageData'
     ,-[src/components/ai/PerformanceDashboard.tsx:115:6]
 114 |     return () => clearInterval(intervalId)
 115 |   }, [aiService, refreshInterval])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 116 | 
     `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/db/KVStore.ts:8:30]
 7 |   private storagePrefix: string
 8 |   private cache: Map<string, any> = new Map()
   :                              ^^^
 9 |   private useLocalStorage: boolean
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-endpoint-scanner.ts:36:13]
 35 |   name: string
 36 |   payload?: any
    :             ^^^
 37 |   headers?: Record<string, string>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/dashboard/SimulatorDashboardReact.tsx:154:72]
 153 |             You can track your progress through anonymized metrics that are only
 154 |             stored in your browser. View your progress by clicking the "Progress
     :                                                                        ^
 155 |             Metrics" button above.
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/dashboard/SimulatorDashboardReact.tsx:155:20]
 154 |             stored in your browser. View your progress by clicking the "Progress
 155 |             Metrics" button above.
     :                    ^
 156 |           </div>
     `----

  x eslint-plugin-jsx-a11y(prefer-tag-over-role): Prefer `button` over `role` attribute `button`.
    ,-[src/simulator/components/RealTimePrompts.tsx:92:13]
 91 |             tabIndex={0}
 92 |             role="button"
    :             ^^^^^^^^^^^^^
 93 |             aria-pressed={selectedPrompt === index}
    `----
  help: Replace HTML elements with `role` attribute `button` to corresponding semantic HTML tag `button`.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/ai/chat/ChatContainer.tsx:51:28]
 50 |             {messages.map((message, index) => (
 51 |               <ChatMessage key={index} message={message} />
    :                            ^^^^^^^^^^^
 52 |             ))}
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-web-vulnerability-scanner.ts:51:10]
 50 |   headers: Record<string, string>
 51 |   data?: any
    :          ^^^
 52 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Catch parameter 'error' is caught but never used. Unused caught errors should start with a '_'.
     ,-[tests/security/ai-web-vulnerability-scanner.ts:514:16]
 513 |         }
 514 |       } catch (error) {
     :                ^^|^^
     :                  `-- 'error' is declared here
 515 |         // Ignore test errors
     `----
  help: Consider handling this error.

  ! eslint-plugin-react(no-unknown-property): Unknown property found
    ,-[src/simulator/components/SimulationControls.tsx:71:14]
 70 | 
 71 |       <style jsx>{`
    :              ^^^
 72 |         .simulation-controls {
    `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/simulator/components/FeedbackPanel.tsx:138:17]
 137 |               <div className="text-xs text-gray-500 italic mb-1">
 138 |                 "{feedback.context}"
     :                 ^
 139 |               </div>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/simulator/components/FeedbackPanel.tsx:138:36]
 137 |               <div className="text-xs text-gray-500 italic mb-1">
 138 |                 "{feedback.context}"
     :                                    ^
 139 |               </div>
     `----

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has an unnecessary dependency: formRef.
    ,-[src/components/ui/MobileFormValidation.tsx:97:7]
 96 |     }
 97 |   }, [formRef.current, validationRules, isMobile])
    :       ^^^^^^^^^^^^^^^
 98 | 
    `----
  help: Consider removing it from the dependency array. Outer scope values aren't valid dependencies because mutating them doesn't re-render the component.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'handleBlur', and 'handleChange'
    ,-[src/components/ui/MobileFormValidation.tsx:97:6]
 96 |     }
 97 |   }, [formRef.current, validationRules, isMobile])
    :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 98 | 
    `----
  help: Either include it or remove the dependency array.

  x eslint-plugin-jsx-a11y(role-supports-aria-props): The attribute aria-invalid is not supported by the role radio. This role is implicit on the element input.
    ,-[src/components/ui/Radio.tsx:84:13]
 83 |             required={isRequired}
 84 |             aria-invalid={error ? 'true' : 'false'}
    :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 85 |             aria-describedby={
    `----
  help: Try to remove invalid attribute aria-invalid.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'handleSignalingMessage', 'setupMediaStream', 'createAndSendOffer', and 'initializePeerConnection'
     ,-[src/simulator/components/VideoDisplay.tsx:265:6]
 264 |     }
 265 |   }, [isConnected, connectionStatus, sessionId])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 266 | 
     `----
  help: Either include it or remove the dependency array.

  x eslint-plugin-jsx-a11y(media-has-caption): Missing <track> element with captions inside <audio> or <video> element
     ,-[src/simulator/components/VideoDisplay.tsx:295:7]
 294 |           {/* Remote video (patient/client feed) */}
 295 | ,->       <video
 296 | |           ref={remoteVideoRef}
 297 | |           className={`absolute inset-0 w-full h-full object-cover ${
 298 | |             isConnected && !hasPermissionError ? 'opacity-100' : 'opacity-0'
 299 | |           }`}
 300 | |           autoPlay
 301 | |           playsInline
 302 | `->       />
 303 |     
     `----
  help: Media elements such as <audio> and <video> must have a <track> for captions.

  x eslint-plugin-jsx-a11y(media-has-caption): Missing <track> element with captions inside <audio> or <video> element
     ,-[src/simulator/components/VideoDisplay.tsx:295:7]
 294 |           {/* Remote video (patient/client feed) */}
 295 | ,->       <video
 296 | |           ref={remoteVideoRef}
 297 | |           className={`absolute inset-0 w-full h-full object-cover ${
 298 | |             isConnected && !hasPermissionError ? 'opacity-100' : 'opacity-0'
 299 | |           }`}
 300 | |           autoPlay
 301 | |           playsInline
 302 | `->       />
 303 |     
     `----
  help: Media elements such as <audio> and <video> must have a <track> for captions.

  x eslint-plugin-jsx-a11y(role-supports-aria-props): The attribute aria-expanded is not supported by the role textbox. This role is implicit on the element input.
     ,-[src/components/ui/SearchBox.tsx:154:11]
 153 |           className={`w-full py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 ${className}`}
 154 |           aria-expanded={isOpen}
     :           ^^^^^^^^^^^^^^^^^^^^^^
 155 |           aria-controls="search-results"
     `----
  help: Try to remove invalid attribute aria-expanded.

  ! eslint-plugin-react(no-unescaped-entities): `'` can be escaped with &apos; or &lsquo; or &#39; or &rsquo;
    ,-[src/components/ui/OfflineIndicator.tsx:79:16]
 78 |           <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
 79 |             You're Offline
    :                ^
 80 |           </h3>
    `----

  x eslint-plugin-jsx-a11y(prefer-tag-over-role): Prefer `button` over `role` attribute `button`.
     ,-[src/simulator/components/RealTimeFeedbackPanel.tsx:333:21]
 332 |                     tabIndex={0}
 333 |                     role="button"
     :                     ^^^^^^^^^^^^^
 334 |                     aria-expanded={
     `----
  help: Replace HTML elements with `role` attribute `button` to corresponding semantic HTML tag `button`.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/audit-types.ts:5:28]
 4 |   timestamp: Date
 5 |   details?: Record<string, any>
   :                            ^^^
 6 | }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[tests/security/run-security-tests.ts:106:56]
 105 |  */
 106 | async function runTestSuite(suite: TestSuite): Promise<any> {
     :                                                        ^^^
 107 |   return new Promise((resolve, reject) => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[tests/security/run-security-tests.ts:162:34]
 161 |  */
 162 | function generateReport(results: any[]): string {
     :                                  ^^^
 163 |   return `
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/mental-llama/evidence/types.ts:32:28]
 31 |    */
 32 |   context?: Record<string, any>
    :                            ^^^
 33 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:237:23]
 236 |                     <Badge
 237 |                       key={index}
     :                       ^^^^^^^^^^^
 238 |                       variant={
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:358:31]
 357 |                             <div
 358 |                               key={index}
     :                               ^^^^^^^^^^^
 359 |                               className="rounded-lg border p-4 space-y-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:388:55]
 387 |                                     (manifestation, mIndex) => (
 388 |                                       <React.Fragment key={mIndex}>
     :                                                       ^^^^^^^^^^^^
 389 |                                         <Badge variant="secondary">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:403:53]
 402 |                                   {symptom.cognitions.map((cognition, cIndex) => (
 403 |                                     <React.Fragment key={cIndex}>
     :                                                     ^^^^^^^^^^^^
 404 |                                       <Badge variant="outline">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:437:51]
 436 |                                 return (
 437 |                                   <React.Fragment key={index}>
     :                                                   ^^^^^^^^^^^
 438 |                                     <Badge
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:462:49]
 461 |                               .map((symptom, index) => (
 462 |                                 <React.Fragment key={index}>
     :                                                 ^^^^^^^^^^^
 463 |                                   <Badge variant="default">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:484:49]
 483 |                               .map((symptom, index) => (
 484 |                                 <React.Fragment key={index}>
     :                                                 ^^^^^^^^^^^
 485 |                                   <Badge variant="outline">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:506:49]
 505 |                               .map((symptom, index) => (
 506 |                                 <React.Fragment key={index}>
     :                                                 ^^^^^^^^^^^
 507 |                                   <Badge variant="secondary">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/setup-storage.js:50:25]
 49 |       // Create the bucket
 50 |       const { error } = await supabase.storage.createBucket(bucket.name, {
    :                         ^^^^^
 51 |         public: bucket.public,
    `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/setup-storage.js:62:42]
 61 |         if (bucket.public) {
 62 |           const { error: policyError } = await supabase.rpc(
    :                                          ^^^^^
 63 |             'create_storage_policy',
    `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/feedback/SupervisorFeedback.tsx:350:27]
 349 |                         <Badge
 350 |                           key={idx}
     :                           ^^^^^^^^^
 351 |                           variant={
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/feedback/SupervisorFeedback.tsx:379:33]
 378 |                               <li
 379 |                                 key={idx}
     :                                 ^^^^^^^^^
 380 |                                 className="text-sm text-gray-700 pl-2 border-l-2 border-green-300"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/feedback/SupervisorFeedback.tsx:405:28]
 404 |                     {missedOpportunities.map((opportunity, idx) => (
 405 |                       <div key={idx} className="bg-blue-50 p-3 rounded-md">
     :                            ^^^^^^^^^
 406 |                         <div className="font-medium flex justify-between">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/feedback/SupervisorFeedback.tsx:449:27]
 448 |                         <li
 449 |                           key={idx}
     :                           ^^^^^^^^^
 450 |                           className="text-sm flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/feedback/SupervisorFeedback.tsx:466:27]
 465 |                         <li
 466 |                           key={idx}
     :                           ^^^^^^^^^
 467 |                           className="text-sm flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'identifyMissedOpportunities', 'analyzeTechniques', and 'generateFeedbackSummary'
    ,-[src/components/feedback/SupervisorFeedback.tsx:83:6]
 82 |     }
 83 |   }, [therapistResponses, sessionTranscript])
    :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 84 | 
    `----
  help: Either include it or remove the dependency array.

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[supabase/optimize-db.js:172:27]
 171 |         // Execute the query using SQL query builder
 172 |         const { error } = await supabase.rpc('exec_sql', { sql_query: query })
     :                           ^^^^^
 173 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/migrate.js:53:25]
 52 |       // Execute the SQL against the database
 53 |       const { error } = await supabase.rpc('exec_sql', { sql_query: sql })
    :                         ^^^^^
 54 | 
    `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/migrate.js:88:25]
 87 |       // Create the bucket
 88 |       const { error } = await supabase.storage.createBucket(bucket.name, {
    :                         ^^^^^
 89 |         public: bucket.public,
    `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[supabase/migrate.js:143:25]
 142 | 
 143 |       const { error } = await supabase.rpc('exec_sql', { sql_query: query })
     :                         ^^^^^
 144 | 
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/logging/index.ts:373:5]
 372 |   // Use a function-scoped static variable to avoid TDZ/circular import issues
 373 |   // @ts-expect-error
     :     ^^^^^^^^^^^^^^^^^
 374 |   if (!getLogger._instance || options) {
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/logging/index.ts:375:7]
 374 |   if (!getLogger._instance || options) {
 375 |     // @ts-expect-error
     :       ^^^^^^^^^^^^^^^^^
 376 |     getLogger._instance = new Logger(options || {})
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/logging/index.ts:378:5]
 377 |   }
 378 |   // @ts-expect-error
     :     ^^^^^^^^^^^^^^^^^
 379 |   return getLogger._instance
     `----

  x typescript-eslint(ban-ts-comment): Include a description after the @ts-expect-error directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
     ,-[src/lib/logging/index.ts:401:5]
 400 |   // Use the function-scoped singleton pattern
 401 |   // @ts-expect-error
     :     ^^^^^^^^^^^^^^^^^
 402 |   getLogger._instance = new Logger(options)
     `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/ui/slider.tsx:22:9]
 21 |       <SliderPrimitive.Thumb
 22 |         key={i}
    :         ^^^^^^^
 23 |         className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/ui/MobileDrawer.tsx:35:7]
 34 |           {/* Backdrop */}
 35 | ,->       <div
 36 | |           className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
 37 | |           onClick={onClose}
 38 | `->       />
 39 |     
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/ChartWidget.tsx:108:23]
 107 |             ctx,
 108 |             config as any,
     :                       ^^^
 109 |           ) as ChartInstance
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/services/redis/types.ts:114:16]
 113 |     withScores?: string,
 114 |   ) => Promise<any[]>
     :                ^^^
 115 |   /** Pop minimum scoring member from sorted set */
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/services/redis/types.ts:116:37]
 115 |   /** Pop minimum scoring member from sorted set */
 116 |   zpopmin: (key: string) => Promise<any[]>
     :                                     ^^^
 117 |   /** Get sorted set cardinality */
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/TableWidget.tsx:19:20]
 18 |   label: string
 19 |   render?: (value: any, row: any) => React.ReactNode
    :                    ^^^
 20 |   sortable?: boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/TableWidget.tsx:19:30]
 18 |   label: string
 19 |   render?: (value: any, row: any) => React.ReactNode
    :                              ^^^
 20 |   sortable?: boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/TableWidget.tsx:28:24]
 27 |   columns: Column[]
 28 |   data: Record<string, any>[]
    :                        ^^^
 29 |   isLoading?: boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/TableWidget.tsx:34:44]
 33 |   enableExport?: boolean
 34 |   fetchData?: () => Promise<Record<string, any>[]>
    :                                            ^^^
 35 |   pagination?: {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/TableWidget.tsx:54:51]
 53 | }: TableWidgetProps) {
 54 |   const [data, setData] = useState<Record<string, any>[]>(initialData)
    :                                                   ^^^
 55 |   const [isLoading, setIsLoading] = useState(initialLoading)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/analytics/TableWidget.tsx:283:27]
 282 |               paginatedData.map((row, rowIndex) => (
 283 |                 <TableRow key={rowIndex}>
     :                           ^^^^^^^^^^^^^^
 284 |                   {columns.map((column) => (
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
     ,-[src/lib/ai/bias-detection/errors.ts:567:14]
 566 |  */
 567 | export class BiasErrorHandler {
     :              ^^^^^^^^^^^^^^^^
 568 |   /**
     `----
  help: Try using standalone functions instead of static methods

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/ui/table.tsx:149:5]
 148 |       return (
 149 | ,->     <th
 150 | |         className={cn(
 151 | |           'h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400',
 152 | |           'border-b border-gray-200 dark:border-gray-700',
 153 | |           { 'cursor-pointer select-none': sortable },
 154 | |           className,
 155 | |         )}
 156 | |         onClick={sortable ? onSort : undefined}
 157 | |         {...props}
 158 | `->     >
 159 |           {sortable ? (
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[scripts/download-fonts.mjs:100:7]
  99 |     for (const font of fonts) {
 100 |       await downloadFont(font)
     :       ^^^^^
 101 |     }
     `----

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'analytics'
    ,-[src/components/analytics/PrivacyDashboard.tsx:39:6]
 38 |     setLastSync(new Date())
 39 |   }, [])
    :      ^^
 40 | 
    `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[scripts/validate-typescript.ts:18:36]
 17 | interface TSConfig {
 18 |   compilerOptions?: Record<string, any>
    :                                    ^^^
 19 |   include?: string[]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Catch parameter 'error' is caught but never used. Unused caught errors should start with a '_'.
     ,-[scripts/validate-typescript.ts:288:12]
 287 |     })
 288 |   } catch (error) {
     :            ^^|^^
     :              `-- 'error' is declared here
 289 |     results.push({
     `----
  help: Consider handling this error.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/AdvancedFilteringComponent.tsx:63:29]
 62 |   // Additional metadata filters
 63 |   metadata?: Record<string, any>
    :                             ^^^
 64 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:115:12]
 114 |     key: string,
 115 |     value: any,
     :            ^^^
 116 |   ) => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:120:35]
 119 |       [category]: {
 120 |         ...((options[category] as any) || {}),
     :                                   ^^^
 121 |         [key]: value,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:131:12]
 130 |     key: string,
 131 |     value: any,
     :            ^^^
 132 |   ) => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:136:35]
 135 |       [category]: {
 136 |         ...((options[category] as any) || {}),
     :                                   ^^^
 137 |         [parentKey]: {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:138:37]
 137 |         [parentKey]: {
 138 |           ...((options[category] as any)?.[parentKey] || {}),
     :                                     ^^^
 139 |           [key]: value,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/analytics/AdvancedFilteringComponent.tsx:151:49]
 150 |   ) => {
 151 |     const currentArray = ((options[category] as any)?.[key] as string[]) || []
     :                                                 ^^^
 152 |     const newArray = currentArray.includes(value)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'context' is declared but never used. Unused parameters should start with a '_'.
    ,-[tests/e2e/user-acceptance.spec.ts:21:5]
 20 |     page,
 21 |     context,
    :     ^^^|^^^
    :        `-- 'context' is declared here
 22 |   }) => {
    `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[scripts/load-test.ts:279:36]
 278 | 
 279 |   private async saveReport(report: any): Promise<void> {
     :                                    ^^^
 280 |     const reportDir = './reports'
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a dependency array that changes every render.
     ,-[src/components/admin/dlp/DLPRuleEditor.tsx:109:6]
 108 |     }
 109 |   }, [defaultRule])
     :      ^^^^^^^^^^^^^
 110 | 
     `----
  help: Try memoizing this variable with `useRef` or `useCallback`.

  x Identifier `RemarkPlugins` has already been declared
   ,-[plugins/index.ts:4:6]
 3 | type RehypePlugin = unknown
 4 | type RemarkPlugins = Array<RemarkPlugin | [RemarkPlugin, unknown]>
   :      ^^^^^^|^^^^^^
   :            `-- `RemarkPlugins` has already been declared here
 5 | type RehypePlugins = Array<RehypePlugin | [RehypePlugin, unknown]>
   `----
    ,-[plugins/index.ts:25:6]
 24 | 
 25 | type RemarkPlugins = unknown[]
    :      ^^^^^^|^^^^^^
    :            `-- It can not be redeclared here
 26 | type RehypePlugins = unknown[]
    `----

  x Identifier `RehypePlugins` has already been declared
   ,-[plugins/index.ts:5:6]
 4 | type RemarkPlugins = Array<RemarkPlugin | [RemarkPlugin, unknown]>
 5 | type RehypePlugins = Array<RehypePlugin | [RehypePlugin, unknown]>
   :      ^^^^^^|^^^^^^
   :            `-- `RehypePlugins` has already been declared here
 6 | import type { CreateProperties } from 'rehype-external-links'
   `----
    ,-[plugins/index.ts:26:6]
 25 | type RemarkPlugins = unknown[]
 26 | type RehypePlugins = unknown[]
    :      ^^^^^^|^^^^^^
    :            `-- It can not be redeclared here
 27 | 
    `----

  ! eslint(no-extend-native): Element prototype is read-only, properties should not be added.
    ,-[tests/e2e/user-experience.spec.ts:30:7]
 29 |     
 30 | ,->       Element.prototype.appendChild = function (...args) {
 31 | |           const result = originalAppendChild.apply(this, args)
 32 | |   
 33 | |           if (
 34 | |             args[0]?.classList?.contains('astro-transition') ||
 35 | |             args[0]?.hasAttribute?.('transition:animate')
 36 | |           ) {
 37 | |             window._hasTransition = true
 38 | |           }
 39 | |   
 40 | |           return result
 41 | `->       }
 42 |         })
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/metaaligner/prioritization/support-context-identifier.ts:318:30]
 317 |       conversationHistory?: string[]
 318 |       userEmotionalProfile?: any
     :                              ^^^
 319 |     }>,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/metaaligner/prioritization/support-context-identifier.ts:560:28]
 559 |     conversationHistory?: string[],
 560 |     userEmotionalProfile?: any,
     :                            ^^^
 561 |   ): Promise<SupportContextResult> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/metaaligner/prioritization/support-context-identifier.ts:625:24]
 624 |           ? parsed.supportNeeds
 625 |               .map((n: any) => this.validateSupportNeed(n))
     :                        ^^^
 626 |               .filter(Boolean)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/AIChatReact.tsx:105:15]
 104 |             <div
 105 |               key={index}
     :               ^^^^^^^^^^^
 106 |               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/models/patient.ts:11:29]
 10 |   sessionId?: string // Optional: to group messages by session
 11 |   metadata?: Record<string, any> // Optional: for additional context like emotional tone, detected themes, etc.
    :                             ^^^
 12 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Variable 'initialRatio' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/e2e/demo-workflow.spec.ts:239:13]
 238 |       // Monitor real-time updates
 239 |       const initialRatio = await page
     :             ^^^^^^|^^^^^
     :                   `-- 'initialRatio' is declared here
 240 |         .locator('[data-testid="anxiety-ratio"]')
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Variable 'updatedRatio' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/e2e/demo-workflow.spec.ts:250:13]
 249 |       // Verify ratios have updated
 250 |       const updatedRatio = await page
     :             ^^^^^^|^^^^^
     :                   `-- 'updatedRatio' is declared here
 251 |         .locator('[data-testid="anxiety-ratio"]')
     `----
  help: Consider removing this declaration.

  ! eslint-plugin-react(no-unescaped-entities): `'` can be escaped with &apos; or &lsquo; or &#39; or &rsquo;
    ,-[src/components/admin/backup/BackupScheduleTab.tsx:68:75]
 67 |         <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
 68 |           Configure when automatic backups are performed and how long they're
    :                                                                           ^
 69 |           retained.
    `----

  ! eslint-plugin-react(no-unescaped-entities): `'` can be escaped with &apos; or &lsquo; or &#39; or &rsquo;
     ,-[src/components/admin/backup/BackupScheduleTab.tsx:179:65]
 178 |               <p className="text-gray-500 dark:text-gray-400">
 179 |                 Run a recovery test for each backup to verify it's valid and can
     :                                                                 ^
 180 |                 be restored
     `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/ui/steps.tsx:14:11]
 13 |         <div
 14 |           key={index}
    :           ^^^^^^^^^^^
 15 |           className="step-item mb-6 pl-8 border-l-2 border-gray-200 relative"
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/models/registry.ts:863:52]
 862 |         requirements.capabilities!.every((cap) =>
 863 |           model.legacyCapabilities.includes(cap as any),
     :                                                    ^^^
 864 |         ),
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/models/registry.ts:1093:36]
 1092 |     name: extended.name,
 1093 |     provider: extended.provider as any,
      :                                    ^^^
 1094 |     version: extended.version,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
     ,-[src/lib/ai/models/registry.ts:807:28]
 806 |       try {
 807 |         const { config } = require('@/config/env.config')
     :                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 808 |         return config
     `----
  help: Do not use CommonJS `require` calls

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/transitions/AnimationOrchestrator.tsx:106:42]
 105 |           transition: {
 106 |             ...((baseVariants.animate as any).transition || {}),
     :                                          ^^^
 107 |             staggerChildren: staggerDelay,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/transitions/AnimationOrchestrator.tsx:144:35]
 143 | 
 144 |   const Component = motion[as] as any
     :                                   ^^^
 145 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'orchestrationType' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/transitions/AnimationOrchestrator.tsx:61:3]
 60 |   sequence = 'fadeIn',
 61 |   orchestrationType = 'page',
    :   ^^^^^^^^|^^^^^^^^
    :           `-- 'orchestrationType' is declared here
 62 |   triggerOnMount = true,
    `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'viewport' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/transitions/AnimationOrchestrator.tsx:73:3]
 72 |   as = 'div',
 73 |   viewport = true,
    :   ^^^^|^^^
    :       `-- 'viewport' is declared here
 74 |   once = true,
    `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/analytics/ConversionDashboard.tsx:28:18]
 27 |   source?: string
 28 |   [key: string]: any
    :                  ^^^
 29 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/analytics/ConversionDashboard.tsx:423:37]
 422 |                                   <div
 423 |                                     key={i}
     :                                     ^^^^^^^
 424 |                                     className="bg-primary rounded-sm w-full"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/analytics/ConversionDashboard.tsx:647:33]
 646 |                               <tr
 647 |                                 key={index}
     :                                 ^^^^^^^^^^^
 648 |                                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'loadConversionData'
    ,-[src/components/analytics/ConversionDashboard.tsx:45:6]
 44 |     loadConversionData()
 45 |   }, [period, filter])
    :      ^^^^^^^^^^^^^^^^
 46 | 
    `----
  help: Either include it or remove the dependency array.

  ! eslint(no-unused-vars): Parameter 'title' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/admin/AdminLayoutAdapter.tsx:22:3]
 21 | const AdminLayoutAdapter: React.FC<AdminLayoutAdapterProps> = ({
 22 |   title,
    :   ^^|^^
    :     `-- 'title' is declared here
 23 |   description,
    `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'description' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/admin/AdminLayoutAdapter.tsx:23:3]
 22 |   title,
 23 |   description,
    :   ^^^^^|^^^^^
    :        `-- 'description' is declared here
 24 |   activeItem,
    `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'activeItem' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/admin/AdminLayoutAdapter.tsx:24:3]
 23 |   description,
 24 |   activeItem,
    :   ^^^^^|^^^^
    :        `-- 'activeItem' is declared here
 25 |   children,
    `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Catch parameter 'error' is caught but never used. Unused caught errors should start with a '_'.
     ,-[src/lib/crypto/index.ts:626:18]
 625 |           }
 626 |         } catch (error) {
     :                  ^^|^^
     :                    `-- 'error' is declared here
 627 |           // Try next key
     `----
  help: Consider handling this error.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ehr/plugins/api.ts:15:41]
 14 |     events: {
 15 |       on(event: string, handler: (data: any) => void): void {
    :                                         ^^^
 16 |         events.on(event, handler)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ehr/plugins/api.ts:18:42]
 17 |       },
 18 |       off(event: string, handler: (data: any) => void): void {
    :                                          ^^^
 19 |         events.off(event, handler)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ehr/plugins/api.ts:21:33]
 20 |       },
 21 |       emit(event: string, data: any): void {
    :                                 ^^^
 22 |         events.emit(event, data)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ehr/plugins/registry.ts:99:41]
  98 | 
  99 |   on(event: string, listener: (...args: any[]) => void): void {
     :                                         ^^^
 100 |     this.events.on(event, listener)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ehr/plugins/registry.ts:103:42]
 102 | 
 103 |   off(event: string, listener: (...args: any[]) => void): void {
     :                                          ^^^
 104 |     this.events.off(event, listener)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/notification/NotificationPreferences.tsx:128:64]
 127 |             value={preferences.frequency}
 128 |             onValueChange={(value) => updateFrequency(value as any)}
     :                                                                ^^^
 129 |           >
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/ai/services/ContextualAwarenessService.ts:7:12]
 6 | export interface ContextCollectionInput {
 7 |   session: any
   :            ^^^
 8 |   chatSession: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/ai/services/ContextualAwarenessService.ts:8:16]
 7 |   session: any
 8 |   chatSession: any
   :                ^^^
 9 |   recentEmotionState: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/services/ContextualAwarenessService.ts:9:23]
  8 |   chatSession: any
  9 |   recentEmotionState: any
    :                       ^^^
 10 |   recentInterventions: string[]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/services/ContextualAwarenessService.ts:12:26]
 11 |   userPreferences?: Record<string, unknown>
 12 |   mentalHealthAnalysis?: any
    :                          ^^^
 13 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/ai/services/ContextualAwarenessService.ts:15:14]
 14 | 
 15 | export class ContextualAwarenessService {
    :              ^^^^^^^^^^^^^^^^^^^^^^^^^^
 16 |   static collectContext(input: ContextCollectionInput): RecommendationContext {
    `----
  help: Try using standalone functions instead of static methods

  ! eslint(no-useless-concat): Unexpected string concatenation of literals.
     ,-[src/tests/crypto.test.ts:310:5]
 309 |   return (
 310 |     `test-${id}-` + `mock-key-${new Date().getTime().toString().substring(5)}`
     :     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 311 |   )
     `----
  help: Rewrite into one string literal

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/tests/crypto.test.ts:47:7]
 46 | // Mock implementations for testing
 47 | class Encryption {
    :       ^^^^^^^^^^
 48 |   static encrypt(data: string, key: string, version = 1): string {
    `----
  help: Try using standalone functions instead of static methods

  ! eslint(no-unused-vars): Parameter 'context' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/lib/ai/bias-detection/serverless-handlers.ts:12:29]
 11 | export function createServerlessHandler(handler: (req: any) => Promise<any>) {
 12 |   return async (event: any, context: any) => {
    :                             ^^^|^^^
    :                                `-- 'context' is declared here
 13 |     try {
    `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/session/SessionAnalysis.tsx:50:29]
 49 |         const formattedData = Array.isArray(data)
 50 |           ? data.map((item: any) => {
    :                             ^^^
 51 |               const baseData = {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-unescaped-entities): `'` can be escaped with &apos; or &lsquo; or &#39; or &rsquo;
     ,-[src/components/session/SessionAnalysis.tsx:126:40]
 125 |           <p className="mt-4 text-sm text-gray-500">
 126 |             This chart shows the client's emotional dimensions throughout the
     :                                        ^
 127 |             session, helping identify patterns and significant shifts.
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:153:20]
 152 |       const link = navLinks.nth(i)
 153 |       const href = await link.getAttribute('href')
     :                    ^^^^^
 154 |       expect(href).toBeTruthy()
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:184:7]
 183 |     for (const viewport of breakpoints) {
 184 |       await page.setViewportSize(viewport)
     :       ^^^^^
 185 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:188:7]
 187 |       const main = page.locator('main')
 188 |       await expect(main).toBeVisible()
     :       ^^^^^
 189 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:191:25]
 190 |       // Check that there's no horizontal overflow
 191 |       const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
     :                         ^^^^^
 192 |       const viewportWidth = viewport.width
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:198:7]
 197 |       const footer = page.locator('footer')
 198 |       await expect(header).toBeVisible()
     :       ^^^^^
 199 |       await expect(footer).toBeVisible()
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:199:7]
 198 |       await expect(header).toBeVisible()
 199 |       await expect(footer).toBeVisible()
     :       ^^^^^
 200 |     }
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:211:9]
 210 |         const button = ctaButtons.nth(i)
 211 |         await expect(button).toBeVisible()
     :         ^^^^^
 212 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:214:9]
 213 |         // Check button has proper styling and is clickable
 214 |         await expect(button).toHaveAttribute('href')
     :         ^^^^^
 215 |       }
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/tests/responsive-navigation.test.js:225:9]
 224 |         const link = footerLinks.nth(i)
 225 |         await expect(link).toBeVisible()
     :         ^^^^^
 226 |       }
     `----

  x Unexpected token
     ,-[src/tests/ai/crisis-detection.test.ts:193:9]
 192 |             ),
 193 |         { sensitivityLevel: 'high' }
     :         ^
 194 |                     {
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:11:20]
 10 | export class GoogleCloudStorageProvider implements StorageProvider {
 11 |   private storage: any
    :                    ^^^
 12 |   private bucket: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:12:19]
 11 |   private storage: any
 12 |   private bucket: any
    :                   ^^^
 13 |   private bucketName: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:32:49]
 31 |       this.storage = new Storage({
 32 |         credentials: this.config.credentials as any,
    :                                                 ^^^
 33 |         projectId: (this.config.credentials as any)?.project_id,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:33:48]
 32 |         credentials: this.config.credentials as any,
 33 |         projectId: (this.config.credentials as any)?.project_id,
    :                                                ^^^
 34 |         ...this.config.options,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:58:22]
 57 |     try {
 58 |       const options: any = {}
    :                      ^^^
 59 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:210:6]
 209 |   return (
 210 |     <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg">
     :      ^^^
 211 |       <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:211:8]
 210 |     <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg">
 211 |       <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
     :        ^^^
 212 |         <div className="flex justify-between items-center">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:212:10]
 211 |       <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
 212 |         <div className="flex justify-between items-center">
     :          ^^^
 213 |           <div>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:213:12]
 212 |         <div className="flex justify-between items-center">
 213 |           <div>
     :            ^^^
 214 |             <h3 className="text-lg font-semibold">Backup Storage Locations</h3>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:214:14]
 213 |           <div>
 214 |             <h3 className="text-lg font-semibold">Backup Storage Locations</h3>
     :              ^^
 215 |             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:215:14]
 214 |             <h3 className="text-lg font-semibold">Backup Storage Locations</h3>
 215 |             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
     :              ^
 216 |               Configure where backup data is stored. For redundancy, configure
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:220:12]
 219 |           </div>
 220 |           <button
     :            ^^^^^^
 221 |             type="button"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:231:8]
 230 | 
 231 |       <div className="overflow-x-auto">
     :        ^^^
 232 |         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:232:10]
 231 |       <div className="overflow-x-auto">
 232 |         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
     :          ^^^^^
 233 |           <thead className="bg-gray-50 dark:bg-gray-750">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:233:12]
 232 |         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
 233 |           <thead className="bg-gray-50 dark:bg-gray-750">
     :            ^^^^^
 234 |             <tr>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:234:14]
 233 |           <thead className="bg-gray-50 dark:bg-gray-750">
 234 |             <tr>
     :              ^^
 235 |               <th
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:235:16]
 234 |             <tr>
 235 |               <th
     :                ^^
 236 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:241:16]
 240 |               </th>
 241 |               <th
     :                ^^
 242 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:247:16]
 246 |               </th>
 247 |               <th
     :                ^^
 248 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:253:16]
 252 |               </th>
 253 |               <th
     :                ^^
 254 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:259:16]
 258 |               </th>
 259 |               <th
     :                ^^
 260 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:265:16]
 264 |               </th>
 265 |               <th
     :                ^^
 266 |                 scope="col"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:271:16]
 270 |               </th>
 271 |               <th scope="col" className="relative px-6 py-3">
     :                ^^
 272 |                 <span className="sr-only">Actions</span>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:272:18]
 271 |               <th scope="col" className="relative px-6 py-3">
 272 |                 <span className="sr-only">Actions</span>
     :                  ^^^^
 273 |               </th>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:276:12]
 275 |           </thead>
 276 |           <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
     :            ^^^^^
 277 |             {locations.map(function (location) {
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:279:18]
 278 |               return (
 279 |                 <tr key={location.id}>
     :                  ^^
 280 |                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:280:20]
 279 |                 <tr key={location.id}>
 280 |                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
     :                    ^^
 281 |                     {location.name}
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:283:20]
 282 |                   </td>
 283 |                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
     :                    ^^
 284 |                     {location.type === 'local' && 'Local Storage'}
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:289:20]
 288 |                   </td>
 289 |                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
     :                    ^^
 290 |                     {location.type === 'local' && location.path}
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:296:20]
 295 |                   </td>
 296 |                   <td className="px-6 py-4 whitespace-nowrap">
     :                    ^^
 297 |                     {location.status === 'active' && (
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:298:24]
 297 |                     {location.status === 'active' && (
 298 |                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
     :                        ^^^^
 299 |                         Active
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:303:24]
 302 |                     {location.status === 'error' && (
 303 |                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
     :                        ^^^^
 304 |                         Error
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:308:24]
 307 |                     {location.status === 'configuring' && (
 308 |                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
     :                        ^^^^
 309 |                         Configuring...
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:313:20]
 312 |                   </td>
 313 |                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
     :                    ^^
 314 |                     {location.isDefault ? (
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:315:24]
 314 |                     {location.isDefault ? (
 315 |                       <span className="text-primary-600 dark:text-primary-400 font-medium">
     :                        ^^^^
 316 |                         Default
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:319:24]
 318 |                     ) : (
 319 |                       <button
     :                        ^^^^^^
 320 |                         onClick={function () {
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:329:20]
 328 |                   </td>
 329 |                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
     :                    ^^
 330 |                     {location.lastSync
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:334:20]
 333 |                   </td>
 334 |                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
     :                    ^^
 335 |                     <div className="flex space-x-2 justify-end">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:335:22]
 334 |                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
 335 |                     <div className="flex space-x-2 justify-end">
     :                      ^^^
 336 |                       <button
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:336:24]
 335 |                     <div className="flex space-x-2 justify-end">
 336 |                       <button
     :                        ^^^^^^
 337 |                         onClick={function () {
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:346:26]
 345 |                       {!location.isDefault && (
 346 |                         <button
     :                          ^^^^^^
 347 |                           onClick={function () {
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:365:10]
 364 |       {isAddingLocation && (
 365 |         <div className="p-6 border-t border-gray-200 dark:border-gray-700">
     :          ^^^
 366 |           <h4 className="text-lg font-medium mb-4">Add New Storage Location</h4>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:366:12]
 365 |         <div className="p-6 border-t border-gray-200 dark:border-gray-700">
 366 |           <h4 className="text-lg font-medium mb-4">Add New Storage Location</h4>
     :            ^^
 367 |           <form onSubmit={handleSubmit} className="space-y-6">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:367:12]
 366 |           <h4 className="text-lg font-medium mb-4">Add New Storage Location</h4>
 367 |           <form onSubmit={handleSubmit} className="space-y-6">
     :            ^^^^
 368 |             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:368:14]
 367 |           <form onSubmit={handleSubmit} className="space-y-6">
 368 |             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
     :              ^^^
 369 |               <div className="sm:col-span-3">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:369:16]
 368 |             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
 369 |               <div className="sm:col-span-3">
     :                ^^^
 370 |                 <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:370:18]
 369 |               <div className="sm:col-span-3">
 370 |                 <label
     :                  ^^^^^
 371 |                   htmlFor="name"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:376:18]
 375 |                 </label>
 376 |                 <input
     :                  ^^^^^
 377 |                   type="text"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:387:16]
 386 | 
 387 |               <div className="sm:col-span-3">
     :                ^^^
 388 |                 <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:388:18]
 387 |               <div className="sm:col-span-3">
 388 |                 <label
     :                  ^^^^^
 389 |                   htmlFor="type"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:394:18]
 393 |                 </label>
 394 |                 <select
     :                  ^^^^^^
 395 |                   id="type"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:401:20]
 400 |                 >
 401 |                   <option value="local">Local Storage</option>
     :                    ^^^^^^
 402 |                   <option value="s3">AWS S3</option>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:402:20]
 401 |                   <option value="local">Local Storage</option>
 402 |                   <option value="s3">AWS S3</option>
     :                    ^^^^^^
 403 |                   <option value="azure">Azure Blob Storage</option>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:403:20]
 402 |                   <option value="s3">AWS S3</option>
 403 |                   <option value="azure">Azure Blob Storage</option>
     :                    ^^^^^^
 404 |                   <option value="gcp">Google Cloud Storage</option>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:404:20]
 403 |                   <option value="azure">Azure Blob Storage</option>
 404 |                   <option value="gcp">Google Cloud Storage</option>
     :                    ^^^^^^
 405 |                 </select>
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:409:18]
 408 |               {newLocation.type === 'local' && (
 409 |                 <div className="sm:col-span-6">
     :                  ^^^
 410 |                   <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:410:20]
 409 |                 <div className="sm:col-span-6">
 410 |                   <label
     :                    ^^^^^
 411 |                     htmlFor="path"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:416:20]
 415 |                   </label>
 416 |                   <input
     :                    ^^^^^
 417 |                     type="text"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:432:17]
 431 |                 newLocation.type === 'gcp') && (
 432 |                 <>
     :                 ^^
 433 |                   <div className="sm:col-span-4">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:433:20]
 432 |                 <>
 433 |                   <div className="sm:col-span-4">
     :                    ^^^
 434 |                     <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:434:22]
 433 |                   <div className="sm:col-span-4">
 434 |                     <label
     :                      ^^^^^
 435 |                       htmlFor="bucket"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:440:22]
 439 |                     </label>
 440 |                     <input
     :                      ^^^^^
 441 |                       type="text"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:452:22]
 451 |                   {newLocation.type === 's3' && (
 452 |                     <div className="sm:col-span-2">
     :                      ^^^
 453 |                       <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:453:24]
 452 |                     <div className="sm:col-span-2">
 453 |                       <label
     :                        ^^^^^
 454 |                         htmlFor="region"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:459:24]
 458 |                       </label>
 459 |                       <input
     :                        ^^^^^
 460 |                         type="text"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:473:16]
 472 | 
 473 |               <div className="sm:col-span-6">
     :                ^^^
 474 |                 <div className="flex items-start mt-3">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:474:18]
 473 |               <div className="sm:col-span-6">
 474 |                 <div className="flex items-start mt-3">
     :                  ^^^
 475 |                   <div className="flex items-center h-5">
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:475:20]
 474 |                 <div className="flex items-start mt-3">
 475 |                   <div className="flex items-center h-5">
     :                    ^^^
 476 |                     <input
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:476:22]
 475 |                   <div className="flex items-center h-5">
 476 |                     <input
     :                      ^^^^^
 477 |                       id="isDefault"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:485:20]
 484 |                   </div>
 485 |                   <div className="ml-3 text-sm">
     :                    ^^^
 486 |                     <label
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:486:22]
 485 |                   <div className="ml-3 text-sm">
 486 |                     <label
     :                      ^^^^^
 487 |                       htmlFor="isDefault"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:492:22]
 491 |                     </label>
 492 |                     <p className="text-gray-500 dark:text-gray-400">
     :                      ^
 493 |                       Default locations are used for all backups unless
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:501:14]
 500 | 
 501 |             <div className="flex justify-end space-x-3">
     :              ^^^
 502 |               <button
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:502:16]
 501 |             <div className="flex justify-end space-x-3">
 502 |               <button
     :                ^^^^^^
 503 |                 type="button"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:509:16]
 508 |               </button>
 509 |               <button
     :                ^^^^^^
 510 |                 type="submit"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:520:19]
 519 |                 {isFormLoading ? (
 520 |                   <>
     :                   ^^
 521 |                     <svg
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:521:22]
 520 |                   <>
 521 |                     <svg
     :                      ^^^
 522 |                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:527:24]
 526 |                     >
 527 |                       <circle
     :                        ^^^^^^
 528 |                         className="opacity-25"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint-plugin-react(react-in-jsx-scope): 'React' must be in scope when using JSX
     ,-[src/components/admin/backup/BackupLocationTab.js:535:24]
 534 |                       ></circle>
 535 |                       <path
     :                        ^^^^
 536 |                         className="opacity-75"
     `----
  help: When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

  ! eslint(block-scoped-var): 'ar' is used outside of binding context.
    ,-[src/components/admin/backup/BackupLocationTab.js:23:40]
 22 |     if (pack || arguments.length === 2) {
 23 |       for (var i = 0, l = from.length, ar; i < l; i++) {
    :                                        ^|
    :                                         `-- It is declared in a different scope here
 24 |         if (ar || !(i in from)) {
 25 |           if (!ar) {
 26 |             ar = Array.prototype.slice.call(from, 0, i)
 27 |           }
 28 |           ar[i] = from[i]
 29 |         }
 30 |       }
 31 |     }
 32 |     return to.concat(ar || Array.prototype.slice.call(from))
    :                      ^|
    :                       `-- 'ar' is used here
 33 |   }
    `----
  help: Variable 'ar' is used outside its declaration block. Declare it outside the block or use 'let'/'const'.

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
     ,-[src/lib/ai/mental-llama/config.ts:118:28]
 117 |       try {
 118 |         const { config } = require('@/config/env.config.ts')
     :                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 119 |         return !config.isProduction()
     `----
  help: Do not use CommonJS `require` calls

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:31:33]
 30 | export const getAllTestScenarios = () => {
 31 |   const { baselineScenarios } = require('./baseline-scenarios')
    :                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 32 |   const { demographicBiasScenarios } = require('./demographic-bias-scenarios')
    `----
  help: Do not use CommonJS `require` calls

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:32:40]
 31 |   const { baselineScenarios } = require('./baseline-scenarios')
 32 |   const { demographicBiasScenarios } = require('./demographic-bias-scenarios')
    :                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 33 | 
    `----
  help: Do not use CommonJS `require` calls

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:49:7]
 48 |     ageBiasElderlyPatient,
 49 |   } = require('./demographic-bias-scenarios')
    :       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 50 | 
    `----
  help: Do not use CommonJS `require` calls

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:67:7]
 66 |     baselinePainManagementScenario,
 67 |   } = require('./baseline-scenarios')
    :       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 68 | 
    `----
  help: Do not use CommonJS `require` calls

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:86:7]
 85 |     ageBiasElderlyPatient,
 86 |   } = require('./demographic-bias-scenarios')
    :       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 87 | 
    `----
  help: Do not use CommonJS `require` calls

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/aws-s3.ts:11:15]
 10 | export class S3StorageProvider implements StorageProvider {
 11 |   private s3: any
    :               ^^^
 12 |   private bucketName: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/aws-s3.ts:29:49]
 28 |       this.s3 = new S3({
 29 |         credentials: this.config.credentials as any,
    :                                                 ^^^
 30 |         region: this.config.region as string,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/aws-s3.ts:57:45]
 56 |       const { Contents = [] } = await this.s3.listObjects(params)
 57 |       const fileNames = Contents.map((item: any) => item.Key)
    :                                             ^^^
 58 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/session/EmotionTrackingChart.tsx:116:61]
 115 |             value={timeRange}
 116 |             onChange={(e) => setTimeRange(e.target.value as any)}
     :                                                             ^^^
 117 |             aria-label="Select time range"
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/EvidenceBasedVerificationDemo.tsx:516:27]
 515 |                     {verification.gaps.map((gap, index) => (
 516 |                       <li key={index} className="flex items-start gap-1">
     :                           ^^^^^^^^^^^
 517 |                         <span className="text-yellow-500">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/EvidenceBasedVerificationDemo.tsx:532:27]
 531 |                     {verification.recommendations.map((rec, index) => (
 532 |                       <li key={index} className="flex items-start gap-1">
     :                           ^^^^^^^^^^^
 533 |                         <span className="text-blue-500">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/EvidenceBasedVerificationDemo.tsx:678:33]
 677 |                               <li
 678 |                                 key={index}
     :                                 ^^^^^^^^^^^
 679 |                                 className="flex items-start gap-1"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/EvidenceBasedVerificationDemo.tsx:695:33]
 694 |                               <li
 695 |                                 key={index}
     :                                 ^^^^^^^^^^^
 696 |                                 className="flex items-start gap-1"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/local-fs.ts:17:15]
 16 |   private basePath: string
 17 |   private fs: any
    :               ^^^
 18 |   private path: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/local-fs.ts:18:17]
 17 |   private fs: any
 18 |   private path: any
    :                 ^^^
 19 |   private initialized = false
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/security/backup/storage-providers/local-fs.ts:166:33]
 165 |     const files = await Promise.all(
 166 |       entries.map(async (entry: any) => {
     :                                 ^^^
 167 |         const fullPath = this.path.join(dir, entry.name)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/demo/PipelineOverview.tsx:59:13]
 58 |               <React.Fragment key={stage}>
 59 | ,->             <div
 60 | |                 style={{
 61 | |                   padding: '10px',
 62 | |                   border: '1px solid #ddd',
 63 | |                   borderRadius: '4px',
 64 | |                   cursor: 'pointer',
 65 | |                   backgroundColor:
 66 | |                     selectedStage === stage ? '#e0e0e0' : 'transparent',
 67 | |                   width: '120px',
 68 | |                 }}
 69 | |                 onClick={() => handleStageClick(stage)}
 70 | `->             >
 71 |                   <div>{stage}</div>
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x Unterminated regular expression
     ,-[src/components/admin/backup/BackupRecoveryTab.tsx:206:16]
 205 |                 </Button>
 206 |               </div>
     :                ^^^^^^
 207 |             </div>
 208 |           </Dialog>
     `----

  x Expected corresponding JSX closing tag for 'div'.
     ,-[src/components/admin/backup/BackupRecoveryTab.tsx:124:6]
 123 |   return (
 124 |     <div className="space-y-6">
     :      ^^^
 125 |       <Card>
 126 |         <CardHeader>
 127 |           <CardTitle>Manual Recovery Test</CardTitle>
 128 |           <CardDescription>
 129 |             Select a backup and an environment to run a manual recovery test.
 130 |           </CardDescription>
 131 |         </CardHeader>
 132 |         <CardContent className="space-y-4">
 133 |           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
 134 |             <div>
 135 |               <label
 136 |                 htmlFor="backup-select"
 137 |                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
 138 |               >
 139 |                 Select Backup
 140 |               </label>
 141 |               <Select
 142 |                 value={selectedBackupId}
 143 |                 onValueChange={setSelectedBackupId}
 144 |               >
 145 |                 <SelectTrigger id="backup-select">
 146 |                   <SelectValue placeholder="Choose a backup..." />
 147 |                 </SelectTrigger>
 148 |                 <SelectContent>
 149 |                   {availableBackups.map((backup) => (
 150 |                     <SelectItem key={backup.id} value={backup.id}>
 151 |                       {new Date(backup.timestamp).toLocaleString()} - {backup.type}
 152 |                     </SelectItem>
 153 |                   ))}
 154 |                 </SelectContent>
 155 |               </Select>
 156 |             </div>
 157 |             <div>
 158 |               <label
 159 |                 htmlFor="test-environment"
 160 |                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
 161 |               >
 162 |                 Test Environment
 163 |               </label>
 164 |               <Select
 165 |                 value={testEnvironment}
 166 |                 onValueChange={(value: string) =>
 167 |                   setTestEnvironment(value as TestEnvironmentType)
 168 |                 }
 169 |               >
 170 |                 <SelectTrigger id="test-environment">
 171 |                   <SelectValue />
 172 |                 </SelectTrigger>
 173 |                 <SelectContent>
 174 |                   <SelectItem value={TestEnvironmentType.Sandbox}>
 175 |                     Sandbox (Memory)
 176 |                   </SelectItem>
 177 |                   <SelectItem value={TestEnvironmentType.Docker}>
 178 |                     Docker
 179 |                   </SelectItem>
 180 |                   <SelectItem value={TestEnvironmentType.Kubernetes}>
 181 |                     Kubernetes
 182 |                   </SelectItem>
 183 |                   <SelectItem value={TestEnvironmentType.VM}>VM</SelectItem>
 184 |                 </SelectContent>
 185 |               </Select>
 186 |             </div>
 187 |           </div>
 188 |           <Button onClick={handleRunTest} disabled={isTesting || !selectedBackupId}>
 189 |             {isTesting ? 'Testing...' : 'Run Test'}
 190 |           </Button>
 191 |         </CardContent>
 192 |       </Card>
 193 | 
 194 |       {latestTestResult && (
 195 |         <Card>
 196 |           <CardHeader>
 197 |             <CardTitle>Latest Test Result</CardTitle>
 198 |           </CardHeader>
 199 |           <CardContent>
 200 |             <pre>{JSON.stringify(latestTestResult, null, 2)}</pre>
 201 |           </CardContent>
 202 |         </Card>
 203 |       )}
 204 |                   {testInProgress ? 'Running Test...' : 'Start Test'}
 205 |                 </Button>
     :                   ^^^^^^
 206 |               </div>
     `----

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/ai/temporal/TemporalAnalysisAlgorithm.ts:17:14]
 16 | 
 17 | export class TemporalAnalysisAlgorithm {
    :              ^^^^^^^^^^^^^^^^^^^^^^^^^
 18 |   /**
    `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:16:16]
 15 | export interface EmotionAnalysisResult {
 16 |   trendlines?: any[]
    :                ^^^
 17 |   volatility?: number
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:18:14]
 17 |   volatility?: number
 18 |   emotions?: any[]
    :              ^^^
 19 |   patterns?: any[]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:19:14]
 18 |   emotions?: any[]
 19 |   patterns?: any[]
    :              ^^^
 20 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:43:14]
 42 |     options?: { emotionTypes?: string[] },
 43 |   ): Promise<any[]> {
    :              ^^^
 44 |     logger.info('Getting critical emotional moments', { clientId, options })
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:52:14]
 51 |     endDate: Date,
 52 |   ): Promise<any> {
    :              ^^^
 53 |     logger.info('Calculating emotion progression', {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/temporal/EmotionTemporalAnalyzer.ts:61:60]
 60 | 
 61 |   async findEmotionCorrelations(clientId: string): Promise<any[]> {
    :                                                            ^^^
 62 |     logger.info('Finding emotion correlations', { clientId })
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/monitoring/AuditDashboard.tsx:97:19]
 96 |             {metrics.unusualAccess.details.map((detail, index) => (
 97 |               <li key={index} className="flex items-center text-red-600">
    :                   ^^^^^^^^^^^
 98 |                 <svg
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:119:15]
 118 |     approach: string,
 119 |     scenario: any,
     :               ^^^
 120 |   ): TherapeuticResponse => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:496:17]
 495 |               <div
 496 |                 key={index}
     :                 ^^^^^^^^^^^
 497 |                 className={`border rounded-lg p-5 bg-${response.color}-50 border-${response.color}-200`}
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:538:25]
 537 |                       <span
 538 |                         key={techIndex}
     :                         ^^^^^^^^^^^^^^^
 539 |                         className={`text-xs px-2 py-1 rounded-full bg-${response.color}-100 text-${response.color}-700`}
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:488:15]
 487 |             <p className="text-gray-700 italic">
 488 |               "{comparison.clientStatement}"
     :               ^
 489 |             </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:488:44]
 487 |             <p className="text-gray-700 italic">
 488 |               "{comparison.clientStatement}"
     :                                            ^
 489 |             </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:524:21]
 523 |                   <p className="text-gray-700 mt-1 text-sm leading-relaxed">
 524 |                     "{response.response}"
     :                     ^
 525 |                   </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:524:41]
 523 |                   <p className="text-gray-700 mt-1 text-sm leading-relaxed">
 524 |                     "{response.response}"
     :                                         ^
 525 |                   </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `'` can be escaped with &apos; or &lsquo; or &#39; or &rsquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:582:65]
 581 |                 <strong>Key Differences:</strong> Each approach offers a unique
 582 |                 lens for understanding and addressing the client's concerns.
     :                                                                 ^
 583 |               </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:619:70]
 618 |           <p className="text-sm">
 619 |             Select a scenario and therapeutic approaches, then click "Compare
     :                                                                      ^
 620 |             Approaches" to see side-by-side therapeutic responses
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/TherapeuticApproachShowcase.tsx:620:23]
 619 |             Select a scenario and therapeutic approaches, then click "Compare
 620 |             Approaches" to see side-by-side therapeutic responses
     :                       ^
 621 |           </p>
     `----

  ! eslint(no-unused-vars): Parameter 'clinicalCase' is declared but never used. Unused parameters should start with a '_'.
    ,-[src/components/demo/TherapeuticApproachShowcase.tsx:26:8]
 25 |   TherapeuticApproachShowcaseProps
 26 | > = ({ clinicalCase }) => {
    :        ^^^^^^|^^^^^
    :              `-- 'clinicalCase' is declared here
 27 |   const [selectedScenario, setSelectedScenario] =
    `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/ai/services/OutcomeRecommendationEngine.ts:6:12]
 5 | export interface RecommendationContext {
 6 |   session: any
   :            ^^^
 7 |   chatSession: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/ai/services/OutcomeRecommendationEngine.ts:7:16]
 6 |   session: any
 7 |   chatSession: any
   :                ^^^
 8 |   recentEmotionState: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/ai/services/OutcomeRecommendationEngine.ts:8:23]
 7 |   chatSession: any
 8 |   recentEmotionState: any
   :                       ^^^
 9 |   recentInterventions: string[]
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/services/OutcomeRecommendationEngine.ts:11:26]
 10 |   userPreferences?: Record<string, unknown>
 11 |   mentalHealthAnalysis?: any
    :                          ^^^
 12 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/ai/services/OutcomeRecommendationEngine.ts:29:14]
 28 | 
 29 | export class OutcomeRecommendationEngine {
    :              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
 30 |   static recommend(request: RecommendationRequest): TreatmentForecast[] {
    `----
  help: Try using standalone functions instead of static methods

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ValidationDemo.tsx:411:25]
 410 |                   {category.rules.map((rule, index) => (
 411 |                     <li key={index} className="flex items-start gap-2">
     :                         ^^^^^^^^^^^
 412 |                       <span className="text-blue-500 mt-1">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ValidationDemo.tsx:494:26]
 493 |                   {results.map((result, index) => (
 494 |                     <div key={index} className="border rounded-lg p-4">
     :                          ^^^^^^^^^^^
 495 |                       <div className="flex items-center justify-between mb-3">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ValidationDemo.tsx:511:35]
 510 |                             {result.issues.map((issue, i) => (
 511 |                               <li key={i} className="flex items-start gap-1">
     :                                   ^^^^^^^
 512 |                                 <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ValidationDemo.tsx:526:33]
 525 |                           {result.suggestions.map((suggestion, i) => (
 526 |                             <li key={i} className="flex items-start gap-1">
     :                                 ^^^^^^^
 527 |                               <span className="text-blue-500 mt-0.5">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'validateContent'
     ,-[src/components/demo/ValidationDemo.tsx:109:6]
 108 |     }
 109 |   }, [content])
     :      ^^^^^^^^^
 110 | 
     `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/therapy/TreatmentPlanManager.tsx:209:34]
 208 |       if (updatedGoals[index]) {
 209 |         ;(updatedGoals[index] as any)[field] = value // Keep as any for simplicity given EditableGoal union
     :                                  ^^^
 210 |         setEditingPlanData((prev: FormUpdatePlanData | null) =>
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/therapy/TreatmentPlanManager.tsx:217:34]
 216 |       if (updatedGoals[index]) {
 217 |         ;(updatedGoals[index] as any)[field] = value // ClientSideNewGoal is more straightforward
     :                                  ^^^
 218 |         setNewPlanData((prev: FormNewPlanData) => ({
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/therapy/TreatmentPlanManager.tsx:297:59]
 296 |       ) {
 297 |         ;(updatedGoals[goalIndex].objectives[objIndex] as any)[field] = value
     :                                                           ^^^
 298 |         setEditingPlanData((prev: FormUpdatePlanData | null) =>
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/therapy/TreatmentPlanManager.tsx:310:62]
 309 |       ) {
 310 |         ;(updatedNewGoals[goalIndex].objectives[objIndex] as any)[field] = value
     :                                                              ^^^
 311 |         setNewPlanData((prev: FormNewPlanData) => ({
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/therapy/TreatmentPlanManager.tsx:830:37]
 829 |               This action cannot be undone. This will permanently delete the
 830 |               treatment plan titled "<strong>{planToDelete?.title}</strong>" and
     :                                     ^
 831 |               all its associated goals and objectives.
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/therapy/TreatmentPlanManager.tsx:830:76]
 829 |               This action cannot be undone. This will permanently delete the
 830 |               treatment plan titled "<strong>{planToDelete?.title}</strong>" and
     :                                                                            ^
 831 |               all its associated goals and objectives.
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/therapy/TreatmentPlanManager.tsx:887:38]
 886 |             <p className="text-sm text-muted-foreground mb-4">
 887 |               Update the details for "{editingPlanData.title}".
     :                                      ^
 888 |             </p>
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/therapy/TreatmentPlanManager.tsx:887:62]
 886 |             <p className="text-sm text-muted-foreground mb-4">
 887 |               Update the details for "{editingPlanData.title}".
     :                                                              ^
 888 |             </p>
     `----

  ! eslint(no-unused-vars): Catch parameter 'e' is caught but never used. Unused caught errors should start with a '_'.
    ,-[src/components/therapy/TreatmentPlanManager.tsx:58:12]
 57 |     return new Date(dateString).toLocaleDateString()
 58 |   } catch (e) {
    :            |
    :            `-- 'e' is declared here
 59 |     return String(dateString)
    `----
  help: Consider handling this error.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test/setup.ts:10:27]
  9 | declare module 'vitest' {
 10 |   interface Assertion<T = any> {
    :                           ^^^
 11 |     toBeInTheDocument(): T
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test/setup.ts:70:6]
 69 |   }
 70 | } as any
    :      ^^^
 71 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:439:28]
 438 |                     (event, index) => (
 439 |                       <div key={index} className="flex gap-2 items-start">
     :                            ^^^^^^^^^^^
 440 |                         <input
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:623:35]
 622 |                             (diagnosis, i) => (
 623 |                               <li key={i}>{diagnosis}</li>
     :                                   ^^^^^^^
 624 |                             ),
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:679:37]
 678 |                               (goal, i) => (
 679 |                                 <li key={i}>{goal}</li>
     :                                     ^^^^^^^
 680 |                               ),
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:689:37]
 688 |                               (goal, i) => (
 689 |                                 <li key={i}>{goal}</li>
     :                                     ^^^^^^^
 690 |                               ),
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:701:35]
 700 |                             (intervention, i) => (
 701 |                               <li key={i}>{intervention}</li>
     :                                   ^^^^^^^
 702 |                             ),
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:573:58]
 572 |                 <p>
 573 |                   Configure the client profile and click "Generate Comprehensive
     :                                                          ^
 574 |                   Profile" to see the AI-generated clinical case.
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:574:26]
 573 |                   Configure the client profile and click "Generate Comprehensive
 574 |                   Profile" to see the AI-generated clinical case.
     :                          ^
 575 |                 </p>
     `----

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:341:19]
 340 |                 <div>
 341 |                   <label className="block text-sm font-medium text-gray-700 mb-1">
     :                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 342 |                     Age
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:357:19]
 356 |                 <div>
 357 |                   <label className="block text-sm font-medium text-gray-700 mb-1">
     :                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 358 |                     Gender
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:377:17]
 376 |               <div>
 377 |                 <label className="block text-sm font-medium text-gray-700 mb-1">
     :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 378 |                   Occupation
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:391:17]
 390 |               <div>
 391 |                 <label className="block text-sm font-medium text-gray-700 mb-1">
     :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 392 |                   Background
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:410:17]
 409 |               <div>
 410 |                 <label className="block text-sm font-medium text-gray-700 mb-1">
     :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 411 |                   Primary Concern
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/ScenarioGenerationDemo.tsx:425:19]
 424 |                 <div className="flex justify-between items-center mb-2">
 425 |                   <label className="block text-sm font-medium text-gray-700">
     :                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 426 |                     Problem Development Timeline
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test/mocks/handlers.ts:31:16]
 30 | export const HttpResponse = {
 31 |   json: (data: any) => ({
    :                ^^^
 32 |     ok: true,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:231:11]
 230 |               {/* JSON Format */}
 231 | ,->           <div
 232 | |               className={`border rounded-lg p-4 cursor-pointer transition-all ${
 233 | |                 exportFormat === 'json'
 234 | |                   ? 'border-blue-500 bg-blue-50'
 235 | |                   : 'border-gray-200 hover:border-gray-300'
 236 | |               }`}
 237 | |               onClick={() => setExportFormat('json')}
 238 | `->           >
 239 |                 <div className="flex items-center mb-2">
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:257:11]
 256 |               {/* CSV Format */}
 257 | ,->           <div
 258 | |               className={`border rounded-lg p-4 cursor-pointer transition-all ${
 259 | |                 exportFormat === 'csv'
 260 | |                   ? 'border-blue-500 bg-blue-50'
 261 | |                   : 'border-gray-200 hover:border-gray-300'
 262 | |               }`}
 263 | |               onClick={() => setExportFormat('csv')}
 264 | `->           >
 265 |                 <div className="flex items-center mb-2">
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:283:11]
 282 |               {/* PDF Format */}
 283 | ,->           <div
 284 | |               className={`border rounded-lg p-4 cursor-pointer transition-all ${
 285 | |                 exportFormat === 'pdf'
 286 | |                   ? 'border-blue-500 bg-blue-50'
 287 | |                   : 'border-gray-200 hover:border-gray-300'
 288 | |               }`}
 289 | |               onClick={() => setExportFormat('pdf')}
 290 | `->           >
 291 |                 <div className="flex items-center mb-2">
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:316:11]
 315 |           {/* Analysis Results */}
 316 |           <label className="flex items-center">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 317 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:339:11]
 338 |           {/* Counterfactual Scenarios */}
 339 |           <label className="flex items-center">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 340 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:362:11]
 361 |           {/* Historical Comparison */}
 362 |           <label className="flex items-center">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 363 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:390:11]
 389 |           {/* Recommendations */}
 390 |           <label className="flex items-center">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 391 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:411:11]
 410 |           {/* Demographics */}
 411 |           <label className="flex items-center">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 412 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:352:17]
 351 |               <div
 352 |                 key={index}
     :                 ^^^^^^^^^^^
 353 |                 className={`flex items-center gap-3 text-sm ${
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:386:19]
 385 |                 <div
 386 |                   key={index}
     :                   ^^^^^^^^^^^
 387 |                   className="flex items-center gap-2 p-2 bg-blue-50 rounded"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:409:27]
 408 |                     (factor, index) => (
 409 |                       <li key={index} className="flex items-start gap-1">
     :                           ^^^^^^^^^^^
 410 |                         <span className="text-green-500 mt-1">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:425:27]
 424 |                     (factor, index) => (
 425 |                       <li key={index} className="flex items-start gap-1">
     :                           ^^^^^^^^^^^
 426 |                         <span className="text-yellow-500 mt-1">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:439:27]
 438 |                     (factor, index) => (
 439 |                       <li key={index} className="flex items-start gap-1">
     :                           ^^^^^^^^^^^
 440 |                         <span className="text-purple-500 mt-1">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:476:25]
 475 |                   {treatmentPlan.goals.shortTerm.map((goal, index) => (
 476 |                     <li key={index} className="flex items-start gap-2 text-sm">
     :                         ^^^^^^^^^^^
 477 |                       <span className="text-green-500 mt-1">✓</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:490:25]
 489 |                   {treatmentPlan.goals.longTerm.map((goal, index) => (
 490 |                     <li key={index} className="flex items-start gap-2 text-sm">
     :                         ^^^^^^^^^^^
 491 |                       <span className="text-blue-500 mt-1">◆</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:507:21]
 506 |                   <div
 507 |                     key={index}
     :                     ^^^^^^^^^^^
 508 |                     className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:526:23]
 525 |                     <span
 526 |                       key={index}
     :                       ^^^^^^^^^^^
 527 |                       className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:541:25]
 540 |                   {treatmentPlan.outcomeMeasures.map((measure, index) => (
 541 |                     <li key={index} className="text-sm text-gray-600">
     :                         ^^^^^^^^^^^
 542 |                       • {measure}
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:571:19]
 570 |           <p className="text-sm">
 571 |             Click "Generate Formulation" to create a comprehensive clinical
     :                   ^
 572 |             assessment
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ClinicalFormulationDemo.tsx:571:40]
 570 |           <p className="text-sm">
 571 |             Click "Generate Formulation" to create a comprehensive clinical
     :                                        ^
 572 |             assessment
     `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClientFacingDemo.tsx:287:25]
 286 |                       <div
 287 |                         key={index}
     :                         ^^^^^^^^^^^
 288 |                         className="flex items-center justify-between p-3 bg-slate-700 rounded-lg"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClientFacingDemo.tsx:371:28]
 370 |                     {validationResults.map((result, index) => (
 371 |                       <div key={index} className="bg-slate-700 rounded-lg p-4">
     :                            ^^^^^^^^^^^
 372 |                         <div className="flex justify-between items-center mb-2">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClientFacingDemo.tsx:459:28]
 458 |                     {categoryBalance.map((category, index) => (
 459 |                       <div key={index} className="bg-slate-700 rounded-lg p-4">
     :                            ^^^^^^^^^^^
 460 |                         <div className="flex justify-between items-center mb-2">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ClientFacingDemo.tsx:400:23]
 399 |                     <div className="bg-slate-900 rounded p-3 text-sm text-gray-300">
 400 |                       "Client presents with persistent worry, restlessness, and
     :                       ^
 401 |                       difficulty concentrating for the past 6 months. Symptoms
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ClientFacingDemo.tsx:403:39]
 402 |                       interfere with work performance and social
 403 |                       relationships..."
     :                                       ^
 404 |                     </div>
     `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/SafetyCheckingDemo.tsx:501:33]
 500 |                               <Badge
 501 |                                 key={index}
     :                                 ^^^^^^^^^^^
 502 |                                 variant="outline"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/SafetyCheckingDemo.tsx:525:33]
 524 |                               <li
 525 |                                 key={index}
     :                                 ^^^^^^^^^^^
 526 |                                 className="flex items-start gap-1"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/SafetyCheckingDemo.tsx:585:29]
 584 |                           <Badge
 585 |                             key={index}
     :                             ^^^^^^^^^^^
 586 |                             variant="outline"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/SafetyCheckingDemo.tsx:609:33]
 608 |                           {protocol.actions.slice(0, 3).map((action, index) => (
 609 |                             <li key={index} className="flex items-start gap-1">
     :                                 ^^^^^^^^^^^
 610 |                               <span>•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint(no-extend-native): HTMLElement prototype is read-only, properties should not be added.
    ,-[src/components/demo/__tests__/setup.ts:34:1]
 33 | // Mock HTMLElement methods
 34 | HTMLElement.prototype.scrollIntoView = vi.fn()
    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 35 | HTMLElement.prototype.hasPointerCapture = vi.fn()
    `----

  ! eslint(no-extend-native): HTMLElement prototype is read-only, properties should not be added.
    ,-[src/components/demo/__tests__/setup.ts:35:1]
 34 | HTMLElement.prototype.scrollIntoView = vi.fn()
 35 | HTMLElement.prototype.hasPointerCapture = vi.fn()
    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 36 | HTMLElement.prototype.releasePointerCapture = vi.fn()
    `----

  ! eslint(no-extend-native): HTMLElement prototype is read-only, properties should not be added.
    ,-[src/components/demo/__tests__/setup.ts:36:1]
 35 | HTMLElement.prototype.hasPointerCapture = vi.fn()
 36 | HTMLElement.prototype.releasePointerCapture = vi.fn()
    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 37 | 
    `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/demo/PresentingProblemVisualization.tsx:79:22]
 78 |               {sortedEvents.map((event, index) => (
 79 |                 <div key={index} className="relative flex items-start">
    :                      ^^^^^^^^^^^
 80 |                   {/* Timeline Dot */}
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demos/bias-detection/BiasAnalysisDisplay.tsx:355:19]
 354 |             {results.recommendations.map((recommendation, index) => (
 355 |               <li key={index} className="flex items-start">
     :                   ^^^^^^^^^^^
 356 |                 <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" />
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/QualityAssessmentDemo.tsx:597:21]
 596 |                   <li
 597 |                     key={index}
     :                     ^^^^^^^^^^^
 598 |                     className="text-sm text-green-700 flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/QualityAssessmentDemo.tsx:617:23]
 616 |                     <li
 617 |                       key={index}
     :                       ^^^^^^^^^^^
 618 |                       className="text-sm text-yellow-700 flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/QualityAssessmentDemo.tsx:638:23]
 637 |                     <li
 638 |                       key={index}
     :                       ^^^^^^^^^^^
 639 |                       className="text-sm text-red-700 flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/QualityAssessmentDemo.tsx:663:21]
 662 |                   <li
 663 |                     key={index}
     :                     ^^^^^^^^^^^
 664 |                     className="text-sm text-indigo-700 flex items-start gap-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint(no-unused-vars): Parameter 'approach' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/QualityAssessmentDemo.tsx:178:5]
 177 |     therapistTurns: ConversationTurn[],
 178 |     approach: string,
     :     ^^^^|^^^
     :         `-- 'approach' is declared here
 179 |   ): number => {
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'conv' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/QualityAssessmentDemo.tsx:358:5]
 357 |     metrics: QualityMetrics,
 358 |     conv: ConversationTurn[],
     :     ^^|^
     :       `-- 'conv' is declared here
 359 |     approach: string,
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'approach' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/QualityAssessmentDemo.tsx:359:5]
 358 |     conv: ConversationTurn[],
 359 |     approach: string,
     :     ^^^^|^^^
     :         `-- 'approach' is declared here
 360 |   ) => {
     `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/demo/FormatStandardizationDemo.tsx:14:14]
 13 |   description: string
 14 |   structure: any
    :              ^^^
 15 |   example: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/demo/FormatStandardizationDemo.tsx:15:12]
 14 |   structure: any
 15 |   example: any
    :            ^^^
 16 |   useCase: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/demo/FormatStandardizationDemo.tsx:31:60]
 30 |   const [selectedFormat, setSelectedFormat] = useState<string>('huggingface')
 31 |   const [standardizedData, setStandardizedData] = useState<any>(null)
    :                                                            ^^^
 32 |   const [isConverting, setIsConverting] = useState(false)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/demo/FormatStandardizationDemo.tsx:245:20]
 244 | 
 245 |     let converted: any
     :                    ^^^
 246 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'convertToFormat'
     ,-[src/components/demo/FormatStandardizationDemo.tsx:434:6]
 433 |     }
 434 |   }, [selectedFormat, conversation, therapeuticApproach, qualityScore])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 435 | 
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/DemographicBalancingDisplay.tsx:407:20]
 406 |             .map((stat, index) => (
 407 |               <div key={index} className="flex items-start gap-2">
     :                    ^^^^^^^^^^^
 408 |                 <span className="text-indigo-500">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'currentStats.occupation', 'demographicTargets.gender', 'demographicTargets.occupation', 'currentStats.background', 'demographicTargets.background', 'currentStats', 'currentStats.age', 'currentStats.gender', and 'demographicTargets.age'
     ,-[src/components/demo/DemographicBalancingDisplay.tsx:234:6]
 233 |     onBalanceUpdate?.(balanceScore)
 234 |   }, [currentProfile, onBalanceUpdate])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 235 | 
     `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/trends.ts:10:14]
  9 |  */
 10 | export class SecurityTrends {
    :              ^^^^^^^^^^^^^^
 11 |   // Trend directions
    `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/breach.ts:94:14]
 93 |  */
 94 | export class BreachDataService {
    :              ^^^^^^^^^^^^^^^^^
 95 |   /**
    `----
  help: Try using standalone functions instead of static methods

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:136:11]
 135 |             {filteredScenarios.map((scenario) => (
 136 | ,->           <div
 137 | |               key={scenario.id}
 138 | |               className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
 139 | |                 selectedScenario?.id === scenario.id
 140 | |                   ? 'border-blue-500 bg-blue-50'
 141 | |                   : 'border-gray-200 hover:border-gray-300'
 142 | |               } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
 143 | |               onClick={() => !disabled && onScenarioSelect(scenario)}
 144 | |               onMouseEnter={() => setPreviewScenario(scenario)}
 145 | |               onMouseLeave={() => setPreviewScenario(null)}
 146 | `->           >
 147 |                 {/* Header */}
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:216:25]
 215 |                   .map((objective, index) => (
 216 |                     <li key={index} className="flex items-start">
     :                         ^^^^^^^^^^^
 217 |                       <span className="text-blue-500 mr-1">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:324:27]
 323 |                     (objective, index) => (
 324 |                       <li key={index} className="flex items-start">
     :                           ^^^^^^^^^^^
 325 |                         <span className="text-blue-500 mr-2">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
    ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:88:13]
 87 |           <div>
 88 |             <label className="block text-sm font-medium text-gray-700 mb-1">
    :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 89 |               Category
    `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:108:13]
 107 |           <div>
 108 |             <label className="block text-sm font-medium text-gray-700 mb-1">
     :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 109 |               Risk Level
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/notifications.ts:84:14]
 83 |  */
 84 | export class NotificationEffectiveness {
    :              ^^^^^^^^^^^^^^^^^^^^^^^^^
 85 |   /**
    `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/types.ts:67:28]
 66 |    */
 67 |   metadata: Record<string, any>
    :                            ^^^
 68 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/demo/ApprovalProcessWorkflowDemo.tsx:399:17]
 398 |                   {workflows.map((workflow) => (
 399 | ,->                 <div
 400 | |                     key={workflow.id}
 401 | |                     className={`p-3 border rounded-lg cursor-pointer transition-colors ${
 402 | |                       selectedWorkflow === workflow.id
 403 | |                         ? 'border-blue-500 bg-blue-50'
 404 | |                         : 'border-gray-200 hover:border-gray-300'
 405 | |                     }`}
 406 | |                     onClick={() => setSelectedWorkflow(workflow.id)}
 407 | `->                 >
 408 |                       <div className="flex items-start justify-between mb-2">
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ApprovalProcessWorkflowDemo.tsx:580:37]
 579 |                                   <li
 580 |                                     key={reqIndex}
     :                                     ^^^^^^^^^^^^^^
 581 |                                     className="text-xs opacity-75 flex items-start gap-1"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ApprovalProcessWorkflowDemo.tsx:655:25]
 654 |                       <div
 655 |                         key={index}
     :                         ^^^^^^^^^^^
 656 |                         className="flex items-start gap-3 p-3 bg-green-50 rounded-lg"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:110:9]
 109 |       <div>
 110 |         <label className="block text-sm font-medium text-gray-700 mb-1">
     :         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 111 |           Scenario Name (Optional)
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:130:13]
 129 |           <div>
 130 |             <label className="block text-sm font-medium text-gray-700 mb-1">
     :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 131 |               Age Group
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:150:13]
 149 |           <div>
 150 |             <label className="block text-sm font-medium text-gray-700 mb-1">
     :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 151 |               Gender
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:171:13]
 170 |           <div>
 171 |             <label className="block text-sm font-medium text-gray-700 mb-1">
     :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 172 |               Ethnicity
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:195:13]
 194 |           <div>
 195 |             <label className="block text-sm font-medium text-gray-700 mb-1">
     :             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 196 |               Primary Language
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demos/bias-detection/SessionInputForm.tsx:225:9]
 224 |       <div>
 225 |         <label className="block text-sm font-medium text-gray-700 mb-1">
     :         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 226 |           Therapeutic Content <span className="text-red-500">*</span>
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/universal-demo-analytics.ts:22:18]
 21 |   viewport_height: number
 22 |   [key: string]: any
    :                  ^^^
 23 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/universal-demo-analytics.ts:27:23]
 26 |   private pageName: DemoPageName
 27 |   private pageConfig: any
    :                       ^^^
 28 |   private sessionId: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:347:32]
 346 |     eventName: string,
 347 |     properties: Record<string, any> = {},
     :                                ^^^
 348 |   ): void {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:373:32]
 372 |     eventName: string,
 373 |     properties: Record<string, any> = {},
     :                                ^^^
 374 |   ): Promise<void> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:441:32]
 440 |     eventName: string,
 441 |     properties: Record<string, any> = {},
     :                                ^^^
 442 |   ): void {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:455:27]
 454 | 
 455 |   public getPageConfig(): any {
     :                           ^^^
 456 |     return this.pageConfig
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:473:15]
 472 |   // Make available globally for debugging
 473 |   ;(window as any).demoAnalytics = analytics
     :               ^^^
 474 | 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x Unexpected token
    ,-[src/lib/analytics/risk.ts:26:1]
 25 |   CRITICAL = 'critical',
 26 | }
    : ^
 27 | 
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/compliance.ts:17:41]
 16 |    */
 17 |   static async calculateScore(breaches: any[]): Promise<number> {
    :                                         ^^^
 18 |     // Mock implementation
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/compliance.ts:10:14]
  9 |  */
 10 | export class ComplianceMetrics {
    :              ^^^^^^^^^^^^^^^^^
 11 |   /**
    `----
  help: Try using standalone functions instead of static methods

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
     ,-[src/lib/security/__tests__/dlp.test.ts:192:65]
 191 |       const alertSpy = vi.spyOn(
 192 |         dlpService as DlpServiceType & { generateSecurityAlert: Function },
     :                                                                 ^^^^^^^^
 193 |         'generateSecurityAlert',
     `----
  help: Prefer explicitly defining any function parameters and return type.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
     ,-[src/lib/security/__tests__/dlp.test.ts:312:55]
 311 |       const logSpy = vi.spyOn(
 312 |         dlpService as DlpServiceType & { logDLPEvent: Function },
     :                                                       ^^^^^^^^
 313 |         'logDLPEvent',
     `----
  help: Prefer explicitly defining any function parameters and return type.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
     ,-[src/lib/security/__tests__/dlp.test.ts:333:55]
 332 |       const logSpy = vi.spyOn(
 333 |         dlpService as DlpServiceType & { logDLPEvent: Function },
     :                                                       ^^^^^^^^
 334 |         'logDLPEvent',
     `----
  help: Prefer explicitly defining any function parameters and return type.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ConversationGenerationDemo.tsx:503:19]
 502 |                 <div
 503 |                   key={index}
     :                   ^^^^^^^^^^^
 504 |                   className={`flex items-center gap-3 text-sm ${
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ConversationGenerationDemo.tsx:535:19]
 534 |                 <div
 535 |                   key={index}
     :                   ^^^^^^^^^^^
 536 |                   className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ConversationGenerationDemo.tsx:577:19]
 576 |                 <div
 577 |                   key={index}
     :                   ^^^^^^^^^^^
 578 |                   className={`flex gap-4 ${
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ConversationGenerationDemo.tsx:614:29]
 613 |                           <span
 614 |                             key={techIndex}
     :                             ^^^^^^^^^^^^^^^
 615 |                             className={`text-xs px-2 py-1 rounded-full ${
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ConversationGenerationDemo.tsx:658:55]
 657 |             <p className="text-sm">
 658 |               Select a therapeutic approach and click "Generate Conversation" to
     :                                                       ^
 659 |               see knowledge-to-dialogue transformation
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ConversationGenerationDemo.tsx:658:77]
 657 |             <p className="text-sm">
 658 |               Select a therapeutic approach and click "Generate Conversation" to
     :                                                                             ^
 659 |               see knowledge-to-dialogue transformation
     `----

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/ConversationGenerationDemo.tsx:143:59]
 142 |       const sources: KnowledgeSource[] =
 143 |         conversionResponse.knowledgeMapping.map((mapping, index) => ({
     :                                                           ^^|^^
     :                                                             `-- 'index' is declared here
 144 |           type: mapping.appliedKnowledge[0]?.source.includes('dsm5')
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'sources' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/ConversationGenerationDemo.tsx:266:5]
 265 |     caseData?: Partial<ClinicalCase>,
 266 |     sources?: KnowledgeSource[],
     :     ^^^^|^^^
     :         `-- 'sources' is declared here
 267 |   ): Promise<ConversationTurn[]> => {
     `----
  help: Consider removing this parameter.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/breach-analytics.ts:371:71]
 370 | 
 371 |   static async generateReport(timeframe: AnalyticsTimeframe): Promise<any> {
     :                                                                       ^^^
 372 |     try {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-extraneous-class): Unexpected class with only static properties.
    ,-[src/lib/analytics/breach-analytics.ts:69:14]
 68 | 
 69 | export class BreachAnalytics {
    :              ^^^^^^^^^^^^^^^
 70 |   private static readonly ANALYTICS_KEY_PREFIX = 'analytics:breach:'
    `----
  help: Try using standalone functions instead of static methods

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:806:60]
 805 | 
 806 |   private extractSessionFeatures(session: TherapySession): any {
     :                                                            ^^^
 807 |     const { aiAnalysis } = session
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:818:22]
 817 |   private analyzeEmotionalTransitions(
 818 |     sessionFeatures: any,
     :                      ^^^
 819 |   ): Array<{ confidence: number; intensity: number }> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:821:15]
 820 |     return sessionFeatures.emotionalStates.map(
 821 |           (_: any, index: number) => ({
     :               ^^^
 822 |             confidence: 0.7 + Math.random() * 0.3,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:828:57]
 827 | 
 828 |   private detectCommunicationAnomalies(sessionFeatures: any): any[] {
     :                                                         ^^^
 829 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:828:63]
 827 | 
 828 |   private detectCommunicationAnomalies(sessionFeatures: any): any[] {
     :                                                               ^^^
 829 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:833:54]
 832 | 
 833 |   private analyzeEngagementPatterns(sessionFeatures: any): any[] {
     :                                                      ^^^
 834 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:833:60]
 832 | 
 833 |   private analyzeEngagementPatterns(sessionFeatures: any): any[] {
     :                                                            ^^^
 834 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:877:18]
 876 |   private calculateClinicalSignificance(
 877 |     transitions: any[],
     :                  ^^^
 878 |   ): 'low' | 'medium' | 'high' {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:890:56]
 889 | 
 890 |   private generateEmotionalRecommendation(transitions: any[]): string {
     :                                                        ^^^
 891 |     const avgIntensity =
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:901:50]
 900 | 
 901 |   private shouldSuggestIntervention(transitions: any[]): boolean {
     :                                                  ^^^
 902 |     const avgIntensity =
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:908:18]
 907 |   private assessUrgencyLevel(
 908 |     transitions: any[],
     :                  ^^^
 909 |   ): 'none' | 'low' | 'medium' | 'high' | 'critical' {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:927:47]
 926 | 
 927 |   private calculateEvidenceScore(transitions: any[]): number {
     :                                               ^^^
 928 |     return transitions.reduce((a, t) => a + t.confidence, 0) / transitions.length;
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:954:53]
 953 | 
 954 |   private calculateCorrelationStrength(transitions: any[]): number {
     :                                                     ^^^
 955 |     // Simplified correlation calculation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1012:45]
 1011 |       // Extract numerical features from emotion analysis
 1012 |       const emotions = analysis.emotions as any
      :                                             ^^^
 1013 |       return [
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1199:24]
 1198 |   private calculateSeverity(
 1199 |     correlatedFactors: any[],
      :                        ^^^
 1200 |   ): 'low' | 'medium' | 'high' | 'critical' {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1218:24]
 1217 |     primaryFactor: string,
 1218 |     correlatedFactors: any[],
      :                        ^^^
 1219 |   ): string[] {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1288:20]
 1287 |   private generateTrendPatterns(
 1288 |     decomposition: any,
      :                    ^^^
 1289 |     changePoints: any[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1289:19]
 1288 |     decomposition: any,
 1289 |     changePoints: any[],
      :                   ^^^
 1290 |     stlDecomposition: any,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1290:23]
 1289 |     changePoints: any[],
 1290 |     stlDecomposition: any,
      :                       ^^^
 1291 |     startDate: Date,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1417:22]
 1416 |     clusters: number[],
 1417 |     networkAnalysis: any,
      :                      ^^^
 1418 |     temporalPatterns: any[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1418:23]
 1417 |     networkAnalysis: any,
 1418 |     temporalPatterns: any[],
      :                       ^^^
 1419 |     sessions: TherapySession[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:821:20]
 820 |     return sessionFeatures.emotionalStates.map(
 821 |           (_: any, index: number) => ({
     :                    ^^|^^
     :                      `-- 'index' is declared here
 822 |             confidence: 0.7 + Math.random() * 0.3,
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'sessionFeatures' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:828:40]
 827 | 
 828 |   private detectCommunicationAnomalies(sessionFeatures: any): any[] {
     :                                        ^^^^^^^|^^^^^^^
     :                                               `-- 'sessionFeatures' is declared here
 829 |     // Placeholder implementation
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'sessionFeatures' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:833:37]
 832 | 
 833 |   private analyzeEngagementPatterns(sessionFeatures: any): any[] {
     :                                     ^^^^^^^|^^^^^^^
     :                                            `-- 'sessionFeatures' is declared here
 834 |     // Placeholder implementation
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'transitions' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:954:40]
 953 | 
 954 |   private calculateCorrelationStrength(transitions: any[]): number {
     :                                        ^^^^^|^^^^^
     :                                             `-- 'transitions' is declared here
 955 |     // Simplified correlation calculation
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'sessions' is declared but never used. Unused parameters should start with a '_'.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1406:5]
 1405 |   private async mineTemporalPatterns(
 1406 |     sessions: TherapySession[],
      :     ^^^^|^^^
      :         `-- 'sessions' is declared here
 1407 |   ): Promise<Array<{ pattern: string; support: number }>> {
      `----
  help: Consider removing this parameter.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:473:20]
 472 |             {activeGoal.checkpoints.map((checkpoint, index) => (
 473 |               <div key={index} className="flex items-start">
     :                    ^^^^^^^^^^^
 474 |                 <div
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:523:21]
 522 |                   <div
 523 |                     key={index}
     :                     ^^^^^^^^^^^
 524 |                     className="flex items-center justify-between text-sm"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:554:28]
 553 |                     (intervention, index) => (
 554 |                       <div key={index} className="text-sm">
     :                            ^^^^^^^^^^^
 555 |                         <div className="flex justify-between">
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
    ,-[src/components/others/background-paths.tsx:74:21]
 73 |             {words.map((word, wordIndex) => (
 74 |               <span key={wordIndex} className="inline-block mr-4 last:mr-0">
    :                     ^^^^^^^^^^^^^^^
 75 |                 {word.split('').map((letter, letterIndex) => (
    `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useCallback has a missing dependency: 'processFile'
    ,-[src/components/demo/DataIngestionDemo.tsx:72:6]
 71 |     })
 72 |   }, [])
    :      ^^
 73 | 
    `----
  help: Either include it or remove the dependency array.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/queue.ts:219:55]
 218 |         )
 219 |         jobStrings = pendingJobsWithScores.map((item: any) => item.value)
     :                                                       ^^^
 220 |         break
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/queue.ts:252:43]
 251 |         const pendingJobs = await redis.zrange(this.queueKey, 0, -1)
 252 |         jobIds = pendingJobs.map((jobStr: any) => JSON.parse(jobStr).id)
     :                                           ^^^
 253 |         break
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/queue.ts:268:22]
 267 |           .filter(
 268 |             (jobStr: any) => JSON.parse(jobStr).status === JobStatus.CANCELLED,
     :                      ^^^
 269 |           )
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/queue.ts:270:25]
 269 |           )
 270 |           .map((jobStr: any) => JSON.parse(jobStr).id)
     :                         ^^^
 271 |         break
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/queue.ts:323:16]
 322 |     const cancelledCount = allFailedJobs.filter(
 323 |       (jobStr: any) => JSON.parse(jobStr).status === JobStatus.CANCELLED,
     :                ^^^
 324 |     ).length
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatientProfileService.ts:121:31]
 120 |     sessionId?: string,
 121 |     metadata?: Record<string, any>,
     :                               ^^^
 122 |   ): Promise<PatientProfile | null> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/demo/FHEDemo.tsx:61:41]
 60 |           if ('getEncryptionMode' in fheService) {
 61 |             const mode = (fheService as any).getEncryptionMode()
    :                                         ^^^
 62 |             setEncryptionMode(mode)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/demo/FHEDemo.tsx:75:58]
 74 |           if ('rotateKeys' in fheService) {
 75 |             const keyRotationInfo = await (fheService as any).rotateKeys()
    :                                                          ^^^
 76 |             setKeyId(keyRotationInfo)
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/demo/FHEDemo.tsx:165:41]
 164 |         if ('processEncrypted' in fheService) {
 165 |           result = await (fheService as any).processEncrypted(
     :                                         ^^^
 166 |             encryptedMessage,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/demo/FHEDemo.tsx:210:43]
 209 |         if ('rotateKeys' in fheService) {
 210 |           newKeyId = await (fheService as any).rotateKeys()
     :                                           ^^^
 211 |         } else {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/anonymizationPipeline.ts:15:42]
 14 | // Types
 15 | export interface AnonymizationResult<T = any> {
    :                                          ^^^
 16 |   anonymized: T
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/anonymizationPipeline.ts:43:41]
 42 |  */
 43 | export async function anonymizeData<T = any>(
    :                                         ^^^
 44 |   input: string | T,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:19:32]
 18 | async function initializeEngine() {
 19 |   if (!(biasDetectionEngine as any).isInitialized) {
    :                                ^^^
 20 |     await biasDetectionEngine.initialize()
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:89:23]
 88 |           const { sessions, user, request } = job.payload as {
 89 |             sessions: any[]
    :                       ^^^
 90 |             user: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:90:19]
 89 |             sessions: any[]
 90 |             user: any
    :                   ^^^
 91 |             request: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:91:22]
 90 |             user: any
 91 |             request: any
    :                      ^^^
 92 |           }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:109:42]
 108 |             options,
 109 |           } = job.payload as { sessions: any[]; timeRange: any; options: any }
     :                                          ^^^
 110 |           const report = await (
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:109:60]
 108 |             options,
 109 |           } = job.payload as { sessions: any[]; timeRange: any; options: any }
     :                                                            ^^^
 110 |           const report = await (
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:109:74]
 108 |             options,
 109 |           } = job.payload as { sessions: any[]; timeRange: any; options: any }
     :                                                                          ^^^
 110 |           const report = await (
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:111:36]
 110 |           const report = await (
 111 |             biasDetectionEngine as any
     :                                    ^^^
 112 |           )._generateBiasReportInternal(reportSessions, timeRange, options)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-case-declarations): Unexpected lexical declaration in case block.
    ,-[src/lib/jobs/worker.ts:88:11]
 87 |           // Assuming payload contains { sessions: TherapeuticSession[], user: any, request: any }
 88 |           const { sessions, user, request } = job.payload as {
    :           ^^^^^
 89 |             sessions: any[]
    `----

  x eslint(no-case-declarations): Unexpected lexical declaration in case block.
    ,-[src/lib/jobs/worker.ts:93:11]
 92 |           }
 93 |           const results = await biasDetectionEngine.analyzeSessionsBatch(
    :           ^^^^^
 94 |             sessions,
    `----

  x eslint(no-case-declarations): Unexpected lexical declaration in case block.
     ,-[src/lib/jobs/worker.ts:105:11]
 104 |           // Assuming payload contains { sessions: TherapeuticSession[], timeRange: any, options: any }
 105 |           const {
     :           ^^^^^
 106 |             sessions: reportSessions,
     `----

  x eslint(no-case-declarations): Unexpected lexical declaration in case block.
     ,-[src/lib/jobs/worker.ts:110:11]
 109 |           } = job.payload as { sessions: any[]; timeRange: any; options: any }
 110 |           const report = await (
     :           ^^^^^
 111 |             biasDetectionEngine as any
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/security/pii/index.ts:365:27]
 364 |       // Ensure FHE service is available
 365 |       if (!(fheService as any).isInitialized?.()) {
     :                           ^^^
 366 |         throw new Error('FHE service not initialized')
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/security/pii/index.ts:370:44]
 369 |       // Process encrypted data using FHE operations
 370 |       const result = (await (fheService as any).processEncrypted?.(
     :                                            ^^^
 371 |         encryptedText,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/security/backup/recovery-testing.ts:182:27]
 181 |             verificationSteps: tc.dataVerification.map((dv) => {
 182 |               const step: any = {
     :                           ^^^
 183 |                 id: generateUUID(),
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/security/backup/recovery-testing.ts:893:22]
 892 | 
 893 |           const ret: any = {
     :                      ^^^
 894 |             step: step.id,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:10:29]
  9 |   user_id: string
 10 |   metadata?: Record<string, any>
    :                             ^^^
 11 |   categories?: string[]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:37:29]
 36 |   appId?: string
 37 |   metadata?: Record<string, any>
    :                             ^^^
 38 |   categories?: string[]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:40:28]
 39 |   sessionId?: string
 40 |   filters?: Record<string, any>
    :                            ^^^
 41 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:50:28]
 49 |   sessionId?: string
 50 |   filters?: Record<string, any>
    :                            ^^^
 51 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:85:61]
 84 |     // Fallback for browser environments
 85 |     if (typeof globalThis !== 'undefined' && (globalThis as any).process?.env) {
    :                                                             ^^^
 86 |       return (globalThis as any).process.env[key]
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:86:29]
 85 |     if (typeof globalThis !== 'undefined' && (globalThis as any).process?.env) {
 86 |       return (globalThis as any).process.env[key]
    :                             ^^^
 87 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/memory/mem0-client.ts:95:14]
 94 |     options: RequestInit = {},
 95 |   ): Promise<any> {
    :              ^^^
 96 |     if (!this.config.apiKey) {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/memory/mem0-client.ts:146:17]
 145 | 
 146 |     const body: any = {
     :                 ^^^
 147 |       messages,
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/memory/mem0-client.ts:279:52]
 278 |    */
 279 |   async getMemoryHistory(userId?: string): Promise<any[]> {
     :                                                    ^^^
 280 |     const params = new URLSearchParams({
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/ClinicalValidationDemo.tsx:447:21]
 446 |                   <div
 447 |                     key={index}
     :                     ^^^^^^^^^^^
 448 |                     className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/middleware/monitoring.ts:21:53]
 20 |  */
 21 | export async function monitoringMiddleware(context: any, next: any) {
    :                                                     ^^^
 22 |   const startTime = Date.now()
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/middleware/monitoring.ts:21:64]
 20 |  */
 21 | export async function monitoringMiddleware(context: any, next: any) {
    :                                                                ^^^
 22 |   const startTime = Date.now()
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Catch parameter 'error' is caught but never used. Unused caught errors should start with a '_'.
    ,-[src/middleware/monitoring.ts:44:12]
 43 |     }
 44 |   } catch (error) {
    :            ^^|^^
    :              `-- 'error' is declared here
 45 |     // Ignore session parsing errors
    `----
  help: Consider handling this error.

  ! eslint(no-unused-vars): Variable 'session' is declared but never used. Unused variables should start with a '_'.
     ,-[src/lib/auth/azure-supabase-integration.ts:198:21]
 197 |       // to create a proper session. This is a simplified version.
 198 |       const { data: session, error } =
     :                     ^^^|^^^
     :                        `-- 'session' is declared here
 199 |         await this.supabase.auth.admin.generateLink({
     `----
  help: Consider removing this declaration.

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:186:20]
 185 |   while (true) {
 186 |     const choice = await showMainMenu()
     :                    ^^^^^
 187 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:191:9]
 190 |         // Generate individual dialogue (interactive)
 191 |         await runScript(GENERATE_SCRIPT)
     :         ^^^^^
 192 |         break
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:196:25]
 195 |         // Batch generate dialogues
 196 |         const options = await getBatchOptions()
     :                         ^^^^^
 197 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:199:9]
 198 |         // Pass options as command line arguments
 199 |         await runScript(BATCH_GENERATE_SCRIPT, [
     :         ^^^^^
 200 |           '--concurrency',
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:212:9]
 211 |         // Validate generated dialogues
 212 |         await runScript(VALIDATE_SCRIPT)
     :         ^^^^^
 213 |         break
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:220:30]
 219 |         // Run batch generation with default options
 220 |         const batchSuccess = await runScript(BATCH_GENERATE_SCRIPT)
     :                              ^^^^^
 221 | 
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[src/scripts/run_full_dialogue_pipeline.js:224:11]
 223 |           console.log('\n=== Step 2: Validate Dialogues ===\n')
 224 |           await runScript(VALIDATE_SCRIPT)
     :           ^^^^^
 225 |         }
     `----

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
      ,-[src/components/demo/ResultsExportDemo.tsx:1297:15]
 1296 |                 {exportFormats.map((format) => (
 1297 | ,->               <div
 1298 | |                   key={format.id}
 1299 | |                   className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
 1300 | |                     selectedFormats.includes(format.id)
 1301 | |                       ? 'border-blue-500 bg-blue-50'
 1302 | |                       : 'border-gray-200 hover:border-gray-300'
 1303 | |                   }`}
 1304 | |                   onClick={() => toggleFormatSelection(format.id)}
 1305 | `->               >
 1306 |                     <div className="flex items-start justify-between mb-3">
      `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/ResultsExportDemo.tsx:1331:29]
 1330 |                       {format.features.slice(0, 2).map((feature, index) => (
 1331 |                         <li key={index} className="flex items-start gap-1">
      :                             ^^^^^^^^^^^
 1332 |                           <span className="text-blue-500">•</span>
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/ResultsExportDemo.tsx:1674:35]
 1673 |                                 <li
 1674 |                                   key={index}
      :                                   ^^^^^^^^^^^
 1675 |                                   className="flex items-start gap-1"
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/ResultsExportDemo.tsx:1775:33]
 1774 |                               <div
 1775 |                                 key={index}
      :                                 ^^^^^^^^^^^
 1776 |                                 className={`p-3 rounded-lg border ${statusColors[category.status]}`}
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/ResultsExportDemo.tsx:1835:33]
 1834 |                               <li
 1835 |                                 key={index}
      :                                 ^^^^^^^^^^^
 1836 |                                 className="flex items-start gap-1"
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/ResultsExportDemo.tsx:2295:27]
 2294 |                         <div
 2295 |                           key={index}
      :                           ^^^^^^^^^^^
 2296 |                           className="flex items-center gap-1 text-xs text-gray-600"
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/scripts/analyze-performance.ts:29:18]
 28 |   // })
 29 |   const metrics: any[] = [] // Temporary empty array
    :                  ^^^
 30 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/scripts/test-breach-notification.ts:156:63]
 155 |         console.log(
 156 |           `- Severity: ${getSeverityColor(options.severity as any)(options.severity)}`,
     :                                                               ^^^
 157 |         )
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1222:19]
 1221 |                 <div
 1222 |                   key={index}
      :                   ^^^^^^^^^^^
 1223 |                   className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1990:33]
 1989 |                               <li
 1990 |                                 key={index}
      :                                 ^^^^^^^^^^^
 1991 |                                 className="text-xs text-gray-700 flex items-start gap-1"
      `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'calculateMetrics'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:185:6]
 184 |     calculateMetrics(initialCategories)
 185 |   }, [])
     :      ^^
 186 | 
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'categories', and 'calculateMetrics'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:195:6]
 194 |     calculateMetrics(updatedCategories)
 195 |   }, [targetTotal])
     :      ^^^^^^^^^^^^^
 196 | 
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'realTimeInterval', and 'calculateMetrics'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:243:6]
 242 |           }
 243 |   }, [isRealTimeMode, balancingSpeed, targetTotal])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 244 | 
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'pushBalanceUpdate'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:270:6]
 269 |         }
 270 | ,->   }, [
 271 | |       categories,
 272 | |       autoBalanceThreshold,
 273 | |       isRealTimeMode,
 274 | |       targetTotal,
 275 | |       enableLiveIntegration,
 276 | `->   ])
 277 |     
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has missing dependencies: 'syncWithKnowledgeBalancer', and 'fetchLiveData'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:289:6]
 288 |     }
 289 |   }, [enableLiveIntegration])
     :      ^^^^^^^^^^^^^^^^^^^^^^^
 290 | 
     `----
  help: Either include it or remove the dependency array.

  ! eslint-plugin-react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'pushBalanceUpdate'
     ,-[src/components/demo/CategoryBalancingDemo.tsx:296:6]
 295 |     }
 296 |   }, [categories, enableLiveIntegration])
     :      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 297 | 
     `----
  help: Either include it or remove the dependency array.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/CategoryBalancingDemo.tsx:681:15]
 680 |             <div className="space-y-2">
 681 |               <label className="text-sm font-medium text-gray-700">
     :               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 682 |                 Real-Time Mode
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/CategoryBalancingDemo.tsx:713:15]
 712 |             <div className="space-y-2">
 713 |               <label className="text-sm font-medium text-gray-700">
     :               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 714 |                 Balancing Speed
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/CategoryBalancingDemo.tsx:735:15]
 734 |             <div className="space-y-2">
 735 |               <label className="text-sm font-medium text-gray-700">
     :               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 736 |                 Auto-Balance Threshold
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/CategoryBalancingDemo.tsx:757:15]
 756 |             <div className="space-y-2">
 757 |               <label className="text-sm font-medium text-gray-700">
     :               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 758 |                 Quick Actions
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
     ,-[src/components/demo/CategoryBalancingDemo.tsx:982:15]
 981 |             <div className="flex items-center gap-2">
 982 |               <label className="text-sm font-medium text-gray-700">
     :               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 983 |                 Target Total Items:
     `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1036:25]
 1035 |                       <div className="flex items-center justify-between mb-2">
 1036 |                         <label className="text-sm font-medium text-gray-700">
      :                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 1037 |                           Target Ratio
      `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1453:17]
 1452 |               <div className="space-y-2">
 1453 |                 <label className="text-sm font-medium text-gray-700">
      :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 1454 |                   Quality Priority Weight
      `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1473:17]
 1472 |               <div className="space-y-2">
 1473 |                 <label className="text-sm font-medium text-gray-700">
      :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 1474 |                   Quantity Priority Weight
      `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
      ,-[src/components/demo/CategoryBalancingDemo.tsx:1493:17]
 1492 |               <div className="space-y-2">
 1493 |                 <label className="text-sm font-medium text-gray-700">
      :                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 1494 |                   Quick Presets
      `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

Found 519 warnings and 78 errors.
Finished in 159ms on 1545 files using 16 threads.
