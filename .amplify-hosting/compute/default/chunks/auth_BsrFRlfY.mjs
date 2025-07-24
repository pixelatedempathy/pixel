;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="001b745a-4055-4a52-b469-63cd54309958",e._sentryDebugIdIdentifier="sentry-dbid-001b745a-4055-4a52-b469-63cd54309958")}catch(e){}}();import './astro/server_bjkJ-nhl.mjs';
import './audit_D_ukYiZ_.mjs';
import { s as supabase } from './supabase_BQIKMD8j.mjs';

const authConfig = {
  sessionDuration: 7 * 24 * 60 * 60,
  // 1 week in seconds
  cookies: {
    accessToken: "sb-access-token",
    refreshToken: "sb-refresh-token",
    path: "/",
    domain: void 0,
    secure: true,
    httpOnly: true,
    sameSite: "lax"
  },
  redirects: {
    afterLogin: "/dashboard",
    afterLogout: "/",
    authRequired: "/login",
    forbidden: "/access-denied"
  },
  roles: {
    default: "user",
    hierarchy: ["admin", "staff", "therapist", "user", "guest"]
  },
  rateLimit: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60
    // 15 minutes in seconds
  }
};
function hasRolePrivilege(userRole, requiredRole) {
  const { hierarchy } = authConfig.roles;
  const userRoleIndex = hierarchy.indexOf(userRole);
  const requiredRoleIndex = hierarchy.indexOf(requiredRole);
  return userRoleIndex !== -1 && requiredRoleIndex !== -1 && userRoleIndex <= requiredRoleIndex;
}

async function getCurrentUser(cookies) {
  const accessToken = cookies.get(authConfig.cookies.accessToken)?.value;
  const refreshToken = cookies.get(authConfig.cookies.refreshToken)?.value;
  if (!accessToken || !refreshToken) {
    return null;
  }
  try {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    if (error || !data?.user) {
      console.error("Session error:", error);
      return null;
    }
    const { data: profileData } = await supabase.from("profiles").select("*").eq("id", data.user.id).single();
    return {
      id: data.user.id,
      email: data.user.email || "",
      role: profileData?.role || authConfig.roles.default,
      fullName: profileData?.["full_name"] || data.user.user_metadata?.["full_name"],
      avatarUrl: profileData?.["avatar_url"] || data.user.user_metadata?.["avatar_url"],
      lastLogin: profileData?.last_login ? new Date(profileData.last_login) : null,
      metadata: {
        ...data.user.user_metadata,
        ...profileData?.metadata
      }
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
async function isAuthenticated(cookies) {
  if (typeof window !== "undefined") {
    return false;
  }
  const accessToken = cookies.get(authConfig.cookies.accessToken)?.value;
  const refreshToken = cookies.get(authConfig.cookies.refreshToken)?.value;
  if (!accessToken || !refreshToken) {
    return false;
  }
  try {
    return true;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
}
async function requireAuth({
  cookies,
  redirect,
  request
}) {
  const user = await getCurrentUser(cookies);
  if (!user) {
    const loginUrl = new URL(authConfig.redirects.authRequired, request.url);
    loginUrl.searchParams.set("redirect", request.url);
    return redirect(loginUrl.toString());
  }
  return null;
}
class Auth {
  async verifySession(request) {
    const cookies = this.getCookiesFromRequest(request);
    const user = await getCurrentUser(cookies);
    return user ? { userId: user.id } : null;
  }
  getCookiesFromRequest(request) {
    const cookieHeader = request.headers.get("cookie") || "";
    return {
      get: (name) => {
        const match = cookieHeader.match(new RegExp(`${name}=([^;]+)`));
        return match ? { value: match[1] } : void 0;
      }
    };
  }
}
const auth = new Auth();

export { auth as a, getCurrentUser as g, hasRolePrivilege as h, isAuthenticated as i, requireAuth as r };
