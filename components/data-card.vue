<script setup>
defineProps(['title', 'info'])
</script>

<template>
    <q-card dark bordered square flat class="bg-grey-9 my-card">
        <q-card-section>
            <div class="text-h6 text-center text-bold text-uppercase">{{ title }}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section class="text-subtitle text-center">
            {{ info }}
        </q-card-section>
    </q-card>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>