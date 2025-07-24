# Astro Check Tasks - File 6

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Pages/admin/security/baa/templates/new.astro
- [ ] Add `is:inline` directive to script with `define:vars`

## Pages/admin/security/disaster-recovery/index.astro
- [ ] Add explicit type for parameter `minutes` in `formatMinutes` function
- [ ] Remove unused function `formatMinutes` or use it
- [ ] Add explicit type for parameter `status` in `getStatusDisplayText` function
- [ ] Add explicit type for parameter `status` in `getStatusBadgeClass` function
- [ ] Add explicit type for parameter `date` in `formatDate` function

## Pages/analytics/comparative-progress.astro
- [ ] Fix type error: Add null check or default value for `userId`
- [ ] Fix type error: Remove `type` property from Alert component or update the component definition
- [ ] Fix property access: Update to use correct property path instead of `Astro.cookies`

## Pages/analytics/conversions.astro
- [ ] Fix type error: Update `requirePageAuth` function to accept the Astro object type
- [ ] Remove unused variable `user` or use it

## Pages/analytics/engagement.astro
- [ ] Fix type error: Update `activityTableColumns` to match the expected `Column[]` type

## Pages/analytics/index.astro
- [ ] Fix type error: Update `requirePageAuth` function to accept the Astro object type
- [ ] Remove unused variable `user` or use it

## Pages/api/dashboard.ts
- [ ] Add explicit type for parameter `cookies` in GET function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/health.ts
- [ ] Add explicit type for parameter `request` in GET function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/search.ts
- [ ] Add explicit type for parameter `url` in GET function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/admin/metrics.ts
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/admin/sessions.ts
- [ ] Add explicit type for parameter `context` in GET function
- [ ] Add explicit type for parameter `context` in POST function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/admin/users.ts
- [ ] Add explicit type for parameter `context` in GET function
- [ ] Add explicit type for parameter `context` in PATCH function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/admin/backup/recovery-test.ts
- [ ] Fix unnecessary await expressions in `logAuditEvent` calls

## Pages/api/admin/patient-rights/delete-request.ts
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/admin/patient-rights/update-deletion-request.ts
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/ai/crisis-detection.ts
- [ ] Add explicit type for parameter `request` in POST function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/ai/high-risk-detections.ts
- [ ] Fix function calls: Update `createAuditLog` calls with the correct number of arguments
- [ ] Add explicit type for parameters `request` and `url` in GET function
- [ ] Fix import for `APIRoute` from 'astro'

## Pages/api/ai/intervention-analysis.ts
- [ ] Add explicit type for parameter `request` in POST function
- [ ] Fix import for `APIRoute` from 'astro'
