<template>
  <span :class="iconClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  filled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  filled: false,
})

const iconClasses = computed(() => {
  const base = 'material-symbols-outlined'
  const fill = props.filled ? 'fill-current' : ''
  const fontSize = `text-[${props.size}px]`
  
  return `${base} ${fill} ${fontSize}`
})
</script>
