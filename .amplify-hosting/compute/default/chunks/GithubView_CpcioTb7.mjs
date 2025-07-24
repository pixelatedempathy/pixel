;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="124d7328-115b-4397-a05b-cd49a1cf546e",e._sentryDebugIdIdentifier="sentry-dbid-124d7328-115b-4397-a05b-cd49a1cf546e")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, ar as unescapeHTML, a as renderTemplate } from './astro/server_jchCCyc7.mjs';
import { g as getCollection } from './_astro_content_BIIXuKLo.mjs';
import { $ as $$Link } from './Link_B9Jr1H0C.mjs';
import { f as formatDate, a as isDiffMonth } from './datetime_BZEES09s.mjs';
import { U as UI } from './config_qq9QWgcZ.mjs';
import { g as getUrl } from './common_BtEWPVMT.mjs';

const VERSION_COLOR = {
  major: "bg-rose:15 text-rose-7 dark:text-rose-3",
  minor: "bg-purple:15 text-purple-7 dark:text-purple-3",
  patch: "bg-green:15 text-green-7 dark:text-green-3",
  pre: "bg-teal:15 text-teal-7 dark:text-teal-3"
};
function matchLogo(input, logos) {
  for (const [pattern, logo] of logos) {
    if (typeof pattern === "string") {
      if (input === pattern) {
        return logo;
      }
    } else if (pattern instanceof RegExp && pattern.test(input)) {
      return logo;
    }
  }
  return void 0;
}
function extractPackageName(tagName) {
  const match = tagName.match(/(^@?[^@]+)@/);
  if (match) {
    return match[1];
  }
  return tagName;
}
function processVersion(versionNum) {
  const parts = versionNum.split(/(\.)/g);
  let highlightedIndex = -1;
  let versionType;
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i] !== ".") {
      const num = +parts[i];
      if (!Number.isNaN(num) && num > 0) {
        highlightedIndex = i;
        break;
      }
    }
  }
  if (highlightedIndex === 0) {
    versionType = "major";
  } else if (highlightedIndex === 2) {
    versionType = "minor";
  } else if (highlightedIndex === 4) {
    versionType = "patch";
  } else {
    versionType = "pre";
  }
  const nonHighlightedPart = parts.slice(0, highlightedIndex).join("");
  const highlightedPart = parts.slice(highlightedIndex).join("");
  return [versionType, nonHighlightedPart, highlightedPart];
}

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$GithubItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GithubItem;
  const { collectionType, idx, item, isDiffMonth } = Astro2.props;
  const isOrg = collectionType === "prs" ? item.repository?.isInOrganization : false;
  const mainLogoSrc = item.mainLogo;
  const mainLogoAlt = collectionType === "releases" ? item.pkgName : item.repository?.nameWithOwner || "";
  const subLogoSrc = item.subLogo;
  const firstLinkHref = collectionType === "releases" ? item.link : item.url;
  const firstLinkText = collectionType === "releases" ? item.pkgName : item.title;
  const secondLinkHref = collectionType === "prs" ? item.repository?.url : item.link;
  const secondLinkText = collectionType === "prs" ? item.repository?.nameWithOwner : item.repoNameWithOwner;
  const time = collectionType === "releases" ? item.publishedAt : item.createdAt;
  const content = collectionType === "releases" ? item.desc : item.bodyHTML;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute(`slide-enter flex flex-col ${isDiffMonth ? "mt-12 lt-sm:mt-10" : ""}`, "class")}${addAttribute({ "--enter-stage": idx }, "style")}>  <summary class="flex items-center gap-4 lt-sm:gap-2 cursor-pointer"> <div class="flex-none relative"> <img${addAttribute(`size-11 lt-sm:size-10 border mt-0.2 border-gray-1 dark:border-gray-8
            ${isOrg ? "rounded-lg" : "rounded-full transform-scale-108"}`, "class")}${addAttribute(mainLogoSrc, "src")}${addAttribute(mainLogoAlt, "alt")}> ${subLogoSrc && renderTemplate`<div${addAttribute(`absolute bottom--2 right--1.6 flex justify-center items-center
              size-6 p-0.72 border border-gray:5 rounded-full
              bg-white  dark:bg-[#121212]`, "class")}> ${subLogoSrc.includes("://") ? renderTemplate`<img${addAttribute(subLogoSrc, "src")} alt="Sub logo">` : renderTemplate`<span${addAttribute(subLogoSrc, "class")}></span>`} </div>`} </div>  <div class="flex-1 flex justify-between items-center gap-2 min-w-0"> <div class="flex flex-col gap-0.5 min-w-0"> ${renderComponent($$result, "Link", $$Link, { "class": "flex items-center gap-1.5 op-100! text-4.4 lt-sm:text-3.9 hover:underline", "href": firstLinkHref, "external": true }, { "default": ($$result2) => renderTemplate`${collectionType === "prs" && (item.state === "MERGED" ? renderTemplate`<span u-i-bx-git-merge class="text-purple-500 dark:text-purple-400 size-4.5 lt-sm:size-4 shrink-0"></span>` : renderTemplate`<span u-i-bx-git-pull-request class="text-green-500 dark:text-green-400 size-4.5 lt-sm:size-4 shrink-0"></span>`)}<span class="truncate">${firstLinkText}</span> ` })} <div class="flex items-center text-sm lt-sm:text-3.2 op-transition"> ${renderComponent($$result, "Link", $$Link, { "class": "truncate", "href": secondLinkHref, "external": true }, { "default": ($$result2) => renderTemplate`${secondLinkText}` })} </div> </div> <div class="shrink-0 flex flex-col items-end gap-0.6"> ${renderComponent($$result, "Link", $$Link, { "class": "op-100! font-mono text-4.2 lt-sm:text-3.6 hover:underline", "href": firstLinkHref, "external": true }, { "default": ($$result2) => renderTemplate`${collectionType === "releases" && renderTemplate`<span>
v${item.versionParts[0]}<span${addAttribute(`rounded ${VERSION_COLOR[item.versionType]}`, "class")}>${item.versionParts[1]}</span> </span>`}${collectionType === "prs" && renderTemplate`<span>#${item.number}</span>`}` })} <time class="op-60 text-sm lt-sm:text-3.2"${addAttribute(time, "datetime")}${addAttribute(time, "title")}> ${formatDate(time, false)} </time> </div> </div> </summary> <div class="prose github-item-prose">${unescapeHTML(content)}</div> </details>`;
}, "/root/pixel/src/components/views/GithubItem.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$GithubView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GithubView;
  const MAX_PER_PKG = 5;
  const { collectionType } = Astro2.props;
  const { monorepos, mainLogoOverrides, subLogoMatches } = UI.githubView;
  let releases = [];
  let extendedReleases = [];
  if (collectionType === "releases") {
    try {
      releases = await getCollection(collectionType);
      const pkgCountMap = {};
      const allReleases = releases.flatMap((item) => {
        const releasesData = item.data.projects.releases || [];
        return releasesData;
      });
      extendedReleases = allReleases.map((release) => {
        const repoInfo = release.link?.match(/github\.com\/([^/]+)\/([^/]+)/) || [];
        const repoOwner = repoInfo[1] || "unknown";
        const typedRelease = release;
        const repoName = repoInfo[2] || typedRelease.id || "";
        const repoNameWithOwner = `${repoOwner}/${repoName}`;
        const versionMatch = (typedRelease.id || "").match(
          /v?(\d+\.\d+\.\d+(?:-[\w.]+)?)/
        ) || ["", "0.0.0"];
        const versionNum = versionMatch[1];
        const tagName = `${typedRelease.id || ""}@${versionNum}`;
        const isInMonorepo = monorepos.includes(
          repoNameWithOwner
        );
        const pkgName = isInMonorepo ? extractPackageName(tagName) : repoName;
        const mainLogo = matchLogo(pkgName, mainLogoOverrides) || `https://github.com/${repoOwner}.png`;
        const subLogo = matchLogo(pkgName, subLogoMatches);
        const [versionType, ...versionParts] = processVersion(versionNum);
        const currentDate = (/* @__PURE__ */ new Date()).toISOString();
        const publishedAt = typedRelease.publishedAt || currentDate;
        return {
          ...typedRelease,
          repoOwner,
          repoName,
          repoNameWithOwner,
          versionNum,
          tagName,
          isInMonorepo,
          pkgName,
          mainLogo,
          subLogo,
          versionType,
          versionParts,
          publishedAt
        };
      }).filter((item) => {
        if ((pkgCountMap[item.pkgName] || 0) < MAX_PER_PKG) {
          pkgCountMap[item.pkgName] = (pkgCountMap[item.pkgName] || 0) + 1;
          return true;
        }
        return false;
      }).sort((a, b) => {
        return +new Date(b.publishedAt) - +new Date(a.publishedAt);
      });
    } catch (error) {
      console.error("Error processing releases:", error);
      extendedReleases = [];
    }
  }
  let prs = [];
  let extendedPrs = [];
  if (collectionType === "prs") {
    try {
      prs = await getCollection(collectionType);
      const allPrs = prs.flatMap((item) => item.data.projects.pull_requests || []);
      extendedPrs = allPrs.filter(
        (item) => item.state !== "CLOSED" && !item.isDraft && !/\b(?:chore|docs|i18n)\b/.test(item.title)
      ).map((item) => {
        const mainLogo = matchLogo(item.repository.name, mainLogoOverrides) || `https://github.com/${item.repository.owner.login}.png`;
        const subLogo = matchLogo(item.repository.name, subLogoMatches);
        return {
          ...item,
          mainLogo,
          subLogo
        };
      }).sort((a, b) => {
        return +new Date(b.createdAt) - +new Date(a.createdAt);
      });
    } catch (error) {
      console.error("Error processing PRs:", error);
      extendedPrs = [];
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 lt-sm:gap-6 mt-16.8" role="feed"${addAttribute(`GitHub ${collectionType}`, "aria-label")}> ${collectionType === "releases" && extendedReleases.length > 0 ? extendedReleases.map((item, idx) => renderTemplate`${renderComponent($$result, "GithubItem", $$GithubItem, { "collectionType": collectionType, "idx": idx, "item": item, "isDiffMonth": isDiffMonth(
    item.publishedAt,
    extendedReleases[idx - 1]?.publishedAt
  ) })}`) : collectionType === "releases" ? renderTemplate`<p class="text-center op-50" role="status">
