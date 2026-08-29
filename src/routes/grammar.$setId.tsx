import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpenText,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Lightbulb,
  ListChecks,
  Quote,
  XCircle,
} from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { EmojiTile, Pill, Progress } from "@/components/app/ui-bits";
import { grammarCourses, grammarStudySets } from "@/data/mock";

export const Route = createFileRoute("/grammar/$setId")({
  head: () => ({
    meta: [
      { title: "Học ngữ pháp — LingoMaster" },
      {
        name: "description",
        content:
          "Học từng chủ điểm ngữ pháp với công thức, cách dùng, ví dụ song ngữ và bài tập kiểm tra nhanh.",
      },
      { property: "og:title", content: "Học ngữ pháp — LingoMaster" },
      {
        property: "og:description",
        content: "Công thức, cách dùng, ví dụ và bài tập nhanh cho từng chủ điểm ngữ pháp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrammarDetail,
});

function GrammarDetail() {
  const { setId } = Route.useParams();
  const set = grammarStudySets.find((s) => s.id === setId) ?? grammarStudySets[0]!;
  const course = grammarCourses[set.id] ?? grammarCourses["g1"]!;
  const topics = course.topics;

  const [activeId, setActiveId] = useState(topics[0]!.id);
  const [done, setDone] = useState<string[]>([]);
  const [picked, setPicked] = useState<number | null>(null);

  const topic = useMemo(
    () => topics.find((t) => t.id === activeId) ?? topics[0]!,
    [activeId, topics],
  );
  const index = topics.findIndex((t) => t.id === topic.id);
  const percent = Math.round((done.length / topics.length) * 100);
  const correct = picked !== null && picked === topic.quiz.answer;

  const select = (id: string) => {
    setActiveId(id);
    setPicked(null);
  };

  const complete = () => {
    setDone((d) => (d.includes(topic.id) ? d : [...d, topic.id]));
    const next = topics[index + 1];
    if (next) select(next.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/lessons" className="inline-flex items-center gap-2 font-semibold hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Bài học
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{set.name}</span>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <EmojiTile>{set.emoji}</EmojiTile>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold sm:text-[28px]">{set.name}</h1>
            <Pill tone="info">{set.level}</Pill>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{course.overview}</p>
        </div>
        <Link
          to="/grammar/$setId/test"
          params={{ setId: set.id }}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          <FileCheck2 className="h-4 w-4" /> Kiểm tra
        </Link>
        <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Tiến độ chủ điểm</span>
            <span className="text-primary">{percent}%</span>
          </div>
          <div className="mt-3">
            <Progress value={percent} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Đã hoàn thành {done.length}/{topics.length} chủ điểm
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="surface-card h-fit p-4">
          <SectionTitle title="Chủ điểm" badge={`${topics.length}`} />
          <div className="mt-3 space-y-1.5">
            {topics.map((t, i) => {
              const active = t.id === topic.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => select(t.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-lg text-xs font-bold ${
                      active ? "bg-primary-foreground/20" : "bg-muted"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{t.name}</span>
                  {done.includes(t.id) ? (
                    <CheckCircle2 className={`h-4 w-4 flex-none ${active ? "" : "text-success"}`} />
                  ) : null}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="space-y-5">
          <article className="overflow-hidden rounded-3xl border border-border bg-muted/40">
            <div className="bg-primary px-6 py-5 text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                Chủ điểm {index + 1}/{topics.length}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">{topic.name}</h2>
              <div className="mt-3 rounded-2xl bg-primary-foreground/12 px-4 py-3 font-mono text-sm">
                {topic.formula}
              </div>
            </div>

            <div className="space-y-5 p-6">
              <section>
                <h3 className="flex items-center gap-2 text-sm font-bold">
                  <ListChecks className="h-4 w-4 text-primary" /> Cách dùng
                </h3>
                <div className="mt-3 space-y-2">
                  {topic.usage.map((u) => (
                    <div
                      key={u}
                      className="flex items-start gap-3 rounded-2xl bg-card px-4 py-3 text-sm font-semibold"
                    >
                      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-none text-success" />
                      <span>{u}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-2 text-sm font-bold">
                  <Quote className="h-4 w-4 text-primary" /> Ví dụ
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {topic.examples.map((e) => (
                    <div key={e.en} className="rounded-2xl bg-card px-4 py-3">
                      <p className="text-sm font-semibold">{e.en}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{e.vi}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="flex items-start gap-3 rounded-2xl border border-warning/40 bg-warning/10 px-4 py-3">
                <Lightbulb className="mt-0.5 h-[18px] w-[18px] flex-none text-warning" />
                <p className="text-sm font-semibold">{topic.notes}</p>
              </section>
            </div>
          </article>

          <article className="surface-card p-6">
            <SectionTitle title="Kiểm tra nhanh" badge="1 câu" />
            <p className="mt-3 text-sm font-bold">{topic.quiz.question}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {topic.quiz.options.map((o, i) => {
                const isPicked = picked === i;
                const isAnswer = i === topic.quiz.answer;
                const state =
                  picked === null
                    ? "border-border bg-card hover:border-primary"
                    : isAnswer
                      ? "border-success bg-success/10"
                      : isPicked
                        ? "border-destructive bg-destructive/10"
                        : "border-border bg-card opacity-60";
                return (
                  <button
                    key={o}
                    type="button"
                    disabled={picked !== null}
                    onClick={() => setPicked(i)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${state}`}
                  >
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-muted text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="min-w-0 flex-1">{o}</span>
                    {picked !== null && isAnswer ? (
                      <CheckCircle2 className="h-4 w-4 flex-none text-success" />
                    ) : null}
                    {picked !== null && isPicked && !isAnswer ? (
                      <XCircle className="h-4 w-4 flex-none text-destructive" />
                    ) : null}
                  </button>
                );
              })}
            </div>

            {picked !== null ? (
              <div className="mt-4 rounded-2xl bg-muted px-4 py-3 text-sm">
                <p className="font-bold">{correct ? "Chính xác!" : "Chưa đúng rồi."}</p>
                <p className="mt-1 text-muted-foreground">{topic.quiz.explain}</p>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={complete}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                <BookOpenText className="h-4 w-4" />
                {index === topics.length - 1 ? "Hoàn thành bộ" : "Hoàn thành & học tiếp"}
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPicked(null)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border px-5 text-sm font-bold transition hover:bg-muted"
              >
                Làm lại câu hỏi
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
