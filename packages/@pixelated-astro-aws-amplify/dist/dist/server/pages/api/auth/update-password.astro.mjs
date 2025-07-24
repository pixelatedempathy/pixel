;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="92042315-6e0f-4740-806b-8f6ef7dff6f7",e._sentryDebugIdIdentifier="sentry-dbid-92042315-6e0f-4740-806b-8f6ef7dff6f7")}catch(e){}}();import { u as updatePassword } from '../../../chunks/auth.service_AWWHLIoi.mjs';
import '../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  cookies
}) => {
  try {
    const { password } = await request.json();
    if (!password || password.length < 8) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Password must be at least 8 characters long"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    await updatePassword(password);
    cookies.delete("auth_recovery_token");
    cookies.delete("auth_recovery_email");
    return new Response(
      JSON.stringify({
        success: true,
        message: "Password successfully updated"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : "Failed to update password"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
