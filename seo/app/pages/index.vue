<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-paper text-ink notebook-bg selection:bg-primary/20">
    <Header />
    
    <main class="flex-grow pt-24">
      <HeroSection />
      <FeaturesSection />
      <LevelsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../../components/organisms/Header.vue'
import HeroSection from '../../components/organisms/HeroSection.vue'
import FeaturesSection from '../../components/organisms/FeaturesSection.vue'
import LevelsSection from '../../components/organisms/LevelsSection.vue'
import TestimonialsSection from '../../components/organisms/TestimonialsSection.vue'
import CTASection from '../../components/organisms/CTASection.vue'
import Footer from '../../components/organisms/Footer.vue'

useHead({
  title: 'German Grid - Chinh Phục Tiếng Đức Bài Bản',
  meta: [
    {
      name: 'description',
      content: 'Chinh phục tiếng Đức từ A1 đến B2 với các khóa học bài bản theo phong cách vở ghi chép. Học cùng giáo viên bản ngữ với lịch trình linh hoạt.',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
    },
  ],
})
</script>
