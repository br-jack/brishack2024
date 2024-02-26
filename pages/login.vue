<!--USED BY ALL-->
<script setup lang="ts">
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt, signOut } = useAuth()
const username = ref('')
const password = ref('')
const type = ref('CIV')
const errorVal = ref('')

async function signInWithCredentials() {
  const credentials = {
    username: username.value,
    password: password.value,
    type: type.value // This needs to either be "CIV", "MED", "INT"
  }
  try {
    await signIn(credentials, { redirect: false })
  } catch (error) {
    errorVal.value = "Wrong username and password"
  }
}
</script>
<template>
  <div>
    <h1>Enter your credentials to continue</h1>
    <div>
      <input v-model="username" type="text" />
      <input v-model="password" type="password" />
    </div>
    <div>
      <select name="type" v-model="type">
        <option selected value="CIV">Normal User</option>
        <option value="MED">Medical User</option>
        <option value="INT">Institution</option>
      </select>
    </div>
    <div>
      <button @click="signInWithCredentials()">
        Login
      </button>
      <button @click="signOut({ redirect: false })">
        Signout
      </button>
    </div>
    <div>
      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Status: {{ status || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
      <pre>{{ errorVal }}</pre>
    </div>
  </div>
</template>
