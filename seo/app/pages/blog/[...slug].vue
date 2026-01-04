<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent(route.path).findOne()
)

if (!post.value) {
  throw createError({ 
    statusCode: 404, 
    message: 'Bài viết không tồn tại',
    fatal: true
  })
}

useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description },
    { name: 'keywords', content: post.value.tags?.join(', ') || '' },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: post.value.date },
    { property: 'article:author', content: post.value.author },
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen bg-white">
      <article class="container mx-auto px-4 py-16 max-w-4xl">
        <!-- Breadcrumb -->
        <Breadcrumb 
          :items="[
            { label: 'Trang chủ', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: post.title }
          ]"
        />

        <!-- Header -->
        <header class="mb-12">
          <Badge v-if="post.category" class="mb-4 bg-blue-100 text-blue-800">
            {{ post.category }}
          </Badge>

          <Heading level="1" class="mb-6 font-handwritten text-4xl md:text-5xl">
            {{ post.title }}
          </Heading>

          <!-- Meta -->
          <div class="flex flex-wrap items-center gap-6 text-gray-600">
            <div class="flex items-center gap-2">
              <Icon name="person" />
              <span>{{ post.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="calendar_today" />
              <span>{{ new Date(post.date).toLocaleDateString('vi-VN') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="schedule" />
              <span>{{ post.readingTime || '5 phút đọc' }}</span>
            </div>
          </div>
        </header>

        <!-- Featured Image Placeholder -->
        <div class="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 aspect-video flex items-center justify-center text-white text-8xl">
          📚
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
          <ContentRenderer :value="post" />
        </div>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length > 0" class="mt-12 pt-8 border-t">
          <p class="text-sm font-semibold text-gray-600 mb-3">Tags:</p>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tag in post.tags" :key="tag" class="bg-gray-100 text-gray-800">
              {{ tag }}
            </Badge>
          </div>
        </div>

        <!-- Share -->
        <div class="mt-12 pt-8 border-t">
          <p class="text-sm font-semibold text-gray-600 mb-3">Chia sẻ bài viết: </p>
          <div class="flex gap-3">
            <Button variant="outline" size="small">
              <Icon name="share" class="mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="small">
              <Icon name="share" class="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <Heading level="2" class="text-center mb-12 text-3xl font-bold">
            Bài viết liên quan
          </Heading>
          <div class="text-center">
            <NuxtLink to="/blog">
              <Button variant="outline" size="large">
                Xem tất cả bài viết
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