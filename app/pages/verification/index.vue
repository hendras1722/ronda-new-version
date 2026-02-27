<template>
  <div class="px-4">
    <UCard>
      <template #header>
        <h1 class="text-2xl font-bold">Konfirmasi warga baru GPA 2</h1>
      </template>
      <UTable :data="dataResult" :columns="columns">
        <template #idBlock-cell="{ row }">
          {{ row.original.block.name }}
        </template>
        <template #actions-cell="{ row }">
          <div class="flex gap-2">
            <UButton label="Tolak" color="error" variant="solid" @click="onAction('reject', row.original.idUser)" />
            <UButton label="Terima" color="primary" variant="solid" @click="onAction('accept', row.original.idUser)" />
          </div>
        </template>
      </UTable>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { Response } from '~/type/response';
import type { Login } from '~~/server/models/login.schema';

interface Register extends Login {
  block: {
    name: string
  }
}

definePageMeta({
  layout: 'admin',
  activeMenu: ['verification'],
  permission: ['ketua', 'super_admin'],

  breadcrumb: [
    {
      label: 'Dashboard',
      to: '/dashboard'
    },
    {
      label: 'Verification',
      to: '/verification'
    }
  ]
})

useHead({
  title: 'Konfirmasi Warga | Ronda GPA'
})

const token = useCookie('token')

const { data: registers, execute: getRegisters } = await useFetch<Response<Register[]>>('/api/verification', {
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const dataResult = computed(() => {
  return registers.value?.data
})

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'idBlock',
    header: 'Block',
  },
  {
    accessorKey: 'actions',
  }
]


async function onAction(e: 'accept' | 'reject', id: string) {
  const { execute } = await useFetch('/api/verification/update', {
    method: 'PUT',
    immediate: false,
    watch: false,
    headers: {
      'Authorization': `Bearer ${token.value}`
    },
    body: {
      id,
      status: e
    }
  })

  await execute()
  getRegisters()
}
</script>