<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  color?: string
  withPulse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  withPulse: false,
})

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider'
  const colorClass = `border border-${props.color}/20 bg-${props.color}/5 text-${props.color}`
  
  return `${base} ${colorClass}`
})
</script>
