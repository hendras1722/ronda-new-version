<template>

  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl sm:text-4xl font-bold text-slate-800 mb-1">Warga GPA 2</h1>
      <p class="text-slate-500 text-sm">Daftar semua warga dan pengurus perumahan.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard :ui="{ body: 'p-4 sm:p-6' }">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-slate-600 font-medium">Total Warga</p>
            <p class="text-2xl sm:text-3xl font-bold text-slate-800 mt-1">{{ members.length }}</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-xl">
            <UIcon name="i-heroicons-users" class="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
          </div>
        </div>
      </UCard>
    </div>

    <!-- Table Card -->
    <UCard :ui="{
      body: 'p-0 sm:p-6',
      header: 'px-4 py-3 sm:px-6'
    }">
      <template #header>
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-lg font-semibold text-slate-800 truncate">Data Warga</h3>
          <UButton v-if="['ketua', 'bendahara', 'seketaris', 'super_admin'].includes(getMe?.role)"
            icon="i-heroicons-plus" label="Tambah" class="sm:hidden" @click="() => {
              isEdit = false
              openModal = true
            }" />
        </div>
      </template>

      <div class="overflow-x-auto overflow-y-hidden">
        <div class="min-w-[600px] sm:min-w-full">
          <UTable :data="members" :columns="columns" :ui="{
            base: 'w-full',
            tbody: 'divide-y divide-slate-200 bg-white',
            tr: 'hover:bg-slate-50 transition-colors cursor-default',
            th: 'bg-slate-50/50'
          }">
            <template #role-cell="{ row }">
              <UBadge :color="row.original.role === 'super_admin' ? 'primary' : 'neutral'" variant="subtle">
                {{ roleName(row.original.role) }}
              </UBadge>
            </template>
            <template #block-cell="{ row }">
              <span class="font-medium text-slate-700">{{ row.original.block?.name }}</span>
            </template>
            <template #actions-cell="{ row }">
              <div class="flex items-center gap-2">
                <UButton v-if="row.original.phone" aria-label="Whatsapp" variant="ghost" size="xl" icon="uim:whatsapp"
                  class="p-0" :ui="{
                    leadingIcon: 'w-8 h-8',
                  }" @click="redirectToWA(row.original.phone, row.original.name)" />
                <template v-if="['ketua', 'bendahara', 'seketaris', 'super_admin'].includes(getMe?.role)">
                  <UButton v-if="!['ketua'].includes(row.original.role)" aria-label="Edit" color="secondary"
                    :size="'lg'" icon="i-lucide-edit" class="p-0" :ui="{
                      leadingIcon: 'w-5 h-5 m-1',
                    }" @click="() => {
                      state.email = row.original.email
                      state.name = row.original.name
                      state.phone = row.original.phone
                      state.idBlock = row.original.idBlock
                      navigateTo(`/anggota?id=${row.original.idUser}`)
                      isEdit = true
                      openModal = true
                    }" />
                  <UButton v-if="getMe.idUser !== row.original.idUser && !['super_admin'].includes(row.original.role)"
                    aria-label="Delete" color="error" :size="'lg'" icon="i-lucide-trash" class="p-0" :ui="{
                      leadingIcon: 'w-5 h-5 m-1',
                    }" @click="() => {
                      confirm.open({
                        title: 'Delete Member',
                        description: 'Are you sure you want to delete this member?',
                        onConfirm: () => deleteMember(row.original.idUser)
                      })
                    }" />
                  <UButton
                    v-if="['ketua', 'super_admin'].includes(getMe?.role) && !['super_admin'].includes(row.original.role)"
                    color="info" :size="'lg'" label="Update pengurus" @click="() => {
                      router.push(`/anggota?id=${row.original.idUser}`)
                      openModalRole = true
                    }" />
                </template>
              </div>
            </template>
          </UTable>
        </div>
      </div>
    </UCard>

    <!-- Modal -->

    <UModal v-model:open="openModalRole">
      <template #content="{ close }">
        <UForm :state="stateRole" class="p-4 flex flex-col gap-4" @submit="updateRole">
          <UFormField label="Jabatan" required>
            <USelectMenu v-model="stateRole.role"
              :items="[{ label: 'Ketua', value: 'ketua' }, { label: 'Bendahara', value: 'bendahara' }, { label: 'Seketaris', value: 'seketaris' }, { label: 'Anggota', value: 'user' }]"
              value-key="value" placeholder="Pilih jabatan" class="w-full" />
          </UFormField>
          <UButton type="submit" class="justify-center">Submit</UButton>
          <UButton type="reset" class="justify-center" variant="ghost" color="neutral" @click="close">
            Cancel
          </UButton>
        </UForm>
      </template>
    </UModal>
    <UModal v-model:open="openModal">
      <template #content="{ close }">
        <div class="p-5" @submit.prevent="onSubmit">
          <UForm class="flex flex-col gap-4" required>
            <UFormField label="Nama">
              <UInput v-model="state.name" class="w-full" placeholder="Name" />
            </UFormField>
            <UFormField label="Nomor Hp / Whatsapp" required>
              <UInput v-model="state.phone" class="w-full" placeholder="Phone" />
            </UFormField>
            <UFormField label="Email" required>
              <UInput v-model="state.email" class="w-full" placeholder="Email" />
            </UFormField>
            <UFormField label="Blocks" required>
              <USelectMenu v-model="state.idBlock" class="w-full" :items="listBlocks" value-key="value" />
            </UFormField>
            <div class="flex flex-col gap-2">
              <UButton type="submit" class="justify-center">Submit</UButton>
              <UButton variant="ghost" color="neutral" type="reset" class="justify-center" @click="close">
                Cancel
              </UButton>
            </div>
          </UForm>
        </div>
      </template>
    </UModal>
    <UModal v-model:open="openModal">
      <template #content="{ close }">
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-slate-800">{{ isEdit ? 'Edit Warga' : 'Tambah Warga' }}</h3>
            <UButton variant="ghost" color="neutral" icon="i-heroicons-x-mark" @click="close" />
          </div>

          <UForm :state="state" class="space-y-4" @submit="onSubmit">
            <UFormField label="Nama" required>
              <UInput v-model="state.name" placeholder="Nama lengkap" class="w-full" />
            </UFormField>
            <UFormField label="Nomor Hp / Whatsapp" required>
              <UInput v-model="state.phone" placeholder="Contoh: 08123456789" class="w-full" />
            </UFormField>
            <UFormField label="Email" required>
              <UInput v-model="state.email" type="email" placeholder="alamat@email.com" class="w-full" />
            </UFormField>
            <UFormField label="Blok Rumah" required>
              <USelectMenu v-model="state.idBlock" :items="listBlocks" value-key="value" placeholder="Pilih blok"
                class="w-full" />
            </UFormField>

            <div class="flex flex-col w-full items-center gap-3 pt-4">
              <UButton type="submit" class="flex-1 w-full justify-center">{{ isEdit ? 'Simpan Perubahan' : 'Tambah' }}
              </UButton>
              <UButton variant="ghost" color="neutral" type="button" class="flex-1 w-full justify-center"
                @click="close">
                Batal
              </UButton>
            </div>
          </UForm>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script lang="tsx" setup>
