import type { SSRManifest } from 'astro';
import { App } from 'astro/app';

export function createExports(manifest: SSRManifest) {
  const app = new App(manifest);

  const handler = async (event: unknown, _context: unknown) => {
    // AWS Amplify event structure
    const amplifyEvent = event as {
      rawUrl?: string;
      rawPath?: string;
      requestContext?: {
        domainName?: string;
        http?: { method?: string };
      };
      httpMethod?: string;
      queryStringParameters?: Record<string, string | null>;
      headers?: Record<string, string>;
      body?: string;
      isBase64Encoded?: boolean;
    };
    
    const url = new URL(amplifyEvent.rawUrl || 
      `https://${amplifyEvent.requestContext?.domainName || 'localhost'}${amplifyEvent.rawPath || '/'}`);
    
    // Handle query parameters
    if (amplifyEvent.queryStringParameters) {
      for (const [key, value] of Object.entries(amplifyEvent.queryStringParameters)) {
        if (value !== null) {
          url.searchParams.set(key, value);
        }
      }
    }

    // Create request object
    const request = new Request(url, {
      method: amplifyEvent.httpMethod || amplifyEvent.requestContext?.http?.method || 'GET',
      headers: new Headers(amplifyEvent.headers || {}),
      body: amplifyEvent.body && amplifyEvent.isBase64Encoded 
        ? Buffer.from(amplifyEvent.body, 'base64').toString()
        : amplifyEvent.body || undefined,
    });

    try {
      const response = await app.render(request);
      const responseHeaders: Record<string, string> = {};
      
      // Convert Headers to plain object
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      // Handle different content types
      const contentType = response.headers.get('content-type') || 'text/html';
      let isBase64Encoded = false;
      let body: string;

      // Handle binary content
      if (contentType.includes('image/') || contentType.includes('application/octet-stream')) {
        const buffer = await response.arrayBuffer();
        body = Buffer.from(buffer).toString('base64');
        isBase64Encoded = true;
      } else {
        body = await response.text();
      }

      return {
        statusCode: response.status,
        headers: responseHeaders,
        body,
        isBase64Encoded,
      };
    } catch (error) {
      console.error('Error rendering request:', error);
      return {
        statusCode: 500,
        headers: { 'content-type': 'text/plain' },
        body: 'Internal Server Error',
        isBase64Encoded: false,
      };
    }
  };

  return { handler };
}