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
    display: 'font-display text-5xl font-black leading-[1.1] tracking-tight text-ink md:text-6xl lg:text-7xl',
    section: 'font-display text-3xl font-bold text-ink md:text-4xl',
    card: 'text-xl font-bold text-ink',
  }
  
  return variants[props.variant]
})
</script>
