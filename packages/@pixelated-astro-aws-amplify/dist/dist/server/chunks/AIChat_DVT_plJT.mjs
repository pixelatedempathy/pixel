;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="118267ce-504b-4234-98a1-9756c4cc79d5",e._sentryDebugIdIdentifier="sentry-dbid-118267ce-504b-4234-98a1-9756c4cc79d5")}catch(e){}}();import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DzSu7Vuv.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                           */

const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
function AIChatReact({
  availableModels,
  showModelSelector = true
}) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(
    availableModels[0]?.id || ""
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const userMessage = {
      id: generateId(),
      // Generate unique ID
      role: "user",
      content: inputValue
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    try {
      setTimeout(() => {
        const assistantMessage = {
          id: generateId(),
          // Generate unique ID
          role: "assistant",
          content: `I'm a demo AI assistant using ${selectedModel}. You said: "${userMessage.content}". In a real implementation, this would connect to the TogetherAI API.`
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1e3);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden", children: [
    showModelSelector && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "model-select",
          className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
          children: "Select AI Model"
        }
      ),
      /* @__PURE__ */ jsx(
        "select",
        {
          id: "model-select",
          value: selectedModel,
          onChange: (e) => setSelectedModel(e.target.value),
          className: "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
          "aria-label": "AI model selection",
          children: availableModels.map((model) => /* @__PURE__ */ jsx("option", { value: model.id, children: model.name }, model.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "AI Chat" }) }),
    /* @__PURE__ */ jsxs("div", { className: "h-96 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900", children: [
      messages.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500 dark:text-gray-400 py-8", children: /* @__PURE__ */ jsx("p", { children: "Send a message to start chatting with the AI assistant" }) }) : messages.map((message) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `max-w-[80%] px-4 py-2 rounded-lg ${message.role === "user" ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"}`,
              children: message.content
            }
          )
        },
        message.id
      )),
      isLoading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg rounded-bl-none max-w-[80%]", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
            style: { animationDelay: "0.2s" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
            style: { animationDelay: "0.4s" }
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "p-4 border-t border-gray-200 dark:border-gray-700 flex bg-white dark:bg-gray-900",
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              className: "flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
              placeholder: "Type your message...",
              disabled: isLoading
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isLoading || !inputValue.trim(),
              className: "bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 dark:disabled:bg-blue-800",
              children: "Send"
            }
          )
        ]
      }
    )
  ] });
}

const $$Astro = createAstro("https://pixelatedempathy.com");
const $$AIChat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AIChat;
  const {
    availableModels = [
      {
        id: "meta-llama/llama-3.3-8b-instruct",
        name: "Llama 2 70B Chat"
      }
    ],
    showModelSelector = true,
    title = "AI Chat",
    description = "Interact with our AI assistant powered by TogetherAI."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-2xl mx-auto transition-colors duration-300" data-astro-cid-5d6wxdhr> ${title && renderTemplate`<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white" data-astro-cid-5d6wxdhr> ${title} </h2>`} ${description && renderTemplate`<p class="mb-6 text-gray-600 dark:text-gray-400" data-astro-cid-5d6wxdhr>${description}</p>`} ${renderComponent($$result, "AIChatReact", AIChatReact, { "client:load": true, "availableModels": availableModels, "showModelSelector": showModelSelector, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/AIChatReact", "client:component-export": "default", "data-astro-cid-5d6wxdhr": true })} </div> `;
}, "/root/pixel/src/components/AIChat.astro", void 0);

export { $$AIChat as $ };
//# sourceMappingURL=AIChat_DVT_plJT.mjs.map
