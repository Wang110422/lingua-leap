/* ---------- Dữ liệu mẫu cho vai trò Giảng viên ---------- */

export const teacher = {
  name: "Nguyễn Hoài Phương",
  email: "phuong.nguyen@lingomaster.vn",
  initial: "P",
  role: "Giảng viên",
};

export const teacherStats = [
  { emoji: "🏫", value: "6", label: "Lớp đang dạy" },
  { emoji: "👩‍🎓", value: "184", label: "Sinh viên" },
  { emoji: "📝", value: "23", label: "Đề thi đã tạo" },
  { emoji: "⏳", value: "12", label: "Bài chờ chấm" },
];

export type TeacherClass = {
  id: string;
  name: string;
  emoji: string;
  code: string;
  term: string;
  students: number;
  assignments: number;
  progress: number;
  status: "Đang mở" | "Đã đóng";
};

export const teacherClasses: TeacherClass[] = [
  { id: "aptis-b2-01", name: "Aptis B2 - Lớp 01", emoji: "🎯", code: "APT-B201", term: "Học kỳ 1 · 2026", students: 38, assignments: 12, progress: 62, status: "Đang mở" },
  { id: "toeic-600", name: "TOEIC 600+ Buổi tối", emoji: "🚀", code: "TOE-600E", term: "Học kỳ 1 · 2026", students: 42, assignments: 9, progress: 45, status: "Đang mở" },
  { id: "ielts-writing", name: "IELTS Writing Task 2", emoji: "✍️", code: "IEL-WT2A", term: "Học kỳ 1 · 2026", students: 26, assignments: 15, progress: 78, status: "Đang mở" },
  { id: "vstep-b1", name: "VSTEP B1 cấp tốc", emoji: "⚡", code: "VST-B1FA", term: "Hè · 2025", students: 31, assignments: 8, progress: 100, status: "Đã đóng" },
];

export const classRoster = [
  { initial: "M", name: "Minh Anh", email: "minhanh@student.vn", joined: "12/08", progress: 86, score: "7.5" },
  { initial: "T", name: "Thu Hà", email: "thuha@student.vn", joined: "12/08", progress: 74, score: "6.5" },
  { initial: "K", name: "Khánh Duy", email: "khanhduy@student.vn", joined: "13/08", progress: 58, score: "6.0" },
  { initial: "L", name: "Lan Phương", email: "lanphuong@student.vn", joined: "15/08", progress: 41, score: "5.5" },
  { initial: "H", name: "Hoàng Nam", email: "hoangnam@student.vn", joined: "16/08", progress: 22, score: "—" },
];

export type ExamPart = {
  id: string;
  name: string;
  skill: "Nghe" | "Nói" | "Đọc" | "Viết" | "Ngữ pháp";
  questions: number;
  minutes: number;
};

export type TeacherExam = {
  id: string;
  name: string;
  category: "Aptis" | "TOEIC" | "IELTS" | "VSTEP";
  status: "Bản nháp" | "Đã phát hành";
  updated: string;
  attempts: number;
  parts: ExamPart[];
};

export const teacherExams: TeacherExam[] = [
  {
    id: "aptis-full-01",
    name: "Aptis ESOL - Đề tổng hợp 01",
    category: "Aptis",
    status: "Đã phát hành",
    updated: "2 ngày trước",
    attempts: 128,
    parts: [
      { id: "p1", name: "Grammar & Vocabulary", skill: "Ngữ pháp", questions: 50, minutes: 25 },
      { id: "p2", name: "Reading Part 1-4", skill: "Đọc", questions: 25, minutes: 35 },
      { id: "p3", name: "Listening Part 1-4", skill: "Nghe", questions: 25, minutes: 40 },
      { id: "p4", name: "Writing Part 1-4", skill: "Viết", questions: 4, minutes: 50 },
    ],
  },
  {
    id: "toeic-mini-04",
    name: "TOEIC Mini Test 04",
    category: "TOEIC",
    status: "Bản nháp",
    updated: "Hôm nay",
    attempts: 0,
    parts: [
      { id: "p1", name: "Part 1 - Photographs", skill: "Nghe", questions: 6, minutes: 5 },
      { id: "p2", name: "Part 5 - Incomplete Sentences", skill: "Ngữ pháp", questions: 30, minutes: 15 },
      { id: "p3", name: "Part 7 - Reading Passages", skill: "Đọc", questions: 20, minutes: 25 },
    ],
  },
  {
    id: "ielts-w-task2",
    name: "IELTS Writing Task 2 - Bộ 12 đề",
    category: "IELTS",
    status: "Đã phát hành",
    updated: "1 tuần trước",
    attempts: 64,
    parts: [{ id: "p1", name: "Essay 250 từ", skill: "Viết", questions: 12, minutes: 40 }],
  },
  {
    id: "vstep-listening",
    name: "VSTEP B1 - Listening Pack",
    category: "VSTEP",
    status: "Bản nháp",
    updated: "3 ngày trước",
    attempts: 0,
    parts: [
      { id: "p1", name: "Part 1 - Short conversations", skill: "Nghe", questions: 8, minutes: 10 },
      { id: "p2", name: "Part 2 - Talks", skill: "Nghe", questions: 12, minutes: 15 },
    ],
  },
];

