<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const token = useCookie('token')

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Keluar',
    icon: 'i-lucide-log-out',
    onSelect: () => {
      token.value = null
      navigateTo('/login')
    }
  }
])

const { sidebarCollapsed } = useControlSidebar();

defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <header
    class="bg-white shadow-sm border-b border-gray-200 h-16 items-center justify-between px-4 flex sticky top-0 z-30">
    <div class="flex items-center space-x-4">
      <UButton variant="ghost" color="neutral" icon="i-heroicons-bars-3-16-solid" aria-label="Toggle sidebar"
        @click="sidebarCollapsed = !sidebarCollapsed" />

      <!-- <nav class="hidden md:flex items-center space-x-2 text-sm text-gray-500">
        <a href="#" class="hover:text-blue-600 transition-colors">Dashboard</a>
        <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
        <span class="text-gray-900 font-medium">Form</span>
      </nav> -->
    </div>

    <div class="flex items-center space-x-3">
      <!-- <button aria-label="notification"
        class="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-all duration-200">
        <UIcon name="i-heroicons-bell" class="w-5 h-5" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
      </button> -->

      <div class="flex items-center space-x-3 pl-2 border-l border-gray-100">
        <div class="hidden sm:block text-right">
          <p class="text-xs font-semibold text-gray-900 leading-none">{{ user?.name || 'Admin' }}</p>
          <p class="text-[10px] text-gray-500 mt-1 leading-none">{{ user?.email || 'admin@example.com' }}</p>
        </div>
        <UDropdownMenu :items="items" :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8
        }" :ui="{
          content: 'w-48'
        }">
          <div class="w-9 h-9 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full p-[2px] shadow-sm">
            <div class="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
              <UIcon name="i-heroicons-user" class="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </UDropdownMenu>
      </div>
    </div>
  </header>
</template>
