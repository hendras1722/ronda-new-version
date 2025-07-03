<template>
  <div class="flex items-center gap-3 mb-4  justify-end">
    <Input v-model="searchInput" @input="searchDebounce" v-if="Object.keys(filter).includes('search')" class="w-full"
      :placeholder="filter.search.placeholder">
    <template #leading>
      <Icon name="i-lucide-search" />
    </template>
    </Input>
    <MoleculesDatepicker v-model="params.date" v-if="Object.keys(filter).includes('date')" />
    <AtomsModal title="Add Modal" v-model:open="openModal" v-if="Object.keys(filter).includes('button')">
      <UButton :class="[filter.button.css, 'text-nowrap']">{{ filter.button.label }}</UButton>
      <template #header v-if="$slots['modal-header']">
        <slot name="modal-header" />
      </template>
      <template #body v-if="$slots['modal-body']">
        <slot name="modal-body" />
      </template>
    </AtomsModal>
    <UButton @click="emits('actions')" class="text-nowrap" color="success" v-if="Object.keys(filter).includes('add')">
      Add
      new</UButton>
  </div>
</template>


<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Filter } from '@/types/filter';

defineProps({
  filter: {
    type: Object as PropType<Filter>,
    default: () => ({
    })
  }
})

const emits = defineEmits(['actions', 'closeModal'])

const params = defineModel('params', {
  type: Object,
  default: () => ({
    search: '',
    date: useCalendar({
      start: new Date(),
      end: new Date()
    }),
    actions: () => { }
  })
})

const openModal = defineModel('openModal', {
  type: Boolean,
  default: false
})
const searchInput = ref('')

const searchDebounce = useDebounceFn(() => {
  params.value.search = searchInput.value
}, 500)


</script>