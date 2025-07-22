
  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/@types/k6/index.d.ts:8:10]
 7 |   export function check(
 8 |     obj: any,
   :          ^^^
 9 |     checks: Record<string, (obj: any) => boolean>,
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/k6/index.d.ts:9:34]
  8 |     obj: any,
  9 |     checks: Record<string, (obj: any) => boolean>,
    :                                  ^^^
 10 |   ): boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/k6/index.d.ts:22:30]
 21 |     body: string
 22 |     json(selector?: string): any
    :                              ^^^
 23 |   }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/k6/index.d.ts:25:45]
 24 | 
 25 |   export function get(url: string, params?: any): Response
    :                                             ^^^
 26 |   export function post(url: string, body?: any, params?: any): Response
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/k6/index.d.ts:26:44]
 25 |   export function get(url: string, params?: any): Response
 26 |   export function post(url: string, body?: any, params?: any): Response
    :                                            ^^^
 27 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/k6/index.d.ts:26:58]
 25 |   export function get(url: string, params?: any): Response
 26 |   export function post(url: string, body?: any, params?: any): Response
    :                                                          ^^^
 27 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react-hooks(exhaustive-deps): React hook useEffect depends on `fetchData`, which changes every render
    ,-[src/lib/hooks/useMultidimensionalEmotions.ts:38:9]
 37 |   // Helper to fetch data
 38 |   const fetchData = async () => {
    :         ^^^^|^^^^
    :             `-- `fetchData` is declared here
 39 |     setIsLoading(true)
    `----
     ,-[src/lib/hooks/useMultidimensionalEmotions.ts:110:7]
 109 |     fetchData()
 110 |   }, [fetchData])
     :       ^^^^|^^^^
     :           `-- it will always cause this hook to re-evaluate
 111 | 
     `----
  help: Try memoizing this variable with `useRef` or `useCallback`.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/@types/buffer.d.ts:7:17]
 6 |     new (arrayBuffer: ArrayBuffer): Buffer
 7 |     new (array: any[]): Buffer
   :                 ^^^
 8 |     new (buffer: Buffer): Buffer
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/buffer.d.ts:11:17]
 10 |     from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer
 11 |     from(array: any[]): Buffer
    :                 ^^^
 12 |     from(buffer: Buffer): Buffer
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/buffer.d.ts:13:32]
 12 |     from(buffer: Buffer): Buffer
 13 |     from(obj: { [key: string]: any }): Buffer
    :                                ^^^
 14 |     alloc(
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/buffer.d.ts:21:19]
 20 |     allocUnsafeSlow(size: number): Buffer
 21 |     isBuffer(obj: any): boolean
    :                   ^^^
 22 |     compare(buf1: Buffer, buf2: Buffer): number
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/buffer.d.ts:38:39]
 37 |     toString(encoding?: string, start?: number, end?: number): string
 38 |     toJSON(): { type: 'Buffer'; data: any[] }
    :                                       ^^^
 39 |     equals(otherBuffer: Buffer): boolean
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/@types/buffer.d.ts:113:17]
 112 |     writeDoubleBE(value: number, offset: number, noAssert?: boolean): number
 113 |     fill(value: any, offset?: number, end?: number): this
     :                 ^^^
 114 |     indexOf(
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/flexsearch.d.ts:36:37]
 35 |     remove(id: string | number): void
 36 |     search(query: string, options?: any): any[]
    :                                     ^^^
 37 |   }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/flexsearch.d.ts:36:43]
 35 |     remove(id: string | number): void
 36 |     search(query: string, options?: any): any[]
    :                                           ^^^
 37 |   }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/flexsearch.d.ts:66:37]
 65 |     add(id: string | number, content: string): void
 66 |     search(query: string, options?: any): any[]
    :                                     ^^^
 67 |     remove(id: string | number): void
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/@types/flexsearch.d.ts:66:43]
 65 |     add(id: string | number, content: string): void
 66 |     search(query: string, options?: any): any[]
    :                                           ^^^
 67 |     remove(id: string | number): void
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/@types/flexsearch.d.ts:102:26]
 101 |   export class Document {
 102 |     constructor(options: any)
     :                          ^^^
 103 |     add(doc: any): void
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/@types/flexsearch.d.ts:103:14]
 102 |     constructor(options: any)
 103 |     add(doc: any): void
     :              ^^^
 104 |     remove(id: string | number): void
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/@types/flexsearch.d.ts:105:37]
 104 |     remove(id: string | number): void
 105 |     search(query: string, options?: any): any[]
     :                                     ^^^
 106 |   }
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/@types/flexsearch.d.ts:105:43]
 104 |     remove(id: string | number): void
 105 |     search(query: string, options?: any): any[]
     :                                           ^^^
 106 |   }
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/ai/SyntheticTherapyDemo.tsx:358:31]
 357 |                             <div
 358 |                               key={index}
     :                               ^^^^^^^^^^^
 359 |                               className="rounded-lg border p-4 space-y-2"
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/simple-git.d.ts:5:56]
 4 |     commit: (message: string) => Promise<void>
 5 |     push: (remote?: string, branch?: string, options?: any) => Promise<void>
   :                                                        ^^^
 6 |     // Add other methods as needed
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/simple-git.d.ts:9:57]
  8 | 
  9 |   export function simpleGit(baseDir?: string, options?: any): SimpleGit
    :                                                         ^^^
 10 | }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/react-three-fiber.d.ts:5:33]
 4 | 
 5 |   export const Canvas: React.FC<any>
   :                                 ^^^
 6 |   export function useFrame(callback: (state: any, delta: number) => void): void
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/react-three-fiber.d.ts:6:46]
 5 |   export const Canvas: React.FC<any>
 6 |   export function useFrame(callback: (state: any, delta: number) => void): void
   :                                              ^^^
 7 |   export function extend(objects: Record<string, any>): void
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[types/react-three-fiber.d.ts:7:50]
 6 |   export function useFrame(callback: (state: any, delta: number) => void): void
 7 |   export function extend(objects: Record<string, any>): void
   :                                                  ^^^
 8 |   export function useThree(): {
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[types/react-three-fiber.d.ts:14:20]
 13 |     viewport: { width: number; height: number }
 14 |     [key: string]: any
    :                    ^^^
 15 |   }
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
   ,-[src/@types/scheduler-tracing.d.ts:3:18]
 2 |   // Add any required type declarations here if known
 3 |   const tracing: any
   :                  ^^^
 4 |   export default tracing
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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/ai/mental-llama/evidence/types.ts:32:28]
 31 |    */
 32 |   context?: Record<string, any>
    :                            ^^^
 33 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-unused-vars): Catch parameter 'e' is caught but never used.
    ,-[vite.config.js:15:12]
 14 |     return JSON.parse(fs.readFileSync('./src/cdn-asset-map.json', 'utf-8'));
 15 |   } catch (e) {
    :            |
    :            `-- 'e' is declared here
 16 |     return {};
    `----
  help: Consider handling this error.

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

  x Expected `;` but found `Identifier`
     ,-[scripts/load-test.ts:279:11]
 278 | 
 279 | interface LoadTestReport {
     :           ^^^^^^^|^^^^^^
     :                  `-- `;` expected
 280 |   timestamp: string;
     `----

  x Expected `,` but found `private`
     ,-[src/lib/metaaligner/core/objective-weighting.ts:503:3]
 502 | 
 503 |   private static extractScores(
     :   ^^^|^^^
     :      `-- `,` expected
 504 |     evaluationResults: Record<string, ObjectiveEvaluationResult>,
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
   ,-[src/types/astro-jsx.d.ts:8:27]
 7 |     interface IntrinsicElements {
 8 |       [elemName: string]: any
   :                           ^^^
 9 |     }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro-jsx.d.ts:13:22]
 12 |       class?: string
 13 |       [key: string]: any
    :                      ^^^
 14 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro-jsx.d.ts:17:20]
 16 |     // Add Element type for components that return JSX.Element
 17 |     type Element = any
    :                    ^^^
 18 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/types/astro-jsx.d.ts:21:15]
 20 |     interface ElementClass {
 21 |       render: any
    :               ^^^
 22 |     }
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x typescript-eslint(no-empty-object-type): Do not use the empty object type literal.
    ,-[src/types/astro-jsx.d.ts:26:14]
 25 |     interface ElementAttributesProperty {
 26 |       props: {}
    :              ^^
 27 |     }
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  x typescript-eslint(no-empty-object-type): Do not use an empty interface declaration.
    ,-[src/lib/services/redis/__tests__/vitest.setup.ts:21:43]
 20 | declare module 'vitest' {
 21 |   interface Assertion extends ViAssertion {}
    :                                           ^^
 22 |   // Ensure we're not accidentally using JestAssertion
    `----
  help: To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.

  ! eslint(no-unused-vars): Type alias 'AsymmetricMatchersContaining' is declared but never used.
    ,-[src/lib/services/redis/__tests__/vitest.setup.ts:23:8]
 22 |   // Ensure we're not accidentally using JestAssertion
 23 |   type AsymmetricMatchersContaining = Assertion
    :        ^^^^^^^^^^^^^^|^^^^^^^^^^^^^
    :                      `-- 'AsymmetricMatchersContaining' is declared here
 24 | }
    `----
  help: Consider removing this declaration.

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

  ! eslint(no-unused-vars): Interface 'BreachResponse' is declared but never used.
    ,-[src/load-tests/breach-notification.load.ts:10:11]
  9 | // Define response types for better type safety
 10 | interface BreachResponse {
    :           ^^^^^^^|^^^^^^
    :                  `-- 'BreachResponse' is declared here
 11 |   id: string;
    `----
  help: Consider removing this declaration.

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
    ,-[src/lib/services/cacheService.ts:65:18]
 64 | class VercelKVCacheService implements CacheService {
 65 |   private redis: any = null
    :                  ^^^
 66 |   public connected = true
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x Expected a semicolon or an implicit semicolon after a statement, but found none
    ,-[src/lib/services/analytics/AnalyticsService.ts:96:8]
 95 |    */
 96 |   async trackEvent(data: EventData): Promise<string> {
    :        ^
 97 |     try {
    `----
  help: Try insert a semicolon here

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
   ,-[src/lib/audit-types.ts:5:28]
 4 |   timestamp: Date
 5 |   details?: Record<string, any>
   :                            ^^^
 6 | }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

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

  x eslint-plugin-jsx-a11y(heading-has-content): Headings must have content and the content must be accessible by a screen reader.
     ,-[src/components/ui/dialog.tsx:148:3]
 147 |     const DialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h2'>>(({ className, ...props }, ref) => (
 148 | ,->   <h2
 149 | |       ref={ref}
 150 | |       className={cn(
 151 | |         'text-lg font-semibold leading-none tracking-tight',
 152 | |         className,
 153 | |       )}
 154 | |       {...props}
 155 | `->   />
 156 |     ))
     `----
  help: Provide screen reader accessible content when using heading elements.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/ui/dialog.tsx:73:5]
 72 |       return (
 73 | ,->     <div
 74 | |         ref={ref}
 75 | |         className={cn(
 76 | |           'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0',
 77 | |           className,
 78 | |         )}
 79 | |         onClick={() => onOpenChange(false)}
 80 | |         {...props}
 81 | `->     />
 82 |       )
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/ui/dialog.tsx:96:7]
  95 |           <DialogOverlay />
  96 | ,->       <div
  97 | |           ref={ref}
  98 | |           className={cn(
  99 | |             'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg',
 100 | |             className,
 101 | |           )}
 102 | |           onClick={(e) => e.stopPropagation()}
 103 | |           {...props}
 104 | `->       >
 105 |             {children}
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

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
    ,-[src/lib/ai/models/patient.ts:11:29]
 10 |   sessionId?: string // Optional: to group messages by session
 11 |   metadata?: Record<string, any> // Optional: for additional context like emotional tone, detected themes, etc.
    :                             ^^^
 12 | }
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

  x Expected `;` but found `Identifier`
     ,-[src/lib/security/backup/recovery-testing.ts:144:11]
 143 |    */
 144 | interface TestCaseConfig {
     :           ^^^^^^^|^^^^^^
     :                  `-- `;` expected
 145 |   name: string;
     `----

  x eslint(no-unused-expressions): Disallow unused expressions
     ,-[src/components/ui/table.tsx:160:11]
 159 |           e.preventDefault();
 160 |           onSort && onSort();
     :           ^^^^^^^^^^^^^^^^^^^
 161 |         }
     `----
  help: Consider removing this expression

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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/lib/db/KVStore.ts:8:30]
 7 |   private storagePrefix: string
 8 |   private cache: Map<string, any> = new Map()
   :                              ^^^
 9 |   private useLocalStorage: boolean
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

  x Expected `;` but found `Identifier`
     ,-[src/lib/security/pii/index.ts:357:11]
 356 | 
 357 | interface FHEService {
     :           ^^^^^|^^^^
     :                `-- `;` expected
 358 |   isInitialized(): boolean;
     `----

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
     ,-[src/components/ui/rubiks-cube.tsx:245:51]
 244 |           >
 245 |             <meshStandardMaterial color="#ffffff" emissive="#111111" roughness={0.2} metalness={0.8} />
     :                                                   ^^^^^^^^
 246 |           </RoundedBox>
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:245:70]
 244 |           >
 245 |             <meshStandardMaterial color="#ffffff" emissive="#111111" roughness={0.2} metalness={0.8} />
     :                                                                      ^^^^^^^^^
 246 |           </RoundedBox>
     `----
  help: Remove unknown property

  ! eslint-plugin-react(no-unknown-property): Unknown property found
     ,-[src/components/ui/rubiks-cube.tsx:245:86]
 244 |           >
 245 |             <meshStandardMaterial color="#ffffff" emissive="#111111" roughness={0.2} metalness={0.8} />
     :                                                                                      ^^^^^^^^^
 246 |           </RoundedBox>
     `----
  help: Remove unknown property

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

  x Expected `:` but found `{`
    ,-[src/lib/ai/bias-detection/__tests__/fixtures/index.ts:48:8]
 47 |     ageBiasYoungPatient,
 48 | import {
    :        |
    :        `-- `:` expected
 49 |   ageBiasYoungPatient,
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1060:62]
 1059 |    */
 1060 |   async getBiasAnalysisBySession(sessionId: string): Promise<any | null> {
      :                                                              ^^^
 1061 |     const { data, error } = await supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1112:14]
 1111 |     },
 1112 |   ): Promise<any[]> {
      :              ^^^
 1113 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1222:15]
 1221 |     limit?: number
 1222 |   }): Promise<any[]> {
      :               ^^^
 1223 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1287:14]
 1286 |     message: string
 1287 |     details: any
      :              ^^^
 1288 |     notificationChannels?: string[]
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/db/ai/repository.ts:1326:15]
 1325 |     offset?: number
 1326 |   }): Promise<any[]> {
      :               ^^^
 1327 |     let query = supabase
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-unused-vars): Interface 'BiasLayerResults' is declared but never used.
     ,-[src/lib/db/ai/repository.ts:995:11]
 994 | // Define interfaces for bias analysis types
 995 | interface BiasLayerResults {
     :           ^^^^^^^^|^^^^^^^
     :                   `-- 'BiasLayerResults' is declared here
 996 |   textLayer?: {
     `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'DemographicData' is declared but never used.
      ,-[src/lib/db/ai/repository.ts:1014:11]
 1013 | 
 1014 | interface DemographicData {
      :           ^^^^^^^|^^^^^^^
      :                  `-- 'DemographicData' is declared here
 1015 |   gender?: Record<string, number>;
      `----
  help: Consider removing this declaration.

  ! eslint(no-unused-vars): Interface 'DemographicGroups' is declared but never used.
      ,-[src/lib/db/ai/repository.ts:1022:11]
 1021 | 
 1022 | interface DemographicGroups {
      :           ^^^^^^^^|^^^^^^^^
      :                   `-- 'DemographicGroups' is declared here
 1023 |   affected: string[];
      `----
  help: Consider removing this declaration.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/session/EmotionTrackingChart.tsx:116:61]
 115 |             value={timeRange}
 116 |             onChange={(e) => setTimeRange(e.target.value as any)}
     :                                                             ^^^
 117 |             aria-label="Select time range"
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint-plugin-jsx-a11y(heading-has-content): Headings must have content and the content must be accessible by a screen reader.
     ,-[src/components/ui/alert-dialog.tsx:140:5]
 139 |       return (
 140 | ,->     <h2
 141 | |         className={cn('text-lg font-semibold', className)}
 142 | |         {...props}
 143 | `->     />
 144 |       )
     `----
  help: Provide screen reader accessible content when using heading elements.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
    ,-[src/components/ui/alert-dialog.tsx:79:5]
 78 |       return (
 79 | ,->     <div
 80 | |         className={cn(
 81 | |           'fixed inset-0 z-50 bg-black/50 animate-in fade-in-0',
 82 | |           className
 83 | |         )}
 84 | |         onClick={() => onOpenChange(false)}
 85 | |         {...props}
 86 | `->     />
 87 |       )
    `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

  x eslint-plugin-jsx-a11y(click-events-have-key-events): Enforce a clickable non-interactive element has at least one keyboard event listener.
     ,-[src/components/ui/alert-dialog.tsx:100:7]
  99 |           <AlertDialogOverlay />
 100 | ,->       <div
 101 | |           className={cn(
 102 | |             'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]',
 103 | |             className
 104 | |           )}
 105 | |           onClick={(e) => e.stopPropagation()}
 106 | |           {...props}
 107 | `->       >
 108 |             {children}
     `----
  help: Visible, non-interactive elements with click handlers must have one of keyup, keydown, or keypress listener.

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
 400 |                       "                      &quot;Client presents with persistent worry, restlessness, and
     :                       ^
 401 |                       difficulty concentrating for the past 6 months. Symptoms
     `----

  ! eslint-plugin-react(no-unescaped-entities): `"` can be escaped with &quot; or &ldquo; or &#34; or &rdquo;
     ,-[src/components/demo/ClientFacingDemo.tsx:403:45]
 402 |                       interfere with work performance and social
 403 |                       relationships...&quot;"
     :                                             ^
 404 |                     </div>
     `----

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
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:826:43]
 825 | 
 826 |   private detectCommunicationAnomalies(): any[] {
     :                                           ^^^
 827 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:831:40]
 830 | 
 831 |   private analyzeEngagementPatterns(): any[] {
     :                                        ^^^
 832 |     // Placeholder implementation
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:875:18]
 874 |   private calculateClinicalSignificance(
 875 |     transitions: any[],
     :                  ^^^
 876 |   ): 'low' | 'medium' | 'high' {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:888:56]
 887 | 
 888 |   private generateEmotionalRecommendation(transitions: any[]): string {
     :                                                        ^^^
 889 |     const avgIntensity =
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:899:50]
 898 | 
 899 |   private shouldSuggestIntervention(transitions: any[]): boolean {
     :                                                  ^^^
 900 |     const avgIntensity =
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:906:18]
 905 |   private assessUrgencyLevel(
 906 |     transitions: any[],
     :                  ^^^
 907 |   ): 'none' | 'low' | 'medium' | 'high' | 'critical' {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatternRecognitionFactory.ts:925:47]
 924 | 
 925 |   private calculateEvidenceScore(transitions: any[]): number {
     :                                               ^^^
 926 |     return transitions.reduce((a, t) => a + t.confidence, 0) / transitions.length;
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1010:45]
 1009 |       // Extract numerical features from emotion analysis
 1010 |       const emotions = analysis.emotions as any
      :                                             ^^^
 1011 |       return [
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1197:24]
 1196 |   private calculateSeverity(
 1197 |     correlatedFactors: any[],
      :                        ^^^
 1198 |   ): 'low' | 'medium' | 'high' | 'critical' {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1216:24]
 1215 |     primaryFactor: string,
 1216 |     correlatedFactors: any[],
      :                        ^^^
 1217 |   ): string[] {
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1286:20]
 1285 |   private generateTrendPatterns(
 1286 |     decomposition: any,
      :                    ^^^
 1287 |     changePoints: any[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1287:19]
 1286 |     decomposition: any,
 1287 |     changePoints: any[],
      :                   ^^^
 1288 |     stlDecomposition: any,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1288:23]
 1287 |     changePoints: any[],
 1288 |     stlDecomposition: any,
      :                       ^^^
 1289 |     startDate: Date,
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1413:22]
 1412 |     clusters: number[],
 1413 |     networkAnalysis: any,
      :                      ^^^
 1414 |     temporalPatterns: any[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
      ,-[src/lib/ai/services/PatternRecognitionFactory.ts:1414:23]
 1413 |     networkAnalysis: any,
 1414 |     temporalPatterns: any[],
      :                       ^^^
 1415 |     sessions: TherapySession[],
      `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
   ,-[src/components/ui/switch/switch.tsx:8:18]
 7 |   labelPosition?: 'left' | 'right';
 8 |   [key: string]: any;
   :                  ^^^
 9 | }
   `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:347:11]
 346 |           {/* Analysis Results */}
 347 |           <label className="flex items-center" htmlFor="include-analysis">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 348 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:371:11]
 370 |           {/* Counterfactual Scenarios */}
 371 |           <label className="flex items-center" htmlFor="include-counterfactual">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 372 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:395:11]
 394 |           {/* Historical Comparison */}
 395 |           <label className="flex items-center" htmlFor="include-historical">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 396 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:424:11]
 423 |           {/* Recommendations */}
 424 |           <label className="flex items-center" htmlFor="include-recommendations">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 425 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  x eslint-plugin-jsx-a11y(label-has-associated-control): A form label must have accessible text.
     ,-[src/components/demos/bias-detection/ExportControls.tsx:446:11]
 445 |           {/* Demographics */}
 446 |           <label className="flex items-center" htmlFor="include-demographics">
     :           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 447 |             <input
     `----
  help: Ensure the label either has text inside it or is accessibly labelled using an attribute such as `aria-label`, or `aria-labelledby`. You can mark more attributes as accessible labels by configuring the `labelAttributes` option.

  ! eslint-plugin-react(no-array-index-key): Usage of Array index in keys is not allowed
     ,-[src/components/demo/DemographicBalancingDisplay.tsx:418:20]
 417 |             .map((stat, index) => (
 418 |               <div key={index} className="flex items-start gap-2">
     :                    ^^^^^^^^^^^
 419 |                 <span className="text-indigo-500">•</span>
     `----
  help: Use a unique data-dependent key to avoid unnecessary rerenders

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/ai/services/PatientProfileService.ts:121:31]
 120 |     sessionId?: string,
 121 |     metadata?: Record<string, any>,
     :                               ^^^
 122 |   ): Promise<PatientProfile | null> {
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
 86 |       let sessions: any[];
    :                     ^^^
 87 |       let user: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:87:17]
 86 |       let sessions: any[];
 87 |       let user: any;
    :                 ^^^
 88 |       let request: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:88:20]
 87 |       let user: any;
 88 |       let request: any;
    :                    ^^^
 89 |       let timeRange: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:89:22]
 88 |       let request: any;
 89 |       let timeRange: any;
    :                      ^^^
 90 |       let options: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:90:20]
 89 |       let timeRange: any;
 90 |       let options: any;
    :                    ^^^
 91 |       let results: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:91:20]
 90 |       let options: any;
 91 |       let results: any;
    :                    ^^^
 92 |       let report: any;
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:92:19]
 91 |       let results: any;
 92 |       let report: any;
    :                   ^^^
 93 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/jobs/worker.ts:98:23]
 97 |           ({ sessions, user, request } = job.payload as {
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
 101 |           });
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:115:23]
 114 |           ({ sessions: sessions, timeRange, options } = job.payload as { 
 115 |             sessions: any[]; 
     :                       ^^^
 116 |             timeRange: any; 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:116:24]
 115 |             sessions: any[]; 
 116 |             timeRange: any; 
     :                        ^^^
 117 |             options: any 
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:117:22]
 116 |             timeRange: any; 
 117 |             options: any 
     :                      ^^^
 118 |           });
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/jobs/worker.ts:120:36]
 119 |           report = await (
 120 |             biasDetectionEngine as any
     :                                    ^^^
 121 |           )._generateBiasReportInternal(sessions, timeRange, options);
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  x eslint(no-useless-rename): Do not rename import, export, or destructured assignments to the same name
     ,-[src/lib/jobs/worker.ts:114:14]
 113 |           // Assuming payload contains { sessions: TherapeuticSession[], timeRange: any, options: any }
 114 |           ({ sessions: sessions, timeRange, options } = job.payload as { 
     :              ^^^^^^^^^^^^^^^^^^
 115 |             sessions: any[]; 
     `----
  help: Use the variable's original name or rename it to a different name

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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/components/session/SessionAnalysis.tsx:50:29]
 49 |         const formattedData = Array.isArray(data)
 50 |           ? data.map((item: any) => {
    :                             ^^^
 51 |               const baseData = {
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(block-scoped-var): 'ar' is used outside of binding context.
    ,-[src/components/admin/backup/BackupLocationTab.js:14:74]
 13 | var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
 14 |     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    :                                                                          ^|
    :                                                                           `-- It is declared in a different scope here
 15 |         if (ar || !(i in from)) {
 16 |             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
 17 |             ar[i] = from[i];
 18 |         }
 19 |     }
 20 |     return to.concat(ar || Array.prototype.slice.call(from));
    :                      ^|
    :                       `-- 'ar' is used here
 21 | };
    `----
  help: Variable 'ar' is used outside its declaration block. Declare it outside the block or use 'let'/'const'.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/types.ts:72:28]
 71 |    */
 72 |   metadata: Record<string, any>
    :                            ^^^
 73 | 
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/lib/analytics/breach-analytics.ts:368:78]
 367 | 
 368 | export async function generateReport(timeframe: AnalyticsTimeframe): Promise<any> {
     :                                                                              ^^^
 369 |   try {
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
     ,-[src/components/admin/backup/BackupRecoveryTab.tsx:135:21]
 134 |       toast.success('Recovery test completed successfully!');
 135 |     } catch (error: any) {
     :                     ^^^
 136 |       console.error('Recovery test failed:', error);
     `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[src/lib/analytics/compliance.ts:13:48]
 12 |  */
 13 | export async function calculateScore(breaches: any[]): Promise<number> {
    :                                                ^^^
 14 |   // Mock implementation
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

  x 'static' modifier cannot be used here.
     ,-[tests/visual/bias-dashboard.visual.spec.ts:183:3]
 182 | 
 183 |   static async waitForDashboardLoad(page: Page) {
     :   ^^^^^^
 184 |     // Wait for dashboard container to be visible
     `----

  x Expected `,` but found `static`
     ,-[tests/visual/bias-dashboard.visual.spec.ts:203:3]
 202 | 
 203 |   static async hideElementsWithRandomContent(page: Page) {
     :   ^^^|^^
     :      `-- `,` expected
 204 |     // Hide elements that contain timestamps or dynamic content
     `----

  x typescript-eslint(no-require-imports): Expected "import" statement instead of "require" call
    ,-[src/lib/analytics/risk.ts:21:33]
 20 | const getBreachDataService = () => {
 21 |   const { BreachDataService } = require('./breach')
    :                                 ^^^^^^^^^^^^^^^^^^^
 22 |   return BreachDataService
    `----
  help: Do not use CommonJS `require` calls

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

  ! eslint(no-extend-native): Element prototype is read-only, properties should not be added.
    ,-[tests/e2e/user-experience.spec.ts:42:7]
 41 |           // Override appendChild with a function that calls the original and then checks for transitions
 42 | ,->       Element.prototype.appendChild = function(element) {
 43 | |           const result = originalAppendChild.call(this, element)
 44 | |           window._checkTransition(element)
 45 | |           return result
 46 | `->       }
 47 |         })
    `----

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-endpoint-scanner.ts:36:13]
 35 |   name: string
 36 |   payload?: any
    :             ^^^
 37 |   headers?: Record<string, string>
    `----
  help: Use `unknown` instead, this will force you to explicitly, and safely, assert the type is correct.

  ! eslint(no-await-in-loop): Unexpected `await` inside a loop.
    ,-[supabase/migrate.js:54:25]
 53 |       // Execute the SQL against the database
 54 |       const { error } = await supabase.rpc('exec_sql', { sql_query: sql })
    :                         ^^^^^
 55 | 
    `----

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

  ! typescript-eslint(no-explicit-any): Unexpected any. Specify a different type.
    ,-[tests/security/ai-web-vulnerability-scanner.ts:51:10]
 50 |   headers: Record<string, string>
 51 |   data?: any
    :          ^^^
 52 | }
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

Found 200 warnings and 35 errors.
Finished in 275ms on 1447 files using 16 threads.
