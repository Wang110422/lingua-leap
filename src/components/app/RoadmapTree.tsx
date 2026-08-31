import { Link } from "@tanstack/react-router";
import { CheckCircle2, Lock, Play, Trophy, Flag } from "lucide-react";

import { Pill, Progress } from "@/components/app/ui-bits";
import type { RoadmapStage, RoadmapTask } from "@/data/mock";

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
          <span className="block font-bold text-foreground">{task.score ? `${task.score}đ` : "--"}</span>
          <span className="block text-muted-foreground">≥{task.minScore}</span>
        </span>
      )}
      {task.status === "current" && <Play className="h-4 w-4 flex-none text-primary" />}
    </div>
  );

  return (
    <li className="relative flex" style={{ paddingLeft: `${offset}px` }}>
      {locked ? <div className="cursor-not-allowed">{inner}</div> : <Link {...link} className="block">{inner}</Link>}
    </li>
  );
}

function StageDivider({ order, name }: { order: number; name: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="h-px flex-1 bg-border" />
      <span className="text-center">
        <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Chặng {order}
        </span>
        <span className="mt-1 block font-display text-lg font-bold text-foreground">{name}</span>
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function RoadmapTree({ stages }: { stages: RoadmapStage[] }) {
  if (!stages.length) {
    return (
      <p className="surface-card p-6 text-sm text-muted-foreground">
        Lộ trình này chưa có chặng nào. Hãy tạo chặng đầu tiên để bắt đầu.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {stages.map((stage) => {
        const done = stage.tasks.filter((t) => t.status === "done").length;
        const stagePct = Math.round((done / stage.tasks.length) * 100);
        const isFinal = stage.order === stages.length;
        return (
          <div key={stage.id} className="space-y-4">
            <StageDivider order={stage.order} name={stage.name} />

            <section className="surface-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="flex items-center gap-2 font-bold">
                  {isFinal ? (
                    <Trophy className="h-5 w-5 text-warning" />
                  ) : (
                    <Flag className="h-5 w-5 text-primary" />
                  )}
                  {stage.goal}
                </h3>
                <Pill tone="muted" className="ml-auto">
                  {done}/{stage.tasks.length} task · {stagePct}%
                </Pill>
              </div>
              <div className="mt-3">
                <Progress value={stagePct} />
              </div>

              <ol className="mt-6 flex flex-col gap-3">
                {stage.tasks.map((t, i) => (
                  <TaskNode key={t.id} task={t} offset={(i % 6) * 26} />
                ))}
              </ol>

              {isFinal && (
                <p className="mt-5 rounded-2xl bg-warning-soft px-4 py-3 text-sm font-semibold text-warning">
                  Cần đạt tối thiểu {stage.tasks[0]?.minScore ?? 70} điểm mỗi đề để hoàn thành lộ trình.
                </p>
              )}
            </section>
          </div>
        );
      })}
    </div>
  );
}
