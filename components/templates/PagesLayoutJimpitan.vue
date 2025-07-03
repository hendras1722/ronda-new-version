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
          <UFormField label="Member" name="email">
            <USelect v-model="state.assignId" :items="getMember ?? []" class="w-full" />
          </UFormField>

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
import type { User } from '~/generated/prisma';

const schema = z.object({
  assignId: z.string().nonempty(),
  block: z.string().nonempty(),
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
  const { execute, error } = await useFetch('/api/v1/add-jimpitan', {
    method: 'POST',
    body: {
      block: event.data.block,
      assignId: event.data.assignId,
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

</script>