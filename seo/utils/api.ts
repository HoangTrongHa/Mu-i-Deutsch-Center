export const createApiClient = () => {
  const config = useRuntimeConfig()
  
  return async <T>(url: string, options?: any) => {
    const loading = useState('api-loading')
    const error = useState('api-error')
    
    loading.value = true
    error.value = null
    
    try {
      const result = await $fetch<T>(`${config.public.apiUrl}${url}`, {
        ...options,
        onRequest({ options }) {
          // Add auth token
          const token = useCookie('auth-token')
          if (token.value) {
            options.headers = {
              ...options.headers,
              Authorization: `Bearer ${token.value}`
            }
          }
        }
      })
      return result
    } catch (err) {
      error.value = err
      throw err
    } finally {
      loading.value = false
    }
  }
}
