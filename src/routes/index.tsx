import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Bell, Trophy, Flame, Play, MoreHorizontal, Medal } from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { Avatar, EmojiTile, Pill, Progress } from "@/components/app/ui-bits";
import { cardSets, classUpdates, currentUser, homeStats, leaderboard, reviewCard, roadmaps } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trang chủ — LingoMaster" },
      { name: "description", content: "Theo dõi streak, lộ trình đang học, thư viện bộ thẻ và lịch ôn từ vựng hôm nay." },
      { property: "og:title", content: "Trang chủ — LingoMaster" },
      { property: "og:description", content: "Tổng quan việc học từ vựng: streak, lộ trình, thư viện và lịch ôn hôm nay." },
    ],
  }),
  component: Home,
});

const today = new Intl.DateTimeFormat("vi-VN", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date());

const aiFeatures = [
  { icon: PenLine, title: "Writing AI", desc: "Chấm bài viết, sửa lỗi và gợi ý bài mẫu." },
  { icon: Mic, title: "Speaking AI", desc: "Nhận xét transcript, điểm mạnh và cách nói tốt hơn." },
  { icon: MessageCircle, title: "Lingo", desc: "Hỏi nhanh ngữ pháp, từ vựng và cách làm bài." },
];

function Home() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="surface-card flex flex-col justify-center p-6 sm:p-9">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold text-primary">
            <Sparkles className="h-4 w-4" /> LingoMaster Aptis ESOL
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Luyện Aptis theo bộ đề, học mẹo nhanh và nhận nhận xét AI sau khi làm bài
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Web hỗ trợ Reading, Listening, Speaking, Writing và Grammar với giao diện luyện thi rõ
            ràng. Phần Writing và Speaking có chấm AI để ước tính điểm, CEFR, chỉ ra lỗi chính và gợi
            ý cách cải thiện bài làm.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/exams"
              className="inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-pop transition hover:opacity-90"
            >
              Vào bộ đề <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/mock-test"
              className="inline-flex h-12 items-center rounded-2xl border border-border bg-card px-6 text-sm font-bold transition hover:bg-muted"
            >
              Thi thử AI
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {aiFeatures.map((f) => (
            <article key={f.title} className="surface-card p-5">
              <span className="icon-tile">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="space-y-8">
        <section className="surface-card overflow-hidden p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{today}</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Chào {currentUser.name.split(" ")[0]}, học tiếp nhé 👋
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Hôm nay bạn muốn ôn lại thẻ cũ hay khám phá một chủ đề từ vựng mới?
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {homeStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-muted/40 p-4">
                <span className="text-lg">{s.emoji}</span>
                <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="space-y-4">
          <SectionTitle
            title="Tiếp tục học"
            badge={String(roadmaps.length)}
            right={
              <Link to="/roadmap" className="text-sm font-semibold text-primary hover:underline">
                Quản lý Lộ trình →
              </Link>
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roadmaps.map((r) => (
              <article key={r.id} className="surface-card flex flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <EmojiTile>{r.emoji}</EmojiTile>
                  <Pill tone={r.level === "Nâng cao" ? "warning" : r.level === "Trung bình" ? "info" : "success"}>
                    {r.level}
                  </Pill>
                </div>
                <h3 className="mt-4 font-bold">{r.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {r.done}/{r.total} mốc đã hoàn thành
                </p>
                <div className="mt-3">
                  <Progress value={(r.done / r.total) * 100} />
                </div>
                <Link
                  to="/roadmap"
                  className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  <Play className="h-4 w-4" /> Học tiếp
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle
            title="Thư viện của bạn"
            right={
              <Link to="/library" className="text-sm font-semibold text-primary hover:underline">
                Xem tất cả →
              </Link>
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cardSets.map((s) => (
              <article key={s.id} className="surface-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <EmojiTile>{s.emoji}</EmojiTile>
                  <button
                    type="button"
                    aria-label="Tùy chọn"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="mt-4 font-bold">{s.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {s.terms} thuật ngữ · cập nhật {s.updated}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <section className="surface-card p-5">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-[18px] w-[18px] text-primary" />
            <h2 className="text-base font-bold">Lịch ôn hôm nay</h2>
            <Pill className="ml-auto" tone="muted">
              {reviewCard.due}/{reviewCard.total} thẻ
            </Pill>
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/60 px-4 py-8 text-center">
            <p className="font-display text-2xl font-bold">{reviewCard.term}</p>
            <button
              type="button"
              className="mt-4 rounded-full border border-primary/30 bg-card px-4 py-2 text-xs font-semibold text-primary"
            >
              Xem nghĩa
            </button>
          </div>
        </section>

        <section className="surface-card p-5">
          <div className="flex items-center gap-2">
            <Bell className="h-[18px] w-[18px] text-primary" />
            <h2 className="text-base font-bold">Cập nhật lớp học</h2>
          </div>
          <ul className="mt-4 space-y-4">
            {classUpdates.map((u) => (
              <li key={u.name} className="flex gap-3">
                <Avatar initial={u.initial} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm leading-snug">
                    <span className="font-bold">{u.name}</span> {u.text}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{u.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card p-5">
          <div className="flex items-center gap-2">
            <Trophy className="h-[18px] w-[18px] text-warning" />
            <h2 className="text-base font-bold">Bảng xếp hạng</h2>
          </div>
          <ul className="mt-4 space-y-2">
            {leaderboard.map((p) => (
              <li
                key={p.rank}
                className={`flex items-center gap-3 rounded-xl px-2 py-2 ${
                  p.me ? "border-l-4 border-primary bg-primary-soft/70" : ""
                }`}
              >
                <span className="w-6 text-center text-sm font-bold text-muted-foreground">
                  {p.rank <= 3 ? <Medal className="mx-auto h-4 w-4 text-warning" /> : p.rank}
                </span>
                <Avatar initial={p.initial} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{p.name}</p>
                  <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Flame className="h-3 w-3 text-destructive" /> {p.streak} ngày
                  </p>
                </div>
                <span className="font-display text-sm font-bold">{p.score}</span>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
