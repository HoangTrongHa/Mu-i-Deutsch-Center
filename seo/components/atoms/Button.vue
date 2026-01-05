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

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
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

const buttonClasses = computed(() => {
  const base = 'flex items-center justify-center gap-2 rounded-full font-bold transition-all'
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:scale-105 shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    secondary: 'bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-md shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    outline: 'border border-ink/10 bg-white text-ink hover:border-primary/50 hover:text-primary hover:bg-primary-light/20 disabled:opacity-50 disabled:cursor-not-allowed',
  }
  
  const sizes: Record<ButtonSize, string> = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})
</script>
