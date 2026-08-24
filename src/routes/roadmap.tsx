import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Route as RouteIcon,
  Plus,
  Trash2,
  CalendarDays,
  Layers,
  Gauge,
  Pin,
  BookOpen,
  Target,
  ChevronRight,
} from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { Avatar, BtnPrimary, EmojiTile, Progress } from "@/components/app/ui-bits";
import { cardSets, roadmaps } from "@/data/mock";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Lộ trình học — LingoMaster" },
      { name: "description", content: "Theo dõi các mốc bộ thẻ trong lộ trình học từ vựng cá nhân hóa của bạn." },
      { property: "og:title", content: "Lộ trình học — LingoMaster" },
      { property: "og:description", content: "Lộ trình học từ vựng theo mốc, có tiến độ và mức độ khó." },
    ],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const [selected, setSelected] = useState(roadmaps[0]!.id);
  const active = roadmaps.find((r) => r.id === selected) ?? roadmaps[0]!;
  const milestones = cardSets.slice(0, active.total > 5 ? 5 : active.total);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={RouteIcon}
        title="Lộ trình học của tôi"
        description="Chia nhỏ mục tiêu thành các mốc bộ thẻ để học đều mỗi ngày."
        actions={
          <BtnPrimary>
            <Plus className="h-4 w-4" /> Tạo lộ trình học mới
          </BtnPrimary>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-3">
          {roadmaps.map((r) => {
            const pct = Math.round((r.done / r.total) * 100);
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelected(r.id)}
                className={`group surface-card w-full p-4 text-left transition ${
                  r.id === selected ? "border-primary ring-2 ring-primary/25" : "hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <EmojiTile>{r.emoji}</EmojiTile>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">{r.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {r.days} ngày · {r.level}
                    </p>
                  </div>
                  <Trash2 className="h-4 w-4 flex-none text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {r.done}/{r.total} mốc
                  </span>
                  <span className="font-bold">{pct}%</span>
                </div>
                <div className="mt-2">
                  <Progress value={pct} />
                </div>
              </button>
            );
          })}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border py-5 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <Plus className="h-4 w-4" /> Tạo lộ trình mới
          </button>
        </div>

        <div className="space-y-5">
          <section className="surface-card p-6">
            <div className="flex items-start gap-4">
              <EmojiTile>{active.emoji}</EmojiTile>
              <div className="min-w-0">
                <h2 className="text-xl font-bold">{active.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{active.description}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" /> {active.days} ngày
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Layers className="h-4 w-4 text-primary" /> {active.total} mốc bộ thẻ
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Gauge className="h-4 w-4 text-primary" /> {active.level}
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="font-semibold">Tiến trình hoàn thành mốc</span>
              <span className="text-muted-foreground">
                {active.done}/{active.total} mốc hoàn thành ({Math.round((active.done / active.total) * 100)}%)
              </span>
            </div>
            <div className="mt-2">
              <Progress value={(active.done / active.total) * 100} />
            </div>
          </section>

          <section className="surface-card p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="flex items-center gap-2 font-bold">
                <Pin className="h-[18px] w-[18px] text-primary" /> Các mốc bộ thẻ trong lộ trình
              </h3>
              <span className="ml-auto text-xs text-muted-foreground">Nhấp vào mốc để bắt đầu học bộ thẻ</span>
            </div>

            <ul className="mt-4 space-y-3">
              {milestones.map((m, i) => (
                <li key={m.id} className="rounded-2xl border border-border p-4 transition hover:border-primary/50">
                  <div className="flex items-start gap-3">
                    <span className="icon-tile font-display text-sm font-bold">#{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold">{m.name}</p>
                      <div className="mt-1 flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5" /> {m.terms} thuật ngữ
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Target className="h-3.5 w-3.5" /> Học: {Math.min(m.terms, 20 + i * 5)}/{m.terms} · Kiểm tra:{" "}
                          {i < active.done ? m.terms : 0}/{m.terms}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 flex-none text-muted-foreground" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-xs">
                    <Avatar initial={active.author.charAt(0)} size="sm" />
                    <span className="text-muted-foreground">Tác giả: {active.author}</span>
                    <span className="ml-auto font-semibold text-primary">Vào học bộ thẻ →</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
