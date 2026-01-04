<template>
  <div class="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-soft paper-shadow" :class="hoverBorderColor">
    <div class="mb-4 flex items-center justify-between">
      <LevelBadge :level="level">{{ level }}</LevelBadge>
      <Icon :size="24" :class="iconColor">{{ levelIcon }}</Icon>
    </div>
    
    <Heading level="3" variant="card">{{ title }}</Heading>
    <p class="mt-2 text-sm text-ink-light">{{ description }}</p>
    
    <div class="my-4 h-px w-full bg-gray-100" />
    
    <ul class="mb-6 space-y-2 text-sm text-ink-light">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
        <Icon :size="16" :class="checkIconColor">check</Icon>
        {{ feature }}
      </li>
    </ul>
    
    <Button :variant="'outline'" size="md" :class="buttonClasses">
      Xem Giáo Trình {{ level }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'
import Heading from '../atoms/Heading.vue'
import LevelBadge from '../atoms/LevelBadge.vue'
import Button from '../atoms/Button.vue'

interface Props {
  level: 'A1' | 'A2' | 'B1' | 'B2'
  title: string
  description: string
  features: string[]
}

const props = defineProps<Props>()

const levelConfig = {
  A1: {
    icon: 'looks_one',
    hoverBorder: 'hover:border-blue-200',
    iconColor: 'text-gray-300 group-hover:text-blue-400 transition-colors',
    checkColor: 'text-blue-500',
    buttonClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
  },
  A2: {
    icon: 'looks_two',
    hoverBorder: 'hover:border-green-200',
    iconColor: 'text-gray-300 group-hover:text-green-400 transition-colors',
    checkColor: 'text-green-500',
    buttonClass: 'bg-green-50 text-green-700 hover:bg-green-100',
  },
  B1: {
    icon: 'looks_3',
    hoverBorder: 'hover:border-yellow-200',
    iconColor: 'text-gray-300 group-hover:text-yellow-400 transition-colors',
    checkColor: 'text-yellow-500',
    buttonClass: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
  },
  B2: {
    icon: 'looks_4',
    hoverBorder: 'hover:border-pink-200',
    iconColor: 'text-gray-300 group-hover:text-pink-400 transition-colors',
    checkColor: 'text-pink-500',
    buttonClass: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
  },
}

const config = computed(() => levelConfig[props.level])
const levelIcon = computed(() => config.value.icon)
const hoverBorderColor = computed(() => config.value.hoverBorder)
const iconColor = computed(() => config.value.iconColor)
const checkIconColor = computed(() => config.value.checkColor)
const buttonClasses = computed(() => config.value.buttonClass)
</script>
