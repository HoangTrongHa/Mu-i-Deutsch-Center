<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  course: '',
  message: ''
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Vui lòng nhập họ tên'
  }
  
  if (!form.value.phone.trim()) {
    errors.value.phone = 'Vui lòng nhập số điện thoại'
  } else if (!/^[0-9]{10}$/.test(form.value.phone.replace(/\s/g, ''))) {
    errors.value.phone = 'Số điện thoại không hợp lệ (10 số)'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Vui lòng nhập email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Email không hợp lệ'
  }
  
  if (!form.value.course) {
    errors.value.course = 'Vui lòng chọn khóa học quan tâm'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // TODO: Tích hợp với API backend hoặc email service
    // await $fetch('/api/contact', {
    //   method:  'POST',
    //   body: form.value
    // })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitSuccess.value = true
    form.value = { name: '', phone: '', email: '', course: '', message: '' }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Submit error:', error)
    errors.value.submit = 'Có lỗi xảy ra. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Liên hệ',
  meta: [
    { 
      name: 'description', 
      content: 'Liên hệ với Muối Deutsch Center để được tư vấn miễn phí về khóa học tiếng Đức phù hợp.  Hotline: 0123 456 789, Email: contact@muoideutsch.com' 
    },
    {
      name: 'keywords',
      content: 'liên hệ muối deutsch, tư vấn học tiếng đức, đăng ký khóa học, hotline tiếng đức'
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen">
      <!-- Hero -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <Heading level="1" class="mb-4 font-handwritten text-4xl md:text-5xl">
            Liên hệ với chúng tôi 📞
          </Heading>
          <p class="text-xl max-w-2xl mx-auto">
            Đăng ký tư vấn miễn phí hoặc đặt câu hỏi - Chúng tôi luôn sẵn sàng hỗ trợ bạn!
          </p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Info -->
          <div>
            <Heading level="2" class="mb-8 text-3xl font-bold">
              Thông tin liên hệ
            </Heading>

            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="location_on" class="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Địa chỉ</h3>
                  <p class="text-gray-600">
                    123 Đường ABC, Quận XYZ<br />
                    Hà Nội, Việt Nam
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="phone" class="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Hotline</h3>
                  <p class="text-gray-600">
                    <a href="tel:+84123456789" class="hover:text-blue-600 transition-colors text-lg font-semibold">
                      0123 456 789
                    </a>
                  </p>
                  <p class="text-sm text-gray-500 mt-1">Zalo: 0123 456 789</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mail" class="text-purple-600 text-2xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Email</h3>
                  <p class="text-gray-600">
                    <a href="mailto:contact@muoideutsch.com" class="hover:text-blue-600 transition-colors">
                      contact@muoideutsch.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="schedule" class="text-orange-600 text-2xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Giờ làm việc</h3>
                  <p class="text-gray-600">
                    Thứ 2 - Chủ nhật:  8h00 - 21h00
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="font-semibold text-lg mb-4">Theo dõi chúng tôi</h3>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="facebook" />
                </a>
                <a href="#" class="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon name="instagram" />
                </a>
                <a href="#" class="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Icon name="youtube" />
                </a>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="mt-8 bg-gray-200 rounded-2xl h-64 overflow-hidden">
              <div class="flex items-center justify-center h-full text-gray-500">
                <div class="text-center">
                  <Icon name="location_on" class="text-6xl mb-2" />
                  <p>Google Maps sẽ hiển thị tại đây</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <Heading level="2" class="mb-8 text-3xl font-bold">
              Đăng ký tư vấn miễn phí
            </Heading>

            <!-- Success Message -->
            <div 
              v-if="submitSuccess" 
              class="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg flex items-start gap-3 animate-fade-in"
            >
              <Icon name="check_circle" class="text-green-600 text-2xl flex-shrink-0" />
              <div>
                <p class="font-semibold text-green-800 mb-1">Đăng ký thành công! </p>
                <p class="text-green-700 text-sm">
                  Cảm ơn bạn đã quan tâm.  Chúng tôi sẽ liên hệ lại trong vòng 24 giờ. 
                </p>
              </div>
            </div>

            <!-- Error Message -->
            <div 
              v-if="errors.submit" 
              class="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start gap-3"
            >
              <Icon name="error" class="text-red-600 text-2xl flex-shrink-0" />
              <p class="text-red-700">{{ errors.submit }}</p>
            </div>

            <form @submit.prevent="submitForm" class="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">
                  Họ và tên <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 bg-red-50': errors.name }"
                  placeholder="Nguyễn Văn A"
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <Icon name="error" size="small" />
                  {{ errors.name }}
                </p>
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">
                  Số điện thoại <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 bg-red-50': errors.phone }"
                  placeholder="0123456789"
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <Icon name="error" size="small" />
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 bg-red-50': errors.email }"
                  placeholder="example@email.com"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <Icon name="error" size="small" />
                  {{ errors.email }}
                </p>
              </div>

              <!-- Course -->
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">
                  Khóa học quan tâm <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="form.course"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500 bg-red-50': errors.course }"
                >
                  <option value="">-- Chọn khóa học --</option>
                  <option value="A1">Khóa A1 - Tiếng Đức cơ bản</option>
                  <option value="A2">Khóa A2 - Tiếng Đức sơ cấp</option>
                  <option value="B1">Khóa B1 - Tiếng Đức trung cấp</option>
                  <option value="B2">Khóa B2 - Tiếng Đức cao cấp</option>
                  <option value="C1">Khóa C1 - Tiếng Đức chuyên sâu</option>
                  <option value="C2">Khóa C2 - Tiếng Đức bậc thầy</option>
                  <option value="other">Tư vấn khác</option>
                </select>
                <p v-if="errors.course" class="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <Icon name="error" size="small" />
                  {{ errors.course }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">
                  Nội dung (tùy chọn)
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Câu hỏi hoặc yêu cầu của bạn..."
                />
              </div>

              <!-- Submit Button -->
              <Button
                type="submit"
                variant="primary"
                size="large"
                class="w-full"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                  <Icon name="send" />
                  Gửi đăng ký
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="schedule" class="animate-spin" />
                  Đang gửi...
                </span>
              </Button>

              <p class="text-xs text-gray-500 text-center">
                Bằng cách gửi form, bạn đồng ý với 
                <a href="#" class="text-blue-600 hover:underline">chính sách bảo mật</a> của chúng tôi. 
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>