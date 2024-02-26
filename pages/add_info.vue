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

</script>

<template>
  <div class="center">
    <h3>Add Medical Information</h3>
    <NuxtLink to="/redir_info">Back to the Info screen</NuxtLink>
    <div class="parent center">
      <div class="child center">
        <label for="infoName">Brief Description: </label>
        <input v-model="infoName" type="text" />
      </div>
      <div class="child center">
        <label for="newInfo">Extra notes, information: </label>
        <textarea id="newInfo" type="text" cols="40" rows="8"/>
      </div>
      <div>
        <h1>Add information</h1>
        
        <NuxtLink to="/redir_info">Back</NuxtLink>
        
        <input v-model="infoName" placeholder="Information name" type="text" />
        <input v-model="newInfo" placeholder="Value" type="text" />

        <button @click="attemptInput()">
        Add
        </button>
      </div>
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
  </template>
