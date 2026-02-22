<template>
  <UForm @submit="handleSubmit">
    <UFormField name="money" required aria-label="Input amount of money" aria-labelledby="amount">
      <UInput v-model="state.money">
        <template #trailing>
          <UButton type="submit" icon="i-lucide-send-horizontal" color="neutral" variant="ghost" :loading="pending"
            :disabled="pending" aria-label="Submit jimpitan" />
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
const payload = computed(() => {
  return {
    idBlock: props.idBlock,
    money: state.money
  }
})

const { error, execute, pending } = await useFetch('/api/jimpitan/create', {
  method: 'POST',
  body: payload,
  immediate: false,
  watch: false,
  headers: {
    'Authorization': `Bearer ${token.value}`
  }
})
async function handleSubmit() {
  await execute()
  if (!error.value) {
    emits('refetch')
    state.money = ''
  }
}
</script>