<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'danger'
  withPulse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  withPulse: false,
})

const colorVariants = {
  primary: 'border-primary/20 bg-primary/5 text-primary',
  accent: 'border-accent/20 bg-accent/5 text-accent',
  success: 'border-green-500/20 bg-green-500/5 text-green-600',
  warning: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-600',
  danger: 'border-red-500/20 bg-red-500/5 text-red-600',
}

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider'
  const colorClass = colorVariants[props.color]
  
  return `${base} ${colorClass}`
})
</script>
