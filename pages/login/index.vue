<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-2 text-center">Login</h1>
      <p class="text-center text-gray-600 mb-6">Selamat datang Ronda</p>
      <UForm :schema="schema" :state="state" class="space-y-4 " @submit="onSubmit">
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="Password" name="password" required>
          <UInput v-model="state.password" type="password" class="w-full" />
        </UFormField>

        <UButton type="submit" class="w-full !inline-grid place-items-center" variant="solid" color="primary">
          Submit
        </UButton>
      </UForm>
      <p class="mt-4 text-center text-gray-600">
        Belum punya akun?
        <NuxtLink to="/register" class="text-blue-500 hover:underline">Daftar sekarang</NuxtLink>
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const appConfig = useAppConfig()

definePageMeta({
  layout: "auth"
})


const schema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().nonempty('Password is required')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { execute, error, status } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: {
      email: event.data.email,
      password: event.data.password
    },
    watch: false,
    immediate: false
  })
  await execute()
  console.log(status.value, error.value)
  if (error.value) {
    toast.add({ title: 'Error', description: error.value.message, color: 'error' })
    return
  }
  toast.add({
    title: 'Success', description: 'Login successful', color: 'success'
  })
  navigateTo('/')
}
</script>