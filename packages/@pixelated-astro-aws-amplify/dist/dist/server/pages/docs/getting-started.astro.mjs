;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b88e61a6-67e9-4b9d-8cd7-d8b0baa3f151",e._sentryDebugIdIdentifier="sentry-dbid-b88e61a6-67e9-4b9d-8cd7-d8b0baa3f151")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, ao as spreadAttributes, h as renderSlot, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$DocumentationLayout } from '../../chunks/DocumentationLayout_ChP9fjW6.mjs';
import { $ as $$Card } from '../../chunks/Card_DkLu_rH_.mjs';
import { $ as $$CardHeader, a as $$CardTitle, b as $$CardContent } from '../../chunks/CardTitle_B-WlwD0P.mjs';
import { $ as $$CardDescription } from '../../chunks/CardDescription_Ds6nOAL0.mjs';
import { c as cn } from '../../chunks/utils_C7j64O8V.mjs';
import 'clsx';
import { $ as $$Button } from '../../chunks/Button_CrYNY2lz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$CardFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFooter;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-slot="card-footer"${addAttribute(cn("flex items-center px-6 [.border-t]:pt-6", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/pixel/src/components/ui/CardFooter.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$GettingStarted = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GettingStarted;
  return renderTemplate`${renderComponent($$result, "DocumentationLayout", $$DocumentationLayout, { "title": "Getting Started with Pixelated Empathy", "description": "Learn how to get up and running with Pixelated Empathy quickly" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Getting Started with Pixelated Empathy</h1> <p>
Welcome to Pixelated Empathy! This guide will help you set up your
    development environment and start building with our platform. Pixelated
    Empathy is a comprehensive healthcare platform that combines advanced AI
    capabilities with secure, HIPAA-compliant infrastructure to deliver
    innovative therapy solutions.
</p> <h2>Prerequisites</h2> <p>Before you begin, make sure you have the following installed:</p> <ul> <li>Node.js (version 16 or later)</li> <li>npm or pnpm (we recommend pnpm for faster installation)</li> <li>Git</li> </ul> <h2>Installation</h2> <p>To get started, clone the repository and install dependencies:</p> <pre><code>git clone https://github.com/pixelated/pixelated.git
cd pixelated
pnpm install</code></pre> <h3>Environment Setup</h3> <p>
Copy the example environment variables file and update it with your
    settings:
</p> <pre><code>cp .env.example .env</code></pre> <div class="card-group"> <div class="card"> <div class="card-title"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
API Keys
</div> <p>
Obtain API keys from the developer dashboard and add them to your .env
        file.
</p> </div> <div class="card"> <div class="card-title"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
Database Setup
</div> <p>Configure your database connection string in the .env file.</p> </div> </div> <h2>Development Workflow</h2> <ol class="steps"> <li> <h3>Start the Development Server</h3> <p>Run the development server with:</p> <pre><code>pnpm dev</code></pre> <p>
This will start the application at <a href="http://localhost:3000">http://localhost:3000</a>.
</p> </li> <li> <h3>Making Changes</h3> <p>
Edit files in the <code>src</code> directory. The changes will be hot-reloaded.
</p> </li> <li> <h3>Building for Production</h3> <p>When you're ready to build for production:</p> <pre><code>pnpm build</code></pre> </li> </ol> <h2>Project Structure</h2> <pre><code>pixelated/
├── public/          # Static assets
├── src/
│   ├── components/  # UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Astro pages
│   ├── content/     # Content collections
│   ├── lib/         # Utility functions and services
│   ├── styles/      # Global styles
│   └── types/       # TypeScript type definitions
└── astro.config.mjs # Astro configuration</code></pre> <h2>Next Steps</h2> <p>Now that you have your development environment set up, you can:</p> <div class="card-group"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, {}, { "default": ($$result5) => renderTemplate`Explore the API` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, {}, { "default": ($$result5) => renderTemplate`Learn about our comprehensive API endpoints` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` <p>
Understand the capabilities and integration points of our platform
          API.
</p> ` })} ${renderComponent($$result3, "CardFooter", $$CardFooter, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", $$Button, { "variant": "outline", "size": "sm" }, { "default": ($$result5) => renderTemplate`API Documentation` })} ` })} ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", $$CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", $$CardTitle, {}, { "default": ($$result5) => renderTemplate`Browse Components` })} ${renderComponent($$result4, "CardDescription", $$CardDescription, {}, { "default": ($$result5) => renderTemplate`Explore our UI component library` })} ` })} ${renderComponent($$result3, "CardContent", $$CardContent, {}, { "default": ($$result4) => renderTemplate` <p>
View our collection of reusable components to build your applications.
</p> ` })} ${renderComponent($$result3, "CardFooter", $$CardFooter, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", $$Button, { "variant": "outline", "size": "sm" }, { "default": ($$result5) => renderTemplate`Component Library` })} ` })} ` })} </div> <h2>Getting Help</h2> <p>
If you encounter any issues or have questions, please reach out to our
    support team:
</p> <ul> <li><a href="mailto:support@pixelated.dev">Email Support</a></li> <li><a href="https://discord.gg/pixelated">Discord Community</a></li> <li><a href="https://github.com/pixelated/issues">GitHub Issues</a></li> </ul> ` })}`;
}, "/root/pixel/src/pages/docs/getting-started.astro", void 0);

const $$file = "/root/pixel/src/pages/docs/getting-started.astro";
const $$url = "/docs/getting-started";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GettingStarted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
