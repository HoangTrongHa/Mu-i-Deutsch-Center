<script setup lang="ts">
const { courses } = useCourses()

useHead({
  title: 'Khóa học tiếng Đức A1-C2',
  meta: [
    {
      name: 'description',
      content: 'Khóa học tiếng Đức từ A1 đến C2 tại Muối Deutsch Center.  Giáo viên bản ngữ, cam kết đầu ra chứng chỉ Goethe.  Học phí hợp lý, lịch học linh hoạt.'
    },
    {
      name: 'keywords',
      content: 'khóa học tiếng đức, học tiếng đức A1, học tiếng đức B1, luyện thi goethe, trung tâm tiếng đức'
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <!-- Page Header -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <Heading level="1" class="mb-4 font-handwritten text-4xl md:text-5xl">
            Các khóa học tiếng Đức 🇩🇪
          </Heading>
          <p class="text-xl max-w-3xl mx-auto">
            Từ A1 cơ bản đến C2 chuyên sâu - Chọn khóa học phù hợp với mục tiêu của bạn
          </p>
        </div>
      </section>

      <!-- Courses Grid -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="course in courses" 
            :key="course.level"
            :to="`/khoa-hoc/${course.level. toLowerCase()}`"
            class="block group"
          >
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1">
              <!-- Badge Level -->
              <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 text-center">
                <LevelBadge :level="course.level" class="inline-block mb-2 text-2xl" />
                <h3 class="text-2xl font-bold mt-2">{{ course.title }}</h3>
              </div>

              <!-- Content -->
              <div class="p-6">
                <p class="text-gray-600 mb-4 line-clamp-3">{{ course.description }}</p>

                <!-- Info Grid -->
                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-center gap-2">
                    <Icon name="schedule" class="text-blue-600" />
                    <span><strong>Thời lượng:</strong> {{ course.duration }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="event" class="text-blue-600" />
                    <span><strong>Buổi học:</strong> {{ course.sessions }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="schedule" class="text-blue-600" />
                    <span><strong>Lịch: </strong> {{ course.schedule }}</span>
                  </div>
                </div>

                <!-- Price -->
                <div class="text-3xl font-bold text-blue-600 mb-4">
                  {{ course.price. toLocaleString('vi-VN') }}đ
                </div>

                <!-- Features -->
                <ul class="space-y-2 mb-6">
                  <li v-for="feature in course.features. slice(0, 3)" :key="feature" class="flex items-start gap-2 text-sm">
                    <Icon name="check_circle" class="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>

                <!-- CTA Button -->
                <Button variant="primary" class="w-full group-hover:scale-105 transition-transform">
                  Xem chi tiết
                  <Icon name="arrow_forward" class="ml-2" />
                </Button>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- CTA Section -->
      <CTASection />
    </main>

    <Footer />
  </div>
</template>