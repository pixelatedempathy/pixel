;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9d100177-c10c-4fea-ac07-7fea10c95238",e._sentryDebugIdIdentifier="sentry-dbid-9d100177-c10c-4fea-ac07-7fea10c95238")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKh1dVJn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useState, useRef, useEffect, useCallback } from 'react';
import { u as useAuth } from '../../chunks/useAuth_BFfzUrZe.mjs';
import { C as ChatContainer } from '../../chunks/ChatContainer_CHPAqCuV.mjs';
import 'clsx';
import '../../chunks/badge_BDYuHo1H.mjs';
export { renderers } from '../../renderers.mjs';

function isRetryableError$2(error) {
  if (error instanceof TypeError && error.message.includes("network")) {
    return true;
  }
  if (error instanceof Error && "status" in error && typeof error.status === "number") {
    return error.status >= 500 && error.status < 600;
  }
  if (error instanceof Error && "status" in error && error.status === 429) {
    return true;
  }
  if (error instanceof Error && error.message.includes("50")) {
    return true;
  }
  return false;
}
function calculateTokenUsage(messages, model) {
  const totalText = messages.map((m) => m.content).join(" ");
  const estimatedTokens = Math.ceil(totalText.length / 4);
  const promptTokens = Math.ceil(estimatedTokens * 0.7);
  const completionTokens = Math.ceil(estimatedTokens * 0.3);
  const costPerToken = model.includes("gpt-4") ? 3e-5 : 2e-6;
  const estimatedCost = (promptTokens + completionTokens) * costPerToken;
  return {
    totalTokens: promptTokens + completionTokens,
    promptTokens,
    completionTokens,
    estimatedCost
  };
}
function useChatCompletion({
  apiEndpoint = "/api/ai/completion",
  model = "gpt-4o",
  initialMessages = [],
  temperature = 0.7,
  maxTokens = 1024,
  maxRetries = 3,
  timeout = 3e4,
  streamingEnabled = true,
  autoSave = false,
  persistKey,
  messageHistory = 100,
  onError,
  onComplete,
  onProgress,
  onTypingStart,
  onTypingStop,
  onMessageSaved
} = {}) {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [conversationStats, setConversationStats] = useState({
    messageCount: initialMessages.length,
    userMessages: initialMessages.filter((m) => m.role === "user").length,
    assistantMessages: initialMessages.filter((m) => m.role === "assistant").length,
    avgResponseTime: 0,
    totalDuration: 0,
    startTime: initialMessages.length > 0 ? /* @__PURE__ */ new Date() : null
  });
  const lastUserMessageRef = useRef(null);
  const abortControllerRef = useRef(null);
  const responseTimesRef = useRef([]);
  const messageStartTimeRef = useRef(null);
  const tokenUsage = calculateTokenUsage(messages, model);
  useEffect(() => {
    if (autoSave && persistKey && messages.length > 0) {
      try {
        localStorage.setItem(persistKey, JSON.stringify(messages));
        if (onMessageSaved) {
          onMessageSaved(messages);
        }
      } catch (err) {
        console.warn("Failed to auto-save conversation:", err);
      }
    }
  }, [messages, autoSave, persistKey, onMessageSaved]);
  useEffect(() => {
    if (persistKey && messages.length === 0) {
      try {
        const saved = localStorage.getItem(persistKey);
        if (saved) {
          const parsedMessages = JSON.parse(saved);
          setMessages(parsedMessages);
          setConversationStats((prev) => ({
            ...prev,
            messageCount: parsedMessages.length,
            userMessages: parsedMessages.filter((m) => m.role === "user").length,
            assistantMessages: parsedMessages.filter((m) => m.role === "assistant").length,
            startTime: /* @__PURE__ */ new Date()
          }));
        }
      } catch (err) {
        console.warn("Failed to load conversation:", err);
      }
    }
  }, [persistKey, messages.length]);
  const resetChat = useCallback(() => {
    setMessages(initialMessages);
    setIsLoading(false);
    setIsStreaming(false);
    setIsTyping(false);
    setError(null);
    setProgress(0);
    lastUserMessageRef.current = null;
    responseTimesRef.current = [];
    setConversationStats({
      messageCount: initialMessages.length,
      userMessages: initialMessages.filter((m) => m.role === "user").length,
      assistantMessages: initialMessages.filter((m) => m.role === "assistant").length,
      avgResponseTime: 0,
      totalDuration: 0,
      startTime: initialMessages.length > 0 ? /* @__PURE__ */ new Date() : null
    });
    if (persistKey) {
      try {
        localStorage.removeItem(persistKey);
      } catch (err) {
        console.warn("Failed to clear saved conversation:", err);
      }
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, [initialMessages, persistKey]);
  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setIsStreaming(false);
    setIsTyping(false);
    setProgress(0);
    if (onTypingStop) {
      onTypingStop();
    }
  }, [onTypingStop]);
  const makeRequest = useCallback(
    async (requestMessages) => {
      abortControllerRef.current = new AbortController();
      const timeoutId = setTimeout(() => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      }, timeout);
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages: requestMessages.slice(-messageHistory),
            // Limit message history
            temperature,
            maxTokens,
            stream: streamingEnabled
          }),
          signal: abortControllerRef.current.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || `Failed to get AI response: ${response.status}`
          );
        }
        return response;
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    },
    [apiEndpoint, model, temperature, maxTokens, streamingEnabled, messageHistory, timeout]
  );
  const sendMessage = useCallback(
    async (message, context) => {
      if (!message.trim() || isLoading) {
        return;
      }
      lastUserMessageRef.current = message;
      messageStartTimeRef.current = Date.now();
      setIsLoading(true);
      setIsStreaming(streamingEnabled);
      setIsTyping(true);
      setError(null);
      setProgress(0);
      if (onTypingStart) {
        onTypingStart();
      }
      setConversationStats((prev) => ({
        ...prev,
        startTime: prev.startTime || /* @__PURE__ */ new Date(),
        messageCount: prev.messageCount + 1,
        userMessages: prev.userMessages + 1
      }));
      let retries = 0;
      let success = false;
      while (retries < maxRetries && !success) {
        try {
          const userMessage = {
            role: "user",
            content: message,
            name: context?.name || "",
            ...context
          };
          const updatedMessages = [...messages, userMessage];
          setMessages(updatedMessages);
          const response = await makeRequest(updatedMessages);
          if (streamingEnabled) {
            const reader = response.body?.getReader();
            if (!reader) {
              throw new Error("Response body is null");
            }
            let assistantMessage = "";
            const decoder = new TextDecoder("utf-8");
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                break;
              }
              const chunk = decoder.decode(value);
              const lines = chunk.split("\n").filter((line) => line.trim() !== "").map((line) => line.replace(/^data: /, "").trim());
              for (const line of lines) {
                if (line === "[DONE]") {
                  break;
                }
                try {
                  const data = JSON.parse(line);
                  const content = data?.content;
                  if (content) {
                    assistantMessage += content;
                    const estimatedProgress = Math.min(
                      assistantMessage.length / maxTokens * 100,
                      95
                    );
                    setProgress(estimatedProgress);
                    if (onProgress) {
                      onProgress(content, assistantMessage);
                    }
                    setMessages((prev) => {
                      const newMessages = [...prev];
                      const lastMessage = newMessages[newMessages.length - 1];
                      if (lastMessage.role === "assistant") {
                        newMessages[newMessages.length - 1] = {
                          ...lastMessage,
                          content: assistantMessage
                        };
                      } else {
                        newMessages.push({
                          role: "assistant",
                          content: assistantMessage,
                          name: ""
                        });
                      }
                      return newMessages;
                    });
                  }
                  if (data?.finishReason === "stop" || data?.done) {
                    break;
                  }
                } catch {
                }
              }
            }
          } else {
            const data = await response.json();
            const assistantMessage = data.choices?.[0]?.message?.content || "";
            setMessages((prev) => [...prev, {
              role: "assistant",
              content: assistantMessage,
              name: ""
            }]);
          }
          setProgress(100);
          if (messageStartTimeRef.current) {
            const responseTime = Date.now() - messageStartTimeRef.current;
            responseTimesRef.current.push(responseTime);
            const avgResponseTime = responseTimesRef.current.reduce((a, b) => a + b, 0) / responseTimesRef.current.length;
            setConversationStats((prev) => ({
              ...prev,
              assistantMessages: prev.assistantMessages + 1,
              avgResponseTime,
              totalDuration: Date.now() - (prev.startTime?.getTime() || 0)
            }));
          }
          if (onComplete) {
            onComplete(messages[messages.length - 1]?.content || "");
          }
          success = true;
        } catch (err) {
          if (retries === maxRetries - 1 || !isRetryableError$2(err)) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
            setError(errorMessage);
            if (onError && err instanceof Error) {
              onError(err);
            }
            throw err;
          }
          retries++;
          await new Promise(
            (resolve) => setTimeout(resolve, 2 ** retries * 300)
          );
        } finally {
          if (success || retries === maxRetries) {
            setIsLoading(false);
            setIsStreaming(false);
            setIsTyping(false);
            if (onTypingStop) {
              onTypingStop();
            }
          }
        }
      }
    },
    [
      messages,
      isLoading,
      streamingEnabled,
      maxRetries,
      maxTokens,
      onTypingStart,
      onTypingStop,
      onProgress,
      onComplete,
      onError,
      makeRequest
    ]
  );
  const sendStreamingMessage = useCallback(
    async function* (message, context) {
      if (!message.trim() || isLoading) {
        return;
      }
      lastUserMessageRef.current = message;
      messageStartTimeRef.current = Date.now();
      setIsLoading(true);
      setIsStreaming(true);
      setIsTyping(true);
      setError(null);
      setProgress(0);
      if (onTypingStart) {
        onTypingStart();
      }
      try {
        const userMessage = {
          role: "user",
          content: message,
          name: context?.name || "",
          ...context
        };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        const response = await makeRequest(updatedMessages);
        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("No response body reader available");
        }
        let assistantMessage = "";
        const decoder = new TextDecoder("utf-8");
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n").filter((line) => line.trim() !== "").map((line) => line.replace(/^data: /, "").trim());
          for (const line of lines) {
            if (line === "[DONE]") {
              break;
            }
            try {
              const data = JSON.parse(line);
              const content = data?.content;
              if (content) {
                assistantMessage += content;
                const estimatedProgress = Math.min(
                  assistantMessage.length / maxTokens * 100,
                  95
                );
                setProgress(estimatedProgress);
                setMessages((prev) => {
                  const newMessages = [...prev];
                  const lastMessage = newMessages[newMessages.length - 1];
                  if (lastMessage.role === "assistant") {
                    newMessages[newMessages.length - 1] = {
                      ...lastMessage,
                      content: assistantMessage
                    };
                  } else {
                    newMessages.push({
                      role: "assistant",
                      content: assistantMessage,
                      name: ""
                    });
                  }
                  return newMessages;
                });
                yield content;
              }
              if (data?.finishReason === "stop" || data?.done) {
                break;
              }
            } catch {
            }
          }
        }
        setProgress(100);
        if (onComplete) {
          onComplete(assistantMessage);
        }
      } finally {
        setIsLoading(false);
        setIsStreaming(false);
        setIsTyping(false);
        if (onTypingStop) {
          onTypingStop();
        }
      }
    },
    [messages, isLoading, maxTokens, onTypingStart, onTypingStop, onComplete, makeRequest]
  );
  const editMessage = useCallback((index, newContent) => {
    setMessages((prev) => {
      const newMessages = [...prev];
      if (index >= 0 && index < newMessages.length) {
        newMessages[index] = { ...newMessages[index], content: newContent };
      }
      return newMessages;
    });
  }, []);
  const deleteMessage = useCallback((index) => {
    setMessages((prev) => {
      const newMessages = [...prev];
      if (index >= 0 && index < newMessages.length) {
        newMessages.splice(index, 1);
      }
      return newMessages;
    });
  }, []);
  const resendMessage = useCallback(async (index) => {
    const messageToResend = messages[index];
    if (messageToResend && messageToResend.role === "user") {
      setMessages((prev) => prev.slice(0, index));
      await sendMessage(messageToResend.content);
    }
  }, [messages, sendMessage]);
  const retryLastMessage = useCallback(async () => {
    if (lastUserMessageRef.current) {
      setError(null);
      await sendMessage(lastUserMessageRef.current);
    }
  }, [sendMessage]);
  const saveConversation = useCallback(() => {
    if (persistKey) {
      try {
        localStorage.setItem(persistKey, JSON.stringify(messages));
        if (onMessageSaved) {
          onMessageSaved(messages);
        }
      } catch (err) {
        console.error("Failed to save conversation:", err);
      }
    }
  }, [messages, persistKey, onMessageSaved]);
  const loadConversation = useCallback(() => {
    if (persistKey) {
      try {
        const saved = localStorage.getItem(persistKey);
        if (saved) {
          const parsedMessages = JSON.parse(saved);
          setMessages(parsedMessages);
        }
      } catch (err) {
        console.error("Failed to load conversation:", err);
      }
    }
  }, [persistKey]);
  const exportConversation = useCallback(() => {
    return JSON.stringify({
      messages,
      stats: conversationStats,
      tokenUsage,
      exportDate: (/* @__PURE__ */ new Date()).toISOString()
    }, null, 2);
  }, [messages, conversationStats, tokenUsage]);
  const importConversation = useCallback((data) => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.messages && Array.isArray(parsed.messages)) {
        setMessages(parsed.messages);
        if (parsed.stats) {
          setConversationStats(parsed.stats);
        }
      }
    } catch (err) {
      console.error("Failed to import conversation:", err);
      setError("Invalid conversation data format");
    }
  }, []);
  const getMessageStats = useCallback(() => {
    const lengths = messages.map((m) => m.content.length);
    return {
      longestMessage: Math.max(...lengths, 0),
      shortestMessage: Math.min(...lengths, 0),
      averageLength: lengths.length > 0 ? lengths.reduce((a, b) => a + b, 0) / lengths.length : 0,
      sentimentDistribution: {}
      // Would need sentiment analysis integration
    };
  }, [messages]);
  return {
    messages,
    isLoading,
    isStreaming,
    isTyping,
    error,
    progress,
    tokenUsage,
    conversationStats,
    sendMessage,
    sendStreamingMessage,
    editMessage,
    deleteMessage,
    resendMessage,
    resetChat,
    retryLastMessage,
    saveConversation,
    loadConversation,
    exportConversation,
    importConversation,
    stopGeneration,
    getMessageStats
  };
}

