import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Copy,
  Folder,
  Layers,
  Link2,
  Plus,
  Users,
  Database,
  Mail,
} from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { Avatar, BtnPrimary, EmojiTile, Pill, Progress, TabPill } from "@/components/app/ui-bits";
import { cardSets, folders, groupMembers, studyGroups } from "@/data/mock";

export const Route = createFileRoute("/groups/$groupId")({
  head: () => ({
    meta: [
      { title: "Chi tiết nhóm học — LingoMaster" },
      { name: "description", content: "Tài liệu học, bộ thẻ dùng chung và danh sách thành viên của nhóm học." },
      { property: "og:title", content: "Chi tiết nhóm học — LingoMaster" },
      { property: "og:description", content: "Quản lý tài liệu và thành viên trong nhóm học từ vựng." },
    ],
  }),
  component: GroupDetail,
});

function GroupDetail() {
  const { groupId } = Route.useParams();
  const group = studyGroups.find((g) => g.id === groupId) ?? studyGroups[0]!;
  const [tab, setTab] = useState<"docs" | "members">("docs");
  const docs = folders.slice(0, 2);
  const sets = cardSets.slice(0, 4);

  return (
    <div className="space-y-6">
      <Link to="/groups" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Quay lại danh sách nhóm học
      </Link>

      <div className="flex flex-wrap items-start gap-4">
        <EmojiTile>{group.emoji}</EmojiTile>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold">{group.name}</h1>
            <Pill tone="muted">
              {group.code} <Copy className="h-3 w-3" />
            </Pill>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
        </div>
        <div className="flex gap-2">
          <TabPill active={tab === "docs"} onClick={() => setTab("docs")}>
            <Layers className="h-4 w-4" /> Tài liệu học ({docs.length + sets.length})
          </TabPill>
          <TabPill active={tab === "members"} onClick={() => setTab("members")}>
            <Users className="h-4 w-4" /> Thành viên ({group.members}/{group.maxMembers})
          </TabPill>
        </div>
      </div>

      {tab === "docs" ? (
        <div className="space-y-5">
          <SectionTitle
            title="Tài liệu dùng chung"
            right={
              <BtnPrimary>
                <Plus className="h-4 w-4" /> Thêm Thư mục / Bộ thẻ vào Nhóm
              </BtnPrimary>
            }
          />
          <p className="-mt-3 text-sm text-muted-foreground">
            Mọi thành viên trong nhóm đều có thể học các tài liệu bên dưới.
          </p>

          <div className="surface-card p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <Layers className="h-4 w-4 text-primary" /> Tài liệu của nhóm ({docs.length + sets.length})
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {docs.map((f) => (
                <div key={f.id} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <span className="icon-tile">
                    <Folder className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">{f.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
                    <p className="mt-2 text-xs font-semibold">{f.sets} bộ từ vựng bên trong</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    <Database className="h-3.5 w-3.5" /> Thư mục CSDL
                  </span>
                </div>
              ))}
              {sets.map((s) => (
                <div key={s.id} className="flex flex-col gap-3 rounded-2xl border border-border p-4">
                  <div className="flex items-start gap-3">
                    <EmojiTile>{s.emoji}</EmojiTile>
                    <div className="min-w-0">
                      <p className="font-bold">{s.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {s.terms} thuật ngữ · cập nhật {s.updated}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary">Bắt đầu học →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <section className="surface-card flex flex-wrap items-center gap-6 bg-primary-soft/50 p-6">
            <div className="min-w-[260px] flex-1">
              <Pill>
                <Link2 className="h-3 w-3" /> Mời thành viên bằng liên kết
              </Pill>
              <h2 className="mt-3 text-xl font-bold">Mời bạn cùng học nhóm này</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Chia sẻ liên kết bên cạnh, người nhận chỉ cần đăng nhập là vào nhóm ngay.
              </p>
              <p className="mt-4 text-xs font-semibold">
                {group.members}/{group.maxMembers} người
              </p>
              <div className="mt-2 max-w-xs">
                <Progress value={(group.members / group.maxMembers) * 100} />
              </div>
            </div>
            <div className="flex w-full max-w-md flex-col gap-2">
              <label className="relative flex items-center">
                <Link2 className="pointer-events-none absolute left-4 h-4 w-4 text-muted-foreground" />
                <input
                  readOnly
                  value={`https://lingomaster.vn/join/${group.code}`}
                  className="h-11 w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm text-muted-foreground outline-none"
                />
              </label>
              <BtnPrimary>
                <Copy className="h-4 w-4" /> Sao chép liên kết mời
              </BtnPrimary>
            </div>
          </section>

          <SectionTitle
            icon={Users}
            title={`Thành viên (${groupMembers.length})`}
            right={<span className="text-xs text-muted-foreground">Tối đa {group.maxMembers} thành viên</span>}
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {groupMembers.map((m) => (
              <article key={m.email} className="surface-card flex items-center gap-3 p-4">
                <Avatar initial={m.initial} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{m.name}</p>
                  <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" /> {m.email}
                  </p>
                </div>
                <Pill tone={m.role === "Trưởng nhóm" ? "primary" : "muted"}>{m.role}</Pill>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
