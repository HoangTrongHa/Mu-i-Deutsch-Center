<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonVariant, ButtonSize } from '../../types'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'level'

interface Props {
  variant?: Variant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'button',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const variantClasses = computed(() => {
  if (!props.variant) return '' // Không có variant = không có default styles
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outline: 'border border-ink/10 bg-white text-ink hover:border-primary/50 hover:text-primary hover:bg-primary-light/20',
    ghost: 'bg-transparent text-ink hover:bg-gray-100',
  }
  
  return variants[props.variant]
})

const buttonClasses = computed(() => {
  const base = 'flex items-center justify-center gap-2 rounded-full font-bold transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50'
  
  const sizes: Record<ButtonSize, string> = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  
  return `${base} ${variantClasses.value} ${sizes[props.size]}`
})
</script>
