;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc54180f-2a5e-4d5c-8efc-b8c86decd8af",e._sentryDebugIdIdentifier="sentry-dbid-dc54180f-2a5e-4d5c-8efc-b8c86decd8af")}catch(e){}}();import z__default from 'zod';
import './astro/server_DBAAVvAL.mjs';

const ChatMessageSchema = z__default.object({
  role: z__default.enum(["system", "user", "assistant"]),
  content: z__default.string().min(1).max(32768).refine(
    (value) => {
      const xssPatterns = [
        /<script\b[^<]*(?:<[^<]*)*<\/script>/i,
        // Script tags
        /javascript:/i,
        // JavaScript protocol
        /data:[^,]*base64/i,
        // Data URIs with base64
        /on\w+=/i,
        // Event handlers
        /eval\(/i
        // Eval calls
      ];
      return !xssPatterns.some((pattern) => pattern.test(value));
    },
    {
      message: "Potential security issue detected in content"
    }
  ).refine(
    (value) => {
      const sqlPatterns = [
        /\b(select|insert|update|delete|drop|alter|create|truncate)\b.*\b(from|into|table|database|values)\b/i,
        /\bunion\b.*\bselect\b/i,
        /--.*$/m,
        /;$/,
        /\/\*.*\*\//
      ];
      return !sqlPatterns.some((pattern) => pattern.test(value));
    },
    {
      message: "Potential injection attack detected in content"
    }
  ),
  name: z__default.string().optional()
});
const CompletionRequestSchema = z__default.object({
  model: z__default.string().min(1).default("togethercomputer/llama-3-8b-instruct"),
  messages: z__default.array(ChatMessageSchema).min(1).max(100),
  temperature: z__default.number().min(0).max(2).default(0.7),
  max_tokens: z__default.number().min(1).max(4096).default(1024),
  stream: z__default.boolean().default(false),
  presence_penalty: z__default.number().min(-2).max(2).default(0).optional(),
  frequency_penalty: z__default.number().min(-2).max(2).default(0).optional(),
  top_p: z__default.number().min(0).max(1).default(1).optional()
});
const UsageStatsRequestSchema = z__default.object({
  period: z__default.enum(["daily", "weekly", "monthly"]).default("daily"),
  allUsers: z__default.boolean().default(false),
  startDate: z__default.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  endDate: z__default.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
});
z__default.object({
  text: z__default.string().min(1).max(5e3),
  model: z__default.string().default("togethercomputer/llama-3-8b-instruct").optional(),
  includeReasoning: z__default.boolean().default(false).optional()
});
z__default.object({
  text: z__default.string().min(1).max(5e3),
  userId: z__default.string().optional(),
  threshold: z__default.number().min(0).max(1).default(0.7).optional(),
  categories: z__default.array(z__default.string()).optional()
});
z__default.object({
  messages: z__default.array(ChatMessageSchema).min(1).max(100),
  userId: z__default.string().optional(),
  model: z__default.string().default("togethercomputer/llama-3-8b-instruct").optional(),
  includeAnalysis: z__default.boolean().default(false).optional(),
  safety: z__default.object({
    enabled: z__default.boolean().default(true),
    threshold: z__default.number().min(0).max(1).default(0.7)
  }).optional()
});
z__default.object({
  messages: z__default.array(ChatMessageSchema).min(2).max(100),
  userId: z__default.string().optional(),
  interventionTypes: z__default.array(z__default.string()).optional(),
  includeTextAnalysis: z__default.boolean().default(false).optional()
});

export { CompletionRequestSchema as C, UsageStatsRequestSchema as U };
