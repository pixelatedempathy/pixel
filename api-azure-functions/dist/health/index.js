"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const httpTrigger = async function (context, _req) {
    const startTime = Date.now();
    try {
        const healthCheck = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            version: process.env['npm_package_version'] || '1.0.0',
            services: {},
        };
        // Check Azure OpenAI service
        if (process.env['AZURE_OPENAI_API_KEY'] &&
            process.env['AZURE_OPENAI_ENDPOINT']) {
            try {
                const azureOpenAIStart = Date.now();
                const response = await fetch(`${process.env['AZURE_OPENAI_ENDPOINT']}/openai/models?api-version=${process.env['AZURE_OPENAI_API_VERSION'] || '2024-02-01'}`, {
                    method: 'GET',
                    headers: {
                        'api-key': process.env['AZURE_OPENAI_API_KEY'],
                    },
                    signal: AbortSignal.timeout(5000), // 5 second timeout
                });
                healthCheck.services['azureOpenAI'] = {
                    status: response.ok ? 'healthy' : 'unhealthy',
                    responseTime: Date.now() - azureOpenAIStart,
                };
                if (!response.ok) {
                    healthCheck.status = 'degraded';
                }
            }
            catch (error) {
                healthCheck.services['azureOpenAI'] = {
                    status: 'unhealthy',
                    error: error instanceof Error ? error.message : 'Unknown error',
                };
                healthCheck.status = 'degraded';
            }
        }
        else {
            healthCheck.services['azureOpenAI'] = {
                status: 'degraded',
                error: 'Azure OpenAI not configured',
            };
        }
        // Check Supabase connection
        if (process.env['SUPABASE_URL'] && process.env['SUPABASE_ANON_KEY']) {
            try {
                const supabaseStart = Date.now();
                const response = await fetch(`${process.env['SUPABASE_URL']}/rest/v1/`, {
                    method: 'GET',
                    headers: {
                        apikey: process.env['SUPABASE_ANON_KEY'],
                        Authorization: `Bearer ${process.env['SUPABASE_ANON_KEY']}`,
                    },
                    signal: AbortSignal.timeout(5000),
                });
                healthCheck.services['supabase'] = {
                    status: response.ok ? 'healthy' : 'unhealthy',
                    responseTime: Date.now() - supabaseStart,
                };
                if (!response.ok) {
                    healthCheck.status = 'degraded';
                }
            }
            catch (error) {
                healthCheck.services['supabase'] = {
                    status: 'unhealthy',
                    error: error instanceof Error ? error.message : 'Unknown error',
                };
                healthCheck.status = 'degraded';
            }
        }
        else {
            healthCheck.services['supabase'] = {
                status: 'degraded',
                error: 'Supabase not configured',
            };
        }
        // Check Azure Storage
        if (process.env['AZURE_STORAGE_CONNECTION_STRING']) {
            try {
                const { BlobServiceClient } = await Promise.resolve().then(() => __importStar(require('@azure/storage-blob')));
                const storageStart = Date.now();
                // Removed _properties declaration as it was unused
                healthCheck.services['azureStorage'] = {
                    status: 'healthy',
                    responseTime: Date.now() - storageStart,
                };
            }
            catch (error) {
                healthCheck.services['azureStorage'] = {
                    status: 'unhealthy',
                    error: error instanceof Error ? error.message : 'Unknown error',
                };
                healthCheck.status = 'degraded';
            }
        }
        else {
            healthCheck.services['azureStorage'] = {
                status: 'degraded',
                error: 'Azure Storage not configured',
            };
        }
        // Add overall response time
        const totalResponseTime = Date.now() - startTime;
        context.res = {
            status: healthCheck.status === 'healthy'
                ? 200
                : healthCheck.status === 'degraded'
                    ? 207
                    : 503,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'X-Response-Time': `${totalResponseTime}ms`,
            },
            body: {
                ...healthCheck,
                responseTime: totalResponseTime,
            },
        };
    }
    catch (error) {
        context.log.error('Health check failed:', error);
        context.res = {
            status: 503,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
            body: {
                status: 'unhealthy',
                timestamp: new Date().toISOString(),
                error: error instanceof Error ? error.message : 'Unknown error',
                responseTime: Date.now() - startTime,
            },
        };
    }
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map