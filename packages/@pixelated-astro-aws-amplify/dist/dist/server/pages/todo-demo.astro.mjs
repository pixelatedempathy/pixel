;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="255d1691-f0ca-49b9-a765-162cf154b5fc",e._sentryDebugIdIdentifier="sentry-dbid-255d1691-f0ca-49b9-a765-162cf154b5fc")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderScript, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$Layout } from '../chunks/Layout_BYnqm6jE.mjs';
import 'clsx';
/* empty css                                     */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { T as Todo$1 } from '../chunks/Todo_BtRYtTBf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://pixelatedempathy.com");
const $$Todo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Todo;
  const { title = "Todo List", initialTodos = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="todo-container" data-astro-cid-sh6px4ke> <h2 data-astro-cid-sh6px4ke>${title}</h2> <div class="todo-input-container" data-astro-cid-sh6px4ke> <input type="text" id="todo-input" placeholder="Add a new task..." class="todo-input" data-astro-cid-sh6px4ke> <button id="add-todo-btn" class="todo-button add-button" data-astro-cid-sh6px4ke>Add</button> </div> <ul id="todo-list" class="todo-list" data-astro-cid-sh6px4ke> ${initialTodos.map((todo) => renderTemplate`<li${addAttribute(`todo-item ${todo.completed ? "completed" : ""}`, "class")}${addAttribute(todo.id, "data-id")} data-astro-cid-sh6px4ke> <span class="todo-text" data-astro-cid-sh6px4ke>${todo.text}</span> <div class="todo-actions" data-astro-cid-sh6px4ke> <button class="todo-button complete-button" data-astro-cid-sh6px4ke> ${todo.completed ? "\u21A9\uFE0F" : "\u2713"} </button> <button class="todo-button delete-button" data-astro-cid-sh6px4ke>×</button> </div> </li>`)} </ul> </div>  ${renderScript($$result, "/root/pixel/src/components/Todo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/Todo.astro", void 0);

function Todo({ title = "Todo List", initialTodos = [] }) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const loadTodos = () => {
      try {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : initialTodos;
      } catch (err) {
        console.error("Error loading todos:", err);
        return initialTodos;
      }
    };
    setTodos(loadTodos());
  }, [initialTodos]);
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      console.error("Error saving todos:", err);
    }
  }, [todos]);
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const addTodo = () => {
    const text = inputValue.trim();
    if (!text) {
      return;
    }
    const newTodo = {
      id: generateId(),
      text,
      completed: false
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };
  const toggleTodoComplete = (id) => {
    setTodos(
      (prevTodos) => prevTodos.map(
        (todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "todo-component", children: [
    /* @__PURE__ */ jsx("div", { className: "todo-header", children: /* @__PURE__ */ jsx("h2", { children: title }) }),
    /* @__PURE__ */ jsxs("div", { className: "todo-form", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "todo-input",
          placeholder: "Add a new task...",
          value: inputValue,
          onChange: handleInputChange,
          onKeyPress: handleKeyPress
        }
      ),
      /* @__PURE__ */ jsx("button", { id: "add-todo-btn", onClick: addTodo, children: "Add" })
    ] }),
    /* @__PURE__ */ jsx("ul", { id: "todo-list", className: "todo-list", children: todos.map((todo) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: `todo-item ${todo.completed ? "completed" : ""}`,
        "data-id": todo.id,
        children: [
          /* @__PURE__ */ jsx("span", { className: "todo-text", children: todo.text }),
          /* @__PURE__ */ jsxs("div", { className: "todo-actions", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "todo-button complete-button",
                onClick: () => toggleTodoComplete(todo.id),
                children: todo.completed ? "↩️" : "✓"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "todo-button delete-button",
                onClick: () => deleteTodo(todo.id),
                children: "×"
              }
            )
          ] })
        ]
      },
      todo.id
    )) }),
    /* @__PURE__ */ jsx("style", { children: `
        .todo-component {
          background-color: var(--color-bg-secondary, #f8f9fa);
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          width: 100%;
        }

        .todo-header {
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .todo-header h2 {
          margin: 0;
          color: var(--color-primary, #333);
          font-size: 1.5rem;
        }

        .todo-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .todo-form input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--color-border, #ddd);
          border-radius: 4px;
          font-size: 1rem;
        }

        .todo-form button {
          background-color: var(--color-accent, #4a7dff);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.75rem 1.25rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .todo-form button:hover {
          background-color: var(--color-accent-dark, #3a6ae6);
        }

        .todo-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          border-bottom: 1px solid var(--color-border, #eee);
          transition: background-color 0.2s;
        }

        .todo-item:hover {
          background-color: var(--color-bg-hover, #f1f3f5);
        }

        .todo-item.completed .todo-text {
          text-decoration: line-through;
          color: var(--color-text-muted, #888);
        }

        .todo-text {
          flex: 1;
          word-break: break-word;
        }

        .todo-actions {
          display: flex;
          gap: 0.5rem;
        }

        .complete-button,
        .delete-button {
          border-radius: 4px;
          padding: 0.4rem 0.6rem;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          color: white;
        }

        .complete-button {
          background-color: var(--color-success, #28a745);
        }

        .delete-button {
          background-color: var(--color-danger, #dc3545);
        }
      ` })
  ] });
}

