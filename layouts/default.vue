<template>
  <div class="h-screen bg-gray-50 overflow-hidden">
    <!-- Sidebar -->
    <div :class="[
      'fixed min-h-full left-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out',
      sidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'w-64'
    ]" :style="!sidebarCollapsed && sidebarWidth ? `width: ${sidebarWidth}px` : ''">
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">D</span>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-2 py-4 space-y-1" aria-label="Sidebar">

        <UNavigationMenu :collapsed="sidebarCollapsed" :items="items" color="primary" orientation="vertical" />

      </nav>

      <!-- Resize Handle -->
      <div v-if="!sidebarCollapsed"
        class="absolute right-0 top-0 bottom-0 w-1 bg-transparent hover:bg-blue-500 cursor-col-resize transition-colors duration-150 group"
        @mousedown="startResize">
        <div class="w-full h-full group-hover:bg-blue-500 transition-colors duration-150"></div>
      </div>
    </div>


    <!-- Mobile Sidebar Overlay -->
    <div v-if="!sidebarCollapsed"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
      @click="toggleSidebar"></div>

    <!-- Main Content -->
    <div :class="[
      'flex flex-col transition-all duration-300 ease-in-out min-h-screen',
      sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
    ]" :style="!sidebarCollapsed && sidebarWidth ? `margin-left: ${sidebarWidth}px` : ''">
      <!-- Top Navbar -->
      <header class="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4">
        <div class="flex items-center space-x-4">
          <UButton icon="i-heroicons-bars-3-16-solid" variant="ghost" @click="toggleSidebar">
          </UButton>

          <!-- Breadcrumb -->
          <nav class="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <a href="#" class="hover:text-blue-600 transition-colors duration-150">Dashboard</a>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="text-gray-900 font-medium">Form</span>
          </nav>
        </div>

        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="relative hidden md:block">
            <input type="text" placeholder="Search..."
              class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150">
            <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>

          <!-- Notifications -->
          <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
              </path>
            </svg>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- Profile -->
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 overflow-auto">
        <div class="mx-auto">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallback } from '../composables/useCallback'


const route = useRoute()
const sidebarCollapsed = ref(false)
const sidebarWidth = ref(256)
const isResizing = ref(false)

const toggleSidebar = useCallback(() => {
  sidebarCollapsed.value = !sidebarCollapsed.value

})

// const toggleSidebar = () => {
// }


const startResize = (e) => {
  isResizing.value = true
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  document.body.style.cursor = 'col-resize'
  document.body.style.userSelect = 'none'
}

const handleResize = (e) => {
  if (!isResizing.value) return

  const newWidth = e.clientX
  if (newWidth >= 200 && newWidth <= 400) {
    sidebarWidth.value = newWidth
  }
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

// Handle responsive behavior
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      sidebarCollapsed.value = true
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})


const items = computed(() => [
  {
    label: 'Dashboard',
    to: '/',
    icon: 'i-heroicons-home-20-solid',
    active: route.path === '/',
    class: 'h-[50px]',
    activeClass: '!text-blue-600 !bg-blue-500 rounded-lg'
  },
  {
    label: 'Warga',
    to: '/warga',
    active: route.path === '/warga',
    class: 'h-[50px]',
    icon: 'i-heroicons-user-circle-20-solid'
  },
  {
    label: 'Iuran',
    to: '/iuran',
    active: route.path === '/iuran',
    class: 'h-[50px]',
    icon: 'i-heroicons-wallet-solid'
  },
  {
    label: 'Ronda',
    icon: 'i-lucide-book-open',
    class: 'h-[50px]',
    children: [
      {
        label: 'Jimpitan',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        class: 'h-[50px]',
        to: '/ronda/jimpitan'
      },

      {
        label: 'Jadwal',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        class: 'h-[50px]',
        to: '/ronda/schedule'

      },
    ]
  }
])
</script>