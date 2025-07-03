<template>
  <div>
    <TemplatesPagesLayoutSchedule :filter="filter" v-model:params="params" :title="'Jadwal Warga'" :data="items"
      :fields="columns" @refetch="execute">
    </TemplatesPagesLayoutSchedule>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui'
import { endOfMonth, startOfMonth } from 'date-fns'
import type { Jimpitan } from '~/types/jimpitan'

const params = ref({
  search: '',
  date: useCalendar({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date())
  }),
})
const items = ref<Jimpitan[]>([])

const filter = reactive({
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

// await useHttp('/api/v1/add-schedule', {
//   method: 'POST',
//   body: {
//     villageId: "da11922b-260f-4c66-b08f-115510aafcea",
//     day: "senin",
//     userId: "5dc1214d-aa38-4be6-bc4c-86e24d1132c0",

//   }
// })

const { data: apiData, execute } = await useHttp<{ data: { jimpitan: Jimpitan[] } }>('/api/v1/schedule', {
  method: 'GET',
  params: filterParams,
})

watch(
  () => apiData.value,
  (newValue) => {
    console.log(newValue)
    if (!newValue) return
    items.value = newValue.data.jimpitan
  },
  { immediate: true }
)


const columns: TableColumn<Record<string, any>>[] = [
  { id: 'id', accessorKey: 'id', header: 'ID' },
  { id: 'user', accessorKey: 'user', header: 'Warga' },
  { id: 'day', accessorKey: 'day', header: 'Hari' },
  { id: 'action' }
]

</script>
