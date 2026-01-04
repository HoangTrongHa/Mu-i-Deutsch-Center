<template>
  <section class="bg-white/50 backdrop-blur-sm px-4 py-16 md:px-10 border-y border-dashed border-primary/20" id="about">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center md:text-left">
        <Heading level="2" variant="section">Tại Sao Chọn Chúng Tôi?</Heading>
        <p class="mt-4 max-w-2xl text-ink-light">
          Phương pháp của chúng tôi kết hợp sự kỷ luật của trường lớp truyền thống với sự linh hoạt của các ứng dụng hiện đại.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          icon="border_all"
          title="Lộ Trình Bài Bản"
          description="Lộ trình rõ ràng từ A1 đến B2, được sắp xếp khoa học như những dòng kẻ trên trang vở. Bạn sẽ không bao giờ cảm thấy lạc lõng."
          color="primary"
        />
        <FeatureCard
          icon="face"
          title="Giáo Viên Bản Ngữ"
          description="Học phát âm chuẩn và văn hóa từ các giáo viên bản ngữ có chứng chỉ, người sẽ trực tiếp sửa bài cho bạn."
          color="accent"
        />
        <FeatureCard
          icon="schedule"
          title="Lịch Học Linh Hoạt"
          description="Học theo tốc độ của riêng bạn với thư viện video, bài tập trắc nghiệm và sự hỗ trợ từ cộng đồng."
          color="primary"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import FeatureCard from '../molecules/FeatureCard.vue'
</script>
