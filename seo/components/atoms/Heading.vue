<template>
  <component :is="tag" :class="headingClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { HeadingLevel, HeadingVariant } from '../../types'

interface Props {
  level?: HeadingLevel | `${HeadingLevel}`
  variant?: HeadingVariant
}

const props = withDefaults(defineProps<Props>(), {
  level: 2,
  variant: 'display',
})

const numericLevel = computed(() => {
  return typeof props.level === 'string' ? parseInt(props.level) as HeadingLevel : props.level
})

const tag = computed(() => `h${numericLevel.value}`)

const headingClasses = computed(() => {
  const variants: Record<HeadingVariant, string> = {
    display: 'font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-ink',
    section: 'font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink',
    card: 'text-lg sm:text-xl font-bold text-ink',
  }
  
  return variants[props.variant]
})
</script>
