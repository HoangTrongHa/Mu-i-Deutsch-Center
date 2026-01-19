import type { Teacher, Level } from '~/types'

interface FetchTeachersParams {
  page?: number
  limit?: number
  level?: Level
  isActive?: boolean
  search?: string
}

interface TeachersResponse {
  data: Teacher[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export const useTeachersApi = () => {
  const { $api } = useNuxtApp()

  const fetchTeachers = async (params?: FetchTeachersParams) => {
    const queryParams = new URLSearchParams()
    
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.level) queryParams.append('level', params.level)
    if (params?.isActive !== undefined) queryParams.append('isActive', params.isActive.toString())
    if (params?.search) queryParams.append('search', params.search)

    const queryString = queryParams.toString()
    const url = queryString ? `/teachers?${queryString}` : '/teachers'
    
    return await $api<TeachersResponse>(url)
  }

  const fetchTeacher = async (id: string) => {
    return await $api<Teacher>(`/teachers/${id}`)
  }

  const createTeacher = async (data: Partial<Teacher>) => {
    return await $api<Teacher>('/teachers', {
      method: 'POST',
      body: data,
    })
  }

  const updateTeacher = async (id: string, data: Partial<Teacher>) => {
    return await $api<Teacher>(`/teachers/${id}`, {
      method: 'PATCH',
      body: data,
    })
  }

  const deleteTeacher = async (id: string) => {
    return await $api<{ success: boolean }>(`/teachers/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    fetchTeachers,
    fetchTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
  }
}
