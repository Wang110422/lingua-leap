import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScanLine, FileText, BookOpen, Upload, Check, RefreshCw } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, Pill } from "@/components/app/ui-bits";
import { vocabulary } from "@/data/mock";

export const Route = createFileRoute("/teacher/scan")({
  head: () => ({
    meta: [
      { title: "Quét tài liệu giảng viên — LingoMaster" },
      {
        name: "description",
        content: "Quét đề thi hoặc bộ từ vựng từ ảnh tài liệu để tạo nhanh nội dung giảng dạy.",
      },
      { property: "og:title", content: "Quét tài liệu giảng viên — LingoMaster" },
      {
        property: "og:description",
        content: "Nhận diện đề thi và từ vựng từ ảnh, kiểm tra kết quả rồi lưu vào thư mục lớp học.",
      },
    ],
  }),
  component: TeacherScanPage,
});

const modes = [
  { id: "exam", label: "Quét đề thi", icon: FileText, desc: "Tách phần thi, câu hỏi và đáp án từ ảnh đề." },
  { id: "vocab", label: "Quét bộ từ vựng", icon: BookOpen, desc: "Trích xuất từ, phiên âm và nghĩa theo CEFR." },
] as const;

const scannedParts = [
  { id: "p1", name: "Part 1 — Listening", questions: 12, note: "12 câu trắc nghiệm, 3 lựa chọn" },
  { id: "p2", name: "Part 2 — Reading", questions: 15, note: "Điền từ vào đoạn văn" },
  { id: "p3", name: "Part 3 — Writing", questions: 4, note: "Viết đoạn 40–60 từ" },
];

function TeacherScanPage() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("exam");
  const [picked, setPicked] = useState<string[]>(vocabulary.slice(0, 2).map((v) => v.word));

  const toggle = (word: string) =>
    setPicked((p) => (p.includes(word) ? p.filter((w) => w !== word) : [...p, word]));

  return (
    <div className="space-y-6">
      <PageHeader
        icon={ScanLine}
        title="Quét tài liệu"
        description="Tải ảnh đề thi hoặc trang từ vựng, hệ thống nhận diện và tạo nội dung sẵn để chỉnh sửa."
        actions={
          <BtnOutline>
            <RefreshCw className="h-4 w-4" /> Quét lại
          </BtnOutline>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`surface-card p-5 text-left transition ${
              mode === m.id ? "border-primary/60 ring-1 ring-primary/30" : "hover:border-primary/40"
            }`}
          >
            <span className="icon-tile">
              <m.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-bold">{m.label}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
          </button>
        ))}
      </div>

      <div className="surface-card flex flex-col items-center gap-3 border-dashed p-10 text-center">
        <span className="icon-tile">
          <Upload className="h-5 w-5" />
        </span>
        <p className="font-semibold">Kéo thả ảnh tài liệu vào đây</p>
        <p className="text-sm text-muted-foreground">Hỗ trợ JPG, PNG, PDF · tối đa 10 trang mỗi lần quét</p>
        <BtnPrimary>Chọn tệp</BtnPrimary>
      </div>

      {mode === "exam" ? (
        <section className="space-y-4">
          <SectionTitle icon={FileText} title="Kết quả nhận diện đề thi" badge={String(scannedParts.length)} />
          <div className="space-y-3">
            {scannedParts.map((p) => (
              <article key={p.id} className="surface-card flex items-center gap-3 p-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.note}</p>
                </div>
                <Pill tone="info">{p.questions} câu</Pill>
              </article>
            ))}
          </div>
          <BtnPrimary>Tạo đề thi từ kết quả quét</BtnPrimary>
        </section>
      ) : (
        <section className="space-y-4">
          <SectionTitle icon={BookOpen} title="Từ vựng nhận diện được" badge={String(vocabulary.length)} />
          <div className="grid gap-3 md:grid-cols-2">
            {vocabulary.map((v) => {
              const on = picked.includes(v.word);
              return (
                <button
                  key={v.word}
                  type="button"
                  onClick={() => toggle(v.word)}
                  className={`surface-card flex items-center gap-3 p-4 text-left transition ${
                    on ? "border-primary/60" : "hover:border-primary/40"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{v.word}</p>
                    <p className="truncate text-xs text-muted-foreground">{v.meaning}</p>
                  </div>
                  <Pill tone="muted">{v.cefr}</Pill>
                  {on && <Check className="h-4 w-4 text-primary" />}
                </button>
              );
            })}
          </div>
          <BtnPrimary>Lưu {picked.length} từ thành bộ từ vựng</BtnPrimary>
        </section>
      )}
    </div>
  );
}
