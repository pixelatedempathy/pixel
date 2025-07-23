
  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/react-three-fiber.d.ts:22:14]
 21 |     flat?: boolean
 22 |     events?: any // TODO: Define proper event types
    :              ^^^
 23 |     eventSource?: HTMLElement | React.MutableRefObject<HTMLElement>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/gray-matter.d.ts:2:39]
 1 | declare module 'gray-matter' {
 2 |   export interface GrayMatterFile<T = any> {
   :                                       ^^^
 3 |     data: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/gray-matter.d.ts:3:11]
 2 |   export interface GrayMatterFile<T = any> {
 3 |     data: any
   :           ^^^
 4 |     content: T
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/gray-matter.d.ts:17:32]
 16 |       excerpt_separator?: string
 17 |       engines?: Record<string, any>
    :                                ^^^
 18 |       language?: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/gray-matter.d.ts:26:13]
 25 |       content: T,
 26 |       data: any,
    :             ^^^
 27 |       options?: { language?: string; delimiters?: [string, string] },
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/gray-matter.d.ts:35:34]
 34 |         excerpt_separator?: string
 35 |         engines?: Record<string, any>
    :                                  ^^^
 36 |         language?: string
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/react-three-drei.d.ts:5:40]
 4 | 
 5 |   export const OrbitControls: React.FC<any>
   :                                        ^^^
 6 |   export const Text: React.FC<{
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/react-three-drei.d.ts:11:20]
 10 |     fontSize?: number
 11 |     [key: string]: any
    :                    ^^^
 12 |   }>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-unused-vars): Catch parameter 'e' is caught but never used.
    ,-[vite.config.js:15:12]
 14 |     return JSON.parse(fs.readFileSync('./src/cdn-asset-map.json', 'utf-8'))
 15 |   } catch (e) {
    :            |
    :            `-- 'e' is declared here
 16 |     return {}
    `----
  help: Consider handling this error.

  x eslint(no-unused-vars): Catch parameter 'error' is caught but never used.
    ,-[ai/tools/generate_dialogues.js:54:12]
 53 |     }
 54 |   } catch (error) {
    :            ^^|^^
    :              `-- 'error' is declared here
 55 |     console.error('✗ Ollama is not installed or not in PATH')
    `----
  help: Consider handling this error.

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[ai/tools/generate_dialogues.js:227:28]
 226 |     // Let the user select a prompt
 227 |     const selectedPrompt = await selectPrompt(prompts)
     :                            ^^^^^
 228 |     if (!selectedPrompt) {
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[ai/tools/generate_dialogues.js:240:24]
 239 |       // Generate and save the dialogue
 240 |       const dialogue = await generateDialogue(selectedPrompt)
     :                        ^^^^^
 241 |       const outputPath = saveDialogue(selectedPrompt, dialogue)
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
     ,-[ai/tools/generate_dialogues.js:248:24]
 247 |         const rl = createInterface()
 248 |         const answer = await new Promise((resolve) => {
     :                        ^^^^^
 249 |           rl.question(
     `----

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/migrate.js:54:25]
 53 |       // Execute the SQL against the database
 54 |       const { error } = await supabase.rpc('exec_sql', { sql_query: sql })
    :                         ^^^^^
 55 | 
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/admin/backup/BackupRecoveryTab.tsx:145:21]
 144 |       toast.success('Recovery test completed successfully!')
 145 |     } catch (error: any) {
     :                     ^^^
 146 |       console.error('Recovery test failed:', error)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x Expected `;` but found `Identifier`
     ,-[scripts/load-test.ts:279:13]
 278 | 
 279 |   interface LoadTestReport {
     :             ^^^^^^^|^^^^^^
     :                    `-- `;` expected
 280 |     timestamp: string;
     `----

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/AIChatReact.tsx:105:15]
 104 |             <div
 105 |               key={index}
     :               ^^^^^^^^^^^
 106 |               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/@types/scheduler-tracing.d.ts:3:18]
 2 |   // Add any required type declarations here if known
 3 |   const tracing: any
   :                  ^^^
 4 |   export default tracing
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/lib/services/redis/__tests__/vitest.setup.ts:25:7]
 24 |           'toBeRedisError' | 'toBeInRedis' | 'toExistInRedis' | 'toHaveTTL'
 25 | ,->     > {
 26 | |       // Add any additional assertion methods here
 27 | `->   }
 28 |     
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/lib/services/redis/__tests__/vitest.setup.ts:34:7]
 33 |           'toBeRedisError' | 'toBeInRedis' | 'toExistInRedis' | 'toHaveTTL'
 34 | ,->     > {
 35 | |       // Add any additional asymmetric matchers here
 36 | `->   }
 37 |     }
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/scheduler.d.ts:16:55]
 15 | 
 16 |   export function unstable_clear(callback: Function): any
    :                                                       ^^^
 17 |   export function unstable_getCurrent(): Set<Interaction>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/scheduler.d.ts:23:14]
 22 |     callback: Function,
 23 |     ...args: any[]
    :              ^^^
 24 |   ): any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/scheduler.d.ts:24:6]
 23 |     ...args: any[]
 24 |   ): any
    :      ^^^
 25 |   export function unstable_wrap(callback: Function): Function
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
    ,-[src/types/scheduler.d.ts:16:44]
 15 | 
 16 |   export function unstable_clear(callback: Function): any
    :                                            ^^^^^^^^
 17 |   export function unstable_getCurrent(): Set<Interaction>
    `----
  help: Prefer explicitly defining any function parameters and return type.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
    ,-[src/types/scheduler.d.ts:22:15]
 21 |     timestamp: number,
 22 |     callback: Function,
    :               ^^^^^^^^
 23 |     ...args: any[]
    `----
  help: Prefer explicitly defining any function parameters and return type.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
    ,-[src/types/scheduler.d.ts:25:43]
 24 |   ): any
 25 |   export function unstable_wrap(callback: Function): Function
    :                                           ^^^^^^^^
 26 | }
    `----
  help: Prefer explicitly defining any function parameters and return type.

  x typescript-eslint(no-unsafe-function-type): The `Function` type accepts any function-like value.
    ,-[src/types/scheduler.d.ts:25:54]
 24 |   ): any
 25 |   export function unstable_wrap(callback: Function): Function
    :                                                      ^^^^^^^^
 26 | }
    `----
  help: Prefer explicitly defining any function parameters and return type.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/global.d.ts:56:29]
 55 |   namespace Vi {
 56 |     interface Assertion<T = any> {
    :                             ^^^
 57 |       toHaveNoViolations(): Promise<void>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Interface 'FeedbackServiceMethods' is declared but never used.
   ,-[src/simulator/hooks/useRealTimeAnalysis.ts:6:11]
 5 | // Define interface for FeedbackService methods we're using
 6 | interface FeedbackServiceMethods {
   :           ^^^^^^^^^^^|^^^^^^^^^^
   :                      `-- 'FeedbackServiceMethods' is declared here
 7 |   getEmotionState(): EmotionState
   `----
  help: Consider removing this declaration.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/session/SessionAnalysis.tsx:50:29]
 49 |         const formattedData = Array.isArray(data)
 50 |           ? data.map((item: any) => {
    :                             ^^^
 51 |               const baseData = {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1061:62]
 1060 |    */
 1061 |   async getBiasAnalysisBySession(sessionId: string): Promise<any | null> {
      :                                                              ^^^
 1062 |     const { data, error } = await supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1113:14]
 1112 |     },
 1113 |   ): Promise<any[]> {
      :              ^^^
 1114 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1223:15]
 1222 |     limit?: number
 1223 |   }): Promise<any[]> {
      :               ^^^
 1224 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1288:14]
 1287 |     message: string
 1288 |     details: any
      :              ^^^
 1289 |     notificationChannels?: string[]
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1327:15]
 1326 |     offset?: number
 1327 |   }): Promise<any[]> {
      :               ^^^
 1328 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Interface 'BiasLayerResults' is declared but never used.
     ,-[src/lib/db/ai/repository.ts:994:15]
 993 |     // Define interfaces for bias analysis types
 994 |     interface BiasLayerResults {
     :               ^^^^^^^^|^^^^^^^
     :                       `-- 'BiasLayerResults' is declared here
 995 |       textLayer?: {
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'DemographicData' is declared but never used.
      ,-[src/lib/db/ai/repository.ts:1015:15]
 1014 | 
 1015 |     interface DemographicData {
      :               ^^^^^^^|^^^^^^^
      :                      `-- 'DemographicData' is declared here
 1016 |       gender?: Record<string, number>
      `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'DemographicGroups' is declared but never used.
      ,-[src/lib/db/ai/repository.ts:1023:15]
 1022 | 
 1023 |     interface DemographicGroups {
      :               ^^^^^^^^|^^^^^^^^
      :                       `-- 'DemographicGroups' is declared here
 1024 |       affected: string[]
      `----
  help: Consider removing this declaration.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/db/KVStore.ts:8:30]
 7 |   private storagePrefix: string
 8 |   private cache: Map<string, any> = new Map()
   :                              ^^^
 9 |   private useLocalStorage: boolean
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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro.d.ts:26:30]
 25 |     }
 26 |     webkitSpeechRecognition: any
    :                              ^^^
 27 |     SpeechRecognition: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro.d.ts:27:24]
 26 |     webkitSpeechRecognition: any
 27 |     SpeechRecognition: any
    :                        ^^^
 28 |     SpeechGrammarList: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro.d.ts:28:24]
 27 |     SpeechRecognition: any
 28 |     SpeechGrammarList: any
    :                        ^^^
 29 |   }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro.d.ts:92:18]
 91 | declare module '*.md' {
 92 |   const Content: any
    :                  ^^^
 93 |   export { Content }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/demo/ClientFacingDemo.tsx:285:45]
 284 |                   <div className="space-y-3">
 285 |                     {sampleFiles.map((file, index) => (
     :                                             ^^|^^
     :                                               `-- 'index' is declared here
 286 |                       <div
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:356:37]
 355 |                         {selectedConversation.encodedSymptoms.map(
 356 |                           (symptom, index) => (
     :                                     ^^|^^
     :                                       `-- 'index' is declared here
 357 |                             <div
     `----
  help: Consider removing this parameter.

  ! eslint-plugin-react-hooks(exhaustive-deps): React hook useEffect depends on `fetchData`, which changes every render
    ,-[src/lib/hooks/useMultidimensionalEmotions.ts:38:9]
 37 |   // Helper to fetch data
 38 |   const fetchData = async () => {
    :         ^^^^|^^^^
    :             `-- `fetchData` is declared here
 39 |     setIsLoading(true)
    `----
     ,-[src/lib/hooks/useMultidimensionalEmotions.ts:108:7]
 107 |     fetchData()
 108 |   }, [fetchData])
     :       ^^^^|^^^^
     :           `-- it will always cause this hook to re-evaluate
 109 | 
     `----
  help: Try memoizing this variable with `useRef` or `useCallback`.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/DemographicBalancingDisplay.tsx:418:20]
 417 |             .map((stat, index) => (
 418 |               <div key={index} className="flex items-start gap-2">
     :                    ^^^^^^^^^^^
 419 |                 <span className="text-indigo-500">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint-plugin-react-hooks(exhaustive-deps): React hook useEffect depends on `currentStats`, which changes every render
    ,-[src/components/demo/DemographicBalancingDisplay.tsx:58:9]
 57 |   // Simulated current dataset statistics
 58 |   const currentStats = {
    :         ^^^^^^|^^^^^
    :               `-- `currentStats` is declared here
 59 |     age: {
    `----
     ,-[src/components/demo/DemographicBalancingDisplay.tsx:244:36]
 243 |     demographicTargets.background, 
 244 |     demographicTargets.occupation, currentStats
     :                                    ^^^^^^|^^^^^
     :                                          `-- it will always cause this hook to re-evaluate
 245 |   ])
     `----
  help: Try memoizing this variable with `useRef` or `useCallback`.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/jsx.d.ts:6:18]
 5 |       class?: string
 6 |       children?: any
   :                  ^^^
 7 |       [key: string]: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/jsx.d.ts:7:22]
 6 |       children?: any
 7 |       [key: string]: any
   :                      ^^^
 8 |     }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:12:18]
 11 |       class?: string
 12 |       children?: any
    :                  ^^^
 13 |       [key: string]: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:13:22]
 12 |       children?: any
 13 |       [key: string]: any
    :                      ^^^
 14 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:18:18]
 17 |       class?: string
 18 |       children?: any
    :                  ^^^
 19 |       [key: string]: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:19:22]
 18 |       children?: any
 19 |       [key: string]: any
    :                      ^^^
 20 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:24:18]
 23 |       class?: string
 24 |       children?: any
    :                  ^^^
 25 |       [key: string]: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/jsx.d.ts:25:22]
 24 |       children?: any
 25 |       [key: string]: any
    :                      ^^^
 26 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/commander.d.ts:3:18]
 2 |   export class Command {
 3 |     [x: string]: any
   :                  ^^^
 4 |     [x: string]: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/commander.d.ts:4:18]
 3 |     [x: string]: any
 4 |     [x: string]: any
   :                  ^^^
 5 |     [x: string]: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/commander.d.ts:5:18]
 4 |     [x: string]: any
 5 |     [x: string]: any
   :                  ^^^
 6 |     [x: string]: any
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/commander.d.ts:6:18]
 5 |     [x: string]: any
 6 |     [x: string]: any
   :                  ^^^
 7 |     constructor(name?: string)
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/commander.d.ts:14:30]
 13 |     parse(argv?: string[]): this
 14 |     opts(): { [key: string]: any }
    :                              ^^^
 15 |   }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/types/scheduler-tracing.d.ts:2:29]
 1 | declare module 'scheduler/tracing' {
 2 |   export type Interaction = any
   :                             ^^^
 3 | }
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

  ! eslint(no-unused-vars): Interface 'BreachResponse' is declared but never used.
    ,-[src/load-tests/breach-notification.load.ts:10:11]
  9 | // Define response types for better type safety
 10 | interface BreachResponse {
    :           ^^^^^^^|^^^^^^
    :                  `-- 'BreachResponse' is declared here
 11 |   id: string
    `----
  help: Consider removing this declaration.

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

  x Expected `;` but found `Identifier`
     ,-[src/lib/security/backup/recovery-testing.ts:144:11]
 143 |    */
 144 | interface TestCaseConfig {
     :           ^^^^^^^|^^^^^^
     :                  `-- `;` expected
 145 |   name: string;
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/content/content.d.ts:17:12]
 16 |     streams: StreamsSchema
 17 |     feeds: any
    :            ^^^
 18 |     releases: ProjectsSchema
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/security/backup/storage-providers/google-cloud.ts:21:21]
 20 |   maxRetries?: number;
 21 |   promise?: Promise<any>;
    :                     ^^^
 22 |   timeout?: number;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[tests/security/run-security-tests.ts:107:56]
 106 |  */
 107 | async function runTestSuite(suite: TestSuite): Promise<any> {
     :                                                        ^^^
 108 |   return new Promise((resolve, reject) => {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[tests/security/run-security-tests.ts:163:34]
 162 |  */
 163 | function generateReport(results: any[]): string {
     :                                  ^^^
 164 |   return `
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/logging/build-safe-logger.mock.ts:6:36]
 5 | export interface Logger {
 6 |   info: (message: string, ...args: any[]) => void;
   :                                    ^^^
 7 |   warn: (message: string, ...args: any[]) => void;
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/logging/build-safe-logger.mock.ts:7:36]
 6 |   info: (message: string, ...args: any[]) => void;
 7 |   warn: (message: string, ...args: any[]) => void;
   :                                    ^^^
 8 |   error: (message: string, ...args: any[]) => void;
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/logging/build-safe-logger.mock.ts:8:37]
 7 |   warn: (message: string, ...args: any[]) => void;
 8 |   error: (message: string, ...args: any[]) => void;
   :                                     ^^^
 9 |   debug: (message: string, ...args: any[]) => void;
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/logging/build-safe-logger.mock.ts:9:37]
  8 |   error: (message: string, ...args: any[]) => void;
  9 |   debug: (message: string, ...args: any[]) => void;
    :                                     ^^^
 10 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/logging/build-safe-logger.mock.ts:17:38]
 16 |   return {
 17 |     info: (message: string, ...args: any[]) => {
    :                                      ^^^
 18 |       console.log(`[${component}] INFO: ${message}`, ...args);
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/logging/build-safe-logger.mock.ts:20:38]
 19 |     },
 20 |     warn: (message: string, ...args: any[]) => {
    :                                      ^^^
 21 |       console.warn(`[${component}] WARN: ${message}`, ...args);
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/logging/build-safe-logger.mock.ts:23:39]
 22 |     },
 23 |     error: (message: string, ...args: any[]) => {
    :                                       ^^^
 24 |       console.error(`[${component}] ERROR: ${message}`, ...args);
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/logging/build-safe-logger.mock.ts:26:39]
 25 |     },
 26 |     debug: (message: string, ...args: any[]) => {
    :                                       ^^^
 27 |       console.debug(`[${component}] DEBUG: ${message}`, ...args);
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Interface 'ImageInfo' is declared but never used.
   ,-[tests/accessibility/screen-reader.spec.ts:3:11]
 2 | // These interfaces are used in the test file for type safety
 3 | interface ImageInfo {
   :           ^^^^|^^^^
   :               `-- 'ImageInfo' is declared here
 4 |   src: string;
   `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'InputInfo' is declared but never used.
    ,-[tests/accessibility/screen-reader.spec.ts:9:11]
  8 | 
  9 | interface InputInfo {
    :           ^^^^|^^^^
    :               `-- 'InputInfo' is declared here
 10 |   tagName: string;
    `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'ElementInfo' is declared but never used.
    ,-[tests/accessibility/screen-reader.spec.ts:17:11]
 16 | 
 17 | interface ElementInfo {
    :           ^^^^^|^^^^^
    :                `-- 'ElementInfo' is declared here
 18 |   tagName: string;
    `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'HeadingInfo' is declared but never used.
    ,-[tests/accessibility/screen-reader.spec.ts:25:11]
 24 | 
 25 | interface HeadingInfo {
    :           ^^^^^|^^^^^
    :                `-- 'HeadingInfo' is declared here
 26 |   level: number;
    `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'AriaIssue' is declared but never used.
    ,-[tests/accessibility/screen-reader.spec.ts:31:11]
 30 | 
 31 | interface AriaIssue {
    :           ^^^^|^^^^
    :               `-- 'AriaIssue' is declared here
 32 |   element: string;
    `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'LiveRegion' is declared but never used.
    ,-[tests/accessibility/screen-reader.spec.ts:38:11]
 37 | 
 38 | interface LiveRegion {
    :           ^^^^^|^^^^
    :                `-- 'LiveRegion' is declared here
 39 |   value: string;
    `----
  help: Consider removing this declaration.

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:235:11]
 234 |           position={cube.position}
 235 |           matrix={cube.rotationMatrix}
     :           ^^^^^^
 236 |           matrixAutoUpdate={false}
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:236:11]
 235 |           matrix={cube.rotationMatrix}
 236 |           matrixAutoUpdate={false}
     :           ^^^^^^^^^^^^^^^^
 237 |         >
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:247:15]
 246 |               color="#ffffff"
 247 |               emissiveColor="#111111"
     :               ^^^^^^^^^^^^^
 248 |               roughnessValue={0.2}
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:248:15]
 247 |               emissiveColor="#111111"
 248 |               roughnessValue={0.2}
     :               ^^^^^^^^^^^^^^
 249 |               metalnessValue={0.8}
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:249:15]
 248 |               roughnessValue={0.2}
 249 |               metalnessValue={0.8}
     :               ^^^^^^^^^^^^^^
 250 |             />
     `----
  help: Remove unknown property

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/search.d.ts:12:37]
 11 | export interface ISearchClient {
 12 |   search: (query: string, options?: any) => SearchDocument[]
    :                                     ^^^
 13 |   importDocuments: (documents: SearchDocument[]) => void
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/search.d.ts:17:35]
 16 | export declare class SearchClient implements ISearchClient {
 17 |   search(query: string, options?: any): SearchDocument[]
    :                                   ^^^
 18 |   importDocuments(docs: SearchDocument[]): void
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/ui/table-types.ts:14:27]
 13 |   /** Custom cell renderer */
 14 |   Cell?: (props: { value: any; row: T }) => React.ReactNode
    :                           ^^^
 15 |   /** Column width (CSS value) */
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x Expected `,` but found `private`
     ,-[src/lib/metaaligner/core/objective-weighting.ts:503:3]
 502 | 
 503 |   private static extractScores(
     :   ^^^|^^^
     :      `-- `,` expected
 504 |     evaluationResults: Record<string, ObjectiveEvaluationResult>,
     `----

  x eslint-plugin-jsx-a11y(prefer-tag-over-role): Prefer `button` over `role` attribute `button`.
    ,-[src/components/ui/alert-dialog.tsx:91:7]
 90 |       }}
 91 |       role="button"
    :       ^^^^^^^^^^^^^
 92 |       tabIndex={0}
    `----
  help: Replace HTML elements with `role` attribute `button` to corresponding semantic HTML tag `button`.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:523:21]
 522 |                   <div
 523 |                     key={index}
     :                     ^^^^^^^^^^^
 524 |                     className="flex items-center justify-between text-sm"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:472:54]
 471 |           <div className="space-y-3 mb-4">
 472 |             {activeGoal.checkpoints.map((checkpoint, index) => (
     :                                                      ^^|^^
     :                                                        `-- 'index' is declared here
 473 |               <div key={`checkpoint-${checkpoint.id}`} className="flex items-start">
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Parameter 'index' is declared but never used. Unused parameters should start with a '_'.
     ,-[src/components/therapy/TherapeuticGoalsTracker.tsx:553:36]
 552 |                   getRelatedInterventions(activeGoal.id).map(
 553 |                     (intervention, index) => (
     :                                    ^^|^^
     :                                      `-- 'index' is declared here
 554 |                       <div key={`intervention-${intervention.type}-${intervention.timestamp.toISOString()}`} className="text-sm">
     `----
  help: Consider removing this parameter.

  ! eslint(no-unused-vars): Variable 'beforeFocusElement' is declared but never used. Unused variables should start with a '_'.
     ,-[tests/accessibility/keyboard-navigation.spec.ts:118:17]
 117 |           // Get current focused element for comparison
 118 |           const beforeFocusElement = await pageContext.evaluate(
     :                 ^^^^^^^^^|^^^^^^^^
     :                          `-- 'beforeFocusElement' is declared here
 119 |             () => document.activeElement
     `----
  help: Consider removing this declaration.

  x eslint(no-unused-vars): Catch parameter '_' is caught but never used.
    ,-[src/buffer-polyfill.js:12:10]
 11 |   BufferPolyfill = bufferPkg.Buffer
 12 | } catch (_) {
    :          |
    :          `-- '_' is declared here
 13 |   // Fallback implementation if package import fails
    `----
  help: Consider handling this error.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-endpoint-scanner.ts:36:13]
 35 |   name: string
 36 |   payload?: any
    :             ^^^
 37 |   headers?: Record<string, string>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

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

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/ui/dialog.tsx:77:5]
 76 |       return (
 77 | ,->     <div
 78 | |         ref={ref}
 79 | |         className={cn(
 80 | |           'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0',
 81 | |           className,
 82 | |         )}
 83 | |         onClick={() => onOpenChange(false)}
 84 | |         {...props}
 85 | `->     />
 86 |       )
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(heading-has-content): Headings must have content and the content must be accessible by a screen reader.
    ,-[src/components/ui/card/card.tsx:23:5]
 22 |   ({ className, ...props }, ref) => (
 23 |     <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
    :     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 24 |   )
    `----
  help: Provide screen reader accessible content when using heading elements.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/components/ui/switch/switch.tsx:8:18]
 7 |   labelPosition?: 'left' | 'right';
 8 |   [key: string]: any;
   :                  ^^^
 9 | }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-extend-native): Element prototype is read-only, properties should not be added.
    ,-[tests/e2e/user-experience.spec.ts:42:7]
 41 |           // Override appendChild with a function that calls the original and then checks for transitions
 42 | ,->       Element.prototype.appendChild = function (element) {
 43 | |           const result = originalAppendChild.call(this, element)
 44 | |           window._checkTransition(element)
 45 | |           return result
 46 | `->       }
 47 |         })
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-web-vulnerability-scanner.ts:51:10]
 50 |   headers: Record<string, string>
 51 |   data?: any
    :          ^^^
 52 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x Unexpected token. Did you mean `{'>'}` or `&gt;`?
     ,-[src/components/ui/form/MobileFormValidation.tsx:418:33]
 417 |   }),
 418 |   custom: <T>(test: (value: T) => boolean, message: string): ValidationRule<T> => ({
     :                                 ^
 419 |     test,
     `----

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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test/vitest.d.ts:10:27]
  9 | declare module 'vitest' {
 10 |   interface Assertion<T = any> extends CustomMatchers<T> {}
    :                           ^^^
 11 |   interface AsymmetricMatchersContaining extends CustomMatchers {}
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/test/vitest.d.ts:10:58]
  9 | declare module 'vitest' {
 10 |   interface Assertion<T = any> extends CustomMatchers<T> {}
    :                                                          ^^
 11 |   interface AsymmetricMatchersContaining extends CustomMatchers {}
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/test/vitest.d.ts:11:65]
 10 |   interface Assertion<T = any> extends CustomMatchers<T> {}
 11 |   interface AsymmetricMatchersContaining extends CustomMatchers {}
    :                                                                 ^^
 12 | }
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/test/mocks/handlers.ts:31:16]
 30 | export const HttpResponse = {
 31 |   json: (data: any) => ({
    :                ^^^
 32 |     ok: true,
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Parameter 'interval' is declared but never used. Unused parameters should start with a '_'.
   ,-[src/lib/services/notification/NotificationService.mock.ts:8:25]
 7 |    */
 8 |   async startProcessing(interval: number): Promise<void> {
   :                         ^^^^|^^^
   :                             `-- 'interval' is declared here
 9 |     // Mock implementation
   `----
  help: Consider removing this parameter.

  x Expected `;` but found `Identifier`
     ,-[src/lib/security/pii/index.ts:357:11]
 356 | 
 357 | interface FHEService {
     :           ^^^^^|^^^^
     :                `-- `;` expected
 358 |   isInitialized(): boolean;
     `----

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must be associated with a control.
    ,-[src/components/ui/label.tsx:8:3]
  7 |     >(({ className, ...props }, ref) => (
  8 | ,->   <label
  9 | |       ref={ref}
 10 | |       className={cn(
 11 | |         'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
 12 | |         className,
 13 | |       )}
 14 | |       {...props}
 15 | `->   />
 16 |     ))
    `----
  help: Either give the label a `htmlFor` attribute with the id of the associated control, or wrap the label around the control.

  x eslint(no-unused-expressions): Disallow unused expressions
     ,-[src/components/ui/table.tsx:290:11]
 289 |           e.preventDefault();
 290 |           onSort && onSort();
     :           ^^^^^^^^^^^^^^^^^^^
 291 |         }
     `----
  help: Consider removing this expression

  ! eslint(no-unused-vars): Class 'ProductionPatternRecognitionService' is declared but never used.
    ,-[src/lib/ai/services/PatternRecognitionFactory.ts:21:7]
 20 | 
 21 | class ProductionPatternRecognitionService implements PatternRecognitionService {
    :       ^^^^^^^^^^^^^^^^^|^^^^^^^^^^^^^^^^^
    :                        `-- 'ProductionPatternRecognitionService' is declared here
 22 |   private readonly SIGNIFICANCE_THRESHOLD = 0.05
    `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Variable 'clusters' is declared but never used. Unused variables should start with a '_'.
    ,-[src/lib/ai/services/PatternRecognitionFactory.ts:51:13]
 50 |       // Apply clustering algorithms to identify patterns
 51 |       const clusters =
    :             ^^^^|^^^
    :                 `-- 'clusters' is declared here
 52 |         await this.performHierarchicalClustering(temporalFeatures)
    `----
  help: Consider removing this declaration.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/models/registry.ts:863:52]
 862 |         requirements.capabilities!.every((cap) =>
 863 |           model.legacyCapabilities.includes(cap as any),
     :                                                    ^^^
 864 |         ),
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/models/registry.ts:1099:36]
 1098 |     name: extended.name,
 1099 |     provider: extended.provider as any,
      :                                    ^^^
 1100 |     version: extended.version,
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

  ! eslint(block-scoped-var): 'ar' is used outside of binding context.
    ,-[src/components/admin/backup/BackupLocationTab.js:21:40]
 20 |     if (pack || arguments.length === 2)
 21 |       for (var i = 0, l = from.length, ar; i < l; i++) {
    :                                        ^|
    :                                         `-- It is declared in a different scope here
 22 |         if (ar || !(i in from)) {
 23 |           if (!ar) ar = Array.prototype.slice.call(from, 0, i)
 24 |           ar[i] = from[i]
 25 |         }
 26 |       }
 27 |     return to.concat(ar || Array.prototype.slice.call(from))
    :                      ^|
    :                       `-- 'ar' is used here
 28 |   }
    `----
  help: Variable 'ar' is used outside its declaration block. Declare it outside the block or use 'let'/'const'.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatientProfileService.ts:121:31]
 120 |     sessionId?: string,
 121 |     metadata?: Record<string, any>,
     :                               ^^^
 122 |   ): Promise<PatientProfile | null> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/types.ts:72:28]
 71 |    */
 72 |   metadata: Record<string, any>
    :                            ^^^
 73 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

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
    ,-[src/lib/jobs/worker.ts:19:32]
 18 | async function initializeEngine() {
 19 |   if (!(biasDetectionEngine as any).isInitialized) {
    :                                ^^^
 20 |     await biasDetectionEngine.initialize()
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:86:21]
 85 |       // Declare variables outside of case blocks to avoid no-case-declarations issues
 86 |       let sessions: any[]
    :                     ^^^
 87 |       let user: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:87:17]
 86 |       let sessions: any[]
 87 |       let user: any
    :                 ^^^
 88 |       let request: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:88:20]
 87 |       let user: any
 88 |       let request: any
    :                    ^^^
 89 |       let timeRange: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:89:22]
 88 |       let request: any
 89 |       let timeRange: any
    :                      ^^^
 90 |       let options: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:90:20]
 89 |       let timeRange: any
 90 |       let options: any
    :                    ^^^
 91 |       let results: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:91:20]
 90 |       let options: any
 91 |       let results: any
    :                    ^^^
 92 |       let report: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:92:19]
 91 |       let results: any
 92 |       let report: any
    :                   ^^^
 93 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:98:23]
 97 |           ;({ sessions, user, request } = job.payload as {
 98 |             sessions: any[]
    :                       ^^^
 99 |             user: any
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:99:19]
  98 |             sessions: any[]
  99 |             user: any
     :                   ^^^
 100 |             request: any
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:100:22]
  99 |             user: any
 100 |             request: any
     :                      ^^^
 101 |           })
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:119:23]
 118 |           } = job.payload as {
 119 |             sessions: any[]
     :                       ^^^
 120 |             timeRange: any
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:120:24]
 119 |             sessions: any[]
 120 |             timeRange: any
     :                        ^^^
 121 |             options: any
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:121:22]
 120 |             timeRange: any
 121 |             options: any
     :                      ^^^
 122 |           })
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:124:36]
 123 |           report = await (
 124 |             biasDetectionEngine as any
     :                                    ^^^
 125 |           )._generateBiasReportInternal(sessions, timeRange, options)
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-useless-rename): Do not rename import, export, or destructured assignments to the same name
     ,-[src/lib/jobs/worker.ts:115:13]
 114 |           ;({
 115 |             sessions: sessions,
     :             ^^^^^^^^^^^^^^^^^^
 116 |             timeRange,
     `----
  help: Use the variable's original name or rename it to a different name

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/breach-analytics.ts:370:12]
 369 |   timeframe: AnalyticsTimeframe,
 370 | ): Promise<any> {
     :            ^^^
 371 |   try {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:356:32]
 355 |     eventName: string,
 356 |     properties: Record<string, any> = {},
     :                                ^^^
 357 |   ): void {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:382:32]
 381 |     eventName: string,
 382 |     properties: Record<string, any> = {},
     :                                ^^^
 383 |   ): Promise<void> {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:450:32]
 449 |     eventName: string,
 450 |     properties: Record<string, any> = {},
     :                                ^^^
 451 |   ): void {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/universal-demo-analytics.ts:464:27]
 463 | 
 464 |   public getPageConfig(): any {
     :                           ^^^
 465 |     return this.pageConfig
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/analytics/risk.ts:21:33]
 20 | const getBreachDataService = () => {
 21 |   const { BreachDataService } = require('./breach')
    :                                 ^^^^^^^^^^^^^^^^^^^
 22 |   return BreachDataService
    `----
  help: Do not use CommonJS `require` calls

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/compliance.ts:13:48]
 12 |  */
 13 | export async function calculateScore(breaches: any[]): Promise<number> {
    :                                                ^^^
 14 |   // Mock implementation
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

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

  x Expected `:` but found `{`
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:48:8]
 47 |     ageBiasYoungPatient,
 48 | import {
    :        |
    :        `-- `:` expected
 49 |   ageBiasYoungPatient,
    `----

  x Expected corresponding JSX closing tag for 'button'.
     ,-[src/components/demos/bias-detection/PresetScenarioSelector.tsx:138:12]
 137 |         {filteredScenarios.map((scenario) => (
 138 |           <button
     :            ^^^^^^
 139 |             key={scenario.id}
 140 |             className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md w-full text-left ${
 141 |               selectedScenario?.id === scenario.id
 142 |                 ? 'border-blue-500 bg-blue-50'
 143 |                 : 'border-gray-200 hover:border-gray-300'
 144 |             } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
 145 |             onClick={() => !disabled && onScenarioSelect(scenario)}
 146 |             onKeyDown={(e) => {
 147 |               if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
 148 |                 e.preventDefault();
 149 |                 onScenarioSelect(scenario);
 150 |               }
 151 |             }}
 152 |             tabIndex={disabled ? -1 : 0}
 153 |             aria-label={`Select scenario: ${scenario.title}`}
 154 |             aria-disabled={disabled}
 155 |             onMouseEnter={() => setPreviewScenario(scenario)}
 156 |             onMouseLeave={() => setPreviewScenario(null)}
 157 |           >
 158 |             {/* Header */}
 159 |             <div className="flex items-start justify-between mb-2">
 160 |               <h4 className="font-semibold text-gray-900">{scenario.name}</h4>
 161 |               <div className="flex space-x-2">
 162 |                 <span
 163 |                   className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scenario.category)}`}
 164 |                 >
 165 |                   {scenario.category}
 166 |                 </span>
 167 |                 <span
 168 |                   className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskLevelStyle(scenario.riskLevel)}`}
 169 |                 >
 170 |                   {scenario.riskLevel}
 171 |                 </span>
 172 |               </div>
 173 |             </div>
 174 | 
 175 |             {/* Description */}
 176 |             <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
 177 | 
 178 |             {/* Demographics */}
 179 |             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
 180 |               <div className="text-xs">
 181 |                 <span className="text-gray-500">Age:</span>
 182 |                 <span className="ml-1 font-medium">
 183 |                   {scenario.demographics.age}
 184 |                 </span>
 185 |               </div>
 186 |               <div className="text-xs">
 187 |                 <span className="text-gray-500">Gender:</span>
 188 |                 <span className="ml-1 font-medium">
 189 |                   {scenario.demographics.gender}
 190 |                 </span>
 191 |               </div>
 192 |               <div className="text-xs">
 193 |                 <span className="text-gray-500">Ethnicity:</span>
 194 |                 <span className="ml-1 font-medium">
 195 |                   {scenario.demographics.ethnicity}
 196 |                 </span>
 197 |               </div>
 198 |               <div className="text-xs">
 199 |                 <span className="text-gray-500">Language:</span>
 200 |                 <span className="ml-1 font-medium">
 201 |                   {scenario.demographics.primaryLanguage}
 202 |                 </span>
 203 |               </div>
 204 |             </div>
 205 | 
 206 |             {/* Content Preview */}
 207 |             <div className="bg-gray-50 rounded p-3 mb-3">
 208 |               <div className="text-xs text-gray-500 mb-1">Sample Content:</div>
 209 |               <div className="text-sm text-gray-700 italic">
 210 |                 &quot;
 211 |                 {scenario.content.length > 100
 212 |                   ? scenario.content.substring(0, 100) + '...'
 213 |                   : scenario.content}
 214 |                 &quot;
 215 |               </div>
 216 |             </div>
 217 | 
 218 |             {/* Learning Objectives */}
 219 |             <div className="border-t pt-3">
 220 |               <div className="text-xs text-gray-500 mb-2">
 221 |                 Learning Objectives:
 222 |               </div>
 223 |               <ul className="text-xs text-gray-600 space-y-1">
 224 |                 {scenario.learningObjectives
 225 |                   .slice(0, 2)
 226 |                   .map((objective, index) => (
 227 |                     <li key={index} className="flex items-start">
 228 |                       <span className="text-blue-500 mr-1">•</span>
 229 |                       {objective}
 230 |                     </li>
 231 |                   ))}
 232 |                 {scenario.learningObjectives.length > 2 && (
 233 |                   <li className="text-gray-500 italic">
 234 |                     +{scenario.learningObjectives.length - 2} more objectives
 235 |                   </li>
 236 |                 )}
 237 |               </ul>
 238 |             </div>
 239 | 
 240 |             {/* Selection Indicator */}
 241 |             {selectedScenario?.id === scenario.id && (
 242 |               <div className="mt-3 flex items-center text-blue-600">
 243 |                 <svg
 244 |                   className="w-4 h-4 mr-1"
 245 |                   fill="currentColor"
 246 |                   viewBox="0 0 20 20"
 247 |                 >
 248 |                   <path
 249 |                     fillRule="evenodd"
 250 |                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
 251 |                     clipRule="evenodd"
 252 |                   />
 253 |                 </svg>
 254 |                 <span className="text-sm font-medium">Selected</span>
 255 |               </div>
 256 |             )}
 257 |           </div>
     :             ^^^
 258 |         ))}
     `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/models/patient.ts:11:29]
 10 |   sessionId?: string // Optional: to group messages by session
 11 |   metadata?: Record<string, any> // Optional: for additional context like emotional tone, detected themes, etc.
    :                             ^^^
 12 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

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

Found 150 warnings and 25 errors.
Finished in 371ms on 1472 files using 16 threads.
