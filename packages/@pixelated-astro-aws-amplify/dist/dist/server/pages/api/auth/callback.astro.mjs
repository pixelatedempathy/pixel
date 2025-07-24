;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bb69079a-664d-4efa-b47e-494bc9fd257d",e._sentryDebugIdIdentifier="sentry-dbid-bb69079a-664d-4efa-b47e-494bc9fd257d")}catch(e){}}();import { c as createAuditLog, A as AuditEventType } from '../../../chunks/audit_DWq5CQbl.mjs';
import { s as supabase } from '../../../chunks/supabase_DVgIUFEh.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({
  url,
  cookies,
  redirect
}) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }
  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
    if (error) {
      console.error("Auth callback error:", error);
      return new Response(error?.message, { status: 500 });
    }
    if (!data?.session) {
      console.error("No session data received");
      return new Response("Authentication failed", { status: 401 });
    }
    const { access_token, refresh_token } = data.session;
    const { user } = data;
    cookies.set("sb-access-token", access_token, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 3600
      // 1 hour
    });
    cookies.set("sb-refresh-token", refresh_token, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 3600
      // 7 days
    });
    if (user) {
      const { data: profileData, error: profileError } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (profileError && profileError.code !== "PGRST116") {
        console.error("Profile fetch error:", profileError);
      }
      if (!profileData) {
        const { error: insertError } = await supabase.from("profiles").insert({
          id: user.id,
          full_name: user.user_metadata["full_name"] || null,
          avatar_url: user.user_metadata["avatar_url"] || null,
          role: "user"
        });
        if (insertError) {
          console.error("Profile creation error:", insertError);
        }
      }
      await createAuditLog(
        AuditEventType.LOGIN,
        "auth.signin.oauth",
        user.id,
        "auth",
        {
          email: user.email,
          provider: user.app_metadata.provider
        }
      );
    }
    return redirect("/dashboard");
  } catch (error) {
    console.error("Auth callback error:", error);
    return new Response("An unexpected error occurred", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
