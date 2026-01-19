<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Back Button -->
      <div class="mb-6">
        <NuxtLink to="/admin/teachers" class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span>Quay lại danh sách</span>
        </NuxtLink>
      </div>

      <h1 class="text-3xl font-bold mb-8">Thêm Giáo Viên</h1>

      <!-- Error Message -->
      <div v-if="error" class="mb-6 bg-red-50 border border-red-200 rounded p-4">
        <p class="text-red-800">{{ error }}</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="bg-white shadow rounded-lg p-6 space-y-6">
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

        <!-- Active Status -->
        <div class="flex items-center">
          <input
            v-model="formData.isActive"
            type="checkbox"
            class="h-4 w-4"
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
            {{ loading ? 'Đang lưu...' : 'Tạo giáo viên' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeachersApi } from '~/../composables/admin/useTeachersApi'

useHead({
  title: 'Thêm Giáo Viên',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
})

const { createTeacher } = useTeachersApi()
const router = useRouter()

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  specialization: ['A1'],
  experience: 0,
  isActive: true
})

const loading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    await createTeacher(formData)
    router.push('/admin/teachers')
  } catch (err: any) {
    error.value = err.message || 'Không thể tạo giáo viên'
  } finally {
    loading.value = false
  }
}
</script>
