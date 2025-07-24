import { App } from 'astro/app';
export function createExports(manifest) {
    const app = new App(manifest);
    const handler = async (event, _context) => {
        // AWS Amplify event structure
        const amplifyEvent = event;
        const url = new URL(amplifyEvent.rawUrl ||
            (amplifyEvent.requestContext?.domainName || 'localhost') +
                (amplifyEvent.rawPath || '/'));
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
            const responseHeaders = {};
            // Convert Headers to plain object
            response.headers.forEach((value, key) => {
                responseHeaders[key] = value;
            });
            // Handle different content types
            const contentType = response.headers.get('content-type') || 'text/html';
            let body = await response.text();
            let isBase64Encoded = false;
            // Handle binary content
            if (contentType.includes('image/') || contentType.includes('application/octet-stream')) {
                const buffer = await response.arrayBuffer();
                body = Buffer.from(buffer).toString('base64');
                isBase64Encoded = true;
            }
            return {
                statusCode: response.status,
                headers: responseHeaders,
                body,
                isBase64Encoded,
            };
        }
        catch (error) {
            console.error('SSR Error:', error);
            return {
                statusCode: 500,
                headers: { 'content-type': 'text/html' },
                body: '<!DOCTYPE html><html><body><h1>Internal Server Error</h1></body></html>',
                isBase64Encoded: false,
            };
        }
    };
    return { handler };
}
