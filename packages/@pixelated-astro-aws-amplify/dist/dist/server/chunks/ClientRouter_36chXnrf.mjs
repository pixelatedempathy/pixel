;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6c9fa6a6-7db6-4cd3-8fb1-6e2b49a91142",e._sentryDebugIdIdentifier="sentry-dbid-6c9fa6a6-7db6-4cd3-8fb1-6e2b49a91142")}catch(e){}}();import { b as createAstro, c as createComponent, e as addAttribute, d as renderScript, a as renderTemplate } from './astro/server_t-wqd6mp.mjs';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/root/pixel/node_modules/.pnpm/astro@5.12.3_@capacitor+preferences@7.0.1_@capacitor+core@7.4.2__@types+node@24.1.0_@up_cfb0f03b66d0b8a91c2557c4e756814a/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/node_modules/.pnpm/astro@5.12.3_@capacitor+preferences@7.0.1_@capacitor+core@7.4.2__@types+node@24.1.0_@up_cfb0f03b66d0b8a91c2557c4e756814a/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
