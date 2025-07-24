;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e575198-5c02-42d7-ae5c-88fa97c4c769",e._sentryDebugIdIdentifier="sentry-dbid-2e575198-5c02-42d7-ae5c-88fa97c4c769")}catch(e){}}();import { p as protectRoute } from '../../../chunks/serverAuth_DpRotyBD.mjs';
import { s as supabase } from '../../../chunks/supabase_DVgIUFEh.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_tzJzO24i.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("profile-api");
const GET = protectRoute({
  validateIPMatch: true,
  validateUserAgent: true
})(async ({ locals }) => {
  try {
    const { user } = locals;
    const { data: profileData, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    if (error) {
      logger.error(`Error fetching profile for user ${user.id}:`, { error });
      return new Response(
        JSON.stringify({
          error: "Failed to retrieve profile data"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        profile: {
          id: profileData.id,
          fullName: profileData.full_name,
          avatarUrl: profileData.avatar_url,
          email: user.email,
          role: user.role,
          lastLogin: profileData.last_login,
          createdAt: profileData.created_at,
          updatedAt: profileData.updated_at,
          preferences: profileData.preferences || {}
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Unexpected error in profile API:", { error });
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
  validateIPMatch: true,
  validateUserAgent: true
})(async ({ request, locals }) => {
  try {
    const { user } = locals;
    const data = await request.json();
    const { fullName, avatarUrl, preferences } = data;
    const updates = {};
    if (fullName !== void 0) {
      updates.full_name = fullName;
    }
    if (avatarUrl !== void 0) {
      updates.avatar_url = avatarUrl;
    }
    if (preferences !== void 0) {
      updates.preferences = preferences;
    }
    const { data: profileData, error } = await supabase.from("profiles").update(updates).eq("id", user.id).select().single();
    if (error) {
      logger.error(`Error updating profile for user ${user.id}:`, { error });
      return new Response(
        JSON.stringify({
          error: "Failed to update profile"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        profile: {
          id: profileData.id,
          fullName: profileData.full_name,
          avatarUrl: profileData.avatar_url,
          email: user.email,
          role: user.role,
          lastLogin: profileData.last_login,
          createdAt: profileData.created_at,
          updatedAt: profileData.updated_at,
          preferences: profileData.preferences || {}
        },
        message: "Profile updated successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    logger.error("Unexpected error in profile API:", { error });
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
