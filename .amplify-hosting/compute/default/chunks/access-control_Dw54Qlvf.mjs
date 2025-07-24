;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="05b186b7-323e-499a-8c35-2a13cd00bcb9",e._sentryDebugIdIdentifier="sentry-dbid-05b186b7-323e-499a-8c35-2a13cd00bcb9")}catch(e){}}();import { c as createAuditLog, A as AuditEventType } from './audit_r-p34TYv.mjs';
import { g as getCurrentUser } from './auth_CoQNbY06.mjs';
import './astro/server_jchCCyc7.mjs';

const ROLES = {
  USER: "user",
  STAFF: "staff",
  ADMIN: "admin"
};
const ROLE_PERMISSIONS = {
  [ROLES.USER]: [
    "create:conversations",
    "read:conversations",
    "update:conversations",
    "delete:conversations",
    "list:conversations",
    "create:messages",
    "read:messages",
    "update:messages",
    "read:users",
    "update:users",
    "read:settings",
    "update:settings"
  ],
  [ROLES.STAFF]: [
    "create:conversations",
    "read:conversations",
    "update:conversations",
    "delete:conversations",
    "list:conversations",
    "create:messages",
    "read:messages",
    "update:messages",
    "read:users",
    "update:users",
    "read:settings",
    "update:settings",
    "list:users",
    "read:admin"
  ],
  [ROLES.ADMIN]: [
    "create:conversations",
    "read:conversations",
    "update:conversations",
    "delete:conversations",
    "list:conversations",
    "create:messages",
    "read:messages",
    "update:messages",
    "delete:messages",
    "read:users",
    "update:users",
    "delete:users",
    "list:users",
    "read:settings",
    "update:settings",
    "read:admin",
    "manage:admin"
  ]
};
function roleHasPermission(role, permission) {
  return ROLE_PERMISSIONS[role]?.includes(permission) || false;
}
function requirePermission(permission) {
  return async ({
    cookies,
    redirect
  }) => {
    const user = await getCurrentUser(cookies);
    if (!user) {
      return redirect(
        `/signin?error=${encodeURIComponent(
          "You must be signed in to access this page"
        )}`
      );
    }
    const userRole = user.role;
    const hasPermission2 = roleHasPermission(userRole, permission);
    await createAuditLog(
      AuditEventType.ACCESS,
      "permission_check",
      user.id,
      "access_control",
      {
        permission,
        granted: hasPermission2
      }
    );
    if (!hasPermission2) {
      return redirect(
        `/dashboard?error=${encodeURIComponent(
          "You do not have permission to access this page"
        )}`
      );
    }
    return null;
  };
}

export { requirePermission as r };
