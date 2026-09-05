import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Plus, Search, Layers, Check, X } from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, Pill, TabPill } from "@/components/app/ui-bits";
import { teacherExams, type TeacherExam } from "@/data/teacher";

export const Route = createFileRoute("/teacher/exams/")({
  head: () => ({
    meta: [
      { title: "Đề thi giảng viên — LingoMaster" },
      { name: "description", content: "Tạo đề thi, chia phần thi theo kỹ năng và phát hành bài thi cho lớp." },
      { property: "og:title", content: "Đề thi giảng viên — LingoMaster" },
      { property: "og:description", content: "Thư viện đề thi, bản nháp và bài thi đã phát hành." },
    ],
  }),
  component: TeacherExamsPage,
});

const categories = ["Tất cả", "Aptis", "TOEIC", "IELTS", "VSTEP"] as const;

function TeacherExamsPage() {
  const [exams, setExams] = useState<TeacherExam[]>(teacherExams);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Tất cả");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<{ name: string; category: TeacherExam["category"] }>({
    name: "",
    category: "Aptis",
  });

  const list = exams.filter(
    (e) =>
      (cat === "Tất cả" || e.category === cat) && e.name.toLowerCase().includes(q.trim().toLowerCase()),
  );

  const createExam = () => {
    const id = `exam-${Date.now()}`;
    setExams((prev) => [
      {
        id,
        name: form.name.trim() || "Đề thi mới",
        category: form.category,
        status: "Bản nháp",
        updated: "Vừa xong",
        attempts: 0,
        parts: [],
      },
      ...prev,
    ]);
    setCreating(false);
    setForm({ name: "", category: "Aptis" });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        icon={FileText}
        title="Đề thi"
        description="Thêm đề thi, chia thành từng phần thi và phát hành cho lớp của bạn."
        actions={
          <BtnPrimary onClick={() => setCreating(true)}>
            <Plus className="h-4 w-4" /> Thêm đề thi
          </BtnPrimary>
        }
      />

      {creating && (
        <section className="surface-card p-6">
          <div className="flex items-center gap-3">
            <h3 className="font-bold">Đề thi mới</h3>
            <button
              type="button"
              onClick={() => setCreating(false)}
              aria-label="Đóng"
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold">
              Tên đề thi
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="VD: Aptis ESOL - Đề tổng hợp 02"
                className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
              />
            </label>
            <label className="text-sm font-semibold">
              Loại đề
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value as TeacherExam["category"] }))
                }
                className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
              >
                {["Aptis", "TOEIC", "IELTS", "VSTEP"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <BtnOutline className="h-10 px-4" onClick={() => setCreating(false)}>
              Hủy
            </BtnOutline>
            <BtnPrimary className="h-10 px-5" onClick={createExam}>
              <Check className="h-4 w-4" /> Tạo đề
            </BtnPrimary>
          </div>
        </section>
      )}

      <div className="surface-card flex flex-wrap items-center gap-3 p-4">
        <label className="relative flex min-w-[240px] flex-1 items-center">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm đề thi..."
            className="h-11 w-full rounded-full border border-input bg-muted/50 pl-11 pr-4 text-sm outline-none focus:border-ring"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <TabPill key={c} active={cat === c} onClick={() => setCat(c)}>
              {c}
            </TabPill>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((e) => (
          <Link
            key={e.id}
            to="/teacher/exams/$examId"
            params={{ examId: e.id }}
            className="surface-card flex flex-col p-5 transition hover:border-primary/50"
          >
            <div className="flex items-start gap-3">
              <span className="icon-tile">
                <FileText className="h-5 w-5" />
              </span>
              <Pill className="ml-auto" tone={e.status === "Đã phát hành" ? "success" : "warning"}>
                {e.status}
              </Pill>
            </div>
            <h3 className="mt-4 font-bold">{e.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {e.category} · cập nhật {e.updated}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Pill tone="muted">
                <Layers className="h-3.5 w-3.5" /> {e.parts.length} phần
              </Pill>
              <Pill tone="info">{e.parts.reduce((n, p) => n + p.questions, 0)} câu</Pill>
              <span className="ml-auto">{e.attempts} lượt làm</span>
            </div>
          </Link>
        ))}
        {list.length === 0 && (
          <p className="text-sm text-muted-foreground">Không có đề thi nào khớp bộ lọc.</p>
        )}
      </div>
    </div>
  );
}
