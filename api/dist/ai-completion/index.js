"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTrigger = httpTrigger;
const functions_1 = require("@azure/functions");
const zod_1 = require("zod");
// Request validation schema
const CompletionRequestSchema = zod_1.z.object({
    messages: zod_1.z.array(zod_1.z.object({
        role: zod_1.z.enum(['user', 'assistant', 'system']),
        content: zod_1.z.string(),
    })),
    model: zod_1.z.string().optional(),
    temperature: zod_1.z.number().min(0).max(2).optional(),
    max_tokens: zod_1.z.number().min(1).max(4096).optional(),
    provider: zod_1.z.enum(['azure-openai', 'openai', 'anthropic']).optional(),
});
async function httpTrigger(request, context) {
    try {
        // Validate request body
        const body = await request.json();
        const validationResult = CompletionRequestSchema.safeParse(body);
        if (!validationResult.success) {
            return {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
                jsonBody: {
                    error: 'Invalid request body',
                    details: validationResult.error.errors,
                },
            };
        }
        const { messages, model, temperature, max_tokens, provider } = validationResult.data;
        const selectedProvider = provider || 'azure-openai';
        // Check if Azure OpenAI is configured
        if (selectedProvider === 'azure-openai') {
            if (!process.env['AZURE_OPENAI_API_KEY'] ||
                !process.env['AZURE_OPENAI_ENDPOINT']) {
                return {
                    status: 503,
                    headers: { 'Content-Type': 'application/json' },
                    jsonBody: {
                        error: 'Azure OpenAI service not configured',
                    },
                };
            }
            // Make request to Azure OpenAI
            const azureResponse = await callAzureOpenAI(messages, {
                model: model || process.env['AZURE_OPENAI_DEPLOYMENT_NAME'] || 'gpt-4',
                temperature: temperature || 0.7,
                max_tokens: max_tokens || 1024,
            });
            return {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                jsonBody: azureResponse,
            };
        }
        else {
            return {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
                jsonBody: {
                    error: `Provider ${selectedProvider} not implemented in Azure Functions`,
                },
            };
        }
    }
    catch (error) {
        context.error('AI completion error:', error);
        return {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            jsonBody: {
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
        };
    }
}
async function callAzureOpenAI(messages, options) {
    const endpoint = process.env['AZURE_OPENAI_ENDPOINT'];
    const apiKey = process.env['AZURE_OPENAI_API_KEY'];
    const apiVersion = process.env['AZURE_OPENAI_API_VERSION'] || '2024-02-01';
    const deploymentName = options.model;
    const url = `${endpoint}/openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
        },
        body: JSON.stringify({
            messages,
            temperature: options.temperature,
            max_tokens: options.max_tokens,
            stream: false,
        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Azure OpenAI API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    return await response.json();
}
functions_1.app.http('ai-completion', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: httpTrigger,
});
//# sourceMappingURL=index.js.map