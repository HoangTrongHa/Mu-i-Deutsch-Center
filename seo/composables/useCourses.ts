import type { Course, Level } from '../types'

const COURSES_DATA: Course[] = [
  {
    level: 'A1',
    title: 'Tiếng Đức cơ bản A1',
    description: 'Khóa học dành cho người mới bắt đầu, từ con số 0.  Học alphabet, phát âm cơ bản, giao tiếp hàng ngày.',
    longDescription: 'Khóa học A1 là bước đầu tiên trong hành trình chinh phục tiếng Đức. Bạn sẽ học alphabet, phát âm chuẩn, giao tiếp cơ bản trong các tình huống hàng ngày như giới thiệu bản thân, mua sắm, đặt món ăn, hỏi đường.  Với phương pháp giảng dạy hiện đại kết hợp giáo viên bản ngữ, bạn sẽ tự tin giao tiếp tiếng Đức sau 3 tháng.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: 3500000,
    schedule: 'Thứ 2, 4, 6 - 18h00-20h00',
    features: [
      'Giáo viên bản ngữ người Đức',
      'Lớp nhỏ 8-12 học viên',
      'Tài liệu Goethe miễn phí',
      'Luyện thi Goethe A1',
      'Cam kết đầu ra hoặc học lại miễn phí'
    ],
    curriculum: [
      'Alphabet và phát âm',
      'Các con số, ngày tháng',
      'Giới thiệu bản thân',
      'Gia đình và bạn bè',
      'Mua sắm, đặt món ăn',
      'Hỏi đường, di chuyển',
      'Thì hiện tại (Präsens)'
    ]
  },
  {
    level: 'A2',
    title: 'Tiếng Đức sơ cấp A2',
    description: 'Nâng cao kỹ năng giao tiếp, mở rộng vốn từ vựng và ngữ pháp. Chuẩn bị vững chắc cho B1.',
    longDescription: 'Khóa A2 giúp bạn nâng cao khả năng giao tiếp trong nhiều tình huống phức tạp hơn. Mở rộng vốn từ vựng về công việc, du lịch, sức khỏe.  Học cách kể chuyện trong quá khứ, diễn đạt ý kiến cá nhân.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: 3800000,
    schedule: 'Thứ 3, 5, 7 - 18h00-20h00',
    features: [
      'Giáo viên bản ngữ người Đức',
      'Thực hành giao tiếp chuyên sâu',
      'Tài liệu Goethe miễn phí',
      'Luyện thi Goethe A2',
      'Cam kết đầu ra'
    ],
    curriculum: [
      'Kể về quá khứ (Perfekt, Präteritum)',
      'Diễn đạt ý kiến',
      'Viết email đơn giản',
      'Nói về công việc, sở thích',
      'Du lịch và văn hóa',
      'Akkusativ, Dativ'
    ]
  },
  {
    level: 'B1',
    title: 'Tiếng Đức trung cấp B1',
    description: 'Giao tiếp tự tin trong nhiều tình huống.  Điều kiện cần thiết cho du học và xin visa Đức.',
    longDescription: 'B1 là cấp độ quan trọng - điều kiện tối thiểu để xin visa du học, đoàn tụ gia đình tại Đức. Bạn sẽ hiểu và tham gia các cuộc trò chuyện về nhiều chủ đề, đọc hiểu báo, viết email chính thức.',
    duration: '4 tháng',
    sessions: '48 buổi',
    price: 4500000,
    schedule: 'Thứ 2, 4, 6 - 18h00-20h30',
    features: [
      'Giáo viên bản ngữ + Trợ giảng Việt',
      'Luyện 4 kỹ năng chuyên sâu',
      'Mock test hàng tuần',
      'Luyện thi Goethe B1 intensive',
      'Cam kết đầu ra 100%'
    ],
    curriculum: [
      'Thảo luận các vấn đề xã hội',
      'Đọc hiểu tin tức, báo chí',
      'Viết thư, email chính thức',
      'Ngữ pháp:  Konjunktiv II, Passiv',
      'Nebensätze nâng cao',
      'Luyện thi 4 kỹ năng'
    ]
  },
  {
    level: 'B2',
    title: 'Tiếng Đức cao cấp B2',
    description: 'Hiểu và diễn đạt ý tưởng phức tạp.  Đủ trình độ học đại học tại Đức.',
    longDescription: 'B2 là cấp độ yêu cầu để học đại học tại Đức. Bạn sẽ hiểu các bài giảng chuyên ngành, tham gia seminar, viết luận văn.  Đây là bước đệm vững chắc cho C1.',
    duration: '5 tháng',
    sessions: '60 buổi',
    price: 5500000,
    schedule: 'Thứ 2, 4, 6 - 18h00-20h30',
    features: [
      'Giáo viên bản ngữ có kinh nghiệm luyện thi',
      'Phát triển tư duy học thuật',
      'Viết luận, presentation',
      'Luyện thi Goethe B2 / TestDaF',
      'Cam kết đầu ra'
    ],
    curriculum: [
      'Đọc hiểu văn bản chuyên ngành',
      'Presentation chuyên đề',
      'Viết luận, bài phân tích',
      'Tranh luận, thảo luận',
      'Ngữ pháp nâng cao',
      'Chiến thuật thi B2/TestDaF'
    ]
  },
  {
    level: 'C1',
    title: 'Tiếng Đức chuyên sâu C1',
    description: 'Sử dụng tiếng Đức linh hoạt trong công việc và học tập. Trình độ cao cấp.',
    longDescription: 'C1 là trình độ cao cấp, cho phép bạn sử dụng tiếng Đức linh hoạt trong mọi tình huống làm việc, học tập.  Hiểu văn học, triết học, chính trị. Thích hợp cho nghiên cứu, giảng dạy.',
    duration: '6 tháng',
    sessions: '72 buổi',
    price: 6800000,
    schedule: 'Thứ 2, 4, 6 - 18h30-21h00',
    features: [
      'Giáo viên bản ngữ chuyên gia',
      'Nội dung chuyên ngành sâu',
      'Thảo luận, tranh luận nâng cao',
      'Luyện thi Goethe C1',
      'Hỗ trợ du học & career'
    ],
    curriculum: [
      'Văn học Đức hiện đại',
      'Chính trị, xã hội',
      'Viết nghiên cứu, báo cáo',
      'Presentation chuyên sâu',
      'Tranh luận phức tạp',
      'Luyện thi C1'
    ]
  },
  {
    level: 'C2',
    title: 'Tiếng Đức bậc thầy C2',
    description: 'Trình độ gần như người bản ngữ. Phù hợp cho nghiên cứu, giảng dạy chuyên sâu.',
    longDescription: 'C2 là đỉnh cao - trình độ gần như người bản ngữ.  Hiểu mọi thứ đọc và nghe, diễn đạt ý tưởng phức tạp một cách chính xác. Phù hợp cho nghiên cứu tiến sĩ, giảng dạy đại học.',
    duration: '6 tháng',
    sessions: '72 buổi',
    price: 7500000,
    schedule: 'Linh hoạt theo nhóm',
    features: [
      'Giáo viên bản ngữ trình độ cao',
      'Chương trình cá nhân hóa',
      'Văn học, triết học, chính trị',
      'Luyện thi Goethe C2',
      'Tư vấn career path'
    ],
    curriculum:  [
      'Văn học kinh điển',
      'Triết học, tư tưởng',
      'Nghiên cứu chuyên sâu',
      'Viết luận văn tiến sĩ',
      'Giảng dạy tiếng Đức',
      'Luyện thi C2'
    ]
  }
]

export const useCourses = () => {
  const courses = computed<Course[]>(() => COURSES_DATA)
  
  const getCourseByLevel = (level: string): Course | undefined => {
    return courses.value.find(
      c => c.level.toLowerCase() === level.toLowerCase()
    )
  }
  
  const getAvailableLevels = computed<Level[]>(() => 
    courses.value.map(c => c.level)
  )
  
  return {
    courses,
    getCourseByLevel,
    availableLevels: getAvailableLevels,
  }
}