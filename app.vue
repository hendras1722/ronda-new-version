<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui'
const nuxtApp = useNuxtApp()
const store = useLoading(nuxtApp.$pinia)
const { loadingPages } = store

const appConfig = useAppConfig()
const toaster = ref(appConfig.toaster as ToasterProps)
onMounted(() => {
  toaster.value.position = 'top-right'

})

store.pendingLoadingPages()
nuxtApp.hook('app:created', () => {
  store.pendingLoadingPages()
})
nuxtApp.hook('page:finish', () => {
  store.finsihLoadingPages()
})
</script>

<template>
  <ClientOnly>
    <Loading />

    <NuxtLayout>
      <UApp :toaster="toaster" :tooltip="{ delayDuration: 100 }">
        <NuxtPage />
      </UApp>
    </NuxtLayout>
  </ClientOnly>
</template>
