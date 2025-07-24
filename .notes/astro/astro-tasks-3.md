# Astro Check Tasks - File 3

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Components/widgets/ShareLink.astro
- [x] Fix property access for SHARE_LINKS objects:
  - [x] Add null checks for `SHARE_LINKS.twitter` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['twitter']`
  - [x] Add null checks for `SHARE_LINKS.mastodon` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['mastodon']`
- [x] Fix property access for shareLinks objects:
  - [x] Add null checks for `shareLinks.twitter` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['twitter']`
  - [x] Add null checks for `shareLinks.mastodon` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['mastodon']`
  - [x] Add null checks for `shareLinks.facebook` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['facebook']`
  - [x] Add null checks for `shareLinks.pinterest` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['pinterest']`
  - [x] Add null checks for `shareLinks.reddit` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['reddit']`
  - [x] Add null checks for `shareLinks.telegram` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['telegram']`
  - [x] Add null checks for `shareLinks.whatsapp` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['whatsapp']`
  - [x] Add null checks for `shareLinks.email` before accessing properties
  - [x] Change property access to use bracket notation: `shareLinks['email']`
- [x] Remove unused interface `_ShareLink` or use it (it is used in both server and client components)

## Components/widgets/SwiperCarousel.astro
- [x] Add explicit type for parameter `item` in images.map function (already done)
- [x] Fix import for `ImageMetadata` from 'astro' (already done)

## Data/sample-cognitive-models.ts
- [x] Fix missing property: Add `skillsAcquired` to all `therapeuticProgress` objects
- [x] Remove invalid property: Remove `resistance` from `ConversationalStyle` objects or update the type definition

## E2e/breach-notification.spec.ts
- [x] Add null check for `userNotifications[0]` before accessing properties
- [x] Fix type errors in date handling:
  - [x] Add null check or type assertion for `today.toISOString().split('T')[0]`
  - [x] Add null check or type assertion for `tomorrow.toISOString().split('T')[0]`
- [x] Fix property access for environment variables:
  - [x] Change `process.env.SKIP_BROWSER_COMPAT_TESTS` to `process.env['SKIP_BROWSER_COMPAT_TESTS']`
  - [x] Change `process.env.SECURITY_STAKEHOLDERS` to `process.env['SECURITY_STAKEHOLDERS']`
  - [x] Change `process.env.HHS_NOTIFICATION_EMAIL` to `process.env['HHS_NOTIFICATION_EMAIL']`
  - [x] Change `process.env.ORGANIZATION_ADDRESS` to `process.env['ORGANIZATION_ADDRESS']`
  - [x] Change `process.env.SECURITY_CONTACT` to `process.env['SECURITY_CONTACT']`
  - [x] Change `process.env.ORGANIZATION_NAME` to `process.env['ORGANIZATION_NAME']`
  - [x] Change `process.env.REDIS_URL` to `process.env['REDIS_URL']`
- [x] Fix import for `BreachNotificationSystem` from '../lib/security/breach-notification'
- [x] Fix unnecessary await expressions in:
  - [x] `JSON.parse((await request.postData()) || '{}')`

## Hooks/auth-types.ts
- [x] Fix import for `Session` from "../types/auth.js"

## Hooks/useAnalytics.ts
- [x] Fix import for `EventPriority` from "@/lib/services/analytics/AnalyticsService"
- [x] Fix import for `EventType` from "@/lib/services/analytics/AnalyticsService"

## Hooks/useAnalyticsData.ts
- [x] Fix import for `EventType` from "@/lib/services/analytics/AnalyticsService"

## Hooks/useAuth.ts
- [x] Fix type error: Change `{}` to a string value in function call
