export const useApiState = () => {
  const loading = useState('api-loading', () => false)
  const error = useState<Error | null>('api-error', () => null)

  const clearError = () => {
    error.value = null
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    clearError
  }
}