No releases found
</p>` : null} ${collectionType === "prs" && extendedPrs.length > 0 ? extendedPrs.map((item, idx) => renderTemplate`${renderComponent($$result, "GithubItem", $$GithubItem, { "collectionType": collectionType, "idx": idx, "item": item, "isDiffMonth": isDiffMonth(
    item.createdAt,
    extendedPrs[idx - 1]?.createdAt
  ) })}`) : collectionType === "prs" ? renderTemplate`<p class="text-center op-50" role="status">
No pull requests found
</p>` : null} </div> <div class="prose flex flex-col items-center mx-a op-50 text-center text-3.75! lt-sm:text-sm!" role="contentinfo"> <hr class="mt-3em!"> <p class="flex lt-sm:flex-col items-center my-0! lt-sm:my-1.5!"> <span>
Last fetched:
<time class="inline-block text-[var(--fg-deeper)]"${addAttribute((/* @__PURE__ */ new Date()).toISOString(), "datetime")}${addAttribute((/* @__PURE__ */ new Date()).toISOString(), "title")}> ${formatDate(/* @__PURE__ */ new Date(), false)} </time> </span> <span class="lt-sm:hidden">&nbsp;|&nbsp;</span> <span>
Scheduled refresh:
<span class="text-[var(--fg-deeper)]">Every Saturday</span> </span> </p> <p class="my-0! lt-sm:my-1.5!">
See
${renderComponent($$result, "Link", $$Link, { "class": "op-100!", "href": getUrl("/blog/customizing-github-activity-pages/") }, { "default": async ($$result2) => renderTemplate`
Customizing GitHub Activity Pages
` })}
to configure your own
</p> <p class="my-0! lt-sm:my-1.5!">
Inspired by
${renderComponent($$result, "Link", $$Link, { "class": "op-100!", "href": collectionType === "releases" ? "https://releases.antfu.me/" : "https://prs.atinux.com/" }, { "default": async ($$result2) => renderTemplate`${collectionType === "releases" ? "releases.antfu.me" : "prs.atinux.com"}` })} </p> </div>`;
}, "/root/pixel/src/components/views/GithubView.astro", void 0);

export { $$GithubView as $ };
