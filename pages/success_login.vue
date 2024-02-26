<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, token, data, status, lastRefreshedAt } = useAuth()
if (!token.value) {
  await navigateTo("/login")
}
</script>

<template>
    <div>
      <h3>You have logged in successfully!</h3>
      <h5>Use the navigation bar above to continue.</h5>
    </div>
</template>