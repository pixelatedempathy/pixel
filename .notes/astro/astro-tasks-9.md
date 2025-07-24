# Astro Check Tasks - File 9

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Pages/demo/psychology-pipeline-processor.astro
- [ ] Fix type error: Add null check for `variants[variantKey]` before using it
- [ ] Fix DOM element access issues:
  - [ ] Add null check for `e.target` before accessing properties
  - [ ] Add type assertion for `e.target` to include `dataset` property
  - [ ] Add type assertion for `document.querySelector('[data-variant]')` to include `dataset` property
- [ ] Fix undefined `gtag` function:
  - [ ] Import or define `gtag` function
  - [ ] Add proper type definition for `gtag`
- [ ] Fix component property errors:
  - [ ] Replace `className` with `class` in all component props or update component definitions to accept `className`
  - [ ] Fix Card components:
    - [ ] Update `CardHeader` to accept `className` prop
    - [ ] Update `CardTitle` to accept `className` prop
    - [ ] Update `CardDescription` to accept `className` prop
  - [ ] Fix Badge component to accept `className` prop
  - [ ] Fix div elements to use `class` instead of `className`

## Pages/demo/security-bias-detection-engine.astro
- [ ] Fix component property errors:
  - [ ] Replace `className` with `class` in all component props or update component definitions to accept `className`
  - [ ] Fix Card components:
    - [ ] Update `Card` to accept `className` prop
    - [ ] Update `CardContent` to accept `className` prop
    - [ ] Update `CardHeader` to accept `className` prop
    - [ ] Update `CardTitle` to accept `className` prop
    - [ ] Update `CardDescription` to accept `className` prop

## Pages/demo/synthetic-therapy-session.astro
- [ ] Fix component property errors:
  - [ ] Replace `className` with `class` in all component props or update component definitions to accept `className`
  - [ ] Fix Card components:
    - [ ] Update `Card` to accept `className` prop
    - [ ] Update `CardContent` to accept `className` prop
    - [ ] Update `CardHeader` to accept `className` prop
    - [ ] Update `CardTitle` to accept `className` prop
    - [ ] Update `CardDescription` to accept `className` prop
  - [ ] Fix Button component to accept `className` prop
  - [ ] Fix div elements to use `class` instead of `className`
- [ ] Fix DOM element access issues:
  - [ ] Add null check for `e.target` before accessing properties
  - [ ] Add type assertion for `e.target` to include `dataset` property
  - [ ] Add type assertion for `document.querySelector('[data-variant]')` to include `dataset` property
- [ ] Fix undefined `gtag` function:
  - [ ] Import or define `gtag` function
  - [ ] Add proper type definition for `gtag`

## Pages/demo/therapeutic-goals-tracker.astro
- [ ] Fix component property errors:
  - [ ] Replace `className` with `class` in all component props or update component definitions to accept `className`
  - [ ] Fix Card components:
    - [ ] Update `Card` to accept `className` prop
    - [ ] Update `CardContent` to accept `className` prop
    - [ ] Update `CardHeader` to accept `className` prop
    - [ ] Update `CardTitle` to accept `className` prop
    - [ ] Update `CardDescription` to accept `className` prop
  - [ ] Fix Button component to accept `className` prop
  - [ ] Fix div elements to use `class` instead of `className`
- [ ] Fix DOM element access issues:
  - [ ] Add null check for `e.target` before accessing properties
  - [ ] Add type assertion for `e.target` to include `dataset` property
  - [ ] Add type assertion for `document.querySelector('[data-variant]')` to include `dataset` property
- [ ] Fix undefined `gtag` function:
  - [ ] Import or define `gtag` function
  - [ ] Add proper type definition for `gtag`

## Pages/demo/treatment-plan-manager.astro
- [ ] Fix component property errors:
  - [ ] Replace `className` with `class` in all component props or update component definitions to accept `className`
  - [ ] Fix Card components:
    - [ ] Update `Card` to accept `className` prop
    - [ ] Update `CardContent` to accept `className` prop
    - [ ] Update `CardHeader` to accept `className` prop
    - [ ] Update `CardTitle` to accept `className` prop
    - [ ] Update `CardDescription` to accept `className` prop
  - [ ] Fix Button component to accept `className` prop
  - [ ] Fix div elements to use `class` instead of `className`
- [ ] Fix DOM element access issues:
  - [ ] Add null check for `e.target` before accessing properties
  - [ ] Add type assertion for `e.target` to include `dataset` property
  - [ ] Add type assertion for `document.querySelector('[data-variant]')` to include `dataset` property
- [ ] Fix undefined `gtag` function:
  - [ ] Import or define `gtag` function
  - [ ] Add proper type definition for `gtag`
