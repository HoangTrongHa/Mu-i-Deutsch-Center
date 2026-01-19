<template>
  <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
    <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
    
    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <button class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <Icon :size="24" class="text-gray-600">notifications</Icon>
        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      
      <!-- User Menu -->
      <button class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
        <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          A
        </div>
        <Icon :size="20" class="text-gray-600">expand_more</Icon>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'

interface Props {
  title: string
}

defineProps<Props>()
</script>
