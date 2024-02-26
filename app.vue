
<script setup>
import SmartTable from 'vuejs-smart-table'
Vue.use(SmartTable)

const getStorage = function (key) {
  if (window && window.localStorage.getItem(key)) {
    const data = JSON.parse(window.localStorage.getItem(key))
    return data
  }
  else {
    return null
  }
};
const token = getStorage('token')
const state = useAuthState()
const { getSession } = useAuth()
if (token) {
  state.setToken(token)
}
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
