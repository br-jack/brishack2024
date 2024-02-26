// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@sidebase/nuxt-auth'
  ],
  quasar: { /* */ },
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      token: { signInResponseTokenPointer: '/token/accessToken' },
      sessionDataType: { username: 'string', type: "CIV | MED | INT" }
    },
    session: {
      enableRefreshOnWindowFocus: false
    }
  }
})
