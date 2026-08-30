export const currentUser = {
  name: "Chan Wo Sin",
  email: "chanwosin@lingomaster.vn",
  initial: "C",
};

export const homeStats = [
  { emoji: "🔥", value: "12", label: "Ngày streak liên tục" },
  { emoji: "🧠", value: "428", label: "Thuật ngữ đã thuộc" },
  { emoji: "⏱️", value: "3h 20m", label: "Thời gian học tuần này" },
];

export type Roadmap = {
  id: string;
  name: string;
  emoji: string;
  level: "Cơ bản" | "Trung bình" | "Nâng cao";
  days: number;
  done: number;
  total: number;
  description: string;
  author: string;
};

export const roadmaps: Roadmap[] = [
  {
    id: "aptis-b2",
    name: "Aptis B2 trong 30 ngày",
    emoji: "🎯",
    level: "Nâng cao",
    days: 30,
    done: 6,
    total: 10,
    description: "Lộ trình tăng tốc từ vựng học thuật, tập trung Writing và Speaking.",
    author: "Chan Wo Sin",
  },
  {
    id: "business",
    name: "Từ vựng Business Email",
    emoji: "💼",
    level: "Trung bình",
    days: 21,
    done: 3,
    total: 8,
    description: "Cụm từ trang trọng dùng trong email, họp và báo cáo công việc.",
    author: "Minh Anh",
  },
  {
    id: "toeic-core",
    name: "600 từ TOEIC cốt lõi",
    emoji: "📘",
    level: "Cơ bản",
    days: 45,
    done: 9,
    total: 12,
    description: "Bộ từ nền tảng theo 12 chủ điểm thường gặp trong đề TOEIC.",
    author: "Chan Wo Sin",
  },
];

export type CardSet = {
  id: string;
  name: string;
  emoji: string;
  terms: number;
  updated: string;
  folder?: string;
  description: string;
};

export const cardSets: CardSet[] = [
  { id: "s1", name: "Academic Verbs", emoji: "📗", terms: 64, updated: "2 giờ trước", folder: "Aptis Core", description: "Động từ học thuật thường gặp trong Writing Part 4." },
  { id: "s2", name: "Daily Conversation", emoji: "💬", terms: 48, updated: "hôm qua", folder: "Speaking Kit", description: "Cụm giao tiếp tự nhiên cho Speaking Part 1-2." },
  { id: "s3", name: "Environment & Nature", emoji: "🌿", terms: 72, updated: "3 ngày trước", folder: "Aptis Core", description: "Chủ điểm môi trường, khí hậu và phát triển bền vững." },
  { id: "s4", name: "Technology Trends", emoji: "🤖", terms: 55, updated: "5 ngày trước", description: "Từ vựng công nghệ, AI và chuyển đổi số." },
  { id: "s5", name: "Health & Lifestyle", emoji: "🩺", terms: 41, updated: "1 tuần trước", folder: "Speaking Kit", description: "Sức khỏe, thói quen sinh hoạt và thể thao." },
  { id: "s6", name: "Idioms for Speaking", emoji: "✨", terms: 33, updated: "1 tuần trước", description: "Thành ngữ ghi điểm khi nói tự nhiên." },
];

export const reviewCard = { term: "resilient", meaning: "kiên cường, có khả năng phục hồi", due: 18, total: 24 };

export const classUpdates = [
  { initial: "M", name: "Minh Anh", text: "đã thêm bộ thẻ mới vào nhóm Aptis Warriors", time: "12 phút trước" },
  { initial: "T", name: "Thu Hà", text: "hoàn thành mốc #4 của lộ trình Aptis B2", time: "1 giờ trước" },
  { initial: "K", name: "Khánh Duy", text: "đã tham gia nhóm học của bạn", time: "hôm qua" },
];

export const leaderboard = [
  { rank: 1, initial: "M", name: "Minh Anh", streak: 34, score: 4820 },
  { rank: 2, initial: "C", name: "Chan Wo Sin", streak: 12, score: 4310, me: true },
  { rank: 3, initial: "T", name: "Thu Hà", streak: 19, score: 3980 },
  { rank: 4, initial: "K", name: "Khánh Duy", streak: 7, score: 3120 },
  { rank: 5, initial: "L", name: "Lan Phương", streak: 5, score: 2870 },
];

export type StudyGroup = {
  id: string;
  name: string;
  emoji: string;
  code: string;
  description: string;
  members: number;
  maxMembers: number;
  sets: number;
  owner: string;
};

