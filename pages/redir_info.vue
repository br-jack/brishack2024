<script setup lang="ts">
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt } = useAuth()
if (!token.value) {
  await navigateTo("/login")
}
const info = await $fetch(`/api/users/${data.value?.username}`, {
  // @ts-ignore
  headers: {
    "Authorization": token
  }
})

console.log(info)


interface information {
  title: String;
  addInfo: String;
}
interface medication {
  name: String;
  freq: String;
  addNotes: String;
}
</script>

<template>
    <div>
      <h1>Edit user information</h1>
      
      <NuxtLink to="/add_meds">Add Medication</NuxtLink>
      <NuxtLink to="/add_info">Add Information</NuxtLink>

      <template v-for="inf in info.information">
        <input v-model="inf.InfoName" type="text" />
        <input v-model="inf.AddInfo" type="text" />
      </template>

      <template v-for="meds in info.medications">
        <input v-model="meds.MedicationName" type="text" />
        <input v-model="meds.DoseFrequency" type="text" />
        <input v-model="meds.AdditionalNotes" type="text" />
      </template>

      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>
