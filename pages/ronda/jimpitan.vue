<template>
  <div>
    <TemplatesPagesLayoutJimpitan :filter="filter" v-model:params="params" :title="'Jimpitan Warga'" :data="items"
      :fields="columns" @refetch="execute">
    </TemplatesPagesLayoutJimpitan>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui'
import { endOfDay, startOfDay } from 'date-fns'
import type { Jimpitan } from '~/types/jimpitan'

const params = ref({
  search: '',
  date: useCalendar({
    start: startOfDay(new Date()),
    end: endOfDay(new Date())
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
  date: {
    label: 'Date',
    placeholder: 'Date',
    type: 'datepicker',
  },
})

const filterParams = computed(() => {
  return {
    createdAt: params.value.date.start.toString(),
    createdEnd: params.value.date.end.toString(),
    villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
  }
})

const { data: apiData, execute } = await useHttp<{ data: { jimpitan: Jimpitan[] } }>('/api/v1/jimpitan', {
  method: 'GET',
  params: filterParams,
})




// await useHttp('/api/v1/add-jimpitan', {
//   method: 'POST',
//   body: {
//     villageId: "da11922b-260f-4c66-b08f-115510aafcea",
//     block: "H12",
//     assignId: "5dc1214d-aa38-4be6-bc4c-86e24d1132c0",

//   }
// })



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
  { id: 'block', accessorKey: 'block', header: 'Blok Rumah' },
  { id: 'action' }
]

</script>
