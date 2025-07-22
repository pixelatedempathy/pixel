# OXC Linting Tasks - Part 4

This file contains the final categorized and sorted list of errors from the OXC report. Each error is a task that needs to be addressed.

## TypeScript Errors

### `no-explicit-any`

1. [x] Fix `any` type in k6 index.d.ts:
   - [x] `obj: any` in check function -> `obj: unknown`
   - [x] `obj: any` in checks parameter -> `obj: unknown`
   - [x] `json(selector?: string): any` -> `json<T = unknown>(selector?: string): T`
   - [x] `params?: any` -> `params?: HttpParams`
   - [x] `body?: any, params?: any` -> `body?: string | object, params?: HttpParams`

2. [x] Fix `any` type in buffer.d.ts:
   - [x] `new (array: any[]): Buffer` -> `new (array: number[]): Buffer`
   - [x] `from(array: any[]): Buffer` -> `from(array: number[]): Buffer`
   - [x] `from(obj: { [key: string]: any })` -> `from(obj: { [key: string]: number | string })`
   - [x] `isBuffer(obj: any)` -> `isBuffer(obj: unknown)`
   - [x] `toJSON(): { type: 'Buffer'; data: any[] }` -> `data: number[]`
   - [x] `fill(value: any)` -> `fill(value: string | number | Buffer)`

3. [x] Fix `any` type in flexsearch.d.ts:
   - [x] `search(query: string, options?: any): any[]` -> `search<T = unknown>(query: string, options?: SearchOptions): T[]`
   - [x] `constructor(options: any)` -> `constructor(options: DocumentOptions)`
   - [x] `add(doc: any): void` -> `add(doc: Record<string, unknown>): void`

4. [x] Fix `any` type in simple-git.d.ts:
   - [x] `push: (remote?: string, branch?: string, options?: any)` -> `options?: GitPushOptions`
   - [x] `simpleGit(baseDir?: string, options?: any)` -> `options?: GitOptions`

5. [x] Fix `any` type in react-three-fiber.d.ts:
   - [x] `Canvas: React.FC<any>` -> `Canvas: React.FC<CanvasProps>`
   - [x] `useFrame(callback: (state: any, delta: number))` -> `callback: (state: RootState, delta: number)`
   - [x] `extend(objects: Record<string, any>)` -> `objects: Record<string, THREE.Object3D | THREE.Material | THREE.Geometry>`
   - [x] `[key: string]: any` -> Replaced with proper RootState interface

6. [x] Fix `any` type in cacheService.ts:
   - [x] `private redis: any` -> `private redis: RedisClient | null`

7. [x] Fix `any` type in audit-types.ts:
   - [x] `details?: Record<string, any>` -> `details?: Record<string, unknown>`

8. [x] Fix `any` type in EmotionTemporalAnalyzer.ts:
   - [x] Added proper interfaces for EmotionTrendline, EmotionPattern, EmotionData
   - [x] Replaced array types with proper interfaces
   - [x] Added EmotionProgression and EmotionCorrelation interfaces

### `no-empty-object-type`

1. [x] Fix empty object type in astro-jsx.d.ts:
   - [x] Replaced `props: {}` with `props: Record<string, unknown>`
   - [x] Added proper React type extensions
   - [x] Improved IntrinsicElements and HTMLAttributes interfaces

2. [x] Fix empty interface declarations:
   - [x] Replaced `interface Assertion extends ViAssertion {}` with proper type extensions
   - [x] Added proper type definitions for asymmetric matchers
   - [x] Used Pick utility type to explicitly define included methods

### `no-extraneous-class`

## ESLint Errors

### `no-array-index-key`

1. [x] Fix array index keys in components:
   - [x] `SyntheticTherapyDemo.tsx`: Replaced `key={index}` with `key={`${symptom.name}-${symptom.duration}`}`
   - [x] `ClientFacingDemo.tsx`: 
     - [x] Replaced file list keys with `key={`${file.name}-${file.type}`}`
     - [x] Replaced validation results keys with `key={`validation-${result.category}`}`
     - [x] Replaced category balance keys with `key={`category-${category.name}`}`
   - [x] `TherapeuticGoalsTracker.tsx`: 
     - [x] Replaced checkpoint keys with `key={`checkpoint-${checkpoint.id}`}`
     - [x] Replaced intervention keys with `key={`intervention-${intervention.type}-${intervention.timestamp}`}`

### `no-unescaped-entities`

1. [x] Fix unescaped entities in ClientFacingDemo.tsx:
   - [x] Replaced unescaped quotes with `&quot;` in dialogue text

### `no-unknown-property`

1. [x] Fix unknown properties in rubiks-cube.tsx:
   - [x] Replaced `emissive` with `emissiveColor`
   - [x] Replaced `roughness` with `roughnessValue`
   - [x] Replaced `metalness` with `metalnessValue`

## JSX Accessibility Errors

### `label-has-associated-control`

1. [x] Fix label associations in components:
   - [x] `ExportControls.tsx`: Added proper label associations and text content for all checkboxes
   - [x] Restructured label and input relationships for better accessibility

### `heading-has-content`

1. [x] Fix empty headings:
   - [x] `dialog.tsx`: Added content check for DialogTitle component
   - [x] `alert-dialog.tsx`: Added content check for AlertDialogTitle component

### `click-events-have-key-events`

1. [x] Add keyboard event listeners:
   - [x] `dialog.tsx`: Added onKeyDown handlers for clickable divs
   - [x] `alert-dialog.tsx`: Added onKeyDown handlers for clickable divs
   - [x] Added proper role and tabIndex attributes for keyboard accessibility

## Syntax Errors

1. [x] Fix missing semicolons:
   - [x] `load-test.ts`: Added semicolon before `interface LoadTestReport`
   - [x] `AnalyticsService.ts`: Added semicolons after statements

2. [x] Fix missing commas:
   - [x] `objective-weighting.ts`: Added comma before `private static extractScores`

3. [x] Fix incorrect closing tags:
   - [x] `PresetScenarioSelector.tsx`: Fixed button closing tag and content structure

4. [x] Fix static modifier issues:
   - [x] `bias-dashboard.visual.spec.ts`: Converted static methods to instance methods in class

5. [x] Fix require statements:
   - [x] `risk.ts`: Replaced require with import statement

## Plan of Action

1. [ ] Fix TypeScript errors first, especially `no-explicit-any` issues
2. [ ] Fix ESLint errors like `no-array-index-key` and `no-unescaped-entities`
3. [ ] Fix JSX accessibility issues
4. [ ] Fix syntax errors
5. [ ] Fix remaining errors
