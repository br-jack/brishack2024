<script setup>
const { token } = useAuth()
const route = useRoute()
const tagID = route.params.id
const tagOwner = await $fetch(`/api/info/tag/${tagID}`, {
    headers: {
        "Authorization": token
    }
})
</script>


<template>
    <div>
        <p>{{ tagOwner }}</p>
    </div>
</template>


<style lang="sass">
</style>
