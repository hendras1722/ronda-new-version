<script lang="ts" setup>
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { TableColumn } from '@nuxt/ui'
import type { GetMe } from '~/type/getMe'
import type { Response } from '~/type/response'
import type { Jimpitan } from '~~/server/models/jimpitan.schema'

interface JimpitanUpdate extends Jimpitan {
  money: string
  user: { name: string }
  block: { name: string }
}

const open = useState('open', () => false)
const openDetail = useState('openJimpitan', () => false)

useHead({
  title: 'Jimpitan | Ronda GPA'
})

definePageMeta({
  layout: 'admin',
  activeMenu: ['jimpitan'],
  breadcrumb: [
    {
      label: 'Jimpitan',
      to: '/jimpitan'
    }
  ]
})

// const days = [
//   'Senin',
//   'Selasa',
//   'Rabu',
//   'Kamis',
//   'Jumat',
//   'Sabtu',
//   'Minggu',
// ]

// const jsDay = new Date().getDay() ?? 0
// const mapIndex = [6, 0, 1, 2, 3, 4, 5]

// const selectedToday = ref(days[mapIndex[jsDay] ?? 0])

const { width } = useWindowSize()
const date = shallowRef(new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))

const modelValue = shallowRef({
  start: new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()),
  end: new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
})

const token = useCookie('token')
const { me } = toRefs(useMe())

