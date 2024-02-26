<!--USER USE ONLY-->
<script setup>
const { token, data } = useAuth()
const name = ref('')
const info = ref({})


async function fetchInfo() {
  if (!token.value) {
    await navigateTo("/login")
  }
  const fetched = await $fetch('/api/info/tag', {
    headers: {
      "Authorization": token.value
    }
  })
  info.value = fetched
}

async function attemptChange() {
  try {
    $fetch("/api/info/tag", {
      method: 'POST',
      headers: {
        "Authorization": token.value
      },
      body: {
        name: name.value
      }
    })
    name.value = ''
    await fetchInfo()
  }
  catch (error) {
    console.error(error)
  }

}

await fetchInfo()

</script>

<template>
  <div>
    <h1>Add or Edit Tags</h1>

    <input v-model="name" placeholder="Name" type="text">
    <pre>{{ info }}</pre>

    <button @click="attemptChange()">
      Submit
    </button>
  </div>
</template>
