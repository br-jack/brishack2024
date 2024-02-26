<script setup>
const { token, getSession } = useAuth()
await getSession()
const route = useRoute()
const tagID = route.params.id
const tagOwner = await $fetch(`/api/info/tag/${tagID}`, {
    headers: {
        "Authorization": token
    }
})
const information = await $fetch(`/api/users/${tagOwner}`, {
    headers: {
        "Authorization": token
    }
})

const name = ref('')
const username = ref('')
const phoneNumber = ref('')
const password = ref('')
const infoPublic = ref('')
const dateOfBirth = ref('')
const bloodType = ref('')
const organDonor = ref('')

async function attemptUserProfileUpdate() {
    try {
    await $fetch('/api/info/userProfile', {

      method: 'POST',
      body: {
        name: name.value == "" ? information.name : name.value,
        username: information.username,
        phoneNumber: phoneNumber.value == "" ? information.name : phoneNumber.value,
        password: information.password,
        infoPublic: infoPublic.value == "" ? information.infoPublic : infoPublic.value,
        dateOfBirth: dateOfBirth.value == "" ? information.dateOfBirth : dateOfBirth.value,
        bloodType: bloodType.value == "" ? information.bloodType : bloodType.value,
        organDonor: organDonor.value == "" ? information.organDonor : organDonor.value,
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
    <ClientOnly>
        <br>
        <div class="row justify-evenly content-between q-gutter-sm">
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
                <tr>
                    <td> <input v-model="name" type="text" /> </td>
                    <td> <input v-model="phoneNumber" type="text" /> </td>
                    <td> <input v-model="dateOfBirth" type="date" /> </td>
                    <td> <input v-model="bloodType" type="text" /> </td>
                    <td> <input v-model="organDonor" type="text" /> </td>
                    <td> <input v-model="infoPublic" type="text" /> </td>
                </tr>
            </v-table>
            <button @click="attemptUserProfileUpdate()">
            Update User Profile
            </button>
        </div>
        <br>
        <div class="row justify-evenly content-between q-gutter-sm">
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
        <div class="row justify-evenly content-between q-gutter-sm">
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
</template>


<style lang="css">
v-table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
    text-align: center;
}
</style>
