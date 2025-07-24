import{j as e}from"./jsx-runtime.DlAa5Y6j.js";import{r as c}from"./index.6fm25MHX.js";import"./_sentry-release-injection-file.WlVdDBkZ.js";import"./_commonjsHelpers.BCR-nyiH.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new d.Error().stack;n&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[n]="7004a39d-082f-4320-8e9c-77002f629f83",d._sentryDebugIdIdentifier="sentry-dbid-7004a39d-082f-4320-8e9c-77002f629f83")}catch{}})();function k({title:d="Todo List",initialTodos:n=[]}){const[s,a]=c.useState([]),[l,i]=c.useState("");c.useEffect(()=>{a((()=>{try{const t=localStorage.getItem("todos");return t?JSON.parse(t):n}catch(t){return console.error("Error loading todos:",t),n}})())},[n]),c.useEffect(()=>{try{localStorage.setItem("todos",JSON.stringify(s))}catch(o){console.error("Error saving todos:",o)}},[s]);const u=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),m=()=>{const o=l.trim();if(!o)return;const t={id:u(),text:o,completed:!1};a(r=>[...r,t]),i("")},p=o=>{a(t=>t.map(r=>r.id===o?{...r,completed:!r.completed}:r))},f=o=>{a(t=>t.filter(r=>r.id!==o))},b=o=>{i(o.target.value)},g=o=>{o.key==="Enter"&&m()};return e.jsxs("div",{className:"todo-component",children:[e.jsx("div",{className:"todo-header",children:e.jsx("h2",{children:d})}),e.jsxs("div",{className:"todo-form",children:[e.jsx("input",{type:"text",id:"todo-input",placeholder:"Add a new task...",value:l,onChange:b,onKeyPress:g}),e.jsx("button",{id:"add-todo-btn",onClick:m,children:"Add"})]}),e.jsx("ul",{id:"todo-list",className:"todo-list",children:s.map(o=>e.jsxs("li",{className:`todo-item ${o.completed?"completed":""}`,"data-id":o.id,children:[e.jsx("span",{className:"todo-text",children:o.text}),e.jsxs("div",{className:"todo-actions",children:[e.jsx("button",{className:"todo-button complete-button",onClick:()=>p(o.id),children:o.completed?"↩️":"✓"}),e.jsx("button",{className:"todo-button delete-button",onClick:()=>f(o.id),children:"×"})]})]},o.id))}),e.jsx("style",{children:`
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
      `})]})}export{k as Todo};
