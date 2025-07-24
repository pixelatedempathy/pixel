;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="14e3a95e-7a0f-4263-8c6f-9288f6fd37da",e._sentryDebugIdIdentifier="sentry-dbid-14e3a95e-7a0f-4263-8c6f-9288f6fd37da")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_0J2m2aGD.mjs';
import './astro/server_Ck5BzePu.mjs';

const appLogger = createBuildSafeLogger("app");
class TogetherAIError extends Error {
  constructor(message, status, code, retryable = false) {
    super(message);
    this.status = status;
    this.code = code;
    this.retryable = retryable;
    this.name = "TogetherAIError";
  }
}
class RateLimitManager {
  rateLimitInfo;
  constructor(config) {
    this.rateLimitInfo = {
      requestsPerMinute: config.requestsPerMinute,
      tokensPerMinute: config.tokensPerMinute,
      requestTimestamps: [],
      tokenUsageHistory: []
    };
  }
  async checkRateLimit(estimatedTokens) {
    const now = Date.now();
    const oneMinute = 6e4;
    this.pruneOldEntries(now, oneMinute);
    const currentRequestCount = this.rateLimitInfo.requestTimestamps.length;
    const currentTokenCount = this.rateLimitInfo.tokenUsageHistory.reduce(
      (sum, entry) => sum + entry.tokens,
      0
    );
    if (currentRequestCount >= this.rateLimitInfo.requestsPerMinute || currentTokenCount + estimatedTokens >= this.rateLimitInfo.tokensPerMinute) {
      const waitTime = this.calculateWaitTime(now, oneMinute, estimatedTokens);
      if (waitTime > 0) {
        appLogger.warn("Rate limit reached, waiting", {
          waitTime,
          currentRequestCount,
          currentTokenCount,
          estimatedTokens
        });
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        this.pruneOldEntries(Date.now(), oneMinute);
      }
    }
    this.rateLimitInfo.requestTimestamps.push(now);
    this.rateLimitInfo.tokenUsageHistory.push({
      timestamp: now,
      tokens: estimatedTokens
    });
  }
  pruneOldEntries(now, windowMs) {
    const cutoff = now - windowMs;
    this.rateLimitInfo.requestTimestamps = this.rateLimitInfo.requestTimestamps.filter(
      (timestamp) => timestamp > cutoff
    );
    this.rateLimitInfo.tokenUsageHistory = this.rateLimitInfo.tokenUsageHistory.filter(
      (entry) => entry.timestamp > cutoff
    );
  }
  calculateWaitTime(now, windowMs, estimatedTokens) {
    const oldestRequestTime = this.rateLimitInfo.requestTimestamps[0];
    const oldestTokenTime = this.rateLimitInfo.tokenUsageHistory[0]?.timestamp;
    let requestWaitTime = 0;
    let tokenWaitTime = 0;
    if (this.rateLimitInfo.requestTimestamps.length >= this.rateLimitInfo.requestsPerMinute && oldestRequestTime) {
      requestWaitTime = oldestRequestTime + windowMs - now;
    }
    const currentTokenCount = this.rateLimitInfo.tokenUsageHistory.reduce(
      (sum, entry) => sum + entry.tokens,
      0
    );
    if (currentTokenCount + estimatedTokens >= this.rateLimitInfo.tokensPerMinute && oldestTokenTime) {
      tokenWaitTime = oldestTokenTime + windowMs - now;
    }
    return Math.max(0, requestWaitTime, tokenWaitTime);
  }
}
async function exponentialBackoffRetry(fn, config) {
  let lastError;
  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt === config.maxRetries) {
        break;
      }
      if (error instanceof TogetherAIError && !error.retryable) {
        throw error;
      }
      const baseDelay = Math.min(
        config.baseDelayMs * Math.pow(config.backoffMultiplier, attempt),
        config.maxDelayMs
      );
      const jitter = Math.random() * config.jitterMaxMs;
      const delay = baseDelay + jitter;
      appLogger.warn("Request failed, retrying", {
        attempt: attempt + 1,
        maxRetries: config.maxRetries,
        delay,
        error: error instanceof Error ? error.message : String(error)
      });
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}
function estimateTokenCount(messages) {
  const totalChars = messages.reduce((acc, msg) => acc + msg.content.length, 0);
  return Math.ceil(totalChars / 4);
}
function createTogetherAIService(config) {
  const baseUrl = config.togetherBaseUrl || "https://api.together.xyz";
  const apiKey = config.togetherApiKey;
  const timeoutMs = config.timeoutMs || 3e4;
  const rateLimitRpm = config.rateLimitRpm || 60;
  const retryConfig = {
    maxRetries: config.maxRetries || 3,
    baseDelayMs: 1e3,
    maxDelayMs: 3e4,
    backoffMultiplier: 2,
    jitterMaxMs: 500
  };
  const rateLimitManager = new RateLimitManager({
    requestsPerMinute: rateLimitRpm,
    tokensPerMinute: 15e4
    // Default Together AI limit
  });
  const createAbortController = (timeoutMs2) => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeoutMs2);
    return controller;
  };
  const handleAPIError = (response, data) => {
    const isRetryable = response.status >= 500 || response.status === 429;
    let errorMessage = `Together AI API error: ${response.status} ${response.statusText}`;
    let errorCode = response.status.toString();
    if (data && typeof data === "object" && "error" in data) {
      const errorData = data;
      errorMessage = `Together AI API error: ${errorData.error.message || errorData.error}`;
      errorCode = errorData.error.code || errorCode;
    }
    throw new TogetherAIError(
      errorMessage,
      response.status,
      errorCode,
      isRetryable
    );
  };
  const makeRequest = async (url, body, stream = false) => {
    const messages = body["messages"];
    const estimatedTokens = estimateTokenCount(messages || []);
    await rateLimitManager.checkRateLimit(estimatedTokens);
    const controller = createAbortController(timeoutMs);
    const requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "User-Agent": "Together-AI-Client/1.0"
      },
      body: JSON.stringify({ ...body, stream }),
      signal: controller.signal
    };
    return exponentialBackoffRetry(async () => {
      const response = await fetch(url, requestInit);
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
        }
        handleAPIError(response, errorData);
      }
      if (stream) {
        return response;
      }
      const data = await response.json();
      return data;
    }, retryConfig);
  };
  return {
    async generateCompletion(messages, options) {
      try {
        if (!apiKey) {
          throw new TogetherAIError("Together AI API key is not configured");
        }
        const requestBody = {
          model: options?.model || "mistralai/Mixtral-8x7B-Instruct-v0.2",
          messages,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 1024,
          stop: options?.stop
        };
        const data = await makeRequest(
          `${baseUrl}/v1/chat/completions`,
          requestBody
        );
        return {
          id: data.id || `together-${Date.now()}`,
          created: data.created || Date.now(),
          model: data.model || requestBody.model,
          choices: data.choices?.map((choice) => ({
            message: {
              role: choice.message.role,
              content: choice.message.content
            },
            finishReason: choice.finish_reason === "stop" ? "stop" : choice.finish_reason === "length" ? "length" : "stop"
          })) || [
            {
              message: {
                role: "assistant",
                content: "",
                name: "assistant"
              },
              finishReason: "stop"
            }
          ],
          usage: {
            promptTokens: data.usage?.prompt_tokens || 0,
            completionTokens: data.usage?.completion_tokens || 0,
            totalTokens: data.usage?.total_tokens || 0
          },
          provider: "together",
          content: data.choices?.[0]?.message?.content || ""
        };
      } catch (error) {
        if (error instanceof TogetherAIError) {
          throw error;
        }
        appLogger.error("Error in Together AI completion:", {
          error: error instanceof Error ? { message: error.message, stack: error.stack } : error
        });
        throw new TogetherAIError(
          `Together AI service error: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    },
    async createChatCompletion(messages, options) {
      const result = await this.generateCompletion(messages, options);
      if ("id" in result) {
        return result;
      }
      return {
        id: `together-${Date.now()}`,
        created: Date.now(),
        model: options?.model || "mistralai/Mixtral-8x7B-Instruct-v0.2",
        choices: [
          {
            message: {
              role: "assistant",
              content: result.content
            },
            finishReason: "stop"
          }
        ],
        usage: result.usage || {
          promptTokens: 0,
          completionTokens: 0,
          totalTokens: 0
        },
        provider: "together",
        content: result.content
      };
    },
    async createStreamingChatCompletion(messages, options) {
      try {
        if (!apiKey) {
          throw new TogetherAIError("Together AI API key is not configured");
        }
        const requestBody = {
          model: options?.model || "mistralai/Mixtral-8x7B-Instruct-v0.2",
          messages,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 1024,
          stop: options?.stop
        };
        const response = await makeRequest(
          `${baseUrl}/v1/chat/completions`,
          requestBody,
          true
        );
        if (!response.body) {
          throw new TogetherAIError("No response body received for streaming");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const streamGenerator = async function* () {
          let buffer = "";
          let requestId = `together-stream-${Date.now()}`;
          const { model } = requestBody;
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                break;
              }
              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split("\n");
              buffer = lines.pop() || "";
              for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine === "") {
                  continue;
                }
                if (trimmedLine === "data: [DONE]") {
                  return;
                }
                if (!trimmedLine.startsWith("data: ")) {
                  continue;
                }
                try {
                  const jsonData = trimmedLine.slice(6);
                  const parsed = JSON.parse(jsonData);
                  if (parsed.id) {
                    requestId = parsed.id;
                  }
                  const choice = parsed.choices?.[0];
                  if (choice?.delta?.content) {
                    const finishReason = choice.finish_reason === "stop" ? "stop" : choice.finish_reason === "length" ? "length" : void 0;
                    const chunk = {
                      id: requestId,
                      model: parsed.model || model,
                      created: parsed.created || Date.now(),
                      content: choice.delta.content,
                      done: !!choice.finish_reason,
                      ...finishReason && { finishReason }
                    };
                    yield chunk;
                  }
                  if (choice?.finish_reason) {
                    const finalFinishReason = choice.finish_reason === "stop" ? "stop" : choice.finish_reason === "length" ? "length" : "stop";
                    const finalChunk = {
                      id: requestId,
                      model: parsed.model || model,
                      created: parsed.created || Date.now(),
                      content: "",
                      done: true,
                      finishReason: finalFinishReason
                    };
                    yield finalChunk;
                    return;
                  }
                } catch (parseError) {
                  appLogger.warn("Failed to parse streaming response line", {
                    line: trimmedLine,
                    error: parseError instanceof Error ? parseError.message : String(parseError)
                  });
                }
              }
            }
          } catch (streamError) {
            appLogger.error("Error in streaming response", {
              error: streamError instanceof Error ? streamError.message : String(streamError)
            });
            throw new TogetherAIError(
              `Streaming error: ${streamError instanceof Error ? streamError.message : "Unknown error"}`
            );
          } finally {
            try {
              reader.releaseLock();
            } catch {
            }
          }
        };
        return streamGenerator();
      } catch (error) {
        if (error instanceof TogetherAIError) {
          throw error;
        }
        appLogger.error("Error in Together AI streaming completion:", {
          error: error instanceof Error ? { message: error.message, stack: error.stack } : error
        });
        throw new TogetherAIError(
          `Together AI streaming service error: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    },
    dispose() {
      appLogger.debug("Together AI service disposed");
    }
  };
}

export { createTogetherAIService as c };
