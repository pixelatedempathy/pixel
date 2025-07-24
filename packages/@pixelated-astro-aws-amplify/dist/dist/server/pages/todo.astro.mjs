;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="52e7225d-33ce-4e58-96d4-dc19cc421e88",e._sentryDebugIdIdentifier="sentry-dbid-52e7225d-33ce-4e58-96d4-dc19cc421e88")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Ck5BzePu.mjs';
import { T as Todo } from '../chunks/Todo_sT6Fdtls.mjs';
/* empty css                                */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$TodoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TodoComponent;
  const { title = "Todo List", initialTodos = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="todo-container" data-astro-cid-h2xlwaic> ${renderComponent($$result, "Todo", Todo, { "client:visible": true, "title": title, "initialTodos": initialTodos, "client:component-hydration": "visible", "client:component-path": "/root/pixel/src/components/Todo", "client:component-export": "Todo", "data-astro-cid-h2xlwaic": true })} </div> `;
}, "/root/pixel/src/components/TodoComponent.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$Todo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Todo;
  const pageTitle = "Todo App";
  const initialTodos = [
    {
      id: "1",
      text: "Learn Astro",
      completed: true
    },
    {
      id: "2",
      text: "Build a Todo component",
      completed: true
    },
    {
      id: "3",
      text: "Deploy to production",
      completed: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "centered": true, "bgType": "dot", "data-astro-cid-ktctifap": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ktctifap> <div class="container" data-astro-cid-ktctifap> <h1 class="page-title" data-astro-cid-ktctifap>${pageTitle}</h1> <p class="intro" data-astro-cid-ktctifap>
A simple todo app built with Astro. Your todos are saved in your
        browser's local storage.
</p> ${renderComponent($$result2, "TodoComponent", $$TodoComponent, { "title": "My Tasks", "initialTodos": initialTodos, "data-astro-cid-ktctifap": true })} <div class="instructions" data-astro-cid-ktctifap> <h3 data-astro-cid-ktctifap>How to use:</h3> <ul data-astro-cid-ktctifap> <li data-astro-cid-ktctifap>Add a new task using the input field</li> <li data-astro-cid-ktctifap>Click the ✓ button to mark a task as completed</li> <li data-astro-cid-ktctifap>Click the ⟲ button to mark a completed task as active again</li> <li data-astro-cid-ktctifap>Click the × button to delete a task</li> </ul> </div> </div> </main> ` })} `;
}, "/root/pixel/src/pages/todo.astro", void 0);

const $$file = "/root/pixel/src/pages/todo.astro";
const $$url = "/todo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Todo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
