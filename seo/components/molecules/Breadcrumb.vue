<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
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
          name="chevron_right"
          class="text-gray-400 text-sm"
        />
      </li>
    </ol>
  </nav>
</template>