<template>
  <div class="px-4">
    <div class="flex gap-4">
      <UModal>
        <UButton v-if="['super_admin', 'ketua'].includes(getMe?.role)" color="primary">Tambah Ronda</UButton>

        <template #content="{ close }">
          <div class="p-4">
            <UForm :state="state" @submit="createSchedule(close)">
              <UFormField label="Nama Warga" name="idUser">
                <USelectMenu v-model="state.idUser" class="w-full" :items="resultMember" value-key="value" />
              </UFormField>
              <UFormField label="Hari" name="days" class="mt-2">
                <USelectMenu v-model="state.days" class="w-full" :items="listDay" value-key="value" />
              </UFormField>
              <UButton class="mt-4 w-full justify-center" type="submit">Simpan</UButton>
            </UForm>
          </div>
        </template>
      </UModal>
      <UButton label="Ambil Jimpitan" to="/ambil" leading-icon="i-lucide-git-pull-request-draft" color="info" />

    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4 mt-4">
      <UCard v-for="(item, index) in listDay" :key="index + item.label" :ui="{
        body: 'p-1 sm:p-2'
      }">
        <UTable :data="resultSchedule[item.value]" :columns="columns" class="flex-1">
          <template #block-header>
            {{listDay.find(day => day.value === item.value)?.label}}
          </template>
          <template #block-cell="{ row }">
            <div class="flex items-center justify-between">
              {{ row.original.user.name }} - {{ row.original.block.name }}
              <UButton v-if="row.original.idUser === getMe?.idUser || ['super_admin', 'ketua'].includes(getMe?.role)"
                color="error" variant="link" size="sm" @click="deleteSchedule(row.original.idUser)">Hapus
              </UButton>
            </div>
          </template>
        </UTable>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui';
import type { GetMe } from '~/type/getMe';
import type { Response } from '~/type/response';
import type { Login } from '~~/server/models/login.schema';
import type { Ronda } from '~~/server/models/ronda.schema';

const state = reactive({
  idUser: '',
  days: ''
})

interface RondaUpdate extends Ronda {
  block: {
    name: string
  },
  user: {
    name: string
  }
}

useHead({
  title: 'Ronda | Ronda GPA'
})

definePageMeta({
  layout: 'admin',
  activeMenu: ['ronda'],
  permission: ['*'],

  breadcrumb: [
    {
      label: 'Ronda',
      to: '/ronda'
    }
  ]
})

const columns: TableColumn<RondaUpdate>[] = [
  {
    accessorKey: 'block',
    header: 'Senin',
  },
]

const token = useCookie('token')
const { me } = toRefs(useMe())
const getMe = computed(() => me.value?.data as GetMe)

const listDay = [{ label: 'Minggu', value: '0' }, { label: 'Senin', value: '1' }, { label: 'Selasa', value: '2' }, { label: 'Rabu', value: '3' }, { label: 'Kamis', value: '4' }, { label: 'Jumat', value: '5' }, { label: 'Sabtu', value: '6' }]

const { data: member } = await useFetch<Response<Login[]>>('/api/member', {
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const resultMember = computed(() => member.value?.data.map(item => ({
  label: item.name,
  value: item.idUser
})))

const { data: schedule, execute: getSchedule } = await useFetch<Response<RondaUpdate[]>>('/api/schedule', {
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

async function createSchedule(close: () => void) {
  const { execute, error } = await useFetch('/api/schedule/create', {
    method: 'POST',
    body: state,
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    watch: false,
    immediate: false
  })
  await execute()
  getSchedule()
  if (!error.value) {
    close()
  }
}

async function deleteSchedule(id: string) {
  const { execute } = await useFetch(`/api/schedule/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    watch: false,
    immediate: false
  })
  await execute()
  getSchedule()
}
</script>