import type { TableColumn } from '@nuxt/ui'
import type { GetMe } from '~/type/getMe'
import type { Response } from '~/type/response'
import type { Login } from '~~/server/models/login.schema'

definePageMeta({
  layout: 'admin',
  activeMenu: ['warga'],
  permission: ['*']
})

useHead({
  title: 'Anggota | Ronda GPA',
})

interface UserLogin extends Login {
  block: {
    name: string
  }
}

const openModal = ref(false)
const openModalRole = ref(false)
const confirm = useModalConfirmation()

const stateRole = reactive({
  role: '',
})
const state = reactive({
  name: '',
  phone: '',
  email: '',
  idBlock: '',
})

const token = useCookie('token')

const isEdit = useState<boolean>(() => false)

const columns: TableColumn<UserLogin>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'block', header: 'Blocks' },
  { accessorKey: 'role', header: 'Jabatan' },
  { accessorKey: 'actions', header: '' },
]

const route = useRoute()
const router = useRouter()

const { me } = toRefs(useMe())

const getMe = computed(() => me.value?.data as GetMe)

const { data, execute: getData } = await useFetch<Response<UserLogin[]>>("/api/member", {
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const members = computed(() => data.value?.data ?? [])

const { data: blocks } = await useFetch<Response<Blocks[]>>('/api/blocks', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})

const listBlocks = computed(() => blocks.value?.data.map(item => ({
  label: item.name,
  value: item.idBlock
})) ?? [])

async function deleteMember(id: string) {
  const { execute, error } = await useFetch<Response<Login[]>>("/api/member/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    watch: false,
    immediate: false
  })
  await execute()

  if (!error.value) {
    await getData()
  }
}

async function updateRole() {
  const { execute, error } = await useFetch<Response<Login[]>>("/api/member/update-role/" + route.query.id, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    body: stateRole,
    watch: false,
    immediate: false,
    onRequest: (data) => {
      if (!data?.error) {
        navigateTo("/anggota", {
          external: true
        })
      }
    }
  })
  await execute()

  if (!error.value) {
    openModalRole.value = false
    await getData()
  }
}

async function onSubmit() {
  if (isEdit.value) {
    const { execute, error } = await useFetch<Response<Login[]>>("/api/member/update/" + route.query.id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: state,
      watch: false,
      immediate: false
    })
    await execute()

    if (!error.value) {
      openModal.value = false
      await getData()
    }
    return
  }

  const { execute, error } = await useFetch<Response<Login[]>>("/api/member/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    body: state,
    watch: false,
    immediate: false
  })
  await execute()

  if (!error.value) {
    openModal.value = false
    await getData()
  }
}

function roleName(role: string) {
  switch (role) {
    case 'ketua':
      return 'Ketua'
    case 'bendahara':
      return 'Bendahara'
    case 'seketaris':
      return 'Sekretaris'
    case 'super_admin':
      return 'OP'
    default:
      return 'Warga'
  }
}

function getGreeting() {
  const hour = new Date().getHours()

  if (hour >= 4 && hour < 11) {
    return "Selamat pagi"
  }

  if (hour >= 11 && hour < 15) {
    return "Selamat siang"
  }

  if (hour >= 15 && hour < 18) {
    return "Selamat sore"
  }

  return "Selamat malam"
}

function redirectToWA(phoneNumber: string, name: string) {
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  const phoneWa = phoneNumber.replace(/^0/g, '62');
  const message = `${getGreeting()} ${name},%0a%0a`
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${phoneWa}&text=${message}`;
  } else {
    window.open(
      `https://web.whatsapp.com/send?phone=${phoneWa}&text=${message}`,
      "_blank",
    );
  }
}

watch(openModal, () => {
  if (!openModal.value) {
    state.name = ''
    state.phone = ''
    state.email = ''
    navigateTo(`/anggota`, {
      replace: true
    })
  }
})
</script>