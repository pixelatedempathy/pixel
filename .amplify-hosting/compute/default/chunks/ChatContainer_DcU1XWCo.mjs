;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64b44da7-2195-4e8d-89bc-e06fcc7d0024",e._sentryDebugIdIdentifier="sentry-dbid-64b44da7-2195-4e8d-89bc-e06fcc7d0024")}catch(e){}}();import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { c as cn } from './utils_y2hdiMjE.mjs';
import { useRef, useEffect, useState } from 'react';
import { f as IconSend, g as IconBrain, h as IconChevronDown } from './icons_CU-SGAj6.mjs';
import './astro/server_bjkJ-nhl.mjs';
import { B as Badge } from './badge_DH1FUi3O.mjs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import calendar from 'dayjs/plugin/calendar.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  disabled = false,
  placeholder
}) {
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit,
      className: "relative flex items-end space-x-2 rounded-lg border border-purple-700/50 bg-black/50 p-2",
      children: [
        /* @__PURE__ */ jsx(
          "textarea",
          {
            ref: textareaRef,
            value,
            onChange,
            onKeyDown: handleKeyDown,
            placeholder: isLoading ? "AI is responding..." : placeholder || "Type your message...",
            disabled: isLoading || disabled,
            className: cn(
              "flex-1 resize-none bg-transparent p-2 placeholder-gray-500",
              "focus:outline-none focus:ring-0",
              "min-h-[40px] max-h-[200px]",
              "text-white scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent"
            ),
            rows: 1
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isLoading || disabled || !value.trim(),
            className: cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              "bg-purple-700 text-white transition-colors",
              "hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            ),
            children: /* @__PURE__ */ jsx(
              IconSend,
              {
                className: cn(
                  "h-5 w-5 transition-transform",
                  isLoading && "animate-pulse"
                )
              }
            )
          }
        )
      ]
    }
  );
}

