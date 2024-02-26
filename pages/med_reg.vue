<!--INSTITUTION USE ONLY-->

<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
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
  <div class="center">
    <h3>Register a medical user</h3>
      <div class="parent centre">
        <div class="child">
          <label for="username"> Username: </label><br>
          <input v-model="username" type="text" />
        </div>
        <div class="child">
          <label for="password"> Password: </label><br>
          <input v-model="password" type="password" />
        </div>
        <div class="child">
          <label for="name"> Name: </label><br>
          <input v-model="name" type="text" />
        </div>
      </div>

    <button @click="attemptRegister()">
      Medical User Registration
    </button>

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
