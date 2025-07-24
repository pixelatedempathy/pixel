;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7db4a990-5aab-4971-8336-923f85c9660a",e._sentryDebugIdIdentifier="sentry-dbid-7db4a990-5aab-4971-8336-923f85c9660a")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_bjkJ-nhl.mjs';
import { $ as $$Link } from './Link_BWH_Btsb.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$ShareLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShareLink;
  const { config } = Astro2.props;
  const postUrlString = Astro2.url.toString();
  const SHARE_LINKS = {
    twitter: {
      baseUrl: "https://twitter.com/intent/tweet?text=",
      formatUrl: (url, cfg) => `${SHARE_LINKS.twitter.baseUrl}${encodeURIComponent(
        `Reading ${cfg?.[1] ? `${cfg[1]}'s ` : ""}${url}

I think...`
      )}`,
      label: "twitter",
      title: "Tweet this post"
    },
    mastodon: {
      baseUrl: "https://elk.zone/intent/post?text=",
      formatUrl: (url, cfg) => `${SHARE_LINKS.mastodon.baseUrl}${encodeURIComponent(
        `Reading ${cfg?.[1] ? `${cfg[1]}'s ` : ""}${url}

I think...`
      )}`,
      label: "mastodon",
      title: "Share this post on Mastodon"
    },
    facebook: {
      baseUrl: "https://www.facebook.com/sharer.php?u=",
      formatUrl: (url) => `${SHARE_LINKS.facebook.baseUrl}${url}`,
      label: "facebook",
      title: "Share this post on Facebook"
    },
    pinterest: {
      baseUrl: "https://pinterest.com/pin/create/button/?url=",
      formatUrl: (url) => `${SHARE_LINKS.pinterest.baseUrl}${url}`,
      label: "pinterest",
      title: "Share this post on Pinterest"
    },
    reddit: {
      baseUrl: "https://www.reddit.com/submit?url=",
      formatUrl: (url) => `${SHARE_LINKS.reddit.baseUrl}${url}`,
      label: "reddit",
      title: "Share this post on Reddit"
    },
    telegram: {
      baseUrl: "https://t.me/share/url?url=",
      formatUrl: (url) => `${SHARE_LINKS.telegram.baseUrl}${url}`,
      label: "telegram",
      title: "Share this post via Telegram"
    },
    whatsapp: {
      baseUrl: "https://wa.me/?text=",
      formatUrl: (url) => `${SHARE_LINKS.whatsapp.baseUrl}${url}`,
      label: "whatsapp",
      title: "Share this post via WhatsApp"
    },
    email: {
      baseUrl: "mailto:?subject=See%20this%20post&body=",
      formatUrl: (url) => `${SHARE_LINKS.email.baseUrl}${url}`,
      label: "email",
      title: "Share this post via email"
    }
  };
  const linkProviders = Object.entries(config).filter(([key, value]) => value && key in SHARE_LINKS).map(([key, cfg]) => ({ key, cfg }));
  return renderTemplate`${maybeRenderHead()}<span class="font-mono op-50">&gt; </span> <span class="op-50">share on</span> <div id="share-links"${addAttribute(postUrlString, "data-post-url")}></div> ${renderScript($$result, "/root/pixel/src/components/widgets/ShareLink.astro?astro&type=script&index=0&lang.ts")} ${// Render hidden elements with provider data for client-side scrip
  linkProviders.map((provider, _idx) => renderTemplate`<span${addAttribute(provider.key, "data-provider-key")}${addAttribute(JSON.stringify(provider.cfg), "data-provider-config")} style="display: none;"></span>`)} ${// Pre-render links for initial state (for SSR and SEO)
  linkProviders.map((provider, idx) => {
    const linkConfig = SHARE_LINKS[provider.key];
    const initialPostUrl = new URL(postUrlString);
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "op-50! hover:op-75! op-transition", "href": linkConfig.formatUrl(initialPostUrl, provider.cfg), "title": linkConfig.title, "external": true }, { "default": ($$result3) => renderTemplate`${linkConfig.label}` })} ${idx < linkProviders.length - 1 && renderTemplate`<span class="op-25">/</span>`}` })}`;
  })}`;
}, "/root/pixel/src/components/widgets/ShareLink.astro", void 0);

export { $$ShareLink as $ };
