<template>
  <section class="relative overflow-hidden px-4 py-20">
    <div class="mx-auto max-w-4xl rounded-[3rem] border border-gray-100 bg-white p-10 text-center shadow-xl md:p-16 relative">
      <div class="relative z-10">
        <Heading level="2" variant="display" class="text-4xl md:text-5xl">
          Sẵn sàng lấp đầy ô kiến thức?
        </Heading>
        <p class="mt-6 text-lg text-ink-light">
          Tham gia cùng hơn 10.000 học viên đang chinh phục tiếng Đức với lộ trình bài bản của chúng tôi.
        </p>
        
        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg">
            Học Thử Miễn Phí
          </Button>
          <Link href="#" variant="underline">
            Trò chuyện với tư vấn viên
          </Link>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
      <div class="absolute top-8 left-8 w-8 h-8 border-t-4 border-l-4 border-primary/20 rounded-tl-xl" />
      <div class="absolute bottom-8 right-8 w-8 h-8 border-b-4 border-r-4 border-primary/20 rounded-br-xl" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import Button from '../atoms/Button.vue'
import Link from '../atoms/Link.vue'
</script>
