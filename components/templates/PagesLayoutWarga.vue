<template>
  <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
  <OrganismFilterTable :filter="filterLayout" v-model:params="params" v-model:open-modal="showModal">
    <template #modal-header>
      <div class="flex items-center justify-between mb-5">
        <h5 class="font-bold text-lg">Title</h5>
        <UButton variant="ghost" @click="showModal = false" class="w-fit" icon="i-lucide-x" color="neutral"></UButton>
      </div>
    </template>
    <template #modal-body>
      <div>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="Email" name="email">
            <UInput v-model="state.email" class="w-full" />
          </UFormField>

          <UFormField label="Name" name="name">
            <UInput v-model="state.name" type="name" class="w-full" />
          </UFormField>

          <UButton type="submit" class="w-full flex justify-center mt-5" color="primary">
            Submit
          </UButton>
        </UForm>
      </div>
    </template>
  </OrganismFilterTable>
  <MoleculesTable :items="itemData" :fields="fields" :pagination="false">
    <template #name-cell="{ row }">
      <div class="flex items-center gap-3">
        <div>
          <p class="font-medium text-highlighted">
            {{ row.original.name }}
          </p>
          <p>
            {{ row.original.position }}
          </p>
        </div>
      </div>
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
import type { User } from '~/types/user';
import z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Must be at least 8 characters'),
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
  email: '',
  name: ''
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
const itemData = computed(() => props.data as User[])
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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { execute, error } = await useFetch('/api/v1/add-member', {
    method: 'POST',
    body: {
      email: event.data.email,
      name: event.data.name,
      villageId: 'da11922b-260f-4c66-b08f-115510aafcea'
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
</script>