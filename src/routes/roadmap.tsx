import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Route as RouteIcon,
  Plus,
  Trash2,
  CalendarDays,
  Layers,
  Gauge,
} from "lucide-react";

import { PageHeader } from "@/components/app/PageHeader";
import { RoadmapTree } from "@/components/app/RoadmapTree";
import { BtnPrimary, EmojiTile, Progress } from "@/components/app/ui-bits";
import { roadmaps, roadmapStages } from "@/data/mock";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Lộ trình học — LingoMaster" },
      { name: "description", content: "Theo dõi các chặng và task trong lộ trình học từ vựng cá nhân hóa của bạn." },
      { property: "og:title", content: "Lộ trình học — LingoMaster" },
      { property: "og:description", content: "Lộ trình học chia theo chặng, có task từ vựng, ngữ pháp, kỹ năng và luyện đề." },
    ],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const [selected, setSelected] = useState(roadmaps[0]!.id);
  const active = roadmaps.find((r) => r.id === selected) ?? roadmaps[0]!;
  const stages = roadmapStages[active.id] ?? [];
  const allTasks = stages.flatMap((s) => s.tasks);
  const totalDone = allTasks.filter((t) => t.status === "done").length;
  const taskPct = allTasks.length ? Math.round((totalDone / allTasks.length) * 100) : 0;


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

          <RoadmapTree stages={stages} />

        </div>
      </div>
    </div>
  );
}
