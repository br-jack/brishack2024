<script setup>
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
        <data-card class="col-auto" v-for="(value, key) in information" :title="key" :info="value" />
    </div>
</template>


<style lang="sass">
</style>
