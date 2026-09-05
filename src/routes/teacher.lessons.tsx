import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpenText, Plus, Users } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, TabPill } from "@/components/app/ui-bits";
import { teacherLessons, type TeacherLesson } from "@/data/teacher";

export const Route = createFileRoute("/teacher/lessons")({
  head: () => ({
    meta: [
      { title: "Bài học giảng viên — LingoMaster" },
      { name: "description", content: "Tạo và giao bài học nghe, nói, đọc, viết, từ vựng, ngữ pháp cho từng lớp." },
      { property: "og:title", content: "Bài học giảng viên — LingoMaster" },
      { property: "og:description", content: "Quản lý bài học theo 6 kỹ năng và giao cho lớp." },
    ],
  }),
  component: TeacherLessonsPage,
});

const skills: (TeacherLesson["skill"] | "Tất cả")[] = [
  "Tất cả",
  "Nghe",
  "Nói",
  "Đọc",
  "Viết",
  "Từ vựng",
  "Ngữ pháp",
];

function TeacherLessonsPage() {
  const [skill, setSkill] = useState<(typeof skills)[number]>("Tất cả");
  const list = teacherLessons.filter((l) => skill === "Tất cả" || l.skill === skill);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={BookOpenText}
        title="Bài học"
        description="Soạn bài học theo kỹ năng, thêm bộ từ vựng hoặc ngữ pháp rồi giao cho lớp."
        actions={
          <BtnPrimary>
            <Plus className="h-4 w-4" /> Tạo bài học
          </BtnPrimary>
        }
      />

      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {skills.map((s) => (
          <TabPill key={s} active={skill === s} onClick={() => setSkill(s)}>
            {s}
          </TabPill>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((l) => (
          <article key={l.id} className="surface-card flex flex-col p-5">
            <div className="flex items-start gap-3">
              <EmojiTile>{l.emoji}</EmojiTile>
              <Pill className="ml-auto" tone={l.status === "Đang dạy" ? "success" : "warning"}>
                {l.status}
              </Pill>
            </div>
            <h3 className="mt-4 font-bold">{l.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {l.skill} · {l.items} {l.skill === "Từ vựng" ? "từ" : "bài"}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-4 w-4 text-primary" /> Đang giao cho {l.classes} lớp
            </div>
            <div className="mt-5 flex gap-2">
              <BtnOutline className="h-10 flex-1 px-4">Chỉnh sửa</BtnOutline>
              <BtnPrimary className="h-10 flex-1 px-4">Giao lớp</BtnPrimary>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
