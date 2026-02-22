<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
    <div class="relative w-full max-w-md">
      <!-- Glow background -->
      <div
        class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-300 via-amber-300 to-rose-300 blur opacity-40 animate-pulse" />

      <!-- Card -->
      <UCard
        class="relative rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl mx-4">
        <!-- Header -->
        <template #header>
          <div class="text-center space-y-1">
            <h1 class="text-2xl font-semibold text-orange-700 tracking-wide">
              Daftar jadi warga
            </h1>
            <p class="text-sm text-gray-500">
              Griya Pratama Asri 2
            </p>
          </div>
        </template>

        <UAlert v-if="data?.message || error"
          :title="data?.message === 'Register has been created' ? 'Success' : 'Error'"
          :description="data?.message === 'Register has been created' ? 'Register Berhasil, akunmu sedang di verifikasi' : 'Register Gagal, coba lagi'"
          :color="data?.message === 'Register has been created' ? 'success' : 'error'" variant="outline" close />

        <!-- Form -->
        <UForm :state="state" class="space-y-5 w-full mt-4">
          <UFormField label="Nama" name="name" class="w-full">
            <UInput v-model="state.name" class="w-full!" type="text" placeholder="Masukkan nama anda" size="lg"
              icon="i-heroicons-user" />
          </UFormField>

          <UFormField label="Email" name="email" class="w-full">
            <UInput v-model="state.email" class="w-full!" type="email" placeholder="contoh@email.com" size="lg"
              icon="i-heroicons-envelope" />
          </UFormField>

          <UFormField label="Password" name="password" class="w-full">
            <UInput v-model="state.password" class="w-full" type="password" placeholder="••••••••" size="lg"
              icon="i-heroicons-lock-closed" />
          </UFormField>

          <UFormField label="No. Whatsapp" name="phone" class="w-full">
            <UInput v-model="state.phone" class="w-full" type="text" placeholder="628123456789" size="lg"
              icon="i-heroicons-phone" />
          </UFormField>

          <UFormField label="Blok" name="idBlock" class="w-full">
            <USelectMenu v-model="state.idBlock" placeholder="Pilih blok rumah kamu" class="w-full" :items="listBlocks"
              :value-key="'value'" />
          </UFormField>

          <UButton size="lg" color="primary"
            class="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full justify-center"
            @click="handleSubmit">
            <span class="relative z-10">Daftar</span>
            <span
              class="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </UButton>
          <p class="text-xs text-gray-500 text-center">Sudah punya akun? <NuxtLink to="/login" class="text-blue-500">
              Login
              disini</NuxtLink>
          </p>
        </UForm>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <p class="text-xs text-gray-500">
            © 2026 Perumahan Griya Pratama Asri 2
          </p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Response } from '~/type/response'

useHead({
  title: 'Register - Ronda GPA 2'
})

const state = reactive({
  name: '',
  email: '',
  password: '',
  phone: '',
  idBlock: ''
})


const { data: blocks } = await useFetch<Response<Blocks[]>>('/api/blocks', {
  method: 'GET',
})

const listBlocks = computed(() => {
  return blocks.value?.data.map((block) => {
    return {
      label: block.name,
      value: block.idBlock
    }
  })
})

const { execute, error, data } = await useFetch<Response<{ message: string }>>('/api/register', {
  method: 'POST',
  body: state,
  watch: false,
  immediate: false,
})

const handleSubmit = async () => {
  await execute()
  if (!error.value) {
    state.name = ''
    state.email = ''
    state.password = ''
    state.phone = ''
    state.idBlock = ''
  }
}
</script>
