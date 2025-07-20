import { defineNitroConfig } from 'nitro/config'
import path from 'node:path'

export default defineNitroConfig({
  compatibilityDate: '2025-07-20',
  preset: 'azure_swa',

  // Use the root src/ directory so we can incrementally migrate files
  srcDir: path.resolve(__dirname, '../src'),

  publicAssets: [
    // Serve public/ at site root
    {
      dir: path.resolve(__dirname, '../public'),
      baseURL: '/',
    },
  ],

  // Runtime env keys we need at build time as well
  runtimeConfig: {
    azureOpenaiApiKey: process.env['AZURE_OPENAI_API_KEY'],
    azureOpenaiEndpoint: process.env['AZURE_OPENAI_ENDPOINT'],
    azureClientId: process.env['AZURE_AD_CLIENT_ID'],
    azureTenantId: process.env['AZURE_AD_TENANT_ID'],
  },

  // UnoCSS handled via nitro.vite.ts

  // Use same path aliases we had in Astro
  alias: {
    '~': path.resolve(__dirname, '../src'),
    '@': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@layouts': path.resolve(__dirname, '../src/layouts'),
    '@utils': path.resolve(__dirname, '../src/utils'),
    '@lib': path.resolve(__dirname, '../src/lib'),
  },

  // Dev/preview ports align with Nitro scripts
  devServer: {
    port: 4000,
    hostname: '0.0.0.0',
  },
})
