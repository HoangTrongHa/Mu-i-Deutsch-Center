<template>
  <section class="relative px-4 py-12 md:px-10 md:py-20 lg:py-28">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-40 lg:flex-row">
      <!-- Left Column - Content -->
      <div class="flex flex-1 flex-col gap-6 text-center lg:text-left">
        <div class="inline-flex w-fit items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 lg:self-start">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span class="text-xs font-semibold uppercase tracking-wider text-primary">
            Mới: Khóa C1 Đã Ra Mắt
          </span>
        </div>

        <Heading level="1" variant="display">
          Chinh Phục Tiếng Đức.<br />
          <span class="text-primary relative inline-block">
            Từng Bước
            <svg
              class="absolute -bottom-2 left-0 w-full h-3 text-accent/30 -z-10"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="8" />
            </svg>
          </span>
          Vững Chắc.
        </Heading>

        <p class="mx-auto max-w-2xl text-base md:text-lg text-ink-light lg:mx-0">
          Các khóa học từ A1-B2 được thiết kế bài bản, rõ ràng. Trải nghiệm cảm giác tập trung như viết trên trang vở mới cùng các công cụ học tập hiện đại.
        </p>

        <div class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start w-full sm:w-auto">
          <Button variant="primary" size="lg" class="text-black w-full sm:w-auto">
            Đăng Ký Ngay
          </Button>
          <Button variant="outline" size="lg" class="w-full sm:w-auto">
            <Icon :size="20">play_circle</Icon>
            <span class="ml-2">Xem Giáo Trình</span>
          </Button>
        </div>

        <div class="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-ink-light lg:justify-start">
          <div class="flex items-center gap-1.5">
            <Icon :size="20" class="text-primary">check_circle</Icon>
            <span>Không cần thẻ tín dụng</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon :size="20" class="text-primary">check_circle</Icon>
            <span>Hoàn tiền trong 14 ngày</span>
          </div>
        </div>
      </div>

      <!-- Right Column - Hero Image -->
      <div class="relative flex flex-1 items-center justify-center lg:justify-end mb-20 sm:mb-24 md:mb-0">
        <div class="relative aspect-square w-full max-w-[500px]">
          <!-- Background decorative elements -->
          <div class="absolute inset-0 rotate-3 rounded-[3rem] border-2 border-dashed border-primary/20 bg-white/40 backdrop-blur-sm" />
          
          <!-- Main image -->
          <div
            class="absolute inset-0 -rotate-2 rounded-[3rem] border border-gray-200 bg-white shadow-2xl overflow-hidden"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5-tN_Mh50RCa0X8CQidhWDd271qrf7zWhH-2R4Hvn52ILEzUtvn87Vvc2o5OtSlnJL7Dp6Owithcv7D_6WmfSnVXJMaZOObrQH9z0X8l1d000H6a6qDD6SSj-A7LXK4VGBmPiF4jIHJXPtu5aepdowtpVTrWuIRzYAX_pvuC9vHnnQFLB6h74qvhAJpGOXPiOewlrvk7-usm_caBEk1XcZzJNhlUmC-ZgFTmvgHAHbOD4Ajfma3tzD_NNURXSZmnSPRSeLgokW_yw'); background-size: cover; background-position: center;"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60" />
          </div>

          <!-- Progress card -->
          <div class="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:-bottom-4 md:-left-2 w-[220px] sm:w-[240px] md:w-[260px] rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-paper lg:bottom-10 lg:left-0">
            <div class="flex items-center gap-3 sm:gap-4">
              <div class="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                <Icon :size="24">school</Icon>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-xs sm:text-sm font-medium text-ink-light mb-1">Tiến độ hiện tại</div>
                <div class="text-sm sm:text-base font-bold text-ink whitespace-nowrap">Giáo trình C1: 85%</div>
              </div>
            </div>
            <div class="mt-4 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div class="h-full w-[85%] rounded-full bg-primary" />
            </div>
          </div>

          <!-- Handwritten note -->
          <div class="handwritten-note absolute right-2 top-[-15px] sm:right-4 sm:top-8 md:-right-2 md:top-10 w-28 sm:w-32 md:w-40 rotate-6 rounded-lg bg-[#ffffeb] p-2.5 sm:p-3 md:p-4 text-ink shadow-lg lg:right-0 border border-yellow-200/50">
            <p class="text-base sm:text-lg md:text-xl font-bold leading-tight text-ink font-handwritten">Bắt đầu ngay!</p>
            <p class="mt-0.5 sm:mt-1 text-sm sm:text-base md:text-lg leading-tight text-ink-light font-handwritten">Gia nhập cùng 10k+ học viên.</p>
            <span class="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 right-0 text-accent handwritten-arrow text-3xl sm:text-4xl md:text-5xl">↘</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import Button from '../atoms/Button.vue'
import Icon from '../atoms/Icon.vue'
</script>
