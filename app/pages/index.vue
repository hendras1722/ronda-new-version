<template>
  <div>
    <NuxtLayout name="admin">
      <template #default="{ getMe }">
        <div>
          <p>Login:
          <pre>{{ getMe }}</pre>
          </p>
        </div>
      </template>
    </NuxtLayout>
    hello

    {{ getMe }}dasd
  </div>
</template>


<script lang="tsx" setup>
defineProps({
  getMe: {
    type: Object,
  }
})

</script>