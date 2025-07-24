# Astro Check Tasks - File 3

## Components/widgets/ShareLink.astro
- [ ] Fix property access for SHARE_LINKS objects:
  - [ ] Add null checks for `SHARE_LINKS.twitter` before accessing properties
  - [ ] Change property access to use bracket notation: `SHARE_LINKS['twitter']`
  - [ ] Add null checks for `SHARE_LINKS.mastodon` before accessing properties
  - [ ] Change property access to use bracket notation: `SHARE_LINKS['mastodon']`
- [ ] Fix property access for shareLinks objects:
  - [ ] Add null checks for `shareLinks.twitter` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['twitter']`
  - [ ] Add null checks for `shareLinks.mastodon` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['mastodon']`
  - [ ] Add null checks for `shareLinks.facebook` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['facebook']`
  - [ ] Add null checks for `shareLinks.pinterest` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['pinterest']`
  - [ ] Add null checks for `shareLinks.reddit` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['reddit']`
  - [ ] Add null checks for `shareLinks.telegram` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['telegram']`
  - [ ] Add null checks for `shareLinks.whatsapp` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['whatsapp']`
  - [ ] Add null checks for `shareLinks.email` before accessing properties
  - [ ] Change property access to use bracket notation: `shareLinks['email']`
- [ ] Remove unused interface `_ShareLink` or use it

## Components/widgets/SwiperCarousel.astro
- [ ] Add explicit type for parameter `item` in images.map function
- [ ] Fix import for `ImageMetadata` from 'astro'

## Data/sample-cognitive-models.ts
- [ ] Fix missing property: Add `skillsAcquired` to all `therapeuticProgress` objects
- [ ] Remove invalid property: Remove `resistance` from `ConversationalStyle` objects or update the type definition

## E2e/breach-notification.spec.ts
- [ ] Add null check for `userNotifications[0]` before accessing properties
- [ ] Fix type errors in date handling:
  - [ ] Add null check or type assertion for `today.toISOString().split('T')[0]`
  - [ ] Add null check or type assertion for `tomorrow.toISOString().split('T')[0]`
- [ ] Fix property access for environment variables:
  - [ ] Change `process.env.SKIP_BROWSER_COMPAT_TESTS` to `process.env['SKIP_BROWSER_COMPAT_TESTS']`
  - [ ] Change `process.env.SECURITY_STAKEHOLDERS` to `process.env['SECURITY_STAKEHOLDERS']`
  - [ ] Change `process.env.HHS_NOTIFICATION_EMAIL` to `process.env['HHS_NOTIFICATION_EMAIL']`
  - [ ] Change `process.env.ORGANIZATION_ADDRESS` to `process.env['ORGANIZATION_ADDRESS']`
  - [ ] Change `process.env.SECURITY_CONTACT` to `process.env['SECURITY_CONTACT']`
  - [ ] Change `process.env.ORGANIZATION_NAME` to `process.env['ORGANIZATION_NAME']`
  - [ ] Change `process.env.REDIS_URL` to `process.env['REDIS_URL']`
- [ ] Fix import for `BreachNotificationSystem` from '../lib/security/breach-notification'
- [ ] Fix unnecessary await expressions in:
  - [ ] `JSON.parse((await request.postData()) || '{}')`

## Hooks/auth-types.ts
- [ ] Fix import for `Session` from "../types/auth.js"

## Hooks/useAnalytics.ts
- [ ] Fix import for `EventPriority` from "@/lib/services/analytics/AnalyticsService"
- [ ] Fix import for `EventType` from "@/lib/services/analytics/AnalyticsService"

## Hooks/useAnalyticsData.ts
- [ ] Fix import for `EventType` from "@/lib/services/analytics/AnalyticsService"

## Hooks/useAuth.ts
- [ ] Fix type error: Change `{}` to a string value in function call
