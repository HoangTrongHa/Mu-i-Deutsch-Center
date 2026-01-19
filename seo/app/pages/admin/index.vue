<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <AdminBackButton to="/" label="Quay lại trang chủ" />
      
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium text-gray-500">Tổng Khóa Học</h3>
            <span class="text-2xl">📚</span>
          </div>
          <p class="text-3xl font-bold text-gray-900">12</p>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium text-gray-500">Học Viên</h3>
            <span class="text-2xl">👥</span>
          </div>
          <p class="text-3xl font-bold text-gray-900">245</p>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium text-gray-500">Doanh Thu</h3>
            <span class="text-2xl">💰</span>
          </div>
          <p class="text-3xl font-bold text-gray-900">125M</p>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink to="/admin/courses" class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Quản Lý Khóa Học</h3>
          <p class="text-sm text-gray-500">Thêm, sửa, xóa khóa học</p>
        </NuxtLink>
        
        <NuxtLink to="/admin/teachers" class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Quản Lý Giáo Viên</h3>
          <p class="text-sm text-gray-500">Xem danh sách học viên</p>
        </NuxtLink>
        
        <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Báo Cáo</h3>
          <p class="text-sm text-gray-500">Xem thống kê và báo cáo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Admin Dashboard',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
