<template>
  <footer class="border-t border-gray-200 bg-white pt-12 md:pt-16 pb-8">
    <div class="mx-auto max-w-7xl px-4 md:px-10">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <!-- Brand column -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 text-ink mb-4">
            <Icon :size="28" class="text-primary">grid_on</Icon>
            <span class="text-xl font-bold">German Grid</span>
          </div>
          <p class="text-sm text-ink-light">
            Giúp việc học tiếng Đức trở nên bài bản, hiệu quả và thú vị.
          </p>
          <div class="mt-6 flex gap-4">
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378a3.07 3.07 0 11-3.07 3.07 3.07 3.07 0 013.07-3.07zm0 1.565a1.505 1.505 0 101.505 1.505 1.505 1.505 0 00-1.505-1.505zm4.998-3.05a1.096 1.096 0 11-1.096 1.096 1.096 1.096 0 011.096-1.096z" fill-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Courses -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-ink">Các Khóa Học</h4>
          <ul class="space-y-2 text-sm text-ink-light">
            <li><Link href="#">Trình độ A1 (Cơ bản)</Link></li>
            <li><Link href="#">Trình độ A2 (Sơ cấp)</Link></li>
            <li><Link href="#">Trình độ B1 (Trung cấp)</Link></li>
            <li><Link href="#">Trình độ B2 (Trung cao)</Link></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-ink">Công Ty</h4>
          <ul class="space-y-2 text-sm text-ink-light">
            <li><Link href="#">Giới thiệu</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Tuyển dụng</Link></li>
            <li><Link href="#">Liên hệ</Link></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-ink">Pháp Lý</h4>
          <ul class="space-y-2 text-sm text-ink-light">
            <li><Link href="#">Chính sách bảo mật</Link></li>
            <li><Link href="#">Điều khoản dịch vụ</Link></li>
            <li><Link href="#">Chính sách Cookie</Link></li>
          </ul>
        </div>
      </div>

      <div class="mt-16 border-t border-gray-100 pt-8 text-center text-xs text-ink-light">
        <p>© 2023 Trường Ngôn Ngữ German Grid. Bảo lưu mọi quyền.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'
import Link from '../atoms/Link.vue'
</script>
