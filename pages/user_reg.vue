<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const username = ref('')
const name = ref('')
const password = ref('')
const permissions = ref('')
const phone = ref('')
const dob = ref('')
const blood = ref('')
const donor = ref('')

async function attemptRegister() {

  //gather data
  const regInfo = {
    username: username.value,
    name: name.value,
    password: password.value,
    permissions: permissions.value,
    phone: phone.value,
    dob: dob.value,
    blood: blood.value,
    donor: donor.value
  }

  //send data off
  try {
    await $fetch("/api/auth/register", {
      method: 'POST',
      body: regInfo
    })
  }

  catch (error) {
    console.error(error)
  }

}

</script>

<template>
  <div>
    <h1>Register a user</h1>

    <input v-model="username" type="text" />
    <label for="username"> Username: </label><br>

    <input v-model="password" type="password" />
    <label for="password"> Password: </label><br>

    <input v-model="name" type="name" />
    <label for="name"> Name: </label><br>

    <input v-model="phone" type="phone" />
    <label for="phone"> Phone: </label><br>

    <label for="blood">Blood Type:</label>

    <select name="blood" id="blood">
      <option value="unknown">N/A</option>
      <option value="a+">A+</option>
      <option value="a-">A-</option>
      <option value="b+">B+</option>
      <option value="b-">B-</option>
      <option value="ab+">AB+</option>
      <option value="ab-">AB-</option>
      <option value="o+">O+</option>
      <option value="o-">O-</option>
    </select>

    <input v-model="dob" type="date" />
    <label for="dob"> Date of Birth: </label><br>

    <input type="checkbox" id="donor" name="donor" value="false">
    <label for="donor"> Is the user a donor?</label><br>

    <input type="checkbox" id="permissions" name="permissions" value="false">
    <label for="permissions"> Allow non medical users to access name and phone number?</label><br>



    <button @click="attemptRegister()">
      User Registration
    </button>

  </div>
</template>

