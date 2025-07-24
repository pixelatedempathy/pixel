;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="17c02857-1d7e-427b-ad35-8c7334367451",e._sentryDebugIdIdentifier="sentry-dbid-17c02857-1d7e-427b-ad35-8c7334367451")}catch(e){}}();import { s as supabase } from '../../../chunks/supabase_DVgIUFEh.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  cookies,
  redirect
}) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["google", "github", "discord"];
  if (provider && validProviders.includes(provider)) {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: new URL("/api/auth/callback", request.url).toString()
        }
      });
      if (error) {
        console.error("OAuth error:", error);
        return new Response(error?.message, { status: 500 });
      }
      return redirect(data?.url);
    } catch (error) {
      console.error("OAuth error:", error);
      return new Response("An unexpected error occurred", { status: 500 });
    }
  }
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.error("Auth error:", error);
      return new Response(error?.message, { status: 401 });
    }
    if (data && data.session) {
      const { access_token, refresh_token } = data.session;
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
      const { error: auditError } = await supabase.from("audit_logs").insert({
        user_id: data.user.id,
        action: "user_signed_in",
        resource: "auth",
        resource_id: data.user.id,
        metadata: {
          email: data.user.email
        },
        ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
        user_agent: request.headers.get("user-agent")
      });
      if (auditError) {
        console.error("Audit logging error:", auditError);
      }
      return redirect("/dashboard");
    }
    return new Response("Authentication failed", { status: 401 });
  } catch (error) {
    console.error("Sign in error:", error);
    return new Response("An unexpected error occurred", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
