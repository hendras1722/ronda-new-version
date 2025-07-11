<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { User } from '~/types/user'

const params = ref({
  search: '',
  date: useCalendar({
    start: new Date(),
    end: new Date()
  }),
})
const items = ref<User[]>([])

const filter = reactive({
  search: {
    label: 'Search',
    placeholder: 'Search',
    type: 'input',
  },
  // date: {
  //   label: 'Date',
  //   placeholder: 'Date',
  //   type: 'datepicker',
  // },
  button: {
    label: 'Add Warga',
    placeholder: 'Actions',
    type: 'button',
    css: 'bg-green-500 hover:bg-green-500'
  },
})

const filterParams = computed(() => {
  return {
    search: params.value.search,
    // createdAt_start: params.value.date.start.toString(),
    // createdAt_end: params.value.date.end.toString(),
    villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
  }
})
const { data: apiData, execute } = await useHttp<{ data: { user: User[] } }>('/api/v1/member', {
  method: 'GET',
  params: filterParams,
})

watch(
  () => apiData.value,
  (newValue) => {
    if (!newValue) return
    console.log(newValue)
    items.value = newValue.data.user
  },
  { immediate: true }
)


const columns: TableColumn<Record<string, any>>[] = [
  { id: 'id', accessorKey: 'id', header: 'ID' },
  { id: 'name', accessorKey: 'name', header: 'Name' },
  { id: 'email', accessorKey: 'email', header: 'Email' },
  { id: 'action' }
]
</script>

<template>
  <div>
    <TemplatesPagesLayoutWarga v-model:params="params" :title="'Warga'" :filter="filter" :data="items" :fields="columns"
      @refetch="execute" />
  </div>
</template>
