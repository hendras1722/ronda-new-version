<script lang="tsx" setup>
const me = useMe()

const getMe = computed(() => me.me?.data)
</script>

<template>
  <slot :getMe="getMe" />
</template>