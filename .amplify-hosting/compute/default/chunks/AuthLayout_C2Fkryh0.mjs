;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8b112113-c5ce-4e89-a809-e33e868628d8",e._sentryDebugIdIdentifier="sentry-dbid-8b112113-c5ce-4e89-a809-e33e868628d8")}catch(e){}}();import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, h as renderSlot } from './astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Xugxt_b3.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const {
    title = "Authentication",
    description = "Pixelated Empathy - Secure AI Therapy Platform",
    transitionMode = "fade"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "showNavBar": true, "showFooter": true, "bgPattern": true, "usePlumAnimation": false, "centered": true, "containerClass": "w-full max-w-md mx-auto", "contentClass": "pt-20 pb-10 px-4 h-auto", "transitionMode": transitionMode }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/root/pixel/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
