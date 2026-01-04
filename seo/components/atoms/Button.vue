<template>
  <button
    :class="buttonClasses"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const base = 'flex items-center justify-center rounded-full font-bold transition-all'
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:scale-105 shadow-md shadow-accent/20',
    secondary: 'bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-md shadow-primary/20',
    outline: 'border border-ink/10 bg-white text-ink hover:border-primary/50 hover:text-primary hover:bg-primary-light/20',
  }
  
  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})
</script>
