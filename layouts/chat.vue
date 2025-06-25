<template>
  <div class="min-h-screen flex flex-col md:flex-row w-full relative">
    <transition name="slide">
      <div v-show="isSidebarOpen || isDesktop"
        class="z-50 bg-white w-full md:min-w-3xs md:max-w-3xs border-b md:border-b-0 md:border-r border-slate-200 fixed md:static h-full">
        <div class="px-5 py-5 border-b border-slate-200">
          <div class="text-2xl font-bold whitespace-nowrap my-2">App Chat</div>
        </div>
        <div class="border-b border-slate-200">
          <div @click="isSidebarOpen = false" role="button"
            class="px-5 md:px-10 py-5 hover:bg-slate-200 cursor-pointer">
            <div class="truncate">Muh Syahendra Anindyantoro</div>
            <div class="truncate">Hello World...</div>
          </div>
        </div>
      </div>
    </transition>

    <div :class="['w-full flex-1', isDesktop ? 'ml-[0px]' : '']">
      <div class="px-5 py-5 border-b border-slate-200 flex items-center justify-between">
        <div class="text-2xl font-bold whitespace-nowrap my-2 flex items-center">
          <button @click="toggleSidebar"
            class="md:hidden mr-4 border-2 border-black text-black w-8 h-8 rounded-full flex justify-center items-center">
            M
          </button>
          <div class="hidden md:flex border-2 border-black text-black w-8 h-8 rounded-full justify-center items-center">
            M
          </div>
          <div class="ml-5">Muh Syahendra A</div>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

definePageMeta({
  layout: false,
})

const isSidebarOpen = ref(false)
const isDesktop = ref(false)

const updateScreenSize = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) isSidebarOpen.value = true
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
