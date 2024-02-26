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
</script>


<template>
    <ClientOnly>
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
                    <td>{{ information.DateOfBirth }}</td>
                    <td>{{ information.BloodType }}</td>
                    <td>{{ information.OrganDonor ? "Yes" : "No" }}</td>
                    <td>{{ information.InfoPublicallyAvailable ? "Yes" : "No" }}</td>
                </tr>
            </v-table>
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
