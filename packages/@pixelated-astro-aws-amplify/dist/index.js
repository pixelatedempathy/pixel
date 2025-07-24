function getAdapter(_options = {}) {
    return {
        name: '@pixelated/astro-aws-amplify',
        serverEntrypoint: '@pixelated/astro-aws-amplify/server',
        exports: ['handler'],
        supportedAstroFeatures: {
            hybridOutput: 'stable',
            staticOutput: 'stable',
            serverOutput: 'stable',
        },
    };
}
export default function createIntegration(options = {}) {
    return {
        name: '@pixelated/astro-aws-amplify',
        hooks: {
            'astro:config:setup': ({ updateConfig }) => {
                updateConfig({
                    build: {
                        client: new URL('./dist/client/', import.meta.url),
                        server: new URL('./dist/server/', import.meta.url),
                    },
                    vite: {
                        define: {
                            'process.env.ASTRO_ADAPTER': JSON.stringify('@pixelated/astro-aws-amplify'),
                        },
                    },
                });
            },
            'astro:config:done': ({ setAdapter, config }) => {
                setAdapter(getAdapter(options));
                if (config.output === 'static') {
                    console.warn('[@pixelated/astro-aws-amplify] `output: "static"` is not supported by this adapter. Use `output: "server"` or `output: "hybrid"` instead.');
                }
            },
        },
    };
}
