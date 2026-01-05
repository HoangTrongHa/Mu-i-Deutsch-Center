<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-10">
    <header class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gray-200 bg-white/90 px-6 py-3 backdrop-blur-md shadow-sm">
      <Logo />
      <NavMenu />
      
      <div class="flex items-center gap-4">
        <Link href="#" variant="default" class="hidden md:block">
          Đăng Nhập
        </Link>
        <Button variant="primary" size="md" class="hidden md:flex">
          Học Thử Miễn Phí
        </Button>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="flex md:hidden items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon :size="24">{{ isMenuOpen ? 'close' : 'menu' }}</Icon>
        </button>
      </div>
    </header>
    
    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden mx-auto mt-2 max-w-7xl rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
      >
        <nav class="flex flex-col p-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.href"
            :to="item.href"
            :class="mobileLinkClasses(item.active)"
            @click="handleMobileClick($event, item.href)"
          >
            {{ item.label }}
          </NuxtLink>
          
          <div class="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href="#" variant="default">
              Đăng Nhập
            </Link>
            <Button variant="primary" size="md" class="w-full">
              Học Thử Miễn Phí
            </Button>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Link from '../atoms/Link.vue'
import Button from '../atoms/Button.vue'
import Icon from '../atoms/Icon.vue'
import Logo from '../molecules/Logo.vue'
import NavMenu from '../molecules/NavMenu.vue'
import type { MenuItem } from '../../types'

const isMenuOpen = ref(false)

const menuItems: MenuItem[] = [
  { label: 'Trang chủ', href: '/', active: true },
  { label: 'Các Khóa Học', href: '/#levels' },
  { label: 'Giới Thiệu', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên Hệ', href: '/#contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const mobileLinkClasses = (isActive?: boolean) => {
  const base = 'px-4 py-3 text-base font-medium transition-colors rounded-lg'
  const activeClass = isActive ? 'text-ink bg-primary/5' : 'text-ink-light'
  return `${base} ${activeClass} hover:text-primary hover:bg-primary/5`
}

const handleMobileClick = (event: Event, href: string) => {
  isMenuOpen.value = false
  
  // Check if it's a hash link on the same page
  if (href.startsWith('/#')) {
    event.preventDefault()
    const target = href.substring(2)
    const element = document.getElementById(target)
    
    if (element) {
      const headerOffset = 100
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
