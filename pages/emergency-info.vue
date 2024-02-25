<script setup>
const { data } = await useFetch('/api/users/hello')
console.log(data)
</script>

<template>
    <div>
        <data-card></data-card>
    </div>
</template>
  
  
