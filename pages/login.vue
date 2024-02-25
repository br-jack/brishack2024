<script setup>
const username = ref('')
const password = ref('')
const { signIn } = useAuth()
async function signInWithCredentials() {
  const credentials = {
    username: username.value,
    password: password.value
  }
  try {
    await signIn(credentials)
  } catch (error) {
    console.error(error)
  }
}
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})
</script>
<template>
  <div>
    <h1>Enter your credentials to continue</h1>
    <input v-model="username" type="text" />
    <input v-model="password" type="password" />
    <button @click="signInWithCredentials()">
      Login
    </button>
  </div>
</template>
