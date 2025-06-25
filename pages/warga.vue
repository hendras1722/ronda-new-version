<script setup lang="ts">
const { data } = useHttp('/api/v1/member')
console.log(data)
</script>

<template>
  <div>
    <NuxtLink to="/iuran">Pindah</NuxtLink>
    <h1 class="text-2xl font-bold mb-4">Warga Dashboard</h1>
    <MoleculesTable />
  </div>
</template>
