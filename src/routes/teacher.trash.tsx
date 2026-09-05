import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2, Users, FileText, Folder, BookOpenText, Undo2, XCircle } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, EmojiTile, TabPill } from "@/components/app/ui-bits";
import { teacherTrash } from "@/data/teacher";

export const Route = createFileRoute("/teacher/trash")({
  head: () => ({
    meta: [
      { title: "Đã xóa (giảng viên) — LingoMaster" },
      { name: "description", content: "Khôi phục hoặc xóa hẳn lớp học, đề thi, thư mục và bài học đã xóa." },
      { property: "og:title", content: "Đã xóa (giảng viên) — LingoMaster" },
      { property: "og:description", content: "Thùng rác dành cho tài nguyên giảng dạy." },
    ],
  }),
  component: TeacherTrashPage,
});

type Tab = "classes" | "exams" | "folders" | "lessons";

function TeacherTrashPage() {
  const [tab, setTab] = useState<Tab>("classes");
  const items = teacherTrash[tab];

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Trash2}
        title="Đã xóa"
        description="Mục đã xóa được giữ 30 ngày trước khi loại bỏ vĩnh viễn."
      />

      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        <TabPill active={tab === "classes"} onClick={() => setTab("classes")}>
          <Users className="h-4 w-4" /> Lớp học ({teacherTrash.classes.length})
        </TabPill>
        <TabPill active={tab === "exams"} onClick={() => setTab("exams")}>
          <FileText className="h-4 w-4" /> Đề thi ({teacherTrash.exams.length})
        </TabPill>
        <TabPill active={tab === "folders"} onClick={() => setTab("folders")}>
          <Folder className="h-4 w-4" /> Thư mục ({teacherTrash.folders.length})
        </TabPill>
        <TabPill active={tab === "lessons"} onClick={() => setTab("lessons")}>
          <BookOpenText className="h-4 w-4" /> Bài học ({teacherTrash.lessons.length})
        </TabPill>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="surface-card p-5">
            <div className="flex items-start gap-3">
              <EmojiTile>{item.emoji}</EmojiTile>
              <div className="min-w-0">
                <p className="font-bold">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 border-t border-border pt-4">
              <BtnOutline className="h-10 px-4">
                <Undo2 className="h-4 w-4" /> Khôi phục
              </BtnOutline>
              <BtnOutline tone="danger" className="h-10 px-4">
                <XCircle className="h-4 w-4" /> Xóa hẳn
              </BtnOutline>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
