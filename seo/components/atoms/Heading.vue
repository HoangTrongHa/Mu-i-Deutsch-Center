<template>
  <component :is="tag" :class="headingClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
  variant?: 'display' | 'section' | 'card'
}

const props = withDefaults(defineProps<Props>(), {
  level: 2,
  variant: 'display',
})

const numericLevel = computed(() => {
  return typeof props.level === 'string' ? parseInt(props.level) : props.level
})

const tag = computed(() => `h${numericLevel.value}`)

const headingClasses = computed(() => {
  const variants = {
    display: 'font-display text-5xl font-black leading-[1.1] tracking-tight text-ink md:text-6xl lg:text-7xl',
    section: 'font-display text-3xl font-bold text-ink md:text-4xl',
    card: 'text-xl font-bold text-ink',
  }
  
  return variants[props.variant]
})
</script>
