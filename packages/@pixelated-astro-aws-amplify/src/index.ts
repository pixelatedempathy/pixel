import type { AstroAdapter, AstroIntegration } from 'astro';

interface Options {
  mode?: 'middleware' | 'standalone';
}

function getAdapter(_options: Options = {}): AstroAdapter {
  return {
    name: '@pixelated/astro-aws-amplify',
    serverEntrypoint: '@pixelated/astro-aws-amplify/server',
    exports: ['handler'],
    supportedAstroFeatures: {
      hybridOutput: 'stable',
      staticOutput: 'unsupported',
      serverOutput: 'stable',
    },
  };
}

export default function createIntegration(options: Options = {}): AstroIntegration {
  return {
    name: '@pixelated/astro-aws-amplify',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
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
          console.warn(
            '[@pixelated/astro-aws-amplify] `output: "static"` is not supported by this adapter. Use `output: "server"` or `output: "hybrid"` instead.'
          );
        }
      },
    },
  };
}