export const studyGroups: StudyGroup[] = [
  { id: "aptis-warriors", name: "Aptis Warriors", emoji: "⚔️", code: "APT-8F2K", description: "Nhóm luyện Aptis ESOL B2, ôn từ vựng mỗi tối 21h.", members: 18, maxMembers: 30, sets: 12, owner: "Chan Wo Sin" },
  { id: "toeic-750", name: "TOEIC 750+ Club", emoji: "🚀", code: "TOE-2M9P", description: "Cày 600 từ cốt lõi và thi thử mini test hằng tuần.", members: 24, maxMembers: 40, sets: 9, owner: "Minh Anh" },
  { id: "ielts-writing", name: "IELTS Writing Lab", emoji: "✍️", code: "IEL-7Q1D", description: "Chia sẻ từ vựng theo topic và chấm chéo bài viết.", members: 11, maxMembers: 25, sets: 7, owner: "Thu Hà" },
];

export const groupMembers = [
  { initial: "C", name: "Chan Wo Sin", email: "chanwosin@lingomaster.vn", role: "Trưởng nhóm" },
  { initial: "M", name: "Minh Anh", email: "minhanh@gmail.com", role: "Thành viên" },
  { initial: "T", name: "Thu Hà", email: "thuha@gmail.com", role: "Thành viên" },
  { initial: "K", name: "Khánh Duy", email: "khanhduy@gmail.com", role: "Thành viên" },
  { initial: "L", name: "Lan Phương", email: "lanphuong@gmail.com", role: "Thành viên" },
  { initial: "H", name: "Hoàng Nam", email: "hoangnam@gmail.com", role: "Thành viên" },
];

export type Folder = {
  id: string;
  name: string;
  short: string;
  description: string;
  sets: number;
  terms: number;
};

export const folders: Folder[] = [
  { id: "aptis-core", name: "Aptis Core", short: "AC", description: "Toàn bộ từ vựng lõi cho 4 kỹ năng Aptis.", sets: 8, terms: 512 },
  { id: "speaking-kit", name: "Speaking Kit", short: "SK", description: "Cụm từ, idiom và mẫu câu dùng khi nói.", sets: 5, terms: 268 },
  { id: "exam-2026", name: "Đề thi 2026", short: "Đ26", description: "Từ vựng trích từ các đề thi mới nhất.", sets: 6, terms: 341 },
  { id: "daily-words", name: "Daily 20 Words", short: "D20", description: "Mỗi ngày 20 từ, ôn theo spaced repetition.", sets: 12, terms: 640 },
];

export const vocabulary = [
  { word: "resilient", ipa: "/rɪˈzɪliənt/", cefr: "B2", pos: "ADJECTIVE", vi: "kiên cường, dễ phục hồi", example: "Small businesses proved remarkably resilient during the crisis." },
  { word: "mitigate", ipa: "/ˈmɪtɪɡeɪt/", cefr: "C1", pos: "VERB", vi: "giảm nhẹ, xoa dịu", example: "New policies aim to mitigate the impact of rising prices." },
  { word: "in the long run", ipa: "", cefr: "B1", pos: "IDIOM", vi: "về lâu dài", example: "Learning ten words a day pays off in the long run." },
  { word: "commute", ipa: "/kəˈmjuːt/", cefr: "B1", pos: "NOUN", vi: "chuyến đi làm hằng ngày", example: "My daily commute takes about forty minutes." },
  { word: "significantly", ipa: "/sɪɡˈnɪfɪkəntli/", cefr: "B2", pos: "ADVERB", vi: "một cách đáng kể", example: "Air quality has improved significantly since 2020." },
  { word: "carbon footprint", ipa: "", cefr: "B2", pos: "PHRASE", vi: "dấu chân carbon", example: "Cycling to work lowers your carbon footprint." },
  { word: "ubiquitous", ipa: "/juːˈbɪkwɪtəs/", cefr: "C2", pos: "ADJECTIVE", vi: "phổ biến khắp nơi", example: "Smartphones have become ubiquitous in classrooms." },
  { word: "cut down on", ipa: "", cefr: "A2", pos: "PHRASE", vi: "cắt giảm", example: "I am trying to cut down on sugary drinks." },
  { word: "advocate", ipa: "/ˈædvəkeɪt/", cefr: "C1", pos: "VERB", vi: "ủng hộ, bênh vực", example: "Many teachers advocate learning vocabulary in context." },
];

export const trashItems = {
  folders: [
    { id: "t1", name: "Từ vựng cũ 2024", emoji: "🗂️", description: "Đã xóa 2 ngày trước · 4 bộ thẻ · 180 thuật ngữ" },
    { id: "t2", name: "Thử nghiệm OCR", emoji: "📁", description: "Đã xóa 5 ngày trước · 1 bộ thẻ · 32 thuật ngữ" },
  ],
  sets: [{ id: "t3", name: "Travel Basics", emoji: "✈️", description: "Đã xóa hôm qua · 26 thuật ngữ" }],
  words: [
    { id: "t4", name: "procrastinate", emoji: "🔤", description: "Đã xóa hôm nay · thuộc bộ Daily Conversation" },
    { id: "t5", name: "meticulous", emoji: "🔤", description: "Đã xóa 3 ngày trước · thuộc bộ Academic Verbs" },
  ],
};

