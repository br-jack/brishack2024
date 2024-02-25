<!--USED BY ALL-->
<script setup lang="ts">
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt } = useAuth()
const username = ref('')
const password = ref('')
const type = ref('')

async function signInWithCredentials() {
  const credentials = {
    username: username.value,
    password: password.value,
    type: type.value // This needs to either be "CIV", "MED", "INT"
  }
  try {
    await signIn(credentials, { redirect: false })
  } catch (error) {
    console.error(error)
  }

  console.log(await $fetch("/api/auth/session", {
    headers: {
      "Authorization": `${token.value}`
    }
  }))
  console.log(await $fetch("/api/users/12313"))
}
</script>
<template>
  <div>
    <h1>Enter your credentials to continue</h1>
    <input v-model="username" type="text" />
    <input v-model="password" type="password" />
    <!-- DANIIL ADD A DROPDOWN HERE <3  -->
    <button @click="signInWithCredentials()">
      Login
    </button>

    <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
    <pre>Status: {{ status || 'no session data present, are you logged in?' }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
    <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
  </div>
</template>
