# Types

## Structure

### `index.ts`
- Chứa business types: `Course`, `Level`, etc.
- Shared types cho toàn app

### `nuxt.d.ts`
- Type definitions cho Nuxt plugins
- Augment `NuxtApp` interface
- Autocomplete cho `$api`, `$yourPlugin`

## Rules

### 1. Business Types
```typescript
// types/index.ts
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface Course {
  level: Level
  title: string
  // ...
}
```

### 2. Plugin Types
```typescript
// types/nuxt.d.ts
import type { $Fetch } from 'ofetch'

declare module '#app' {
  interface NuxtApp {
    $api: $Fetch
  }
}
```

### 3. API Response Types
```typescript
// types/api.ts
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}
```

## Import Convention

```typescript
// ✅ Correct
import type { Course, Level } from '~/types'
import type { ApiResponse } from '~/types/api'

// ❌ Wrong
import { Course } from '../types/index'
```

## Auto-completion

Sau khi define types trong `nuxt.d.ts`:
1. Restart TypeScript server
2. `useNuxtApp().$api` sẽ có autocomplete
3. Type-safe API calls
