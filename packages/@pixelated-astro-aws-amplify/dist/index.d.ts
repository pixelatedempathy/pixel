import type { AstroIntegration } from 'astro';
interface Options {
    mode?: 'middleware' | 'standalone';
}
export default function createIntegration(options?: Options): AstroIntegration;