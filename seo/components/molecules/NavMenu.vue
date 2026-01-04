<template>
  <nav class="hidden md:flex items-center gap-8">
    <Link
      v-for="item in menuItems"
      :key="item.href"
      :href="item.href"
      :variant="item.active ? 'nav-active' : 'nav'"
    >
      {{ item.label }}
    </Link>
  </nav>
</template>

<script setup lang="ts">
import Link from '../atoms/Link.vue'

interface MenuItem {
  label: string
  href: string
  active?: boolean
}

const menuItems: MenuItem[] = [
  { label: 'Trang chủ', href: '#', active: true },
  { label: 'Các Khóa Học', href: '#levels' },
  { label: 'Giới Thiệu', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Liên Hệ', href: '#contact' },
]
</script>
