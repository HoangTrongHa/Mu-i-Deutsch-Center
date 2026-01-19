# Admin Composables

Folder này chứa các composables dành riêng cho admin panel.

## Quy tắc:

1. **Naming**: Sử dụng prefix `useManage` hoặc `useAdmin`
2. **Authentication**: Luôn check quyền admin trước khi thực hiện operations
3. **CRUD Operations**: Các composables này thường có đầy đủ Create, Read, Update, Delete
4. **Validation**: Validate data kỹ trước khi gửi lên server
5. **Back Navigation**: 
   - ✅ **PHẢI** có nút back ở mọi admin page
   - ✅ Sử dụng `<AdminBackButton>` component
   - ✅ Sub-pages back về dashboard "/admin"
   - ✅ Edit/Create pages back về list page
6. **File Location**:
   - ✅ **PHẢI** tạo trong folder `composables/admin/` đã có
   - ❌ **KHÔNG** tạo folder admin mới ở nơi khác
   - ✅ Mỗi resource một file API (courses, teachers, students, etc.)

## Admin Page Structure

### Layout Pattern
```vue
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Back Button - REQUIRED -->
      <AdminBackButton to="/admin" label="Quay lại Dashboard" />
      
      <!-- Page Header -->
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Page Title</h1>
      
      <!-- Page Content -->
      <div>
        <!-- Content here -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Page Title - Admin',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
```

### Navigation Hierarchy
```
/               → Homepage (public)
/admin          → Dashboard (back to /)
/admin/courses  → Course List (back to /admin)
/admin/courses/create → Create Course (back to /admin/courses)
/admin/courses/:id/edit → Edit Course (back to /admin/courses)
```

## Back Button Rules

### Default Patterns:
- Dashboard pages → Back to homepage `/`
- List pages → Back to dashboard `/admin`
- Detail/Edit pages → Back to list page
- Create pages → Back to list page

### Usage Examples:

**Dashboard:**
```vue
<AdminBackButton to="/" label="Quay lại trang chủ" />
```

**List Pages:**
```vue
<AdminBackButton to="/admin" label="Quay lại Dashboard" />
```

**Edit Pages:**
```vue
<AdminBackButton to="/admin/courses" label="Quay lại danh sách" />
```

**Create Pages:**
```vue
<AdminBackButton to="/admin/courses" label="Hủy" />
```

## SEO for Admin Pages

✅ **PHẢI** có meta robots noindex, nofollow:
```vue
useHead({
  title: 'Admin - Page Title',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
```

## Components

- `<AdminBackButton>` - Navigation back button
- `<AdminHeader>` - Page header with title
- `<AdminSidebar>` - Left navigation menu
- `<StatCard>` - Dashboard stat cards
- `<AdminTable>` - Data tables

## Ví dụ composables:

- `useManageCourses.ts` - Quản lý khóa học (CRUD)
- `useManageUsers.ts` - Quản lý người dùng
- `useStatistics.ts` - Thống kê, báo cáo
- `useAdminAuth.ts` - Authentication & Authorization
