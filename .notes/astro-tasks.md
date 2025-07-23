# Astro Tasks

## Progress Summary

✅ Fixed the Astro configuration issue by removing the invalid experimental flag
✅ Created utility functions for environment variable access
✅ Installed missing type dependencies
✅ Updated several files to use environment variable utility functions

## Priority 1: Configuration Issues

- [x] **Fix invalid experimental feature**: The `directRenderScript` experimental feature is invalid or outdated
  - ✅ Removed the experimental flag from `astro.config.mjs`

## Priority 2: TypeScript Dependencies

- [x] **Install missing Playwright types**: Many test files are missing `@playwright/test` type declarations
  ```bash
  pnpm add -D @playwright/test
  ```

- [x] **Install missing Cheerio types**: Required for security tests
  ```bash
  pnpm add -D @types/cheerio
  ```

- [x] **Install missing Vitest types**: Many test files have issues with Vitest imports
  ```bash
  pnpm add -D vitest
  ```

## Priority 3: Environment Variable Access

- [x] **Create environment variable utility functions**: Created `src/lib/utils/env.ts` with:
  - `getEnv()`: Safely access environment variables with proper typing
  - `getRequiredEnv()`: Get required environment variables with error handling
  - `isEnvTrue()`: Check if an environment variable is set to a truthy value
  - `isEnvFalse()`: Check if an environment variable is set to a falsy value

- [ ] **Update environment variable access**: Replace direct `process.env` access with utility functions
  - [x] Updated `src/lib/services/redis/index.ts`
  - [x] Updated `src/lib/services/OllamaCheckInService.ts`
  - [x] Updated `src/lib/supabase/env.ts`
  - [x] Updated `src/lib/backup/verify.ts`
  - [x] Updated `src/lib/services/redis/__tests__/RedisService.test.ts`
  - [x] Updated `src/lib/auth/supabase.ts`
  - [ ] Update remaining files with environment variable access issues

## Priority 4: TypeScript Errors by Category

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

## Priority 5: CommonJS Module Warnings

- [ ] **Convert CommonJS modules to ES modules**:
  - [ ] `scripts/generate-compatibility-report.js`
  - [ ] `scripts/monitor-memory.js`
  - [ ] `scripts/run-mcp-tests.js`
  - [ ] `scripts/upload-to-cdn.js`

## Action Plan

1. ✅ Fix configuration issues (completed)
2. ✅ Install missing type dependencies (completed)
3. ✅ Create utility functions for environment variables (completed)
4. Continue updating files to use environment variable utility functions
5. Fix test files by adding proper type annotations
6. Fix service files with proper type definitions
7. Fix script and plugin files
8. Convert CommonJS modules to ES modules
9. Re-run `npx astro check` to verify all issues are resolved
