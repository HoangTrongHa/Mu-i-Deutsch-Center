<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-4">
      <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', bgColorClass]">
        <Icon :size="24" :class="iconColorClass">{{ icon }}</Icon>
      </div>
      <span v-if="trend" :class="['text-sm font-medium', trendColorClass]">
        {{ trend }}
      </span>
    </div>
    
    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ value }}</h3>
    <p class="text-sm text-gray-500">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'

interface Props {
  title: string
  value: string | number
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange'
  trend?: string
}

const props = defineProps<Props>()

const colorMap = {
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    trend: 'text-blue-600'
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    trend: 'text-green-600'
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    trend: 'text-purple-600'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    trend: 'text-orange-600'
  }
}

const bgColorClass = computed(() => colorMap[props.color].bg)
const iconColorClass = computed(() => colorMap[props.color].icon)
const trendColorClass = computed(() => colorMap[props.color].trend)
</script>
