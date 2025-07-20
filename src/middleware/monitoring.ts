/**
 * Monitoring middleware for Nitro (Vercel / AWS compatible)
 * Cleaned up to only export a single default handler.
 */
import { eventHandler, getRequestURL, getMethod, getRequestHeaders, type H3Event } from 'h3'
import { createBuildSafeLogger } from '@/lib/logging/build-safe-logger'

const logger = createBuildSafeLogger('monitoring')

// CloudWatch forwarding when CLOUDWATCH_GROUP env is set
const useCloudWatch = !!process.env['CLOUDWATCH_GROUP']
let cwClient: any

async function forwardToCloudWatch(entry: Record<string, unknown>) {
  if (!useCloudWatch) {
    return
  }
  if (!cwClient) {
    const { CloudWatchLogsClient } = await import('@aws-sdk/client-cloudwatch-logs')
    cwClient = new CloudWatchLogsClient({})
  }
  const { PutLogEventsCommand } = await import('@aws-sdk/client-cloudwatch-logs')
  await cwClient.send(
    new PutLogEventsCommand({
      logGroupName: process.env['CLOUDWATCH_GROUP']!,
      logStreamName: process.env['CLOUDWATCH_STREAM'] ?? 'nitro',
      logEvents: [{ message: JSON.stringify(entry), timestamp: Date.now() }],
    }),
  )
}

function logStructured(entry: Record<string, unknown>) {
  logger.info(JSON.stringify(entry))
  void forwardToCloudWatch(entry)
}

// Diagnostic log to validate correct code path
logger.info('[monitoring middleware] Loaded monitoring middleware')

export default eventHandler(async (event: H3Event) => {
  const start = Date.now()
  const url = new URL(getRequestURL(event))
  const method = getMethod(event) ?? 'UNKNOWN'
  const headers = getRequestHeaders(event)
  const userAgent = headers['user-agent'] ?? 'unknown'
  const ip =
    headers['x-forwarded-for'] ??
    headers['x-real-ip'] ??
    event.node.req.socket?.remoteAddress ??
    'unknown'

  logStructured({ type: 'request_start', method, path: url.pathname, ip, userAgent })

  event.node.res.once('finish', () => {
    const duration = Date.now() - start
    const statusCode = event.node.res.statusCode ?? 0
    logStructured({
      type: 'request_end',
      method,
      path: url.pathname,
      statusCode,
      duration,
      ip,
      userAgent,
    })
  })
})
