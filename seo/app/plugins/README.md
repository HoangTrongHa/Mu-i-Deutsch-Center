# Plugins

## Location

**Plugins PHẢI đặt trong `app/plugins/`** không phải `plugins/`

Nuxt sẽ auto-scan và load tất cả files trong folder này.

## API Plugin

File: `app/plugins/api.ts`

**Chức năng:**
- Tạo `$fetch` instance với baseURL từ config
- Auto inject auth token vào headers
- Handle common errors (401, 403, 500)
- Provide `$api` cho toàn app

**Không cần:**
- ❌ Khai báo trong `nuxt.config.ts`
- ❌ Import trong composables (auto-available)

**Sử dụng:**
```typescript
const { $api } = useNuxtApp()
const data = await $api('/courses')
```

## Plugin Execution Order

Nuxt load plugins theo alphabet order.

**Đặt tên với prefix số để control order:**
- `01.config.ts` - Load đầu tiên
- `02.api.ts` - Load sau
- `99.analytics.ts` - Load cuối

## Client-only Plugins

Thêm `.client.ts` suffix:
```
api.client.ts  ← Chỉ chạy trên browser
api.server.ts  ← Chỉ chạy trên server
api.ts         ← Chạy cả 2
```

## Type Definitions

Khai báo types trong `types/nuxt.d.ts` để có autocomplete:

```typescript
declare module '#app' {
  interface NuxtApp {
    $api: $Fetch
    $yourPlugin: YourType
  }
}
```

## Common Issues

### Plugin không load?
1. Check file đúng trong `app/plugins/` chưa
2. Restart dev server
3. Xóa `.nuxt` folder

### Type error?
1. Check `types/nuxt.d.ts` có khai báo chưa
2. Restart TypeScript server
3. Check `tsconfig.json` include types

### $api undefined?
1. Plugin chưa return `provide: { api }`
2. Gọi quá sớm (trước khi plugin load)
3. SSR issue → dùng `.client.ts`
