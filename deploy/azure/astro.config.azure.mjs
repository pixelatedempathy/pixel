import path from 'node:path'
import process from 'node:process'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import UnoCSS from '@unocss/astro'
import { defineConfig, passthroughImageService } from 'astro/config'
import flexsearchIntegration from './src/integrations/search.js'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import flexsearchSSRPlugin from './src/plugins/vite-plugin-flexsearch-ssr'
import sentry from '@sentry/astro'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import node from '@astrojs/node'

// Validate Azure configuration for production deployments only (skip during builds)
try {
  if (typeof process !== 'undefined' && process.env) {
    const isProduction = process.env.NODE_ENV === 'production'
    const isAzurePipeline = process.env.SYSTEM_TEAMFOUNDATIONCOLLECTIONURI || process.env.BUILD_BUILDID
    const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
    const isCIEnvironment = process.env.CI === 'true' || isGitHubActions || isAzurePipeline
    const isBuildProcess = process.argv.includes('build') || process.env.npm_lifecycle_event === 'build'
    
    if (isProduction && !isCIEnvironment && !isBuildProcess) {
      const { azureConfig } = await import('./src/config/azure.config.ts')
      azureConfig.validateProductionConfig()
    }
  }
} catch (error) {
  const isBuildProcess = process.argv.includes('build') || process.env.npm_lifecycle_event === 'build'
  if (process.env.NODE_ENV === 'production' && !isBuildProcess) {
    console.error('❌ Azure Configuration Error:', error.message)
    process.exit(1)
  } else {
    console.warn('⚠️  Azure Configuration Warning:', error.message)
  }
}

