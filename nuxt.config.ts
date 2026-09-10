import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'app',
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],

  fonts: {
    families: [
      { name: 'Cinzel', provider: 'google' },
      { name: 'Playfair Display', provider: 'google' },
      { name: 'Great Vibes', provider: 'google' },
      { name: 'Alex Brush', provider: 'google' },
      { name: 'Dancing Script', provider: 'google' },
      { name: 'Plus Jakarta Sans', provider: 'google' },
      { name: 'Open Sans', provider: 'google' },
      { name: 'Inter', provider: 'google' },
      { name: 'League Spartan', provider: 'google' },
      { name: 'Urbanist', provider: 'google' },
      { name: 'Allura', provider: 'google' },
      { name: 'Hanken Grotesk', provider: 'google' },
    ],
  },

  i18n: {
    lazy: true,
    restructureDir: 'i18n',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'id', language: 'id-ID', file: 'id.json', name: 'Indonesia' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  runtimeConfig: {
    appApiUrl: process.env.NUXT_APP_API_URL || '',
    appApiKey: process.env.NUXT_APP_API_KEY || '',
    appApiToken: process.env.NUXT_APP_API_TOKEN || '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      linkBooking: process.env.NUXT_PUBLIC_LINK_BOOKING || '',
    },
  },
})
