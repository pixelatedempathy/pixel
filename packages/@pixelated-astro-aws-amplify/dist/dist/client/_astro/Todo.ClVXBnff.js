import{j as r}from"./jsx-runtime.49P_DVFQ.js";import{r as c}from"./index.BCc9JDCY.js";import"./_sentry-release-injection-file.CgPhol5v.js";import"./_commonjsHelpers.CRQ2_akz.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},d=new a.Error().stack;d&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[d]="9c0bcfbc-616f-4872-b2a7-3c02763cb2f2",a._sentryDebugIdIdentifier="sentry-dbid-9c0bcfbc-616f-4872-b2a7-3c02763cb2f2")}catch{}})();function k({title:a="Todo List",initialTodos:d=[]}){const[n,s]=c.useState([]),[i,l]=c.useState("");c.useEffect(()=>{s((()=>{try{const t=localStorage.getItem("todos");return t?JSON.parse(t):d}catch(t){return console.error("Error loading todos:",t),d}})())},[d]),c.useEffect(()=>{try{localStorage.setItem("todos",JSON.stringify(n))}catch(o){console.error("Error saving todos:",o)}},[n]);const b=()=>Date.now().toString(36)+Math.random().toString(36).substring(2),m=()=>{const o=i.trim();if(!o)return;const t={id:b(),text:o,completed:!1};s(e=>[...e,t]),l("")},u=o=>{s(t=>t.map(e=>e.id===o?{...e,completed:!e.completed}:e))},p=o=>{s(t=>t.filter(e=>e.id!==o))},f=o=>{l(o.target.value)},g=o=>{o.key==="Enter"&&m()};return r.jsxs("div",{className:"todo-component",children:[r.jsx("div",{className:"todo-header",children:r.jsx("h2",{children:a})}),r.jsxs("div",{className:"todo-form",children:[r.jsx("input",{type:"text",id:"todo-input",placeholder:"Add a new task...",value:i,onChange:f,onKeyDown:g}),r.jsx("button",{id:"add-todo-btn",onClick:m,children:"Add"})]}),r.jsx("ul",{id:"todo-list",className:"todo-list",children:n.map(o=>r.jsxs("li",{className:`todo-item ${o.completed?"completed":""}`,"data-id":o.id,children:[r.jsx("span",{className:"todo-text",children:o.text}),r.jsxs("div",{className:"todo-actions",children:[r.jsx("button",{className:"todo-button complete-button",onClick:()=>u(o.id),"aria-label":o.completed?"Mark as incomplete":"Mark as complete",children:o.completed?"⟲":"✓"}),r.jsx("button",{className:"todo-button delete-button",onClick:()=>p(o.id),"aria-label":"Delete task",children:"×"})]})]},o.id))}),r.jsx("style",{children:`
        .todo-component {
          background-color: var(--color-card-bg, rgba(20, 20, 20, 0.85));
          border-radius: var(--radius-md, 8px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 1.75rem;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          border: 1px solid var(--color-border, rgba(50, 50, 50, 0.3));
        }

        .todo-header {
          margin-bottom: 1.75rem;
          text-align: center;
        }

        .todo-header h2 {
          margin: 0;
          color: var(--color-text, #f3f3f3);
          font-size: 1.75rem;
          font-weight: 600;
        }

        .todo-form {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .todo-form input {
          flex: 1;
          padding: 0.875rem 1rem;
          background-color: var(--color-input-bg, rgba(25, 25, 25, 0.6));
          color: var(--color-text, #f3f3f3);
          border: 1px solid var(--color-border, rgba(50, 50, 50, 0.3));
          border-radius: var(--radius-sm, 4px);
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .todo-form input:focus {
          outline: none;
          border-color: var(--color-primary, #4a9a95);
          box-shadow: 0 0 0 2px rgba(74, 154, 149, 0.25);
        }

        .todo-form button {
          background-color: var(--color-primary, #4a9a95);
          color: white;
          border: none;
          border-radius: var(--radius-sm, 4px);
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
        }

        .todo-form button:hover {
          background-color: var(--color-primary-dark, #3e817d);
        }

        .todo-form button:active {
          transform: translateY(1px);
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
          padding: 0.875rem;
          border-bottom: 1px solid var(--color-border, rgba(50, 50, 50, 0.3));
          transition: background-color 0.2s;
        }

        .todo-item:hover {
          background-color: var(--color-hover, rgba(50, 50, 50, 0.3));
        }

        .todo-item.completed .todo-text {
          text-decoration: line-through;
          color: var(--color-text-muted, #a1a1aa);
        }

        .todo-text {
          flex: 1;
          word-break: break-word;
          color: var(--color-text, #f3f3f3);
          padding: 0 0.5rem;
        }

        .todo-actions {
          display: flex;
          gap: 0.5rem;
        }

        .todo-button {
          border-radius: var(--radius-sm, 4px);
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          color: white;
          transition: background-color 0.2s, transform 0.1s;
        }

        .todo-button:active {
          transform: translateY(1px);
        }

        .complete-button {
          background-color: var(--color-primary, #4a9a95);
        }

        .complete-button:hover {
          background-color: var(--color-primary-dark, #3e817d);
        }

        .delete-button {
          background-color: rgba(239, 68, 68, 0.8);
        }

        .delete-button:hover {
          background-color: rgba(239, 68, 68, 1);
        }

        @media (max-width: 480px) {
          .todo-form {
            flex-direction: column;
          }
          .todo-form button {
            width: 100%;
          }
        }
      `})]})}export{k as Todo};
