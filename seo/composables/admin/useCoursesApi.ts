import type { Course } from '../types'

interface FetchCoursesParams {
  page?: number
  limit?: number
  level?: string
  isActive?: boolean
  search?: string
}

interface CoursesResponse {
  data: Course[]
  total: number
  page: number
  limit: number
}

export const useCoursesApi = () => {
  const { $api } = useNuxtApp()

  const fetchCourses = async (params?: FetchCoursesParams) => {
    const queryParams = new URLSearchParams()

    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.level) queryParams.append('level', params.level)
    if (params?.isActive !== undefined) queryParams.append('isActive', params.isActive.toString())
    if (params?.search) queryParams.append('search', params.search)

    const queryString = queryParams.toString()
    const url = queryString ? `/courses?${queryString}` : '/courses'

    return await $api<CoursesResponse>(url)
  }

  const fetchCourse = async (id: string) => {
    return await $api<Course>(`/courses/${id}`)
  }

  const createCourse = async (data: Partial<Course>) => {
    return await $api<Course>('/courses', {
      method: 'POST',
      body: data,
    })
  }

  const updateCourse = async (id: string, data: Partial<Course>) => {
    return await $api<Course>(`/courses/${id}`, {
      method: 'PATCH',
      body: data,
    })
  }

  const deleteCourse = async (id: string) => {
    return await $api<{ success: boolean }>(`/courses/${id}`, {
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
