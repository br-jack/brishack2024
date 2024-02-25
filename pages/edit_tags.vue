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
const username = ref('')
const password = ref('')
const name = ref('')

async function attemptRegister() {

    
    try {
    //do something
    } 
    catch (error) {
    console.error(error)
    }

}

</script>

<template>
    <div>
      <h1>Add or edit tags</h1>


      <button @click="attemptRegister()">
        Medical User Registration
      </button>
  
      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>
