// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})
