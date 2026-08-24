import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Play, Clock, Layers, Sparkles } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, Progress } from "@/components/app/ui-bits";
import { practiceSkills, practiceVocabModes } from "@/data/mock";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Luyện tập kỹ năng — LingoMaster" },
      {
        name: "description",
        content: "Luyện tập Listening, Speaking, Reading, Writing và từ vựng theo từng dạng bài ngắn mỗi ngày.",
      },
      { property: "og:title", content: "Luyện tập kỹ năng — LingoMaster" },
      { property: "og:description", content: "Bài luyện tập theo 4 kỹ năng và các chế độ ôn từ vựng." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  return (
    <div className="space-y-7">
      <PageHeader
        icon={Dumbbell}
        title="Luyện tập"
        description="Chọn kỹ năng bạn muốn cải thiện, mỗi buổi chỉ 10–20 phút."
        actions={
          <BtnPrimary>
            <Sparkles className="h-4 w-4" /> Luyện tập gợi ý hôm nay
          </BtnPrimary>
        }
      />

      <section className="space-y-3">
        <SectionTitle title="Luyện theo kỹ năng" badge="4 kỹ năng" />
        <div className="grid gap-4 sm:grid-cols-2">
          {practiceSkills.map((s) => (
            <article key={s.id} className="surface-card flex flex-col gap-4 p-5">
              <div className="flex items-start gap-3">
                <EmojiTile>{s.emoji}</EmojiTile>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="muted">
                  <Layers className="h-3.5 w-3.5" /> {s.sets} bộ bài
                </Pill>
                <Pill tone="info">
                  <Clock className="h-3.5 w-3.5" /> ~{s.minutes} phút
                </Pill>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>Tiến độ</span>
                  <span>{s.progress}%</span>
                </div>
                <Progress value={s.progress} />
              </div>

              <div className="flex flex-wrap gap-2">
                <BtnPrimary className="h-10">
                  <Play className="h-4 w-4" /> Bắt đầu luyện
                </BtnPrimary>
                <BtnOutline className="h-10">Xem bài đã làm</BtnOutline>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle title="Luyện từ vựng" badge="4 chế độ" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {practiceVocabModes.map((m) => (
            <article key={m.id} className="surface-card flex flex-col gap-3 p-5">
              <EmojiTile>{m.emoji}</EmojiTile>
              <div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
              </div>
              <BtnOutline className="mt-auto h-10">Luyện ngay</BtnOutline>
            </article>
          ))}
        </div>
      </section>

      <div className="surface-card flex flex-wrap items-center gap-4 p-5">
        <EmojiTile>📝</EmojiTile>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">Bạn đã sẵn sàng làm đề đầy đủ?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Chuyển sang phần Đề thi để luyện theo từng đề hoặc vào Thi thử để bấm giờ như thi thật.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/exams">
            <BtnOutline className="h-10">Đề thi</BtnOutline>
          </Link>
          <Link to="/mock-test">
            <BtnPrimary className="h-10">Thi thử</BtnPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
}
