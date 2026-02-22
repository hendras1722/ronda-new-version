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
              Griya Pratama Asri 2
            </h1>
            <p class="text-sm text-gray-500">
              Sistem Ronda
            </p>
          </div>
        </template>

        <!-- Form -->
        <UForm :state="state" class="space-y-5 w-full">
          <UFormField label="Email" name="email" class="w-full">
            <UInput v-model="state.email" class="w-full!" type="email" placeholder="contoh@email.com" size="lg"
              icon="i-heroicons-envelope" />
          </UFormField>

          <UFormField label="Password" name="password" class="w-full">
            <UInput v-model="state.password" class="w-full" type="password" placeholder="••••••••" size="lg"
              icon="i-heroicons-lock-closed" />
          </UFormField>

          <UButton block size="lg" color="primary" :disabled="pending" :loading="pending"
            class="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]" @click="handleSubmit">
            <span class="relative z-10">Masuk</span>
            <span
              class="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </UButton>
          <p class="text-xs text-gray-500 text-center">Belum punya akun? <NuxtLink to="/register" class="text-blue-500">
              Daftar
              disini</NuxtLink>
          </p>
        </UForm>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <p class="text-xs text-gray-500">
            © 2026 Griya Pratama Asri 2
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
  title: 'Login - Ronda GPA 2'
})

const state = reactive({
  email: '',
  password: ''
})

const { data, execute, pending } = await useFetch<Response<{ token: string }>>('/api/login', {
  method: 'POST',
  body: state,
  watch: false,
  immediate: false,
  onResponse: ({ response }) => {
    console.log(response._data)
    if (response._data?.data.token) {
      navigateTo('/laporan', {
        external: true
      })
    }
  }
})

const handleSubmit = async () => {
  await execute()
  token.value = data.value?.data?.token ?? ''
  // const response = await useAsyncData('login', () => $fetch('/api/register', {
  //   method: 'POST',
  //   body: state
  // }))
  // console.log(response)
}
</script>
