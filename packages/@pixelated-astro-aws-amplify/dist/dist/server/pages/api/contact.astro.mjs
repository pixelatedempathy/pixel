;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75c71d74-d6d9-47db-8ce6-99e1133a7e3b",e._sentryDebugIdIdentifier="sentry-dbid-75c71d74-d6d9-47db-8ce6-99e1133a7e3b")}catch(e){}}();import { config } from '../../chunks/env.config_Cpl4OEkp.mjs';
import { r as redis } from '../../chunks/index_DO_z2ZaY.mjs';
import { c as createBuildSafeLogger } from '../../chunks/build-safe-logger_tzJzO24i.mjs';
import { Resend } from 'resend';
import { z } from 'zod';
import '../../chunks/astro/server_t-wqd6mp.mjs';
import { readFile } from 'fs/promises';
import { join } from 'path';
export { renderers } from '../../renderers.mjs';

const logger$2 = createBuildSafeLogger("EmailService");
const EmailTemplateSchema = z.object({
  alias: z.string(),
  subject: z.string(),
  htmlBody: z.string(),
  textBody: z.string().optional(),
  from: z.string().email(),
  replyTo: z.string().email().optional()
});
const EmailDataSchema = z.object({
  to: z.string().email(),
  templateAlias: z.string(),
  templateModel: z.record(z.unknown()),
  attachments: z.array(
    z.object({
      name: z.string(),
      content: z.string(),
      contentType: z.string()
    })
  ).optional(),
  metadata: z.record(z.string()).optional(),
  messageStream: z.string().optional()
});
const EmailQueueItemSchema = z.object({
  id: z.string(),
  data: EmailDataSchema,
  attempts: z.number(),
  lastAttempt: z.number().nullable(),
  error: z.string().nullable()
});
class EmailService {
  resend;
  queueKey = "email:queue";
  processingKey = "email:processing";
  maxAttempts = 3;
  retryDelays = [60, 300, 900];
  // 1min, 5min, 15min
  templates = /* @__PURE__ */ new Map();
  isShuttingDown = false;
  constructor() {
    const apiKey = config.email.resendApiKey();
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured in environment variables");
    }
    this.resend = new Resend(apiKey);
  }
  /**
   * Queue an email for sending
   */
  async queueEmail(data) {
    EmailDataSchema.parse(data);
    const queueItem = {
      id: crypto.randomUUID(),
      data,
      attempts: 0,
      lastAttempt: null,
      error: null
    };
    await redis.lpush(this.queueKey, JSON.stringify(queueItem));
    logger$2.info("Email queued", {
      id: queueItem.id,
      to: data.to,
      templateAlias: data.templateAlias
    });
    return queueItem.id;
  }
  /**
   * Process the email queue
   */
  async processQueue() {
    while (true) {
      const item = await redis.rpoplpush(this.queueKey, this.processingKey);
      if (!item) {
        break;
      }
      const queueItem = EmailQueueItemSchema.parse(JSON.parse(item));
      try {
        if (queueItem.lastAttempt) {
          const delay = this.retryDelays[queueItem.attempts - 1] ?? this.retryDelays[this.retryDelays.length - 1];
          if (delay === void 0) {
            throw new Error("Failed to determine retry delay");
          }
          const nextAttempt = queueItem.lastAttempt + delay * 1e3;
          if (Date.now() < nextAttempt) {
            await redis.lpush(this.queueKey, item);
            await redis.lrem(this.processingKey, 1, item);
            continue;
          }
        }
        const template = this.templates.get(queueItem.data.templateAlias);
        if (!template) {
          throw new Error(`Template ${queueItem.data.templateAlias} not found`);
        }
        let html = template.htmlBody;
        let text = template.textBody;
        for (const [key, value] of Object.entries(
          queueItem.data.templateModel
        )) {
          const regex = new RegExp(`{{${key}}}`, "g");
          html = html.replace(regex, String(value));
          if (text) {
            text = text.replace(regex, String(value));
          }
        }
        const emailOptions = {
          from: template.from,
          to: queueItem.data.to,
          subject: template.subject,
          html,
          // Ensure text is either a string or omitted (not undefined)
          ...text && { text },
          // Only include replyTo if it exists
          ...template.replyTo && { replyTo: template.replyTo },
          // Add attachments if present
          ...queueItem.data.attachments?.length && {
            attachments: queueItem.data.attachments.map((att) => ({
              filename: att.name,
              content: att.content,
              content_type: att.contentType
            }))
          }
        };
        const { data, error } = await this.resend.emails.send(emailOptions);
        if (error) {
          throw error;
        }
        await redis.lrem(this.processingKey, 1, item);
        logger$2.info("Email sent successfully", {
          id: queueItem.id,
          to: queueItem.data.to,
          templateAlias: queueItem.data.templateAlias,
          attempts: queueItem.attempts + 1,
          resendId: data?.id
        });
      } catch (error) {
        queueItem.attempts++;
        queueItem.lastAttempt = Date.now();
        queueItem.error = error instanceof Error ? error.message : String(error);
        if (queueItem.attempts >= this.maxAttempts) {
          logger$2.error("Email sending failed permanently", {
            id: queueItem.id,
            to: queueItem.data.to,
            templateAlias: queueItem.data.templateAlias,
            error: queueItem.error,
            attempts: queueItem.attempts
          });
          await redis.lrem(this.processingKey, 1, item);
        } else {
          await redis.lpush(this.queueKey, JSON.stringify(queueItem));
          await redis.lrem(this.processingKey, 1, item);
          logger$2.warn("Email sending failed, will retry", {
            id: queueItem.id,
            to: queueItem.data.to,
            templateAlias: queueItem.data.templateAlias,
            error: queueItem.error,
            attempts: queueItem.attempts
          });
        }
      }
    }
  }
  /**
   * Create or update an email template
   */
  async upsertTemplate(template) {
    EmailTemplateSchema.parse(template);
    this.templates.set(template.alias, template);
    logger$2.info("Email template updated", {
      alias: template.alias
    });
  }
  /**
   * Get queue statistics
   */
  async getQueueStats() {
    const [queueLength, processingLength] = await Promise.all([
      redis.llen(this.queueKey),
      redis.llen(this.processingKey)
    ]);
    return {
      queued: queueLength,
      processing: processingLength
    };
  }
  /**
   * Start queue processing
   */
  async startProcessing(interval = 1e3) {
    while (!this.isShuttingDown) {
      await this.processQueue();
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
}

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must not exceed 100 characters").regex(/^[a-zA-Z\s\-']+$/, "Name contains invalid characters"),
  email: z.string().email("Invalid email format").max(100, "Email must not exceed 100 characters").toLowerCase(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200, "Subject must not exceed 200 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2e3, "Message must not exceed 2000 characters")
});
class ContactService {
  emailService;
  templates = /* @__PURE__ */ new Map();
  constructor() {
    this.emailService = new EmailService();
    this.initializeTemplates();
  }
  async initializeTemplates() {
    try {
      await this.loadTemplate("contact-form");
      await this.loadTemplate("contact-confirmation");
      await this.emailService.upsertTemplate({
        alias: "contact-form-notification",
        subject: "New Contact Form Submission - {{subject}}",
        htmlBody: this.templates.get("contact-form")?.html || "",
        textBody: this.templates.get("contact-form")?.text || "",
        from: "noreply@pixelatedempathy.com",
        replyTo: "{{email}}"
        // Reply to the user who submitted the form
      });
      await this.emailService.upsertTemplate({
        alias: "contact-confirmation",
        subject: "Thank you for contacting Pixelated Empathy",
        htmlBody: this.templates.get("contact-confirmation")?.html || "",
        textBody: this.templates.get("contact-confirmation")?.text || "",
        from: "noreply@pixelatedempathy.com",
        replyTo: "info@pixelatedempathy.com"
      });
      logger.info("Contact form email templates initialized successfully");
    } catch (error) {
      logger.error("Failed to initialize contact form templates", { error });
      throw new Error("Failed to initialize contact service");
    }
  }
  async loadTemplate(name) {
    try {
      const htmlPath = join(process.cwd(), "templates", "email", `${name}.html`);
      const html = await readFile(htmlPath, "utf-8");
      const text = this.htmlToText(html);
      this.templates.set(name, { html, text });
    } catch (error) {
      logger.error(`Failed to load template: ${name}`, { error });
      throw error;
    }
  }
  htmlToText(html) {
    return html.replace(/<style[^>]*>.*?<\/style>/gis, "").replace(/<script[^>]*>.*?<\/script>/gis, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').trim();
  }
  /**
   * Submit a contact form with validation and email notifications
   */
  async submitContactForm(formData, context) {
    try {
      const validatedData = ContactFormSchema.parse(formData);
      await this.performSecurityChecks(validatedData, context);
      const submissionId = crypto.randomUUID();
      const templateData = {
        ...validatedData,
        ...context,
        submissionId,
        timestamp: new Date(context.timestamp).toLocaleString("en-US", {
          timeZone: "UTC",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short"
        })
      };
      await this.emailService.queueEmail({
        to: "info@pixelatedempathy.com",
        templateAlias: "contact-form-notification",
        templateModel: templateData,
        metadata: {
          submissionId,
          type: "contact-form-notification",
          userEmail: validatedData.email
        }
      });
      await this.emailService.queueEmail({
        to: validatedData.email,
        templateAlias: "contact-confirmation",
        templateModel: templateData,
        metadata: {
          submissionId,
          type: "contact-confirmation"
        }
      });
      logger.info("Contact form submitted successfully", {
        submissionId,
        email: validatedData.email,
        subject: validatedData.subject,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent
      });
      return {
        success: true,
        message: "Your message has been sent successfully. You should receive a confirmation email shortly.",
        submissionId
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = error.errors[0];
        logger.warn("Contact form validation failed", {
          error: validationError,
          formData: { ...formData, message: "[REDACTED]" },
          context
        });
        return {
          success: false,
          message: validationError.message
        };
      }
      if (error instanceof Error && error.message.startsWith("SECURITY:")) {
        logger.warn("Contact form security check failed", {
          error: error.message,
          context
        });
        return {
          success: false,
          message: "Your submission was blocked for security reasons. Please try again later."
        };
      }
      logger.error("Contact form submission failed", {
        error,
        formData: { ...formData, message: "[REDACTED]" },
        context
      });
      return {
        success: false,
        message: "An error occurred while sending your message. Please try again later."
      };
    }
  }
  /**
   * Perform security checks on form submission
   */
  async performSecurityChecks(data, context) {
    const spamPatterns = [
      /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
      /\b(click here|visit now|buy now|limited time)\b/i,
      /\$\d+|\d+\$|money|cash|free|urgent/i
    ];
    const fullText = `${data.name} ${data.subject} ${data.message}`.toLowerCase();
    for (const pattern of spamPatterns) {
      if (pattern.test(fullText)) {
        throw new Error("SECURITY: Potential spam content detected");
      }
    }
    if (data.message.includes("http://") || data.message.includes("https://")) {
      const urlCount = (data.message.match(/https?:\/\/[^\s]+/g) || []).length;
      if (urlCount > 2) {
        throw new Error("SECURITY: Too many URLs in message");
      }
    }
    const words = data.message.toLowerCase().split(/\s+/);
    const wordCounts = /* @__PURE__ */ new Map();
    for (const word of words) {
      if (word.length > 3) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
      }
    }
    for (const [, count] of wordCounts) {
      if (count > 5) {
        throw new Error("SECURITY: Excessive word repetition detected");
      }
    }
    const uniqueWords = new Set(words.filter((w) => w.length > 2));
    const uniqueRatio = uniqueWords.size / words.length;
    if (uniqueRatio < 0.3 && words.length > 20) {
      throw new Error("SECURITY: Low content diversity detected");
    }
    logger.debug("Security checks passed for contact form submission", {
      email: data.email,
      ipAddress: context.ipAddress
    });
  }
  /**
   * Process queued contact form emails
   */
  async processQueue() {
    await this.emailService.processQueue();
  }
  /**
   * Get queue statistics
   */
  async getQueueStats() {
    return await this.emailService.getQueueStats();
  }
}

