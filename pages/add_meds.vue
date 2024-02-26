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
const medicationName = ref('')
const doseFrequency = ref('')
const additionalInfo = ref('')

async function attemptInput() {
    try {
    await $fetch('/api/info/med', {

      method: 'POST',
      body: {
        medicationName: medicationName.value,
        doseFrequency: doseFrequency.value,
        additionalInfo: additionalInfo.value
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

</script>

<template>
    <div>
      <h1>Add medication</h1>
      
      <NuxtLink to="/redir_info">Back</NuxtLink>
      
      <input v-model="medicationName" placeholder="Medication name" type="text" />
      <input v-model="doseFrequency" placeholder="Frequency" type="text" />
      <input v-model="additionalInfo" placeholder="Notes" type="text" />

      <button @click="attemptInput()">
      Add
    </button>

      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>
