<template>
  <div class="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/40 hover:shadow-soft">
    <div :class="['absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-all', bgColor]" />
    
    <div :class="['mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl', iconBgColor, iconColor]">
      <Icon :size="32">{{ icon }}</Icon>
    </div>
    
    <Heading level="3" variant="card">{{ title }}</Heading>
    <p class="mt-2 text-ink-light">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'
import Heading from '../atoms/Heading.vue'
import type { ColorVariant } from '../../constants'
import { COLOR_VARIANTS } from '../../constants'

interface Props {
  icon: string
  title: string
  description: string
  color?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const config = computed(() => COLOR_VARIANTS[props.color])

const bgColor = computed(() => config.value.bg)
const iconBgColor = computed(() => config.value.iconBg)
const iconColor = computed(() => config.value.iconColor)
</script>