/* ---------- Luyện tập / Đề thi / Thi thử ---------- */

export type PracticeSkill = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  sets: number;
  minutes: number;
  progress: number;
};

export const practiceSkills: PracticeSkill[] = [
  {
    id: "listening",
    name: "Listening",
    emoji: "🎧",
    description: "Nghe hội thoại, ghi chú từ khóa và trả lời câu hỏi.",
    sets: 24,
    minutes: 12,
    progress: 62,
  },
  {
    id: "speaking",
    name: "Speaking",
    emoji: "🎙️",
    description: "Luyện phát âm và trả lời theo chủ đề, có nhận xét AI.",
    sets: 18,
    minutes: 10,
    progress: 41,
  },
  {
    id: "reading",
    name: "Reading",
    emoji: "📖",
    description: "Đọc hiểu đoạn văn, ghép câu và điền từ vào chỗ trống.",
    sets: 32,
    minutes: 15,
    progress: 78,
  },
  {
    id: "writing",
    name: "Writing",
    emoji: "✍️",
    description: "Viết email, mô tả biểu đồ và luyện câu theo mẫu.",
    sets: 16,
    minutes: 20,
    progress: 35,
  },
];

export const practiceVocabModes = [
  { id: "flashcard", emoji: "🗂️", name: "Thẻ ghi nhớ", description: "Lật thẻ để ôn nhanh 20 từ." },
  { id: "quiz", emoji: "✅", name: "Trắc nghiệm", description: "Chọn nghĩa đúng trong 4 đáp án." },
  { id: "typing", emoji: "⌨️", name: "Điền từ", description: "Nghe và viết lại chính tả từ vựng." },
  { id: "match", emoji: "🧩", name: "Ghép cặp", description: "Nối từ với nghĩa trong thời gian giới hạn." },
];

export type ExamSet = {
  id: string;
  name: string;
  exam: "Aptis" | "VSTEP" | "IELTS" | "TOEIC";
  level: string;
  minutes: number;
  questions: number;
  parts: number;
  attempts: number;
  isNew?: boolean;
};

export const examSets: ExamSet[] = [
  { id: "aptis-01", name: "Aptis General Test 01", exam: "Aptis", level: "B1 - B2", minutes: 120, questions: 90, parts: 4, attempts: 1284, isNew: true },
  { id: "aptis-02", name: "Aptis General Test 02", exam: "Aptis", level: "B2", minutes: 120, questions: 90, parts: 4, attempts: 964 },
  { id: "vstep-01", name: "VSTEP B2 Đề số 1", exam: "VSTEP", level: "B2", minutes: 150, questions: 100, parts: 4, attempts: 742 },
  { id: "ielts-rd-03", name: "IELTS Reading Practice 03", exam: "IELTS", level: "6.0 - 7.0", minutes: 60, questions: 40, parts: 3, attempts: 1530 },
  { id: "toeic-lr-05", name: "TOEIC L&R Test 05", exam: "TOEIC", level: "600+", minutes: 120, questions: 200, parts: 7, attempts: 2108 },
  { id: "aptis-vocab", name: "Aptis Grammar & Vocabulary", exam: "Aptis", level: "A2 - B2", minutes: 25, questions: 50, parts: 2, attempts: 655, isNew: true },
];

export const examFilters = ["Tất cả", "Aptis", "VSTEP", "IELTS", "TOEIC"];

export type MockResult = {
  id: string;
  name: string;
  date: string;
  score: string;
  band: string;
  correct: number;
  total: number;
};

export const mockResults: MockResult[] = [
  { id: "r1", name: "Aptis General Test 01", date: "22/08/2026", score: "168/200", band: "B2", correct: 76, total: 90 },
  { id: "r2", name: "VSTEP B2 Đề số 1", date: "15/08/2026", score: "7.5/10", band: "B2", correct: 78, total: 100 },
  { id: "r3", name: "TOEIC L&R Test 05", date: "06/08/2026", score: "720/990", band: "B1", correct: 148, total: 200 },
];

export const mockSkillScores = [
  { skill: "Listening", value: 82 },
  { skill: "Reading", value: 88 },
  { skill: "Writing", value: 64 },
  { skill: "Speaking", value: 58 },
];

/* ---------- Bài học (Lessons) & Luyện đề (Exam drills) ---------- */

export type SkillKey = "listening" | "speaking" | "reading" | "writing";

