;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="21835847-4d07-4615-9e8a-e6f33ac4d5cf",e._sentryDebugIdIdentifier="sentry-dbid-21835847-4d07-4615-9e8a-e6f33ac4d5cf")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { a as getEntry } from '../chunks/_astro_content_BVsi8R0v.mjs';
import { $ as $$Toc } from '../chunks/Toc_wE5inh6h.mjs';
import { $ as $$Categorizer } from '../chunks/Categorizer_W01LXPZ3.mjs';
import { $ as $$Link } from '../chunks/Link_urbCl899.mjs';
import { U as UI, F as FEATURES } from '../chunks/config_Piylsppw.mjs';
import { g as getUrl } from '../chunks/common_BfWY_4NZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$GroupItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GroupItem;
  const { items } = Astro2.props;
  const { maxGroupColumns } = UI.groupView;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`grid gap-3 cols-[repeat(auto-fill,minmax(350px,1fr))]
    py-8 mx-auto lt-lgp:max-w-[712px]! lt-md:max-w-[350px]!`, "class")}${addAttribute(`max-width: calc(350px * ${maxGroupColumns} + ${maxGroupColumns - 1} * 0.75rem);`, "style")}> ${items.map((item) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "class": `link relative flex items-center
          w-[350px] max-w-full px-3.5 pt-2 pb-3.5 rounded-md
          bg-transparent hover:bg-[#88888811]
          text-4.4 transition-all duration-300`, "href": item.link, "aria-hidden": true, "external": true }, { "default": ($$result2) => renderTemplate` <div class="pt-2 pr-5"> <div${addAttribute(`icon op-50 saturate-0 leading-9 text-7.5 ${item.icon}`, "class")}></div> </div> <div class="flex-auto"> <div>${item.id}</div> <div class="op-50 text-sm font-normal">${item.desc}</div> </div> ` })}`)} </div>`;
}, "/root/pixel/src/components/views/GroupItem.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$GroupView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GroupView;
  const { pageToc } = Astro2.props;
  const entry = await getEntry("projects", "data");
  if (!entry) {
    throw new Error("Projects data not found");
  }
  const { projects } = entry.data;
  const { toc } = FEATURES;
  const tocEnabled = Array.isArray(toc) && toc[0] && pageToc;
  return renderTemplate`${tocEnabled && renderTemplate`${renderComponent($$result, "Toc", $$Toc, { "category": Object.keys(projects), "style": "text-align:end"  })}`}${Object.keys(projects).map((key, idx) => renderTemplate`${maybeRenderHead()}<div class="slide-enter"${addAttribute({ "--enter-stage": idx }, "style")}>${renderComponent($$result, "Categorizer", $$Categorizer, { "text": key, "needId": tocEnabled, "wide": true })}${renderComponent($$result, "GroupItem", $$GroupItem, { "items": projects[key] })}</div>`)}${renderTemplate`<style>
    .link:hover .icon {
      filter: saturate(1);
    }
  </style>`}`;
}, "/root/pixel/src/components/views/GroupView.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const frontmatter = {
    title: "Projects",
    subtitle: "Tech Stack for the Astro AntfuStyle Theme & Credits",
    description: "Tech Stack for the Astro AntfuStyle Theme & Credits",
    toc: true};
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-white mb-4">${frontmatter.title}</h1> <p class="text-lg text-slate-400 mb-8">${frontmatter.subtitle}</p> <div class="flex flex-wrap justify-center items-center gap-4 mb-12"> ${renderComponent($$result2, "Link", $$Link, { "class": "btn-orange", "href": getUrl("/releases/") }, { "default": ($$result3) => renderTemplate` <span class="i-ph-rocket-launch-duotone"></span> <span class="ml-1.5">Latest Releases</span> ` })} ${renderComponent($$result2, "Link", $$Link, { "class": "btn-violet", "href": getUrl("/prs/") }, { "default": ($$result3) => renderTemplate` <span class="i-lucide-git-pull-request"></span> <span class="ml-1.5">Recent Pull Requests</span> ` })} </div> ${renderComponent($$result2, "GroupView", $$GroupView, { "pageToc": frontmatter.toc })} </div> </section> ` })}`;
}, "/root/pixel/src/pages/projects.astro", void 0);

const $$file = "/root/pixel/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
