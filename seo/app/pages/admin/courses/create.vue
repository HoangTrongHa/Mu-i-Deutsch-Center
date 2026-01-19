<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <NuxtLink to="/admin/courses" class="text-accent hover:text-accent/80 text-sm mb-4 inline-flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Quay lại danh sách
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mt-2">Tạo Khóa Học Mới</h1>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p class="text-red-800">{{ error }}</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="bg-white shadow rounded-lg p-6 space-y-6">
        <!-- Basic Info -->
        <div class="space-y-4">
          <h2 class="text-lg font-medium text-gray-900 border-b pb-2">Thông Tin Cơ Bản</h2>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tên khóa học *</label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="VD: Tiếng Đức Cơ Bản"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Cấp độ *</label>
              <select
                v-model="form.level"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Chọn cấp độ</option>
                <option value="A1">A1 - Sơ cấp 1</option>
                <option value="A2">A2 - Sơ cấp 2</option>
                <option value="B1">B1 - Trung cấp 1</option>
                <option value="B2">B2 - Trung cấp 2</option>
                <option value="C1">C1 - Cao cấp 1</option>
                <option value="C2">C2 - Cao cấp 2</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Giáo viên *</label>
              <select
                v-model="form.teacherId"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Chọn giáo viên</option>
                <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id">
                  {{ teacher.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn *</label>
            <textarea
              v-model="form.description"
              rows="2"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Mô tả ngắn gọn về khóa học..."
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mô tả chi tiết *</label>
            <textarea
              v-model="form.longDescription"
              rows="4"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Mô tả chi tiết về khóa học..."
            />
          </div>
        </div>

        <!-- Schedule & Price -->
        <div class="space-y-4">
          <h2 class="text-lg font-medium text-gray-900 border-b pb-2">Lịch Trình & Học Phí</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Thời lượng *</label>
              <input
                v-model="form.duration"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="VD: 3 tháng"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Số buổi học *</label>
              <input
                v-model.number="form.sessions"
                type="number"
                required
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="VD: 36"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Lịch học *</label>
            <input
              v-model="form.schedule"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="VD: Thứ 2, 4, 6 (18:00-20:00)"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Giá gốc (VNĐ) *</label>
              <input
                v-model.number="form.price"
                type="number"
                required
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="5000000"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Giá khuyến mãi (VNĐ)</label>
              <input
                v-model.number="form.discountPrice"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="4000000"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Số học viên tối đa *</label>
              <input
                v-model.number="form.maxStudents"
                type="number"
                required
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="20"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Ngày khai giảng</label>
            <input
              v-model="form.startDate"
              type="date"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        <!-- Features -->
        <div class="space-y-4">
          <h2 class="text-lg font-medium text-gray-900 border-b pb-2">Đặc Điểm Nổi Bật</h2>
          <div v-for="(feature, index) in form.features" :key="index" class="flex gap-2">
            <input
              v-model="form.features[index]"
              type="text"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="VD: Giáo viên bản ngữ"
            />
            <button
              type="button"
              @click="removeFeature(index)"
              class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
            >
              Xóa
            </button>
          </div>
          <button
            type="button"
            @click="addFeature"
            class="text-accent hover:text-accent/80 text-sm"
          >
            + Thêm đặc điểm
          </button>
        </div>

        <!-- Curriculum -->
        <div class="space-y-4">
          <h2 class="text-lg font-medium text-gray-900 border-b pb-2">Nội Dung Học</h2>
          <div v-for="(item, index) in form.curriculum" :key="index" class="flex gap-2">
            <input
              v-model="form.curriculum[index]"
              type="text"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="VD: Bài 1: Chào hỏi và giới thiệu"
            />
            <button
              type="button"
              @click="removeCurriculum(index)"
              class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
            >
              Xóa
            </button>
          </div>
          <button
            type="button"
            @click="addCurriculum"
            class="text-accent hover:text-accent/80 text-sm"
          >
            + Thêm nội dung
          </button>
        </div>

        <!-- Status -->
        <div class="flex items-center">
          <input
            v-model="form.isActive"
            type="checkbox"
            id="isActive"
            class="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
          />
          <label for="isActive" class="ml-2 block text-sm text-gray-700">
            Kích hoạt khóa học ngay
          </label>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4 border-t">
          <NuxtLink
            to="/admin/courses"
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Hủy
          </NuxtLink>
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 disabled:opacity-50"
          >
            {{ loading ? 'Đang lưu...' : 'Tạo Khóa Học' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoursesApi } from '~/../composables/admin/useCoursesApi'
import { useTeachersApi } from '~/../composables/admin/useTeachersApi'

useHead({
  title: 'Tạo Khóa Học Mới',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const { createCourse } = useCoursesApi()
const { fetchTeachers } = useTeachersApi()
const router = useRouter()

const loading = ref(false)
const error = ref('')

const teachers = ref([
  { id: '1', name: 'Đang tải...' }
])

const form = ref({
  title: '',
  level: '',
  teacherId: '',
  description: '',
  longDescription: '',
  duration: '',
  sessions: 0,
  schedule: '',
  price: 0,
  discountPrice: null as number | null,
  maxStudents: 20,
  startDate: '',
  features: [''],
  curriculum: [''],
  isActive: true,
})

const addFeature = () => {
  form.value.features.push('')
}

const removeFeature = (index: number) => {
  form.value.features.splice(index, 1)
}

const addCurriculum = () => {
  form.value.curriculum.push('')
}

const removeCurriculum = (index: number) => {
  form.value.curriculum.splice(index, 1)
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    // Clean up empty features and curriculum
    const data = {
      ...form.value,
      features: form.value.features.filter(f => f.trim()),
      curriculum: form.value.curriculum.filter(c => c.trim()),
      startDate: form.value.startDate ? new Date(form.value.startDate) : undefined,
      discountPrice: form.value.discountPrice || undefined,
    }

    await createCourse(data)
    router.push('/admin/courses')
  } finally {
    loading.value = false
  }
}

// Load teachers
onMounted(async () => {
  try {
    const response = await fetchTeachers({ page: 1, limit: 100 })
    teachers.value = response.data.map(t => ({ id: t.id, name: t.name }))
  } catch {
    teachers.value = []
  }
})
</script>
