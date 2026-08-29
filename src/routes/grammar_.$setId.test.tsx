import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { Pill, Progress } from "@/components/app/ui-bits";
import { grammarCourses, grammarStudySets } from "@/data/mock";

export const Route = createFileRoute("/grammar_/$setId/test")({
  head: () => ({
    meta: [
      { title: "Kiểm tra ngữ pháp — LingoMaster" },
      {
        name: "description",
        content:
          "Làm bài kiểm tra trắc nghiệm ngữ pháp: chấm điểm tự động, xem giải thích chi tiết cho từng câu.",
      },
      { property: "og:title", content: "Kiểm tra ngữ pháp — LingoMaster" },
      {
        property: "og:description",
        content: "Bài kiểm tra trắc nghiệm ngữ pháp với chấm điểm và giải thích chi tiết.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrammarTest;
});

function GrammarTest() {
  const { setId } = Route.useParams();
  const set = grammarStudySets.find((s) => s.id === setId) ?? grammarStudySets[0]!;
  const course = grammarCourses[set.id] ?? grammarCourses["g1"]!;

  const questions = useMemo(
    () => course.topics.map((t) => ({ topic: t.name, ...t.quiz })),
    [course],
  );

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const score = questions.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);
  const percent = Math.round((score / questions.length) * 100);

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          to="/grammar/$setId"
          params={{ setId: set.id }}
          className="inline-flex items-center gap-2 font-semibold hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {set.name}
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">Kiểm tra</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold sm:text-[28px]">Kiểm tra: {set.name}</h1>
            <Pill tone="info">{questions.length} câu</Pill>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Chọn đáp án đúng cho từng câu, sau đó nộp bài để xem điểm và giải thích.
          </p>
        </div>
        <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>{submitted ? "Kết quả" : "Đã trả lời"}</span>
            <span className="text-primary">
              {submitted ? `${score}/${questions.length}` : `${answered}/${questions.length}`}
            </span>
          </div>
          <div className="mt-3">
            <Progress
              value={submitted ? percent : Math.round((answered / questions.length) * 100)}
            />
          </div>
        </div>
      </div>

      {submitted ? (
        <section className="surface-card flex flex-wrap items-center gap-4 p-5">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <Trophy className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-bold">
              Bạn đúng {score}/{questions.length} câu ({percent}%)
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {percent >= 80
                ? "Rất tốt! Bạn đã nắm vững chủ điểm này."
                : percent >= 50
                  ? "Khá ổn, hãy xem lại các câu sai để chắc kiến thức hơn."
                  : "Hãy học lại lý thuyết rồi kiểm tra lại nhé."}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-bold transition hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" /> Làm lại
          </button>
        </section>
      ) : null}

      <SectionTitle title="Câu hỏi" badge={`${questions.length}`} />

      <div className="space-y-4">
        {questions.map((q, qi) => {
          const picked = answers[qi];
          return (
            <article key={`${q.topic}-${qi}`} className="surface-card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-muted text-xs font-bold">
                  {qi + 1}
                </span>
                <Pill tone="muted">{q.topic}</Pill>
              </div>
              <p className="mt-3 text-sm font-bold">{q.question}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, i) => {
                  const isPicked = picked === i;
                  const isAnswer = i === q.answer;
                  const state = !submitted
                    ? isPicked
                      ? "border-primary bg-primary-soft"
                      : "border-border bg-card hover:border-primary/50"
                    : isAnswer
                      ? "border-success bg-success/10"
                      : isPicked
                        ? "border-destructive bg-destructive/10"
                        : "border-border bg-card opacity-60";
                  return (
                    <button
                      key={o}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: i }))}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${state}`}
                    >
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-muted text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="min-w-0 flex-1">{o}</span>
                      {submitted && isAnswer ? (
                        <CheckCircle2 className="h-4 w-4 flex-none text-success" />
                      ) : null}
                      {submitted && isPicked && !isAnswer ? (
                        <XCircle className="h-4 w-4 flex-none text-destructive" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
              {submitted ? (
                <div className="mt-3 rounded-2xl bg-muted px-4 py-3 text-sm">
                  <p className="font-bold">{picked === q.answer ? "Chính xác!" : "Chưa đúng."}</p>
                  <p className="mt-1 text-muted-foreground">{q.explain}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {!submitted ? (
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={answered === 0}
            onClick={() => setSubmitted(true)}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            <CheckCircle2 className="h-4 w-4" /> Nộp bài
          </button>
          <span className="text-xs text-muted-foreground">
            Còn {questions.length - answered} câu chưa trả lời
          </span>
        </div>
      ) : null}
    </div>
  );
}
