<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Quản Lý Khóa Học</h1>
          <p class="mt-2 text-sm text-gray-600">Danh sách tất cả các khóa học tiếng Đức</p>
        </div>
        <NuxtLink
          to="/admin/courses/create"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Tạo Khóa Học Mới
        </NuxtLink>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow p-4 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Tìm kiếm..."
            class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <select
            v-model="levelFilter"
            class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Tất cả cấp độ</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Tất cả trạng thái</option>
            <option value="true">Đang hoạt động</option>
            <option value="false">Tạm dừng</option>
          </select>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p class="text-red-800">{{ error }}</p>
      </div>

      <!-- Courses Table -->
      <div class="bg-white shadow rounded-lg overflow-hidden relative">
        <!-- Loading Overlay -->
        <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
          <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            <p class="mt-4 text-gray-600">Đang tải...</p>
          </div>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khóa học</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cấp độ</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Học viên</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="course in courses" :key="course.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ course.title }}</div>
                    <div class="text-sm text-gray-500">{{ course.duration }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {{ course.level }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div v-if="course.discountPrice" class="flex flex-col">
                  <span class="line-through text-gray-400">{{ course.price.toLocaleString('vi-VN') }}đ</span>
                  <span class="font-semibold text-accent">{{ course.discountPrice.toLocaleString('vi-VN') }}đ</span>
                </div>
                <span v-else class="font-semibold">{{ course.price.toLocaleString('vi-VN') }}đ</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ course.maxStudents }} học viên
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="course.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                >
                  {{ course.isActive ? 'Hoạt động' : 'Tạm dừng' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <NuxtLink
                  :to="`/admin/courses/${course.id}/edit`"
                  class="text-accent hover:text-accent/80 mr-4"
                >
                  Sửa
                </NuxtLink>
                <button
                  @click="confirmDelete(course)"
                  class="text-red-600 hover:text-red-900"
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Hiển thị <span class="font-medium">{{ (pagination.page - 1) * pagination.limit + 1 }}</span> đến
              <span class="font-medium">{{ Math.min(pagination.page * pagination.limit, pagination.total) }}</span> trong
              <span class="font-medium">{{ pagination.total }}</span> kết quả
            </div>
            <div class="flex gap-2">
              <button
                @click="goToPage(pagination.page - 1)"
                :disabled="pagination.page === 1"
                :class="pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'"
                class="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                Trước
              </button>
              <button
                @click="goToPage(pagination.page + 1)"
                :disabled="pagination.page >= pagination.totalPages"
                :class="pagination.page >= pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'"
                class="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                Sau
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Xác nhận xóa</h3>
          <p class="text-sm text-gray-500 mb-6">
            Bạn có chắc chắn muốn xóa khóa học "<strong>{{ courseToDelete?.title }}</strong>"? Hành động này không thể hoàn tác.
          </p>
          <div class="flex justify-end gap-3">
            <button
              @click="showDeleteModal = false"
              class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              @click="deleteCourse"
              class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Quản Lý Khóa Học',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const config = useRuntimeConfig()
const apiBase = config.public.apiUrl

const courses = ref<any[]>([])
const loading = ref(false)
const error = ref('')

const searchQuery = ref('')
const levelFilter = ref('')
const statusFilter = ref('')

const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
})

const showDeleteModal = ref(false)

let debounceTimer: NodeJS.Timeout | null = null
const courseToDelete = ref<any>(null)

const loadCourses = async () => {
  try {
    loading.value = true
    error.value = ''

    const query = new URLSearchParams()
    query.append('page', String(pagination.value.page))
    query.append('limit', String(pagination.value.limit))
    
    if (searchQuery.value) query.append('search', searchQuery.value)
    if (levelFilter.value) query.append('level', levelFilter.value)
    if (statusFilter.value) query.append('isActive', statusFilter.value)

    const response: any = await $fetch(`${apiBase}/courses?${query.toString()}`)
    
    courses.value = response.data
    pagination.value = {
      page: response.meta.page,
      limit: response.meta.limit,
      total: response.meta.total,
      totalPages: response.meta.totalPages,
    }
  } catch (err: any) {
    error.value = err.data?.message || err.message || 'Không thể tải danh sách khóa học'
  } finally {
    loading.value = false
  }
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= pagination.value.totalPages) {
    pagination.value.page = page
    loadCourses()
  }
}

const confirmDelete = (course: any) => {
  courseToDelete.value = course
  showDeleteModal.value = true
}

const deleteCourse = async () => {
  if (!courseToDelete.value) return

  try {
    await $fetch(`${apiBase}/courses/${courseToDelete.value.id}`, {
      method: 'DELETE'
    })
    showDeleteModal.value = false
    courseToDelete.value = null
    await loadCourses()
  } catch (err: any) {
    error.value = err.data?.message || err.message || 'Không thể xóa khóa học'
  }
// Watch for filter changes with debounce
watch([searchQuery, levelFilter, statusFilter], () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  
  debounceTimer = setTimeout(() => {
    pagination.value.page = 1 // Reset to first page when filtering
    loadCourses()
  }, 500)
})

}

onMounted(() => {
  if (process.client) {
    loadCourses()
  }
})
</script>
