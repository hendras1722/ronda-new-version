<template>
  <div>
    <TemplatesPagesLayoutIuran v-model:params="params" :title="'Khas Warga'" :filter="filter" :data="items"
      :fields="columns" @refetch="execute">
    </TemplatesPagesLayoutIuran>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui'
import { endOfMonth, startOfMonth } from 'date-fns'
import type { Iuran } from '~/types/iuran'

const params = ref({
  search: '',
  date: useCalendar({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date())
  }),
})
const items = ref<Iuran[]>([])

const filter = reactive({
  search: {
    label: 'Search',
    placeholder: 'Search',
    type: 'input',
  },
  date: {
    label: 'Date',
    placeholder: 'Date',
    type: 'datepicker',
  },
  button: {
    label: 'Add Warga',
    placeholder: 'Actions',
    type: 'button',
    css: 'bg-green-500 hover:bg-green-500'
  },
})

const filterParams = computed(() => {
  return {
    name: params.value.search,
    createdAt_start: params.value.date.start.toString(),
    createdAt_end: params.value.date.end.toString(),
    villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
  }
})

// await useHttp('/api/v1/add-iuran', {
//   method: 'POST',
//   body: {
//     admission: 'Uang Masuk',
//     userId: '5dc1214d-aa38-4be6-bc4c-86e24d1132c0',
//     villageId: 'da11922b-260f-4c66-b08f-115510aafcea',
//     money: '20000',
//   }
// })

const { data: apiData, execute } = await useHttp<{ data: { iuran: Iuran[] } }>('/api/v1/iuran', {
  method: 'GET',
  params: filterParams,
})

watch(
  () => apiData.value,
  (newValue) => {
    if (!newValue) return
    items.value = newValue.data.iuran
  },
  { immediate: true }
)


const columns: TableColumn<Record<string, any>>[] = [
  { id: 'id', accessorKey: 'id', header: 'ID' },
  { id: 'name', accessorKey: 'name', header: 'Name' },
  { id: 'admission', accessorKey: 'admission', header: 'Penerimaan' },
  { id: 'createdAt', accessorKey: 'createdAt', header: 'Tanggal Masuk' },
  { id: 'action' }
]

</script>
