# German Grid - Nuxt App (Atomic Design)

Ứng dụng Nuxt được xây dựng theo mô hình Atomic Design, chuyển đổi từ file HTML tĩnh.

## 🏗️ Cấu trúc Atomic Design

### Atoms (Nguyên tử)
Các thành phần cơ bản nhất, không thể chia nhỏ hơn:

- **Button.vue** - Nút bấm với các biến thể (primary, secondary, outline)
- **Icon.vue** - Icon Material Symbols
- **Link.vue** - Liên kết với các style khác nhau
- **Badge.vue** - Nhãn/huy hiệu
- **Heading.vue** - Tiêu đề có thể tùy chỉnh cấp độ (h1-h6)
- **LevelBadge.vue** - Badge đặc biệt cho các cấp độ (A1, A2, B1, B2)

### Molecules (Phân tử)
Kết hợp nhiều atoms tạo thành các thành phần có chức năng:

- **Logo.vue** - Logo của website (Icon + Text)
- **NavMenu.vue** - Menu điều hướng
- **FeatureCard.vue** - Card hiển thị tính năng
- **LevelCard.vue** - Card hiển thị thông tin khóa học
- **TestimonialCard.vue** - Card đánh giá của học viên

### Organisms (Sinh vật)
Kết hợp molecules và atoms tạo thành các phần hoàn chỉnh:

- **Header.vue** - Header website với logo, menu, và nút CTA
- **HeroSection.vue** - Phần hero với tiêu đề, mô tả, và hình ảnh
- **FeaturesSection.vue** - Phần hiển thị các tính năng nổi bật
- **LevelsSection.vue** - Phần hiển thị các cấp độ khóa học
- **TestimonialsSection.vue** - Phần hiển thị đánh giá học viên
- **CTASection.vue** - Phần kêu gọi hành động
- **Footer.vue** - Footer website

### Pages (Trang)
Kết hợp các organisms tạo thành trang hoàn chỉnh:

- **index.vue** - Trang chủ

## 🎨 Styling

- **Tailwind CSS** - Framework CSS utility-first
- **Custom CSS** - Các style đặc biệt (notebook-bg, handwritten-note, etc.)
- **Google Fonts**:
  - Spline Sans (font chính)
  - Caveat (font chữ viết tay)
  - Material Symbols Outlined (icon)

## 📦 Cài đặt

```bash
# Di chuyển vào thư mục
cd nuxt-app

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## 🚀 Scripts

```bash
npm run dev        # Chạy dev server
npm run build      # Build production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## 🎯 Lợi ích của Atomic Design

1. **Tái sử dụng** - Components có thể dùng lại ở nhiều nơi
2. **Dễ bảo trì** - Thay đổi component ở một nơi, cập nhật toàn bộ
3. **Nhất quán** - UI nhất quán trên toàn website
4. **Mở rộng dễ dàng** - Dễ dàng thêm components mới
5. **Testing** - Dễ test từng component độc lập
6. **Documentation** - Cấu trúc rõ ràng, dễ hiểu

## 📁 Cấu trúc thư mục

```
nuxt-app/
├── app/
│   ├── app.vue           # App wrapper
│   └── pages/
│       └── index.vue     # Trang chủ
├── components/
│   ├── atoms/            # Atoms
│   ├── molecules/        # Molecules
│   └── organisms/        # Organisms
├── assets/
│   └── css/
│       └── main.css      # Custom CSS
├── nuxt.config.ts        # Nuxt configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 🎨 Color Palette

```typescript
{
  'primary': '#579bb1',        // Muted Teal
  'primary-dark': '#3f7a8c',
  'primary-light': '#e0f2f7',
  'accent': '#e07a5f',         // Terracotta
  'accent-hover': '#c86045',
  'paper': '#fdfbf7',          // Warm White
  'paper-dark': '#f4f1ea',
  'ink': '#2c3e50',            // Dark Blue-Grey
  'ink-light': '#64748b',
}
```
