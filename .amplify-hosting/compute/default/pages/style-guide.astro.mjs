;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9186ea29-698c-478b-8153-1196a966fa03",e._sentryDebugIdIdentifier="sentry-dbid-9186ea29-698c-478b-8153-1196a966fa03")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_Dy9k56IG.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DBAAVvAL.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Xugxt_b3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { I as Input } from '../chunks/input_Co-9Uymp.mjs';
import { L as Label } from '../chunks/label_38MppD6c.mjs';
import { T as Textarea } from '../chunks/textarea_CBui9R13.mjs';
import { B as Button } from '../chunks/button_BvU_XMCD.mjs';
export { renderers } from '../renderers.mjs';

function FormStyleGuide() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Text Inputs" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Standard text inputs for collecting user information." }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "default-input", children: "Default Input" }),
          /* @__PURE__ */ jsx(Input, { id: "default-input", placeholder: "Enter your name" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "disabled-input", children: "Disabled Input" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "disabled-input",
              placeholder: "This input is disabled",
              disabled: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "error-input", children: "Input with Error" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "error-input",
              placeholder: "Invalid input",
              className: "border-destructive focus-visible:ring-destructive"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: "This field is required" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "with-icon", children: "Input with Icon" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Input, { id: "with-icon", placeholder: "Search..." }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 text-muted-foreground",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ jsx("path", { d: "m21 21-4.3-4.3" })
                ]
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Input Types" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Various input types for different data collection needs." }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email-input", children: "Email Input" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email-input",
              type: "email",
              placeholder: "user@example.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password-input", children: "Password Input" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password-input",
              type: "password",
              placeholder: "Enter your password"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "number-input", children: "Number Input" }),
          /* @__PURE__ */ jsx(Input, { id: "number-input", type: "number", placeholder: "0" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "date-input", children: "Date Input" }),
          /* @__PURE__ */ jsx(Input, { id: "date-input", type: "date" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Textarea" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Multi-line text inputs for larger content." }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "default-textarea", children: "Default Textarea" }),
          /* @__PURE__ */ jsx(Textarea, { id: "default-textarea", placeholder: "Enter your message" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "disabled-textarea", children: "Disabled Textarea" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "disabled-textarea",
              placeholder: "This textarea is disabled",
              disabled: true
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Input Sizes" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Different input sizes for various contexts." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "sm-input", children: "Small Input" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "sm-input",
              className: "h-8 px-2 py-1 text-xs",
              placeholder: "Small input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "default-size-input", children: "Default Input" }),
          /* @__PURE__ */ jsx(Input, { id: "default-size-input", placeholder: "Default input" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "lg-input", children: "Large Input" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "lg-input",
              className: "h-12 px-4 py-3 text-base",
              placeholder: "Large input"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Form Example" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Complete form example with various input types." }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4 p-4 border rounded-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "form-first-name", children: "First Name" }),
            /* @__PURE__ */ jsx(Input, { id: "form-first-name", placeholder: "John" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "form-last-name", children: "Last Name" }),
            /* @__PURE__ */ jsx(Input, { id: "form-last-name", placeholder: "Doe" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "form-email", children: "Email" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "form-email",
              type: "email",
              placeholder: "john.doe@example.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "form-message", children: "Message" }),
          /* @__PURE__ */ jsx(Textarea, { id: "form-message", placeholder: "Your message here..." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { children: "Submit" })
        ] })
      ] })
    ] })
  ] });
}