function isRetryableError$1(error) {
  if (error instanceof TypeError && error.message.includes("network")) {
    return true;
  }
  if (error instanceof Error && "status" in error && typeof error.status === "number") {
    return error.status >= 500 && error.status < 600;
  }
  if (error instanceof Error && "status" in error && error.status === 429) {
    return true;
  }
  return false;
}
function generateCrisisAnalytics(results) {
  if (results.length === 0) {
    return {
      riskDistribution: {},
      crisisTypes: {},
      temporalPatterns: [],
      recommendations: [],
      interventionSuggestions: []
    };
  }
  const riskCounts = results.reduce((acc, result) => {
    acc[result.riskLevel] = (acc[result.riskLevel] || 0) + 1;
    return acc;
  }, {});
  const riskDistribution = Object.fromEntries(
    Object.entries(riskCounts).map(([risk, count]) => [risk, count / results.length])
  );
  const crisisTypes = results.filter((r) => r.crisisDetected && r.crisisType).reduce((acc, result) => {
    const type = result.crisisType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const temporalPatterns = [];
  const crisisRatio = results.filter((r) => r.crisisDetected).length / results.length;
  const highRiskRatio = results.filter((r) => r.riskLevel === "high" || r.riskLevel === "critical").length / results.length;
  if (crisisRatio > 0.3) {
    temporalPatterns.push("High frequency of crisis indicators");
  }
  if (highRiskRatio > 0.2) {
    temporalPatterns.push("Elevated risk pattern detected");
  }
  const recommendations = [];
  if (crisisRatio > 0.1) {
    recommendations.push("Implement immediate monitoring protocols");
    recommendations.push("Consider professional intervention");
  }
  if (highRiskRatio > 0.15) {
    recommendations.push("Escalate to crisis response team");
  }
  const interventionSuggestions = [];
  if (Object.keys(crisisTypes).includes("self-harm")) {
    interventionSuggestions.push("Suicide prevention protocol activation");
  }
  if (Object.keys(crisisTypes).includes("substance-abuse")) {
    interventionSuggestions.push("Substance abuse counseling referral");
  }
  if (crisisRatio > 0.2) {
    interventionSuggestions.push("Emergency mental health evaluation");
  }
  return {
    riskDistribution,
    crisisTypes,
    temporalPatterns,
    recommendations,
    interventionSuggestions
  };
}
function useCrisisDetection({
  apiEndpoint = "/api/ai/crisis-detection",
  model = "gpt-4o",
  temperature = 0.2,
  maxRetries = 3,
  timeout = 3e4,
  sensitivityLevel = "medium",
  alertThreshold = 0.7,
  batchSize = 5,
  realTimeMode = false,
  onError,
  onCrisisDetected,
  onComplete,
  onProgress,
  onAlert
} = {}) {
  const [result, setResult] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [totalDetected, setTotalDetected] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const lastTextRef = useRef(null);
  const abortControllerRef = useRef(null);
  const monitoringIntervalRef = useRef(null);
  const crisisCount = results.filter((r) => r.crisisDetected).length;
  const highRiskCount = results.filter((r) => r.riskLevel === "high" || r.riskLevel === "critical").length;
  const averageRiskLevel = results.length > 0 ? results.reduce((sum, r) => {
    const riskValues = { low: 1, medium: 2, high: 3, critical: 4 };
    return sum + riskValues[r.riskLevel];
  }, 0) / results.length : 0;
  const reset = useCallback(() => {
    setResult(null);
    setResults([]);
    setIsLoading(false);
    setIsMonitoring(false);
    setError(null);
    setProgress(0);
    setTotalDetected(0);
    setAlerts([]);
    lastTextRef.current = null;
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
      monitoringIntervalRef.current = null;
    }
  }, []);
  const cancelDetection = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setIsMonitoring(false);
  }, []);
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);
  const createAlert = useCallback((result2) => {
    let level = "warning";
    let message = "Crisis indicator detected";
    if (result2.riskLevel === "critical") {
      level = "critical";
      message = "CRITICAL: Immediate intervention required";
    } else if (result2.riskLevel === "high") {
      level = "danger";
      message = "HIGH RISK: Crisis detected, urgent attention needed";
    } else if (result2.crisisDetected) {
      level = "warning";
      message = "Crisis indicator detected, monitoring recommended";
    }
    return {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message,
      result: result2,
      acknowledged: false
    };
  }, []);
  const makeRequest = useCallback(
    async (requestData) => {
      abortControllerRef.current = new AbortController();
      const timeoutId = setTimeout(() => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      }, timeout);
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...requestData,
            model,
            temperature,
            sensitivityLevel
          }),
          signal: abortControllerRef.current.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `API request failed: ${response.status}`);
        }
        return response;
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    },
    [apiEndpoint, model, temperature, sensitivityLevel, timeout]
  );
  const detectCrisis = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) {
        return null;
      }
      lastTextRef.current = text;
      setIsLoading(true);
      setError(null);
      setProgress(0);
      let retries = 0;
      while (retries < maxRetries) {
        try {
          const response = await makeRequest({ text });
          const data = await response.json();
          setResult(data);
          setResults((prev) => [...prev, data]);
          setTotalDetected((prev) => prev + 1);
          setProgress(100);
          if (data.crisisDetected && onCrisisDetected) {
            onCrisisDetected(data);
          }
          if (data.confidence >= alertThreshold || data.riskLevel === "high" || data.riskLevel === "critical") {
            const alert = createAlert(data);
            setAlerts((prev) => [...prev, alert]);
            if (onAlert) {
              onAlert([alert]);
            }
          }
          if (onComplete) {
            onComplete(data);
          }
          return data;
        } catch (err) {
          if (retries === maxRetries - 1 || !isRetryableError$1(err)) {
            const errorMessage = err instanceof Error ? err.message : "Failed to detect crisis";
            setError(errorMessage);
            if (onError && err instanceof Error) {
              onError(err);
            }
            return null;
          }
          retries++;
          const delay = Math.min(1e3 * Math.pow(2, retries) + Math.random() * 1e3, 1e4);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } finally {
          if (retries === maxRetries - 1) {
            setIsLoading(false);
          }
        }
      }
      return null;
    },
    [isLoading, maxRetries, alertThreshold, createAlert, onCrisisDetected, onComplete, onAlert, onError, makeRequest]
  );
  const detectBatch = useCallback(
    async (texts) => {
      if (texts.length === 0 || isLoading) {
        return null;
      }
      setIsLoading(true);
      setIsMonitoring(true);
      setError(null);
      setProgress(0);
      const batchResults = [];
      const newAlerts = [];
      try {
        for (let i = 0; i < texts.length; i += batchSize) {
          const chunk = texts.slice(i, i + batchSize);
          const response = await makeRequest({ batch: chunk });
          const chunkResults = await response.json();
          batchResults.push(...chunkResults);
          setResults((prev) => [...prev, ...chunkResults]);
          chunkResults.forEach((result2) => {
            if (result2.crisisDetected && onCrisisDetected) {
              onCrisisDetected(result2);
            }
            if (result2.confidence >= alertThreshold || result2.riskLevel === "high" || result2.riskLevel === "critical") {
              const alert = createAlert(result2);
              newAlerts.push(alert);
            }
          });
          const currentProgress = Math.min((i + chunk.length) / texts.length * 100, 100);
          setProgress(currentProgress);
          if (onProgress) {
            onProgress(i + chunk.length, texts.length);
          }
        }
        setTotalDetected((prev) => prev + batchResults.length);
        if (newAlerts.length > 0) {
          setAlerts((prev) => [...prev, ...newAlerts]);
          if (onAlert) {
            onAlert(newAlerts);
          }
        }
        return batchResults;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to detect crisis in batch";
        setError(errorMessage);
        if (onError && err instanceof Error) {
          onError(err);
        }
        return null;
      } finally {
        setIsLoading(false);
        setIsMonitoring(false);
      }
    },
    [isLoading, batchSize, alertThreshold, createAlert, onProgress, onCrisisDetected, onAlert, onError, makeRequest]
  );
  const monitorStream = useCallback(
    async function* (texts) {
      if (texts.length === 0 || isLoading) {
        return [];
      }
      setIsLoading(true);
      setIsMonitoring(true);
      setError(null);
      setProgress(0);
      const streamResults = [];
      const newAlerts = [];
      try {
        for (let i = 0; i < texts.length; i++) {
          const text = texts[i];
          try {
            const response = await makeRequest({ text });
            const data = await response.json();
            streamResults.push(data);
            setResults((prev) => [...prev, data]);
            if (data.crisisDetected && onCrisisDetected) {
              onCrisisDetected(data);
            }
            if (data.confidence >= alertThreshold || data.riskLevel === "high" || data.riskLevel === "critical") {
              const alert = createAlert(data);
              newAlerts.push(alert);
              setAlerts((prev) => [...prev, alert]);
            }
            const currentProgress = (i + 1) / texts.length * 100;
            setProgress(currentProgress);
            if (onProgress) {
              onProgress(i + 1, texts.length);
            }
            yield data;
          } catch (err) {
            console.warn(`Failed to detect crisis in text ${i + 1}:`, err);
          }
        }
        setTotalDetected((prev) => prev + streamResults.length);
        if (newAlerts.length > 0 && onAlert) {
          onAlert(newAlerts);
        }
        return streamResults;
      } finally {
        setIsLoading(false);
        setIsMonitoring(false);
      }
    },
    [isLoading, alertThreshold, createAlert, onProgress, onCrisisDetected, onAlert, makeRequest]
  );
  const redetectLastText = useCallback(async () => {
    if (!lastTextRef.current) {
      setError("No previous text to re-detect");
      return null;
    }
    return detectCrisis(lastTextRef.current);
  }, [detectCrisis]);
  const startRealTimeMonitoring = useCallback(() => {
    if (!realTimeMode) {
      console.warn("Real-time monitoring requires realTimeMode to be enabled");
      return;
    }
    setIsMonitoring(true);
    console.log("Real-time crisis monitoring started");
  }, [realTimeMode]);
  const stopRealTimeMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
      monitoringIntervalRef.current = null;
    }
    console.log("Real-time crisis monitoring stopped");
  }, []);
  const getAnalytics = useCallback(() => {
    return generateCrisisAnalytics(results);
  }, [results]);
  return {
    result,
    results,
    isLoading,
    isMonitoring,
    error,
    progress,
    totalDetected,
    crisisCount,
    highRiskCount,
    averageRiskLevel,
    alerts,
    detectCrisis,
    detectBatch,
    monitorStream,
    redetectLastText,
    startRealTimeMonitoring,
    stopRealTimeMonitoring,
    cancelDetection,
    clearAlerts,
    reset,
    getAnalytics
  };
}

