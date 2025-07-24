;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="88a09338-575e-4f44-8a59-07fac1a65f24",e._sentryDebugIdIdentifier="sentry-dbid-88a09338-575e-4f44-8a59-07fac1a65f24")}catch(e){}}();import { a as adminGuard, A as AdminPermission, b as AdminService } from '../../../chunks/middleware_DHcbON-b.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("default");
const GET = async (context) => {
  const middlewareResponse = await adminGuard(AdminPermission.VIEW_USERS)(
    context
  );
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const { userId } = context.locals.admin;
    const url = new URL(context.request.url);
    const limit = Number.parseInt(url.searchParams.get("limit") || "10", 10);
    const offset = Number.parseInt(url.searchParams.get("offset") || "0", 10);
    const role = url.searchParams.get("role") || void 0;
    const adminService = AdminService.getInstance();
    const usersResult = await adminService.getAllAdmins();
    const filteredUsers = role ? usersResult.filter((user) => user.role === role) : usersResult;
    const total = filteredUsers.length;
    const paginatedUsers = filteredUsers.slice(offset, offset + limit);
    logger.info(`Admin user ${userId} accessed user list`);
    return new Response(
      JSON.stringify({
        success: true,
        users: paginatedUsers,
        pagination: {
          total,
          limit,
          offset,
          hasMore: offset + limit < total
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Error fetching users:", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const PATCH = async (context) => {
  const middlewareResponse = await adminGuard(AdminPermission.UPDATE_USER)(
    context
  );
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const { userId: adminId } = context.locals.admin;
    const requestData = await context.request.json();
    const { userId, updates } = requestData;
    if (!userId || !updates) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const adminService = AdminService.getInstance();
    const user = await adminService.getAdminUser(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const updatedUser = { ...user, ...updates };
    logger.info(`Admin user ${adminId} updated user ${userId}`);
    return new Response(JSON.stringify({ success: true, user: updatedUser }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Error updating user:", {
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(JSON.stringify({ error: "Failed to update user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PATCH,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