export type TeacherLesson = {
  id: string;
  name: string;
  skill: "Nghe" | "Nói" | "Đọc" | "Viết" | "Từ vựng" | "Ngữ pháp";
  emoji: string;
  items: number;
  classes: number;
  status: "Đang dạy" | "Bản nháp";
};

export const teacherLessons: TeacherLesson[] = [
  { id: "l1", name: "Nghe hiểu hội thoại ngắn", skill: "Nghe", emoji: "🎧", items: 18, classes: 3, status: "Đang dạy" },
  { id: "l2", name: "Mô tả tranh & so sánh", skill: "Nói", emoji: "🎙️", items: 12, classes: 2, status: "Đang dạy" },
  { id: "l3", name: "Đọc hiểu đoạn dài", skill: "Đọc", emoji: "📖", items: 20, classes: 4, status: "Đang dạy" },
  { id: "l4", name: "Viết email trang trọng", skill: "Viết", emoji: "✉️", items: 10, classes: 2, status: "Bản nháp" },
  { id: "l5", name: "600 từ vựng cốt lõi", skill: "Từ vựng", emoji: "🔤", items: 600, classes: 5, status: "Đang dạy" },
  { id: "l6", name: "12 thì trong tiếng Anh", skill: "Ngữ pháp", emoji: "🧩", items: 12, classes: 6, status: "Đang dạy" },
];

export type TeacherFolder = {
  id: string;
  name: string;
  short: string;
  description: string;
  items: number;
  shared: number;
};

export const teacherFolders: TeacherFolder[] = [
  { id: "f1", name: "Đề thi Aptis 2026", short: "AP", description: "Đề tổng hợp và đề theo từng phần.", items: 14, shared: 3 },
  { id: "f2", name: "Bộ từ vựng theo lớp", short: "TV", description: "Từ vựng giao cho từng lớp theo tuần.", items: 22, shared: 6 },
  { id: "f3", name: "Ngữ pháp nền tảng", short: "NP", description: "Bài giảng và bài tập ngữ pháp.", items: 18, shared: 4 },
  { id: "f4", name: "Tài liệu quét OCR", short: "SC", description: "Ảnh đề thi và trang sách đã quét.", items: 37, shared: 1 },
];

export const teacherTrash = {
  classes: [
    { id: "tc1", name: "Aptis B1 - Lớp 03", emoji: "🏫", description: "Đã xóa 2 ngày trước · 24 sinh viên" },
  ],
  exams: [
    { id: "te1", name: "TOEIC Mini Test 02", emoji: "📝", description: "Đã xóa hôm qua · 3 phần thi" },
    { id: "te2", name: "Aptis Speaking thử nghiệm", emoji: "🎙️", description: "Đã xóa 4 ngày trước · bản nháp" },
  ],
  folders: [{ id: "tf1", name: "Tài liệu học kỳ cũ", emoji: "🗂️", description: "Đã xóa 6 ngày trước · 12 mục" }],
  lessons: [{ id: "tl1", name: "Phát âm nguyên âm đôi", emoji: "🔊", description: "Đã xóa hôm nay · 8 bài" }],
};

export const teacherActivity = [
  { id: "a1", text: "Minh Anh đã hoàn thành Aptis Đề tổng hợp 01 — 7.5", time: "10 phút trước" },
  { id: "a2", text: "5 sinh viên mới tham gia lớp TOEIC 600+ bằng mã TOE-600E", time: "1 giờ trước" },
  { id: "a3", text: "12 bài Writing đang chờ bạn chấm ở lớp IELTS Writing Task 2", time: "3 giờ trước" },
  { id: "a4", text: "Bạn đã quét 6 trang đề thi và tạo 48 thẻ từ vựng", time: "Hôm qua" },
];
