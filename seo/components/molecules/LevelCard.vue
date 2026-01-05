<template>
  <div 
    :class="['group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-soft paper-shadow', hoverBorderColor]"
  >
    <div class="mb-4 flex items-center justify-between">
      <LevelBadge :level="level" />
      <Icon :size="24" :class="iconColor">{{ levelIcon }}</Icon>
    </div>
    
    <Heading level="3" variant="card">{{ title }}</Heading>
    <p class="mt-2 text-sm text-ink-light">{{ description }}</p>
    
    <div class="my-4 h-px w-full bg-gray-100" />
    
    <ul class="mb-6 flex-1 space-y-2 text-sm text-ink-light">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
        <Icon :size="16" :class="checkIconColor">check</Icon>
        {{ feature }}
      </li>
    </ul>
    
    <Button 
      variant="outline" 
      size="md" 
      :class="buttonClasses"
      @click="handleClick"
    >
      Xem Giáo Trình {{ level }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LevelBadge from '../atoms/LevelBadge.vue'
import Icon from '../atoms/Icon.vue'
import Heading from '../atoms/Heading.vue'
import Button from '../atoms/Button.vue'
import type { Level } from '../../types'
import { getLevelConfig } from '../../constants'

interface Props {
  level: Level
  title: string
  description: string
  features: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: []
}>()

const config = computed(() => getLevelConfig(props.level))

const levelIcon = computed(() => config.value.icon)
const hoverBorderColor = computed(() => config.value.hoverBorder)
const iconColor = computed(() => config.value.iconColor)
const checkIconColor = computed(() => config.value.checkColor)
const buttonClasses = computed(() => config.value.buttonClass)

const handleClick = () => {
  emit('click')
}
</script>
