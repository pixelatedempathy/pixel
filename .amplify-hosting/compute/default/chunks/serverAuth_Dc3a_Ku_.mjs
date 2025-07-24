;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="343430e4-a490-4427-a44c-74141e6d1db5",e._sentryDebugIdIdentifier="sentry-dbid-343430e4-a490-4427-a44c-74141e6d1db5")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_kZLoRS1C.mjs';
import { a as createResourceAuditLog, A as AuditEventType } from './audit_r-p34TYv.mjs';
import { i as isAuthenticated, g as getCurrentUser, h as hasRolePrivilege } from './auth_CoQNbY06.mjs';
import { R as RedisService } from './RedisService_Dhads9Xu.mjs';
import './astro/server_jchCCyc7.mjs';

const logger = createBuildSafeLogger("serverAuth");
const redisService = new RedisService();
const MAX_AUTH_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW = 60 * 15;
const RATE_LIMIT_BLOCK_TIME = 60 * 60;
async function verifyServerAuth({
  cookies,
  request,
  requestIp,
  requiredRole,
  validateIPMatch = true,
  validateUserAgent = true
}) {
  try {
    const isRateLimited = await checkRateLimit(requestIp);
    if (isRateLimited) {
      logger.warn("Rate limit exceeded", { ip: requestIp });
      return { authenticated: false, user: null, reason: "rate_limited" };
    }
    await redisService.incr(`auth_attempts:${requestIp}`);
    await redisService.set(`auth_attempts:${requestIp}`, "", RATE_LIMIT_WINDOW);
    const authenticated = await isAuthenticated(cookies);
    if (!authenticated) {
      return { authenticated: false, user: null, reason: "not_authenticated" };
    }
    const user = await getCurrentUser(cookies);
    if (!user) {
      return { authenticated: false, user: null, reason: "user_not_found" };
    }
    if (requiredRole && !hasRolePrivilege(user.role, requiredRole)) {
      await createResourceAuditLog(
        AuditEventType.SERVER_AUTH_DENIED,
        user.id,
        { id: new URL(request.url).pathname, type: "route" },
        {
          reason: "insufficient_permissions",
          requiredRole,
          userRole: user.role
        }
      );
      return { authenticated: false, user, reason: "insufficient_permissions" };
    }
    if (validateIPMatch) {
      const lastKnownIp = await redisService.get(`user_ip:${user.id}`);
      if (lastKnownIp && lastKnownIp !== requestIp) {
        logger.warn("IP mismatch detected", {
          userId: user.id,
          previousIp: lastKnownIp,
          currentIp: requestIp
        });
        await createResourceAuditLog(
          AuditEventType.SUSPICIOUS_IP_CHANGE,
          user.id,
          { id: user.id, type: "user" },
          {
            previousIp: lastKnownIp,
            currentIp: requestIp
          }
        );
      }
      await redisService.set(`user_ip:${user.id}`, requestIp);
      await redisService.set(`user_ip:${user.id}`, requestIp, 60 * 60 * 24 * 7);
    }
    if (validateUserAgent) {
      const userAgent = request.headers.get("user-agent") || "unknown";
      const lastUserAgent = await redisService.get(`user_agent:${user.id}`);
      if (lastUserAgent && lastUserAgent !== userAgent) {
        logger.warn("User agent change detected", {
          userId: user.id,
          previousUserAgent: lastUserAgent,
          currentUserAgent: userAgent
        });
        await createResourceAuditLog(
          AuditEventType.SUSPICIOUS_USER_AGENT_CHANGE,
          user.id,
          { id: user.id, type: "user" },
          {
            previousUserAgent: lastUserAgent,
            currentUserAgent: userAgent
          }
        );
      }
      await redisService.set(`user_agent:${user.id}`, userAgent);
      await redisService.set(
        `user_agent:${user.id}`,
        userAgent,
        60 * 60 * 24 * 7
      );
    }
    await redisService.del(`auth_attempts:${requestIp}`);
    await createResourceAuditLog(
      AuditEventType.SERVER_AUTH_SUCCESS,
      user.id,
      { id: new URL(request.url).pathname, type: "route" },
      {
        method: request.method,
        ip: requestIp,
        userAgent: request.headers.get("user-agent") || "unknown"
      }
    );
    return { authenticated: true, user };
  } catch (error) {
    logger.error("Server auth error", {
      error: error instanceof Error ? error.message : String(error)
    });
    return { authenticated: false, user: null, reason: "server_error" };
  }
}
async function checkRateLimit(ip) {
  try {
    const isBlocked = await redisService.exists(`auth_blocked:${ip}`);
    if (isBlocked) {
      return true;
    }
    const attempts = await redisService.get(`auth_attempts:${ip}`);
    const attemptCount = attempts ? parseInt(attempts, 10) : 0;
    if (attemptCount >= MAX_AUTH_ATTEMPTS) {
      await redisService.set(`auth_blocked:${ip}`, "1");
      await redisService.set(`auth_blocked:${ip}`, "1", RATE_LIMIT_BLOCK_TIME);
      await createResourceAuditLog(
        AuditEventType.RATE_LIMIT_TRIGGERED,
        "system",
        { id: ip, type: "ip_address" },
        {
          attempts: attemptCount,
          blockDuration: RATE_LIMIT_BLOCK_TIME
        }
      );
      return true;
    }
    return false;
  } catch (error) {
    logger.error("Rate limit check error", {
      error: error instanceof Error ? error.message : String(error)
    });
    return false;
  }
}
async function requirePageAuth(Astro, requiredRole) {
  const { request, cookies } = Astro;
  const requestIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const { authenticated, user, reason } = await verifyServerAuth({
    cookies,
    request,
    requestIp,
    requiredRole
  });
  if (!authenticated) {
    logger.warn("Page auth denied", {
      path: new URL(request.url).pathname,
      reason,
      ip: requestIp
    });
    const redirectUrl = reason === "insufficient_permissions" ? "/forbidden" : `/login?redirect=${encodeURIComponent(request.url)}`;
    return Astro.redirect(redirectUrl);
  }
  if (Astro.locals) {
    Astro.locals.user = user;
  }
  return;
}
function protectRoute(options = {}) {
  return (handler) => {
    const apiRouteHandler = async (context) => {
      const { request, cookies } = context;
      const requestIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
      try {
        const isRateLimited = await checkRateLimit(requestIp);
        if (isRateLimited) {
          logger.warn("Rate limit exceeded", { ip: requestIp });
          return new Response(
            JSON.stringify({ error: "Too many authentication attempts" }),
            {
              status: 429,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        await redisService.incr(`auth_attempts:${requestIp}`);
        await redisService.set(
          `auth_attempts:${requestIp}`,
          "",
          RATE_LIMIT_WINDOW
        );
        const authenticated = await isAuthenticated(cookies);
        if (!authenticated) {
          return new Response(
            JSON.stringify({ error: "Authentication required" }),
            {
              status: 401,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        const user = await getCurrentUser(cookies);
        if (!user) {
          return new Response(JSON.stringify({ error: "User not found" }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
          });
        }
        if (options.requiredRole && !hasRolePrivilege(user.role, options.requiredRole)) {
          await createResourceAuditLog(
            AuditEventType.SERVER_AUTH_DENIED,
            user.id,
            { id: new URL(request.url).pathname, type: "route" },
            {
              reason: "insufficient_permissions",
              requiredRole: options.requiredRole,
              userRole: user.role
            }
          );
          return new Response(
            JSON.stringify({ error: "Insufficient permissions" }),
            {
              status: 403,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        if (options.validateIPMatch !== false) {
          const lastKnownIp = await redisService.get(`user_ip:${user.id}`);
          if (lastKnownIp && lastKnownIp !== requestIp) {
            logger.warn("IP mismatch detected", {
              userId: user.id,
              previousIp: lastKnownIp,
              currentIp: requestIp
            });
            await createResourceAuditLog(
              AuditEventType.SUSPICIOUS_IP_CHANGE,
              user.id,
              { id: user.id, type: "user" },
              {
                previousIp: lastKnownIp,
                currentIp: requestIp
              }
            );
          }
          await redisService.set(`user_ip:${user.id}`, requestIp);
          await redisService.set(
            `user_ip:${user.id}`,
            requestIp,
            60 * 60 * 24 * 7
          );
        }
        if (options.validateUserAgent !== false) {
          const userAgent = request.headers.get("user-agent") || "unknown";
          const lastUserAgent = await redisService.get(`user_agent:${user.id}`);
          if (lastUserAgent && lastUserAgent !== userAgent) {
            logger.warn("User agent change detected", {
              userId: user.id,
              previousUserAgent: lastUserAgent,
              currentUserAgent: userAgent
            });
            await createResourceAuditLog(
              AuditEventType.SUSPICIOUS_USER_AGENT_CHANGE,
              user.id,
              { id: user.id, type: "user" },
              {
                previousUserAgent: lastUserAgent,
                currentUserAgent: userAgent
              }
            );
          }
          await redisService.set(`user_agent:${user.id}`, userAgent);
          await redisService.set(
            `user_agent:${user.id}`,
            userAgent,
            60 * 60 * 24 * 7
          );
        }
        await redisService.del(`auth_attempts:${requestIp}`);
        await createResourceAuditLog(
          AuditEventType.SERVER_AUTH_SUCCESS,
          user.id,
          { id: new URL(request.url).pathname, type: "route" },
          {
            method: request.method,
            ip: requestIp,
            userAgent: request.headers.get("user-agent") || "unknown"
          }
        );
        const authContext = {
          ...context,
          locals: {
            ...context.locals,
            user
          }
        };
        return handler(authContext);
      } catch (error) {
        logger.error("Server auth error", {
          error: error instanceof Error ? error.message : String(error)
        });
        return new Response(
          JSON.stringify({ error: "An unexpected error occurred" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    };
    return apiRouteHandler;
  };
}

export { protectRoute as p, requirePageAuth as r };
