<template>
  <span :class="levelBadgeClasses">
    <slot>{{ level }}</slot>
  </span>
</template>

<script setup lang="ts">
import type { Level } from '../../types'
import { getLevelConfig } from '../../constants'

interface Props {
  level: Level
}

const props = defineProps<Props>()

const levelBadgeClasses = computed(() => {
  const config = getLevelConfig(props.level)
  const base = 'flex h-12 w-12 items-center justify-center rounded-xl font-display font-bold border'
  
  return `${base} ${config.bgColor} ${config.textColor} ${config.borderColor}`
})
</script>