export const skillTabs: { id: SkillKey; name: string; emoji: string; tag: string }[] = [
  { id: "listening", name: "Nghe", emoji: "🎧", tag: "Nghe" },
  { id: "speaking", name: "Nói", emoji: "🎙️", tag: "Nói" },
  { id: "reading", name: "Đọc", emoji: "📖", tag: "Đọc" },
  { id: "writing", name: "Viết", emoji: "✍️", tag: "Viết" },
];

export type LessonGroup = {
  id: string;
  title: string;
  summary: string;
  tips: string[];
  cta: string;
  level: "Cơ bản" | "Trung bình" | "Nâng cao";
};

export const lessonGroups: Record<SkillKey, LessonGroup[]> = {
  listening: [
    {
      id: "l-1-13",
      title: "Câu 1-13: Nhóm dễ ăn điểm nhất",
      summary:
        "Thường hỏi thông tin ngắn như đồ vật, thời gian, địa điểm, hoạt động. Luyện đủ dạng sẽ nhận ra đáp án rất nhanh.",
      tips: [
        "Đọc câu hỏi trước khi nghe để bắt keyword.",
        "Chú ý từ đồng nghĩa vì audio thường không đọc y nguyên đáp án.",
        "Nếu lỡ một câu, bỏ qua ngay để giữ nhịp cho câu tiếp theo.",
      ],
      cta: "Học câu 1-13",
      level: "Cơ bản",
    },
    {
      id: "l-14-17",
      title: "Câu 14-17: Hội thoại dài",
      summary:
        "Hai người trao đổi quan điểm, cần phân biệt ai nói gì và thái độ đồng ý hay phản đối.",
      tips: [
        "Ghi nhanh ký hiệu cho từng người nói.",
        "Bắt các từ chuyển ý: however, actually, but.",
        "Nghe hết câu mới chọn, tránh chốt sớm.",
      ],
      cta: "Học câu 14-17",
      level: "Trung bình",
    },
    {
      id: "l-18-25",
      title: "Câu 18-25: Ghép thông tin với người nói",
      summary: "Dạng khó nhất, nhiều người nói về cùng một chủ đề và bạn phải ghép ý đúng.",
      tips: [
        "Đọc trước toàn bộ các lựa chọn.",
        "Loại dần đáp án sau mỗi đoạn nghe.",
        "Đừng để một đoạn khó làm mất các đoạn sau.",
      ],
      cta: "Học câu 18-25",
      level: "Nâng cao",
    },
  ],
  speaking: [
    {
      id: "s-part1",
      title: "Part 1: Giới thiệu bản thân",
      summary: "Ba câu hỏi ngắn về bản thân, mỗi câu trả lời khoảng 30 giây.",
      tips: [
        "Trả lời theo công thức ý chính + lý do + ví dụ.",
        "Dùng 1-2 cụm từ tự nhiên để tạo điểm nhấn.",
        "Nói đủ thời gian, tránh trả lời một câu rồi im.",
      ],
      cta: "Học Part 1",
    },
    {
      id: "s-part2",
      title: "Part 2: Miêu tả tranh",
      summary: "Miêu tả một bức ảnh rồi liên hệ trải nghiệm cá nhân trong 45 giây.",
      tips: [
        "Miêu tả từ tổng thể đến chi tiết.",
        "Dùng thì hiện tại tiếp diễn khi tả hành động.",
        "Dành 15 giây cuối để liên hệ bản thân.",
      ],
      cta: "Học Part 2",
    },
    {
      id: "s-part4",
      title: "Part 4: Trình bày quan điểm",
      summary: "Phần chấm điểm cao nhất, cần lập luận có cấu trúc trong 2 phút.",
      tips: [
        "Mở bài một câu nêu quan điểm rõ ràng.",
        "Hai lý do kèm ví dụ cụ thể.",
        "Kết lại bằng một câu tóm ý.",
      ],
      cta: "Học Part 4",
    },
  ],
  reading: [
    {
      id: "r-part1",
      title: "Part 1-2: Điền từ & sắp xếp câu",
      summary: "Kiểm tra từ vựng cơ bản và logic mạch hội thoại.",
      tips: [
        "Xác định loại từ cần điền trước khi chọn.",
        "Tìm câu mở đầu có ngữ cảnh đầy đủ nhất.",
        "Dùng đại từ và từ nối để nối chuỗi câu.",
      ],
      cta: "Học Part 1-2",
    },
    {
      id: "r-part3",
      title: "Part 3: Ghép ý với người viết",
      summary: "Bốn đoạn ngắn cùng chủ đề, dễ nhầm giữa các lựa chọn.",
      tips: [
        "Gạch chân từ khóa trong từng lựa chọn.",
        "So sánh chéo các đoạn trước khi chốt.",
        "Cẩn thận các bẫy paraphrase.",
      ],
      cta: "Học Part 3",
    },
    {
      id: "r-part4",
      title: "Part 4: Đọc hiểu bài dài",
      summary: "Bài đọc dài kèm tiêu đề đoạn, cần quản lý thời gian tốt.",
      tips: [
        "Đọc câu đầu mỗi đoạn để nắm ý chính.",
        "Trả lời câu dễ trước, quay lại câu khó.",
        "Không dịch từng từ, đọc theo cụm.",
      ],
      cta: "Học Part 4",
    },
  ],
  writing: [
    {
      id: "w-part1",
      title: "Part 1: Trả lời câu hỏi ngắn",
      summary: "Viết câu trả lời 1-5 từ cho form đăng ký, chú ý chính tả.",
      tips: [
        "Trả lời đúng dạng thông tin được hỏi.",
        "Không viết dài quá yêu cầu.",
        "Kiểm tra lại chính tả và số.",
      ],
      cta: "Học Part 1",
    },
    {
      id: "w-part3",
      title: "Part 3: Chat với 3 câu hỏi",
      summary: "Trả lời tin nhắn nhóm, mỗi câu 30-40 từ, giọng văn thân mật.",
      tips: [
        "Trả lời trực tiếp câu hỏi rồi mở rộng một ý.",
        "Dùng văn phong thân mật tự nhiên.",
        "Giữ đủ số từ cho từng câu.",
      ],
      cta: "Học Part 3",
    },
    {
      id: "w-part4",
      title: "Part 4: Email trang trọng",
      summary: "Viết email thân mật và email trang trọng, quyết định lớn tới điểm Writing.",
      tips: [
        "Bám sát ba gạch đầu dòng đề bài cho.",
        "Email trang trọng cần mở và kết đúng mẫu.",
        "Dành 3 phút cuối để soát lỗi ngữ pháp.",
      ],
      cta: "Học Part 4",
    },
  ],
};

