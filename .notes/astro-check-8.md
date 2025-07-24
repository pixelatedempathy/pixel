
[96msrc/pages/admin/security/baa/templates/new.astro[0m:[93m263[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m263[0m <script define:vars={{ standardSections, standardPlaceholders }}>
[7m   [0m [93m        ~~~~~~~~~~~[0m

[96msrc/pages/admin/security/disaster-recovery/index.astro[0m:[93m128[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'minutes' implicitly has an 'any' type.

[7m128[0m function formatMinutes(minutes) {
[7m   [0m [91m                       ~~~~~~~[0m
[96msrc/pages/admin/security/disaster-recovery/index.astro[0m:[93m128[0m:[93m10[0m - [91merror[0m[90m ts(6133): [0m'formatMinutes' is declared but its value is never read.

[7m128[0m function formatMinutes(minutes) {
[7m   [0m [91m         ~~~~~~~~~~~~~[0m
[96msrc/pages/admin/security/disaster-recovery/index.astro[0m:[93m112[0m:[93m31[0m - [91merror[0m[90m ts(7006): [0mParameter 'status' implicitly has an 'any' type.

[7m112[0m function getStatusDisplayText(status) {
[7m   [0m [91m                              ~~~~~~[0m
[96msrc/pages/admin/security/disaster-recovery/index.astro[0m:[93m96[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 'status' implicitly has an 'any' type.

[7m96[0m function getStatusBadgeClass(status) {
[7m  [0m [91m                             ~~~~~~[0m
[96msrc/pages/admin/security/disaster-recovery/index.astro[0m:[93m87[0m:[93m21[0m - [91merror[0m[90m ts(7006): [0mParameter 'date' implicitly has an 'any' type.

[7m87[0m function formatDate(date) {
[7m  [0m [91m                    ~~~~[0m

[96msrc/pages/analytics/comparative-progress.astro[0m:[93m70[0m:[93m36[0m - [91merror[0m[90m ts(2322): [0mType 'string | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.

[7m70[0m       <ComparativeProgressDisplay {userId} client:load />
[7m  [0m [91m                                   ~~~~~~[0m
[96msrc/pages/analytics/comparative-progress.astro[0m:[93m60[0m:[93m12[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; type: string; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'type' does not exist on type 'IntrinsicAttributes & Props'.

[7m60[0m     <Alert type="info" class="mb-6">
[7m  [0m [91m           ~~~~[0m
[96msrc/pages/analytics/comparative-progress.astro[0m:[93m7[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m7[0m const isAuthenticated = Astro.cookies.has('auth-token')
[7m [0m [91m                              ~~~~~~~[0m

[96msrc/pages/analytics/conversions.astro[0m:[93m10[0m:[93m36[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ url: URL; site: URL; }' is not assignable to parameter of type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.
  Type '{ url: URL; site: URL; }' is missing the following properties from type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }': request, cookies, redirect

[7m10[0m const user = await requirePageAuth(Astro)
[7m  [0m [91m                                   ~~~~~[0m
[96msrc/pages/analytics/conversions.astro[0m:[93m10[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'user' is declared but its value is never read.

[7m10[0m const user = await requirePageAuth(Astro)
[7m  [0m [91m      ~~~~[0m

[96msrc/pages/analytics/engagement.astro[0m:[93m224[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '({ key: string; label: string; sortable: boolean; render?: undefined; } | { key: string; label: string; sortable: boolean; render: (value: number) => string; })[]' is not assignable to type 'Column[]'.
  Type '{ key: string; label: string; sortable: boolean; render?: undefined; } | { key: string; label: string; sortable: boolean; render: (value: number) => string; }' is not assignable to type 'Column'.

[7m224[0m                   columns={activityTableColumns}
[7m   [0m [91m                  ~~~~~~~[0m

[96msrc/pages/analytics/index.astro[0m:[93m10[0m:[93m36[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ url: URL; site: URL; }' is not assignable to parameter of type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.
  Type '{ url: URL; site: URL; }' is missing the following properties from type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }': request, cookies, redirect

[7m10[0m const user = await requirePageAuth(Astro)
[7m  [0m [91m                                   ~~~~~[0m
[96msrc/pages/analytics/index.astro[0m:[93m10[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'user' is declared but its value is never read.

[7m10[0m const user = await requirePageAuth(Astro)
[7m  [0m [91m      ~~~~[0m

[96msrc/pages/api/dashboard.ts[0m:[93m9[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m9[0m export const GET: APIRoute = async ({ cookies }) => {
[7m [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/dashboard.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/health.ts[0m:[93m30[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m30[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/health.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/search.ts[0m:[93m4[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m4[0m export const GET: APIRoute = async ({ url }) => {
[7m [0m [91m                                      ~~~[0m
[96msrc/pages/api/search.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/admin/metrics.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/admin/sessions.ts[0m:[93m90[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'context' implicitly has an 'any' type.

[7m90[0m export const POST: APIRoute = async (context) => {
[7m  [0m [91m                                     ~~~~~~~[0m
[96msrc/pages/api/admin/sessions.ts[0m:[93m22[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter 'context' implicitly has an 'any' type.

[7m22[0m export const GET: APIRoute = async (context) => {
[7m  [0m [91m                                    ~~~~~~~[0m
[96msrc/pages/api/admin/sessions.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m2[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/admin/users.ts[0m:[93m87[0m:[93m39[0m - [91merror[0m[90m ts(7006): [0mParameter 'context' implicitly has an 'any' type.

[7m87[0m export const PATCH: APIRoute = async (context) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/admin/users.ts[0m:[93m22[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter 'context' implicitly has an 'any' type.

[7m22[0m export const GET: APIRoute = async (context) => {
[7m  [0m [91m                                    ~~~~~~~[0m
[96msrc/pages/api/admin/users.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m2[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/admin/backup/recovery-test.ts[0m:[93m245[0m:[93m5[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m245[0m     await logAuditEvent(
[7m   [0m [93m    ~~~~~~~~~~~~~~~~~~~~[0m
[7m246[0m       AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m253[0m       },
[7m   [0m [93m~~~~~~~~[0m
[7m254[0m     )
[7m   [0m [93m~~~~~[0m
[96msrc/pages/api/admin/backup/recovery-test.ts[0m:[93m214[0m:[93m5[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m214[0m     await logAuditEvent(
[7m   [0m [93m    ~~~~~~~~~~~~~~~~~~~~[0m
[7m215[0m       AuditEventType.SECURITY,
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m228[0m       },
[7m   [0m [93m~~~~~~~~[0m
[7m229[0m     )
[7m   [0m [93m~~~~~[0m

[96msrc/pages/api/admin/patient-rights/delete-request.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/admin/patient-rights/update-deletion-request.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/crisis-detection.ts[0m:[93m141[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m141[0m export const POST: APIRoute = async ({ request }) => {
[7m   [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/crisis-detection.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/high-risk-detections.ts[0m:[93m53[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m53[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/high-risk-detections.ts[0m:[93m35[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m35[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/high-risk-detections.ts[0m:[93m6[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m6[0m export const GET: APIRoute = async ({ request, url }) => {
[7m [0m [91m                                               ~~~[0m
[96msrc/pages/api/ai/high-risk-detections.ts[0m:[93m6[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m6[0m export const GET: APIRoute = async ({ request, url }) => {
[7m [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/high-risk-detections.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/intervention-analysis.ts[0m:[93m14[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m14[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/intervention-analysis.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/models.ts[0m:[93m13[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m13[0m export const GET: APIRoute = async ({ request, url }) => {
[7m  [0m [91m                                               ~~~[0m
[96msrc/pages/api/ai/models.ts[0m:[93m13[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m13[0m export const GET: APIRoute = async ({ request, url }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/models.ts[0m:[93m6[0m:[93m8[0m - [91merror[0m[90m ts(2459): [0mModule '"../../../lib/ai/models/registry"' declares 'AIModel' locally, but it is not exported.

[7m6[0m   type AIModel,
[7m [0m [91m       ~~~~~~~[0m
[96msrc/pages/api/ai/models.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/performance-metrics.ts[0m:[93m33[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m33[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/performance-metrics.ts[0m:[93m6[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m6[0m export const GET: APIRoute = async ({ request, url }) => {
[7m [0m [91m                                               ~~~[0m
[96msrc/pages/api/ai/performance-metrics.ts[0m:[93m6[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m6[0m export const GET: APIRoute = async ({ request, url }) => {
[7m [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/performance-metrics.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/response.ts[0m:[93m87[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m87[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/response.ts[0m:[93m22[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m22[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/response.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/usage-stats.ts[0m:[93m91[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m91[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m75[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'length' does not exist on type 'AIUsageStats'.

[7m75[0m         statsCount: stats.length,
[7m  [0m [91m                          ~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m67[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m67[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m48[0m:[93m11[0m - [91merror[0m[90m ts(2554): [0mExpected 4-6 arguments, but got 1.

[7m48[0m     await createAuditLog({
[7m  [0m [91m          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m11[0m:[93m57[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m11[0m export const GET: APIRoute = async ({ request, cookies, url }) => {
[7m  [0m [91m                                                        ~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m11[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m11[0m export const GET: APIRoute = async ({ request, cookies, url }) => {
[7m  [0m [91m                                               ~~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m11[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const GET: APIRoute = async ({ request, cookies, url }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/usage-stats.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/usage.ts[0m:[93m22[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m22[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/usage.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/datasets/merge.ts[0m:[93m11[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/datasets/merge.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/datasets/prepare.ts[0m:[93m13[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m13[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/datasets/prepare.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/mental-health/analyze.ts[0m:[93m87[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m87[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/mental-health/analyze.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/mental-health/status.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/recommendations/enhanced.ts[0m:[93m53[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m53[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/recommendations/enhanced.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/history.ts[0m:[93m29[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'scope' comes from an index signature, so it must be accessed with ['scope'].

[7m29[0m           tokenPayload.scope === 'validation:read'
[7m  [0m [91m                       ~~~~~[0m
[96msrc/pages/api/ai/validation/history.ts[0m:[93m28[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'purpose' comes from an index signature, so it must be accessed with ['purpose'].

[7m28[0m           tokenPayload.purpose === 'ai-validation' &&
[7m  [0m [91m                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/history.ts[0m:[93m12[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m12[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/validation/history.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/results.ts[0m:[93m110[0m:[93m76[0m - [91merror[0m[90m ts(2339): [0mProperty 'runCount' does not exist on type 'ValidationStats'.

[7m110[0m         'ETag': `"validation-${validationResults.length}-${validationStats.runCount}"`,
[7m   [0m [91m                                                                           ~~~~~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m91[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m91[0m         userId: authResult.user?.id,
[7m  [0m [91m                           ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m88[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m88[0m       authResult.user?.id || 'system',
[7m  [0m [91m                 ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m56[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m56[0m           email: authResult.user?.email,
[7m  [0m [91m                            ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m55[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m55[0m           userId: authResult.user?.id,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m52[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m52[0m         authResult.user?.id || 'unknown',
[7m  [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m50[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'SECURITY_EVENT' does not exist on type 'typeof AuditEventType'.

[7m50[0m         AuditEventType.SECURITY_EVENT,
[7m  [0m [91m                       ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m47[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m47[0m     if (!authResult.user?.isAdmin) {
[7m  [0m [91m                    ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m24[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m24[0m         ? `user:${authResult.user.id}`
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m23[0m:[93m46[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m23[0m       authResult.authenticated && authResult.user?.id
[7m  [0m [91m                                             ~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m23[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'authenticated' does not exist on type 'boolean'.

[7m23[0m       authResult.authenticated && authResult.user?.id
[7m  [0m [91m                 ~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m16[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m16[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/ai/validation/results.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/run.ts[0m:[93m79[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'r' implicitly has an 'any' type.

[7m79[0m         passedCount: results.filter((r) => r.passed).length,
[7m  [0m [91m                                     ~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m77[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m77[0m         userId: authResult.user?.id,
[7m  [0m [91m                           ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m74[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m74[0m       authResult.user?.id || 'system',
[7m  [0m [91m                 ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m68[0m:[93m53[0m - [91merror[0m[90m ts(2339): [0mProperty 'runValidation' does not exist on type 'EmotionValidationPipeline'.

[7m68[0m     const results = await emotionValidationPipeline.runValidation()
[7m  [0m [91m                                                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m42[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m42[0m           email: authResult.user?.email,
[7m  [0m [91m                            ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m41[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m41[0m           userId: authResult.user?.id,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m38[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m38[0m         authResult.user?.id || 'unknown',
[7m  [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m36[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'SECURITY_EVENT' does not exist on type 'typeof AuditEventType'.

[7m36[0m         AuditEventType.SECURITY_EVENT,
[7m  [0m [91m                       ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m33[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m33[0m     if (!authResult.user?.isAdmin) {
[7m  [0m [91m                    ~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m17[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'authenticated' does not exist on type 'boolean'.

[7m17[0m     if (!authResult.authenticated) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m11[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/run.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m109[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m109[0m           userId: authResult.user?.id,
[7m   [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m106[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m106[0m         authResult.user?.id || 'system',
[7m   [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m79[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m79[0m           userId: authResult.user?.id,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m76[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m76[0m         authResult.user?.id || 'system',
[7m  [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m42[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m42[0m           email: authResult.user?.email,
[7m  [0m [91m                            ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m41[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m41[0m           userId: authResult.user?.id,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m38[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m38[0m         authResult.user?.id || 'unknown',
[7m  [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m36[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'SECURITY_EVENT' does not exist on type 'typeof AuditEventType'.

[7m36[0m         AuditEventType.SECURITY_EVENT,
[7m  [0m [91m                       ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m33[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m33[0m     if (!authResult.user?.isAdmin) {
[7m  [0m [91m                    ~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m17[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'authenticated' does not exist on type 'boolean'.

[7m17[0m     if (!authResult.authenticated) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m11[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/schedule.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/start.ts[0m:[93m79[0m:[93m59[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m79[0m         username: authResult.user?.username || authResult.user?.email,
[7m  [0m [91m                                                          ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m79[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m79[0m         username: authResult.user?.username || authResult.user?.email,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m78[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m78[0m         userId: authResult.user?.id,
[7m  [0m [91m                           ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m75[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m75[0m       authResult.user?.id || 'system',
[7m  [0m [91m                 ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m42[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m42[0m           email: authResult.user?.email,
[7m  [0m [91m                            ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m41[0m:[93m30[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m41[0m           userId: authResult.user?.id,
[7m  [0m [91m                             ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m38[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m38[0m         authResult.user?.id || 'unknown',
[7m  [0m [91m                   ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m36[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'SECURITY_EVENT' does not exist on type 'typeof AuditEventType'.

[7m36[0m         AuditEventType.SECURITY_EVENT,
[7m  [0m [91m                       ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m33[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type 'boolean'.

[7m33[0m     if (!authResult.user?.isAdmin) {
[7m  [0m [91m                    ~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m17[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'authenticated' does not exist on type 'boolean'.

[7m17[0m     if (!authResult.authenticated) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m11[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/start.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/stop.ts[0m:[93m29[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m29[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/stop.ts[0m:[93m5[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroCookies'.

[7m5[0m import type { AstroCookies } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/stop.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m60[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'message' does not exist on type '{ status: string; }'.

[7m60[0m           message: result.message,
[7m  [0m [91m                          ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m47[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'message' does not exist on type '{ status: string; }'.

[7m47[0m           message: result.message,
[7m  [0m [91m                          ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m43[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'success' does not exist on type '{ status: string; }'.

[7m43[0m     if (result.success) {
[7m  [0m [91m               ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m40[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'success' does not exist on type '{ status: string; }'.

[7m40[0m       result.success ? AuditEventStatus.SUCCESS : AuditEventStatus.FAILURE,
[7m  [0m [91m             ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m38[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'message' does not exist on type '{ status: string; }'.

[7m38[0m         message: result.message,
[7m  [0m [91m                        ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m37[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'success' does not exist on type '{ status: string; }'.

[7m37[0m         success: result.success,
[7m  [0m [91m                        ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m25[0m:[93m7[0m - [91merror[0m[90m ts(2554): [0mExpected 1 arguments, but got 3.

[7m25[0m       signature,
[7m  [0m [91m      ~~~~~~~~~~[0m
[7m26[0m       event,
[7m  [0m [91m~~~~~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m10[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m10[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/ai/validation/webhook.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/analytics/comparative-progress.ts[0m:[93m28[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m28[0m export const get: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                               ~~~~~~~[0m
[96msrc/pages/api/analytics/comparative-progress.ts[0m:[93m28[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m28[0m export const get: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/analytics/comparative-progress.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m241[0m:[93m9[0m - [91merror[0m[90m ts(2783): [0m'page' is specified more than once, so this usage will be overwritten.

[7m241[0m         page: event.page,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m240[0m:[93m9[0m - [91merror[0m[90m ts(2783): [0m'ab_variant' is specified more than once, so this usage will be overwritten.

[7m240[0m         ab_variant: event.ab_variant,
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m172[0m:[93m45[0m - [91merror[0m[90m ts(4111): [0mProperty 'PUBLIC_GA_MEASUREMENT_ID' comes from an index signature, so it must be accessed with ['PUBLIC_GA_MEASUREMENT_ID'].

[7m172[0m   const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID
[7m   [0m [91m                                            ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m154[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'message' does not exist in type 'AnalyticsProcessingError'.

[7m154[0m       message: 'Failed to retrieve analytics data',
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m110[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m110[0m export const GET: APIRoute = async ({ url }) => {
[7m   [0m [91m                                      ~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m96[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'message' does not exist in type 'AnalyticsProcessingError'.

[7m96[0m       message: 'Failed to process analytics event',
[7m  [0m [91m      ~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m44[0m:[93m9[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'message' does not exist in type 'AnalyticsValidationError'.

[7m44[0m         message: 'Invalid analytics event data',
[7m  [0m [91m        ~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m16[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m16[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/analytics/demo-tracking.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/analytics/engagement.ts[0m:[93m130[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'message' does not exist in type 'AnalyticsProcessingError'.

[7m130[0m       message: 'Failed to fetch engagement metrics',
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/api/analytics/engagement.ts[0m:[93m17[0m:[93m27[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: any; cookies: any; }' is not assignable to parameter of type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.
  Property 'redirect' is missing in type '{ request: any; cookies: any; }' but required in type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.

[7m17[0m     await requirePageAuth({ request, cookies })
[7m  [0m [91m                          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/engagement.ts[0m:[93m14[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m14[0m export const GET: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                               ~~~~~~~[0m
[96msrc/pages/api/analytics/engagement.ts[0m:[93m14[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m14[0m export const GET: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/analytics/engagement.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/analytics/treatment-forecast.ts[0m:[93m58[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'objectOutputType<{}, ZodTypeAny, "passthrough"> | undefined' is not assignable to type 'MentalHealthAnalysis | undefined'.
  Type 'objectOutputType<{}, ZodTypeAny, "passthrough">' is not assignable to type 'MentalHealthAnalysis | undefined'.

[7m58[0m       mentalHealthAnalysis,
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/treatment-forecast.ts[0m:[93m55[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'objectOutputType<{}, ZodTypeAny, "passthrough"> | null' is not assignable to type 'EmotionState'.
  Type 'null' is not assignable to type 'EmotionState'.

[7m55[0m       recentEmotionState,
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/treatment-forecast.ts[0m:[93m54[0m:[93m7[0m - [91merror[0m[90m ts(2741): [0mProperty 'messages' is missing in type '{} & { [k: string]: unknown; }' but required in type 'ChatSession'.

[7m54[0m       chatSession,
[7m  [0m [91m      ~~~~~~~~~~~[0m
[96msrc/pages/api/analytics/treatment-forecast.ts[0m:[93m53[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ status: string; sessionId: string; startTime: string; emotionAnalysisEnabled: boolean; clientId: string; therapistId: string; securityLevel: string; endTime?: string | undefined; }' is not assignable to type 'TherapySession'.
  Types of property 'status' are incompatible.

[7m53[0m       session,
[7m  [0m [91m      ~~~~~~~[0m

[96msrc/pages/api/analytics/types.ts[0m:[93m1[0m:[93m31[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/types/api' or its corresponding type declarations.

[7m1[0m import type { APIError } from '@/lib/types/api'
[7m [0m [91m                              ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/audit/metrics.ts[0m:[93m53[0m:[93m57[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ id: string; timestamp: string; userId: string; resourceId: string; resourceType: string | undefined; action: "create" | "view" | "delete" | "update"; metadata: Record<string, unknown>; }[]' is not assignable to parameter of type 'AuditLog[]'.
  Type '{ id: string; timestamp: string; userId: string; resourceId: string; resourceType: string | undefined; action: "view" | "create" | "update" | "delete"; metadata: Record<string, unknown>; }' is not assignable to type 'AuditLog'.

[7m53[0m     const unusualPatterns = await detectUnusualPatterns(transformedLogs)
[7m  [0m [91m                                                        ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/audit/metrics.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/api/audit/metrics.ts[0m:[93m53[0m:[93m29[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m53[0m     const unusualPatterns = await detectUnusualPatterns(transformedLogs)
[7m  [0m [93m                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/auth/login.ts[0m:[93m58[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type '"tc128" | "tc192" | "tc256"'.

[7m58[0m         securityLevel: sessionData.securityLevel,
[7m  [0m [91m        ~~~~~~~~~~~~~[0m

[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m531[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m531[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m499[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m499[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m487[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m487[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m457[0m:[93m39[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m457[0m         requests.map((request) => GET({ request } as { request: Request })),
[7m   [0m [91m                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m445[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m445[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m433[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m433[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m421[0m:[93m36[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m421[0m         const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m405[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m405[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m361[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m361[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m332[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m332[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m314[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m314[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m299[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m299[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m274[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ request: Request; }' is not assignable to parameter of type 'AstroAPIContext'.
  Type '{ request: Request; }' is missing the following properties from type 'AstroAPIContext': cookies, url, params, generator

[7m274[0m       const response = await GET({ request } as { request: Request })
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m235[0m:[93m15[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m235[0m     vi.mocked(getLogger).mockReturnValue(mockLogger)
[7m   [0m [91m              ~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/dashboard.test.ts[0m:[93m11[0m:[93m15[0m - [91merror[0m[90m ts(2614): [0mModule '"@/lib/ai/bias-detection"' has no exported member 'BiasDashboardData'. Did you mean to use 'import BiasDashboardData from "@/lib/ai/bias-detection"' instead?

[7m11[0m import type { BiasDashboardData } from '@/lib/ai/bias-detection'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/bias-detection/dashboard.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2614): [0mModule '"@/lib/ai/bias-detection"' has no exported member 'BiasDashboardData'. Did you mean to use 'import BiasDashboardData from "@/lib/ai/bias-detection"' instead?

[7m3[0m import type { BiasDashboardData } from '@/lib/ai/bias-detection'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/bias-detection/export.test.new.ts[0m:[93m218[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m218[0m     ;(getLogger as ReturnType<typeof vi.fn>).mockReturnValue(mockLogger)
[7m   [0m [91m      ~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.test.new.ts[0m:[93m16[0m:[93m15[0m - [91merror[0m[90m ts(2614): [0mModule '"@/lib/ai/bias-detection"' has no exported member 'BiasDashboardData'. Did you mean to use 'import BiasDashboardData from "@/lib/ai/bias-detection"' instead?

[7m16[0m import type { BiasDashboardData } from '@/lib/ai/bias-detection'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/bias-detection/export.test.ts[0m:[93m218[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'getLogger'.

[7m218[0m     ;(getLogger as ReturnType<typeof vi.fn>).mockReturnValue(mockLogger)
[7m   [0m [91m      ~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.test.ts[0m:[93m16[0m:[93m15[0m - [91merror[0m[90m ts(2614): [0mModule '"@/lib/ai/bias-detection"' has no exported member 'BiasDashboardData'. Did you mean to use 'import BiasDashboardData from "@/lib/ai/bias-detection"' instead?

[7m16[0m import type { BiasDashboardData } from '@/lib/ai/bias-detection'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/bias-detection/export.ts[0m:[93m316[0m:[93m47[0m - [91merror[0m[90m ts(4111): [0mProperty 'trendsDirection' comes from an index signature, so it must be accessed with ['trendsDirection'].

[7m316[0m         <p><strong>Trend:</strong> ${summary?.trendsDirection || 'N/A'}</p>
[7m   [0m [91m                                              ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.ts[0m:[93m315[0m:[93m55[0m - [91merror[0m[90m ts(4111): [0mProperty 'alertsCount' comes from an index signature, so it must be accessed with ['alertsCount'].

[7m315[0m         <p><strong>Active Alerts:</strong> ${summary?.alertsCount || 'N/A'}</p>
[7m   [0m [91m                                                      ~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.ts[0m:[93m314[0m:[93m60[0m - [91merror[0m[90m ts(4111): [0mProperty 'averageBiasScore' comes from an index signature, so it must be accessed with ['averageBiasScore'].

[7m314[0m         <p><strong>Average Bias Score:</strong> ${summary?.averageBiasScore || 'N/A'}</p>
[7m   [0m [91m                                                           ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.ts[0m:[93m313[0m:[93m56[0m - [91merror[0m[90m ts(4111): [0mProperty 'totalSessions' comes from an index signature, so it must be accessed with ['totalSessions'].

[7m313[0m         <p><strong>Total Sessions:</strong> ${summary?.totalSessions || 'N/A'}</p>
[7m   [0m [91m                                                       ~~~~~~~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.ts[0m:[93m39[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m39[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/bias-detection/export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/browser-compatibility/data.ts[0m:[93m142[0m:[93m38[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m142[0m         latest: reports.length > 0 ? reports[0].timestamp : null,
[7m   [0m [91m                                     ~~~~~~~~~~[0m
[96msrc/pages/api/browser-compatibility/data.ts[0m:[93m80[0m:[93m48[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m80[0m       const reportPath = path.join(reportsDir, file)
[7m  [0m [91m                                               ~~~~[0m
[96msrc/pages/api/browser-compatibility/data.ts[0m:[93m17[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m17[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/browser-compatibility/data.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/demos/bias-detection/analyze.ts[0m:[93m17[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m17[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/analyze.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m275[0m:[93m89[0m - [91merror[0m[90m ts(4111): [0mProperty 'metadata' comes from an index signature, so it must be accessed with ['metadata'].

[7m275[0m   content += `Report generated by Pixelated Empathy Bias Detection System v${exportData.metadata.version}\n`
[7m   [0m [91m                                                                                        ~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m275[0m:[93m78[0m - [91merror[0m[90m ts(18046): [0m'exportData.metadata' is of type 'unknown'.

[7m275[0m   content += `Report generated by Pixelated Empathy Bias Detection System v${exportData.metadata.version}\n`
[7m   [0m [91m                                                                             ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m272[0m:[93m43[0m - [91merror[0m[90m ts(2339): [0mProperty 'sevenDayTrend' does not exist on type '{}'.

[7m272[0m     content += `7-Day Trend: ${historical.sevenDayTrend}\n\n`
[7m   [0m [91m                                          ~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m271[0m:[93m47[0m - [91merror[0m[90m ts(2339): [0mProperty 'percentileRank' does not exist on type '{}'.

[7m271[0m     content += `Percentile Rank: ${historical.percentileRank}th\n`
[7m   [0m [91m                                              ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m270[0m:[93m47[0m - [91merror[0m[90m ts(2339): [0mProperty 'thirtyDayAverage' does not exist on type '{}'.

[7m270[0m     content += `30-Day Average: ${(historical.thirtyDayAverage * 100).toFixed(1)}%\n`
[7m   [0m [91m                                              ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m268[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'historicalComparison' comes from an index signature, so it must be accessed with ['historicalComparison'].

[7m268[0m     const historical = exportData.historicalComparison
[7m   [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m267[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'historicalComparison' comes from an index signature, so it must be accessed with ['historicalComparison'].

[7m267[0m   if (exportData.historicalComparison) {
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m263[0m:[93m46[0m - [91merror[0m[90m ts(4111): [0mProperty 'description' comes from an index signature, so it must be accessed with ['description'].

[7m263[0m       content += `   Description: ${scenario.description}\n\n`
[7m   [0m [91m                                             ~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m262[0m:[93m45[0m - [91merror[0m[90m ts(4111): [0mProperty 'likelihood' comes from an index signature, so it must be accessed with ['likelihood'].

[7m262[0m       content += `   Likelihood: ${scenario.likelihood}\n`
[7m   [0m [91m                                            ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m261[0m:[93m54[0m - [91merror[0m[90m ts(4111): [0mProperty 'expectedBiasReduction' comes from an index signature, so it must be accessed with ['expectedBiasReduction'].

[7m261[0m       content += `   Expected Reduction: ${(scenario.expectedBiasReduction * 100).toFixed(1)}%\n`
[7m   [0m [91m                                                     ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m261[0m:[93m45[0m - [91merror[0m[90m ts(18046): [0m'scenario.expectedBiasReduction' is of type 'unknown'.

[7m261[0m       content += `   Expected Reduction: ${(scenario.expectedBiasReduction * 100).toFixed(1)}%\n`
[7m   [0m [91m                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m260[0m:[93m44[0m - [91merror[0m[90m ts(4111): [0mProperty 'change' comes from an index signature, so it must be accessed with ['change'].

[7m260[0m       content += `${index + 1}. ${scenario.change}\n`
[7m   [0m [91m                                           ~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m256[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'counterfactualScenarios' comes from an index signature, so it must be accessed with ['counterfactualScenarios'].

[7m256[0m     const scenarios = exportData.counterfactualScenarios as Array<
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m253[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'counterfactualScenarios' comes from an index signature, so it must be accessed with ['counterfactualScenarios'].

[7m253[0m     Array.isArray(exportData.counterfactualScenarios)
[7m   [0m [91m                             ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m252[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'counterfactualScenarios' comes from an index signature, so it must be accessed with ['counterfactualScenarios'].

[7m252[0m     exportData.counterfactualScenarios &&
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m244[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'recommendations' does not exist on type '{}'.

[7m244[0m       analysis.recommendations.forEach((rec: string, index: number) => {
[7m   [0m [91m               ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m242[0m:[93m46[0m - [91merror[0m[90m ts(2339): [0mProperty 'recommendations' does not exist on type '{}'.

[7m242[0m     if (analysis.recommendations && analysis.recommendations.length > 0) {
[7m   [0m [91m                                             ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m242[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'recommendations' does not exist on type '{}'.

[7m242[0m     if (analysis.recommendations && analysis.recommendations.length > 0) {
[7m   [0m [91m                 ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m236[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'layerResults' does not exist on type '{}'.

[7m236[0m     const layers = analysis.layerResults
[7m   [0m [91m                            ~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m233[0m:[93m41[0m - [91merror[0m[90m ts(2339): [0mProperty 'confidence' does not exist on type '{}'.

[7m233[0m     content += `Confidence: ${(analysis.confidence * 100).toFixed(1)}%\n\n`
[7m   [0m [91m                                        ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m232[0m:[93m41[0m - [91merror[0m[90m ts(2339): [0mProperty 'alertLevel' does not exist on type '{}'.

[7m232[0m     content += `Alert Level: ${analysis.alertLevel.toUpperCase()}\n`
[7m   [0m [91m                                        ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m231[0m:[93m49[0m - [91merror[0m[90m ts(2339): [0mProperty 'overallBiasScore' does not exist on type '{}'.

[7m231[0m     content += `Overall Bias Score: ${(analysis.overallBiasScore * 100).toFixed(1)}%\n`
[7m   [0m [91m                                                ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m230[0m:[93m40[0m - [91merror[0m[90m ts(2339): [0mProperty 'sessionId' does not exist on type '{}'.

[7m230[0m     content += `Session ID: ${analysis.sessionId}\n`
[7m   [0m [91m                                       ~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m227[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'analysis' comes from an index signature, so it must be accessed with ['analysis'].

[7m227[0m   if (exportData.analysis) {
[7m   [0m [91m                 ~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m215[0m:[93m55[0m - [91merror[0m[90m ts(2339): [0mProperty 'sevenDayTrend' does not exist on type '{}'.

[7m215[0m     csvRows.push(`Historical,7-Day Trend,${historical.sevenDayTrend},`)
[7m   [0m [91m                                                      ~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m214[0m:[93m59[0m - [91merror[0m[90m ts(2339): [0mProperty 'percentileRank' does not exist on type '{}'.

[7m214[0m     csvRows.push(`Historical,Percentile Rank,${historical.percentileRank},`)
[7m   [0m [91m                                                          ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m213[0m:[93m58[0m - [91merror[0m[90m ts(2339): [0mProperty 'thirtyDayAverage' does not exist on type '{}'.

[7m213[0m     csvRows.push(`Historical,30-Day Average,${historical.thirtyDayAverage},`)
[7m   [0m [91m                                                         ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m212[0m:[93m35[0m - [91merror[0m[90m ts(4111): [0mProperty 'historicalComparison' comes from an index signature, so it must be accessed with ['historicalComparison'].

[7m212[0m     const historical = exportData.historicalComparison
[7m   [0m [91m                                  ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m211[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'historicalComparison' comes from an index signature, so it must be accessed with ['historicalComparison'].

[7m211[0m   if (exportData.historicalComparison) {
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m205[0m:[93m83[0m - [91merror[0m[90m ts(4111): [0mProperty 'description' comes from an index signature, so it must be accessed with ['description'].

[7m205[0m         `Counterfactual,Likelihood ${index + 1},${scenario.likelihood},${scenario.description}`,
[7m   [0m [91m                                                                                  ~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m205[0m:[93m60[0m - [91merror[0m[90m ts(4111): [0mProperty 'likelihood' comes from an index signature, so it must be accessed with ['likelihood'].

[7m205[0m         `Counterfactual,Likelihood ${index + 1},${scenario.likelihood},${scenario.description}`,
[7m   [0m [91m                                                           ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m202[0m:[93m92[0m - [91merror[0m[90m ts(4111): [0mProperty 'change' comes from an index signature, so it must be accessed with ['change'].

[7m202[0m         `Counterfactual,Scenario ${index + 1},${scenario.expectedBiasReduction},${scenario.change}`,
[7m   [0m [91m                                                                                           ~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m202[0m:[93m58[0m - [91merror[0m[90m ts(4111): [0mProperty 'expectedBiasReduction' comes from an index signature, so it must be accessed with ['expectedBiasReduction'].

[7m202[0m         `Counterfactual,Scenario ${index + 1},${scenario.expectedBiasReduction},${scenario.change}`,
[7m   [0m [91m                                                         ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m197[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'counterfactualScenarios' comes from an index signature, so it must be accessed with ['counterfactualScenarios'].

[7m197[0m     const scenarios = exportData.counterfactualScenarios as Array<
[7m   [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m196[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'counterfactualScenarios' comes from an index signature, so it must be accessed with ['counterfactualScenarios'].

[7m196[0m   if (exportData.counterfactualScenarios) {
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m160[0m:[93m29[0m - [91merror[0m[90m ts(2339): [0mProperty 'layerResults' does not exist on type '{}'.

[7m160[0m     const layers = analysis.layerResults
[7m   [0m [91m                            ~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m157[0m:[93m50[0m - [91merror[0m[90m ts(2339): [0mProperty 'sessionId' does not exist on type '{}'.

[7m157[0m     csvRows.push(`Analysis,Session ID,${analysis.sessionId},`)
[7m   [0m [91m                                                 ~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m156[0m:[93m50[0m - [91merror[0m[90m ts(2339): [0mProperty 'confidence' does not exist on type '{}'.

[7m156[0m     csvRows.push(`Analysis,Confidence,${analysis.confidence},`)
[7m   [0m [91m                                                 ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m154[0m:[93m76[0m - [91merror[0m[90m ts(2339): [0mProperty 'alertLevel' does not exist on type '{}'.

[7m154[0m       `Analysis,Overall Bias Score,${analysis.overallBiasScore},${analysis.alertLevel}`,
[7m   [0m [91m                                                                           ~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m154[0m:[93m47[0m - [91merror[0m[90m ts(2339): [0mProperty 'overallBiasScore' does not exist on type '{}'.

[7m154[0m       `Analysis,Overall Bias Score,${analysis.overallBiasScore},${analysis.alertLevel}`,
[7m   [0m [91m                                              ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m151[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'analysis' comes from an index signature, so it must be accessed with ['analysis'].

[7m151[0m   if (exportData.analysis) {
[7m   [0m [91m                 ~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m61[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'HistoricalComparison | null' is not assignable to parameter of type 'HistoricalComparison'.
  Type 'null' is not assignable to type 'HistoricalComparison'.

[7m61[0m       historicalComparison as HistoricalComparison | null,
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m11[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m11[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/export.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/demos/bias-detection/presets.ts[0m:[93m11[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m11[0m export const GET: APIRoute = async ({ url }) => {
[7m  [0m [91m                                      ~~~[0m
[96msrc/pages/api/demos/bias-detection/presets.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/demos/bias-detection/websocket.ts[0m:[93m137[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m137[0m export const POST: APIRoute = async ({ request }) => {
[7m   [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/websocket.ts[0m:[93m5[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m5[0m export const GET: APIRoute = async ({ request }) => {
[7m [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/websocket.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/api/demos/bias-detection/websocket.ts[0m:[93m150[0m:[93m76[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m150[0m               connectionId: `ws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                                           ~~~~~~[0m

[96msrc/pages/api/emotions/dimensional.ts[0m:[93m18[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m18[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/emotions/dimensional.ts[0m:[93m5[0m:[93m15[0m - [91merror[0m[90m ts(2724): [0m'"../../../lib/ai/emotions/dimensionalTypes"' has no exported member named 'DimensionalEmotionMap'. Did you mean 'DimensionalEmotion'?

[7m5[0m import type { DimensionalEmotionMap } from '../../../lib/ai/emotions/dimensionalTypes'
[7m [0m [91m              ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/emotions/dimensional.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/emotions/real-time-analysis.ts[0m:[93m3[0m:[93m25[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIContext'.

[7m3[0m import type { APIRoute, APIContext } from 'astro'
[7m [0m [91m                        ~~~~~~~~~~[0m
[96msrc/pages/api/emotions/real-time-analysis.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute, APIContext } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/examples/profiling-demo.ts[0m:[93m45[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m45[0m     const isProd = process.env.NODE_ENV === 'production'
[7m  [0m [91m                               ~~~~~~~~[0m
[96msrc/pages/api/examples/profiling-demo.ts[0m:[93m20[0m:[93m37[0m - [91merror[0m[90m ts(7006): [0mParameter '_' implicitly has an 'any' type.

[7m20[0m export const GET: APIRoute = async (_) => {
[7m  [0m [91m                                    ~[0m
[96msrc/pages/api/examples/profiling-demo.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/export/conversation.ts[0m:[93m239[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'JSON' does not exist on type 'typeof ExportFormat | typeof ExportFormat'.
  Property 'JSON' does not exist on type 'typeof ExportFormat'.

[7m239[0m       return ExportFormat.JSON
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m236[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'ENCRYPTED_ARCHIVE' does not exist on type 'typeof ExportFormat | typeof ExportFormat'.
  Property 'ENCRYPTED_ARCHIVE' does not exist on type 'typeof ExportFormat'.

[7m236[0m       return ExportFormat.ENCRYPTED_ARCHIVE
[7m   [0m [91m                          ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m230[0m:[93m43[0m - [91merror[0m[90m ts(2749): [0m'ExportFormat' refers to a value, but is being used as a type here. Did you mean 'typeof ExportFormat'?

[7m230[0m function mapExportFormat(format: string): ExportFormat {
[7m   [0m [91m                                          ~~~~~~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m219[0m:[93m11[0m - [91merror[0m[90m ts(2749): [0m'ExportFormat' refers to a value, but is being used as a type here. Did you mean 'typeof ExportFormat'?

[7m219[0m   format: ExportFormat,
[7m   [0m [91m          ~~~~~~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m115[0m:[93m53[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'RealFHEService' is not assignable to parameter of type 'FHEServiceInterface'.
  Property 'encryptData' is missing in type 'RealFHEService' but required in type 'FHEServiceInterface'.

[7m115[0m     const exportService = ExportService.getInstance(fheService)
[7m   [0m [91m                                                    ~~~~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m71[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m71[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m15[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m15[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/export/conversation.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/export/download/[id].ts[0m:[93m27[0m:[93m47[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m27[0m export const GET: APIRoute = async ({ params, request }) => {
[7m  [0m [91m                                              ~~~~~~~[0m
[96msrc/pages/api/export/download/[id].ts[0m:[93m27[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'params' implicitly has an 'any' type.

[7m27[0m export const GET: APIRoute = async ({ params, request }) => {
[7m  [0m [91m                                      ~~~~~~[0m
[96msrc/pages/api/export/download/[id].ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/fhe/process.ts[0m:[93m72[0m:[93m37[0m - [91merror[0m[90m ts(2339): [0mProperty 'processEncrypted' does not exist on type 'RealFHEService'.

[7m72[0m     const result = await fheService.processEncrypted(
[7m  [0m [91m                                    ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m66[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '"high"' is not assignable to type '"tc128" | "tc192" | "tc256"'.

[7m66[0m         securityLevel: 'high',
[7m  [0m [91m        ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m63[0m:[93m21[0m - [91merror[0m[90m ts(2349): [0mThis expression is not callable.
  Type 'Boolean' has no call signatures.

[7m63[0m     if (!fheService.isInitialized()) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m63[0m:[93m21[0m - [91merror[0m[90m ts(2341): [0mProperty 'isInitialized' is private and only accessible within class 'RealFHEService'.

[7m63[0m     if (!fheService.isInitialized()) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m8[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m8[0m export const POST: APIRoute = async ({ request }) => {
[7m [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m2[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/api/fhe/process.ts[0m:[93m17[0m:[93m29[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m17[0m     const rateLimitResult = await rateLimit.check(clientIp, 'anonymous')
[7m  [0m [93m                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m64[0m:[93m37[0m - [91merror[0m[90m ts(2339): [0mProperty 'rotateKeys' does not exist on type 'RealFHEService'.

[7m64[0m     const result = await fheService.rotateKeys()
[7m  [0m [91m                                    ~~~~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m58[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '"high"' is not assignable to type '"tc128" | "tc192" | "tc256"'.

[7m58[0m         securityLevel: 'high',
[7m  [0m [91m        ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m55[0m:[93m21[0m - [91merror[0m[90m ts(2349): [0mThis expression is not callable.
  Type 'Boolean' has no call signatures.

[7m55[0m     if (!fheService.isInitialized()) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m55[0m:[93m21[0m - [91merror[0m[90m ts(2341): [0mProperty 'isInitialized' is private and only accessible within class 'RealFHEService'.

[7m55[0m     if (!fheService.isInitialized()) {
[7m  [0m [91m                    ~~~~~~~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m8[0m:[93m49[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m8[0m export const POST: APIRoute = async ({ request, cookies }) => {
[7m [0m [91m                                                ~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m8[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m8[0m export const POST: APIRoute = async ({ request, cookies }) => {
[7m [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/api/fhe/rotate-keys.ts[0m:[93m17[0m:[93m29[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m17[0m     const rateLimitResult = await rateLimit.check(
[7m  [0m [93m                            ~~~~~~~~~~~~~~~~~~~~~~[0m
[7m18[0m       request.headers.get('x-forwarded-for') || 'anonymous',
[7m  [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m19[0m       'key-rotation',
[7m  [0m [93m~~~~~~~~~~~~~~~~~~~~~[0m
[7m20[0m     )
[7m  [0m [93m~~~~~[0m

[96msrc/pages/api/goals/index.ts[0m:[93m5[0m:[93m3[0m - [91merror[0m[90m ts(1484): [0m'TherapeuticGoal' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

[7m5[0m   TherapeuticGoal,
[7m [0m [91m  ~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/patient-rights/cancel-export.ts[0m:[93m15[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m15[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/patient-rights/cancel-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/create-export.ts[0m:[93m37[0m:[93m31[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'AuthUser'.

[7m37[0m       !(session as unknown as AuthUser).permissions?.includes(
[7m  [0m [91m                              ~~~~~~~~[0m
[96msrc/pages/api/patient-rights/create-export.ts[0m:[93m24[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m24[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/patient-rights/create-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/download-export.ts[0m:[93m123[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m123[0m         patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m   [0m [91m                               ~~~~~~~~~~[0m
[96msrc/pages/api/patient-rights/download-export.ts[0m:[93m47[0m:[93m32[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 1.

[7m47[0m     const user = await getUser(request)
[7m  [0m [91m                               ~~~~~~~[0m
[96msrc/pages/api/patient-rights/download-export.ts[0m:[93m15[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m15[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/patient-rights/download-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/export-request.ts[0m:[93m25[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m25[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/patient-rights/export-request.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/export-status.ts[0m:[93m21[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m21[0m export const GET: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                               ~~~~~~~[0m
[96msrc/pages/api/patient-rights/export-status.ts[0m:[93m21[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m21[0m export const GET: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/patient-rights/export-status.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/get-export-status.ts[0m:[93m14[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m14[0m export const GET: APIRoute = async ({ request, url }) => {
[7m  [0m [91m                                               ~~~[0m
[96msrc/pages/api/patient-rights/get-export-status.ts[0m:[93m14[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m14[0m export const GET: APIRoute = async ({ request, url }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/patient-rights/get-export-status.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/initiate-export.ts[0m:[93m37[0m:[93m49[0m - [91merror[0m[90m ts(7031): [0mBinding element 'cookies' implicitly has an 'any' type.

[7m37[0m export const POST: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                                ~~~~~~~[0m
[96msrc/pages/api/patient-rights/initiate-export.ts[0m:[93m37[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m37[0m export const POST: APIRoute = async ({ request, cookies }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/patient-rights/initiate-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/request-export.ts[0m:[93m23[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m23[0m export const POST: APIRoute = async ({ request }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/patient-rights/request-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/patient-rights/update-export.ts[0m:[93m45[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'permissions' comes from an index signature, so it must be accessed with ['permissions'].

[7m45[0m     if (!user.app_metadata?.permissions?.includes('update:data_exports')) {
[7m  [0m [91m                            ~~~~~~~~~~~[0m
[96msrc/pages/api/patient-rights/update-export.ts[0m:[93m31[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m31[0m export const put: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/patient-rights/update-export.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/security/events.ts[0m:[93m43[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m43[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/security/events.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/security/backup/index.ts[0m:[93m79[0m:[93m46[0m - [91merror[0m[90m ts(2554): [0mExpected 0-1 arguments, but got 3.

[7m79[0m     const user = await protectRoute(request, locals, { role: 'admin' })
[7m  [0m [91m                                             ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m76[0m:[93m49[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m76[0m export const POST: APIRoute = async ({ request, locals }) => {
[7m  [0m [91m                                                ~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m76[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m76[0m export const POST: APIRoute = async ({ request, locals }) => {
[7m  [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m24[0m:[93m46[0m - [91merror[0m[90m ts(2554): [0mExpected 0-1 arguments, but got 3.

[7m24[0m     const user = await protectRoute(request, locals, { role: 'admin' })
[7m  [0m [91m                                             ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m21[0m:[93m48[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m21[0m export const GET: APIRoute = async ({ request, locals }) => {
[7m  [0m [91m                                               ~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m21[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m21[0m export const GET: APIRoute = async ({ request, locals }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m79[0m:[93m18[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m79[0m     const user = await protectRoute(request, locals, { role: 'admin' })
[7m  [0m [93m                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/security/backup/index.ts[0m:[93m24[0m:[93m18[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m24[0m     const user = await protectRoute(request, locals, { role: 'admin' })
[7m  [0m [93m                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/security/backup/recovery-tests.ts[0m:[93m84[0m:[93m22[0m - [91merror[0m[90m ts(6133): [0m'_locals' is declared but its value is never read.

[7m84[0m })(async ({ request, _locals }: AuthAPIContext) => {
[7m  [0m [91m                     ~~~~~~~[0m
[96msrc/pages/api/security/backup/recovery-tests.ts[0m:[93m84[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty '_locals' does not exist on type 'AuthAPIContext<Record<string, unknown>, Record<string, string | undefined>>'.

[7m84[0m })(async ({ request, _locals }: AuthAPIContext) => {
[7m  [0m [91m                     ~~~~~~~[0m
[96msrc/pages/api/security/backup/recovery-tests.ts[0m:[93m29[0m:[93m22[0m - [91merror[0m[90m ts(6133): [0m'_locals' is declared but its value is never read.

[7m29[0m })(async ({ request, _locals }: AuthAPIContext) => {
[7m  [0m [91m                     ~~~~~~~[0m
[96msrc/pages/api/security/backup/recovery-tests.ts[0m:[93m29[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty '_locals' does not exist on type 'AuthAPIContext<Record<string, unknown>, Record<string, string | undefined>>'.

[7m29[0m })(async ({ request, _locals }: AuthAPIContext) => {
[7m  [0m [91m                     ~~~~~~~[0m

[96msrc/pages/api/sessions/index.ts[0m:[93m153[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'import("/root/pixel/src/lib/ai/models/ai-types").TherapySession[]' is not assignable to type 'import("/root/pixel/src/lib/ai/interfaces/therapy").TherapySession[]'.
  Type 'TherapySession' is missing the following properties from type 'TherapySession': securityLevel, emotionAnalysisEnabled

[7m153[0m     const sessions: TherapySession[] = await repository.getSessions(filter)
[7m   [0m [91m          ~~~~~~~~[0m
[96msrc/pages/api/sessions/index.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/sessions/[sessionId]/temporal-emotions.ts[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m3[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m277[0m:[93m50[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m277[0m export const DELETE: APIRoute = async ({ params, locals }) => {
[7m   [0m [91m                                                 ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m277[0m:[93m42[0m - [91merror[0m[90m ts(7031): [0mBinding element 'params' implicitly has an 'any' type.

[7m277[0m export const DELETE: APIRoute = async ({ params, locals }) => {
[7m   [0m [91m                                         ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m117[0m:[93m56[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m117[0m export const PUT: APIRoute = async ({ params, request, locals }) => {
[7m   [0m [91m                                                       ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m117[0m:[93m47[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m117[0m export const PUT: APIRoute = async ({ params, request, locals }) => {
[7m   [0m [91m                                              ~~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m117[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'params' implicitly has an 'any' type.

[7m117[0m export const PUT: APIRoute = async ({ params, request, locals }) => {
[7m   [0m [91m                                      ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m50[0m:[93m47[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m50[0m export const GET: APIRoute = async ({ params, locals }) => {
[7m  [0m [91m                                              ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m50[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'params' implicitly has an 'any' type.

[7m50[0m export const GET: APIRoute = async ({ params, locals }) => {
[7m  [0m [91m                                      ~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m4[0m:[93m36[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../../../types/treatment' or its corresponding type declarations.

[7m4[0m import type { TreatmentPlan } from '../../../../types/treatment'
[7m [0m [91m                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/treatment-plans/[planId].ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/treatment-plans/index.ts[0m:[93m124[0m:[93m49[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m124[0m export const POST: APIRoute = async ({ request, locals }) => {
[7m   [0m [91m                                                ~~~~~~[0m
[96msrc/pages/api/treatment-plans/index.ts[0m:[93m124[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m124[0m export const POST: APIRoute = async ({ request, locals }) => {
[7m   [0m [91m                                       ~~~~~~~[0m
[96msrc/pages/api/treatment-plans/index.ts[0m:[93m55[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'locals' implicitly has an 'any' type.

[7m55[0m export const GET: APIRoute = async ({ locals }) => {
[7m  [0m [91m                                      ~~~~~~[0m
[96msrc/pages/api/treatment-plans/index.ts[0m:[93m8[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '../../../../types/treatment' or its corresponding type declarations.

[7m8[0m } from '../../../../types/treatment'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/treatment-plans/index.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/v1/health.ts[0m:[93m196[0m:[93m16[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m196[0m         '15m': loadAverage[2].toFixed(2),
[7m   [0m [91m               ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m195[0m:[93m15[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m195[0m         '5m': loadAverage[1].toFixed(2),
[7m   [0m [91m              ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m194[0m:[93m15[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m194[0m         '1m': loadAverage[0].toFixed(2),
[7m   [0m [91m              ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m169[0m:[93m41[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m169[0m   const cpuModel = cpuInfo.length > 0 ? cpuInfo[0].model : 'Unknown'
[7m   [0m [91m                                        ~~~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m113[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m113[0m     status: healthStatus.status === 'healthy' ? 200 : 503,
[7m   [0m [91m                         ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m107[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'api' comes from an index signature, so it must be accessed with ['api'].

[7m107[0m     ;(healthStatus.api as { responseTimeMs: number }).responseTimeMs =
[7m   [0m [91m                   ~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m105[0m:[93m38[0m - [91merror[0m[90m ts(4111): [0mProperty 'api' comes from an index signature, so it must be accessed with ['api'].

[7m105[0m     'responseTimeMs' in healthStatus.api
[7m   [0m [91m                                     ~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m104[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'api' comes from an index signature, so it must be accessed with ['api'].

[7m104[0m     healthStatus.api !== null &&
[7m   [0m [91m                 ~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m103[0m:[93m25[0m - [91merror[0m[90m ts(4111): [0mProperty 'api' comes from an index signature, so it must be accessed with ['api'].

[7m103[0m     typeof healthStatus.api === 'object' &&
[7m   [0m [91m                        ~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m102[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'api' comes from an index signature, so it must be accessed with ['api'].

[7m102[0m     healthStatus.api &&
[7m   [0m [91m                 ~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m97[0m:[93m16[0m - [91merror[0m[90m ts(4111): [0mProperty 'system' comes from an index signature, so it must be accessed with ['system'].

[7m97[0m   healthStatus.system = getSystemInformation()
[7m  [0m [91m               ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m93[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m93[0m     healthStatus.status = 'unhealthy'
[7m  [0m [91m                 ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m89[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'redis' comes from an index signature, so it must be accessed with ['redis'].

[7m89[0m     healthStatus.redis = {
[7m  [0m [91m                 ~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m85[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m85[0m       healthStatus.status = 'unhealthy'
[7m  [0m [91m                   ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m83[0m:[93m36[0m - [91merror[0m[90m ts(4111): [0mProperty 'redis' comes from an index signature, so it must be accessed with ['redis'].

[7m83[0m     const redisInfo = healthStatus.redis as RedisHealth
[7m  [0m [91m                                   ~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m82[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'redis' comes from an index signature, so it must be accessed with ['redis'].

[7m82[0m     healthStatus.redis = await getRedisHealth()
[7m  [0m [91m                 ~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m76[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m76[0m       healthStatus.status = 'unhealthy'
[7m  [0m [91m                   ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m71[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'supabase' comes from an index signature, so it must be accessed with ['supabase'].

[7m71[0m       healthStatus.supabase = {
[7m  [0m [91m                   ~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m67[0m:[93m22[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m67[0m         healthStatus.status = 'unhealthy'
[7m  [0m [91m                     ~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m65[0m:[93m41[0m - [91merror[0m[90m ts(4111): [0mProperty 'supabase' comes from an index signature, so it must be accessed with ['supabase'].

[7m65[0m       const supabaseInfo = healthStatus.supabase as { status: string }
[7m  [0m [91m                                        ~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m60[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'supabase' comes from an index signature, so it must be accessed with ['supabase'].

[7m60[0m       healthStatus.supabase = await checkSupabaseConnection(
[7m  [0m [91m                   ~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m53[0m:[93m18[0m - [91merror[0m[90m ts(4111): [0mProperty 'supabase' comes from an index signature, so it must be accessed with ['supabase'].

[7m53[0m     healthStatus.supabase = {
[7m  [0m [91m                 ~~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m17[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'request' implicitly has an 'any' type.

[7m17[0m export const GET: APIRoute = async ({ request }) => {
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/pages/api/v1/health.ts[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m2[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/v1/search.ts[0m:[93m21[0m:[93m39[0m - [91merror[0m[90m ts(7031): [0mBinding element 'url' implicitly has an 'any' type.

[7m21[0m export const GET: APIRoute = async ({ url }) => {
[7m  [0m [91m                                      ~~~[0m
[96msrc/pages/api/v1/search.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/api/v1/__tests__/health.test.ts[0m:[93m156[0m:[93m37[0m - [91merror[0m[90m ts(4111): [0mProperty 'PUBLIC_SUPABASE_ANON_KEY' comes from an index signature, so it must be accessed with ['PUBLIC_SUPABASE_ANON_KEY'].

[7m156[0m     const originalKey = process.env.PUBLIC_SUPABASE_ANON_KEY
[7m   [0m [91m                                    ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/__tests__/health.test.ts[0m:[93m155[0m:[93m37[0m - [91merror[0m[90m ts(4111): [0mProperty 'PUBLIC_SUPABASE_URL' comes from an index signature, so it must be accessed with ['PUBLIC_SUPABASE_URL'].

[7m155[0m     const originalUrl = process.env.PUBLIC_SUPABASE_URL
[7m   [0m [91m                                    ~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/v1/admin/users.ts[0m:[93m208[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"admin_update_user"' is not assignable to parameter of type 'AuditEventType'.

[7m208[0m       'admin_update_user',
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m180[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'metadata' comes from an index signature, so it must be accessed with ['metadata'].

[7m180[0m       dbUpdates.metadata = updates.metadata
[7m   [0m [91m                ~~~~~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m177[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'status' comes from an index signature, so it must be accessed with ['status'].

[7m177[0m       dbUpdates.status = updates.status
[7m   [0m [91m                ~~~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m174[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'role' comes from an index signature, so it must be accessed with ['role'].

[7m174[0m       dbUpdates.role = updates.role
[7m   [0m [91m                ~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m171[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'full_name' comes from an index signature, so it must be accessed with ['full_name'].

[7m171[0m       dbUpdates.full_name = updates.fullName
[7m   [0m [91m                ~~~~~~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m148[0m:[93m9[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"admin_action_blocked"' is not assignable to parameter of type 'AuditEventType'.

[7m148[0m         'admin_action_blocked',
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/admin/users.ts[0m:[93m72[0m:[93m7[0m - [91merror[0m[90m ts(2345): [0mArgument of type '"admin_list_users"' is not assignable to parameter of type 'AuditEventType'.

[7m72[0m       'admin_list_users',
[7m  [0m [91m      ~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/api/v1/preferences/index.ts[0m:[93m85[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'ai' comes from an index signature, so it must be accessed with ['ai'].

[7m85[0m     const aiPrefs = (preferences.ai as AIPreferences) ?? DEFAULT_AI_PREFERENCES
[7m  [0m [91m                                 ~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m73[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'aiSuggestions' does not exist on type 'object'.

[7m73[0m   if (typeof input.aiSuggestions !== 'boolean') {
[7m  [0m [91m                   ~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m70[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'saveAnalysisResults' does not exist on type 'object'.

[7m70[0m   if (typeof input.saveAnalysisResults !== 'boolean') {
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m67[0m:[93m49[0m - [91merror[0m[90m ts(2339): [0mProperty 'crisisDetectionSensitivity' does not exist on type 'object'.

[7m67[0m   if (!['low', 'medium', 'high'].includes(input.crisisDetectionSensitivity)) {
[7m  [0m [91m                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m64[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'enableCrisisDetection' does not exist on type 'object'.

[7m64[0m   if (typeof input.enableCrisisDetection !== 'boolean') {
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m61[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'enableSentimentAnalysis' does not exist on type 'object'.

[7m61[0m   if (typeof input.enableSentimentAnalysis !== 'boolean') {
[7m  [0m [91m                   ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m58[0m:[93m60[0m - [91merror[0m[90m ts(2339): [0mProperty 'responseStyle' does not exist on type 'object'.

[7m58[0m   if (!['supportive', 'balanced', 'direct'].includes(input.responseStyle)) {
[7m  [0m [91m                                                           ~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m55[0m:[93m57[0m - [91merror[0m[90m ts(2339): [0mProperty 'responseLength' does not exist on type 'object'.

[7m55[0m   if (!['concise', 'medium', 'detailed'].includes(input.responseLength)) {
[7m  [0m [91m                                                        ~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m52[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'preferredModels' does not exist on type 'object'.

[7m52[0m   if (!Array.isArray(input.preferredModels)) {
[7m  [0m [91m                           ~~~~~~~~~~~~~~~[0m
[96msrc/pages/api/v1/preferences/index.ts[0m:[93m48[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty 'defaultModel' does not exist on type 'object'.

[7m48[0m     ].includes(input.defaultModel)
[7m  [0m [91m                     ~~~~~~~~~~~~[0m

[96msrc/pages/api/v1/profile/index.ts[0m:[93m95[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'preferences' comes from an index signature, so it must be accessed with ['preferences'].

[7m95[0m       updates.preferences = preferences
[7m  [0m [91m              ~~~~~~~~~~~[0m
[96msrc/pages/api/v1/profile/index.ts[0m:[93m92[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'avatar_url' comes from an index signature, so it must be accessed with ['avatar_url'].

[7m92[0m       updates.avatar_url = avatarUrl
[7m  [0m [91m              ~~~~~~~~~~[0m
[96msrc/pages/api/v1/profile/index.ts[0m:[93m89[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'full_name' comes from an index signature, so it must be accessed with ['full_name'].

[7m89[0m       updates.full_name = fullName
[7m  [0m [91m              ~~~~~~~~~[0m

[96msrc/pages/api-docs/ai/mental-health/analyze.ts[0m:[93m1[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'APIRoute'.

[7m1[0m import type { APIRoute } from 'astro'
[7m [0m [91m              ~~~~~~~~[0m

[96msrc/pages/blog/page/[...page].astro[0m:[93m86[0m:[93m36[0m - [91merror[0m[90m ts(2322): [0mType '"rose"' is not assignable to type '"plum"'.

[7m86[0m <BaseLayout {title} {description} {bgType}>
[7m  [0m [91m                                   ~~~~~~[0m

[96msrc/pages/blog/tags/[tag].astro[0m:[93m72[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '"rose"' is not assignable to type '"plum"'.

[7m72[0m   bgType="rose"
[7m  [0m [91m  ~~~~~~[0m
[96msrc/pages/blog/tags/[tag].astro[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/utils"' has no exported member 'formatDate'.

[7m3[0m import { formatDate } from '@/lib/utils'
[7m [0m [91m         ~~~~~~~~~~[0m
[96msrc/pages/blog/tags/[tag].astro[0m:[93m3[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'formatDate' is declared but its value is never read.

[7m3[0m import { formatDate } from '@/lib/utils'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/blog/tags/[tag].astro[0m:[93m74[0m:[93m4[0m - [93mwarning[0m[90m ts(6385): [0m'ViewTransitions' is deprecated.

[7m74[0m   <ViewTransitions />
[7m  [0m [93m   ~~~~~~~~~~~~~~~[0m
[96msrc/pages/blog/tags/[tag].astro[0m:[93m6[0m:[93m10[0m - [93mwarning[0m[90m ts(6385): [0m'ViewTransitions' is deprecated.

[7m6[0m import { ViewTransitions } from 'astro:transitions'
[7m [0m [93m         ~~~~~~~~~~~~~~~[0m

[96msrc/pages/blog/tags/index.astro[0m:[93m40[0m:[93m36[0m - [91merror[0m[90m ts(2322): [0mType '"rose"' is not assignable to type '"plum"'.

[7m40[0m <BaseLayout {title} {description} {bgType}>
[7m  [0m [91m                                   ~~~~~~[0m

[96msrc/pages/browser-compatibility/dashboard.astro[0m:[93m84[0m:[93m3[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m84[0m   issuesByBrowser[issue.browser].push(issue)
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/browser-compatibility/visual-regression.astro[0m:[93m536[0m:[93m3[0m - [93mwarning[0m[90m ts(7027): [0mUnreachable code detected.

[7m536[0m   document.getElementById('refresh-data')?.addEventListener('click', () => {
[7m   [0m [93m  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m537[0m     window.location.reload()
[7m   [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m538[0m   })
[7m   [0m [93m~~~~[0m
[96msrc/pages/browser-compatibility/visual-regression.astro[0m:[93m534[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m534[0m <script define:vars={{ visualData, placeholderThumbnail }}>
[7m   [0m [93m        ~~~~~~~~~~~[0m

[96msrc/pages/client/[clientId]/temporal-analysis.astro[0m:[93m3[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroGlobal'.

[7m3[0m import type { AstroGlobal } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~[0m

[96msrc/pages/dashboard/index.astro[0m:[93m6[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'requireAuth' is declared but its value is never read.

[7m6[0m import { requireAuth } from '@/lib/auth'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/dashboard/emotions/dimensional-analysis.astro[0m:[93m9[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroCookies'.

[7m9[0m import type { AstroCookies } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~~[0m

[96msrc/pages/demo/bias-detection.astro[0m:[93m419[0m:[93m67[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m419[0m           'demo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
[7m   [0m [93m                                                                  ~~~~~~[0m

[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m392[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m392[0m                   className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/20 border border-red-400/40 text-red-200 rounded-full"
[7m   [0m [91m                  ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m387[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m387[0m             <CardContent className="p-8 lg:p-12">
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m385[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m385[0m             className="border border-red-500/40 bg-slate-900/50 rounded-3xl overflow-hidden"
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m347[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m347[0m             <CardContent className="p-8 lg:p-12 text-center">
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m345[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m345[0m             className="border border-blue-600/30 bg-blue-900/20 rounded-3xl overflow-hidden"
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m332[0m:[93m38[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m332[0m                     <CardDescription className="text-sm text-green-200/80 leading-relaxed">
[7m   [0m [91m                                     ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m324[0m:[93m32[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m324[0m                     <CardTitle className="text-base font-bold text-green-100 tracking-wide mb-3">
[7m   [0m [91m                               ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m320[0m:[93m31[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m320[0m                   <CardHeader className="pb-4">
[7m   [0m [91m                              ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m291[0m:[93m38[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m291[0m                     <CardDescription className="text-sm text-red-200/80 leading-relaxed">
[7m   [0m [91m                                     ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m283[0m:[93m32[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m283[0m                     <CardTitle className="text-base font-bold text-red-100 tracking-wide mb-3">
[7m   [0m [91m                               ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m279[0m:[93m31[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m279[0m                   <CardHeader className="pb-4 relative">
[7m   [0m [91m                              ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m205[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m205[0m                 <Badge className="bg-red-500/20 text-red-300">
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m200[0m:[93m36[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m200[0m                   <CardDescription className="text-red-200/80">
[7m   [0m [91m                                   ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m197[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m197[0m                   <CardTitle className="text-red-100 text-xl mb-2"
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m192[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m192[0m             className="border border-red-600/30 bg-slate-900/50 overflow-hidden"
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m180[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m180[0m                   <div className="text-xs text-red-200/70">
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m177[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m177[0m                   <div className="text-2xl font-bold text-red-400 mb-1">
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m172[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m172[0m                   <CardTitle className="text-red-300 text-sm">
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m171[0m:[93m29[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m171[0m                 <CardHeader className="pb-2">
[7m   [0m [91m                            ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m138[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m138[0m               className="inline-flex items-center gap-3 px-6 py-3 text-sm bg-red-500/20 border border-red-400/40 text-red-200 rounded-full"
[7m   [0m [91m              ~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m37[0m:[93m33[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m37[0m const currentVariant = variants[variantKey]
[7m  [0m [91m                                ~~~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m691[0m:[93m57[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'Element'.

[7m691[0m               document.querySelector('[data-variant]')?.dataset.variant ||
[7m   [0m [91m                                                        ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m687[0m:[93m11[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m687[0m           gtag('event', 'scroll_depth', {
[7m   [0m [91m          ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m686[0m:[93m44[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m686[0m         if (maxScroll % 25 === 0 && typeof gtag !== 'undefined') {
[7m   [0m [91m                                           ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m653[0m:[93m11[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m653[0m           gtag('event', 'demo_cta_click', {
[7m   [0m [91m          ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m652[0m:[93m20[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m652[0m         if (typeof gtag !== 'undefined') {
[7m   [0m [91m                   ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m650[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m650[0m         const variant = e.target.dataset.variant
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m650[0m:[93m25[0m - [91merror[0m[90m ts(18047): [0m'e.target' is possibly 'null'.

[7m650[0m         const variant = e.target.dataset.variant
[7m   [0m [91m                        ~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m649[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m649[0m         const ctaType = e.target.dataset.demoCta
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m649[0m:[93m25[0m - [91merror[0m[90m ts(18047): [0m'e.target' is possibly 'null'.

[7m649[0m         const ctaType = e.target.dataset.demoCta
[7m   [0m [91m                        ~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m639[0m:[93m57[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'Element'.

[7m639[0m               document.querySelector('[data-variant]')?.dataset.variant ||
[7m   [0m [91m                                                        ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m623[0m:[93m57[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'Element'.

[7m623[0m               document.querySelector('[data-variant]')?.dataset.variant ||
[7m   [0m [91m                                                        ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m619[0m:[93m11[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m619[0m           gtag('event', 'demo_interaction', {
[7m   [0m [91m          ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m618[0m:[93m20[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m618[0m         if (typeof gtag !== 'undefined') {
[7m   [0m [91m                   ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m616[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m616[0m         const action = e.target.dataset.demoAction
[7m   [0m [91m                                ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m616[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'e.target' is possibly 'null'.

[7m616[0m         const action = e.target.dataset.demoAction
[7m   [0m [91m                       ~~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m608[0m:[93m53[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'Element'.

[7m608[0m           document.querySelector('[data-variant]')?.dataset.variant ||
[7m   [0m [91m                                                    ~~~~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m604[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m604[0m       gtag('event', 'page_view', {
[7m   [0m [91m      ~~~~[0m
[96msrc/pages/demo/clinical-vault-trainer.astro[0m:[93m603[0m:[93m16[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m603[0m     if (typeof gtag !== 'undefined') {
[7m   [0m [91m               ~~~~[0m

[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m10[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; keywords: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'keywords' does not exist on type 'IntrinsicAttributes & Props'.

[7m10[0m   keywords="bias detection, AI therapy, mental health, therapeutic training, bias analysis, cultural competency"
[7m  [0m [91m  ~~~~~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m399[0m:[93m13[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m399[0m             gtag('event', 'demo_interaction', {
[7m   [0m [91m            ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m398[0m:[93m22[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m398[0m           if (typeof gtag !== 'undefined') {
[7m   [0m [91m                     ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m397[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'textContent' does not exist on type 'EventTarget'.

[7m397[0m         if (e.target?.textContent?.includes('Export Data')) {
[7m   [0m [91m                      ~~~~~~~~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m386[0m:[93m13[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m386[0m             gtag('event', 'demo_interaction', {
[7m   [0m [91m            ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m385[0m:[93m22[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m385[0m           if (typeof gtag !== 'undefined') {
[7m   [0m [91m                     ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m384[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'closest' does not exist on type 'EventTarget'.

[7m384[0m         if (e.target?.closest('.preset-scenario-selector')) {
[7m   [0m [91m                      ~~~~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m373[0m:[93m13[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m373[0m             gtag('event', 'demo_interaction', {
[7m   [0m [91m            ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m372[0m:[93m22[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m372[0m           if (typeof gtag !== 'undefined') {
[7m   [0m [91m                     ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m371[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'textContent' does not exist on type 'EventTarget'.

[7m371[0m         if (e.target?.textContent?.includes('Analyze for Bias')) {
[7m   [0m [91m                      ~~~~~~~~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m359[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m359[0m       gtag('event', 'page_view', {
[7m   [0m [91m      ~~~~[0m
[96msrc/pages/demo/enhanced-bias-detection.astro[0m:[93m358[0m:[93m16[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'gtag'.

[7m358[0m     if (typeof gtag !== 'undefined') {
[7m   [0m [91m               ~~~~[0m

[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m468[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m468[0m                   className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-orange-500/20 border border-orange-400/40 text-orange-200 rounded-full"
[7m   [0m [91m                  ~~~~~~~~~[0m
[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m463[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m463[0m             <CardContent className="p-8 lg:p-12">
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m461[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m461[0m             className="border border-orange-500/40 bg-slate-900/50 rounded-3xl overflow-hidden"
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m423[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m423[0m             <CardContent className="p-8 lg:p-12 text-center">
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m421[0m:[93m13[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m421[0m             className="border border-purple-600/30 bg-purple-900/20 rounded-3xl overflow-hidden"
[7m   [0m [91m            ~~~~~~~~~[0m
[96msrc/pages/demo/psychology-pipeline-processor.astro[0m:[93m408[0m:[93m38[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.