const $$Astro$3 = createAstro("https://pixelatedempathy.com");
const $$TodoIsland = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TodoIsland;
  const { title = "Todo List", initialTodos = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="todo-container" data-astro-cid-72ziynjy> ${renderComponent($$result, "Todo", Todo, { "client:load": true, "title": title, "initialTodos": initialTodos, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/TodoReact", "client:component-export": "Todo", "data-astro-cid-72ziynjy": true })} </div> `;
}, "/root/pixel/src/components/TodoIsland.astro", void 0);

const $$Astro$2 = createAstro("https://pixelatedempathy.com");
const $$TodoPreactIsland = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TodoPreactIsland;
  const { title = "Todo List", initialTodos = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="todo-container" data-astro-cid-qtnouvi2> ${renderComponent($$result, "Todo", Todo$1, { "client:visible": true, "title": title, "initialTodos": initialTodos, "client:component-hydration": "visible", "client:component-path": "/root/pixel/src/components/Todo", "client:component-export": "Todo", "data-astro-cid-qtnouvi2": true })} </div> `;
}, "/root/pixel/src/components/TodoPreactIsland.astro", void 0);

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$TodoAlpine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TodoAlpine;
  const { title = "Todo List", initialTodos = [] } = Astro2.props;
  const initialTodosJson = JSON.stringify(initialTodos || []);
  return renderTemplate`${maybeRenderHead()}<div class="todo-container"${addAttribute(`{
    todos: JSON.parse(localStorage.getItem('todos') || '${initialTodosJson}'),
    newTodo: '',

    init() {
      this.$watch('todos', (val) => {
        localStorage.setItem('todos', JSON.stringify(val));
      });
    },

    addTodo() {
      if (!this.newTodo.trim()) return;

      this.todos.push({
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        text: this.newTodo.trim(),
        completed: false
      });

      this.newTodo = '';
    },

    toggleComplete(id) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }`, "x-data")} data-astro-cid-fh3lyyve> <h2 data-astro-cid-fh3lyyve>${title}</h2> <div class="todo-input-container" data-astro-cid-fh3lyyve> <input type="text" placeholder="Add a new task..." class="todo-input" x-model="newTodo" @keyup.enter="addTodo()" data-astro-cid-fh3lyyve> <button class="todo-button add-button" @click="addTodo()" data-astro-cid-fh3lyyve>Add</button> </div> <ul class="todo-list" data-astro-cid-fh3lyyve> <template x-for="todo in todos" :key="todo.id" data-astro-cid-fh3lyyve> <li class="todo-item" :class="{ 'completed': todo.completed }" :data-id="todo.id" data-astro-cid-fh3lyyve> <span class="todo-text" x-text="todo.text" data-astro-cid-fh3lyyve></span> <div class="todo-actions" data-astro-cid-fh3lyyve> <button class="todo-button complete-button" @click="toggleComplete(todo.id)" x-text="todo.completed ? '↩️' : '✓'" data-astro-cid-fh3lyyve></button> <button class="todo-button delete-button" @click="deleteTodo(todo.id)" data-astro-cid-fh3lyyve>×</button> </div> </li> </template> </ul> </div> `;
}, "/root/pixel/src/components/TodoAlpine.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$TodoDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TodoDemo;
  const sampleTodos = [
    {
      id: "sample1",
      text: "Learn Astro",
      completed: true
    },
    {
      id: "sample2",
      text: "Build a Todo app",
      completed: false
    },
    {
      id: "sample3",
      text: "Deploy to production",
      completed: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Todo Component Demos", "data-astro-cid-sshd5wsd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-sshd5wsd> <h1 data-astro-cid-sshd5wsd>Todo Component Demos</h1> <p class="description" data-astro-cid-sshd5wsd>
This page demonstrates different ways to implement the same Todo component
      functionality using Astro's flexibility.
</p> <section class="demo-container" data-astro-cid-sshd5wsd> <h2 class="section-title" data-astro-cid-sshd5wsd>1. Vanilla Astro Component</h2> <p class="section-description" data-astro-cid-sshd5wsd>
This version uses plain Astro with client-side JavaScript for
        interactivity.
</p> <div class="demo-wrapper" data-astro-cid-sshd5wsd> ${renderComponent($$result2, "Todo", $$Todo, { "title": "Astro Todo", "initialTodos": sampleTodos, "data-astro-cid-sshd5wsd": true })} </div> <div class="badge" data-astro-cid-sshd5wsd> <span class="js-size" data-astro-cid-sshd5wsd>~3KB JS</span> <span class="tech" data-astro-cid-sshd5wsd>Astro + Vanilla JS</span> </div> </section> <section class="demo-container" data-astro-cid-sshd5wsd> <h2 class="section-title" data-astro-cid-sshd5wsd>2. React Island</h2> <p class="section-description" data-astro-cid-sshd5wsd>
This version uses Astro with a React component for fully hydrated
        interactivity.
</p> <div class="demo-wrapper" data-astro-cid-sshd5wsd> ${renderComponent($$result2, "TodoIsland", $$TodoIsland, { "title": "React Todo", "initialTodos": sampleTodos, "data-astro-cid-sshd5wsd": true })} </div> <div class="badge" data-astro-cid-sshd5wsd> <span class="js-size" data-astro-cid-sshd5wsd>~40KB JS</span> <span class="tech" data-astro-cid-sshd5wsd>Astro + React</span> </div> </section> <section class="demo-container" data-astro-cid-sshd5wsd> <h2 class="section-title" data-astro-cid-sshd5wsd>3. Preact Island</h2> <p class="section-description" data-astro-cid-sshd5wsd>
This version uses Astro with a Preact component for hydrated
        interactivity with smaller bundle size.
</p> <div class="demo-wrapper" data-astro-cid-sshd5wsd> ${renderComponent($$result2, "TodoPreactIsland", $$TodoPreactIsland, { "title": "Preact Todo", "initialTodos": sampleTodos, "data-astro-cid-sshd5wsd": true })} </div> <div class="badge" data-astro-cid-sshd5wsd> <span class="js-size" data-astro-cid-sshd5wsd>~10KB JS</span> <span class="tech" data-astro-cid-sshd5wsd>Astro + Preact</span> </div> </section> <section class="demo-container" data-astro-cid-sshd5wsd> <h2 class="section-title" data-astro-cid-sshd5wsd>4. Alpine.js</h2> <p class="section-description" data-astro-cid-sshd5wsd>
This version uses Astro with Alpine.js for lightweight, reactive
        interactivity.
</p> <div class="demo-wrapper" data-astro-cid-sshd5wsd> ${renderComponent($$result2, "TodoAlpine", $$TodoAlpine, { "title": "Alpine Todo", "initialTodos": sampleTodos, "data-astro-cid-sshd5wsd": true })} </div> <div class="badge" data-astro-cid-sshd5wsd> <span class="js-size" data-astro-cid-sshd5wsd>~7KB JS</span> <span class="tech" data-astro-cid-sshd5wsd>Astro + Alpine.js</span> </div> </section> </main> ` })} `;
}, "/root/pixel/src/pages/todo-demo.astro", void 0);

const $$file = "/root/pixel/src/pages/todo-demo.astro";
const $$url = "/todo-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TodoDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
