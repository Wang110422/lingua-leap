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
