<!--INSTITUTION USE ONLY-->

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

    //gather data
    const medInfo = {
    username: username.value,
    password: password.value,
    name: name.value
    }

    //send data off (unchecked)
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
      <h1>Register a medical user</h1>

      <input v-model="username" type="text" />
      <label for="username"> Username: </label><br>
      <input v-model="password" type="text" />
      <label for="password"> Password: </label><br>
      <input v-model="name" type="text" />
      <label for="name"> Name: </label><br>

      <button @click="attemptRegister()">
        Medical User Registration
      </button>
  
      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>
