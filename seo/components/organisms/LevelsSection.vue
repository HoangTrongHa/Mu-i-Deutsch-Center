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
          v-for="course in displayedCourses"
          :key="course.level"
          :level="course.level"
          :title="course.title"
          :description="course.description"
          :features="course.features.slice(0, 3)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Heading from '../atoms/Heading.vue'
import Icon from '../atoms/Icon.vue'
import LevelCard from '../molecules/LevelCard.vue'
import { useCourses } from '../../composables/users/useCourses'
import { AVAILABLE_LEVELS } from '../../constants/levels'

const { courses } = useCourses()

// Chỉ hiển thị các cấp độ có sẵn (A1, A2, B1, B2)
const displayedCourses = computed(() => {
  return courses.value.filter(course => AVAILABLE_LEVELS.includes(course.level))
})
</script>
