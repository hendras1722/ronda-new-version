<template>
  <UApp :toaster="{
    position: 'top-right',
    expand: false,
    progress: false,
    duration: 3000,
  }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>