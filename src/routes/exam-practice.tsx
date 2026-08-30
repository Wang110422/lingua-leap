import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock, FileCheck2, FileText, Play, Search, SlidersHorizontal } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnPrimary, Pill, TabPill } from "@/components/app/ui-bits";
import { examDrills, skillTabs, type SkillKey } from "@/data/mock";

export const Route = createFileRoute("/exam-practice")({
  head: () => ({
    meta: [
      { title: "Luyện đề — LingoMaster" },
      {
        name: "description",
        content:
          "Luyện đề Aptis theo 4 kỹ năng Nghe, Nói, Đọc, Viết với thời gian và số câu hỏi của từng bộ đề.",
      },
      { property: "og:title", content: "Luyện đề — LingoMaster" },
      { property: "og:description", content: "Chọn kỹ năng và làm từng bộ đề luyện thi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExamPracticePage,
});

type TimeFilter = "all" | "short" | "medium" | "long";
type QuestionFilter = "all" | "few" | "mid" | "many";

const timeFilters: { id: TimeFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "short", label: "Dưới 30 phút" },
  { id: "medium", label: "30-60 phút" },
  { id: "long", label: "Trên 60 phút" },
];

const questionFilters: { id: QuestionFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "few", label: "Dưới 20 câu" },
  { id: "mid", label: "20-30 câu" },
  { id: "many", label: "Trên 30 câu" },
];

function matchesTimeFilter(minutes: number, filter: TimeFilter) {
  if (filter === "short") return minutes < 30;
  if (filter === "medium") return minutes >= 30 && minutes <= 60;
  if (filter === "long") return minutes > 60;
  return true;
}

function matchesQuestionFilter(questions: number, filter: QuestionFilter) {
  if (filter === "few") return questions < 20;
  if (filter === "mid") return questions >= 20 && questions <= 30;
  if (filter === "many") return questions > 30;
  return true;
}

function ExamPracticePage() {
  const [skill, setSkill] = useState<SkillKey>("listening");
  const [query, setQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [questionFilter, setQuestionFilter] = useState<QuestionFilter>("all");

  const active = skillTabs.find((s) => s.id === skill)!;
  const list = examDrills[skill].filter((e) => {
    const matchesQuery = e.name.toLowerCase().includes(query.trim().toLowerCase());
    return matchesQuery && matchesTimeFilter(e.minutes, timeFilter) && matchesQuestionFilter(e.questions, questionFilter);
  });

  return (
    <div className="space-y-6">
      <PageHeader
        icon={FileText}
        title="Luyện đề"
        description="Bộ đề luyện thi theo từng kỹ năng, làm bấm giờ như thi thật."
        actions={
          <Link to="/mock-test">
            <BtnPrimary>
              <Play className="h-4 w-4" /> Vào thi thử
            </BtnPrimary>
          </Link>
        }
      />

      <div className="flex flex-wrap gap-2">
        {skillTabs.map((s) => (
          <TabPill key={s.id} active={skill === s.id} onClick={() => setSkill(s.id)}>
            <span>{s.emoji}</span> {s.name}
          </TabPill>
        ))}
      </div>

      <div className="surface-card space-y-4 p-5">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Bộ lọc đề
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex-1 space-y-2">
            <span className="text-xs font-semibold text-muted-foreground">Thời gian làm bài</span>
            <div className="flex flex-wrap gap-2">
              {timeFilters.map((f) => (
                <TabPill
                  key={f.id}
                  active={timeFilter === f.id}
                  onClick={() => setTimeFilter(f.id)}
                  className="h-9 px-3 text-xs"
                >
                  {f.label}
                </TabPill>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <span className="text-xs font-semibold text-muted-foreground">Số câu hỏi</span>
            <div className="flex flex-wrap gap-2">
              {questionFilters.map((f) => (
                <TabPill
                  key={f.id}
                  active={questionFilter === f.id}
                  onClick={() => setQuestionFilter(f.id)}
                  className="h-9 px-3 text-xs"
                >
                  {f.label}
                </TabPill>
              ))}
            </div>
          </div>
        </div>
      </div>

      <label className="surface-card relative flex h-14 items-center p-0">
        <Search className="pointer-events-none absolute left-5 h-4 w-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Tìm bộ đề ${active.name.toLowerCase()}...`}
          className="h-full w-full rounded-[inherit] bg-transparent pl-12 pr-5 text-sm outline-none"
        />
      </label>

      <SectionTitle title={`Bộ đề ${active.name}`} badge={`${list.length} bộ đề`} />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((e) => (
          <article key={e.id} className="surface-card flex flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="icon-tile">
                <FileText className="h-5 w-5" />
              </span>
              <Pill tone="muted">{active.tag}</Pill>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold">{e.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-muted/60 p-4">
                <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <Clock className="h-4 w-4" /> Thời gian
                </span>
                <span className="mt-2 block font-display text-xl font-bold">{e.minutes} phút</span>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <FileCheck2 className="h-4 w-4" /> Câu hỏi
                </span>
                <span className="mt-2 block font-display text-xl font-bold">{e.questions}</span>
              </div>
            </div>

            <BtnPrimary className="mt-auto h-12 w-full rounded-2xl">
              Xem bộ đề <ArrowRight className="h-4 w-4" />
            </BtnPrimary>
          </article>
        ))}

        {list.length === 0 ? (
          <p className="surface-card p-6 text-center text-sm text-muted-foreground">
            Không tìm thấy bộ đề phù hợp.
          </p>
        ) : null}
      </div>
    </div>
  );
}
