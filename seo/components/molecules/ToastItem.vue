<template>
  <div
    :class="[
      'min-w-80 max-w-md px-4 py-3 rounded-lg shadow-lg flex items-start gap-3 transition-all',
      typeClasses[type]
    ]"
  >
    <!-- Icon -->
    <div class="flex-shrink-0 mt-0.5">
      <Icon :name="iconName" class="w-5 h-5" />
    </div>

    <!-- Message -->
    <div class="flex-1 text-sm font-medium">
      {{ message }}
    </div>

    <!-- Close button -->
    <button
      @click="$emit('close')"
      class="flex-shrink-0 hover:opacity-70 transition-opacity"
      aria-label="Đóng thông báo"
    >
      <Icon name="close" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ToastType } from '~/composables/useToast'
import Icon from '../atoms/Icon.vue'

interface Props {
  message: string
  type: ToastType
}

const props = defineProps<Props>()

defineEmits<{
  close: []
}>()

const typeClasses: Record<ToastType, string> = {
  success: 'bg-green-50 text-green-800 border border-green-200',
  error: 'bg-red-50 text-red-800 border border-red-200',
  warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
  info: 'bg-blue-50 text-blue-800 border border-blue-200',
}

const iconName = computed(() => {
  switch (props.type) {
    case 'success':
      return 'check_circle'
    case 'error':
      return 'error'
    case 'warning':
      return 'warning'
    case 'info':
      return 'info'
  }
})
</script>
