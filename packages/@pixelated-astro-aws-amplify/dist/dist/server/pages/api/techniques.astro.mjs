;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8a18f059-6469-4442-9aa3-3f9f0b46f78a",e._sentryDebugIdIdentifier="sentry-dbid-8a18f059-6469-4442-9aa3-3f9f0b46f78a")}catch(e){}}();import { g as getCollection } from '../../chunks/_astro_content_BJQReLnb.mjs';
import '../../chunks/astro/server_t-wqd6mp.mjs';
import * as z from 'zod';
import { r as recommend } from '../../chunks/OutcomeRecommendationEngine_BjdZWeyt.mjs';
export { renderers } from '../../renderers.mjs';

z.object({
  title: z.string().default("").describe(
    "Sets the page title, formatted with `SITE.title` as `<pageTitle> - <siteTitle>` for metadata and automatic OG image generation. If undefined or empty, only `<siteTitle>` is displayed, and OG image generation is skipped."
  ),
  subtitle: z.string().default("").describe(
    "Provides a page subtitle. If provided, it will be displayed below the title. If not needed, leave the field as an empty string or delete it."
  ),
  description: z.string().default("").describe(
    "Provides a brief description, used in meta tags for SEO and sharing purposes. If not needed, leave the field as an empty string or delete it, and the `SITE.description` will be used directly."
  ),
  bgType: z.union([z.literal(false), z.enum(["plum", "dot", "rose", "particle"])]).default(false).describe(
    "Specifies whether to apply a background on this page and select its type. If not needed, delete the field or set to `false`."
  ),
  toc: z.boolean().default(false).describe(
    "Controls whether the table of contents (TOC) is generated for the page."
  ),
  ogImage: z.union([z.string(), z.boolean()]).default(true).describe(
    "Specifies the Open Graph (OG) image for social media sharing. To auto-generate OG image, delete the field or set to `true`. To disable it, set the field to `false`. To use a custom image, provide the full filename from `/public/og-images/`."
  )
});
z.object({
  title: z.string().max(60).describe(
    "**Required**. Sets the post title, limited to **60 characters**. This follows Moz's recommendation, ensuring approximately 90% of titles display correctly in SERPs and preventing truncation on smaller screens or social platforms. [Learn more](https://moz.com/learn/seo/title-tag)."
  ),
  subtitle: z.string().default("").describe(
    "Provides a post subtitle. If provided, it will be displayed below the title. If not needed, leave the field as an empty string or delete it."
  ),
  description: z.string().default("").describe(
    "Provides a brief description, used in meta tags for SEO and sharing purposes. If not needed, leave the field as an empty string or delete it, and the `SITE.description` will be used directly."
  ),
  pubDate: z.coerce.date().describe(
    "**Required**. Specifies the publication date. See supported formats [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples)."
  ),
  tags: z.array(z.string()).optional().default([]).describe(
    "Tags for categorizing the post. Used for filtering and related content."
  ),
  series: z.string().optional().describe(
    "The name of the series this post belongs to. Used for grouping related posts."
  ),
  seriesOrder: z.number().optional().describe(
    "The order of this post within its series. Lower numbers come first."
  ),
  author: z.string().optional().describe("The author of the post. Displayed in the post metadata."),
  lastModDate: z.union([z.coerce.date(), z.literal("")]).optional().describe(
    "Tracks the last modified date. If not needed, leave the field as an empty string or delete it."
  ),
  minutesRead: z.number().optional().describe(
    "Provides an estimated reading time in minutes. To auto-generate, delete the field; to hide it on the page, enter 0"
  ),
  radio: z.boolean().default(false).describe(
    "Indicates if the post includes audio content or links to an external audio source. If `true`, an icon will be added to the post item in the list."
  ),
  video: z.boolean().default(false).describe(
    "Indicates if the post includes video content or links to an external video source. If `true`, an icon will be added to the post item in the list."
  ),
  platform: z.string().default("").describe(
    "Specifies the platform where the audio or video content is published. If provided, the platform name will be displayed. If not needed, leave the field as an empty string or delete it."
  ),
  toc: z.boolean().default(true).describe(
    "Controls whether the table of contents (TOC) is generated for the post."
  ),
  share: z.boolean().default(true).describe(
    "Controls whether social sharing options are available for the post."
  ),
  ogImage: z.union([z.string(), z.boolean()]).default(true).describe(
    "Specifies the Open Graph (OG) image for social media sharing. To auto-generate OG image, delete the field or set to `true`. To disable it, set the field to `false`. To use a custom image, provide the full filename from `/public/og-images/`."
  ),
  redirect: z.string().url("Invalid url.").optional().describe("Defines a URL to redirect the post."),
  draft: z.boolean().default(false).describe(
    "Marks the post as a draft. If `true`, it is only visible in development and excluded from production builds."
  )
});
const projectSchema = z.object({
  id: z.string().describe("**Required**. Name of the project to be displayed."),
  link: z.string().url("Invalid url.").describe("**Required**. URL linking to the project page or repository."),
  desc: z.string().describe("**Required**. A brief description summarizing the project."),
  icon: z.string().regex(
    /^i-[\w-]+(:[\w-]+)?$/,
    "Icon must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>` as per [UnoCSS](https://unocss.dev/presets/icons) specs."
  ).describe(
    "**Required**. Icon representing the project. It must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>` as per [UnoCSS](https://unocss.dev/presets/icons) specs. [Check all available icons here](https://icones.js.org/)."
  ),
  category: z.string().optional().describe("Category of the project for additional organization.")
});
const projectGroupsSchema = z.record(z.array(projectSchema));
z.object({
  projects: projectGroupsSchema
});
const streamSchema = z.object({
  id: z.string().describe("**Required**. Sets the stream title."),
  pubDate: z.coerce.date().describe(
    "**Required**. Specifies the publication date. See supported formats [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples)."
  ),
  link: z.string().url("Invalid url.").describe("**Required**. Specifies the URL link to the stream."),
  radio: z.boolean().default(false).describe(
    "Indicates whether the stream is a radio broadcast. If `true`, an icon will be added to the stream item in the list."
  ),
  video: z.boolean().default(false).describe(
    "Indicates whether the stream is a video broadcast. If `true`, an icon will be added to the stream item in the list."
  ),
  platform: z.string().default("").describe("Specifies the platform where the stream is published.")
});
const streamGroupsSchema = z.array(streamSchema);
z.object({
  streams: streamGroupsSchema
});
const releaseSchema = z.object({
  id: z.string(),
  link: z.string().url(),
  desc: z.string(),
  icon: z.string().regex(/^i-[\w-]+(:?[\w-]+)?$/),
  publishedAt: z.string().optional()
});
const releaseGroupsSchema = z.record(z.array(releaseSchema));
z.object({
  projects: releaseGroupsSchema
});
const prSchema = z.object({
  title: z.string(),
  number: z.number(),
  url: z.string().url(),
  state: z.enum(["OPEN", "CLOSED", "MERGED"]),
  isDraft: z.boolean(),
  createdAt: z.string(),
  repository: z.object({
    name: z.string(),
    nameWithOwner: z.string(),
    owner: z.object({
      login: z.string()
    }),
    url: z.string().url(),
    isInOrganization: z.boolean()
  }),
  bodyHTML: z.string()
});
z.object({
  projects: z.object({
    pull_requests: z.array(prSchema)
  })
});
const techniqueSchema = z.object({
  id: z.string().describe("**Required**. Unique identifier for the technique."),
  name: z.string().describe("**Required**. Name of the therapeutic technique."),
  description: z.string().describe("**Required**. Detailed description of the technique."),
  category: z.string().describe(
    "**Required**. Category or type of the technique (e.g., CBT, Mindfulness, DBT, etc.)"
  ),
  evidenceLevel: z.enum(["Strong", "Moderate", "Preliminary", "Anecdotal"]).describe(
    "**Required**. Level of scientific evidence supporting the technique."
  ),
  recommendedFor: z.array(z.string()).default([]).describe(
    "List of conditions or situations for which this technique is recommended."
  ),
  contraindications: z.array(z.string()).default([]).describe(
    "List of contraindications or cases where this technique should not be used."
  ),
  steps: z.array(z.string()).default([]).describe("Step-by-step instructions for applying the technique."),
  references: z.array(z.string()).default([]).describe(
    "List of references, studies, or resources supporting the technique."
  ),
  created: z.coerce.date().describe("Date the technique was added."),
  updated: z.coerce.date().optional().describe("Date the technique was last updated.")
});

