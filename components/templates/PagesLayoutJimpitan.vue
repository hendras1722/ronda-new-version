<template>
  <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
  <OrganismFilterTable :filter="filterLayout" v-model:params="params" v-model:open-modal="showModal"
    @actions="emits('actions')">
    <template #modal-header>
      <div class="flex items-center justify-between mb-5">
        <h5 class="font-bold text-lg">Add jimpitan</h5>
        <UButton variant="ghost" @click="async () => {
          showModal = false
        }" class="w-fit" icon="i-lucide-x" color="neutral"></UButton>
      </div>
    </template>
    <template #modal-body>
      <div>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

          <UFormField label="block" name="userId">
            <UInput v-model="state.block" class="w-full" />
          </UFormField>

          <UButton type="submit" class="w-full flex justify-center mt-5" color="primary">
            Submit
          </UButton>
        </UForm>
      </div>
    </template>
  </OrganismFilterTable>
  <MoleculesTable :items="itemData" :fields="fields" :pagination="false">
    <template #assign-cell="{ row }">
      {{ row.original.assign?.name }}
    </template>
    <template #take-cell="{ row }">
      {{ row.original.take?.name }}
    </template>
    <template #action-cell="{ row }">
      <UButton color="primary" variant="subtle" aria-label="Actions" @click="getDetail(row.original.block)">Detail
      </UButton>
    </template>
  </MoleculesTable>
  <AtomsModal v-model:open="open" fullscreen dismessible>
    <template #body>
      <div>
        <UButton variant="outline" @click="open = false" icon="i-lucide-chevron-left"></UButton>
      </div>
      <MoleculesTable :items="detail" :fields="[{ id: 'id', accessorKey: 'id', header: 'ID' },
      { id: 'block', accessorKey: 'block', header: 'Blok Rumah' },
      { id: 'money', accessorKey: 'money', header: 'Uang' },
      { id: 'take', accessorKey: 'take', header: 'Diambil Oleh' },
      { id: 'createdAt', accessorKey: 'createdAt', header: 'Tanggal' },
      { id: 'action' }]" :pagination="false">
        <template #id-cell="{ row }">
          {{ row.original.data?.id }}
        </template>
        <template #take-cell="{ row }">
          {{ row.original.data?.user.name }}
        </template>
        <template #money-cell="{ row }">
          <div v-if="cloneDetail[row.index].data.money">{{ row.original.data?.money }}</div>

          <UInput v-else class="w-full" v-model="detail[row.index].data.money" @input="(e: Event) => {
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
        </template>
        <template #block-cell="{ row }">
          {{ row.original.data?.block }}
        </template>
        <template #createdAt-cell="{ row }">
          <div>{{ row.original.createdAt && format(new Date(row.original.createdAt), 'dd MMMM yyyy') }}</div>
        </template>
        <template #action-cell="{ row }">
          <UButton v-if="!cloneDetail[row.index].data.money"
            @click="() => handleSubmit(row.original.data, cloneDetail[row.index].createdAt)" color="primary">
            Ambil</UButton>
        </template>
      </MoleculesTable>
    </template>
  </AtomsModal>

</template>

<script setup lang="ts">
import type { TableColumn, FormSubmitEvent } from '@nuxt/ui';
import type { Filter } from '~/types/filter';
import type { Iuran } from '~/types/iuran';
import z from 'zod'
import type { User } from '~/generated/prisma';
import type { Jimpitan } from '~/types/jimpitan';
import { eachDayOfInterval, format, parseISO, setHours } from 'date-fns';
import { AtomsModal } from '#components';

const schema = z.object({
  // assignId: z.string().nonempty(),
  block: z.string().nonempty(),
})

const open = ref(false)
const detail = ref<any[]>([])
const cloneDetail = ref<any[]>([])
const router = useRouter()
const route = useRoute()


const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  fields: {
    type: Array as PropType<TableColumn<Record<string, any>>[]>,
    default: () => []
  },
  filter: {
    type: Object as PropType<Filter>,
    default: () => ({
    })
  },
  title: {
    type: String,
    default: 'Warga Dashboard'
  },
})

type Schema = z.infer<typeof schema>

const state = reactive({
  assignId: '',
  block: ''
})

const toast = useToast()


const emits = defineEmits(['actions', 'actionsEdit', 'actionsDelete', 'refetch'])

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
const itemData = computed(() => props.data as Iuran[])
const filterLayout = computed(() => props.filter)
const showModal = ref(false)


async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { execute, error } = await useFetch('/api/v1/add-jimpitan', {
    method: 'POST',
    body: {
      block: event.data.block,
      villageId: 'da11922b-260f-4c66-b08f-115510aafcea',
    },
    watch: false,
    immediate: false
  })

  await execute()
  if (error.value) {
    toast.add({ title: 'Error', description: 'Error' + error.value.message, color: 'error' })
    return
  }
  emits('refetch')
  toast.add({ title: 'Success', description: 'Success add Jimpitan', color: 'success' })
  showModal.value = false
}


async function getDetail(e: string) {
  const { data, execute } = await useHttp<{ data: { jimpitan: Jimpitan[] } }>('/api/v1/get-detail-jimpitan', {
    method: 'GET',
    params: {
      block: e,
      villageId: params.value.villageId || 'da11922b-260f-4c66-b08f-115510aafcea',
      createdAt: params.value.date.start.toString(),
      createdEnd: params.value.date.end.toString(),
    },
    immediate: false,
    watch: false,
  })
  router.push({ query: { block: e } })
  await execute()
  const dates = eachDayOfInterval({
    start: parseISO(params.value.date.start.toString()),
    end: parseISO(params.value.date.end.toString())
  })
  const result = dates.map(date => {
    const createdDate = setHours(date, 7)
    if (data.value?.data.jimpitan && data.value.data.jimpitan.filter(item => format(new Date(item.createdAt as Date), 'yyyy-MM-dd') === format(new Date(createdDate), 'yyyy-MM-dd')).length === 0) {
      return {
        data: {
          money: '',
          user: {
            name: ''
          },
          block: '',
        },
        createdAt: createdDate.toISOString()
      }
    }
    return {
      data: data.value?.data.jimpitan.filter(item => format(new Date(item.createdAt as Date), 'yyyy-MM-dd') === format(new Date(createdDate), 'yyyy-MM-dd'))[0],
      createdAt: createdDate.toISOString()
    }
  })
  detail.value = result
  cloneDetail.value = JSON.parse(JSON.stringify(result))
  open.value = true
}

function moneyRupiah(e: string): string {
  return e.replace(/[^\d]/g, '')
}

async function handleSubmit(e: {
  money: string
}, date: Date) {
  const { execute } = await useHttp('/api/v1/add-money-jimpitan', {
    method: 'POST',
    immediate: false,
    watch: false,
    body: {
      money: e.money,
      block: route.query.block,
      userId: '5dc1214d-aa38-4be6-bc4c-86e24d1132c0',
      villageId: 'da11922b-260f-4c66-b08f-115510aafcea',
      createdAt: date
    }
  })
  await execute()
  getDetail(route.query.block as string)

}
</script>