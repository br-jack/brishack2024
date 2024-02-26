<script setup>
const { status, signOut } = useAuth()
</script>

<template>
  <nav class="q-pa-md q-gutter-sm">
    <div v-if="status === 'unauthenticated'" class="q-gutter-sm">
      <NuxtLink to='login'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
      <NuxtLink to='login'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
    </div>
    <q-btn v-if="status === 'authenticated'" color="white" @click="signOut({ redirect: false })" text-color="black"
      label="Signout" />
  </nav>
</template>

<style scoped>
nav {
  background: #3ea;
}
</style>
