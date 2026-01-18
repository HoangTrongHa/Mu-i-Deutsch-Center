# Composables Structure

## Folder Organization

### `/users`
- Chứa các composables dành cho user/client side
- Các composables này được sử dụng trong pages, components của người dùng
- Ví dụ: `useCourses.ts`, `useAuth.ts`, `useEnrollment.ts`

### `/admin`
- Chứa các composables dành cho admin panel
- Các composables này được sử dụng trong admin dashboard
- Ví dụ: `useCoursesApi.ts`, `useManageUsers.ts`, `useStatistics.ts`

## Naming Convention

- User composables: `use[Feature].ts` (e.g., `useCourses.ts`)
- Admin composables: `use[Feature]Api.ts` hoặc `useManage[Feature].ts`

## Rules

### 1. Data Fetching
- ✅ **PHẢI** fetch data từ server qua API plugin `$api`
- ❌ **KHÔNG** hardcode data trong composables
- ✅ **PHẢI** sử dụng `useNuxtApp().$api` để gọi API
- ✅ **NÊN** có fallback/error handling

**Ví dụ:**
```typescript
export const useCourses = () => {
  const { $api } = useNuxtApp()
  const courses = ref<Course[]>([])
  
  const fetchCourses = async () => {
    try {
      const data = await $api<Course[]>('/courses')
      courses.value = data
    } catch (err) {
      console.error('Error:', err)
    }
  }
  
  return { courses, fetchCourses }
}
```

### 2. API Plugin Usage
- ✅ **PHẢI** sử dụng `$api` từ plugin thay vì `$fetch` trực tiếp
- ✅ Plugin đã config sẵn: baseURL, auth token, error handling
- ✅ **KHÔNG CẦN** import `useNuxtApp` (auto-import)

**Tại sao dùng plugin?**
- Centralized configuration (baseURL, headers)
- Auto auth token injection
- Unified error handling
- Consistent API calls across app

### 3. State Management
- ✅ **PHẢI** dùng `ref()` cho reactive data
- ✅ **NÊN** return `readonly()` để protect state
- ✅ **PHẢI** có loading và error states khi fetch data

**Ví dụ:**
```typescript
const courses = ref<Course[]>([])
const loading = ref(false)
const error = ref<Error | null>(null)

return {
  courses: readonly(courses),
  loading: readonly(loading),
  error: readonly(error)
}
```

### 4. Type Safety
- ✅ **PHẢI** define types cho API response
- ✅ **PHẢI** import types từ `~/types`
- ✅ **PHẢI** type generic cho `$api<T>()`

### 5. Separation of Concerns
- ✅ User composables: Read-only, hiển thị data
- ✅ Admin composables: Full CRUD operations
- ❌ **KHÔNG** mix user và admin logic trong 1 composable

### 6. Error Handling
- ✅ **PHẢI** có try-catch cho async operations
- ✅ **NÊN** log errors cho debugging
- ✅ Plugin đã handle common errors (401, 403, 500)

## Common Patterns

### Fetch on Mount
```typescript
onMounted(() => {
  fetchCourses()
})
```

### Computed Properties
```typescript
const availableLevels = computed(() => 
  courses.value.map(c => c.level)
)
```

### Query Parameters
```typescript
const params = new URLSearchParams()
if (page) params.append('page', page.toString())
const data = await $api(`/courses?${params}`)
```

## Plugin Configuration

Plugin location: `app/plugins/api.ts`

**Không cần khai báo trong `nuxt.config.ts`** - Nuxt auto-scan plugins trong `app/plugins/`

**Runtime config:**
```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:5000'
  }
}
```

## Type Definitions

Location: `types/nuxt.d.ts`

Khai báo type cho `$api` plugin:
```typescript
import type { $Fetch } from 'ofetch'

declare module '#app' {
  interface NuxtApp {
    $api: $Fetch
  }
}
```

## Auto-imports (Không cần import)

- `useNuxtApp()`
- `useState()`
- `useRuntimeConfig()`
- `ref()`, `computed()`, `readonly()`
- `onMounted()`, `watch()`
- `navigateTo()`

## Checklist khi tạo composable mới

- [ ] File đặt đúng folder (`users/` hoặc `admin/`)
- [ ] Sử dụng `$api` từ plugin
- [ ] Có type definitions đầy đủ
- [ ] Có error handling
- [ ] Return readonly states
- [ ] Test với loading/error states
