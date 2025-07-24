;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e6f33e0e-e788-454d-ae7a-8a5913023f6a",e._sentryDebugIdIdentifier="sentry-dbid-e6f33e0e-e788-454d-ae7a-8a5913023f6a")}catch(e){}}();import { c as createAuditLog, A as AuditEventType } from '../../../chunks/audit_BtMut9h8.mjs';
import { s as supabase } from '../../../chunks/supabase_pbWOGD7E.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  cookies,
  redirect
}) => {
  try {
    const accessToken = cookies.get("sb-access-token")?.value;
    const refreshToken = cookies.get("sb-refresh-token")?.value;
    let userId = null;
    if (accessToken && refreshToken) {
      try {
        const { data } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });
        userId = data?.user?.id;
      } catch (error2) {
        console.error("Error getting user session:", error2);
      }
    }
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error);
      return new Response(error.message, { status: 500 });
    }
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    if (userId) {
      await createAuditLog(
        AuditEventType.LOGOUT,
        "auth.signout",
        userId,
        "auth"
      );
    }
    return redirect("/signin?signedout=true");
  } catch (error) {
    console.error("Sign out error:", error);
    return new Response("An unexpected error occurred", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
