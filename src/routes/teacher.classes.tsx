import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, Plus, Copy, RefreshCw, KeyRound, X, Check } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { Avatar, BtnOutline, BtnPrimary, Pill, Progress, TabPill } from "@/components/app/ui-bits";
import { classRoster, teacherClasses, type TeacherClass } from "@/data/teacher";

export const Route = createFileRoute("/teacher/classes")({
  head: () => ({
    meta: [
      { title: "Lớp học của giảng viên — LingoMaster" },
      { name: "description", content: "Tạo lớp học, sinh mã mời cho sinh viên và theo dõi tiến độ từng lớp." },
      { property: "og:title", content: "Lớp học của giảng viên — LingoMaster" },
      { property: "og:description", content: "Quản lý lớp, mã mời và danh sách sinh viên." },
    ],
  }),
  component: TeacherClassesPage,
});

function makeCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
  return `LM-${out}`;
}

function TeacherClassesPage() {
  const [classes, setClasses] = useState<TeacherClass[]>(teacherClasses);
  const [selectedId, setSelectedId] = useState(teacherClasses[0]!.id);
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ name: "", term: "Học kỳ 1 · 2026", code: makeCode() });
  const [copied, setCopied] = useState<string | null>(null);

  const visible = classes.filter((c) =>
    filter === "all" ? true : filter === "open" ? c.status === "Đang mở" : c.status === "Đã đóng",
  );
  const selected = classes.find((c) => c.id === selectedId) ?? visible[0] ?? classes[0]!;

  const copy = (code: string) => {
    void navigator.clipboard?.writeText(code);
    setCopied(code);
    window.setTimeout(() => setCopied(null), 1500);
  };

  const createClass = () => {
    const name = form.name.trim() || "Lớp học mới";
    const id = `class-${Date.now()}`;
    setClasses((prev) => [
      {
        id,
        name,
        emoji: "🏫",
        code: form.code,
        term: form.term,
        students: 0,
        assignments: 0,
        progress: 0,
        status: "Đang mở",
      },
      ...prev,
    ]);
    setSelectedId(id);
    setCreating(false);
    setForm({ name: "", term: "Học kỳ 1 · 2026", code: makeCode() });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Users}
        title="Lớp học"
        description="Tạo lớp, chia sẻ mã mời để sinh viên tự tham gia và theo dõi tiến độ."
        actions={
          <BtnPrimary className="cursor-pointer" >
            <span onClick={() => setCreating(true)} className="inline-flex items-center gap-2">
              <Plus className="h-4 w-4" /> Tạo lớp học
            </span>
          </BtnPrimary>
        }
      />

      {creating && (
        <section className="surface-card p-6">
          <div className="flex items-center gap-3">
            <h3 className="font-bold">Tạo lớp học mới</h3>
            <button
              type="button"
              onClick={() => setCreating(false)}
              aria-label="Đóng"
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <label className="text-sm font-semibold">
              Tên lớp
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="VD: Aptis B2 - Lớp 02"
                className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
              />
            </label>
            <label className="text-sm font-semibold">
              Học kỳ
              <input
                value={form.term}
                onChange={(e) => setForm((f) => ({ ...f, term: e.target.value }))}
                className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
              />
            </label>
            <div className="text-sm font-semibold">
              Mã mời
              <div className="mt-1.5 flex items-center gap-2">
                <span className="flex h-11 flex-1 items-center rounded-xl border border-dashed border-primary/50 bg-primary-soft px-4 font-display text-sm font-bold tracking-[0.16em] text-primary">
                  {form.code}
                </span>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, code: makeCode() }))}
                  aria-label="Tạo mã khác"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-muted"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <BtnOutline className="h-10 px-4">
              <span onClick={() => setCreating(false)}>Hủy</span>
            </BtnOutline>
            <BtnPrimary className="h-10 px-5">
              <span onClick={createClass} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> Tạo lớp
              </span>
            </BtnPrimary>
          </div>
        </section>
      )}

      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        <TabPill active={filter === "all"} onClick={() => setFilter("all")}>
          Tất cả ({classes.length})
        </TabPill>
        <TabPill active={filter === "open"} onClick={() => setFilter("open")}>
          Đang mở ({classes.filter((c) => c.status === "Đang mở").length})
        </TabPill>
        <TabPill active={filter === "closed"} onClick={() => setFilter("closed")}>
          Đã đóng ({classes.filter((c) => c.status === "Đã đóng").length})
        </TabPill>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((c) => (
          <article
            key={c.id}
            className={`surface-card p-5 transition ${selected.id === c.id ? "border-primary/60" : ""}`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{c.emoji}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.term}</p>
              </div>
              <Pill tone={c.status === "Đang mở" ? "success" : "muted"}>{c.status}</Pill>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-primary/40 bg-primary-soft px-3 py-2">
              <KeyRound className="h-4 w-4 text-primary" />
              <span className="font-display text-sm font-bold tracking-[0.16em] text-primary">{c.code}</span>
              <button
                type="button"
                onClick={() => copy(c.code)}
                aria-label="Sao chép mã mời"
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-card"
              >
                {copied === c.code ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {c.students} sinh viên · {c.assignments} bài đã giao
            </p>
            <div className="mt-2">
              <Progress value={c.progress} />
            </div>

            <div className="mt-4 flex justify-end">
              <BtnOutline className="h-10 px-4">
                <span onClick={() => setSelectedId(c.id)}>Xem sinh viên</span>
              </BtnOutline>
            </div>
          </article>
        ))}
      </div>

      <section className="space-y-4">
        <SectionTitle title={`Sinh viên · ${selected.name}`} badge={`${classRoster.length} người`} />
        <div className="surface-card overflow-hidden">
          <div className="hidden grid-cols-[minmax(0,2fr)_1fr_1fr_80px] gap-4 border-b border-border px-5 py-3 text-xs font-bold uppercase tracking-wide text-muted-foreground md:grid">
            <span>Sinh viên</span>
            <span>Ngày vào lớp</span>
            <span>Tiến độ</span>
            <span>Điểm</span>
          </div>
          {classRoster.map((s) => (
            <div
              key={s.email}
              className="grid gap-3 border-b border-border px-5 py-4 last:border-0 md:grid-cols-[minmax(0,2fr)_1fr_1fr_80px] md:items-center md:gap-4"
            >
              <div className="flex items-center gap-3">
                <Avatar initial={s.initial} size="sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{s.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{s.email}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{s.joined}</span>
              <div className="flex items-center gap-2">
                <Progress value={s.progress} />
                <span className="text-xs font-semibold text-muted-foreground">{s.progress}%</span>
              </div>
              <span className="font-display text-sm font-bold">{s.score}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
