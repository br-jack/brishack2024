<!--USER USE ONLY-->

<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt } = useAuth()
if (!token.value) {
  await navigateTo("/login")
}
const infoName = ref('')
const newInfo = ref('')

async function attemptInput() {
    try {
    await $fetch('/api/info/med', {

      method: 'POST',
      body: {
        infoName: infoName.value,
        newInfo: newInfo.value,
      },
      headers: {
        "Authorization": token
      }
    })

    } 
    catch (error) {
    console.error(error)
    }
}

</script>medication

<template>
    <div>
      <h1>Add information</h1>
      
      <NuxtLink to="/redir_info">Back</NuxtLink>
      
      <input v-model="infoName" type="text" />
      <input v-model="newInfo" type="text" />

      <button @click="attemptInput()">
      Add
    </button>

      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>