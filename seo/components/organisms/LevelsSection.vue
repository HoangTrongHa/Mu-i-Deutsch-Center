<template>
  <section class="px-4 py-20 md:px-10" id="levels">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Heading level="2" variant="section">Các Cấp Độ Khóa Học</Heading>
          <p class="mt-2 text-ink-light">Chọn cấp độ phù hợp với trình độ hiện tại của bạn.</p>
        </div>
        <a href="#" class="group flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
          Làm Bài Test Đầu Vào
          <Icon :size="20" class="transition-transform group-hover:translate-x-1">arrow_forward</Icon>
        </a>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <LevelCard
          level="A1"
          title="Người Mới Bắt Đầu"
          description="Nền tảng & Cơ bản. Bắt đầu hành trình tại đây."
          :features="['Chào hỏi cơ bản', 'Số đếm & Thời gian', '8 Tuần']"
        />
        <LevelCard
          level="A2"
          title="Sơ Cấp"
          description="Giao tiếp hàng ngày. Xây dựng sự tự tin."
          :features="['Thói quen hàng ngày', 'Thì quá khứ', '10 Tuần']"
        />
        <LevelCard
          level="B1"
          title="Trung Cấp"
          description="Sử dụng độc lập. Thảo luận ý kiến."
          :features="['Câu phức', 'Công việc & Du lịch', '12 Tuần']"
        />
        <LevelCard
          level="B2"
          title="Trung Cao Cấp"
          description="Thành thạo nâng cao. Trình độ chuyên nghiệp."
          :features="['Chủ đề trừu tượng', 'Truyền thông bản ngữ', '14 Tuần']"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import Icon from '../atoms/Icon.vue'
import LevelCard from '../molecules/LevelCard.vue'
</script>
