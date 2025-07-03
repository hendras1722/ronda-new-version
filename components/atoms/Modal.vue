<template>
  <UModal :title="title" {...$attrs}>
    <slot />

    <template #content v-if="$slots.body">
      <div class="p-5">
        <slot name="header" />
        <div>
          <slot name="body" />
        </div>
      </div>
    </template>
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </UModal>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: 'Modal with title'
  }
})
const emits = defineEmits(['close'])
const open = defineModel('default', {
  type: Boolean,
  default: false
})
</script>