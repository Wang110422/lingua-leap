import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen, Plus, Share2, Layers } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, Pill } from "@/components/app/ui-bits";
import { teacherFolders } from "@/data/teacher";

export const Route = createFileRoute("/teacher/folders")({
  head: () => ({
    meta: [
      { title: "Thư mục giảng viên — LingoMaster" },
      { name: "description", content: "Sắp xếp đề thi, bộ từ vựng và tài liệu quét theo thư mục, chia sẻ cho lớp." },
      { property: "og:title", content: "Thư mục giảng viên — LingoMaster" },
      { property: "og:description", content: "Thư mục tài liệu giảng dạy và trạng thái chia sẻ." },
    ],
  }),
  component: TeacherFoldersPage,
});

function TeacherFoldersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        icon={FolderOpen}
        title="Thư mục"
        description="Nhóm đề thi, bộ từ vựng và tài liệu đã quét vào thư mục để dễ chia sẻ."
        actions={
          <BtnPrimary>
            <Plus className="h-4 w-4" /> Thư mục mới
          </BtnPrimary>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {teacherFolders.map((f) => (
          <article key={f.id} className="surface-card p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft font-display font-bold text-primary">
                {f.short}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{f.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Pill tone="muted">
                <Layers className="h-3.5 w-3.5" /> {f.items} mục
              </Pill>
              <Pill tone="info">
                <Share2 className="h-3.5 w-3.5" /> {f.shared} lớp
              </Pill>
            </div>
            <div className="mt-5 flex gap-2">
              <BtnOutline className="h-10 flex-1 px-4">Mở thư mục</BtnOutline>
              <BtnOutline className="h-10 px-4">
                <Share2 className="h-4 w-4" /> Chia sẻ
              </BtnOutline>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
