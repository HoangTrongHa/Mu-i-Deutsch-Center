<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Back Button -->
      <div class="mb-6">
        <NuxtLink 
          to="/admin/teachers" 
          class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span>Quay lại danh sách</span>
        </NuxtLink>
      </div>

      <h1 class="text-3xl font-bold mb-8">Chỉnh Sửa Giáo Viên</h1>

      <!-- Loading -->
      <div v-if="loadingData" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mb-6 bg-red-50 border border-red-200 rounded p-4">
        <p class="text-red-800">{{ error }}</p>
      </div>

      <!-- Form -->
      <form v-if="!loadingData && formData" @submit.prevent="handleSubmit" class="bg-white shadow rounded-lg p-6 space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium mb-2">Họ tên *</label>
          <input
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium mb-2">Email *</label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium mb-2">Số điện thoại</label>
          <input
            v-model="formData.phone"
            type="tel"
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <!-- Specialization -->
        <div>
          <label class="block text-sm font-medium mb-2">Chuyên môn *</label>
          <div class="grid grid-cols-3 gap-3">
            <label v-for="level in availableLevels" :key="level" class="flex items-center">
              <input
                type="checkbox"
                :value="level"
                v-model="formData.specialization"
                class="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
              />
              <span class="ml-2 text-sm text-gray-700">{{ level }}</span>
            </label>
          </div>
        </div>

        <!-- Experience -->
        <div>
          <label class="block text-sm font-medium mb-2">Kinh nghiệm (năm) *</label>
          <input
            v-model.number="formData.experience"
            type="number"
            required
            min="0"
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <!-- Bio -->
        <div>
          <label class="block text-sm font-medium mb-2">Giới thiệu</label>
          <textarea
            v-model="formData.bio"
            rows="4"
            class="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </div>

        <!-- Education -->
        <div>
          <label class="block text-sm font-medium mb-2">Học vấn</label>
          <input
            v-model="formData.education"
            type="text"
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <!-- Active Status -->
        <div class="flex items-center">
          <input
            v-model="formData.isActive"
            type="checkbox"
            class="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
          />
          <label class="ml-2 text-sm">Đang hoạt động</label>
        </div>

        <!-- Submit Buttons -->
        <div class="flex justify-end gap-3 pt-4 border-t">
          <NuxtLink
            to="/admin/teachers"
            class="px-4 py-2 border rounded-md"
          >
            Hủy
          </NuxtLink>
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 bg-accent text-white rounded-md"
          >
            {{ loading ? 'Đang lưu...' : 'Cập nhật' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from '~/types'
import { useTeachersApi } from '~/../composables/admin/useTeachersApi'

useHead({
  title: 'Chỉnh Sửa Giáo Viên',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
})

const route = useRoute()
const router = useRouter()
const { fetchTeacher, updateTeacher } = useTeachersApi()

const availableLevels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const formData = ref<Partial<Teacher> | null>(null)
const loading = ref(false)
const loadingData = ref(true)
const error = ref('')

const loadTeacher = async () => {
  try {
    loadingData.value = true
    const teacher = await fetchTeacher(route.params.id as string)
    formData.value = { ...teacher }
  } catch (err: any) {
    error.value = err.message || 'Không thể tải thông tin'
  } finally {
    loadingData.value = false
  }
}

const handleSubmit = async () => {
  if (!formData.value) return

  try {
    loading.value = true
    error.value = ''
    await updateTeacher(route.params.id as string, formData.value)
    router.push('/admin/teachers')
  } catch (err: any) {
    error.value = err.message || 'Không thể cập nhật'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadTeacher()
})
</script>
