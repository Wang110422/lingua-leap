import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Library, RefreshCw, Plus, Folder, Users, Layers, Search, MoreHorizontal, BookOpen } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, TabPill } from "@/components/app/ui-bits";
import { cardSets, folders, studyGroups } from "@/data/mock";

export const Route = createFileRoute("/library/")({
  head: () => ({
    meta: [
      { title: "Thư viện của bạn — LingoMaster" },
      { name: "description", content: "Quản lý thư mục, nhóm học và bộ từ vựng của bạn, đồng bộ với Google Sheet." },
      { property: "og:title", content: "Thư viện của bạn — LingoMaster" },
      { property: "og:description", content: "Thư mục, nhóm học và bộ từ vựng được tổ chức gọn gàng trong một nơi." },
    ],
  }),
  component: LibraryPage,
});

type Tab = "folders" | "groups" | "sets";

function LibraryPage() {
  const [tab, setTab] = useState<Tab>("folders");

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Library}
        title="Thư viện của bạn"
        description="Tổ chức từ vựng theo thư mục, nhóm học và bộ thẻ để học nhanh hơn."
        actions={
          <>
            <BtnOutline>
              <RefreshCw className="h-4 w-4" /> Đồng bộ Google
            </BtnOutline>
            <BtnPrimary>
              <Plus className="h-4 w-4" /> Tạo Thư mục mới
            </BtnPrimary>
          </>
        }
      />

      <div className="flex flex-wrap items-center gap-2">
        <TabPill active={tab === "folders"} onClick={() => setTab("folders")}>
          <Folder className="h-4 w-4" /> Thư mục ({folders.length})
        </TabPill>
        <TabPill active={tab === "groups"} onClick={() => setTab("groups")}>
          <Users className="h-4 w-4" /> Nhóm học ({studyGroups.length})
        </TabPill>
        <TabPill active={tab === "sets"} onClick={() => setTab("sets")}>
          <Layers className="h-4 w-4" /> Bộ từ vựng ({cardSets.length})
        </TabPill>
        <label className="relative ml-auto flex w-full max-w-xs items-center">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Tìm kiếm trong Thư viện..."
            className="h-10 w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm outline-none focus:border-ring"
          />
        </label>
      </div>

      {tab === "folders" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {folders.map((f) => (
            <article key={f.id} className="surface-card p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="icon-tile font-display font-bold">{f.short}</span>
                <button
                  type="button"
                  aria-label="Tùy chọn"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <Link
                to="/library/$folderId"
                params={{ folderId: f.id }}
                className="mt-4 block font-bold hover:text-primary"
              >
                {f.name}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">{f.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>{f.sets} bộ thẻ</span>
                <span className="font-bold text-foreground">{f.terms} thuật ngữ</span>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {tab === "groups" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {studyGroups.map((g) => (
            <article key={g.id} className="surface-card p-5">
              <div className="flex items-start justify-between gap-3">
                <EmojiTile>{g.emoji}</EmojiTile>
                <Pill tone="muted">{g.code}</Pill>
              </div>
              <Link
                to="/groups/$groupId"
                params={{ groupId: g.id }}
                className="mt-4 block font-bold hover:text-primary"
              >
                {g.name}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">{g.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>{g.members} thành viên</span>
                <span className="font-bold text-foreground">{g.sets} bộ thẻ</span>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {tab === "sets" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cardSets.map((s) => (
            <article key={s.id} className="surface-card p-5">
              <div className="flex items-start justify-between gap-3">
                <Pill tone={s.folder ? "primary" : "muted"}>{s.folder ?? "Bộ từ vựng độc lập"}</Pill>
                <span className="text-xs text-muted-foreground">{s.terms} thuật ngữ</span>
              </div>
              <h3 className="mt-4 flex items-center gap-2 font-bold">
                <span className="text-lg">{s.emoji}</span>
                {s.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.description}</p>
              <div className="mt-4 border-t border-border pt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <BookOpen className="h-3.5 w-3.5" /> Bắt đầu học →
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