function isRetryableError(error) {
  if (error instanceof TypeError && error.message.includes("network")) {
    return true;
  }
  if (error instanceof Error && "status" in error && typeof error.status === "number") {
    return error.status >= 500 && error.status < 600;
  }
  if (error instanceof Error && "status" in error && error.status === 429) {
    return true;
  }
  return false;
}
function generateSentimentInsights(results) {
  if (results.length === 0) {
    return {
      dominantSentiment: "neutral",
      confidenceDistribution: {},
      emotionalTrends: [],
      riskFactors: [],
      recommendations: []
    };
  }
  const sentimentCounts = results.reduce((acc, result) => {
    acc[result.sentiment] = (acc[result.sentiment] || 0) + 1;
    return acc;
  }, {});
  const dominantSentiment = Object.entries(sentimentCounts).sort(([, a], [, b]) => b - a)[0]?.[0] || "neutral";
  const confidenceDistribution = Object.fromEntries(
    Object.entries(sentimentCounts).map(([sentiment, count]) => [
      sentiment,
      count / results.length
    ])
  );
  const emotionalTrends = [];
  const negativeRatio = (sentimentCounts.negative ?? 0) / results.length;
  const positiveRatio = (sentimentCounts.positive ?? 0) / results.length;
  if (negativeRatio > 0.6) {
    emotionalTrends.push("Predominantly negative emotional pattern");
  }
  if (positiveRatio > 0.6) {
    emotionalTrends.push("Predominantly positive emotional pattern");
  }
  if (Math.abs(negativeRatio - positiveRatio) < 0.2) {
    emotionalTrends.push("Mixed emotional patterns");
  }
  const riskFactors = [];
  const avgConfidence = results.reduce((sum, r) => sum + r.confidence, 0) / results.length;
  if (negativeRatio > 0.7) {
    riskFactors.push("High negative sentiment concentration");
  }
  if (avgConfidence < 0.6) {
    riskFactors.push("Low confidence in sentiment analysis");
  }
  if (results.some((r) => r.sentiment === "negative" && r.confidence > 0.8)) {
    riskFactors.push("Strong negative sentiment detected");
  }
  const recommendations = [];
  if (negativeRatio > 0.5) {
    recommendations.push("Consider therapeutic intervention or support");
    recommendations.push("Monitor for crisis indicators");
  }
  if (avgConfidence < 0.7) {
    recommendations.push("Consider more detailed emotional assessment");
  }
  if (emotionalTrends.includes("Mixed emotional patterns")) {
    recommendations.push("Explore underlying causes of emotional variability");
  }
  return {
    dominantSentiment,
    confidenceDistribution,
    emotionalTrends,
    riskFactors,
    recommendations
  };
}
function useSentimentAnalysis({
  apiEndpoint = "/api/ai/sentiment",
  model = "gpt-4o",
  temperature = 0.3,
  maxRetries = 3,
  timeout = 3e4,
  confidenceThreshold = 0.5,
  batchSize = 10,
  onError,
  onComplete,
  onProgress,
  onBatchComplete
} = {}) {
  const [result, setResult] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [totalAnalyzed, setTotalAnalyzed] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failureCount, setFailureCount] = useState(0);
  const lastTextRef = useRef(null);
  const abortControllerRef = useRef(null);
  const averageConfidence = results.length > 0 ? results.reduce((sum, r) => sum + r.confidence, 0) / results.length : 0;
  const reset = useCallback(() => {
    setResult(null);
    setResults([]);
    setIsLoading(false);
    setIsAnalyzing(false);
    setError(null);
    setProgress(0);
    setTotalAnalyzed(0);
    setSuccessCount(0);
    setFailureCount(0);
    lastTextRef.current = null;
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);
  const cancelAnalysis = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setIsAnalyzing(false);
  }, []);
  const makeRequest = useCallback(
    async (requestData) => {
      abortControllerRef.current = new AbortController();
      const timeoutId = setTimeout(() => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      }, timeout);
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...requestData,
            model,
            temperature
          }),
          signal: abortControllerRef.current.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `API request failed: ${response.status}`);
        }
        return response;
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    },
    [apiEndpoint, model, temperature, timeout]
  );
  const analyzeText = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) {
        return null;
      }
      lastTextRef.current = text;
      setIsLoading(true);
      setError(null);
      setProgress(0);
      let retries = 0;
      while (retries < maxRetries) {
        try {
          const response = await makeRequest({ text });
          const data = await response.json();
          if (data.confidence < confidenceThreshold) {
            console.warn(`Low confidence sentiment analysis: ${data.confidence}`);
          }
          setResult(data);
          setResults((prev) => [...prev, data]);
          setTotalAnalyzed((prev) => prev + 1);
          setSuccessCount((prev) => prev + 1);
          setProgress(100);
          if (onComplete) {
            onComplete(data);
          }
          return data;
        } catch (err) {
          if (retries === maxRetries - 1 || !isRetryableError(err)) {
            const errorMessage = err instanceof Error ? err.message : "Failed to analyze sentiment";
            setError(errorMessage);
            setFailureCount((prev) => prev + 1);
            if (onError && err instanceof Error) {
              onError(err);
            }
            return null;
          }
          retries++;
          const delay = Math.min(1e3 * Math.pow(2, retries) + Math.random() * 1e3, 1e4);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } finally {
          if (retries === maxRetries - 1) {
            setIsLoading(false);
          }
        }
      }
      return null;
    },
    [isLoading, maxRetries, confidenceThreshold, onComplete, onError, makeRequest]
  );
  const analyzeBatch = useCallback(
    async (texts) => {
      if (texts.length === 0 || isLoading) {
        return null;
      }
      setIsLoading(true);
      setIsAnalyzing(true);
      setError(null);
      setProgress(0);
      const batchResults = [];
      const failedCount = 0;
      try {
        for (let i = 0; i < texts.length; i += batchSize) {
          const chunk = texts.slice(i, i + batchSize);
          const response = await makeRequest({ batch: chunk });
          const chunkResults = await response.json();
          batchResults.push(...chunkResults);
          setResults((prev) => [...prev, ...chunkResults]);
          setSuccessCount((prev) => prev + chunkResults.length);
          const currentProgress = Math.min((i + chunk.length) / texts.length * 100, 100);
          setProgress(currentProgress);
          if (onProgress) {
            onProgress(i + chunk.length, texts.length);
          }
        }
        setTotalAnalyzed((prev) => prev + batchResults.length);
        if (onBatchComplete) {
          onBatchComplete(batchResults, failedCount);
        }
        return batchResults;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to analyze sentiment batch";
        setError(errorMessage);
        setFailureCount((prev) => prev + texts.length - batchResults.length);
        if (onError && err instanceof Error) {
          onError(err);
        }
        return null;
      } finally {
        setIsLoading(false);
        setIsAnalyzing(false);
      }
    },
    [isLoading, batchSize, onProgress, onBatchComplete, onError, makeRequest]
  );
  const analyzeStream = useCallback(
    async function* (texts) {
      if (texts.length === 0 || isLoading) {
        return [];
      }
      setIsLoading(true);
      setIsAnalyzing(true);
      setError(null);
      setProgress(0);
      const streamResults = [];
      try {
        for (let i = 0; i < texts.length; i++) {
          const text = texts[i];
          try {
            const response = await makeRequest({ text });
            const data = await response.json();
            streamResults.push(data);
            setResults((prev) => [...prev, data]);
            setSuccessCount((prev) => prev + 1);
            const currentProgress = (i + 1) / texts.length * 100;
            setProgress(currentProgress);
            if (onProgress) {
              onProgress(i + 1, texts.length);
            }
            yield data;
          } catch (err) {
            setFailureCount((prev) => prev + 1);
            console.warn(`Failed to analyze text ${i + 1}:`, err);
          }
        }
        setTotalAnalyzed((prev) => prev + streamResults.length);
        return streamResults;
      } finally {
        setIsLoading(false);
        setIsAnalyzing(false);
      }
    },
    [isLoading, onProgress, makeRequest]
  );
  const reanalyzeLastText = useCallback(async () => {
    if (!lastTextRef.current) {
      setError("No previous text to re-analyze");
      return null;
    }
    return analyzeText(lastTextRef.current);
  }, [analyzeText]);
  const getInsights = useCallback(() => {
    return generateSentimentInsights(results);
  }, [results]);
  return {
    result,
    results,
    isLoading,
    isAnalyzing,
    error,
    progress,
    totalAnalyzed,
    successCount,
    failureCount,
    averageConfidence,
    analyzeText,
    analyzeBatch,
    analyzeStream,
    reanalyzeLastText,
    cancelAnalysis,
    reset,
    getInsights
  };
}

