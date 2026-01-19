import { useToast } from '~/../composables/useToast'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('🔌 API Plugin Loading...')
  
  // Check if already provided
  if (nuxtApp.$api) {
    console.log('✅ $api already exists')
    return
  }

  const config = useRuntimeConfig()
  const toast = useToast()
  
  console.log('🔧 Creating $fetch instance...')

  const api = $fetch.create({
    baseURL: config.public.apiUrl,
    
    onRequest({ options }) {
      // Add auth token if exists
      const token = useCookie('auth-token')
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`
        }
      }
    },

    onResponse({ response, options }) {
      // Show success toast for CUD operations
      const method = options.method?.toUpperCase()
      
      if (method === 'POST' || method === 'PATCH' || method === 'PUT' || method === 'DELETE') {
        // Check if response has success message
        const message = response._data?.message
        
        if (message && typeof message === 'string') {
          toast.success(message)
        } else {
          // Default success messages based on method
          const defaultMessages: Record<string, string> = {
            'POST': 'Tạo mới thành công!',
            'PATCH': 'Cập nhật thành công!',
            'PUT': 'Cập nhật thành công!',
            'DELETE': 'Xóa thành công!'
          }
          
          if (method && defaultMessages[method]) {
            toast.success(defaultMessages[method])
          }
        }
      }
    },

    onResponseError({ response }) {
      // Handle authentication errors
      if (response.status === 401) {
        toast.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.')
        navigateTo('/login')
        return
      }

      // Handle validation and other errors
      if (response._data) {
        const { message, error: errorType } = response._data

        // Format error message
        let errorMessage = 'Đã có lỗi xảy ra'

        if (message) {
          if (Array.isArray(message)) {
            // Join multiple validation messages
            errorMessage = message.join(', ')
          } else {
            errorMessage = message
          }
        } else if (errorType) {
          errorMessage = errorType
        }

        // Show toast notification
        toast.error(errorMessage)
      } else {
        // Generic error
        toast.error('Không thể kết nối đến server')
      }
    }
  })

  console.log('✅ API Plugin providing $api:', typeof api)

  return {
    provide: {
      api
    }
  }
})