const logger$1 = createBuildSafeLogger("api/contact");
const contactService = new ContactService();
function getClientIP(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = (typeof forwardedFor === "string" ? forwardedFor : "").split(",")[0]?.trim?.() || "";
    logger$1.debug("Extracted IP from x-forwarded-for", { forwardedFor, ip });
    return ip;
  } else {
    logger$1.debug("No x-forwarded-for header present", { forwardedFor });
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    logger$1.debug("Extracted IP from x-real-ip", { realIP });
    return realIP;
  }
  const remoteAddr = request.headers.get("x-remote-addr");
  if (remoteAddr) {
    logger$1.debug("Extracted IP from x-remote-addr", { remoteAddr });
    return remoteAddr;
  }
  logger$1.debug("Falling back to localhost IP", { fallback: "127.0.0.1" });
  return "127.0.0.1";
}
const POST = async ({ request }) => {
  const startTime = Date.now();
  try {
    let formData;
    try {
      formData = await request.json();
    } catch (error) {
      logger$1.warn("Invalid JSON in contact form request", {
        error: error instanceof Error ? error.message : "Unknown error",
        userAgent: request.headers.get("user-agent"),
        ip: getClientIP(request)
      });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request format. Please check your data and try again."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const requiredFields = ["name", "email", "subject", "message"];
    for (const field of requiredFields) {
      if (!formData[field] || typeof formData[field] !== "string" || !formData[field].trim()) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `Missing or invalid field: ${field}`
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    const contactFormData = {
      name: formData["name"],
      email: formData["email"],
      subject: formData["subject"],
      message: formData["message"]
    };
    const submissionContext = {
      ipAddress: getClientIP(request),
      userAgent: request.headers.get("user-agent") || "Unknown",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const result = await contactService.submitContactForm(
      contactFormData,
      submissionContext
    );
    const duration = Date.now() - startTime;
    logger$1.info("Contact form submission processed", {
      success: result.success,
      submissionId: result.submissionId,
      email: contactFormData.email,
      ipAddress: submissionContext.ipAddress,
      duration: `${duration}ms`
    });
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    const duration = Date.now() - startTime;
    logger$1.error("Contact form submission failed with unexpected error", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : void 0,
      userAgent: request.headers.get("user-agent"),
      ip: getClientIP(request),
      duration: `${duration}ms`
    });
    return new Response(
      JSON.stringify({
        success: false,
        message: "An unexpected error occurred. Please try again later or contact support if the problem persists."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const OPTIONS = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
