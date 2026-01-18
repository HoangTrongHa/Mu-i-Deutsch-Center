export default defineNuxtConfig({
  compatibilityDate: '2026-01-04',
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000',
    },
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      
      title: 'Muối Deutsch Center - Học tiếng Đức dễ như muối bỏ bể',
      titleTemplate: '%s | Muối Deutsch Center',
      
      meta: [
        {
          name: 'description',
          content: 'Trung tâm tiếng Đức uy tín tại Hà Nội.  Khóa học A1-C2 với giáo viên bản ngữ, cam kết đầu ra chứng chỉ Goethe.  Học tiếng Đức dễ như muối bỏ bể!'
        },
        {
          name: 'keywords',
          content: 'học tiếng đức, trung tâm tiếng đức, khóa học tiếng đức, luyện thi goethe, du học đức, tiếng đức hà nội, goethe zertifikat'
        },
        { name: 'author', content: 'Muối Deutsch Center' },
        { property: 'og:site_name', content: 'Muối Deutsch Center' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'vi_VN' },
        { property: 'og:title', content: 'Muối Deutsch Center - Học tiếng Đức dễ như muối bỏ bể' },
        { property: 'og:description', content: 'Trung tâm tiếng Đức uy tín với giáo viên bản ngữ, cam kết đầu ra chứng chỉ quốc tế' },
        { property: 'og:url', content: 'https://muoideutsch.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Muối Deutsch Center' },
        { name: 'twitter:description', content: 'Học tiếng Đức dễ như muối bỏ bể!' },
        { name: 'theme-color', content: '#3B82F6' },
      ],
      
      link: [
        { rel: 'canonical', href: 'https://muoideutsch.vercel.app' },
      ],
      
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Muối Deutsch Center',
            description: 'Trung tâm tiếng Đức uy tín tại Hà Nội',
            url: 'https://muoideutsch.vercel.app',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hà Nội',
              addressCountry: 'VN'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+84-123-456-789',
              contactType: 'Customer Service',
              availableLanguage: ['vi', 'de']
            }
          })
        }
      ]
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  content: {
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
    },
  },

  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
  },

  robots: {
    rules: [
      {
        UserAgent: '*',
        Allow: '/',
      },
    ],
  },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
})