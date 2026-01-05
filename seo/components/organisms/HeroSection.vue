<template>
  <section class="relative px-4 py-12 md:px-10 md:py-20 lg:py-28">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
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

        <p class="mx-auto max-w-2xl text-lg text-ink-light lg:mx-0">
          Các khóa học từ A1-B2 được thiết kế bài bản, rõ ràng. Trải nghiệm cảm giác tập trung như viết trên trang vở mới cùng các công cụ học tập hiện đại.
        </p>

        <div class="mt-4 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <Button variant="primary" size="lg" class="text-black">
            Đăng Ký Ngay
          </Button>
          <Button variant="outline" size="lg">
            <Icon :size="20">play_circle</Icon>
            <span class="ml-2">Xem Giáo Trình</span>
          </Button>
        </div>

        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-ink-light lg:justify-start">
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
      <div class="relative flex flex-1 items-center justify-center lg:justify-end">
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
          <div class="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl border border-gray-100 bg-white p-5 shadow-paper md:bottom-10 md:left-0">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon>school</Icon>
              </div>
              <div>
                <div class="text-xs font-medium text-ink-light">Tiến độ hiện tại</div>
                <div class="text-sm font-bold text-ink">Giáo trình C1: 85%</div>
              </div>
            </div>
            <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div class="h-full w-[85%] rounded-full bg-primary" />
            </div>
          </div>

          <!-- Handwritten note -->
          <div class="handwritten-note absolute -right-4 top-10 w-40 rotate-6 rounded-lg bg-[#ffffeb] p-4 text-ink shadow-lg md:right-0 border border-yellow-200/50">
            <p class="text-xl font-bold leading-tight text-ink font-handwritten">Bắt đầu ngay!</p>
            <p class="mt-1 text-lg leading-tight text-ink-light font-handwritten">Gia nhập cùng 10k+ học viên.</p>
            <span class="absolute -bottom-8 right-0 text-accent handwritten-arrow text-5xl">↘</span>
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
