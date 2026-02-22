// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    // 'nuxt-elysia'
    '@nuxt/ui',
    'nuxt-mongoose',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/main.css',
  ],
  ui: {
    colorMode: false
  },
  nitro: {
    preset: 'bun',
    experimental: {
      database: true
    }
  },
  debug: true,
  mongoose: {
    devtools: true,
  },
})