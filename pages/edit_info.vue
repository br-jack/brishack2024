<!--USER AND INSTITUTION USE ONLY-->

<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt } = useAuth()

async function attemptRegister() {

    //gather data
    const medInfo = {
   
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
      <h1>Edit user information</h1>
  
      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    </div>
  </template>
