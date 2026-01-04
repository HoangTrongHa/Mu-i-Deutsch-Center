<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

useHead({
  title: 'Blog - Kiến thức tiếng Đức',
  meta: [
    { 
      name: 'description', 
      content: 'Chia sẻ kiến thức, kinh nghiệm học tiếng Đức.  Tips luyện thi Goethe, du học Đức, phương pháp học hiệu quả và nhiều hơn nữa từ Muối Deutsch Center.' 
    },
    {
      name: 'keywords',
      content: 'blog tiếng đức, học tiếng đức, kinh nghiệm học tiếng đức, tips học tiếng đức, du học đức'
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen bg-gray-50">
      <!-- Hero -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <Heading level="1" class="mb-4 font-handwritten text-4xl md:text-5xl">
            Blog Muối Deutsch 📝
          </Heading>
          <p class="text-xl max-w-2xl mx-auto">
            Kiến thức tiếng Đức - Tips học tập - Kinh nghiệm du học
          </p>
        </div>
      </section>

      <!-- Blog Grid -->
      <section class="container mx-auto px-4 py-16">
        <div v-if="posts && posts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="post in posts" 
            :key="post._path"
            :to="post._path"
            class="block group"
          >
            <article class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform hover:-translate-y-1">
              <!-- Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden relative">
                <div class="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  📚
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <!-- Category Badge -->
                <Badge v-if="post.category" class="mb-3 bg-blue-100 text-blue-800">
                  {{ post.category }}
                </Badge>

                <!-- Title -->
                <Heading level="3" class="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </Heading>

                <!-- Excerpt -->
                <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {{ post.description }}
                </p>

                <!-- Meta -->
                <div class="flex items-center gap-4 text-xs text-gray-500">
                  <div class="flex items-center gap-1">
                    <Icon name="calendar_today" size="small" />
                    <span>{{ new Date(post.date).toLocaleDateString('vi-VN') }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon name="schedule" size="small" />
                    <span>{{ post.readingTime || '5 phút' }}</span>
                  </div>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- No posts -->
        <div v-else class="text-center py-16">
          <p class="text-gray-600 text-lg">Chưa có bài viết nào.  Vui lòng quay lại sau!</p>
        </div>
      </section>

      <!-- Newsletter CTA -->
      <section class="bg-blue-600 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <Heading level="2" class="mb-4 text-3xl font-bold">
            Đăng ký nhận bài viết mới
          </Heading>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Nhận ngay các tips học tiếng Đức, tài liệu miễn phí qua email
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email của bạn"
              class="px-6 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button variant="secondary" size="large" class="bg-white text-blue-600 hover: bg-gray-100">
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>