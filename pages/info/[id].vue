<script setup>
import SmartTable from 'vuejs-smart-table'
Vue.use(SmartTable)

const { token } = useAuth()
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
    <div class="row justify-evenly content-between q-gutter-sm">
        <v-table :data = "information">
            <thead slot="head">
                <th>Name</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Blood Type</th>
                <th>Organ Donor Status</th>
                <th>Info Available to All Users</th>
            </thead>
            <tbody slot="body">
                <tr>
                    <td>{{information.name}}</td>
                    <td>{{information.phone}}</td>
                    <td>{{information.dob}}</td>
                    <td>{{information.bloodType}}</td>
                    <td>{{information.organDonor}}</td>
                    <td>{{information.infoPublic}}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <div>
        <v-table :data = "information.medications">
            <thead slot="head">
                <th>Medication Name</th>
                <th>Dose Frequency</th>
                <th>Additional Notes</th>
            </thead>
            <tbody slot="body">
                <tr v-for="row in information.medications">
                    <td>{{row.name}}</td>
                    <td>{{row.freq}}</td>
                    <td>{{row.addNotes}}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <div>
        <v-table :data = "information.information">
            <thead slot="head">
                <th>Information Name</th>
                <th>Additional Information</th>
            </thead>
            <tbody slot="body">
                <tr v-for="row in information.information">
                    <td>{{row.title}}</td>
                    <td>{{row.addInfo}}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>


<style lang="sass">
</style>
