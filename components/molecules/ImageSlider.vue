<template>
  <div class="flex justify-center items-center">
    <UButton @click="changeImage(-1)" :icon="'i-heroicons-arrow-left-circle-20-solid'"
      class="bg-transparent text-black hover:bg-blue-200 hover:text-blue-500 text-[50px] scale-125 z-10">
    </UButton>

    <div id="images-container"
      class="relative flex items-center justify-center overflow-hidden lg:w-[800px] w-[250px] mt-5">
      <TransitionGroup name="slide" tag="div" class="flex items-center justify-center">
        <div v-if="items.length === 2" v-for="imageIndex in [-1, 0]"
          :key="getImageUrl(currentSetIndex + imageIndex)?.block"
          class="relative transition-all duration-500 ease-in-out">
          <UIcon :name="'i-ion-ios-home'" class="lg:text-[308px] text-[62px] transition-all duration-500 ease-in-out"
            :class="['month-button', { active: isActiveImage(imageIndex), 'lg:w-48 text-gray-300 scale-75 opacity-50': !isActiveImage(imageIndex) }]">
          </UIcon>
          <span v-if="imageIndex === 1 && !isActiveImage(imageIndex)"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else-if="imageIndex === 0"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-white text-[10px] -mt-2 lg:text-[30px]">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(-1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
        </div>
        <div v-else-if="items.length === 1" v-for="imageIndex in [0]"
          :key="getImageUrl(currentSetIndex + imageIndex)?.block + 'else'"
          class="relative transition-all duration-500 ease-in-out">
          <UIcon :name="'i-ion-ios-home'" class="lg:text-[308px] text-[62px] transition-all duration-500 ease-in-out"
            :class="['month-button', { active: isActiveImage(imageIndex), 'lg:w-48 text-gray-300 scale-75 opacity-50': !isActiveImage(imageIndex) }]">
          </UIcon>
          <span v-if="imageIndex === 1 && !isActiveImage(imageIndex)"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else-if="imageIndex === 0"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-white text-[10px] -mt-2 lg:text-[30px]">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(-1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
        </div>
        <div v-else="items.length > 2" v-for="imageIndex in [-1, 0, 1]"
          class="relative transition-all duration-500 ease-in-out">
          <UIcon :name="'i-ion-ios-home'" class="lg:text-[308px] text-[62px] transition-all duration-500 ease-in-out"
            :class="['month-button', { active: isActiveImage(imageIndex), 'lg:w-48 text-gray-300 scale-75 opacity-50': !isActiveImage(imageIndex) }]">
          </UIcon>
          <span v-if="imageIndex === 1 && !isActiveImage(imageIndex)"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else-if="imageIndex === 0"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-white text-[10px] -mt-2 lg:text-[30px]">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
          <span v-else
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 text-black text-[10px] -mt-2 lg:text-[20px] cursor-pointer"
            @click="changeImage(-1)">
            {{ getImageUrl(currentSetIndex + imageIndex)?.block }}
          </span>
        </div>
      </TransitionGroup>
    </div>
    <UButton @click="changeImage(1)" icon="i-heroicons-arrow-right-circle-20-solid"
      class="bg-transparent text-black hover:bg-blue-200 hover:text-blue-500 text-[50px] scale-125 z-10">
    </UButton>
  </div>
</template>

<script setup lang="ts" generic="T">
const props = defineProps<{
  items: T[],
  modelValue?: T
}>();


const currentSetIndex = ref(0);

const numImages = computed(() => props.items.length);

const getImageUrl = (index: number) => {
  if (!props.items || props.items.length === 0) return { block: '' };
  const adjustedIndex = (index + numImages.value) % numImages.value;
  return props.items[adjustedIndex] as { block: string };
};

const changeImage = (direction: number) => {
  currentSetIndex.value = (currentSetIndex.value + direction + numImages.value) % numImages.value;
};

const isActiveImage = (imageIndex: number) => {
  return imageIndex === 0;
};


const emits = defineEmits(['update:modelValue']);

const Vmodel = computed({
  get() {
    return props.modelValue
  },
  set(e) {
    emits('update:modelValue', e)
  }
})

watchEffect(() => {
  if (props.items && props.items.length > 0) {
    Vmodel.value = props.items[currentSetIndex.value]
  }
})

</script>

<style scoped>
.slide-move {
  transition: all 0.5s ease-in-out;
}

.slide-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in-out;
  position: absolute;
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>