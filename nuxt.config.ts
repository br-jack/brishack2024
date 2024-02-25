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
      // endpoints: {
      //   signIn: { path: '/login', method: 'post' },
      //   signOut: { path: '/logout', method: 'post' },
      //   signUp: { path: '/register', method: 'post' },
      //   getSession: { path: '/session', method: 'get' }
      // },
      token: { signInResponseTokenPointer: '/token/accessToken' },
      sessionDataType: { username: 'string', type: "CIV | MED | INT" }
    },
    session: {
      enableRefreshPeriodically: 5000
    }
  }
})
