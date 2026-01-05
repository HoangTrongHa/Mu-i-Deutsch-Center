<template>
  <section class="bg-paper-dark px-4 py-16 md:py-20 md:px-10 border-t border-dashed border-primary/20">
    <div class="mx-auto max-w-7xl text-center">
      <Heading level="2" variant="section" class="mb-8 md:mb-12">Lưu Bút Của Học Viên</Heading>

      <div class="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
        <TestimonialCard
          name="Sarah Jenkins"
          role="Tốt nghiệp B1"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDbazYIPVHr3e--U1ekq5jZfQWTLzhoHfyLCVSh894le1wjskOpVJ6Leda1cWyR6b5j8oUa67ltB_9YR1ktqOH5uw_eqEZa4KJEQZz1F8jHzzY9SM6IucvZi4RAejuYEzTKHkkkvQygaZTJQXp4H99j_LlgMjg2TVpO26dhO_CT4bUWPyLFEjHUhPD7kxi9T6QTgi0DHRsWOE7o7iPXm5aleOZzWzCw6g5Q_P1JSGa9whO5gpwjmdsz1b1xDABmqDFg9dYGragPgkbI"
          testimonial="Phương pháp 'kẻ ô' thực sự giúp mình sắp xếp ngữ pháp gọn gàng. Mình đã đỗ B1 chỉ sau 3 tháng! Dankeschön!"
          :rating="5"
          bg-color="#fff9c4"
          line-color="#f9fbe7"
          tape-color="bg-red-400/40"
          rotation="rotate-2"
        />
        <TestimonialCard
          name="Mark Davis"
          role="Học viên A2"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCoeKMoMLlh0zYGGiBFB2qjPdZs2TRF423L1obcyQ2NNuvTGLox6iEy8dV_4D2yTfLsuGwzivb_uvC8gvlg82LIfTPy4IuF25um9qxf8JnUaHt9UlLWYe8rz5uiLiSfIC03vwk8utPNVGbwuGoMg2n86Hf1Gyd17gwuX0YoK_wi3B2eBA4t2re7cDalVubGUmEpVFiVb3zjNTAN6GZQfd2UPfivpK0uQS7lbLW-XPuYYr6Si_96VILjKHKFQQINekF367eTSqgahCor"
          testimonial="Cuối cùng cũng tìm được khóa học không hề lộn xộn. Video ngắn gọn và dễ hiểu. Rất hợp với lịch trình bận rộn của mình."
          :rating="4.5"
          bg-color="#e1f5fe"
          line-color="#e0f7fa"
          tape-color="bg-blue-400/40"
          rotation="-rotate-2"
          class="md:translate-y-6"
        />
        <TestimonialCard
          name="Elena Rodriguez"
          role="Tốt nghiệp B2"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuB-mRpnyPkW4EgeVdFY-6NklbfX-DpTI5u1-gK0rvO_J5uCJFedAEoq9To1401d4cDlFCwRCEiitiFh7TVaapawRtQeMrsW7wh2Pzf9FTec8z3QuWnWUQt8SXBvJ7KUAi1v3Ia4pV69ADEurZ8rJzbLr0I-7qEEfV5-VcWhlKecCrdd33yJMKc5Wf3GgJYTwJDHfmjBboINN8q0zRWYxbhb7OXfzvxQ9GPFzWa_0OxORyyesxarTPAslPgSwjawEf5a5YgUd8BwKlW-"
          testimonial="Chuyển đến Berlin thật đáng sợ, nhưng khóa học này đã trang bị cho mình vốn từ cần thiết. Rất khuyến khích cho những ai học nghiêm túc."
          :rating="5"
          bg-color="#fce4ec"
          line-color="#f8bbd0"
          tape-color="bg-purple-400/40"
          rotation="rotate-1"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import TestimonialCard from '../molecules/TestimonialCard.vue'
</script>