const $$StyleGuide = createComponent(($$result, $$props, $$slots) => {
  const title = "Style Guide | Pixelated Empathy";
  const description = "Comprehensive style guide for the Pixelated Empathy design system.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto py-12 px-4"> <h1 class="text-4xl font-bold mb-8 text-center">
Pixelated Empathy Style Guide
</h1> <p class="text-lg text-center mb-12 max-w-3xl mx-auto">
This style guide provides a comprehensive overview of the Pixelated
      Empathy design system components, ensuring consistent styling and user
      experience across the entire application.
</p> <section class="mb-16"> <div class="max-w-5xl mx-auto bg-card rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold mb-6 text-center">Colors</h2> <div class="space-y-8"> <div> <h3 class="text-xl font-semibold mb-4">Primary Colors</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="space-y-2"> <div class="h-20 bg-primary rounded-md"></div> <p class="text-sm font-medium">Primary</p> </div> <div class="space-y-2"> <div class="h-20 bg-primary-foreground rounded-md"></div> <p class="text-sm font-medium">Primary Foreground</p> </div> <div class="space-y-2"> <div class="h-20 bg-secondary rounded-md"></div> <p class="text-sm font-medium">Secondary</p> </div> <div class="space-y-2"> <div class="h-20 bg-secondary-foreground rounded-md"></div> <p class="text-sm font-medium">Secondary Foreground</p> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">UI Colors</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="space-y-2"> <div class="h-20 bg-background rounded-md border"></div> <p class="text-sm font-medium">Background</p> </div> <div class="space-y-2"> <div class="h-20 bg-foreground rounded-md"></div> <p class="text-sm font-medium">Foreground</p> </div> <div class="space-y-2"> <div class="h-20 bg-card rounded-md border"></div> <p class="text-sm font-medium">Card</p> </div> <div class="space-y-2"> <div class="h-20 bg-card-foreground rounded-md"></div> <p class="text-sm font-medium">Card Foreground</p> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">Feedback Colors</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="space-y-2"> <div class="h-20 bg-destructive rounded-md"></div> <p class="text-sm font-medium">Destructive</p> </div> <div class="space-y-2"> <div class="h-20 bg-destructive-foreground rounded-md"></div> <p class="text-sm font-medium">Destructive Foreground</p> </div> <div class="space-y-2"> <div class="h-20 bg-success rounded-md"></div> <p class="text-sm font-medium">Success</p> </div> <div class="space-y-2"> <div class="h-20 bg-muted rounded-md"></div> <p class="text-sm font-medium">Muted</p> </div> </div> </div> </div> </div> </section> <section class="mb-16"> <div class="max-w-5xl mx-auto bg-card rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold mb-6 text-center">Typography</h2> <div class="space-y-8"> <div> <h3 class="text-xl font-semibold mb-4">Headings</h3> <div class="space-y-4"> <div> <h1 class="text-5xl font-bold">Heading 1</h1> <p class="text-sm text-muted-foreground mt-1">
text-5xl font-bold
</p> </div> <div> <h2 class="text-4xl font-bold">Heading 2</h2> <p class="text-sm text-muted-foreground mt-1">
text-4xl font-bold
</p> </div> <div> <h3 class="text-3xl font-bold">Heading 3</h3> <p class="text-sm text-muted-foreground mt-1">
text-3xl font-bold
</p> </div> <div> <h4 class="text-2xl font-bold">Heading 4</h4> <p class="text-sm text-muted-foreground mt-1">
text-2xl font-bold
</p> </div> <div> <h5 class="text-xl font-bold">Heading 5</h5> <p class="text-sm text-muted-foreground mt-1">
text-xl font-bold
</p> </div> <div> <h6 class="text-lg font-bold">Heading 6</h6> <p class="text-sm text-muted-foreground mt-1">
text-lg font-bold
</p> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">Body Text</h3> <div class="space-y-4"> <div> <p class="text-base">
Base text (text-base): The quick brown fox jumps over the lazy
                  dog.
</p> </div> <div> <p class="text-sm">
Small text (text-sm): The quick brown fox jumps over the lazy
                  dog.
</p> </div> <div> <p class="text-xs">
Extra small text (text-xs): The quick brown fox jumps over the
                  lazy dog.
</p> </div> <div> <p class="text-lg">
Large text (text-lg): The quick brown fox jumps over the lazy
                  dog.
</p> </div> <div> <p class="text-xl">
Extra large text (text-xl): The quick brown fox jumps over the
                  lazy dog.
</p> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">Text Styles</h3> <div class="space-y-4"> <div> <p class="font-bold">
Bold text: The quick brown fox jumps over the lazy dog.
</p> </div> <div> <p class="italic">
Italic text: The quick brown fox jumps over the lazy dog.
</p> </div> <div> <p class="underline">
Underlined text: The quick brown fox jumps over the lazy dog.
</p> </div> <div> <p class="line-through">
Strikethrough text: The quick brown fox jumps over the lazy
                  dog.
</p> </div> <div> <p class="text-muted-foreground">
Muted text: The quick brown fox jumps over the lazy dog.
</p> </div> </div> </div> </div> </div> </section> <section class="mb-16"> <div class="max-w-5xl mx-auto bg-card rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold mb-6 text-center">Buttons</h2> </div> </section> <section class="mb-16"> <div class="max-w-5xl mx-auto bg-card rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold mb-6 text-center">Form Elements</h2> ${renderComponent($$result2, "FormStyleGuide", FormStyleGuide, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/ui/FormStyleGuide", "client:component-export": "default" })} </div> </section> </main> ` })}`;
}, "/root/pixel/src/pages/style-guide.astro", void 0);

const $$file = "/root/pixel/src/pages/style-guide.astro";
const $$url = "/style-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StyleGuide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
