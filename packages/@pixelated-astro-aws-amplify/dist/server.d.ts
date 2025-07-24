import type { SSRManifest } from 'astro';
export declare function createExports(manifest: SSRManifest): {
    handler: (event: unknown, _context: unknown) => Promise<{
        statusCode: number;
        headers: Record<string, string>;
        body: string;
        isBase64Encoded: boolean;
    }>;
};
