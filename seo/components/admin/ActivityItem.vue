<template>
  <div class="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <div :class="['w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0', iconBgClass]">
      <Icon :size="20" :class="iconColorClass">{{ activityIcon }}</Icon>
    </div>
    
    <div class="flex-1 min-w-0">
      <p class="text-sm text-gray-900">
        <span class="font-medium">{{ activity.user }}</span>
        <span class="text-gray-600"> - {{ activity.message }}</span>
      </p>
      <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'

interface Activity {
  id: number
  type: string
  message: string
  time: string
  user: string
}

interface Props {
  activity: Activity
}

const props = defineProps<Props>()

const activityTypeMap: Record<string, { icon: string; bgClass: string; iconClass: string }> = {
  enrollment: {
    icon: 'person_add',
    bgClass: 'bg-blue-100',
    iconClass: 'text-blue-600'
  },
  course: {
    icon: 'school',
    bgClass: 'bg-green-100',
    iconClass: 'text-green-600'
  },
  payment: {
    icon: 'payments',
    bgClass: 'bg-orange-100',
    iconClass: 'text-orange-600'
  }
}

const config = computed(() => activityTypeMap[props.activity.type] || activityTypeMap.enrollment)

const activityIcon = computed(() => config.value.icon)
const iconBgClass = computed(() => config.value.bgClass)
const iconColorClass = computed(() => config.value.iconClass)
</script>
