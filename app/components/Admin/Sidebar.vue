<script setup lang="ts">
import { MENU } from '~/const/menu';
import { toRefs, computed } from 'vue';
import type { GetMe } from '~/type/getMe';

const {
  sidebarClasses,
  sidebarStyles,
  startResize,
  handleMenuToggle,
  openMenus,
  sidebarCollapsed
} = useControlSidebar();

const { me } = toRefs(useMe())
const userRole = computed(() => (me.value?.data as GetMe)?.role || 'user')

const filteredMenu = computed(() => {
  return MENU.filter(item => {
    if (!item.permission || item.permission.includes('*')) return true
    return item.permission.includes(userRole.value)
  })
})
</script>

<template>
  <div>
    <aside :class="[
      sidebarClasses,
      'flex flex-col h-full transition-all duration-300 ease-in-out overflow-hidden'
    ]" :style="sidebarStyles">
      <div class="flex items-center h-16 px-4 border-b border-gray-200 shrink-0">
        <div class="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">D</span>
        </div>
        <span v-if="!sidebarCollapsed" class="ml-3 font-bold text-gray-800 truncate">Ronda GPA</span>
      </div>

      <nav class="flex-1 overflow-y-auto px-2 py-4 space-y-2 active-scrollbar">
        <div v-if="!sidebarCollapsed">
          <div class="space-y-1">
            <NavMenu v-for="item in filteredMenu" :key="item.id" :item="item" :collapsed="sidebarCollapsed"
              :open-menus="openMenus" @toggle="handleMenuToggle" />
          </div>
        </div>

        <div v-else class="space-y-2">
          <PopOverMenu v-for="item in filteredMenu" :key="item.id" :item="item" />
        </div>
      </nav>

      <div v-if="!sidebarCollapsed"
        class="absolute right-0 top-0 bottom-0 w-1 bg-transparent hover:bg-blue-500 cursor-col-resize transition-colors group z-50"
        @mousedown="startResize" />
    </aside>

    <!-- Mobile Backdrop -->
    <div v-if="!sidebarCollapsed" class="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
      @click="sidebarCollapsed = true" />
  </div>
</template>

<style scoped>
.active-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.active-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.active-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

.active-scrollbar:hover::-webkit-scrollbar-thumb {
  background: #cbd5e1;
}
</style>
