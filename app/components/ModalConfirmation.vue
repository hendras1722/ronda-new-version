<script lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue';

export interface Props {
  title?: string;
  description?: string;
  headerIcon?: Partial<ButtonProps>;
  buttonCancel?: Partial<ButtonProps> | false;
  buttonConfirm?: Partial<ButtonProps>;
  onConfirm?: (event: MouseEvent) => Promise<void> | void;
  labelCancel?: string;
  labelConfirm?: string;
  withNote?: boolean;
  noteLabel?: string;
  withDescription?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  title: 'Submit Data',
  description: 'Are you sure you want to Submit?',
  withDescription: true,
  withNote: false,
  noteLabel: 'Note (optional)',
  buttonCancel: undefined,
});

const emits = defineEmits<{
  (e: 'close', confirmed: boolean): void;
}>();

const open = defineModel<boolean>('open', { default: false });
const modelValue = defineModel<string>('default', { default: '' });

const loading = ref(false);

async function onConfirmed(event: MouseEvent) {
  try {
    if (typeof props.onConfirm !== 'function') {
      emits('close', true);
      return;
    }

    loading.value = true;
    await props.onConfirm(event);

    emits('close', true);
    loading.value = false;
  }
  catch (err: any) {
    loading.value = false;
    // useRequestError(err);
  }
}
</script>

<template>
  <UModal v-model:open="open" close :ui="{
    overlay: 'z-[80]',
    content: 'z-[82]',
    header: 'relative',
    footer: 'justify-end gap-x-4',
  }" :dismissible="!loading">
    <template #header="{ close }">
      <div class="flex items-center gap-2.5">
        <slot name="header-icon">
          <UButton icon="ph:check-circle-fill" variant="soft"
            v-bind="(typeof props.headerIcon === 'object' ? props.headerIcon as Partial<ButtonProps> : {})"
            class="rounded-lg" as="div" />
        </slot>
        <div class="inline-flex grow shrink font-semibold">
          {{ props.title }}
        </div>
      </div>
      <UButton color="neutral" variant="ghost" icon="ph:x-bold" class="absolute top-2.5 right-2.5 p-1"
        @click="close()" />
    </template>
    <template #body>
      <div class="flex flex-col gap-3">
        <p v-if="withDescription">
          {{ props.description }}
        </p>
        <UFormField v-if="withNote">
          <template #label>
            <div class="text-[#707070]">
              {{ props.noteLabel }}
            </div>
          </template>
          <InputTextArea v-model="modelValue" :max="120" />
        </UFormField>
      </div>
    </template>

    <template #footer>
      <UButton v-if="props.buttonCancel !== false" data-test="cancel_confirmation" :label="labelCancel || 'Cancel'"
        color="neutral" variant="outline"
        v-bind="(typeof props.buttonCancel === 'object' ? props.buttonCancel as Partial<ButtonProps> : {})" class="px-6"
        @click="emits('close', false)" />
      <UButton data-test="submit_confirmation" :label="labelConfirm || 'Yes'" class="px-6"
        v-bind="(typeof props.buttonConfirm === 'object' ? props.buttonConfirm as Partial<ButtonProps> : {})"
        :loading="loading" @click="onConfirmed" />
    </template>
  </UModal>
</template>
