import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScanLine, RefreshCw, FileText, Images, Copy, Search, BookOpen, ImageIcon } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, Pill } from "@/components/app/ui-bits";
import { vocabulary } from "@/data/mock";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Quét tài liệu — LingoMaster" },
      { name: "description", content: "Quét OCR trang tài liệu, so sánh ảnh gốc và kết quả nhận diện, trích xuất từ vựng theo CEFR." },
      { property: "og:title", content: "Quét tài liệu — LingoMaster" },
      { property: "og:description", content: "Trích xuất từ vựng từ ảnh tài liệu bằng OCR và lọc theo cấp độ CEFR." },
    ],
  }),
  component: ScanPage,
});

const levels = ["Tất cả CEFR", "A1", "A2", "B1", "B2", "C1", "C2"];

function ScanPage() {
  const [level, setLevel] = useState("Tất cả CEFR");
  const [picked, setPicked] = useState<string[]>([vocabulary[0]!.word, vocabulary[1]!.word]);

  const list = level === "Tất cả CEFR" ? vocabulary : vocabulary.filter((v) => v.cefr === level);

  const toggle = (word: string) =>
    setPicked((p) => (p.includes(word) ? p.filter((w) => w !== word) : [...p, word]));

  return (
    <div className="space-y-6">
      <PageHeader
        icon={ScanLine}
        title="Quét tài liệu"
        description="Nhận diện chữ từ ảnh tài liệu và tự động tạo bộ thẻ từ vựng."
        actions={
          <BtnOutline>
            <RefreshCw className="h-4 w-4" /> Chọn tài liệu khác
          </BtnOutline>
        }
      />

      <SectionTitle icon={FileText} title="Danh sách trang tài liệu đã quét" badge="1 trang" />

      <section className="surface-card p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Pill tone="muted">P1</Pill>
          <h3 className="font-bold">unit-04-environment.png</h3>
          <Pill className="ml-auto">{vocabulary.length} từ vựng trích xuất</Pill>
        </div>

        <h4 className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <Images className="h-4 w-4 text-primary" /> So sánh Ảnh Gốc vs Ảnh Sau Khi Nhận Diện OCR
        </h4>

        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-foreground">Ảnh Trang Gốc</p>
            <div className="flex h-56 items-center justify-center rounded-2xl border border-border bg-muted/50 text-muted-foreground">
              <ImageIcon className="h-8 w-8" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-primary">Ảnh Kết Quả OCR</p>
            <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary bg-muted/40">
              <div className="absolute left-6 top-8 h-6 w-32 rounded border-2 border-success bg-success-soft/60" />
              <div className="absolute left-10 top-20 h-6 w-40 rounded border-2 border-info bg-info-soft/60" />
              <div className="absolute left-8 top-32 h-6 w-24 rounded border-2 border-warning bg-warning-soft/60" />
              <span className="text-xs text-muted-foreground">Vùng nhận diện</span>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="flex items-center gap-2 font-bold">
            <FileText className="h-[18px] w-[18px] text-primary" /> Chữ đã được nhận diện
          </h3>
          <span className="text-xs text-muted-foreground">(có thể chỉnh sửa trước khi tra cứu)</span>
          <div className="ml-auto flex gap-2">
            <BtnOutline className="h-10 px-4">
              <Copy className="h-4 w-4" /> Copy chữ
            </BtnOutline>
            <BtnOutline className="h-10 px-4">
              <Search className="h-4 w-4" /> Tra cứu lại
            </BtnOutline>
          </div>
        </div>
        <textarea
          className="mt-4 h-40 w-full resize-y rounded-2xl border border-input bg-muted/40 p-4 text-sm leading-relaxed outline-none focus:border-ring"
          defaultValue={`Cities around the world are trying to cut down on emissions. Small communities proved remarkably resilient during the crisis, and local councils advocate greener transport to mitigate the impact of pollution. In the long run, reducing your carbon footprint significantly improves air quality.`}
        />
      </section>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="flex items-center gap-2 font-bold">
            <BookOpen className="h-[18px] w-[18px] text-primary" /> Bộ từ vựng trích xuất bên dưới Trang 1 ({list.length} từ)
          </h3>
          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={`h-9 rounded-full px-3 text-xs font-semibold transition ${
                  level === l
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPicked([])}
              className="h-9 rounded-full px-3 text-xs font-semibold text-destructive hover:bg-destructive/10"
            >
              Bỏ chọn hết
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map((v) => (
            <article key={v.word} className="surface-card p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={picked.includes(v.word)}
                  onChange={() => toggle(v.word)}
                  aria-label={`Chọn ${v.word}`}
                  className="mt-1 h-4 w-4 accent-[var(--primary)]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <p className="font-display font-bold">{v.word}</p>
                    <Pill className="ml-auto" tone="info">
                      {v.cefr}
                    </Pill>
                  </div>
                  {v.ipa ? <p className="mt-0.5 text-xs text-muted-foreground">{v.ipa}</p> : null}
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                      {v.pos}
                    </span>
                    {v.vi}
                  </p>
                  <p className="mt-2 text-xs italic text-muted-foreground">{v.example}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
