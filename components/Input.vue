<template>
  <UInput v-model="VModel" v-bind="$attrs" v-parsing>
    <template #default v-if="$slots.default">
      <slot />
    </template>
    <template #leading v-if="$slots.leading">
      <slot name="leading" />
    </template>
    <template #trailing v-if="$slots.trailing">
      <slot name="trailing" />
    </template>

  </UInput>
</template>

<script setup lang="ts">
// export type ButtonVariant = keyof typeof button
export type Default = {
  solid: string
  outline: string
  soft: string
  ghost: string
  link: string
}

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  parsing: {
    type: String as PropType<'text' | 'uppercase' | 'number'>,
    default: () => 'text',
    validator(value: string) {
      return ['text', 'uppercase', 'number'].includes(value)
    },
  },
})

const emits = defineEmits(['update:modelValue'])

const VModel = computed({
  get() {
    return props.modelValue
  },
  set(e) {
    emits('update:modelValue', e)
  },
})
const vParsing = (e: HTMLDivElement) => {
  e.addEventListener('input', (item) => {
    const target: any = item.target
    if (props.parsing === 'uppercase') {
      target.value = target.value.toUpperCase()
      return
    }

    if (props.parsing === 'number') {
      target.value = target.value.replace(/[a-zA-Z]|[^\dA-Za-z]/gm, '')
    }
  })
  e.addEventListener('keyup', (item) => {
    const target: any = item.target
    if (props.parsing === 'uppercase') {
      target.value = target.value.toUpperCase()
      return
    }

    if (props.parsing === 'number') {
      target.value = target.value.replace(/[a-zA-Z]|[^\dA-Za-z]/gm, '')
    }
  })
}
</script>