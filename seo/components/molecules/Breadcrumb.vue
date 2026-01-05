<script setup lang="ts">
import Icon from '../atoms/Icon.vue'
import type { BreadcrumbItem } from '../../types'

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<template>
  <nav class="text-sm mb-8" aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 flex-wrap">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <NuxtLink 
          v-if="item.to"
          :to="item.to"
          class="text-blue-600 hover:underline transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-gray-600">
          {{ item.label }}
        </span>
        
        <Icon 
          v-if="index < items.length - 1"
          :size="16"
          class="text-gray-400"
        >
          chevron_right
        </Icon>
      </li>
    </ol>
  </nav>
</template>