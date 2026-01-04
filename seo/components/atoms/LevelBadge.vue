<template>
  <span :class="levelBadgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  level: 'A1' | 'A2' | 'B1' | 'B2'
}

const props = defineProps<Props>()

const levelBadgeClasses = computed(() => {
  const base = 'flex h-12 w-12 items-center justify-center rounded-xl font-display font-bold'
  
  const colorMap = {
    A1: 'bg-blue-50 text-blue-600 border border-blue-100',
    A2: 'bg-green-50 text-green-600 border border-green-100',
    B1: 'bg-yellow-50 text-yellow-600 border border-yellow-100',
    B2: 'bg-pink-50 text-pink-600 border border-pink-100',
  }
  
  return `${base} ${colorMap[props.level]}`
})
</script>
