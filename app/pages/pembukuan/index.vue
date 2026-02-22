<template>
  <UCard>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Pembukuan</h1>
        <UModal v-model:open="openModal">
          <UButton label="Tambah" color="primary" variant="solid" @click="openModal = true" />

          <template #content>
            <UForm @submit="onSubmit" :state="state" class="p-5 flex flex-col gap-2">
              <UFormField label="Uang dari" name="idUser">
                <USelectMenu class="w-full" v-model="state.idUser" :items="members" value-key="value" />
              </UFormField>
              <UFormField label="Jumlah" name="amount">
                <InputCurrency class="w-full" v-model="state.amount" />
              </UFormField>
              <UFormField label="Tanggal" name="date">
                <UPopover>
                  <UButton color="neutral" variant="outline" class="w-full" icon="i-lucide-calendar">
                    {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
                  </UButton>
                  <template #content>
                    <UCalendar v-model="modelValue" class="p-2" />
                  </template>
                </UPopover>
              </UFormField>
              <UFormField label="Deskripsi" name="description">
                <UInput class="w-full" v-model="state.description" />
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

    <UTable :data="incomingList?.data ?? []" :columns="columns">
      <template #date-cell="{ row }">
        {{ df.format(new Date(row.original.date ?? '')) }}
      </template>
      <!-- <template #amount-cell="{ row }">
          {{ formatCurrency(row.original.amount ?? '') }}
        </template> -->

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

const token = useCookie<string>('token')
const openModal = ref(false)
const state = reactive({
  amount: '',
  date: '',
  description: '',
  idUser: ''
})

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
  const { data, error, execute } = await useFetch<Response<Incoming>>('/api/incoming/create', {
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
  state.date = ''
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
      const { data, error, execute } = await useFetch<Response<Incoming>>(`/api/incoming/delete`, {
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