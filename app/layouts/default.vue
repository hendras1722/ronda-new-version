<script lang="tsx" setup>
const me = useMe()

const getMe = computed(() => me.me?.data)
</script>

<template>
  <div>
    <slot :get-me="getMe" />
  </div>
</template>