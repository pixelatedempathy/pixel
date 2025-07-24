;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="42c5d539-61bd-40b5-9ac7-a07224f5e230",e._sentryDebugIdIdentifier="sentry-dbid-42c5d539-61bd-40b5-9ac7-a07224f5e230")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import { v as verifyToken } from './verification_CL9aX5hk.mjs';
import './astro/server_bjkJ-nhl.mjs';

function getAdminLogger() {
  return createBuildSafeLogger("admin");
}
const logger = getAdminLogger();
var AdminPermission = /* @__PURE__ */ ((AdminPermission2) => {
  AdminPermission2["VIEW_USERS"] = "view_users";
  AdminPermission2["CREATE_USER"] = "create_user";
  AdminPermission2["UPDATE_USER"] = "update_user";
  AdminPermission2["DELETE_USER"] = "delete_user";
  AdminPermission2["VIEW_SESSIONS"] = "view_sessions";
  AdminPermission2["MANAGE_SESSIONS"] = "manage_sessions";
  AdminPermission2["VIEW_AUDIT_LOGS"] = "view_audit_logs";
  AdminPermission2["MANAGE_SECURITY"] = "manage_security";
  AdminPermission2["ROTATE_KEYS"] = "rotate_keys";
  AdminPermission2["VIEW_METRICS"] = "view_metrics";
  AdminPermission2["CONFIGURE_SYSTEM"] = "configure_system";
  return AdminPermission2;
})(AdminPermission || {});
const ROLE_PERMISSIONS = {
  ["super_admin" /* SUPER_ADMIN */]: Object.values(AdminPermission),
  ["clinical_admin" /* CLINICAL_ADMIN */]: [
    "view_users" /* VIEW_USERS */,
    "create_user" /* CREATE_USER */,
    "update_user" /* UPDATE_USER */,
    "view_sessions" /* VIEW_SESSIONS */,
    "manage_sessions" /* MANAGE_SESSIONS */,
    "view_metrics" /* VIEW_METRICS */
  ],
  ["security_admin" /* SECURITY_ADMIN */]: [
    "view_audit_logs" /* VIEW_AUDIT_LOGS */,
    "manage_security" /* MANAGE_SECURITY */,
    "rotate_keys" /* ROTATE_KEYS */,
    "view_metrics" /* VIEW_METRICS */
  ],
  ["support_admin" /* SUPPORT_ADMIN */]: [
    "view_users" /* VIEW_USERS */,
    "view_sessions" /* VIEW_SESSIONS */,
    "view_metrics" /* VIEW_METRICS */
  ]
};
class AdminService {
  static instance;
  /**
   * Private constructor to enforce singleton pattern
   */
  constructor() {
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
  }
  /**
   * Get therapy sessions with filtering options
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getSessions(_options) {
    return {
      sessions: [],
      // Your sessions array here
      total: 0
      // Total count of all sessions matching the filter
    };
  }
  /**
   * Lock a therapy session
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lockSession(_sessionId) {
    throw new Error("Method not implemented.");
  }
  /**
   * Unlock a therapy session
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unlockSession(_sessionId) {
    throw new Error("Method not implemented.");
  }
  /**
   * Archive a therapy session
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  archiveSession(_sessionId) {
    throw new Error("Method not implemented.");
  }
  /**
   * Check if user has admin role
   */
  async isAdmin(userId) {
    try {
      const user = await this.getAdminUser(userId);
      return !!user;
    } catch (error) {
      logger.error("Error checking admin status:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return false;
    }
  }
  /**
   * Get admin user details
   */
  async getAdminUser(userId) {
    try {
      return this.getMockAdminUser(userId);
    } catch (error) {
      logger.error("Error getting admin user:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return null;
    }
  }
  /**
   * Check if user has specific permission
   */
  async hasPermission(userId, permission) {
    try {
      const user = await this.getAdminUser(userId);
      if (!user) {
        return false;
      }
      if (user.permissions && user.permissions.includes(permission)) {
        return true;
      }
      return ROLE_PERMISSIONS[user.role].includes(permission);
    } catch (error) {
      logger.error("Error checking permission:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return false;
    }
  }
  /**
   * Verify admin authentication token
   */
  async verifyAdminToken(token) {
    try {
      const payload = await verifyToken(token);
      if (!payload || !payload.userId) {
        return null;
      }
      const user = await this.getAdminUser(payload.userId);
      if (!user) {
        return null;
      }
      return {
        userId: user.id,
        role: user.role
      };
    } catch (error) {
      logger.error("Error verifying admin token:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return null;
    }
  }
  /**
   * Get all admin users
   */
  async getAllAdmins() {
    try {
      return [
        this.getMockAdminUser("admin1"),
        this.getMockAdminUser("admin2"),
        this.getMockAdminUser("admin3"),
        this.getMockAdminUser("admin4")
      ].filter(Boolean);
    } catch (error) {
      logger.error("Error getting all admins:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return [];
    }
  }
  /**
   * Get system metrics for admin dashboard
   */
  async getSystemMetrics() {
    try {
      return {
        activeUsers: 128,
        activeTherapists: 42,
        activeSessions: 35,
        messagesLast24Hours: 1250,
        averageResponseTime: 850,
        // ms
        serverLoad: 0.42,
        encryptionOperations: 9876,
        securityLevel: {
          standard: 15,
          hipaa: 65,
          maximum: 20
        }
      };
    } catch (error) {
      logger.error("Error getting system metrics:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return {};
    }
  }
  /**
   * Mock admin user for development
   */
  getMockAdminUser(userId) {
    const mockUsers = {
      admin1: {
        id: "admin1",
        name: "Super Admin",
        email: "super@example.com",
        role: "super_admin" /* SUPER_ADMIN */
      },
      admin2: {
        id: "admin2",
        name: "Clinical Director",
        email: "clinical@example.com",
        role: "clinical_admin" /* CLINICAL_ADMIN */
      },
      admin3: {
        id: "admin3",
        name: "Security Officer",
        email: "security@example.com",
        role: "security_admin" /* SECURITY_ADMIN */
      },
      admin4: {
        id: "admin4",
        name: "Support Specialist",
        email: "support@example.com",
        role: "support_admin" /* SUPPORT_ADMIN */
      }
    };
    return mockUsers[userId] || null;
  }
  /**
   * Check if the request is from an admin user
   * @param context - Astro API context
   * @returns Boolean indicating if the request is from an admin
   */
  async isAdminRequest(context) {
    logger.info("isAdminRequest context keys:", { keys: Object.keys(context) });
    try {
      const tokenFromCookie = context.cookies.get("token")?.value;
      let authHeader = null;
      if (context.locals && "headers" in context.locals && context.locals["headers"]) {
        const localsHeaders = context.locals["headers"];
        authHeader = localsHeaders["authorization"] || localsHeaders["Authorization"] || null;
      }
      if (!authHeader) {
        authHeader = context.request.headers.get("authorization") || context.request.headers.get("Authorization");
      }
      const tokenFromHeader = authHeader?.replace(/^Bearer\s+/i, "");
      const token = tokenFromCookie || tokenFromHeader;
      if (!token) {
        return false;
      }
      const adminAuth = await this.verifyAdminToken(token);
      return !!adminAuth;
    } catch (error) {
      logger.error("Error checking admin request:", {
        error: error instanceof Error ? error.message : String(error)
      });
      return false;
    }
  }
}

async function verifyAdmin(context, requiredPermission) {
  try {
    const { request, cookies } = context;
    const authHeader = request.headers.get("Authorization");
    const token = authHeader ? authHeader.replace("Bearer ", "") : cookies.get("admin_token")?.value;
    if (!token) {
      return null;
    }
    const adminService = AdminService.getInstance();
    const admin = await adminService.verifyAdminToken(token);
    if (!admin) {
      return null;
    }
    let hasPermission = true;
    if (requiredPermission) {
      hasPermission = await adminService.hasPermission(
        admin.userId,
        requiredPermission
      );
    }
    return {
      userId: admin.userId,
      isAdmin: true,
      hasPermission
    };
  } catch {
    return null;
  }
}
function adminGuard(requiredPermission) {
  return async (context) => {
    const admin = await verifyAdmin(context, requiredPermission);
    if (!admin) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (requiredPermission && !admin.hasPermission) {
      return new Response(
        JSON.stringify({ error: "Insufficient permissions" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    context.locals.admin = admin;
    return null;
  };
}

export { AdminPermission as A, adminGuard as a, AdminService as b };
