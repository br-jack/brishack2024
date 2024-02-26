<script setup>
const username = ref('')
const name = ref('')
const password = ref('')
const permissions = ref('')
const phone = ref('')
const dob = ref()
const blood = ref('unknown')
const donor = ref(false)

async function attemptRegister() {

  //gather data
  const regInfo = {
    username: username.value,
    name: name.value,
    password: password.value,
    permissions: permissions.value,
    phone: phone.value,
    dateOfBirth: dob.value,
    blood: blood.value,
    donor: donor.value
  }
  console.log(regInfo)

  //send data off
  try {
    await $fetch("/api/auth/register", {
      method: 'POST',
      body: regInfo
    })
    await navigateTo("/login")
  }

  catch (error) {
    console.error(error)
  }

}

</script>

<template>
  <div>
    <h1>Register a user</h1>

    <label for="username"> Username: </label>
    <input v-model="username" type="text" />
    <br />

    <label for="password"> Password: </label>
    <input v-model="password" type="password" />
    <br />

    <label for="name"> Name: </label>
    <input v-model="name" type="name" />
    <br />

    <label for="phone"> Phone: </label>
    <input v-model="phone" type="phone" />
    <br />

    <label for="blood">Blood Type:</label>
    <select name="blood" v-model="blood">
      <option selected value="unknown">N/A</option>
      <option value="a+">A+</option>
      <option value="a-">A-</option>
      <option value="b+">B+</option>
      <option value="b-">B-</option>
      <option value="ab+">AB+</option>
      <option value="ab-">AB-</option>
      <option value="o+">O+</option>
      <option value="o-">O-</option>
    </select>
    <br />

    <label for="dob"> Date of Birth: </label>
    <input v-model="dob" type="date" />
    <br />

    <label for="donor"> Is the user a donor?</label>
    <input type="checkbox" v-model="donor" name="donor" value="false">
    <br />

    <label for="permissions"> Allow non medical users to access name and phone number?</label>
    <input type="checkbox" v-model="permissions" name="permissions" value="false">
    <br />

    <button @click="attemptRegister()">
      User Registration
    </button>

  </div>
</template>

