;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1d1744a4-5e14-478b-bda7-0651ac47cc97",e._sentryDebugIdIdentifier="sentry-dbid-1d1744a4-5e14-478b-bda7-0651ac47cc97")}catch(e){}}();import { p as protectRoute } from '../../../../chunks/serverAuth_4gmt5n21.mjs';
import { s as supabase } from '../../../../chunks/supabase_BZNarnLa.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import { a as createResourceAuditLog } from '../../../../chunks/audit_CMoAMAaW.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("admin-users-api");
const GET = protectRoute({
  requiredRole: "admin",
  validateIPMatch: true,
  validateUserAgent: true
})(async ({ locals, request }) => {
  try {
    const admin = locals.user;
    const params = new URL(request.url).searchParams;
    const page = parseInt(params.get("page") || "1", 10);
    const limit = Math.min(parseInt(params.get("limit") || "20", 10), 100);
    const offset = (page - 1) * limit;
    const role = params.get("role");
    const search = params.get("search");
    let query = supabase.from("profiles").select(
      "id, full_name, avatar_url, role, last_login, created_at, updated_at, status, metadata",
      { count: "exact" }
    );
    if (role) {
      query = query.eq("role", role);
    }
    if (search) {
      query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`);
    }
    query = query.range(offset, offset + limit - 1).order("created_at", { ascending: false });
    const { data: users, error, count } = await query;
    if (error) {
      logger.error(`Error fetching users:`, error);
      return new Response(
        JSON.stringify({
          error: "Failed to retrieve users"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    await createResourceAuditLog(
      "admin_list_users",
      admin.id,
      { id: "all", type: "users" },
      {
        filters: { role, search },
        pagination: { page, limit },
        userCount: count || 0
      }
    );
    return new Response(
      JSON.stringify({
        users,
        metadata: {
          page,
          limit,
          totalCount: count || 0,
          totalPages: count ? Math.ceil(count / limit) : 0
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Unexpected error in users API:", { error });
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});
const PUT = protectRoute({
  requiredRole: "admin",
  validateIPMatch: true,
  validateUserAgent: true
})(async ({ locals, request }) => {
  try {
    const admin = locals.user;
    const data = await request.json();
    const { userId, updates } = data;
    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!updates || Object.keys(updates).length === 0) {
      return new Response(JSON.stringify({ error: "No updates provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (updates.role === "super_admin" && admin.role !== "super_admin") {
      logger.warn(
        `Admin ${admin.id} attempted to escalate user ${userId} to super_admin`
      );
      await createResourceAuditLog(
        "admin_action_blocked",
        admin.id,
        { id: userId, type: "user" },
        {
          reason: "role_escalation_attempt",
          attemptedRole: "super_admin",
          adminRole: admin.role
        }
      );
      return new Response(
        JSON.stringify({ error: "Insufficient permissions for this action" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const dbUpdates = {};
    if (updates.fullName !== void 0) {
      dbUpdates.full_name = updates.fullName;
    }
    if (updates.role !== void 0) {
      dbUpdates.role = updates.role;
    }
    if (updates.status !== void 0) {
      dbUpdates.status = updates.status;
    }
    if (updates.metadata !== void 0) {
      dbUpdates.metadata = updates.metadata;
    }
    const { data: updatedUser, error } = await supabase.from("profiles").update(dbUpdates).eq("id", userId).select(
      "id, full_name, avatar_url, role, last_login, created_at, updated_at, status, metadata"
    ).single();
    if (error) {
      logger.error(`Error updating user ${userId}:`, error);
      return new Response(
        JSON.stringify({
          error: "Failed to update user"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    await createResourceAuditLog(
      "admin_update_user",
      admin.id,
      { id: userId, type: "user" },
      {
        updates: dbUpdates
      }
    );
    return new Response(
      JSON.stringify({
        user: updatedUser,
        message: "User updated successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Unexpected error in users API:", { error });
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
