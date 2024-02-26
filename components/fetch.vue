<script setup>
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
  await getSession()
}
</script>
<template></template>
