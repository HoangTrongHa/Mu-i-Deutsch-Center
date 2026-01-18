export const useCoursesApi = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiUrl

  const fetchCourses = async (params?: {
    page?: number
    limit?: number
    level?: string
    isActive?: boolean
    search?: string
  }) => {
    const query = new URLSearchParams()
    if (params?.page) query.append('page', params.page.toString())
    if (params?.limit) query.append('limit', params.limit.toString())
    if (params?.level) query.append('level', params.level)
    if (params?.isActive !== undefined) query.append('isActive', params.isActive.toString())
    if (params?.search) query.append('search', params.search)

    const response = await $fetch(`${apiBase}/courses?${query.toString()}`)
    return response
  }

  const fetchCourse = async (id: string) => {
    return await $fetch(`${apiBase}/courses/${id}`)
  }

  const createCourse = async (data: any) => {
    return await $fetch(`${apiBase}/courses`, {
      method: 'POST',
      body: data,
    })
  }

  const updateCourse = async (id: string, data: any) => {
    return await $fetch(`${apiBase}/courses/${id}`, {
      method: 'PATCH',
      body: data,
    })
  }

  const deleteCourse = async (id: string) => {
    return await $fetch(`${apiBase}/courses/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    fetchCourses,
    fetchCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  }
}
