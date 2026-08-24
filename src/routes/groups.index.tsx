import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Link2, Plus, Copy, BookOpen } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill } from "@/components/app/ui-bits";
import { studyGroups } from "@/data/mock";

export const Route = createFileRoute("/groups/")({
  head: () => ({
    meta: [
      { title: "Nhóm học — LingoMaster" },
      { name: "description", content: "Tham gia hoặc tạo nhóm học từ vựng, chia sẻ bộ thẻ và học cùng bạn bè." },
      { property: "og:title", content: "Nhóm học — LingoMaster" },
      { property: "og:description", content: "Danh sách nhóm học từ vựng của bạn và mã tham gia nhóm." },
    ],
  }),
  component: GroupsPage,
});

function GroupsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        icon={Users}
        title="Nhóm học"
        description="Học cùng bạn bè, chia sẻ thư mục và theo dõi tiến độ của cả nhóm."
        actions={
          <>
            <BtnOutline>
              <Link2 className="h-4 w-4" /> Tham gia bằng mã
            </BtnOutline>
            <BtnPrimary>
              <Plus className="h-4 w-4" /> Tạo Nhóm học mới
            </BtnPrimary>
          </>
        }
      />

      <div className="space-y-3">
        {studyGroups.map((g) => (
          <article key={g.id} className="surface-card flex flex-wrap items-start gap-4 p-5">
            <EmojiTile>{g.emoji}</EmojiTile>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/groups/$groupId"
                  params={{ groupId: g.id }}
                  className="font-display text-lg font-bold text-primary hover:underline"
                >
                  {g.name}
                </Link>
                <Pill tone="muted">
                  {g.code} <Copy className="h-3 w-3" />
                </Pill>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {g.members}/{g.maxMembers} thành viên
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" /> {g.sets} bộ thẻ
                </span>
                <span className="sm:ml-auto">
                  Quản lý: <span className="font-semibold text-foreground">{g.owner}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
