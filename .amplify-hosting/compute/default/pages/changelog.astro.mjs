;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b2910f0c-cfc7-4ed6-83db-ba434502479a",e._sentryDebugIdIdentifier="sentry-dbid-b2910f0c-cfc7-4ed6-83db-ba434502479a")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, m as maybeRenderHead, ar as unescapeHTML, a as renderTemplate } from '../chunks/astro/server_DBAAVvAL.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const html = () => "<p>&#x3C;BaseLayout\ntitle={frontmatter.title}\ndescription={frontmatter.description}\nbgType={frontmatter.bgType}\nogImage={frontmatter.ogImage}</p>\n<blockquote>\n</blockquote>";

				const frontmatter = {"title":"Changelog","subtitle":"","description":"The changelog of the Astro AntfuStyle Theme project","bgType":"particle","toc":false,"ogImage":false,"prerender":true};
				const file = "/root/pixel/src/pages/changelog/index.md";
				const url = "/changelog";
				function rawContent() {
					return "   \n                \n            \n                                                                \n                \n          \n              \n               \n   \n\n<BaseLayout\n  title={frontmatter.title}\n  description={frontmatter.description}\n  bgType={frontmatter.bgType}\n  ogImage={frontmatter.ogImage}\n>\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
