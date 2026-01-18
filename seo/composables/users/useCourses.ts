import { onMounted, ref, computed, readonly } from 'vue'
import type { Course, Level } from '../types'
export const useCourses = () => {
  const { $api } = useNuxtApp()
  const courses = ref<Course[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchCourses = async () => {
    loading.value = true
    error.value = null
    
    try {
      const data = await $api<Course[]>('/courses')
      
      if (data) {
        courses.value = data?.data;
      }
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Failed to fetch courses')
      console.error('Error fetching courses:', err)
    } finally {
      loading.value = false
    }
  }

  const getCourseByLevel = (level: string): Course | undefined => {
    return courses.value.find(
      c => c.level.toLowerCase() === level.toLowerCase()
    )
  }

  const availableLevels = computed<Level[]>(() => 
    courses.value.map(c => c.level)
  )

  onMounted(() => {
    fetchCourses()
  })

  return {
    courses: readonly(courses),
    loading: readonly(loading),
    error: readonly(error),
    getCourseByLevel,
    availableLevels,
    fetchCourses,
  }
}