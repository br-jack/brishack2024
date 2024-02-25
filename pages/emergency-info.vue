<script setup lang="ts">
const { data } = await useFetch('/api/users/hello')
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>