const getMe = computed(() => me.value?.data as GetMe)

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const { data: blocks } = await useFetch<Response<Blocks[]>>('/api/blocks', {
  method: 'GET',
  query: {
    date: date.value.toString()
  },
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const listBlocks = computed(() => {
  const data = blocks.value?.data
  const availableJimpitan = data?.reduce<Array<Blocks & { money: string, user: { name: string } }>>((acc, item) => {
    const obj = {
      ...item,
      money: (jimpitan.value?.data || []).find((j) => j.idBlock === item.idBlock)?.money ?? "0",
      user: (jimpitan.value?.data || []).find((j) => j.idBlock === item.idBlock)?.user ?? { name: '' },
    }
    acc.push(obj)
    return acc
  }, [])

  const groupped = availableJimpitan?.reduce<Record<string, typeof availableJimpitan>>((acc, item) => {
    const key = item.name.charAt(0)

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(item)
    return acc
  }, {})

  if (!groupped) {
    return []
  }
  const result = Object.values(groupped)
  return result
})

const query = computed(() => {
  return {
    start: date.value.toString(),
    end: date.value.toString()
  }
})

const { data: jimpitan, execute: executeJimpitan } = await useFetch<Response<JimpitanUpdate[]>>('/api/jimpitan', {
  query,
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const ListSelectBlocks = computed(() => {
  return (blocks.value?.data || [])?.map((item) => {
    return {
      label: item.name,
      value: item.idBlock
    }
  })
})

const stateJimpitan = reactive<{
  idBlock: {
    label: string
    value: string
  } | undefined
  money: string
}>({
  idBlock: undefined,
  money: '1000',
})

async function handleSubmit() {
  const { execute } = await useFetch<Response<JimpitanUpdate[]>>('/api/jimpitan/continuation/create', {
    method: 'POST',
    watch: false,
    immediate: false,
    body: {
      idBlock: stateJimpitan.idBlock?.value,
      money: stateJimpitan.money,
      createdAt_start: modelValue.value.start?.toString(),
      createdAt_end: modelValue.value.end?.toString()
    },
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  })
  await execute()
  await executeJimpitan()
}

const columns: TableColumn<Blocks & { money: string, user: { name: string } }>[] = [
  {
    accessorKey: 'name',
    header: 'Blok',
  },
  {
    accessorKey: 'money',
    header: 'Uang',
  },
]

function shareToWA() {
  const blockNotPay = listBlocks.value?.flat().filter((item) => item.money === '0');
  const blockPay = listBlocks.value?.flat().filter((item) => item.money !== '0');

  const message = `Hasil jimpitan tanggal ${date.value}\n` +
    `💰 Total uang : ${jimpitan.value?.data.reduce((acc, item) => acc + Number(item.money), 0).toLocaleString('id-ID')}\n` +
    `❌ Belum / kosong\n[${blockNotPay?.map((item) => item.name).join(', ')}]\n` +
    `✅ Sudah\n[${blockPay?.map((item) => item.name).join(', ')}]`;

  const encodedMsg = encodeURIComponent(message);

  const url = `https://api.whatsapp.com/send?text=${encodedMsg}`;

  window.open(url, "_blank");
}

</script>

<template>
  <div class="p-4">
    <UCard>
      <div class="w-full max-w-4xl mx-auto px-4 mb-4">
        <UCalendar v-model="date" :number-of-months="width > 768 ? 3 : 1" />
      </div>
      <div class="w-full max-w-4xl mx-auto px-4 mb-4 grid grid-rows-1 gap-2" :class="{
        'grid-cols-1  md:grid-cols-3': ['bendahara', 'ketua', 'super_admin'].includes(getMe?.role),
        'grid-cols-1  md:grid-cols-2': !['bendahara', 'ketua', 'super_admin'].includes(getMe?.role),
      }">
        <UButton label="Bagikan hasil jimpitan" color="primary" variant="solid" class="w-full justify-center"
          @click="shareToWA" />
        <UButton v-if="['bendahara', 'ketua', 'super_admin'].includes(getMe?.role)" label="Jimpitan Susulan"
          color="warning" variant="solid" class="w-full justify-center" @click="open = true" />
        <UButton label="Detail" color="secondary" variant="solid" class="w-full justify-center"
          @click="openDetail = true" />

        <UModal v-model:open="openDetail" fullscreen>
          <template #content="{ close }">
            <div class="flex justify-start p-2 items-center gap-2">
              <UButton color="neutral" size="lg" variant="link" icon="i-lucide-chevron-left" :ui="{
                leadingIcon: 'size-8',
                trailingIcon: 'size-8'
              }" @click="close" />
              <h1 class="text-2xl font-bold">Laporan {{ df.format((date)?.toDate(getLocalTimeZone())) }}</h1>
            </div>
            <div class="flex justify-between gap-4 overflow-auto">
              <UTable :ui="{
                thead: 'sticky top-0 z-10 bg-white',
                th: 'sticky top-0 m-0',
              }" :data="listBlocks[0]" :columns="columns" class="flex-1" />
              <UTable :ui="{
                thead: 'sticky top-0 z-10 bg-white',
                th: 'sticky top-0 m-0',
              }" :data="listBlocks[1]" :columns="columns" class="flex-1" />

            </div>
          </template>
        </UModal>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div v-for="(item, index) in listBlocks[0]" :key="item.idBlock"
          class="flex flex-col items-center justify-center col-start-1" :style="{ gridRowStart: index + 1 }">
          <Icon :name="item.money === '0' ? 'i-tdesign-home' : 'i-tdesign-home-filled'" class="w-16 h-16"
            :class="item.money !== '0' && 'text-success-500'" />
          <p class="font-bold">{{ item.name }}</p>
          <p v-if="item.user.name" class="font-normal text-sm">Diambil : {{ item.user.name }}</p>
        </div>

        <div v-for="(item, index) in listBlocks[1]" :key="item.idBlock"
          class="flex flex-col items-center justify-center col-start-2" :style="{ gridRowStart: index + 1 }">
          <Icon :name="item.money === '0' ? 'i-tdesign-home' : 'i-tdesign-home-filled'" class="w-16 h-16"
            :class="item.money !== '0' && 'text-success-500'" />
          <p class="font-bold">{{ item.name }}</p>
          <p v-if="item.user.name" class="font-normal text-sm">Diambil : {{ item.user.name }}</p>
        </div>
      </div>
    </UCard>
  </div>

  <UModal v-model:open="open">
    <template #content>
      <div class="p-5">
        <h2 class="font-semibold text-xl">Jimpitan Susulan</h2>
      </div>
      <UForm :state="stateJimpitan" class="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4"
        @submit="handleSubmit">
        <div class="flex gap-4">
          <UFormField label="Block">
            <USelectMenu v-model="stateJimpitan.idBlock" :items="ListSelectBlocks" value-attribute="value"
              class="min-w-[80px] max-w-[120px]" placeholder="Pilih Block" />
          </UFormField>
          <UFormField label="Uang" class="w-full">
            <InputCurrency v-model="stateJimpitan.money" placeholder="Uang" class="w-full" />
          </UFormField>
        </div>
        <UPopover>
          <UButton color="primary" variant="subtle" icon="i-lucide-calendar">
            <template v-if="modelValue.start && modelValue.end">
              {{ df.format((modelValue.start)?.toDate(getLocalTimeZone())) }} - {{
                df.format((modelValue.end)?.toDate(getLocalTimeZone())) }}
            </template>
            <template v-else>
              Pick a date
            </template>
          </UButton>

          <template #content>
            <UCalendar v-model="modelValue" range class="p-2" :number-of-months="1" />
          </template>
        </UPopover>
        <UButton type="submit" label="Kirim" color="primary" variant="solid" class="w-full justify-center" />
        <UButton type="reset" label="Cancel" :variant="'ghost'" color="neutral" class="w-full justify-center" @click="() => {
          open = false
        }" />
      </UForm>
    </template>
  </UModal>
</template>