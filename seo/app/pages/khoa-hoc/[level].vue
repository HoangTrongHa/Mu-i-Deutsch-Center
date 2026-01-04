<script setup lang="ts">
const route = useRoute()
const level = route.params.level.toString().toUpperCase()

const { getCourseByLevel } = useCourses()
const course = getCourseByLevel(level)

if (!course) {
  throw createError({ 
    statusCode: 404, 
    message: 'Khóa học không tồn tại',
    fatal: true
  })
}

useHead({
  title: `Khóa học ${course.title}`,
  meta: [
    { 
      name: 'description', 
      content: `${course.description} Học phí ${course.price.toLocaleString('vi-VN')}đ.  ${course.duration}, ${course.sessions}.  Đăng ký ngay! `
    },
    {
      name: 'keywords',
      content: `khóa học tiếng đức ${course.level}, học tiếng đức ${course.level}, luyện thi goethe ${course.level}`
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div class="container mx-auto px-4">
          <Breadcrumb 
            :items="[
              { label: 'Trang chủ', to: '/' },
              { label: 'Khóa học', to: '/khoa-hoc' },
              { label: course.title }
            ]"
            class="mb-6"
          />
          
          <LevelBadge :level="level" class="mb-4 text-3xl" />
          <Heading level="1" class="mb-6 text-4xl md:text-5xl font-handwritten">
            {{ course.title }}
          </Heading>
          <p class="text-2xl mb-8 max-w-3xl">
            {{ course.description }}
          </p>
          <div class="flex flex-wrap gap-4">
            <Button variant="secondary" size="large" class="bg-white text-blue-600 hover: bg-gray-100">
              Đăng ký ngay
            </Button>
            <Button variant="outline" size="large" class="border-2 border-white text-white hover:bg-white/10">
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>

      <!-- Course Details -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Giới thiệu -->
            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <Heading level="2" class="mb-4 text-3xl font-bold">
                Giới thiệu khóa học
              </Heading>
              <p class="text-gray-700 text-lg leading-relaxed">
                {{ course.longDescription }}
              </p>
            </div>

            <!-- Nội dung khóa học -->
            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <Heading level="2" class="mb-6 text-3xl font-bold">
                Nội dung khóa học
              </Heading>
              <ul class="space-y-3">
                <li v-for="item in course.curriculum" :key="item" class="flex items-start gap-3">
                  <Icon name="check_circle" class="text-green-500 flex-shrink-0 mt-1" />
                  <span class="text-gray-700 text-lg">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Đặc điểm nổi bật -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <Heading level="2" class="mb-6 text-3xl font-bold">
                Đặc điểm nổi bật
              </Heading>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="feature in course.features" :key="feature" class="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Icon name="star" class="text-yellow-500 flex-shrink-0 mt-1" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div class="text-center mb-6">
                <p class="text-gray-600 mb-2">Học phí</p>
                <div class="text-4xl font-bold text-blue-600 mb-2">
                  {{ course.price.toLocaleString('vi-VN') }}đ
                </div>
                <p class="text-sm text-gray-500">/ {{ course.duration }}</p>
              </div>

              <!-- Course Info -->
              <div class="space-y-4 mb-6 border-t border-b py-6">
                <div class="flex items-start gap-3">
                  <Icon name="schedule" class="text-blue-600 flex-shrink-0" />
                  <div>
                    <p class="font-semibold text-sm text-gray-700">Thời lượng</p>
                    <p class="text-gray-600">{{ course.duration }}</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <Icon name="event" class="text-blue-600 flex-shrink-0" />
                  <div>
                    <p class="font-semibold text-sm text-gray-700">Số buổi học</p>
                    <p class="text-gray-600">{{ course.sessions }}</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <Icon name="calendar_today" class="text-blue-600 flex-shrink-0" />
                  <div>
                    <p class="font-semibold text-sm text-gray-700">Lịch học</p>
                    <p class="text-gray-600">{{ course.schedule }}</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <Icon name="groups" class="text-blue-600 flex-shrink-0" />
                  <div>
                    <p class="font-semibold text-sm text-gray-700">Sĩ số lớp</p>
                    <p class="text-gray-600">8-12 học viên</p>
                  </div>
                </div>
              </div>

              <Button variant="primary" class="w-full mb-3">
                <Icon name="check_circle" class="mr-2" />
                Đăng ký ngay
              </Button>
              <Button variant="outline" class="w-full">
                <Icon name="phone" class="mr-2" />
                Tư vấn miễn phí
              </Button>

              <div class="mt-6 p-4 bg-green-50 rounded-lg text-center">
                <p class="text-sm text-green-800 font-semibold">
                  🎁 Ưu đãi tháng 1/2026
                </p>
                <p class="text-xs text-green-700 mt-1">
                  Giảm 20% cho học viên đăng ký sớm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Courses -->
      <section class="bg-white py-16">
        <div class="container mx-auto px-4">
          <Heading level="2" class="text-center mb-12 text-3xl font-bold">
            Các khóa học khác
          </Heading>
          <div class="text-center">
            <NuxtLink to="/khoa-hoc">
              <Button variant="outline" size="large">
                Xem tất cả khóa học
                <Icon name="arrow_forward" class="ml-2" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>