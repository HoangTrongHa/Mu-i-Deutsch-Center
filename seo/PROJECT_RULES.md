# Project Structure Rules

## CRITICAL RULES - READ FIRST

### 1. Pages Location
✅ **PHẢI** tạo pages trong `app/pages/`
❌ **KHÔNG** tạo trong `pages/` (root level)

### 2. Composables Location
✅ **PHẢI** tạo composables trong `composables/` (root level)
❌ **KHÔNG** tạo trong `app/composables/`

### 3. Correct Structure

```
seo/
├── app/
│   ├── pages/              ← Pages PHẢI ở đây
│   │   ├── index.vue
│   │   └── admin/
│   └── plugins/            ← Plugins ở đây
│       └── api.ts
├── composables/            ← Composables ở đây (root level)
│   ├── users/
│   │   └── useCourses.ts
│   └── admin/
│       ├── useCoursesApi.ts
│       └── useTeachersApi.ts
├── components/             ← Components ở root level
├── types/                  ← Types ở root level
└── assets/                 ← Assets ở root level
```

### 4. Quick Reference

| Type | Correct Location | Wrong Location |
|------|-----------------|----------------|
| Pages | `app/pages/` | `pages/` ❌ |
| Composables | `composables/` | `app/composables/` ❌ |
| Components | `components/` | `app/components/` ❌ |
| Plugins | `app/plugins/` | `plugins/` ❌ |
| Types | `types/` | `app/types/` ❌ |

---

## Admin Pages Pattern

### Khi tạo màn quản lý mới trong admin, LUÔN tuân theo pattern này:

#### 1. Structure Template
```
app/pages/admin/
├── [resource]/
│   ├── index.vue          ← Danh sách (list view)
│   ├── create.vue         ← Form tạo mới
│   └── [id]/
│       └── edit.vue       ← Form chỉnh sửa
```

#### 2. List View Template (`index.vue`)

**Các thành phần BẮT BUỘC:**

✅ **Header Section**
- Tiêu đề trang + mô tả
- Nút "Quay lại Dashboard" (top-left)
- Nút "Tạo mới" (top-right)

✅ **Filters Section**
- Search input (tìm kiếm)
- Level filter (nếu có)
- Status filter (Active/Inactive)
- Grid layout: `grid-cols-1 md:grid-cols-3`

✅ **Table Section**
- Loading overlay với spinner
- Responsive table với `min-w-full`
- Column headers với uppercase styling
- Row hover effect: `hover:bg-gray-50`
- Actions column: Sửa + Xóa

✅ **Pagination Section**
- Hiển thị: "X đến Y trong Z kết quả"
- Buttons: Trước/Sau
- Disable khi không có trang

✅ **Delete Modal**
- Confirmation dialog
- Hiển thị tên item được xóa
- Buttons: Hủy + Xóa

#### 3. API Integration cho Admin

**BẮT BUỘC sử dụng Composables cho API calls**
- ✅ **LUÔN** tạo và sử dụng composables trong `composables/admin/`
- ✅ Import với path `~/../composables/`: `import { useResourceApi } from '~/../composables/admin/useResourceApi'`
- ❌ **KHÔNG** gọi `$api` trực tiếp trong component
- ❌ **KHÔNG** viết logic API dài dòng trong component
- ❌ **KHÔNG** dùng `~/composables/` (sai path cho admin pages)

**Import Path cho Admin Pages:**
```typescript
// ✅ ĐÚNG - Dùng ~/../composables/
import { useCoursesApi } from '~/../composables/admin/useCoursesApi'
import { useTeachersApi } from '~/../composables/admin/useTeachersApi'

// ❌ SAI - Không dùng ~/composables/
import { useCoursesApi } from '~/composables/admin/useCoursesApi'
```

**Lý do:**
- Code ngắn gọn, dễ đọc
- Tái sử dụng logic API
- Dễ test và maintain
- Type-safe với TypeScript
- Path `~/../` để resolve từ `app/pages/` lên root

**Ví dụ đúng:**
```vue
<script setup lang="ts">
import { useCoursesApi } from '~/../composables/admin/useCoursesApi'

const { fetchCourses, deleteCourse } = useCoursesApi()

const loadData = async () => {
  const response = await fetchCourses({ page: 1, limit: 10 })
  items.value = response.data
}
</script>
```

**Ví dụ SAI:**
```vue
<script setup lang="ts">
const { $api } = useNuxtApp()

const loadData = async () => {
  const query = new URLSearchParams()
  query.append('page', '1')
  query.append('limit', '10')
  const response = await $api(`/courses?${query}`) // ❌ Dài dòng
}
</script>
```

**Composable Template:**
```typescript
// composables/admin/useResourceApi.ts
export const useResourceApi = () => {
  const { $api } = useNuxtApp()

  const fetchResources = async (params?: FetchParams) => {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.search) queryParams.append('search', params.search)
    
    const queryString = queryParams.toString()
    const url = queryString ? `/resources?${queryString}` : '/resources'
    return await $api<ResourceResponse>(url)
  }

  const deleteResource = async (id: string) => {
    return await $api(`/resources/${id}`, { method: 'DELETE' })
  }

  return {
    fetchResources,
    deleteResource,
  }
}
```

**Response Format Expected:**
```typescript
{
  data: ResourceType[],
  meta: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}
```

#### 4. Toast Notifications

**Auto Toast từ API Plugin:**
- Toast notifications **TỰ ĐỘNG** hiển thị qua `plugins/api.ts`
- **Success toast**: Tự động cho POST, PATCH, PUT, DELETE thành công
- **Error toast**: Tự động cho mọi lỗi API (401, validation, network)

**KHÔNG CẦN** thêm toast trong component/page code:
```typescript
// ❌ WRONG - Không cần làm thế này
const toast = useToast()
await createCourse(data)
toast.success('Tạo khóa học thành công!')

// ✅ CORRECT - Chỉ cần gọi API
await createCourse(data)
// Toast tự động hiển thị từ plugin
```

**Custom Success Message từ Backend:**
Backend có thể trả về message tùy chỉnh:
```typescript
// Response from backend
{
  data: {...},
  message: "Khóa học đã được tạo và gửi email thông báo!"
}
// Toast sẽ hiển thị message này
```

**Default Messages:**
- POST: "Tạo mới thành công!"
- PATCH/PUT: "Cập nhật thành công!"
- DELETE: "Xóa thành công!"

#### 5. Styling Guidelines

**Colors:**
- Primary: `bg-accent` / `text-accent`
- Success: `bg-green-100 text-green-800`
- Error: `bg-red-100 text-red-800`
- Gray: `bg-gray-50` / `text-gray-600`

**Spacing:**
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section gap: `mb-6` hoặc `mb-8`
- Table padding: `px-6 py-4` (cells), `px-6 py-3` (headers)

**Buttons:**
- Primary: `bg-accent hover:bg-accent/90 text-white`
- Danger: `bg-red-600 hover:bg-red-700 text-white`
- Secondary: `border border-gray-300 hover:bg-gray-50`

#### 5. Checklist khi tạo màn admin mới

- [ ] Tạo structure: `index.vue`, `create.vue`, `[id]/edit.vue`
- [ ] Copy template từ màn courses hoặc teachers
- [ ] Update: resource type, API endpoint, column names
- [ ] Test: search, filters, pagination
- [ ] Test: create, edit, delete operations
- [ ] Add meta tags với `noindex, nofollow`
- [ ] Responsive check: mobile, tablet, desktop
