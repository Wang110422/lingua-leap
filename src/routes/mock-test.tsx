import { createFileRoute, Link } from "@tanstack/react-router";
import { Timer, Sparkles, Play, Trophy, BarChart3, RotateCcw } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, Progress } from "@/components/app/ui-bits";
import { examSets, mockResults, mockSkillScores } from "@/data/mock";

export const Route = createFileRoute("/mock-test")({
  head: () => ({
    meta: [
      { title: "Thi thử — LingoMaster" },
      {
        name: "description",
        content: "Thi thử bấm giờ như thi thật, nhận nhận xét AI và theo dõi điểm từng kỹ năng.",
      },
      { property: "og:title", content: "Thi thử — LingoMaster" },
      { property: "og:description", content: "Bài thi thử có bấm giờ, chấm điểm và phân tích kỹ năng." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MockTestPage,
});

function MockTestPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        icon={Timer}
        title="Thi thử"
        description="Mô phỏng phòng thi thật: bấm giờ, khóa phần đã làm và chấm điểm tự động."
        actions={
          <BtnPrimary>
            <Play className="h-4 w-4" /> Bắt đầu thi thử
          </BtnPrimary>
        }
      />

      <div className="surface-card flex flex-wrap items-center gap-4 bg-primary-soft p-5">
        <EmojiTile>🤖</EmojiTile>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">Nhận xét từ AI sau bài thi gần nhất</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Kỹ năng Writing của bạn mất điểm ở phần liên kết câu. Hãy luyện thêm 2 bài viết email
            trước lần thi tiếp theo.
          </p>
        </div>
        <BtnOutline className="h-10">
          <Sparkles className="h-4 w-4" /> Xem nhận xét chi tiết
        </BtnOutline>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <section className="space-y-3">
          <SectionTitle icon={Play} title="Chọn đề để thi thử" badge={`${examSets.length} đề`} />
          <div className="space-y-3">
            {examSets.slice(0, 4).map((e) => (
              <article key={e.id} className="surface-card flex flex-wrap items-center gap-4 p-5">
                <span className="icon-tile">
                  <Timer className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{e.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Pill tone="primary">{e.exam}</Pill>
                    <Pill tone="info">{e.minutes} phút</Pill>
                    <Pill tone="muted">{e.questions} câu</Pill>
                  </div>
                </div>
                <BtnPrimary className="h-10">Thi ngay</BtnPrimary>
              </article>
            ))}
          </div>
          <Link to="/exam-practice" className="inline-block">
            <BtnOutline className="h-10">Xem tất cả đề thi</BtnOutline>
          </Link>
        </section>

        <aside className="space-y-6">
          <section className="surface-card space-y-4 p-5">
            <SectionTitle icon={BarChart3} title="Điểm theo kỹ năng" />
            {mockSkillScores.map((s) => (
              <div key={s.skill} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{s.skill}</span>
                  <span className="text-muted-foreground">{s.value}/100</span>
                </div>
                <Progress value={s.value} />
              </div>
            ))}
          </section>

          <section className="surface-card space-y-3 p-5">
            <SectionTitle icon={Trophy} title="Kết quả gần đây" />
            {mockResults.map((r) => (
              <div key={r.id} className="rounded-2xl border border-border p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-semibold">{r.name}</h4>
                  <Pill tone="success">{r.band}</Pill>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {r.date} · {r.correct}/{r.total} câu đúng · {r.score}
                </p>
                <div className="mt-3 flex gap-2">
                  <BtnOutline className="h-9 px-4">Xem lại</BtnOutline>
                  <BtnOutline className="h-9 px-4">
                    <RotateCcw className="h-3.5 w-3.5" /> Thi lại
                  </BtnOutline>
                </div>
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
