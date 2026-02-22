<template>
  <NuxtLayout>
    <template #default="{ getMe }">
      <div v-if="getMe?.ronda.days !== String(dayNow)"
        class="flex flex-col items-center justify-center  gap-5 h-screen">
        <div class="text-center text-2xl font-bold">Jadwal rondamu bukan hari ini</div>
        bisa diliat di halaman ronda
        <NuxtLink to="/ronda" class="text-center text-2xl font-bold text-blue-500">Ronda</NuxtLink>
      </div>

      <div v-else class="py-5">
        <h1 class="text-5xl text-center font-bold mb-5">
          GPA 2
        </h1>
        <div class="grid place-items-center">
          <!-- <UPopover>
            <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
              <template v-if="modelValue">
                {{ df.format(modelValue.toDate(getLocalTimeZone())) }}
              </template>
<template v-else>
                Pick a date
              </template>
</UButton>

<template #content>
              <UCalendar v-model="modelValue" class="p-2" :number-of-months="1" :max-value="today" />
            </template>
</UPopover> -->
          <UButton icon="i-lucide-share-2" color="primary" class="mt-4" @click="shareBlocks">
            {{ isSupported ? 'Share hasil jimpitan' : 'Download hasil jimpitan' }}
          </UButton>
          <div class="flex gap-2 items-center mt-2">
            <div class="w-2 h-2 bg-success-500 rounded-full"></div>: <span>sudah diambil</span>
          </div>
        </div>
        <div class=" opacity-0 absolute -z-10">
          <div ref="shareTarget" class="grid grid-cols-2 gap-4 my-4 p-2">
            <div v-for="(item, index) in listBlocks[0]" :key="item.idBlock"
              class="flex flex-col items-center justify-center col-start-1" :style="{ gridRowStart: index + 1 }">
              <Icon :name="'i-tdesign-home-filled'" class="w-16 h-16"
                :class="[item.money !== '0' && 'text-success-500', item.money === '0' && 'text-error-500']" />
              <p class="font-bold">{{ item.name }}</p>
            </div>

            <div v-for="(item, index) in listBlocks[1]" :key="item.idBlock"
              class="flex flex-col items-center justify-center col-start-2" :style="{ gridRowStart: index + 1 }">
              <Icon :name="'i-tdesign-home-filled'" class="w-16 h-16"
                :class="[item.money !== '0' && 'text-success-500', item.money === '0' && 'text-error-500']" />
              <p class="font-bold">{{ item.name }}</p>
            </div>
          </div>

        </div>
        <div class="grid grid-cols-2 gap-4 my-4">
          <div v-for="(item, index) in listBlocks[0]" :key="item.idBlock"
            class="flex flex-col items-center justify-center col-start-1" :style="{ gridRowStart: index + 1 }">
            <Icon :name="item.money === '0' ? 'i-tdesign-home' : 'i-tdesign-home-filled'" class="w-16 h-16"
              :class="item.money !== '0' && 'text-success-500'" />
            <InputCurrency v-if="item.money === '0' && isToday" :idBlock="item.idBlock" @refetch="executeJimpitan" />
            <p class="font-bold">{{ item.name }}</p>
          </div>

          <div v-for="(item, index) in listBlocks[1]" :key="item.idBlock"
            class="flex flex-col items-center justify-center col-start-2" :style="{ gridRowStart: index + 1 }">
            <Icon :name="item.money === '0' ? 'i-tdesign-home' : 'i-tdesign-home-filled'" class="w-16 h-16"
              :class="item.money !== '0' && 'text-success-500'" />
            <InputCurrency v-if="item.money === '0' && isToday" :idBlock="item.idBlock" @refetch="executeJimpitan" />
            <p class="font-bold">{{ item.name }}</p>
          </div>
        </div>
      </div>

    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { Blocks } from '~~/server/models/blocks.schema'
import type { Response } from '~/type/response'
import InputCurrency from './_components/InputCurrency.vue'
import { useShare } from '@vueuse/core'
import { domToJpeg } from "modern-screenshot"
import type { Login } from '~~/server/models/login.schema'

interface Getme extends Login {
  block: {
    name: string
  },
  user: {
    name: string
  },
  ronda: {
    days: string
  }
}

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})
const token = useCookie('token')

const dayNow = new Date().getDay()

const modelValue = shallowRef(new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))
const shareTarget = ref<HTMLElement | null>(null)
const { share, isSupported } = useShare()

const shareBlocks = async () => {
  if (!shareTarget.value) return

  try {
    const dataUrl = await domToJpeg(shareTarget.value, {
      quality: 1,
      scale: 4,
      backgroundColor: '#ffffff',
      drawImageInterval: 500,
      fetch: {
        bypassingCache: true,
      },
    })

    const blob = await (await fetch(dataUrl)).blob()
    const file = new File([blob], 'jimpitan-block.png', {
      type: 'image/png'
    })

    if (isSupported.value) {
      await share({
        title: 'Hasil Jimpitan',
        text: `Jimpitan tanggal ${df.format(
          modelValue.value.toDate(getLocalTimeZone())
        )}`,
        files: [file]
      })
    } else {
      const link = document.createElement('a')
      link.href = dataUrl
      link.download = 'jimpitan-block.png'
      link.click()
    }
  } catch (err) {
    console.error('Gagal share:', err)
  }
}

const today = new CalendarDate(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  new Date().getDate()
)

const isToday = computed(() => {
  return modelValue.value.toString() === today.toString()
})

const query = computed(() => {
  return {
    date: modelValue.value.toString()
  }
})

const { data: jimpitan, execute: executeJimpitan } = await useFetch<Response<Jimpitan[]>>('/api/jimpitan', {
  query,
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})


const { data: blocks } = await useFetch<Response<Blocks[]>>('/api/blocks', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const listBlocks = computed(() => {
  const data = blocks.value?.data
  const availableJimpitan = data?.reduce<Array<Blocks & { money: string }>>((acc, item) => {
    const obj = {
      ...item,
      money: jimpitan.value?.data.find((j) => j.idBlock === item.idBlock)?.money ?? "0"
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
</script>