<script setup>
const {
  mainContentClasses,
  mainContentStyles,
} = useControlSidebar();

const me = useMe()
const getMe = computed(() => me.me?.data)
</script>

<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden font-sans">
    <!-- Sidebar Component -->
    <AdminSidebar />

    <!-- Main Content -->
    <div :class="[mainContentClasses, 'flex flex-col h-full flex-1 relative min-w-0']" :style="mainContentStyles">
      <!-- Navbar Component -->
      <AdminNavbar :user="getMe" />

      <!-- Content Area -->
      <main class="flex-1 overflow-y-auto px-4 py-6 md:px-6 lg:px-8 min-w-0">
        <div class="lg:max-w-7xl mx-auto">
          <slot :getMe="getMe" />
        </div>
      </main>
    </div>
  </div>
</template>

<style>
/* Global layout styles if any */
body {
  @apply overflow-hidden;
}
</style>