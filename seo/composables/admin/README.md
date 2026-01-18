# Admin Composables

Folder này chứa các composables dành riêng cho admin panel.

## Quy tắc:

1. **Naming**: Sử dụng prefix `useManage` hoặc `useAdmin`
2. **Authentication**: Luôn check quyền admin trước khi thực hiện operations
3. **CRUD Operations**: Các composables này thường có đầy đủ Create, Read, Update, Delete
4. **Validation**: Validate data kỹ trước khi gửi lên server

## Ví dụ composables:

- `useManageCourses.ts` - Quản lý khóa học (CRUD)
- `useManageUsers.ts` - Quản lý người dùng
- `useStatistics.ts` - Thống kê, báo cáo
