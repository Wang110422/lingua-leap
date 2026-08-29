import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  Layers,
  Repeat,
  Star,
  Volume2,
} from "lucide-react";

import { SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, Progress } from "@/components/app/ui-bits";
import { cardSets, vocabulary } from "@/data/mock";

export const Route = createFileRoute("/sets/$setId")({
  head: () => ({
    meta: [
      { title: "Bộ từ vựng — LingoMaster" },
      {
        name: "description",
        content: "Học bộ từ vựng với thẻ ghi nhớ, chế độ học, kiểm tra và danh sách thuật ngữ chi tiết.",
      },
      { property: "og:title", content: "Bộ từ vựng — LingoMaster" },
      { property: "og:description", content: "Thẻ ghi nhớ, chế độ học và danh sách thuật ngữ của bộ từ vựng." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SetDetail,
});

const modes = [
  { id: "flashcard", name: "Thẻ ghi nhớ", desc: "Lật thẻ ôn nhanh", icon: Layers },
  { id: "learn", name: "Học", desc: "Học theo vòng lặp", icon: Brain },
  { id: "test", name: "Kiểm tra", desc: "Làm bài đánh giá", icon: FileCheck2 },
  { id: "match", name: "Ghép cặp", desc: "Nối từ với nghĩa", icon: Repeat },
];

function SetDetail() {
  const { setId } = Route.useParams();
  const set = cardSets.find((s) => s.id === setId) ?? cardSets[0]!;

  const words = useMemo(() => vocabulary, []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState("flashcard");
  const card = words[index]!;

  const go = (dir: number) => {
    setFlipped(false);
    setIndex((i) => (i + dir + words.length) % words.length);
  };

  const learned = 42;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/library" className="inline-flex items-center gap-2 font-semibold hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Thư viện của bạn
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{set.name}</span>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <EmojiTile>{set.emoji}</EmojiTile>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold sm:text-[28px]">{set.name}</h1>
            {set.folder ? <Pill tone="muted">{set.folder}</Pill> : null}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{set.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <BtnOutline>
            <FileCheck2 className="h-4 w-4" /> Kiểm tra
          </BtnOutline>
          <BtnPrimary>
            <BookOpen className="h-4 w-4" /> Học ngay
          </BtnPrimary>
        </div>
      </div>

      <section className="surface-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold">Tiến độ bộ thẻ</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Đã thuộc {learned}/{set.terms} thuật ngữ · cập nhật {set.updated}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <Pill tone="success">Đã thuộc {learned}</Pill>
            <Pill tone="warning">Cần ôn 12</Pill>
            <Pill tone="info">Chưa học {Math.max(0, set.terms - learned - 12)}</Pill>
          </div>
        </div>
        <div className="mt-4">
          <Progress value={Math.round((learned / set.terms) * 100)} />
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {modes.map((m) => {
          const Icon = m.icon;
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`surface-card flex items-center gap-3 p-4 text-left transition ${
                active ? "border-primary ring-2 ring-primary/25" : "hover:border-primary/40"
              }`}
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold">{m.name}</span>
                <span className="block text-xs text-muted-foreground">{m.desc}</span>
              </span>
            </button>
          );
        })}
      </div>

      <SectionTitle
        icon={Layers}
        title="Thẻ ghi nhớ"
        badge={`${index + 1}/${words.length}`}
        right={<span className="text-xs font-semibold text-primary">Nhấp vào thẻ để xem nghĩa</span>}
      />

      <div className="surface-card p-5">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="flex min-h-56 w-full flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-muted/40 px-6 py-10 text-center transition hover:border-primary/40"
        >
          {flipped ? (
            <>
              <p className="text-xl font-bold">{card.vi}</p>
              <p className="max-w-xl text-sm text-muted-foreground italic">“{card.example}”</p>
            </>
          ) : (
            <>
              <p className="font-display text-3xl font-bold">{card.word}</p>
              {card.ipa ? <p className="text-sm text-muted-foreground">{card.ipa}</p> : null}
              <div className="flex gap-2">
                <Pill tone="info">{card.cefr}</Pill>
                <Pill tone="muted">{card.pos}</Pill>
              </div>
            </>
          )}
        </button>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-label="Thẻ trước"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Phát âm"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Lưu từ"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-warning-soft hover:text-warning"
            >
              <Star className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Thẻ sau"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <SectionTitle icon={BookOpen} title="Danh sách thuật ngữ" badge={String(words.length)} />

      <div className="grid gap-3 lg:grid-cols-2">
        {words.map((w, i) => (
          <article
            key={w.word}
            className={`surface-card flex items-start gap-4 p-4 ${i === index ? "border-primary/50" : ""}`}
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold">{w.word}</h3>
                {w.ipa ? <span className="text-xs text-muted-foreground">{w.ipa}</span> : null}
                <Pill tone="info">{w.cefr}</Pill>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{w.vi}</p>
              <p className="mt-1 text-xs text-muted-foreground italic">{w.example}</p>
            </div>
            <button
              type="button"
              aria-label="Phát âm"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
