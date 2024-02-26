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
      <h2>You have logged in successfully!</h2>
      <h4>Use the navigation bar above to continue.</h4>
    </div>
</template>