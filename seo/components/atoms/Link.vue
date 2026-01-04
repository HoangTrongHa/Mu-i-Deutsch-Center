<template>
  <a
    :href="href"
    :class="linkClasses"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  href?: string
  variant?: 'default' | 'nav' | 'nav-active' | 'underline'
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'default',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const linkClasses = computed(() => {
  const variants = {
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
