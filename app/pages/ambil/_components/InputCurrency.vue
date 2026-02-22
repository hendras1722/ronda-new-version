<template>
  <UForm @submit="handleSubmit">
    <UFormField name="money">
      <UInput v-model="state.money">
        <template #trailing>
          <UButton type="submit" icon="i-lucide-send-horizontal" color="neutral" variant="ghost" />
        </template>
      </UInput>
    </UFormField>
  </UForm>
</template>

<script lang="ts" setup>

const props = defineProps({
  idBlock: {
    type: String,
    required: true
  }
})

const state = reactive({
  money: '1000'
})

const token = useCookie('token')
const emits = defineEmits(['refetch'])

async function handleSubmit() {
  const { data, error, execute } = await useFetch('/api/jimpitan/create', {
    method: 'POST',
    body: {
      idBlock: props.idBlock,
      money: state.money
    },
    immediate: false,
    watch: false,
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  })
  await execute()
  if (!error.value) {
    emits('refetch')
    state.money = ''
  }
}
</script>