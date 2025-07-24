;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2dc6d4be-c591-41cb-af77-e2adcd5f983b",e._sentryDebugIdIdentifier="sentry-dbid-2dc6d4be-c591-41cb-af77-e2adcd5f983b")}catch(e){}}();import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_BJQReLnb.mjs';
import { S as SITE } from '../chunks/config_f05_Kix0.mjs';
import { g as getUrl } from '../chunks/common_Dp__P9nz.mjs';
import '../chunks/astro/server_t-wqd6mp.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const blog = await getCollection('blog');

  const filteredBlogitems = blog.filter((item) => !item.data.draft);

  const sortedBlogItems = filteredBlogitems.sort(
    (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate),
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    customData: `
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <title>${SITE.title}</title>
        <url>${SITE.website}/icon-512.png</url>
        <link>${SITE.website}</link>
      </image>`,

    items: sortedBlogItems.map((item) => ({
      title: `${item.data.title}`,
      link: getUrl(`/blog/${item.slug}`),
      pubDate: item.data.pubDate,
      description: item.data.description,
      author: SITE.author,
    })),

    stylesheet: getUrl('/rss-styles.xsl'),
  })
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
