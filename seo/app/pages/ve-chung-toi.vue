<script setup lang="ts">
useHead({
  title: 'Về chúng tôi',
  meta: [
    { 
      name: 'description', 
      content: 'Tìm hiểu về Muối Deutsch Center - Trung tâm tiếng Đức uy tín tại Hà Nội với phương pháp giảng dạy hiện đại, giáo viên bản ngữ, cam kết đầu ra.' 
    },
    {
      name: 'keywords',
      content: 'về muối deutsch, giới thiệu trung tâm, giáo viên tiếng đức, phương pháp giảng dạy'
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    
    <main class="min-h-screen">
      <!-- Hero -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <Heading level="1" class="mb-6 font-handwritten text-4xl md:text-5xl">
            Về Muối Deutsch Center 🧂
          </Heading>
          <p class="text-2xl max-w-3xl mx-auto">
            Học tiếng Đức - Dễ như muối bỏ bể
          </p>
        </div>
      </section>

      <!-- Story -->
      <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Heading level="2" class="mb-6 text-3xl font-bold text-center">
              Câu chuyện của chúng tôi
            </Heading>
            
            <div class="prose prose-lg max-w-none text-gray-700">
              <p class="text-xl leading-relaxed mb-6">
                Muối Deutsch Center được thành lập với sứ mệnh làm cho việc học tiếng Đức 
                trở nên dễ dàng và thú vị như <strong>"muối bỏ bể"</strong> - đơn giản, tự nhiên và hiệu quả.
              </p>
              
              <p class="leading-relaxed mb-6">
                Chúng tôi hiểu rằng tiếng Đức từng được xem là ngôn ngữ khó học với ngữ pháp phức tạp, 
                phát âm "kỳ lạ" và cấu trúc câu "rối rắm". Nhưng với phương pháp giảng dạy hiện đại, 
                đội ngũ giáo viên bản ngữ nhiệt tình và môi trường học tập thân thiện, 
                hàng nghìn học viên của Muối Deutsch đã chinh phục thành công tiếng Đức.
              </p>

              <p class="leading-relaxed mb-6">
                Từ những ngày đầu với lớp học nhỏ chỉ 5 học viên, đến nay Muối Deutsch Center 
                đã đào tạo hơn <strong>2,000+ học viên</strong> đạt chứng chỉ quốc tế Goethe, 
                giúp họ thực hiện ước mơ du học Đức, làm việc tại châu Âu hay đơn giản là 
                chinh phục một ngôn ngữ mới. 
              </p>

              <div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p class="text-lg italic text-blue-900">
                  "Học tiếng Đức không khó như bạn nghĩ.  Quan trọng là phương pháp đúng, 
                  giáo viên tâm huyết và sự kiên trì của bạn.  Chúng tôi ở đây để đồng hành 
                  cùng bạn trên hành trình chinh phục tiếng Đức!"
                </p>
                <p class="text-right text-blue-700 mt-4 font-semibold">
                  — Đội ngũ Muối Deutsch Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <Heading level="2" class="text-center mb-12 text-3xl font-bold">
            Sứ mệnh & Tầm nhìn
          </Heading>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="text-5xl mb-4 text-center">🎯</div>
              <Heading level="3" class="text-2xl font-bold mb-4 text-center">
                Sứ mệnh
              </Heading>
              <p class="text-gray-700 text-center leading-relaxed">
                Làm cho việc học tiếng Đức trở nên dễ dàng, thú vị và hiệu quả. 
                Mang đến cơ hội học tập chất lượng cao với mức học phí hợp lý, 
                giúp mọi người thực hiện ước mơ du học và phát triển sự nghiệp.
              </p>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="text-5xl mb-4 text-center">🚀</div>
              <Heading level="3" class="text-2xl font-bold mb-4 text-center">
                Tầm nhìn
              </Heading>
              <p class="text-gray-700 text-center leading-relaxed">
                Trở thành trung tâm tiếng Đức hàng đầu Việt Nam, được công nhận 
                bởi chất lượng đào tạo, tỷ lệ đầu ra cao và sự hài lòng của học viên.  
                Kết nối hàng nghìn người Việt với cơ hội tại Đức và châu Âu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="container mx-auto px-4 py-16">
        <Heading level="2" class="text-center mb-12 text-3xl font-bold">
          Giá trị cốt lõi
        </Heading>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="school" class="text-blue-600 text-4xl" />
            </div>
            <Heading level="3" class="text-xl font-bold mb-3">
              Chất lượng
            </Heading>
            <p class="text-gray-600">
              Cam kết chất lượng giảng dạy cao nhất với giáo viên bản ngữ, 
              phương pháp hiện đại và tài liệu chuẩn quốc tế.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="favorite" class="text-green-600 text-4xl" />
            </div>
            <Heading level="3" class="text-xl font-bold mb-3">
              Tâm huyết
            </Heading>
            <p class="text-gray-600">
              Đồng hành và hỗ trợ tận tình từng học viên, 
              không chỉ trong lớp học mà cả hành trình du học và sự nghiệp.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="verified" class="text-yellow-600 text-4xl" />
            </div>
            <Heading level="3" class="text-xl font-bold mb-3">
              Cam kết
            </Heading>
            <p class="text-gray-600">
              Cam kết đầu ra rõ ràng.  Nếu chưa đạt, 
              học viên được học lại miễn phí 100% học phí.
            </p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="bg-blue-600 text-white py-16">
        <div class="container mx-auto px-4">
          <Heading level="2" class="text-center mb-6 text-3xl font-bold">
            Đội ngũ giáo viên
          </Heading>
          <p class="text-center text-xl mb-12 max-w-3xl mx-auto">
            100% giáo viên bản ngữ người Đức, có chứng chỉ giảng dạy quốc tế, 
            kinh nghiệm 5+ năm và đam mê với nghề. 
          </p>
          
          <div class="text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg">
              <Icon name="groups" class="text-3xl" />
              <div class="text-left">
                <p class="text-3xl font-bold">15+</p>
                <p class="text-sm">Giáo viên</p>
              </div>
            </div>
            
            <div class="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg ml-4">
              <Icon name="school" class="text-3xl" />
              <div class="text-left">
                <p class="text-3xl font-bold">2,000+</p>
                <p class="text-sm">Học viên</p>
              </div>
            </div>
            
            <div class="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg ml-4">
              <Icon name="star" class="text-3xl" />
              <div class="text-left">
                <p class="text-3xl font-bold">98%</p>
                <p class="text-sm">Hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="container mx-auto px-4 py-16 text-center">
        <Heading level="2" class="mb-6 text-3xl font-bold">
          Sẵn sàng bắt đầu hành trình tiếng Đức? 
        </Heading>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Đăng ký tư vấn miễn phí hoặc tham gia lớp học thử để trải nghiệm phương pháp của Muối Deutsch
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/lien-he">
            <Button variant="primary" size="large">
              Đăng ký tư vấn
            </Button>
          </NuxtLink>
          <NuxtLink to="/khoa-hoc">
            <Button variant="outline" size="large">
              Xem khóa học
            </Button>
          </NuxtLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>