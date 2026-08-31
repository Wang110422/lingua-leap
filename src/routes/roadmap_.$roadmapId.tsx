import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronLeft,
  CheckCircle2,
  Lock,
  Play,
  Trophy,
  Flag,
  Layers,
  CalendarDays,
  Gauge,
} from "lucide-react";

import { Pill, Progress } from "@/components/app/ui-bits";
import { roadmaps, roadmapStages, type RoadmapTask } from "@/data/mock";

export const Route = createFileRoute("/roadmap_/$roadmapId")({
  loader: ({ params }) => {
    const roadmap = roadmaps.find((r) => r.id === params.roadmapId);
    if (!roadmap) throw notFound();
    return { roadmap };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Không tìm thấy lộ trình" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.roadmap.name} — Cây lộ trình | LingoMaster`;
    const description = `Cây lộ trình ${loaderData.roadmap.name}: chia thành từng chặng với các task từ vựng, ngữ pháp, nghe, đọc và luyện đề.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RoadmapTreePage,
});

function taskLink(task: RoadmapTask) {
  if (task.kind === "vocab" && task.targetId) {
    return { to: "/sets/$setId" as const, params: { setId: task.targetId } };
  }
  if (task.kind === "grammar" && task.targetId) {
    return { to: "/grammar/$setId" as const, params: { setId: task.targetId } };
  }
  if (task.kind === "exam") return { to: "/exam-practice" as const };
  return { to: "/lessons" as const };
}

function TaskNode({ task, offset }: { task: RoadmapTask; offset: number }) {
  const link = taskLink(task);
  const locked = task.status === "locked";
  const tone =
    task.status === "done"
      ? "border-success/40 bg-success-soft/60"
      : task.status === "current"
        ? "border-primary bg-card ring-4 ring-primary/20 shadow-pop"
        : "border-dashed border-border bg-muted/50";

  const inner = (
    <div
      className={`flex w-full max-w-[420px] items-center gap-3 rounded-2xl border px-4 py-3 transition ${tone} ${
        locked ? "opacity-70" : "hover:-translate-y-0.5 hover:border-primary"
      }`}
    >
      <span
        className={`flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-dashed text-lg ${
          task.status === "locked" ? "border-border bg-card" : "border-primary/50 bg-primary-soft"
        }`}
      >
        {locked ? <Lock className="h-4 w-4 text-muted-foreground" /> : task.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Task {task.index}
          </span>
          {task.status === "done" && <CheckCircle2 className="h-3.5 w-3.5 text-success" />}
        </span>
        <span className="block truncate text-sm font-bold text-foreground">{task.title}</span>
        <span className="block truncate text-xs text-muted-foreground">{task.detail}</span>
      </span>
      {task.kind === "exam" && (
        <span className="flex-none text-right text-xs">
          <span className="block font-bold text-foreground">
            {task.score ? `${task.score}đ` : "--"}
          </span>
          <span className="block text-muted-foreground">≥{task.minScore}</span>
        </span>
      )}
      {task.status === "current" && <Play className="h-4 w-4 flex-none text-primary" />}
    </div>
  );

  return (
    <li
      className="relative flex"
      style={{ paddingLeft: `${offset}px` }}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-full w-full" aria-hidden />
      {locked ? (
        <div className="cursor-not-allowed">{inner}</div>
      ) : (
        <Link {...link} className="block">
          {inner}
        </Link>
      )}
    </li>
  );
}

function RoadmapTreePage() {
  const { roadmap } = Route.useLoaderData();
  const stages = roadmapStages[roadmap.id] ?? [];
  const [activeStage, setActiveStage] = useState(
    stages.find((s) => s.tasks.some((t) => t.status !== "done"))?.id ?? stages[0]?.id ?? "",
  );
  const stage = stages.find((s) => s.id === activeStage) ?? stages[0];

  const allTasks = stages.flatMap((s) => s.tasks);
  const totalDone = allTasks.filter((t) => t.status === "done").length;
  const pct = allTasks.length ? Math.round((totalDone / allTasks.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/roadmap" className="inline-flex items-center gap-1 font-semibold hover:text-primary">
          <ChevronLeft className="h-4 w-4" /> Lộ trình học
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{roadmap.name}</span>
      </div>

      <section className="surface-card overflow-hidden">
        <div className="bg-primary px-6 py-6 text-primary-foreground">
          <div className="flex flex-wrap items-start gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-2xl">
              {roadmap.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-2xl font-bold">{roadmap.name}</h1>
              <p className="mt-1 max-w-2xl text-sm text-primary-foreground/85">{roadmap.description}</p>
              <div className="mt-3 flex flex-wrap gap-5 text-xs text-primary-foreground/85">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" /> {roadmap.days} ngày
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="h-4 w-4" /> {stages.length} chặng · {allTasks.length} task
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-4 w-4" /> {roadmap.level}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Tiến độ toàn lộ trình</span>
            <span className="text-muted-foreground">
              {totalDone}/{allTasks.length} task ({pct}%)
            </span>
          </div>
          <Progress value={pct} />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-3">
          {stages.map((s) => {
            const done = s.tasks.filter((t) => t.status === "done").length;
            const stagePct = Math.round((done / s.tasks.length) * 100);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStage(s.id)}
                className={`surface-card w-full p-4 text-left transition ${
                  s.id === stage?.id ? "border-primary ring-2 ring-primary/25" : "hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary-soft text-xl">
                    {s.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">{s.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.goal}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {done}/{s.tasks.length} task
                  </span>
                  <span className="font-bold">{stagePct}%</span>
                </div>
                <div className="mt-2">
                  <Progress value={stagePct} />
                </div>
              </button>
            );
          })}
        </div>

        {stage && (
          <section className="surface-card p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                {stage.order === stages.length ? (
                  <Trophy className="h-5 w-5 text-warning" />
                ) : (
                  <Flag className="h-5 w-5 text-primary" />
                )}
                {stage.name}
              </h2>
              <Pill tone="muted" className="ml-auto">
                {stage.tasks.length} task
              </Pill>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stage.goal}</p>

            <ol className="mt-6 flex flex-col gap-3">
              {stage.tasks.map((t, i) => (
                <TaskNode key={t.id} task={t} offset={(i % 6) * 26} />
              ))}
            </ol>

            {stage.order === stages.length && (
              <p className="mt-5 rounded-2xl bg-warning-soft px-4 py-3 text-sm font-semibold text-warning">
                Cần đạt tối thiểu {stage.tasks[0]?.minScore ?? 70} điểm mỗi đề để hoàn thành lộ trình.
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