export type StudySet = {
  id: string;
  name: string;
  emoji: string;
  items: number;
  level: string;
  description: string;
};

export const vocabStudySets: StudySet[] = [
  { id: "v1", name: "600 từ Aptis thông dụng", emoji: "📚", items: 600, level: "B1 - B2", description: "Bộ từ xuất hiện nhiều nhất trong đề Aptis." },
  { id: "v2", name: "Từ vựng theo 12 chủ điểm", emoji: "🗂️", items: 420, level: "B1 - B2", description: "Gia đình, du lịch, công việc, môi trường..." },
  { id: "v3", name: "100 phrasal verbs cần nhớ", emoji: "🔗", items: 100, level: "B2", description: "Cụm động từ hay gặp trong Speaking và Writing." },
  { id: "v4", name: "Idioms ghi điểm Speaking", emoji: "✨", items: 80, level: "B2 - C1", description: "Thành ngữ tự nhiên giúp nói ấn tượng hơn." },
  { id: "v5", name: "Từ nối cho bài viết", emoji: "🧵", items: 60, level: "B1 - B2", description: "Linking words dùng cho email và bài luận." },
  { id: "v6", name: "Academic word list cơ bản", emoji: "🎓", items: 240, level: "B2 - C1", description: "Từ học thuật cho Reading Part 4." },
];

export const grammarStudySets: StudySet[] = [
  { id: "g1", name: "12 thì trong tiếng Anh", emoji: "⏳", items: 12, level: "A2 - B1", description: "Công thức, dấu hiệu nhận biết và bài tập từng thì." },
  { id: "g2", name: "20 cấu trúc cơ bản", emoji: "🧱", items: 20, level: "A2 - B1", description: "Các cấu trúc câu nền tảng dùng hằng ngày." },
  { id: "g3", name: "Câu điều kiện & giả định", emoji: "🔀", items: 15, level: "B1 - B2", description: "If loại 0-3 và câu điều kiện hỗn hợp." },
  { id: "g4", name: "Câu bị động", emoji: "🔄", items: 10, level: "B1", description: "Chuyển đổi bị động ở mọi thì thường gặp." },
  { id: "g5", name: "Mệnh đề quan hệ", emoji: "🔗", items: 14, level: "B1 - B2", description: "Who, which, that và mệnh đề rút gọn." },
  { id: "g6", name: "Giới từ thường gặp", emoji: "📍", items: 30, level: "A2 - B1", description: "Giới từ chỉ thời gian, nơi chốn và cụm cố định." },
];

export type ExamDrill = {
  id: string;
  name: string;
  minutes: number;
  questions: number;
  description: string;
};

