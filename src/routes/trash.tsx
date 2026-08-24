import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2, Folder, Layers, Type, Undo2, XCircle } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, EmojiTile, TabPill } from "@/components/app/ui-bits";
import { trashItems } from "@/data/mock";

export const Route = createFileRoute("/trash")({
  head: () => ({
    meta: [
      { title: "Đã xóa — LingoMaster" },
      { name: "description", content: "Khôi phục hoặc xóa hẳn thư mục, bộ từ vựng và từ vựng đã xóa." },
      { property: "og:title", content: "Đã xóa — LingoMaster" },
      { property: "og:description", content: "Thùng rác của thư viện từ vựng: khôi phục hoặc xóa vĩnh viễn." },
    ],
  }),
  component: TrashPage,
});

type Tab = "folders" | "sets" | "words";

function TrashPage() {
  const [tab, setTab] = useState<Tab>("folders");
  const items = trashItems[tab];

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Trash2}
        title="Đã xóa"
        description="Các mục đã xóa được giữ lại 30 ngày trước khi bị loại bỏ vĩnh viễn."
      />

      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        <TabPill active={tab === "folders"} onClick={() => setTab("folders")}>
          <Folder className="h-4 w-4" /> Thư mục ({trashItems.folders.length})
        </TabPill>
        <TabPill active={tab === "sets"} onClick={() => setTab("sets")}>
          <Layers className="h-4 w-4" /> Bộ từ vựng ({trashItems.sets.length})
        </TabPill>
        <TabPill active={tab === "words"} onClick={() => setTab("words")}>
          <Type className="h-4 w-4" /> Từ vựng ({trashItems.words.length})
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
