<template>
  <div class="flex items-center justify-center gap-2 w-full py-4 sm:gap-4 lg:gap-6">
    <!-- Left Button -->
    <UButton color="primary" variant="ghost" icon="i-heroicons-chevron-left" size="lg" class="rounded-full"
      aria-label="Previous day" @click="changePosition(-1)" />

    <!-- Carousel Container -->
    <div class="relative flex items-center justify-center w-full max-w-[600px] h-[80px] sm:h-[100px] lg:h-[120px]">
      <!-- Previous -->
      <div class="absolute left-0 scale-75 opacity-70 z-10 cursor-pointer transition-all duration-300"
        @click="changePosition(-1)">
        <UCard class="px-4 py-2 sm:px-6 sm:py-3 text-gray-500  ring-0 bg-transparent hover:bg-gray-200">
          <span class="whitespace-nowrap select-none text-sm sm:text-base">
            {{ getImageUrl(currentSetIndex - 1) }}
          </span>
        </UCard>
      </div>

      <!-- Current -->
      <div class="absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300">
        <UCard class="px-6 py-3 sm:px-10 sm:py-5 font-bold text-black text-lg sm:text-xl  ring-0 bg-transparent">
          <span class="whitespace-nowrap select-none">
            {{ getImageUrl(currentSetIndex) }}
          </span>
        </UCard>
      </div>

      <!-- Next -->
      <div class="absolute right-0 scale-75 opacity-70 z-10 cursor-pointer transition-all duration-300"
        @click="changePosition(1)">
        <UCard class="px-4 py-2 sm:px-6 sm:py-3 text-gray-500  ring-0 bg-transparent hover:bg-gray-200">
          <span class="whitespace-nowrap select-none text-sm sm:text-base">
            {{ getImageUrl(currentSetIndex + 1) }}
          </span>
        </UCard>
      </div>
    </div>

    <!-- Right Button -->
    <UButton color="primary" variant="ghost" icon="i-heroicons-chevron-right" size="lg" class="rounded-full"
      aria-label="Next day" @click="changePosition(1)" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

const props = defineProps({
  item: {
    type: Array as () => string[],
    required: true,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const date = defineModel('date')

const currentSetIndex = ref(0)

const numImages = computed(() => props.item.length)

const getImageUrl = (index: number) => {
  if (!numImages.value) return ''
  return props.item[(index + numImages.value) % numImages.value]
}

const changePosition = (direction: number) => {
  if (!numImages.value) return
  currentSetIndex.value =
    (currentSetIndex.value + direction + numImages.value) %
    numImages.value
}

const Vmodel = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val),
})

watchEffect(() => {
  if (props.item.length > 0) {
    Vmodel.value = props.item[currentSetIndex.value] as string
  }
})
</script>