// Azure App Service optimized configuration
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://pixelatedempathy.com',

  // Use server output for Azure App Service
  output: 'server',

  // Azure Static Web Apps handles routing
  trailingSlash: 'ignore',

  // Build configuration optimized for Azure
  build: {
    format: 'directory',
    assets: '_astro',
    assetsPrefix: process.env.AZURE_CDN_ENDPOINT || undefined,
    inlineStylesheets: 'auto',
    concurrency: 2, // Conservative for Azure build agents
  },

  // Vite configuration for Azure deployment
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@utils': path.resolve('./src/utils'),
        '@lib': path.resolve('./src/lib'),
      },
      conditions: ['node', 'import', 'module', 'browser', 'default'],
    },

    plugins: [
      flexsearchSSRPlugin(),
      {
        name: 'disable-sentry-telemetry',
        config() {
          return {
            define: {
              'process.env.SENTRY_DISABLE_TELEMETRY': 'true'
            }
          }
        }
      },
      {
        name: 'azure-optimizations',
        resolveId(id) {
          // Block problematic modules for Azure
          if (id.includes('fsevents') || id.includes('chokidar')) {
            return { id: 'virtual:empty', external: false };
          }
          
          // Prevent Node.js modules from being resolved in client builds
          const nodeModules = [
            'fs', 'path', 'crypto', 'os', 'child_process',
            'worker_threads', 'stream', 'zlib', 'http', 'https', 'net', 'tls',
            'util', 'events', 'string_decoder', 'readline', 'inspector',
            'diagnostics_channel', 'async_hooks', 'url', 'module', 'constants', 'assert'
          ];
          
          if (nodeModules.includes(id) || id.startsWith('node:')) {
            return { id, external: true };
          }
          
          return null;
        },
        load(id) {
          if (id === 'virtual:empty') {
            return 'export default {};';
          }
        }
      }
    ],

    // Handle KaTeX font assets
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'],

    // Suppress warnings during build
    logLevel: 'warn',

    define: {
      // Azure-specific environment variables
      'process.env.AZURE_OPENAI_API_KEY': JSON.stringify(process.env.AZURE_OPENAI_API_KEY),
      'process.env.AZURE_OPENAI_ENDPOINT': JSON.stringify(process.env.AZURE_OPENAI_ENDPOINT),
      'process.env.AZURE_AD_CLIENT_ID': JSON.stringify(process.env.AZURE_AD_CLIENT_ID),
      'process.env.AZURE_AD_TENANT_ID': JSON.stringify(process.env.AZURE_AD_TENANT_ID),
    },

    build: {
      // Optimize for Azure App Service
      target: 'es2022',
      minify: 'terser', // Better compression for Azure
      sourcemap: 'hidden',
      chunkSizeWarningLimit: 2000,
      commonjsOptions: {
        ignore: ['chokidar', 'fsevents'],
        transformMixedEsModules: true,
      },
      rollupOptions: {
        external: (id) => {
          // Externalize problematic modules
          if (id.includes('fsevents') || id.includes('chokidar')) {
            return true;
          }
          
          // Always externalize Node.js built-ins
          if (id.startsWith('node:') || [
            'fs', 'path', 'crypto', 'os', 'child_process', 'worker_threads',
            'stream', 'zlib', 'http', 'https', 'net', 'tls', 'util', 'events'
          ].includes(id)) {
            return true;
          }
          
          // Externalize Azure-specific server modules
          const azureModules = [
            '@azure/storage-blob', '@azure/identity', '@azure/keyvault-secrets',
            'pdfkit', 'sharp', 'canvas', 'puppeteer', 'playwright'
          ];
          
          return azureModules.some(mod => id.includes(mod));
        },
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'vendor-react'
              }
              if (id.includes('@azure')) {
                return 'vendor-azure'
              }
              if (id.includes('@headlessui') || id.includes('@heroicons')) {
                return 'vendor-ui'
              }
              return 'vendor'
            }
          },
        },
      },
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@headlessui/react',
        '@heroicons/react/24/outline',
        '@heroicons/react/24/solid',
      ],
      exclude: [
        'msw',
        'virtual:keystatic-config',
        'chokidar', 'fsevents',
        '@azure/storage-blob', '@azure/identity', '@azure/keyvault-secrets',
        'pdfkit', 'sharp', 'canvas', 'puppeteer', 'playwright',
      ],
    },

    ssr: {
      // External dependencies for Azure Functions
      external: [
        '@azure/storage-blob',
        '@azure/identity',
        '@azure/keyvault-secrets',
        'chokidar',
        'fsevents',
      ],
    },
  },

  // Integrations
  integrations: [
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        borderRadius: '0.5rem',
      },
    }), 
    react(), 
    mdx({
      components: path.resolve('./mdx-components.js'),
    }), 
    UnoCSS({
      injectReset: true,
      mode: 'global',
      safelist: ['font-sans', 'font-mono', 'font-condensed'],
      configFile: './uno.config.ts',
    }), 
    icon({
      include: {
        lucide: [
          'calendar', 'user', 'settings', 'heart', 'brain', 'shield-check',
          'info', 'arrow-left', 'shield', 'user-plus',
        ],
      },
      svgdir: './src/icons',
    }), 
    flexsearchIntegration(), 
    markdoc(), 
    ...(process.env.SKIP_KEYSTATIC !== 'true' ? [keystatic()] : []),
    sentry({
      dsn: process.env.SENTRY_DSN,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT || "pixel-astro",
        org: process.env.SENTRY_ORG || "pixelated-empathy-dq",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
      telemetry: false,
    })
  ],

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  // Security headers (handled by staticwebapp.config.json)
  security: {
    checkOrigin: true,
  },

  // Server configuration for development
  server: {
    port: 4321,
    host: true,
  },

  // Preview configuration
  preview: {
    port: 4322,
    host: true,
  },

  // Azure App Service adapter configuration
  adapter: node({
    mode: 'standalone',
  }),

  // Image optimization for Azure
  image: {
    service: passthroughImageService(),
    domains: [
      'pixelatedempathy.com',
      'cdn.pixelatedempathy.com',
      process.env.AZURE_CDN_ENDPOINT?.replace('https://', '') || '',
    ].filter(Boolean),
    defaultStrategy: 'viewport',
  },

  // Redirects (handled by staticwebapp.config.json)
  redirects: {
    '/admin': '/admin/dashboard',
    '/docs': '/docs/getting-started',
  },

  // Compressor configuration
  compressHTML: true,

  // Base configuration for subdirectory deployment
  base: process.env.AZURE_BASE_PATH || '/',

  // Environment-specific configuration
  ...(process.env.NODE_ENV === 'development' && {
    devToolbar: {
      enabled: true,
    },
  }),

  ...(process.env.NODE_ENV === 'production' && {
    devToolbar: {
      enabled: false,
    },
  }),
})
