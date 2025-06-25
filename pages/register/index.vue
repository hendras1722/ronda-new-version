<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-2 text-center">Register</h1>
      <UForm :schema="schema" :state="state" class="space-y-4 " @submit="onSubmit">
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="Password" name="password" required>
          <UInput v-model="state.password" type="password" class="w-full" :id="inputId" @input="emitFormInput" />
        </UFormField>

        <UButton type="submit" class="w-full !inline-grid place-items-center" variant="solid" color="primary">
          Submit
        </UButton>
      </UForm>
      <p class="mt-4 text-center text-gray-600">
        Sudah punya akun!
        <NuxtLink to="/login" class="text-blue-500 hover:underline">Daftar sekarang</NuxtLink>
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
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
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  const { execute } = await useFetch('/api/auth/register', {
    method: 'POST',
    body: {
      email: event.data.email,
      password: event.data.password
    },
    watch: false,
    immediate: false
  })
  execute()
}
</script>