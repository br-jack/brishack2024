<script setup lang=ts>
const { status, signOut, data } = useAuth()
const clearStorage = function (key: any) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}
</script>

<template>
  <nav class="q-pa-md q-gutter-sm">
    <div v-if="status === 'unauthenticated'" class="q-gutter-sm">
      <NuxtLink to='/login'>
        <q-btn color="white" text-color="black" label="Login" />
      </NuxtLink>
    </div>
    <div v-if="status === 'authenticated'" class="q-gutter-sm">
      <NuxtLink v-if="data?.type === 'CIV'" to='/redir_info'>
        <q-btn color="white" text-color="black" label="Main info" />
      </NuxtLink>
      <NuxtLink v-if="data?.type === 'CIV'" to='/add_info'>
        <q-btn color="white" text-color="black" label="Add Info" />
      </NuxtLink>
      <NuxtLink v-if="data?.type === 'CIV'" to='/add_meds'>
        <q-btn color="white" text-color="black" label="Add Meds" />
      </NuxtLink>
      <NuxtLink v-if="data?.type === 'CIV'" to='/edit_tags'>
        <q-btn color="white" text-color="black" label="Edit Tags" />
      </NuxtLink>
      <NuxtLink v-if="data?.type === 'INT'" to='/med_reg'>
        <q-btn color="white" text-color="black" label="Register Meds" />
      </NuxtLink>
      <q-btn color="white" class="fix" @click="clearStorage('token'); signOut({ redirect: false })" text-color="black"
        label="Signout" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: #3ea;
}

.fix {
  margin-top: 0;
}
</style>