const ALLOWED_CATEGORIES = ["CBT", "Mindfulness", "DBT", "ACT", "EMDR", "Other"];
const ALLOWED_EVIDENCE = ["Strong", "Moderate", "Preliminary", "Anecdotal"];
async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const evidenceLevel = url.searchParams.get("evidenceLevel");
    let categoryFilter = void 0;
    if (category) {
      if (!ALLOWED_CATEGORIES.includes(category)) {
        return new Response(
          JSON.stringify({ error: "Invalid category parameter." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      categoryFilter = category;
    }
    let evidenceFilter = void 0;
    if (evidenceLevel) {
      if (!ALLOWED_EVIDENCE.includes(evidenceLevel)) {
        return new Response(
          JSON.stringify({ error: "Invalid evidenceLevel parameter." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      evidenceFilter = evidenceLevel;
    }
    const allTechniques = await getCollection("techniques");
    const validTechniques = allTechniques.map((entry) => {
      const parsed = techniqueSchema.safeParse(entry.data);
      return parsed.success ? parsed.data : null;
    }).filter(Boolean);
    let filtered = validTechniques;
    if (categoryFilter) {
      filtered = filtered.filter(
        (t) => t.category === categoryFilter
      );
    }
    if (evidenceFilter) {
      filtered = filtered.filter(
        (t) => t.evidenceLevel === evidenceFilter
      );
    }
    return new Response(JSON.stringify(filtered), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "same-origin",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
      }
    });
  } catch (error) {
    console.error("GET /api/techniques error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function POST({ request }) {
  try {
    if (request.headers.get("content-type") !== "application/json") {
      return new Response(
        JSON.stringify({ error: "Content-Type must be application/json" }),
        { status: 415, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const { context, desiredOutcomes, maxResults } = body || {};
    if (!context || !Array.isArray(desiredOutcomes) || desiredOutcomes.length === 0) {
      return new Response(
        JSON.stringify({
          error: "context and desiredOutcomes[] are required."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!context.session || !context.chatSession) {
      return new Response(
        JSON.stringify({
          error: "context.session and context.chatSession are required."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const safeMaxResults = typeof maxResults === "number" && maxResults > 0 && maxResults <= 10 ? maxResults : 5;
    let recommendations;
    try {
      recommendations = recommend({
        context,
        desiredOutcomes,
        maxResults: safeMaxResults
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "Recommendation engine error",
          details: err.message
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(JSON.stringify(recommendations), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "same-origin",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
      }
    });
  } catch (error) {
    console.error("POST /api/techniques error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
