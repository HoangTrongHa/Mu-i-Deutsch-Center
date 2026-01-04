<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-10">
    <header class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gray-200 bg-white/90 px-6 py-3 backdrop-blur-md shadow-sm">
      <Logo />
      <NavMenu />
      
      <div class="flex items-center gap-4">
        <Link href="#" variant="default" class="hidden md:block">
          Đăng Nhập
        </Link>
        <Button variant="primary" size="md">
          Học Thử Miễn Phí
        </Button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import Logo from '../molecules/Logo.vue'
import NavMenu from '../molecules/NavMenu.vue'
import Link from '../atoms/Link.vue'
import Button from '../atoms/Button.vue'
</script>
