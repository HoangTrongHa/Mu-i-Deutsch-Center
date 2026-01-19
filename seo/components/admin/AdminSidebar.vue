<template>
  <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
    <!-- Logo -->
    <div class="h-16 flex items-center justify-center border-b border-gray-200">
      <h1 class="text-xl font-bold text-primary">German Course Admin</h1>
    </div>
    
    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-4">
      <ul class="space-y-1">
        <li v-for="item in menuItems" :key="item.key">
          <NuxtLink
            :to="item.path"
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              activeMenu === item.key
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            <Icon :size="20">{{ item.icon }}</Icon>
            <span class="font-medium">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    
    <!-- User Info -->
    <div class="p-4 border-t border-gray-200">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          A
        </div>
        <div class="flex-1">
          <p class="font-medium text-sm">Admin User</p>
          <p class="text-xs text-gray-500">admin@german.com</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'

interface Props {
  activeMenu?: string
}

const props = withDefaults(defineProps<Props>(), {
  activeMenu: 'dashboard'
})

const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/admin'
  },
  {
    key: 'courses',
    label: 'Khóa Học',
    icon: 'school',
    path: '/admin/courses'
  },
  {
    key: 'students',
    label: 'Học Viên',
    icon: 'people',
    path: '/admin/students'
  },
  {
    key: 'teachers',
    label: 'Giáo Viên',
    icon: 'person',
    path: '/admin/teachers'
  },
  {
    key: 'schedule',
    label: 'Lịch Học',
    icon: 'calendar_today',
    path: '/admin/schedule'
  },
  {
    key: 'reports',
    label: 'Báo Cáo',
    icon: 'assessment',
    path: '/admin/reports'
  },
  {
    key: 'settings',
    label: 'Cài Đặt',
    icon: 'settings',
    path: '/admin/settings'
  }
]
</script>
