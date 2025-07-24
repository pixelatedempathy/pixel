;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="07058f8f-e571-4fe1-a825-c9682a84155e",e._sentryDebugIdIdentifier="sentry-dbid-07058f8f-e571-4fe1-a825-c9682a84155e")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, ar as unescapeHTML, a as renderTemplate } from './astro/server_DBAAVvAL.mjs';
import 'clsx';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Warning = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Warning;
  const { rawHTMLString } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="callout" style="--callout-color-light: rgb(234, 179, 8); --callout-color-dark: rgb(234, 179, 8);"> <div class="callout-title"> <div class="callout-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"></path> </svg> </div> <div class="callout-title-inner">WARNING</div> </div> <div class="callout-content"> <p>${unescapeHTML(rawHTMLString)}</p> </div> </div>`;
}, "/root/pixel/src/components/base/Warning.astro", void 0);

export { $$Warning as $ };
