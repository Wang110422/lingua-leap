import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Folder, RefreshCw, ExternalLink, Plus, Trash2, BookOpen } from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill } from "@/components/app/ui-bits";
import { cardSets, folders } from "@/data/mock";

export const Route = createFileRoute("/library/$folderId")({
  head: () => ({
    meta: [
      { title: "Chi tiết thư mục — LingoMaster" },
      { name: "description", content: "Danh sách bộ chủ đề học phần trong thư mục và liên kết Google Sheet." },
      { property: "og:title", content: "Chi tiết thư mục — LingoMaster" },
      { property: "og:description", content: "Các bộ thẻ trong thư mục từ vựng của bạn." },
    ],
  }),
  component: FolderDetail,
});

function FolderDetail() {
  const { folderId } = Route.useParams();
  const folder = folders.find((f) => f.id === folderId) ?? folders[0]!;
  const sets = cardSets.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/library" className="inline-flex items-center gap-2 font-semibold hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Thư viện của bạn
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{folder.name}</span>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <span className="icon-tile">
          <Folder className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold">{folder.name}</h1>
            <Pill tone="muted">{folder.sets} bộ thẻ</Pill>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{folder.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <BtnOutline>
            <RefreshCw className="h-4 w-4" /> Đồng bộ Google
          </BtnOutline>
          <BtnOutline className="border-success/40 text-success hover:bg-success-soft">
            <ExternalLink className="h-4 w-4" /> Mở File Google Sheet
          </BtnOutline>
          <BtnPrimary>
            <Plus className="h-4 w-4" /> Thêm bộ thẻ vào thư mục
          </BtnPrimary>
        </div>
      </div>

      <SectionTitle icon={BookOpen} title="Danh sách Bộ chủ đề học phần" badge={String(sets.length)} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sets.map((s) => (
          <article key={s.id} className="surface-card p-5">
            <div className="flex items-start justify-between gap-3">
              <EmojiTile>{s.emoji}</EmojiTile>
              <button
                type="button"
                aria-label="Xóa bộ thẻ"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <h3 className="mt-4 font-bold">{s.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{s.terms} thuật ngữ</p>
            <div className="mt-4 border-t border-border pt-3">
              <Link
                to="/sets/$setId"
                params={{ setId: s.id }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <BookOpen className="h-3.5 w-3.5" /> Bắt đầu học từ vựng
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