export const examDrills: Record<SkillKey, ExamDrill[]> = {
  listening: [
    { id: "el1", name: "Đề 1 Listening", minutes: 60, questions: 17, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "el2", name: "Đề 2 Listening", minutes: 60, questions: 25, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "el3", name: "Đề 3 Listening", minutes: 45, questions: 20, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "el4", name: "Đề 4 Listening", minutes: 60, questions: 25, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
  ],
  speaking: [
    { id: "es1", name: "Đề 1 Speaking", minutes: 12, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "es2", name: "Đề 2 Speaking", minutes: 12, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "es3", name: "Đề 3 Speaking", minutes: 15, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
  ],
  reading: [
    { id: "er1", name: "Đề 1 Reading", minutes: 35, questions: 25, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "er2", name: "Đề 2 Reading", minutes: 35, questions: 25, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "er3", name: "Đề 3 Reading", minutes: 40, questions: 30, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "er4", name: "Đề 4 Reading", minutes: 35, questions: 25, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
  ],
  writing: [
    { id: "ew1", name: "Đề 1 Writing", minutes: 50, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "ew2", name: "Đề 2 Writing", minutes: 50, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
    { id: "ew3", name: "Đề 3 Writing", minutes: 45, questions: 4, description: "Bộ đề luyện thi Aptis được tạo từ trang quản trị." },
  ],
};

export type GrammarTopic = {
  id: string;
  name: string;
  formula: string;
  usage: string[];
  examples: { en: string; vi: string }[];
  notes: string;
  quiz: { question: string; options: string[]; answer: number; explain: string };
};

export type GrammarCourse = {
  overview: string;
  topics: GrammarTopic[];
};

const tenseTopics: GrammarTopic[] = [
  {
    id: "t1",
    name: "Hiện tại đơn",
    formula: "S + V(s/es) / S + do/does not + V",
    usage: ["Diễn tả thói quen, sự thật hiển nhiên.", "Dùng với always, usually, every day."],
    examples: [
      { en: "She works at a bank.", vi: "Cô ấy làm việc ở một ngân hàng." },
      { en: "Water boils at 100°C.", vi: "Nước sôi ở 100°C." },
    ],
    notes: "Chủ ngữ số ít (he/she/it) phải thêm s hoặc es vào động từ.",
    quiz: {
      question: "Chọn đáp án đúng: My brother ___ to school by bus every day.",
      options: ["go", "goes", "going", "is go"],
      answer: 1,
      explain: "Chủ ngữ số ít 'My brother' nên động từ thêm -es: goes.",
    },
  },
  {
    id: "t2",
    name: "Hiện tại tiếp diễn",
    formula: "S + am/is/are + V-ing",
    usage: ["Hành động đang xảy ra lúc nói.", "Dùng với now, at the moment, look!, listen!"],
    examples: [
      { en: "They are studying for the Aptis test.", vi: "Họ đang học cho kỳ thi Aptis." },
      { en: "Look! It is raining.", vi: "Nhìn kìa! Trời đang mưa." },
    ],
    notes: "Không dùng với động từ chỉ trạng thái: know, like, want, believe.",
    quiz: {
      question: "Chọn đáp án đúng: Listen! Someone ___ the piano.",
      options: ["plays", "played", "is playing", "play"],
      answer: 2,
      explain: "'Listen!' báo hiệu hành động đang diễn ra nên dùng hiện tại tiếp diễn.",
    },
  },
  {
    id: "t3",
    name: "Hiện tại hoàn thành",
    formula: "S + have/has + V3",
    usage: ["Hành động bắt đầu quá khứ, còn liên quan hiện tại.", "Dùng với already, yet, since, for, ever."],
    examples: [
      { en: "I have lived here for five years.", vi: "Tôi đã sống ở đây 5 năm." },
      { en: "She has just finished her essay.", vi: "Cô ấy vừa hoàn thành bài luận." },
    ],
    notes: "since + mốc thời gian, for + khoảng thời gian.",
    quiz: {
      question: "Chọn đáp án đúng: We ___ each other since 2019.",
      options: ["know", "knew", "have known", "are knowing"],
      answer: 2,
      explain: "'since 2019' đi với hiện tại hoàn thành: have known.",
    },
  },
  {
    id: "t4",
    name: "Quá khứ đơn",
    formula: "S + V2 / S + did not + V",
    usage: ["Hành động đã kết thúc trong quá khứ.", "Dùng với yesterday, last week, in 2020, ago."],
    examples: [
      { en: "He passed the exam last month.", vi: "Anh ấy đã đậu kỳ thi tháng trước." },
      { en: "I didn't watch that film.", vi: "Tôi đã không xem bộ phim đó." },
    ],
    notes: "Sau did luôn dùng động từ nguyên mẫu không to.",
    quiz: {
      question: "Chọn đáp án đúng: She ___ to Da Nang two days ago.",
      options: ["flies", "flew", "has flown", "is flying"],
      answer: 1,
      explain: "'two days ago' là dấu hiệu của quá khứ đơn.",
    },
  },
  {
    id: "t5",
    name: "Tương lai đơn",
    formula: "S + will + V",
    usage: ["Dự đoán, quyết định tức thời, lời hứa.", "Dùng với tomorrow, next week, soon."],
    examples: [
      { en: "I will call you tonight.", vi: "Tôi sẽ gọi cho bạn tối nay." },
      { en: "It will be sunny tomorrow.", vi: "Mai trời sẽ nắng." },
    ],
    notes: "Kế hoạch đã định trước thì dùng be going to thay vì will.",
    quiz: {
      question: "Chọn đáp án đúng: Don't worry, I ___ help you.",
      options: ["will", "am", "did", "would have"],
      answer: 0,
      explain: "Quyết định tức thời/lời hứa dùng will.",
    },
  },
];

const structureTopics: GrammarTopic[] = [
  {
    id: "s1",
    name: "It takes + time + to V",
    formula: "It takes (sb) + thời gian + to V",
    usage: ["Diễn tả mất bao lâu để làm gì."],
    examples: [
      { en: "It takes me 30 minutes to get to work.", vi: "Tôi mất 30 phút để đi làm." },
    ],
    notes: "Quá khứ dùng It took.",
    quiz: {
      question: "It ___ her an hour to finish the report.",
      options: ["takes", "took", "taking", "take"],
      answer: 1,
      explain: "Câu ở quá khứ nên dùng took.",
    },
  },
  {
    id: "s2",
    name: "Too ... to / enough to",
    formula: "too + adj + to V | adj + enough + to V",
    usage: ["Diễn tả quá/đủ để làm gì."],
    examples: [
      { en: "He is too tired to continue.", vi: "Anh ấy quá mệt để tiếp tục." },
      { en: "She is old enough to drive.", vi: "Cô ấy đủ tuổi để lái xe." },
    ],
    notes: "enough đứng sau tính từ nhưng trước danh từ.",
    quiz: {
      question: "The box is ___ heavy for me to carry.",
      options: ["enough", "too", "so", "such"],
      answer: 1,
      explain: "too + adj + for sb + to V.",
    },
  },
  {
    id: "s3",
    name: "Used to V",
    formula: "S + used to + V",
    usage: ["Thói quen trong quá khứ nay không còn."],
    examples: [{ en: "I used to play football.", vi: "Tôi từng chơi bóng đá." }],
    notes: "Phân biệt với be used to V-ing (đã quen với việc gì).",
    quiz: {
      question: "She ___ live in London, but now she lives in Hanoi.",
      options: ["use to", "used to", "is used to", "uses to"],
      answer: 1,
      explain: "used to + V diễn tả thói quen quá khứ.",
    },
  },
];

const conditionalTopics: GrammarTopic[] = [
  {
    id: "c1",
    name: "Câu điều kiện loại 1",
    formula: "If + S + V(s/es), S + will + V",
    usage: ["Điều kiện có thể xảy ra ở hiện tại/tương lai."],
    examples: [{ en: "If it rains, we will stay home.", vi: "Nếu mưa, chúng tôi sẽ ở nhà." }],
    notes: "Mệnh đề If không dùng will.",
    quiz: {
      question: "If you study hard, you ___ the exam.",
      options: ["pass", "will pass", "passed", "would pass"],
      answer: 1,
      explain: "Loại 1: mệnh đề chính dùng will + V.",
    },
  },
  {
    id: "c2",
    name: "Câu điều kiện loại 2",
    formula: "If + S + V2/were, S + would + V",
    usage: ["Điều kiện không thật ở hiện tại."],
    examples: [{ en: "If I were you, I would apply now.", vi: "Nếu tôi là bạn, tôi sẽ nộp đơn ngay." }],
    notes: "Luôn dùng were cho mọi chủ ngữ trong loại 2.",
    quiz: {
      question: "If I ___ rich, I would travel the world.",
      options: ["am", "were", "will be", "have been"],
      answer: 1,
      explain: "Điều kiện loại 2 dùng were.",
    },
  },
  {
    id: "c3",
    name: "Câu điều kiện loại 3",
    formula: "If + S + had + V3, S + would have + V3",
    usage: ["Điều kiện không thật trong quá khứ, thể hiện sự tiếc nuối."],
    examples: [
      { en: "If she had left earlier, she wouldn't have missed the bus.", vi: "Nếu cô ấy đi sớm hơn, cô ấy đã không muộn xe buýt." },
    ],
    notes: "Thường dùng để nói về hối tiếc.",
    quiz: {
      question: "If they ___ harder, they would have won.",
      options: ["trained", "had trained", "train", "would train"],
      answer: 1,
      explain: "Loại 3: If + had + V3.",
    },
  },
];

const passiveTopics: GrammarTopic[] = [
  {
    id: "p1",
    name: "Bị động hiện tại đơn",
    formula: "S + am/is/are + V3 (+ by O)",
    usage: ["Nhấn mạnh đối tượng chịu tác động."],
    examples: [{ en: "The room is cleaned every day.", vi: "Căn phòng được dọn mỗi ngày." }],
    notes: "Chỉ động từ có tân ngữ mới chuyển được sang bị động.",
    quiz: {
      question: "English ___ in many countries.",
      options: ["speaks", "is spoken", "spoken", "is speaking"],
      answer: 1,
      explain: "Bị động hiện tại đơn: is/are + V3.",
    },
  },
  {
    id: "p2",
    name: "Bị động quá khứ đơn",
    formula: "S + was/were + V3",
    usage: ["Hành động bị động đã kết thúc trong quá khứ."],
    examples: [{ en: "The letter was sent yesterday.", vi: "Bức thư đã được gửi hôm qua." }],
    notes: "was cho số ít, were cho số nhiều.",
    quiz: {
      question: "The bridge ___ in 1990.",
      options: ["built", "was built", "is built", "has built"],
      answer: 1,
      explain: "Bị động quá khứ: was/were + V3.",
    },
  },
];

const relativeTopics: GrammarTopic[] = [
  {
    id: "rc1",
    name: "Who / Which / That",
    formula: "N + who/which/that + V ...",
    usage: ["who cho người, which cho vật, that dùng cho cả hai."],
    examples: [
      { en: "The man who called you is my boss.", vi: "Người đàn ông gọi bạn là ông chủ của tôi." },
    ],
    notes: "Không dùng that sau dấu phẩy.",
    quiz: {
      question: "This is the book ___ changed my life.",
      options: ["who", "which", "whom", "whose"],
      answer: 1,
      explain: "Danh từ chỉ vật nên dùng which/that.",
    },
  },
  {
    id: "rc2",
    name: "Mệnh đề quan hệ rút gọn",
    formula: "N + V-ing / V3 ...",
    usage: ["Rút gọn khi mệnh đề chủ động dùng V-ing, bị động dùng V3."],
    examples: [
      { en: "The girl sitting there is my sister.", vi: "Cô gái đang ngồi kia là em tôi." },
    ],
    notes: "Bỏ đại từ quan hệ và trợ động từ khi rút gọn.",
    quiz: {
      question: "The car ___ by my father is red.",
      options: ["driving", "driven", "drives", "to drive"],
      answer: 1,
      explain: "Nghĩa bị động nên rút gọn bằng V3: driven.",
    },
  },
];

const prepositionTopics: GrammarTopic[] = [
  {
    id: "pr1",
    name: "Giới từ chỉ thời gian",
    formula: "in + tháng/năm, on + ngày, at + giờ",
    usage: ["Chọn giới từ theo độ lớn của mốc thời gian."],
    examples: [{ en: "The class starts at 7 a.m. on Monday.", vi: "Lớp bắt đầu 7 giờ sáng thứ Hai." }],
    notes: "at night nhưng in the morning/afternoon/evening.",
    quiz: {
      question: "My birthday is ___ July.",
      options: ["at", "on", "in", "for"],
      answer: 2,
      explain: "Tháng dùng in.",
    },
  },
  {
    id: "pr2",
    name: "Giới từ chỉ nơi chốn",
    formula: "in + không gian kín, on + bề mặt, at + điểm",
    usage: ["Xác định vị trí theo phạm vi."],
    examples: [{ en: "She is waiting at the bus stop.", vi: "Cô ấy đang đợi ở điểm xe buýt." }],
    notes: "in a car nhưng on a bus/train/plane.",
    quiz: {
      question: "The keys are ___ the table.",
      options: ["in", "on", "at", "to"],
      answer: 1,
      explain: "Bề mặt dùng on.",
    },
  },
];

export const grammarCourses: Record<string, GrammarCourse> = {
  g1: { overview: "Hệ thống 12 thì cơ bản với công thức, dấu hiệu nhận biết và bài tập nhanh.", topics: tenseTopics },
  g2: { overview: "Các cấu trúc câu nền tảng xuất hiện nhiều trong Writing và Speaking.", topics: structureTopics },
  g3: { overview: "Toàn bộ câu điều kiện loại 1, 2, 3 và cách dùng trong bài thi.", topics: conditionalTopics },
  g4: { overview: "Cách chuyển đổi câu bị động ở các thì thường gặp.", topics: passiveTopics },
  g5: { overview: "Đại từ quan hệ và cách rút gọn mệnh đề để câu gọn hơn.", topics: relativeTopics },
  g6: { overview: "Giới từ chỉ thời gian, nơi chốn và các cụm cố định hay gặp.", topics: prepositionTopics },
};
