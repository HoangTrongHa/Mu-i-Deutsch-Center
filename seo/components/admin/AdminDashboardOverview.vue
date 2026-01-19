<template>
  <div class="space-y-6">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Tổng Học Viên"
        :value="stats.totalStudents"
        icon="people"
        color="blue"
        trend="+12%"
      />
      <StatCard
        title="Khóa Học"
        :value="stats.totalCourses"
        icon="school"
        color="green"
        trend="+3"
      />
      <StatCard
        title="Giáo Viên"
        :value="stats.totalTeachers"
        icon="person"
        color="purple"
        trend="+2"
      />
      <StatCard
        title="Doanh Thu Tháng"
        :value="formatCurrency(stats.monthlyRevenue)"
        icon="payments"
        color="orange"
        trend="+18%"
      />
    </div>
    
    <!-- Recent Activities -->
    <div class="bg-white rounded-lg border border-gray-200 p-6">
      <h3 class="text-lg font-bold mb-4">Hoạt Động Gần Đây</h3>
      <div class="space-y-3">
        <ActivityItem
          v-for="activity in recentActivities"
          :key="activity.id"
          :activity="activity"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = reactive({
  totalStudents: 245,
  totalCourses: 12,
  totalTeachers: 8,
  monthlyRevenue: 125000000
})

const recentActivities = ref([
  {
    id: 1,
    type: 'enrollment',
    message: 'Học viên mới đăng ký khóa A1',
    time: '5 phút trước',
    user: 'Nguyễn Văn A'
  },
  {
    id: 2,
    type: 'course',
    message: 'Khóa học B1 đã được cập nhật',
    time: '1 giờ trước',
    user: 'Admin'
  },
  {
    id: 3,
    type: 'payment',
    message: 'Thanh toán thành công 3.500.000 VNĐ',
    time: '2 giờ trước',
    user: 'Trần Thị B'
  }
])

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}
</script>
