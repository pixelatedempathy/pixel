;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="10c51e4b-647c-454f-beec-3b063ed67037",e._sentryDebugIdIdentifier="sentry-dbid-10c51e4b-647c-454f-beec-3b063ed67037")}catch(e){}}();import { g as goals, a as goalSchema } from '../../../chunks/index_DWQmSeOQ.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params }) => {
  const { id } = params;
  const goal = goals.find((g) => g.id === id);
  if (!goal) {
    return new Response(JSON.stringify({ error: "Goal not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(goal), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const PUT = async ({
  params,
  request
}) => {
  const { id } = params;
  if (typeof id !== "string") {
    return new Response(JSON.stringify({ error: "Invalid ID format" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const idx = goals.findIndex((g) => g.id === id);
  if (idx === -1) {
    return new Response(JSON.stringify({ error: "Goal not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const data = await request.json();
    const parsed = goalSchema.safeParse(data);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: parsed.error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const existingGoal = goals[idx];
    if (!existingGoal) {
      return new Response(JSON.stringify({ error: "Goal not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const updatedGoal = {
      ...parsed.data,
      id,
      createdAt: existingGoal.createdAt,
      updatedAt: Date.now()
    };
    goals[idx] = updatedGoal;
    return new Response(JSON.stringify(updatedGoal), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Server error",
        details: err instanceof Error ? err.message : String(err)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const DELETE = async ({ params }) => {
  const { id } = params;
  const idx = goals.findIndex((g) => g.id === id);
  if (idx === -1) {
    return new Response(JSON.stringify({ error: "Goal not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  goals.splice(idx, 1);
  return new Response(null, { status: 204 });
};
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
