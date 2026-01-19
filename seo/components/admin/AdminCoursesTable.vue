<template>
  <div class="bg-white rounded-lg border border-gray-200">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 flex items-center justify-between">
      <h3 class="text-lg font-bold">Danh Sách Khóa Học</h3>
      <Button variant="primary" size="md" @click="handleAddCourse">
        <Icon :size="20">add</Icon>
        Thêm Khóa Học
      </Button>
    </div>
    
    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên Khóa Học</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thời Lượng</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Học Viên</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng Thái</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="course in courses" :key="course.level" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <LevelBadge :level="course.level" />
            </td>
            <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ course.title }}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{{ course.duration }}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{{ course.students || 0 }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                Active
              </span>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <button class="text-blue-600 hover:text-blue-800">
                <Icon :size="20">edit</Icon>
              </button>
              <button class="text-red-600 hover:text-red-800">
                <Icon :size="20">delete</Icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'
import Button from '../atoms/Button.vue'
import LevelBadge from '../atoms/LevelBadge.vue'

const { courses, fetchCourses } = useCourses()

onMounted(() => {
  fetchCourses()
})

const handleAddCourse = () => {
  navigateTo('/admin/courses/create')
}
</script>
