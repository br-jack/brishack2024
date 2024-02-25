// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@sidebase/nuxt-auth'
  ],
  quasar: { /* */ },
  auth: {
    provider: {
      type: 'local'
    }
  }
})
