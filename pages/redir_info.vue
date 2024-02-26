<script setup lang="ts">
const { token, data } = useAuth()
if (!token.value) {
  await navigateTo("/login")
}
const information = await $fetch(`/api/users/${data.value?.username}`, {
  headers: {
    "Authorization": token
  }
})

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
    <h1>User information</h1>
    <div class="center">
    <ClientOnly>
      <div class="parent center row justify-evenly content-between q-gutter-sm">
        <NuxtLink to="/add_meds">
          <q-btn color="blue" text-color="white" label="Add Medication" />
        </NuxtLink>
        <NuxtLink to="/add_info">
          <q-btn color="blue" text-color="white" label="Add Information" />
        </NuxtLink>
        <v-table :data="information">
          <thead slot="head">
            <th>Name</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Blood Type</th>
            <th>Organ Donor Status</th>
            <th>Info Available to All Users</th>
          </thead>
          <tr>
            <td>{{ information.Name }}</td>
            <td>{{ information.Number }}</td>
            <td>{{ new Date(information.DateOfBirth).toDateString() }}</td>
            <td>{{ information.BloodType }}</td>
            <td>{{ information.OrganDonor ? "Yes" : "No" }}</td>
            <td>{{ information.InfoPublicallyAvailable ? "Yes" : "No" }}</td>
          </tr>
        </v-table>
      </div>
      <br>
      <div class="parent center row justify-evenly content-between q-gutter-sm">
        <v-table :data="information.medications">
          <thead slot="head">
            <th>Medication</th>
            <th>Dose Frequency</th>
            <th>Additional Notes</th>
          </thead>
          <tbody slot="body">
            <tr v-for="row in information.medications">
              <td>{{ row.MedicationName }}</td>
              <td>{{ row.DoseFrequency }}</td>
              <td>{{ row.AdditionalNotes }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <br>
      <div class="parent center row justify-evenly content-between q-gutter-sm">
        <v-table :data="information.information">
          <thead slot="head">
            <th>Information</th>
            <th>Additional Information</th>
          </thead>
          <tbody slot="body">
            <tr v-for="row in information.information">
              <td>{{ row.InfoName }}</td>
              <td>{{ row.AddInfo }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>

    </ClientOnly>
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
