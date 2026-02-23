<template>
  <UCard>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Pembukuan</h1>
        <UModal v-model:open="openModal">
          <UButton label="Tambah" color="primary" variant="solid" @click="openModal = true" />

          <template #content>
            <UForm :state="state" class="p-5 flex flex-col gap-2" @submit="onSubmit">
              <UFormField label="Uang dari" name="idUser">
                <USelectMenu v-model="state.idUser" class="w-full" :items="members" value-key="value" />
              </UFormField>
              <UFormField label="Jumlah" name="amount">
                <InputCurrency v-model="state.amount" class="w-full" />
              </UFormField>
              <UFormField label="Jenis" name="type">
                <USelectMenu v-model="state.type" class="w-full"
                  :items="[{ label: 'Uang Masuk', value: 'inbound' }, { label: 'Uang Keluar', value: 'outbound' }]"
                  value-key="value" />
              </UFormField>
              <UFormField label="Tanggal" name="date">
                <UPopover>
                  <UButton color="neutral" variant="outline" class="w-full" icon="i-lucide-calendar">
                    {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
                  </UButton>
                  <template #content>
                    <UCalendar v-model="modelValue" :min-value="minDate" class="p-2" />
                  </template>
                </UPopover>
              </UFormField>
              <UFormField label="Deskripsi" name="description">
                <UInput v-model="state.description" class="w-full" />
              </UFormField>
              <div class="flex justify-center flex-col">
                <UButton class="mt-5 justify-center" type="submit" label="Simpan" color="primary" variant="solid" />
                <UButton class="mt-5 justify-center" type="reset" label="Batal" color="neutral" variant="ghost"
                  @click="openModal = false" />
              </div>
            </UForm>
          </template>
        </UModal>
      </div>
    </template>

    <UPopover>
      <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
        <template v-if="modelValueRange.start">
          <template v-if="modelValueRange.end">
            {{ df.format(modelValueRange.start.toDate(getLocalTimeZone())) }} - {{
              df.format(modelValueRange.end.toDate(getLocalTimeZone())) }}
          </template>

          <template v-else>
            {{ df.format(modelValueRange.start.toDate(getLocalTimeZone())) }}
          </template>
        </template>
        <template v-else>
          Pick a date
        </template>
      </UButton>

      <template #content>
        <UCalendar v-model="modelValueRange" class="p-2" :number-of-months="2" range />
      </template>
    </UPopover>

    <UTable :data="incomingList?.data ?? []" :columns="columns">
      <template #date-cell="{ row }">
        {{ df.format(new Date(row.original.date ?? '')) }}
      </template>

      <template #actions-cell="{ row }">
        <UButton color="error" variant="solid" label="Hapus" @click="() => {
          deleteIncoming(row.original.idIncoming)
        }" />
      </template>
    </UTable>
  </UCard>
</template>


<script lang="ts" setup>
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { TableColumn } from '@nuxt/ui';
import InputCurrency from '~/components/InputCurrency.vue';
import type { Response } from '~/type/response';
import type { Incoming } from '~~/server/models/incoming.schema';

interface IncomingExtends extends Incoming {
  user: {
    name: string
  }
}


interface UserLogin extends Login {
  block: {
    name: string
  }
}

definePageMeta({
  layout: 'admin',
  activeMenu: ['pembukuan'],
  breadcrumb: [
    {
      label: 'Dashboard',
      to: '/dashboard'
    },
    {
      label: 'Pembukuan',
      to: '/pembukuan'
    }
  ]
})

useHead({
  title: 'Pembukuan | Ronda GPA'
})



const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

const lastDay = new Date(year, month, 0).getDate();

const token = useCookie<string>('token')
const openModal = ref(false)
const state = reactive({
  amount: '',
  date: new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()).toString(),
  description: '',
  idUser: '',
  type: ''
})

const modelValueRange = shallowRef({
  start: new CalendarDate(year, month, 1),
  end: new CalendarDate(year, month, lastDay)
})


const query = computed(() => {
  return {
    start: modelValueRange.value.start?.toString(),
    end: modelValueRange.value.end?.toString()
  }
})

const minDate = new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())

const columns: TableColumn<IncomingExtends>[] = [
  {
    accessorKey: 'user.name',
    header: 'Nama',
  },
  {
    accessorKey: 'amount',
    header: 'Jumlah',
  },
  {
    accessorKey: 'date',
    header: 'Tanggal',
  },
  {
    accessorKey: 'type',
    header: 'Jenis',
    cell: ({ row }) => {
      return row.original.type === 'inbound' ? 'Uang Masuk' : 'Uang Keluar'
    }
  },
  {
    accessorKey: 'description',
    header: 'Deskripsi',
  },
  {
    accessorKey: 'actions',
    header: 'Aksi',
  }
]

const { data: membersList } = await useFetch<Response<UserLogin[]>>("/api/member", {
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const members = computed(() => membersList.value?.data.map((item) => {
  return {
    value: item.idUser,
    label: item.name
  }
}))

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const modelValue = shallowRef(new CalendarDate(2022, 1, 10))

const { data: incomingList, execute: refetchIncoming } = await useFetch<Response<IncomingExtends[]>>("/api/incoming", {
  query,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

watch(modelValue, (value) => {
  state.date = value.toString()
}, {
  immediate: true
})

async function onSubmit() {
  const { error, execute } = await useFetch<Response<Incoming>>('/api/incoming/create', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    body: state,
    immediate: false,
    watch: false
  })

  await execute()
  if (error.value) {
    console.log(error.value)
    return
  }
  state.amount = ''
  state.date = new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()).toString()
  state.description = ''
  state.idUser = ''
  openModal.value = false
  refetchIncoming()



}

const confirm = useModalConfirmation()

async function deleteIncoming(id: string) {
  confirm.open({
    title: "Hapus Data",
    description: "Apakah anda yakin ingin menghapus data ini?",
    onConfirm: async () => {
      const { error, execute } = await useFetch<Response<Incoming>>(`/api/incoming/delete`, {
        method: 'DELETE',
        query: {
          id
        },
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        immediate: false,
        watch: false
      })

      await execute()
      refetchIncoming()


      if (error.value) {
        console.log(error.value)
        return
      }
    }
  })
}
</script>