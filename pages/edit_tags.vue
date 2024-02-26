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
  console.log(info.value)
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
  <div class="center">
    <h3>Add or Edit Tags</h3>
    <div class="parent center">
      <div class="child center">
        <label for="name">Enter Tag: </label>
        <input v-model="name" placeholder="Name" type="text">
      </div>
      <div class="child center">
        <button @click="attemptChange()">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
  width: 50%;
  text-align: center;
}

.child {
  margin: auto;
}

.center {
  margin: auto;
  width: 90%;
  text-align: center;
}
</style>
