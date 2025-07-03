<template>
  <div class="mt-5 w-full flex flex-col gap-4">
    <UTable :data="items" :columns="fields" class="flex-1">
      <template v-for="col in fields" :key="getColumnKey(col)" #[`${String(getColumnKey(col))}-cell`]="{ row }">
        <slot :name="`${String(getColumnKey(col))}-cell`" :row="row" />
      </template>
    </UTable>
    <div class="flex justify-center" v-if="pagination">
      <UPagination v-model:page="page" :show-controls="true" show-edges :total="100" />
    </div>
  </div>
</template>
<script setup lang="ts" generic="T extends Record<string, any>">
import type { TableColumn } from '@nuxt/ui'

defineProps<{
  fields: TableColumn<T>[],
  items: T[],
  pagination?: boolean
}>()


const search = defineModel('search', {
  type: String,
  default: ''
})
const page = defineModel('page', {
  type: Number,
  default: 1
})



function getColumnKey<T>(col: TableColumn<T>) {
  if ('accessorKey' in col && col.id) {
    return col.id
  }
  return col.id
}


</script>