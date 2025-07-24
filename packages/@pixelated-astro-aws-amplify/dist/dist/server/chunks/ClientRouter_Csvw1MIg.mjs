;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c88dd2d0-f330-4b2f-801b-38d33ea0577c",e._sentryDebugIdIdentifier="sentry-dbid-c88dd2d0-f330-4b2f-801b-38d33ea0577c")}catch(e){}}();import { b as createAstro, c as createComponent, e as addAttribute, d as renderScript, a as renderTemplate } from './astro/server_Ck5BzePu.mjs';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/root/pixel/node_modules/.pnpm/astro@5.12.3_@capacitor+preferences@7.0.1_@capacitor+core@7.4.2__@types+node@24.1.0_@up_fc8f8b4c2d9b97ff249879fa36ee3437/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/node_modules/.pnpm/astro@5.12.3_@capacitor+preferences@7.0.1_@capacitor+core@7.4.2__@types+node@24.1.0_@up_fc8f8b4c2d9b97ff249879fa36ee3437/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
