<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const modelValue = defineModel({
  get(v) {
    if (v instanceof CalendarDate) {
      return v
    }
    return useCalendar(v as Date)
  },

})
</script>

<template>
  <UPopover>
    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar"
      class="text-nowrap bg-primary text-white border-none ring-0 hover:bg-primary-400">
      {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
    </UButton>

    <template #content>
      <UCalendar v-model="modelValue" class="p-2" />
    </template>
  </UPopover>
</template>
