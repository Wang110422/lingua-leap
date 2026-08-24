import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Search, SlidersHorizontal, Clock, ListChecks, Users, Play } from "lucide-react";
import { useState } from "react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, Pill, TabPill } from "@/components/app/ui-bits";
import { examFilters, examSets } from "@/data/mock";

export const Route = createFileRoute("/exams")({
  head: () => ({
    meta: [
      { title: "Đề thi — LingoMaster" },
      {
        name: "description",
        content: "Danh sách đề thi Aptis, VSTEP, IELTS, TOEIC kèm thời lượng, số câu hỏi và số lượt làm bài.",
      },
      { property: "og:title", content: "Đề thi — LingoMaster" },
      { property: "og:description", content: "Chọn đề thi phù hợp và luyện theo từng phần." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExamsPage,
});

function ExamsPage() {
  const [filter, setFilter] = useState("Tất cả");
  const [query, setQuery] = useState("");

  const list = examSets.filter(
    (e) =>
      (filter === "Tất cả" || e.exam === filter) &&
      e.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <PageHeader
        icon={FileText}
        title="Đề thi"
        description="Bộ đề luyện tập được cập nhật liên tục, làm từng phần hoặc trọn đề."
        actions={
          <Link to="/mock-test">
            <BtnPrimary>
              <Play className="h-4 w-4" /> Vào thi thử
            </BtnPrimary>
          </Link>
        }
      />

      <div className="surface-card flex flex-wrap items-center gap-3 p-4">
        <label className="relative flex h-11 min-w-[240px] flex-1 items-center">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm đề thi theo tên..."
            className="h-full w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <BtnOutline className="h-11">
          <SlidersHorizontal className="h-4 w-4" /> Bộ lọc
        </BtnOutline>
      </div>

      <div className="flex flex-wrap gap-2">
        {examFilters.map((f) => (
          <TabPill key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </TabPill>
        ))}
      </div>

      <SectionTitle title="Danh sách đề" badge={`${list.length} đề`} />

      <div className="space-y-3">
        {list.map((e) => (
          <article key={e.id} className="surface-card flex flex-wrap items-center gap-4 p-5">
            <span className="icon-tile">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{e.name}</h3>
                {e.isNew ? <Pill tone="success">Mới</Pill> : null}
                <Pill tone="primary">{e.exam}</Pill>
                <Pill tone="muted">{e.level}</Pill>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {e.minutes} phút
                </span>
                <span className="flex items-center gap-1.5">
                  <ListChecks className="h-3.5 w-3.5" /> {e.questions} câu · {e.parts} phần
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {e.attempts.toLocaleString("vi-VN")} lượt làm
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <BtnOutline className="h-10">Luyện theo phần</BtnOutline>
              <BtnPrimary className="h-10">
                <Play className="h-4 w-4" /> Làm đề
              </BtnPrimary>
            </div>
          </article>
        ))}

        {list.length === 0 ? (
          <p className="surface-card p-6 text-center text-sm text-muted-foreground">
            Không tìm thấy đề thi phù hợp.
          </p>
        ) : null}
      </div>
    </div>
  );
}
