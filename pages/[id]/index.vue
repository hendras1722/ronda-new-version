<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import ImageSlider from '~/components/molecules/ImageSlider.vue';
import type { Jimpitan } from '~/types/jimpitan';
definePageMeta({
  layout: false
})

const money = ref(0)
const valueBlock = ref<Jimpitan>()
function moneyRupiah(e: string): string {
  return e.replace(/[^\d]/g, '')
}

const _DAY = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const _MONTH = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const dateNow = computed(() => {
  const date = new Date()
  const day = _DAY[date.getDay()]
  const month = _MONTH[date.getMonth()]
  return `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`
})


const columns: TableColumn<Record<string, any>>[] = [
  { id: 'block', accessorKey: 'block', header: 'Blok Rumah' },
  { id: 'money', accessorKey: 'money', header: 'Jimpitan' },
  { id: 'assign', accessorKey: 'assign', header: 'Diambil' },
]


const filterParams = computed(() => {
  return {
    villageId: 'da11922b-260f-4c66-b08f-115510aafcea',
    createdAt: new Date().toISOString(),
    createdEnd: new Date().toISOString(),
  }
})


const { data: apiData, execute: refetch } = await useHttp<{ data: { jimpitan: Jimpitan[] } }>('/api/v1/jimpitan', {
  method: 'GET',
  params: filterParams,
})


async function handleSubmit() {
  const { execute } = await useHttp('/api/v1/add-money-jimpitan', {
    method: 'POST',
    immediate: false,
    watch: false,
    body: {
      money: money,
      block: valueBlock.value?.block,
      userId: '5dc1214d-aa38-4be6-bc4c-86e24d1132c0',
      villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
    }
  })
  await execute()
  refetch()
}
</script>

<template>
  <div class="min-h-screen p-5">
    <h1 class="text-center text-2xl">{{ dateNow }}</h1>
    <div>
      <div>
        <ImageSlider v-model="valueBlock" :items="apiData?.data.jimpitan || []" />
      </div>
    </div>
    <div class="mt-5 grid place-items-center gap-4" v-if="valueBlock && !valueBlock.take">
      <UInput v-model="money" @input="(e: Event) => {
        const input = e.target as HTMLInputElement
        if (!input.value || input.value.match(/^[0]/gm)) return (input.value = '')
        const value = moneyRupiah(input.value)
        if (value === '') return (input.value = '')
        input.value = value.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          '.'
        )
      }">
        <template #leading>Rp.</template>
      </UInput>
      <UButton @click="handleSubmit" variant="solid" color="primary"
        class="w-[100px] flex items-center box-content justify-center">Ambil
      </UButton>
    </div>
    <div class="mt-5">
      <MoleculesTable :fields="columns" :items="apiData?.data.jimpitan || []">
        <template #assign-cell="{ row }">
          <div>{{ row.original.take?.name }}</div>
        </template>

      </MoleculesTable>
    </div>
  </div>

</template>