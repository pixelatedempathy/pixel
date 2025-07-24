;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4e9d89e5-8095-41a7-8be2-c40bc315fbb5",e._sentryDebugIdIdentifier="sentry-dbid-4e9d89e5-8095-41a7-8be2-c40bc315fbb5")}catch(e){}}();import { z } from 'zod';
import './astro/server_t-wqd6mp.mjs';

async function validateRequestBody(request, schema) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);
    if (!result?.success) {
      return [
        null,
        {
          status: 400,
          error: "Invalid request parameters",
          details: result?.error.format()
        }
      ];
    }
    return [result?.data, null];
  } catch (error) {
    return [
      null,
      {
        status: 400,
        error: "Invalid JSON in request body",
        details: error instanceof Error ? error?.message : String(error)
      }
    ];
  }
}
function validateQueryParams(url, schema) {
  try {
    const params = {};
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    const result = schema.safeParse(params);
    if (!result.success) {
      return [
        null,
        {
          status: 400,
          error: "Invalid query parameters",
          details: result?.error.format()
        }
      ];
    }
    return [result?.data, null];
  } catch (error) {
    return [
      null,
      {
        status: 400,
        error: "Error parsing query parameters",
        details: error instanceof Error ? error?.message : String(error)
      }
    ];
  }
}
z.string().uuid().or(z.string().regex(/^[\w-]{21}$/));

export { validateQueryParams as a, validateRequestBody as v };
