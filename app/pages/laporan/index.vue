<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { Response } from '~/type/response'
import { CalendarDate, DateFormatter, getLocalTimeZone, } from '@internationalized/date'

definePageMeta({
  layout: 'admin',
  activeMenu: ['laporan'],
  breadcrumb: [
    {
      label: 'Dashboard',
      to: '/dashboard'
    }
  ]
})

useHead({
  title: 'Laporan | Ronda GPA'
})

interface RondaUpdate extends Ronda {
  block: {
    name: string
  },
  user: {
    name: string
  }
}

interface JimpitanUpdate extends Jimpitan {
  money: string
  user: { name: string }
  block: { name: string }
}

export interface LaporanDashboard {
  inbound: number
  outbound: number
  totalJimpitan: number
  allTotal: number
}



const token = useCookie('token')
const listDay = [{ label: 'Minggu', value: '0' }, { label: 'Senin', value: '1' }, { label: 'Selasa', value: '2' }, { label: 'Rabu', value: '3' }, { label: 'Kamis', value: '4' }, { label: 'Jumat', value: '5' }, { label: 'Sabtu', value: '6' }]
// const dayNow = new Date().getDay()
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

const lastDay = new Date(year, month, 0).getDate();

const modelValue = shallowRef({
  start: new CalendarDate(year, month, 1),
  end: new CalendarDate(year, month, lastDay)
});
const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})


// const listDayNow = listDay.filter(item => item.value === dayNow.toString())

const columns: TableColumn<RondaUpdate>[] = [
  {
    accessorKey: 'block',
    header: 'Senin',
  },
]


const columnsJimpitan: TableColumn<Blocks>[] = [
  {
    accessorKey: 'name',
    header: 'Blok',
  },
  {
    accessorKey: 'money',
    header: 'Total Uang',
  },
]

const { data: schedule } = await useFetch<Response<RondaUpdate[]>>('/api/schedule', {
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const resultSchedule = computed(() => {
  const result = schedule.value?.data.map(item => {
    return {
      ...item,
      nameDays: listDay.find(day => day.value === item.days)?.label
    }
  })
  const group = useGroupBy(result || [], 'days')
  return group
})

const { data: blocks } = await useFetch<Response<Blocks[]>>('/api/blocks/multiple', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const query = computed(() => {
  return {
    start: modelValue.value.start?.toString(),
    end: modelValue.value.end?.toString()
  }
})


const { data: laporanFee } = await useFetch<Response<LaporanDashboard>>('/api/incoming/dashboard', {
  method: 'GET',
  query,
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})


const { data: jimpitan } = await useFetch<Response<JimpitanUpdate[]>>('/api/jimpitan', {
  query,
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})


const listBlocks = computed(() => {
  const data = blocks.value?.data ?? []
  const availableJimpitan = data?.reduce<Array<Blocks>>((acc, item) => {
    const obj = {
      ...item,
      money: (jimpitan.value?.data || []).find((j) => j.idBlock === item.idBlock)?.money ?? "0",
      user: (jimpitan.value?.data || []).find((j) => j.idBlock === item.idBlock)?.user ?? { name: '' },
    }
    acc.push(obj)
    return acc
  }, [])

  const sortListBlocks = availableJimpitan.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
  )

  return sortListBlocks
})

</script>

<template>
  <div class="px-4">
    <UCard>
      <template #header>
        <div class="flex items-center justify-center">
          <h1 class="text-3xl font-semibold">Laporan</h1>
        </div>
      </template>
      <div class="grid place-items-center">
        <div class=" max-w-96">
          <UPopover>
            <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
              <template v-if="modelValue.start">
                <template v-if="modelValue.end">
                  {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }} - {{
                    df.format(modelValue.end.toDate(getLocalTimeZone())) }}
                </template>

                <template v-else>
                  {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }}
                </template>
              </template>
              <template v-else>
                Pick a date
              </template>
            </UButton>

            <template #content>
              <UCalendar v-model="modelValue" class="p-2" :number-of-months="2" range />
            </template>
          </UPopover>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4 mt-4 w-full">
          <UCard>
            <template #header>
              <div>Total uang masuk</div>
            </template>
            <div class="text-xl font-bold">Rp {{ laporanFee?.data.inbound.toLocaleString('id-ID') }}</div>
          </UCard>
          <UCard>
            <template #header>
              <div>Total uang keluar</div>
            </template>
            <div class="text-xl font-bold">Rp {{ laporanFee?.data.outbound.toLocaleString('id-ID') }}</div>
          </UCard>
          <UCard>
            <template #header>
              <div>Total uang</div>
            </template>
            <div class="text-xl font-bold">Rp {{ laporanFee?.data.allTotal.toLocaleString('id-ID') }}</div>
            <small>Termasuk jimpitan</small>
          </UCard>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4 mt-4 w-full">
          <div class="col-span-2">
            <UCard>
              <template #header>
                <div>Jimpitan ({{ laporanFee?.data.totalJimpitan.toLocaleString('id-ID') }})</div>
              </template>
              <UTable :data="listBlocks" :columns="columnsJimpitan" class="flex-1" />
            </UCard>
          </div>
          <UCard :ui="{
            body: 'p-1 sm:p-2',
            root: 'h-fit'
          }">
            <template #header>
              Jadwal Jimpitan Hari Ini
            </template>
            <UTable :ui="{
              th: 'hidden',
              separator: 'hidden'
            }" :data="resultSchedule[today.getDay().toString()]" :columns="columns" class="flex-1">
              <template #block-header>
                {{listDay.find(day => day.value === today.getDay().toString())?.label}}
              </template>
              <template #block-cell="{ row }">
                <div class="flex items-center justify-between">
                  {{ row.original.user.name }} - {{ row.original.block.name }}
                </div>
              </template>
            </UTable>
          </UCard>

        </div>
      </div>
    </UCard>

  </div>

</template>