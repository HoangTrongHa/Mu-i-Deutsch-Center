<template>
  <NuxtLink
    v-if="isNuxtLink"
    :to="href"
    :class="linkClasses"
    @click="handleClick"
  >
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="href"
    :class="linkClasses"
    :target="target"
    :rel="rel"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { LinkVariant } from '../../types'

interface Props {
  href?: string
  variant?: LinkVariant
  target?: '_blank' | '_self' | '_parent' | '_top'
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'default',
  target: '_self',
  external: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isNuxtLink = computed(() => {
  return props.href.startsWith('/') && !props.external
})

const rel = computed(() => {
  return props.target === '_blank' ? 'noopener noreferrer' : undefined
})

const linkClasses = computed(() => {
  const variants: Record<LinkVariant, string> = {
    default: 'text-ink hover:text-primary transition-colors',
    nav: 'text-sm font-medium text-ink-light hover:text-primary transition-colors',
    'nav-active': 'text-sm font-medium text-ink hover:text-primary transition-colors',
    underline: 'text-sm font-semibold text-ink underline decoration-primary underline-offset-4 hover:text-primary transition-colors',
  }
  
  return variants[props.variant]
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>
