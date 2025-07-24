# Astro Check Tasks - File 8

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Pages/api/ai/validation/start.ts
- [ ] Fix property access errors on `authResult`:
  - [ ] Fix property access: Add type assertion or check for `authResult.authenticated`
  - [ ] Fix property access: Add type assertion or check for `authResult.user` before accessing properties
- [ ] Fix property access: Update `AuditEventType.SECURITY_EVENT` to use correct property name
- [ ] Add explicit type for parameter `request` in POST function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/ai/validation/stop.ts
- [ ] Add explicit type for parameter `request` in POST function
- [ ] Fix import for `APIRoute` from 'astro'
- [ ] Fix import for `AstroCookies` from 'astro'

## Pages/api/ai/validation/webhook.ts
- [ ] Fix property access errors on `result`:
  - [ ] Add type assertion or check for `result.success` before using it
  - [ ] Add type assertion or check for `result.message` before using it
- [ ] Fix function call: Update `validateWebhook` call with correct number of arguments
- [ ] Add explicit type for parameter `request` in POST function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/callback.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/login.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/logout.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/refresh.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/register.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/reset-password.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/auth/verify.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/bias-detection/analyze.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/bias-detection/dashboard.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/bias-detection/test-notification.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/documentation/export.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/documentation/generate.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/memory/create.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/memory/delete.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/memory/list.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/memory/search.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/memory/update.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/notifications/preferences.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/notifications/register.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/notifications/send-test.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/notifications/unregister.ts
- [ ] Add explicit type for parameters in API route function
- [ ] Fix import for `APIRoute` from 'astro'
