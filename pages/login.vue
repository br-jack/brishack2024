<!--USED BY ALL-->
<script setup lang="ts">

const saveStorage = function (key: any, data: any) {
  window.localStorage.setItem(key, JSON.stringify(data));
};
const state = useAuthState()
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt, signOut } = useAuth()
const username = ref('')
const password = ref('')
const type = ref('CIV')
const errorVal = ref('')

async function signInWithCredentials() {
  const credentials = {
    username: username.value,
    password: password.value,
    type: type.value // This needs to either be "CIV", "MED", "INT"
  }
  try {
    await signIn(credentials, { redirect: false, })
    saveStorage("token", state.rawToken.value)
    await navigateTo("/success_login")
  } catch (error) {
    errorVal.value = "Wrong username or password"
  }
}
</script>
<template>
  <div>
    <h3>Enter your Account Details</h3>
    <div class="parent">
      <div class="child">
        <label for="username">Enter Username: </label>
        <input v-model="username" type="text"/>
      </div>
      <br>
      <div class="child">
        <label for="password">Enter Password: </label>
        <input v-model="password" type="password" />
      </div>
      <div class="child">
        <label for="type">Select User Type: </label>
        <select name="type" v-model="type">
          <option selected value="CIV">Normal User</option>
          <option value="MED">Medical User</option>
          <option value="INT">Institution</option>
        </select>
      </div>
      <div class="child">
        <button @click="signInWithCredentials()">
          Login
        </button>
      </div>
    </div>
    <!-- <div>
      <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
      <pre>Status: {{ status || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
      <pre>{{ errorVal }}</pre>
    </div> -->
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
</style>