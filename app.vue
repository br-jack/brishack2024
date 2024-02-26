<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <ClientOnly>
      <fetch />
    </ClientOnly>
    <NuxtPage />
  </NuxtLayout>
</template>
