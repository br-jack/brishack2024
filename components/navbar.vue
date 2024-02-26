<script setup>
const { status, signOut } = useAuth()
</script>

<template>
  <nav class="q-pa-md q-gutter-sm">
    <div v-if="status === 'unauthenticated'" class="q-gutter-sm">
      <NuxtLink to='login'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
    </div>
    <div v-if="status === 'authenticated'" >
      <q-btn color="white" @click="signOut({ redirect: false })" text-color="black"
        label="Logout" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: #3ea;
}
</style>
