# Astro Tasks

## Priority 1: Configuration Issues

- [x] **Fix invalid experimental feature**: The `directRenderScript` experimental feature is invalid or outdated
  - ✅ Removed the experimental flag from `astro.config.mjs`

## Priority 2: TypeScript Dependencies

- [ ] **Install missing Playwright types**: Many test files are missing `@playwright/test` type declarations
  ```bash
  pnpm add -D @playwright/test
  ```

- [ ] **Install missing Cheerio types**: Required for security tests
  ```bash
  pnpm add -D @types/cheerio
  ```

- [ ] **Install missing Vitest types**: Many test files have issues with Vitest imports
  ```bash
  pnpm add -D vitest
  ```

## Priority 3: TypeScript Errors by Category

### Environment Variable Access

- [ ] **Fix environment variable access**: Use bracket notation for accessing environment variables
  - [ ] Replace `process.env.VARIABLE_NAME` with `process.env['VARIABLE_NAME']`
  - [ ] Create a utility function to safely access environment variables

### Test Files

- [ ] **Fix implicit any types in Playwright tests**: Add proper type annotations to test files
  - [ ] Add proper types to test parameters (page, request, browser)
  - [ ] Fix `tests/e2e/` directory tests
  - [ ] Fix `tests/integration/` directory tests
  - [ ] Fix `tests/mobile/` directory tests
  - [ ] Fix `tests/monitoring/` directory tests
  - [ ] Fix `tests/performance/` directory tests
  - [ ] Fix `tests/security/` directory tests
  - [ ] Fix `tests/visual/` directory tests

### Service Files

- [ ] **Fix TypeScript errors in service files**:
  - [ ] Fix Redis service type issues
  - [ ] Fix WebSocket service type issues
  - [ ] Fix notification service type issues
  - [ ] Fix analytics service type issues
  - [ ] Fix patient rights service type issues

### Script Files

- [ ] **Fix TypeScript errors in script files**:
  - [ ] Fix errors in `scripts/load-test.ts`
  - [ ] Fix errors in `scripts/provision-grafana-dashboard.ts`
  - [ ] Fix errors in `scripts/setup-env.ts`
  - [ ] Fix errors in `scripts/extract-backgrounds.ts`

### Plugin Files

- [ ] **Fix TypeScript errors in plugin files**:
  - [ ] Fix errors in `plugins/remark-directive-sugar.ts`
  - [ ] Fix errors in `plugins/remark-image-container.ts`

## Priority 4: CommonJS Module Warnings

- [ ] **Convert CommonJS modules to ES modules**:
  - [ ] `scripts/generate-compatibility-report.js`
  - [ ] `scripts/monitor-memory.js`
  - [ ] `scripts/run-mcp-tests.js`
  - [ ] `scripts/upload-to-cdn.js`

## Action Plan

1. ✅ Fix configuration issues (completed)
2. Install missing type dependencies
3. Create utility functions for common patterns (environment variables, etc.)
4. Fix test files by adding proper type annotations
5. Fix service files with proper type definitions
6. Fix script and plugin files
7. Convert CommonJS modules to ES modules
8. Re-run `npx astro check` to verify all issues are resolved
