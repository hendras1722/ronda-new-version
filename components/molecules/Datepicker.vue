<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const modelValue = defineModel({
  get(v: CalendarDate | { start: CalendarDate, end: CalendarDate }) {
    if (v instanceof CalendarDate) {
      return v
    }
    return useCalendar({
      start: v.start.toDate(getLocalTimeZone()),
      end: v.end.toDate(getLocalTimeZone())
    })
  },

})
</script>

<template>
  <UPopover>
    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar"
      class="text-nowrap bg-transparent text-black border border-black ring-0 hover:bg-primary-400 hover:border-primary hover:text-white">
      {{
        modelValue
          ? modelValue instanceof CalendarDate
            ? df.format(modelValue.toDate(getLocalTimeZone()))
            : modelValue.start && modelValue.end
              ? df.format(modelValue.start.toDate(getLocalTimeZone())) + ' - ' +
              df.format(modelValue.end.toDate(getLocalTimeZone()))
              : 'Select a date'
          : 'Select a date'
      }}
    </UButton>

    <template #content>
      <UCalendar range v-model="modelValue" class="p-2" />
    </template>
  </UPopover>
</template>
