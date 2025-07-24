# Astro Check Tasks - File 7

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Lib/services/TaskListManager.ts
- [ ] Add null check for `taskStack[taskStack.length - 1]` before accessing properties
- [ ] Add null check for `content` before calling `trim()`
- [ ] Add null check for `checkState` before calling `toLowerCase()`
- [ ] Add null check for `indent` before accessing `length`

## Lib/services/WebRTCSignalingService.ts
- [ ] Fix import for `WebSocketService` from './WebSocketService'

## Lib/services/cacheService.ts
- [ ] Fix undefined type: Import or define `RedisClient` type

## Lib/services/analytics/AnalyticsService.mock.ts
- [ ] Remove unused private variable `options` or use it

## Lib/services/analytics/AnalyticsService.ts
- [ ] Fix type error: Add proper type assertion for `redis as RedisClient`

## Lib/services/analytics/__tests__/AnalyticsService.test.ts
- [ ] Add null checks for array access:
  - [ ] Add null check for `result[0]` before accessing properties
- [ ] Fix property access: Change `result[0].tags.endpoint` to `result[0].tags['endpoint']`
- [ ] Fix imports:
  - [ ] Fix import for `EventType` from '../AnalyticsService'
  - [ ] Fix import for `EventPriority` from '../AnalyticsService'

## Lib/services/backup/index.ts
- [ ] Fix property access:
  - [ ] Change `process.env.BACKUP_EMAIL_RECIPIENTS` to `process.env['BACKUP_EMAIL_RECIPIENTS']`
  - [ ] Change `process.env.SLACK_WEBHOOK` to `process.env['SLACK_WEBHOOK']`

## Lib/services/contact/ContactService.ts
- [ ] Import or define `logger` object
- [ ] Add null check for `validationError` before accessing `message`

## Lib/services/contact/__tests__/ContactService.test.ts
- [ ] Import or define `logger` object
- [ ] Fix vitest imports:
  - [ ] Fix import for `describe` from 'vitest'
  - [ ] Fix import for `it` from 'vitest'
  - [ ] Fix import for `expect` from 'vitest'
  - [ ] Fix import for `vi` from 'vitest'
  - [ ] Fix import for `beforeEach` from 'vitest'
  - [ ] Fix import for `afterEach` from 'vitest'

## Lib/services/notification/NotificationService.ts
- [ ] Fix Redis method calls:
  - [ ] Add type assertion or use alternative method for `redis.lpush`
  - [ ] Add type assertion or use alternative method for `redis.rpoplpush`
  - [ ] Add type assertion or use alternative method for `redis.lrem`
- [ ] Fix property access: Add `adminEmail` to config.notifications type or use alternative approach

## Lib/services/notification/SlackNotificationService.ts
- [ ] Fix object literal: Remove or properly define `elements` property in SlackBlock

## Lib/services/notification/WebSocketServer.mock.ts
- [ ] Remove unused private variables:
  - [ ] Remove `port` or use it
  - [ ] Remove `notificationService` or use it

## Lib/services/notification/WebSocketServer.ts
- [ ] Fix function call: Remove argument from `supabaseAdmin.auth.getSession()`
- [ ] Fix type error: Update return type to match expected `string | null`
- [ ] Remove unused interfaces or mark them as exported:
  - [ ] `_ErrorMessage`
  - [ ] `_UnreadCountMessage`
  - [ ] `_NotificationsMessage`
