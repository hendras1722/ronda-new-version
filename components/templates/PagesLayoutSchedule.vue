<template>
  <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
  <OrganismFilterTable :filter="filterLayout" v-model:params="params" v-model:open-modal="showModal"
    @actions="emits('actions')">
    <template #modal-header>
      <div class="flex items-center justify-between mb-5">
        <h5 class="font-bold text-lg">Add schedule</h5>
        <UButton variant="ghost" @click="async () => {
          showModal = false
        }" class="w-fit" icon="i-lucide-x" color="neutral"></UButton>
      </div>
    </template>
    <template #modal-body>
      <div>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="Warga" name="email">
            <USelect v-model="state.userId" :items="getMember ?? []" class="w-full" />
          </UFormField>

          <UFormField label="Hari" name="userId">
            <USelect v-model="state.day" :items="day" class="w-full" />
          </UFormField>

          <UButton type="submit" class="w-full flex justify-center mt-5" color="primary">
            Submit
          </UButton>
        </UForm>
      </div>
    </template>
  </OrganismFilterTable>
  <MoleculesTable :items="itemData" :fields="fields" :pagination="false">
    <template #user-cell="{ row }">
      <div class="flex items-center gap-3">
        <div>
          <p class="font-medium text-highlighted">
            {{ row.original.user.name }}
          </p>
        </div>
      </div>
    </template>
    <template #day-cell="{ row }">
      <div class="capitalize">{{ row.original.day }}</div>
    </template>
    <template #createdAt-cell="{ row }">
      <div>{{ row.original.createdAt && format(new Date(row.original.createdAt), 'dd MMMM yyyy') }}</div>
    </template>
    <template #action-cell="{ row }">
      <UDropdownMenu :items="getDropdownActions(row.original)">
        <UButton icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost" aria-label="Actions" />
      </UDropdownMenu>
    </template>
  </MoleculesTable>
</template>

<script setup lang="ts">
import type { DropdownMenuItem, TableColumn, FormSubmitEvent } from '@nuxt/ui';
import type { Filter } from '~/types/filter';
import type { Iuran } from '~/types/iuran';
import z from 'zod'
import format from 'date-fns/format';
import type { User } from '~/generated/prisma';

const schema = z.object({
  userId: z.string().nonempty(),
  day: z.string().nonempty(),
  villageId: z.string().nonempty(),
})

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
        label: 'Actions',
        placeholder: 'Actions',
        type: 'button',
      },
    })
  },
  title: {
    type: String,
    default: 'Warga Dashboard'
  },
})

type Schema = z.infer<typeof schema>

const state = reactive({
  day: '',
  userId: '',
  villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
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

function getDropdownActions(user: Record<string, any>): DropdownMenuItem[][] {
  return [
    [
      {
        label: 'Edit',
        icon: 'i-lucide-edit',
        onSelect: () => emits('actionsEdit', user)
      },
      {
        label: 'Delete',
        icon: 'i-lucide-trash',
        color: 'error',
        onSelect: () => emits('actionsDelete', user)
      }
    ]
  ]
}


const { data: apiData } = await useHttp<{ data: { user: User[] } }>('/api/v1/member', {
  method: 'GET',
})

const getMember = computed(() => apiData.value?.data.user.map(item => ({
  label: item.name,
  value: item.id
})) as { label: string, value: string }[])

async function onSubmit(event: FormSubmitEvent<Schema>) {
  alert('wewe')
  const { execute, error } = await useFetch('/api/v1/add-schedule', {
    method: 'POST',
    body: {
      day: event.data.day,
      userId: event.data.userId,
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
  toast.add({ title: 'Success', description: 'Success add user', color: 'success' })
  showModal.value = false
}

const day = ref([{
  label: 'Minggu',
  value: "minggu"
}, {
  label: 'Senin',
  value: 'senin'
}, {
  label: 'Selasa',
  value: 'selasa'
}, {
  label: 'Rabu',
  value: 'rabu'
}, {
  label: 'Kamis',
  value: 'kamis'
}, {
  label: `Jum'at`,
  value: 'jumat'
}, {
  label: 'Sabtu',
  value: 'sabtu'
}
])
</script>