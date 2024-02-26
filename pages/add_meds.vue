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
    <div class="center">
      <h3>Add Medication</h3>
      <NuxtLink to="/redir_info">Back to the Info screen</NuxtLink>
      <div class="parent center">
        <div class="child center">
          <label for="medicationName">Enter Medication Name: </label>
          <input v-model="medicationName" type="text" />
        </div>
        <div class="child center">
          <label for="doseFrequency">Enter Dose Frequency: </label>
          <input v-model="doseFrequency" type="text" />
        </div>
        <div class="child center">
          <label for="additionalInfo">Enter Additional Information: </label>
          <textarea id="additionalInfo" type="text" cols="40" rows="8"/>
        </div>
        
        <button @click="attemptInput()">
        Add
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
.parent {
  display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-gap: 20px; 
    width: 50%; 
    text-align: center;
}
.child {
  margin: auto;
}
.center {
  margin: auto;
  width: 90%;
  text-align: center;
}
</style>
