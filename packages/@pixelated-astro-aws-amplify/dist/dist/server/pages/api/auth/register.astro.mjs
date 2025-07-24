;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40087e55-b398-4e91-8089-3f41a6e320c4",e._sentryDebugIdIdentifier="sentry-dbid-40087e55-b398-4e91-8089-3f41a6e320c4")}catch(e){}}();import { s as supabase } from '../../../chunks/supabase_DVgIUFEh.mjs';
import '../../../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  redirect
}) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("fullName")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName || null
        }
      }
    });
    if (authError) {
      console.error("Auth error:", authError);
      return new Response(authError.message, { status: 500 });
    }
    if (authData.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user.id,
        full_name: fullName || null,
        role: "user"
      });
      if (profileError) {
        console.error("Profile creation error:", profileError);
      }
      const { error: auditError } = await supabase.from("audit_logs").insert({
        user_id: authData.user.id,
        action: "user_registered",
        resource: "auth",
        resource_id: authData.user.id,
        metadata: {
          email: authData.user.email
        },
        ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
        user_agent: request.headers.get("user-agent")
      });
      if (auditError) {
        console.error("Audit logging error:", auditError);
      }
    }
    return redirect("/signin?registered=true");
  } catch (error) {
    console.error("Registration error:", error);
    return new Response("An unexpected error occurred", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
