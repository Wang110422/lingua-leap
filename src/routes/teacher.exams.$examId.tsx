import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Plus, Trash2, ChevronRight, Send, Check, ListChecks } from "lucide-react";

import { BtnOutline, BtnPrimary, Pill } from "@/components/app/ui-bits";
import { teacherExams, type ExamPart, type TeacherExam } from "@/data/teacher";

export const Route = createFileRoute("/teacher/exams/$examId")({
  loader: ({ params }) => {
    const exam = teacherExams.find((e) => e.id === params.examId);
    if (!exam) throw notFound();
    return { exam };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Không tìm thấy đề thi" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.exam.name} — Soạn đề`;
    return {
      meta: [
        { title },
        { name: "description", content: `Chỉnh sửa phần thi và câu hỏi cho ${loaderData.exam.name}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: "Soạn đề thi theo từng phần kỹ năng." },
      ],
    };
  },
  component: ExamEditor,
});

const skills: ExamPart["skill"][] = ["Nghe", "Nói", "Đọc", "Viết", "Ngữ pháp"];

function ExamEditor() {
  const { exam } = Route.useLoaderData();
  const [parts, setParts] = useState<ExamPart[]>(exam.parts);
  const [status, setStatus] = useState<TeacherExam["status"]>(exam.status);
  const [draft, setDraft] = useState<{ name: string; skill: ExamPart["skill"]; questions: number; minutes: number }>({
    name: "",
    skill: "Đọc",
    questions: 10,
    minutes: 15,
  });

  const addPart = () => {
    setParts((prev) => [
      ...prev,
      {
        id: `p-${Date.now()}`,
        name: draft.name.trim() || `Phần ${prev.length + 1}`,
        skill: draft.skill,
        questions: Number(draft.questions) || 0,
        minutes: Number(draft.minutes) || 0,
      },
    ]);
    setDraft({ name: "", skill: "Đọc", questions: 10, minutes: 15 });
  };

  const totalQ = parts.reduce((n, p) => n + p.questions, 0);
  const totalMin = parts.reduce((n, p) => n + p.minutes, 0);

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <Link to="/teacher/exams" className="font-semibold text-primary hover:underline">
          Đề thi
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-semibold text-foreground">{exam.name}</span>
      </nav>

      <section className="surface-card p-6">
        <div className="flex flex-wrap items-start gap-4">
          <span className="icon-tile">
            <FileText className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold">{exam.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {exam.category} · {parts.length} phần thi · {totalQ} câu · {totalMin} phút
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone={status === "Đã phát hành" ? "success" : "warning"}>{status}</Pill>
            {status === "Bản nháp" ? (
              <BtnPrimary className="h-10 px-5" onClick={() => setStatus("Đã phát hành")}>
                <Send className="h-4 w-4" /> Phát hành
              </BtnPrimary>
            ) : (
              <BtnOutline className="h-10 px-5" onClick={() => setStatus("Bản nháp")}>
                Chuyển về nháp
              </BtnOutline>
            )}
          </div>
        </div>
      </section>

      <section className="surface-card p-6">
        <h2 className="flex items-center gap-2 font-bold">
          <ListChecks className="h-[18px] w-[18px] text-primary" /> Các phần thi
        </h2>

        <div className="mt-4 space-y-3">
          {parts.map((p, i) => (
            <div key={p.id} className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-muted/30 p-4">
              <Pill tone="muted">Phần {i + 1}</Pill>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">
                  {p.questions} câu · {p.minutes} phút
                </p>
              </div>
              <Pill tone="info">{p.skill}</Pill>
              <button
                type="button"
                onClick={() => setParts((prev) => prev.filter((x) => x.id !== p.id))}
                aria-label={`Xóa ${p.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          {parts.length === 0 && (
            <p className="text-sm text-muted-foreground">Chưa có phần thi nào, thêm phần đầu tiên bên dưới.</p>
          )}
        </div>

        <div className="mt-6 grid gap-3 border-t border-border pt-5 md:grid-cols-[minmax(0,2fr)_1fr_100px_100px_auto] md:items-end">
          <label className="text-sm font-semibold">
            Tên phần thi
            <input
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              placeholder="VD: Reading Part 1-4"
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            />
          </label>
          <label className="text-sm font-semibold">
            Kỹ năng
            <select
              value={draft.skill}
              onChange={(e) => setDraft((d) => ({ ...d, skill: e.target.value as ExamPart["skill"] }))}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            >
              {skills.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Số câu
            <input
              type="number"
              min={1}
              value={draft.questions}
              onChange={(e) => setDraft((d) => ({ ...d, questions: Number(e.target.value) }))}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            />
          </label>
          <label className="text-sm font-semibold">
            Phút
            <input
              type="number"
              min={1}
              value={draft.minutes}
              onChange={(e) => setDraft((d) => ({ ...d, minutes: Number(e.target.value) }))}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            />
          </label>
          <BtnPrimary className="h-11 px-5" onClick={addPart}>
            <Plus className="h-4 w-4" /> Thêm phần
          </BtnPrimary>
        </div>
      </section>

      <section className="surface-card p-6">
        <h2 className="font-bold">Bài thi giao cho lớp</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Chọn lớp và thời hạn để biến đề thi này thành một bài thi có tính điểm.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <label className="text-sm font-semibold">
            Lớp
            <select className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring">
              <option>Aptis B2 - Lớp 01</option>
              <option>TOEIC 600+ Buổi tối</option>
              <option>IELTS Writing Task 2</option>
            </select>
          </label>
          <label className="text-sm font-semibold">
            Hạn làm bài
            <input
              type="date"
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            />
          </label>
          <label className="text-sm font-semibold">
            Điểm đạt
            <input
              type="number"
              defaultValue={60}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm font-normal outline-none focus:border-ring"
            />
          </label>
        </div>
        <div className="mt-5 flex justify-end">
          <BtnPrimary className="h-10 px-5">
            <Check className="h-4 w-4" /> Giao bài thi
          </BtnPrimary>
        </div>
      </section>
    </div>
  );
}
