<script setup lang="ts">
interface InputCurrencyProps {
  modelValue?: number | string
  prefix?: string
  class?: string
}

interface InputCurrencyEmits {
  (e: 'update:modelValue', value: number): void
}

const props = withDefaults(defineProps<InputCurrencyProps>(), {
  prefix: 'Rp ',
  modelValue: undefined,
})

const emit = defineEmits<InputCurrencyEmits>()

const displayValue = ref('')

const formatCurrency = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const parseNumber = (str: string): number => {
  return Number(str.replace(/\D/g, '')) || 0
}

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined && newValue !== null) {
      const num = typeof newValue === 'number' ? newValue : Number(newValue)
      if (!Number.isNaN(num)) {
        displayValue.value = formatCurrency(num)
      }
    } else {
      displayValue.value = ''
    }
  },
  { immediate: true }
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const parsed = parseNumber(target.value)
  displayValue.value = formatCurrency(parsed)
  emit('update:modelValue', parsed)
}

const handleKeydown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement
  const cursorPos = target.selectionStart ?? 0

  if (event.key === 'Backspace') {
    const charBefore = displayValue.value[cursorPos - 1]
    if (charBefore === '.') {
      event.preventDefault()
      nextTick(() => {
        target.setSelectionRange(cursorPos - 1, cursorPos - 1)
      })
    }
  }

  if (event.key === 'Delete') {
    const charAfter = displayValue.value[cursorPos]
    if (charAfter === '.') {
      event.preventDefault()
      nextTick(() => {
        target.setSelectionRange(cursorPos + 1, cursorPos + 1)
      })
    }
  }
}

const computedClass = computed(() => props.class)
</script>

<template>
  <UInput :model-value="displayValue" :class="computedClass" v-bind="$attrs" @input="handleInput"
    @keydown="handleKeydown">
    <template #leading>
      <span class="text-gray-500">{{ props.prefix }}</span>
    </template>
  </UInput>
</template>