function ChatDemo({
  className = "",
  onCrisisAlert,
  maxMessages = 50
}) {
  const { isAuthenticated } = useAuth();
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const [crisisAlertShown, setCrisisAlertShown] = useState(false);
  const lastMessageTime = useRef(0);
  const RATE_LIMIT_MS = 2e3;
  const MAX_MESSAGES_PER_HOUR = 30;
  const initialMessages = [
    {
      role: "system",
      content: "You are a professional mental health training assistant. Provide supportive, evidence-based responses while maintaining appropriate boundaries.",
      name: ""
    }
  ];
  const { messages, isLoading, error, sendMessage, retryLastMessage } = useChatCompletion({
    initialMessages,
    model: "gpt-4o",
    temperature: 0.7,
    maxTokens: 1024,
    onError: (error2) => {
      console.error("Chat error:", error2);
    }
  });
  const {
    analyzeText: analyzeSentiment,
    result: sentimentResult,
    isLoading: sentimentLoading
  } = useSentimentAnalysis();
  const {
    detectCrisis,
    result: crisisResult,
    isLoading: crisisLoading
  } = useCrisisDetection({
    sensitivityLevel: "medium",
    onCrisisDetected: useCallback(
      (result) => {
        if (result.isCrisis && result.riskLevel === "critical") {
          setCrisisAlertShown(true);
          onCrisisAlert?.(result);
        }
      },
      [onCrisisAlert]
    )
  });
  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    if (now - lastMessageTime.current < RATE_LIMIT_MS) {
      setRateLimitExceeded(true);
      setTimeout(() => setRateLimitExceeded(false), RATE_LIMIT_MS);
      return false;
    }
    if (messageCount >= MAX_MESSAGES_PER_HOUR) {
      return false;
    }
    return true;
  }, [messageCount]);
  const handleSendMessage = useCallback(
    async (message) => {
      if (!isAuthenticated) {
        throw new Error("Authentication required");
      }
      if (!checkRateLimit()) {
        return;
      }
      if (!message.trim() || message.length > 2e3) {
        throw new Error("Invalid message length");
      }
      try {
        lastMessageTime.current = Date.now();
        setMessageCount((prev) => prev + 1);
        await sendMessage(message);
        await Promise.allSettled([
          analyzeSentiment(message),
          detectCrisis(message)
        ]);
      } catch (error2) {
        console.error("Message handling error:", error2);
        throw error2;
      }
    },
    [
      isAuthenticated,
      checkRateLimit,
      sendMessage,
      analyzeSentiment,
      detectCrisis
    ]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageCount(0);
    }, 36e5);
    return () => clearInterval(interval);
  }, []);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: `flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 ${className}`,
        children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Authentication Required" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Please sign in to access the chat interface." })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex flex-col h-full bg-white rounded-lg shadow-sm border ${className}`,
      children: [
        crisisAlertShown && crisisResult?.isCrisis && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border-l-4 border-red-400 p-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-5 w-5 text-red-400",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    clipRule: "evenodd"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Crisis Detected" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-700", children: [
                "Risk Level: ",
                crisisResult.riskLevel,
                " | Confidence:",
                " ",
                (crisisResult.confidence * 100).toFixed(0),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCrisisAlertShown(false),
              className: "text-red-400 hover:text-red-600",
              children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              ) })
            }
          )
        ] }) }),
        rateLimitExceeded && /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700", children: "Please wait before sending another message." }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ jsx(
          ChatContainer,
          {
            messages: messages.filter((m) => m.role !== "system" && m.content !== void 0).slice(-maxMessages).map((m) => ({
              role: m.role,
              content: m.content || "",
              name: m.name || ""
            })),
            onSendMessage: handleSendMessage,
            isLoading,
            error: error?.toString(),
            inputPlaceholder: rateLimitExceeded ? "Please wait..." : "Type a message...",
            onRetry: retryLastMessage,
            disabled: rateLimitExceeded || messageCount >= MAX_MESSAGES_PER_HOUR
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setShowAnalysis(!showAnalysis),
                className: "flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: `mr-2 h-4 w-4 transform transition-transform ${showAnalysis ? "rotate-180" : ""}`,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M19 9l-7 7-7-7"
                        }
                      )
                    }
                  ),
                  showAnalysis ? "Hide Analysis" : "Show Analysis"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
              "Messages: ",
              messageCount,
              "/",
              MAX_MESSAGES_PER_HOUR
            ] })
          ] }),
          showAnalysis && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Sentiment Analysis" }),
                sentimentLoading && /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" })
              ] }),
              sentimentResult ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sentiment:" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: String(sentimentResult.sentiment) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Confidence:" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                    (sentimentResult.confidence * 100).toFixed(0),
                    "%"
                  ] })
                ] }),
                sentimentResult.emotions && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 mb-2", children: "Emotions:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1", children: Object.entries(sentimentResult.emotions).sort(([, a], [, b]) => Number(b) - Number(a)).slice(0, 3).map(([emotion, score]) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex justify-between text-xs",
                      children: [
                        /* @__PURE__ */ jsxs("span", { className: "text-gray-600 capitalize", children: [
                          emotion,
                          ":"
                        ] }),
                        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                          Math.floor(Number(score) * 100),
                          "%"
                        ] })
                      ]
                    },
                    emotion
                  )) })
                ] })
              ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No analysis available" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Crisis Detection" }),
                crisisLoading && /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-red-600" })
              ] }),
              crisisResult ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Crisis Detected:" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-sm font-medium ${crisisResult.isCrisis ? "text-red-600" : "text-green-600"}`,
                      children: crisisResult.isCrisis ? "Yes" : "No"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Confidence:" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                    (crisisResult.confidence * 100).toFixed(0),
                    "%"
                  ] })
                ] }),
                crisisResult.category && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Type:" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: crisisResult.category })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Risk Level:" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-sm font-medium ${crisisResult.riskLevel === "critical" ? "text-red-600" : crisisResult.riskLevel === "high" ? "text-orange-600" : crisisResult.riskLevel === "medium" ? "text-yellow-600" : "text-green-600"}`,
                      children: crisisResult.riskLevel
                    }
                  )
                ] }),
                crisisResult.suggestedActions && crisisResult.suggestedActions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 mb-1", children: "Suggested Actions:" }),
                  /* @__PURE__ */ jsx("ul", { className: "text-xs text-gray-600 space-y-1", children: crisisResult.suggestedActions.slice(0, 2).map((action) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "mr-1", children: "•" }),
                    /* @__PURE__ */ jsx("span", { children: action })
                  ] }, action)) })
                ] })
              ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No analysis available" })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
class ChatDemoErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ChatDemo Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-64 bg-red-50 rounded-lg border border-red-200", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-red-900 mb-2", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700 mb-4", children: "The chat interface encountered an error." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => this.setState({ hasError: false, error: void 0 }),
            className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            children: "Try Again"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}

const $$Chat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Chat Demo", "description": "Try our AI chat interface. Send a message to start a conversation." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold mb-2">AI Chat Demo</h1> <p class="text-muted-foreground mb-6">
Try our AI chat interface with advanced capabilities. Send a message to
        start a conversation.
</p> <div class="border rounded-lg overflow-hidden h-[600px] mb-8"> ${renderComponent($$result2, "ChatDemo", ChatDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/demo", "client:component-export": "ChatDemo" })} </div> <div class="grid md:grid-cols-2 gap-6"> <div> <h2 class="text-xl font-semibold mb-3">Features</h2> <ul class="space-y-2"> <li class="flex items-start gap-2"> <span class="text-primary">✓</span> <span>Real-time streaming responses</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">✓</span> <span>Sentiment analysis of messages</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">✓</span> <span>Crisis detection with configurable sensitivity</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">✓</span> <span>Therapeutic response generation</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">✓</span> <span>HIPAA-compliant audit logging</span> </li> </ul> </div> <div> <h2 class="text-xl font-semibold mb-3">How It Works</h2> <p class="text-muted-foreground mb-3">
This demo showcases our AI integration capabilities using the
            TogetherAI API. The interface includes:
</p> <ul class="space-y-2"> <li class="flex items-start gap-2"> <span class="text-primary">•</span> <span>Chat interface with streaming responses</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">•</span> <span>Real-time sentiment analysis</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">•</span> <span>Crisis detection with configurable sensitivity</span> </li> <li class="flex items-start gap-2"> <span class="text-primary">•</span> <span>Toggle to view analysis results</span> </li> </ul> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/demo/chat.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/chat.astro";
const $$url = "/demo/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
