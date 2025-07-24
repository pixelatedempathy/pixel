
[7m79[0m           taskStack[taskStack.length - 1].level >= level
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/TaskListManager.ts[0m:[93m67[0m:[93m20[0m - [91merror[0m[90m ts(18048): [0m'content' is possibly 'undefined'.

[7m67[0m           content: content.trim(),
[7m  [0m [91m                   ~~~~~~~[0m
[96msrc/lib/services/TaskListManager.ts[0m:[93m63[0m:[93m27[0m - [91merror[0m[90m ts(18048): [0m'checkState' is possibly 'undefined'.

[7m63[0m         const completed = checkState.toLowerCase() === 'x'
[7m  [0m [91m                          ~~~~~~~~~~[0m
[96msrc/lib/services/TaskListManager.ts[0m:[93m62[0m:[93m34[0m - [91merror[0m[90m ts(18048): [0m'indent' is possibly 'undefined'.

[7m62[0m         const level = Math.floor(indent.length / 2) // Assume 2 spaces per level
[7m  [0m [91m                                 ~~~~~~[0m

[96msrc/lib/services/WebRTCSignalingService.ts[0m:[93m2[0m:[93m34[0m - [91merror[0m[90m ts(2307): [0mCannot find module './WebSocketService' or its corresponding type declarations.

[7m2[0m import { WebSocketService } from './WebSocketService'
[7m [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/cacheService.ts[0m:[93m65[0m:[93m18[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'RedisClient'.

[7m65[0m   private redis: RedisClient | null = null
[7m  [0m [91m                 ~~~~~~~~~~~[0m

[96msrc/lib/services/analytics/AnalyticsService.mock.ts[0m:[93m13[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'options' is declared but its value is never read.

[7m13[0m   private options: AnalyticsServiceOptions;
[7m  [0m [91m          ~~~~~~~[0m

[96msrc/lib/services/analytics/AnalyticsService.ts[0m:[93m39[0m:[93m24[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis' to type 'RedisClient' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'Redis' is not comparable to type 'RedisClient'.

[7m39[0m     this.redisClient = redis as RedisClient // Safe because we control the Redis client implementation
[7m  [0m [91m                       ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m357[0m:[93m29[0m - [91merror[0m[90m ts(4111): [0mProperty 'endpoint' comes from an index signature, so it must be accessed with ['endpoint'].

[7m357[0m       expect(result[0].tags.endpoint).toBe('/api/therapy')
[7m   [0m [91m                            ~~~~~~~~[0m
[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m357[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m357[0m       expect(result[0].tags.endpoint).toBe('/api/therapy')
[7m   [0m [91m             ~~~~~~~~~[0m
[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m332[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m332[0m       expect(result[0].name).toBe('response_time')
[7m   [0m [91m             ~~~~~~~~~[0m
[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m289[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m289[0m       expect(result[0].id).toBe('test-1')
[7m   [0m [91m             ~~~~~~~~~[0m
[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m3[0m:[93m43[0m - [91merror[0m[90m ts(2459): [0mModule '"../AnalyticsService"' declares 'EventType' locally, but it is not exported.

[7m3[0m import { AnalyticsService, EventPriority, EventType } from '../AnalyticsService'
[7m [0m [91m                                          ~~~~~~~~~[0m
[96msrc/lib/services/analytics/__tests__/AnalyticsService.test.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m ts(2305): [0mModule '"../AnalyticsService"' has no exported member 'EventPriority'.

[7m3[0m import { AnalyticsService, EventPriority, EventType } from '../AnalyticsService'
[7m [0m [91m                           ~~~~~~~~~~~~~[0m

[96msrc/lib/services/backup/index.ts[0m:[93m78[0m:[93m34[0m - [91merror[0m[90m ts(4111): [0mProperty 'BACKUP_EMAIL_RECIPIENTS' comes from an index signature, so it must be accessed with ['BACKUP_EMAIL_RECIPIENTS'].

[7m78[0m     emailRecipients: process.env.BACKUP_EMAIL_RECIPIENTS?.split(','),
[7m  [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/backup/index.ts[0m:[93m77[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'SLACK_WEBHOOK' comes from an index signature, so it must be accessed with ['SLACK_WEBHOOK'].

[7m77[0m     slackWebhook: process.env.SLACK_WEBHOOK,
[7m  [0m [91m                              ~~~~~~~~~~~~~[0m

[96msrc/lib/services/contact/ContactService.ts[0m:[93m276[0m:[93m5[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m276[0m     logger.debug('Security checks passed for contact form submission', {
[7m   [0m [91m    ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m207[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m207[0m       logger.error('Contact form submission failed', {
[7m   [0m [91m      ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m195[0m:[93m9[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m195[0m         logger.warn('Contact form security check failed', {
[7m   [0m [91m        ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m190[0m:[93m20[0m - [91merror[0m[90m ts(18048): [0m'validationError' is possibly 'undefined'.

[7m190[0m           message: validationError.message,
[7m   [0m [91m                   ~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m182[0m:[93m9[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m182[0m         logger.warn('Contact form validation failed', {
[7m   [0m [91m        ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m165[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m165[0m       logger.info('Contact form submitted successfully', {
[7m   [0m [91m      ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m89[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m89[0m       logger.error(`Failed to load template: ${name}`, { error })
[7m  [0m [91m      ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m74[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m74[0m       logger.error('Failed to initialize contact form templates', { error })
[7m  [0m [91m      ~~~~~~[0m
[96msrc/lib/services/contact/ContactService.ts[0m:[93m72[0m:[93m7[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m72[0m       logger.info('Contact form email templates initialized successfully')
[7m  [0m [91m      ~~~~~~[0m

[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m312[0m:[93m14[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m312[0m       expect(logger.info).toHaveBeenCalledWith(
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m306[0m:[93m14[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'logger'.

[7m306[0m       expect(logger.error).toHaveBeenCalled()
[7m   [0m [91m             ~~~~~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m48[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterEach'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                               ~~~~~~~~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m36[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                                   ~~~~~~~~~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                               ~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/services/contact/__tests__/ContactService.test.ts[0m:[93m1[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m1[0m import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/services/notification/NotificationService.ts[0m:[93m387[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'lrem' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'lrem' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m387[0m         await redis.lrem(this.processingKey, 1, item)
[7m   [0m [91m                    ~~~~[0m
[96msrc/lib/services/notification/NotificationService.ts[0m:[93m365[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'lrem' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'lrem' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m365[0m         await redis.lrem(this.processingKey, 1, item)
[7m   [0m [91m                    ~~~~[0m
[96msrc/lib/services/notification/NotificationService.ts[0m:[93m327[0m:[93m32[0m - [91merror[0m[90m ts(2339): [0mProperty 'rpoplpush' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'rpoplpush' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m327[0m       const item = await redis.rpoplpush(this.queueKey, this.processingKey)
[7m   [0m [91m                               ~~~~~~~~~[0m
[96msrc/lib/services/notification/NotificationService.ts[0m:[93m309[0m:[93m17[0m - [91merror[0m[90m ts(2339): [0mProperty 'lpush' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; } | Redis'.
  Property 'lpush' does not exist on type '{ get: (_key: string) => Promise<null>; set: (_key: string, _value: unknown, _options?: unknown) => Promise<string>; del: (_key: string) => Promise<number>; incr: (_key: string) => Promise<...>; ... 7 more ...; disconnect: () => Promise<...>; }'.

[7m309[0m     await redis.lpush(this.queueKey, JSON.stringify(notification))
[7m   [0m [91m                ~~~~~[0m
[96msrc/lib/services/notification/NotificationService.ts[0m:[93m194[0m:[93m47[0m - [91merror[0m[90m ts(2339): [0mProperty 'adminEmail' does not exist on type '{ vapidPublicKey: () => string | undefined; vapidPrivateKey: () => string | undefined; vapidSubject: () => string | undefined; slackWebhookUrl: () => string | undefined; }'.

[7m194[0m       const adminEmail = config.notifications.adminEmail()
[7m   [0m [91m                                              ~~~~~~~~~~[0m

[96msrc/lib/services/notification/SlackNotificationService.ts[0m:[93m120[0m:[93m7[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'elements' does not exist in type 'SlackBlock'.

[7m120[0m       elements: [
[7m   [0m [91m      ~~~~~~~~[0m

[96msrc/lib/services/notification/WebSocketServer.mock.ts[0m:[93m8[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'notificationService' is declared but its value is never read.

[7m8[0m   private notificationService: NotificationService;
[7m [0m [91m          ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.mock.ts[0m:[93m7[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'port' is declared but its value is never read.

[7m7[0m   private port: number;
[7m [0m [91m          ~~~~[0m

[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m151[0m:[93m47[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 1.

[7m151[0m       } = await supabaseAdmin.auth.getSession(token)
[7m   [0m [91m                                              ~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m124[0m:[93m32[0m - [91merror[0m[90m ts(2322): [0mType 'string | undefined' is not assignable to type 'string | null'.
  Type 'undefined' is not assignable to type 'string | null'.

[7m124[0m     return type === 'Bearer' ? token : null
[7m   [0m [91m                               ~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m48[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'_NotificationsMessage' is declared but never used.

[7m48[0m interface _NotificationsMessage extends ServerMessage {
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m43[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'_UnreadCountMessage' is declared but never used.

[7m43[0m interface _UnreadCountMessage extends ServerMessage {
[7m  [0m [91m          ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m38[0m:[93m11[0m - [91merror[0m[90m ts(6196): [0m'_ErrorMessage' is declared but never used.

[7m38[0m interface _ErrorMessage extends ServerMessage {
[7m  [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/services/notification/WebSocketServer.ts[0m:[93m2[0m:[93m8[0m - [91merror[0m[90m ts(1192): [0mModule '"/root/pixel/src/lib/utils/logger"' has no default export.

[7m2[0m import logger from '@/lib/utils/logger'
[7m [0m [91m       ~~~~~~[0m

[96msrc/lib/services/notification/__tests__/NotificationService.test.ts[0m:[93m338[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m338[0m       expect(result[0].id).toBe('test-id-2') // Offset by 2, limit 5
[7m   [0m [91m             ~~~~~~~~~[0m
[96msrc/lib/services/notification/__tests__/NotificationService.test.ts[0m:[93m315[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m315[0m       expect(result[0].id).toBe('test-id-1') // Most recent first
[7m   [0m [91m             ~~~~~~~~~[0m

[96msrc/lib/services/notification/__tests__/WebSocketServer.test.ts[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m ts(1192): [0mModule '"/root/pixel/src/lib/utils/logger"' has no default export.

[7m1[0m import logger from '@/lib/utils/logger'
[7m [0m [91m       ~~~~~~[0m

[96msrc/lib/services/patient-rights/dataDeleteService.ts[0m:[93m8[0m:[93m36[0m - [91merror[0m[90m ts(2554): [0mExpected 0 arguments, but got 1.

[7m8[0m const auditLogger = getAuditLogger('patient-rights')
[7m [0m [91m                                   ~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1668[0m:[93m10[0m - [91merror[0m[90m ts(6133): [0m'_checkUserPermissionForPatient' is declared but its value is never read.

[7m1668[0m function _checkUserPermissionForPatient(
[7m    [0m [91m         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1660[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'id' comes from an index signature, so it must be accessed with ['id'].

[7m1660[0m         id: _params.where.id as string,
[7m    [0m [91m                          ~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1626[0m:[93m41[0m - [91merror[0m[90m ts(4111): [0mProperty 'id' comes from an index signature, so it must be accessed with ['id'].

[7m1626[0m                 exportId: _params.where.id as string,
[7m    [0m [91m                                        ~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1622[0m:[93m33[0m - [91merror[0m[90m ts(4111): [0mProperty 'files' comes from an index signature, so it must be accessed with ['files'].

[7m1622[0m         files: _params.include?.files
[7m    [0m [91m                                ~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1614[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'PATIENT_ID' comes from an index signature, so it must be accessed with ['PATIENT_ID'].

[7m1614[0m         patientId: process.env.PATIENT_ID || 'example-patient-id',
[7m    [0m [91m                               ~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1613[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'id' comes from an index signature, so it must be accessed with ['id'].

[7m1613[0m         id: _params.where.id as string,
[7m    [0m [91m                          ~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1594[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'id' comes from an index signature, so it must be accessed with ['id'].

[7m1594[0m         id: _params.where.id as string,
[7m    [0m [91m                          ~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1159[0m:[93m16[0m - [91merror[0m[90m ts(6133): [0m'_sendExportNotification' is declared but its value is never read.

[7m1159[0m async function _sendExportNotification(
[7m    [0m [91m               ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1066[0m:[93m16[0m - [91merror[0m[90m ts(6133): [0m'_storeExportFile' is declared but its value is never read.

[7m1066[0m async function _storeExportFile(
[7m    [0m [91m               ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m1036[0m:[93m16[0m - [91merror[0m[90m ts(6133): [0m'_generateEncryptedExport' is declared but its value is never read.

[7m1036[0m async function _generateEncryptedExport(
[7m    [0m [91m               ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m835[0m:[93m16[0m - [91merror[0m[90m ts(6133): [0m'_formatDataForExport' is declared but its value is never read.

[7m835[0m async function _formatDataForExport(
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/patient-rights/dataPortabilityService.ts[0m:[93m745[0m:[93m16[0m - [91merror[0m[90m ts(6133): [0m'_fetchPatientData' is declared but its value is never read.

[7m745[0m async function _fetchPatientData(
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/RedisService.ts[0m:[93m372[0m:[93m25[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'RedisPipelineOperation'.

[7m372[0m         const commands: RedisPipelineOperation[] = []
[7m   [0m [91m                        ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/RedisService.ts[0m:[93m201[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'Redis' is not assignable to type 'RedisMockClient'.
  Types of property 'set' are incompatible.

[7m201[0m     const mockClient: RedisMockClient = {
[7m   [0m [91m          ~~~~~~~~~~[0m
[96msrc/lib/services/redis/RedisService.ts[0m:[93m193[0m:[93m31[0m - [91merror[0m[90m ts(2355): [0mA function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

[7m193[0m   private createMockClient(): Redis {
[7m   [0m [91m                              ~~~~~[0m

[96msrc/lib/services/redis/redis-operation-types.ts[0m:[93m27[0m:[93m18[0m - [91merror[0m[90m ts(2430): [0mInterface 'RedisMockClient' incorrectly extends interface 'Partial<Redis>'.
  Types of property 'on' are incompatible.

[7m27[0m export interface RedisMockClient extends Partial<Redis> {
[7m  [0m [91m                 ~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/__mocks__/RedisService.ts[0m:[93m15[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'connected' is declared but its value is never read.

[7m15[0m   private connected = false
[7m  [0m [91m          ~~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/RedisService.ts[0m:[93m14[0m:[93m14[0m - [91merror[0m[90m ts(2420): [0mClass 'RedisService' incorrectly implements interface 'IRedisService'.
  Type 'RedisService' is missing the following properties from type 'IRedisService': hlen, zrem, zrange, zpopmin, and 2 more.

[7m14[0m export class RedisService extends EventEmitter implements IRedisService {
[7m  [0m [91m             ~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m146[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'SKIP_REDIS_TESTS' comes from an index signature, so it must be accessed with ['SKIP_REDIS_TESTS'].

[7m146[0m   process.env.SKIP_REDIS_TESTS = 'true'
[7m   [0m [91m              ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m139[0m:[93m17[0m - [91merror[0m[90m ts(4111): [0mProperty 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].

[7m139[0m if (process.env.NODE_ENV !== 'test') {
[7m   [0m [91m                ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m131[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m131[0m   toBeLessThanOrEqual: (received, expected) => ({
[7m   [0m [91m                                  ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m131[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m131[0m   toBeLessThanOrEqual: (received, expected) => ({
[7m   [0m [91m                        ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m126[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m126[0m   toBeGreaterThanOrEqual: (received, expected) => ({
[7m   [0m [91m                                     ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m126[0m:[93m28[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m126[0m   toBeGreaterThanOrEqual: (received, expected) => ({
[7m   [0m [91m                           ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m122[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m122[0m   toBeInstanceOf: (received, expected) => ({
[7m   [0m [91m                             ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m122[0m:[93m20[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m122[0m   toBeInstanceOf: (received, expected) => ({
[7m   [0m [91m                   ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m118[0m:[93m23[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m118[0m   toEqual: (received, expected) => ({
[7m   [0m [91m                      ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m118[0m:[93m13[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m118[0m   toEqual: (received, expected) => ({
[7m   [0m [91m            ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m114[0m:[93m20[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m114[0m   toBe: (received, expected) => ({
[7m   [0m [91m                   ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m114[0m:[93m10[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m114[0m   toBe: (received, expected) => ({
[7m   [0m [91m         ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m110[0m:[93m14[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m110[0m   toBeNull: (received) => ({
[7m   [0m [91m             ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m97[0m:[93m32[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m97[0m   const pass = expected.every((item) => received.includes(item))
[7m  [0m [91m                               ~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m96[0m:[93m36[0m - [91merror[0m[90m ts(7006): [0mParameter 'expected' implicitly has an 'any' type.

[7m96[0m const arrayContaining = (received, expected) => {
[7m  [0m [91m                                   ~~~~~~~~[0m
[96msrc/lib/services/redis/__mocks__/redis.mock.ts[0m:[93m96[0m:[93m26[0m - [91merror[0m[90m ts(7006): [0mParameter 'received' implicitly has an 'any' type.

[7m96[0m const arrayContaining = (received, expected) => {
[7m  [0m [91m                         ~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m196[0m:[93m32[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m196[0m           acc[interval] = (acc[interval] || 0) + 1
[7m   [0m [91m                               ~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m196[0m:[93m15[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m196[0m           acc[interval] = (acc[interval] || 0) + 1
[7m   [0m [91m              ~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m137[0m:[93m31[0m - [91merror[0m[90m ts(4111): [0mProperty 'sequence' comes from an index signature, so it must be accessed with ['sequence'].

[7m137[0m         expect(event.metadata.sequence).toBe(i)
[7m   [0m [91m                              ~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m35[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m35[0m       keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m  [0m [91m                             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m34[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m34[0m       url: process.env.REDIS_URL!,
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m29[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m29[0m     subClient = new Redis(process.env.REDIS_URL!)
[7m  [0m [91m                                      ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m28[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m28[0m     pubClient = new Redis(process.env.REDIS_URL!)
[7m  [0m [91m                                      ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m5[0m:[93m8[0m - [91merror[0m[90m ts(2459): [0mModule '"@/lib/services/analytics/AnalyticsService"' declares 'EventData' locally, but it is not exported.

[7m5[0m   type EventData,
[7m [0m [91m       ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m4[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/services/analytics/AnalyticsService"' has no exported member 'EventPriority'.

[7m4[0m   EventPriority,
[7m [0m [91m  ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/Analytics.integration.test.ts[0m:[93m3[0m:[93m3[0m - [91merror[0m[90m ts(2459): [0mModule '"@/lib/services/analytics/AnalyticsService"' declares 'EventType' locally, but it is not exported.

[7m3[0m   EventType,
[7m [0m [91m  ~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/CacheInvalidation.integration.test.ts[0m:[93m36[0m:[93m49[0m - [91merror[0m[90m ts(2322): [0mType 'Redis | null' is not assignable to type 'RedisService | Redis'.
  Type 'null' is not assignable to type 'RedisService | Redis'.

[7m36[0m     cacheInvalidation = new CacheInvalidation({ redis: redis.getClient() })
[7m  [0m [91m                                                ~~~~~[0m
[96msrc/lib/services/redis/__tests__/CacheInvalidation.integration.test.ts[0m:[93m27[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m27[0m       keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m  [0m [91m                             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/CacheInvalidation.integration.test.ts[0m:[93m26[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m26[0m       url: process.env.REDIS_URL!,
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/CacheInvalidation.integration.test.ts[0m:[93m23[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m23[0m     subClient = new Redis(process.env.REDIS_URL!)
[7m  [0m [91m                                      ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/CacheInvalidation.integration.test.ts[0m:[93m22[0m:[93m39[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m22[0m     pubClient = new Redis(process.env.REDIS_URL!)
[7m  [0m [91m                                      ~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m152[0m:[93m11[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'securityLevel' does not exist in type 'TherapySession'.

[7m152[0m           securityLevel: 'fhe',
[7m   [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m148[0m:[93m21[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m148[0m           clientId: testId,
[7m   [0m [91m                    ~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m143[0m:[93m11[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'securityLevel' does not exist in type 'TherapySession'.

[7m143[0m           securityLevel: 'fhe',
[7m   [0m [91m          ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m139[0m:[93m21[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'testId'.

[7m139[0m           clientId: testId,
[7m   [0m [91m                    ~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m71[0m:[93m7[0m - [91merror[0m[90m ts(2740): [0mType '{ connect: () => Promise<void>; disconnect: () => Promise<void>; get: (_: string) => Promise<null>; set: (_key: string, _value: string, _ttlMs?: number | undefined) => Promise<...>; ... 9 more ...; keys: (_pattern: string) => Promise<...>; }' is missing the following properties from type 'IRedisService': deletePattern, hset, hget, hgetall, and 11 more.

[7m71[0m const mockRedisService: IRedisService = {
[7m  [0m [91m      ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m5[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"@/lib/ai/AIService"' has no exported member 'EmotionAnalysis'.

[7m5[0m import type { EmotionAnalysis, TherapySession } from '@/lib/ai/AIService'
[7m [0m [91m              ~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/PatternRecognition.integration.test.ts[0m:[93m4[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/ai/services/PatternRecognitionService' or its corresponding type declarations.

[7m4[0m } from '@/lib/ai/services/PatternRecognitionService'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m471[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m471[0m         keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m   [0m [91m                               ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m470[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m470[0m         url: process.env.REDIS_URL!,
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m166[0m:[93m34[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m166[0m           counts[type] = (counts[type] || 0) + 1
[7m   [0m [91m                                 ~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m166[0m:[93m18[0m - [91merror[0m[90m ts(2538): [0mType 'undefined' cannot be used as an index type.

[7m166[0m           counts[type] = (counts[type] || 0) + 1
[7m   [0m [91m                 ~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m151[0m:[93m47[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m151[0m           expect(JSON.parse(result!)).toEqual(sessions[i].data)
[7m   [0m [91m                                              ~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.integration.test.ts[0m:[93m20[0m:[93m22[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m20[0m     url: process.env.REDIS_URL || 'redis://localhost:6379',
[7m  [0m [91m                     ~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m164[0m:[93m13[0m - [91merror[0m[90m ts(6133): [0m'_initialStats' is declared but its value is never read.

[7m164[0m       const _initialStats = await redis.getPoolStats()
[7m   [0m [91m            ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m158[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m158[0m       expect(results[1048576].read).toBeLessThan(25) // 25ms for 1MB read
[7m   [0m [91m             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m157[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m157[0m       expect(results[1048576].write).toBeLessThan(50) // 50ms for 1MB write
[7m   [0m [91m             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m155[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m155[0m       expect(results[102400].read).toBeLessThan(5) // 5ms for 100KB read
[7m   [0m [91m             ~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m154[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m154[0m       expect(results[102400].write).toBeLessThan(10) // 10ms for 100KB write
[7m   [0m [91m             ~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m152[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m152[0m       expect(results[10240].read).toBeLessThan(1) // 1ms for 10KB read
[7m   [0m [91m             ~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m151[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m151[0m       expect(results[10240].write).toBeLessThan(2) // 2ms for 10KB write
[7m   [0m [91m             ~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m149[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m149[0m       expect(results[1024].read).toBeLessThan(1) // 1ms for 1KB read
[7m   [0m [91m             ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m148[0m:[93m14[0m - [91merror[0m[90m ts(2532): [0mObject is possibly 'undefined'.

[7m148[0m       expect(results[1024].write).toBeLessThan(1) // 1ms for 1KB write
[7m   [0m [91m             ~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m23[0m:[93m30[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m23[0m       keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m  [0m [91m                             ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m22[0m:[93m24[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m22[0m       url: process.env.REDIS_URL!,
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m12[0m:[93m58[0m - [91merror[0m[90m ts(4111): [0mProperty 'CI' comes from an index signature, so it must be accessed with ['CI'].

[7m12[0m   process.env.SKIP_REDIS_TESTS === 'true' || process.env.CI === 'true'
[7m  [0m [91m                                                         ~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.perf.test.ts[0m:[93m12[0m:[93m15[0m - [91merror[0m[90m ts(4111): [0mProperty 'SKIP_REDIS_TESTS' comes from an index signature, so it must be accessed with ['SKIP_REDIS_TESTS'].

[7m12[0m   process.env.SKIP_REDIS_TESTS === 'true' || process.env.CI === 'true'
[7m  [0m [91m              ~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m363[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m363[0m         keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m   [0m [91m                               ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m362[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m362[0m         url: process.env.REDIS_URL!,
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m83[0m:[93m32[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_KEY_PREFIX' comes from an index signature, so it must be accessed with ['REDIS_KEY_PREFIX'].

[7m83[0m         keyPrefix: process.env.REDIS_KEY_PREFIX!,
[7m  [0m [91m                               ~~~~~~~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m82[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'REDIS_URL' comes from an index signature, so it must be accessed with ['REDIS_URL'].

[7m82[0m         url: process.env.REDIS_URL!,
[7m  [0m [91m                         ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m8[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterEach'.

[7m8[0m   afterEach,
[7m [0m [91m  ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m7[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m7[0m   beforeEach,
[7m [0m [91m  ~~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m6[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeAll'.

[7m6[0m   beforeAll,
[7m [0m [91m  ~~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m5[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m5[0m   expect,
[7m [0m [91m  ~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m4[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m4[0m   it,
[7m [0m [91m  ~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m3[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m3[0m   describe,
[7m [0m [91m  ~~~~~~~~[0m
[96msrc/lib/services/redis/__tests__/RedisService.test.ts[0m:[93m2[0m:[93m3[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m2[0m   vi,
[7m [0m [91m  ~~[0m

[96msrc/lib/services/redis/__tests__/test-utils.ts[0m:[93m161[0m:[93m3[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m161[0m   await redis.disconnect()
[7m   [0m [93m  ~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/services/redis/__tests__/vitest.setup.ts[0m:[93m26[0m:[93m13[0m - [91merror[0m[90m ts(2428): [0mAll declarations of 'Assertion' must have identical type parameters.

[7m26[0m   interface Assertion extends CustomMatchers {}
[7m  [0m [91m            ~~~~~~~~~[0m

[96msrc/lib/services/websocket/BiasWebSocketServer.ts[0m:[93m498[0m:[93m11[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'totalAlerts' does not exist in type 'BiasSummaryStats'.

[7m498[0m           totalAlerts: 0,
[7m   [0m [91m          ~~~~~~~~~~~[0m
[96msrc/lib/services/websocket/BiasWebSocketServer.ts[0m:[93m839[0m:[93m63[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m839[0m     return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
[7m   [0m [93m                                                              ~~~~~~[0m

[96msrc/lib/state/enhanced-persistence.ts[0m:[93m379[0m:[93m19[0m - [91merror[0m[90m ts(4111): [0mProperty 'data' comes from an index signature, so it must be accessed with ['data'].

[7m379[0m     return draft?.data || null
[7m   [0m [91m                  ~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m282[0m:[93m51[0m - [91merror[0m[90m ts(4111): [0mProperty 'timestamp' comes from an index signature, so it must be accessed with ['timestamp'].

[7m282[0m         typeof (draft as Record<string, unknown>).timestamp === 'number'
[7m   [0m [91m                                                  ~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m255[0m:[93m26[0m - [91merror[0m[90m ts(4111): [0mProperty 'lastActivity' comes from an index signature, so it must be accessed with ['lastActivity'].

[7m255[0m       now - sessionState.lastActivity > sessionTimeout
[7m   [0m [91m                         ~~~~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m254[0m:[93m27[0m - [91merror[0m[90m ts(4111): [0mProperty 'lastActivity' comes from an index signature, so it must be accessed with ['lastActivity'].

[7m254[0m       typeof sessionState.lastActivity === 'number' &&
[7m   [0m [91m                          ~~~~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m253[0m:[93m20[0m - [91merror[0m[90m ts(4111): [0mProperty 'lastActivity' comes from an index signature, so it must be accessed with ['lastActivity'].

[7m253[0m       sessionState.lastActivity &&
[7m   [0m [91m                   ~~~~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m236[0m:[93m14[0m - [91merror[0m[90m ts(18046): [0m'formDrafts' is of type 'unknown'.

[7m236[0m       delete formDrafts[key]
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m229[0m:[93m45[0m - [91merror[0m[90m ts(4111): [0mProperty 'timestamp' comes from an index signature, so it must be accessed with ['timestamp'].

[7m229[0m         ((b[1] as Record<string, unknown>)?.timestamp as number) || 0
[7m   [0m [91m                                            ~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m227[0m:[93m45[0m - [91merror[0m[90m ts(4111): [0mProperty 'timestamp' comes from an index signature, so it must be accessed with ['timestamp'].

[7m227[0m         ((a[1] as Record<string, unknown>)?.timestamp as number) || 0
[7m   [0m [91m                                            ~~~~~~~~~[0m
[96msrc/lib/state/enhanced-persistence.ts[0m:[93m225[0m:[93m41[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 1 of 2, '(o: { [s: string]: unknown; } | ArrayLike<unknown>): [string, unknown][]', gave the following error.
  Overload 2 of 2, '(o: {}): [string, any][]', gave the following error.

[7m225[0m     const draftEntries = Object.entries(formDrafts).sort((a, b) => {
[7m   [0m [91m                                        ~~~~~~~~~~[0m

[96msrc/lib/state/jotai-persistence.ts[0m:[93m296[0m:[93m11[0m - [91merror[0m[90m ts(6133): [0m'syncSubscriptions' is declared but its value is never read.

[7m296[0m   private syncSubscriptions: Map<string, () => void> = new Map()
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m242[0m:[93m36[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 1 of 3, '(getStringStorage: () => AsyncStringStorage, options?: JsonStorageOptions | undefined): AsyncStorage<Value>', gave the following error.
  Overload 2 of 3, '(getStringStorage: () => SyncStringStorage, options?: JsonStorageOptions | undefined): SyncStorage<Value>', gave the following error.

[7m242[0m     createJSONStorage<Value>(() => storage as unknown),
[7m   [0m [91m                                   ~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m213[0m:[93m5[0m - [91merror[0m[90m ts(6133): [0m'key' is declared but its value is never read.

[7m213[0m     key: string,
[7m   [0m [91m    ~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m184[0m:[93m17[0m - [91merror[0m[90m ts(6133): [0m'key' is declared but its value is never read.

[7m184[0m   async setItem(key: string, newValue: Value): Promise<void> {
[7m   [0m [91m                ~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m165[0m:[93m17[0m - [91merror[0m[90m ts(6133): [0m'key' is declared but its value is never read.

[7m165[0m   async getItem(key: string, initialValue: Value): Promise<Value> {
[7m   [0m [91m                ~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m122[0m:[93m29[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m122[0m           decrypted = await decrypt(serialized)
[7m   [0m [91m                            ~~~~~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m105[0m:[93m28[0m - [91merror[0m[90m ts(2554): [0mExpected 2 arguments, but got 1.

[7m105[0m         serialized = await encrypt(serialized)
[7m   [0m [91m                           ~~~~~~~[0m
[96msrc/lib/state/jotai-persistence.ts[0m:[93m61[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

[7m61[0m       ttl: options.ttl ?? undefined,
[7m  [0m [91m      ~~~[0m

[96msrc/lib/stores/fhe-store.ts[0m:[93m295[0m:[93m18[0m - [91merror[0m[90m ts(2352): [0mConversion of type 'string' to type 'EncryptedData<unknown>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

[7m295[0m               : (encryptedMessage as EncryptedData<unknown>)
[7m   [0m [91m                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/stores/fhe-store.ts[0m:[93m284[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType 'unknown' is not assignable to type 'HomomorphicOperationResult'.

[7m284[0m           result = await fheService.processEncrypted(
[7m   [0m [91m          ~~~~~~[0m
[96msrc/lib/stores/fhe-store.ts[0m:[93m225[0m:[93m16[0m - [91merror[0m[90m ts(2352): [0mConversion of type 'string' to type 'EncryptedData<unknown>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

[7m225[0m             : (encryptedMessage as EncryptedData<unknown>)
[7m   [0m [91m               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/stores/fhe-store.ts[0m:[93m429[0m:[93m26[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m429[0m         const newKeyId = await keyRotationService.getActiveKeyId()
[7m   [0m [93m                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/stores/fhe-store.ts[0m:[93m129[0m:[93m23[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m129[0m         const keyId = await keyRotationService.getActiveKeyId()
[7m   [0m [93m                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m124[0m:[93m53[0m - [91merror[0m[90m ts(2352): [0mConversion of type '{ ok: true; text: () => Promise<string>; headers: Map<string, string>; }' to type 'Response' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ ok: true; text: () => Promise<string>; headers: Map<string, string>; }' is missing the following properties from type 'Response': redirected, status, statusText, type, and 9 more.

[7m124[0m       vi.mocked(global.fetch).mockResolvedValueOnce({
[7m   [0m [91m                                                    ~[0m
[7m125[0m         ok: true,
[7m   [0m [91m~~~~~~~~~~~~~~~~~[0m
[7m...[0m 
[7m127[0m         headers: new Map([['content-type', 'application/json']]),
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m128[0m       } as Response)
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m53[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'vi'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m                                                    ~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m43[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'afterAll'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m                                          ~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeAll'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m                               ~~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/utils/demo-helpers.integration.test.ts[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m3[0m import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/utils/demo-helpers.test.ts[0m:[93m453[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m453[0m       expect(parseInt(parts[1])).toBeGreaterThan(0)
[7m   [0m [91m                      ~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.test.ts[0m:[93m3[0m:[93m32[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'beforeEach'.

[7m3[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                               ~~~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.test.ts[0m:[93m3[0m:[93m24[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'expect'.

[7m3[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                       ~~~~~~[0m
[96msrc/lib/utils/demo-helpers.test.ts[0m:[93m3[0m:[93m20[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'it'.

[7m3[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m                   ~~[0m
[96msrc/lib/utils/demo-helpers.test.ts[0m:[93m3[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"vitest"' has no exported member 'describe'.

[7m3[0m import { describe, it, expect, beforeEach } from 'vitest'
[7m [0m [91m         ~~~~~~~~[0m

[96msrc/lib/utils/demo-helpers.ts[0m:[93m273[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'sessionData' is declared but its value is never read.

[7m273[0m   sessionData: SessionData,
[7m   [0m [91m  ~~~~~~~~~~~[0m
[96msrc/lib/utils/demo-helpers.ts[0m:[93m564[0m:[93m66[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m564[0m   return 'demo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
[7m   [0m [93m                                                                 ~~~~~~[0m

[96msrc/lib/utils/__mocks__/logger.ts[0m:[93m21[0m:[93m3[0m - [91merror[0m[90m ts(2693): [0m'Logger' only refers to a type, but is being used as a value here.

[7m21[0m   Logger, // Add Logger to the default export
[7m  [0m [91m  ~~~~~~[0m

[96msrc/lib/websocket/server.ts[0m:[93m46[0m:[93m13[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m46[0m             await this.handleStatusUpdate(clientId, message)
[7m  [0m [93m            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m253[0m:[93m36[0m - [91merror[0m[90m ts(4111): [0mProperty 'CLIENT_ID' comes from an index signature, so it must be accessed with ['CLIENT_ID'].

[7m253[0m       const clientId = process.env.CLIENT_ID || 'example-client-id'
[7m   [0m [91m                                   ~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m100[0m:[93m17[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'ConnectionHandler'.

[7m100[0m       )?.[1] as ConnectionHandler
[7m   [0m [91m                ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m99[0m:[93m25[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'ConnectionHandler'.

[7m99[0m         (call: [string, ConnectionHandler]) => call[0] === 'connection',
[7m  [0m [91m                        ~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m72[0m:[93m25[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'MockWebSocket'.

[7m72[0m     mockWebSocket = new MockWebSocket() as WebSocket & {
[7m  [0m [91m                        ~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m333[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m333[0m       await messageHandler(JSON.stringify(message))
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m309[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m309[0m       await messageHandler(JSON.stringify(encryptedMessage))
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m243[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m243[0m       await messageHandler('invalid json')
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m208[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m208[0m       await messageHandler(JSON.stringify(statusMessage))
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m179[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m179[0m       await messageHandler(JSON.stringify(encryptedMessage))
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/lib/websocket/__tests__/server.test.ts[0m:[93m149[0m:[93m7[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m149[0m       await messageHandler(JSON.stringify(chatMessage))
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/load-tests/bias-detection-load-test.js[0m:[93m102[0m:[93m50[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m102[0m       userId: `user-${Math.random().toString(36).substr(2, 9)}`,
[7m   [0m [93m                                                 ~~~~~~[0m
[96msrc/load-tests/bias-detection-load-test.js[0m:[93m86[0m:[93m59[0m - [93mwarning[0m[90m ts(6385): [0m'(from: number, length?: number | undefined): string' is deprecated.

[7m86[0m     sessionId: `test-session-${Math.random().toString(36).substr(2, 9)}`,
[7m  [0m [93m                                                          ~~~~~~[0m

[96msrc/load-tests/breach-notification.load.ts[0m:[93m257[0m:[93m69[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m257[0m     'test environment cleaned up successfully': (r: RefinedResponse<unknown>) =>
[7m   [0m [91m                                                                    ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m256[0m:[93m3[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 1 of 2, '(obj: unknown, checks: Record<string, (obj: unknown) => boolean>): boolean', gave the following error.
  Overload 2 of 2, '(val: RefinedResponse<unknown>, sets: Checkers<RefinedResponse<unknown>>, tags?: object | undefined): boolean', gave the following error.

[7m256[0m   check(response, {
[7m   [0m [91m  ~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m239[0m:[93m64[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m239[0m     'test environment setup successfully': (r: RefinedResponse<unknown>) =>
[7m   [0m [91m                                                               ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m238[0m:[93m3[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 1 of 2, '(obj: unknown, checks: Record<string, (obj: unknown) => boolean>): boolean', gave the following error.
  Overload 2 of 2, '(val: RefinedResponse<unknown>, sets: Checkers<RefinedResponse<unknown>>, tags?: object | undefined): boolean', gave the following error.

[7m238[0m   check(response, {
[7m   [0m [91m  ~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m212[0m:[93m58[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m212[0m       'all notifications delivered': (r: RefinedResponse<unknown>) => {
[7m   [0m [91m                                                         ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m210[0m:[93m62[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m210[0m       'notifications sent successfully': (r: RefinedResponse<unknown>) =>
[7m   [0m [91m                                                             ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m209[0m:[93m11[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 2 of 2, '(val: RefinedResponse<unknown>, sets: Checkers<RefinedResponse<unknown>>, tags?: object | undefined): boolean', gave the following error.

[7m209[0m     check(notificationResponse, {
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m192[0m:[93m9[0m - [91merror[0m[90m ts(18046): [0m'statusResponse' is of type 'unknown'.

[7m192[0m     if (statusResponse.notificationStatus === 'completed') {
[7m   [0m [91m        ~~~~~~~~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m190[0m:[93m46[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'unknown' is not assignable to parameter of type 'string'.

[7m190[0m     const statusResponse = checkBreachStatus(breachId)
[7m   [0m [91m                                             ~~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m170[0m:[93m42[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m170[0m     'has breach ID': (r: RefinedResponse<unknown>) =>
[7m   [0m [91m                                         ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m168[0m:[93m56[0m - [91merror[0m[90m ts(2344): [0mType 'unknown' does not satisfy the constraint 'ResponseType | undefined'.

[7m168[0m     'breach created successfully': (r: RefinedResponse<unknown>) =>
[7m   [0m [91m                                                       ~~~~~~~[0m
[96msrc/load-tests/breach-notification.load.ts[0m:[93m167[0m:[93m25[0m - [91merror[0m[90m ts(2769): [0mNo overload matches this call.
  Overload 2 of 2, '(val: RefinedResponse<unknown>, sets: Checkers<RefinedResponse<unknown>>, tags?: object | undefined): boolean', gave the following error.

[7m167[0m   const success = check(createResponse, {
[7m   [0m [91m                        ~~~~~~~~~~~~~~[0m

[96msrc/pages/admin-test.astro[0m:[93m5[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'mockUser' is declared but its value is never read.

[7m5[0m const mockUser = {
[7m [0m [91m      ~~~~~~~~[0m

[96msrc/pages/auth-callback.astro[0m:[93m5[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/services/auth.service"' has no exported member 'AuthService'.

[7m5[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m         ~~~~~~~~~~~[0m
[96msrc/pages/auth-callback.astro[0m:[93m5[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'AuthService' is declared but its value is never read.

[7m5[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/book.astro[0m:[93m10[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'false' is not assignable to type '"plum"'.

[7m10[0m   bgType={false}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/feeds.astro[0m:[93m20[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'false' is not assignable to type '"plum"'.

[7m20[0m   bgType={frontmatter.bgType}
[7m  [0m [91m  ~~~~~~[0m
[96msrc/pages/feeds.astro[0m:[93m5[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'BgType' is declared but its value is never read.

[7m5[0m import type { BgType } from '~/types'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/gradient-demo.astro[0m:[93m50[0m:[93m19[0m - [91merror[0m[90m ts(18048): [0m'selectedScheme' is possibly 'undefined'.

[7m50[0m                   selectedScheme.id === scheme.id
[7m  [0m [91m                  ~~~~~~~~~~~~~~[0m

[96msrc/pages/login.astro[0m:[93m19[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'false' is not assignable to type '"plum"'.

[7m19[0m   bgType={false}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/mental-health-demo.astro[0m:[93m36[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; description: string; showSettingsPanel: boolean; showAnalysisPanel: boolean; initialTab: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'showSettingsPanel' does not exist on type 'IntrinsicAttributes & Props'.

[7m36[0m         showSettingsPanel={true}
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/privacy.astro[0m:[93m11[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; showNavBar: boolean; showFooter: boolean; bgPattern: boolean; usePlumAnimation: boolean; centered: boolean; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'showNavBar' does not exist on type 'IntrinsicAttributes & Props'.

[7m11[0m   showNavBar={true}
[7m  [0m [91m  ~~~~~~~~~~[0m

[96msrc/pages/projects.astro[0m:[93m11[0m:[93m20[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'BgType'.

[7m11[0m   bgType: 'dot' as BgType,
[7m  [0m [91m                   ~~~~~~[0m

[96msrc/pages/prs.astro[0m:[93m12[0m:[93m21[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'BgType'.

[7m12[0m   bgType: 'plum' as BgType,
[7m  [0m [91m                    ~~~~~~[0m

[96msrc/pages/register.astro[0m:[93m2[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroGlobal'.

[7m2[0m import type { AstroGlobal } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~[0m

[96msrc/pages/reset-password-confirm.astro[0m:[93m28[0m:[93m58[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m28[0m const alreadyAuthenticated = await isAuthenticated(Astro.cookies)
[7m  [0m [91m                                                         ~~~~~~~[0m
[96msrc/pages/reset-password-confirm.astro[0m:[93m14[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'type' is declared but its value is never read.

[7m14[0m const type = 'recovery' // For password reset flow, type is always recovery
[7m  [0m [91m      ~~~~[0m
[96msrc/pages/reset-password-confirm.astro[0m:[93m13[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m13[0m const email = Astro.cookies.get('auth_recovery_email')?.value
[7m  [0m [91m                    ~~~~~~~[0m
[96msrc/pages/reset-password-confirm.astro[0m:[93m12[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m12[0m const token = Astro.cookies.get('auth_recovery_token')?.value
[7m  [0m [91m                    ~~~~~~~[0m
[96msrc/pages/reset-password-confirm.astro[0m:[93m6[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/services/auth.service"' has no exported member 'AuthService'.

[7m6[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m         ~~~~~~~~~~~[0m
[96msrc/pages/reset-password-confirm.astro[0m:[93m6[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'AuthService' is declared but its value is never read.

[7m6[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/reset-password.astro[0m:[93m11[0m:[93m58[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m11[0m const alreadyAuthenticated = await isAuthenticated(Astro.cookies)
[7m  [0m [91m                                                         ~~~~~~~[0m
[96msrc/pages/reset-password.astro[0m:[93m6[0m:[93m10[0m - [91merror[0m[90m ts(2305): [0mModule '"@/services/auth.service"' has no exported member 'AuthService'.

[7m6[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m         ~~~~~~~~~~~[0m
[96msrc/pages/reset-password.astro[0m:[93m6[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'AuthService' is declared but its value is never read.

[7m6[0m import { AuthService } from '@/services/auth.service'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/search-demo.astro[0m:[93m3[0m:[93m8[0m - [91merror[0m[90m ts(2440): [0mImport declaration conflicts with local declaration of 'SearchDemo'.

[7m3[0m import SearchDemo from '../components/SearchDemo.astro'
[7m [0m [91m       ~~~~~~~~~~[0m

[96msrc/pages/signin.astro[0m:[93m17[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'false' is not assignable to type '"plum"'.

[7m17[0m   bgType={false}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/signup.astro[0m:[93m7[0m:[93m15[0m - [91merror[0m[90m ts(2305): [0mModule '"astro"' has no exported member 'AstroGlobal'.

[7m7[0m import type { AstroGlobal } from 'astro'
[7m [0m [91m              ~~~~~~~~~~~[0m

[96msrc/pages/terms.astro[0m:[93m11[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; showNavBar: boolean; showFooter: boolean; bgPattern: boolean; usePlumAnimation: boolean; centered: boolean; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'showNavBar' does not exist on type 'IntrinsicAttributes & Props'.

[7m11[0m   showNavBar={true}
[7m  [0m [91m  ~~~~~~~~~~[0m

[96msrc/pages/therapists.astro[0m:[93m10[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType 'false' is not assignable to type '"plum"'.

[7m10[0m   bgType={false}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/todo.astro[0m:[93m27[0m:[93m47[0m - [91merror[0m[90m ts(2322): [0mType '"dot"' is not assignable to type '"plum"'.

[7m27[0m <BaseLayout title={pageTitle} centered={true} bgType="dot">
[7m  [0m [91m                                              ~~~~~~[0m

[96msrc/pages/admin/ai-performance.astro[0m:[93m7[0m:[93m8[0m - [91merror[0m[90m ts(2307): [0mCannot find module '@/lib/ai/performance' or its corresponding type declarations.

[7m7[0m } from '@/lib/ai/performance'
[7m [0m [91m       ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/ai-performance.astro[0m:[93m5[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'aiPerformanceMonitor' is declared but its value is never read.

[7m5[0m   aiPerformanceMonitor,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m309[0m:[93m28[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m309[0m           <CardDescription className="text-gray-200/80">
[7m   [0m [91m                           ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m308[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m308[0m           <CardTitle className="text-gray-100">Live Event Stream</CardTitle>
[7m   [0m [91m                     ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m262[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m262[0m             <CardDescription className="text-orange-200/80">
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m261[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m261[0m             <CardTitle className="text-orange-100">A/B Test Summary</CardTitle>
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m216[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m216[0m             <CardDescription className="text-indigo-200/80">
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m215[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m215[0m             <CardTitle className="text-indigo-100">Conversion Funnel Comparison</CardTitle>
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m134[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m134[0m                 <Badge className={`bg-${demo.color}-500/20 text-${demo.color}-300`}>
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m130[0m:[93m36[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m130[0m                   <CardDescription className={`text-${demo.color}-200/80`}>
[7m   [0m [91m                                   ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m129[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m129[0m                   <CardTitle className={`text-${demo.color}-100 text-xl`}>{demo.title}</CardTitle>
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m113[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m113[0m             <CardTitle className="text-yellow-300 text-lg">A/B Test Winners</CardTitle>
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m112[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m112[0m           <CardHeader className="pb-2">
[7m   [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m103[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m103[0m             <CardTitle className="text-blue-300 text-lg">Best Performing Demo</CardTitle>
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m102[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m102[0m           <CardHeader className="pb-2">
[7m   [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m93[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m93[0m             <CardTitle className="text-green-300 text-lg">Overall Conversion</CardTitle>
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m92[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m92[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m83[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m83[0m             <CardTitle className="text-purple-300 text-lg">Total Sessions</CardTitle>
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m82[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m82[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m72[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m72[0m           <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/20 border border-blue-400/40 text-blue-200 rounded-full">
[7m  [0m [91m                 ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m65[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m65[0m           <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full">
[7m  [0m [91m                 ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m569[0m:[93m14[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ 'clinical-vault-trainer': string; 'synthetic-training-generator': string; 'psychology-pipeline-processor': string; 'security-bias-detection-engine': string; }'.

[7m569[0m       return names[pageName] || 'Unknown';
[7m   [0m [91m             ~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m562[0m:[93m20[0m - [91merror[0m[90m ts(7006): [0mParameter 'pageName' implicitly has an 'any' type.

[7m562[0m     formatDemoName(pageName) {
[7m   [0m [91m                   ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m551[0m:[93m33[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'ChildNode | null' is not assignable to parameter of type 'Node'.
  Type 'null' is not assignable to type 'Node'.

[7m551[0m         eventStream.removeChild(eventStream.lastChild);
[7m   [0m [91m                                ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m551[0m:[93m33[0m - [91merror[0m[90m ts(18047): [0m'eventStream' is possibly 'null'.

[7m551[0m         eventStream.removeChild(eventStream.lastChild);
[7m   [0m [91m                                ~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m551[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'eventStream' is possibly 'null'.

[7m551[0m         eventStream.removeChild(eventStream.lastChild);
[7m   [0m [91m        ~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m550[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'eventStream' is possibly 'null'.

[7m550[0m       while (eventStream.children.length > 10) {
[7m   [0m [91m             ~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m547[0m:[93m46[0m - [91merror[0m[90m ts(18047): [0m'eventStream' is possibly 'null'.

[7m547[0m       eventStream.insertBefore(eventElement, eventStream.firstChild);
[7m   [0m [91m                                             ~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m547[0m:[93m7[0m - [91merror[0m[90m ts(18047): [0m'eventStream' is possibly 'null'.

[7m547[0m       eventStream.insertBefore(eventElement, eventStream.firstChild);
[7m   [0m [91m      ~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m516[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m516[0m       document.getElementById('overall-recommendations').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m514[0m:[93m64[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"security-bias-detection-engine"' can't be used to index type '{}'.
  Property 'security-bias-detection-engine' does not exist on type '{}'.

[7m514[0m       document.getElementById('security-winner').textContent = winners['security-bias-detection-engine'] || 'TBD';
[7m   [0m [91m                                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m514[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m514[0m       document.getElementById('security-winner').textContent = winners['security-bias-detection-engine'] || 'TBD';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m513[0m:[93m64[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"psychology-pipeline-processor"' can't be used to index type '{}'.
  Property 'psychology-pipeline-processor' does not exist on type '{}'.

[7m513[0m       document.getElementById('pipeline-winner').textContent = winners['psychology-pipeline-processor'] || 'TBD';
[7m   [0m [91m                                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m513[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m513[0m       document.getElementById('pipeline-winner').textContent = winners['psychology-pipeline-processor'] || 'TBD';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m512[0m:[93m65[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"synthetic-training-generator"' can't be used to index type '{}'.
  Property 'synthetic-training-generator' does not exist on type '{}'.

[7m512[0m       document.getElementById('synthetic-winner').textContent = winners['synthetic-training-generator'] || 'TBD';
[7m   [0m [91m                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m512[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m512[0m       document.getElementById('synthetic-winner').textContent = winners['synthetic-training-generator'] || 'TBD';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m511[0m:[93m64[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type '"clinical-vault-trainer"' can't be used to index type '{}'.
  Property 'clinical-vault-trainer' does not exist on type '{}'.

[7m511[0m       document.getElementById('clinical-winner').textContent = winners['clinical-vault-trainer'] || 'TBD';
[7m   [0m [91m                                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m511[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m511[0m       document.getElementById('clinical-winner').textContent = winners['clinical-vault-trainer'] || 'TBD';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m507[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m507[0m       document.getElementById('overall-test-status').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m503[0m:[93m11[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'.

[7m503[0m           winners[pageName] = 'TBD';
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m501[0m:[93m11[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'.

[7m501[0m           winners[pageName] = 'Variant B'; // This would be calculated properly
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m494[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m494[0m         const data = this.data[pageName];
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m493[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 'pageName' implicitly has an 'any' type.

[7m493[0m       this.demoPages.forEach(pageName => {
[7m   [0m [91m                             ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m493[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'demoPages' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m493[0m       this.demoPages.forEach(pageName => {
[7m   [0m [91m           ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m486[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m486[0m       document.getElementById('funnel-cta-bar').style.width = ctaRate + '%';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m485[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m485[0m       document.getElementById('funnel-interactions-bar').style.width = interactionRate + '%';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m483[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m483[0m       document.getElementById('funnel-cta-pct').textContent = ctaRate.toFixed(1) + '%';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m482[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m482[0m       document.getElementById('funnel-interactions-pct').textContent = interactionRate.toFixed(1) + '%';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m480[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'number' is not assignable to type 'string'.

[7m480[0m       document.getElementById('funnel-cta-total').textContent = totalCTAClicks;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m480[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m480[0m       document.getElementById('funnel-cta-total').textContent = totalCTAClicks;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m479[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'number' is not assignable to type 'string'.

[7m479[0m       document.getElementById('funnel-interactions-total').textContent = totalInteractions;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m479[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m479[0m       document.getElementById('funnel-interactions-total').textContent = totalInteractions;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m478[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'number' is not assignable to type 'string'.

[7m478[0m       document.getElementById('funnel-page-views-total').textContent = totalPageViews;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m478[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m478[0m       document.getElementById('funnel-page-views-total').textContent = totalPageViews;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m472[0m:[93m27[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m472[0m         totalCTAClicks += data.summary?.conversion_funnel?.cta_clicks || 0;
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m471[0m:[93m30[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m471[0m         totalInteractions += data.summary?.conversion_funnel?.demo_interactions || 0;
[7m   [0m [91m                             ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m470[0m:[93m27[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m470[0m         totalPageViews += data.summary?.conversion_funnel?.page_views || 0;
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m469[0m:[93m26[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m469[0m       Object.values(this.data).forEach(data => {
[7m   [0m [91m                         ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m440[0m:[93m50[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m440[0m         const conversions = variantEvents.filter(e => e.event === 'demo_cta_click').length;
[7m   [0m [91m                                                 ~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m439[0m:[93m52[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m439[0m         const sessions = new Set(variantEvents.map(e => e.session_id)).size;
[7m   [0m [91m                                                   ~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m438[0m:[93m51[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m438[0m         const variantEvents = data.events?.filter(e => e.ab_variant === variant) || [];
[7m   [0m [91m                                                  ~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m434[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'data' implicitly has an 'any' type.

[7m434[0m     updateABTestResults(pageName, data) {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m434[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'pageName' implicitly has an 'any' type.

[7m434[0m     updateABTestResults(pageName, data) {
[7m   [0m [91m                        ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m427[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m427[0m         document.getElementById(`${pageName}-time`).textContent = avgTime + 's';
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m426[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m426[0m         document.getElementById(`${pageName}-conversion`).textContent = rate.toFixed(1) + '%';
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m425[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m425[0m         document.getElementById(`${pageName}-sessions`).textContent = sessions;
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m417[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m417[0m         const data = this.data[pageName];
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m416[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 'pageName' implicitly has an 'any' type.

[7m416[0m       this.demoPages.forEach(pageName => {
[7m   [0m [91m                             ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m416[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'demoPages' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m416[0m       this.demoPages.forEach(pageName => {
[7m   [0m [91m           ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m412[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m412[0m       document.getElementById('ab-winners').textContent = `${significantTests}/4`;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m411[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m411[0m       document.getElementById('best-demo').textContent = this.formatDemoName(bestDemo.name);
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m410[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m410[0m       document.getElementById('overall-conversion-rate').textContent = overallRate.toFixed(1) + '%';
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m409[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType 'number' is not assignable to type 'string'.

[7m409[0m       document.getElementById('total-sessions-all').textContent = totalSessions;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m409[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m409[0m       document.getElementById('total-sessions-all').textContent = totalSessions;
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m393[0m:[93m29[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m393[0m         const conversions = data.summary?.conversion_funnel?.cta_clicks || 0;
[7m   [0m [91m                            ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m392[0m:[93m26[0m - [91merror[0m[90m ts(18046): [0m'data' is of type 'unknown'.

[7m392[0m         const sessions = data.summary?.unique_sessions || 0;
[7m   [0m [91m                         ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m391[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m391[0m       Object.entries(this.data).forEach(([pageName, data]) => {
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m369[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m369[0m           this.data[pageName] = data;
[7m   [0m [91m               ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m368[0m:[93m38[0m - [91merror[0m[90m ts(7031): [0mBinding element 'data' implicitly has an 'any' type.

[7m368[0m         results.forEach(({ pageName, data }) => {
[7m   [0m [91m                                     ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m368[0m:[93m28[0m - [91merror[0m[90m ts(7031): [0mBinding element 'pageName' implicitly has an 'any' type.

[7m368[0m         results.forEach(({ pageName, data }) => {
[7m   [0m [91m                           ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m360[0m:[93m52[0m - [91merror[0m[90m ts(7006): [0mParameter 'pageName' implicitly has an 'any' type.

[7m360[0m         const promises = this.demoPages.map(async (pageName) => {
[7m   [0m [91m                                                   ~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m360[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'demoPages' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m360[0m         const promises = this.demoPages.map(async (pageName) => {
[7m   [0m [91m                              ~~~~~~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m347[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m347[0m       this.data = {};
[7m   [0m [91m           ~~~~[0m
[96msrc/pages/admin/all-demos-analytics.astro[0m:[93m341[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'demoPages' does not exist on type 'AllDemosAnalyticsDashboard'.

[7m341[0m       this.demoPages = [
[7m   [0m [91m           ~~~~~~~~~[0m

[96msrc/pages/admin/audit-logs.astro[0m:[93m7[0m:[93m54[0m - [91merror[0m[90m ts(2554): [0mExpected 0-1 arguments, but got 2.

[7m7[0m const { user, redirect } = await protectRoute(Astro, { requiredRole: 'admin' })
[7m [0m [91m                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/audit-logs.astro[0m:[93m7[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'redirect' does not exist on type '(handler: (context: AuthAPIContext<Record<string, unknown>, Record<string, string | undefined>>) => Response | Promise<Response>) => APIRoute'.

[7m7[0m const { user, redirect } = await protectRoute(Astro, { requiredRole: 'admin' })
[7m [0m [91m              ~~~~~~~~[0m
[96msrc/pages/admin/audit-logs.astro[0m:[93m7[0m:[93m9[0m - [91merror[0m[90m ts(6133): [0m'user' is declared but its value is never read.

[7m7[0m const { user, redirect } = await protectRoute(Astro, { requiredRole: 'admin' })
[7m [0m [91m        ~~~~[0m
[96msrc/pages/admin/audit-logs.astro[0m:[93m7[0m:[93m9[0m - [91merror[0m[90m ts(2339): [0mProperty 'user' does not exist on type '(handler: (context: AuthAPIContext<Record<string, unknown>, Record<string, string | undefined>>) => Response | Promise<Response>) => APIRoute'.

[7m7[0m const { user, redirect } = await protectRoute(Astro, { requiredRole: 'admin' })
[7m [0m [91m        ~~~~[0m
[96msrc/pages/admin/audit-logs.astro[0m:[93m7[0m:[93m28[0m - [93mwarning[0m[90m ts(80007): [0m'await' has no effect on the type of this expression.

[7m7[0m const { user, redirect } = await protectRoute(Astro, { requiredRole: 'admin' })
[7m [0m [93m                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/admin/bias-detection.astro[0m:[93m28[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; title: string; description: string; activeItem: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'activeItem' does not exist on type 'IntrinsicAttributes & Props'.

[7m28[0m   activeItem="bias-detection"
[7m  [0m [91m  ~~~~~~~~~~[0m
[96msrc/pages/admin/bias-detection.astro[0m:[93m16[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type '{ url: URL; site: URL; }'.

[7m16[0m const response = await verifyAdmin(Astro.request, context)
[7m  [0m [91m                                         ~~~~~~~[0m
[96msrc/pages/admin/bias-detection.astro[0m:[93m11[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'locals' does not exist on type '{ url: URL; site: URL; }'.

[7m11[0m   session: (Astro.locals as { session?: SessionData }).session || null,
[7m  [0m [91m                  ~~~~~~[0m

[96msrc/pages/admin/compatibility-dashboard.astro[0m:[93m90[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; showNavBar: boolean; showFooter: boolean; centered: boolean; contentClass: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'showNavBar' does not exist on type 'IntrinsicAttributes & Props'.

[7m90[0m   showNavBar={true}
[7m  [0m [91m  ~~~~~~~~~~[0m
[96msrc/pages/admin/compatibility-dashboard.astro[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'Chart' is declared but its value is never read.

[7m4[0m import { Chart } from 'chart.js/auto'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/compatibility-dashboard.astro[0m:[93m186[0m:[93m3[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m186[0m   import type { ChartConfiguration, TooltipCallbacks } from 'chart.js'
[7m   [0m [91m  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/admin/demo-analytics.astro[0m:[93m299[0m:[93m28[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m299[0m           <CardDescription className="text-indigo-200/80">
[7m   [0m [91m                           ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m298[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m298[0m           <CardTitle className="text-indigo-100">Conversion Funnel</CardTitle>
[7m   [0m [91m                     ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m282[0m:[93m28[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m282[0m           <CardDescription className="text-gray-200/80">
[7m   [0m [91m                           ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m281[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m281[0m           <CardTitle className="text-gray-100">Live Event Stream</CardTitle>
[7m   [0m [91m                     ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m234[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m234[0m             <CardDescription className="text-orange-200/80">
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m231[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m231[0m             <CardTitle className="text-orange-100"
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m195[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m195[0m                   <Badge className="bg-blue-500/20 text-blue-300">Test</Badge>
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m160[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m160[0m                   <Badge className="bg-green-500/20 text-green-300">Test</Badge>
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m123[0m:[93m26[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m123[0m                   <Badge className="bg-purple-500/20 text-purple-300"
[7m   [0m [91m                         ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m112[0m:[93m30[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m112[0m             <CardDescription className="text-purple-200/80">
[7m   [0m [91m                             ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m109[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m109[0m             <CardTitle className="text-purple-100"
[7m   [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m88[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m88[0m             <CardTitle className="text-yellow-300 text-lg"
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m87[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m87[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m74[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m74[0m             <CardTitle className="text-purple-300 text-lg"
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m73[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m73[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m60[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m60[0m             <CardTitle className="text-green-300 text-lg"
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m59[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m59[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m46[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m46[0m             <CardTitle className="text-blue-300 text-lg"
[7m  [0m [91m                       ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m45[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m45[0m           <CardHeader className="pb-2">
[7m  [0m [91m                      ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m29[0m:[93m11[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'className' does not exist on type 'IntrinsicAttributes & Props'.

[7m29[0m           className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-500/20 border border-green-400/40 text-green-200 rounded-full"
[7m  [0m [91m          ~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m565[0m:[93m14[0m - [91merror[0m[90m ts(7053): [0mElement implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ A: string; B: string; C: string; }'.

[7m565[0m       return colors[variant] || 'gray'
[7m   [0m [91m             ~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m563[0m:[93m21[0m - [91merror[0m[90m ts(7006): [0mParameter 'variant' implicitly has an 'any' type.

[7m563[0m     getVariantColor(variant) {
[7m   [0m [91m                    ~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m554[0m:[93m27[0m - [91merror[0m[90m ts(7006): [0mParameter 'data' implicitly has an 'any' type.

[7m554[0m     calculateSignificance(data) {
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m554[0m:[93m27[0m - [91merror[0m[90m ts(6133): [0m'data' is declared but its value is never read.

[7m554[0m     calculateSignificance(data) {
[7m   [0m [91m                          ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m549[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m549[0m         document.getElementById('recommendation').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m547[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m547[0m         document.getElementById('confidence-level').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m545[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m545[0m         document.getElementById('test-status').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m540[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m540[0m         document.getElementById('recommendation').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m538[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m538[0m         document.getElementById('confidence-level').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m536[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m536[0m         document.getElementById('test-status').textContent =
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m533[0m:[93m13[0m - [91merror[0m[90m ts(6133): [0m'totalSessions' is declared but its value is never read.

[7m533[0m       const totalSessions = data.summary.unique_sessions
[7m   [0m [91m            ~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m531[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'data' implicitly has an 'any' type.

[7m531[0m     updateStatisticalSignificance(data) {
[7m   [0m [91m                                  ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m511[0m:[93m15[0m - [91merror[0m[90m ts(7006): [0mParameter 'event' implicitly has an 'any' type.

[7m511[0m         .map((event) => {
[7m   [0m [91m              ~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m510[0m:[93m7[0m - [91merror[0m[90m ts(18047): [0m'timeline' is possibly 'null'.

[7m510[0m       timeline.innerHTML = recentEvents
[7m   [0m [91m      ~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m505[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'timeline' is possibly 'null'.

[7m505[0m         timeline.innerHTML =
[7m   [0m [91m        ~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m500[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'events' implicitly has an 'any' type.

[7m500[0m     updateEventTimeline(events) {
[7m   [0m [91m                        ~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m496[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m496[0m       document.getElementById('funnel-cta-clicks-bar').style.width =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m494[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m494[0m       document.getElementById('funnel-demo-interactions-bar').style.width =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m491[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m491[0m       document.getElementById('funnel-cta-clicks-pct').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m489[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m489[0m       document.getElementById('funnel-demo-interactions-pct').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m482[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m482[0m       document.getElementById('funnel-cta-clicks').textContent = ctaClicks
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m480[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m480[0m       document.getElementById('funnel-demo-interactions').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m479[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m479[0m       document.getElementById('funnel-page-views').textContent = pageViews
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m474[0m:[93m18[0m - [91merror[0m[90m ts(7006): [0mParameter 'funnelData' implicitly has an 'any' type.

[7m474[0m     updateFunnel(funnelData) {
[7m   [0m [91m                 ~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m468[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m468[0m         document.getElementById(
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m469[0m           `variant-${variant.toLowerCase()}-rate`,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m470[0m         ).textContent = rate + '%'
[7m   [0m [91m~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m465[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m465[0m         document.getElementById(
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m466[0m           `variant-${variant.toLowerCase()}-conversions`,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m467[0m         ).textContent = conversions
[7m   [0m [91m~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m462[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'number' is not assignable to type 'string'.

[7m462[0m         document.getElementById(
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m463[0m           `variant-${variant.toLowerCase()}-sessions`,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m464[0m         ).textContent = sessions
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m462[0m:[93m9[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m462[0m         document.getElementById(
[7m   [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m463[0m           `variant-${variant.toLowerCase()}-sessions`,
[7m   [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m464[0m         ).textContent = sessions
[7m   [0m [91m~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m457[0m:[93m12[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m457[0m           (e) => e.event === 'demo_cta_click',
[7m   [0m [91m           ~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m455[0m:[93m53[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m455[0m         const sessions = new Set(variantEvents.map((e) => e.session_id)).size
[7m   [0m [91m                                                    ~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m453[0m:[93m12[0m - [91merror[0m[90m ts(7006): [0mParameter 'e' implicitly has an 'any' type.

[7m453[0m           (e) => e.ab_variant === variant,
[7m   [0m [91m           ~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m448[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'data' implicitly has an 'any' type.

[7m448[0m     updateVariantStats(data) {
[7m   [0m [91m                       ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m432[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m432[0m       document.getElementById('avg-scroll-depth').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m430[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m430[0m       document.getElementById('avg-time-cta').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m428[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m428[0m       document.getElementById('conversion-rate').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m426[0m:[93m7[0m - [91merror[0m[90m ts(2531): [0mObject is possibly 'null'.

[7m426[0m       document.getElementById('total-sessions').textContent =
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m424[0m:[93m21[0m - [91merror[0m[90m ts(7006): [0mParameter 'data' implicitly has an 'any' type.

[7m424[0m     updateDashboard(data) {
[7m   [0m [91m                    ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m383[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'DemoAnalyticsDashboard'.

[7m383[0m       this.data = {
[7m   [0m [91m           ~~~~[0m
[96msrc/pages/admin/demo-analytics.astro[0m:[93m382[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'eventSource' does not exist on type 'DemoAnalyticsDashboard'.

[7m382[0m       this.eventSource = null
[7m   [0m [91m           ~~~~~~~~~~~[0m

[96msrc/pages/admin/fhe-dashboard.astro[0m:[93m13[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type '{ url: URL; site: URL; }'.

[7m13[0m const response = await verifyAdmin(Astro.request, context)
[7m  [0m [91m                                         ~~~~~~~[0m
[96msrc/pages/admin/fhe-dashboard.astro[0m:[93m8[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'locals' does not exist on type '{ url: URL; site: URL; }'.

[7m8[0m   session: (Astro.locals as { session?: SessionData }).session || null,
[7m [0m [91m                  ~~~~~~[0m

[96msrc/pages/admin/flagged-messages.astro[0m:[93m29[0m:[93m13[0m - [91merror[0m[90m ts(4111): [0mProperty 'flagged_reason' comes from an index signature, so it must be accessed with ['flagged_reason'].

[7m29[0m       (meta.flagged_reason as string) ||
[7m  [0m [91m            ~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/flagged-messages.astro[0m:[93m28[0m:[93m13[0m - [91merror[0m[90m ts(4111): [0mProperty 'reason' comes from an index signature, so it must be accessed with ['reason'].

[7m28[0m       (meta.reason as string) ||
[7m  [0m [91m            ~~~~~~[0m
[96msrc/pages/admin/flagged-messages.astro[0m:[93m11[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'redirect' does not exist on type '{ url: URL; site: URL; }'.

[7m11[0m   redirect: Astro.redirect,
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/pages/admin/flagged-messages.astro[0m:[93m10[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m10[0m   cookies: Astro.cookies,
[7m  [0m [91m                 ~~~~~~~[0m

[96msrc/pages/admin/performance-dashboard.astro[0m:[93m7[0m:[93m7[0m - [91merror[0m[90m ts(6133): [0m'config' is declared but its value is never read.

[7m7[0m const config = getMonitoringConfig()
[7m [0m [91m      ~~~~~~[0m

[96msrc/pages/admin/security-settings.astro[0m:[93m10[0m:[93m44[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ url: URL; site: URL; }' is not assignable to parameter of type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.
  Type '{ url: URL; site: URL; }' is missing the following properties from type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }': request, cookies, redirect

[7m10[0m const authResponse = await requirePageAuth(Astro, 'admin')
[7m  [0m [91m                                           ~~~~~[0m

[96msrc/pages/admin/ai/high-risk-crises.astro[0m:[93m10[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'redirect' does not exist on type '{ url: URL; site: URL; }'.

[7m10[0m   redirect: Astro.redirect,
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/pages/admin/ai/high-risk-crises.astro[0m:[93m9[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m9[0m   cookies: Astro.cookies,
[7m [0m [91m                 ~~~~~~~[0m

[96msrc/pages/admin/ai/model-performance.astro[0m:[93m19[0m:[93m42[0m - [91merror[0m[90m ts(2322): [0mType '"dot"' is not assignable to type '"plum"'.

[7m19[0m <BaseLayout title="AI Model Performance" bgType="dot">
[7m  [0m [91m                                         ~~~~~~[0m
[96msrc/pages/admin/ai/model-performance.astro[0m:[93m10[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'redirect' does not exist on type '{ url: URL; site: URL; }'.

[7m10[0m   redirect: Astro.redirect,
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/pages/admin/ai/model-performance.astro[0m:[93m9[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m9[0m   cookies: Astro.cookies,
[7m [0m [91m                 ~~~~~~~[0m

[96msrc/pages/admin/ai/performance.astro[0m:[93m15[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'request' does not exist on type '{ url: URL; site: URL; }'.

[7m15[0m const response = await verifyAdmin(Astro.request, context)
[7m  [0m [91m                                         ~~~~~~~[0m
[96msrc/pages/admin/ai/performance.astro[0m:[93m10[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'locals' does not exist on type '{ url: URL; site: URL; }'.

[7m10[0m   session: (Astro.locals as { session?: SessionData }).session || null,
[7m  [0m [91m                  ~~~~~~[0m

[96msrc/pages/admin/ai/usage.astro[0m:[93m10[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'redirect' does not exist on type '{ url: URL; site: URL; }'.

[7m10[0m   redirect: Astro.redirect,
[7m  [0m [91m                  ~~~~~~~~[0m
[96msrc/pages/admin/ai/usage.astro[0m:[93m9[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'cookies' does not exist on type '{ url: URL; site: URL; }'.

[7m9[0m   cookies: Astro.cookies,
[7m [0m [91m                 ~~~~~~~[0m

[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m322[0m:[93m41[0m - [91merror[0m[90m ts(2339): [0mProperty 'nextScheduledRun' does not exist on type '{ initialised: boolean; historyCount: number; }'.

[7m322[0m                             runnerState.nextScheduledRun,
[7m   [0m [91m                                        ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m320[0m:[93m37[0m - [91merror[0m[90m ts(2339): [0mProperty 'nextScheduledRun' does not exist on type '{ initialised: boolean; historyCount: number; }'.

[7m320[0m                       {runnerState?.nextScheduledRun
[7m   [0m [91m                                    ~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m311[0m:[93m37[0m - [91merror[0m[90m ts(2339): [0mProperty 'schedule' does not exist on type '{ initialised: boolean; historyCount: number; }'.

[7m311[0m                       {runnerState?.schedule || 'Unknown'}
[7m   [0m [91m                                    ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m298[0m:[93m26[0m - [91merror[0m[90m ts(2339): [0mProperty 'isScheduled' does not exist on type '{ initialised: boolean; historyCount: number; }'.

[7m298[0m             runnerState?.isScheduled ? (
[7m   [0m [91m                         ~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m287[0m:[93m39[0m - [91merror[0m[90m ts(2339): [0mProperty 'isScheduled' does not exist on type '{ initialised: boolean; historyCount: number; }'.

[7m287[0m               disabled={!runnerState?.isScheduled}
[7m   [0m [91m                                      ~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m167[0m:[93m82[0m - [91merror[0m[90m ts(2339): [0mProperty 'totalTests' does not exist on type 'ValidationStats'.

[7m167[0m                   ? `${Math.round((validationStats.passedTests / validationStats.totalTests) * 100)}%`
[7m   [0m [91m                                                                                 ~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m167[0m:[93m52[0m - [91merror[0m[90m ts(2339): [0mProperty 'passedTests' does not exist on type 'ValidationStats'.

[7m167[0m                   ? `${Math.round((validationStats.passedTests / validationStats.totalTests) * 100)}%`
[7m   [0m [91m                                                   ~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m166[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'totalTests' does not exist on type 'ValidationStats'.

[7m166[0m                 validationStats?.totalTests
[7m   [0m [91m                                 ~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m158[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'passedTests' does not exist on type 'ValidationStats'.

[7m158[0m               {validationStats?.passedTests || 0}
[7m   [0m [91m                                ~~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m144[0m:[93m45[0m - [91merror[0m[90m ts(2339): [0mProperty 'byModel' does not exist on type 'ValidationStats'.

[7m144[0m               {Object.keys(validationStats?.byModel || {}).length || 0}
[7m   [0m [91m                                            ~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m135[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'totalTests' does not exist on type 'ValidationStats'.

[7m135[0m               {validationStats?.totalTests || 0}
[7m   [0m [91m                                ~~~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m121[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'runCount' does not exist on type 'ValidationStats'.

[7m121[0m               {validationStats?.runCount || 0}
[7m   [0m [91m                                ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m112[0m:[93m46[0m - [91merror[0m[90m ts(2339): [0mProperty 'lastRun' does not exist on type 'ValidationStats'.

[7m112[0m                   ? new Date(validationStats.lastRun).toLocaleString()
[7m   [0m [91m                                             ~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m111[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'lastRun' does not exist on type 'ValidationStats'.

[7m111[0m                 validationStats?.lastRun
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m16[0m:[93m25[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m16[0m   validationInitError = error.message
[7m  [0m [91m                        ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m638[0m:[93m35[0m - [91merror[0m[90m ts(7006): [0mParameter 'entry' implicitly has an 'any' type.

[7m638[0m             data.history.forEach((entry) => {
[7m   [0m [91m                                  ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m616[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m616[0m         unscheduleValidationBtn.disabled = false
[7m   [0m [91m                                ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m614[0m:[93m44[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m614[0m         alert(`Error canceling schedule: ${error.message}`)
[7m   [0m [91m                                           ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m592[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m592[0m         unscheduleValidationBtn.disabled = true
[7m   [0m [91m                                ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m584[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m584[0m         scheduleValidationBtn.disabled = false
[7m   [0m [91m                              ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m582[0m:[93m42[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m582[0m         alert(`Error setting schedule: ${error.message}`)
[7m   [0m [91m                                         ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m559[0m:[93m42[0m - [91merror[0m[90m ts(2339): [0mProperty 'value' does not exist on type 'HTMLElement'.

[7m559[0m           schedule = cronScheduleSelect?.value
[7m   [0m [91m                                         ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m554[0m:[93m39[0m - [91merror[0m[90m ts(2339): [0mProperty 'value' does not exist on type 'HTMLElement'.

[7m554[0m           schedule = customCronInput?.value?.trim()
[7m   [0m [91m                                      ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m553[0m:[93m33[0m - [91merror[0m[90m ts(2339): [0mProperty 'value' does not exist on type 'HTMLElement'.

[7m553[0m         if (cronScheduleSelect?.value === 'custom') {
[7m   [0m [91m                                ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m548[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m548[0m         scheduleValidationBtn.disabled = true
[7m   [0m [91m                              ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m540[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m540[0m         stopContinuousBtn.disabled = false
[7m   [0m [91m                          ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m538[0m:[93m56[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m538[0m         alert(`Error stopping continuous validation: ${error.message}`)
[7m   [0m [91m                                                       ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m523[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m523[0m         stopContinuousBtn.disabled = true
[7m   [0m [91m                          ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m515[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m515[0m         startContinuousBtn.disabled = false
[7m   [0m [91m                           ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m513[0m:[93m56[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m513[0m         alert(`Error starting continuous validation: ${error.message}`)
[7m   [0m [91m                                                       ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m498[0m:[93m28[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m498[0m         startContinuousBtn.disabled = true
[7m   [0m [91m                           ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m490[0m:[93m26[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m490[0m         runValidationBtn.disabled = false
[7m   [0m [91m                         ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m488[0m:[93m44[0m - [91merror[0m[90m ts(18046): [0m'error' is of type 'unknown'.

[7m488[0m         alert(`Error running validation: ${error.message}`)
[7m   [0m [91m                                           ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m473[0m:[93m26[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m473[0m         runValidationBtn.disabled = true
[7m   [0m [91m                         ~~~~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m463[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'value' does not exist on type 'EventTarget'.

[7m463[0m       if (e.target.value === 'custom') {
[7m   [0m [91m                   ~~~~~[0m
[96msrc/pages/admin/ai/validation-pipeline.astro[0m:[93m463[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'e.target' is possibly 'null'.

[7m463[0m       if (e.target.value === 'custom') {
[7m   [0m [91m          ~~~~~~~~[0m

[96msrc/pages/admin/backups/index.astro[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m ts(6133): [0m'BackupRecoveryTab' is declared but its value is never read.

[7m4[0m import BackupRecoveryTab from '../../../components/admin/backup/BackupRecoveryTab'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/admin/consent/index.astro[0m:[93m9[0m:[93m23[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ url: URL; site: URL; }' is not assignable to parameter of type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }'.
  Type '{ url: URL; site: URL; }' is missing the following properties from type '{ request: Request; cookies: AstroCookies; redirect: (path: string) => Response; locals?: Record<string, unknown> | undefined; }': request, cookies, redirect

[7m9[0m await requirePageAuth(Astro, 'admin')
[7m [0m [91m                      ~~~~~[0m

[96msrc/pages/admin/security/index.astro[0m:[93m53[0m:[93m29[0m - [91merror[0m[90m ts(7006): [0mParameter 'level' implicitly has an 'any' type.

[7m53[0m function getAlertLevelClass(level) {
[7m  [0m [91m                            ~~~~~[0m
[96msrc/pages/admin/security/index.astro[0m:[93m42[0m:[93m21[0m - [91merror[0m[90m ts(7006): [0mParameter 'date' implicitly has an 'any' type.

[7m42[0m function formatDate(date) {
[7m  [0m [91m                    ~~~~[0m

[96msrc/pages/admin/security/baa/management.astro[0m:[93m14[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty 'searchQuery' does not exist on type 'URLSearchParams'.

[7m14[0m const { status = '', searchQuery = '' } = Astro.url.searchParams
[7m  [0m [91m                     ~~~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/management.astro[0m:[93m14[0m:[93m9[0m - [91merror[0m[90m ts(2339): [0mProperty 'status' does not exist on type 'URLSearchParams'.

[7m14[0m const { status = '', searchQuery = '' } = Astro.url.searchParams
[7m  [0m [91m        ~~~~~~[0m
[96msrc/pages/admin/security/baa/management.astro[0m:[93m6[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'BusinessAssociateType' is declared but its value is never read.

[7m6[0m   BusinessAssociateType,
[7m [0m [91m  ~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/management.astro[0m:[93m5[0m:[93m3[0m - [91merror[0m[90m ts(6133): [0m'BaaStatus' is declared but its value is never read.

[7m5[0m   BaaStatus,
[7m [0m [91m  ~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/management.astro[0m:[93m540[0m:[93m18[0m - [91merror[0m[90m ts(2551): [0mProperty 'submit' does not exist on type 'HTMLElement'. Did you mean 'onsubmit'?

[7m540[0m       searchForm.submit()
[7m   [0m [91m                 ~~~~~~[0m
[96msrc/pages/admin/security/baa/management.astro[0m:[93m533[0m:[93m47[0m - [91merror[0m[90m ts(2551): [0mProperty 'submit' does not exist on type 'HTMLElement'. Did you mean 'onsubmit'?

[7m533[0m       document.getElementById('search-form')?.submit()
[7m   [0m [91m                                              ~~~~~~[0m

[96msrc/pages/admin/security/baa/templates.astro[0m:[93m8[0m:[93m1[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m 8[0m import {
[7m  [0m [91m~~~~~~~~[0m
[7m 9[0m   BusinessAssociateType,
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m   ServiceCategory,
[7m  [0m [91m~~~~~~~~~~~~~~~~~~[0m
[7m11[0m } from '../../../../lib/security/baa/types'
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/templates.astro[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m ts(6192): [0mAll imports in import declaration are unused.

[7m4[0m import {
[7m [0m [91m~~~~~~~~[0m
[7m5[0m   standardSections,
[7m [0m [91m~~~~~~~~~~~~~~~~~~~[0m
[7m6[0m   standardPlaceholders,
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m7[0m } from '../../../../lib/security/baa/templates/hipaa-standard'
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/templates.astro[0m:[93m227[0m:[93m44[0m - [91merror[0m[90m ts(2339): [0mProperty 'getAttribute' does not exist on type 'EventTarget'.

[7m227[0m         const templateId = e.currentTarget.getAttribute('data-template-id')
[7m   [0m [91m                                           ~~~~~~~~~~~~[0m
[96msrc/pages/admin/security/baa/templates.astro[0m:[93m227[0m:[93m28[0m - [91merror[0m[90m ts(18047): [0m'e.currentTarget' is possibly 'null'.

[7m227[0m         const templateId = e.currentTarget.getAttribute('data-template-id')
[7m   [0m [91m                           ~~~~~~~~~~~~~~~[0m

[96msrc/pages/admin/security/baa/vendors.astro[0m:[93m65[0m:[93m3[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'BusinessAssociateType | undefined'.
  Type 'string' is not assignable to type 'BusinessAssociateType | undefined'.

[7m65[0m   type || undefined,
[7m  [0m [91m  ~~~~~~~~~~~~~~~~~[0m
