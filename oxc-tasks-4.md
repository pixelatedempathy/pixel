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

### `no-empty-object-type`

1. [ ] Fix empty object type in astro-jsx.d.ts:
   - [ ] `props: {}`

2. [ ] Fix empty interface declarations:
   - [ ] `interface Assertion extends ViAssertion {}`
   - [ ] `interface Assertion<T = any> extends CustomMatchers<T> {}`
   - [ ] `interface AsymmetricMatchersContaining extends CustomMatchers {}`

### `no-extraneous-class`

## ESLint Errors

### `no-array-index-key`

1. [ ] Fix array index keys in components:
   - [ ] `SyntheticTherapyDemo.tsx`: Replace `key={index}` with unique identifier
   - [ ] `ClientFacingDemo.tsx`: Replace multiple instances of `key={index}` with unique identifiers
   - [ ] `TherapeuticGoalsTracker.tsx`: Replace multiple instances of `key={index}` with unique identifiers

### `no-unescaped-entities`

1. [ ] Fix unescaped entities in ClientFacingDemo.tsx:
   - [ ] Replace `"` with `&quot;` or `&ldquo;` in dialogue text

### `no-unknown-property`

1. [ ] Fix unknown properties in rubiks-cube.tsx:
   - [ ] Remove or fix `matrix` property
   - [ ] Remove or fix `matrixAutoUpdate` property
   - [ ] Remove or fix `emissive` property
   - [ ] Remove or fix `roughness` property
   - [ ] Remove or fix `metalness` property

## JSX Accessibility Errors

### `label-has-associated-control`

1. [ ] Fix label associations in components:
   - [ ] `ExportControls.tsx`: Add proper label associations for all checkboxes
   - [ ] `label.tsx`: Add htmlFor attribute or wrap label around control
   - [ ] Ensure all form labels have accessible text content

### `heading-has-content`

1. [ ] Fix empty headings:
   - [ ] `dialog.tsx`: Ensure h2 element has content
   - [ ] `alert-dialog.tsx`: Ensure h2 element has content

### `click-events-have-key-events`

1. [ ] Add keyboard event listeners:
   - [ ] `dialog.tsx`: Add keyboard events to clickable div elements
   - [ ] `alert-dialog.tsx`: Add keyboard events to clickable div elements

## Syntax Errors

1. [ ] Fix missing semicolons:
   - [ ] `load-test.ts`: Add semicolon before `interface LoadTestReport`
   - [ ] `AnalyticsService.ts`: Add semicolon after async statement

2. [ ] Fix missing commas:
   - [ ] `objective-weighting.ts`: Add comma before `private static extractScores`

3. [ ] Fix incorrect closing tags:
   - [ ] `PresetScenarioSelector.tsx`: Fix button closing tag mismatch

4. [ ] Fix static modifier issues:
   - [ ] `bias-dashboard.visual.spec.ts`: Remove or fix static modifiers

5. [ ] Fix require statements:
   - [ ] `risk.ts`: Replace require with import statement

## Plan of Action

1. [ ] Fix TypeScript errors first, especially `no-explicit-any` issues
2. [ ] Fix ESLint errors like `no-array-index-key` and `no-unescaped-entities`
3. [ ] Fix JSX accessibility issues
4. [ ] Fix syntax errors
5. [ ] Fix remaining errors
