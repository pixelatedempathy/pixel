;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c41c988e-cfb9-4ec7-86b0-935c6e291397",e._sentryDebugIdIdentifier="sentry-dbid-c41c988e-cfb9-4ec7-86b0-935c6e291397")}catch(e){}}();import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import './astro/server_DBAAVvAL.mjs';

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
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
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
          onKeyDown: handleKeyPress
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
                "aria-label": todo.completed ? "Mark as incomplete" : "Mark as complete",
                children: todo.completed ? "⟲" : "✓"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "todo-button delete-button",
                onClick: () => deleteTodo(todo.id),
                "aria-label": "Delete task",
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
      ` })
  ] });
}

export { Todo as T };
