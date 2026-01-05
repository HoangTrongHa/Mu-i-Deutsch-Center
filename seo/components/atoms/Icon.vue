<template>
  <span 
    :class="iconClasses"
    :style="iconStyle"
  >
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
  const base = 'material-symbols-outlined inline-flex items-center justify-center'
  const fill = props.filled ? 'fill-current' : ''
  
  return `${base} ${fill}`
})

const iconStyle = computed(() => ({
  fontSize: `${props.size}px`,
  width: `${props.size}px`,
  height: `${props.size}px`,
}))
</script>