const BOLD_REGEX = /\*\*(.*?)\*\*/g;
const ITALIC_REGEX = /\*(.*?)\*/g;
const CODE_REGEX = /`(.*?)`/g;
const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;
const HEADING_REGEX = /^(#{1,6})\s+(.+)$/gm;
function simpleMarkdownToHtml(text) {
  if (!text) {
    return "";
  }
  return text.replace(BOLD_REGEX, "<strong>$1</strong>").replace(ITALIC_REGEX, "<em>$1</em>").replace(CODE_REGEX, "<code>$1</code>").replace(
    LINK_REGEX,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  ).replace(HEADING_REGEX, (_, level, content) => {
    const headingLevel = Math.min(level.length, 6);
    return `<h${headingLevel}>${content}</h${headingLevel}>`;
  }).split("\n\n").map((para) => para ? `<p>${para}</p>` : "").join("");
}
function markdownToHtml(text) {
  return simpleMarkdownToHtml(text);
}

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(calendar);
dayjs.extend(utc);
dayjs.extend(timezone);
function formatTimestamp(timestamp) {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp);
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date >= today) {
    return `Today at ${date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  } else if (date >= yesterday) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  } else {
    return date.toLocaleDateString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
}

function ChatMessage({
  message,
  timestamp,
  className,
  isTyping = false
}) {
  const isUser = message.role === "user";
  const isBotMessage = message.role === "assistant";
  const isSystemMessage = message.role === "system";
  const formatCategoryName = (category) => {
    return category.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  const getCategoryColor = (category) => {
    const colors = {
      depression: "bg-blue-500",
      anxiety: "bg-yellow-500",
      ptsd: "bg-red-500",
      bipolar_disorder: "bg-purple-500",
      ocd: "bg-green-500",
      eating_disorder: "bg-pink-500",
      social_anxiety: "bg-indigo-500",
      panic_disorder: "bg-orange-500",
      suicidality: "bg-red-700",
      none: "bg-gray-500"
    };
    return colors[category] || "bg-gray-500";
  };
  const hasAnalysis = message.mentalHealthAnalysis && message.mentalHealthAnalysis.hasMentalHealthIssue;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex w-full items-start",
        isUser ? "justify-end" : "justify-start",
        className
      ),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative mb-6 max-w-[80%] rounded-lg p-4",
            isUser ? "bg-purple-800/80 text-white" : isBotMessage ? "bg-gray-800/60 text-white" : "bg-gray-950/60 text-gray-400 italic",
            isTyping && "animate-pulse"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-3", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "rounded-full px-2 py-1 text-xs",
                  isUser ? "bg-purple-900 text-purple-300" : isBotMessage ? "bg-gray-900 text-gray-300" : "bg-black/80 text-gray-500"
                ),
                children: isUser ? "You" : isBotMessage ? "AI" : "System"
              }
            ) }),
            hasAnalysis && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 right-3", children: /* @__PURE__ */ jsx(
              Badge,
              {
                className: `${getCategoryColor(message.mentalHealthAnalysis.category)} text-white text-xs`,
                children: formatCategoryName(message.mentalHealthAnalysis.category)
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-1", children: isSystemMessage ? /* @__PURE__ */ jsx("div", { className: "text-sm", children: message.content }) : (
              /* For user and bot messages, convert markdown to HTML */
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "prose prose-sm dark:prose-invert prose-headings:mb-2 prose-p:my-1 max-w-none",
                  dangerouslySetInnerHTML: {
                    __html: markdownToHtml(message.content)
                  }
                }
              )
            ) }),
            timestamp && /* @__PURE__ */ jsx("div", { className: "mt-2 text-right text-xs opacity-60", children: formatTimestamp(timestamp) })
          ]
        }
      )
    }
  );
}

function ChatContainer({
  messages,
  onSendMessage,
  isLoading = false,
  error,
  className = "",
  inputPlaceholder,
  disabled = false
}) {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isLoading || disabled) {
      return;
    }
    onSendMessage(input);
    setInput("");
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("flex h-full flex-col space-y-4", className), children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: "flex-1 space-y-4 overflow-y-auto rounded-lg border border-purple-700/20 bg-black/30 p-4",
        children: messages.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center space-y-4 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-full bg-purple-900/30 p-4", children: /* @__PURE__ */ jsx(IconBrain, { className: "h-8 w-8 text-purple-400" }) }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-sm space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-purple-300", children: "Start a Conversation" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Begin your therapy session by sending a message. The AI will respond in a supportive and empathetic manner." })
          ] })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          messages.map((message, index) => {
            const hasId = (msg) => typeof msg === "object" && msg !== null && "id" in msg && (typeof msg.id === "string" || typeof msg.id === "number");
            const key = hasId(message) ? message.id : `${message.role}-${message.name}-${message.content.slice(0, 16)}-${index}`;
            return /* @__PURE__ */ jsx(ChatMessage, { message }, key);
          }),
          isLoading && /* @__PURE__ */ jsx(
            ChatMessage,
            {
              message: {
                role: "assistant",
                content: "",
                name: "Assistant"
              },
              isTyping: true
            }
          ),
          error && /* @__PURE__ */ jsx(
            ChatMessage,
            {
              message: {
                role: "assistant",
                content: `Error: ${error}`,
                name: "Assistant"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
        ] })
      }
    ),
    showScrollButton && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: scrollToBottom,
        className: cn(
          "absolute bottom-20 right-4 rounded-full bg-purple-700 p-2",
          "text-white shadow-lg transition-colors hover:bg-purple-600"
        ),
        "aria-label": "Scroll to bottom",
        children: /* @__PURE__ */ jsx(IconChevronDown, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "sticky bottom-0 bg-gradient-to-t from-black to-transparent py-4", children: /* @__PURE__ */ jsx(
      ChatInput,
      {
        value: input,
        onChange: handleInputChange,
        onSubmit: handleSubmit,
        isLoading,
        disabled,
        placeholder: inputPlaceholder ?? ""
      }
    ) })
  ] });
}

export { ChatContainer as C };
