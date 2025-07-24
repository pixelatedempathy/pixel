;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9fa1a53d-0711-4bff-933b-00e094fcdfb7",e._sentryDebugIdIdentifier="sentry-dbid-9fa1a53d-0711-4bff-933b-00e094fcdfb7")}catch(e){}}();import * as Sentry from '@sentry/astro';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import './astro/server_DBAAVvAL.mjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,
  profilesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,

  integrations: [nodeProfilingIntegration()],

  sendDefaultPii: true,

  debug: process.env.NODE_ENV === 'development',

  environment: process.env.NODE_ENV || 'production',

  release: process.env.npm_package_version || '0.0.1',

  beforeSend(event) {
    if (event.request?.url?.includes('/api/health')) {
      return null
    }

    if (event.request?.headers?.['user-agent']?.includes('AlwaysOn')) {
      return null
    }

    if (event.exception?.values?.[0]?.value?.includes('ENOTFOUND')) {
      return null
    }

    return event
  },

  initialScope: {
    tags: {
      component: 'astro-server',
      platform: 'aws',
    },
    context: {
      app: {
        name: 'Pixelated Empathy',
        version: process.env.npm_package_version || '0.0.1',
      },
      runtime: {
        name: 'node',
        version: process.version,
      },
    },
  },
})


;
