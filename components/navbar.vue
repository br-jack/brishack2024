<script setup>
const { status, signOut } = useAuth()
</script>

<template>
  <nav class="q-pa-md q-gutter-sm">
    <div v-if="status === 'unauthenticated'" class="q-gutter-sm">
      <NuxtLink to='/login'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
<<<<<<< HEAD
    </div>
    <div v-if="status === 'authenticated'" >
      <q-btn color="white" @click="signOut({ redirect: false })" text-color="black"
        label="Logout" />
    </div>
=======
      <NuxtLink to='/add_info'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
    </div>
    <q-btn v-if="status === 'authenticated'" color="white" @click="signOut({ redirect: false })" text-color="black"
      label="Signout" />
    <NuxtLink to='/add_info'>
      <q-btn color="white" text-color="black" label="Add Info" />
    </NuxtLink>
>>>>>>> 5b21b63 (temp fun :()
  </nav>
</template>

<style scoped>
nav {
  background: #3ea;
}
</style>
