<template>
  <nav class="hidden md:flex items-center gap-8">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.href"
      :to="item.href"
      :class="linkClasses(item.active)"
      @click="handleClick($event, item.href)"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { MenuItem } from '../../types'

const menuItems: MenuItem[] = [
  { label: 'Trang chủ', href: '/', active: true },
  { label: 'Các Khóa Học', href: '/#levels' },
  { label: 'Giới Thiệu', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên Hệ', href: '/#contact' },
]

const linkClasses = (isActive?: boolean) => {
  const base = 'text-sm font-medium transition-colors'
  const activeClass = isActive ? 'text-ink' : 'text-ink-light'
  return `${base} ${activeClass} hover:text-primary`
}

const handleClick = (event: Event, href: string) => {
  // Check if it's a hash link on the same page
  if (href.startsWith('/#')) {
    event.preventDefault()
    const target = href.substring(2) // Remove /#
    const element = document.getElementById(target)
    
    if (element) {
      const headerOffset = 100 // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}
</script>
