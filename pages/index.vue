<script setup lang="js">
// interface ApiMedData {
//     name: string,
//     medicalConditions: string[],
//     bloodType: string,
//     allergies: string[],
//     currentMedicines: string[],
//     weight: number,
//     height: number,
//     dateOfBirth: number,
//     address: string,
//     // organDoner: boo

// }
// interface FormattedMedData {
//     Name: string
// }

const { data } = await useFetch('/api/users/hello')



// { "name": "hello", "medicalConditions": ["A", "B", "C"], "bloodType": "O+", "allergies": ["D", "E", "F"], "currentMedicines": ["DRUG", "MORE DRUG"], "weight": 12.3, "height": 1.85, "dateOfBirth": 1708876645425, "address": "Woodland road", "organDoner": false, "medicalNotes": ["note 1", "note 2"] }

// const formattedData = computed(() => {
//     let formatted = {}
//     formatted["Name"] = data.value!.name;
//     formatted["Medical Conditions"] = data.value!.medicalConditions
//     formatted["Blood Type"] = data.value!.bloodType
//     formatted["Allergies"] = data.value!.allergies
//     formatted["Current Medicines"] = data.value!.currentMedicines
//     formatted["Weight"] = data.value!.weight
//     formatted["Height"] = data.value!.height
//     formatted["Date of Birth"] = data.value!.dateOfBirth
//     formatted["Address"] = data.value!.address
//     formatted["Organ Donor"] = data.value!.organDoner // change spelling
//     formatted["Medical Notes"] = data.value!.medicalNotes

//     return formatted
// })
</script>

<template>
    <div class="row justify-evenly content-between q-gutter-sm">
        <data-card class="col-auto" v-for="(value, key) in data" :title="key" :info="value" />
    </div>
</template>
  
<style>
</style>  
